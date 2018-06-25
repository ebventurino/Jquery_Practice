$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`

    // Use jQuery to get a reference to `song-list`


    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    $("#load-songs").click(function () {
        $.ajax("songs.json").then(songs => {
            console.log(songs)
            songs.songs
            for (let i = 0; i < songs.songs.length; i++) {
                $("#song")
                $("<h1>").text(songs.songs[i].title)
                    .attr("class", "song__title")
                    .appendTo($("#song"));

                $("<section>")
                    .text(`Performed by ${songs.songs[i].artist} on the album ${songs.songs[i].album}`)
                    .attr("class", "song__description")
                    .appendTo($("#song"));
                console.log(song)
            }

        })
    })
});

    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
