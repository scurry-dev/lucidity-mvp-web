import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ResultsChatProps {
  onInsertReference: (text: string) => void;
  onChangeChart2Type: (type: "pie" | "bar") => void;
}

const ResultsChat = ({ onInsertReference, onChangeChart2Type }: ResultsChatProps) => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you analyze your report data. You can ask me questions about performance, request insights, or reference specific charts and metrics.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();

  const handleChatSubmit = () => {
    if (chatInput.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: chatInput,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Check if user wants to change chart 2 to bar chart
      if (chatInput.toLowerCase().includes("chart 2") && chatInput.toLowerCase().includes("bar chart")) {
        onChangeChart2Type("bar");
      }
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateAIResponse(chatInput),
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
      setChatInput("");
    }
  };

  const generateAIResponse = (input: string) => {
    if (input.toLowerCase().includes("chart 2") && input.toLowerCase().includes("bar chart")) {
      return "I've changed Chart 2 to a bar chart for you. The bar chart format makes it easier to compare conversion rates across platforms side by side.";
    }
    if (input.toLowerCase().includes("roi") || input.toLowerCase().includes("return")) {
      return "Based on your current data, Google Ads is showing the best ROI at 2.3x, followed by LinkedIn at 1.8x. I recommend increasing budget allocation to Google Ads campaigns by 20%.";
    }
    if (input.toLowerCase().includes("ctr") || input.toLowerCase().includes("click")) {
      return "Your overall CTR is 3.2%, which is above industry average. The search campaigns are performing particularly well with 4.1% CTR. Consider expanding similar ad copy to other campaign types.";
    }
    if (input.toLowerCase().includes("budget")) {
      return "Your current budget allocation shows potential for optimization. Consider shifting 15% from Meta Ads (higher CPC) to Google Ads (better conversion rate) for improved efficiency.";
    }
    return "I can help you analyze performance metrics, suggest optimizations, or provide insights about your campaign data. Try asking about ROI, CTR improvements, or budget allocation.";
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Message copied successfully",
    });
  };

  const quickActions = [
    "Which platform has the best ROI?",
    "How can I improve my CTR?",
    "Turn chart 2 into a bar chart",
    "Explain Insight 2 recommendations"
  ];

  return (
    <div className="h-full flex flex-col p-6">
      <div className="pb-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <MessageSquare className="h-5 w-5" />
          AI Report Assistant
        </h3>
      </div>
      
      <div className="flex-1 flex flex-col space-y-4">
        {/* Quick Actions */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Quick Questions:</p>
          <div className="grid grid-cols-1 gap-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal break-words"
                onClick={() => {
                  setChatInput(action);
                  onInsertReference(action);
                }}
              >
                {action}
              </Button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 min-h-[300px] max-h-[500px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 relative group break-words ${
                  message.isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyMessage(message.text)}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask about performance, request analysis, or reference report items..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
            className="flex-1"
          />
          <Button onClick={handleChatSubmit} disabled={!chatInput.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsChat;