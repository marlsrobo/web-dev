const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 m-0">
                    <img class="round-image" src=${who.avatarIcon} width="50" height="50"/>
                </div>
                <div class="col-7 m-0 text-no-wrap">
                    <span class="bold-weight">${who.userName}<i class="fas fa-check-circle ps-1"></i></span>
                    </br>
                    <span class="grey-text-color">${who.handle}</span></br>
                </div>
                <div class="col-3 m-0">
                    <button class="btn btn-primary float-right">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;