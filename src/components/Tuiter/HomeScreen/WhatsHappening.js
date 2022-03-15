import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
                  tuit: whatsHappening});
    };
    return(
        <>
            <textarea className="form-control bg-black border-1"
                      style={{"color": "gray"}}
                      value={whatsHappening}
                      placeholder="What's happening?"
                        onChange={(event) =>
                            setWhatsHappening(event.target.value)
                        }>
            </textarea>
            <div>
            <i className="fas fa-image blue-color"></i>
            <i className="fas fa-chart-bar blue-color"></i>
            <i className="fas fa-smile blue-color"></i>
            <i className="fas fa-calendar blue-color"></i>
            <button className="btn btn-primary float-right" onClick={tuitClickHandler}>
            Tuit
            </button>
            </div>
        </>
    );
};

export default WhatsHappening;