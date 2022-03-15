import tuits from "../Data/tuits.json";

const TuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case "create-tuit":
            const newTuit = {
                tuit: action.tuit,
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
                    img: "hi"
                },
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits;
    }
}

export default TuitsReducer;