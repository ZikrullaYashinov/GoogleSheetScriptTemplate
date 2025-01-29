class Student {
  constructor(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }

  toList() {
    return [
      this.id,
      this.name,
      this.age,
    ]
  }
}

class StudentRepository extends CRUDRepository {
  constructor() {
    super('students')
  }

  read(id) {
    return super.readObj(id)
  }

  readAll() {
    return super.readAllObj()
  }

  readPage(page, pageSize) {
    return super.readObjsByPage(page, pageSize)
  }

  insert(studentObj) {
    return super.insertObj(studentObj.toList())
  }

  update(studentObj) {
    return super.updateObj(studentObj.toList())
  }

  delete(id) {
    return super.deleteObj(id)
  }
}