(function($) {
    $(document).ready(function() {
        
        var headerHTML = ('<div class=row><div class="col-xs-4 form-image hide-for-small no-padding-left"><img alt="Give Now"border=0 class=img-responsive src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/16THW-Header.png?v=1477607329000"></div><div class="col-lg-8 col-sm-7 header-main-copy"><div class=row><div class="col-sm-12 header-copy no-padding"><a href=http://www.stlabre.org/ ><img alt="St. Labre Indian School"border=0 class="img-responsive main-logo"src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/st-labre-form-logo.png?v=1462903841000"></a><h2>Make a difference in the lives of the children of&nbsp;St.&nbsp;Labre</h2></div></div><div class=row><div class="col-sm-12 header-copy-paragraph"><p>Your gift now provides our boys and girls with hope for a better, brighter future. Your generosity will have a lasting impact on the Indian children who are depending on us for the first-class education that will lift them out of poverty.</div></div></div></div>');
        
        var headerCSS = ('<style type="text/css">form{background:url(https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/background-banner-form.png?v=1464984273000) no-repeat #FFF}#mainHeader{margin:0}.form-image{height:100%;width:auto}.form-image img{position:relative!important}.header-main-copy{padding-right:20px;margin-left:10px}.header-copy-paragraph{padding-left:0}.header-copy-paragraph p{line-height:18px;padding-right:0;padding-left:0}.main-logo{margin-top:20px;width:308px}.header-copy h2{font-weight:700;font-size:21px;color:#d62a2a;line-height:26px;margin:0 0 10px}@media (max-width:1200px){.form-image{position:relative;height:80px}}@media(max-width:760px){#mainHeader{margin:0!important}.main-logo{width:auto;margin-top:0}.header-main-copy{padding-right:30px;padding-left:30px;margin-left:0}.header-copy-paragraph p{padding-right:0;padding-left:0}}</style>');
        
        
        var combined = headerHTML + ' ' + headerCSS;
        
        
        /* Append Header to Page */
        var headerContainer = document.getElementById('mainHeader');
        
        if(headerContainer){
            //Clear out header
            headerContainer.innerHTML = '';
        
            //Append Contents 
            headerContainer.innerHTML = combined;
        }
        
        
        
        /* Insert Additional JS Functions Here */
        
        
    });
})(jQuery);