
use collegeDB
db.Students.insertOne({
    rollNo: 101,
    name: "Arun",
    dept: "CSE",
    marks: 78,
    city: "chennai"
})

db.Students.insertMany([
    { rollNo: 102, name: "Priya", dept: "CSE", marks: 78, city: "chennai" },
    { rollNo: 103, name: "karthik", dept: "CSE", marks: 103, city: "chennai" },
    { rollNo: 104, name: "Neha", dept: "CSE", marks: 89, city: "chennai"},
    { rollNo: 105, name: "Suresh", dept: "CSE", marks:91, city:"trichy" }
])

db.students.find()

db.students.find({ department: "CSE" })

db.students.updateOne(
  { rollno: 103 },
  { $set: { marks: 68 } }
)

db.students.updateMany(
  { department: "CSE" },
  { $set: { semester: 3 } }
)
db.Students.deleteOne({ rollNo: 104 })

db.students.countDocuments()




