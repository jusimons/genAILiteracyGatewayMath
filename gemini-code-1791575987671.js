function copyForm_3_2_4() {
  const formId = "1AU_hY-PeUJ0neJbGM8sHiK8JlG27CFuerMESl9vGapY";
  const newCopy = DriveApp.getFileById(formId).makeCopy("Calculus 1 - 3.2.4");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}