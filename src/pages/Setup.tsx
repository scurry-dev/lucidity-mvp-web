import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: "",
    reportTitle: "",
    dateFrom: "",
    dateTo: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (formData.clientName && formData.reportTitle) {
      navigate("/platforms");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <img src={logo} alt="Lucidity" className="h-6" />
          <span className="text-lg font-semibold">New Report Setup</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Step 1: Report Details</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">1</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">2</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">3</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">4</span>
              <span>→</span>
              <span className="bg-muted px-2 py-1 rounded">5</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Set up the basic information for your client's ad campaign report
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Report Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name *</Label>
                <Input
                  id="clientName"
                  placeholder="Enter client company name"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange("clientName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportTitle">Report Title *</Label>
                <Input
                  id="reportTitle"
                  placeholder="Q4 2024 Campaign Performance"
                  value={formData.reportTitle}
                  onChange={(e) => handleInputChange("reportTitle", e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dateFrom">Start Date</Label>
                <Input
                  id="dateFrom"
                  type="date"
                  value={formData.dateFrom}
                  onChange={(e) => handleInputChange("dateFrom", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateTo">End Date</Label>
                <Input
                  id="dateTo"
                  type="date"
                  value={formData.dateTo}
                  onChange={(e) => handleInputChange("dateTo", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Report Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Brief description of the campaign goals and objectives..."
                className="min-h-24"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button
                onClick={handleNext}
                disabled={!formData.clientName || !formData.reportTitle}
                className="flex items-center gap-2"
              >
                Next: Select Platforms
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Setup;