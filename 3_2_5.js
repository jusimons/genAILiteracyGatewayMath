function createMarginalFunctionsSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Marginal Functions");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Marginal Functions
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: Errors spotted in explanation
  form.addMultipleChoiceItem()
    .setTitle("Did you spot any errors that the AI tool made in its explanation? (For example, it was misinterpreting marginal functions or didn't reference econ.)")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: AI Tool Errors
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI Tool Errors");

  // Question 3: Describe errors
  form.addParagraphTextItem()
    .setTitle("Briefly describe the error(s) below.")
    .setRequired(false);

  // Question 4: Confusing errors
  form.addMultipleChoiceItem()
    .setTitle("Did the AI error(s) make understanding marginal functions more confusing?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(false);


  // ==========================================
  // SECTION 3: Understanding
  // ==========================================
  form.addPageBreakItem()
    .setTitle("Understanding");

  // Question 5: Usefulness of AI explanation
  form.addScaleItem()
    .setTitle("How useful did you find the AI-generated explanation?")
    .setBounds(1, 5)
    .setLabels("Not useful at all", "Very useful!")
    .setRequired(true);

  // Question 6: Improvement in understanding
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of marginal functions?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 7: Confidence using AI tools
  form.addScaleItem()
    .setTitle("Do you feel more confident in using AI tool(s) to help you understand applications of mathematics like marginal functions?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot more!")
    .setRequired(true);

  // Question 8: Challenges encountered
  form.addParagraphTextItem()
    .setTitle("Did you encounter any challenges in this activity? If so, explain.")
    .setRequired(false);

  // Question 9: Course learning feeling
  form.addScaleItem()
    .setTitle("In general, how are you feeling about your learning in the course so far?")
    .setBounds(1, 5)
    .setLabels("Not great", "Great")
    .setRequired(false);


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