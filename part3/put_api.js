function putApi(e) {
  const fun = e.parameter.fun

  if (fun === "student") {
    return updateStudent(e)
  }

  return response(405, null, "Put Fun Not Allowed")
}

function updateStudent(e) {
  const studentRepository = new StudentRepository()
  const { id, name, age } = e.parameter

  var code = 400
  var message = "Error"
  var data = null

  if (id && name && age) {
    try {
      const student = toStudent(e.parameter)

      studentRepository.update(student)

      data = studentRepository.read(id)
      code = 200
      message = "Success update student"
    } catch (error) {
      code = 400
      message = "Bad request: " + error.message
    }
  } else {
    message = "Missing required parameters"
  }

  return response(code, data, message)
}