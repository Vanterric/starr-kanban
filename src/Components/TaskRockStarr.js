import React, {Component} from 'react';
import '../CSS/TaskRockStarr.css';
import NavBar from './NavBar'

class TaskRockStarr extends Component {
  
  constructor(){
    super();
    this.state = {
      tasks: {
        '00':{
          fullName: '---Select Your Name---',
          tasks:[]
        },
        '01': {
          fullName: 'Derrick Gallegos',
          tasks: [
            ['Establish Key Performance Indicators for all current roles', true],
            ['Create OKRs for all current roles', true],
            ['Determine Knowledge Gaps, find a way to fill those gaps, estimate cost, and enter it into Knowledge Gap Document', true],
            ['Finish MVP for to-do list tool', true],
            ["Create next week's meeting agenda", true]
          ]},
        '02': {
          fullName: 'Sara Margolis',
          tasks: [
            ['Create List of 20-30 filmmakers to reach out to for market research', false], 
            ['Establish Key Performance Indicators for all current roles', false], 
            ['Create OKRs for all current roles', false],
            ['Determine Knowledge Gaps, find a way to fill those gaps, estimate cost, and enter it into Knowledge Gap Document', false],
            ['Reach Out to Michelle Bassan to gauge interest in Chief Sales Officer Role', false]
          ]}
      },
      currentUser: '00'
    }
    this.setUser = this.setUser.bind(this)
    this.handleCheckBox =this.handleCheckBox.bind(this)
    this.saveToDoc = this.saveToDoc.bind(this)
    this.addTaskForm = this.addTaskForm.bind(this)
  }

  componentDidMount(){
    this.getDataFromLocalStorage()
  }

  setUser(e){
    var employeeName = e.target.value
    var tempTasks = this.state.tasks
    var tempCurrentUser = this.state.currentUser
    Object.keys(tempTasks).map(employeeID =>{
      if(tempTasks[employeeID].fullName === employeeName){
        tempCurrentUser = employeeID
      }
      return null
    })
    this.setState({currentUser:tempCurrentUser})
  }

  
  handleCheckBox(e, tempCurrentUser){
    var tempState = this.state
    tempState.tasks[tempCurrentUser].tasks[e.target.getAttribute('data-key')][1] = !tempState.tasks[tempCurrentUser].tasks[e.target.getAttribute('data-key')][1]
    this.setState(tempState)
  }

  saveToDoc(){
    localStorage.setItem('todoList',JSON.stringify(this.state))
  }

  getDataFromLocalStorage = () =>{
    let data = localStorage.getItem('todoList');
    if(data!==undefined){
      this.setState(JSON.parse(data));
    }
  }

  addTaskForm () {
      var tempState = this.state
      var task = prompt('Enter the task you would like to add')
      if (task === ''){
        alert("The task wasn't added because you didn't input anything into the task prompt!")
      }
      else if (task){
        tempState.tasks[this.state.currentUser].tasks.push([task, false])
        this.setState(tempState)
      }      
  }

  render(){

    const ListEmployees = () => {
      var employeeList = []
      var tempTasks = this.state.tasks
      Object.keys(tempTasks).map(id=>{
        employeeList.push(<option>{tempTasks[id].fullName}</option>)
        return null
      })
      return (
        <div style = {{textAlign:'center'}}>
          <h4>Select your name to see your to-do list!</h4>
          <select value = {this.state.tasks[this.state.currentUser].fullName} onChange = {(e)=>this.setUser(e)}>{employeeList.map(name =>{return name})}</select>
        </div>
      )}

    
      
    const ListToDos = () =>{
      if (this.state.currentUser!=='00'){
        const tempCurrentUser = this.state.currentUser
        const tempTasks = this.state.tasks[tempCurrentUser].tasks
        var index = -1;
        const taskList = tempTasks.map(task=>{
          index++
          return(
          <div>
            <input data-key = {index}  type = 'checkbox' checked={task[1]} onChange = {(e)=>{this.handleCheckBox(e, tempCurrentUser)}}/>
            <p style={{display:'inline'}} className = {`task-${task[1].toString()}`}>{task[0]}</p>
          </div>
          )})
        return(
          <div>
            <h3>{this.state.tasks[this.state.currentUser].fullName.split(' ')[0]}'s To-do List</h3>
            {taskList}
            <p style = {{cursor:'pointer'}} onClick = {()=>{this.addTaskForm()}}>+ Add a new task</p>
          </div>
        )
      }
      else{
        return null
      }
    }

    return (
      <div className="TaskRockStarr">
        <header className="App-header">
          <h1>Task Rock Starr</h1>
          <NavBar />
        </header>
        <div className = 'main-content' style = {{margin:'1em'}}>
        <ListEmployees />
        <ListToDos />
        <br/>
        <button className='save-button' onClick={()=>{this.saveToDoc()}}>Save To-Do List</button>
        </div>  
      </div>
    );
  }
  
}


export default TaskRockStarr