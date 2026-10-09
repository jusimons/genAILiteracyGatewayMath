function createIntroMathGPTSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Intro to MathGPT Survey");
  form.setDescription("Please fill out the survey below!\nEnter your email below so we can give you participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Intro to MathGPT Survey
  // ==========================================

  // Question 1: Chatbot usefulness for polynomial division
  form.addScaleItem()
    .setTitle("Was the AI chatbot useful for you in solving the polynomial division given in problem 4?")
    .setBounds(1, 5)
    .setLabels("Not at all", "Very!")
    .setRequired(true);

  // Question 2: Expected output
  form.addMultipleChoiceItem()
    .setTitle("Did the AI chatbot generate what you were expecting?")
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
    .setTitle("Did the output use incorrect terminology or approaches? (For example, did it generate responses that were not what you asked or did not involve polynomial division?)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 4: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 5: Understanding of polynomial division
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of polynomial division?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 6: Comparison with other AI tools
  form.addParagraphTextItem()
    .setTitle("If you have experience with other AI tools (such as ChatGPT, Claude, Gemini, etc.), did you notice any difference(s) between how MathGPT works and how other tools work?")
    .setRequired(false);

  // Question 7: Course learning feeling
  form.addScaleItem()
    .setTitle("In general, how are you feeling about your learning in the course so far?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great")
    .setRequired(true);


  // ==========================================
  // SECTION 5: Thank you!
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Thank you!")
    .setHelpText("Please click submit so we can count this towards your participation today.\n\nSee you next class!");

  // Output Links
  Logger.log("Form Created Successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Share) URL: " + form.getPublishedUrl());
}