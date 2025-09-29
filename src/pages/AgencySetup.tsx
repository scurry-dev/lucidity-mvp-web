import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Settings, Plus, Trash2, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

// Import platform icons
import googleAdsIcon from "@/assets/google-ads-icon.png";
import metaIcon from "@/assets/meta-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import xIcon from "@/assets/x-icon.png";
import pinterestIcon from "@/assets/pinterest-icon.png";
import snapchatIcon from "@/assets/snapchat-icon.png";
import youtubeIcon from "@/assets/youtube-icon.png";

const AgencySetup = () => {
  const navigate = useNavigate();
  
  const [agencyInfo, setAgencyInfo] = useState({
    name: "TechStart Inc",
    website: "techstart.com",
    industry: "Technology",
    teamSize: "10-50"
  });

  const [platforms] = useState([
    { id: "google-ads", name: "Google Ads", icon: googleAdsIcon, connected: true, apiKey: "••••••••••••1234" },
    { id: "meta", name: "Meta Ads", icon: metaIcon, connected: true, apiKey: "••••••••••••5678" },
    { id: "tiktok", name: "TikTok Ads", icon: tiktokIcon, connected: false, apiKey: "" },
    { id: "linkedin", name: "LinkedIn Ads", icon: linkedinIcon, connected: true, apiKey: "••••••••••••9012" },
    { id: "x", name: "X Ads", icon: xIcon, connected: false, apiKey: "" },
    { id: "pinterest", name: "Pinterest Ads", icon: pinterestIcon, connected: false, apiKey: "" },
    { id: "snapchat", name: "Snapchat Ads", icon: snapchatIcon, connected: false, apiKey: "" },
    { id: "youtube", name: "YouTube Ads", icon: youtubeIcon, connected: false, apiKey: "" }
  ]);

  const [clients, setClients] = useState([
    { id: "1", name: "TechStart Inc", industry: "Technology", platforms: ["google-ads", "meta", "linkedin"] },
    { id: "2", name: "GreenLeaf Co", industry: "Sustainability", platforms: ["meta", "linkedin"] },
    { id: "3", name: "UrbanStyle", industry: "Fashion", platforms: ["meta", "tiktok"] }
  ]);

  const [newClient, setNewClient] = useState({ name: "", industry: "", platforms: [] as string[] });

  const addClient = () => {
    if (newClient.name && newClient.industry) {
      setClients([...clients, {
        id: Date.now().toString(),
        ...newClient
      }]);
      setNewClient({ name: "", industry: "", platforms: [] });
    }
  };

  const removeClient = (id: string) => {
    setClients(clients.filter(client => client.id !== id));
  };

  const toggleClientPlatform = (clientId: string, platformId: string) => {
    setClients(clients.map(client => {
      if (client.id === clientId) {
        const platforms = client.platforms.includes(platformId)
          ? client.platforms.filter(p => p !== platformId)
          : [...client.platforms, platformId];
        return { ...client, platforms };
      }
      return client;
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-1 px-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
            <img src={logo} alt="Lucidity" className="h-6 w-auto object-contain flex-shrink-0" />
            <span className="text-lg font-semibold truncate hidden sm:inline">Agency Setup</span>
            <span className="text-sm font-semibold truncate sm:hidden">Setup</span>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs flex-shrink-0">
            <Settings className="h-3 w-3" />
            <span className="hidden sm:inline">Configuration</span>
            <span className="sm:hidden">Config</span>
          </Badge>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="platforms" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="agency">Agency Info</TabsTrigger>
          </TabsList>

          <TabsContent value="platforms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connected Platforms</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Manage your advertising platform connections. These will be available when creating reports.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platforms.map((platform) => (
                    <Card key={platform.id} className={`relative ${platform.connected ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <img src={platform.icon} alt={platform.name} className="w-8 h-8" />
                          <div className="flex-1">
                            <h3 className="font-medium">{platform.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {platform.connected ? `API Key: ${platform.apiKey}` : 'Not connected'}
                            </p>
                          </div>
                          {platform.connected && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                        <Button 
                          variant={platform.connected ? "outline" : "default"} 
                          size="sm" 
                          className="w-full"
                        >
                          {platform.connected ? 'Reconnect' : 'Connect'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Management</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Add and manage clients. Assign platforms to each client for easy report generation.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Client */}
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-medium">Add New Client</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="client-name">Client Name</Label>
                      <Input
                        id="client-name"
                        value={newClient.name}
                        onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                        placeholder="Company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-industry">Industry</Label>
                      <Input
                        id="client-industry"
                        value={newClient.industry}
                        onChange={(e) => setNewClient({...newClient, industry: e.target.value})}
                        placeholder="e.g., Technology, Fashion"
                      />
                    </div>
                  </div>
                  <Button onClick={addClient} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Client
                  </Button>
                </div>

                {/* Existing Clients */}
                <div className="space-y-4">
                  {clients.map((client) => (
                    <Card key={client.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{client.name}</h3>
                            <p className="text-sm text-muted-foreground">{client.industry}</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeClient(client.id)}
                            className="text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-3">
                          <Label className="text-sm font-medium">Assigned Platforms</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {platforms.filter(p => p.connected).map((platform) => (
                              <div key={platform.id} className="flex items-center space-x-2">
                                <Switch
                                  checked={client.platforms.includes(platform.id)}
                                  onCheckedChange={() => toggleClientPlatform(client.id, platform.id)}
                                />
                                <img src={platform.icon} alt={platform.name} className="w-4 h-4" />
                                <span className="text-sm">{platform.name.replace(' Ads', '')}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agency" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agency Information</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Update your agency details and preferences.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agency-name">Agency Name</Label>
                    <Input
                      id="agency-name"
                      value={agencyInfo.name}
                      onChange={(e) => setAgencyInfo({...agencyInfo, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agency-website">Website</Label>
                    <Input
                      id="agency-website"
                      value={agencyInfo.website}
                      onChange={(e) => setAgencyInfo({...agencyInfo, website: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agency-industry">Primary Industry</Label>
                    <Input
                      id="agency-industry"
                      value={agencyInfo.industry}
                      onChange={(e) => setAgencyInfo({...agencyInfo, industry: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="team-size">Team Size</Label>
                    <Input
                      id="team-size"
                      value={agencyInfo.teamSize}
                      onChange={(e) => setAgencyInfo({...agencyInfo, teamSize: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="mt-4">Save Agency Information</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AgencySetup;
