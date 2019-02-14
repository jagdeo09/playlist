/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Who Hurt You? ", "I Fall Apart ", "Sicko Mode ", "Ghost Town ", "Don't ", "Madiba Riddim ", "MIA "];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://sslf.ulximg.com/image/750x750/cover/1539668433_59e4fc88bea1f2c91e35dee693e71b63.jpg/1eec1c6486425fbea18b39cc771c99a6/1539668433_aa9c6c1b86c1168c459a40883e3db2b5.jpg",
"https://directlyrics.com/img/upload/post-malone-i-fall-apart.jpg",
"https://static.spin.com/files/2018/08/travis-scott-astroworld-cover-art-1533679154-640x502.png",
"https://amp.businessinsider.com/images/5b115efd1ae6621a008b4711-750-562.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71RLkNIuZNL._SY355_.jpg",
"https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F4672f8523e0fbf7f7848185256e946f4.1000x1000x1.jpg", 
"https://i.ytimg.com/vi/9UwG87XMKc4/hqdefault.jpg"];
var artists = ["Daniel Caesar ","Post Malone", "Travis Scott", "Kanye West", "Bryson Tiller", "Drake", "Bad Bunny"];
var songlengths = ["231", "223", "312", "271", "198", "205", "210"];
var links = ["https://www.youtube.com/watch?v=D8Y8WOck8GA", "https://www.youtube.com/watch?v=7a66clRobKI", "https://www.youtube.com/watch?v=d-JBBNg8YKs", 
"https://www.youtube.com/watch?v=qatEUlouf0o", "https://www.youtube.com/watch?v=iNwMcscOPqg", "https://www.youtube.com/watch?v=74_2vrXIUDk", "https://www.youtube.com/watch?v=OSUxrSe5GbI"];


    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo(){
songs.forEach(function(song){
    $("#songs").append("<p>" + song + "</p>");
});

images.forEach(function(image){
    $("#images").append("<img src='" + image + "'>");
});

artists.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
});

songlengths.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
});

links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Listen </a>");
});

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $("#songs").add();
    $("#images").add();
    $("#artists").add();
    $("#lengths").add();
    $("#links").add();
}

$("#add").click(function() {
    var songN = $("#song").val();
    var imageU = $("#image").val();
    var artistN = $("#artist").val();
    var songL = $("#length").val();
    var link = $("#links").val();

    songs.push(songN);
    artists.push(artistN);
    images.push(imageU);
    songlengths.push(songL);
    links.push(link);
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

