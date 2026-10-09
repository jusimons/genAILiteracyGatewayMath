function copyForm_3_3_4() {
  const formId = "14HhjgCwADHKShXw8eqwLcaeOopnf7UKUIoMdiUFcHjs";
  const newCopy = DriveApp.getFileById(formId).makeCopy("Calculus 2 - 3.3.4");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}