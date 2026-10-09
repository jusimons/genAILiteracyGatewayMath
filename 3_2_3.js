function createImplicitDifferentiationSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Implicit Differentiation and AI Survey");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Implicit Differentiation and AI Survey
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Alternative explanation rating
  form.addScaleItem()
    .setTitle("What did you think of the creative or alternative explanation the AI tool came up with?")
    .setBounds(1, 5)
    .setLabels("Not too interesting", "Interesting")
    .setRequired(true);

  // Question 3: Expected output
  form.addMultipleChoiceItem()
    .setTitle("Did the LLM generate what you were expecting?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: LLM Expectations
  // ==========================================
  form.addPageBreakItem()
    .setTitle("LLM Expectations");

  // Question 4: Explain output differences
  form.addParagraphTextItem()
    .setTitle("Explain. (How was the output the LLM generated different than what you expected?)")
    .setRequired(true);


  // ==========================================
  // SECTION 3: AI Output: Hallucinations, Data Relevance, Terminology
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output: Hallucinations, Data Relevance, Terminology");

  // Question 5: Incorrect terminology or approaches
  form.addMultipleChoiceItem()
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked?)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 4: AI Output Errors
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output Errors");

  // Question 6: Briefly describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(false);

  // Question 7: Revenue part less useful
  form.addMultipleChoiceItem()
    .setTitle("Did the AI error(s) make the revenue part less useful?")
    .setChoiceValues(["Yes", "No"])
    .showOtherOption(true)
    .setRequired(false);


  // ==========================================
  // SECTION 5: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 8: Understanding of implicit differentiation
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of the implicit differentiation?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 9: Real-world application (revenue example)
  form.addScaleItem()
    .setTitle("Did the revenue example help solidify why we might use implicit differentiation in the real world?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 10: Course learning feeling
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