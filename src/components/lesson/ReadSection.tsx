import { useState } from "react";
import { ChevronDown, ChevronUp, Info, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReadSectionProps {
  content?: string;
  analogy?: string;
  keyPoints?: string[];
  digDeeper?: string;
  whyMatters?: string;
}

export const ReadSection = ({
  content = "This is the main explanation of the concept, written in a friendly, scannable way. Use headings, short paragraphs, and lists for clarity.",
  analogy = "Imagine data as ingredients in a recipe. Just as you need the right mix for a tasty dish, you need the right data for good analysis!",
  keyPoints = [
    "Key Point 1: Data must be relevant.",
    "Key Point 2: Clean data leads to better results.",
    "Key Point 3: Always check for outliers."
  ],
  digDeeper = "In advanced data science, you might use statistical tests to identify outliers or automate data cleaning with scripts.",
  whyMatters = "Understanding this concept helps you avoid common pitfalls in real-world data analysis, saving time and improving accuracy."
}: ReadSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-500" />
        Read
      </h3>
      {/* Main Content */}
      <div className="text-slate-700 leading-relaxed mb-2">
        {content}
      </div>
      {/* Analogy */}
      <div className="bg-blue-50 border-l-4 border-blue-300 rounded-lg p-4 mb-2">
        <div className="font-semibold text-blue-800 mb-1">Analogy</div>
        <div className="italic text-blue-700">{analogy}</div>
      </div>
      {/* Key Points */}
      <div>
        <div className="font-semibold text-slate-800 mb-1">Key Points</div>
        <ul className="list-disc pl-6 space-y-1">
          {keyPoints.map((point, i) => (
            <li key={i} className="text-slate-700">{point}</li>
          ))}
        </ul>
      </div>
      {/* Dig Deeper (Expandable) */}
      <div>
        <button
          className="flex items-center gap-2 text-blue-600 font-medium hover:underline focus:outline-none mb-1"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          Dig Deeper
        </button>
        {expanded && (
          <div className="bg-slate-50 border-l-4 border-slate-300 rounded-lg p-4 mt-1 text-slate-700">
            {digDeeper}
          </div>
        )}
      </div>
      {/* Why This Matters */}
      <Card className="bg-yellow-50 border-l-4 border-yellow-400">
        <CardContent className="flex items-start gap-3 p-4">
          <Info className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
          <div>
            <div className="font-semibold text-yellow-900 mb-1">Why This Matters</div>
            <div className="text-yellow-800">{whyMatters}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 