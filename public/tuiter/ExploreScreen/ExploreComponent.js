import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="col-7 col-sm-10 col-md-10 col-lg-6">
            <div class="input-group mb-2">
                <span id="magnifying-glass" class="input-group-text grey-text-color">
                <i class="fas fa-search"></i></span>
                <input type="text" id="search-bar" class="form-control" placeholder="Search Twitter">
                <i id="settings" class="fas fa-cog"></i>
            </div>

            <ul class="nav nav-tabs mb-2">
                <li class="nav-item"><a class="nav-link active" href="for-you.html">For you</a></li>
                <li class="nav-item"><a class="nav-link" href="trending.html">Trending</a></li>
                <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                <li class="nav-item"><a class="nav-link" href="sports.html">Sports</a></li>
                <li class="nav-item d-sm-none d-md-block"><a class="nav-link" href="entertainment.html">Entertainment</a></li>
            </ul>
            <div class="card">
                <div class="wd-container">
                    <img src="../starship.jpeg" class="card-img-top">
                    <h2 class="center-image-text-overlay">SpaceX's Starship</h2>
                </div>
                ${PostSummaryList()}
            </div>
        </div>
    `);
}
export default ExploreComponent;