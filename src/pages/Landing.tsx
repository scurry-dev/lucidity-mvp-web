import { useState } from "react";
import logo from "@/assets/logo.png";
import productFull from "@/assets/product-full.png.asset.json";
import productTop from "@/assets/product-top.png.asset.json";

const SIGNUP_URL = "https://app.lucidityanalytics.com/signup";
const CALL_URL = "https://calendar.app.google/UJK9SbPPz1nxUbB36";

const dotColor = {
  mint: "bg-lp-mint",
  purple: "bg-lp-purple",
  blue: "bg-lp-blue",
} as const;

type Accent = keyof typeof dotColor;

const SectionLabel = ({ children, accent = "mint" }: { children: string; accent?: Accent }) => (
  <div className="mb-6 flex items-center gap-2.5">
    <span className={`h-1.5 w-1.5 rounded-full ${dotColor[accent]}`} />
    <span className="text-xs font-medium uppercase tracking-[0.18em] text-lp-faint">{children}</span>
  </div>
);

const PrimaryButton = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-md bg-lp-mint px-5 py-3 text-base font-semibold text-lp-bg transition-opacity hover:opacity-90"
  >
    {children}
  </a>
);

const SecondaryButton = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md border border-lp-line px-5 py-3 text-base font-medium text-lp-text transition-colors hover:border-lp-muted"
  >
    {children}
  </a>
);

const problems: { marker: string; accent: Accent; title: string; body: string }[] = [
  {
    marker: "01",
    accent: "mint",
    title: "The data is scattered by design",
    body: "Ads, analytics, commerce and CRM each expose a different schema, grain and attribution window. Joining them is a rebuild, not a merge.",
  },
  {
    marker: "02",
    accent: "purple",
    title: "Every report is assembled by hand",
    body: "Pull, clean, join, chart, write the narrative. Senior people spend the week assembling data instead of interpreting it.",
  },
  {
    marker: "03",
    accent: "blue",
    title: "Nothing carries forward",
    body: "Next cycle the same person repeats the same steps on new rows. One follow-up question restarts the whole process.",
  },
];

const outputPoints: { accent: Accent; title: string; body: string }[] = [
  {
    accent: "mint",
    title: "Every platform, one set of numbers.",
    body: "Meta, Google Ads and GA4 resolve to a single blended CPA and CTR. The reconciliation happens before anything reads it.",
  },
  {
    accent: "purple",
    title: "It includes recommendations, not just charts.",
    body: "Ranked moves for next month, each tied to a campaign and a number.",
  },
  {
    accent: "blue",
    title: "The structure is the reusable part.",
    body: "The next period uses the same sections and styling against new data. Nothing on the page gets rebuilt.",
  },
];

const platforms = [
  { category: "ADS", platforms: "Meta, Google Ads", live: true, note: "TikTok in development" },
  { category: "WEB", platforms: "GA4", live: true },
  { category: "E-COMMERCE", platforms: "Shopify", live: false },
  { category: "CRM", platforms: "HubSpot", live: false },
];

const steps = [
  {
    number: "01",
    title: "Connect your accounts.",
    body: "Securely authenticate and connect your ad platform accounts using OAuth 2.0. No passwords shared.",
  },
  {
    number: "02",
    title: "We sync your data.",
    body: "Lucidity retrieves campaign, ad group and ad-level data from your connected platforms via their APIs.",
  },
  {
    number: "03",
    title: "Data stored securely.",
    body: "Synced data is stored in our multi-tenant data warehouse, fully isolated per account.",
  },
  {
    number: "04",
    title: "Insights and dashboards.",
    body: "View performance through dashboard views with charts, visualizations and recommendations.",
  },
];

const tiers = [
  { name: "Starter", clients: "up to 3 clients", price: "$99", recommended: false },
  { name: "Agency", clients: "up to 12 clients", price: "$249", recommended: true },
  { name: "Agency Plus", clients: "up to 30 clients", price: "$549", recommended: false },
];

const included = [
  "Unlimited users, no seat fees",
  "One flat price per tier, no per-client meter",
  "Cross-platform data in one normalized layer",
  "Saved reports that rerun without rebuilding",
  "Daily automatic syncs",
  "Direct access to the founder during onboarding",
];

const audience = [
  "Solo to about 25 people, carrying ten to thirty client accounts",
  "Running paid search, paid social, e-commerce or email and CRM work",
  "The founder or a senior lead still builds or reviews the monthly reports",
  "Somebody on the team has seen proper reporting infrastructure from the inside and knows what is missing",
];

const StatusDot = ({ live }: { live: boolean }) =>
  live ? (
    <span className="h-2.5 w-2.5 rounded-full bg-lp-mint" />
  ) : (
    <span className="h-2.5 w-2.5 rounded-full border border-lp-faint" />
  );

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-lp-line/60 py-3 last:border-b-0">
    <span className="text-base text-lp-muted">{label}</span>
    <span className="text-base font-medium text-lp-text">{value}</span>
  </div>
);

const Landing = () => {
  const [imgOpen, setImgOpen] = useState(false);

  return (
    <div className="min-h-screen bg-lp-bg font-sans text-lp-text antialiased">
      <nav className="sticky top-0 z-50 border-b border-lp-line bg-lp-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Lucidity" className="h-7 w-7" />
            <span className="text-base font-semibold">Lucidity</span>
          </div>
          <a
            href="https://app.lucidityanalytics.com/login"
            className="rounded-md border border-lp-line px-4 py-2 text-sm font-medium text-lp-text transition-colors hover:border-lp-muted"
          >
            Log In
          </a>
        </div>
      </nav>

      <main>
        {/* 1. Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>LUCIDITY</SectionLabel>
              <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Build the client report once. Rerun it every month.
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-lp-muted">
                Lucidity connects your clients' ad, analytics and commerce accounts, normalizes the data so a
                conversion means the same thing everywhere, and keeps the report structure in place so the next
                period is a rerun instead of a rebuild.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton href={SIGNUP_URL}>Build your first report free</PrimaryButton>
                <SecondaryButton href={CALL_URL}>Book a 20-minute walkthrough</SecondaryButton>
              </div>
              <p className="mt-4 text-base text-lp-faint">
                Works inside Claude as an MCP connector, or as a standalone web app.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-lp-line bg-lp-panel">
              <img
                src={productTop.url}
                alt="Lucidity report header showing total clicks, conversions, spend and average CPC"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* 2. The problem */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel accent="purple">THE PROBLEM</SectionLabel>
            <h2 className="mb-12 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              The analysis is the work, and most teams rebuild it every month.
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {problems.map((p) => (
                <div key={p.marker}>
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${dotColor[p.accent]}`} />
                    <span className="text-xs font-medium tracking-[0.18em] text-lp-faint">{p.marker}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                  <p className="text-base leading-relaxed text-lp-muted">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-lp-line bg-lp-panel p-6">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-lp-faint">
                  One client, one monthly report today
                </p>
                <Row label="Data preparation" value="2 to 3 days" />
                <Row label="Analysis" value="half a day to a day" />
                <Row label="Visualization" value="half a day to a day" />
                <Row label="Follow-up question" value="starts over" />
              </div>
              <div className="rounded-lg border border-lp-mint bg-lp-highlight p-6">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-lp-mint">With Lucidity</p>
                <Row label="First report" value="hours, not days" />
                <Row label="Every rerun after" value="minutes" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. What it produces */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel accent="blue">THE OUTPUT</SectionLabel>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">This is what it produces.</h2>

            <button
              type="button"
              onClick={() => setImgOpen(true)}
              className="block w-full overflow-hidden rounded-lg border border-lp-line bg-lp-panel"
            >
              <img
                src={productFull.url}
                alt="Lucidity report with headline metrics, performance trend chart and conversion rates by platform"
                className="w-full"
              />
            </button>
            <p className="mt-3 text-sm text-lp-faint">
              Sample output. Google Ads, Meta and GA4. Demo account, not client data.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {outputPoints.map((p) => (
                <div key={p.title}>
                  <span className={`mb-3 block h-1.5 w-1.5 rounded-full ${dotColor[p.accent]}`} />
                  <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                  <p className="text-base leading-relaxed text-lp-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What connects */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel>PLATFORMS</SectionLabel>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
              Four categories, one normalized model.
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {platforms.map((p) => (
                <div key={p.category} className="rounded-lg border border-lp-line bg-lp-panel p-5">
                  <StatusDot live={p.live} />
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-lp-faint">{p.category}</p>
                  <p className="mt-2 text-base text-lp-text">{p.platforms}</p>
                  {p.note && <p className="mt-1 text-sm text-lp-faint">{p.note}</p>}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-lp-muted">
                <StatusDot live /> live
              </span>
              <span className="flex items-center gap-2 text-sm text-lp-muted">
                <StatusDot live={false} /> in build
              </span>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-lp-muted">
              Completing the four categories connects ad spend to web behavior to revenue to pipeline in one place.
              That is the difference between channel reporting and full-funnel reporting.
            </p>
          </div>
        </section>

        {/* 5. How it works */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel accent="purple">HOW IT WORKS</SectionLabel>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
              From connection to a finished report.
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.number} className="border-t border-lp-line pt-5">
                  <span className="text-xs font-medium tracking-[0.18em] text-lp-faint">{s.number}</span>
                  <h3 className="mb-2 mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="text-base leading-relaxed text-lp-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pricing */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel accent="blue">PRICING</SectionLabel>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Flat per tier. No per-client meter, no seat fees.
            </h2>
            <p className="mb-10 text-base text-lp-muted">
              Build your first report free. Pick a tier when you are ready to keep it.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`rounded-lg border p-6 ${
                    t.recommended ? "border-lp-mint bg-lp-highlight" : "border-lp-line bg-lp-panel"
                  }`}
                >
                  {t.recommended && (
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-lp-mint">Recommended</p>
                  )}
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="mt-1 text-base text-lp-muted">{t.clients}</p>
                  <p className="mt-5 text-3xl font-semibold">
                    {t.price} <span className="text-base font-normal text-lp-muted">/ month</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-lp-line bg-lp-panel p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-lp-faint">In every plan</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {included.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-lp-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lp-mint" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-lp-muted">
              A twelve-client roster spends close to two full-time people on reporting today. The Agency tier costs
              less than half a day of one of them.
            </p>
          </div>
        </section>

        {/* 7. Who it is for */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel>WHO IT IS FOR</SectionLabel>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">Built for boutique agencies.</h2>
            <ul className="grid max-w-4xl gap-4 sm:grid-cols-2">
              {audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-base leading-relaxed text-lp-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lp-mint" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Close */}
        <section className="border-t border-lp-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionLabel>GET STARTED</SectionLabel>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">Start with one client.</h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-lp-muted">
              Connect one account, build the first report free, and see what the rerun looks like next month. If you
              would rather have it set up with you, book a walkthrough and I will do it on the call.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href={SIGNUP_URL}>Build your first report free</PrimaryButton>
              <SecondaryButton href={CALL_URL}>Book a 20-minute walkthrough</SecondaryButton>
            </div>
            <a href="mailto:sean@lucidityapps.com" className="mt-6 inline-block text-base text-lp-muted hover:text-lp-text">
              sean@lucidityapps.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-lp-line">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="max-w-3xl text-sm leading-relaxed text-lp-faint">
            <strong className="font-semibold">What Lucidity does not do.</strong> Lucidity is a read-only reporting
            tool. We do not create, edit, or optimize ads on your behalf, and we do not manage bidding or make any
            changes to your ad accounts. Your campaigns remain fully under your control.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 border-t border-lp-line pt-6 text-sm text-lp-faint sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Lucidity" className="h-5 w-5" />
              <span>© 2025 Lucidity LLC. All rights reserved.</span>
            </div>
            <a
              href="https://www.lucidityanalytics.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-lp-text"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      {imgOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-lp-bg/95 p-6"
          onClick={() => setImgOpen(false)}
          role="presentation"
        >
          <img
            src={productFull.url}
            alt="Lucidity report, full view"
            className="max-h-full w-auto max-w-full rounded-lg border border-lp-line"
          />
        </div>
      )}
    </div>
  );
};

export default Landing;
