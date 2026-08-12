import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SIGNUP = "https://app.lucidityanalytics.com/signup";
const EFFECTIVE_DATE = "February 3, 2026";
const LAST_UPDATED = "August 11, 2026";

const navLinks = [
  { href: "/#output", label: "What you get" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#connections", label: "Connections" },
  { href: "/#pricing", label: "Pricing" },
];

const bodyClass = "text-base leading-relaxed text-muted-foreground";
const listClass = "mt-4 space-y-2.5 pl-6 text-base leading-relaxed text-muted-foreground marker:text-[hsl(var(--faint))]";

const usagePurposes = [
  "Fulfill or meet the reason you provided the information. For example, if you provide your personal information to request additional information, we may use this to contact you and address your inquiry. We may also save your information for these purposes.",
  "Provide, offer, support, personalize, or develop our website and services.",
  "Create, maintain, customize, and secure your account with us.",
  "Process your requests, purchases, transactions, and payments and prevent transactional fraud.",
  "Provide you with support and respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.",
  "Help maintain the safety, security, and integrity of our website, services, databases and other technology assets.",
  "Test, research, analyze, and conduct product development to develop and improve our website, and related services.",
  "Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.",
  "Respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.",
  "Evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among the assets transferred.",
  "Send promotional messages, marketing, advertising, and other information that may be of interest to you based on your preferences.",
  "Personalize, measure, and improve our advertising to you.",
  "Fulfill any other use that we describe when you provide the information.",
  "Analyze information, including through automated and AI-driven processes, to generate insights, reports, recommendations, benchmarks, and aggregated or anonymized analytics to improve our services and product offerings.",
  "Personalize, measure, and improve our marketing and communications, including understanding how users engage with our website and services.",
  "Maintain internal records, logs, and backups for business continuity, compliance, auditing, and security purposes.",
  "Facilitate optional integrations You have chosen to authorize between Your Lucidity account and third-party artificial intelligence assistants (such as Anthropic's Claude via the Model Context Protocol), so that those assistants may retrieve Your data on Your behalf.",
];

const disclosureRecipients = [
  "with data analytics, data hosting, software/IT, cybersecurity, cloud service, consultants, financial, legal, customer support, email delivery, and other similar providers that support our business.",
  "with banks and credit card processors to the extent necessary for the Company to deliver the services.",
  "with third-party artificial intelligence assistants that You have chosen to connect to Your Lucidity account (such as Anthropic's Claude via the Model Context Protocol), for the purpose of enabling those assistants to retrieve Your data on Your behalf. See Section 5 for details.",
  "when we believe sharing is necessary to protect our rights, preserve safety, investigate fraud or other wrongdoing.",
  "when required by law, which includes complying with any court order, law, or legal process, including responding to a government or regulatory request.",
  "in connection with the sale, transfer or financing of the Company's business or its assets, including a bankruptcy proceeding or to our affiliates.",
  "to enforce or apply our agreements, including for billing or collection purposes.",
  "for any other purpose we disclose to you when you provide the information.",
];

const Section = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="scroll-mt-24">
    <h2
      id={`section-${n}`}
      className="mb-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
    >
      <span className="text-primary">{n}.</span> {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);

const Subsection = ({
  label,
  title,
  children,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
}) => (
  <div className="mt-6">
    <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground">
      <span className="text-muted-foreground">{label}</span>
      {title ? ` ${title}` : ""}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
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

      {/* Header */}
      <header className="relative overflow-x-clip border-b border-border">
        <div
          className="lucidity-grid pointer-events-none absolute inset-x-0 top-0 h-[380px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[-180px] h-[380px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-20 md:pt-24">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Legal
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <div>
              <span className="text-[hsl(var(--faint))]">Effective Date:</span>{" "}
              <span className="text-foreground">{EFFECTIVE_DATE}</span>
            </div>
            <div>
              <span className="text-[hsl(var(--faint))]">Last Updated:</span>{" "}
              <span className="text-foreground">{LAST_UPDATED}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <div className="space-y-4">
          <p className={bodyClass}>
            This Privacy Policy describes how Lucidity LLC, a Michigan limited liability
            company, and its affiliates (collectively, "Company," "we," "our," or "us")
            collect and process personal information as a controller of personal data in
            relation to your use of our services and website{" "}
            <a
              href="http://www.lucidityanalytics.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              www.lucidityanalytics.com
            </a>
            . This Privacy Policy generally does not describe how we process personal
            information as a "processor" or "service provider," which is subject to our
            agreement with the data controller. To learn more about how we may process your
            personal information as a "processor" or "service provider," please contact the
            applicable data controller.
          </p>
          <p className={bodyClass}>
            If you do not agree to this Privacy Policy, your choice is to not utilize our
            services or website or provide personal information in connection with them. By
            utilizing our services and website, you agree to this Privacy Policy and
            expressly consent to the processing of personal information according to this
            Privacy Policy.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <Section n={1} title="Personal Information We Collect.">
            <Subsection label="1." title="Information You Choose to Give Us">
              <ul className={`${listClass} list-disc`}>
                <li>
                  Contact information, including name, address, city, state, zip code, email
                  address, and telephone number.
                </li>
                <li>
                  Information provided or accessed in connection with the services we
                  provide, including online forms, account information, survey responses,
                  communications with our online support team.
                </li>
                <li>Payment information to complete purchase transactions.</li>
              </ul>
            </Subsection>

            <Subsection label="2." title="Information Automatically Collected by Using Our Website">
              <ul className={`${listClass} list-disc`}>
                <li>
                  Your device data and how you interact with our website, including IP
                  address, browser type, and unique device identifier.
                </li>
                <li>
                  Usage information, including the pages or content you view and searches on
                  our website.
                </li>
              </ul>
            </Subsection>

            <Subsection label="3." title="Categories of Sensitive Personal Information">
              <ul className={`${listClass} list-disc`}>
                <li>
                  Account log-in, and financial account, debit card, or credit card number in
                  combination with any required security or access code.
                </li>
              </ul>
            </Subsection>
          </Section>

          <Section n={2} title="How We Use Information We Collect.">
            <p className={bodyClass}>We may process this information to:</p>
            <ul className={`${listClass} list-disc`}>
              {usagePurposes.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className={`${bodyClass} pt-4`}>
              Please note that we may anonymize or reasonably deidentify your personal
              information so that it can no longer be reasonably associated with or used to
              identify you in some circumstances. We may retain and use such information for
              any legitimate business purpose without further notice to you or obtaining your
              consent, unless required by law.
            </p>
          </Section>

          <Section n={3} title="Personal Information We Process as a Processor.">
            <p className={bodyClass}>
              In certain circumstances, we process personal information in our capacity as a
              "processor" (as defined under the General Data Protection Regulation and
              similar laws) or "service provider" (as defined under the California Consumer
              Privacy Act) on behalf of third-party entities that act as data controllers
              with respect to such information. In these situations, we do not determine the
              purposes or means of processing, and we handle personal information strictly in
              accordance with the written instructions of the applicable data controller.
            </p>
            <p className={bodyClass}>
              For example, when we partner with advertising agencies, marketing platforms, or
              other commercial partners to provide analytics, reporting, measurement, or
              optimization services, we may process certain categories of marketing-related
              personal information on behalf of those partners. This information may include,
              but is not limited to, identifiers associated with user accounts or devices
              (such as device identifiers, advertising IDs, or hashed identifiers), cookie
              and pixel data, IP addresses and approximate geolocation data, information
              about how users interact with our website and application (such as pages
              visited, features used, content viewed, and interactions with reports or
              dashboards), demographic or interest-based audience segment information
              provided or configured by users or integrated platforms, engagement and
              performance metrics (including impressions, clicks, and conversion events), and
              transaction or conversion value information used for analytics, reporting,
              measurement, and attribution purposes. We do not process raw payment card
              information or sensitive financial account data as part of these services. Such
              information is used solely to operate, support, and improve our services and to
              provide analytics, reporting, and insights requested by our customers.
            </p>
            <p className={bodyClass}>
              We process this information solely at the express direction and on behalf of
              the applicable data controller. We do not sell or share personal information
              that we process in our capacity as a processor or service provider, except as
              directed by the applicable controller. If you have questions about how a data
              controller processes your personal information, including requests to exercise
              your privacy rights with respect to such information, please contact the
              applicable controller directly.
            </p>
          </Section>

          <Section n={4} title="Disclosing, Sharing, and Selling Information.">
            <Subsection label="1." title="Disclosing Personal Information">
              <p className={bodyClass}>
                We may disclose your personal information to a third party for certain
                business purposes. When we disclose personal information for a business
                purpose, we enter a contract that describes the purpose and requires the
                recipient to both keep that personal information confidential and not use it
                for any purpose except performing the contract.
              </p>
              <p className={bodyClass}>We disclose personal information as stated below:</p>
              <ul className={`${listClass} list-disc`}>
                {disclosureRecipients.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </Subsection>

            <Subsection label="2." title="Sharing Personal Information for Personalized Advertising">
              <p className={bodyClass}>
                In this Privacy Policy, "sharing" means disclosing a consumer's personal
                information to third parties for cross-context behavioral advertising or
                targeted advertising. "Cross-context behavioral advertising" refers to the
                targeting of advertising to a consumer based on the consumer's personal
                information obtained from the consumer's activity across websites and
                applications, other than those with which the consumer intentionally
                interacts. In the preceding twelve months, the Company has not "shared"
                personal information with third parties for the purposes of personalized
                advertising for our own services.
              </p>
            </Subsection>

            <Subsection label="3." title="Selling Personal Information">
              <p className={bodyClass}>
                In the preceding twelve (12) months, the Company has not sold personal
                information to any third parties and does not sell personal information
                pertaining to minors under the age of sixteen (16).
              </p>
            </Subsection>
          </Section>

          <Section n={5} title="Third-Party AI Assistant Integrations.">
            <p className={bodyClass}>
              We offer an optional connector for Anthropic's Claude that allows You to query
              Your Lucidity data from inside a Claude conversation. The connector uses the
              Model Context Protocol (MCP) and is listed in Anthropic's Software Directory.
              Connecting the connector is entirely optional and is initiated by You from
              within Claude; disconnecting it from within Claude immediately revokes Claude's
              access.
            </p>

            <Subsection label="1." title="How Authentication Works">
              <p className={bodyClass}>
                When You add the connector, Claude directs You to a Lucidity sign-in page
                (email and password, or Google) hosted on our servers. Your credentials are
                sent to Lucidity and not to Anthropic. On successful sign-in, we issue Claude
                an OAuth access token and a refresh token scoped to Your account. These
                tokens are stored on our servers so that Claude can call our application
                programming interfaces on Your behalf until You disconnect the connector or
                delete Your account.
              </p>
            </Subsection>

            <Subsection label="2." title="What Data Flows During Use">
              <p className={bodyClass}>
                Each time You ask Claude a question that uses one of the connector's tools,
                Anthropic transmits the tool request (the parameters Claude constructed, such
                as a date range or a metric name) to Lucidity, and Lucidity returns
                aggregated advertising and analytics data drawn from the same data sources
                that the rest of our services read. That data becomes part of Your Claude
                conversation and is handled by Anthropic under Anthropic's own privacy terms,
                available at{" "}
                <a
                  href="https://www.anthropic.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  https://www.anthropic.com/legal/privacy
                </a>
                . The connector is read-only; no tool spends money, changes campaign
                settings, or writes to Your advertising accounts.
              </p>
            </Subsection>

            <Subsection label="3." title="What Lucidity Records Server-Side">
              <p className={bodyClass}>
                For each tool call, we log per-call operational telemetry, including the tool
                name, the calling user and organization, timing, success or failure, and an
                anonymized error signature when a call fails. We do not record the tool
                parameters, the returned data, or the surrounding Claude conversation. This
                telemetry is retained for up to twelve (12) months and is used solely to
                monitor reliability and detect abuse.
              </p>
            </Subsection>

            <Subsection label="4." title="Your Controls">
              <p className={bodyClass}>
                You may disconnect the connector at any time from Claude's Connectors
                settings. Doing so revokes Claude's refresh token and stops all further tool
                calls immediately. Deleting Your Lucidity account also revokes any active
                tokens previously issued to Claude on Your behalf.
              </p>
            </Subsection>
          </Section>

          <Section n={6} title="Information Security and Retention.">
            <p className={bodyClass}>
              We use reasonable administrative, technical, and physical security measures to
              protect the personal information we retain and to help ensure that it is used
              in accordance with this Privacy Policy.
            </p>
            <p className={bodyClass}>
              We will retain your personal information for the period necessary to fulfill
              the purposes outlined in this Privacy Policy unless longer retention is
              required by law or for auditing purposes. To determine the appropriate
              retention period for personal information, we consider applicable laws, the
              volume and nature of the personal information, its purpose, and the potential
              risk of harm from its unauthorized use or disclosure.
            </p>
          </Section>

          <Section n={7} title="Cookies and Tracking Technologies.">
            <Subsection label="1." title="Cookies">
              <p className={bodyClass}>
                Our websites may use "cookies" and other tracking technologies to gather
                information about your interactions. This information may include demographic
                data, browser type, IP address, pages visited, activities conducted on the
                page, and the day and time of your visit. Our websites may use both session
                Cookies (which expire once you close your web browser) and persistent Cookies
                (which stay on your computer until you delete them) to make your experience
                on the website more personal and interactive. We do not currently honor "do
                not track" signals from a web site browser. Please refer to your computer
                browser help instructions for more information on cookies and other related
                technologies and how to manage their use. If you refuse or delete cookies,
                you will need to repeat the process if you use another computer or change
                browsers. If you refuse or delete cookies, some of the functionality of our
                websites could potentially be impaired.
              </p>
            </Subsection>

            <Subsection label="2." title="Analytics Services">
              <p className={bodyClass}>
                Please note that we use an analytics service, Google Analytics, to gather
                information about our website visits. To learn more about Google Analytics,
                including opting out of Google Analytics, click here{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=en
                </a>
              </p>
            </Subsection>

            <Subsection label="3." title="Web Beacons">
              <p className={bodyClass}>
                Pages of our websites may also contain small electronic files known as web
                beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs)
                that allow us, for example, to count users who have visited those pages. We
                may use this information to provide a better website user experience, and
                tailor our marketing communications.
              </p>
            </Subsection>
          </Section>

          <Section n={8} title="Other Important Information.">
            <Subsection label="1." title="Linked Websites">
              <p className={bodyClass}>
                Our websites may contain links to other websites. We assume no responsibility
                for the content, privacy policies, or practices of any third-party websites.
                You expressly relieve Company from any and all liability arising from your
                use of any third-party website, or from the content of any third-party
                website.
              </p>
            </Subsection>

            <Subsection label="2." title="Children's Privacy">
              <p className={bodyClass}>
                Our website does not target or knowingly collect any information from
                individuals under the age of eighteen (18).
              </p>
            </Subsection>

            <Subsection label="3." title="Changes to our Privacy Policy">
              <p className={bodyClass}>
                It is our policy to post any changes we make to our Privacy Policy on this
                page with a notification that the Privacy Policy has been updated on our
                website home pages. If we make material changes to how we treat the personal
                information we collect, we will notify you through a prominent notice on our
                website home pages, in addition to any other means necessary to fulfill our
                legal requirements. The date the Privacy Policy was last revised is
                identified at the top of the page.
              </p>
            </Subsection>
          </Section>

          <Section n={9} title="Contact Information.">
            <p className={bodyClass}>
              For questions regarding this Privacy Policy, you may contact us at any of the
              following addresses. To exercise your consumer rights, depending on where you
              live, please contact us at the information below.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-[hsl(var(--card))] p-6">
              <dl className="grid gap-4 text-base leading-relaxed sm:grid-cols-[auto,1fr] sm:gap-x-8">
                <dt className="font-semibold text-foreground">Email</dt>
                <dd className="text-muted-foreground">
                  <a
                    href="mailto:support@lucidityapps.com"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    support@lucidityapps.com
                  </a>
                </dd>
                <dt className="font-semibold text-foreground">Address</dt>
                <dd className="text-muted-foreground">
                  2075 W Stadium Blvd #1805
                  <br />
                  Ann Arbor, MI 48103.
                </dd>
              </dl>
            </div>
          </Section>
        </div>
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
              <a href="/claude" className="transition-colors hover:text-foreground">
                Claude connector
              </a>
              <a
                href="mailto:support@lucidityanalytics.com"
                className="transition-colors hover:text-foreground"
              >
                support@lucidityanalytics.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
