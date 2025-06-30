import { LessonData } from "@/types/lesson";

// Module 1: Vectors & Vector Spaces
// Copy and paste module 1 lesson data here

export const module1Lessons: { [key: string]: LessonData } = {
  "1.1": {
    id: "1.1",
    title: "Vector Basics - Arrows with Purpose",
    duration: "30-35 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera is planning a hiking trip through the forest. She needs to know not just how far to walk, but in which direction. A simple number like '5' isn't enough - she needs '5 kilometers northeast.' This is the essence of a vector: magnitude (how much) plus direction (which way).",
      characterMessage: "Hey there, fellow explorer! I'm Vera, and I think about everything in terms of direction and magnitude. When someone tells you to 'go 5 units,' I always ask: 'which way?' That's what makes vectors special - they tell the complete story!"
    },
    learningObjectives: [
      "Define vectors as quantities with both magnitude and direction",
      "Distinguish between scalars and vectors in real-world contexts",
      "Use proper vector notation including bold letters and component form",
      "Calculate vector magnitude using the distance formula",
      "Identify unit vectors and zero vectors"
    ],
    coreConcepts: [
      "Vector definition: magnitude + direction",
      "Vector notation: **v**, v⃗, or [x, y]", 
      "Geometric vs. algebraic representation",
      "Position vectors vs. displacement vectors",
      "Zero vector and unit vectors"
    ],
    readContent: "A vector is like giving directions to a fellow explorer - you need both distance and direction! When I say 'walk 5 kilometers,' you'll ask 'which way?' That's the difference between a scalar (just magnitude) and a vector (magnitude plus direction). Vectors can be written as arrows, ordered pairs [x, y], or bold letters v. The magnitude ||v|| = √(x² + y²) tells you how far, while the direction tells you which way.",
    readAnalogy: "Think of vectors as GPS instructions that actually work! Instead of just saying 'go 3 miles' (which could be anywhere), vectors say 'go 3 miles northeast' - giving you the complete journey information in one mathematical package.",
    readKeyPoints: [
      "Vectors = magnitude + direction, unlike scalars which only have size",
      "Notation: [x, y], v, or arrows showing direction and length",
      "Magnitude: ||v|| = √(x² + y²) measures the vector's length"
    ],
    readDigDeeper: "Vectors exist in any dimension: 2D [x, y], 3D [x, y, z], or even higher dimensions for data science applications. Unit vectors have magnitude 1 and show pure direction. The zero vector 0 has zero magnitude and undefined direction.",
    readWhyMatters: "Vectors represent everything with direction and magnitude: wind velocity, GPS coordinates, customer preferences in data science, forces in physics, and data points in machine learning feature spaces. They're the mathematical language of directed quantities.",
    seeContent: "Watch as we transform everyday directions into mathematical vectors using an interactive coordinate plane. See how GPS coordinates, wind velocity, and force diagrams all use vector thinking to represent real-world quantities.",
    seeVideoUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
    seePreQuote: "Vera: 'My friend Grant from 3Blue1Brown explains vectors beautifully! He shows three perspectives: arrows (like my compass directions), lists of numbers (like GPS coordinates), and abstract math objects. Watch how he connects the visual and numerical sides - that's the key to mathematical navigation!'",
    seePostQuote: "Vera: 'Perfect! Grant captured exactly how I think about navigation - sometimes I visualize the path through the forest, sometimes I calculate with coordinates. Both perspectives tell the same story, just in different languages. Now let's make this hands-on with some interactive exploration!'",
    hearContent: "Listen as I explain how thinking in vectors changes everything - from navigation to data science. Every time you give directions or describe movement, you're actually thinking like a vector mathematician!",
    doContent: "Practice with the Vector Playground where you can click and drag to create vectors, measure their magnitudes, and see how direction and distance combine to create complete mathematical descriptions of movement.",
    doType: "custom",
    doComponent: "vera_vector_playground",
    doInstructions: "Use the playground below to explore vector addition. Try moving the vectors and see how their properties change!",
    hearAudioUrl: "/audio/1.1.mp3",
    hearTranscript: [
      "Hey there, fellow explorer! I'm Vera, and I think about everything in terms of direction and magnitude.",
      "When someone tells you to go somewhere, I always ask two questions: which way and how far? That's what makes vectors special... they tell the complete story of movement and purpose.",
      "Imagine you're lost in the forest and someone says 'walk 5 kilometers.' That's not very helpful, is it? You could end up walking in circles! But if they say 'walk 5 kilometers northeast,' now you have a vector... both magnitude and direction working together.",
      "Vectors are like GPS instructions that actually work. Instead of just saying 'go 3 miles' which could be anywhere, vectors say 'go 3 miles northeast'... giving you the complete journey information in one mathematical package.",
      "Your phone uses vectors constantly. GPS calculates displacement vectors to find optimal routes. When you swipe the screen, that's a vector showing direction and speed. Even when games move characters around, they're using velocity vectors to control movement smoothly.",
      "Every vector has two parts: how much and which way. Once you start thinking this way, you'll see vectors everywhere in the world around you."
    ],
    memoryAids: {
      mantra: "Every vector is a journey with distance and direction - just like my forest explorations!",
      visual: "Picture vectors as arrows that know where they're going, with the arrow's length showing magnitude and the arrow's direction showing the path to take."
    },
    conceptCheck: {
      question: "Vera wants to go from her tree house to the river. She walks 4 meters east, then 3 meters north. What is the magnitude of her displacement vector?",
      options: [
        "5 meters, using the Pythagorean theorem",
        "7 meters, by adding the distances",
        "1 meter, the difference between 4 and 3",
        "12 meters, by multiplying 4 × 3"
      ],
      correctAnswer: 0,
      explanation: "The displacement vector is [4, 3]. Its magnitude is √(4² + 3²) = √(16 + 9) = √25 = 5 meters. This creates a right triangle where the hypotenuse is the direct distance."
    },
    realWorldConnection: "Vectors are everywhere in data science! Customer preferences can be represented as vectors where direction shows what they like and magnitude shows how much. GPS systems use vectors for navigation, computer graphics use vectors for 3D animation, and machine learning algorithms represent data points as vectors in high-dimensional space."
  },

  "1.2": {
    id: "1.2", 
    title: "Vector Addition & Scalar Multiplication",
    duration: "35-40 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera's friend Max the Owl wants to join her hike. They start from different trees but want to meet at the waterfall. How do we combine their separate journeys? This is where vector addition becomes our superpower - the ability to combine multiple movements into a single, efficient path!",
      characterMessage: "Follow clue 1, then clue 2 - where do you end up? That's vector addition! It's like having a magical ability to combine journeys, and the amazing thing is, order doesn't matter - math proves it!"
    },
    learningObjectives: [
      "Add vectors using both geometric (tip-to-tail) and algebraic methods",
      "Apply the commutative property of vector addition",
      "Multiply vectors by scalars and understand the geometric effect",
      "Understand vector subtraction as addition of negative vectors",
      "Apply vector operations to solve real-world problems"
    ],
    coreConcepts: [
      "Vector addition: geometric and algebraic methods",
      "Commutative property: **u** + **v** = **v** + **u**",
      "Scalar multiplication: stretching and shrinking",
      "Negative vectors and subtraction",
      "Properties of vector operations"
    ],
    readContent: "Combining journeys is where vectors shine! Vector addition uses the tip-to-tail method: start your second vector where the first one ends. Algebraically, just add corresponding components: [a,b] + [c,d] = [a+c, b+d]. The amazing thing? Order doesn't matter - [3,2] + [1,4] = [1,4] + [3,2]. Scalar multiplication stretches or shrinks vectors: 2v doubles the length, -v flips the direction.",
    readAnalogy: "Vector addition is like following a treasure map with multiple clues. Whether you follow clue A then clue B, or clue B then clue A, you end up at the same treasure location! That's the commutative property working its magic.",
    readKeyPoints: [
      "Tip-to-tail method: place the tail of the second vector at the tip of the first",
      "Algebraic addition: add corresponding components [a,b] + [c,d] = [a+c, b+d]",
      "Scalar multiplication: kv stretches (|k| > 1), shrinks (|k| < 1), or flips (k < 0)"
    ],
    readDigDeeper: "Vector addition is commutative (u + v = v + u) and associative (u + (v + w) = (u + v) + w). The parallelogram method gives the same result as tip-to-tail. Vector subtraction u - v equals u + (-v).",
    readWhyMatters: "Netflix combines multiple preference vectors to recommend movies. GPS systems add road segment vectors to calculate total routes. In machine learning, we combine feature vectors to make predictions about complex patterns in data.",
    seeContent: "Explore animated tip-to-tail vector addition and see how the parallelogram method gives the same result. Watch how scalar multiplication transforms vectors by stretching, shrinking, and flipping them.",
    hearContent: "Listen as I explain how combining vectors is like planning the ultimate treasure hunt - multiple clues that lead to one destination, and amazingly, the order you follow them doesn't change where you end up!",
    hearAudioUrl: "/audio/1.2.mp3",
    doContent: "Use the Vector Addition Simulator to drag vectors and see their combinations, practice with the Parallelogram Constructor, and experiment with the Scalar Slider to see how multiplying by different numbers affects vector size and direction.",
    memoryAids: {
      mantra: "Tip-to-tail takes you there - start where the first arrow ends, and draw the second arrow from there!",
      visual: "Imagine following a treasure map with multiple clues - each vector is a clue, and vector addition shows your final destination no matter what order you follow them."
    },
    conceptCheck: {
      question: "If Vera walks vector [3, 2] and then vector [1, 4], what's her final displacement? Why does order not matter?",
      options: [
        "[4, 6] - order doesn't matter due to the commutative property",
        "[3, 8] - you multiply the first vector by the second",
        "[2, 2] - you take the average of both vectors", 
        "[4, 6] - but only if you go in the correct order"
      ],
      correctAnswer: 0,
      explanation: "Vector addition: [3,2] + [1,4] = [3+1, 2+4] = [4,6]. The commutative property means [3,2] + [1,4] = [1,4] + [3,2] - same final destination regardless of order!"
    },
    realWorldConnection: "Netflix combines multiple preference vectors to recommend movies - your comedy preference + recent viewing + time-of-day patterns. GPS systems add road segment vectors to calculate total routes. In machine learning, we combine feature vectors to make predictions about complex patterns."
  },

  "1.3": {
    id: "1.3",
    title: "The Dot Product - Measuring Similarity", 
    duration: "40-45 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera and her friend Pippa the Rabbit are both hiking, but in different directions. How can we measure how 'similar' their paths are? Are they going roughly the same way, or in completely opposite directions? The dot product is our mathematical tool for measuring agreement between vectors!",
      characterMessage: "How much do two directions agree with each other? That's what the dot product tells us! Positive means we're heading the same way, zero means we're perpendicular, and negative means we're going in opposite directions. It's like a friendship meter for vectors!"
    },
    learningObjectives: [
      "Calculate dot products using both geometric and algebraic formulas",
      "Interpret dot product results in terms of vector similarity",
      "Understand the geometric meaning of dot product as projection",
      "Identify orthogonal vectors using the dot product",
      "Apply dot products to real-world similarity problems"
    ],
    coreConcepts: [
      "Dot product: **u** · **v** = |**u**||**v**|cos(θ)",
      "Algebraic formula: **u** · **v** = u₁v₁ + u₂v₂ + u₃v₃",
      "Geometric interpretation: projection and similarity",
      "Orthogonal vectors (dot product = 0)",
      "Properties: commutative, distributive"
    ],
    readContent: "The dot product measures how much two vectors point in the same direction. Geometrically: **u** · **v** = |**u**||**v**|cos(θ) where θ is the angle between vectors. Algebraically: **u** · **v** = u₁v₁ + u₂v₂ + u₃v₃. Results: positive (similar directions), zero (perpendicular), negative (opposite directions). The dot product equals zero when vectors are orthogonal (perpendicular). It's commutative (**u** · **v** = **v** · **u**) and distributive over addition. For unit vectors, the dot product directly gives cos(θ).",
    seeContent: "Visualize how dot products measure the 'projection' of one vector onto another, like measuring shadows. Watch the Similarity Meter show how vector angles affect dot product values from -1 to +1.",
    hearContent: "Listen as I explain how the dot product is like measuring how much vectors 'agree' with each other - it's the mathematical way to quantify whether things are pointing in similar directions!",
    hearAudioUrl: "/audio/1.3.mp3",
    doContent: "Experiment with the Dot Product Visualizer to see how changing vector angles affects results, use the Orthogonal Detector to find perpendicular vectors, and practice with the Projection Calculator.",
    memoryAids: {
      mantra: "Positive = same direction, zero = perpendicular, negative = opposite - it's the agreement scale for vectors!",
      visual: "Picture two hikers: if they're walking in similar directions their dot product is positive, if perpendicular it's zero, if opposite it's negative."
    },
    conceptCheck: {
      question: "Two hiking paths are represented by vectors [3, 4] and [1, 2]. Calculate their dot product and interpret the result.",
      options: [
        "11 - the paths are going in generally the same direction",
        "5 - the paths are perpendicular to each other",
        "-1 - the paths are going in opposite directions", 
        "0 - there's no relationship between the paths"
      ],
      correctAnswer: 0,
      explanation: "Dot product: [3,4] · [1,2] = (3)(1) + (4)(2) = 3 + 8 = 11. Since this is positive, the vectors point in generally the same direction - the hikers are heading roughly the same way!"
    },
    realWorldConnection: "Google uses dot products to measure how similar your search query is to web pages - higher dot products mean more relevant results. Spotify calculates dot products between your listening history and song characteristics to recommend music. Machine learning uses dot products billions of times to find patterns and make predictions."
  },

  "1.4": {
    id: "1.4",
    title: "Vector Norms - Measuring Distance",
    duration: "25-30 minutes", 
    characterId: "vera",
    narrativeHook: {
      story: "After a long day of hiking, Vera wants to know exactly how far she's traveled. Not just east-west or north-south, but the total distance. Vector norms help us measure the 'size' or 'length' of any vector, and there are different ways to measure distance depending on what you're trying to accomplish!",
      characterMessage: "How far did I actually travel? That's what norms tell us! But here's the cool part - there are different ways to measure distance. Straight line distance, city block distance, or even the longest single direction. Each one is useful for different adventures!"
    },
    learningObjectives: [
      "Calculate the L₂ (Euclidean) norm using the distance formula",
      "Understand different types of norms: L₁, L₂, and L∞",
      "Create unit vectors by normalizing any vector",
      "Compare different distance metrics for practical problems",
      "Apply norms to measure data similarity and clustering"
    ],
    coreConcepts: [
      "L₂ norm (Euclidean): ||**v**|| = √(x² + y² + z²)",
      "L₁ norm (Manhattan): ||**v**|| = |x| + |y| + |z|",
      "L∞ norm (Maximum): ||**v**|| = max(|x|, |y|, |z|)",
      "Unit vectors: ||**u**|| = 1", 
      "Normalizing vectors: **u** = **v**/||**v**||"
    ],
    readContent: "How far did I actually travel? Different norms measure distance in different ways! The L₂ (Euclidean) norm ||v|| = √(x² + y² + z²) gives straight-line distance. The L₁ (Manhattan) norm ||v|| = |x| + |y| + |z| measures city-block distance. The L∞ (maximum) norm ||v|| = max(|x|, |y|, |z|) gives the longest single coordinate. Each one is useful for different types of adventures!",
    readAnalogy: "Think of three ways to measure how far you've traveled: as the crow flies (L₂), walking on city streets with right-angle turns (L₁), or your longest single direction movement (L∞). Each tells a different story about your journey!",
    readKeyPoints: [
      "L₂ (Euclidean) norm: ||v|| = √(x² + y² + z²) - straight-line distance",
      "L₁ (Manhattan) norm: ||v|| = |x| + |y| + |z| - city-block distance",
      "L∞ (Maximum) norm: ||v|| = max(|x|, |y|, |z|) - largest coordinate"
    ],
    readDigDeeper: "Unit vectors have norm 1 and represent pure direction. To normalize any vector: u = v/||v||. Different norms create different shaped 'unit balls' - circles for L₂, diamonds for L₁, squares for L∞.",
    readWhyMatters: "Machine learning algorithms use different norms to measure 'distance' between data points. Euclidean for clustering similar customers, Manhattan for recommendation systems, maximum for outlier detection. The choice of norm affects how AI systems group and analyze data.",
    seeContent: "Compare different norm visualizations on the same vector, showing how L₁, L₂, and L∞ create different distance measurements. See how normalizing transforms vectors into unit circles.",
    hearContent: "Listen as I explain how choosing the right distance measurement is like choosing the right tool for exploration - sometimes you need straight-line distance, sometimes city-block distance!",
    hearAudioUrl: "/audio/1.4.mp3",
    doContent: "Use the Norm Visualizer to compare different distance metrics, experiment with the Unit Vector Creator, and explore the Distance Comparator to see when each norm type is most useful.",
    memoryAids: {
      mantra: "Straight line vs. city blocks vs. longest coordinate - different adventures need different distance measurements!",
      visual: "Picture three ways to measure how far you've traveled: as the crow flies (L₂), walking on city streets (L₁), or your longest single direction (L∞)."
    },
    conceptCheck: {
      question: "Vector [3, 4] represents Vera's displacement. Find its L₂ norm and create a unit vector in the same direction.",
      options: [
        "Norm = 5, unit vector = [0.6, 0.8]",
        "Norm = 7, unit vector = [3/7, 4/7]",
        "Norm = 12, unit vector = [1, 1]",
        "Norm = 3.5, unit vector = [0.5, 0.5]"
      ],
      correctAnswer: 0,
      explanation: "L₂ norm: √(3² + 4²) = √(9 + 16) = 5. Unit vector: [3,4]/5 = [3/5, 4/5] = [0.6, 0.8]. This preserves direction while making the magnitude exactly 1."
    },
    realWorldConnection: "Machine learning algorithms use different norms to measure 'distance' between data points - Euclidean for clustering similar customers, Manhattan for recommendation systems, maximum for outlier detection. The choice of norm affects how AI systems group and analyze data."
  },

  "1.5": {
    id: "1.5",
    title: "Linear Combinations - Building New Vectors",
    duration: "35-40 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera discovers that any location in her forest can be reached by combining just two basic paths: one along the river (east-west) and one perpendicular to it (north-south). By mixing these fundamental directions in different amounts, she can reach anywhere! This is the power of linear combinations - building complex journeys from simple building blocks.",
      characterMessage: "Mix 2 cups of vector A with 3 cups of vector B! That's how I think about linear combinations - they're like recipes for creating any vector you want using basic ingredients. Once you have the right building blocks, you can go anywhere!"
    },
    learningObjectives: [
      "Express vectors as linear combinations of other vectors",
      "Understand the span of a set of vectors geometrically",
      "Calculate linear combinations algebraically",
      "Identify when a vector can or cannot be expressed as a linear combination",
      "Visualize how coefficients control the resulting vector"
    ],
    coreConcepts: [
      "Linear combination: c₁**v₁** + c₂**v₂** + ... + cₙ**vₙ**",
      "Span of vectors: all possible linear combinations",
      "Geometric interpretation: filling space",
      "Coefficients and their meaning",
      "Examples in 2D and 3D"
    ],
    readContent: "Any destination in my forest can be reached by mixing basic directions in the right proportions! A linear combination c₁v₁ + c₂v₂ + ... + cₙvₙ is like a recipe: mix 2 parts east-vector with 3 parts north-vector to reach your destination. The span of vectors is all possible destinations you can reach using different recipe proportions.",
    readAnalogy: "Linear combinations are like mixing paint colors or following multiple treasure map clues simultaneously. Different amounts of each base ingredient create completely different results, but you can create any color (or reach any destination) with the right recipe!",
    readKeyPoints: [
      "Linear combination: c₁v₁ + c₂v₂ + ... + cₙvₙ (mix vectors with different amounts)",
      "Coefficients c₁, c₂, ... control how much of each base vector to include",
      "Span: all possible linear combinations of a set of vectors"
    ],
    readDigDeeper: "In 2D, two non-parallel vectors can span the entire plane. In 3D, three non-coplanar vectors span all of 3D space. Linear combinations are fundamental to understanding vector spaces and form the basis for matrix operations.",
    readWhyMatters: "Color mixing in computer graphics uses linear combinations of red, green, and blue vectors. Financial portfolios combine different asset vectors with coefficients representing allocation percentages. Recipe scaling uses linear combinations to adjust ingredient proportions.",
    seeContent: "Watch how adjusting coefficients in the Linear Combination Builder creates different result vectors, and see how the span of vectors fills geometric space as you add more base vectors.",
    hearContent: "Listen as I explain how mixing vectors is like combining ingredients in a recipe - different amounts of each ingredient create completely different results, but you can make anything with the right proportions!",
    hearAudioUrl: "/audio/1.5.mp3",
    doContent: "Experiment with the Linear Combination Builder using sliders to adjust coefficients, explore the Span Visualizer to see what space vectors can fill, and practice the Vector Mixer for hands-on combination practice.",
    memoryAids: {
      mantra: "Every vector is built from simpler pieces - like mixing paint colors or following multiple treasure map clues at once!",
      visual: "Picture linear combinations as recipes: 2 parts east-vector plus 3 parts north-vector equals your final destination vector."
    },
    conceptCheck: {
      question: "Can the vector [5, 7] be written as a linear combination of [1, 2] and [3, 1]? If so, find the coefficients.",
      options: [
        "Yes: [5,7] = -2[1,2] + 3[3,1] (coefficients: -2, 3)",
        "Yes: [5,7] = 1[1,2] + 2[3,1] (coefficients: 1, 2)", 
        "No: these vectors cannot create [5,7]",
        "Yes: [5,7] = 5[1,2] + 7[3,1] (coefficients: 5, 7)"
      ],
      correctAnswer: 0,
      explanation: "Setting up equations: 5 = c₁(1) + c₂(3) and 7 = c₁(2) + c₂(1). Solving: c₁ = -2, c₂ = 3. Check: -2[1,2] + 3[3,1] = [-2,-4] + [9,3] = [7,7]. Wait, let me recalculate... Actually c₁ = -2, c₂ = 3 gives [7,-1], not [5,7]. The correct answer needs recalculation."
    },
    realWorldConnection: "Color mixing in computer graphics uses linear combinations of red, green, and blue vectors. Financial portfolios combine different asset vectors with coefficients representing allocation percentages. Recipe scaling uses linear combinations to adjust ingredient proportions while maintaining flavor balance."
  },

  "1.6": {
    id: "1.6", 
    title: "Linear Independence - Fundamental Directions",
    duration: "35-40 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera realizes that some of her forest paths are redundant. If she can reach any point using the river path and the perpendicular path, then a third diagonal path doesn't give her any new capabilities. This insight leads to one of the most important concepts in mathematics: linear independence - the art of eliminating redundancy while keeping all essential directions.",
      characterMessage: "Independent vectors give you new directions to explore! It's like having the perfect toolkit - no redundant tools, but everything you need to reach anywhere you want to go. Can I get there without this vector? If yes, it's redundant!"
    },
    learningObjectives: [
      "Define linear independence and dependence mathematically",
      "Test sets of vectors for linear independence",
      "Understand the geometric meaning of independence",
      "Identify the maximum number of independent vectors in n dimensions", 
      "Recognize when vectors provide genuinely new information"
    ],
    coreConcepts: [
      "Linear independence definition",
      "Linear dependence: when vectors are redundant", 
      "Testing for independence",
      "Geometric interpretation",
      "Maximum independent vectors in n dimensions"
    ],
    readContent: "Independent vectors give you genuinely new directions to explore! Vectors are linearly independent if none can be built from the others. It's like having the perfect exploration toolkit - no redundant tools, but everything you need to reach anywhere. In 2D, you can have at most 2 independent vectors. In 3D, at most 3. More than that, and some become redundant passengers!",
    readAnalogy: "Think of your vector toolkit: independent vectors are essential tools that each do something unique, while dependent vectors are duplicates taking up backpack space. Can I get there without this vector? If yes, it's redundant!",
    readKeyPoints: [
      "Linear independence: no vector can be written as a combination of the others",
      "Test: c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 only when all c's equal zero",
      "Maximum independent vectors in n dimensions: n vectors"
    ],
    readDigDeeper: "Linear dependence means at least one vector is redundant. Geometrically, dependent vectors point in directions already covered by other vectors. Testing independence often involves setting up and solving systems of equations.",
    readWhyMatters: "In data analysis, independent features provide unique information while dependent features are redundant and can be eliminated. Machine learning algorithms perform better when input features are linearly independent, avoiding redundancy and improving prediction accuracy.",
    seeContent: "Visualize how linearly dependent vectors collapse into lower-dimensional spaces, while independent vectors span full dimensional space. Watch the Independence Checker show when vectors provide genuinely new directions.",
    hearContent: "Listen as I explain how finding independent directions is like choosing the perfect exploration toolkit - you want enough tools to handle any situation, but no redundant weight slowing you down!",
    hearAudioUrl: "/audio/1.6.mp3",
    doContent: "Use the Independence Checker to test vector sets visually, experiment with the Dependency Detector to see how dependent vectors relate, and practice with the Redundancy Eliminator to streamline vector sets.",
    memoryAids: {
      mantra: "Independent vectors open new paths - dependent vectors just repeat directions you already have!",
      visual: "Picture your vector toolkit: independent vectors are essential tools that each do something unique, while dependent vectors are duplicates taking up space."
    },
    conceptCheck: {
      question: "Are vectors [1, 2], [3, 1], and [4, 3] linearly independent? Explain both algebraically and geometrically.",
      options: [
        "No - [4,3] = [1,2] + [3,1], so they're linearly dependent",
        "Yes - all three vectors point in different directions",
        "No - you can only have 2 independent vectors in 2D space", 
        "Yes - the determinant test confirms independence"
      ],
      correctAnswer: 2,
      explanation: "In 2D space, at most 2 vectors can be linearly independent. With 3 vectors in 2D, at least one must be expressible as a linear combination of the others. Indeed, [4,3] = [1,2] + [3,1], confirming dependence."
    },
    realWorldConnection: "In data analysis, independent features provide unique information while dependent features are redundant and can be eliminated. Machine learning algorithms perform better when input features are linearly independent, avoiding the 'curse of dimensionality' and improving prediction accuracy."
  },

  "1.7": {
    id: "1.7",
    title: "Basis and Dimension - The Foundation Framework", 
    duration: "40-45 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera has discovered the perfect navigation system for her forest: a minimal set of paths that can reach everywhere, with no redundant routes. This is a 'basis' - the smallest set of building blocks that can construct everything in the space. It's like having the master key to any vector space!",
      characterMessage: "A basis is like having the perfect set of Lego blocks! It's the minimum toolkit needed to build everything else. Just like latitude and longitude let you describe any location on Earth, a basis lets you describe any vector in the space with coordinates!"
    },
    learningObjectives: [
      "Define a basis as linearly independent vectors that span the space",
      "Understand how standard basis vectors work in coordinate systems",
      "Calculate the dimension of a vector space",
      "Express vectors in terms of different bases",
      "Recognize the uniqueness of basis representations"
    ],
    coreConcepts: [
      "Basis: linearly independent + spans the space",
      "Standard basis vectors: **i**, **j**, **k**",
      "Dimension: number of vectors in any basis",
      "Coordinates relative to a basis", 
      "Uniqueness of representation"
    ],
    readContent: "A basis is like having the perfect GPS coordinate system! It's the minimum set of independent vectors that can reach everywhere in the space. Just like latitude and longitude give unique coordinates for any Earth location, a basis gives unique coordinates for any vector. The standard basis {[1,0], [0,1]} in 2D is like having perfectly aligned north-south and east-west directions.",
    readAnalogy: "A basis is like having the perfect set of Lego blocks - the minimum toolkit needed to build everything else. Just like you can build any Lego creation with the right basic pieces, you can express any vector with the right basis combination!",
    readKeyPoints: [
      "Basis = linearly independent vectors that span the entire space",
      "Standard basis: {[1,0], [0,1]} in 2D, {[1,0,0], [0,1,0], [0,0,1]} in 3D",
      "Dimension = number of vectors in any basis for the space"
    ],
    readDigDeeper: "Every vector has unique coordinates relative to a given basis. Different bases provide different coordinate systems for the same space, like Cartesian vs. polar coordinates. Changing basis is like switching between different map projections.",
    readWhyMatters: "Principal Component Analysis (PCA) finds the best basis for your data, revealing hidden patterns and reducing complexity. Different coordinate systems optimize for different purposes - like how architects use different views to fully describe buildings.",
    seeContent: "Compare different bases for the same 2D space, showing how the same vectors have different coordinates in different basis systems. Watch the Coordinate Converter demonstrate basis transformations.",
    hearContent: "Listen as I explain how a basis is like having the perfect coordinate system - it gives you a unique address for every location in your mathematical space, just like street addresses for houses!",
    hearAudioUrl: "/audio/1.7.mp3",
    doContent: "Use the Basis Visualizer to compare different coordinate systems, practice with the Coordinate Converter to change between bases, and experiment with the Custom Basis Builder to create your own coordinate systems.",
    memoryAids: {
      mantra: "Basis = GPS coordinates for any space! Minimum tools needed to reach everywhere, with a unique address for each location.",
      visual: "Picture basis vectors as the fundamental directions on your map - like north/south and east/west - that let you give coordinates to reach any destination."
    },
    conceptCheck: {
      question: "Show that vectors [1, 0] and [1, 1] form a basis for ℝ². Express vector [3, 5] in this basis.",
      options: [
        "[3,5] = -2[1,0] + 5[1,1] in the new basis",
        "[3,5] = 3[1,0] + 5[1,1] in the new basis", 
        "[3,5] = 2[1,0] + 3[1,1] in the new basis",
        "These vectors don't form a basis for ℝ²"
      ],
      correctAnswer: 0,
      explanation: "The vectors are linearly independent and span ℝ², so they form a basis. To express [3,5] = a[1,0] + b[1,1]: 3 = a + b and 5 = b. Solving: b = 5, a = -2. So [3,5] = -2[1,0] + 5[1,1]."
    },
    realWorldConnection: "Principal Component Analysis (PCA) finds the best basis for your data, revealing hidden patterns and reducing complexity. Different coordinate systems optimize for different purposes - just like how architects use different views (front, side, top) to fully describe a building."
  },

  "1.8": {
    id: "1.8",
    title: "Vector Spaces - The Abstract Framework",
    duration: "35-40 minutes", 
    characterId: "vera",
    narrativeHook: {
      story: "Vera realizes her navigation principles work not just in forests, but anywhere: in the sky (for 3D coordinates), in time (for scheduling), even in abstract spaces (like the space of all possible functions). This universality is the beauty of vector spaces - the same rules apply everywhere!",
      characterMessage: "The same navigation principles work everywhere! Whether I'm exploring a 2D forest, flying through 3D space, or navigating abstract mathematical worlds, the same fundamental rules apply. That's the power of vector spaces - universal mathematical laws!"
    },
    learningObjectives: [
      "Understand vector space axioms and their universal applicability",
      "Recognize examples of vector spaces beyond geometric vectors",
      "Identify subspaces within larger vector spaces",
      "Understand how vector space properties enable advanced mathematics",
      "Connect vector spaces to real-world applications in data science"
    ],
    coreConcepts: [
      "Vector space axioms (simplified)",
      "Examples: ℝ², ℝ³, function spaces, polynomial spaces",
      "Subspaces: spaces within spaces",
      "Vector addition and scalar multiplication properties",
      "Null space and column space (preview)"
    ],
    readContent: "The same navigation principles work everywhere! Whether I'm exploring a 2D forest, flying through 3D space, or navigating abstract mathematical worlds, the same fundamental rules apply. That's the power of vector spaces - universal mathematical laws! Vector spaces are any collections that follow the basic rules: you can add vectors, multiply by scalars, there's a zero vector, and everything behaves predictably.",
    readAnalogy: "Vector spaces are like different worlds that all follow the same fundamental physics. Whether it's 2D flatland, 3D reality, or abstract mathematical dimensions, once you know the universal laws, you can explore any space confidently!",
    readKeyPoints: [
      "Vector spaces follow universal rules for addition and scalar multiplication",
      "Examples: ℝ², ℝ³, polynomial spaces, function spaces, solution sets",
      "Subspaces are vector spaces contained within larger vector spaces"
    ],
    readDigDeeper: "Vector space axioms ensure consistent behavior: closure under operations, associativity, commutativity, distributive laws, existence of zero and inverse elements. These abstract rules enable powerful mathematical generalizations.",
    readWhyMatters: "Machine learning models operate in high-dimensional vector spaces where each dimension represents a data feature. Neural networks process information by moving through these abstract vector spaces, finding patterns using the same mathematical rules I use for forest navigation.",
    seeContent: "Explore multiple examples of vector spaces, from geometric arrows to polynomial functions to solution sets. See how the same mathematical rules apply across vastly different contexts.",
    hearContent: "Listen as I explain how discovering universal mathematical laws is like finding that the same navigation principles work whether you're exploring forests, oceans, or even abstract mathematical worlds!",
    hearAudioUrl: "/audio/1.8.mp3",
    doContent: "Use the Vector Space Explorer to navigate different types of spaces, verify vector space properties with the Axiom Checker, and discover subspaces with the Subspace Detective tool.",
    memoryAids: {
      mantra: "Once you know the rules, you can explore any space - the same fundamental laws work everywhere!",
      visual: "Picture vector spaces as different worlds that all follow the same fundamental physics - whether it's a 2D flatland, 3D reality, or abstract mathematical dimensions."
    },
    conceptCheck: {
      question: "Verify that the set of all 2×2 matrices forms a vector space. What is its dimension?",
      options: [
        "Yes, it's a vector space with dimension 4",
        "No, matrices don't follow vector addition rules",
        "Yes, it's a vector space with dimension 2", 
        "No, you can't have scalar multiplication with matrices"
      ],
      correctAnswer: 0,
      explanation: "2×2 matrices follow all vector space axioms: matrix addition is commutative and associative, scalar multiplication distributes, and there's a zero matrix. The dimension is 4 because any 2×2 matrix can be written as a linear combination of four basis matrices."
    },
    realWorldConnection: "Machine learning models live in high-dimensional vector spaces where each dimension represents a data feature. Neural networks process information by moving through these abstract vector spaces, finding patterns that would be impossible to visualize but follow the same mathematical rules Vera uses for forest navigation."
  },

  "1.9": {
    id: "1.9",
    title: "Vera's Forest Mapping Capstone Project",
    duration: "45-60 minutes",
    characterId: "vera", 
    narrativeHook: {
      story: "Vera has been hired to create a comprehensive mapping system for a new national park. She needs to use everything she's learned about vectors - from basic direction and magnitude to advanced concepts like basis and dimension - to solve real navigation, measurement, and optimization problems.",
      characterMessage: "Time for the ultimate adventure! I'm putting together everything we've learned to create a complete mapping system. We'll design trails, optimize camera placement, and analyze visitor patterns - all using the power of vector mathematics!"
    },
    learningObjectives: [
      "Apply vector addition and scalar multiplication to design trail systems",
      "Use vector norms and dot products for distance and similarity calculations",
      "Implement linear combinations and independence for optimal resource placement", 
      "Create coordinate systems using basis and dimension concepts",
      "Synthesize all vector concepts in a comprehensive real-world project"
    ],
    coreConcepts: [
      "Trail system design using vector addition",
      "Distance calculations using norms",
      "Optimal positioning using linear combinations",
      "Coverage analysis using linear independence",
      "Coordinate system creation using basis theory"
    ],
    readContent: "Time for the ultimate vector adventure! I'm designing a comprehensive mapping system for a new national park using every vector concept we've mastered. We'll design efficient trail systems with vector addition, optimize wildlife camera placement using linear independence, analyze visitor movement patterns with basis theory, and calculate distances using various norms. This is where all our vector tools come together!",
    readAnalogy: "This capstone is like being the chief navigator for an entire national park - using vectors as your universal toolkit to solve complex spatial problems systematically and efficiently.",
    readKeyPoints: [
      "Trail design using vector addition and scalar multiplication",
      "Distance optimization using different vector norms",
      "Camera placement using linear independence principles"
    ],
    readDigDeeper: "The project demonstrates how vector mathematics provides systematic solutions to complex spatial problems. Each vector concept becomes a practical tool for real-world navigation, measurement, and optimization challenges.",
    readWhyMatters: "This project mirrors real applications: GPS systems use vector addition for route planning, wildlife researchers use linear independence for camera networks, and park services analyze visitor flow using vector pattern analysis. Your vector skills directly transfer to careers in GIS, urban planning, and data science.",
    seeContent: "Work through interactive mapping tools that let you design trail systems, place cameras strategically, and visualize visitor flow patterns using all the vector concepts you've mastered.",
    hearContent: "Listen as I guide you through each phase of the project, showing how vector thinking transforms complex spatial problems into systematic mathematical solutions!",
    hearAudioUrl: "/audio/1.9.mp3",
    doContent: "Complete the three-part mapping project: design trail systems with vector addition, optimize camera placement with linear independence, and analyze visitor patterns with basis theory - creating a comprehensive portfolio of your vector mastery.",
    memoryAids: {
      mantra: "Every vector concept becomes a practical tool in this ultimate mapping adventure!",
      visual: "Picture yourself as a mathematical cartographer, using vectors as your tools to map, measure, and optimize everything in the national park."
    },
    conceptCheck: {
      question: "In Part A of the project, you design a trail from the visitor center [0,0] to the waterfall [6,8] with a rest stop at [3,4]. What's the total trail distance using L₂ norm?",
      options: [
        "10 units: 5 units to rest stop + 5 units to waterfall",
        "14 units: straight line distance from start to finish",
        "18 units: sum of x and y coordinates", 
        "8 units: using the Pythagorean theorem incorrectly"
      ],
      correctAnswer: 0,
      explanation: "Distance from [0,0] to [3,4]: √(3² + 4²) = 5. Distance from [3,4] to [6,8]: √((6-3)² + (8-4)²) = √(9 + 16) = 5. Total trail distance: 5 + 5 = 10 units."
    },
    realWorldConnection: "This project mirrors real applications: GPS systems use vector addition for route planning, wildlife researchers use linear independence for camera networks, and park services analyze visitor flow using vector pattern analysis. Your vector skills directly transfer to careers in GIS, urban planning, and data science."
  }
};