import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="content-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-semibold">{siteConfig.name}</Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">{siteConfig.tagline} Built around verification, risk controls, and clear access paths for SMEs, investors, and institutions.</p>
          </div>
          <FooterList title="Platform" items={siteConfig.footer.company} />
          <FooterList title="Resources" items={siteConfig.footer.resources} />
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. This platform is in concept/pilot stage and is not yet offering regulated financial products. Funding is subject to review, verification, eligibility, and applicable legal and regulatory requirements. Investor participation involves risk. Returns are not guaranteed. <Link to="/admin-preview" className="ml-0 block pt-3 text-slate-500 hover:text-slate-300 md:inline md:pl-3 md:pt-0">Internal preview</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return <div><h4 className="mb-4 text-sm font-semibold text-white">{title}</h4><ul className="space-y-3">{items.map((item) => <li key={item.href}><Link to={item.href} className="text-sm text-slate-300 hover:text-white">{item.label}</Link></li>)}</ul></div>;
}
