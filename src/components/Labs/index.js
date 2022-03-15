import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples";
const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoList/>
            <ReduxExamples/>
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </>
    )
};

export default Labs;