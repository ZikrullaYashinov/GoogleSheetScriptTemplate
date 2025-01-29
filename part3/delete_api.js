function deleteApi(e) {
  const fun = e.parameter.fun

  if (fun === "student") {
    return deleteStudent(e)
  }
  
  return response(405, null, "Delete Fun Not Allowed")
}

function deleteStudent(e) {
  const studentRepository = new StudentRepository()
  const { id } = e.parameter

  var code = 400
  var message = "Error"
  var data = null

  if (id) {
    try {
      const studentData = studentRepository.read(id)
      const student = toStudent(studentData)

      studentRepository.delete(id)

      data = student
      code = 201
      message = "Success delete student"
    } catch (error) {
      code = 400
      message = "Bad request: " + error.message
    }
  } else {
    message = "Missing required parameters"
  }

  return response(code, data, message)
}