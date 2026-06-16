import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileCheck2, Landmark, LineChart, ShieldCheck, Users } from "lucide-react";
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

export function RequestAccessForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8"><h2 className="text-2xl font-semibold text-slate-950">Request received.</h2><p className="mt-3 text-slate-700">Our team will review your information and follow up.</p></div>;
  return <form onSubmit={(e) => { e.preventDefault(); /* TODO: Connect this front-end form to CRM/email automation or a secure backend endpoint. */ setSent(true); }} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
    {[["fullName","Full name"],["email","Email"],["phone","Phone"],["country","Country"],["company","Company / organization"],["interest","Approximate funding need or capital interest"]].map(([id,label]) => <div key={id}><Label htmlFor={id}>{label}</Label><Input id={id} type={id === "email" ? "email" : "text"} required={id === "fullName" || id === "email"} className="mt-2" /></div>)}
    <div><Label>I am a</Label><Select required><SelectTrigger className="mt-2"><SelectValue placeholder="Select audience" /></SelectTrigger><SelectContent><SelectItem value="sme">SME seeking funding</SelectItem><SelectItem value="investor">Investor / capital provider</SelectItem><SelectItem value="institution">Government / institution</SelectItem><SelectItem value="development">Development partner</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></div>
    <div><Label htmlFor="topic">What are you interested in?</Label><Input id="topic" className="mt-2" /></div>
    <div className="md:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" className="mt-2 min-h-32" /></div>
    <div className="flex items-start gap-3 md:col-span-2"><Checkbox id="consent" required /><Label htmlFor="consent" className="text-sm leading-5">I agree to be contacted about Caribbean Alternative Finance.</Label></div>
    <Button className="bg-teal-700 text-white hover:bg-teal-800 md:col-span-2" size="lg">Submit Request</Button>
  </form>;
}
