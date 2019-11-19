const control = (function (ui, data) {

    $(function () {
        // Handler for .ready() called.

    //pozivanje f-je iz ui sa nizom is data

        function success(shows) {
            ui.display(shows)

        }
        data.fetchShows(success);


     
    });




  

})(ui, data);