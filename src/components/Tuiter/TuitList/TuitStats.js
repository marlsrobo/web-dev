import {useDispatch} from "react-redux";
import {updateTuit} from "../Actions/tuits-actions";

// add for commit a9

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        updateTuit(dispatch, {...tuit,
                              likes: tuit.likes + 1})
    };
    const dislikeTuit = () => {
        updateTuit(dispatch, {...tuit,
                              dislikes: tuit.dislikes + 1})
    };

    return (
        <div style={{"paddingTop": "12px"}}>
        <a href="#"> <i className="far fa-comment" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                            <span className="wd-gray-color wd-icon-padding wd-14px-font">{tuit.stats.comments}</span>
                            <a href="#"> <i className="fas fa-retweet" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                            <span className="wd-gray-color wd-icon-padding wd-14px-font">{tuit.stats.retuits}</span>
        <span onClick={likeTuit}>
            <i className="far fa-thumbs-up me-1 wd-14px-font wd-gray-color"></i>
            <span className="wd-gray-color wd-14px-font wd-icon-padding">{tuit.likes}</span>
        </span>
        <span onClick={dislikeTuit}>
            <i className="far fa-thumbs-down me-1 wd-14px-font wd-gray-color"></i>
            <span className="wd-gray-color wd-14px-font wd-icon-padding">{tuit.dislikes}</span>
        </span>

        <a href="#"> <i className="fas fa-upload" style={{"color": "rgb(110, 118, 125)"}}></i></a>

        </div>
    );
};

export default TuitStats;