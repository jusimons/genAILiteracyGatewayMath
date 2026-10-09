function createExpLogModelsPracticeTestsSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Exp. & Log Models & Practice Tests");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Exp. & Log Models & Practice Tests
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

  // Question 4: Elasticity understanding confusion
  form.addMultipleChoiceItem()
    .setTitle("Did the AI error(s) make understanding elasticity more confusing?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(false);


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

  // Question 6: Describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(true);


  // ==========================================
  // SECTION 5: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 7: Practice questions usefulness
  form.addScaleItem()
    .setTitle("How useful did you find the AI-generated practice test questions?")
    .setBounds(1, 5)
    .setLabels("Not useful at all", "Very useful!")
    .setRequired(true);

  // Question 8: Questions involved applications
  form.addMultipleChoiceItem()
    .setTitle("Did the AI-generated questions involve applications?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);

  // Question 9: Questions involved differential equations
  form.addMultipleChoiceItem()
    .setTitle("Did the AI-generated questions involve differential equations?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);

  // Question 10: Solved vs gave hints
  form.addMultipleChoiceItem()
    .setTitle("Did the AI system solve the problems for you, or give you hints about the solution?")
    .setChoiceValues(["Solved the problems", "Gave hints", "Both"])
    .setRequired(true);

  // Question 11: Improvement in understanding
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of exponential and logistic models and their applications?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 12: Confidence using AI tools
  form.addScaleItem()
    .setTitle("Do you feel more confident in using AI tool(s) to generate practice problems to study for a math class like this course?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 13: Challenges encountered
  form.addParagraphTextItem()
    .setTitle("Did you encounter any challenges in this activity? If so, explain.")
    .setRequired(false);

  // Question 14: Course learning feeling
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