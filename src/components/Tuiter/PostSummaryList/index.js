import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = () => {
    return (
        <ul className="list-group list-group-flush">
            {
                posts.map(post => {
                    return(<PostSummaryItem post={post}/>);
                })
            }
        </ul>
    );
}

export default PostSummaryList;