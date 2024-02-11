import React, { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);

  const handleFormSubmit = (student: Student) => {
    setStudents((prevStudents) => [student, ...prevStudents]);
    setShowRegistrationForm(false);
  };

  const handleBackToForm = () => {
    setShowRegistrationForm(true);
  };

  return (
    <div>
      {showRegistrationForm ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <List students={students} onBackToForm={handleBackToForm} />
      )}
    </div>
  );
};

export default App;
