
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format, parseISO, isWithinInterval, startOfDay, endOfDay } from "date-fns";

interface Booking {
  id: string;
  start_date: string;
  end_date: string;
  note?: string;
}

export default function BookingCalendar() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("start_date", { ascending: true });

      if (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Failed to load booking information");
        return;
      }

      setBookings(data || []);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to load booking information");
    } finally {
      setLoading(false);
    }
  };

  const isDateBooked = (date: Date) => {
    return bookings.some(booking => {
      const startDate = startOfDay(parseISO(booking.start_date));
      const endDate = endOfDay(parseISO(booking.end_date));
      return isWithinInterval(date, { start: startDate, end: endDate });
    });
  };

  const getBookingForDate = (date: Date) => {
    return bookings.find(booking => {
      const startDate = startOfDay(parseISO(booking.start_date));
      const endDate = endOfDay(parseISO(booking.end_date));
      return isWithinInterval(date, { start: startDate, end: endDate });
    });
  };

  const selectedBooking = selectedDate ? getBookingForDate(selectedDate) : null;

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking Calendar</CardTitle>
          <CardDescription>Loading availability...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse bg-muted h-64 rounded"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Calendar</CardTitle>
        <CardDescription>Check availability and view existing bookings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          modifiers={{
            booked: (date) => isDateBooked(date),
          }}
          modifiersStyles={{
            booked: {
              backgroundColor: "hsl(var(--destructive))",
              color: "hsl(var(--destructive-foreground))",
            },
          }}
        />
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-destructive rounded"></div>
            <span>Booked dates</span>
          </div>
          
          {selectedDate && (
            <div className="p-3 border rounded-lg">
              <h4 className="font-medium">
                {format(selectedDate, "EEEE, MMMM d, yyyy")}
              </h4>
              {selectedBooking ? (
                <div className="mt-2 text-sm text-muted-foreground">
                  <p className="text-destructive font-medium">Not available</p>
                  <p>Booked from {format(parseISO(selectedBooking.start_date), "MMM d")} to {format(parseISO(selectedBooking.end_date), "MMM d, yyyy")}</p>
                  {selectedBooking.note && (
                    <p className="mt-1 italic">Note: {selectedBooking.note}</p>
                  )}
                </div>
              ) : (
                <p className="mt-2 text-sm text-green-600 font-medium">Available for booking</p>
              )}
            </div>
          )}
        </div>

        {bookings.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium mb-3">Upcoming Bookings</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {bookings
                .filter(booking => new Date(booking.end_date) >= new Date())
                .slice(0, 5)
                .map((booking) => (
                  <div key={booking.id} className="text-sm p-2 bg-muted rounded">
                    <span className="font-medium">
                      {format(parseISO(booking.start_date), "MMM d")} - {format(parseISO(booking.end_date), "MMM d, yyyy")}
                    </span>
                    {booking.note && (
                      <p className="text-muted-foreground mt-1">{booking.note}</p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
