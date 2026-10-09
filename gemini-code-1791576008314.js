function copyForm_3_3_2() {
  const formId = "1yq_lnPAxDjqxBITjfbdDx3bqfLqV6E9cgwHJC55NbnY";
  const newCopy = DriveApp.getFileById(formId).makeCopy("Calculus 2 - 3.3.2");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}