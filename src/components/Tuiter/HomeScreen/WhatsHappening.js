import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../Actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    return(
        <>
            <textarea className="form-control bg-black border-1"
                      style={{"color": "gray"}}
                      value={newTuit.value}
                      placeholder="What's happening?"
                        onChange={(event) =>
                            setNewTuit({...newTuit,
                                        tuit: event.target.value})
                        }>
            </textarea>
            <div>
            <i className="fas fa-image blue-color"></i>
            <i className="fas fa-chart-bar blue-color"></i>
            <i className="fas fa-smile blue-color"></i>
            <i className="fas fa-calendar blue-color"></i>
            <button className="btn btn-primary float-right"
                    onClick={() => createTuit(dispatch, newTuit)}>
            Tuit
            </button>
            </div>
        </>
    );
};

export default WhatsHappening;