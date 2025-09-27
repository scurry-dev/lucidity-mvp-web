import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Calendar, TrendingUp, Settings } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [reports] = useState([
    {
      id: 1,
      clientName: "TechStart Inc",
      dateRange: "Nov 1-30, 2024",
      status: "In Progress",
      platforms: ["Google Ads", "Meta Ads"],
    },
    {
      id: 2,
      clientName: "Fashion Forward",
      dateRange: "Oct 15 - Nov 15, 2024",
      status: "Completed",
      platforms: ["TikTok", "LinkedIn"],
    },
    {
      id: 3,
      clientName: "Local Café Chain",
      dateRange: "Nov 1-15, 2024",
      status: "Draft",
      platforms: ["Google Ads", "Meta Ads", "TikTok"],
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lucidity" className="h-8" />
            <h1 className="text-2xl font-bold text-foreground">Ad Report Generator</h1>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => navigate("/agency-setup")} variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Agency Setup
            </Button>
            <Button onClick={() => navigate("/setup")} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Report
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Client Reports</h2>
          <p className="text-muted-foreground">
            Manage and generate ad campaign reports for your clients
          </p>
        </div>

        <div className="grid gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {report.clientName}
                  </CardTitle>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : report.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{report.dateRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{report.platforms.join(", ")}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate("/platforms")}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => navigate("/results")}
                    >
                      View Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-dashed border-2 border-muted">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Plus className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Create Your First Report</h3>
            <p className="text-muted-foreground mb-4">
              Get started by creating a new ad campaign report for your client
            </p>
            <Button onClick={() => navigate("/setup")}>
              Create New Report
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;