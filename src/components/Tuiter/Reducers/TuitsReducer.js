import tuits from "../Data/tuits.json";

const TuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case "create-tuit":
            const newTuit = {
                tuit: action.tuit,
                liked: false,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },
                stats: {
                    retuits: 111,
                    likes: 222,
                    replies: 333
                },
                attachments: {
                    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png"
                },
                time: "last month",
                avatarImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            }
            return [
                newTuit,
                ...state
            ];
        case "delete-tuit":
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case "like-tuit":
            return state.map(tuit => {
               if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
               } else {
                    return tuit;
               }
            });
        default:
            return tuits;
    }
}

export default TuitsReducer;