// window.app = {
//     global: {
//
//         initInfiniteScroll: function() {
//             $('.images-container').jscroll({
//               debug (true),
//               // loadingHtml: '<img src="loading.gif" alt="Loading" /> Loading...',
//               padding: 20,
//               // nextSelector: 'a.jscroll-next:last',
//               contentSelector: 'li'
//             });
//         },
//
//         init: function() {
//             this.initInfiniteScroll();
//         }
//
//     }
// }

// Initialize all functions
$(function() {
    // app.global.init();

    $(window).on('load resize', imagesResize);

    function imagesResize() {
        if (!($('.item:nth-child(2)').length > 0)) {
            console.info('Absent');
            $('.item:nth-child(1)').addClass('singleItem');
        };
        if (!($('.item:nth-child(3)')).length > 0) {
            $('.item:nth-child(1)').addClass('twoItems');
            $('.item:nth-child(2)').addClass('twoItems');
        };

        var width = $('.item').width();
        var height = width - 25;
        $('.item').height(height);

        var widthThirdChild = $('.item:nth-child(3n)').width();
        var heightThirdChild = widthThirdChild - 25;
        $('.item:nth-child(3n)').height(heightThirdChild);

        var wHeight = $('body').height();
        var halfWHeight = wHeight / 2
        $('.images-container').css({
            'padding-top': halfWHeight + 'px',
            'transform': 'translateY(-' + height / 2 + 'px)'
        });

    }

})
