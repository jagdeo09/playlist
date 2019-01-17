/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Who Hurt You? ", "I Fall Apart ", "Sicko Mode ", "Ghost Town ", "Don't ", "Nice for What ", "MIA "];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://sslf.ulximg.com/image/750x750/cover/1539668433_59e4fc88bea1f2c91e35dee693e71b63.jpg/1eec1c6486425fbea18b39cc771c99a6/1539668433_aa9c6c1b86c1168c459a40883e3db2b5.jpg",
"https://directlyrics.com/img/upload/post-malone-i-fall-apart.jpg",
"https://static.spin.com/files/2018/08/travis-scott-astroworld-cover-art-1533679154-640x502.png",
"https://amp.businessinsider.com/images/5b115efd1ae6621a008b4711-750-562.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71RLkNIuZNL._SY355_.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Drake_Nice_for_What.png/220px-Drake_Nice_for_What.png", 
"https://i.ytimg.com/vi/9UwG87XMKc4/hqdefault.jpg"];
var artist = ["Daniel Caesar ","Post Malone", "Travis Scott", "Kanye West", "Bryson Tiller", "Drake", "Bad Bunny"];
var songlength = ["231", "", "", "", ""]



    // BELOW Use forEach Loop to display the data from each of your array's in the correct div



function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
