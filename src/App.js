import './App.scss';
import Home from './components/Home';
import { RiUserAddFill } from 'react-icons/ri';
import { BsFillBookmarkFill } from "react-icons/bs";
import ReactModal from "react-modal"
import { useState } from "react";
import{AiOutlineCloseCircle} from "react-icons/ai";
import { postCharacter } from "./components/RequestHandler"


function App() {
  const [showModal, setShowModal] = useState(false);



  const addUser = async () => {
      setShowModal(true);
  }
  const closeModal = async () => {
    setShowModal(false);

  }

  const addCharacter = async (event) => {
    event.preventDefault()
    let character = {};
    character.name=event.target.userName.value
    character.eyeColour=event.target.colorEyes.value
    character.dateOfBirth=event.target.birthday.value
    character.hairColour=event.target.hairColor.value
    character.gender=event.target.gender.value
    character.image=event.target.photo.value
    postCharacter(character,event.target.position.value)
    event.target.userName.value="";
    event.target.colorEyes.value="";
    event.target.birthday.value="";
    event.target.hairColor.value="";
    event.target.photo.value="";
    const inputRadios = Array.from( document.getElementsByClassName('inputRadio'))
    inputRadios.forEach( inputRadio =>{
      inputRadio.checked=false;
    })
    setShowModal(false);
  }

  return (
    <div className="App">
      <div className="boxModal">    
                    <ReactModal
                   width="100%"
                      
                      isOpen={showModal}
                      contentLabel="Minimal Modal Example"
                  >
                  <div className="containerStructure">
                      <form  
                      className="formModal"
                      onSubmit={addCharacter}>
                          <p className="addPerson">Agrega un  personaje</p>
                          <button  className="closeModal" onClick={closeModal}><AiOutlineCloseCircle className="closeModal"/></button>
                          <p className="pModal" id="name">NOMBRE:</p>
                          <input className="inputModal" id="inputname" name="userName" >
                          </input>
                          <p className="pModal" id="eyes">COLOR DE OJOS</p>
                          <input className="inputModal" id="inputeyes"  name="colorEyes">
                          </input>
                          <p className="pModal" id="birthday">CUMPLEAÑOS</p>
                          <input className="inputModal" id="inputbirthday" name="birthday">
                          </input>
                          <p className="pModal" id="hair">COLOR DE PELO</p>
                          <input className="inputModal" id="inputhair" name="hairColor"></input>
                          <p className="pModal" id="gender">GÉNERO</p>
                          <div  id="btngender">
                          <input className="inputRadio" id="inputgender"type="radio" value="Male" name="gender" /> Hombre
                          <input  className="inputRadio"type="radio" value="Female" name="gender" /> Mujer
                          </div>
                          <p className="pModal" id="position">POSICIÓN</p>
                          <div id="btnposition">
                          <input className="inputRadio"  type="radio" value="studentss" name="position" /> Estudiante
                          <input className="inputRadio" type="radio" value="staff" name="position" /> Staff
                          </div>
                          <p className="pModal" id="photo">FOTOGRAFIA </p>
                          <input className="inputModal" id="inputphoto"type="text" name="photo"></input>

                          <input className="btnModal"  type="submit" value="GUARDAR"/>
                          

                      </form>   
                      </div> 
                  </ReactModal>
                  </div>
      <section className="containerNav">
        <div id="containerFloatSection">
          <section className="containerBtnMenu">
            <button className="btnFloatLeft">FAVORITOS <BsFillBookmarkFill className="iconFav" />
            </button>
            <button className="btnFloatRight" onClick={addUser}>AGREGAR <RiUserAddFill className="iconAdd" />
            </button>
          </section>
        </div>
        <section className="logo">
          <img
            className="imgLogo"
            src={require("./img/logoHP.png")}
            alt="imgLogo"
          />
        </section>
      </section>
      <Home />
    </div>
  );
}

export default App;
