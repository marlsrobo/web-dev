import React from "react";
import {Link, Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen";
import whoReducer from "./Reducers/WhoReducer";
import TuitsReducer from "./Reducers/TuitsReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({tuits: TuitsReducer, who: whoReducer});
const store = createStore(reducer);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <h1>Tuiter</h1>
            <Link to="/hello">Hello</Link> |
            <Link to="/labs">Labs</Link>

            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;