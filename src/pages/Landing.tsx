import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroShot from "@/assets/sample-report-hero.png.asset.json";
import fullShot from "@/assets/sample-report-full.png.asset.json";

const SIGNUP = "https://app.lucidityanalytics.com/signup";
const CALL = "https://calendar.app.google/UJK9SbPPz1nxUbB36";
const SHOT_ALT =
  "Lucidity cross-platform performance report for a sample client, showing headline metrics, campaign performance and an action plan.";

const problems = [
  {
    title: "The data is scattered by design",
    body: "Ads, analytics, commerce and CRM each expose a different schema, grain and attribution window. Joining them is a rebuild, not a merge.",
  },
  {
    title: "Every report is assembled by hand",
    body: "Pull, clean, join, chart, write the narrative. Senior people spend the week assembling data instead of interpreting it.",
  },
  {
    title: "Nothing carries forward",
    body: "Next cycle the same person repeats the same steps on new rows, and one follow-up question restarts the whole process.",
  },
];

const outputs = [
  {
    title: "Every platform, one set of numbers",
    body: "Meta, Google Ads and GA4 resolve to a single blended CPA and CTR, and the reconciliation happens before anything reads it.",
  },
  {
    title: "It includes recommendations, not just charts",
    body: "Ranked moves for next month, each tied to a campaign and a number.",
  },
  {
    title: "The structure is the reusable part",
    body: "The next period uses the same sections and styling against new data.",
  },
];

const steps = [
  { n: "01", title: "Connect your accounts", body: "OAuth 2.0, no passwords shared." },
  { n: "02", title: "We sync your data", body: "Campaign, ad group and ad-level data via each platform's API." },
  { n: "03", title: "Data stored securely", body: "A multi-tenant warehouse, fully isolated per account." },
  { n: "04", title: "Insights and dashboards", body: "Charts, visualizations and recommendations." },
];

const platforms = [
  { category: "Ads", name: "Meta", status: "Live" },
  { category: "Ads", name: "Google Ads", status: "Live" },
  { category: "Ads", name: "TikTok", status: "In development" },
  { category: "Web", name: "GA4", status: "Live" },
  { category: "E-commerce", name: "Shopify", status: "In build" },
  { category: "CRM", name: "HubSpot", status: "In build" },
];

const audience = [
  "Solo to about 25 people, carrying ten to thirty client accounts",
  "Running paid search, paid social, e-commerce or email and CRM work",
  "The founder or a senior lead still builds or reviews the monthly reports",
  "Somebody on the team has seen proper reporting infrastructure from the inside and knows what is missing",
];

const tiers = [
  { name: "Starter", clients: "up to 3 clients", price: "$99" },
  { name: "Agency", clients: "up to 12 clients", price: "$249", featured: true },
  { name: "Agency Plus", clients: "up to 30 clients", price: "$549" },
];

const included = [
  "Unlimited users",
  "Cross-platform data in one normalized layer",
  "Saved reports that rerun without rebuilding",
  "Daily automatic syncs",
  "Direct access to the founder during onboarding",
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-8 flex items-center gap-4">
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{children}</span>
    <span className="h-px flex-1 bg-border" />
  </div>
);

const Landing = () => {
  return (
    <div className="lucidity min-h-screen antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Lucidity" className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight">Lucidity</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://app.lucidityanalytics.com/login"
              className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Log in
            </a>
            <Button asChild size="sm">
              <a href={SIGNUP}>Build your first report free</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Build the client report once.{" "}
            <span className="text-primary">Rerun it every month.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lucidity connects your clients' ad, analytics and commerce accounts, normalizes the data so a
            conversion means the same thing everywhere, and keeps the report structure in place so the next
            period is a rerun instead of a rebuild.
          </p>
          <p className="mt-4 text-sm text-[hsl(var(--faint))]">
            Works inside Claude as an MCP connector, or as a standalone web app.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={SIGNUP}>Build your first report free</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <a href={CALL} target="_blank" rel="noopener noreferrer">
                Book a 20-minute intro call
              </a>
            </Button>
          </div>
        </div>

        {/* Hero artifact */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <figure className="overflow-x-auto rounded-xl border border-border bg-[hsl(var(--card))] p-2">
            <img
              src={heroShot.url}
              alt={SHOT_ALT}
              width={1600}
              height={667}
              className="block w-full min-w-[600px] rounded-lg"
            />
          </figure>
          <div className="mt-3">
            <a
              href="/sample-report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View the full report <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Why reporting eats the month</SectionLabel>
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-[hsl(var(--card))] p-6">
              <h3 className="mb-2 text-base font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          <div className="bg-[hsl(var(--card))] p-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              One client, today
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Two to three days of data preparation</li>
              <li>Half a day to a day of analysis</li>
              <li>Half a day to a day of visualization</li>
              <li>A follow-up question starts it over</li>
            </ul>
          </div>
          <div className="bg-[hsl(var(--raised))] p-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              One client, with Lucidity
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>The first report takes hours instead of days</li>
              <li>Every rerun after that takes minutes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>What the output is</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
            <div className="space-y-7">
              {outputs.map((o) => (
                <div key={o.title}>
                  <h3 className="mb-1.5 text-base font-semibold">{o.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                </div>
              ))}
              <div>
                <a
                  href="/sample-report.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View the full report <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <figure className="min-w-0">
              <div className="max-h-[620px] overflow-auto rounded-xl border border-border bg-background p-2">
                <img
                  src={fullShot.url}
                  alt={SHOT_ALT}
                  width={1600}
                  height={1743}
                  className="block w-full min-w-[600px] rounded-lg"
                />
              </div>
              <figcaption className="mt-3 text-xs text-[hsl(var(--faint))]">
                Sample output, condensed. Google Ads, Meta and GA4. Demo account, not client data.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>How it works</SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-[hsl(var(--card))] p-6">
              <div className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary">{s.n}</div>
              <h3 className="mb-1.5 text-base font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>Connections</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Four categories, one normalized model
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Ads, web, e-commerce and CRM. Completing them connects ad spend to web behavior to revenue to
                pipeline in one place, which is the difference between channel reporting and full-funnel
                reporting.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              {platforms.map((p, i) => {
                const live = p.status === "Live";
                return (
                  <div
                    key={p.name}
                    className={`flex items-center justify-between gap-4 bg-[hsl(var(--card))] px-5 py-4 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="w-24 shrink-0 text-xs uppercase tracking-[0.14em] text-[hsl(var(--faint))]">
                        {p.category}
                      </span>
                      <span className="text-sm font-medium">{p.name}</span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium ${
                        live
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border bg-[hsl(var(--raised))] text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          live ? "bg-primary" : "bg-[hsl(var(--faint))]"
                        }`}
                      />
                      {p.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Who it is for</SectionLabel>
        <ul className="grid gap-4 md:grid-cols-2">
          {audience.map((a) => (
            <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-[hsl(var(--card))] p-5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-muted-foreground">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>Pricing</SectionLabel>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A twelve-client roster spends close to two full-time people on reporting today. The Agency tier
            costs less than half a day of one of them. Flat per tier, billed to the agency. No per-client
            meter, no seat fees.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-xl border p-6 ${
                  t.featured
                    ? "border-primary/50 bg-[hsl(var(--raised))]"
                    : "border-border bg-[hsl(var(--card))]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold">{t.name}</h3>
                  {t.featured && (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tracking-tight">{t.price}</span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.clients}</p>
                <Button asChild variant={t.featured ? "default" : "outline"} className="mt-6 w-full">
                  <a href={SIGNUP}>Build your first report free</a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-[hsl(var(--card))] p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              In every plan
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Connect one account, build the first report free
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            See what the rerun looks like next month. If you would rather have it set up with you, book a
            walkthrough and I will do it on the call.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={SIGNUP}>Build your first report free</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <a href={CALL} target="_blank" rel="noopener noreferrer">
                Book a 20-minute intro call
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Questions?{" "}
            <a href="mailto:sean@lucidityapps.com" className="text-primary underline-offset-4 hover:underline">
              sean@lucidityapps.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-xl border border-border bg-[hsl(var(--card))] p-6">
            <h3 className="mb-2 text-sm font-semibold">What Lucidity does not do.</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lucidity is a read-only reporting tool. We do not create, edit, or optimize ads on your behalf,
              and we do not manage bidding or make any changes to your ad accounts. Your campaigns remain
              fully under your control.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-sm text-[hsl(var(--faint))] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Lucidity LLC. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a
                href="/sample-report.html"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Sample report
              </a>
              <a href="mailto:sean@lucidityapps.com" className="transition-colors hover:text-foreground">
                sean@lucidityapps.com
              </a>
              <a
                href="https://www.lucidityanalytics.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
