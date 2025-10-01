import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";
import { ArrowLeft, Download, Share2, TrendingUp, TrendingDown, DollarSign, MousePointer } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
import ResultsChat from "@/components/ResultsChat";
import ReferencableItem from "@/components/ReferencableItem";

const Results = () => {
  const navigate = useNavigate();
  const [chatReference, setChatReference] = useState("");
  const [chart2Type, setChart2Type] = useState<"pie" | "bar">("pie");

  // Mock data for charts
  const performanceData = [
    { month: "Jan", clicks: 12400, conversions: 1240, cost: 8500 },
    { month: "Feb", clicks: 13200, conversions: 1450, cost: 9200 },
    { month: "Mar", clicks: 15800, conversions: 1680, cost: 10100 },
    { month: "Apr", clicks: 14600, conversions: 1520, cost: 9800 },
    { month: "May", clicks: 16900, conversions: 1890, cost: 11200 },
    { month: "Jun", clicks: 18200, conversions: 2100, cost: 12000 }
  ];

  const platformData = [
    { platform: "Google Ads", conversions: 4450, clicks: 35200, rate: 12.6, color: "#60A5FA" },
    { platform: "Meta Ads", conversions: 2964, clicks: 28600, rate: 10.4, color: "#A78BFA" },
    { platform: "TikTok", conversions: 1482, clicks: 18500, rate: 8.0, color: "#F87171" },
    { platform: "LinkedIn", conversions: 988, clicks: 8800, rate: 11.2, color: "#6EE7B7" }
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

  const handleChatReference = (reference: string) => {
    setChatReference(reference);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-1 px-2 flex-shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
            <img src={logo} alt="Lucidity" className="h-6 w-auto object-contain flex-shrink-0" />
            <span className="text-lg font-semibold truncate hidden md:inline">TechStart Inc - H1 2024 Report</span>
            <span className="text-sm font-semibold truncate md:hidden">TechStart Report</span>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button variant="outline" size="sm" className="flex items-center gap-1 px-2">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button size="sm" className="flex items-center gap-1 px-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export PDF</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Summary Cards */}
            <ReferencableItem id="metrics-overview" title="Key Metrics Overview" type="metric" onReference={handleChatReference}>
              <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91,100</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary flex items-center gap-1">
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
                <span className="text-primary flex items-center gap-1">
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
                <span className="text-primary flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" />
                  -3.1%
                </span>
                from last period
              </p>
            </CardContent>
          </Card>
              </div>
            </ReferencableItem>

            <div className="grid lg:grid-cols-2 gap-6">
          {/* Performance Chart */}
          <ReferencableItem id="chart-1" title="Performance Trends" type="chart" onReference={handleChatReference}>
            <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" strokeOpacity={0.5} />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="clicks" 
                    stroke="#60A5FA" 
                    strokeWidth={2}
                    strokeOpacity={0.8}
                    name="Clicks"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#A78BFA" 
                    strokeWidth={2}
                    strokeOpacity={0.8}
                    name="Conversions"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            </Card>
          </ReferencableItem>

          {/* Platform Distribution */}
          <ReferencableItem id="chart-2" title="Conversion Rates by Platform" type="chart" onReference={handleChatReference}>
            <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Conversion Rates by Platform</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ResponsiveContainer width="100%" height={300}>
                {chart2Type === "pie" ? (
                  <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="rate"
                    label={({ cx, cy, midAngle, outerRadius, rate, fill }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = outerRadius + 25;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill={fill}
                          textAnchor={x > cx ? 'start' : 'end'} 
                          dominantBaseline="central"
                          className="text-xs font-medium"
                        >
                          {`${rate}%`}
                        </text>
                      );
                    }}
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: data.color }}
                              />
                              <span className="font-medium">{data.platform}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Conversion Rate: {data.rate}%
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {data.conversions.toLocaleString()} conversions from {data.clicks.toLocaleString()} clicks
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
                ) : (
                  <BarChart data={platformData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" strokeOpacity={0.5} />
                    <XAxis dataKey="platform" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload[0]) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <div 
                                  className="w-3 h-3 rounded-full" 
                                  style={{ backgroundColor: data.color }}
                                />
                                <span className="font-medium">{data.platform}</span>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Conversion Rate: {data.rate}%
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {data.conversions.toLocaleString()} conversions from {data.clicks.toLocaleString()} clicks
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="rate">
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {platformData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.platform}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            </Card>
          </ReferencableItem>
            </div>

            {/* AI Insights */}
            <ReferencableItem id="insights" title="AI-Generated Insights & Recommendations" type="insight" onReference={handleChatReference}>
              <Card>
          <CardHeader>
            <CardTitle>AI-Generated Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <ReferencableItem 
                  key={index} 
                  id={`insight-${index + 1}`} 
                  title={insight.title} 
                  type="insight" 
                  onReference={handleChatReference}
                >
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Badge 
                        variant={insight.type === "positive" ? "default" : "destructive"}
                        className="mt-1 w-28 justify-center"
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
                </ReferencableItem>
              ))}
            </div>
          </CardContent>
              </Card>
            </ReferencableItem>
          </div>

          {/* AI Chat Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 h-fit">
              <ResultsChat onInsertReference={handleChatReference} onChangeChart2Type={setChart2Type} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;