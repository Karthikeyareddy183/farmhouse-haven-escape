-- Enable required extension
create extension if not exists pgcrypto;

-- Reusable updated_at trigger function
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Inquiries table: public insert, private read
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  preferred_date date,
  message text,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

-- Allow anyone (anon or authenticated) to submit an inquiry
drop policy if exists "Anyone can create inquiry" on public.inquiries;
create policy "Anyone can create inquiry"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

-- Bookings table: public readable for calendar, writes limited to authenticated
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  start_date date not null,
  end_date date not null,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bookings_valid_range check (end_date >= start_date)
);

alter table public.bookings enable row level security;

-- Everyone can read bookings for availability
drop policy if exists "Bookings are viewable by everyone" on public.bookings;
create policy "Bookings are viewable by everyone"
  on public.bookings
  for select
  using (true);

-- Only authenticated users can create/update/delete bookings (optional for future admin UI)
drop policy if exists "Authenticated can manage bookings" on public.bookings;
create policy "Authenticated can manage bookings"
  on public.bookings
  for all
  to authenticated
  using (true)
  with check (true);

-- Update updated_at on change
drop trigger if exists trg_bookings_updated_at on public.bookings;
create trigger trg_bookings_updated_at
before update on public.bookings
for each row execute function public.update_updated_at_column();

-- Realtime setup for bookings
alter table public.bookings replica identity full;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'bookings'
  ) then
    execute 'alter publication supabase_realtime add table public.bookings';
  end if;
end $$;