import { useState } from "react";
import { getStudents, getStaff } from "../components/RequestHandler"
import CardsStudents from "./CardsStudents";
import {v4 as uuidv4} from "uuid";
import CardsStaff from "./CardsStaff";

function Home() {
    const [students, setStudents] = useState([]);
    const [staff, setStaff]= useState([]);
    const [isStudent, setIsStudent] = useState(false);
    
    const studentsHogwarts= async () =>{
    const studentsInfo = await getStudents();
    setStudents(studentsInfo);
    setIsStudent(true)
    console.log(studentsInfo);
  
    }
    const staffHogwarts= async () =>{
        const staffInfo = await getStaff();
        setStaff(staffInfo);
        console.log(staffInfo);
            setIsStudent(false)
        }
  
    return (
        <div>

            <section className="containerButtonsMain">
                <button className="btonMain" onClick={studentsHogwarts}>ESTUDIANTES</button>
                <button className="btonMain" onClick={staffHogwarts}>STAFF</button>
            </section>
            <section className="containerCards">
                { 
                isStudent &&
                students &&
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
                { !isStudent &&
                            staff &&
                            staff.map((staff) => {
                                return (
                                <CardsStaff
                                    key={uuidv4()}
                                    imgPerson={staff.image}
                                    name={staff.name}
                                    birthday={staff.yearOfBirth}
                                    gender={staff.fender}
                                    colourEyes={staff.eyeColour}
                                    hairColour={staff.hairColour}
                                    staff={staff}
                                    setStaff={setStaff}
                                    house={staff.house}
                                    alive={staff.alive}
                                ></CardsStaff>
                                );
                                })
                            } 
            </section>


        </div>
    )
}
export default Home;
