import {Component} from 'react';
import './myCss.css';

const titreRouge = {
    fontSize: "50px",
    color:"green"
}

class Form extends Component {

    state = {
      userName : "Patos",
      color: "bleu",
      colors: ["blue", "red",  "green"],
      comments: "Hello Musk ! Peux-tu embaucher Patrick?",
    }
    

    handleUsername = e => {
        this.setState ({userName: e.target.value}) 
    }
  
    handleColor = event => {
        this.setState ({color : event.target.value}) 
    }

    hendleComments  = event =>{
       this.setState({comments : event.target.value})
    }

    handleSubmit = event =>{
        { event.preventDefault()}
     }
    

    render() {

        const myClass = this.props.head ? "blue" : "red";
      return (
        <div className='App'style = {{backgroundColor: ' rgb(248, 225, 186)', width: '800px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>

            <h1 style= {{fontSize: "50px", color:"red"}}>Voici un formulaire</h1>
            <p className = {myClass}>Youpiii</p>
            
            <form >
                <div>
                    <label style = {titreRouge}>Username</label>
                    <input type="text" value ={this.state.userName} onChange ={this.handleUsername}></input>
                </div>
                <div>
                    <label className='blue'> Couleur </label>
                    <select>
                        <option value="green"> Vert </option>
                        <option value="red"> Rouge </option>
                        <option value="blue"> Bleu </option>
                    </select>
                    <select>
                        {
                            this.state.colors.map((color, index) => {
                                return <option key={index} value={color}> {color} </option>
    })
                        }
                    </select>
                </div>
                <div>
                    <label> Commentaire </label>
                    <textarea type="text" value = {this.state.comments} onChange = {this.handleComments}> </textarea>

                </div>
                <button onSubmit = {this.handleSubmit}>Click moi</button>
            </form>
  
        </div>
      )
    }
  }
  
  export default Form;
