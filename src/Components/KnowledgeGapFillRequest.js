import React, {Component} from 'react';
import '../CSS/KnowledgeGapFillRequest.css';
import NavBar from './NavBar'

class KnowledgeGapFillRequest extends Component {
  
  constructor(){
    super();
    this.state = {
      backlog:['This is a title','this is a description'],
      toDo:[],
      inProgress:[],
      done:[],
      title:'',
      description:''
    }
  }

  componentDidMount(){
    
  }
  

  render(){
    
    return (
      <div className="KnowledgeGapFillRequest">
        <header className="App-header">
          <h1>Knowledge Gap Fill Request</h1>
          <NavBar />
        </header>
        <h2 style = {{textAlign:'center'}}>This Page is Still Under Development</h2>  
      </div>
    );
  }
  
}


export default KnowledgeGapFillRequest