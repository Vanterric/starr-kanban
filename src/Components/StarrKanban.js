import React, {Component} from 'react';
import '../CSS/StarrKanban.css';
import NavBar from './NavBar'

class StarrKanban extends Component {
  
  constructor(){
    super();
    this.state = {
      backlog:[['This is a title','this is a description']],
      toDo:[],
      inProgress:[],
      done:[],
      title:'',
      description:''
    }
  }

  saveToDoc = () =>{
    localStorage.setItem('state',JSON.stringify(this.state))
  }

  getDataFromLocalStorage = () =>{
    let data = localStorage.getItem('state');
    if(data!==undefined){
      this.setState(JSON.parse(data));
    }
  }
  
  componentDidMount(){
    this.getDataFromLocalStorage()
  }
  

  render(){
    var backlog = 'Backlog ' + this.state.backlog.length
    var toDo = 'To Do ' + this.state.toDo.length
    var inProgress = 'In Progress ' + this.state.inProgress.length
    var done = 'Done ' + this.state.done.length
  
    const MakeTasks = (props) =>{
      var tasks = [];
      var index = 0;
      this.state[props.container].map(task=>{
        tasks.push(
            
            <div className='task' >
              <p className = 'delete-button' onClick = {()=> deleteTask(task, props.container)}>{'\u2715'}</p>
              <p className='left-button' onClick = {() => MoveTask(task,props.container,'left')}>{'<'}</p>
              <p className = 'right-button' onClick = {() => MoveTask(task,props.container,'right')}>{'>'}</p>
              <p className='up-button' onClick = {() => MoveTask(task,props.container,'up')}>{'<'}</p>
              <p className = 'down-button' onClick = {() => MoveTask(task,props.container,'down')}>{'<'}</p>
              <h4 className='title'id = {index + 'title-' + props.container} key = {index + 'title'}datakey = {index} contentEditable suppressContentEditableWarningg>{task[0]}</h4>
              <p className = 'description' id = {index + 'description-' + props.container} key = {index + 'description'}datakey = {index} contentEditable suppressContentEditableWarning>{task[1]}</p>
            </div>
          
          
        )
        index++
        return null
      })
      return(
        <div className = 'task-list'>{tasks}</div>
      )
    }

    
    const deleteTask = (task, from) =>{
      let tempKanbanBoard = this.state;
      let relevantIndex = tempKanbanBoard[from].indexOf(task)
      tempKanbanBoard[from].splice(relevantIndex,1)
      this.setState(tempKanbanBoard)
    }


    const handleSave=()=>{
      var tempState = this.state;
      var title = ''
      var description = ''
      for (let index = 0; index < this.state.backlog.length; index++) {
        title = document.getElementById(index + 'title-backlog').innerHTML;
        description = document.getElementById(index + 'description-backlog').innerHTML;
        tempState.backlog[index] = [title,description];
      }
      for (let index = 0; index < this.state.toDo.length; index++) {
        title = document.getElementById(index + 'title-toDo').innerHTML;
        description = document.getElementById(index + 'description-toDo').innerHTML;
        tempState.toDo[index] = [title,description];
      }
      for (let index = 0; index < this.state.inProgress.length; index++) {
        title = document.getElementById(index + 'title-inProgress').innerHTML;
        description = document.getElementById(index + 'description-inProgress').innerHTML;
        tempState.inProgress[index] = [title,description];
      }
      for (let index = 0; index < this.state.done.length; index++) {
        title = document.getElementById(index + 'title-done').innerHTML;
        description = document.getElementById(index + 'description-done').innerHTML;
        tempState.done[index] = [title,description];
      }

      this.saveToDoc()

      this.setState(tempState);
    }



    const CreateTaskForm = () =>{
      var title = ''
      var description = ''
      var description2 = ''
      return(
        <form className = 'create-task-form' onSubmit={(e) => {e.preventDefault(); return addTask('backlog',title,description+description2)}}>
          <label>As a </label><input type='text' placeholder='stakeholder' onChange={(e)=>{title = `As a ${e.target.value}`;}}></input>
          <label>, I want to </label><input type='text' placeholder='do this task' onChange={(e)=>{description = `I want to ${e.target.value}`;}}></input>
          <label> so that </label><input type='text' placeholder='I can get the desired result' onChange={(e)=>{description2 = ` so that ${e.target.value}`;}}></input>
          <button className = 'create-task-form-button'>Add userstory</button>
        </form>
      )
    }


    const addTask = (container,title,description) =>{
      title = title === ''?'Title':title
      description = description === ''?'Description':description

      var tempState = this.state;
      tempState[container].unshift([title,description])
      this.setState(tempState)
    }
  
    const MakeContainers = ()=>{
      return(
        <div className = 'mainUI'>
          <meta name="viewport" content="width=device-width" />
          <div className = 'center-wrapper'>
            <div className = 'backlog'>
              <h3 className ='label'>{backlog}<p className = 'add-item' onClick = {()=>addTask('backlog','','')}>+</p></h3>
              <MakeTasks container = 'backlog'/>
            </div>
            <div className = 'to-do'>
              <h3 className ='label'>{toDo}<p className = 'add-item' onClick = {()=>addTask('toDo','','')}>+</p></h3>
              <MakeTasks container = 'toDo'/>
            </div>
            <div className = 'in-progress'>
              <h3 className ='label'>{inProgress}<p className = 'add-item' onClick = {()=>addTask('inProgress','','')}>+</p></h3>
              <MakeTasks container = 'inProgress'/>
            </div>
            <div className = 'done'>
              <h3 className ='label'>{done}<p className = 'add-item' onClick = {()=>addTask('done','','')}>+</p></h3>
              <MakeTasks container = 'done'/>
            </div>
          </div>
        </div>
      )
    }
  
    const MoveTask = (task,from,direction) =>{
      let tempKanbanBoard = this.state;
      let relevantIndex = tempKanbanBoard[from].indexOf(task)
      if(direction!=='up' && direction!=='down'){
        var to = (
          from === 'backlog'?
            direction === 'right'?
              'toDo':
              'backlog':
          from === 'toDo'?
            direction === 'right'?
              'inProgress':
              'backlog':
          from === 'inProgress'?
            direction === 'right'?
              'done':
              'toDo':
          direction === 'right'?
            'done':
            'inProgress'
          )
        tempKanbanBoard[from].splice(relevantIndex,1);
        tempKanbanBoard[to].push(task);
        this.setState(tempKanbanBoard)
      }
      else{
        if(direction==='up'){
            if (tempKanbanBoard[from][relevantIndex-1]){
              tempKanbanBoard[from][relevantIndex] = tempKanbanBoard[from][relevantIndex-1]
              tempKanbanBoard[from][relevantIndex-1] = task
            }
        }
        else{
          if (tempKanbanBoard[from][relevantIndex+1]){
            tempKanbanBoard[from][relevantIndex] = tempKanbanBoard[from][relevantIndex+1]
            tempKanbanBoard[from][relevantIndex+1] = task
          }
        }
        this.setState(tempKanbanBoard)
      }
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Starr Kanban</h1>
          <NavBar />
        </header>
        <div>
          <CreateTaskForm/>
          <br/>
          <button className='save-button' onClick={()=>{handleSave()}}>Save Kanbanboard</button>
          <br/>
          <br/>
          <MakeContainers/>
        </div>
  
      </div>
    );
  }
  
}


export default StarrKanban