import { componentCard } from "./components/card.js";

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
    $(".container").empty();

    if (shows.length > 0) {
        shows.map((show) => {
            let showCard = componentCard(show.show);
    
            $(".container").append(showCard);
        });

    } else {
        let rowVazio = $("<div>Nenhuma série foi encontrada!</div>");
        rowVazio.attr({"class": "rowVazio"});

        $(".container").append(rowVazio);
    }
};