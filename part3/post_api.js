function postApi(e) {
  const fun = e.parameter.fun

  if (fun === "student") {
    return createStudent(e)
  }
 
  return response(405, null, "Post Fun Not Allowed")
}

function createStudent(e) {
  const studentRepository = new StudentRepository()
  const { name, age } = e.parameter

  var code = 400
  var message = "Error"
  var data = null

  if (name && age) {
    try {
      const student = toStudent(e.parameter)

      const id = studentRepository.insert(student)
      student.id = id

      data = id
      code = 200
      message = "Success create student"
    } catch (error) {
      code = 400
      message = "Bad request: " + error.message
    }
  } else {
    message = "Missing required parameters"
  }

  return response(code, data, message)
}