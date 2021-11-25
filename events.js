$(() => {
    $(".btnSearch").on("click", () => {
        const searchTitle = $("input[name='inptSearch']").val();
        getShows(searchTitle);
    });
});

const getShows = (querySearch) => {
    $.ajax({
        method: "GET",
        url: ` https://api.tvmaze.com/search/shows?q=${querySearch}`,
        success: (resp) => {
            populateShows(resp);
            return;
        },
        error: (err) => {
            alert(`Error status ${err.status}`);
        }
    });
};

const populateShows = (shows) => {
    console.log(shows);
};