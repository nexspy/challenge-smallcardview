(function() {
    $(document).ready(function() {
        
        var btn_share = $(".sharebtn");

        btn_share.click(function(e) {
            e.preventDefault();

            $(this).toggleClass("active");
        });

    })
})();