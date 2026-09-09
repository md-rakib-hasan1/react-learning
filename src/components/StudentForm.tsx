import { useState, type SubmitEvent } from 'react';
interface Student {
    id: number;
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
            name.trim() === ""

        ) {
            setError("Name is required");
            return;
        }

        if (age.trim() === ""
        ) {
            setError("Age is required");
            return;
        }


        if (department.trim() === "") {
            setError("Department is required")
            return;
        }

        setError("");

        const newStudent: Student = {
            id: Date.now(),
            name: name.trim(),
            age: Number(age),
            department: department,
        };
        setStudents([...students, newStudent]);
        setName('');
        setAge('');
        setDepartment('');
    };

    const handleDelete = (id: number) => {
        setStudents(
            students.filter((student) => student.id !== id)
        );
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

            {students.map((student) => (
                <div key={student.id}>
                    <p>Name: {student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Department: {student.department}</p>

                    <button
                        onClick={() => handleDelete(student.id)}
                    >Delete</button>
                    <hr />
                </div>
            )

            )
            }
        </div>
    );
};

export default StudentForm;