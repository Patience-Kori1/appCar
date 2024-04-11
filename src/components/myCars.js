import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {
    state  = {
        voitures: [ 
            { marque:"Ford", year: "2000", color:"red"},
            { marque:"Mercedes", year: "1988",  color:"blue"},
            { marque:"Peugeot", year: "2015", color:"green"}
        ]
    };

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        
        this.setState({updatedState})
    }

    render() {
        const anneeEnCours = new Date().getFullYear();
        return (
            <div style = {{backgroundColor: ' rgb(230, 228, 226)', width: '600px', margin:'5px auto', padding:'10px'}} >

                <h2>{this.props.title}</h2>
                <h2> Composant 2 : MyCars </h2>

               
                    
                {/* <Car annee = { anneeEnCours  - this.state.voitures[0].year + " ans"} couleur ={this.state.voitures[0].color} > {this.state.voitures[0].marque} </Car>  

                <Car annee = { anneeEnCours - this.state.voitures[1].year + " ans"} couleur ={this.state.voitures[0].color} > {this.state.voitures[1].marque} </Car>  

                <Car annee = { anneeEnCours - this.state.voitures[2].year + " ans"} couleur ={this.state.voitures[0].color} > {this.state.voitures[2].marque} </Car>   */}

                <button onClick = {this.addTenYears}> + 10 ans </button>

                {
                this.state.voitures.map(({marque, color, year}, index)  => {
                    return (
                        <div key = {index} >
                            <Car 
                            couleur = {color}
                            annee = { anneeEnCours - year + " ans"}
                            > 
                            {marque}
                            </Car>
                        </div>
                    )
                })
            }

            </div>
           
        )
    }
}

export default Mycars