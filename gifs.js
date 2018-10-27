

// button array
var gifs = ["cat", "hamster"];
console.log(gifs)



// query set up
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pEw1X1OTCoK8MgTCigxgxlwa9UrEx3NP&q=cheesy puffs&limit=10&offset=0&rating=PG&lang=en";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    var results = response.data
    console.log(results)
});

function makeButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#gifs-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < gifs.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("gif-btn");
        // Adding a data-attribute
        a.attr("data-name", movies[i]);
        // Providing the initial button text
        a.text(movies[i]);
        // Adding the button to the buttons-view div
        $("#gifs-view").append(a);
    }
}

// This function handles events where a movie button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#gif-input").val().trim();

    // Adding movie from the textbox to our array
    movies.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    makeButtons();
});


