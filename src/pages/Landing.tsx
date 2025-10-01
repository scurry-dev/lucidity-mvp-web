import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BarChart3, Palette, Target, Zap } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
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
              Create stunning, branded ad performance reports in minutes. Impress your clients with professional analytics across all major platforms.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => navigate("/dashboard")} className="text-lg">
                Try Demo
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/setup")} className="text-lg">
                Get Started
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
              Connect data from Google Ads, Meta, TikTok, LinkedIn, and more—all in one place.
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
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 Lucidity LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
