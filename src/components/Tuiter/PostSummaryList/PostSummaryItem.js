import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "reactblue.png"
        }
    }
) => {
    return(
        <div>
        <li className="list-group-item">
            <div className="align-middle">
                <div className="tweet-spacing">
                    <span className="grey-text-color">{post.topic}</span><br/>
                    <span className="bold-weight">{post.userName}<i className="fas fa-check-circle ps-1"></i></span>
                    <span className="grey-text-color"> - {post.time}</span><br/>
                    <span className="bold-weight">{post.title}</span><br/>
                </div>
                <img className="float-right" src={post.image} width="85px" style={{"borderRadius": "10px"}}/>
            </div>
        </li>
        </div>
    );
}

export default PostSummaryItem;