import { PageLayout } from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "./platform-content";

const opportunities = [
  { name: "Hotel Supplier Invoice", businessType: "Hospitality supplier", country: "Barbados", assetType: "Invoice", amount: "US$42,000", debtor: "Hotel group", term: "45–60 days", verification: "Documents submitted", grade: "Pending", status: "Initial review" },
  { name: "Government Contractor Receivable", businessType: "Facilities contractor", country: "Trinidad & Tobago", assetType: "Contract receivable", amount: "US$88,000", debtor: "Public sector agency", term: "60–90 days", verification: "Buyer confirmation needed", grade: "Moderate risk", status: "Verification queue" },
  { name: "Tourism Booking Revenue", businessType: "Tour operator", country: "Saint Lucia", assetType: "Tourism booking", amount: "US$27,500", debtor: "Travel marketplace", term: "30–45 days", verification: "Payment history review", grade: "Lower risk", status: "Risk review" },
  { name: "Monthly Service Contract", businessType: "B2B services firm", country: "Jamaica", assetType: "Recurring revenue", amount: "US$35,000", debtor: "Regional enterprise", term: "30 days", verification: "Contract uploaded", grade: "Higher risk", status: "More information requested" },
];

const riskFactors = ["Debtor quality", "Document strength", "SME operating history", "Industry risk", "Payment timing"];
const riskBadges = ["Pending", "Lower risk", "Moderate risk", "Higher risk"];

export default function AdminPreview() {
  return (
    <PageLayout>
      <SEO title="Internal Preview | Caribbean Alternative Finance" description="Internal non-production preview of intake opportunities and mock risk scoring." />
      <section className="bg-slate-950 py-14 text-white md:py-20">
        <div className="content-container">
          <Badge className="bg-amber-300 text-slate-950 hover:bg-amber-300">Internal Preview — Not Production</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">Opportunity review workspace</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Mock operational view for early-stage intake review. No authentication, approvals, live investor data, or funding decisions are represented here.</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="content-container grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
          <div className="grid gap-5">
            {opportunities.map((item) => <OpportunityCard key={item.name} item={item} />)}
          </div>
          <RiskScoringPanel />
        </div>
      </section>
    </PageLayout>
  );
}

function OpportunityCard({ item }: { item: typeof opportunities[number] }) {
  const rows = [
    ["Business type", item.businessType], ["Country", item.country], ["Asset type", item.assetType], ["Amount requested", item.amount],
    ["Buyer/debtor type", item.debtor], ["Expected payment term", item.term], ["Verification status", item.verification], ["Risk grade", item.grade], ["Current status", item.status],
  ];
  return <Card className="rounded-3xl border-slate-200 shadow-sm"><CardHeader className="border-b border-slate-100"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><CardTitle className="text-2xl text-slate-950">{item.name}</CardTitle><Badge variant="outline" className="w-fit border-slate-300 text-slate-700">{item.status}</Badge></div></CardHeader><CardContent className="grid gap-3 pt-6 sm:grid-cols-2 xl:grid-cols-3">{rows.map(([label, value]) => <div key={label} className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p><p className="mt-2 text-sm font-semibold text-slate-950">{value}</p></div>)}</CardContent></Card>;
}

function RiskScoringPanel() {
  return <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Mock risk scoring</p><h2 className="mt-3 text-2xl font-semibold text-slate-950">Review factors</h2><div className="mt-6 grid gap-3">{riskFactors.map((factor) => <div key={factor} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><span className="text-sm font-medium text-slate-800">{factor}</span><span className="h-2 w-16 rounded-full bg-slate-200" /></div>)}</div><h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Output badges</h3><div className="mt-4 flex flex-wrap gap-2">{riskBadges.map((badge) => <Badge key={badge} variant="outline" className="border-slate-300 text-slate-700">{badge}</Badge>)}</div><p className="mt-6 text-sm leading-6 text-slate-600">Risk labels are illustrative workflow states only. They do not indicate approval, guaranteed funding, expected return, or investment suitability.</p></aside>;
}
