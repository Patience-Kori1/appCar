import React , {Component} from 'react';

class FormDeux extends Component {

    state = {
        situation : "Chomeur",
        motif : "Rupture conventionnelle",
        color : "green"
    }

    handleColor = (event) => {
        // alert("merci de ");
        this.setState ({situation : event.target.value}) 
    }

    render() {
        return (
            <div style = {{backgroundColor: 'rgb(164, 224, 206)', width: '700px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>

                <h1> 2nd Formulaire </h1>

                <form>
                    <label > Situation : </label>
                    <input Type="text" ></input><br/>
                    <label> Raison de la situation : </label>
                    <textarea></textarea><br></br>
                    <button onClick = {this.handleColor}> Soumettre </button>
                </form>

            </div>
        )
    }
}

export default FormDeux