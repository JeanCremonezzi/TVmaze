export function componentCard (show) {
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

    let txtSummary = show.summary;
    let summary = $("<p></p>");
    if (txtSummary != null) {
        summary.append(txtSummary);
    };
    summary.attr({"class": "cardSummary"});

    layer.append(name, summary);
    col.append(card, layer);

    return col;
}