(function ($) {
    $.fn.serializeFormJSON = function () {
        let o = {},
            a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    String.prototype.stripSlashes = function () {
        return this.replace(/\\(.)/mg, "$1");
    };
    String.prototype.isValidEmail = function () {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(this).toLowerCase());
    };
    String.prototype.isValidPhone = function () {
        let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return reg.test(String(this));
    };

    function hexToRgba(hex, alfa = 1) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alfa+')';
        }
    }

    function isValidForm(form) {
        let correct = true;
        let data = form.parent().serializeFormJSON();
        form.parent().find('[name]').each(function () {
            $(this).removeClass('ays_poll_shake');
        });
        form.parent().find('[name]').each(function () {
            if ($(this).prop('required')) {
                let name = $(this).attr('name');
                let valid = true;
                switch ($(this).attr('type')) {
                    case 'email':
                        valid = data[name].isValidEmail();
                        break;
                    case 'tel':
                        valid = data[name].isValidPhone();
                        break;
                    default:
                        valid = !(!(name in data) || data[name] === "");
                        break;
                }
                if (!valid) {
                    $(this).addClass('ays_red_border').attr('title', 'This field is not valid!');
                    $(this).addClass('ays_poll_shake');
                    setTimeout(() => {
                        $(document).find('.user-form input[name]').each(function () {
                            $(this).removeClass('ays_poll_shake');
                        });
                    }, 1000);
                    correct = false;
                } else {
                    $(this).addClass('ays_green_border').removeAttr('title');
                }
            }
        });
        return correct;
    }

    function applyAnswer() {
        let newAnswer = $(this).parent().find('input[type="text"]').val();
        if (newAnswer == '') {
            return false;
        } else {
            $(this).hide();
            $(this).parent().removeClass('apm-add-answer');
            let answerDiv = $(this).parent();
            let form_id = answerDiv[0].classList[1].split('answer-')[1];
            let poll_id = $('#' + form_id).attr('data-id');
            let data = {
                action: 'ays_add_answer_poll',
                poll_id,
                new_answer: newAnswer
            };
            $.post({
                url: poll_maker_ajax_public.ajax_url,
                dataType: 'json',
                data,
                success(res) {
                    answerDiv.html(`
                        <input type='radio' checked name='answer' id='radio-new-${form_id}' value='${res.new_id}'>
                        <label for='radio-new-${form_id}'>
                           <span>${newAnswer}</span>
                        </label>
                    `);
                    setTimeout(() => {
                        $(`#radio-new-${form_id}`).trigger('change');
                    }, 250)
                },
                error() {
                    $(this).parent().find('input').val('')
                    $(this).text('OK').css({
                        width: '28px',
                        height: '28px'
                    });
                }
            });
        }
    }

    function socialBtnAdd(formId) {
        let socialDiv = $(`<div class="apm-social-btn"></div>`);
        socialDiv.append(`<a class='fb-share-button ays-share-btn ays-share-btn-branded ays-share-btn-facebook'
                                        title='Share on Facebook'>
                                        <span class='ays-share-btn-icon'></span>
                                        <span class='ays-share-btn-text'>Facebook</span>
                                    </a>`);
        socialDiv.append(`<a class='twt-share-button ays-share-btn ays-share-btn-branded ays-share-btn-twitter'
                                    title='Share on Twitter'>
                                    <span class='ays-share-btn-icon'></span>
                                    <span class='ays-share-btn-text'>Twitter</span>
                                </a>`);
        socialDiv.append(`<a class='linkedin-share-button ays-share-btn ays-share-btn-branded ays-share-btn-linkedin'
                                    title='Share on LinkedIn'>
                                    <span class='ays-share-btn-icon'></span>
                                    <span class='ays-share-btn-text'>LinkedIn</span>
                                </a>`);
        $(`#${formId}`).append(socialDiv);
        $(document).on('click', '.fb-share-button', function () {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
                'facebook-share-dialog',
                'width=650,height=450'
            );
            return false;
        });
        $(document).on('click', '.twt-share-button', function () {
            window.open('https://twitter.com/intent/tweet?url=' + window.location.href,
                'twitter-share-dialog',
                'width=650,height=450'
            );
            return false;
        });
        $(document).on('click', '.linkedin-share-button', function () {
            window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href,
                'linkedin-share-dialog',
                'width=650,height=450'
            );
            return false;
        });
        setTimeout(() => {
            $(`#${formId} .apm-social-btn`).css('opacity', '1');
        }, 1000);
    }

    function loadEffect(formId, onOff) {
        let form = $(`#${formId}`);
        let effect = form.attr('data-loading');
        switch (effect) {
            case 'blur':
                form.css({
                    WebkitFilter: onOff ? 'blur(5px)' : 'unset',
                    filter: onOff ? 'blur(5px)' : 'unset',
                });
                break;
            case 'load_gif':
                if (onOff) {
                    let loadSvg = '';
                    switch (form.attr('data-load-gif')) {
                        case 'plg_1':
                            loadSvg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <rect x="0" y="0" width="4" height="10" fill="#333">
                              <animateTransform attributeType="xml"
                                attributeName="transform" type="translate"
                                values="0 0; 0 20; 0 0"
                                begin="0" dur="0.8s" repeatCount="indefinite" />
                            </rect>
                            <rect x="10" y="0" width="4" height="10" fill="#333">
                              <animateTransform attributeType="xml"
                                attributeName="transform" type="translate"
                                values="0 0; 0 20; 0 0"
                                begin="0.2s" dur="0.8s" repeatCount="indefinite" />
                            </rect>
                            <rect x="20" y="0" width="4" height="10" fill="#333">
                              <animateTransform attributeType="xml"
                                attributeName="transform" type="translate"
                                values="0 0; 0 20; 0 0"
                                begin="0.4s" dur="0.8s" repeatCount="indefinite" />
                            </rect>
                        </svg>`;
                            break;
                        case 'plg_2':
                            loadSvg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="100%" height="100%" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.7s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.7s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.7s" repeatCount="indefinite" />
                            </rect>
                            <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2"    begin="0.15s" dur="0.7s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.7s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s"   dur="0.7s" repeatCount="indefinite" />
                            </rect>
                            <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.7s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.7s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.7s" repeatCount="indefinite" />
                            </rect>
                        </svg>`;
                            break;
                        case 'plg_3':
                            loadSvg = `<svg width="100%" height="100%" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill="#000">
                            <circle cx="12.5" cy="12.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="0s" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
                                <animate attributeName="fill-opacity"
                                 begin="100ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="52.5" cy="12.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="300ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="52.5" cy="52.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="600ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="92.5" cy="12.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="800ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="92.5" cy="52.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="400ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="12.5" cy="92.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="700ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="52.5" cy="92.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="500ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                            <circle cx="92.5" cy="92.5" r="12.5">
                                <animate attributeName="fill-opacity"
                                 begin="200ms" dur="0.9s"
                                 values="1;.2;1" calcMode="linear"
                                 repeatCount="indefinite" />
                            </circle>
                        </svg>`;
                            break;
                        case 'plg_4':
                            loadSvg = `<svg width="100%" height="100%" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg"  stroke="#000">
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(1 1)" stroke-width="2">
                                    <circle cx="5" cy="50" r="5">
                                        <animate attributeName="cy"
                                             begin="0s" dur="2.2s"
                                             values="50;5;50;50"
                                             calcMode="linear"
                                             repeatCount="indefinite" />
                                        <animate attributeName="cx"
                                             begin="0s" dur="2.2s"
                                             values="5;27;49;5"
                                             calcMode="linear"
                                             repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="27" cy="5" r="5">
                                        <animate attributeName="cy"
                                             begin="0s" dur="2.2s"
                                             from="5" to="5"
                                             values="5;50;50;5"
                                             calcMode="linear"
                                             repeatCount="indefinite" />
                                        <animate attributeName="cx"
                                             begin="0s" dur="2.2s"
                                             from="27" to="27"
                                             values="27;49;5;27"
                                             calcMode="linear"
                                             repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="49" cy="50" r="5">
                                        <animate attributeName="cy"
                                             begin="0s" dur="2.2s"
                                             values="50;50;5;50"
                                             calcMode="linear"
                                             repeatCount="indefinite" />
                                        <animate attributeName="cx"
                                             from="49" to="49"
                                             begin="0s" dur="2.2s"
                                             values="49;5;27;49"
                                             calcMode="linear"
                                             repeatCount="indefinite" />
                                    </circle>
                                </g>
                            </g>
                        </svg>`;
                            break;
                        case ('plg_default'):
                            loadSvg = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="100%" height="100%" viewBox="0 0 50 50" style="enable-background:new 0 0 50  50;" xml:space="preserve">
                                <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318, 0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0, 14.615, 6.543,14.615,14.615H43.935z">
                                    <animateTransform attributeType="xml"
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 25 25"
                                        to="360 25 25"
                                        dur="0.6s"
                                        repeatCount="indefinite"/>
                                </path>
                            </svg>`;
                            break;
                        default:
                            loadSvg = `<svg width="100%" height="100%" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#000">
                                        <rect y="10" width="15" height="120" rx="6">
                                            <animate attributeName="height"
                                                     begin="0.5s" dur="1s"
                                                     values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                     repeatCount="indefinite" />
                                            <animate attributeName="y"
                                                     begin="0.5s" dur="1s"
                                                     values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                     repeatCount="indefinite" />
                                        </rect>
                                        <rect x="30" y="10" width="15" height="120" rx="6">
                                            <animate attributeName="height"
                                                     begin="0.25s" dur="1s"
                                                     values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                     repeatCount="indefinite" />
                                            <animate attributeName="y"
                                                     begin="0.25s" dur="1s"
                                                     values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                     repeatCount="indefinite" />
                                        </rect>
                                        <rect x="60" width="15" height="140" rx="6">
                                            <animate attributeName="height"
                                                     begin="0s" dur="1s"
                                                     values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                     repeatCount="indefinite" />
                                            <animate attributeName="y"
                                                     begin="0s" dur="1s"
                                                     values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                     repeatCount="indefinite" />
                                        </rect>
                                        <rect x="90" y="10" width="15" height="120" rx="6">
                                            <animate attributeName="height"
                                                     begin="0.25s" dur="1s"
                                                     values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                     repeatCount="indefinite" />
                                            <animate attributeName="y"
                                                     begin="0.25s" dur="1s"
                                                     values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                     repeatCount="indefinite" />
                                        </rect>
                                        <rect x="120" y="10" width="15" height="120" rx="6">
                                            <animate attributeName="height"
                                                     begin="0.5s" dur="1s"
                                                     values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                                                     repeatCount="indefinite" />
                                            <animate attributeName="y"
                                                     begin="0.5s" dur="1s"
                                                     values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                                                     repeatCount="indefinite" />
                                        </rect>
                                    </svg>`;
                    }
                    let layer = $(`<div class="apm-opacity-layer-light">
                        <div class="apm-loading-gif">
                            <div class="apm-loader loader--style3">
                                ${loadSvg}
                            </div>
                        </div>
                    </div>`);
                    form.css({
                        position: 'relative'
                    });
                    form.append(layer);
                    layer.css('opacity', 1);
                } else {
                    $('.apm-opacity-layer-light').css('opacity', 0).empty();
                    setTimeout(() => {
                        $('.apm-opacity-layer-light').remove()
                    }, 500);
                }
                break;
            case '':
            case 'opacity':
                if (onOff) {
                    let layer = $('<div class="apm-opacity-layer-dark"></div>');
                    form.css({
                        position: 'relative'
                    });
                    form.append(layer);
                    layer.css('opacity', 1);
                } else {
                    $('.apm-opacity-layer-dark').css('opacity', 0);
                    setTimeout(() => {
                        $('.apm-opacity-layer-dark').remove()
                    }, 500);
                }
                break;
            default:
                if (onOff) {
                    let layer = $(`<div class="apm-opacity-layer-light">
                        <div class="apm-loading-gif"></div>
                    </div>`);
                    form.css({
                        position: 'relative'
                    });
                    form.append(layer);
                    layer.css('opacity', 1).find('.apm-loading-gif').css({
                        background: `url("${effect}") no-repeat center`,
                        backgroundColor: 'transparent',
                        backgroundSize: 'cover',
                    })
                } else {
                    $('.apm-opacity-layer-light').css('opacity', 0).empty();
                    setTimeout(() => {
                        $('.apm-opacity-layer-light').remove()
                    }, 500);
                }
                break;
        }
    }

    function sortDate(rateCount, votesSum, answers, formId) {
        let form = $(`#${formId}`);
        let sortable = form.attr('data-res-sort');
        let widths = [];
        for (let i = 0; i < rateCount; i++) {
            const answer = answers[i];
            widths[i] = {};
            widths[i].width = (answer.votes * 100 / votesSum).toFixed(0);
            widths[i].index = i;
        }
        if (sortable === "ASC") {
            for (let i = 0; i < rateCount; i++) {
                for (let j = (i + 1); j < rateCount; j++) {
                    if (Number(widths[i].width) > Number(widths[j].width)) {
                        let temp = widths[i].width;
                        widths[i].width = widths[j].width;
                        widths[j].width = temp;
                        temp = widths[i].index;
                        widths[i].index = widths[j].index;
                        widths[j].index = temp;
                    }
                }
            }
        } else if (sortable === "DESC") {
            for (let i = 0; i < rateCount; i++) {
                for (let j = (i + 1); j < rateCount; j++) {
                    if (Number(widths[i].width) < Number(widths[j].width)) {
                        let temp = widths[i].width;
                        widths[i].width = widths[j].width;
                        widths[j].width = temp;
                        temp = widths[i].index;
                        widths[i].index = widths[j].index;
                        widths[j].index = temp;
                    }
                }
            }
        }
        return widths;
    }

    let apmIcons = {
        star: "<i class='ays_poll_far ays_poll_fa-star'></i>",
        star1: "<i class='ays_poll_fas ays_poll_fa-star'></i>",
        emoji: [
            "<i class='ays_poll_far ays_poll_fa-dizzy'></i>",
            "<i class='ays_poll_far ays_poll_fa-smile'></i>",
            "<i class='ays_poll_far ays_poll_fa-meh'></i>",
            "<i class='ays_poll_far ays_poll_fa-frown'></i>",
            "<i class='ays_poll_far ays_poll_fa-tired'></i>",
        ],
        emoji1: [
            "<i class='ays_poll_fas ays_poll_fa-dizzy'></i>",
            "<i class='ays_poll_fas ays_poll_fa-smile'></i>",
            "<i class='ays_poll_fas ays_poll_fa-meh'></i>",
            "<i class='ays_poll_fas ays_poll_fa-frown'></i>",
            "<i class='ays_poll_fas ays_poll_fa-tired'></i>",
        ],
        hand: [
            "<i class='ays_poll_far ays_poll_fa-thumbs-up'></i>",
            "<i class='ays_poll_far ays_poll_fa-thumbs-down'></i>"
        ],
        hand1: [
            "<i class='ays_poll_fas ays_poll_fa-thumbs-up'></i>",
            "<i class='ays_poll_fas ays_poll_fa-thumbs-down'></i>"
        ],
    };

    var emailValivatePattern = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9\._-]+\.\w{2,}$/;
    function voting(formId, seeRes, type) {
        if ($(this).parent().parent().find('.apm-button-box .ays-poll-btn').length > 0) {
            formId = $(this).attr('data-form');
        }

        let form = $(`#${formId}`),
            btn = form.find('.apm-button-box .ays-poll-btn'),
            pollId = form.attr('data-id'),
            isRestart = form.attr('data-restart'),
            voteURLRedirection = form.attr('data-redirect-check'),
            voteRedirection = form.attr('data-redirection'),
            resultColorsRgba = form.attr('data-res-rgba'),
            data = form.parent().serializeFormJSON();

        var email_val = $('[check_id="'+formId+'"]');
        if (email_val.attr('type') !== 'hidden' && email_val.attr('check_id') == formId) {
            if(email_val.val() != ''){
                if (!(emailValivatePattern.test(email_val.val()))) {
                    email_val.addClass('ays_red_border');
                    email_val.addClass('ays_poll_shake');
                    if (!isValidForm(form)) return false;
                }else{
                    email_val.addClass('ays_green_border');
                }
            }
        }

        if (form.find(`.user-form-${formId}`).length > 0) {
            if (!isValidForm(form)) return false;
        }
        if (!('answer' in data) && !seeRes) return;
        if (seeRes && ('answer' in data)) delete data['answer'];
        loadEffect(formId, true);
        btn.off();
        data.action = 'ays_finish_poll';
        data.poll_id = pollId;
        $.post({
            url: poll_maker_ajax_public.ajax_url,
            dataType: 'json',
            data,
            success(res) {
                var answers_sounds = $("#"+formId).parent().find('.ays_poll_ans_sound').get(0);
                if(answers_sounds){
                    setTimeout(function() {
                        resetPlaying(answers_sounds);
                    }, 1000);
                }
                $("#"+formId+" .ays_poll_cb_and_a").hide();
                $("#"+formId+" .ays_poll_show_timer").hide();
                let delay = $('.ays-poll-main').find('div.box-apm[data-id="'+data.poll_id+'"]').attr('data-delay');
                if (voteRedirection == 1) {
                    delayCountDown(delay, form);
                }
                //Xcho Answer Result Table
                var answerMessages = JSON.parse(res.answer_message);
                var content = '';
                var resultContainer = $("#"+formId).parent().find('.box-apm');
                var answerImage = '';
                var answerText = '';
                var answerStyles = "display:flex;flex-direction:column;justify-content:center;align-items:center;";
                var imgSize = "max-width:400px;margin:10px auto;";
                var imgStyle = "width:100%;";

                // Answer result message 
                if(res.type == 'choosing' && res.styles['show_answer_message'] == 'on' && !seeRes && res.styles['hide_results'] != 1){
                    if(res['styles']['allow_multivote'] != 'undefined' && res['styles']['allow_multivote'] == 'on'){
                        if(Array.isArray(data.answer) && answerMessages != 'undefined'){
                            for(var i = 0; i <= data.answer.length-1; i++){
                                answerImage = answerMessages[data.answer[i]]['answer_image'] != 'undefined' ? answerMessages[data.answer[i]]['answer_image'] : '';
                                answerText = answerMessages[data.answer[i]]['answer'] != 'undefined' ? answerMessages[data.answer[i]]['answer'] : '';                                
                                content = "<div style="+answerStyles+">";
                                if(answerImage != ''){
                                    content += "<div style="+imgSize+">"+
                                                    "<img src='"+answerImage+"' style="+imgStyle+">"+
                                                "</div>";
                                }    
                                content += "<div>"+
                                        "<span>"+answerText+
                                        "</span>"+
                                        "</div>"+
                                "</div>";
                                resultContainer.append(content);
                            }
                        }
                        else{
                            answerImage = answerMessages[data.answer]['answer_image'] != 'undefined' ? answerMessages[data.answer]['answer_image'] : '';
                            answerText = answerMessages[data.answer]['answer'] != 'undefined' ? answerMessages[data.answer]['answer'] : '';
                            content = "<div style="+answerStyles+">";
                            if(answerImage != ''){
                                content += "<div style="+imgSize+">"+
                                                "<img src='"+answerImage+"' style="+imgStyle+">"+
                                            "</div>";
                            }    
                            content += "<div>"+
                                    "<span>"+answerText+
                                    "</span>"+
                                    "</div>"+
                            "</div>";
                            resultContainer.append(content);
                        }
                    }
                    else{
                        if(answerMessages != 'undefined'){
                            answerImage = typeof answerMessages[data.answer]['answer_image'] != 'undefined' ? answerMessages[data.answer]['answer_image'] : '';
                            answerText = typeof answerMessages[data.answer]['answer'] != 'undefined' ? answerMessages[data.answer]['answer'] : '';
                            content = "<div style="+answerStyles+">";
                            if(answerImage != ''){
                                content += "<div style="+imgSize+">"+
                                                "<img src='"+answerImage+"' style="+imgStyle+">"+
                                            "</div>";
                            }    
                            content += "<div>"+
                                    "<span>"+answerText+
                                    "</span>"+
                                    "</div>"+
                            "</div>";
                            resultContainer.append(content);
                        }
                    }
                    
                }
                // end result message

                loadEffect(formId, false);
                $(`.user-form-${formId}`).fadeOut();
                form.parent().parent().next().prop('disabled', false);
                $('.answer-' + formId).parent().remove(); //for removing apm-answer
                form.find('.ays_poll_passed_count').remove();
                $(`#${formId} .apm-button-box`).remove();
                form.find(`.user-form-${formId}`).remove();
                let hideRes = form.attr('data-res');
                if (hideRes != 0) {
                    $(`#${formId} .ays_question`).remove();
                    $(`#${formId} .hideResults`).css("display", "block");
                } else {
                    var showResView = res.styles.show_result_view;
                    var pieChartId = showResView == 'pie_chart' ? ' id="pollResultId'+data.poll_id+'" style="margin:auto;"' : '';
                    
                    form.append(`<div class="results-apm" `+pieChartId+` ></div>`);
                    let votesSum = 0;
                    let votesMax = 0;
                    for (const answer of res.answers) {
                        votesSum += +answer.votes;
                        if (+answer.votes > votesMax) {
                            votesMax = +answer.votes
                        }
                    }
                    const answer = res.answers;
                    const percentColor = form.attr('data-percent-color');
                    let widths = sortDate(res.answers.length, votesSum, answer, formId);

                    //show votes count 
                    let showVotesCounts = true;
                    if (res.styles.show_votes_count == 0) {
                        showVotesCounts = false;
                    }

                    //show result percent 
                    var showrespercent = true;
                    if (res.styles.show_res_percent == 0) {
                        showrespercent = false;
                    }
                    var aysPieChartData = new Array(['', '']);
                    for (var tox in widths) {
                        aysPieChartData.push([
                          answer[widths[tox].index].answer,
                          parseInt(answer[widths[tox].index].votes)
                        ]);
                    }
                    if (showResView == 'pie_chart') {
                        $('.results-apm').css('height','400px');
                        google.charts.load("current", {packages:["corechart"]});
                        google.charts.setOnLoadCallback(drawChart);                         

                        function drawChart() {
                            var dataGoogle = google.visualization.arrayToDataTable(aysPieChartData);

                            var options = {
                                legend: {position: 'right', textStyle: {color: res.styles.text_color}},
                                pieSliceText: 'label',                                
                                chartArea:{left:100,width:'100%'},
                                width: 500,
                                height: 400,
                                backgroundColor: { fill:'transparent' },
                            };

                            var chart = new google.visualization.PieChart(document.getElementById('pollResultId'+data.poll_id));
                            chart.draw(dataGoogle, options);
                        }

                        if (form.find('.redirectionAfterVote').attr('ays_res') != 'true') {
                            form.find('.redirectionAfterVote').show();
                        }
                        $(`#${formId} .ays_res_mess`).fadeIn();
                    }else{

                        var add_answer_not_show_up = (typeof(res.styles['add_answer_show_up']) != "undefined" && res.styles['add_answer_show_up'] !== null) && res.styles['add_answer_show_up'] == 0 ? true : false;

                        for (let i = 0; i < res.answers.length; i++) {
                            if (answer[i]['user_added'] == 1 && add_answer_not_show_up) {
                                continue;
                            }else{
                                if (answer[i]['show_user_added'] ==  0 && i != res.answers.length-1){
                                    continue;
                                }else{
                                    var rightAnswerCheck = '';                                

                                    if (Array.isArray(data.answer)) {
                                        rightAnswerCheck = (jQuery.inArray(res.answers[widths[i].index].id, data.answer) !== -1) ? 'ays_check' : '';
                                    }else{
                                        rightAnswerCheck = (data.answer == res.answers[widths[i].index].id) ? 'ays_check' : '';
                                    }

                                    var starAnswerCheck = (data.answer == res.answers[widths[i].index].id) ? apmIcons.star1 : apmIcons.star;
                                    var emojiAnswerCheck = (data.answer == res.answers[widths[i].index].id) ? apmIcons.emoji1 : apmIcons.emoji;
                                    var handAnswerCheck = (data.answer == res.answers[widths[i].index].id) ? apmIcons.hand1 : apmIcons.hand;
                                    const answer = res.answers;
                                    var current = '';

                                    current = (data['answer'] && data['answer'] == answer[widths[i].index].id) ? 'current' : '';
                                    
                                    let answerDiv = $(`<div class="answer-title flex-apm ${current}"></div>`),
                                        answerBar = $(`<div class="answer-percent" data-percent="${widths[i].width}"></div>`);
                                    if (resultColorsRgba) {
                                        answerBar.attr('style', 'background-color:'+hexToRgba(percentColor, widths[i].width/100)+'  !important; border: 1px solid ' + percentColor +' !important;');
                                    }
                                    if (form.hasClass('ays-coffee-theme') && form.hasClass('choosing-poll')) {
                                        answerDiv.html(`<div class='apm-percent-bar' style='width: ${widths[i].width}%'></div>`)
                                    }
                                    answerBar.css({
                                        width: '1%',
                                    });
                                    let answerText = '';
                                    switch (type) {
                                        case 'versus':
                                        case 'choose':                                
                                            answerText = $('<span class="answer-text '+rightAnswerCheck+'"></span>');
                                            let htmlstr = answer[widths[i].index].answer.stripSlashes();
                                            answerText.html(htmlstr);
                                            break;
                                        case 'rate':
                                            switch (res.view_type) {
                                                case 'emoji':
                                                    answerText = emojiAnswerCheck[res.answers.length / 2 + 1.5 - widths[i].index];
                                                    break;

                                                case 'star':
                                                    for (let j = 0; j <= widths[i].index; j++) {
                                                        answerText += starAnswerCheck;
                                                    }
                                                    break;
                                            }
                                            answerText = $(`<span class="answer-text">${answerText}</span>`);
                                            break;
                                        case 'vote':
                                            switch (res.view_type) {
                                                case 'hand':
                                                    answerText = handAnswerCheck[widths[i].index];
                                                    break;

                                                case 'emoji':
                                                    answerText = emojiAnswerCheck[2 * widths[i].index + 1];
                                                    break;
                                            }
                                            answerText = $(`<span class="answer-text">${answerText}</span>`);
                                            break;
                                    }
                                    let answerVotes = $('<span class="answer-votes"></span>');
                                    if (showVotesCounts) {
                                        answerVotes.text(answer[widths[i].index].votes);
                                    }
                                    answerDiv.append(answerText).append(answerVotes).appendTo(`#${formId} .results-apm`);
                                    $(`#${formId} .results-apm`).append(answerBar);
                                    $(`#${formId} .ays_res_mess`).fadeIn();
                                    
                                    if (form.find('.redirectionAfterVote').attr('ays_res') != 'true') {
                                        form.find('.redirectionAfterVote').show();
                                    }
                                }
                            }
                        }
                    }
                    setTimeout(() => {
                        $('.answer-percent').each(function () {
                            let percent = +$(this).attr('data-percent') || 1;
                            $(this).css({
                                width: percent + '%',
                            });
                            if (showrespercent) {
                                setTimeout(() => {
                                    $(this).text(`${percent > 5 ? percent + '%' : ''}`)
                                }, 200);
                            }
                        })
                        form.parents('.ays_poll_category-container').find('.ays-poll-next-btn').prop('disabled', false);
                        var vvv = form.parents('.ays_poll_category-container').data("var");
                        window['showNext'+vvv] = true;
                    }, 100);
                }
                if (form.attr('data-show-social') == 1) {
                    socialBtnAdd(formId)
                }
                if (isRestart == 'true') {
                    showRestart(formId);
                }
                if (voteURLRedirection == 1) {
                    let url = form.attr('data-url-href');
                    if (url !== '') {
                        $('.redirectionAfterVote').text('You will be redirected');
                        setTimeout(function() {
                            location.href = url
                        });
                    }else if(voteRedirection == 1){
                        let url = form.attr('data-href');
                        let delay = +form.attr('data-delay')
                        // form.append(redirectMessage)
                        setTimeout(function() {
                            location.href = url
                        }, delay * 1000);
                    }else{
                        $('.redirectionAfterVote').hide();
                    }
                }else{
                    voteURLRedirection = false;
                }
                if (voteRedirection == 1 && voteURLRedirection == false) {
                    let url = form.attr('data-href');
                    let delay = +form.attr('data-delay');
                    setTimeout(() => {
                        location.href = url
                    }, delay * 1000);
                }
            },
            error() {
                loadEffect(formId, false);
                $(`.user-form-${formId}`).fadeOut();
                form.parent().next().prop('disabled', false);
                $('.answer-' + formId).parent().parent().find('.apm-button-box').remove();
                $('.answer-' + formId).remove();
                btn.remove();
                $(`#${formId} .ays_question`).text("Something went wrong. Please reload page.")
            }
        });

    }

    function showRestart(formId) {
        let restartBtn = $('<div class="apm-button-box"><input type="button" class="btn ays-poll-btn btn-restart" onclick="location.reload()" value="Restart"></div>');
        $(`#${formId}`).append(restartBtn);
    }
   
    function testForm(e, btnId = 0, type = false) {
        if ($(this).attr('data-seeres') == 'true') {           
            $('.redirectionAfterVote').attr("ays_res", "true");
        }
        let btn = btnId === 0 ? $(this) : btnId,
            formId = btn.attr('data-form');
           
        if ($(`#${formId}`).find(`.user-form-${formId}`).length > 0) {
            var data = $(`#${formId}`).parent().serializeFormJSON();
            let seeRes = $(this).attr('data-seeRes');
            if (!('answer' in data) && !seeRes) {
                return;
            }else{
                $(`#${formId} .apm-answers`).fadeOut(0);
                $(`#${formId} .apm-button-box`).fadeOut(0);
                $(`#${formId} .ays_poll_passed_count`).fadeOut(0);
                $(`.user-form-${formId}`).fadeIn();

                $(document).on('click', `.user-form-${formId} .ays-poll-btn.choosing-btn`, function () {
                    voting(formId, seeRes, 'choose');
                });
                $(document).on('click', `.user-form-${formId} .ays-poll-btn.versus-btn`, function () {
                    voting(formId, seeRes, 'versus');
                });
                $(document).on('click', `.user-form-${formId} .ays-poll-btn.rating-btn`, function () {
                    voting(formId, seeRes, 'rate');
                });
                $(document).on('click', `.user-form-${formId} .ays-poll-btn.voting-btn`, function () {
                    voting(formId, seeRes, 'vote');
                });
            }
        } else {
            if ($(this).hasClass('choosing-btn') || type == 'choose') voting(formId, $(this).attr('data-seeRes'), 'choose');
            if ($(this).hasClass('versus-btn') || type == 'versus') voting(formId, $(this).attr('data-seeRes'), 'versus');
            if ($(this).hasClass('rating-btn') || type == 'rate') voting(formId, $(this).attr('data-seeRes'), 'rate');
            if ($(this).hasClass('voting-btn') || type == 'vote') voting(formId, $(this).attr('data-seeRes'), 'vote');
        }
    }

    $(document).on('change', '.apm-answers-without-submit input', function () {
        if ($(this).parent().hasClass('apm-rating')) {
            testForm('', $(this).parents('.box-apm').find('.apm-button-box input.ays_finish_poll'), 'rate')
        } else if ($(this).parent().hasClass('apm-voting')) {
            testForm('', $(this).parents('.box-apm').find('.apm-button-box input.ays_finish_poll'), 'vote')
        } else if ($(this).parent().hasClass('apm-choosing')) {
            testForm('', $(this).parents('.box-apm').find('.apm-button-box input.ays_finish_poll'), 'choose')
        } else if ($(this).parent().hasClass('apm-versus-answer')) {
            testForm('', $(this).parents('.box-apm').find('.apm-button-box input.ays_finish_poll'), 'versus')
        }
    });

    $(document).on('click', '.ays-poll-btn:not(.user-form .btn)', testForm);
    // $(document).on('click', 'label.apm-add-answer', addAnswer);
    $(document).on('click', 'input[type="button"].apm-new-answer-apply', applyAnswer);

    function delayCountDown(sec, form) {
        delaySec = parseInt(sec);
        let intervalSec = setInterval(() => {
            if (delaySec > 0) {
                delaySec--;
                form.find('p.redirectionAfterVote span').text(delaySec);
            } else {
                clearInterval(intervalSec);
            }
        }, 1000);
    }

    function resetPlaying(audelems) {
            audelems.pause();
            audelems.currentTime = 0;
    }

})(jQuery);