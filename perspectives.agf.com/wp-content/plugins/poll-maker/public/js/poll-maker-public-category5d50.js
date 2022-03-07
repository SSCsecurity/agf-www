(function($){
	'use strict';
    $(document).ready(function(){
        var containers = $(document).find('.ays_poll_category-container');
        containers.each(function(){
            var $j = $(this).data('var');
            let catContainer = $('#'+window['catContainer'+$j]);
            catContainer.append(window['pollsGlobalPool'+$j][window['catIndex'+$j]]);
            let btn = $("<button id='catBtn" + $j + "' class='ays-poll-next-btn' type='button'> " + window['aysPollBtnText'+$j] + " </button>");
            if (catContainer.find('.apm-need-sign-in').length > 0 || !window['showNext'+$j]) {
                btn.prop('disabled', true).css(dataCss);
            } else {
            	btn.prop('disabled', !window['showNext'+$j]).css(dataCss);
            }
            $(document).on({
                click() {
                    if (window['showNext'+$j]) {
                        window['catIndex'+$j]++;
                        catContainer.empty().append(window['pollsGlobalPool'+$j][window['catIndex'+$j]]);
                        if (window['catIndex'+$j] != window['pollsGlobalPool'+$j].length-1) {
                            catContainer.append(btn);
                            if (catContainer.find('.apm-need-sign-in').length > 0 || !window['showNext'+$j]) {
                                btn.prop('disabled', true).css(dataCss);
                            } else {
                                btn.prop('disabled', !window['showNext'+$j]).css(dataCss);
                            }
                        }
                    } else {
                        window['catIndex'+$j] = 0;
                    }
                },
                mouseenter() {
                    $(this).css(hoverCss)
                },
                mouseleave() {
                    $(this).css(dataCss)
                },
            }, '#catBtn'+$j);
            if (window['catIndex'+$j] < window['pollsGlobalPool'+$j].length-1) {
                $('#'+window['catContainer'+$j]).append(btn);
            }

        });
    });
})(jQuery);