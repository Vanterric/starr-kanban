import React, {Component} from 'react';
import '../CSS/StarrKanban.css';
import NavBar from './NavBar'

class StarrKanban extends Component {
  
  constructor(){
    super();
    this.state = {
      devKanban:{
        backlog:[],
        toDo:[],
        inProgress:[],
        done:[],
        title:'',
        description:''
      },
      prodKanban:{
        backlog:[],
        preProd:[],
        prod:[],
        postProd:[],
        review:[],
        publishing:[],
        done:[],
        title:'',
        description:''
      },
      programKanban:{
        funnel:[],
        analyzing:[],
        backlog:[],
        implementing:[],
        validatingOnStaging:[],
        deployingToProduction:[],
        releasing:[],
        done:[],
        title:'',
        description:''
      },
      currentBoard:'devKanban',
      toolMenuVisible:false
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
    var backlog = 'Backlog ' + this.state.devKanban.backlog.length
    var toDo = 'To Do ' + this.state.devKanban.toDo.length
    var inProgress = 'In Progress ' + this.state.devKanban.inProgress.length
    var done = 'Done ' + this.state.devKanban.done.length
    var funnel = 'Funnel ' + this.state.programKanban.funnel.length
    var analyzing = 'Analyzing ' + this.state.programKanban.analyzing.length
    var programBacklog = 'Backlog ' + this.state.programKanban.backlog.length
    var implementing = 'Implementing ' + this.state.programKanban.implementing.length
    var validating = 'Validating ' + this.state.programKanban.validatingOnStaging.length
    var deploying = 'Deploying ' + this.state.programKanban.deployingToProduction.length
    var releasing = 'Releasing ' + this.state.programKanban.releasing.length
    var programDone = 'Done ' + this.state.programKanban.done.length
    var prodBacklog = 'Backlog ' + this.state.prodKanban.backlog.length
    var preProd = 'Pre-Production ' + this.state.prodKanban.preProd.length
    var prod = 'Production ' + this.state.prodKanban.prod.length
    var postProd = 'Post-Production ' + this.state.prodKanban.postProd.length
    var review = 'Review ' + this.state.prodKanban.review.length
    var publishing = 'Publishing ' + this.state.prodKanban.publishing.length
    var prodDone = 'Done ' + this.state.prodKanban.done.length
  
    const MakeTasks = (props) =>{
      var tasks = [];
      var index = 0;
      this.state[this.state.currentBoard][props.container].map(task=>{
        console.log(props.container)
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
      let relevantIndex = tempKanbanBoard[this.state.currentBoard][from].indexOf(task)
      tempKanbanBoard[this.state.currentBoard][from].splice(relevantIndex,1)
      this.setState(tempKanbanBoard)
    }


    const handleSave=()=>{
      console.log(this.state.currentBoard)
      var tempState = this.state;
      var title = ''
      var description = ''

      if(this.state.currentBoard==='devKanban'){
        for (let index = 0; index < this.state.devKanban.backlog.length; index++) {
          title = document.getElementById(index + 'title-backlog').innerHTML;
          description = document.getElementById(index + 'description-backlog').innerHTML;
          tempState.devKanban.backlog[index] = [title,description];
        }
        for (let index = 0; index < this.state.devKanban.toDo.length; index++) {
          title = document.getElementById(index + 'title-toDo').innerHTML;
          description = document.getElementById(index + 'description-toDo').innerHTML;
          tempState.devKanban.toDo[index] = [title,description];
        }
        for (let index = 0; index < this.state.devKanban.inProgress.length; index++) {
          title = document.getElementById(index + 'title-inProgress').innerHTML;
          description = document.getElementById(index + 'description-inProgress').innerHTML;
          tempState.devKanban.inProgress[index] = [title,description];
        }
        for (let index = 0; index < this.state.devKanban.done.length; index++) {
          title = document.getElementById(index + 'title-done').innerHTML;
          description = document.getElementById(index + 'description-done').innerHTML;
          tempState.devKanban.done[index] = [title,description];
        }
      }
      else if(this.state.currentBoard==='programKanban'){
        for (let index = 0; index < this.state.programKanban.funnel.length; index++) {
          title = document.getElementById(index + 'title-funnel').innerHTML;
          description = document.getElementById(index + 'description-funnel').innerHTML;
          tempState.programKanban.funnel[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.analyzing.length; index++) {
          title = document.getElementById(index + 'title-analyzing').innerHTML;
          description = document.getElementById(index + 'description-analyzing').innerHTML;
          tempState.programKanban.analyzing[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.backlog.length; index++) {
          title = document.getElementById(index + 'title-backlog').innerHTML;
          description = document.getElementById(index + 'description-backlog').innerHTML;
          tempState.programKanban.backlog[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.implementing.length; index++) {
          title = document.getElementById(index + 'title-implementing').innerHTML;
          description = document.getElementById(index + 'description-implementing').innerHTML;
          tempState.programKanban.implementing[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.validatingOnStaging.length; index++) {
          title = document.getElementById(index + 'title-validatingOnStaging').innerHTML;
          description = document.getElementById(index + 'description-validatingOnStaging').innerHTML;
          tempState.programKanban.validatingOnStaging[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.deployingToProduction.length; index++) {
          title = document.getElementById(index + 'title-deployingToProduction').innerHTML;
          description = document.getElementById(index + 'description-deployingToProduction').innerHTML;
          tempState.programKanban.deployingToProduction[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.releasing.length; index++) {
          title = document.getElementById(index + 'title-releasing').innerHTML;
          description = document.getElementById(index + 'description-releasing').innerHTML;
          tempState.programKanban.releasing[index] = [title,description];
        }
        for (let index = 0; index < this.state.programKanban.done.length; index++) {
          title = document.getElementById(index + 'title-done').innerHTML;
          description = document.getElementById(index + 'description-done').innerHTML;
          tempState.programKanban.done[index] = [title,description];
        }
      }
      else if(this.state.currentBoard==='prodKanban'){
        for (let index = 0; index < this.state.prodKanban.backlog.length; index++) {
          title = document.getElementById(index + 'title-backlog').innerHTML;
          description = document.getElementById(index + 'description-backlog').innerHTML;
          tempState.prodKanban.backlog[index] = [title,description];
        }
        for (let index = 0; index < this.state.prodKanban.preProd.length; index++) {
          title = document.getElementById(index + 'title-preProd').innerHTML;
          description = document.getElementById(index + 'description-preProd').innerHTML;
          tempState.prodKanban.preProd[index] = [title,description];
        }
        for (let index = 0; index < this.state.prodKanban.prod.length; index++) {
          title = document.getElementById(index + 'title-prod').innerHTML;
          description = document.getElementById(index + 'description-prod').innerHTML;
          tempState.prodKanban.prod[index] = [title,description];
        }
        for (let index = 0; index < this.state.prodKanban.postProd.length; index++) {
          title = document.getElementById(index + 'title-postProd').innerHTML;
          description = document.getElementById(index + 'description-postProd').innerHTML;
          tempState.prodKanban.postProd[index] = [title,description];
        }
        for (let index = 0; index < this.state.prodKanban.review.length; index++) {
          title = document.getElementById(index + 'title-review').innerHTML;
          description = document.getElementById(index + 'description-review').innerHTML;
          tempState.prodKanban.review[index] = [title,description];
        }
        for (let index = 0; index < this.state.prodKanban.publishing.length; index++) {
          title = document.getElementById(index + 'title-publishing').innerHTML;
          description = document.getElementById(index + 'description-publishing').innerHTML;
          tempState.prodKanban.publishing[index] = [title,description];
        }
        for (let index = 0; index < this.state.prodKanban.done.length; index++) {
          title = document.getElementById(index + 'title-done').innerHTML;
          description = document.getElementById(index + 'description-done').innerHTML;
          tempState.prodKanban.done[index] = [title,description];
        }
      }
      

      this.saveToDoc()

      this.setState(tempState);
    }



    const CreateTaskForm = () =>{
      var title = ''
      var description = ''
      var description2 = ''
      return(
        <form className = 'create-task-form' onSubmit={(e) => {e.preventDefault(); return addTask(Object.keys(this.state[this.state.currentBoard])[0],title,description+description2)}}>
          <label>As a </label><input type='text' placeholder='stakeholder' onChange={(e)=>{title = `As a ${e.target.value}`;}}></input>
          <label>, I want to </label><input type='text' placeholder='do this task' onChange={(e)=>{description = `I want to ${e.target.value}`;}}></input>
          <label> so that </label><input type='text' placeholder='I can get the desired result' onChange={(e)=>{description2 = ` so that ${e.target.value}`;}}></input>
          <button className = 'create-task-form-button'>Add userstory</button>
        </form>
      )
    }

    const ToolMenu = () =>{
      if (this.state.toolMenuVisible===true){
        return(
          <div className = 'tool-menu'>
            <p className='tool-menu-exit' onClick={()=>{this.setState({toolMenuVisible:false})}}>X</p>
            <h2 style = {{textAlign:'center', textDecoration:'underline'}}>Tool Menu</h2>
            <div style = {{textAlign:'center', borderBottom:'1px lightgrey solid', paddingBottom:'1em', borderTop:'1px lightgrey solid'}}>
              <h4 style = {{textAlign:'center'}}>Change Kanban Board Type</h4>
              <select  value={this.state.currentBoard} onChange={(e)=>this.setState({currentBoard:e.target.value})}>
                <option value='prodKanban'>Film Production Kanban</option>
                <option value = 'programKanban'>Program Kanban</option>
                <option value = 'devKanban'>Software Development Kanban</option>
              </select>
            </div>
            
          </div>
        )
      }
      else{
        return null
      }
      
    }


    const addTask = (container,title,description) =>{
      title = title === ''?'Title':title
      description = description === ''?'Description':description

      var tempState = this.state;
      tempState[this.state.currentBoard][container].unshift([title,description])
      this.setState(tempState)
    }
  
    const MakeContainers = ({kanbanType})=>{
      if (kanbanType === 'devKanban'){
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
      else if (kanbanType==='programKanban'){
        return(
          <div className = 'mainUI'>
            <meta name="viewport" content="width=device-width" />
            <div className = 'center-wrapper'>
              <div className = 'funnel'>
                <h3 className ='label'>{funnel}<p className = 'add-item' onClick = {()=>addTask('funnel','','')}>+</p></h3>
                <MakeTasks container = 'funnel'/>
              </div>
              <div className = 'analyzing'>
                <h3 className ='label'>{analyzing}<p className = 'add-item' onClick = {()=>addTask('analyzing','','')}>+</p></h3>
                <MakeTasks container = 'analyzing'/>
              </div>
              <div className = 'programBacklog'>
                <h3 className ='label'>{programBacklog}<p className = 'add-item' onClick = {()=>addTask('backlog','','')}>+</p></h3>
                <MakeTasks container = 'backlog'/>
              </div>
              <div className = 'implementing'>
                <h3 className ='label'>{implementing}<p className = 'add-item' onClick = {()=>addTask('implementing','','')}>+</p></h3>
                <MakeTasks container = 'implementing'/>
              </div>
              <div className = 'validatingOnStaging'>
                <h3 className ='label'>{validating}<p className = 'add-item' onClick = {()=>addTask('validatingOnStaging','','')}>+</p></h3>
                <MakeTasks container = 'validatingOnStaging'/>
              </div>
              <div className = 'deployingToProduction'>
                <h3 className ='label'>{deploying}<p className = 'add-item' onClick = {()=>addTask('deployingToProduction','','')}>+</p></h3>
                <MakeTasks container = 'deployingToProduction'/>
              </div>
              <div className = 'releasing'>
                <h3 className ='label'>{releasing}<p className = 'add-item' onClick = {()=>addTask('releasing','','')}>+</p></h3>
                <MakeTasks container = 'releasing'/>
              </div>
              <div className = 'programDone'>
                <h3 className ='label'>{programDone}<p className = 'add-item' onClick = {()=>addTask('done','','')}>+</p></h3>
                <MakeTasks container = 'done'/>
              </div>
            </div>
          </div>
        )
      }
      else if (kanbanType==='prodKanban'){
        return(
          <div className = 'mainUI'>
            <meta name="viewport" content="width=device-width" />
            <div className = 'center-wrapper'>
              <div className = 'prodBacklog'>
                <h3 className ='label'>{prodBacklog}<p className = 'add-item' onClick = {()=>addTask('backlog','','')}>+</p></h3>
                <MakeTasks container = 'backlog'/>
              </div>
              <div className = 'preProd'>
                <h3 className ='label'>{preProd}<p className = 'add-item' onClick = {()=>addTask('preProd','','')}>+</p></h3>
                <MakeTasks container = 'preProd'/>
              </div>
              <div className = 'prod'>
                <h3 className ='label'>{prod}<p className = 'add-item' onClick = {()=>addTask('prod','','')}>+</p></h3>
                <MakeTasks container = 'prod'/>
              </div>
              <div className = 'postProd'>
                <h3 className ='label'>{postProd}<p className = 'add-item' onClick = {()=>addTask('postProd','','')}>+</p></h3>
                <MakeTasks container = 'postProd'/>
              </div>
              <div className = 'review'>
                <h3 className ='label'>{review}<p className = 'add-item' onClick = {()=>addTask('review','','')}>+</p></h3>
                <MakeTasks container = 'review'/>
              </div>
              <div className = 'publishing'>
                <h3 className ='label'>{publishing}<p className = 'add-item' onClick = {()=>addTask('publishing','','')}>+</p></h3>
                <MakeTasks container = 'publishing'/>
              </div>
              <div className = 'prodDone'>
                <h3 className ='label'>{prodDone}<p className = 'add-item' onClick = {()=>addTask('done','','')}>+</p></h3>
                <MakeTasks container = 'done'/>
              </div>
            </div>
          </div>
        )
      }
      else{
        return <div style={{textAlign:'center'}}><h4>This Kanban Board is still in Development</h4></div>
      }
      
    }
  
    const MoveTask = (task,from,direction) =>{
      let tempKanbanBoard = this.state;
      let relevantIndex = tempKanbanBoard[this.state.currentBoard][from].indexOf(task)
      var to = ''
      if(this.state.currentBoard === 'devKanban'){
        if(direction!=='up' && direction!=='down'){
          to = (
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
          tempKanbanBoard[this.state.currentBoard][from].splice(relevantIndex,1);
          tempKanbanBoard[this.state.currentBoard][to].push(task);
          this.setState(tempKanbanBoard)
        }
        else{
          if(direction==='up'){
              if (tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1]){
                tempKanbanBoard[this.state.currentBoard][from][relevantIndex] = tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1]
                tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1] = task
              }
          }
          else{
            if (tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1]){
              tempKanbanBoard[this.state.currentBoard][from][relevantIndex] = tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1]
              tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1] = task
            }
          }
          this.setState(tempKanbanBoard)
        }
      }
      else if(this.state.currentBoard === 'programKanban'){
        if(direction!=='up' && direction!=='down'){
          to = (
            from === 'funnel'?
              direction === 'right'?
                'analyzing':
                'funnel':
            from === 'analyzing'?
              direction === 'right'?
                'backlog':
                'funnel':
            from === 'backlog'?
              direction === 'right'?
                'implementing':
                'analyzing':
            from === 'implementing'?
              direction === 'right'?
                'validatingOnStaging':
                'backlog':
            from === 'validatingOnStaging'?
              direction === 'right'?
                'deployingToProduction':
                'implementing':
            from === 'deployingToProduction'?
              direction === 'right'?
                'releasing':
                'validatingOnStaging':
            from === 'releasing'?
              direction === 'right'?
                'done':
                'deployingToProduction':
            direction === 'right'?
              'done':
              'releasing'
            )
          tempKanbanBoard[this.state.currentBoard][from].splice(relevantIndex,1);
          tempKanbanBoard[this.state.currentBoard][to].push(task);
          this.setState(tempKanbanBoard)
        }
        else{
          if(direction==='up'){
              if (tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1]){
                tempKanbanBoard[this.state.currentBoard][from][relevantIndex] = tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1]
                tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1] = task
              }
          }
          else{
            if (tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1]){
              tempKanbanBoard[this.state.currentBoard][from][relevantIndex] = tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1]
              tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1] = task
            }
          }
          this.setState(tempKanbanBoard)
        }
      }
      else if(this.state.currentBoard === 'prodKanban'){
        if(direction!=='up' && direction!=='down'){
          to = (
            from === 'backlog'?
              direction === 'right'?
                'preProd':
                'backlog':
            from === 'preProd'?
              direction === 'right'?
                'prod':
                'backlog':
            from === 'prod'?
              direction === 'right'?
                'postProd':
                'preProd':
            from === 'postProd'?
              direction === 'right'?
                'review':
                'prod':
            from === 'review'?
              direction === 'right'?
                'publishing':
                'postProd':
            from === 'publishing'?
              direction === 'right'?
                'done':
                'review':
            direction === 'right'?
              'done':
              'publishing'
            )
          tempKanbanBoard[this.state.currentBoard][from].splice(relevantIndex,1);
          tempKanbanBoard[this.state.currentBoard][to].push(task);
          this.setState(tempKanbanBoard)
        }
        else{
          if(direction==='up'){
              if (tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1]){
                tempKanbanBoard[this.state.currentBoard][from][relevantIndex] = tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1]
                tempKanbanBoard[this.state.currentBoard][from][relevantIndex-1] = task
              }
          }
          else{
            if (tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1]){
              tempKanbanBoard[this.state.currentBoard][from][relevantIndex] = tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1]
              tempKanbanBoard[this.state.currentBoard][from][relevantIndex+1] = task
            }
          }
          this.setState(tempKanbanBoard)
        }
      }
      
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Starr Kanban</h1>
          <div style={{position:'absolute', right:'1em', top:'1em', fontSize:'25px', cursor:'pointer'}} onClick={()=>this.setState({toolMenuVisible:true})}>{'\u2630'}</div>
          <NavBar />
        </header>
        <div>
          <ToolMenu />
          <CreateTaskForm/>
          <br/>
          <button className='save-button' onClick={()=>{handleSave()}}>Save Kanbanboard</button>
          <br/>
          <br/>
          <MakeContainers kanbanType = {this.state.currentBoard}/>
        </div>
  
      </div>
    );
  }
  
}


export default StarrKanban