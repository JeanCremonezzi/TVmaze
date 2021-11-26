export function getEpisodes (show) {
    $.ajax({
        method: "GET",
        url: `https://api.tvmaze.com/shows/${show.id}/episodes`,
        success: (resp) => {
            modalEpisodes(show.name, resp);
        }
    });
}

const modalEpisodes = (name, episodes) => {
    $("body").css("overflow", "hidden");

    let modal = $(`<div>${name}</div>`);
    modal.attr({"class": "modal"});

    let overlay = $("<div></div>");
    overlay.attr({"class": "overlay"});

    overlay.click(() => {
        overlay.remove();
        $(".modal").remove();
        $("body").css("overflow", "auto");
    });
    
    $("body").prepend(overlay, modal);
};