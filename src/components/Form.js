import {Component} from 'react';
// import './myCss.css';
// import MyHead from  "../components/MyHeaderOne";
// import styles from './myCss.module.css';
import styled from 'styled-components';


const titreRouge = {
    fontSize: "50px",
    color:"green"
}
const Title = styled.h1`
    color: red;
    font-size: 80px;
`
const Button = styled.button`
    color: blue;
    font-size: 30px;
`
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

        // const myClass = this.props.head ? "blue" : "red";
      return (
        <div style = {{backgroundColor: 'rgb(164, 224, 206)', width: '700px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>

            {/* <h1 style= {{fontSize: "50px", color:"red"}}>Voici un formulaire</h1> */}
            {/* <MyHead /> */}
            {/* <h1 className={styles.green}> Commentaire 1 (de Form.js) </h1> */}

            <Title> Commentaire 1 </Title>
            <Button> Cliquez Ici </Button>
            <button className = "btn btn-danger"> Valider </button>
            
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
