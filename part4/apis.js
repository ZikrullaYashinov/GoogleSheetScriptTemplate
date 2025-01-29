function doPost(e) {
  const method = e.parameter.method
  if (method === "put") {
    return putApi(e)
  }
  if (method === "delete") {
    return deleteApi(e)
  }
  if (method === "post") {
    return postApi(e)
  }

  return response(405, null, "Method Not Allowed")
}

function doGet(e) {
  return getApi(e)
}