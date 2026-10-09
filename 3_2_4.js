function createChainRuleAISurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Chain Rule and AI Survey");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Chain Rule and AI Survey
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Expected output
  form.addMultipleChoiceItem()
    .setTitle("Did the LLM generate what you were expecting?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: LLM Expectations
  // ==========================================
  form.addPageBreakItem()
    .setTitle("LLM Expectations");

  // Question 3: Explain output differences
  form.addParagraphTextItem()
    .setTitle("Explain. (How was the output the LLM generated different than what you expected?)")
    .setRequired(false);


  // ==========================================
  // SECTION 3: AI Output: Hallucinations, Data Relevance, Terminology
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output: Hallucinations, Data Relevance, Terminology");

  // Question 4: Incorrect terminology or approaches
  form.addMultipleChoiceItem()
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked?)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 4: AI Output Errors
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output Errors");

  // Question 5: Briefly describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(false);


  // ==========================================
  // SECTION 5: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 6: Understanding of the chain rule
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of the chain rule?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 7: Confidence in spotting errors
  form.addScaleItem()
    .setTitle("Do you feel more confident in spotting errors in mathematical work involving the chain rule now?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 8: Course learning feeling
  form.addScaleItem()
    .setTitle("In general, how are you feeling about your learning in the course so far?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great")
    .setRequired(false);


  // ==========================================
  // SECTION 6: Thank you!
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Thank you!")
    .setHelpText("Please click submit.\n\nSee you next class!");

  // Output Links
  Logger.log("Form Created Successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Share) URL: " + form.getPublishedUrl());
}