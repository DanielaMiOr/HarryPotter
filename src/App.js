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
                    
                      isOpen={showModal}
                      contentLabel="Minimal Modal Example"
                  >
                    <button  className="closeModal" onClick={closeModal}><AiOutlineCloseCircle/></button>
                      <form  onSubmit={addCharacter}>
                        
                          <p className="pModal">NOMBRE:</p>
                          <input className="inputModal" name="userName" >
                          </input>
                          <p className="pModal">COLOR DE OJOS</p>
                          <input className="inputModal" name="colorEyes">
                          </input>
                          <p className="pModal">CUMPLEAÑOS</p>
                          <input className="inputModal" name="birthday">
                          </input>
                          <p className="pModal">COLOR DE PELO</p>
                          <input className="inputModal" name="hairColor"></input>
                          <p className="pModal">GÉNERO</p>
                          <input className="inputRadio"type="radio" value="Male" name="gender" /> Hombre
                          <input  className="inputRadio"type="radio" value="Female" name="gender" /> Mujer
                          <p className="pMolda">POSICIÓN</p>
                          <input className="inputRadio" type="radio" value="studentss" name="position" /> Estudiante
                          <input className="inputRadio" type="radio" value="staff" name="position" /> Staff
                          <p className="pModal">FOTOGRAFIA </p>
                          <input className="inputModal"type="text" name="photo"></input>
                          <input className="btnModal" type="submit" value="GUARDAR"/>

                      </form>    
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
