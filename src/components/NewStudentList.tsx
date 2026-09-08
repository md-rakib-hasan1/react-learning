import {useState} from 'react';

interface Student{
    id: number;
    name: string;
    age: number;
    department: string;
}

const NewStudentList = () => {

    const[students, setStudents]=useState<Student[]>([
        {
      id: 1,
      name: "Rakib",
      age: 22,
      department: "CSE",
    },
    {
      id: 2,
      name: "Hasan",
      age: 21,
      department: "EEE",
    },
    ]);


    const increaseAge = (id:number)=>{
        setStudents(
            students.map((student)=>
            student.id === id ? { ...student, age: student.age + 1 }:student 
        )
        );

    }

    return (
        <div>
            <h2>Student List</h2>

            {students.map((student)=>(
                <div key={student.id}>
                    <p>Name: {student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Department: {student.department}</p>

                    <button onClick={()=>increaseAge(student.id)}>
                        Increase Age</button>
                </div>
            ))}

            
        </div>
    );
};

export default NewStudentList;