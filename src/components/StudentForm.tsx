import { useState, type SubmitEvent } from 'react';
interface Student {
    name: string;
    age: number;
    department: string;

}

const StudentForm = () => {
    const [students, setStudents] = useState<Student[]>([]);

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            age.trim() === "" ||
            department.trim() === ""
        ) {
            setError("All fields are required");
            return;
        }

        setError("");

        const newStudent: Student = {
            name: name,
            age: Number(age),
            department: department,
        };
        setStudents([...students, newStudent]);
        console.log(newStudent);
        setName('');
        setAge('');
        setDepartment('');
    };




    return (
        <div>
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='Enter age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter department'
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            {error && <p>{error}</p>}
            {students.map((student, index) => (
                <div key={index}>
                    <p>Name: {student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Department: {student.department}</p>
                    <hr />

                </div>
            )

            )}


        </div>
    );
};

export default StudentForm;