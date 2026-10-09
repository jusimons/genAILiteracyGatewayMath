function createInverseFunctionsSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Inverse Functions Survey");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Inverse Functions Survey
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Answer-checking capabilities
  form.addScaleItem()
    .setTitle("What did you think of the answer-checking capabilities of the AI system when you tried to verify your solutions?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great!")
    .setRequired(true);

  // Question 3: Explanations
  form.addScaleItem()
    .setTitle("What did you think of the explanations of the AI system when you tried to understand the solution?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great!")
    .setRequired(true);

  // Question 4: Expected output
  form.addMultipleChoiceItem()
    .setTitle("Did the LLM generate what you were expecting?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: LLM Expectations
  // ==========================================
  form.addPageBreakItem()
    .setTitle("LLM Expectations");

  // Question 5: Explain differences
  form.addParagraphTextItem()
    .setTitle("Explain. (How was the output different from what you expected?)")
    .setRequired(false);


  // ==========================================
  // SECTION 3: LLM Terminology and Errors
  // ==========================================
  form.addPageBreakItem()
    .setTitle("LLM Terminology and Errors");

  // Question 6: Incorrect terminology/approaches
  form.addMultipleChoiceItem()
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked?)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 4: LLM Terminology and Errors Explanation
  // ==========================================
  form.addPageBreakItem()
    .setTitle("LLM Terminology and Errors Explanation");

  // Question 7: Describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(true);

  // Question 8: Confusing errors
  form.addScaleItem()
    .setTitle("Did the AI error(s) make the task more confusing?")
    .setBounds(1, 5)
    .setLabels("Not really", "It was really confusing")
    .setRequired(false);


  // ==========================================
  // SECTION 5: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 9: Understanding of inverses
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of inverses?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 10: Course learning feeling
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