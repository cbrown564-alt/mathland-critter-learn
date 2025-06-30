import { LessonData } from "@/types/lesson";

// Module 8: Bayesian Inference
// Copy and paste module 8 lesson data here

export const module8Lessons: { [key: string]: LessonData } = {
    "8.1": {
      id: "8.1",
      title: "Introduction to Bayesian Thinking",
      duration: "35-40 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes the Fox emerges from the shadows of statistical inference, his film-noir trench coat gleaming under the streetlight, magnifying glass ready for detective work. Unlike classical statistics that treats parameters as fixed unknowns, Bayesian inference treats them as random variables with probability distributions that update as evidence accumulates. Every clue changes the story.",
        characterMessage: "Welcome to the world of Bayesian detective work! I'm Bayes, and I approach every statistical mystery with a cunning, skeptical eye. In my world, we start with beliefs, gather evidence, and systematically update our conclusions. Every piece of data is a clue that changes what we think we know."
      },
      learningObjectives: [
        "Understand the philosophical difference between Bayesian and frequentist approaches",
        "Recognize parameters as random variables with probability distributions",
        "Apply Bayes' theorem in simple inference contexts",
        "Understand the role of prior beliefs in statistical inference",
        "Connect Bayesian thinking to iterative learning and belief updating"
      ],
      coreConcepts: [
        "Parameters as random variables with distributions",
        "Bayes' theorem: P(θ|data) ∝ P(data|θ) × P(θ)",
        "Prior beliefs P(θ) before seeing data",
        "Likelihood P(data|θ) from observed evidence",
        "Posterior P(θ|data) updated beliefs after evidence"
      ],
      readContent: "Bayesian inference treats unknown parameters as random variables with probability distributions, contrasting with frequentist approaches that treat parameters as fixed but unknown constants. The foundation is Bayes' theorem: P(θ|data) ∝ P(data|θ) × P(θ), which updates prior beliefs P(θ) with likelihood evidence P(data|θ) to produce posterior beliefs P(θ|data). This framework naturally incorporates prior knowledge and quantifies uncertainty about parameters. As new data arrives, today's posterior becomes tomorrow's prior, creating an iterative learning process. Bayesian inference provides a coherent framework for combining evidence with prior knowledge while maintaining full probability distributions over unknown quantities.",
      readAnalogy: "Bayesian inference is like detective work where I start each case with some hunches (priors) based on experience. When I find new evidence (likelihood), I don't throw away my previous knowledge - I combine it with the new clues to update my theory of the case (posterior). Each piece of evidence changes my beliefs systematically, and I always maintain uncertainty about what I don't know for sure.",
      readKeyPoints: [
        "Parameters are random variables with probability distributions, not fixed unknowns",
        "Bayes' theorem: posterior ∝ likelihood × prior combines evidence with beliefs",
        "Iterative learning: today's posterior becomes tomorrow's prior"
      ],
      readDigDeeper: "The subjective interpretation of probability in Bayesian statistics allows incorporation of expert knowledge and personal beliefs, making it particularly valuable in situations with limited data or strong domain expertise. This philosophical difference has practical implications for how we model uncertainty.",
      readWhyMatters: "Medical diagnosis naturally follows Bayesian logic: doctors start with base rate knowledge (priors) and update beliefs based on symptoms and test results. Machine learning uses Bayesian methods for spam filtering, recommendation systems, and natural language processing. Scientific inference increasingly adopts Bayesian approaches for incorporating prior research.",
      seeContent: "Explore the conceptual differences between Bayesian and frequentist approaches, visualize how Bayes' theorem updates beliefs with evidence, and observe the iterative learning process through simple examples.",
      hearContent: "Listen as I explain how Bayesian thinking transforms statistics from rigid hypothesis testing into flexible detective work where every clue systematically updates our understanding of the case!",
      hearAudioUrl: "/audio/8.1.mp3",
      doContent: "Use the Bayesian vs Frequentist Comparison tool, practice with the Bayes' Theorem Calculator for simple scenarios, and experiment with the Belief Updating Simulator showing iterative learning.",
      memoryAids: {
        mantra: "Prior beliefs plus likelihood evidence equals posterior knowledge - that's Bayesian detective reverence! Update and iterate, never dogmatic fate!",
        visual: "Picture Bayes in his detective office, filing cabinet full of prior cases (priors), examining new evidence under his magnifying glass (likelihood), then updating his theory board (posterior) with red string connecting all the clues."
      },
      conceptCheck: {
        question: "A doctor knows 1% of patients have a rare disease (prior). A test is 95% accurate. If a patient tests positive, what's the Bayesian approach to diagnosis?",
        options: [
          "Update the 1% prior probability using Bayes' theorem with the positive test likelihood",
          "Conclude the patient has the disease since the test is 95% accurate",
          "The prior probability is irrelevant once we have test results",
          "Run more tests before making any probability statements"
        ],
        correctAnswer: 0,
        explanation: "Bayesian approach combines prior knowledge (1% base rate) with test evidence (95% accuracy) using Bayes' theorem. The posterior probability will be higher than 1% but much lower than 95% due to the low prior probability of disease."
      },
      realWorldConnection: "Netflix recommendation systems use Bayesian approaches to update user preference models with each viewing choice. Email spam filters learn using Bayesian methods that update word probability associations. Medical AI systems combine symptom likelihoods with disease prevalence priors for diagnosis assistance."
    },
  
    "8.2": {
      id: "8.2",
      title: "Prior, Likelihood, and Posterior",
      duration: "40-45 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes opens his detective case files to reveal the three essential components of every Bayesian investigation: the Prior (what we believed before), the Likelihood (what the evidence tells us), and the Posterior (our updated conclusion). Like any good detective story, each element plays a crucial role in reaching the truth.",
        characterMessage: "Every good detective story has three acts! First, the setup - what I believe going in (prior). Second, the investigation - what the evidence reveals (likelihood). Third, the conclusion - my updated theory combining both (posterior). Master these three, and you master Bayesian reasoning!"
      },
      learningObjectives: [
        "Define and distinguish prior, likelihood, and posterior distributions",
        "Calculate posteriors using Bayes' theorem in simple cases",
        "Understand how different priors affect posterior conclusions",
        "Interpret likelihood functions as evidence summaries",
        "Apply the complete Bayesian workflow to real problems"
      ],
      coreConcepts: [
        "Prior distribution P(θ): beliefs before data",
        "Likelihood function P(data|θ): evidence given parameters",
        "Posterior distribution P(θ|data): updated beliefs",
        "Bayes' theorem calculation workflow",
        "Sensitivity analysis for different priors"
      ],
      readContent: "The prior distribution P(θ) represents our beliefs about parameters before observing data, encoding existing knowledge or assumptions. The likelihood function P(data|θ) summarizes what the observed data tells us about different parameter values - it's not a probability distribution over θ but a function showing how likely the data is for each possible θ value. The posterior distribution P(θ|data) combines prior and likelihood via Bayes' theorem: P(θ|data) = P(data|θ)P(θ)/P(data), where P(data) is the normalizing constant. The posterior represents our updated beliefs after seeing the evidence. Different priors can lead to different posteriors, making sensitivity analysis important for understanding how prior assumptions affect conclusions.",
      readAnalogy: "Think of each component like elements in my detective work. The prior is my initial theory about the case based on similar cases I've seen before. The likelihood is what each piece of evidence suggests about different theories - some evidence strongly supports certain suspects, other evidence is ambiguous. The posterior is my final theory that combines my initial hunches with all the evidence I've gathered, weighted appropriately.",
      readKeyPoints: [
        "Prior P(θ): initial beliefs before data; Likelihood P(data|θ): evidence summary",
        "Posterior P(θ|data): updated beliefs combining prior and likelihood via Bayes' theorem",
        "Different priors can lead to different posteriors - sensitivity analysis is important"
      ],
      readDigDeeper: "The likelihood principle states that all information about θ contained in the data is captured by the likelihood function. This principle underlies Bayesian inference and distinguishes it from frequentist methods that may depend on unobserved data or experimental design details.",
      readWhyMatters: "Drug discovery uses Bayesian methods where prior knowledge about molecular structures combines with experimental evidence. Climate modeling incorporates prior physical knowledge with observational data. A/B testing increasingly uses Bayesian approaches that naturally incorporate business context as priors.",
      seeContent: "Visualize how priors, likelihoods, and posteriors relate mathematically and graphically, explore how different priors affect posterior conclusions, and observe the complete Bayesian updating process step-by-step.",
      hearContent: "Listen as I walk you through each component of Bayesian reasoning like a detective explaining the three acts of a perfect case - setup, investigation, and resolution!",
      hearAudioUrl: "/audio/8.2.mp3",
      doContent: "Use the Prior-Likelihood-Posterior Calculator with interactive sliders, practice with the Sensitivity Analysis Tool for different priors, and experiment with the Bayesian Workflow Simulator.",
      memoryAids: {
        mantra: "Prior sets the stage, likelihood weighs the evidence, posterior shows the sage! Three components in perfect dance - that's Bayesian inference's stance!",
        visual: "Picture Bayes' detective office with three distinct areas: a filing cabinet of prior cases, an evidence examination table with magnifying glass (likelihood), and a conclusion board where everything comes together (posterior)."
      },
      conceptCheck: {
        question: "You flip a coin 3 times and get HHH. With a uniform prior on p (probability of heads), what does Bayes' theorem tell us?",
        options: [
          "Posterior ∝ p³ × 1, favoring higher values of p but maintaining uncertainty",
          "The coin is definitely biased since three heads is unlikely",
          "The posterior equals the likelihood function exactly",
          "We need more data before making any inferences"
        ],
        correctAnswer: 0,
        explanation: "With uniform prior P(p) = 1 and likelihood P(HHH|p) = p³, the posterior P(p|HHH) ∝ p³ × 1 = p³. This favors higher values of p but maintains uncertainty across all possible values, showing the coin is likely biased toward heads."
      },
      realWorldConnection: "Financial models combine prior market knowledge with current price data to update investment strategies. Medical diagnosis systems combine disease prevalence priors with symptom likelihoods to calculate diagnostic probabilities. Weather forecasting combines physical model priors with observational data for prediction updates."
    },
  
    "8.3": {
      id: "8.3",
      title: "Conjugate Priors & Beta-Binomial",
      duration: "45-50 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes discovers the mathematical elegance of conjugate priors - special prior distributions that play perfectly with certain likelihoods, creating posteriors in the same family. The Beta-Binomial partnership is like a detective duo that always works in perfect harmony, making calculations elegant and interpretations intuitive.",
        characterMessage: "Some mathematical partnerships are pure genius! Conjugate priors are like perfect detective partners - they work so smoothly with certain likelihoods that the posterior is always in the same family. The Beta-Binomial duo is my favorite example of this mathematical elegance in action!"
      },
      learningObjectives: [
        "Understand conjugate priors as mathematically convenient prior-likelihood pairs",
        "Master the Beta-Binomial conjugate relationship",
        "Interpret Beta distribution parameters as prior successes and failures",
        "Calculate Beta-Binomial posteriors analytically",
        "Recognize other common conjugate pairs and their applications"
      ],
      coreConcepts: [
        "Conjugate prior: prior that yields posterior in same family",
        "Beta-Binomial: Beta(α,β) prior + Binomial likelihood → Beta posterior",
        "Beta distribution parameters: α (prior successes), β (prior failures)",
        "Posterior updating: Beta(α+s, β+f) where s,f are observed successes/failures",
        "Other conjugate pairs: Normal-Normal, Gamma-Poisson"
      ],
      readContent: "Conjugate priors create mathematical elegance by producing posteriors in the same distribution family as the prior. For Binomial likelihoods, the Beta distribution is conjugate: if the prior is Beta(α,β) and we observe s successes in n trials, the posterior is Beta(α+s, β+n-s). The Beta parameters have intuitive interpretations: α represents prior 'pseudo-successes' and β represents prior 'pseudo-failures,' reflecting our prior equivalent sample size of α+β. This makes updating trivial - just add observed successes to α and failures to β. Other conjugate pairs include Normal-Normal (known variance), Gamma-Poisson, and Dirichlet-Multinomial. Conjugacy enables analytical solutions and provides intuitive parameter interpretations that aid in prior specification.",
      readAnalogy: "Conjugate priors are like having the perfect detective partner who speaks your exact language. When I (Beta prior) team up with Binomial likelihood evidence, we communicate so perfectly that our conclusion (Beta posterior) is expressed in my same language, just with updated parameters. It's like having a conversation where each new piece of evidence simply updates my running tally of successes and failures.",
      readKeyPoints: [
        "Conjugate priors yield posteriors in the same distribution family",
        "Beta-Binomial: Beta(α,β) + s successes → Beta(α+s, β+n-s)",
        "Beta parameters: α = prior successes, β = prior failures, α+β = prior sample size"
      ],
      readDigDeeper: "The exponential family structure underlies conjugacy: when both prior and likelihood are in exponential family form, conjugate priors exist naturally. This mathematical structure explains why certain distribution pairs work together so elegantly.",
      readWhyMatters: "A/B testing platforms use Beta-Binomial updating for real-time conversion rate analysis. Clinical trials use conjugate priors to incorporate historical data about treatment success rates. Quality control uses conjugate updating to monitor defect rates with accumulating evidence.",
      seeContent: "Watch Beta-Binomial updating in action with interactive parameter adjustments, visualize how prior parameters affect posterior conclusions, and explore other conjugate pairs in various applications.",
      hearContent: "Listen as I demonstrate the mathematical poetry of conjugate priors - how Beta and Binomial dance together in perfect harmony to create beautifully simple posterior updating!",
      hearAudioUrl: "/audio/8.3.mp3",
      doContent: "Use the Beta-Binomial Calculator with real-time updating, practice with the Conjugate Prior Explorer for different distribution families, and experiment with the Prior Parameter Interpreter.",
      memoryAids: {
        mantra: "Beta meets Binomial in perfect dance, conjugate priors enhance! Add successes to alpha, failures to beta - posterior updating's perfect theta!",
        visual: "Picture Bayes and his perfect detective partner (Beta and Binomial) working seamlessly together, with each new case (data point) simply updating their shared case file in exactly the same format they've always used."
      },
      conceptCheck: {
        question: "Starting with Beta(2,3) prior for conversion rate, you observe 7 successes in 10 trials. What's the posterior?",
        options: [
          "Beta(9,6): α = 2+7 = 9, β = 3+(10-7) = 6",
          "Beta(7,3): only the successes matter for updating α",
          "Beta(2,10): add the total trials to β",
          "Need to calculate using Bayes' theorem - no simple updating rule"
        ],
        correctAnswer: 0,
        explanation: "Beta-Binomial conjugate updating: Beta(α,β) + s successes in n trials → Beta(α+s, β+(n-s)). Here: Beta(2,3) + 7 successes in 10 trials → Beta(2+7, 3+3) = Beta(9,6)."
      },
      realWorldConnection: "Conversion rate optimization platforms like Optimizely use Beta-Binomial updating to provide real-time A/B test results. Medical device companies use conjugate priors to incorporate historical safety data into new clinical trials. Online advertising uses Beta-Binomial models to optimize click-through rates with streaming data."
    },
  
    "8.4": {
      id: "8.4",
      title: "Normal-Normal Conjugacy",
      duration: "40-45 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes encounters another mathematical partnership made in heaven: Normal-Normal conjugacy. When investigating continuous mysteries like heights, weights, or temperatures, the Normal distribution pairs with itself in elegant conjugate harmony, creating posterior updating rules that blend prior knowledge with new evidence in perfectly balanced proportions.",
        characterMessage: "The Normal-Normal conjugate pair is mathematical poetry for continuous data! When my prior beliefs and the evidence are both normally distributed, they combine with perfect mathematical harmony. It's like two expert witnesses giving testimony that blends seamlessly into a unified conclusion!"
      },
      learningObjectives: [
        "Understand Normal-Normal conjugacy for continuous parameter estimation",
        "Calculate Normal posterior means as precision-weighted averages",
        "Interpret how sample size affects the balance between prior and data",
        "Apply Normal-Normal updating to real estimation problems",
        "Understand the role of precision (inverse variance) in Bayesian updating"
      ],
      coreConcepts: [
        "Normal-Normal conjugacy for mean estimation with known variance",
        "Posterior mean as precision-weighted average of prior and sample means",
        "Precision τ = 1/σ² as weight in Bayesian updating",
        "Prior and posterior uncertainty quantification",
        "Limit behavior as sample size increases"
      ],
      readContent: "For Normal likelihoods with known variance σ², the Normal prior is conjugate. If the prior is N(μ₀, σ₀²) and we observe sample mean x̄ from n observations, the posterior mean is a precision-weighted average: μₙ = (τ₀μ₀ + nτx̄)/(τ₀ + nτ), where τ = 1/σ² is precision. The posterior variance is 1/(τ₀ + nτ), showing uncertainty decreases as we add data. When the prior is weak (large σ₀²), the posterior is dominated by data. When the prior is strong (small σ₀²), it significantly influences the posterior. As n → ∞, the posterior converges to the sample mean regardless of prior, showing data eventually overwhelms prior beliefs.",
      readAnalogy: "Normal-Normal conjugacy is like having two expert witnesses testify about the same fact. The final conclusion (posterior mean) weighs their testimonies based on their credibility (precision). A very confident expert (high precision) gets more weight than an uncertain one. As more independent evidence accumulates, even a confident prior expert gets gradually outweighed by the mounting data.",
      readKeyPoints: [
        "Posterior mean = precision-weighted average of prior mean and sample mean",
        "Precision τ = 1/σ² determines weight in averaging: more precise gets more influence",
        "Posterior uncertainty decreases as data accumulates: 1/(τ₀ + nτ)"
      ],
      readDigDeeper: "The precision parameterization reveals the natural mathematical structure of Normal-Normal conjugacy. Precisions add when combining independent Normal information, making the mathematical relationships transparent and computationally efficient.",
      readWhyMatters: "Manufacturing quality control uses Normal-Normal updating to monitor process means with historical knowledge. Environmental monitoring combines prior climate knowledge with new temperature measurements. Financial modeling blends historical return estimates with current market data using Normal-Normal conjugacy.",
      seeContent: "Visualize how Normal priors and posteriors update with different sample sizes, explore precision-weighted averaging with interactive examples, and observe the balance between prior knowledge and data evidence.",
      hearContent: "Listen as I explain how Normal-Normal conjugacy creates the perfect mathematical blend of prior wisdom and new evidence - like expert testimony weighted by credibility!",
      hearAudioUrl: "/audio/8.4.mp3",
      doContent: "Use the Normal-Normal Calculator with precision-weighted averaging, practice with the Prior Strength Explorer showing weak vs strong priors, and experiment with the Sample Size Impact Simulator.",
      memoryAids: {
        mantra: "Precision weighs the evidence fair, prior and data both declare! More precise gets more say - that's the Normal-Normal way!",
        visual: "Picture Bayes consulting two expert witnesses (prior and data), each holding scales representing their precision/confidence, with the final verdict being a weighted average of their testimonies based on their expertise."
      },
      conceptCheck: {
        question: "Prior: N(100, 10²), Sample: n=25, x̄=105, σ=15. What happens to the posterior mean as n increases?",
        options: [
          "Posterior mean starts between 100 and 105, approaches 105 as n increases",
          "Posterior mean always equals the sample mean 105",
          "Posterior mean always equals the prior mean 100",
          "Posterior mean depends only on the ratio of variances"
        ],
        correctAnswer: 0,
        explanation: "The posterior mean is a precision-weighted average. Initially it's between the prior mean (100) and sample mean (105). As n increases, the data precision (n/σ²) grows, giving more weight to the sample mean, so the posterior approaches 105."
      },
      realWorldConnection: "Manufacturing uses Normal-Normal updating to monitor production line means while incorporating historical process knowledge. Weather forecasting combines prior climate models with current observations using Normal conjugacy. Laboratory testing blends prior instrument calibration with current measurements for improved accuracy."
    },
  
    "8.5": {
      id: "8.5",
      title: "Posterior Predictive Distribution",
      duration: "40-45 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes shifts focus from understanding the past to predicting the future. The posterior predictive distribution answers the detective's ultimate question: 'Given everything I've learned from this case, what should I expect to see next?' It's not just about estimating parameters - it's about forecasting future observations with full uncertainty quantification.",
        characterMessage: "The real test of any detective theory is prediction! The posterior predictive distribution tells me what to expect in future observations, accounting for both my uncertainty about parameters AND the natural randomness in new data. It's the complete picture for forward-looking inference!"
      },
      learningObjectives: [
        "Understand posterior predictive distribution as future observation forecasts",
        "Distinguish between parameter uncertainty and observation uncertainty",
        "Calculate posterior predictive distributions for conjugate cases",
        "Apply predictive distributions to decision-making scenarios",
        "Interpret predictive intervals for future observations"
      ],
      coreConcepts: [
        "Posterior predictive: P(ỹ|y) = ∫ P(ỹ|θ)P(θ|y)dθ",
        "Parameter uncertainty vs observation uncertainty",
        "Predictive distributions for Beta-Binomial and Normal-Normal",
        "Predictive intervals vs credible intervals",
        "Applications in forecasting and decision-making"
      ],
      readContent: "The posterior predictive distribution P(ỹ|y) describes future observations ỹ given observed data y, integrating over parameter uncertainty: P(ỹ|y) = ∫ P(ỹ|θ)P(θ|y)dθ. This captures both sources of uncertainty: what we don't know about parameters θ (epistemic uncertainty) and natural randomness in observations (aleatoric uncertainty). For Beta-Binomial models, if the posterior is Beta(α,β), the predictive distribution for future successes in m trials is Beta-Binomial. For Normal-Normal models, the predictive distribution is a t-distribution with location equal to posterior mean and scale reflecting both parameter and observation uncertainty. Predictive intervals are typically wider than credible intervals because they account for future observation variability, not just parameter uncertainty.",
      readAnalogy: "Posterior predictive distribution is like asking 'What should I expect to see in my next case?' It's not just about what I think the true crime rate is (parameter estimation), but what actual crimes I'll observe next month, accounting for both my uncertainty about the true rate AND the natural randomness in criminal behavior. Future predictions are always more uncertain than current parameter estimates.",
      readKeyPoints: [
        "Posterior predictive integrates parameter uncertainty with observation uncertainty",
        "P(ỹ|y) = ∫ P(ỹ|θ)P(θ|y)dθ averages predictions over all possible parameter values",
        "Predictive intervals are wider than credible intervals due to additional observation uncertainty"
      ],
      readDigDeeper: "The posterior predictive distribution provides the foundation for Bayesian model checking: we can compare observed data to draws from the posterior predictive to assess model adequacy. Systematic discrepancies suggest model misspecification.",
      readWhyMatters: "Sales forecasting uses posterior predictive distributions to predict future revenue with uncertainty quantification. Medical prognosis uses predictive distributions to forecast patient outcomes accounting for diagnostic uncertainty. Supply chain management uses predictive distributions for inventory planning under demand uncertainty.",
      seeContent: "Visualize how posterior predictive distributions incorporate both parameter and observation uncertainty, compare predictive intervals to credible intervals, and explore forecasting applications with real-world examples.",
      hearContent: "Listen as I explain how posterior predictive distributions answer the ultimate detective question - not just 'what happened?' but 'what should I expect to happen next?' with full uncertainty quantification!",
      hearAudioUrl: "/audio/8.5.mp3",
      doContent: "Use the Posterior Predictive Calculator for various models, practice with the Uncertainty Decomposition Tool showing parameter vs observation uncertainty, and experiment with the Forecasting Simulator.",
      memoryAids: {
        mantra: "Parameter plus observation uncertainty combine - posterior predictive shows future's design! Not just what is, but what will be - forecasting with probability!",
        visual: "Picture Bayes looking through a crystal ball that shows not just his best estimate of future events, but a probability cloud representing all possible futures, accounting for both his uncertainty about the true pattern and natural randomness in events."
      },
      conceptCheck: {
        question: "You have a Beta(5,3) posterior for success rate. What's the predictive probability of success in the next single trial?",
        options: [
          "5/(5+3) = 5/8 = 0.625, the posterior mean of the success rate",
          "Always 0.5 since each trial is independent",
          "Need to specify the sample size for the predictive calculation",
          "Cannot calculate without knowing the original data"
        ],
        correctAnswer: 0,
        explanation: "For a single future trial with Beta(α,β) posterior, the predictive probability of success is the posterior mean: α/(α+β) = 5/(5+3) = 5/8 = 0.625. This integrates over all possible success rates weighted by their posterior probabilities."
      },
      realWorldConnection: "E-commerce companies use posterior predictive distributions to forecast next month's sales with uncertainty bands for inventory planning. Healthcare systems use predictive distributions to forecast patient demand for resource allocation. Weather services use Bayesian predictive distributions for probabilistic forecasting beyond point estimates."
    },
  
    "8.6": {
      id: "8.6",
      title: "MAP vs MLE: Point Estimation Approaches",
      duration: "40-45 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes encounters a fundamental choice in parameter estimation: Maximum A Posteriori (MAP) versus Maximum Likelihood Estimation (MLE). Like choosing between a detective who considers all evidence including background knowledge (MAP) versus one who focuses purely on crime scene evidence (MLE), each approach has its strengths and appropriate applications.",
        characterMessage: "Sometimes we need a single best estimate rather than a full distribution. MAP estimation finds the most probable parameter value given everything we know, while MLE finds the value that best explains just the observed data. Each approach tells a different story about what 'best' means!"
      },
      learningObjectives: [
        "Define MAP as the mode of the posterior distribution",
        "Understand MLE as maximizing the likelihood function",
        "Compare MAP and MLE approaches conceptually and computationally",
        "Recognize when MAP equals MLE (uniform priors)",
        "Apply both approaches to practical estimation problems"
      ],
      coreConcepts: [
        "Maximum A Posteriori (MAP): θ̂_MAP = argmax P(θ|data)",
        "Maximum Likelihood Estimation (MLE): θ̂_MLE = argmax P(data|θ)",
        "Relationship: MAP = MLE when prior is uniform",
        "Regularization interpretation of MAP estimation",
        "Computational approaches for complex posteriors"
      ],
      readContent: "MAP estimation finds the parameter value that maximizes the posterior distribution: θ̂_MAP = argmax P(θ|data) ∝ argmax P(data|θ)P(θ). This balances fit to data (likelihood) with prior beliefs. MLE maximizes only the likelihood: θ̂_MLE = argmax P(data|θ), ignoring prior information. When priors are uniform, MAP = MLE since the prior doesn't affect the argmax. MAP can be viewed as regularized MLE, where the prior acts as a regularization term preventing overfitting. For complex posteriors, MAP estimation may require numerical optimization. While both give point estimates, they represent different philosophies: MAP incorporates prior knowledge while MLE relies solely on observed data.",
      readAnalogy: "MAP vs MLE is like two different detective philosophies. The MAP detective considers both the crime scene evidence AND the suspect's background and prior behavior to determine the most likely perpetrator. The MLE detective focuses purely on which suspect best explains the crime scene evidence, ignoring background information. Both can be right depending on how much you trust your background knowledge.",
      readKeyPoints: [
        "MAP maximizes posterior P(θ|data), incorporating both data and prior knowledge",
        "MLE maximizes likelihood P(data|θ), using only observed data",
        "MAP = MLE when prior is uniform; MAP acts as regularized MLE otherwise"
      ],
      readDigDeeper: "In machine learning, MAP estimation corresponds to regularized loss functions: L2 regularization comes from Gaussian priors, L1 regularization from Laplace priors. This connection shows how Bayesian priors relate to modern machine learning regularization techniques.",
      readWhyMatters: "Machine learning uses MAP estimation for regularized model fitting, preventing overfitting with prior constraints. Computer vision uses MAP estimation for image reconstruction, balancing data fidelity with smoothness priors. Natural language processing uses MAP estimation for parameter estimation in probabilistic models.",
      seeContent: "Visualize MAP and MLE estimates on posterior distributions, explore how different priors affect MAP estimates, and observe the regularization effect of priors in practical estimation problems.",
      hearContent: "Listen as I explain the detective philosophy behind MAP vs MLE - whether to trust your instincts and background knowledge (MAP) or focus purely on the evidence at hand (MLE)!",
      hearAudioUrl: "/audio/8.6.mp3",
      doContent: "Use the MAP vs MLE Calculator with adjustable priors, practice with the Prior Sensitivity Analyzer, and experiment with the Regularization Visualizer showing MAP as penalized MLE.",
      memoryAids: {
        mantra: "MAP uses all we know, MLE lets data show! Prior plus likelihood for MAP's sight, likelihood alone for MLE's might!",
        visual: "Picture Bayes choosing between two detective approaches: one considering both evidence and background files (MAP), another focusing solely on crime scene evidence (MLE), each appropriate for different investigative philosophies."
      },
      conceptCheck: {
        question: "For Beta(2,2) prior and 3 successes in 5 trials, how do MAP and MLE estimates compare?",
        options: [
          "MAP = 4/6 = 2/3, MLE = 3/5 = 0.6; MAP is pulled toward prior mean of 0.5",
          "MAP = MLE = 3/5 since the data dominates",
          "MAP = 0.5 (prior mean), MLE = 3/5 (sample proportion)",
          "Need numerical optimization to find MAP estimate"
        ],
        correctAnswer: 0,
        explanation: "With Beta(2,2) prior + 3 successes in 5 trials, posterior is Beta(5,4). MAP = mode = (5-1)/(5+4-2) = 4/6 = 2/3. MLE = 3/5 = 0.6. MAP is pulled toward the prior mean (0.5) compared to MLE."
      },
      realWorldConnection: "Deep learning uses MAP estimation with weight decay (L2 regularization) to prevent overfitting in neural networks. Medical imaging uses MAP estimation to reconstruct images from noisy measurements, balancing data fidelity with smoothness priors. Speech recognition uses MAP estimation for parameter estimation in hidden Markov models."
    },
  
    "8.7": {
      id: "8.7",
      title: "Bayes Factors & Model Comparison",
      duration: "45-50 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes faces the ultimate detective challenge: comparing competing theories about the same evidence. Bayes factors provide the mathematical framework for weighing different models against each other, answering questions like 'Which explanation better accounts for what we observed?' It's statistical forensics at its finest.",
        characterMessage: "Now for the ultimate detective skill - comparing competing theories! Bayes factors let me weigh different explanations against each other using the same evidence. It's not just about fitting one model, but determining which of several models best explains what we've observed!"
      },
      learningObjectives: [
        "Define Bayes factors as ratios of marginal likelihoods",
        "Understand Bayes factors as evidence for model comparison",
        "Interpret Bayes factor magnitudes using standard scales",
        "Apply Bayes factors to hypothesis testing scenarios",
        "Recognize advantages and limitations of Bayes factor approaches"
      ],
      coreConcepts: [
        "Bayes factor: BF₁₂ = P(data|M₁)/P(data|M₂)",
        "Marginal likelihood P(data|M) = ∫ P(data|θ,M)P(θ|M)dθ",
        "Evidence interpretation: BF > 10 strong, BF > 100 decisive",
        "Model posterior odds: posterior odds = prior odds × Bayes factor",
        "Automatic Occam's razor through marginal likelihood"
      ],
      readContent: "Bayes factors compare models by taking ratios of their marginal likelihoods: BF₁₂ = P(data|M₁)/P(data|M₂). The marginal likelihood P(data|M) = ∫ P(data|θ,M)P(θ|M)dθ represents the probability of observing the data under model M, averaging over all possible parameter values weighted by their priors. Bayes factors update prior model beliefs: posterior odds = prior odds × Bayes factor. Standard interpretation scales suggest BF > 3 provides substantial evidence, BF > 10 strong evidence, and BF > 100 decisive evidence for one model over another. Bayes factors automatically implement Occam's razor - complex models are penalized unless they provide substantially better fit, since their marginal likelihood must spread probability mass over larger parameter spaces.",
      readAnalogy: "Bayes factors are like having a mathematical jury that weighs competing explanations for the same crime. Each theory (model) gets a score based on how well it predicted what actually happened, accounting for how specific vs vague each theory was beforehand. A theory that makes very specific predictions and gets them right beats a vague theory that could explain anything. It's built-in protection against overly complicated explanations.",
      readKeyPoints: [
        "Bayes factor BF₁₂ = P(data|M₁)/P(data|M₂) compares evidence for competing models",
        "Marginal likelihood averages fit over all parameter values weighted by priors",
        "Automatic Occam's razor: complex models penalized unless substantially better"
      ],
      readDigDeeper: "Computing marginal likelihoods can be challenging, especially for complex models. Modern approaches include harmonic mean estimators, thermodynamic integration, and nested sampling. The choice of priors affects Bayes factors, making sensitivity analysis important.",
      readWhyMatters: "Model selection in machine learning uses Bayes factors to choose between different architectures while avoiding overfitting. Scientific hypothesis testing uses Bayes factors to compare competing theories. Medical diagnosis uses Bayes factors to compare different diagnostic explanations for symptoms.",
      seeContent: "Explore Bayes factor calculations for simple model comparisons, visualize how model complexity affects marginal likelihoods, and observe automatic Occam's razor behavior through examples.",
      hearContent: "Listen as I explain how Bayes factors create the ultimate detective showdown - letting competing theories duke it out mathematically to see which best explains the evidence!",
      hearAudioUrl: "/audio/8.7.mp3",
      doContent: "Use the Bayes Factor Calculator for model comparison scenarios, practice with the Evidence Interpretation Guide, and experiment with the Occam's Razor Demonstrator showing complexity penalties.",
      memoryAids: {
        mantra: "Models compete, Bayes factors judge - which theory won't budge? Evidence ratio tells the tale - best explanation will prevail!",
        visual: "Picture Bayes conducting a courtroom where competing model theories present their cases, with Bayes factors as the mathematical jury determining which explanation better accounts for the observed evidence."
      },
      conceptCheck: {
        question: "Comparing two models, you calculate BF₁₂ = 15. What does this tell you about the evidence?",
        options: [
          "Strong evidence favoring Model 1 over Model 2 (15:1 evidence ratio)",
          "Model 1 is 15 times more likely to be true than Model 2",
          "Model 1 explains 15% more variance than Model 2",
          "Need additional information to interpret this Bayes factor"
        ],
        correctAnswer: 0,
        explanation: "BF₁₂ = 15 means the observed data is 15 times more likely under Model 1 than Model 2, providing strong evidence (BF > 10) favoring Model 1. This is about evidence strength, not absolute model probabilities."
      },
      realWorldConnection: "Particle physics uses Bayes factors to compare competing theories about fundamental particles from collision data. Genetics uses Bayes factors to compare different evolutionary models explaining DNA sequence variation. Astronomy uses Bayes factors to compare models of stellar formation and galactic structure."
    },
  
    "8.8": {
      id: "8.8",
      title: "Real-World Applications: Medical Diagnosis",
      duration: "45-50 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes applies his detective skills to one of the most important real-world domains: medical diagnosis. Every symptom is a clue, every test result is evidence, and every diagnosis requires combining prior knowledge about disease prevalence with patient-specific information. It's Bayesian reasoning with life-and-death consequences.",
        characterMessage: "Medical diagnosis is pure Bayesian detective work! Doctors start with base rates (how common is this disease?), observe symptoms (evidence), run tests (more evidence), and systematically update their diagnostic beliefs. Every piece of information changes the probability landscape - it's statistics in service of saving lives!"
      },
      learningObjectives: [
        "Apply Bayesian reasoning to medical diagnostic scenarios",
        "Understand base rates and their critical importance in diagnosis",
        "Calculate diagnostic probabilities using sensitivity and specificity",
        "Recognize common diagnostic fallacies and base rate neglect",
        "Interpret multiple test results using sequential Bayesian updating"
      ],
      coreConcepts: [
        "Base rate: disease prevalence P(Disease) in population",
        "Sensitivity: P(Test+|Disease) = true positive rate",
        "Specificity: P(Test-|No Disease) = true negative rate",
        "Positive predictive value: P(Disease|Test+)",
        "Sequential updating with multiple tests"
      ],
      readContent: "Medical diagnosis exemplifies Bayesian reasoning: P(Disease|Symptoms, Tests) ∝ P(Symptoms, Tests|Disease) × P(Disease). The prior P(Disease) represents base rate prevalence in the relevant population. Test characteristics include sensitivity (true positive rate) and specificity (true negative rate). The posterior probability after a positive test is P(Disease|Test+) = Sensitivity × P(Disease) / [Sensitivity × P(Disease) + (1-Specificity) × (1-P(Disease))]. Base rate neglect - ignoring disease prevalence - leads to systematic overdiagnosis. Multiple tests require sequential updating, with each result modifying the probability for the next test. Rare diseases remain unlikely even after positive tests unless sensitivity is extremely high and specificity near perfect.",
      readAnalogy: "Medical diagnosis is like detective work where I start with 'how common is this type of crime in this neighborhood?' (base rate), then look for evidence like fingerprints (symptoms) and DNA tests (diagnostic tests). Each piece of evidence updates my theory, but I always remember that rare crimes stay rare unless the evidence is overwhelming. A positive test for a rare disease is like finding a common fingerprint pattern - suspicious but not conclusive.",
      readKeyPoints: [
        "Base rates (disease prevalence) critically affect diagnostic probabilities",
        "Positive predictive value depends on sensitivity, specificity, AND base rate",
        "Rare diseases remain unlikely even after positive tests unless tests are nearly perfect"
      ],
      readDigDeeper: "The diagnostic odds ratio (DOR) = (Sensitivity/(1-Sensitivity)) / ((1-Specificity)/Specificity) provides a single measure of test performance that's independent of disease prevalence, facilitating test comparison across different populations.",
      readWhyMatters: "Electronic health records increasingly incorporate Bayesian diagnostic assistance to help doctors avoid base rate neglect and diagnostic errors. Precision medicine uses Bayesian approaches to personalize treatment based on individual risk factors. Public health screening programs use Bayesian analysis to determine optimal testing strategies.",
      seeContent: "Work through medical diagnostic scenarios with interactive probability calculations, visualize how base rates affect diagnostic conclusions, and explore common diagnostic fallacies through realistic examples.",
      hearContent: "Listen as I walk through medical diagnosis like a detective case - starting with base rates, gathering symptomatic evidence, running tests, and systematically updating diagnostic probabilities!",
      hearAudioUrl: "/audio/8.8.mp3",
      doContent: "Use the Medical Diagnosis Calculator with real diagnostic scenarios, practice with the Base Rate Impact Simulator, and experiment with the Sequential Testing Analyzer for multiple test results.",
      memoryAids: {
        mantra: "Base rate first, then test with care - rare stays rare despite positive scare! Sensitivity, specificity, prevalence combine - Bayesian diagnosis, truly divine!",
        visual: "Picture Bayes as a medical detective, consulting case files for base rates (how common is this condition?), examining symptoms as clues, ordering tests as additional evidence, and systematically updating his diagnostic theory with each new piece of information."
      },
      conceptCheck: {
        question: "A disease affects 1 in 1000 people. A test has 95% sensitivity and 95% specificity. What's P(Disease|Positive Test)?",
        options: [
          "About 1.9% - most positive tests are false positives due to low base rate",
          "95% - the test is 95% accurate",
          "90% - sensitivity times specificity",
          "50% - positive test makes disease equally likely as not"
        ],
        correctAnswer: 0,
        explanation: "P(Disease|+) = (0.95 × 0.001) / [0.95 × 0.001 + 0.05 × 0.999] = 0.00095 / 0.050895 ≈ 0.019 = 1.9%. Low base rate (0.1%) means most positive tests are false positives despite good test characteristics."
      },
      realWorldConnection: "IBM Watson Health uses Bayesian diagnostic reasoning to assist oncologists in cancer diagnosis and treatment planning. COVID-19 testing protocols incorporated Bayesian thinking about base rates in different populations to interpret test results. Genetic counseling uses Bayesian analysis to calculate disease risk probabilities based on family history and genetic test results."
    },
  
    "8.9": {
      id: "8.9",
      title: "Real-World Applications: Spam Filtering",
      duration: "40-45 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes turns his detective skills to the digital realm: email spam filtering. Every word in an email is a clue, and Bayesian classifiers learn from experience which word patterns distinguish legitimate emails from spam. It's machine learning powered by Bayesian reasoning, protecting millions of inboxes daily.",
        characterMessage: "Email spam filtering showcases Bayesian machine learning in action! Every word is evidence, and my job is learning which combinations point to spam versus legitimate email. As new emails arrive, I continuously update my beliefs about what spam looks like. It's adaptive detective work for the digital age!"
      },
      learningObjectives: [
        "Understand naive Bayes classification for text data",
        "Apply Bayesian reasoning to feature-based classification",
        "Recognize the 'naive' independence assumption and its practical effectiveness",
        "Calculate spam probabilities using word frequency evidence",
        "Understand how Bayesian classifiers adapt and learn from new data"
      ],
      coreConcepts: [
        "Naive Bayes classifier: P(Spam|Words) ∝ P(Words|Spam) × P(Spam)",
        "Feature independence assumption: P(Words|Spam) = ∏P(Word_i|Spam)",
        "Word frequency likelihoods from training data",
        "Laplace smoothing for unseen words",
        "Adaptive learning through continuous updating"
      ],
      readContent: "Naive Bayes spam filtering classifies emails using P(Spam|Words) ∝ P(Words|Spam) × P(Spam). The 'naive' assumption treats words as independent given the class: P(Words|Spam) = ∏P(Word_i|Spam), greatly simplifying computation. Word probabilities are estimated from training data: P(Word|Spam) = (count of word in spam + α) / (total words in spam + α × vocabulary size), where α provides Laplace smoothing for unseen words. Despite the unrealistic independence assumption, naive Bayes performs remarkably well in practice. The classifier adapts by updating word probabilities as new labeled emails arrive, making it naturally adaptive to evolving spam tactics. Classification involves computing P(Spam|Email) and P(Ham|Email), choosing the class with higher posterior probability.",
      readAnalogy: "Spam filtering is like learning to recognize criminal signatures. Each word is like a behavioral clue - some words appear much more often in spam (like 'FREE!' or 'URGENT!') while others are more common in legitimate email (like names and work terms). Although I naively assume these clues are independent (which isn't really true), this simplification works amazingly well for catching digital criminals!",
      readKeyPoints: [
        "Naive Bayes assumes word independence: P(Words|Class) = ∏P(Word_i|Class)",
        "Word probabilities learned from training data with Laplace smoothing",
        "Continuously adaptive: updates beliefs as new labeled emails arrive"
      ],
      readDigDeeper: "Despite violating the independence assumption (words in emails are clearly dependent), naive Bayes remains effective because it only needs to rank classes correctly, not estimate probabilities accurately. The decision boundary is often robust to assumption violations.",
      readWhyMatters: "Gmail and other email providers use Bayesian-inspired spam filters to protect billions of users daily. Text classification applications extend to sentiment analysis, news categorization, and content moderation. The principles apply broadly to any classification problem with high-dimensional categorical features.",
      seeContent: "Explore spam classification with interactive word probability calculations, visualize how different words contribute evidence for spam vs ham classification, and observe adaptive learning as the classifier sees new examples.",
      hearContent: "Listen as I explain how Bayesian spam filtering turns every email into a detective case, using word patterns as evidence to distinguish digital criminals from legitimate correspondents!",
      hearAudioUrl: "/audio/8.9.mp3",
      doContent: "Use the Spam Classifier Simulator with real email examples, practice with the Word Evidence Analyzer showing probability contributions, and experiment with the Adaptive Learning Demonstrator.",
      memoryAids: {
        mantra: "Words are clues in digital crime, Bayes filters spam every time! Independence naive but works so well - email protection's Bayesian spell!",
        visual: "Picture Bayes examining emails like crime scenes, with each word highlighted as evidence pointing toward spam or legitimate email, continuously updating his criminal profiling database with each new case."
      },
      conceptCheck: {
        question: "An email contains 'FREE' and 'money'. If P(FREE|Spam)=0.8, P(FREE|Ham)=0.1, P(money|Spam)=0.6, P(money|Ham)=0.3, and P(Spam)=0.4, what's P(Spam|FREE,money)?",
        options: [
          "Higher than P(Ham|FREE,money) since spam likelihoods are higher for both words",
          "Exactly 0.4 since that's the prior probability of spam",
          "Cannot calculate without knowing the exact normalization constant",
          "Equal to P(Ham|FREE,money) since we need more evidence"
        ],
        correctAnswer: 0,
        explanation: "P(Spam|Words) ∝ P(FREE|Spam) × P(money|Spam) × P(Spam) = 0.8 × 0.6 × 0.4 = 0.192. P(Ham|Words) ∝ 0.1 × 0.3 × 0.6 = 0.018. Since 0.192 > 0.018, the email is classified as spam."
      },
      realWorldConnection: "Google's Gmail uses sophisticated Bayesian-inspired filters that have evolved beyond simple naive Bayes to protect over 1.5 billion users from spam. Social media platforms use similar techniques for content moderation and fake news detection. Customer service systems use Bayesian classification to route support tickets to appropriate departments."
    },
  
    "8.10": {
      id: "8.10",
      title: "Bayes' Bayesian Inference Mastery Capstone",
      duration: "50-60 minutes",
      characterId: "bayes",
      narrativeHook: {
        story: "Bayes faces his ultimate case: a comprehensive Bayesian investigation that synthesizes every technique in his detective arsenal. From prior specification through posterior analysis, from conjugate updating to model comparison - this capstone demonstrates the complete art of Bayesian reasoning applied to complex, realistic scenarios.",
        characterMessage: "Time for the ultimate Bayesian investigation! This final case brings together every technique we've mastered - prior elicitation, likelihood analysis, posterior updating, predictive distributions, and model comparison. Let's solve a complex mystery that showcases the full power of Bayesian detective work!"
      },
      learningObjectives: [
        "Synthesize all Bayesian concepts in comprehensive real-world investigations",
        "Apply complete Bayesian workflow from prior specification to decision-making",
        "Demonstrate mastery of conjugate updating, model comparison, and prediction",
        "Interpret results with appropriate uncertainty quantification",
        "Connect Bayesian reasoning to practical decision-making under uncertainty"
      ],
      coreConcepts: [
        "Complete Bayesian workflow: prior → likelihood → posterior → prediction",
        "Prior sensitivity analysis and robustness checking",
        "Model comparison using Bayes factors",
        "Decision-making under uncertainty with posterior distributions",
        "Communication of Bayesian results to non-technical audiences"
      ],
      readContent: "This capstone project synthesizes every Bayesian concept into comprehensive real-world investigations. You'll specify informative priors based on domain knowledge, analyze complex likelihood functions, compute posteriors using conjugate relationships, generate predictive distributions for decision-making, and compare competing models using Bayes factors. The project emphasizes the complete Bayesian workflow: starting with careful prior elicitation, incorporating evidence through likelihood analysis, updating beliefs systematically, and using posterior distributions for practical decision-making. You'll also conduct sensitivity analysis to ensure conclusions are robust to prior assumptions and communicate results effectively to stakeholders who need to make decisions under uncertainty.",
      readAnalogy: "This capstone is like Bayes solving the ultimate detective case that requires every skill in his arsenal - from understanding the criminal background (priors) through analyzing all evidence (likelihood) to reaching systematic conclusions (posterior) and predicting future crimes (predictive distributions). It's the complete demonstration of Bayesian detective mastery!",
      readKeyPoints: [
        "Complete Bayesian workflow: prior specification through decision-making applications",
        "Integration of conjugate updating, model comparison, and predictive analysis",
        "Sensitivity analysis and robust conclusions under uncertainty"
      ],
      readDigDeeper: "This project workflow mirrors professional Bayesian analysis in industry and research. Data scientists use these complete workflows for A/B testing, recommendation systems, and predictive modeling. The ability to think coherently about uncertainty and update beliefs systematically distinguishes Bayesian practitioners.",
      readWhyMatters: "This capstone demonstrates career-ready Bayesian inference skills. Tech companies use complete Bayesian workflows for product analytics and machine learning. Pharmaceutical companies apply Bayesian methods for clinical trial design and analysis. Financial firms use Bayesian approaches for risk modeling and algorithmic trading with uncertainty quantification.",
      seeContent: "Work through comprehensive Bayesian analysis workflows integrating all course concepts, visualize complete uncertainty propagation from priors through predictions, and observe how Bayesian reasoning supports principled decision-making under uncertainty.",
      hearContent: "Listen as I guide you through the ultimate demonstration of Bayesian mastery - every concept working together with the cunning precision and skeptical wisdom that defines excellent Bayesian detective work!",
      hearAudioUrl: "/audio/8.10.mp3",
      doContent: "Complete comprehensive Bayesian projects: specify appropriate priors based on domain knowledge, analyze complex evidence through likelihood functions, compute posteriors using conjugate relationships, generate predictive distributions, compare competing models, and provide decision recommendations with full uncertainty quantification.",
      memoryAids: {
        mantra: "Every prior, every update, every Bayesian pursuit! From belief through evidence to decision - that's inference precision!",
        visual: "Picture yourself as Bayes' accomplished detective partner, using every Bayesian technique with cunning precision to solve complex real-world mysteries that require systematic reasoning under uncertainty and principled decision-making."
      },
      conceptCheck: {
        question: "In Part C, you compare three models and find Bayes factors BF₁₂ = 8.5 and BF₁₃ = 23.1. What can you conclude about the relative evidence?",
        options: [
          "Strong evidence for Model 1 over Models 2 and 3, with Model 1 vs 3 being most decisive",
          "Model 1 is 8.5 times more likely than Model 2 and 23.1 times more likely than Model 3",
          "Models can be ranked as 1 > 2 > 3 but strength differences are unclear",
          "Need to calculate BF₂₃ = BF₁₃/BF₁₂ = 2.7 for complete comparison"
        ],
        correctAnswer: 0,
        explanation: "BF₁₂ = 8.5 provides substantial evidence for Model 1 over Model 2. BF₁₃ = 23.1 provides strong evidence for Model 1 over Model 3. The evidence most strongly favors Model 1, with the comparison against Model 3 being more decisive than against Model 2."
      },
      realWorldConnection: "This capstone mirrors real Bayesian consulting workflows: pharmaceutical statisticians designing adaptive clinical trials, tech company data scientists building recommendation systems, and financial quants developing risk models. The complete Bayesian reasoning skills you've developed apply directly to careers requiring principled decision-making under uncertainty with systematic belief updating."
    }
  };