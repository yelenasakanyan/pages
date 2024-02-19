async function fetchUserData() {
    const response = await fetch("https://api.github.com/users", {
        headers: {
            Authorization: "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"
        }
    });
    const users = await response.json();
    return users;
}

function drawUsers(users) {
    const usersList = document.getElementById("user-list-container");
    const userNodes = users.map(getUser);
    usersList.append(...userNodes);
}

function getUser(user) {
    const container = document.createElement("div");
    container.classList.add("user");

    const profilePic = document.createElement("img");
    profilePic.setAttribute("src", user.avatar_url);
    profilePic.classList.add("user-profile-picture");
    container.appendChild(profilePic);

    const login = document.createElement("h6");
    login.innerText = user.login;
    login.classList.add("user-login");
    const profileLink = document.createElement("a");
    profileLink.setAttribute("href", "https://github.com/" + user.login);
    profileLink.setAttribute("target", "_blank");
    profileLink.appendChild(login);
    container.appendChild(profileLink);

    const userDetailsContainer = getUserDetails(user);
    container.appendChild(userDetailsContainer);

    return container;
}


function getUserDetails(user) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    fetch(user.url, {
        headers: {
            Authorization: "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"
        }
    }).then((response) => response.json()).then((userDetails) => {
        if (!userDetails.twitter_username) {
            return;
        }

        const twitterLogo = document.createElement("img");
        twitterLogo.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png");
        twitterLogo.classList.add("user-details-twitter-logo");

        const twitterLogoLink = document.createElement("a");
        twitterLogoLink.setAttribute("href", "https://twitter.com/" + userDetails.twitter_username)

        twitterLogoLink.appendChild(twitterLogo);
        detailsContainer.appendChild(twitterLogoLink);
    });

    return detailsContainer;
}

fetchUserData().then(drawUsers);

const searchButton = document.getElementById("user-list-search-button");
searchButton.addEventListener("click", function(event) {
    const usersList = document.getElementById("user-list-container");
    usersList.innerHTML = "";
    const searchInput = document.getElementById("user-list-search");
    fetchUserData().then((users) => drawUsers(filterResults(searchInput.value, users)))
});

function filterResults(text, users) {
    return users.filter(user => user.login.startsWith(text))
}