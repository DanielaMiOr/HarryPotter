
function Home(){
    return(
        <div>
            <section> 
                <button className="btnFavorites">FAVORITOS</button>
                <button className="btnAdd">AGREGAR 
                </button>
            </section>
            <section>
                Logo
                <p className="pInstruction">Selecciona tu filtro</p>
                <section>
                <button className="btonStudents">Estudiantes</button>
                <button className="btonStaf">STAFF</button>
                </section>
                <section className="containerCards">

                </section>

            </section>
        </div>
    )
}
export default Home;
