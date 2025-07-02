# Mathland Critter Learn

> A character-driven mathematics learning platform focusing on data science fundamentals through interactive educational experiences.

## 🏗️ Project Structure

### **Clean Architecture Overview**

```
mathland-critter-learn/
├── docs/                          # 📚 All documentation
│   ├── development/              # Development guides & plans
│   └── architecture/             # Technical architecture docs
├── tools/                        # 🔧 Build tools & scripts
│   └── scripts/                  # Data processing utilities
├── public/                       # 🎨 Static assets (audio, images)
├── src/                          # 💻 Source code
│   ├── core/                     # Core application architecture
│   │   ├── components/           # React UI components
│   │   ├── pages/               # Application pages/routes
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Shared utilities
│   │   └── types/               # TypeScript definitions
│   ├── content/                  # 📖 Educational content
│   │   ├── lessons/             # Lesson JSON files
│   │   └── data/                # Static educational data
│   ├── interactive/              # 🎮 Interactive components
│   │   ├── components/          # Actual interactive React components
│   │   ├── demos/               # Demo registry & management
│   │   └── examples/            # Development prototypes (standalone)
│   └── utils/                   # Content processing utilities
└── config files...              # Build & development configuration
```

### **Key Design Principles**

#### **1. Separation of Concerns**
- **Core**: Application framework, UI components, business logic
- **Content**: Educational materials, lessons, static data
- **Interactive**: Educational interactive components and demos
- **Utils**: Content processing and data management

#### **2. Path Alias Strategy**
```typescript
// Import from core application
import { Button } from '@/core/components/ui/button';
import { LessonData } from '@/core/types/lesson';

// Import from interactive components  
import { customDoComponents } from '@/interactive';

// Import from content
import lessonData from '@/content/lessons/module1/lesson-1.1.json';
```

#### **3. Three-Tier Content System**
- **Tier 1**: Essential Interactive Components - Complex demos requiring real-time manipulation
- **Tier 2**: Enhanced Static Graphics - Visual content with template-driven design
- **Tier 3**: Character-Driven Narrative - Text-based explanations with character voices

## 🎯 Interactive Component Architecture

### **Component Locations**
- **Active Components**: `src/interactive/components/` - Used in lessons
- **Demo Registry**: `src/interactive/demos/` - Component management and discovery
- **Examples**: `src/interactive/examples/` - Standalone prototypes for reference

### **Integration with Lessons**
Interactive components integrate with lessons via the DoSection component:

```json
// In lesson JSON files
{
  "doType": "custom",
  "doComponent": "max_matrix_transformer",
  "doInstructions": "Use Max's Transformation Studio..."
}
```

### **Character-Specific Demos**
Each character has specialized interactive components aligned with their mathematical domains:

- **Vera**: Vector operations and spatial reasoning
- **Max**: Matrix transformations and systematic organization  
- **Bayes**: Probability and Bayesian inference
- **Eileen**: Eigenvalues and pattern discovery
- **Delta**: Calculus and change analysis
- **Greta**: Optimization and gradient methods

## 📚 Documentation Structure

### **Development Guides** (`docs/development/`)
- **interactive-demos-plan.md** - Comprehensive interactive component strategy
- **lesson-data-refactoring.md** - Lesson data architecture guidelines
- **type-safety-improvements.md** - TypeScript enhancement strategies
- **test-improvements.md** - Testing framework and standards

### **Architecture Docs** (`docs/architecture/`)
- **refactoring-summary.md** - Major structural changes overview
- **localstorage-refactoring.md** - Client-side storage strategy

## 🔧 Development Workflow

### **Adding New Interactive Components**
1. Create component in `src/interactive/components/`
2. Register in `src/interactive/demos/demo_registry.ts`
3. Export from `src/interactive/index.ts`
4. Reference in target lesson JSON file
5. Test integration via DoSection

### **Content Updates**
- **Lessons**: Edit JSON files in `src/content/lessons/`
- **Character Data**: Update `src/utils/characterData.ts`
- **Static Content**: Add to `src/content/data/`

### **Build Tools**
- **Data Processing**: `tools/scripts/` contains utilities for lesson data extraction and processing
- **Development Server**: `npm run dev` starts local development environment
- **Type Checking**: `npm run type-check` validates TypeScript across the project

## 🎮 Interactive Component Standards

### **Performance Requirements**
- 60fps animation for smooth interactions
- <2s component load time
- Mobile-responsive design with touch support
- Graceful degradation for older browsers

### **Educational Standards**
- Clear learning objectives tied to specific mathematical concepts
- Character voice integration that enhances understanding
- Immediate feedback for user interactions
- Progressive complexity from beginner to advanced

### **Technical Standards**
- TypeScript with strict type checking
- Consistent error handling and loading states
- Accessibility compliance (WCAG 2.1)
- Unit tests for mathematical functions

## 🚀 Getting Started

### **Development Setup**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Type checking
npm run type-check
```

### **Exploring the Codebase**
1. **Start with** `src/App.tsx` - Main application entry point
2. **Understand lessons** via `src/core/pages/LessonPage.tsx` 
3. **Explore interactive components** in `src/interactive/components/`
4. **Review documentation** in `docs/development/` for detailed guides

### **Contributing**
1. Follow the established directory structure
2. Use proper path aliases for imports
3. Maintain character voice authenticity in interactive components
4. Ensure educational effectiveness over technological complexity
5. Add documentation for new features or architectural changes

## 📊 Success Metrics

### **Educational Effectiveness**
- Time spent with interactive components (engagement)
- Concept comprehension improvement pre/post interaction
- Character voice recognition and educational enhancement

### **Technical Performance**
- Component load times and animation smoothness
- Cross-platform compatibility and accessibility compliance
- Code maintainability and type safety coverage

---

**Built with:** React, TypeScript, Tailwind CSS, Vite
**Educational Focus:** Data Science Mathematics via Character-Driven Learning
**Architecture:** Clean separation of core application, educational content, and interactive experiences 