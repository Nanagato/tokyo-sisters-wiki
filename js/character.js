;(function() {
    $(function(){
        var html = '' +
        '<div class="nav-next nav-next--character">'+
        '    <ul class="nav-next__list">'+
        '        <li class="nav-next__btn"><a class="nav-next__anc" href="{{path}}character/index.html">CHARACTER</a></li>'+
        '        <li class="nav-next__btn"><a class="nav-next__anc" href="{{path}}character/unit.html">UNIT</a></li>'+
        '    </ul>'+
        '</div>';
        html = html.replace(/(\{\{path\}\})/g, PATH);
        $('[data-character-nav-include]').append(html);
    });
})();

;(function() {

    var charaModalOpen = function(){
        var $target = $('[data-chara-gclass]'),
            dataGclass = 'charaGclass',
            options = {
                iframe: true,
                opacity  :0.6,
                scrolling: false,
                current: false,
                returnFocus: false
            };

        if(isMobile.phone){
            options.width = '100%';
            options.maxWidth = 344;
            options.height = 1300;
            options.reposition = false;
        }else{
            options.width = 1000;
            options.height = 760;
        }

        var init = function(){
            $target.each(function(){
                options.className = 'colorboxChara' + ' colorboxChara--' + $(this).data(dataGclass);
                $(this).colorbox(options);
            });
            $(window)
            .off('orientationchange.charaModalOpen')
            .on('orientationchange.charaModalOpen', function(){
                if(isMobile.phone){
                    $.colorbox.resize({height: options.height });
                }
            });
        };
        init();
    };
    $(function(){
        charaModalOpen();
    });
})();

;(function() {
    $(function(){
        new LazyObject({
            target : '[data-lazy-chara]',
            dataObject : 'lazyChara',
            solo : 1 ,
            duration: 200
        });
    });
})();
