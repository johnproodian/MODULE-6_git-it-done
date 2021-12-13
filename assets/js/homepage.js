var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};


getUserRepos("johnproodian");


// thru 6.1.6; moving breexily thru the next 6.1's, probably onto 6.2