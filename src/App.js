import './App.scss';
import Home from './components/Home';
import {RiUserAddFill} from 'react-icons/ri';

function App() {
  return (
    <div className="App">
      <section className="containerNav">
                <section className="containerBtnMenu">
                    <button className="btnFloatLeft">FAVORITOS</button>
                    <button className="btnFloatRight">AGREGAR <RiUserAddFill className="iconAdd"/>
                    </button>
                </section>

                <section className="logo">
                    <img
                        className="imgLogo"
                        src={require("./img/logoHP.png")}
                        alt="imgLogo"
                    />
                </section>
            </section>
<Home/>
    </div>
  );
}

export default App;
