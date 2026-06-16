import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="content-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-amber-300">CAF</span>
          <span className="hidden sm:block">{siteConfig.name}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-slate-950 ${location.pathname === item.href ? "text-slate-950" : "text-slate-500"}`}>
              {item.label}
            </Link>
          ))}
          <Button size="sm" asChild className="bg-teal-700 text-white hover:bg-teal-800">
            <Link to="/request-access">Request Access</Link>
          </Button>
        </nav>
        <button className="lg:hidden rounded-md p-2 text-slate-950" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="content-container flex flex-col gap-4 py-6">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className={`text-base font-medium ${location.pathname === item.href ? "text-slate-950" : "text-slate-600"}`}>
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 w-full bg-teal-700 text-white hover:bg-teal-800" asChild>
              <Link to="/request-access" onClick={() => setMobileOpen(false)}>Request Access</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
