function CardsStudents(props){
    const {alive, imgPerson,name, birthday, gender, colourEyes,setStudents,students, hairColour,house}=props

const studentLive = ()=>{
    const live= alive(true);
    const die= alive(false);
}
    return(
        <div>
            <section className="boxCard">
    
            <img 
        className="conteiner-img"
        src=  {imgPerson}
               
        alt= "imgFood"/>

                <section>
                    <button className="iconFavorites">agregar a lista</button>
                    {
                        alive ? 
                        <p className="pStudent">VIVO</p>
                        :
                        <p className="pStudent">MUERTO</p>


                    }
                    <p className="pStudent">ESTUDIANTE</p>
                    <p className="">{name}</p>
                    <p className="pBirthday">Cumpleaños:{birthday}</p>
                    <p className="pGender">Género:{gender}</p>
                    <p className="pColorEyes">Color de ojos:{colourEyes}</p>
                    <p className="pColorHair">Color de pelo:{hairColour}</p>
                </section>
            </section>
        </div>
    )   
   }
   export default CardsStudents;