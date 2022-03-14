import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <div>
            <div className="input-group mb-2">
                <span id="magnifying-glass" className="input-group-text grey-text-color">
                <i className="fas fa-search"></i></span>
                <input type="text" id="search-bar" className="form-control" placeholder="Search Twitter"/>
                <a href="../explore-settings.html"><i id="settings" className="fas fa-cog"></i></a>
            </div>

            <ul className="nav nav-tabs mb-2">
                <li className="nav-item"><a className="nav-link active" href="for-you.html">For you</a></li>
                <li className="nav-item"><a className="nav-link" href="trending.html">Trending</a></li>
                <li className="nav-item"><a className="nav-link" href="news.html">News</a></li>
                <li className="nav-item"><a className="nav-link" href="sports.html">Sports</a></li>
                <li className="nav-item d-sm-none d-md-block"><a className="nav-link" href="entertainment.html">Entertainment</a></li>
            </ul>
            <div className="card">
                <div className="wd-container">
                    <img src="starship.jpeg" className="card-img-top"/>
                    <h2 className="center-image-text-overlay">SpaceX's Starship</h2>
                </div>
                <PostSummaryList/>
            </div>
        </div>
    );
}
export default ExploreComponent;