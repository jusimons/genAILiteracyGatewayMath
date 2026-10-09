function createWorkIntegralsSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Work Integrals Survey");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Work Integrals Survey
  // ==========================================

  // Question 1: What AI system did you use?
  form.addMultipleChoiceItem()
    .setTitle("What AI system did you use for this activity?")
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

  // Question 5: Describe incorrect terminology
  form.addParagraphTextItem()
    .setTitle("Briefly describe the incorrect terminology or approach the AI system used below.")
    .setRequired(false);


  // ==========================================
  // SECTION 5: AI Feedback
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Feedback");

  // Question 6: Helpful feedback on integral set up
  form.addScaleItem()
    .setTitle("Was the AI feedback on your integral set up helpful?")
    .setBounds(1, 5)
    .setLabels("Not at all", "Very")
    .setRequired(true);


  // ==========================================
  // SECTION 6: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 7: Understanding of work integrals
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of work integrals?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 8: Incorrect integral set up example
  form.addScaleItem()
    .setTitle("Did the example of an incorrect integral set up help you understand the problem better?")
    .setBounds(1, 5)
    .setLabels("Not really", "A lot!")
    .setRequired(true);

  // Question 9: Confidence in spotting errors
  form.addScaleItem()
    .setTitle("Do you feel more confident in spotting errors in mathematical work involving the work integral set ups now?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 10: Prompting utility
  form.addScaleItem()
    .setTitle("Do you think this activity was useful for learning about how I could prompt an LLM to help you learn?")
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
  // SECTION 7: Thank you!
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Thank you!")
    .setHelpText("Please click submit.\n\nSee you next class!");

  // Output Links
  Logger.log("Form Created Successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Share) URL: " + form.getPublishedUrl());
}