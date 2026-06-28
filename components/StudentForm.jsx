import React, { useState } from "react";

function StudentForm({ addStudent }) {

  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (roll === "" || name === "" || marks === "") {
      setError("All fields are required.");
      return;
    }

    const student = {
      roll,
      name,
      marks,
    };

    addStudent(student);

    setRoll("");
    setName("");
    setMarks("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button type="submit">Add Student</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default StudentForm;