function copyForm_3_3_3() {
  const formId = "1FB7wgeI5mWJnghYdigi-JXxMl3NFUKDi8Vejdq7bYv0";
  const newCopy = DriveApp.getFileById(formId).makeCopy("Calculus 2 - 3.3.3");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}