function createDefinitionOfDerivativeSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Definition of Derivative");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Definition of Derivative
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

  // Question 4: Confusing errors
  form.addMultipleChoiceItem()
    .setTitle("Did the AI error(s) make understanding the definition of derivative more confusing?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(false);


  // ==========================================
  // SECTION 3: AI Output: Hallucinations, Data Relevance, Terminology
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Output: Hallucinations, Data Relevance, Terminology");

  // Question 5: Incorrect terminology or approaches
  form.addMultipleChoiceItem()
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked or did not involve the definition of derivative?)")
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
    .setRequired(true);


  // ==========================================
  // SECTION 5: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 7: Usefulness of example problems
  form.addScaleItem()
    .setTitle("How useful did you find the example problems?")
    .setBounds(1, 5)
    .setLabels("Not useful at all", "Very useful!")
    .setRequired(true);

  // Question 8: Understanding definition of derivative
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of the definition of derivative?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 9: Understanding of limits
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of limits?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 10: Confidence using AI tools
  form.addScaleItem()
    .setTitle("Do you feel more confident in using AI tool(s) to help you understand mathematical concepts like limits and the definition of derivative?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 11: Challenges encountered
  form.addParagraphTextItem()
    .setTitle("Did you encounter any challenges in this activity? If so, explain.")
    .setRequired(false);

  // Question 12: Course learning feeling
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