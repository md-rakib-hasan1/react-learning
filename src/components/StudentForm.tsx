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
    const [editingId, setEditingId] = useState<number | null>(null);

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

        if (editingId !== null) {
            handleUpdate();
            return;
        }

        const newStudent: Student = {
            id: Date.now(),
            name: name.trim(),
            age: Number(age),
            department: department.trim(),
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

    const handleEdit = (student: Student) => {
        setEditingId(student.id);

        setName(student.name);
        setAge(String(student.age));
        setDepartment(student.department);
    };

    const handleUpdate = () => {
        setStudents(
            students.map((student) =>
                student.id === editingId
                    ? {
                        ...student,
                        name: name.trim(),
                        age: Number(age),
                        department: department.trim(),
                    }
                    : student
            )
        );

        setEditingId(null);

        setName("");
        setAge("");
        setDepartment("");
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
                <button type='submit'>{editingId === null ? "Submit" : "Update"}</button>
            </form>
            {error && <p>{error}</p>}

            {students.map((student) => (
                <div key={student.id}>
                    <p>
                        <strong>Name:</strong> {student.name}
                    </p>

                    <p>
                        <strong>Age:</strong> {student.age}
                    </p>

                    <p>
                        <strong>Department:</strong> {student.department}
                    </p>

                    <button onClick={() => handleEdit(student)}>
                        Edit
                    </button>

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