function copyForm_3_1_2() {
  const formId = "168BJv-RlYHrF8r9G33yIpQr6Cepd13tYsUD_KJu24Fw";
  const newCopy = DriveApp.getFileById(formId).makeCopy("College Algebra - 3.1.2");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}