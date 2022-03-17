import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: "like-tuit", tuit});
    };

    return (
        <div style={{"paddingTop": "12px"}}>
        <a href="#"> <i className="far fa-comment" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                            <span className="wd-gray-color wd-icon-padding wd-14px-font">{tuit.stats.comments}</span>
                            <a href="#"> <i className="fas fa-retweet" style={{"color": "rgb(110, 118, 125)"}}></i></a>
                            <span className="wd-gray-color wd-icon-padding wd-14px-font">{tuit.stats.retuits}</span>
        <span onClick={likeTuit}>
        {
            tuit.liked && <i className="fas fa-heart me-1 wd-14px-font wd-gray-color"
                             style={{color: '#df255e'}}></i>
        }
        {
            !tuit.liked && <i className="far fa-heart me-1 wd-14px-font wd-gray-color"></i>
        }
        {tuit.stats && <span className="wd-gray-color wd-14px-font wd-icon-padding">{tuit.stats.likes}</span>}
        <a href="#"> <i className="fas fa-upload" style={{"color": "rgb(110, 118, 125)"}}></i></a>
        </span>
        </div>
    );
};

export default TuitStats;