import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight, Clock, RotateCcw, ArrowRight, XCircle, CheckCircle2, Layers, FileText, Repeat, Menu, X, Lock } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  siMeta,
  siGoogleads,
  siTiktok,
  siGoogleanalytics,
  siShopify,
  siHubspot,
} from "simple-icons";

const siMicrosoftads = {
  title: "Microsoft Ads",
  slug: "microsoftads",
  hex: "F25022",
  path: "M0 0h11.377v11.377H0zm12.623 0H24v11.377H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z",
};

const siLinkedin = {
  title: "LinkedIn",
  slug: "linkedin",
  hex: "0A66C2",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

const siKlaviyo = {
  title: "Klaviyo",
  slug: "klaviyo",
  hex: "00D688",
  path: "M0 0h24l-8 12 8 12H0z",
};

const siGooglesearchconsole = {
  title: "Google Search Console",
  slug: "googlesearchconsole",
  hex: "458CF5",
  path: "M18 2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM12 7a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4zM6.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM1.3 20.9l3.5-3.5 1.4 1.4-3.5 3.5z",
};


const SIGNUP = "https://app.lucidityanalytics.com/signup";
const CALL = "https://calendar.app.google/UJK9SbPPz1nxUbB36";
const SHOT_ALT =
  "Lucidity cross-platform performance report for a sample client, showing headline metrics, campaign performance and an action plan.";

const problems = [
  {
    title: "No more scattered data",
    icon: Layers,
    tone: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "No more hand-built reports",
    icon: FileText,
    tone: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "No more starting over",
    icon: Repeat,
    tone: "text-accent",
    bg: "bg-accent/10",
  },
];

const outputs = [
  {
    title: "Every source, one set of numbers",
    body: "Cross-channel metrics resolve to a single blended CPA and CTR, and the reconciliation happens before anything reads it.",
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
  { category: "Ads", name: "Meta", icon: siMeta, tone: "text-accent", bg: "bg-accent/10", border: "group-hover:border-accent/40" },
  { category: "Ads", name: "Google Ads", icon: siGoogleads, tone: "text-accent", bg: "bg-accent/10", border: "group-hover:border-accent/40" },
  { category: "Ads", name: "Microsoft Ads", icon: siMicrosoftads, tone: "text-accent", bg: "bg-accent/10", border: "group-hover:border-accent/40" },
  { category: "Ads", name: "LinkedIn Ads", icon: siLinkedin, tone: "text-accent", bg: "bg-accent/10", border: "group-hover:border-accent/40" },
  { category: "Ads", name: "TikTok", icon: { ...siTiktok, hex: "EE1D52" }, tone: "text-accent", bg: "bg-accent/10", border: "group-hover:border-accent/40" },
  { category: "Web", name: "GA4", icon: siGoogleanalytics, tone: "text-secondary", bg: "bg-secondary/10", border: "group-hover:border-secondary/40" },
  { category: "Web", name: "Google Search Console", icon: siGooglesearchconsole, tone: "text-secondary", bg: "bg-secondary/10", border: "group-hover:border-secondary/40" },
  { category: "E-commerce", name: "Shopify", icon: siShopify, tone: "text-primary", bg: "bg-primary/10", border: "group-hover:border-primary/40" },
  { category: "CRM", name: "HubSpot", icon: siHubspot, tone: "text-secondary", bg: "bg-secondary/10", border: "group-hover:border-secondary/40", comingSoon: true },
  { category: "CRM", name: "Klaviyo", icon: siKlaviyo, tone: "text-secondary", bg: "bg-secondary/10", border: "group-hover:border-secondary/40" },
];

const BrandMark = ({ icon, tone, bg }: { icon: { path: string; hex: string; title: string }; tone: string; bg: string }) => (
  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border ${bg} transition-colors duration-300 group-hover:border-current`}>
    <svg
      role="img"
      aria-label={`${icon.title} logo`}
      viewBox="0 0 24 24"
      className={`h-5 w-5 fill-current text-muted-foreground opacity-70 transition-all duration-300 group-hover:${tone} group-hover:opacity-100`}
    >
      <path d={icon.path} />
    </svg>
  </span>
);




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

const navLinks = [
  { href: "#output", label: "What you get" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#connections", label: "Connections" },
  { href: "#pricing", label: "Pricing" },
];

const useScrollReveal = () => {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
};

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportLoaded, setReportLoaded] = useState(false);
  useScrollReveal();

  return (
    <div className="lucidity min-h-screen antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Lucidity" className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight">Lucidity</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://app.lucidityanalytics.com/login"
              className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Log in
            </a>
            <Button asChild size="sm" className="transition-transform duration-200 hover:-translate-y-0.5">
              <a href={SIGNUP}>Build your first report free</a>
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://app.lucidityanalytics.com/login"
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:hidden"
              >
                Log in
              </a>
            </div>
          </div>
        )}
      </nav>


      {/* Hero */}
      <header id="top" className="relative overflow-x-clip border-b border-border">
        {/* Depth: grid + radial wash */}
        <div className="lucidity-grid pointer-events-none absolute inset-x-0 top-0 h-[620px]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[480px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
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
            <Button asChild size="lg" className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
              <a href={SIGNUP}>Build your first report free</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50">
              <a href={CALL} target="_blank" rel="noopener noreferrer">
                Book a 20-minute intro call
              </a>
            </Button>
          </div>
        </div>

        {/* Hero artifact */}
        <div className="relative mx-auto max-w-6xl overflow-x-clip px-6 pb-16">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-secondary/10 blur-[120px]" />

          <figure className="relative overflow-hidden rounded-2xl border border-border bg-[hsl(var(--card))] shadow-2xl shadow-black/30 ring-1 ring-white/5">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-border bg-[hsl(var(--muted))] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex h-7 max-w-md flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-[hsl(var(--background))] px-4 text-[11px] text-[hsl(var(--faint))]">
                <Lock className="h-3 w-3" />
                app.lucidityanalytics.com/report/acme-paid-media
              </div>
            </div>

            {/* Scrollable live report (responsive: the HTML adapts to mobile) */}
            <div className="relative bg-[hsl(var(--card))] p-2">
              {/* Loading skeleton */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-2 z-10 overflow-hidden rounded-lg bg-[hsl(var(--raised))] transition-opacity duration-500 ${
                  reportLoaded ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="animate-pulse space-y-4 p-6">
                  <div className="h-5 w-1/3 rounded bg-[hsl(var(--border))]" />
                  <div className="h-3 w-1/2 rounded bg-[hsl(var(--border))]/70" />
                  <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-20 rounded-lg bg-[hsl(var(--border))]/60" />
                    ))}
                  </div>
                  <div className="h-40 rounded-lg bg-[hsl(var(--border))]/50" />
                  <div className="h-28 rounded-lg bg-[hsl(var(--border))]/40" />
                </div>
              </div>
              <iframe
                src="/sample-report.html"
                title={SHOT_ALT}
                loading="lazy"
                scrolling="yes"
                onLoad={() => setReportLoaded(true)}
                className="block h-[520px] w-full rounded-lg border-0 bg-white md:h-[580px]"
                style={{ WebkitOverflowScrolling: 'touch' }}
              />
            </div>


          </figure>

          <div className="relative mt-4 flex items-center gap-4 text-sm text-[hsl(var(--faint))]">
            <span>Scroll the report to see the full output</span>
            <a
              href="/sample-report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              Open standalone <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section data-reveal className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>No more reporting pain</SectionLabel>

        <div className="relative grid gap-4 md:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative flex flex-col items-center rounded-2xl border border-border bg-[hsl(var(--card))] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-black/20"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${p.bg} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className={`h-7 w-7 ${p.tone}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold leading-snug tracking-tight">{p.title}</h3>

                {/* Connector arrows between cards (desktop only) */}
                {i < problems.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-4 w-4 text-[hsl(var(--faint))]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section data-reveal className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>From days to minutes</SectionLabel>

          <div className="relative grid gap-4 md:grid-cols-2">
            {/* VS badge */}
            <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[hsl(var(--background))] text-xs font-bold uppercase tracking-wider text-muted-foreground shadow-lg">
                vs
              </div>
            </div>

            {/* Today */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[hsl(var(--card))] p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <XCircle className="h-3.5 w-3.5" />
                    One client, today
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">Assembled by hand</h3>
                </div>
                <div className="rounded-full border border-border bg-[hsl(var(--raised))] px-3 py-1 text-xs font-semibold text-muted-foreground">
                  3–5 days
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Data preparation", time: "2–3 days", width: "w-full", tone: "bg-muted-foreground/40" },
                  { label: "Analysis", time: "½–1 day", width: "w-2/3", tone: "bg-muted-foreground/30" },
                  { label: "Visualization", time: "½–1 day", width: "w-2/3", tone: "bg-muted-foreground/30" },
                  { label: "Follow-up restarts it", time: "loop", width: "w-1/3", tone: "bg-destructive/40", loop: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-28 shrink-0 text-xs text-muted-foreground sm:w-32">{item.label}</div>
                    <div className="flex flex-1 items-center gap-3">
                      <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-[hsl(var(--raised))]">
                        <div className={`h-full rounded-full ${item.width} ${item.tone}`} />
                      </div>
                      <div className="flex w-20 shrink-0 items-center justify-end gap-1.5 text-xs font-medium text-muted-foreground">
                        {item.loop && <RotateCcw className="h-3 w-3" />}
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-xl border border-dashed border-border bg-[hsl(var(--raised))] px-4 py-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-[hsl(var(--faint))]" />
                <span>One follow-up question starts the process over.</span>
              </div>
            </div>

            {/* With Lucidity */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-[hsl(var(--raised))] p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-[60px]" />
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    One client, with Lucidity
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">Built once, rerun monthly</h3>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Hours → minutes
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "First report", time: "hours", width: "w-1/4" },
                  { label: "Every rerun", time: "minutes", width: "w-1/6", loop: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-28 shrink-0 text-xs text-muted-foreground sm:w-32">{item.label}</div>
                    <div className="flex flex-1 items-center gap-3">
                      <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-[hsl(var(--card))]">
                        <div className={`h-full rounded-full bg-primary ${item.width}`} />
                      </div>
                      <div className="flex w-20 shrink-0 items-center justify-end gap-1.5 text-xs font-medium text-primary">
                        {item.loop && <RotateCcw className="h-3 w-3" />}
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/20 bg-[hsl(var(--card))] px-4 py-3 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                <span>The structure stays in place. Only the data changes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Output */}
      <section id="output" data-reveal className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>What the output is</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                A report that explains itself
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                One reusable structure. Deliver it as a single-page web report, a slide deck, a PDF, a
                Word doc — whatever your client prefers. The narrative is built in, so the output stands on
                its own without a walkthrough.
              </p>
            </div>
            <div className="space-y-7">
              {outputs.map((o) => (
                <div key={o.title}>
                  <h3 className="mb-1.5 text-base font-semibold">{o.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" data-reveal className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>How it works</SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-[hsl(var(--card))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary">{s.n}</div>
              <h3 className="mb-1.5 text-base font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section id="connections" data-reveal className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>Connections</SectionLabel>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Four categories, one normalized model
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ads, web, e-commerce and CRM. Completing them connects ad spend to web behavior to revenue to
              pipeline in one place, which is the difference between channel reporting and full-funnel
              reporting.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`group relative flex items-center gap-4 rounded-xl border border-border bg-[hsl(var(--card))] p-5 transition-colors duration-300 ${p.border}`}
              >
                <BrandMark icon={p.icon} tone={p.tone} bg={p.bg} />
                <div className="min-w-0 flex-1">
                  <div className={`text-xs uppercase tracking-[0.14em] ${p.tone} opacity-80`}>
                    {p.category}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-semibold">{p.name}</div>
                </div>
                {p.comingSoon && (
                  <span className="shrink-0 rounded-full border border-border bg-[hsl(var(--raised))] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" data-reveal className="border-y border-border bg-[hsl(var(--card))]/40">
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
                className={`relative rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  t.featured
                    ? "border-primary/50 bg-[hsl(var(--raised))] shadow-lg shadow-primary/10 hover:shadow-primary/20 md:-mt-2"
                    : "border-border bg-[hsl(var(--card))] hover:border-primary/40"
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
      <section data-reveal className="mx-auto max-w-6xl px-6 py-24">
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
            <a href="mailto:support@lucidityanalytics.com" className="text-primary underline-offset-4 hover:underline">
              support@lucidityanalytics.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-start gap-2.5 border-b border-border pb-6 text-xs leading-relaxed text-[hsl(var(--faint))]">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <p>
              <span className="font-medium text-muted-foreground">Read-only by design.</span> Lucidity does
              not create, edit, or optimize ads, and does not manage bidding or change your ad accounts. Your
              campaigns remain fully under your control.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 text-sm text-[hsl(var(--faint))] sm:flex-row sm:items-center sm:justify-between">

            <span>© 2026 Lucidity LLC. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a
                href="/sample-report.html"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Sample report
              </a>
              <a href="mailto:support@lucidityanalytics.com" className="transition-colors hover:text-foreground">
                support@lucidityanalytics.com
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
