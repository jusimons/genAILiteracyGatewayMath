function copyForm_3_2_6() {
  const formId = "1f_iAEwcQMw2G61Jln2l3yBjgkwJQW15o9c7iUVn_Ulk";
  const newCopy = DriveApp.getFileById(formId).makeCopy("Calculus 1 - 3.2.6");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}