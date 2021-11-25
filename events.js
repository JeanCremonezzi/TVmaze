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
            console.log(resp);
            populateShows(resp);
            return;
        },
        error: (err) => {
            alert(`Error status ${err.status}`);
        }
    });
};

const populateShows = (shows) => {
    shows.map((show) => {
        let showCard = componentCard(show.show);

        $(".container").append(showCard);
    });
};

const componentCard = (show) => {
    let col = $("<div></div>");
    col.attr({"class": "col"});

    let card = $("<div></div>");
    card.attr({"class": "card"});
    let imgUrl = show.image;

    if (imgUrl != null) {
        card.css("background-image", `url('${imgUrl.medium}')`);
    };

    let layer = $("<div></div>");
    layer.attr({"class": "cardLayer"});
    
    let name = $(`<p>${show.name}</p>`);
    name.attr({"class": "cardTitle"});

    let summary = $(`<p>${show.summary}</p>`);
    summary.attr({"class": "cardSummary"});

    layer.append(name, summary);
    col.append(card, layer);

    return col;
}