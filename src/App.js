import './App.scss';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <section className="containerNav">
                <section className="containerBtnMenu">
                    <button className="btnFavorites">FAVORITOS</button>
                    <button className="btnAdd">AGREGAR
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
