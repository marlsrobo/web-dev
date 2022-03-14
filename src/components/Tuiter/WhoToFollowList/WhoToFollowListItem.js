import React from "react";
import "./index.css";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    return(
    <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 m-0">
                    <img className="round-image" src={who.avatarIcon} alt="..." width="50" height="50"/>
                </div>
                <div className="col-7 m-0 text-no-wrap">
                    <span className="bold-weight">{who.userName}<i className="fas fa-check-circle ps-1"></i></span>
                    <br/>
                    <span className="grey-text-color">@{who.handle}</span>
                </div>
                <div className="col-3 m-0">
                    <button className="btn btn-primary float-right">Follow</button>
                </div>
            </div>
        </li>
    </>
    );
}

export default WhoToFollowListItem;