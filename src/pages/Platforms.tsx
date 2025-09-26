import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Platforms = () => {
  const navigate = useNavigate();
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const platforms = [
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Search, Display, YouTube, and Shopping campaigns",
      icon: "🔍",
      popular: true,
    },
    {
      id: "meta-ads",
      name: "Meta Ads",
      description: "Facebook and Instagram advertising",
      icon: "📘",
      popular: true,
    },
    {
      id: "tiktok-ads",
      name: "TikTok Ads",
      description: "Short-form video advertising",
      icon: "🎵",
      popular: true,
    },
    {
      id: "linkedin-ads",
      name: "LinkedIn Ads",
      description: "Professional network advertising",
      icon: "💼",
      popular: false,
    },
    {
      id: "twitter-ads",
      name: "X (Twitter) Ads",
      description: "Social media advertising",
      icon: "🐦",
      popular: false,
    },
    {
      id: "pinterest-ads",
      name: "Pinterest Ads",
      description: "Visual discovery advertising",
      icon: "📌",
      popular: false,
    },
    {
      id: "snapchat-ads",
      name: "Snapchat Ads",
      description: "Multimedia messaging advertising",
      icon: "👻",
      popular: false,
    },
    {
      id: "youtube-ads",
      name: "YouTube Ads",
      description: "Video advertising platform",
      icon: "📺",
      popular: false,
    },
  ];

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleNext = () => {
    if (selectedPlatforms.length > 0) {
      navigate("/focus-areas");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center gap-3 max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/setup")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <img src={logo} alt="Lucidity" className="h-6" />
          <span className="text-lg font-semibold">Platform Selection</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Step 2: Select Platforms</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded">1</span>
              <span>→</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">2</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">3</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">4</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">5</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Choose which advertising platforms you want to include in your report
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {platforms.map((platform) => (
            <Card
              key={platform.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedPlatforms.includes(platform.id)
                  ? "ring-2 ring-primary bg-accent/50"
                  : ""
              }`}
              onClick={() => handlePlatformToggle(platform.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {platform.name}
                        {platform.popular && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                            Popular
                          </span>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                  <Checkbox
                    checked={selectedPlatforms.includes(platform.id)}
                    onChange={() => handlePlatformToggle(platform.id)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Custom Platform Integration</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Don't see your platform? We can connect to any advertising platform with an API.
            </p>
            <Button variant="outline" size="sm">
              Request Custom Integration
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-between gap-4 pt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/setup")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedPlatforms.length === 0}
            className="flex items-center gap-2"
          >
            Next: Focus Areas
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {selectedPlatforms.length > 0 && (
          <div className="mt-6 p-4 bg-accent/50 rounded-lg">
            <p className="text-sm font-medium mb-2">
              Selected Platforms ({selectedPlatforms.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedPlatforms.map((platformId) => {
                const platform = platforms.find((p) => p.id === platformId);
                return (
                  <span
                    key={platformId}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {platform?.name}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Platforms;