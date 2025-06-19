import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Home, Clock, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LessonData } from "@/types/lesson";
import { NarrativeHook } from "./lesson/NarrativeHook";
import { LearningObjectives } from "./lesson/LearningObjectives";
import { MemoryAids } from "./lesson/MemoryAids";
import { ConceptCheck } from "./lesson/ConceptCheck";
import { RealWorldConnection } from "./lesson/RealWorldConnection";

interface LessonTemplateProps {
  lesson: LessonData;
  previousLessonId?: string;
  nextLessonId?: string;
}

export const LessonTemplate = ({ lesson, previousLessonId, nextLessonId }: LessonTemplateProps) => {
  const [activeTab, setActiveTab] = useState("read");
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [objectivesCompleted, setObjectivesCompleted] = useState<boolean[]>(
    new Array(lesson.learningObjectives.length).fill(false)
  );

  // Reset state when lesson changes
  useEffect(() => {
    setCompletedSections([]);
    setObjectivesCompleted(new Array(lesson.learningObjectives.length).fill(false));
    setActiveTab("read");
  }, [lesson.id, lesson.learningObjectives.length]);

  const markSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const toggleObjective = (index: number) => {
    const newObjectives = [...objectivesCompleted];
    newObjectives[index] = !newObjectives[index];
    setObjectivesCompleted(newObjectives);
  };

  // Fix progress calculation - count main sections only
  const totalSections = 5; // narrative, objectives, one tab content, memory, concept, realworld
  const progressPercentage = Math.round((completedSections.length / totalSections) * 100);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${lesson.character.color} from-opacity-10 to-opacity-20`}>
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to="/module-0">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Module 0
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              {previousLessonId && (
                <Link to={`/lesson/${previousLessonId}`}>
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                </Link>
              )}
              {nextLessonId && (
                <Link to={`/lesson/${nextLessonId}`}>
                  <Button size="sm" className={`bg-gradient-to-r ${lesson.character.color}`}>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Lesson Header */}
          <div className="flex items-center gap-4">
            <img 
              src={lesson.character.avatar} 
              alt={lesson.character.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-gray-500">Lesson {lesson.id}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {lesson.duration}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{lesson.title}</h1>
              <p className="text-sm text-gray-600">with {lesson.character.fullName}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{progressPercentage}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${lesson.character.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Narrative Hook */}
        <NarrativeHook 
          lesson={lesson} 
          onComplete={() => markSectionComplete('narrative')}
          isCompleted={completedSections.includes('narrative')}
        />

        {/* Learning Objectives */}
        <LearningObjectives 
          objectives={lesson.learningObjectives}
          completed={objectivesCompleted}
          onToggle={toggleObjective}
          onComplete={() => markSectionComplete('objectives')}
          isCompleted={completedSections.includes('objectives')}
        />

        {/* Multimodal Content Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Learning Content</span>
              <span className="text-sm font-normal text-gray-500">
                Choose your preferred learning style
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="read" className="flex items-center gap-2">
                  📖 Read
                </TabsTrigger>
                <TabsTrigger value="see" className="flex items-center gap-2">
                  👁 See
                </TabsTrigger>
                <TabsTrigger value="hear" className="flex items-center gap-2">
                  🎧 Hear
                </TabsTrigger>
                <TabsTrigger value="do" className="flex items-center gap-2">
                  🧪 Do
                </TabsTrigger>
              </TabsList>

              <TabsContent value="read" className="space-y-4">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{lesson.readContent}</p>
                </div>
                <Button 
                  onClick={() => markSectionComplete('read')}
                  className={`${completedSections.includes('read') ? 'bg-green-500' : `bg-gradient-to-r ${lesson.character.color}`}`}
                >
                  {completedSections.includes('read') ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark as Complete'
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="see" className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-gray-500 mb-4">Interactive Visualization Area</div>
                  <p className="text-gray-700">{lesson.seeContent}</p>
                  <div className="mt-4 p-4 bg-white rounded border-2 border-dashed border-gray-300">
                    <Play className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Visual content will be loaded here</p>
                  </div>
                </div>
                <Button 
                  onClick={() => markSectionComplete('see')}
                  className={`${completedSections.includes('see') ? 'bg-green-500' : `bg-gradient-to-r ${lesson.character.color}`}`}
                >
                  {completedSections.includes('see') ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark as Complete'
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="hear" className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={lesson.character.avatar} 
                      alt={lesson.character.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="text-gray-700">{lesson.hearContent}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-4 text-center">
                    <Play className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Audio player will be integrated here</p>
                  </div>
                </div>
                <Button 
                  onClick={() => markSectionComplete('hear')}
                  className={`${completedSections.includes('hear') ? 'bg-green-500' : `bg-gradient-to-r ${lesson.character.color}`}`}
                >
                  {completedSections.includes('hear') ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark as Complete'
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="do" className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Interactive Exercise</h4>
                  <p className="text-gray-700 mb-4">{lesson.doContent}</p>
                  <div className="bg-white rounded border-2 border-dashed border-blue-300 p-6 text-center">
                    <div className="text-blue-400 mb-2">🧪</div>
                    <p className="text-sm text-gray-500">Interactive exercises will be loaded here</p>
                  </div>
                </div>
                <Button 
                  onClick={() => markSectionComplete('do')}
                  className={`${completedSections.includes('do') ? 'bg-green-500' : `bg-gradient-to-r ${lesson.character.color}`}`}
                >
                  {completedSections.includes('do') ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark as Complete'
                  )}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Memory Aids */}
        <MemoryAids 
          memoryAids={lesson.memoryAids}
          character={lesson.character}
          onComplete={() => markSectionComplete('memory')}
          isCompleted={completedSections.includes('memory')}
        />

        {/* Concept Check */}
        <ConceptCheck 
          conceptCheck={lesson.conceptCheck}
          character={lesson.character}
          onComplete={() => markSectionComplete('concept')}
          isCompleted={completedSections.includes('concept')}
        />

        {/* Real-World Connection */}
        <RealWorldConnection 
          connection={lesson.realWorldConnection}
          onComplete={() => markSectionComplete('realworld')}
          isCompleted={completedSections.includes('realworld')}
        />
      </div>
    </div>
  );
};
