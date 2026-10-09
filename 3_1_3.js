function createLinearExponentialSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Linear and Exponential Models Survey");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Linear and Exponential Models Survey
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Plot data capability
  form.addScaleItem()
    .setTitle("Was your AI tool able to plot the data you provided it?")
    .setBounds(1, 5)
    .setLabels("Not at all", "Yes, it was great")
    .setRequired(true);

  // Question 3: Equation matching
  form.addScaleItem()
    .setTitle("Did the equations it generated match the equations you came up with?")
    .setBounds(1, 5)
    .setLabels("Not at all", "Yes, they were the same")
    .setRequired(true);

  // Question 4: Reasoning explanation
  form.addParagraphTextItem()
    .setTitle("Did your AI tool explain its reasoning in a way that made sense to you?")
    .setRequired(true);

  // Question 5: Errors spotted
  form.addMultipleChoiceItem()
    .setTitle("Did you spot any errors that the AI tool made?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: AI tool error(s)
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI tool error(s)");

  // Question 6: Describe errors
  form.addParagraphTextItem()
    .setTitle("Briefly describe the error(s) the AI tool made below.")
    .setRequired(false);

  // Question 7: Confusing errors
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

  // Question 8: Understanding of linear & exponential models
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of linear and exponential models?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
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