(function($) {
    window.FontAwesomeConfig = {
        autoReplaceSvg: false
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1204514392893219',
            xfbml: true,
            version: 'v3.0'
        });
    };
    (function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $(document).ready(function() {
        let active = false;
        var emailValivatePattern = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9\._-]+\.\w{2,}$/;
        $(document).on('mouseleave', '.rating-poll .apm-answers', function() {
            if ($(this).find('label:not(.emoji)').length > 0) {
                let allRateLabels = $(this).find('label')
                if (active) {
                    let index = -1;
                    allRateLabels.each(function() {
                        if ($(this).hasClass('active-answer')) {
                            index = allRateLabels.index(this);
                        }
                    })
                    for (let i = 0; i < allRateLabels.length; i++) {
                        if (i > index) {
                            allRateLabels.eq(i).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                        } else {
                            allRateLabels.eq(i).find('i').removeClass('ays_poll_far').addClass('ays_poll_fas')
                        }
                    }
                } else {
                    allRateLabels.each(function() {
                        $(this).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                    })
                }
            }
        })
        $(document).on({
            mouseover() {
                let allRateLabels = $(this).parent().parent().find('label')
                let index = allRateLabels.index(this);
                allRateLabels.each(function() {
                    $(this).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                })
                for (let i = 0; i <= index; i++) {
                    allRateLabels.eq(i).find('i').removeClass('ays_poll_far').addClass('ays_poll_fas')
                }
            },
            click() {
                $(this).parent().parent().find('label').each(function() {
                    $(this).removeClass('active-answer')
                })
                $(this).addClass('active-answer')
                active = true;
            }
        }, '.rating-poll label:not(.emoji)')
        $(document).on('mouseleave', '.rating-poll .apm-answers', function() {
            if ($(this).find('label.emoji').length > 0) {
                let $this = $(this);
                if (active) {
                    let index = -1;
                    $this.find('label.emoji').each(function() {
                        if ($(this).hasClass('active-answer')) {
                            index = $this.find('label.emoji').index(this);
                        }
                    })
                    for (let i = 0; i < $this.find('label.emoji').length; i++) {
                        if (i != index) {
                            $this.find('label.emoji').eq(i).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                        } else {
                            $this.find('label.emoji').eq(i).find('i').removeClass('ays_poll_far').addClass('ays_poll_fas')
                        }
                    }
                } else {
                    $this.find('label.emoji').each(function() {
                        $(this).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                    })
                }
            }
        })
        $(document).on({
            mouseover() {
                let $this = $(this);
                let thisLabels = $this.parent().parent().find('label.emoji')
                let index = thisLabels.index(this)

                thisLabels.each(function() {
                    $(this).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                })
                thisLabels.eq(index).find('i').removeClass('ays_poll_far').addClass('ays_poll_fas')
            },
            click() {
                let thisLabels = $(this).parent().parent().find('label.emoji')
                thisLabels.each(function() {
                    $(this).removeClass('active-answer')
                })
                $(this).addClass('active-answer')
                active = true;
            }
        }, '.rating-poll label.emoji')

        $(document).on('mouseleave', '.voting-poll .apm-answers', function() {
            let index = -1;
            let labels = $(this).find('label')
            if (active) {
                labels.each(function() {
                    if ($(this).hasClass('active-answer')) {
                        index = labels.index(this);
                    }
                })
                for (let i = 0; i < labels.length; i++) {
                    if (i != index) {
                        labels.eq(i).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                    } else {
                        labels.eq(i).find('i').removeClass('ays_poll_far').addClass('ays_poll_fas')
                    }
                }
            } else {
                labels.each(function() {
                    $(this).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                })
            }
        })
        $(document).on({
            mouseover() {
                let $this = $(this);
                let index = $this.parent().parent().find('label').index(this);
                $this.parent().parent().find('label').each(function() {
                    $(this).find('i').removeClass('ays_poll_fas').addClass('ays_poll_far')
                })
                $this.parent().parent().find('label').eq(index).find('i').removeClass('ays_poll_far').addClass('ays_poll_fas')
            },
            click() {
                let $this = $(this);
                $this.parent().parent().find('label').each(function() {
                    $(this).removeClass('active-answer')
                })
                $(this).addClass('active-answer')
                active = true;
            }
        }, '.voting-poll label')

        $(document).on({
            mouseover() {
                let $this = $(this);
                $this.parent().addClass('hover-answer')
                $this.parent().parent().addClass('apm-no-after').children().not('.hover-answer').addClass('apm-w-0')
            },
            click() {
                let $this = $(this);
                $this.parent().parent().find('label').css({"border": "unset"});
                $this.css({"border": "1px solid"});
                $this.parent().parent().children().removeClass('active-answer')
                $this.parent().addClass('active-answer')
            },
            mouseleave() {
                let $this = $(this);
                $this.parent().parent().removeClass('apm-no-after').children().removeClass('apm-w-0')
                $this.parent().removeClass('hover-answer');
            }
        }, '.versus-poll label')

        $('.redirect-after-vote-url').on('click', function(e) {
            let x = $(this).attr('answers-url');
            if (x !== "") {
                let url = $(this).parent().parent().parent().attr('data-url-href', x);
            }
        });

        $('.poll_answers_sound').on('click', function(e) {
            var answers_sound = $(this).parents('.ays-poll-main').find('.ays_poll_ans_sound').get(0);            
            if(answers_sound){
                resetPlaying(answers_sound);
                setTimeout(function(){
                    answers_sound.play();
                }, 10);
            }
        });

        //Users limitations 
        if ($('.apm-redirection').length > 0) {
            $('.apm-redirection').each(function(e) {
                let url = $(this).find('p').attr('data-href')
                let delay = +$(this).find('p').attr('data-delay')
                setTimeout(() => {
                    let interval = setInterval(() => {
                        if (delay > 0) {
                            delay--;
                            $(this).find('p b').text(secsToText(delay))
                        } else {
                            clearInterval(interval);
                            location.href = url
                        }
                    }, 1000);
                }, 1500);
            })
        }

        function secsToText(sec) {
            /*** get the hours ***/
            let hours = ((sec / 3600) % 24).toFixed(0);
            if (hours > 0) hours = hours < 10 ? `0${hours}` : hours;
            else hours = '00';
            /*** get the minutes ***/
            let minutes = ((sec / 60) % 60).toFixed(0);
            if (minutes > 0) minutes = minutes < 10 ? `0${minutes}` : minutes;
            else minutes = '00';
            /*** get the seconds ***/
            let seconds = (sec % 60).toFixed(0);
            if (seconds > 0) seconds = seconds < 10 ? `0${seconds}` : seconds;
            else seconds = '00';

            return `${hours}:${minutes}:${seconds}`
        }

        //AV Countdown date
        var poll_id =  $(document).find('.box-apm').data('id');
        var countDownEndDate = $('#show_timer_countdown_'+poll_id).data('timer_countdown');
        var refreshButton = "<input type='button' id='ays_refresh_btn_"+poll_id+"' class='btn ays-poll-btn btn-restart' style='text-align:center;' value='Refresh'>";
        if (countDownEndDate != '' && countDownEndDate != undefined) {
            ays_countdown_datetime(countDownEndDate);
        }

        function ays_countdown_datetime(sec) {
            // Set the date we're counting down to
            // Update the count down every 1 second
            var distance = sec*1000;
            var x_int;
            x_int = setInterval(function() {
                  
                // Find the distance between now and the count down date
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  
                // Output the result in an element with id="demo"
                document.getElementById("show_timer_countdown_"+poll_id).innerHTML = days + " days " + hours + " hours "
                + minutes + " minutes " + seconds + " seconds ";
                  
                // If the count down is over, write some text 
                if (distance <= 0) {
                  clearInterval(x_int);
                  distance = 0;
                  document.getElementById("show_timer_countdown_"+poll_id).innerHTML = refreshButton;
                }

                if (distance > 0) {
                    distance -= 1000;
                }
            }, 1000);
        }

        $(document).on('click', '#ays_refresh_btn_'+poll_id, function(){
            location.reload();
        });

        $(document).on('input', '.ays_animated_xms', function(){
            $(document).find('.user-form input[name]').each(function () {
                $(this).removeClass('ays_poll_shake');
            });
                $(this).removeClass('ays_red_border');
                $(this).removeClass('ays_green_border');
            if ($(this).attr('type') !== 'hidden' && $(this).attr('name') != 'user-form-apm-email') {
                if($(this).val() == '' && $(this).attr('required')){
                    $(this).addClass('ays_red_border');
                }else{
                    $(this).addClass('ays_green_border');
                }                
            }else if($(this).attr('type') !== 'hidden'){
                if($(this).val() != ''){
                    if (!(emailValivatePattern.test($(this).val()))) {
                        $(this).addClass('ays_red_border');
                    }else{
                        $(this).addClass('ays_green_border');
                    }
                }
            }
        });

        $(document).on('input', '.amp-info-form-input-box input[name="apm_phone"]', function(){
            if ($(this).attr('type') !== 'hidden') {
                if($(this).val() != ''){
                    if (!(/^\d+$/.test($(this).val()))) {
                        $(this).addClass('ays_red_border');
                    }else{
                        $(this).addClass('ays_green_border');
                    }
                }
            }
        });

        function resetPlaying(audelems) {
                audelems.pause();
                audelems.currentTime = 0;
        }

        //Aro GLB
        $(document).find('.ays_poll_glb_table').DataTable();

    })

})(jQuery);