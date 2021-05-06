import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render(){
    
    return (
        <div className="NavBar">
            <nav>
                <div style ={{display:'inline', margin:'1em'}}>
                    <Link to = '../home'>Internal WOTS</Link>
                </div>
                <div style ={{display:'inline', margin:'1em'}}>
                    <Link to = '../kanban'>Starr Kanban</Link>
                </div>
                <div style ={{display:'inline', margin:'1em'}}>
                <   Link to = '../tasklist'>Task Rock Starr</Link>
                </div>
                <div style ={{display:'inline', margin:'1em'}}>
                    <Link to = '../knowledgerequest'>Knowledge Gap Fill Request</Link>
                </div>
            </nav>
        </div>
    );
  }
  
}


export default NavBar