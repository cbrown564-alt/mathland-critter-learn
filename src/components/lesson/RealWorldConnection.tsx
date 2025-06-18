
import { useState } from "react";
import { Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RealWorldConnectionProps {
  connection: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export const RealWorldConnection = ({ connection, onComplete, isCompleted }: RealWorldConnectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8 border-l-4 border-l-orange-400">
      <CardHeader 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            🌍 Real-World Connection
            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
          </span>
          <span className="text-sm font-normal text-gray-500">
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Why This Matters in Data Science</h4>
                <p className="text-gray-700 leading-relaxed">{connection}</p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={onComplete}
            className={`${isCompleted ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'}`}
            size="sm"
          >
            {isCompleted ? 'Connection Understood' : 'I See the Connection!'}
          </Button>
        </CardContent>
      )}
    </Card>
  );
};
