;(function() {
    if(isMobile.phone){
        $('html')
        .removeClass('pc-media')
        .addClass('sp-media');
    }else{
        $('html')
        .removeClass('sp-media')
        .addClass('pc-media');
    }
})();
;(function() {

    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head').item(0).appendChild(style);
    stylesheet = document.styleSheets.item(0);
    stylesheet.insertRule('[data-load-wrap] { opacity: 0; }', 0);

    var loadChange = function(){
    var loadCont = '[data-load-cont]',
        wrapCont = '[data-load-wrap]';
        $(loadCont).show();
        setTimeout(function(){
            $(window).trigger('load.loadChange');
        }, 1000);
        $(window).on('load.loadChange', function(){
            $(loadCont).hide();
            $(wrapCont).velocity({'opacity': 1}, {
                duration: 500,
                complete: function(){
                    window.LOAD_COMPLETE = true;
                }
            });
        });
    };
    $(function(){
        loadChange();
    });
})();
;(function() {
    var CharaModalConsole = function(){

        if(isMobile.phone){
            $('.pc-show').remove();
        }else{
            $('.sp-show').remove();
        }

        var $idol = $('[data-chara-modal-visual="idol"]'),
            $normal = $('[data-chara-modal-visual="normal"]'),

            $idolL = $('[data-chara-modal-visual-l="idol"]'),
            $normalL = $('[data-chara-modal-visual-l="normal"]'),
            $idolS = $('[data-chara-modal-visual-s="idol"]'),
            $normalS = $('[data-chara-modal-visual-s="normal"]'),

            $change = $('[data-chara-modal-change]'),
            $rotate = $('[data-chara-modal-rotate]'),
            $close = $('[data-chara-modal-close]'),
            view = 'idol',

            startPos = { translateX: '30%', opacity: 0 },
            viewPos = { translateX: 0, opacity: 1 },
            endPos = { translateX: '-30%', opacity: 0 },

            startPosL = { translateX: '-30%', opacity: 0 },
            viewPosL = { translateX: 0, opacity: 1 },
            endPosL = { translateX: '-30%', opacity: 0 },
            startPosS = { translateX: '30%', opacity: 0 },
            viewPosS = { translateX: 0, opacity: 1 },
            endPosS = { translateX: '30%', opacity: 0 },

            inOpt = {duration:300, easing:'easeOutSine'},
            outOpt = {duration:300, easing:'easeOutSine'}
            ;

        var init = function(){
            start().then(function(){
                change();
                $change
                .off('click.charaModalConsole')
                .on('click.charaModalConsole', function(e){
                    e.preventDefault();
                    if(view !== 'anime'){
                        rotate();
                        change();
                    }
                });
            });
            $close.on('click.charaModalConsole', function(e){
                e.preventDefault();
                parent.$.colorbox.close();
            });
        };

        var start = function(){
            if(isMobile.phone){
                return $.when(
                    $idol.velocity(startPos, 0),
                    $idol.velocity(startPos, 0)
                );
            }else{
                return $.when(
                    $idolL.velocity(startPosL, 0),
                    $idolS.velocity(startPosS, 0),
                    $normalL.velocity(startPosL, 0),
                    $normalS.velocity(startPosS, 0)
                );
            }
        };

        var rotate = function(){
            $rotate.velocity({rotateZ:180}, {duration: 200}).promise()
            .then(function(){
                $rotate.velocity({rotateZ:0}).velocity('finish');
            });
        };

        var change = function(){
            if(isMobile.phone){
                if(view === 'idol'){
                    view = 'anime';
                    $.when(
                        $idol.velocity(viewPos, inOpt),
                        $normal.velocity(endPos, outOpt)
                    )
                    .then(function(){
                        return $normal.velocity(startPos, 0);
                    })
                    .then(function(){
                        view = 'normal';
                    });
                }else{
                    view = 'anime';
                    $.when(
                        $idol.velocity(endPos, outOpt),
                        $normal.velocity(viewPos, inOpt)
                    )
                    .then(function(){
                        return $idol.velocity(startPos, 0);
                    })
                    .then(function(){
                        view = 'idol';
                    });
                }
            }else{
                if(view === 'idol'){
                    view = 'anime';
                    $.when(
                        $idolL.velocity(viewPosL, inOpt),
                        $idolS.velocity(viewPosS, inOpt),
                        $normalL.velocity(endPosL, outOpt),
                        $normalS.velocity(endPosS, outOpt)
                    )
                    .then(function(){
                        return $.when(
                                    $normalL.velocity(startPosL, 0),
                                    $normalS.velocity(startPosS, 0)
                                );
                    })
                    .then(function(){
                        view = 'normal';
                    });
                }else{
                    view = 'anime';
                    $.when(
                        $idolL.velocity(endPosL, outOpt),
                        $idolS.velocity(endPosS, outOpt),
                        $normalL.velocity(viewPosL, inOpt),
                        $normalS.velocity(viewPosS, inOpt)
                    )
                    .then(function(){
                        return $.when(
                                    $idolL.velocity(startPosL, 0),
                                    $idolS.velocity(startPosS, 0)
                                );
                    })
                    .then(function(){
                        view = 'idol';
                    });
                }
            }
        };
        init();
    };
    $(function(){
        CharaModalConsole();
    });
})();