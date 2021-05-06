import React from 'react'
import {Routes, Route} from 'react-router-dom'
import{
    Home,
    StarrKanban,
    TaskRockStarr,
    KnowledgeGapFillRequest,
    Whoops404
} from './pages'

function App() {
    return(
        <div>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/home' element = {<Home />} />
                <Route path = '/kanban' element = {<StarrKanban />} />
                <Route path = '/tasklist' element = {<TaskRockStarr />} />
                <Route path = '/knowledgerequest' element = {<KnowledgeGapFillRequest />}/>
                <Route path = '*' element = {<Whoops404 />}/>
            </Routes>
        </div>
    )
}
export default App;