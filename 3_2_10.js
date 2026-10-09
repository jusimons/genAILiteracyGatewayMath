function createOptimizationAISurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Optimization and AI Survey");
  form.setDescription("Please enter your email address below.");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Optimization and AI Survey
  // ==========================================

  // Question 1: Common errors spotted
  form.addMultipleChoiceItem()
    .setTitle("When you asked the LLM to generate common errors, did you spot any errors that you might have made in the examples?")
    .setChoiceValues(["Yes", "No"])
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
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked or did not involve the optimization?)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 4: AI Output Errors
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output Errors");

  // Question 5: Describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(false);


  // ==========================================
  // SECTION 5: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 6: Second Derivative Test understanding
  form.addScaleItem()
    .setTitle("In the last part, you were asked to us the Second Derivative Test to prove the critical point is a minimum (which the LLM failed to justify).\nDid this process help you understand how the LLM failed to justify the critical point was a minimum?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 7: Understanding of optimization
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of optimization?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 8: Confidence in spotting errors
  form.addScaleItem()
    .setTitle("Do you feel more confident in spotting errors in mathematical work involving optimization now?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 9: Course learning feeling
  form.addScaleItem()
    .setTitle("In general, how are you feeling about your learning in the course so far?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great")
    .setRequired(true);


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