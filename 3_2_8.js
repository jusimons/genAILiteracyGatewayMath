function createGraphsDerivativesAISurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Graphs, Derivatives and AI Survey");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Graphs, Derivatives and AI Survey
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Explanations about graphs
  form.addScaleItem()
    .setTitle("What did you think of the explanations about graphs that the AI tool came up with?")
    .setBounds(1, 5)
    .setLabels("Not too great", "Great")
    .setRequired(true);

  // Question 3: Ability to show graphs
  form.addMultipleChoiceItem()
    .setTitle("Was your AI tool able to show graphs?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: AI Graphing
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Graphing");

  // Question 4: Effective graphing
  form.addScaleItem()
    .setTitle("Was the AI tool able to graph effectively?")
    .setBounds(1, 5)
    .setLabels("Not at all", "Yes")
    .setRequired(true);


  // ==========================================
  // SECTION 3: AI output
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI output");

  // Question 5: Expected output
  form.addMultipleChoiceItem()
    .setTitle("Did the LLM generate what you were expecting?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 4: LLM Expectations
  // ==========================================
  form.addPageBreakItem()
    .setTitle("LLM Expectations");

  // Question 6: Explain output differences
  form.addParagraphTextItem()
    .setTitle("Explain. (How was the output the LLM generated different than what you expected?)")
    .setRequired(false);


  // ==========================================
  // SECTION 5: AI Output: Hallucinations, Data Relevance, Terminology
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output: Hallucinations, Data Relevance, Terminology");

  // Question 7: Incorrect terminology or approaches
  form.addMultipleChoiceItem()
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked?)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 6: AI Output Errors
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output Errors");

  // Question 8: Describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(true);

  // Question 9: Elasticity understanding confusion
  form.addMultipleChoiceItem()
    .setTitle("Did the AI error(s) make understanding elasticity more confusing?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 7: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 10: Understanding graphical relationships
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of the graphical relationships between functions and their derivatives?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 11: Course learning feeling
  form.addScaleItem()
    .setTitle("In general, how are you feeling about your learning in the course so far?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great")
    .setRequired(false);


  // ==========================================
  // SECTION 8: Thank you!
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Thank you!")
    .setHelpText("Please click submit.\n\nSee you next class!");

  // Output Links
  Logger.log("Form Created Successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Share) URL: " + form.getPublishedUrl());
}