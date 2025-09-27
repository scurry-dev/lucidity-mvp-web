import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReferencableItemProps {
  id: string;
  title: string;
  type: "chart" | "insight" | "metric";
  children: React.ReactNode;
  onReference?: (reference: string) => void;
}

const ReferencableItem = ({ id, title, type, children, onReference }: ReferencableItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const getTypeColor = () => {
    switch (type) {
      case "chart": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "insight": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "metric": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const handleReference = () => {
    const reference = `Reference ${type} "${title}" (${id})`;
    if (onReference) {
      onReference(reference);
    }
    navigator.clipboard.writeText(reference);
    toast({
      title: "Reference copied",
      description: `${type} reference copied to clipboard`,
    });
  };

  const handleChatReference = () => {
    const chatPrompt = `Analyze ${type} "${title}" and provide insights`;
    if (onReference) {
      onReference(chatPrompt);
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Reference controls */}
      {isHovered && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          <Badge className={getTypeColor()}>
            {id}
          </Badge>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleReference}
            className="h-7 px-2"
          >
            <Copy className="h-3 w-3 mr-1" />
            Ref
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleChatReference}
            className="h-7 px-2"
          >
            <MessageSquare className="h-3 w-3 mr-1" />
            Ask
          </Button>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default ReferencableItem;