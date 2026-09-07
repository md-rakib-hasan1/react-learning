import { useState } from 'react';

interface Student {
    name: string;
    age: number;
    department: string;
}

const StudentList = () => {
    const [students, setStudents] = useState<Student[]>([
        
    ]);

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [department, setDepartment] = useState<string>("");

    return (
        <div>
            <h2>Student List</h2>

            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    id="age"
                    type='number'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="department">Department:</label>
                <input
                    id="department"
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </div>


            <button onClick={() => {
                if (name.trim() === "" ||
                    age.trim() === "" ||
                    department.trim() === "") { return; };

                const newStudent: Student = {
                    name: name.trim(),
                    age: Number(age),
                    department: department.trim()
                };
                setStudents([...students, newStudent]);
                //input value clear kore dey
                setName("");
                setAge("");
                setDepartment("");
            }}>
                Add Student</button>

            {students.map((student) => (
                <div key={student.name}>
                    <p>Name: {student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Department: {student.department}</p>
                    <hr />
                </div>
            ))}

        </div >
    );
};

export default StudentList;