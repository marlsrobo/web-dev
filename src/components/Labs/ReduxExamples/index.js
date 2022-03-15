import React from "react";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import hello from "./Reducers/hello";
import TodosReducer from "./Reducers/TodosReducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import Todos from "./TodosComponent";

const reducers = combineReducers({hello, TodosReducer});
const store = createStore(reducers);

const ReactExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReactExamples;