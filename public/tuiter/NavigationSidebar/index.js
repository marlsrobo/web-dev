const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></a>
            <a href="home.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Home</div>
                </div>
            </a>
            <a href="explore.html" class="list-group-item list-group-item-action active">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-hashtag"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Explore</div>
                </div>
            </a>
            <a href="notifications.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Notifications</div>
                </div>
            </a>
            <a href="messages.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Messages</div>
                </div>
            </a>
            <a href="bookmarks.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-bookmark"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Bookmarks</div>
                </div>
            </a>
            <a href="lists.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-list"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Lists</div>
                </div>
            </a>
            <a href="profile.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="col-10 d-none d-xl-block">Profile</div>
                </div>
            </a>
            <a href="more.html" class="list-group-item list-group-item-action">
                                <div class="row" style="flex-wrap: nowrap; align-items: center;">
                                    <div class="col-2 fa-stack">
                                        <i class="fas fa-circle fa-stack-1x" style="font-size: 1.3em"></i>
                                        <i class="fas fa-ellipsis-h fa-stack-1x grey-text-color" style="font-size: 0.7em"></i>
                                    </div>
                                    <div class="col-10 d-none d-xl-block">More</div>
                                </div>
                            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;