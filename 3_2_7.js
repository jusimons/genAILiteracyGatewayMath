function createLinearApproximationGoogleDataSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Linear Approximation and Google Data");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Linear Approximation and Google Data
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Predicting interest in AI rating
  form.addScaleItem()
    .setTitle("How well do you think your AI tool did in predicting interest in AI in the future?")
    .setBounds(1, 5)
    .setLabels("Not too great", "Really well")
    .setRequired(true);

  // Question 3: Use of calculus
  form.addParagraphTextItem()
    .setTitle("Did your AI tool seem to use calculus to inform its prediction?")
    .setRequired(true);

  // Question 4: Errors spotted
  form.addMultipleChoiceItem()
    .setTitle("Did you spot any errors that the AI tool made?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: AI tool error(s)
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI tool error(s)");

  // Question 5: Describe errors
  form.addParagraphTextItem()
    .setTitle("Briefly describe the error(s) the AI tool made below.")
    .setRequired(false);

  // Question 6: Confusing errors
  form.addScaleItem()
    .setTitle("Did the AI error(s) make the task more confusing?")
    .setBounds(1, 5)
    .setLabels("Not really", "It was really confusing")
    .setRequired(false);


  // ==========================================
  // SECTION 3: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 7: Understanding of linear approximation
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of linear approximation?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 8: Estimating GDP application
  form.addScaleItem()
    .setTitle("Did the application of estimating GDP in the future help solidify why we might use linear approximation in the real world?")
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
  // SECTION 4: Thank you!
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Thank you!")
    .setHelpText("Please click submit.\n\nSee you next class!");

  // Output Links
  Logger.log("Form Created Successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Share) URL: " + form.getPublishedUrl());
}