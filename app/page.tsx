import AuthNavigation from "../components/AuthNavigation";

export default function Home() {
  const clerkConfigured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
  );
  return (
    <main className="shell">
      <header className="header">
        <div className="brand">
          <span className="brandLogo">CC<span>26</span></span>
          <div>
            <strong>Mi festival</strong>
            <small>Corona Capital · Viernes 20</small>
          </div>
        </div>
        <AuthNavigation enabled={clerkConfigured} />
      </header>
      <iframe
        className="plannerFrame"
        title="Itinerario interactivo del Corona Capital 2026"
        src="/planner.html?embed=1"
      />
      <div className="footerLine">
        <span>Tu selección se guarda en este navegador.</span>
        <span>La sincronización entre dispositivos todavía no está conectada.</span>
      </div>
    </main>
  );
}
