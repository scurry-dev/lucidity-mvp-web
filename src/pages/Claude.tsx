import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  Copy,
  Database,
  List,
  Lock,
  Menu,
  Play,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import logo from "@/assets/logo.png";

const SIGNUP = "https://app.lucidityanalytics.com/signup";
const CALL = "https://calendar.app.google/UJK9SbPPz1nxUbB36";
const CLAUDE_URL = "https://claude.ai/";
const MCP_URL = "https://mcp.lucidityanalytics.com/mcp";

const navLinks = [
  { href: "/#output", label: "What you get" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#connections", label: "Connections" },
  { href: "/#pricing", label: "Pricing" },
];

const prerequisites = [
  {
    n: "01",
    title: "A Lucidity account",
    body: "With at least one ad or analytics platform connected — Meta, Google Ads, Microsoft Advertising, LinkedIn Ads, TikTok Ads, or Google Analytics 4.",
  },
  {
    n: "02",
    title: "A Claude account",
    body: "Any plan — Free, Pro, Max, Team, or Enterprise. Custom connectors are available on all of them.",
  },
];

const installSteps = [
  {
    n: "01",
    title: "Open connectors",
    body: "In Claude, go to Customize → Connectors and choose Add custom connector.",
  },
  {
    n: "02",
    title: "Paste the URL",
    body: "Enter the Lucidity server URL below when Claude asks for it.",
  },
  {
    n: "03",
    title: "Sign in to Lucidity",
    body: "Claude opens a Lucidity sign-in page. Use email and password, or continue with Google. Your credentials are sent to Lucidity, not to Claude.",
  },
  {
    n: "04",
    title: "Ask a question",
    body: "Try “how did my Meta and Google Ads spend compare last month?” — Lucidity’s tools run in the background.",
  },
];

const tools = [
  {
    icon: Search,
    tone: "text-primary",
    bg: "bg-primary/10",
    title: "Explore available data",
    body: "Claude discovers which platforms are connected, which fields are queryable, and the available date range before writing a query.",
  },
  {
    icon: BarChart3,
    tone: "text-primary",
    bg: "bg-primary/10",
    title: "Performance summary",
    body: "A cross-platform overview for any date range — spend, clicks, impressions, conversions, CPA, CTR, ROAS, and change vs the prior period.",
  },
  {
    icon: Database,
    tone: "text-primary",
    bg: "bg-primary/10",
    title: "Query ad data",
    body: "Custom aggregations across the normalized cross-platform schema, with group-by, comma-separated metrics, and calculated formulas.",
  },
  {
    icon: Save,
    tone: "text-secondary",
    bg: "bg-secondary/10",
    title: "Save a report",
    body: "Capture a report structure — one or more query and summary sections — as a reusable template you can rerun with a new date range.",
  },
  {
    icon: List,
    tone: "text-secondary",
    bg: "bg-secondary/10",
    title: "List saved reports",
    body: "See every template your organization has saved, with section counts and last-updated dates.",
  },
  {
    icon: Play,
    tone: "text-secondary",
    bg: "bg-secondary/10",
    title: "Run a saved report",
    body: "Execute a saved template with a new date range. Sections run in parallel and return as a combined report in one call.",
  },
  {
    icon: Trash2,
    tone: "text-accent",
    bg: "bg-accent/10",
    title: "Delete a saved report",
    body: "Remove a template that is no longer needed. Names fuzzy-match so a typo does not stop you.",
  },
];

const privacyPoints = [
  {
    title: "Read-only, scoped to what you authorized",
    body: "Every tool is read-only — nothing spends money, changes campaign settings, or writes to your ad accounts. Claude only sees data inside the Lucidity organization you sign in to.",
  },
  {
    title: "Anthropic sees your tool calls",
    body: "When Claude uses the connector, Anthropic transmits the tool request and the returned data as part of your conversation, handled under Anthropic's own privacy terms.",
  },
  {
    title: "Lucidity records only timing telemetry",
    body: "We log per-call tool name, timing, and success or failure so we can monitor reliability. We do not record the parameters Claude sent, the data we returned, or the surrounding conversation.",
  },
  {
    title: "Disconnect at any time",
    body: "Removing the connector from Claude's settings immediately revokes the refresh token and stops all further tool calls.",
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-8 flex items-center gap-4">
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
    <span className="h-px flex-1 bg-border" />
  </div>
);

const useScrollReveal = () => {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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

const Claude = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useScrollReveal();

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(MCP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable — leave state alone.
    }
  };

  return (
    <div className="lucidity min-h-screen antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="/" className="flex items-center gap-2.5">
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
            <Button
              asChild
              size="sm"
              className="transition-transform duration-200 hover:-translate-y-0.5"
            >
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
        <div
          className="lucidity-grid pointer-events-none absolute inset-x-0 top-0 h-[620px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[-180px] h-[480px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-[hsl(var(--raised))] px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Lucidity connector for Claude</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Ask Claude about your{" "}
            <span className="text-primary">ad performance.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Query your Meta, Google Ads, Microsoft Advertising, LinkedIn Ads, and GA4 data
            across a single normalized schema — directly from a Claude conversation. Save any
            report as a reusable template and rerun it with one line next time.
          </p>
          <p className="mt-4 text-sm text-[hsl(var(--faint))]">
            Uses the Model Context Protocol. OAuth 2.1 with PKCE. Read-only.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              <a href={CLAUDE_URL} target="_blank" rel="noopener noreferrer">
                Open Claude
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <a href={SIGNUP}>Sign up for Lucidity</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Prerequisites */}
      <section data-reveal className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Before you connect</SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          {prerequisites.map((p) => (
            <div
              key={p.n}
              className="rounded-xl border border-border bg-[hsl(var(--card))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary">
                {p.n}
              </div>
              <h3 className="mb-1.5 text-base font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to add the connector */}
      <section
        id="install"
        data-reveal
        className="border-y border-border bg-[hsl(var(--card))]/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>How to add the connector</SectionLabel>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {installSteps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-border bg-[hsl(var(--card))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary">
                  {s.n}
                </div>
                <h3 className="mb-1.5 text-base font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>

          {/* URL panel */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-[hsl(var(--card))]">
            <div className="flex items-center gap-3 border-b border-border bg-[hsl(var(--muted))] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex h-7 max-w-md flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-[hsl(var(--background))] px-4 text-[11px] text-[hsl(var(--faint))]">
                <Lock className="h-3 w-3" />
                claude.ai/settings/connectors
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Lucidity MCP URL
                </div>
                <code className="block truncate font-mono text-sm text-foreground">
                  {MCP_URL}
                </code>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyUrl}
                className="shrink-0 bg-transparent transition-colors hover:border-primary/50"
              >
                <Copy className="mr-2 h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy URL"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" data-reveal className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>What Claude can do</SectionLabel>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Seven tools, one compounding loop
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Discovery-first access to your normalized ad data, plus a reusable-report workflow
            that grows more useful the more you use it — the first monthly report gets composed
            once, and every subsequent month reruns it in a single call.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-[hsl(var(--card))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg border border-border ${t.bg} transition-colors duration-300 group-hover:border-current`}
                >
                  <Icon
                    className={`h-5 w-5 ${t.tone} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="text-base font-semibold tracking-tight">{t.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data & privacy */}
      <section data-reveal className="border-y border-border bg-[hsl(var(--card))]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>Data and privacy</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Built to fit an agency's data agreements
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The connector reads only what you have already authorized inside Lucidity. It
                cannot see any other organization's data, and it never writes to your
                advertising accounts. Full details are in the{" "}
                <a
                  href="/privacy-policy/"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Lucidity Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="space-y-7">
              {privacyPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="mb-1.5 text-base font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Close */}
      <section data-reveal className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Add the connector and ask your first question
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Sign up for Lucidity in a minute, connect one ad account, then paste the MCP URL
            into Claude's custom-connector flow. If you would rather have it set up with you,
            book a walkthrough and I will do it on the call.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={CLAUDE_URL} target="_blank" rel="noopener noreferrer">
                Open Claude
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <a href={CALL} target="_blank" rel="noopener noreferrer">
                Book a 20-minute intro call
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Questions?{" "}
            <a
              href="mailto:support@lucidityanalytics.com"
              className="text-primary underline-offset-4 hover:underline"
            >
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
              <span className="font-medium text-muted-foreground">Read-only by design.</span>{" "}
              Lucidity does not create, edit, or optimize ads, and does not manage bidding or
              change your ad accounts. Your campaigns remain fully under your control.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 text-sm text-[hsl(var(--faint))] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Lucidity LLC. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a
                href="/"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                Back to home <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href="mailto:support@lucidityanalytics.com"
                className="transition-colors hover:text-foreground"
              >
                support@lucidityanalytics.com
              </a>
              <a
                href="/privacy-policy/"
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

export default Claude;
