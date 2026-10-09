function copyForm_3_1_3() {
  const formId = "1wbr-ABSsLydMrwG76MypsR2QvsdbjW1Vc9uMXaSQCu0";
  const newCopy = DriveApp.getFileById(formId).makeCopy("College Algebra - 3.1.3");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}