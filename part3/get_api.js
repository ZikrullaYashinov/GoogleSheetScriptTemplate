function getApi(e) {
  const fun = e.parameter.fun

  if (fun === "student") {
    return getStudentById(e)
  }

  if (fun === "students") {
    return getStudents(e)
  }

  return response(405, null, "Get Fun Not Allowed")
}

function getStudentById(e) {
  const studentRepository = new StudentRepository()
  const { id } = e.parameter

  var code = 400
  var message = "Error"
  var data = null

  if (id) {
    try {
      data = studentRepository.read(id)
      code = 200
      message = "Success get student"
    } catch (error) {
      code = 400
      message = "Bad request: " + error.message
    }
  } else {
    message = "Missing id parameter";
  }

  return response(code, data, message)
}

function getStudents(e) {
  const studentRepository = new StudentRepository()
  const page = parseInt(e.parameter.page)
  const pageSize = parseInt(e.parameter.pageSize)

  var code = 400
  var message = "Error"
  var data = null

  try {
    if (page)
      data = studentRepository.readPage(page, pageSize ?? 10)
    else
      data = studentRepository.readAll()
    code = 200
    message = "Success get students"
  } catch (error) {
    code = 400
    message = "Bad request: " + error.message
  }

  return response(code, data, message)
}