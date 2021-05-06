import React, {Component} from 'react';
import '../CSS/InternalWots.css';
import NavBar from './NavBar'

class InternalWots extends Component {
  
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
      <div className="InternalWots">
        <header className="App-header">
          <h1>Internal Word On the Street</h1>
          <NavBar />
        </header>  
        <h2 style = {{textAlign:'center'}}>This Page is Still Under Development</h2>
      </div>
    );
  }
  
}


export default InternalWots