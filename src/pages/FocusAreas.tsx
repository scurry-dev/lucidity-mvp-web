import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Target, TrendingUp, DollarSign, MousePointer, Eye, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const FocusAreas = () => {
  const navigate = useNavigate();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [customArea, setCustomArea] = useState("");

  const focusAreas = [
    {
      id: "ctr",
      name: "Maximize Click-Through Rate",
      description: "Improve ad engagement and click performance",
      icon: MousePointer,
      category: "Performance"
    },
    {
      id: "cpc",
      name: "Reduce Cost Per Click",
      description: "Lower acquisition costs while maintaining quality",
      icon: DollarSign,
      category: "Cost Optimization"
    },
    {
      id: "conversions",
      name: "Increase Conversions",
      description: "Drive more sales, leads, or desired actions",
      icon: Target,
      category: "Performance"
    },
    {
      id: "roas",
      name: "Improve Return on Ad Spend",
      description: "Maximize revenue per dollar spent",
      icon: TrendingUp,
      category: "ROI"
    },
    {
      id: "impressions",
      name: "Boost Brand Awareness",
      description: "Increase reach and impression volume",
      icon: Eye,
      category: "Reach"
    },
    {
      id: "audience",
      name: "Audience Optimization",
      description: "Find and target the most valuable customer segments",
      icon: Users,
      category: "Targeting"
    }
  ];

  const handleAreaToggle = (areaId: string) => {
    setSelectedAreas((prev) =>
      prev.includes(areaId)
        ? prev.filter((id) => id !== areaId)
        : [...prev, areaId]
    );
  };

  const handleAddCustom = () => {
    if (customArea.trim() && !selectedAreas.includes(`custom-${customArea}`)) {
      setSelectedAreas((prev) => [...prev, `custom-${customArea}`]);
      setCustomArea("");
    }
  };

  const handleNext = () => {
    if (selectedAreas.length > 0) {
      navigate("/color-palette");
    }
  };

  const getSelectedAreaName = (areaId: string) => {
    if (areaId.startsWith("custom-")) {
      return areaId.replace("custom-", "");
    }
    return focusAreas.find(area => area.id === areaId)?.name;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center gap-3 max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/platforms")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <img src={logo} alt="Lucidity" className="h-6" />
          <span className="text-lg font-semibold">Focus Areas</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Step 3: Areas of Focus</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded">1</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">2</span>
              <span>→</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">3</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">4</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">5</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Select the key performance areas you want to focus on in your report
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedAreas.includes(area.id)
                    ? "ring-2 ring-primary bg-accent/50"
                    : ""
                }`}
                onClick={() => handleAreaToggle(area.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">
                          {area.name}
                        </CardTitle>
                        <span className="text-xs text-primary font-medium">
                          {area.category}
                        </span>
                      </div>
                    </div>
                    <Checkbox
                      checked={selectedAreas.includes(area.id)}
                      onChange={() => handleAreaToggle(area.id)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Add Custom Focus Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Enter custom focus area (e.g., 'Improve video completion rate')"
                value={customArea}
                onChange={(e) => setCustomArea(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddCustom()}
              />
              <Button onClick={handleAddCustom} disabled={!customArea.trim()}>
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between gap-4 pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/platforms")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAreas.length === 0}
            className="flex items-center gap-2"
          >
            Next: Color Palette
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {selectedAreas.length > 0 && (
          <div className="mt-6 p-4 bg-accent/50 rounded-lg">
            <p className="text-sm font-medium mb-2">
              Selected Focus Areas ({selectedAreas.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedAreas.map((areaId) => (
                <span
                  key={areaId}
                  className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {getSelectedAreaName(areaId)}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FocusAreas;