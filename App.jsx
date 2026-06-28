import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (roll) => {
    const updatedStudents = students.filter(
      (student) => student.roll !== roll
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;