import React from "react";
import "./index.css";

const TuitListItem = (
    {
        tuit = {
                   "_id": "567",
                   "topic": "Space",
                   "postedBy": {
                     "username": "SpaceX"
                   },
                   "liked": false,
                   "verified": false,
                   "handle": "spacex",
                   "title": "",
                   "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                   "attachments": {
                     "image": "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                   },
                   "time": "last month",
                   "logo-image": "../../../images/node.png",
                   "avatarImg": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/06/931/524/TESLA-LOGO.jpg?ve=1&tl=1",
                   "tuits": "120K",
                   "stats": {
                     "comments": 0,
                     "retuits": 234,
                     "likes": 345
                   }
                 }
    }
) => {
    return(
        <div className="list-group-item">
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
                <div style={{"paddingTop": "12px"}}>
                    <a href="#"> <i className="far fa-comment" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                    <span className="wd-gray-color wd-icon-padding wd-14px-font">{tuit.stats.comments}</span>
                    <a href="#"> <i className="fas fa-retweet" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                    <span className="wd-gray-color wd-icon-padding wd-14px-font">{tuit.stats.retuits}</span>
                    <a href="#"> <i className="fas fa-heart" style={{"color": "#df255e"}}></i></a>
                    <span className="wd-red-color wd-icon-padding wd-14px-font">{tuit.stats.likes}</span>
                    <a href="#"> <i className="fas fa-upload" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                </div>
            </div>
        </div>
    );
};

export default TuitListItem;