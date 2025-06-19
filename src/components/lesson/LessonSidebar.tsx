
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CharacterAvatar } from "@/components/CharacterAvatar";

interface LessonSidebarProps {
  character: {
    name: string;
    fullName: string;
    personality: string;
    avatar: string;
  };
  sections: Array<{
    id: string;
    title: string;
  }>;
  currentSection: string;
  completedSections: Set<string>;
  onSectionChange: (sectionId: string) => void;
  onToggleSection: (sectionId: string) => void;
}

export const LessonSidebar = ({ 
  character, 
  sections, 
  currentSection, 
  completedSections, 
  onSectionChange, 
  onToggleSection 
}: LessonSidebarProps) => {
  return (
    <Card className="sticky top-32">
      <CardContent className="p-6">
        {/* Character */}
        <div className="flex items-center gap-3 mb-6">
          <CharacterAvatar 
            src={character.avatar} 
            alt={character.fullName}
            size="xl"
          />
          <div>
            <h3 className="font-semibold text-slate-800">{character.name}</h3>
            <p className="text-sm text-slate-600">{character.personality}</p>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="space-y-2">
          <h4 className="font-medium text-slate-800 mb-3">Lesson Sections</h4>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-sm transition-colors ${
                currentSection === section.id
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "hover:bg-slate-50 text-slate-700"
              }`}
            >
              <span>{section.title}</span>
              <div className="flex items-center gap-2">
                {completedSections.has(section.id) && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSection(section.id);
                  }}
                  className={`w-4 h-4 rounded border-2 ${
                    completedSections.has(section.id)
                      ? "bg-green-500 border-green-500"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
