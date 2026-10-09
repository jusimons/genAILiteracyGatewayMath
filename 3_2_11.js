function createEndOfQuarterCheckInForm() {
  // Create Form and set basic settings
  const form = FormApp.create("End of Quarter Check In");
  form.setDescription("Please fill out the survey below, so we can improve our class for future students!");
  form.setCollectEmail(true);

  // Common Grid Columns
  const agreeScaleColumns = ["1 (strongly disagree)", "2", "3", "4", "5 (strongly agree)"];
  const familiarityScaleColumns = ["1 (not at all)", "2", "3", "4", "5 (very)"];

  // ==========================================
  // SECTION 1: End of Quarter Check In
  // ==========================================

  // Question 1: Belongingness and Learning Environment
  form.addGridItem()
    .setTitle("Belongingness and Learning Environment. On a scale of 1 (strongly disagree) to 5 (strongly agree), indicate how much you agree with the following statements:")
    .setRows([
      "I feel accepted in this course",
      "I feel respected in this course",
      "I feel valued in this course",
      "I enjoy being an active participant in this course",
      "I feel like I belong in math courses like this course",
      "I feel like I belong in math courses in general"
    ])
    .setColumns(agreeScaleColumns);

  // Question 2: Mindset
  form.addGridItem()
    .setTitle("Mindset. On a scale of 1 (strongly disagree) to 5 (strongly agree), indicate how much you agree with the following statements:")
    .setRows([
      "I am confident I have the ability to learn the material in this course, given enough time",
      "I am confident I have the ability to explore mathematical work and highlight errors",
      "I am confident I have the ability to suggest approaches for how to start solving a problem in this course",
      "I am confident I have the ability to suggest approaches for determining whether an answer is correct or not."
    ])
    .setColumns(agreeScaleColumns);

  // Question 3: Perception of Learning
  form.addGridItem()
    .setTitle("Perception of Learning. On a scale of 1 (strongly disagree) to 5 (strongly agree), indicate how much you agree with the following statements:")
    .setRows([
      "I can apply calculus, including differentiation and limit evaluation, to solve problems in business and economics.",
      "I can derive and interpret derivatives of various functions, including logarithmic and exponential forms.",
      "I can solve optimization problems relevant to business and economic applications.",
      "I can approximate functions using linear and quadratic models.",
      "I can utilize differential calculus to explain key economic concepts."
    ])
    .setColumns(agreeScaleColumns);

  // Question 4: Familiarity
  form.addGridItem()
    .setTitle("Familiarity. On a scale of 1 (not at all) to 5 (very), indicate how much you agree with the following statements:")
    .setRows([
      "I was familiar with genAI before taking this course.",
      "I feel MORE familiar with genAI after taking this course."
    ])
    .setColumns(familiarityScaleColumns);

  // Question 5: Perception of GenAI
  form.addGridItem()
    .setTitle("Perception of GenAI. On a scale of 1 (strongly disagree) to 5 (strongly agree), indicate how much you agree with the following statements:")
    .setRows([
      "I can evaluate the output of genAI tools to determine whether it makes sense mathematically, or not.",
      "GenAI can be a useful tool in learning.",
      "MathGPT was a useful tool for this class.",
      "I liked the genAI activities.",
      "I am concerned about the use of genAI in education.",
      "I am concerned about the use of genAI and ethical scenarios (e.g. plagiarism or broader contexts like its use in hiring practices, etc.).",
      "I am concerned about the use of GenAI and environmental impacts."
    ])
    .setColumns(agreeScaleColumns);

  // Question 6: Any other comments?
  form.addParagraphTextItem()
    .setTitle("Any other comments?")
    .setRequired(false);


  // ==========================================
  // SECTION 2: Thank you!
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Thank you!")
    .setHelpText("We had a great time with you all this quarter. I hope you feel that you grew mathematically (and perhaps in other ways) and that you have a wonderful break!");

  // Output Links
  Logger.log("Form Created Successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Share) URL: " + form.getPublishedUrl());
}