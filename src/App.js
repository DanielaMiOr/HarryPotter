import './App.scss';
import Home from './components/Home';
import { RiUserAddFill } from 'react-icons/ri';
import { BsFillBookmarkFill } from "react-icons/bs";
import ReactModal from "react-modal"
import { useState } from "react";
import{AiOutlineCloseCircle} from "react-icons/ai";

function App() {
  const [showModal, setShowModal] = useState(false);

  const addUser = async () => {
      setShowModal(true);
  }
  const closeModal = async () => {
    setShowModal(false);

  }

  return (
    <div className="App">
                    <ReactModal
                      isOpen={showModal}
                      contentLabel="Minimal Modal Example"
                  >
                    <button onClick={closeModal}><AiOutlineCloseCircle/></button>
                      <form>
                        
                          <p className="nameModal">NOMBRE:</p>
                          <input className="inputModal" >
                          </input>
                          <p className="eyesModal">COLOR DE OJOS</p>
                          <input className="inputModal">
                          </input>
                          <p className="birthdayModal">CUMPLEAÑOS</p>
                          <input className="inputModal">
                          </input>
                          <p className="hairModal">COLOR DE PELO</p>
                          <input className="inputModal"></input>
                          <p className="generModal">GÉNERO</p>
                          <input className="inputRadio"type="radio" value="Male" name="gender" /> Hombre
                          <input  className="inputRadio"type="radio" value="Female" name="gender" /> Mujer
                          <p className="positionMolda">POSICIÓN</p>
                          <input className="inputRadio"type="radio" value="student" name="position" /> Estudiante
                          <input className="inputRadio"type="radio" value="staff" name="position" /> Staff
                          <p className="photoModal">FOTOGRAFIA </p>
                          <input className="inputModal"type="text" ></input>
                          <button className="btnModal">GUARDAR</button>
                      </form>    
                  </ReactModal>
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
