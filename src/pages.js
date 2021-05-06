import React from 'react'
import {useLocation} from "react-router-dom"
import StarrKanbanPage from './Components/StarrKanban'
import TaskRockStarrPage from './Components/TaskRockStarr'
import KnowledgeGapFillRequestPage from './Components/KnowledgeGapFillRequest'
import InternalWotsPage from './Components/InternalWots'

export function Home(){
    return(
        <div>
            <InternalWotsPage/>
        </div>
    )
}
export function StarrKanban(){
    return(
        <StarrKanbanPage />
    )
}

export function TaskRockStarr(){
    return(
        <TaskRockStarrPage />
    )
}

export function KnowledgeGapFillRequest(){
    return(
        <KnowledgeGapFillRequestPage />
    )
}

export function Whoops404(){
    let location = useLocation()
    return(
        <div style = {{textAlign: 'center'}}>
            <h1>404 Error!</h1>
            <h2>{location.pathname} does not exist!</h2>
        </div>
    )
}