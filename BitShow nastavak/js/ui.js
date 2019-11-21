const ui = (function () {
    const $container = $('.container');

    function getShowCards() {
        return $('.show-card');
    }


    function display(shows) {
        clear();

        const $header = $('<h1>')
            .text('Popular Shows')
            .addClass('header');
        $container.append($header);

        const $grid = $('<div>')
            .addClass('flex-container');

        shows.forEach(show => {
            const $card = $(`<div>`)
                .attr('data-show-id', show.id)
                .addClass('show-card')
                .addClass('style-div');

            const $img = $('<img>')
                .attr('src', show.image)
                .addClass('show-image')
            $card.append($img);

            const $title = $(`<p>`)
                .text(show.name)
                .addClass('p-style-yu');
            $card.append($title);

            $grid.append($card);
        });

        $container.append($grid);
    }

    /*WE DELETE DOM*/

    function clear() {
        $container.html('');
    }

    function renderShow(show) {
        clear();


        /*NEW SINGLE SHOW*/


        const $singleImage = $('<img>')
            .attr('src', show.image)
            .addClass('show-single-image')
        $container.append($singleImage);

        const $seasonInfo = $('<p>')
            .text("texxxx", show.premierDate)
            .addClass("season-text");

        console.log(show.seasons[1].premierDate);

        $container.append($seasonInfo);

        const season = show.seasons.map(function (sesObj) {

            return $(`<li>${sesObj.premierDate + ' - ' + sesObj.endDate}</li > `)



        })


        $container.append(season);













        const castList = show.cast.map(function (castObj) {
            return $(`< p > ${castObj.person}</p > `)
        })








    }

    return {
        display,
        renderShow,
        getShowCards
    }
})();