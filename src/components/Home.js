import { useState } from "react";
import { getStudents } from "../components/RequestHandler"
import CardsStudents from "./CardsStudents";
import {v4 as uuidv4} from "uuid";

function Home() {
    const [students, setStudents] = useState([]);
    
    const studentsHogwarts= async () =>{
    const studentsInfo = await getStudents();
    setStudents(studentsInfo);
    console.log(studentsInfo);
  
    }
  
    return (
        <div>

            <section className="containerButtonsMain">
                <button className="btonMain" onClick={studentsHogwarts}>ESTUDIANTES</button>
                <button className="btonMain">STAFF</button>
            </section>
            <section className="containerCards">
                { students &&
            students.map((student) => {
              return (
                <CardsStudents
                    key={uuidv4()}
                    imgPerson={student.image}
                    name={student.name}
                    birthday={student.yearOfBirth}
                    gender={student.fender}
                    colourEyes={student.eyeColour}
                    hairColour={student.hairColour}
                    students={student}
                    setStudents={setStudents}
                    house={student.house}
                    alive={student.alive}
                ></CardsStudents>
                );
              })}
            </section>


        </div>
    )
}
export default Home;
