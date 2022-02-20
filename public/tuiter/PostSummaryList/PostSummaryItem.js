const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="align-middle">
                <div class="tweet-spacing">
                    <span class="grey-text-color">${post.topic}</span>
                    </br>
                    <span class="bold-weight">${post.userName}<i class="fas fa-check-circle ps-1"></i></span>
                    <span class="grey-text-color"> - ${post.time}</span></br>
                    <span class="bold-weight">${post.title}</span></br>
                </div>
                <img class="float-right" src=${post.image} width="85px" style="border-radius: 10px;"/>
            </div>
        </li>
    `);
}

export default PostSummaryItem;