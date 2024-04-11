const Car = ({couleur, children, annee }) => {

    const colorInfo = couleur ? <p>Couleur: {couleur}</p> : <p>Couleur: "Néant"</p>;

    if (children) {
        return (
            <div style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <h3> Composant 3 : Cars.js </h3>
                    <p>Marque: { children }</p>
                    {annee}
                    {colorInfo}
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
