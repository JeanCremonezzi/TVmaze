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

    let modal = $("<div></div>");
    modal.attr({"class": "modal"});

    let showName = $(`<h1>${name}</h1>`);
    modal.append(showName);
    
    let overlay = $("<div></div>");
    overlay.attr({"class": "overlay"});

    overlay.click(() => {
        overlay.remove();
        $(".modal").remove();
        $("body").css("overflow", "auto");
    });

    episodes.map((episode) => {
        modal.append(rowEpisode(episode));
    });
    
    $("body").prepend(overlay, modal);
};

const rowEpisode = (episode) => {
    console.log(episode);
    let row = $("<div></div>");

    let urlImg = "";
    if (episode.image != null && episode.image.medium != "") {
        urlImg = episode.image.medium;
    };
    let img = $("<img>");
    img.attr({"src": urlImg});
    row.attr({"class": "episodeRow"});

    let info = $("<div></div>");
    info.attr({"class": "episodeInfo"});

    let name = $(`<span>${episode.name}</span>`);

    let season = $(`<small>S${episode.season} E${episode.number}</small>`);

    let dataExibicao = $(`<small>Exibido em ${formatDate(episode.airdate)}</small>`);

    info.append(name, season, dataExibicao);
    row.append(img, info);

    return row;
};

const formatDate = (date) => {
    date = new Date(date);

    const timezoneOffset = date.getTimezoneOffset();
    date.setTime(date.getTime() + (timezoneOffset * 60000));

    return(date.toLocaleDateString("pt-BR"));
};