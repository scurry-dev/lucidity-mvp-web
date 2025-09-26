import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Palette, Check } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const ColorPalette = () => {
  const navigate = useNavigate();
  const [selectedPalette, setSelectedPalette] = useState<string>("");
  const [customColors, setCustomColors] = useState({
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    accent: "#10b981",
  });

  const presetPalettes = [
    {
      id: "professional",
      name: "Professional Blue",
      description: "Classic corporate colors",
      colors: ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd"]
    },
    {
      id: "modern",
      name: "Modern Tech",
      description: "Contemporary tech aesthetic",
      colors: ["#7c3aed", "#a855f7", "#c084fc", "#ddd6fe"]
    },
    {
      id: "fresh",
      name: "Fresh Green",
      description: "Growth and success theme",
      colors: ["#059669", "#10b981", "#34d399", "#6ee7b7"]
    },
    {
      id: "warm",
      name: "Warm Orange",
      description: "Energy and enthusiasm",
      colors: ["#ea580c", "#f97316", "#fb923c", "#fdba74"]
    },
    {
      id: "elegant",
      name: "Elegant Purple",
      description: "Premium and sophisticated",
      colors: ["#7c2d12", "#9333ea", "#a855f7", "#c084fc"]
    },
    {
      id: "lucidity",
      name: "Lucidity Brand",
      description: "Your brand colors",
      colors: ["#14b8a6", "#5eead4", "#99f6e4", "#ccfbf1"]
    }
  ];

  const handlePaletteSelect = (paletteId: string) => {
    setSelectedPalette(paletteId);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors(prev => ({ ...prev, [colorType]: color }));
    setSelectedPalette("custom");
  };

  const handleNext = () => {
    if (selectedPalette) {
      navigate("/results");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center gap-3 max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/focus-areas")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <img src={logo} alt="Lucidity" className="h-6" />
          <span className="text-lg font-semibold">Color Palette</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Step 4: Choose Colors</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded">1</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">2</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">3</span>
              <span>→</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">4</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">5</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Select a color palette for your report visualizations and branding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {presetPalettes.map((palette) => (
            <Card
              key={palette.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedPalette === palette.id
                  ? "ring-2 ring-primary bg-accent/50"
                  : ""
              }`}
              onClick={() => handlePaletteSelect(palette.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{palette.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{palette.description}</p>
                  </div>
                  {selectedPalette === palette.id && (
                    <Check className="h-5 w-5 text-primary" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {palette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded border-2 border-white shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Custom Color Palette
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primary">Primary Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="primary"
                    type="color"
                    value={customColors.primary}
                    onChange={(e) => handleCustomColorChange("primary", e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={customColors.primary}
                    onChange={(e) => handleCustomColorChange("primary", e.target.value)}
                    placeholder="#3b82f6"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary">Secondary Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="secondary"
                    type="color"
                    value={customColors.secondary}
                    onChange={(e) => handleCustomColorChange("secondary", e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={customColors.secondary}
                    onChange={(e) => handleCustomColorChange("secondary", e.target.value)}
                    placeholder="#8b5cf6"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accent">Accent Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="accent"
                    type="color"
                    value={customColors.accent}
                    onChange={(e) => handleCustomColorChange("accent", e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={customColors.accent}
                    onChange={(e) => handleCustomColorChange("accent", e.target.value)}
                    placeholder="#10b981"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Preview:</p>
              <div className="flex gap-2">
                <div
                  className="w-12 h-12 rounded border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium"
                  style={{ backgroundColor: customColors.primary }}
                >
                  1st
                </div>
                <div
                  className="w-12 h-12 rounded border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium"
                  style={{ backgroundColor: customColors.secondary }}
                >
                  2nd
                </div>
                <div
                  className="w-12 h-12 rounded border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium"
                  style={{ backgroundColor: customColors.accent }}
                >
                  3rd
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between gap-4 pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/focus-areas")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedPalette}
            className="flex items-center gap-2"
          >
            Generate Report
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {selectedPalette && (
          <div className="mt-6 p-4 bg-accent/50 rounded-lg">
            <p className="text-sm font-medium mb-2">
              Selected: {selectedPalette === "custom" ? "Custom Palette" : 
                presetPalettes.find(p => p.id === selectedPalette)?.name}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ColorPalette;