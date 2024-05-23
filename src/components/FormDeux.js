import React , {Component} from 'react';
import CustomBtn from './CustomBtn';

const sayHello = () => {
    alert('hello')
}
const sayGoodbye = () => {
    alert('goodbye')
}
const sayPtiteMaman = () => {
    alert('Ma maman')
}
const blue = {
    backgroundColor: '#03a9f4',
    color: 'black'
}
const green = {
    backgroundColor: 'purple',
    color: 'blue'
}


class FormDeux extends Component {

    state = {
        situation : "Chomeur",
        motif : "Rupture conventionnelle",
        color : "green",
    }

    handleColor = (event) => {
        { event.preventDefault()};
        this.state.color === "green" ? this.setState ({color:"red"}) : this.setState({color: "black"});
    }

    render(props) {
        return (
            <div style = {{backgroundColor: 'rgb(164, 224, 206)', width: '700px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>

                <h1> 2nd Formulaire </h1>
                <CustomBtn
                    handleClick={sayHello}
                >click ici</CustomBtn>
                <CustomBtn
                    handleClick={sayPtiteMaman}
                    btnStyle={blue}
                >Patience est</CustomBtn>
                <CustomBtn
                    handleClick={sayGoodbye}
                    btnStyle={green}
                >le plus beau</CustomBtn>
                <form>
                    <label  color= {this.state.color}> Situation : </label>
                    <input Type="text" ></input><br/>
                    <label> Raison de la situation : </label>
                    <textarea></textarea><br></br>
                    <button style = {{color:this.state.color}} onClick = {this.handleColor}> Soumettre </button>
                    
                </form>

            </div>
        )
    }
}

export default FormDeux