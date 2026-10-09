function copyForm_3_1_1() {
  const formId = "10eqTm-a73FszyKzTGimTjr-l4X2r6mThR3gAxMkyTls";
  const newCopy = DriveApp.getFileById(formId).makeCopy("College Algebra - 3.1.1");
  Logger.log("New Copy URL: " + newCopy.getUrl());
}