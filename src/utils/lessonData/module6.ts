import { LessonData } from "@/types/lesson";

// Module 6: Probability & Distributions
// Copy and paste module 6 lesson data here

export const module6Lessons: { [key: string]: LessonData } = {
  "6.1": {
    id: "6.1",
    title: "Introduction to Probability & Sample Spaces",
    duration: "35-40 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Probability Pippa appears in a shower of sparkles, her magician's hat shimmering with mathematical possibilities! As a rabbit who specializes in the unpredictable, she knows that probability is the mathematics of uncertainty - turning the chaos of random events into precise, beautiful patterns that we can understand and predict.",
      characterMessage: "Welcome to the wonderful world of uncertainty! I'm Pippa, and I make the unpredictable predictable through the magic of probability! Every coin flip, every die roll, every random event follows beautiful mathematical patterns. Let me show you how to find order in chaos!"
    },
    learningObjectives: [
      "Define sample spaces as sets of all possible outcomes",
      "Understand events as subsets of sample spaces",
      "Calculate basic probabilities using counting principles",
      "Apply probability rules: addition, multiplication, complement",
      "Connect probability to real-world uncertainty and decision-making"
    ],
    coreConcepts: [
      "Sample space Ω: set of all possible outcomes",
      "Events as subsets of sample space",
      "Probability function P: assigns numbers to events",
      "Basic probability rules and axioms",
      "Counting principles for finite sample spaces"
    ],
    readContent: "Probability quantifies uncertainty by assigning numbers between 0 and 1 to events. The sample space Ω contains all possible outcomes of an experiment, while events are subsets of this space. The probability function P satisfies three axioms: P(A) ≥ 0 for any event A, P(Ω) = 1, and P(A ∪ B) = P(A) + P(B) when A and B are disjoint. For finite sample spaces with equally likely outcomes, P(A) = |A|/|Ω| (favorable outcomes divided by total outcomes). Key rules include: P(Aᶜ) = 1 - P(A) for complements, and P(A ∪ B) = P(A) + P(B) - P(A ∩ B) for general unions.",
    readAnalogy: "Think of probability like my magic hat filled with all possible outcomes! The sample space is everything that could possibly be pulled from the hat, while events are specific collections of outcomes I'm interested in. The probability is simply the fraction of space each event takes up in my magical hat!",
    readKeyPoints: [
      "Sample space Ω contains all possible outcomes of a random experiment",
      "Events are subsets of the sample space we're interested in",
      "Probability P(A) = favorable outcomes / total outcomes for equally likely cases"
    ],
    readDigDeeper: "The axiomatic foundation of probability theory, developed by Kolmogorov, builds all probability concepts from three simple axioms. This mathematical framework underlies everything from quantum mechanics to machine learning algorithms.",
    readWhyMatters: "Weather forecasting uses probability to predict rain chances from atmospheric data. Medical diagnosis assigns probabilities to diseases based on symptoms. Insurance companies use probability to calculate fair premiums. Machine learning algorithms make predictions using probability distributions over possible outcomes.",
    seeContent: "Explore interactive sample space visualizations, see how events correspond to regions in probability spaces, and observe how counting principles determine probabilities in finite cases with equal likelihood.",
    hearContent: "Listen as I explain how probability is like organizing all the magic tricks in my hat - some outcomes are more likely to appear than others, but the mathematical rules help us predict the patterns!",
    hearAudioUrl: "/audio/6.1.mp3",
    doContent: "Use the Sample Space Explorer to visualize different experiments, practice with the Probability Calculator for basic events, and experiment with the Event Combinations tool showing unions, intersections, and complements.",
    memoryAids: {
      mantra: "Sample space holds all that could be, events are subsets we want to see! Count the favorable, divide by all - that's probability's magical call!",
      visual: "Picture Pippa's shimmering magic hat containing all possible outcomes, with events highlighted as glowing regions within the hat, and probabilities determined by how much space each region occupies."
    },
    conceptCheck: {
      question: "Rolling two dice, what's the probability of getting a sum of 7, given that all 36 outcomes are equally likely?",
      options: [
        "P(sum = 7) = 6/36 = 1/6, since there are 6 ways: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)",
        "P(sum = 7) = 1/11, since sums range from 2 to 12",
        "P(sum = 7) = 7/36, since we want sum 7 out of 36 outcomes",
        "P(sum = 7) = 2/12, since 7 is in the middle of possible sums"
      ],
      correctAnswer: 0,
      explanation: "Sample space has 36 equally likely outcomes. Event 'sum = 7' contains 6 outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Therefore P(sum = 7) = 6/36 = 1/6."
    },
    realWorldConnection: "Netflix calculates probabilities that users will like different movies based on viewing history. Medical AI systems assign probabilities to different diagnoses based on symptoms. Weather services use probability models to forecast precipitation chances from atmospheric data."
  },

  "6.2": {
    id: "6.2",
    title: "Conditional Probability & Independence",
    duration: "40-45 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa discovers that some magic tricks depend on what happened before! Conditional probability is like updating the contents of her magic hat based on new information. Sometimes knowing one outcome completely changes the probabilities of others, while independent events mind their own magical business.",
      characterMessage: "Time for some advanced magical mathematics! Conditional probability is like updating my predictions when I get new information. Sometimes events depend on each other like linked magic tricks, and sometimes they're completely independent like separate hat pulls. Let me show you how information changes everything!"
    },
    learningObjectives: [
      "Define conditional probability as P(A|B) = P(A∩B)/P(B)",
      "Understand how conditioning updates probabilities with new information",
      "Recognize independent events where P(A|B) = P(A)",
      "Apply multiplication rule: P(A∩B) = P(A|B)P(B)",
      "Use tree diagrams and contingency tables for complex problems"
    ],
    coreConcepts: [
      "Conditional probability: P(A|B) = P(A∩B)/P(B)",
      "Independence: P(A|B) = P(A) when B doesn't affect A",
      "Multiplication rule for intersections",
      "Tree diagrams for sequential events",
      "Law of total probability"
    ],
    readContent: "Conditional probability P(A|B) measures the probability of A given that B has occurred, computed as P(A|B) = P(A∩B)/P(B) when P(B) > 0. This represents updating our probability assessment based on new information. Events A and B are independent if P(A|B) = P(A), meaning knowledge of B doesn't change the probability of A. The multiplication rule gives P(A∩B) = P(A|B)P(B), allowing us to compute intersection probabilities. Tree diagrams visualize sequential conditional probabilities, while the law of total probability breaks down complex events into conditional pieces: P(A) = Σᵢ P(A|Bᵢ)P(Bᵢ).",
    readAnalogy: "Conditional probability is like updating my magic hat based on what I've already pulled out! If I know a red card came out, that changes the probabilities for what's left inside. Independent events are like having two separate magic hats - what comes from one hat doesn't affect the other at all!",
    readKeyPoints: [
      "Conditional probability P(A|B) = P(A∩B)/P(B) updates probabilities with information",
      "Independent events: P(A|B) = P(A), meaning B doesn't affect A's probability",
      "Multiplication rule: P(A∩B) = P(A|B)P(B) for intersection probabilities"
    ],
    readDigDeeper: "Bayes' theorem emerges from conditional probability: P(A|B) = P(B|A)P(A)/P(B). This fundamental result underlies Bayesian statistics, machine learning, and scientific inference, showing how to update beliefs with evidence.",
    readWhyMatters: "Spam filters use conditional probability to classify emails based on word patterns. Medical tests report conditional probabilities of diseases given positive results. Search engines use conditional probabilities to rank pages based on user click patterns. Credit scoring uses conditional default probabilities given financial history.",
    seeContent: "Watch how conditioning changes probability distributions, visualize independence through unchanged conditional probabilities, and explore tree diagrams that map out complex conditional scenarios with multiple stages.",
    hearContent: "Listen as I explain how conditional probability is like being a detective magician - each new clue changes what I expect to find in my hat, unless the events are truly independent!",
    hearAudioUrl: "/audio/6.2.mp3",
    doContent: "Use the Conditional Probability Calculator with visual updates, practice with the Independence Tester showing when conditioning matters, and experiment with the Tree Diagram Builder for multi-stage problems.",
    memoryAids: {
      mantra: "Given that this, then what? Conditional probability shows the plot! Independent means no effect at all - separate magic beyond conditioning's call!",
      visual: "Picture Pippa's magic hat changing colors as she gets new information, with some compartments affecting others (dependence) while some remain completely separate (independence)."
    },
    conceptCheck: {
      question: "In a group, 60% like coffee, 40% like tea, and 20% like both. If someone likes coffee, what's the probability they also like tea?",
      options: [
        "P(tea|coffee) = P(tea ∩ coffee)/P(coffee) = 0.20/0.60 = 1/3",
        "P(tea|coffee) = P(tea) = 0.40, since preferences are independent",
        "P(tea|coffee) = 0.20, the probability of liking both",
        "P(tea|coffee) = 0.80, since most coffee drinkers also like tea"
      ],
      correctAnswer: 0,
      explanation: "Using conditional probability formula: P(tea|coffee) = P(tea ∩ coffee)/P(coffee) = 0.20/0.60 = 1/3. Knowing someone likes coffee changes the probability they like tea from 40% to 33.3%."
    },
    realWorldConnection: "Google's search algorithm uses conditional probabilities to rank pages based on user click patterns given specific queries. Medical diagnostic systems calculate disease probabilities conditional on observed symptoms. Netflix recommends movies using conditional probabilities based on viewing history and user similarities."
  },

  "6.3": {
    id: "6.3",
    title: "Random Variables & Probability Distributions",
    duration: "40-45 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa waves her magic wand and transforms chaotic outcomes into neat numerical values! Random variables are like magical translators that turn any random experiment - coin flips, dice rolls, or rabbit appearances - into numbers we can work with mathematically. Each random variable brings its own special distribution pattern!",
      characterMessage: "Time for the ultimate magical transformation! Random variables turn any random outcome into numbers, and each one comes with its own beautiful distribution pattern. It's like having different magical formulae that tell me exactly how likely each number is to appear from my hat!"
    },
    learningObjectives: [
      "Define random variables as functions from outcomes to real numbers",
      "Distinguish between discrete and continuous random variables",
      "Understand probability mass functions (PMF) for discrete variables",
      "Introduce probability density functions (PDF) for continuous variables",
      "Visualize distributions and interpret their shapes and properties"
    ],
    coreConcepts: [
      "Random variable: X: Ω → ℝ maps outcomes to numbers",
      "Discrete vs continuous random variables",
      "Probability mass function (PMF): P(X = x)",
      "Probability density function (PDF): f(x)",
      "Cumulative distribution function (CDF): F(x) = P(X ≤ x)"
    ],
    readContent: "A random variable X is a function that assigns numerical values to experimental outcomes: X: Ω → ℝ. Discrete random variables take countable values (like dice rolls), described by probability mass functions P(X = x) that give exact probabilities for each value. Continuous random variables take uncountable values (like heights), described by probability density functions f(x) where probabilities are computed as integrals: P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx. The cumulative distribution function F(x) = P(X ≤ x) works for both types, giving the probability that X doesn't exceed x. Different random phenomena produce characteristic distribution shapes.",
    readAnalogy: "Random variables are like magical number-generating machines! Each experiment gets translated into numbers, and every machine has its own personality (distribution). Some machines prefer certain numbers (discrete distributions), while others spread smoothly across ranges (continuous distributions). The distribution tells me each machine's preferences!",
    readKeyPoints: [
      "Random variables X map experimental outcomes to numerical values",
      "Discrete: PMF gives P(X = x); Continuous: PDF gives probability densities",
      "CDF F(x) = P(X ≤ x) works for both discrete and continuous variables"
    ],
    readDigDeeper: "The fundamental theorem of calculus connects PDFs and CDFs: f(x) = F'(x) for continuous distributions. This relationship parallels how instantaneous rates relate to accumulated quantities, showing deep connections between probability and calculus.",
    readWhyMatters: "Financial models use random variables to represent stock prices and market volatility. Quality control uses distributions to model manufacturing variations. Machine learning treats data features as realizations of random variables with specific distributions. Climate science models temperature as continuous random variables.",
    seeContent: "Explore how random variables transform experimental outcomes into numbers, visualize different distribution shapes for discrete and continuous cases, and observe how PDFs and CDFs represent the same information differently.",
    hearContent: "Listen as I explain how random variables are like magical translators that turn any chaotic experiment into organized numbers, each with its own beautiful distribution personality!",
    hearAudioUrl: "/audio/6.3.mp3",
    doContent: "Use the Random Variable Generator to see outcome-to-number mappings, practice with the Distribution Visualizer for PMFs and PDFs, and experiment with the CDF Explorer showing cumulative probabilities.",
    memoryAids: {
      mantra: "Random variables turn chaos to numbers neat, distributions show which values we'll meet! PMF for discrete, PDF for flow - that's how probability patterns grow!",
      visual: "Picture Pippa's magic wand transforming random experimental outcomes into streams of numbers, each following its own beautiful distribution pattern with characteristic shape and behavior."
    },
    conceptCheck: {
      question: "For a discrete random variable X with PMF P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2, what is P(X ≤ 2)?",
      options: [
        "P(X ≤ 2) = P(X=1) + P(X=2) = 0.3 + 0.5 = 0.8",
        "P(X ≤ 2) = P(X=2) = 0.5, since we want exactly 2",
        "P(X ≤ 2) = 1 - P(X=3) = 1 - 0.2 = 0.8",
        "Both A and C are correct methods giving the same answer"
      ],
      correctAnswer: 3,
      explanation: "P(X ≤ 2) includes X=1 and X=2, so P(X ≤ 2) = 0.3 + 0.5 = 0.8. Alternatively, P(X ≤ 2) = 1 - P(X > 2) = 1 - P(X=3) = 1 - 0.2 = 0.8. Both methods give 0.8."
    },
    realWorldConnection: "Netflix models user ratings as discrete random variables to predict preferences. Uber models ride request times as continuous random variables for driver allocation. Amazon models package delivery times using continuous distributions for logistics planning. Weather services model precipitation amounts as continuous random variables."
  },

  "6.4": {
    id: "6.4",
    title: "Common Discrete Distributions",
    duration: "45-50 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa opens her collection of specialized magic hats, each designed for different types of random experiments! The Bernoulli hat for yes/no questions, the Binomial hat for counting successes, the Poisson hat for rare events, and more. Each distribution has its own magical personality and special use cases!",
      characterMessage: "Welcome to my distribution collection! Each of these magical patterns appears in different real-world situations. Bernoulli for single trials, Binomial for counting successes, Poisson for rare events - every distribution has its specialty. Let me introduce you to my favorites!"
    },
    learningObjectives: [
      "Understand Bernoulli distribution for single success/failure trials",
      "Master Binomial distribution for counting successes in n trials",
      "Apply Poisson distribution for modeling rare events",
      "Recognize when to use each distribution type",
      "Calculate probabilities and interpret parameters for each distribution"
    ],
    coreConcepts: [
      "Bernoulli(p): single trial with success probability p",
      "Binomial(n,p): number of successes in n independent trials",
      "Poisson(λ): number of rare events in fixed time/space",
      "Geometric distribution for waiting times",
      "Parameter interpretation and real-world applications"
    ],
    readContent: "Bernoulli(p) models single success/failure trials with P(X=1) = p and P(X=0) = 1-p. Binomial(n,p) counts successes in n independent Bernoulli trials: P(X=k) = C(n,k)p^k(1-p)^(n-k). This applies when we have fixed n, constant success probability p, and independent trials. Poisson(λ) models rare events occurring at average rate λ: P(X=k) = e^(-λ)λ^k/k!. It approximates Binomial when n is large and p is small. Geometric distribution models waiting times until first success. Each distribution emerges naturally from specific experimental conditions and assumptions.",
    readAnalogy: "Think of my distribution collection like specialized magic tricks! Bernoulli is my coin flip trick - simple success or failure. Binomial counts how many successes in multiple coin flips. Poisson is my surprise trick - it predicts rare events like how many shooting stars we'll see tonight. Each trick works perfectly for its intended situation!",
    readKeyPoints: [
      "Bernoulli(p): single trial, P(success) = p",
      "Binomial(n,p): count successes in n trials, each with probability p",
      "Poisson(λ): rare events with average rate λ per time unit"
    ],
    readDigDeeper: "The Poisson limit theorem shows that Binomial(n,p) → Poisson(np) as n → ∞ and p → 0 while np stays constant. This explains why Poisson appears when modeling rare events as limits of many small-probability trials.",
    readWhyMatters: "Quality control uses Binomial to model defect rates in manufacturing. Call centers use Poisson to model customer arrival patterns. Clinical trials use Binomial to analyze treatment success rates. Network engineering uses Poisson to model packet arrivals in data transmission.",
    seeContent: "Explore interactive calculators for each distribution, visualize how parameters affect distribution shapes, and observe real-world scenarios where each distribution naturally applies through simulation and examples.",
    hearContent: "Listen as I explain how each distribution in my collection has its own magical specialty - from simple yes/no questions to counting successes to predicting rare surprises!",
    hearAudioUrl: "/audio/6.4.mp3",
    doContent: "Use the Distribution Selector to match scenarios with appropriate distributions, practice with the Parameter Explorer showing how values affect shapes, and experiment with the Real-World Application Simulator.",
    memoryAids: {
      mantra: "Bernoulli for one, Binomial to count, Poisson for rare events that truly amount! Each distribution fits its special case - that's probability's magical ace!",
      visual: "Picture Pippa with a collection of specialized magic hats: a simple coin-flip hat (Bernoulli), a counting hat with multiple compartments (Binomial), and a surprise hat for rare events (Poisson)."
    },
    conceptCheck: {
      question: "A factory produces items with 2% defect rate. In a batch of 100 items, what distribution models the number of defects, and what's P(exactly 2 defects)?",
      options: [
        "Binomial(100, 0.02): P(X=2) = C(100,2)(0.02)²(0.98)⁹⁸ ≈ 0.273",
        "Poisson(2): P(X=2) = e⁻²(2²)/2! ≈ 0.271 (since np = 100×0.02 = 2)",
        "Both A and B are valid; B uses Poisson approximation since n large, p small",
        "Bernoulli(0.02): P(X=2) = 0.02² = 0.0004"
      ],
      correctAnswer: 2,
      explanation: "This is Binomial(100, 0.02) exactly. Since n=100 is large and p=0.02 is small with np=2, Poisson(2) provides an excellent approximation. Both approaches are mathematically valid, with Poisson being computationally simpler."
    },
    realWorldConnection: "Amazon uses Poisson distributions to model customer order arrivals for inventory planning. Clinical trials use Binomial distributions to analyze drug efficacy rates. Call centers use Poisson models to predict customer service demand. Quality control systems use Binomial distributions to monitor manufacturing defect rates."
  },

  "6.5": {
    id: "6.5",
    title: "Common Continuous Distributions",
    duration: "45-50 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa unveils her collection of continuous magic! Unlike discrete distributions that prefer specific numbers, continuous distributions flow smoothly across ranges like magical rivers. The Uniform distribution spreads evenly, Exponential distribution models waiting times, and the magnificent Normal distribution creates the famous bell curve that appears everywhere in nature!",
      characterMessage: "Now for the smooth, flowing magic of continuous distributions! These don't pick specific numbers - they flow like magical rivers across ranges of possibilities. Uniform spreads evenly, Exponential handles waiting times, and Normal creates that beautiful bell curve we see everywhere in nature!"
    },
    learningObjectives: [
      "Understand Uniform distribution for equally likely ranges",
      "Master Exponential distribution for waiting times and decay",
      "Explore Normal distribution and its bell curve properties",
      "Calculate probabilities using integration and standard tables",
      "Recognize when continuous distributions apply in real scenarios"
    ],
    coreConcepts: [
      "Uniform(a,b): constant density f(x) = 1/(b-a) on [a,b]",
      "Exponential(λ): waiting times, f(x) = λe^(-λx) for x ≥ 0",
      "Normal(μ,σ²): bell curve, f(x) = (1/σ√2π)e^(-(x-μ)²/2σ²)",
      "Standard Normal Z ~ N(0,1) and Z-scores",
      "Integration for probability calculations"
    ],
    readContent: "Uniform(a,b) has constant density f(x) = 1/(b-a) on interval [a,b], modeling scenarios where all values in a range are equally likely. Exponential(λ) models waiting times between events with f(x) = λe^(-λx), exhibiting memoryless property. Normal(μ,σ²) creates the famous bell curve with f(x) = (1/σ√2π)e^(-(x-μ)²/2σ²), where μ controls center and σ controls spread. The Standard Normal Z ~ N(0,1) allows probability calculations via standardization: Z = (X-μ)/σ. Probabilities require integration: P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx, often done using tables or computational tools.",
    readAnalogy: "Continuous distributions are like magical flowing rivers! Uniform distribution flows at constant speed everywhere in its range. Exponential starts as a rushing torrent but slows down exponentially - perfect for modeling how long until the next magical event. Normal distribution flows in that beautiful bell shape we see everywhere in nature - from heights to test scores!",
    readKeyPoints: [
      "Uniform(a,b): equal likelihood across interval [a,b]",
      "Exponential(λ): models waiting times, has memoryless property",
      "Normal(μ,σ²): bell curve centered at μ with spread σ"
    ],
    readDigDeeper: "The Central Limit Theorem explains why Normal distributions appear everywhere: sums of many independent random variables tend toward Normal distributions regardless of the original distributions, making the bell curve nature's favorite pattern.",
    readWhyMatters: "Financial models use Normal distributions for stock price changes and portfolio returns. Manufacturing uses Normal distributions to model measurement errors and quality variations. Telecommunications uses Exponential distributions for modeling call durations and service times. Psychology uses Normal distributions for modeling test scores and cognitive abilities.",
    seeContent: "Visualize smooth probability density curves for each distribution, explore how parameters change distribution shapes, and observe integration areas that represent probabilities for continuous random variables.",
    hearContent: "Listen as I explain how continuous distributions flow like magical rivers - some constant like Uniform streams, some rushing then slowing like Exponential waterfalls, others forming beautiful bell-shaped Normal flows!",
    hearAudioUrl: "/audio/6.5.mp3",
    doContent: "Use the Continuous Distribution Explorer with parameter sliders, practice with the Probability Calculator using integration, and experiment with the Normal Distribution Z-score converter.",
    memoryAids: {
      mantra: "Uniform flows constant and true, Exponential waits for events due, Normal bell rings everywhere - continuous magic fills the air!",
      visual: "Picture Pippa conducting three magical rivers: a steady uniform stream, an exponential waterfall that starts rushing then slows, and a graceful bell-shaped normal fountain that appears throughout nature."
    },
    conceptCheck: {
      question: "For Exponential(λ=2) modeling waiting time in hours, what's P(wait ≤ 1 hour) = P(X ≤ 1)?",
      options: [
        "P(X ≤ 1) = 1 - e^(-2×1) = 1 - e^(-2) ≈ 0.865",
        "P(X ≤ 1) = 2e^(-2×1) = 2e^(-2) ≈ 0.271",
        "P(X ≤ 1) = ∫₀¹ 2e^(-2x)dx = [-e^(-2x)]₀¹ = 1 - e^(-2) ≈ 0.865",
        "Both A and C are correct using different methods"
      ],
      correctAnswer: 3,
      explanation: "For Exponential(λ), P(X ≤ x) = 1 - e^(-λx). Method A uses this formula directly. Method C integrates the PDF: ∫₀¹ 2e^(-2x)dx = [-e^(-2x)]₀¹ = (1 - e^(-2)) - (1 - 1) = 1 - e^(-2) ≈ 0.865. Both give the same answer."
    },
    realWorldConnection: "Netflix models video streaming session lengths using Exponential distributions. Manufacturing companies use Normal distributions to model product dimension variations. Financial analysts use Normal distributions for modeling daily stock return fluctuations. Call centers use Exponential distributions to model customer service call durations."
  },

  "6.6": {
    id: "6.6",
    title: "Expectation & Variance",
    duration: "40-45 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa reveals the secret measurements that characterize every magical distribution! Expectation is like the 'center of gravity' of her magic hat - where outcomes balance on average. Variance measures the 'spreadiness' - how much the magic tends to scatter around that center point. Together, they capture the essential personality of any random variable!",
      characterMessage: "Time to learn the fundamental measurements of randomness! Expectation tells me where my magical outcomes center on average, while variance reveals how much they spread around that center. These two numbers capture the essential personality of any random phenomenon!"
    },
    learningObjectives: [
      "Define expectation E[X] as the weighted average of outcomes",
      "Calculate expectations for discrete and continuous distributions",
      "Understand variance Var(X) = E[(X-μ)²] as spread measurement",
      "Apply linearity of expectation and variance properties",
      "Interpret expectation and variance in real-world contexts"
    ],
    coreConcepts: [
      "Expectation: E[X] = Σx·P(X=x) or ∫x·f(x)dx",
      "Variance: Var(X) = E[(X-μ)²] = E[X²] - (E[X])²",
      "Standard deviation: σ = √Var(X)",
      "Linearity: E[aX + b] = aE[X] + b",
      "Variance properties: Var(aX + b) = a²Var(X)"
    ],
    readContent: "Expectation E[X] is the probability-weighted average: E[X] = Σx·P(X=x) for discrete or E[X] = ∫x·f(x)dx for continuous variables. It represents the 'center of mass' of the distribution. Variance Var(X) = E[(X-μ)²] measures spread around the mean, computed as Var(X) = E[X²] - (E[X])². Standard deviation σ = √Var(X) has the same units as X. Expectation is linear: E[aX + b] = aE[X] + b, but variance is not: Var(aX + b) = a²Var(X). These moments completely characterize many distributions and provide essential summary statistics.",
    readAnalogy: "Expectation is like finding the balance point of my magical outcomes - if I put all possible values on a seesaw with weights equal to their probabilities, expectation is where it balances! Variance measures how much the magic spreads out from that balance point - low variance means outcomes cluster tightly, high variance means they scatter widely!",
    readKeyPoints: [
      "Expectation E[X]: probability-weighted average, the 'center of mass'",
      "Variance Var(X): measures spread around the mean via E[(X-μ)²]",
      "Linearity: E[aX + b] = aE[X] + b, but Var(aX + b) = a²Var(X)"
    ],
    readDigDeeper: "Higher moments like skewness (third moment) and kurtosis (fourth moment) capture distribution shape beyond center and spread. These become important in advanced statistics and financial risk modeling where distribution tails matter significantly.",
    readWhyMatters: "Investment analysis uses expected returns and variance (risk) for portfolio optimization. Quality control uses expectation and variance to monitor manufacturing processes. Insurance companies use expectation to set fair premiums and variance to assess risk. Machine learning uses expectation and variance for model performance evaluation.",
    seeContent: "Visualize expectation as the balance point of probability distributions, observe how variance affects distribution spread, and explore how linear transformations affect these fundamental measures.",
    hearContent: "Listen as I explain how expectation and variance are like measuring the personality of my magical distributions - expectation finds the center of the magic, variance reveals how wild and spread out it gets!",
    hearAudioUrl: "/audio/6.6.mp3",
    doContent: "Use the Expectation Calculator with visual balance point demonstrations, practice with the Variance Explorer showing spread measurements, and experiment with the Linear Transformation Analyzer.",
    memoryAids: {
      mantra: "Expectation centers, variance spreads - these two numbers show where randomness heads! Balance point and scatter measure - that's probability's treasure!",
      visual: "Picture Pippa balancing a magical seesaw with outcomes as weights, finding the expectation balance point, then measuring how far the magic typically scatters from that center (variance)."
    },
    conceptCheck: {
      question: "For X ~ Binomial(n=4, p=0.5), calculate E[X] and Var(X) using the formulas E[X] = np and Var(X) = np(1-p).",
      options: [
        "E[X] = 4×0.5 = 2, Var(X) = 4×0.5×0.5 = 1",
        "E[X] = 4×0.5 = 2, Var(X) = 4×0.5×(1-0.5) = 1", 
        "E[X] = 0.5, Var(X) = 0.25 since these are the basic Bernoulli parameters",
        "Both A and B are correct formulations giving the same answer"
      ],
      correctAnswer: 3,
      explanation: "For Binomial(n,p): E[X] = np = 4×0.5 = 2. Variance formula is Var(X) = np(1-p) = 4×0.5×(1-0.5) = 4×0.5×0.5 = 1. Both A and B express this correctly."
    },
    realWorldConnection: "Portfolio managers use expected returns and variance to optimize investment strategies balancing reward and risk. Manufacturing uses expectation and variance to monitor product quality and process control. Insurance companies calculate expected claim costs and variance to set appropriate premium levels and reserves."
  },

  "6.7": {
    id: "6.7",
    title: "Law of Large Numbers & Central Limit Theorem",
    duration: "45-50 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa discovers the most magical theorems in all of probability! The Law of Large Numbers promises that averages of many random draws converge to the true expectation - magic becomes predictable with enough repetitions. The Central Limit Theorem is even more amazing: no matter what distribution you start with, averages always approach the beautiful Normal bell curve!",
      characterMessage: "Prepare for the most mind-blowing magical theorems ever! The Law of Large Numbers says that if I repeat my magic tricks enough times, the average result gets closer and closer to the expected value. But the Central Limit Theorem is pure magic - it says that averages ALWAYS become bell-shaped, no matter what distribution I start with!"
    },
    learningObjectives: [
      "Understand the Law of Large Numbers as convergence of sample means",
      "Explore the Central Limit Theorem for sums and averages",
      "Apply Normal approximation to various distributions",
      "Calculate probabilities using CLT approximations",
      "Appreciate why Normal distributions appear everywhere in practice"
    ],
    coreConcepts: [
      "Law of Large Numbers: X̄ₙ → μ as n → ∞",
      "Central Limit Theorem: (X̄ₙ - μ)/(σ/√n) → N(0,1)",
      "Sample mean distribution: X̄ₙ ~ N(μ, σ²/n)",
      "Normal approximation to other distributions",
      "Sample size requirements for CLT applicability"
    ],
    readContent: "The Law of Large Numbers (LLN) states that sample means X̄ₙ = (X₁ + ... + Xₙ)/n converge to the population mean μ as n → ∞, regardless of the original distribution. This guarantees that averages become predictable with large samples. The Central Limit Theorem (CLT) goes further: for any distribution with mean μ and variance σ², the standardized sample mean (X̄ₙ - μ)/(σ/√n) approaches Standard Normal N(0,1) as n → ∞. This means X̄ₙ ~ N(μ, σ²/n) for large n. CLT explains why Normal distributions appear everywhere - they emerge naturally from averaging processes. Typical guidelines suggest n ≥ 30 for CLT applicability.",
    readAnalogy: "The Law of Large Numbers is like my magic becoming perfectly predictable with enough repetitions - if I flip coins all day, the average will get closer and closer to 0.5. But the Central Limit Theorem is pure magic: no matter what crazy distribution I start with, when I average enough trials, I ALWAYS get that beautiful bell curve! It's like nature's favorite shape emerges automatically!",
    readKeyPoints: [
      "LLN: Sample averages X̄ₙ converge to population mean μ as n increases",
      "CLT: Sample averages approach Normal distribution regardless of original distribution",
      "Standard error σ/√n shows how sample mean precision improves with sample size"
    ],
    readDigDeeper: "The CLT has different versions: identical distributions (classic), independent but not identical (Lyapunov), and dependent variables (martingale CLT). These extensions show the theorem's remarkable generality across different probability structures.",
    readWhyMatters: "Opinion polls use CLT to calculate margins of error from sample sizes. Quality control uses CLT to monitor manufacturing processes with small samples. A/B testing in tech companies relies on CLT for statistical significance testing. Insurance companies use CLT to predict aggregate claim patterns from individual policies.",
    seeContent: "Watch sample means converge to population means through LLN simulations, observe how different starting distributions all lead to Normal sample mean distributions via CLT, and see how standard errors decrease with sample size.",
    hearContent: "Listen as I explain the most magical theorems in probability - how randomness becomes predictable through averaging, and how the bell curve emerges from any starting distribution like nature's universal pattern!",
    hearAudioUrl: "/audio/6.7.mp3",
    doContent: "Use the LLN Simulator showing convergence with increasing sample sizes, practice with the CLT Demonstrator for different starting distributions, and experiment with the Normal Approximation Calculator.",
    memoryAids: {
      mantra: "Large numbers make averages true, Central Limit makes them Normal too! Any start becomes bell-shaped when averaged with mathematical grace!",
      visual: "Picture Pippa repeatedly pulling from any magical distribution, watching the averages converge to a predictable center (LLN) and form a beautiful bell curve shape (CLT) regardless of the original chaos."
    },
    conceptCheck: {
      question: "A population has mean μ = 50 and standard deviation σ = 20. For samples of size n = 100, what's the distribution of the sample mean X̄?",
      options: [
        "X̄ ~ N(50, 20²/100) = N(50, 4), so standard error = 2",
        "X̄ ~ N(50, 20) - same as the population distribution",
        "X̄ ~ N(50, 20/100) = N(50, 0.2), so standard error = 0.2",
        "Cannot determine without knowing the original population distribution"
      ],
      correctAnswer: 0,
      explanation: "By CLT, X̄ ~ N(μ, σ²/n) = N(50, 20²/100) = N(50, 4). The standard error is σ/√n = 20/√100 = 20/10 = 2."
    },
    realWorldConnection: "Gallup polls use CLT to estimate election outcomes from samples of ~1,000 people with known margins of error. Netflix uses CLT to analyze user rating patterns and recommend content. Amazon uses CLT in quality control to monitor shipping times and customer satisfaction from sample data."
  },

  "6.8": {
    id: "6.8",
    title: "PDF vs CDF: Complete Distribution Descriptions",
    duration: "40-45 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa reveals that every distribution has two magical faces! The PDF shows the 'density' of magic at each point - how concentrated the probability is. The CDF shows the 'accumulated' magic up to any point - what fraction of outcomes fall below that value. Together, they give the complete picture of any random phenomenon!",
      characterMessage: "Every distribution wears two magical masks! The PDF (or PMF for discrete) shows how dense the probability is at each spot, like seeing where my magic is most concentrated. The CDF accumulates all that magic up to any point, showing what fraction falls below any value. Together, they tell the complete story!"
    },
    learningObjectives: [
      "Understand PDF as probability density for continuous variables",
      "Master CDF as cumulative probability P(X ≤ x)",
      "Convert between PDF and CDF using calculus relationships",
      "Interpret percentiles and quantiles using CDF",
      "Apply both representations to solve probability problems"
    ],
    coreConcepts: [
      "PDF f(x): probability density, f(x) = F'(x)",
      "CDF F(x) = P(X ≤ x): cumulative probability",
      "Relationship: F(x) = ∫₋∞ˣ f(t)dt",
      "Percentiles and quantiles from CDF",
      "Probability calculations using both representations"
    ],
    readContent: "The Probability Density Function (PDF) f(x) shows the relative likelihood density at each point for continuous variables. Probabilities require integration: P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx. The Cumulative Distribution Function (CDF) F(x) = P(X ≤ x) gives the probability that X doesn't exceed x. These connect via calculus: F(x) = ∫₋∞ˣ f(t)dt and f(x) = F'(x). CDF properties: F(-∞) = 0, F(∞) = 1, and F is non-decreasing. Percentiles and quantiles come from CDF: the pth percentile is the value x where F(x) = p/100. Both representations are essential for different probability calculations.",
    readAnalogy: "Think of PDF and CDF like two views of my magical mountain! PDF shows the 'steepness' at each elevation - where the magic is most concentrated. CDF shows the 'accumulated elevation' - what fraction of the mountain lies below any height. Both views together give me complete knowledge of the magical landscape!",
    readKeyPoints: [
      "PDF f(x): shows probability density at each point (steepness)",
      "CDF F(x): shows cumulative probability up to x (accumulated area)",
      "Calculus relationship: F(x) = ∫₋∞ˣ f(t)dt and f(x) = F'(x)"
    ],
    readDigDeeper: "The inverse CDF (quantile function) F⁻¹(p) gives the value x such that F(x) = p. This is used in random number generation: if U ~ Uniform(0,1), then F⁻¹(U) has distribution F, providing a universal method for generating random samples.",
    readWhyMatters: "Financial risk management uses CDFs to calculate Value-at-Risk percentiles. Medical research uses CDFs to interpret diagnostic test results and establish normal ranges. Manufacturing uses CDFs to set quality control limits and specification tolerances. Machine learning uses CDFs for model calibration and confidence estimation.",
    seeContent: "Visualize the relationship between PDF curves and CDF accumulation, observe how integration connects these representations, and explore how percentiles and quantiles emerge from CDF analysis.",
    hearContent: "Listen as I explain how PDF and CDF are like two magical viewing angles of the same distribution - one showing density concentration, the other showing cumulative accumulation!",
    hearAudioUrl: "/audio/6.8.mp3",
    doContent: "Use the PDF-CDF Converter with interactive integration, practice with the Percentile Calculator using CDF inversions, and experiment with the Distribution Analyzer comparing both representations.",
    memoryAids: {
      mantra: "PDF shows where magic's dense, CDF shows what's accumulated hence! Derivative and integral connect the two - that's probability's double view!",
      visual: "Picture Pippa examining a magical mountain from two angles: PDF showing the steepness at each point, CDF showing the accumulated height up to any elevation, both revealing the complete topography."
    },
    conceptCheck: {
      question: "For continuous distribution with CDF F(x), how do you find P(2 < X ≤ 5) using the CDF?",
      options: [
        "P(2 < X ≤ 5) = F(5) - F(2)",
        "P(2 < X ≤ 5) = F(5) + F(2)",
        "P(2 < X ≤ 5) = F(3.5) since that's the midpoint",
        "P(2 < X ≤ 5) = ∫₂⁵ F(x)dx"
      ],
      correctAnswer: 0,
      explanation: "P(2 < X ≤ 5) = P(X ≤ 5) - P(X ≤ 2) = F(5) - F(2). The CDF gives cumulative probabilities, so we subtract to get the probability in the interval."
    },
    realWorldConnection: "Financial analysts use CDFs to calculate portfolio Value-at-Risk at specific confidence levels. Medical labs use CDFs to determine if patient test results fall within normal ranges. Quality control engineers use CDFs to set manufacturing tolerance limits that capture desired percentages of production."
  },

  "6.9": {
    id: "6.9",
    title: "Sampling & Sampling Variability",
    duration: "40-45 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa faces a practical challenge: she can't examine every rabbit in the magical forest, but she needs to understand the whole population! Sampling is the art of learning about large groups by studying carefully chosen smaller groups. But samples vary randomly, creating uncertainty that must be quantified and understood.",
      characterMessage: "Time for real-world magic! I can't study every single rabbit in the forest, so I need to learn about the whole population from samples. But here's the tricky part - different samples give different answers! Understanding sampling variability is crucial for making reliable conclusions from limited data."
    },
    learningObjectives: [
      "Understand sampling as selecting subsets from populations",
      "Distinguish between population parameters and sample statistics",
      "Quantify sampling variability using standard errors",
      "Apply sampling distributions to make population inferences",
      "Recognize sources of sampling bias and random variation"
    ],
    coreConcepts: [
      "Population vs sample distinction",
      "Parameters (μ, σ) vs statistics (X̄, s)",
      "Sampling distribution of sample mean",
      "Standard error: SE = σ/√n",
      "Sampling bias vs random sampling error"
    ],
    readContent: "Sampling involves selecting subsets from populations to make inferences about the whole. Population parameters (μ, σ, p) are fixed but unknown, while sample statistics (X̄, s, p̂) are random variables that estimate parameters. The sampling distribution describes how statistics vary across different samples. For sample means, the Central Limit Theorem gives X̄ ~ N(μ, σ²/n), with standard error SE = σ/√n measuring precision. Larger samples give more precise estimates (smaller SE). Random sampling ensures representativeness, while bias occurs when sampling methods systematically favor certain outcomes. Understanding sampling variability is essential for statistical inference.",
    readAnalogy: "Sampling is like trying to understand the magical forest by studying just a few clearings! The whole forest (population) has true characteristics I want to know, but I can only visit a few spots (sample). Each expedition gives slightly different results due to random variation, but if I choose spots fairly and visit enough of them, I can learn about the whole forest with known precision!",
    readKeyPoints: [
      "Samples estimate population parameters with random variability",
      "Standard error SE = σ/√n measures sampling precision",
      "Larger samples reduce sampling variability and improve estimates"
    ],
    readDigDeeper: "Finite population corrections modify standard errors when sampling without replacement from small populations: SE = (σ/√n)√[(N-n)/(N-1)] where N is population size. This shows how standard errors depend on the fraction sampled, not just absolute sample size.",
    readWhyMatters: "Political polling uses sampling theory to estimate election outcomes from small samples with quantified margins of error. Medical trials use sampling principles to test drug effectiveness on limited patient groups. Market research uses sampling to understand consumer preferences without surveying everyone. Quality control uses sampling to monitor production without testing every item.",
    seeContent: "Visualize how different samples from the same population give different statistics, observe how standard errors change with sample size, and explore the relationship between sampling distributions and population parameters.",
    hearContent: "Listen as I explain how sampling is like exploring the magical forest through small expeditions - each trip gives slightly different results, but proper sampling methods let us understand the whole forest with quantified precision!",
    hearAudioUrl: "/audio/6.9.mp3",
    doContent: "Use the Sampling Simulator to draw multiple samples and observe variability, practice with the Standard Error Calculator, and experiment with the Bias vs Precision Demonstrator.",
    memoryAids: {
      mantra: "Sample to learn about the whole, standard error shows the sampling toll! Bigger samples, smaller error - that's sampling's mathematical mirror!",
      visual: "Picture Pippa sending out multiple small expeditions into the magical forest, with each expedition reporting slightly different findings, but the pattern of results revealing the true nature of the whole forest."
    },
    conceptCheck: {
      question: "A population has standard deviation σ = 12. Compare the standard errors for sample sizes n = 36 and n = 144.",
      options: [
        "SE₃₆ = 12/6 = 2, SE₁₄₄ = 12/12 = 1, so quadrupling sample size halves standard error",
        "SE₃₆ = 12/36 = 1/3, SE₁₄₄ = 12/144 = 1/12, smaller sample has larger error",
        "SE₃₆ = 2, SE₁₄₄ = 1, since standard error is σ/√n",
        "Both A and C are correct calculations"
      ],
      correctAnswer: 3,
      explanation: "Standard error SE = σ/√n. For n=36: SE = 12/√36 = 12/6 = 2. For n=144: SE = 12/√144 = 12/12 = 1. Quadrupling the sample size (36→144) halves the standard error (2→1)."
    },
    realWorldConnection: "Gallup polls estimate election results from ~1,000 voters with ±3% margin of error using sampling theory. Medical researchers test new drugs on limited patient samples to make population inferences. Netflix analyzes user behavior from sample data to understand broader viewing patterns across millions of users."
  },

  "6.10": {
    id: "6.10",
    title: "Pippa's Probability & Distributions Capstone",
    duration: "50-60 minutes",
    characterId: "pippa",
    narrativeHook: {
      story: "Pippa faces the ultimate probability challenge: a comprehensive magical investigation that requires every technique she's mastered! From basic sample spaces through complex distributions, from expectation calculations to sampling theory - this capstone synthesizes all probability concepts into one integrated exploration of uncertainty and randomness.",
      characterMessage: "Time for the grand finale of probability magic! This ultimate challenge brings together everything we've learned - sample spaces, distributions, expectation, variance, limit theorems, and sampling. Let's solve a complex real-world problem that showcases the full power of probability theory!"
    },
    learningObjectives: [
      "Synthesize all probability concepts in one comprehensive project",
      "Apply multiple distribution types to model real phenomena",
      "Calculate expectations, variances, and use limit theorems",
      "Analyze sampling scenarios with proper statistical reasoning",
      "Connect probability theory to practical decision-making applications"
    ],
    coreConcepts: [
      "Complete probability analysis workflow",
      "Distribution selection and parameter estimation",
      "Expectation and variance calculations",
      "Limit theorem applications",
      "Sampling theory and inference"
    ],
    readContent: "This capstone project synthesizes every probability concept into one comprehensive investigation. You'll analyze complex scenarios from basic sample space construction through advanced limit theorem applications, demonstrating mastery of distributions, expectation, variance, conditional probability, and sampling theory. The project mirrors real-world applications where probability provides the mathematical foundation for decision-making under uncertainty: quality control, financial risk assessment, medical diagnosis, and machine learning. This integrated approach shows how probability theory enables quantitative reasoning about uncertain phenomena across diverse fields.",
    readAnalogy: "This capstone is like Pippa conducting the ultimate magical performance! Every probability technique must work together perfectly - from basic sample spaces through complex distributions to advanced sampling theory. It's the complete demonstration of how mathematics transforms uncertainty into actionable insights!",
    readKeyPoints: [
      "Complete probability analysis: sample spaces through statistical inference",
      "Integration of discrete and continuous distributions with real applications",
      "Expectation, variance, and limit theorems for practical problem-solving"
    ],
    readDigDeeper: "This project workflow mirrors professional probability applications: data scientists model user behavior with distributions, actuaries use probability for insurance pricing, engineers apply probability for reliability analysis, and economists use probability for market forecasting. The mathematical techniques you're mastering form the foundation of quantitative decision-making.",
    readWhyMatters: "This capstone demonstrates career-ready probability skills. Data scientists use these exact techniques for predictive modeling and A/B testing. Actuaries apply probability theory for insurance and pension calculations. Quality engineers use probability for process control and reliability analysis. Your probability mastery translates directly to high-impact careers in data science, finance, engineering, and research.",
    seeContent: "Work through comprehensive probability analysis tools that integrate distribution fitting, parameter estimation, expectation calculations, and sampling simulations in realistic application scenarios.",
    hearContent: "Listen as I guide you through the ultimate demonstration of probability mastery - every concept working together with the playful precision and magical insight that defines excellent probabilistic reasoning!",
    hearAudioUrl: "/audio/6.10.mp3",
    doContent: "Complete the comprehensive probability project: construct sample spaces, select and apply appropriate distributions, calculate expectations and variances, apply limit theorems for approximations, and analyze sampling scenarios with proper uncertainty quantification.",
    memoryAids: {
      mantra: "Every distribution, every theorem, every magical rule - probability mastery is the ultimate tool! From uncertainty to insight with mathematical might!",
      visual: "Picture yourself as Pippa's magical apprentice, using every probability technique with playful precision to transform a complex uncertain scenario into clear, quantified insights that guide real-world decisions."
    },
    conceptCheck: {
      question: "In Part C, you model customer arrivals as Poisson(λ=5 per hour) and use Normal approximation. What justifies this approximation and what parameters should you use?",
      options: [
        "Poisson(5) ≈ Normal(5, 5) since for large λ, Poisson approaches Normal with μ = σ² = λ",
        "Use Normal(5, √5) since Poisson variance equals the mean",
        "Cannot use Normal approximation since Poisson is discrete",
        "Both A and B describe the same approximation with different variance notation"
      ],
      correctAnswer: 3,
      explanation: "For large λ, Poisson(λ) ≈ Normal(λ, λ). Here: Poisson(5) ≈ Normal(5, 5). Since Normal uses standard deviation, this is Normal(μ=5, σ=√5). Both A and B are correct - A uses variance notation (σ²=5), B uses standard deviation notation (σ=√5)."
    },
    realWorldConnection: "This project mirrors real data science workflows: modeling user behavior with appropriate distributions, calculating expected outcomes for business planning, using limit theorems for approximations, and applying sampling theory for A/B testing. The probability mastery you've developed applies directly to careers in data science, actuarial science, quality engineering, and quantitative research."
  }
};