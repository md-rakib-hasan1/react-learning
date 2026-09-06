import { useState } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState<string[]>(["Rakib", "Hasan", "Rahim"]);

    const [studentName, setStudentName] = useState<string>("");

    return (
        <div>
            <h2>Student List</h2>
            <label htmlFor="studentName">Student Name:</label>
            <input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />

            <button onClick={() => {
                if(studentName.trim()==="") return;
                setStudents([...students, studentName.trim()]);
                setStudentName("")
            }}>
                Add Student</button>

            {students.map((student) => (<p key={student}>{student}</p>))}

        </div >
    );
};

export default StudentList;