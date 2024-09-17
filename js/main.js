;
(function() {
    if (isMobile.phone) {
        $('html')
            .removeClass('pc-media')
            .addClass('sp-media');
    } else {
        $('html')
            .removeClass('sp-media')
            .addClass('pc-media');
    }
    if (navigator.platform.indexOf('Mac') != -1) {
        $('html')
            .addClass('mac');
    }
})();

;
(function() {
    if (isMobile.tablet) {
        var meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=1000');
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
})();

;
(function() {
    $(function() {
        var html = '' +
            '<div class="head-main">' +
            '    <h1 class="head-main__ttl">' +
            '        <a href="{{path}}index.html">' +
            '            <img class="head-main__logo" src="{{path}}image/head/logo_k.png" alt="Tokyo 7th 繧ｷ繧ｹ繧ｿ繝ｼ繧ｺ">' +
            '        </a>' +
            '    </h1>' +
            '    <div class="head-main__nav">' +
            '        <div class="head-main__menu sp-show">' +
            '            <a href="javascript:void(0)" data-menu-open>' +
            '                <img class="head-main__menu-img" src="{{path}}image/nav/nav_menu_sp.svg" alt="menu">' +
            '            </a>' +
            '        </div>' +
            '        <nav class="nav-main" data-menu-body>' +
            '            <div class="nav-main__bg" data-menu-bg>' +
            '                <p class="nav-main__logo sp-show"><a href="{{path}}index.html">Tokyo 7th 繧ｷ繧ｹ繧ｿ繝ｼ繧ｺ</a></p>' +
            '                <p class="nav-main__close sp-show">' +
            '                    <a href="javascript:void(0)" data-menu-close><img class="nav-main__close-img" src="{{path}}image/nav/nav_close_sp.svg" alt="close"></a>' +
            '                </p>' +
            '                <ul class="nav-main__menu">' +
            '                    <li class="nav-main__menu-news"><a href="{{path}}../news/category_all">NEWS</a></li>' +
            '                    <li class="nav-main__menu-intro"><a href="{{path}}intro/index.html">INTRODUCTION</a></li>' +
            '                    <li class="nav-main__menu-game" data-nav-slide>' +
            '                        <a href="{{path}}game/index.html">GAME</a>' +
            '                        <ul class="nav-sub nav-sub--game">' +
            '                            <li><a class="nav-sub__anc-story" href="{{path}}game/index.html">STORY</a></li>' +
            '                            <li><a class="nav-sub__anc-system" href="{{path}}game/system.html">SYSTEM</a></li>' +
            '                        </ul>' +
            '                    </li>' +
            '                    <li class="nav-main__menu-chara" data-nav-slide>' +
            '                        <a href="{{path}}character/index.html">CHARACTER</a>' +
            '                        <ul class="nav-sub nav-sub--chara">' +
            '                            <li><a class="nav-sub__anc-chara" href="{{path}}character/index.html">CHARACTER</a></li>' +
            '                            <li><a class="nav-sub__anc-unit" href="{{path}}character/unit.html">UNIT</a></li>' +
            '                        </ul>' +
            '                    </li>' +
            '                    <li class="nav-main__menu-release" data-nav-slide>' +
            '                        <a href="{{path}}release/index.html">RELEASE</a>' +
            '                        <ul class="nav-sub nav-sub--release">' +
            '                            <li><a class="nav-sub__anc-game" href="{{path}}release/index.html">IN GAME</a></li>' +
            '                            <li><a class="nav-sub__anc-cd" href="{{path}}release/cd.html">CD</a></li>' +
            '                            <li><a class="nav-sub__anc-dvd" href="{{path}}release/dvd.html">DVD/BD</a></li>' +
            '                        </ul>' +
            '                    </li>' +
            '                    <li class="nav-main__menu-event"><a href="{{path}}event/index.html">EVENT</a></li>' +
            '                    <li class="nav-main__menu-media" data-nav-slide>' +
            '                        <a href="{{path}}media/index.html">MEDIA</a>' +
            '                        <ul class="nav-sub nav-sub--media">' +
            '                            <li><a class="nav-sub__anc-movie" href="{{path}}media/index.html">MOVIE</a></li>' +
            '                            <li><a class="nav-sub__anc-book" href="{{path}}media/book.html">BOOK</a></li>' +
            // '                         <li><a class="nav-sub__anc-other" href="{{path}}media/other.html">OTHER</a></li>' +
            '                        </ul>' +
            '                    </li>' +
            '                </ul>' +
            '            </div>' +
            '        </nav>' +
            '    </div>' +
            '</div>';
        html = html.replace(/(\{\{path\}\})/g, PATH);
        $('[data-header-include]').html(html);

        //new mark new繝槭�繧ｯ繧剃ｻ倥￠縺溘＞邂�園縺ｮ繧ｳ繝｡繝ｳ繝医い繧ｦ繝医ｒ螟悶＠縺ｦ縺上□縺輔＞
        if (!isMobile.phone) {
            var newHtml = '<img class="nav-main__new" src="' + PATH + 'image/nav/new.png" alt="" />';
            // $(newHtml).appendTo('[class^=nav-main__menu-]'); //蜈ｨ驛ｨ
            // $(newHtml).appendTo('.nav-main__menu-news'); //NEWS
            // $(newHtml).appendTo('.nav-main__menu-intro'); //INTRODUCTION
            // $(newHtml).appendTo('.nav-main__menu-game'); //GAME
            // $(newHtml).appendTo('.nav-main__menu-chara'); //CHARACTER
            // $(newHtml).appendTo('.nav-main__menu-release'); //RELEASE
            // $(newHtml).appendTo('.nav-main__menu-event'); //EVENT
            // $(newHtml).appendTo('.nav-main__menu-media'); //MEDIA
        }

    });
})();

;
(function() {
    $(function() {
        var html = '' +
            '<div class="foot-main">' +
            '    <p class="foot-main__logo-wrap">' +
            '        <a href="http://www.donuts.ne.jp/" target="_blank">' +
            '            <img class="foot-main__logo" src="{{path}}image/foot/logo_donuts.png" alt="Donuts">' +
            '        </a>' +
            '    </p>' +
            '    <p class="foot-main__copy">&copy; 2014 DONUTS Co. Ltd. &copy; 2015 DONUTS Bangkok Co. Ltd.<br/>All Rights Reserved.</p>' +
            '    <ul class="foot-main__sns">' +
            '        <li>' +
            '            <a href="http://twitter.com/share?url=http://t7s.jp&via=t7s_staff&text=繧｢繧､繝峨Ν閧ｲ謌舌Μ繧ｺ繝���い繝峨�繝ｳ繝√Ε繝ｼ繧ｲ繝ｼ繝�縲ゝokyo 7th 繧ｷ繧ｹ繧ｿ繝ｼ繧ｺ" data-popup-window="640,360" target="_blank"><img class="foot-main__sns-tw" src="{{path}}image/foot/icon_twitter.png" alt="Twitter"></a>' +
            '        </li>' +
            '        <li>' +
            '            <a href="https://www.facebook.com/sharer/sharer.php?u=http://t7s.jp" data-popup-window="800,640" target="_blank"><img class="foot-main__sns-fb" src="{{path}}image/foot/icon_facebook.png" alt="Facebook"></a>' +
            '        </li>' +
            '        <li>' +
            '            <a href="https://page.line.me/437fyzga"><img class="foot-main__sns-line" src="{{path}}image/foot/icon_line.png" alt="LINE"></a>' +
            '        </li>' +
            '        <li>' +
            '            <a href="https://www.youtube.com/channel/UCz1sbEbWYHH0wZr2tHzD7Kg" target="_blank"><img class="foot-main__sns-Youtube" src="{{path}}image/foot/icon_youtube.png" alt="Youtube"></a>' +
            '        </li>' +
        '    </ul>' +
        '    <p class="foot-main__inquiry"><a href="https://www.donuts.ne.jp/contact/game/index.php" target="_blank">ติดต่อเรา</a></p><p class="foot-main__inquiry"><a href="https://www.donuts.ne.jp/privacy/" target="_blank">นโยบายความเป็นส่วนตัว</a></p>' +
        '</div>';
        html = html.replace(/(\{\{path\}\})/g, PATH);
        $('[data-footer-include]').html(html);
    });
})();



;
(function() {
    var menuOverlay = function() {
        var
            menuBody = '[data-menu-body]',
            btnOpen = '[data-menu-open]',
            btnClose = '[data-menu-close]',
            wrap = '[data-menu-wrap]';
        bg = '[data-menu-bg]';
        /* open */
        $(btnOpen)
            .off('click.menuOverlay')
            .on('click.menuOverlay', function() {
                $(menuBody)
                    .velocity('finish')
                    .velocity({ translateY: '0%' }, { duration: 400, display: 'block' });
                var winH = $(window).height(),
                    menuH = $(bg).height();
                if (winH > menuH) {
                    $(wrap).css({ height: winH, overflow: 'hidden' });
                    $(menuBody).css({ height: winH });
                } else {
                    $(wrap).css({ height: menuH, overflow: 'hidden' });
                }
                $(window)
                    .off('click.menuOverlay')
                    .on('click.menuOverlay', function(e) {
                        if (!$.contains($(bg)[0], e.target) && !$.contains($(btnOpen)[0], e.target)) {
                            e.preventDefault();
                            $(window).off('click.menuOverlay');
                            $(btnClose).trigger('click.menuOverlay');
                        }
                    });
            });
        /* close */
        $(btnClose)
            .off('click.menuOverlay')
            .on('click.menuOverlay', function(e) {
                e.preventDefault();
                $(menuBody)
                    .velocity('finish')
                    .velocity({ translateY: '-100%' }, { duration: 400, display: 'none' });
                $(wrap).css({ height: 'auto', overflow: 'auto' });
                $(menuBody).css({ height: 'auto' });
            }).trigger('click.menuOverlay');
        /* 蝗櫁ｻ｢縺励◆繧盈enu髫�縺� */
        $(window)
            .off('orientationchange.menuOverlay')
            .on('orientationchange.menuOverlay', function(e) {
                $(btnClose).trigger('click.menuOverlay');
            });
    };
    $(function() {
        if (isMobile.phone) {
            menuOverlay();
        }
    });
})();

;
(function() {
    var navSlide = function() {
        var navSub = '.nav-sub';
        $('[data-nav-slide]')
            .on('mouseenter.navSlide', function() {
                $(this).find(navSub)
                    .velocity('finish')
                    .velocity('slideDown', 'fast');
            })
            .on('mouseleave.navSlide', function() {
                $(this).find(navSub)
                    .velocity('finish')
                    .velocity('slideUp', 'fast');
            }).trigger('mouseleave.navSlide');
    };
    $(function() {
        if (!isMobile.phone) {
            navSlide();
        }
    });
})();

;
(function() {
    var scrollTo = function() {
        $('[data-scroll-to]').on('click.scrollTo', function(e) {
            var href = $(this).attr('href');
            $(window).scrollTo(href, 400);
            e.preventDefault();
        });
    };
    $(function() {
        scrollTo();
    });
})();

;
(function() {
    var iframeHeight = function() {
        $('[data-iframe-height]').each(function() {
            $(this)
                .removeAttr('height')
                .on('load.iframeHeight', function() {
                    var body = this.contentWindow.document.documentElement || this.contentWindow.document.body.parentNode || this.contentWindow.document.body;
                    $(this).height(0).show().height(body.scrollHeight);
                }).attr('src', $(this).attr('src'));
        });
    };
    $(function() {
        iframeHeight();
    });
})();

;
(function() {
    var nextSelectDown = function() {
        var arrowClass = 'btn-select-down__anc--up';
        $('[data-select-down]').on('click.nextSelectDown', function(e) {
            e.preventDefault();
            var $menu = $(this).next();
            if ($menu.is(':visible')) {
                $menu
                    .velocity('finish')
                    .velocity('slideUp', { duration: 'fast' });
                $(this).find('a').removeClass(arrowClass);
            } else {
                $menu
                    .velocity('finish')
                    .velocity('slideDown', { duration: 'fast' });
                $(this).find('a').addClass(arrowClass);
            }
        });
    };
    $(function() {
        if (isMobile.phone) {
            nextSelectDown();
        }
    });
})();

;
(function() {

    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head').item(0).appendChild(style);
    stylesheet = document.styleSheets.item(0);
    stylesheet.insertRule('[data-load-wrap] { opacity: 0; }', 0);

    var loadChange = function() {
        var loadCont = '[data-load-cont]',
            wrapCont = '[data-load-wrap]';
        $(loadCont).show();
        setTimeout(function() {
            $(window).trigger('load.loadChange');
        }, 1000);
        $(window).on('load.loadChange', function() {
            $(loadCont).hide();
            $(wrapCont).velocity({ 'opacity': 1 }, {
                duration: 500,
                complete: function() {
                    window.LOAD_COMPLETE = true;
                }
            });
        });
    };
    $(function() {
        loadChange();
    });
})();

;
(function() {

    window.LazyObject = function(parameter) {

        var param = $.extend({
            target: '[data-lazy-object]',
            dataObject: 'lazyObject',
            solo: 1,
            duration: 200
        }, parameter);

        var $obj = $(param.target),
            dataObj = param.dataObject,
            solo = param.solo,
            duration = param.duration,
            leng = $obj.length - 1,
            dArray = [];

        var init = function() {

            var style = document.createElement('style');
            style.type = 'text/css';
            document.getElementsByTagName('head').item(0).appendChild(style);
            stylesheet = document.styleSheets.item(0);
            stylesheet.insertRule(param.target + ' { opacity: 0; }', 0);

            scrollCheck();
        };

        var scrollCheck = function() {
            $obj.each(function(index, el) {
                var $self = $(this);
                dArray.push(makeAnime($self, index));
            });
            animeRun(dArray);
        };

        var animeRun = function(dArray) {
            var d = $.Deferred(),
                p = d.promise();
            $.each(dArray, function(index, task) {
                if (solo > 1) {
                    if ((index + 1) % solo === 0 || index >= leng) {
                        p = p.then(function() {
                            var temp = [];
                            for (var i = index + 1 - solo; i < index + 1; i++) {
                                temp.push(dArray[i]());
                            }
                            return $.when.apply(null, temp).promise();
                        });
                    }
                } else {
                    p = p.then(task);
                }
            });
            d.resolve();
            return p;
        };

        var makeAnime = function($target, index) {
            return function() {
                var d = $.Deferred();
                var timeoutFnc = function() {
                    var
                        pos = $target.offset().top,
                        wtop = $(window).scrollTop(),
                        wpos = wtop + $(window).height();

                    if (pos < wtop) {
                        $target
                            .velocity('stop')
                            .velocity({ opacity: 1 }, {
                                complete: function(elm) {
                                    $(elm).data(dataObj, 'end');
                                    d.resolve();
                                }
                            })
                            .velocity('finish');
                    }
                    if (pos < wpos && pos > wtop) {
                        if ($target.data(dataObj) !== 'end') {
                            $target.velocity({ opacity: 1 }, {
                                duration: duration,
                                complete: function(elm) {
                                    $(elm).data(dataObj, 'end');
                                    d.resolve();
                                }
                            });
                        }
                    } else {
                        if (d.state() === 'pending') {
                            setTimeout(function() {
                                timeoutFnc();
                            });
                        }
                    }
                };
                timeoutFnc();
                return d.promise();
            };

        };

        init();
    };
    $(function() {
        new LazyObject();
    });
})();

;
(function() {

    var tabChange = function() {
        var $parent = $('[data-tab-parent]'),
            dataParent = 'tabParent';

        var firstall = $parent.data('tab-firstall');

        $parent.each(function(index, el) {
            var $nav = $parent.find('[data-tab-nav]'),
                $cont = $parent.find('[data-tab-cont]'),
                dataCont = 'tabCont',
                $wrap = $parent.find('[data-tab-wrap]');

            var totalHeight = 0;
            $cont.each(function(index, el) {
                $(this).data(dataCont, $(this).height());
                totalHeight += $(this).height() + 40;
            });

            $nav.on('click.tabChange', function(e) {
                var index = $nav.index(this);
                if (firstall) {
                    var orig_index = index;
                    index -= 1;
                }

                e.preventDefault();
                $nav.removeClass($parent.data(dataParent));
                $(this).addClass($parent.data(dataParent));

                if (firstall && orig_index == 0) {
                    $wrap.velocity({ height: totalHeight }, 'slow');
                    console.log(totalHeight);
                    $cont.velocity('fadeOut', 'fast').velocity('fadeIn', 'slow');
                } else {
                    $wrap.velocity({ height: $cont.eq(index).data(dataCont) }, 'slow');
                    $cont
                        .velocity('fadeOut', 'fast')
                        .eq(index).velocity('fadeIn', 'slow');
                }
            }).eq(0).trigger('click.tabChange');
        });
    };

    $(window).on('load.tabChange', function() {
        tabChange();
    });
})();


;
(function() {
    var youtubeOpen = function() {
        var $obj = $('[data-youtube-open]'),
            options = {
                iframe: true,
                opacity: 0.6,
                scrolling: false,
                current: '{current} / {total}'
            };

        if (isMobile.phone) {
            // options.innerWidth = 272;
            // options.innerHeight = 153;
            options.innerWidth = 304;
            options.innerHeight = 171;
        } else {
            options.innerWidth = 720;
            options.innerHeight = 405;
        }

        $obj.colorbox(options);
    };

    $(function() {
        youtubeOpen();
    });
})();