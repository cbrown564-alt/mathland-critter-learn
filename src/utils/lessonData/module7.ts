import { LessonData } from "@/types/lesson";

// Module 7: Hypothesis Testing & Inference
// Copy and paste module 7 lesson data here

export const module7Lessons: { [key: string]: LessonData } = {
  "7.1": {
    id: "7.1",
    title: "Introduction to Statistical Inference",
    duration: "35-40 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund the Swan glides gracefully across the still waters of statistical inference, his elegant black form a perfect symbol of rare and significant events. As a creature who understands both beauty and rarity, Sigmund knows that statistical inference is the art of making principled decisions about populations based on limited sample evidence.",
      characterMessage: "Welcome to the realm of statistical inference, where elegance meets evidence! I am Sigmund, and I specialize in distinguishing the truly significant from the merely coincidental. Statistical inference allows us to make principled conclusions about populations from samples, always with quantified uncertainty."
    },
    learningObjectives: [
      "Understand statistical inference as population conclusions from sample data",
      "Distinguish between descriptive and inferential statistics",
      "Recognize the role of sampling distributions in inference",
      "Understand uncertainty quantification in statistical conclusions",
      "Connect inference to scientific method and decision-making"
    ],
    coreConcepts: [
      "Population parameters vs sample statistics",
      "Statistical inference framework",
      "Sampling distributions as inference foundation",
      "Uncertainty and variability in conclusions",
      "Scientific method and statistical evidence"
    ],
    readContent: "Statistical inference draws conclusions about populations from sample data, acknowledging inherent uncertainty. We distinguish between population parameters (unknown, fixed values) and sample statistics (observed, random values that estimate parameters). The inference framework involves: collecting representative samples, computing sample statistics, using sampling distributions to quantify uncertainty, and making probabilistic statements about population parameters. Unlike descriptive statistics that summarize data, inferential statistics make claims beyond the observed sample. The sampling distribution bridges sample and population, showing how statistics vary across possible samples and enabling probability statements about parameter estimates.",
    readAnalogy: "Statistical inference is like observing my elegant flight patterns to understand all swans everywhere. You see me glide across one lake (sample), but you want to know about swan behavior in general (population). The key insight is that different observers at different lakes will see slightly different patterns due to natural variation, but mathematical principles let us quantify this uncertainty and still make reliable statements about all swans.",
    readKeyPoints: [
      "Inference makes population conclusions from sample evidence with quantified uncertainty",
      "Sampling distributions show how statistics vary across possible samples",
      "Distinguished from descriptive statistics by making claims beyond observed data"
    ],
    readDigDeeper: "The frequentist interpretation of probability underlies classical statistical inference: probability statements refer to long-run frequencies across repeated sampling. This philosophical foundation distinguishes classical inference from Bayesian approaches that treat parameters as random variables.",
    readWhyMatters: "Medical researchers use statistical inference to determine drug effectiveness from clinical trials. Political polling uses inference to predict election outcomes from sample surveys. Quality control uses inference to monitor manufacturing processes. A/B testing in tech companies relies on statistical inference to make product decisions.",
    seeContent: "Visualize the relationship between populations and samples, observe how sampling distributions enable probability statements about parameters, and explore the conceptual framework that underlies all statistical inference.",
    hearContent: "Listen as I explain how statistical inference is like the elegant art of understanding the whole from glimpses of the part - always with the grace to acknowledge our uncertainty while maintaining principled conclusions!",
    hearAudioUrl: "/audio/7.1.mp3",
    doContent: "Use the Population vs Sample Explorer to understand the inference gap, practice with the Sampling Distribution Visualizer, and experiment with the Uncertainty Quantification Simulator.",
    memoryAids: {
      mantra: "From sample to population with elegant precision - statistical inference bridges the decision! Uncertainty acknowledged, conclusions principled - that's inference refined!",
      visual: "Picture Sigmund gracefully observing his reflection in multiple lakes, understanding that each glimpse reveals something about swan nature in general, while elegantly acknowledging the inherent uncertainty in generalizing from limited observations."
    },
    conceptCheck: {
      question: "A researcher observes that 65% of a sample of 100 voters support a candidate. What distinguishes this from statistical inference?",
      options: [
        "This is descriptive statistics; inference would make probability statements about the population percentage",
        "This is already statistical inference since we're using a sample",
        "This is inference because 65% estimates the population parameter",
        "There's no difference - sample percentages are always inferential"
      ],
      correctAnswer: 0,
      explanation: "Stating '65% of the sample supports the candidate' is descriptive. Inference would make probability statements like 'we're 95% confident the population support is between 55-75%' using sampling distribution theory."
    },
    realWorldConnection: "Pharmaceutical companies use statistical inference to determine if new drugs are effective based on limited clinical trial data. Netflix uses inference to understand user preferences from viewing samples. Climate scientists use inference to make global conclusions from weather station data across the world."
  },

  "7.2": {
    id: "7.2",
    title: "Sampling Distribution & Standard Error",
    duration: "40-45 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund contemplates the profound beauty of sampling distributions - the mathematical bridges between individual samples and universal truths. Just as a single swan's flight pattern varies slightly each time, sample statistics vary in predictable ways that follow elegant mathematical laws, creating the foundation for all statistical inference.",
      characterMessage: "Behold the mathematical elegance of sampling distributions! Every statistic has its own distribution across all possible samples, and understanding these patterns is the key to principled inference. The standard error measures the precision of our statistical estimates with beautiful mathematical grace."
    },
    learningObjectives: [
      "Understand sampling distributions as distributions of statistics across samples",
      "Calculate and interpret standard errors for various statistics",
      "Apply the Central Limit Theorem to sampling distribution analysis",
      "Distinguish between population standard deviation and standard error",
      "Use sampling distributions to quantify estimation uncertainty"
    ],
    coreConcepts: [
      "Sampling distribution: distribution of a statistic across all possible samples",
      "Standard error: standard deviation of sampling distribution",
      "Central Limit Theorem for sample means",
      "Standard error formulas: SE = σ/√n for means",
      "Relationship to confidence and precision"
    ],
    readContent: "The sampling distribution describes how a statistic varies across all possible samples of fixed size from a population. For sample means, the Central Limit Theorem guarantees that X̄ ~ N(μ, σ²/n) for large n, regardless of population shape. The standard error SE = σ/√n measures the precision of sample mean estimates - smaller SE indicates more precise estimates. Standard error differs from population standard deviation σ: σ measures individual observation variability, while SE measures statistic variability across samples. Other statistics have their own sampling distributions and standard errors. Understanding sampling distributions enables probability statements about how close sample statistics are to population parameters.",
    readAnalogy: "Think of sampling distributions like observing the graceful variations in swan flight patterns. Each flight (sample) produces a slightly different pattern (statistic), but these variations follow predictable mathematical laws. The standard error measures how much these flight patterns typically vary - smaller standard error means more consistent, predictable patterns, which gives us more confidence in understanding swan flight in general.",
    readKeyPoints: [
      "Sampling distribution shows how statistics vary across all possible samples",
      "Standard error SE = σ/√n measures sampling precision for means",
      "Central Limit Theorem ensures Normal sampling distributions for large samples"
    ],
    readDigDeeper: "The delta method provides standard error approximations for complex statistics using calculus: if g is a differentiable function and √n(θ̂ - θ) → N(0, σ²), then √n(g(θ̂) - g(θ)) → N(0, σ²[g'(θ)]²). This enables standard error calculations for transformed parameters.",
    readWhyMatters: "Political polls report margins of error based on standard errors of sample proportions. Medical studies use standard errors to assess the precision of treatment effect estimates. Manufacturing quality control uses standard errors to monitor process stability. Financial models use standard errors to quantify uncertainty in risk estimates.",
    seeContent: "Visualize how sample means cluster around population means with standard error precision, observe Central Limit Theorem emergence across different population shapes, and explore how sample size affects standard error magnitude.",
    hearContent: "Listen as I explain how sampling distributions reveal the elegant mathematical patterns underlying statistical variation - like discovering the hidden choreography that governs all swan flights!",
    hearAudioUrl: "/audio/7.2.mp3",
    doContent: "Use the Sampling Distribution Generator to observe statistic variation patterns, practice with the Standard Error Calculator for different scenarios, and experiment with the CLT Demonstrator showing distribution convergence.",
    memoryAids: {
      mantra: "Statistics dance in patterns true, sampling distributions show their ballet through! Standard error measures the spread - precision elegant, beautifully led!",
      visual: "Picture Sigmund watching countless swan flights, each slightly different but following predictable mathematical patterns, with standard error measuring how tightly the flight patterns cluster around the true swan flight archetype."
    },
    conceptCheck: {
      question: "A population has σ = 15. For sample means with n = 25, what is the standard error and what does it represent?",
      options: [
        "SE = 15/√25 = 3, measuring how much sample means typically vary around the population mean",
        "SE = 15/25 = 0.6, showing the precision of individual observations",
        "SE = 15, since standard error equals population standard deviation",
        "SE = √(15/25) = √0.6, measuring sampling variability"
      ],
      correctAnswer: 0,
      explanation: "Standard error for sample means: SE = σ/√n = 15/√25 = 15/5 = 3. This measures how much sample means typically vary around the true population mean μ across different samples of size 25."
    },
    realWorldConnection: "Gallup polls use standard errors to calculate ±3% margins of error for political surveys. Medical researchers report standard errors to show the precision of treatment effect estimates. Market research companies use standard errors to quantify uncertainty in consumer preference estimates from sample surveys."
  },

  "7.3": {
    id: "7.3",
    title: "Confidence Intervals",
    duration: "45-50 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund discovers the elegant solution to expressing uncertainty: confidence intervals create graceful ranges that capture unknown parameters with specified probability. Like the swan's flight path traced against the sky, confidence intervals map the probable territory where truth resides, acknowledging uncertainty while maintaining statistical dignity.",
      characterMessage: "Confidence intervals embody statistical elegance at its finest! Rather than single-point estimates, we create intervals that capture the unknown parameter with known probability. It's a graceful way to express both our knowledge and our appropriate humility before uncertainty."
    },
    learningObjectives: [
      "Construct confidence intervals for population means",
      "Interpret confidence level and confidence interval meaning",
      "Apply t-distribution for unknown population variance",
      "Understand the relationship between confidence level and interval width",
      "Recognize factors affecting confidence interval precision"
    ],
    coreConcepts: [
      "Confidence interval: X̄ ± margin of error",
      "Confidence level interpretation",
      "Critical values from Normal and t-distributions",
      "Margin of error: ME = t*SE or z*SE",
      "Factors affecting interval width"
    ],
    readContent: "A confidence interval provides a range of plausible values for an unknown population parameter. For population means: X̄ ± t(α/2,df) × SE, where t is the critical value from t-distribution with df = n-1 degrees of freedom. The confidence level (e.g., 95%) indicates that if we repeated this procedure many times, 95% of intervals would contain the true parameter. We use t-distribution when population variance is unknown (typical case) and Normal distribution when variance is known. Margin of error ME = t × SE determines interval width. Larger samples, lower confidence levels, and smaller population variance all produce narrower intervals.",
    readAnalogy: "Confidence intervals are like gracefully sketching the probable flight zone where I'll appear next. You can't predict my exact location, but statistical principles let you draw elegant boundaries that will contain my flight path 95% of the time if you repeat this process. The confidence level tells you how often these beautiful boundaries succeed in their purpose.",
    readKeyPoints: [
      "Confidence interval: X̄ ± t(α/2,df) × SE captures parameter with known probability",
      "Confidence level: percentage of intervals that contain true parameter in repeated sampling",
      "Use t-distribution when population variance unknown (typical case)"
    ],
    readDigDeeper: "The duality between confidence intervals and hypothesis tests: a 95% confidence interval contains all parameter values that would not be rejected in a two-sided hypothesis test at α = 0.05. This connects interval estimation to hypothesis testing through the same mathematical foundation.",
    readWhyMatters: "Medical studies report confidence intervals for treatment effects to show clinical significance. Political polls use confidence intervals to communicate uncertainty in candidate support estimates. Engineering uses confidence intervals for quality specifications and safety margins. Business analytics uses confidence intervals for forecasting and decision-making.",
    seeContent: "Watch confidence interval construction step-by-step, observe how confidence level affects interval width, and visualize the long-run interpretation through repeated sampling simulations.",
    hearContent: "Listen as I explain how confidence intervals provide elegant mathematical dignity to uncertainty - creating beautiful boundaries that honor both our knowledge and our limitations!",
    hearAudioUrl: "/audio/7.3.mp3",
    doContent: "Use the Confidence Interval Calculator with adjustable parameters, practice with the t-Distribution Critical Value Finder, and experiment with the Confidence Level Simulator showing long-run interpretation.",
    memoryAids: {
      mantra: "Sample plus-minus margin of error - confidence intervals show where truth may lurk! Not the parameter itself we find, but elegant bounds that ease the mind!",
      visual: "Picture Sigmund creating graceful boundaries on a lake, knowing that while he can't predict exactly where he'll land, these elegant mathematical boundaries will contain his landing spot with known probability across many flights."
    },
    conceptCheck: {
      question: "A 95% confidence interval for mean height is [168, 172] cm. What does this mean?",
      options: [
        "We're 95% confident the true population mean is between 168-172 cm",
        "95% of individuals have heights between 168-172 cm",
        "There's a 95% probability the sample mean is between 168-172 cm",
        "The true mean has a 95% chance of being exactly 170 cm"
      ],
      correctAnswer: 0,
      explanation: "The 95% confidence level refers to the long-run success rate of the interval procedure in capturing the true population parameter. We're 95% confident that this specific interval [168, 172] contains the unknown population mean height."
    },
    realWorldConnection: "Pharmaceutical companies report confidence intervals for drug efficacy to regulators for approval decisions. Public health agencies use confidence intervals to communicate disease prevalence estimates. Market research uses confidence intervals to guide business strategy decisions with quantified uncertainty about consumer behavior."
  },

  "7.4": {
    id: "7.4",
    title: "Introduction to Hypothesis Testing",
    duration: "45-50 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund encounters the fundamental challenge of scientific inquiry: distinguishing meaningful signals from random noise. Hypothesis testing provides the elegant framework for making these crucial distinctions, setting up null and alternative hypotheses like a formal debate where evidence must reach a threshold of convincing proof.",
      characterMessage: "Hypothesis testing is the heart of scientific reasoning! We set up competing hypotheses - null and alternative - then gather evidence to see if we can elegantly reject the status quo in favor of something new. It's a formal process that maintains statistical dignity while pursuing truth."
    },
    learningObjectives: [
      "Formulate null and alternative hypotheses correctly",
      "Understand the logic and structure of hypothesis testing",
      "Define Type I and Type II errors in testing context",
      "Apply hypothesis testing framework to real problems",
      "Recognize the burden of proof concept in statistical testing"
    ],
    coreConcepts: [
      "Null hypothesis H₀: status quo or no effect",
      "Alternative hypothesis H₁: claim to be tested",
      "Type I error: rejecting true H₀ (false positive)",
      "Type II error: failing to reject false H₀ (false negative)",
      "Significance level α and testing logic"
    ],
    readContent: "Hypothesis testing evaluates competing claims about population parameters using sample evidence. The null hypothesis H₀ represents the status quo or 'no effect' position, while the alternative hypothesis H₁ represents the research claim we're testing. The logic follows 'proof by contradiction': assume H₀ is true, then determine if observed data is sufficiently unlikely under this assumption to reject H₀ in favor of H₁. Type I error occurs when we reject a true H₀ (false positive), with probability α (significance level). Type II error occurs when we fail to reject a false H₀ (false negative), with probability β. The framework places burden of proof on the alternative hypothesis, requiring strong evidence to overturn the null.",
    readAnalogy: "Hypothesis testing is like a formal court proceeding where the null hypothesis is 'innocent until proven guilty.' The alternative hypothesis makes an accusation that must be supported by strong evidence. Just as courts can make two types of errors - convicting the innocent (Type I) or acquitting the guilty (Type II) - statistical tests face the same elegant challenge of balancing these risks.",
    readKeyPoints: [
      "H₀ (null): status quo/no effect; H₁ (alternative): research claim to test",
      "Logic: assume H₀ true, reject only if data sufficiently unlikely under H₀",
      "Type I error: reject true H₀; Type II error: fail to reject false H₀"
    ],
    readDigDeeper: "The Neyman-Pearson paradigm formalizes hypothesis testing by fixing Type I error rate α and minimizing Type II error rate β for given effect size. This decision-theoretic approach treats hypothesis testing as an optimal decision procedure under uncertainty.",
    readWhyMatters: "Drug approval requires hypothesis testing to prove efficacy beyond placebo effects. Quality control uses hypothesis testing to detect manufacturing problems. A/B testing in tech companies uses hypothesis testing to validate product improvements. Scientific research relies on hypothesis testing to establish credible findings.",
    seeContent: "Explore the logical structure of hypothesis testing, visualize Type I and Type II errors in context, and observe how the testing framework applies across different scientific domains.",
    hearContent: "Listen as I explain how hypothesis testing brings elegant formal logic to the messy world of uncertainty - creating a principled framework for distinguishing signal from noise!",
    hearAudioUrl: "/audio/7.4.mp3",
    doContent: "Use the Hypothesis Formulation Tool for practice scenarios, experiment with the Error Type Visualizer, and practice with the Testing Logic Simulator showing decision outcomes.",
    memoryAids: {
      mantra: "Null says 'nothing new here,' alternative claims 'change is clear!' Evidence must be strong to reject the null - that's hypothesis testing's protocol!",
      visual: "Picture Sigmund as an elegant judge presiding over a formal debate between null and alternative hypotheses, requiring compelling evidence before gracefully ruling in favor of change over the status quo."
    },
    conceptCheck: {
      question: "A researcher tests whether a new teaching method improves test scores. What are appropriate null and alternative hypotheses?",
      options: [
        "H₀: μₙₑw = μₒₗd (no improvement), H₁: μₙₑw > μₒₗd (improvement)",
        "H₀: μₙₑw > μₒₗd (improvement), H₁: μₙₑw = μₒₗd (no improvement)", 
        "H₀: new method works, H₁: new method doesn't work",
        "H₀: μₙₑw ≠ μₒₗd (difference), H₁: μₙₑw = μₒₗd (no difference)"
      ],
      correctAnswer: 0,
      explanation: "The null hypothesis H₀ represents status quo (no improvement), while alternative H₁ represents the research claim being tested (improvement). The burden of proof lies with demonstrating improvement, not maintaining the status quo."
    },
    realWorldConnection: "FDA drug approval requires hypothesis testing to demonstrate efficacy beyond placebo effects. Tech companies like Google use A/B testing with hypothesis testing to validate new features. Medical researchers use hypothesis testing to establish treatment effectiveness in clinical trials."
  },

  "7.5": {
    id: "7.5",
    title: "Test Statistics & P-values",
    duration: "45-50 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund reveals the mathematical heart of hypothesis testing: test statistics transform sample data into standardized measures of evidence, while p-values quantify exactly how rare the observed result would be if the null hypothesis were true. These elegant tools turn raw data into precise statements about statistical significance.",
      characterMessage: "Now we reach the mathematical essence of hypothesis testing! Test statistics standardize our evidence into elegant mathematical form, while p-values answer the crucial question: 'How rare is what we observed?' These tools transform data into dignified statistical conclusions."
    },
    learningObjectives: [
      "Calculate test statistics for various hypothesis tests",
      "Understand p-values as conditional probabilities under H₀",
      "Interpret p-values correctly in hypothesis testing context",
      "Apply decision rules using p-values and significance levels",
      "Recognize common misconceptions about p-value interpretation"
    ],
    coreConcepts: [
      "Test statistic: standardized measure of evidence against H₀",
      "P-value: P(observing data this extreme | H₀ true)",
      "P-value interpretation and decision rules",
      "One-tailed vs two-tailed tests",
      "Statistical significance vs practical significance"
    ],
    readContent: "Test statistics standardize sample evidence into a common scale for comparison with theoretical distributions. For population means: t = (X̄ - μ₀)/(s/√n), which measures how many standard errors the sample mean is from the hypothesized value. The p-value is the probability of observing data at least as extreme as what we observed, assuming H₀ is true. For two-tailed tests, p-value = 2 × P(T > |t|), while one-tailed tests use p-value = P(T > t). Decision rule: reject H₀ if p-value < α. Statistical significance (low p-value) doesn't guarantee practical importance - effect size matters. Common misconceptions: p-value is NOT the probability that H₀ is true, nor the probability of making an error.",
    readAnalogy: "Test statistics are like standardized scoring systems that let us compare different types of evidence on the same elegant scale. P-values answer 'If the null hypothesis were true, how shocking would our observation be?' It's like asking: if swans truly can't fly over mountains, how surprising would it be to see what we just observed? The smaller the p-value, the more our evidence contradicts the null hypothesis.",
    readKeyPoints: [
      "Test statistic standardizes evidence: t = (X̄ - μ₀)/(s/√n) for means",
      "P-value = P(data this extreme | H₀ true), NOT P(H₀ true | data)",
      "Decision rule: reject H₀ if p-value < α (significance level)"
    ],
    readDigDeeper: "The p-value function p(x) = P(T ≥ t(x) | H₀) where t(x) is the test statistic computed from data x, provides a complete summary of evidence against H₀ for all possible observations. This function captures more information than just whether p < α.",
    readWhyMatters: "Medical journals require p-values to establish treatment efficacy. Tech companies use p-values in A/B testing to validate product changes. Quality control uses p-values to detect manufacturing defects. Scientific research relies on p-values to establish credible findings, though with increasing awareness of their limitations.",
    seeContent: "Watch test statistic calculations step-by-step, visualize p-value areas under probability curves, and observe how p-values relate to evidence strength against null hypotheses.",
    hearContent: "Listen as I explain how test statistics and p-values transform messy data into elegant measures of evidence - the mathematical poetry of statistical significance!",
    hearAudioUrl: "/audio/7.5.mp3",
    doContent: "Use the Test Statistic Calculator for various scenarios, practice with the P-value Visualizer showing tail areas, and experiment with the Significance Decision Simulator.",
    memoryAids: {
      mantra: "Test statistic measures how far we stray, p-value shows how rare the day! If p-value's small, reject with grace - statistical significance takes its place!",
      visual: "Picture Sigmund calculating how far his flight deviates from expected patterns (test statistic), then elegantly determining how rare such a deviation would be in the world of null hypothesis (p-value)."
    },
    conceptCheck: {
      question: "A test gives t = 2.1 with p-value = 0.03. What does this mean if α = 0.05?",
      options: [
        "Reject H₀; if H₀ were true, we'd see data this extreme only 3% of the time",
        "Accept H₀; the sample mean is 2.1 standard errors above the null value",
        "There's a 3% chance the null hypothesis is true",
        "We're making a Type I error with 3% probability"
      ],
      correctAnswer: 0,
      explanation: "Since p-value = 0.03 < α = 0.05, we reject H₀. The p-value means that if H₀ were true, we would observe data this extreme or more extreme only 3% of the time. This is strong evidence against H₀."
    },
    realWorldConnection: "Pharmaceutical trials report p-values to demonstrate drug efficacy to regulatory agencies. Netflix uses p-values in A/B testing to determine if new features significantly improve user engagement. Academic journals require p-values to establish statistical significance of research findings."
  },

  "7.6": {
    id: "7.6",
    title: "t-tests, χ², & ANOVA Preview",
    duration: "45-50 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund surveys the elegant family of hypothesis tests, each designed for specific statistical situations. The t-test for means, chi-square for categorical data, and ANOVA for multiple groups - each test embodies the same fundamental logic while adapting gracefully to different data types and research questions.",
      characterMessage: "Behold the elegant family of hypothesis tests! Each test applies our fundamental logic to different situations: t-tests for means, chi-square for categorical relationships, and ANOVA for multiple group comparisons. The mathematical beauty lies in how the same principles adapt to diverse research questions."
    },
    learningObjectives: [
      "Apply one-sample and two-sample t-tests appropriately",
      "Understand chi-square tests for independence and goodness of fit",
      "Preview ANOVA for comparing multiple group means",
      "Recognize when to use each type of test",
      "Interpret results from different test families"
    ],
    coreConcepts: [
      "One-sample t-test: t = (X̄ - μ₀)/(s/√n)",
      "Two-sample t-test for comparing means",
      "Chi-square test for independence in contingency tables",
      "Chi-square goodness of fit test",
      "ANOVA F-test for multiple group comparison"
    ],
    readContent: "Different research questions require different hypothesis tests, but all follow the same elegant logic. One-sample t-tests compare a sample mean to a hypothesized value using t = (X̄ - μ₀)/(s/√n) with df = n-1. Two-sample t-tests compare means between groups, requiring careful consideration of equal vs unequal variances. Chi-square tests analyze categorical data: independence tests examine relationships in contingency tables using χ² = Σ(O-E)²/E, while goodness-of-fit tests compare observed frequencies to theoretical distributions. ANOVA extends t-tests to multiple groups using F-statistics, testing whether any group means differ while controlling overall Type I error rate. Each test adapts the fundamental hypothesis testing framework to specific data types and research questions.",
    readAnalogy: "Think of hypothesis tests like an elegant collection of specialized dance forms. Each dance (test) follows the same fundamental rhythm and structure (hypothesis testing logic), but adapts gracefully to different music and occasions. T-tests are like classical ballet for comparing means, chi-square is like interpretive dance for categorical relationships, and ANOVA is like orchestral performance for multiple group comparisons.",
    readKeyPoints: [
      "T-tests: compare means using t-distribution (one-sample, two-sample)",
      "Chi-square: analyze categorical data relationships and distributions",
      "ANOVA: compare multiple group means using F-distribution"
    ],
    readDigDeeper: "The general linear model unifies many tests: t-tests, ANOVA, and regression are all special cases of Y = Xβ + ε. This framework shows how different tests are variations on the same mathematical theme, providing elegant theoretical unity to diverse statistical procedures.",
    readWhyMatters: "Medical research uses t-tests to compare treatment effects between groups. Market research uses chi-square tests to analyze consumer preference patterns. Educational research uses ANOVA to compare teaching methods across multiple schools. Tech companies use these tests to analyze user behavior across different platforms.",
    seeContent: "Explore test selection flowcharts for different research scenarios, visualize test statistics under their respective distributions, and observe how different tests address specific types of research questions.",
    hearContent: "Listen as I explain how each test in our elegant statistical family specializes in different questions while maintaining the same fundamental grace and logic of hypothesis testing!",
    hearAudioUrl: "/audio/7.6.mp3",
    doContent: "Use the Test Selection Guide for various scenarios, practice with the t-Test Calculator for mean comparisons, and experiment with the Chi-Square Test Analyzer for categorical data.",
    memoryAids: {
      mantra: "T for means, chi-square for counts, ANOVA when multiple groups amount! Same logic, different dance - each test has its statistical stance!",
      visual: "Picture Sigmund conducting an elegant statistical orchestra where each instrument (test type) plays its specialized part while following the same fundamental musical score of hypothesis testing logic."
    },
    conceptCheck: {
      question: "You want to test if a new drug affects blood pressure differently than a placebo. Which test is most appropriate?",
      options: [
        "Two-sample t-test to compare mean blood pressure between drug and placebo groups",
        "One-sample t-test to compare drug group mean to a standard value",
        "Chi-square test to analyze the relationship between treatment and blood pressure",
        "ANOVA to compare multiple blood pressure measurements"
      ],
      correctAnswer: 0,
      explanation: "This scenario compares means between two independent groups (drug vs placebo), making the two-sample t-test the appropriate choice. We're testing if μdrug ≠ μplacebo for continuous blood pressure measurements."
    },
    realWorldConnection: "Clinical trials use two-sample t-tests to compare treatment outcomes between experimental and control groups. Social media companies use chi-square tests to analyze user engagement patterns across different demographics. Educational researchers use ANOVA to compare test scores across multiple teaching methods or schools."
  },

  "7.7": {
    id: "7.7",
    title: "Type I & Type II Errors",
    duration: "40-45 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund contemplates the inherent duality of decision-making under uncertainty. Every hypothesis test faces two possible errors: rejecting truth (Type I) or accepting falsehood (Type II). Like the balance between being too suspicious or too trusting, these errors represent the fundamental trade-off in statistical decision-making.",
      characterMessage: "Every statistical decision carries the elegant weight of uncertainty! We can never eliminate all possibility of error, but we can understand and control these risks. Type I and Type II errors represent the fundamental balance between skepticism and acceptance in our quest for truth."
    },
    learningObjectives: [
      "Define and distinguish Type I and Type II errors clearly",
      "Understand the trade-off relationship between error types",
      "Calculate error probabilities in hypothesis testing contexts",
      "Recognize factors affecting statistical power",
      "Apply error analysis to real-world decision scenarios"
    ],
    coreConcepts: [
      "Type I error: reject true H₀, probability = α",
      "Type II error: fail to reject false H₀, probability = β", 
      "Statistical power: 1 - β, probability of detecting true effect",
      "Trade-off between α and β",
      "Factors affecting power: effect size, sample size, α level"
    ],
    readContent: "Type I error occurs when we reject a true null hypothesis (false positive), with probability α equal to our significance level. Type II error occurs when we fail to reject a false null hypothesis (false negative), with probability β. Statistical power = 1 - β represents the probability of correctly detecting a true effect. These errors trade off: reducing α (being more conservative) increases β (reduces power), while increasing α decreases β. Power increases with larger effect sizes, larger sample sizes, and higher α levels. The choice of α and β reflects the relative costs of different types of errors in specific contexts. Medical testing exemplifies this trade-off: false positives cause unnecessary anxiety and treatment, while false negatives miss real diseases.",
    readAnalogy: "Type I and Type II errors are like the eternal balance between being too suspicious or too trusting. If I'm overly cautious about detecting predators (low α), I might miss real threats (high β). If I'm too quick to sound alarms (high α), I'll often cry wolf when there's no danger (Type I error). The elegant challenge is finding the right balance for each situation, acknowledging that perfection is impossible but wisdom lies in understanding the trade-offs.",
    readKeyPoints: [
      "Type I error: reject true H₀ (false positive), probability = α",
      "Type II error: fail to reject false H₀ (false negative), probability = β",
      "Power = 1 - β increases with larger effects, samples, and α levels"
    ],
    readDigDeeper: "The receiver operating characteristic (ROC) curve plots sensitivity (1-β) against 1-specificity (α) across different decision thresholds, providing a complete picture of the Type I/Type II error trade-off. The area under the ROC curve measures overall test performance.",
    readWhyMatters: "Medical diagnostic tests balance false positives (unnecessary anxiety/treatment) against false negatives (missed diseases). Legal systems balance convicting innocents (Type I) against freeing guilty parties (Type II). Quality control balances rejecting good products (Type I) against accepting defective ones (Type II).",
    seeContent: "Visualize error regions in hypothesis testing distributions, explore power curves showing how factors affect Type II error rates, and observe ROC curves demonstrating the fundamental trade-off between error types.",
    hearContent: "Listen as I explain how Type I and Type II errors represent the elegant mathematical formalization of life's fundamental uncertainty - we cannot eliminate all error, but we can understand and choose our risks with dignity!",
    hearAudioUrl: "/audio/7.7.mp3",
    doContent: "Use the Error Type Visualizer showing distribution overlap, practice with the Power Calculator for different scenarios, and experiment with the Error Trade-off Simulator demonstrating α/β relationships.",
    memoryAids: {
      mantra: "Type I cries wolf when none appears, Type II misses danger that is near! Power grows with size and effect - statistical balance we must perfect!",
      visual: "Picture Sigmund gracefully balancing on a seesaw where one side represents Type I errors (false alarms) and the other Type II errors (missed signals), understanding that perfect balance is impossible but wisdom lies in conscious choice."
    },
    conceptCheck: {
      question: "A medical test has α = 0.05 and β = 0.20. What do these values mean?",
      options: [
        "5% false positive rate, 20% false negative rate, 80% power to detect disease",
        "5% of tests are wrong, 20% chance the disease exists",
        "95% accuracy, 80% sensitivity in disease detection",
        "5% Type II error rate, 20% Type I error rate"
      ],
      correctAnswer: 0,
      explanation: "α = 0.05 means 5% Type I error rate (false positives - test says disease when none exists). β = 0.20 means 20% Type II error rate (false negatives - test misses real disease). Power = 1 - β = 80% chance of detecting disease when present."
    },
    realWorldConnection: "FDA drug approval balances Type I errors (approving ineffective drugs) against Type II errors (rejecting effective drugs). Airport security balances false alarms (Type I) against missing real threats (Type II). COVID-19 testing balanced false positives causing unnecessary quarantine against false negatives spreading infection."
  },

  "7.8": {
    id: "7.8",
    title: "Statistical Power",
    duration: "40-45 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund explores the concept of statistical power - the elegant measure of a test's ability to detect truth when truth exists. Like the swan's keen eyesight that spots distant movements on the water, statistical power represents our test's sensitivity to real effects hiding beneath the surface of random variation.",
      characterMessage: "Statistical power embodies our test's elegant sensitivity to truth! It measures how well we can detect real effects when they truly exist. Understanding power helps us design studies that won't miss important discoveries and interpret negative results with appropriate wisdom."
    },
    learningObjectives: [
      "Define statistical power as the probability of detecting true effects",
      "Calculate power for various hypothesis testing scenarios",
      "Understand factors that influence statistical power",
      "Apply power analysis for sample size determination",
      "Interpret studies with adequate vs inadequate power"
    ],
    coreConcepts: [
      "Statistical power: P(reject H₀ | H₀ false) = 1 - β",
      "Power depends on: effect size, sample size, α level, population variance",
      "Power analysis for sample size planning",
      "Interpreting negative results in low-power studies",
      "Cohen's conventions for effect sizes"
    ],
    readContent: "Statistical power = 1 - β measures the probability of correctly rejecting a false null hypothesis, i.e., detecting a true effect when it exists. Power increases with: larger effect sizes (easier to detect big differences), larger sample sizes (more precise estimates), higher α levels (less stringent criteria), and smaller population variance (less noise). Cohen's conventions classify effect sizes as small (d = 0.2), medium (d = 0.5), or large (d = 0.8). Power analysis determines required sample sizes to achieve desired power (typically 80%) for expected effect sizes. Studies with low power may fail to detect real effects, leading to false negative conclusions. Power analysis is crucial for study planning and result interpretation.",
    readAnalogy: "Statistical power is like the keenness of my eyesight when hunting for subtle movements on the water's surface. With sharp vision (high power), I can detect even small ripples (small effects). Poor vision (low power) means I'll miss everything except the most obvious splashes. The clarity of my vision depends on lighting conditions (sample size), how big the movement is (effect size), and how carefully I'm looking (α level).",
    readKeyPoints: [
      "Power = 1 - β = probability of detecting true effects when they exist",
      "Increases with larger effect sizes, sample sizes, α levels; decreases with more variance",
      "Power analysis determines sample sizes needed for adequate sensitivity"
    ],
    readDigDeeper: "Optimal design theory finds the allocation of resources (e.g., sample sizes across groups) that maximizes power for fixed total cost, or minimizes cost for fixed power. This connects statistical power to experimental economics and efficient research design.",
    readWhyMatters: "Clinical trials require power analysis to ensure adequate sample sizes for detecting treatment effects. Tech companies use power analysis to plan A/B tests that won't miss important user behavior changes. Academic research uses power analysis to design studies that can reliably detect theoretically important effects.",
    seeContent: "Visualize power curves showing how probability of detection changes with effect size and sample size, explore power analysis calculations for study planning, and observe the relationship between power and other testing parameters.",
    hearContent: "Listen as I explain how statistical power measures our elegant ability to distinguish signal from noise - the mathematical expression of our sensitivity to truth when truth is there to be found!",
    hearAudioUrl: "/audio/7.8.mp3",
    doContent: "Use the Power Calculator for different effect sizes and sample sizes, practice with the Sample Size Planner using power analysis, and experiment with the Power Curve Explorer showing sensitivity relationships.",
    memoryAids: {
      mantra: "Power detects what's truly there, with size and samples we prepare! High power means we'll likely see the effects that really be!",
      visual: "Picture Sigmund with increasingly powerful telescopes (representing higher statistical power) that let him detect smaller and more distant phenomena on his statistical lake, showing how power enhances our ability to perceive truth."
    },
    conceptCheck: {
      question: "A study has 60% power to detect a medium effect size. What does this mean and how could power be improved?",
      options: [
        "60% chance of detecting the effect if it exists; improve by increasing sample size",
        "The effect size is 60% of what we expected to find",
        "60% of the data supports the alternative hypothesis",
        "There's a 40% chance of making a Type I error"
      ],
      correctAnswer: 0,
      explanation: "60% power means if a medium effect truly exists, this study has only a 60% chance of detecting it (40% chance of Type II error). Power can be improved by increasing sample size, using a larger α level, or if the true effect is larger than expected."
    },
    realWorldConnection: "Pharmaceutical companies conduct power analysis to ensure clinical trials can detect meaningful treatment effects with adequate probability. Educational researchers use power analysis to design studies that won't miss important learning improvements. Environmental studies use power analysis to ensure adequate sensitivity for detecting pollution effects."
  },

  "7.9": {
    id: "7.9",
    title: "Practical vs Statistical Significance",
    duration: "40-45 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund discovers a profound distinction that transcends mere mathematical significance. Statistical significance tells us an effect is real, but practical significance asks whether that real effect actually matters. Like distinguishing between detecting a whisper and hearing something worth listening to, this separation embodies statistical wisdom and restraint.",
      characterMessage: "Here lies one of statistics' most elegant lessons! Statistical significance proves an effect exists, but practical significance asks whether we should care. A truly wise statistician understands that mathematical precision must be tempered with real-world judgment about what matters."
    },
    learningObjectives: [
      "Distinguish clearly between statistical and practical significance",
      "Understand how large samples can make trivial effects statistically significant",
      "Apply effect size measures to assess practical importance",
      "Recognize the limitations of p-value-only interpretations",
      "Make informed decisions combining statistical and practical considerations"
    ],
    coreConcepts: [
      "Statistical significance: p < α (effect is real)",
      "Practical significance: effect size large enough to matter",
      "Effect size measures: Cohen's d, eta-squared, correlation",
      "Confidence intervals for effect size interpretation",
      "Context-dependent definitions of practical importance"
    ],
    readContent: "Statistical significance indicates an effect is reliably different from zero, but says nothing about magnitude or importance. With large samples, even trivial differences become statistically significant because standard errors shrink. Practical significance requires effect sizes large enough to matter in real-world contexts. Cohen's d measures standardized effect sizes: small (0.2), medium (0.5), large (0.8). However, practical significance is context-dependent - a small medical effect might be practically significant if it saves lives, while a large effect on trivial outcomes may be practically meaningless. Confidence intervals for effect sizes provide more informative conclusions than p-values alone, showing both statistical significance and practical relevance.",
    readAnalogy: "Statistical significance is like having perfect hearing that can detect the faintest whisper, while practical significance asks whether that whisper contains anything worth hearing. With sensitive enough equipment (large samples), we can detect virtually any difference, but wisdom lies in distinguishing between 'detectable' and 'meaningful.' A statistically significant but tiny effect is like hearing someone whisper '2+2=4' - real but not revolutionary.",
    readKeyPoints: [
      "Statistical significance (p < α): effect is real; Practical significance: effect is meaningful",
      "Large samples make trivial effects statistically significant",
      "Effect sizes and confidence intervals provide more complete information than p-values"
    ],
    readDigDeeper: "The minimum clinically important difference (MCID) in medical research exemplifies context-dependent practical significance. Regulatory agencies often require both statistical significance and clinically meaningful effect sizes for drug approval, recognizing that statistical and practical significance must align.",
    readWhyMatters: "Medical research distinguishes between statistically significant and clinically meaningful treatment effects. Educational interventions must show practically significant learning improvements, not just statistical differences. Business analytics seeks effect sizes large enough to impact revenue, not just statistically detectable changes.",
    seeContent: "Explore scenarios where statistical and practical significance diverge, visualize effect size interpretations alongside p-values, and observe how sample size affects the relationship between statistical and practical significance.",
    hearContent: "Listen as I explain how true statistical wisdom lies in understanding that detecting an effect and caring about an effect are beautifully distinct questions requiring different types of judgment!",
    hearAudioUrl: "/audio/7.9.mp3",
    doContent: "Use the Significance Comparison Tool showing statistical vs practical importance, practice with the Effect Size Calculator for various scenarios, and experiment with the Sample Size Impact Simulator.",
    memoryAids: {
      mantra: "Statistical says 'it's real and true,' practical asks 'what does it do?' Big samples find tiny effects - but do tiny effects earn respect?",
      visual: "Picture Sigmund using an extremely powerful magnifying glass (large sample) that can detect the tiniest scratches on the water's surface, while asking the deeper question of whether those scratches actually matter for navigation."
    },
    conceptCheck: {
      question: "A large study (n=10,000) finds a statistically significant difference in test scores: treatment group M=75.2, control M=75.0, p=0.03. What should you conclude?",
      options: [
        "The effect is statistically significant but the 0.2-point difference is likely not practically meaningful",
        "This is strong evidence for a meaningful educational improvement",
        "The large sample size proves this is an important finding",
        "The significant p-value shows the treatment has practical value"
      ],
      correctAnswer: 0,
      explanation: "While p=0.03 indicates statistical significance, the tiny effect size (0.2 points) is practically meaningless in educational contexts. Large samples (n=10,000) can detect trivial differences that have no real-world importance."
    },
    realWorldConnection: "Pharmaceutical companies must demonstrate both statistical significance and clinically meaningful effect sizes for drug approval. Educational technology companies seek effect sizes large enough to improve learning outcomes meaningfully, not just statistical detectability. Business A/B tests require effect sizes that translate to meaningful revenue impacts."
  },

  "7.10": {
    id: "7.10",
    title: "Sigmund's Hypothesis Testing Mastery Capstone",
    duration: "50-60 minutes",
    characterId: "sigmund",
    narrativeHook: {
      story: "Sigmund faces the ultimate test of statistical elegance: a comprehensive project that synthesizes every aspect of hypothesis testing mastery. From formulating hypotheses through calculating power, from interpreting p-values to assessing practical significance - this capstone demonstrates the complete art of making principled decisions under uncertainty.",
      characterMessage: "Time for the ultimate demonstration of hypothesis testing mastery! This comprehensive challenge brings together every element we've studied - hypothesis formulation, test selection, error analysis, power calculations, and the wisdom to distinguish statistical from practical significance. Let's conduct statistical inference with complete elegance!"
    },
    learningObjectives: [
      "Synthesize all hypothesis testing concepts in comprehensive real-world scenarios",
      "Apply appropriate tests while considering assumptions and limitations",
      "Interpret results with full consideration of error types and power",
      "Distinguish between statistical and practical significance appropriately",
      "Demonstrate mastery of complete inferential reasoning process"
    ],
    coreConcepts: [
      "Complete hypothesis testing workflow",
      "Test selection and assumption checking",
      "Error analysis and power considerations",
      "Effect size interpretation and practical significance",
      "Principled statistical decision-making"
    ],
    readContent: "This capstone project synthesizes every hypothesis testing concept into comprehensive real-world investigations. You'll formulate hypotheses, select appropriate tests, calculate test statistics and p-values, analyze Type I/II errors and power, and distinguish statistical from practical significance. The project mirrors professional statistical practice where technical competence must combine with practical wisdom. You'll work through scenarios that require not just computational skills but also judgment about what constitutes meaningful evidence and important effects. This integrated approach demonstrates how hypothesis testing serves as a principled framework for making decisions under uncertainty while acknowledging the inherent limitations of statistical inference.",
    readAnalogy: "This capstone is like Sigmund conducting a complete statistical symphony where every element must work in elegant harmony - from the opening theme of hypothesis formulation through the complex movements of test selection and power analysis, culminating in the graceful finale of practical interpretation. Every note matters, and the beauty lies in the complete composition.",
    readKeyPoints: [
      "Complete inferential workflow: hypothesis formulation through practical interpretation",
      "Integration of technical computation with practical wisdom about significance",
      "Professional-level statistical reasoning that acknowledges uncertainty and limitations"
    ],
    readDigDeeper: "This project workflow mirrors professional statistical consulting where technical expertise must combine with domain knowledge and practical judgment. The ability to synthesize computational skills with interpretive wisdom distinguishes competent statistical practitioners from mere calculators.",
    readWhyMatters: "This capstone demonstrates career-ready statistical inference skills. Data scientists use these complete workflows for product analytics and A/B testing. Medical researchers apply comprehensive hypothesis testing for clinical trial analysis. Policy researchers use these skills to evaluate intervention effectiveness with appropriate recognition of statistical and practical significance.",
    seeContent: "Work through comprehensive hypothesis testing workflows that integrate all course concepts, visualize complete statistical reasoning processes, and observe how technical analysis connects to practical decision-making in realistic scenarios.",
    hearContent: "Listen as I guide you through the ultimate demonstration of hypothesis testing mastery - every concept working together with the elegance and principled reasoning that defines excellent statistical practice!",
    hearAudioUrl: "/audio/7.10.mp3",
    doContent: "Complete comprehensive hypothesis testing projects: formulate hypotheses for complex scenarios, select and apply appropriate tests, analyze power and error implications, calculate effect sizes, and provide practical interpretations that guide real-world decision-making.",
    memoryAids: {
      mantra: "Every hypothesis, every test, every elegant decision manifest! From formulation through interpretation - that's statistical perfection!",
      visual: "Picture yourself as Sigmund's accomplished partner, gracefully conducting complete statistical investigations with the elegance and wisdom that transforms raw data into principled insights for important decisions."
    },
    conceptCheck: {
      question: "In Part B, you find p = 0.001 with Cohen's d = 0.15 in a study of n = 1,000. How should you interpret this result?",
      options: [
        "Statistically significant but practically trivial effect - large sample detected tiny difference",
        "Strong evidence for both statistical and practical significance",
        "The large sample size proves this is an important finding",
        "The low p-value indicates a meaningful effect regardless of effect size"
      ],
      correctAnswer: 0,
      explanation: "p = 0.001 shows statistical significance, but Cohen's d = 0.15 indicates a very small effect size (below 'small' threshold of 0.2). The large sample (n = 1,000) enabled detection of a statistically reliable but practically trivial difference."
    },
    realWorldConnection: "This capstone mirrors real statistical consulting workflows: pharmaceutical statisticians conducting clinical trial analyses, tech company data scientists running A/B testing programs, and policy researchers evaluating intervention effectiveness. The complete inferential reasoning skills you've developed apply directly to careers requiring principled decision-making under uncertainty."
  }
};