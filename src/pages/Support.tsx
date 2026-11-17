import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SIGNUP = "https://app.lucidityanalytics.com/signup";
const SUPPORT_EMAIL = "support@lucidityanalytics.com";

const navLinks = [
  { href: "/#output", label: "What you get" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#connections", label: "Connections" },
  { href: "/#pricing", label: "Pricing" },
];

const bodyClass = "text-base leading-relaxed text-muted-foreground";

// Written to be read by someone whose report just came back wrong or empty, so
// the common causes come before the contact details. Deliberately names no
// particular AI assistant: this page is the support URL for every directory the
// connector is listed in.
const commonIssues = [
  {
    title: "The connector returns no data",
    body: "Most often the ad platform has not finished its first sync, or the ad account is connected but not enabled. Open your Lucidity dashboard and check the client's Integrations page — each account shows its connection status and when it last synced.",
  },
  {
    title: "Numbers look different from the ad platform",
    body: "Platforms revise conversions for days after the fact, and each one attributes differently. Lucidity reports what the platform's API returned for the window you asked about. If a figure looks wrong rather than merely revised, send us the client, the date range and the metric and we will trace it.",
  },
  {
    title: "The assistant says you need to sign in again",
    body: "Your connection expired or was revoked. Remove the Lucidity connector in your assistant and add it again; signing in takes a moment and nothing in your account is lost.",
  },
  {
    title: "A platform you use is not listed",
    body: "We add platforms regularly. Tell us which one and what you need from it — that is genuinely how the list grows.",
  },
];

const Support = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <header className="relative overflow-x-clip border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Support</h1>
          <p className={`mt-4 ${bodyClass}`}>
            Questions about your reports, your connected ad platforms, or your account — we
            answer all of them ourselves.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">Contact us</h2>
          <div className="mt-5 rounded-lg border border-border bg-[hsl(var(--card))]/40 p-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-base font-medium text-primary underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
            <p className={`mt-4 ${bodyClass}`}>
              We reply to every message, usually within one business day. Lucidity is a small
              team, so the person who answers is the person who can fix it.
            </p>
            <p className={`mt-4 ${bodyClass}`}>
              To get to an answer faster, include the email address on your Lucidity account,
              the client the report was for, the date range you asked about, and what you
              expected to see.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Before you write</h2>
          <p className={`mt-4 ${bodyClass}`}>
            A few things come up often enough to be worth checking first.
          </p>
          <div className="mt-6 space-y-6">
            {commonIssues.map((issue) => (
              <div key={issue.title}>
                <h3 className="text-base font-medium text-foreground">{issue.title}</h3>
                <p className={`mt-2 ${bodyClass}`}>{issue.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Your data</h2>
          <p className={`mt-4 ${bodyClass}`}>
            Lucidity reads your advertising data; it never creates, edits or pauses campaigns,
            and it does not change bids or budgets. To see what we collect and how long we keep
            it, read the{" "}
            <a
              href="/privacy-policy/"
              className="text-primary underline-offset-4 hover:underline"
            >
              privacy policy
            </a>
            . To close your account or have your data deleted, email us and we will confirm
            once it is done.
          </p>
        </section>
      </main>

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
              <a href="/" className="transition-colors hover:text-foreground">
                Home
              </a>
              <a href="/privacy-policy/" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="transition-colors hover:text-foreground"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;
