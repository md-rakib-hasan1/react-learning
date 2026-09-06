import {useState} from 'react';

const StudentList = () => {
    const [students, setStudents]=useState<string[]>(["Rakib","Hasan","Rahim"]);

    return (
        <div>
            <h2>Student List</h2>
            {students.map((student)=>(<p key={student}>{student}</p>))}
            <button onClick={()=>setStudents([...students,"Karim"])}>
                Add Karim</button>

        <button onClick={()=>setStudents([...students,"Sumon"])}>Add Sumon</button>
            
        </div>
    );
};

export default StudentList;