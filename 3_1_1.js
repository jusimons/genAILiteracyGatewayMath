function createAreaSurveyForm() {
  // Create Form and set basic settings
  const form = FormApp.create("Problem Solving & Application to Area");
  form.setDescription("Please fill out the survey below for participation credit!");
  form.setCollectEmail(true);

  // ==========================================
  // SECTION 1: Problem Solving & Application to Area
  // ==========================================

  // Question 1: What tool did you use for this activity?
  form.addMultipleChoiceItem()
    .setTitle("What tool did you use for this activity?")
    .setChoiceValues(["ChatGPT", "Claude", "Gemini", "Microsoft Copilot"])
    .showOtherOption(true)
    .setRequired(true);

  // Question 2: How well do you think your AI tool did in checking your solution?
  form.addScaleItem()
    .setTitle("How well do you think your AI tool did in checking your solution?")
    .setBounds(1, 5)
    .setLabels("Not too great", "Really well")
    .setRequired(true);

  // Question 3: How did your mathematical work to solve the problem compare to the AI tool's work?
  form.addScaleItem()
    .setTitle("How did your mathematical work to solve the problem compare to the AI tool's work?")
    .setBounds(1, 5)
    .setLabels("They were very different", "They were very similar")
    .setRequired(true);

  // Question 4: Did your AI tool explain its reasoning in a way that made sense to you?
  form.addParagraphTextItem()
    .setTitle("Did your AI tool explain its reasoning in a way that made sense to you?")
    .setRequired(true);

  // Question 5: Did you spot any errors that the AI tool made?
  form.addMultipleChoiceItem()
    .setTitle("Did you spot any errors that the AI tool made?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);


  // ==========================================
  // SECTION 2: AI tool error(s)
  // ==========================================
  form.addPageBreakItem()
    .setTitle("AI tool error(s)");

  // Question 6: Briefly describe the error(s)...
  form.addParagraphTextItem()
    .setTitle("Briefly describe the error(s) the AI tool made below.")
    .setRequired(false);

  // Question 7: Did the AI error(s) make the task more confusing?
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

  // Question 8: Do you feel this activity helped improve your understanding...
  form.addScaleItem()
    .setTitle("Do you feel this activity helped improve your understanding of solving an application problem?")
    .setBounds(1, 5)
    .setLabels("Not at all", "A lot!")
    .setRequired(true);

  // Question 9: In general, how are you feeling about your learning...
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