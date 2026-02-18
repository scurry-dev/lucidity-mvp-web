import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { BarChart3, Palette, Target, Zap, MousePointerClick, DollarSign, TrendingUp, Eye, CheckCircle, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { waitlistSchema } from "@/lib/validations/waitlist";

const metrics = [
  { icon: Eye, label: "Impressions", description: "Total number of times your ads were shown to users." },
  { icon: MousePointerClick, label: "Clicks", description: "How many times users clicked on your ads." },
  { icon: DollarSign, label: "Cost", description: "Total spend across campaigns, ad groups, and ads." },
  { icon: TrendingUp, label: "Conversions", description: "Actions taken after clicking, such as purchases or sign-ups." },
  { icon: BarChart3, label: "CTR", description: "Click-through rate — clicks divided by impressions." },
  { icon: Target, label: "CPA", description: "Cost per acquisition — spend divided by conversions." },
];

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description: "Securely authenticate and connect your ad platform accounts using OAuth 2.0 — no passwords shared.",
  },
  {
    number: "02",
    title: "We Sync Your Data",
    description: "Lucidity automatically retrieves campaign, ad group, and ad-level data from your connected platforms via their respective APIs.",
  },
  {
    number: "03",
    title: "Data Stored Securely",
    description: "Synced data is stored in our secure, multi-tenant data warehouse — fully isolated per account.",
  },
  {
    number: "04",
    title: "Insights & Dashboards",
    description: "View performance through multiple dashboard views with charts, visualizations, and actionable recommendations.",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const validatedData = waitlistSchema.parse({ email });

      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: validatedData.email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already on the list!",
            description: "This email is already registered. We'll notify you when spots open up.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "You're on the list!",
          description: "We'll notify you when spots open up.",
        });
        setEmail("");
      }
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const zodError = error as any;
        toast({
          title: "Invalid email",
          description: zodError.issues[0]?.message || "Please enter a valid email address.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-lg font-bold">Lucidity</span>
          <Button variant="outline" size="sm" asChild>
            <a href="https://app.lucidityanalytics.com/login">Log In</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-secondary/50 px-4 py-2 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span>Professional Ad Reporting Made Simple</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Transform Your Ad Reports with{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Lucidity
              </span>
            </h1>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              A reporting platform built for digital marketing agencies — analyze ad performance data and present it to clients with clarity and confidence.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => navigate("/dashboard")} className="text-lg">
                Try Demo
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <a href="https://app.lucidityanalytics.com/login">Log In</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Everything You Need</h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to streamline your reporting workflow
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Multi-Platform Support</h3>
            <p className="text-muted-foreground">
              Connect data from Google Ads, Meta, TikTok, LinkedIn, and more — all in one place.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Custom Branding</h3>
            <p className="text-muted-foreground">
              Apply your agency's colors, logo, and style to create perfectly branded reports.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Smart Analytics</h3>
            <p className="text-muted-foreground">
              Automated insights and visualizations that make data easy to understand.
            </p>
          </Card>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Analyze</h2>
            <p className="text-lg text-muted-foreground">
              Lucidity surfaces the metrics that matter most for understanding ad performance.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ icon: Icon, label, description }) => (
              <div key={label} className="flex items-start gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{label}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              From account connection to actionable insights — here's what happens behind the scenes.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="mb-1 text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-background p-8 flex gap-5 items-start shadow-sm">
            <ShieldCheck className="h-8 w-8 shrink-0 text-primary mt-0.5" />
            <div>
              <h3 className="mb-2 text-lg font-semibold">What Lucidity Does Not Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lucidity is a <strong>read-only reporting tool</strong>. We do not create, edit, or optimize ads on your behalf, and we do not manage bidding or make any changes to your ad accounts. Your campaigns remain fully under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/10 py-24">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="p-8 md:p-12 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                Limited Early Access
              </div>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Join Our Early Adopters
              </h2>

              <p className="mb-6 text-lg text-muted-foreground">
                Lucidity is currently partnering with a few early adopters. Join the list to be the first to know when new spots open.
              </p>

              <div className="mb-8 inline-block rounded-lg bg-primary/10 px-4 py-2 text-primary font-semibold">
                🎉 Early sign-ups get 50% off the first three months
              </div>

              <form onSubmit={handleSignUp} className="mx-auto flex max-w-md gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            See how Lucidity can transform your client reporting today
          </p>
          <Button size="lg" onClick={() => navigate("/dashboard")} className="text-lg">
            View Demo Dashboard
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2025 Lucidity LLC. All rights reserved.</span>
          <a
            href="https://www.lucidityanalytics.com/privacy-policy/"
            className="hover:text-foreground underline underline-offset-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
