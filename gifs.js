

// button array
var gifs = ["cat", "hamster"];
console.log(gifs)


function displayMovieInfo() {
    // query set up
    var gif = $(this).attr("data-set");

    // Constructing a queryURL using the gif name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data
        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var gifDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var gifImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            gifImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the gifDiv
            gifDiv.append(p);
            gifDiv.append(gifImage);

            // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(gifDiv);
        }
    });
}

function makeButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#gif-buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < gifs.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // Creating and storing a div tag
        var gifDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var gifImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        gifImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the gifDiv
        gifDiv.append(p);
        gifDiv.append(gifImage);

        // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(gifDiv);
    }
}


// This function handles events where a movie button is clicked
$("#gif-create").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();

    // Adding movie from the textbox to our array
    gifs.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    makeButtons();
});


