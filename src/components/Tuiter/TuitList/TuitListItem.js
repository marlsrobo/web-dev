import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(
        <div className="list-group-item">
        <i onClick={() =>
                deleteTuit(tuit)}
                className="fas fa-window-close fa-2x fa-pull-right"
                style={{"color": "rgb(110, 118, 125)"}}></i>
            <img className="wd-avatar-image wd-float-left" src={tuit.avatarImg}/>
            <div className="wd-float-left">
                <p className="wd-author-text wd-float-left" >{tuit.postedBy.username}<span className="wd-gray-text">@{tuit.handle} • {tuit.time}</span>
                </p>
                <p className="wd-post-text">{tuit.tuit}</p>
            </div>

        
            <div className="wd-margin-left-60px" style={{"width": "506px"}}>
                <img className="wp-bookmark-image wd-border-basic wd-rounded-top" src={tuit.attachments.img}/>
        
                <div className="wd-12px-padding-all wd-border-basic wd-rounded-bottom" style={{"marginTop": "-5px"}}>
                    <p className="wd-bookmark-title" style={{"marginTop": "0px"}, {"marginBottom": "0px"}}>{tuit.title}</p>
                    <p className="wd-bookmark-gray-text" style={{"marginTop": "5px"}}>Lorem ipsum dolor sit amet, consecteteur adpiscing elit. Lorem ipsum dolor sit amet,
                        consecteteur adipiscing elit</p>
                </div>
                <TuitStats tuit={tuit}/>
            </div>

        </div>
    );
};

export default TuitListItem;