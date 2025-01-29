function skillsMember() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Skills');
  const range = sheet.getRange('A2:J');
  const values = range.getValues();
  let member = '';
  values.forEach((row) => {
    if (row[0] === 'Member') {
      member = row[1];
    }
  });
  return member;
}