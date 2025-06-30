import { LessonData } from "@/types/lesson";

// Module 2: Matrices & Linear Mappings
// Copy and paste module 2 lesson data here

export const module2Lessons: { [key: string]: LessonData } = {
  "2.1": {
    id: "2.1",
    title: "Matrix Basics - Organizing Information Systematically",
    duration: "30-35 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Matrix Max the Owl has a problem: he needs to organize information about hundreds of forest locations, each with multiple attributes like elevation, tree density, water sources, and wildlife counts. A simple list won't work - he needs a systematic grid where he can find any piece of information instantly. This is where matrices shine: organized, systematic information management.",
      characterMessage: "I organize worlds—row by row, column by column! Think of a matrix as the ultimate filing cabinet where every piece of information has a precise address. Row 3, Column 2? I can find that data instantly! Let me show you how systematic organization transforms chaos into clarity."
    },
    learningObjectives: [
      "Define matrices as rectangular arrays of numbers with systematic organization",
      "Understand matrix dimensions and element addressing using row-column notation",
      "Distinguish between different types of matrices (square, rectangular, zero, identity)",
      "Navigate matrix structure and locate specific elements efficiently",
      "Recognize real-world applications where matrix organization is essential"
    ],
    coreConcepts: [
      "Matrix definition and structure",
      "Matrix dimensions (m × n)",
      "Element notation: A[i,j] or aᵢⱼ",
      "Special matrices: zero, identity, diagonal",
      "Square vs rectangular matrices"
    ],
    readContent: "A matrix is a rectangular array of numbers organized in rows and columns, providing systematic storage and manipulation of multi-dimensional data. Matrix dimensions are expressed as m × n (m rows, n columns). Elements are accessed using notation A[i,j] or aᵢⱼ for the element in row i, column j. Special matrices include the zero matrix (all elements zero), identity matrix (1s on diagonal, 0s elsewhere), and diagonal matrices. Matrices enable efficient organization of data relationships, from simple tables to complex transformations in computer graphics and machine learning.",
    readAnalogy: "Imagine the most perfectly organized library ever built - every book has a precise location (row, shelf), and you can find any information instantly by knowing its address. That's what matrices do for mathematical information!",
    readKeyPoints: [
      "Matrix dimensions: m × n means m rows by n columns",
      "Element addressing: A[i,j] means row i, column j - always row first!",
      "Special types: square (same rows/columns), zero (all zeros), identity (1s on diagonal)"
    ],
    readDigDeeper: "Matrices can represent various mathematical objects: transformation rules, systems of equations, data tables, adjacency graphs, and probability transitions. The organizational structure enables systematic manipulation of complex information.",
    readWhyMatters: "Matrices organize data everywhere: spreadsheets store business information in matrix form, digital images are matrices of pixel values, recommendation systems use matrices to relate users to products, and GPS systems represent road networks as matrices for navigation calculations.",
    seeContent: "Explore interactive matrix grids showing how information gets organized systematically. See how changing matrix dimensions affects data storage capacity and watch real-world examples like spreadsheets, image pixels, and database tables.",
    hearContent: "Listen as I explain how organizing information systematically is like having a perfectly arranged library - every book has its place, and you can find anything instantly when you know the organizational system!",
    hearAudioUrl: "/audio/2.1.mp3",
    doContent: "Practice with the Matrix Builder to create different sized matrices, use the Element Locator to find specific positions, and experiment with the Matrix Type Identifier to recognize different matrix categories.",
    memoryAids: {
      mantra: "Row by row, column by column - every piece of information has its perfect place in my organized world!",
      visual: "Picture Max's filing cabinet: rows are like file drawers, columns are like folders within drawers, and each element is a specific document with a precise address."
    },
    conceptCheck: {
      question: "In a 3×4 matrix representing forest data, what does element A[2,3] represent, and how many total elements are in the matrix?",
      options: [
        "Element in row 2, column 3; total of 12 elements",
        "Element in row 3, column 2; total of 7 elements",
        "Element in row 2, column 3; total of 6 elements",
        "The 23rd element; total of 34 elements"
      ],
      correctAnswer: 0,
      explanation: "A[2,3] means row 2, column 3. A 3×4 matrix has 3 rows and 4 columns, so total elements = 3 × 4 = 12. Matrix addressing always follows [row, column] convention."
    },
    realWorldConnection: "Matrices organize data everywhere: spreadsheets store business information in matrix form, digital images are matrices of pixel values, recommendation systems use matrices to relate users to products, and GPS systems use matrices to represent road networks for navigation calculations."
  },

  "2.2": {
    id: "2.2",
    title: "Matrix Addition & Scalar Multiplication",
    duration: "25-30 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max needs to combine data from two different forest surveys: spring wildlife counts and summer wildlife counts. How do you systematically combine two organized datasets? Matrix addition lets Max merge corresponding information perfectly, while scalar multiplication lets him scale entire datasets when needed.",
      characterMessage: "Combining organized information is like merging two perfectly aligned filing systems! Element by element, position by position, we can add corresponding data or scale entire datasets. The systematic organization makes everything predictable and reliable."
    },
    learningObjectives: [
      "Add matrices by combining corresponding elements systematically",
      "Multiply matrices by scalars to scale entire datasets uniformly",
      "Understand when matrix addition is possible (same dimensions required)",
      "Apply the commutative and associative properties of matrix addition",
      "Recognize the zero matrix as the additive identity"
    ],
    coreConcepts: [
      "Matrix addition: element-wise operation",
      "Scalar multiplication: uniform scaling",
      "Dimension compatibility for addition",
      "Properties: commutative, associative",
      "Zero matrix as additive identity"
    ],
    readContent: "Matrix addition combines two matrices of the same dimensions by adding corresponding elements: C[i,j] = A[i,j] + B[i,j]. Matrices must have identical dimensions for addition to be defined. Scalar multiplication multiplies every element by the same number: (kA)[i,j] = k·A[i,j]. Matrix addition is commutative (A + B = B + A) and associative (A + (B + C) = (A + B) + C). The zero matrix (all elements zero) serves as the additive identity. These operations form the foundation for more complex matrix manipulations and linear transformations.",
    readAnalogy: "Matrix addition is like combining two identical spreadsheets by adding corresponding cells. Scalar multiplication is like adjusting every number in a spreadsheet by the same percentage - systematic scaling of organized information.",
    readKeyPoints: [
      "Addition rule: C[i,j] = A[i,j] + B[i,j] for corresponding elements",
      "Dimension requirement: matrices must be the same size for addition",
      "Scalar multiplication: multiply every element by the same constant"
    ],
    readDigDeeper: "Matrix addition is commutative (A + B = B + A) and associative (A + (B + C) = (A + B) + C). The zero matrix serves as the additive identity. These properties make matrix spaces behave like familiar number systems.",
    readWhyMatters: "Financial analysts add quarterly matrices to get annual totals, image processing combines pixel matrices for blending effects, and machine learning algorithms add gradient matrices during optimization to systematically improve model performance.",
    seeContent: "Watch matrix addition happen element by element in an interactive grid, and see how scalar multiplication uniformly scales all values. Observe how dimension mismatches prevent addition and how the zero matrix behaves as an identity.",
    hearContent: "Listen as I explain how combining systematic information is like perfectly aligning two filing cabinets and merging their contents - everything has to match up precisely for the combination to work!",
    hearAudioUrl: "/audio/2.2.mp3",
    doContent: "Use the Matrix Combiner to practice addition with visual feedback, experiment with the Scalar Multiplier to see uniform scaling effects, and test the Dimension Checker to understand compatibility requirements.",
    memoryAids: {
      mantra: "Same position, same purpose - that's how organized information combines systematically!",
      visual: "Picture two identical filing cabinets where you combine contents of each matching drawer and folder position, or use a photocopier to scale an entire filing system larger or smaller."
    },
    conceptCheck: {
      question: "If Matrix A represents spring wildlife counts and Matrix B represents summer counts, what does 2A + B represent ecologically?",
      options: [
        "Double the spring counts plus summer counts - weighted seasonal analysis",
        "Spring counts squared plus summer counts",
        "Average of spring and summer counts",
        "The difference between seasons"
      ],
      correctAnswer: 0,
      explanation: "2A + B means each spring count is doubled, then added to the corresponding summer count. This could represent giving spring data twice the weight in a seasonal analysis model."
    },
    realWorldConnection: "Financial analysts add quarterly earnings matrices to get annual totals, image processing combines pixel matrices for blending effects, and machine learning algorithms add gradient matrices during optimization to improve model performance systematically."
  },

  "2.3": {
    id: "2.3", 
    title: "Matrix Multiplication - Systematic Transformation",
    duration: "40-45 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max discovers something profound: when he organizes transformation rules in one matrix and data in another, matrix multiplication systematically applies every transformation to every piece of data simultaneously. It's like having a master processor that can transform entire datasets with mathematical precision.",
      characterMessage: "This is where my organizational superpowers really shine! Matrix multiplication isn't just calculation - it's systematic transformation. I can take transformation rules, organize them perfectly, and apply them to entire datasets at once. It's like conducting an orchestra where every instrument knows exactly what to play!"
    },
    learningObjectives: [
      "Calculate matrix products using the row-column dot product method",
      "Understand when matrix multiplication is defined (inner dimensions must match)",
      "Recognize that matrix multiplication is not commutative",
      "Interpret matrix multiplication as systematic transformation application",
      "Apply matrix multiplication to solve systems and perform transformations"
    ],
    coreConcepts: [
      "Matrix multiplication algorithm (row × column)",
      "Dimension compatibility (m×n)(n×p) = (m×p)",
      "Non-commutative property: AB ≠ BA generally",
      "Matrix multiplication as transformation",
      "Applications in systems and graphics"
    ],
    readContent: "Matrix multiplication combines two matrices by taking dot products of rows from the first matrix with columns from the second matrix. For A (m×n) and B (n×p), the product AB is (m×p) where element C[i,j] equals the dot product of row i from A with column j from B. The inner dimensions must match (n=n) while outer dimensions (m,p) determine the result size. Unlike addition, matrix multiplication is not commutative: AB ≠ BA in general. Matrix multiplication represents systematic application of transformations, making it fundamental to computer graphics, solving linear systems, and data processing.",
    readAnalogy: "Matrix multiplication is like having a perfectly organized assembly line where each worker (row) processes multiple products (columns) simultaneously using systematic rules. Every combination gets processed according to precise organizational protocols.",
    readKeyPoints: [
      "Multiplication rule: C[i,j] = (row i of A) · (column j of B)",
      "Dimension compatibility: (m×n)(n×p) = (m×p) - inner dimensions must match",
      "Non-commutative: AB ≠ BA in general - order matters!"
    ],
    readDigDeeper: "Matrix multiplication represents function composition, where applying transformation B then A equals applying transformation AB. This operation is associative (A(BC) = (AB)C) but not commutative, reflecting the order-dependent nature of transformations.",
    readWhyMatters: "Computer graphics multiply transformation matrices to rotate, scale, and translate 3D objects. Neural networks use matrix multiplication billions of times during training to process data through layers. Economic models multiply input-output matrices to predict how sector changes affect entire economies.",
    seeContent: "Watch step-by-step matrix multiplication with highlighted row-column combinations, see how dimension mismatches prevent multiplication, and explore how matrix products represent transformations of geometric objects.",
    hearContent: "Listen as I explain how matrix multiplication is like having a perfectly organized assembly line where each worker (row) processes multiple products (columns) simultaneously using systematic rules!",
    hearAudioUrl: "/audio/2.3.mp3",
    doContent: "Practice with the Matrix Multiplier showing step-by-step calculations, use the Dimension Compatibility Checker, and experiment with the Transformation Visualizer to see matrix multiplication as geometric transformation.",
    memoryAids: {
      mantra: "Row meets column, dot product magic - systematic transformation of organized information!",
      visual: "Picture Max as an orchestra conductor: each row represents an instrument section, each column represents a musical phrase, and multiplication creates the perfect harmony of systematic transformation."
    },
    conceptCheck: {
      question: "Why can't you multiply a 3×2 matrix by a 3×4 matrix, but you can multiply a 3×2 by a 2×4?",
      options: [
        "Inner dimensions must match: (3×2)(2×4) works because 2=2, but (3×2)(3×4) fails because 2≠3",
        "You can only multiply square matrices",
        "The first matrix must be larger than the second",
        "Matrix multiplication requires the same dimensions"
      ],
      correctAnswer: 0,
      explanation: "For matrix multiplication A×B, the number of columns in A must equal the number of rows in B. (3×2)(2×4) works: inner dimensions 2=2. (3×2)(3×4) fails: inner dimensions 2≠3."
    },
    realWorldConnection: "Computer graphics multiply transformation matrices to rotate, scale, and translate 3D objects. Neural networks use matrix multiplication billions of times during training to process data through layers. Economic models multiply input-output matrices to predict how sector changes affect entire economies."
  },

  "2.4": {
    id: "2.4",
    title: "Identity Matrix & Matrix Inverses",
    duration: "35-40 minutes", 
    characterId: "max",
    narrativeHook: {
      story: "Max discovers the mathematical equivalent of a mirror and a universal undo button. The identity matrix reflects any data back unchanged, while inverse matrices provide the exact reverse of any transformation. It's like having perfect organizational tools that can preserve or perfectly reverse any systematic change.",
      characterMessage: "Every organized system needs a 'do nothing' operation and an 'undo' operation! The identity matrix is my perfect mirror - it reflects everything back exactly as it came in. And inverse matrices? They're my mathematical time machines that can perfectly reverse any transformation!"
    },
    learningObjectives: [
      "Understand the identity matrix as the multiplicative identity",
      "Calculate 2×2 matrix inverses using the determinant formula",
      "Determine when matrices are invertible vs singular",
      "Apply matrix inverses to solve linear equations", 
      "Recognize geometric interpretations of identity and inverse transformations"
    ],
    coreConcepts: [
      "Identity matrix: I with 1s on diagonal, 0s elsewhere",
      "Matrix inverse: A⁻¹ where AA⁻¹ = I",
      "2×2 inverse formula using determinant",
      "Singular vs invertible matrices",
      "Applications in solving Ax = b"
    ],
    readContent: "The identity matrix I has 1s on the main diagonal and 0s elsewhere, serving as the multiplicative identity: AI = IA = A for any compatible matrix A. The inverse of matrix A, denoted A⁻¹, satisfies AA⁻¹ = A⁻¹A = I. For a 2×2 matrix [[a,b],[c,d]], the inverse is (1/det(A))[[d,-b],[-c,a]] where det(A) = ad-bc. If det(A) = 0, the matrix is singular (non-invertible). Matrix inverses solve linear systems: if Ax = b, then x = A⁻¹b. Geometrically, the identity preserves all transformations while inverses exactly reverse them.",
    readAnalogy: "The identity matrix is like a perfect photocopier that reproduces everything exactly. Matrix inverses are like having a universal 'undo' button that can perfectly reverse any systematic transformation.",
    readKeyPoints: [
      "Identity matrix: I has 1s on diagonal, 0s elsewhere - the multiplicative identity",
      "Inverse property: AA⁻¹ = A⁻¹A = I",
      "2×2 inverse formula: A⁻¹ = (1/det(A))[[d,-b],[-c,a]] when det(A) ≠ 0"
    ],
    readDigDeeper: "If det(A) = 0, the matrix is singular (non-invertible) because it collapses space to lower dimensions. Only square matrices can have inverses, and the inverse is unique when it exists. Matrix inverses solve linear systems: if Ax = b, then x = A⁻¹b.",
    readWhyMatters: "Computer graphics use inverse matrices to undo rotations and translations. Cryptography employs matrix inverses for encoding and decoding secret messages. Economic models use inverses to determine input requirements when desired outputs are specified.",
    seeContent: "Watch the identity matrix act as a perfect mirror, see 2×2 inverse calculations step-by-step, and observe how multiplying a matrix by its inverse produces the identity matrix through interactive visualization.",
    hearContent: "Listen as I explain how the identity matrix is like having a perfect filing system that returns everything exactly as you put it in, while inverse matrices are like having perfect organizational reversal tools!",
    hearAudioUrl: "/audio/2.4.mp3",
    doContent: "Use the Identity Matrix Demonstrator to see preservation properties, practice with the 2×2 Inverse Calculator showing detailed steps, and experiment with the Inverse Tester to verify AA⁻¹ = I.",
    memoryAids: {
      mantra: "Identity preserves everything perfectly, inverse undoes everything completely - the ultimate organizational tools!",
      visual: "Picture the identity as Max's perfect mirror that reflects everything unchanged, and inverses as his mathematical time machine that can perfectly reverse any systematic transformation."
    },
    conceptCheck: {
      question: "Find the inverse of matrix [[3,1],[2,1]] and verify your answer.",
      options: [
        "Inverse is [[1,-1],[-2,3]], verification: [[3,1],[2,1]][[1,-1],[-2,3]] = [[1,0],[0,1]]",
        "Inverse is [[1,1],[2,3]], verification gives [[5,4],[4,5]]",
        "Matrix has no inverse because det = 0",
        "Inverse is [[1/3,1],[1/2,1]] by dividing each element"
      ],
      correctAnswer: 0,
      explanation: "det = 3(1) - 1(2) = 1. Inverse = (1/1)[[1,-1],[-2,3]] = [[1,-1],[-2,3]]. Verification: [[3,1],[2,1]][[1,-1],[-2,3]] = [[3-2,−3+3],[2-2,−2+3]] = [[1,0],[0,1]] ✓"
    },
    realWorldConnection: "Computer graphics use inverse matrices to undo rotations and translations. Cryptography employs matrix inverses for encoding and decoding secret messages. Economic models use inverses to determine input requirements when desired outputs are specified."
  },

  "2.5": {
    id: "2.5",
    title: "Determinants & Matrix Properties", 
    duration: "35-40 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max needs to measure the 'power' of his transformation matrices. How much do they stretch or shrink areas? Do they flip orientations? The determinant is Max's mathematical measuring tool that captures the essential transformation strength and behavior of any matrix in a single number.",
      characterMessage: "Every transformation has a signature number that tells its complete story! The determinant measures transformation power - how much does it stretch or shrink areas (2D) or volumes (3D)? For 2×2 matrices: det(A) = ad - bc. The absolute value |det(A)| shows the scaling factor, while the sign indicates orientation: positive preserves orientation, negative flips it like a mirror. If det(A) = 0, the transformation collapses everything to a lower dimension - it's singular and non-invertible."
    },
    learningObjectives: [
      "Calculate determinants for 2×2 and 3×3 matrices",
      "Interpret determinants as area/volume scaling factors",
      "Understand the relationship between determinants and matrix invertibility",
      "Recognize how determinants indicate orientation preservation or reversal",
      "Apply determinant properties to solve practical problems"
    ],
    coreConcepts: [
      "2×2 determinant: det([[a,b],[c,d]]) = ad - bc",
      "3×3 determinant using cofactor expansion",
      "Geometric interpretation: area/volume scaling",
      "det(A) = 0 ↔ matrix is singular",
      "Determinant properties and applications"
    ],
    readContent: "The determinant of a matrix measures how much the matrix transformation scales areas (2D) or volumes (3D). For 2×2 matrix [[a,b],[c,d]], det(A) = ad - bc. For 3×3 matrices, use cofactor expansion along any row or column. Geometrically, |det(A)| gives the scaling factor for areas/volumes, while the sign indicates orientation: positive preserves orientation, negative reverses it. If det(A) = 0, the matrix collapses space to lower dimension and is non-invertible (singular). If det(A) ≠ 0, the matrix is invertible with det(A⁻¹) = 1/det(A).",
    readAnalogy: "The determinant is like measuring the transformation DNA of any matrix - it tells you exactly how powerful the transformation is and whether it flips things around!",
    readKeyPoints: [
      "2×2 determinant: det([[a,b],[c,d]]) = ad - bc",
      "3×3 determinant: cofactor expansion - systematic way to calculate",
      "Geometric interpretation: area/volume scaling",
      "Sign: positive preserves orientation, negative reverses it",
      "Singular vs invertible matrices"
    ],
    readDigDeeper: "The determinant is a powerful tool for understanding matrix properties: det(A) = 0 means the matrix is singular (non-invertible), det(A) ≠ 0 means the matrix is invertible. Determinant properties like multilinearity and alternating properties help simplify calculations.",
    readWhyMatters: "The determinant is a fundamental concept in linear algebra: it tells you whether a matrix is invertible, and if so, how to find its inverse. It's used in various applications like solving systems of linear equations, calculating volumes, and understanding geometric transformations.",
    seeContent: "Visualize how determinants measure area scaling by watching unit squares transform into parallelograms, see how negative determinants flip orientations, and observe how zero determinants collapse space to lines.",
    hearContent: "Listen as I explain how determinants are like measuring the transformation DNA of any matrix - they tell you exactly how powerful the transformation is and whether it flips things around!",
    hearAudioUrl: "/audio/2.5.mp3",
    doContent: "Practice with the Determinant Calculator for step-by-step calculations, use the Area Scaling Visualizer to see geometric meaning, and experiment with the Orientation Detector to understand sign significance.",
    memoryAids: {
      mantra: "Transformation power in a single number - scaling factor and flip detector all in one!",
      visual: "Picture Max measuring transformation strength with a special scale: the number shows how much areas grow or shrink, and the sign shows whether the transformation is a mirror flip."
    },
    conceptCheck: {
      question: "A transformation matrix has determinant -3. What does this tell you about the transformation?",
      options: [
        "Areas are scaled by factor 3 and orientation is reversed (mirror flip)",
        "Areas are scaled by factor -3 (impossible negative area)",
        "The transformation shrinks everything by 1/3",
        "The matrix is not invertible"
      ],
      correctAnswer: 0,
      explanation: "Determinant -3 means: |det| = 3 so areas scale by factor 3 (magnification), and the negative sign means orientation reverses (like a mirror flip). The transformation is invertible since det ≠ 0."
    },
    realWorldConnection: "The determinant is a fundamental concept in linear algebra: it tells you whether a matrix is invertible, and if so, how to find its inverse. It's used in various applications like solving systems of linear equations, calculating volumes, and understanding geometric transformations."
  },

  "2.6": {
    id: "2.6",
    title: "Elementary Row Operations & Matrix Rank",
    duration: "40-45 minutes",
    characterId: "max", 
    narrativeHook: {
      story: "Max has a messy filing cabinet that needs systematic reorganization. He can swap file drawers, multiply all files in a drawer by a constant factor, or add copies of one drawer's files to another drawer. These 'elementary operations' help Max transform any disorganized matrix into its cleanest, most informative form.",
      characterMessage: "Every messy filing system can be perfectly organized using just three simple operations! I can swap rows, scale rows, or add one row to another. With these tools, I can transform any matrix into its clearest, most informative form - revealing its true organizational structure!"
    },
    learningObjectives: [
      "Apply the three elementary row operations systematically",
      "Use row operations to transform matrices to row echelon form",
      "Understand how row operations preserve matrix information while changing appearance",
      "Calculate matrix rank as the number of linearly independent rows",
      "Recognize the relationship between rank and linear independence"
    ],
    coreConcepts: [
      "Elementary row operations: swap, scale, add",
      "Row echelon form and reduced row echelon form",
      "Row operations preserve linear relationships",
      "Matrix rank as number of independent rows",
      "Rank and linear independence connection"
    ],
    readContent: "Elementary row operations transform matrices while preserving their essential linear relationships: (1) Swap two rows, (2) Multiply a row by a non-zero constant, (3) Add a multiple of one row to another row. These operations convert matrices to row echelon form, where each row starts with a leading 1 (pivot) to the right of the previous row's pivot. Matrix rank equals the number of non-zero rows in row echelon form, representing the number of linearly independent rows. Rank determines the dimension of the row space and indicates how much independent information the matrix contains.",
    readAnalogy: "Elementary row operations are like the basic tools in a carpenter's toolkit - they allow you to shape and modify the matrix structure without changing the underlying information.",
    readKeyPoints: [
      "Swap rows: switch two rows to change their order",
      "Scale rows: multiply a row by a non-zero constant to change its height",
      "Add rows: add a multiple of one row to another to combine information"
    ],
    readDigDeeper: "Row operations are reversible and can be used to simplify matrix calculations. They're also used to find the rank of a matrix, which is the number of linearly independent rows or columns.",
    readWhyMatters: "Row operations are a fundamental part of linear algebra: they allow us to manipulate matrices to find solutions to systems of linear equations, calculate determinants, and understand matrix properties.",
    seeContent: "Watch step-by-step row operations transforming messy matrices into clean row echelon form, see how rank reveals the true independent information content, and observe how different matrices can have the same rank.",
    hearContent: "Listen as I explain how organizing matrix information is like reorganizing a filing cabinet systematically - the same information is there, but now it's perfectly arranged and easy to understand!",
    hearAudioUrl: "/audio/2.6.mp3",
    doContent: "Use the Row Operations Simulator to practice systematic matrix transformation, experiment with the Rank Calculator to find independent information content, and try the Echelon Form Converter for automatic organization.",
    memoryAids: {
      mantra: "Swap, scale, add - three simple tools to organize any matrix into its clearest, most informative form!",
      visual: "Picture Max reorganizing his filing cabinet: swapping drawers, adjusting file quantities, and combining information strategically until everything is perfectly ordered and the true information content is revealed."
    },
    conceptCheck: {
      question: "After row operations, a 4×5 matrix is in row echelon form with 3 non-zero rows. What is the rank and what does it mean?",
      options: [
        "Rank = 3, meaning the matrix has 3 linearly independent rows containing all the unique information",
        "Rank = 4, because that's the number of original rows",
        "Rank = 5, because that's the number of columns",
        "Rank = 1, because row operations reduce complexity"
      ],
      correctAnswer: 0,
      explanation: "Rank equals the number of non-zero rows in row echelon form. Rank = 3 means exactly 3 rows contain linearly independent information; the 4th row became zero, indicating it was dependent on the others."
    },
    realWorldConnection: "Data scientists use row operations to clean datasets and find independent variables. Engineers use them to solve structural analysis problems. Economists use matrix rank to determine if economic models have enough independent equations to find unique solutions."
  },

  "2.7": {
    id: "2.7",
    title: "Matrix-Vector Products as Transformations",
    duration: "40-45 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max realizes that when he multiplies a matrix by a vector, he's not just calculating numbers - he's systematically transforming the vector into a new location. Every matrix is actually a transformation machine that takes input vectors and produces output vectors according to precise mathematical rules.",
      characterMessage: "This is where everything clicks together! When I multiply a matrix by a vector, I'm not just doing arithmetic - I'm applying a systematic transformation. Every matrix is actually a transformation machine with its own personality: some rotate, some stretch, some flip, some project. Let me show you how!"
    },
    learningObjectives: [
      "Interpret matrix-vector multiplication as geometric transformation",
      "Understand how matrix columns determine where basis vectors go",
      "Analyze different types of transformations: rotation, scaling, reflection, projection",
      "Compose transformations by multiplying matrices",
      "Connect linear transformations to real-world applications"
    ],
    coreConcepts: [
      "Matrix-vector product as transformation",
      "Matrix columns as transformed basis vectors",
      "Types: rotation, scaling, reflection, shear, projection",
      "Composition of transformations",
      "Linear transformation properties"
    ],
    readContent: "Matrix-vector multiplication Av transforms vector v according to the linear transformation represented by matrix A. The matrix columns show where the standard basis vectors [1,0] and [0,1] get mapped. Common transformations include: rotation (preserves length and angles), scaling (changes size), reflection (flips across lines), shear (slides parallel layers), and projection (flattens to lower dimensions). Transformation composition works by matrix multiplication: applying transformation B then A equals applying transformation AB. All linear transformations preserve vector addition and scalar multiplication: T(u + v) = T(u) + T(v) and T(cu) = cT(u).",
    readAnalogy: "Matrix-vector multiplication is like applying a series of transformations to a vector - each transformation is represented by a matrix, and the result is the final transformed vector. This is a fundamental operation in linear algebra and computer graphics.",
    readKeyPoints: [
      "Matrix-vector multiplication: Av",
      "Transformation interpretation: each column of A represents a transformed basis vector",
      "Types of transformations: rotation, scaling, reflection, shear, projection"
    ],
    readDigDeeper: "Matrix-vector multiplication is a powerful tool for understanding linear transformations. It's used in various applications like computer graphics, robotics, and machine learning.",
    readWhyMatters: "Matrix-vector multiplication is a fundamental operation in linear algebra and computer graphics: it allows us to apply linear transformations to vectors, which is essential for understanding and manipulating geometric transformations.",
    seeContent: "Watch vectors transform in real-time as matrix values change, see how different matrix types create rotation, scaling, reflection, and other transformations, and observe transformation composition through matrix multiplication.",
    hearContent: "Listen as I explain how every matrix has its own transformation personality - some are gentle rotators, others are aggressive stretchers, and some are precise projectors. Each one systematically changes vectors according to its mathematical nature!",
    hearAudioUrl: "/audio/2.7.mp3",
    doContent: "Use the Transformation Visualizer to see matrix-vector products as geometric changes, experiment with the Matrix Personality Detector to identify transformation types, and practice the Transformation Composer to combine multiple transformations.",
    memoryAids: {
      mantra: "Every matrix is a transformation machine with its own personality - rotation, scaling, flipping, or projecting vectors systematically!",
      visual: "Picture Max as a transformation wizard: each matrix is a different spell that systematically changes vectors - some spells rotate, others stretch, flip, or flatten vectors according to precise magical rules."
    },
    conceptCheck: {
      question: "Matrix [[0,-1],[1,0]] transforms vector [3,4]. What transformation does this matrix represent and what's the result?",
      options: [
        "90° counterclockwise rotation, result is [-4,3]",
        "Reflection across y=x line, result is [4,3]", 
        "Scaling by factor 2, result is [6,8]",
        "Projection onto x-axis, result is [3,0]"
      ],
      correctAnswer: 0,
      explanation: "Matrix [[0,-1],[1,0]] rotates vectors 90° counterclockwise. Applying to [3,4]: [0×3 + (-1)×4, 1×3 + 0×4] = [-4,3]. The columns show where [1,0]→[0,1] and [0,1]→[-1,0], confirming 90° rotation."
    },
    realWorldConnection: "Video games use transformation matrices to move, rotate, and scale 3D objects in real-time. Medical imaging applies transformations to reconstruct 3D body scans from 2D slices. Robotics uses transformation matrices to control precise arm movements and calculate positions in space."
  },

  "2.8": {
    id: "2.8",
    title: "Composition of Linear Maps & Change of Basis",
    duration: "40-45 minutes", 
    characterId: "max",
    narrativeHook: {
      story: "Max discovers he can chain transformations together like a systematic assembly line, and even change his entire coordinate system to view the same information from different perspectives. It's like having multiple organizational frameworks that can work together or view the same data through different systematic lenses.",
      characterMessage: "The ultimate organizational superpower: chaining transformations and changing perspectives! I can create transformation assembly lines where each matrix adds its own systematic change, and I can switch coordinate systems to view the same information through completely different organizational frameworks!"
    },
    learningObjectives: [
      "Compose linear transformations through matrix multiplication",
      "Understand how transformation order affects the final result",
      "Perform change of basis using transition matrices",
      "Convert between different coordinate systems systematically",
      "Apply composition and basis change to solve complex problems"
    ],
    coreConcepts: [
      "Transformation composition: (BA)(v) = B(A(v))",
      "Order matters: AB ≠ BA generally",
      "Change of basis using transition matrices", 
      "Coordinate conversion between bases",
      "Applications in graphics and data analysis"
    ],
    readContent: "The ultimate organizational superpower: chaining transformations and changing perspectives! Transformation composition means applying multiple transformations in sequence - if A applies first, then B, the result is BA (note the reverse order). Matrix multiplication represents this: (BA)v = B(Av). Change of basis is even more powerful - it's like having multiple organizational frameworks for viewing the same information. Transition matrix P converts coordinates from one basis to another, while P⁻¹ converts back.",
    readAnalogy: "Transformation composition is like running a systematic assembly line where each station adds its own transformation. Change of basis is like having multiple viewing windows that show the same organized information through different systematic perspectives.",
    readKeyPoints: [
      "Composition: applying B then A equals transformation BA (reverse order)",
      "Matrix multiplication represents transformation composition",
      "Change of basis: P converts between coordinate systems, P⁻¹ converts back"
    ],
    readDigDeeper: "Order matters in composition because transformations don't generally commute. Change of basis reveals that the same vector has different coordinates in different systems, like how the same location has different addresses in different coordinate systems.",
    readWhyMatters: "Animation software chains transformation matrices to create complex character movements. Data scientists change basis to find optimal coordinate systems for machine learning. Engineers use composition to model multi-stage manufacturing processes with systematic precision.",
    seeContent: "Watch transformation chains in action, see how changing order produces different results, and observe how the same vector looks different in various coordinate systems through interactive basis switching.",
    hearContent: "Listen as I explain how transformation composition is like having a systematic assembly line, and change of basis is like having multiple organizational perspectives for viewing the same information!",
    hearAudioUrl: "/audio/2.8.mp3",
      doContent: "Use the Transformation Chain Builder to experiment with composition order, practice with the Basis Change Calculator to convert coordinates, and explore the Perspective Switcher to see vectors in different coordinate systems.",
    memoryAids: {
      mantra: "Chain transformations like assembly lines, switch coordinate systems like changing perspective - systematic organization from every angle!",
      visual: "Picture Max running a transformation factory with assembly lines (composition) and multiple viewing windows (different bases) that show the same products from different systematic perspectives."
    },
    conceptCheck: {
      question: "If transformation A rotates 45° and transformation B scales by 2, what's the difference between AB and BA applied to a vector?",
      options: [
        "AB: rotate 45° then scale by 2; BA: scale by 2 then rotate 45° - different final vectors",
        "AB and BA produce identical results because both transformations are applied",
        "AB is undefined because you can't multiply these transformation types",
        "AB: scale then rotate; BA: rotate then scale - same as option A but backward"
      ],
      correctAnswer: 0,
      explanation: "Order matters in composition. AB means: first apply A (rotate 45°), then apply B (scale by 2). BA means: first apply B (scale by 2), then apply A (rotate 45°). Different orders produce different final vectors."
    },
    realWorldConnection: "Animation software chains transformation matrices to create complex character movements. Data scientists change basis to find optimal coordinate systems for machine learning. Engineers use composition to model multi-stage manufacturing processes with systematic precision."
  },

  "2.9": {
    id: "2.9",
    title: "Block Matrices & Advanced Organization",
    duration: "35-40 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max faces his ultimate organizational challenge: managing massive datasets that are too complex for simple matrix organization. The solution? Block matrices - systematic organization within systematic organization, like having organized sections within an organized filing cabinet, each with its own specialized purpose.",
      characterMessage: "When simple organization isn't enough, I use organizational inception - matrices within matrices! Block organization lets me handle massive, complex data by breaking it into specialized, manageable sections while maintaining systematic control over the entire structure."
    },
    learningObjectives: [
      "Understand block matrix structure and notation",
      "Perform block matrix addition and multiplication",
      "Recognize when block structure simplifies complex calculations",
      "Apply block matrices to partition complex problems systematically",
      "Use block matrices for efficient computation and data organization"
    ],
    coreConcepts: [
      "Block matrix partitioning and structure",
      "Block addition and multiplication rules",
      "Special block forms: diagonal, triangular",
      "Applications in large-scale computation",
      "Computational efficiency advantages"
    ],
    readContent: "Block matrices partition large matrices into smaller, manageable submatrices called blocks. This enables systematic organization of complex data and efficient computation. Block addition combines corresponding blocks: [A B; C D] + [E F; G H] = [A+E B+F; C+G D+H]. Block multiplication follows the same pattern as regular matrix multiplication but with blocks: the (i,j) block of the product equals the sum of products of corresponding blocks from row i and column j. Special forms include block diagonal matrices (off-diagonal blocks are zero) and block triangular matrices. Block structure often reflects natural problem partitioning and enables parallel computation on different blocks simultaneously.",
    readAnalogy: "Block matrices are like having multiple filing cabinets within a single cabinet - each drawer handles a specific type of information, making it easier to find and organize large amounts of data.",
    readKeyPoints: [
      "Block matrix structure: [A B; C D]",
      "Block addition: [A+E B+F; C+G D+H]",
      "Block multiplication: [A B; C D] [E F; G H] = [AE+BG AF+BH; CE+DG CF+DH]",
      "Special forms: diagonal, triangular",
      "Applications in large-scale computation"
    ],
    readDigDeeper: "Block matrices are a powerful tool for managing and manipulating large datasets. They're used in various applications like parallel computing, data compression, and solving systems of linear equations.",
    readWhyMatters: "Block matrices are a powerful tool for managing and manipulating large datasets. They're used in various applications like parallel computing, data compression, and solving systems of linear equations.",
    seeContent: "Visualize how large matrices get partitioned into meaningful blocks, watch block operations preserve structure while enabling efficient computation, and see how block diagonal matrices represent independent subsystems.",
    hearContent: "Listen as I explain how block organization is like having departments within a company - each block handles its specialized function while contributing to the systematic operation of the whole organization!",
    hearAudioUrl: "/audio/2.9.mp3",
    doContent: "Use the Block Matrix Builder to create and partition large matrices, practice with the Block Operations Calculator to perform addition and multiplication, and experiment with the Block Structure Analyzer to identify efficient partitioning strategies.",
    memoryAids: {
      mantra: "Organization within organization - specialized departments working together in perfect systematic harmony!",
      visual: "Picture Max's mega filing cabinet with specialized sections: each block is like a department (accounting, engineering, marketing) that operates independently but contributes to the organized whole."
    },
    conceptCheck: {
      question: "A 4×4 block matrix is partitioned as [[A B],[C D]] where each block is 2×2. If A and D are invertible and B=C=0, how does this simplify computation?",
      options: [
        "Block diagonal structure: inverse is [[A⁻¹ 0],[0 D⁻¹]], enabling independent computation",
        "Must invert the entire 4×4 matrix using standard methods",
        "Cannot compute inverse because of block structure",
        "B=C=0 means the matrix is singular"
      ],
      correctAnswer: 0,
      explanation: "When B=C=0, the matrix is block diagonal. Block diagonal matrices have block diagonal inverses: [[A 0],[0 D]]⁻¹ = [[A⁻¹ 0],[0 D⁻¹]]. Each block can be inverted independently, greatly simplifying computation."
    },
    realWorldConnection: "Large-scale machine learning models use block matrices to distribute computation across multiple processors. Economic models partition by sectors using block structure. Social network analysis uses blocks to represent communities within larger networks, enabling efficient analysis of massive datasets."
  },

  "2.10": {
    id: "2.10",
    title: "Max's Data Organization Capstone Project",
    duration: "50-60 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max has been commissioned to design a comprehensive data management system for a smart city initiative. He must use every matrix concept he's mastered - from basic organization to complex transformations - to create systematic solutions for traffic optimization, resource allocation, and urban planning.",
      characterMessage: "The ultimate organizational challenge! I'm designing a complete smart city data system using every matrix superpower I've developed. We'll organize traffic data, optimize resource allocation, and transform urban planning information - all through systematic matrix mastery!"
    },
    learningObjectives: [
      "Apply matrix addition and multiplication to combine and transform city data systematically",
      "Use determinants and inverses to solve urban optimization problems",
      "Implement matrix transformations for coordinate system conversions in city planning",
      "Design block matrix structures for large-scale urban data organization",
      "Synthesize all matrix concepts in a comprehensive real-world project"
    ],
    coreConcepts: [
      "Urban data organization using matrix structures",
      "Traffic flow optimization using matrix operations",
      "Resource allocation through matrix calculations",
      "Coordinate transformations for city planning",
      "Large-scale data management with block matrices"
    ],
    readContent: "This capstone project integrates all matrix concepts through systematic urban data management. Part A organizes traffic flow data using matrices and applies matrix addition to combine rush hour patterns. Part B uses matrix multiplication for resource allocation optimization and determinants to check system stability. Part C implements coordinate transformations for mapping different city zones and uses inverses to convert between planning systems. Part D designs block matrix structures for managing massive urban datasets efficiently. The project demonstrates how matrix mathematics provides systematic solutions for complex real-world organizational challenges.",
    seeContent: "Work through interactive city planning tools that let you organize traffic data systematically, optimize resource allocation using matrix operations, and transform coordinate systems for urban development projects.",
    hearContent: "Listen as I guide you through each phase of the smart city project, showing how systematic matrix organization transforms chaotic urban data into clear, actionable intelligence for city management!",
    hearAudioUrl: "/audio/2.10.mp3",
    doContent: "Complete the four-part smart city project: organize traffic data with matrix structures, optimize resources with matrix operations, transform planning coordinates with matrix transformations, and design efficient block structures for large-scale urban data management.",
    memoryAids: {
      mantra: "Every matrix concept becomes a systematic tool for organizing and optimizing the ultimate complex system - a smart city!",
      visual: "Picture yourself as Max the urban data architect, using matrices as systematic blueprints to organize, transform, and optimize every aspect of city life through mathematical precision."
    },
    conceptCheck: {
      question: "In Part B, you use a 3×3 matrix to allocate resources among police, fire, and medical services across 3 districts. If the determinant is zero, what does this mean for the allocation system?",
      options: [
        "The allocation system is unstable - some districts or services are redundantly covered while others may be neglected",
        "The allocation is perfectly balanced across all services and districts",
        "Resource allocation is impossible with a 3×3 matrix",
        "Zero determinant means maximum efficiency"
      ],
      correctAnswer: 0,
      explanation: "A zero determinant indicates the allocation matrix is singular, meaning the resource distribution system has dependencies or redundancies. Some combinations of districts and services are not independently controllable, creating potential coverage gaps or overlaps."
    },
    realWorldConnection: "This project mirrors real smart city implementations: traffic management systems use matrix operations for signal optimization, resource allocation algorithms distribute emergency services efficiently, and urban planning software employs coordinate transformations for development projects. Your matrix skills directly apply to urban informatics careers."
  }
};