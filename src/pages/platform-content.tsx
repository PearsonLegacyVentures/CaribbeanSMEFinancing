import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileCheck2, Landmark, LineChart, ShieldCheck, UploadCloud, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", description);
    document.head.appendChild(meta);
  }, [title, description]);
  return null;
}

export function Hero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="overflow-hidden bg-slate-950 text-white"><div className="content-container grid gap-10 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24 lg:py-28"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild className="bg-teal-600 text-white hover:bg-teal-500"><Link to="/request-access">Request Access</Link></Button><Button size="lg" variant="outline" asChild className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-slate-950"><Link to="/how-it-works">See How It Works</Link></Button></div></div>{children || <ReceivableCard />}</div></section>;
}

export function Section({ eyebrow, title, description, children, dark = false }: { eyebrow?: string; title: string; description?: string; children: ReactNode; dark?: boolean }) {
  return <section className={dark ? "bg-slate-950 py-16 text-white md:py-24" : "py-16 md:py-24"}><div className="content-container"><div className="mb-10 max-w-3xl">{eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">{eyebrow}</p>}<h2 className={dark ? "text-3xl font-semibold text-white md:text-5xl" : "text-3xl font-semibold text-slate-950 md:text-5xl"}>{title}</h2>{description && <p className={dark ? "mt-4 text-lg leading-8 text-slate-300" : "mt-4 text-lg leading-8 text-slate-600"}>{description}</p>}</div>{children}</div></section>;
}

export function Card({ title, children, icon }: { title: string; children: ReactNode; icon?: ReactNode }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">{icon || <CheckCircle2 className="h-5 w-5" />}</div><h3 className="text-xl font-semibold text-slate-950">{title}</h3><div className="mt-3 text-sm leading-6 text-slate-600">{children}</div></div>;
}

export function Tags({ items }: { items: string[] }) { return <div className="flex flex-wrap gap-3">{items.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">{item}</span>)}</div>; }
export function List({ items }: { items: string[] }) { return <ul className="grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />{item}</li>)}</ul>; }
export function Steps({ items }: { items: string[] }) { return <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">{items.map((item, index) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="mb-4 text-sm font-semibold text-amber-600">{String(index + 1).padStart(2, "0")}</div><p className="font-medium text-slate-900">{item}</p></div>)}</div>; }

export function ReceivableCard() {
  const rows = [["Asset type", "Invoice"], ["Buyer type", "Hotel group"], ["Term", "60 days"], ["Status", "Under review"], ["Risk grade", "Pending"], ["Verification", "Documents submitted"]];
  return <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-950 shadow-2xl md:translate-y-8"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Receivable opportunity</p><h3 className="mt-2 text-2xl font-semibold">Hotel Supplier Invoice</h3></div><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Risk grade: Pending</span></div><div className="mt-6 grid gap-3">{rows.map(([label, value]) => <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm"><span className="text-slate-500">{label}</span><span className="font-medium text-slate-900">{value}</span></div>)}</div><p className="mt-5 text-xs leading-5 text-slate-500">Illustrative card only. No returns are displayed or implied.</p></div>;
}

export function Cta({ title, secondary = "Contact the Team" }: { title: string; secondary?: string }) { return <section className="bg-slate-100 py-14"><div className="content-container flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-950 p-8 text-white md:flex-row md:items-center md:p-10"><h2 className="max-w-2xl text-3xl font-semibold text-white">{title}</h2><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><Button asChild className="bg-teal-600 hover:bg-teal-500"><Link to="/request-access">Request Access</Link></Button><Button variant="outline" asChild className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-slate-950"><Link to="/request-access">{secondary}</Link></Button></div></div></section>; }

export const icons = { FileCheck2, LineChart, Landmark, ShieldCheck, Users, ArrowRight };

type IntakePath = "sme" | "investor" | "institution";

const intakePaths: Record<IntakePath, { label: string; eyebrow: string; description: string }> = {
  sme: {
    label: "SME seeking funding",
    eyebrow: "Working capital request",
    description: "Share the receivable, contract, booking, or recurring revenue you want reviewed for early access funding.",
  },
  investor: {
    label: "Investor / capital provider",
    eyebrow: "Capital provider intake",
    description: "Tell us where your capital interest, geography, and risk preferences may fit a verified Caribbean SME receivables platform.",
  },
  institution: {
    label: "Institution / development partner",
    eyebrow: "Partnership intake",
    description: "Start a structured conversation about pilots, guarantees, data partnerships, or sector-specific financing programs.",
  },
};

const riskDisclaimer = "Funding is subject to review, verification, eligibility, and applicable legal and regulatory requirements.";
const pilotDisclaimer = "This platform is in concept/pilot stage and is not yet offering regulated financial products.";

export function RequestAccessForm() {
  const [path, setPath] = useState<IntakePath>("sme");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Supabase table insert for structured intake submissions.
    // TODO: Email notification to the internal review team.
    // TODO: CRM record creation or update for follow-up tracking.
    // TODO: Secure document storage for uploaded invoices, contracts, bank statements, and supporting files.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-teal-200 bg-teal-50 p-8 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-slate-950">Request received.</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
          This is an early access platform. Our team will review your information and follow up.
        </p>
        <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm leading-6 text-slate-600">{riskDisclaimer} {pilotDisclaimer}</p>
        <Button onClick={() => setSent(false)} variant="outline" className="mt-6 border-teal-700 text-teal-800 hover:bg-teal-100">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Choose intake path</p>
        <div className="mt-5 grid gap-3">
          {(Object.keys(intakePaths) as IntakePath[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setPath(key)}
              className={`rounded-2xl border p-4 text-left transition ${path === key ? "border-teal-300 bg-white text-slate-950 shadow-lg" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`}
            >
              <span className="text-sm font-semibold">{intakePaths[key].label}</span>
              <span className={`mt-2 block text-sm leading-6 ${path === key ? "text-slate-600" : "text-slate-300"}`}>{intakePaths[key].description}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
          <p>{riskDisclaimer}</p>
          <p className="mt-3">Investor participation involves risk. Returns are not guaranteed.</p>
          <p className="mt-3">{pilotDisclaimer}</p>
        </div>
      </aside>

      <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <div className="mb-8 border-b border-slate-200 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">{intakePaths[path].eyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{intakePaths[path].label}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{intakePaths[path].description}</p>
        </div>
        {path === "sme" && <SMEFields />}
        {path === "investor" && <InvestorFields />}
        {path === "institution" && <InstitutionFields />}
        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
          <Checkbox id={`${path}-consent`} required />
          <Label htmlFor={`${path}-consent`} className="text-sm leading-6 text-slate-700">
            I consent to be contacted about this request and understand that submission does not represent approval, an offer of funding, or an investment recommendation.
          </Label>
        </div>
        <Button className="mt-6 w-full bg-teal-700 text-white hover:bg-teal-800" size="lg">Submit early access request</Button>
      </form>
    </div>
  );
}

function Field({ id, label, type = "text", required = true }: { id: string; label: string; type?: string; required?: boolean }) {
  return <div><Label htmlFor={id}>{label}</Label><Input id={id} name={id} type={type} required={required} className="mt-2" /></div>;
}

function SelectField({ id, label, placeholder, options }: { id: string; label: string; placeholder: string; options: string[] }) {
  return <div><Label>{label}</Label><Select required><SelectTrigger id={id} className="mt-2"><SelectValue placeholder={placeholder} /></SelectTrigger><SelectContent>{options.map((option) => <SelectItem key={option} value={option.toLowerCase().replaceAll(" ", "-")}>{option}</SelectItem>)}</SelectContent></Select></div>;
}

function DocumentUploadPlaceholders() {
  const uploads = ["Invoice / contract upload", "Bank statement upload", "Supporting documents upload"];
  return <div className="md:col-span-2"><Label>Document upload placeholders</Label><div className="mt-2 grid gap-3 md:grid-cols-3">{uploads.map((item) => <div key={item} className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center"><UploadCloud className="mx-auto h-6 w-6 text-teal-700" /><p className="mt-2 text-sm font-medium text-slate-800">{item}</p><p className="mt-1 text-xs leading-5 text-slate-500">Storage not active yet.</p></div>)}</div></div>;
}

function SMEFields() {
  return <div className="grid gap-5 md:grid-cols-2">
    <Field id="businessName" label="Business name" /><Field id="contactName" label="Contact name" />
    <Field id="email" label="Email" type="email" /><Field id="phone" label="Phone" type="tel" />
    <Field id="country" label="Country" /><Field id="industry" label="Industry" />
    <SelectField id="fundingAssetType" label="Funding asset type" placeholder="Select asset type" options={["Invoice", "Contract", "Purchase order", "Tourism booking", "Recurring revenue", "Other"]} />
    <Field id="amountRequested" label="Amount requested" />
    <Field id="buyerDebtorName" label="Buyer / debtor name" /><Field id="expectedPaymentDate" label="Expected payment date" type="date" />
    <div className="md:col-span-2"><Label htmlFor="shortDescription">Short description</Label><Textarea id="shortDescription" name="shortDescription" required className="mt-2 min-h-32" /></div>
    <DocumentUploadPlaceholders />
  </div>;
}

function InvestorFields() {
  return <div className="grid gap-5 md:grid-cols-2">
    <Field id="investorName" label="Name" /><Field id="investorEmail" label="Email" type="email" />
    <Field id="organization" label="Organization" />
    <SelectField id="investorType" label="Investor type" placeholder="Select investor type" options={["Individual investor", "Family office", "Credit fund", "Bank", "Development finance institution", "Other"]} />
    <Field id="capitalInterest" label="Approximate capital interest" /><Field id="countriesInterest" label="Countries of interest" />
    <Field id="riskPreference" label="Risk preference" />
    <div className="md:col-span-2"><Label htmlFor="investorMessage">Message</Label><Textarea id="investorMessage" name="investorMessage" required className="mt-2 min-h-32" /></div>
  </div>;
}

function InstitutionFields() {
  return <div className="grid gap-5 md:grid-cols-2">
    <Field id="institutionName" label="Name" /><Field id="institutionEmail" label="Email" type="email" />
    <Field id="institutionOrganization" label="Organization" /><Field id="institutionCountry" label="Country" />
    <SelectField id="institutionType" label="Institution type" placeholder="Select institution type" options={["Government", "Development bank", "SME agency", "Chamber of commerce", "Tourism authority", "Commercial bank", "Donor-funded program", "Other"]} />
    <SelectField id="partnershipInterest" label="Partnership interest" placeholder="Select partnership interest" options={["SME pilot", "Supplier finance program", "Government contractor financing", "Tourism receivables pilot", "First-loss guarantee structure", "Data/reporting partnership"]} />
    <div className="md:col-span-2"><Label htmlFor="institutionMessage">Message</Label><Textarea id="institutionMessage" name="institutionMessage" required className="mt-2 min-h-32" /></div>
  </div>;
}
