function CardsStaff(props) {
    const { alive, imgPerson, name, birthday, gender, colourEyes, hairColour, house } = props

    return (
        <div className="containerMain">
            
            <section className="boxCard">
                <div className={`cardImageContainer house${house}`} >

                    <img
                        className="photo"
                        src={imgPerson}

                        alt="imgFood" />

                </div>
                <section className="containerMainStudent">
                    
                    <p className="nameStudent">{name}</p>
                    <div className="dataStudent">
                    {
                        alive ?
                            <p className="pStudent" id="live1">VIVO</p>
                            :
                            <p className="pStudent" id="live1">MUERTO</p>
                    }
                    <p className="pStudent" id="student1">STAFF</p>
                    <button className="iconFavorites"></button>
                    </div>
                    <p className="pBirthday">Cumpleaños:{birthday}</p>
                    <p className="pGender">Género:{gender}</p>
                    <p className="pColorEyes">Color de ojos:{colourEyes}</p>
                    <p className="pColorHair">Color de pelo:{hairColour}</p>
                </section>
            </section>
            
        </div>
    )
}
export default CardsStaff;