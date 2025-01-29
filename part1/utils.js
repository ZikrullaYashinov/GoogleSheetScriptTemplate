function response(code, data, message) {
  return ContentService.createTextOutput(JSON.stringify({
    code: code,
    message: message,
    data: data
  })).setMimeType(ContentService.MimeType.JSON);
}