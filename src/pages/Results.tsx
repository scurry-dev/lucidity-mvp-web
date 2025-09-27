import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { ArrowLeft, Download, Share2, MessageSquare, TrendingUp, TrendingDown, DollarSign, MousePointer } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState("");

  // Mock data for charts
  const performanceData = [
    { month: "Jan", clicks: 12400, conversions: 1240, cost: 8500 },
    { month: "Feb", clicks: 13200, conversions: 1450, cost: 9200 },
    { month: "Mar", clicks: 15800, conversions: 1680, cost: 10100 },
    { month: "Apr", clicks: 14600, conversions: 1520, cost: 9800 },
    { month: "May", clicks: 16900, conversions: 1890, cost: 11200 },
    { month: "Jun", clicks: 18200, conversions: 2100, cost: 12000 }
  ];

  const conversionsData = [
    { name: "Paid", value: 695.9, color: "hsl(var(--chart-1))" },
    { name: "Un-Paid", value: 1380.1, color: "hsl(var(--muted))" }
  ];

  const impressionsData = [
    { name: "Google Ads", value: 14.62, color: "hsl(var(--chart-1))" },
    { name: "Meta Ads", value: 24.87, color: "hsl(var(--muted))" }
  ];

  const visitorsData = [
    { name: "Google Ads", value: 194, color: "hsl(var(--chart-1))" },
    { name: "Meta Ads", value: 215, color: "hsl(var(--muted))" }
  ];

  const spendRevenueData = [
    { metric: "Spend", current: 85000, previous: 88000, label: "Current Period" },
    { metric: "Revenue", current: 195000, previous: 208000, label: "Current Period" }
  ];

  const kpiData = [
    { platform: "Google Ads", cpm: 13, aov: 403, cpa: 363, roas: 1.11 },
    { platform: "Meta Ads", cpm: 3, aov: 370.95, cpa: 456, roas: 0.81 }
  ];

  const insights = [
    {
      type: "positive",
      title: "CTR Improvement Opportunity",
      description: "Google Ads search campaigns show 15% higher CTR potential with refined ad copy",
      action: "Optimize ad headlines for top 5 keywords"
    },
    {
      type: "negative", 
      title: "Budget Allocation Alert",
      description: "Meta Ads CPC increased 23% in Q4, consider budget reallocation",
      action: "Shift 20% budget to better-performing Google campaigns"
    },
    {
      type: "positive",
      title: "Audience Expansion Success",
      description: "Lookalike audiences generated 34% more conversions at 18% lower cost",
      action: "Expand similar audience segments across all platforms"
    }
  ];

  const handleChatSubmit = () => {
    if (chatInput.trim()) {
      // Simulate AI response
      setChatInput("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Button>
            <img src={logo} alt="Lucidity" className="h-6" />
            <span className="text-lg font-semibold">TechStart Inc - Q4 2024 Report</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91,100</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.3%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9,880</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8.7%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$60,800</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5.2%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. CPC</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$6.15</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" />
                  -3.1%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Conversions Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Conversions Overall</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={conversionsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                    label={({ name, value }) => `${value}`}
                  >
                    {conversionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="text-sm text-muted-foreground">Paid</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <span className="text-sm text-muted-foreground">Un-Paid</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impressions */}
          <Card>
            <CardHeader>
              <CardTitle>Impressions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={impressionsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                    label={({ name, value }) => `${value}M`}
                  >
                    {impressionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="text-sm text-muted-foreground">Google Ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <span className="text-sm text-muted-foreground">Meta Ads</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visitors */}
          <Card>
            <CardHeader>
              <CardTitle>Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={visitorsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                    label={({ name, value }) => `${value}K`}
                  >
                    {visitorsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="text-sm text-muted-foreground">Google Ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <span className="text-sm text-muted-foreground">Meta Ads</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spend/Revenue and KPIs */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Spend/Revenue */}
          <Card>
            <CardHeader>
              <CardTitle>Spend/Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {spendRevenueData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{item.metric}</span>
                      <span className="text-sm text-muted-foreground">
                        PoP: {((item.current - item.previous) / item.previous * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex h-8">
                      <div 
                        className="bg-muted flex items-center justify-center text-xs"
                        style={{ width: `${(item.previous / 250000) * 100}%` }}
                      >
                        PoP: 0.0%
                      </div>
                      <div 
                        className="bg-chart-1 flex items-center justify-center text-xs text-white"
                        style={{ width: `${(item.current / 250000) * 100}%` }}
                      >
                        PoP: {((item.current - item.previous) / item.previous * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>$0K</span>
                      <span>$250K</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KPIs */}
          <Card>
            <CardHeader>
              <CardTitle>KPIs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground">
                  <span></span>
                  <span>CPM</span>
                  <span>AOV</span>
                  <span>CPA</span>
                  <span>ROAS</span>
                </div>
                {kpiData.map((platform, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 items-center">
                    <span className="text-sm font-medium">{platform.platform}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-6 bg-chart-1 rounded flex items-center justify-center text-xs text-white">
                        ${platform.cpm}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-6 bg-chart-1 rounded flex items-center justify-center text-xs text-white">
                        ${platform.aov}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-6 bg-chart-1 rounded flex items-center justify-center text-xs text-white">
                        ${platform.cpa}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-6 bg-muted rounded flex items-center justify-center text-xs">
                        {platform.roas}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end items-center gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                    <span>Google Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted"></div>
                    <span>Meta Ads</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>AI-Generated Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Badge 
                      variant={insight.type === "positive" ? "default" : "destructive"}
                      className="mt-1"
                    >
                      {insight.type === "positive" ? "Opportunity" : "Alert"}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{insight.description}</p>
                      <p className="text-sm font-medium text-primary">
                        Recommended Action: {insight.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Ask Questions About Your Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Ask about performance, suggestions, or request chart modifications..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                className="flex-1"
              />
              <Button onClick={handleChatSubmit} disabled={!chatInput.trim()}>
                Send
              </Button>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 Try asking: "Which platform has the best ROI?" or "How can I improve my CTR?"
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Results;