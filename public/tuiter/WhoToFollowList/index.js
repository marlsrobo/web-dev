import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <div class="d-none d-lg-block">
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="bold-weight">Who to follow</span>
                </li>
                ${
                    who.map(item => {
                        return(WhoToFollowListItem(item));
                    }).join('')
                }
            </ul>
        </div>
    `);
}

export default WhoToFollowList;