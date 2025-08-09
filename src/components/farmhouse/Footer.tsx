export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Serene Farmhouse Retreat</p>
        <p>Farmhouse Road, Your City, Your State</p>
      </div>
    </footer>
  );
}
