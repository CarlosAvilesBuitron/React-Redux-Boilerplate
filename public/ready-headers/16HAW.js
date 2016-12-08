(function($) {
    $(document).ready(function() {
        
        var headerHTML = ('<div class=row><div class="col-sm-4 form-image hide-for-small no-padding-left"><img alt="Give Now"border=0 class=img-responsive src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/16HAW-Header.png?v=1476737084000"></div><div class="col-sm-8 header-main-copy"><div class=row><div class="col-sm-12 header-copy no-padding"><a href=http://www.stlabre.org/ ><img alt="St. Labre Indian School"border=0 class="img-responsive main-logo"src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/st-labre-form-logo.png?v=1462903841000"></a><h2>Help provide our girls and boys with hope for a bright future</h2></div></div><div class=row><div class="col-sm-12 header-copy-paragraph"><p>You can help provide our Native American children with the first-class education that gives them hope for a better, brighter future. Make a life-changing difference for our boys and girls with your generous gift.</div></div></div></div>');
        
        var headerCSS = ('<style type="text/css">form{background:url(https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/background-banner-form.png?v=1464984273000) no-repeat #FFF}#MainheaDer{margin:0}.form-image{height:100%;width:auto}.form-image img{position:relative!important}.header-main-copy{padding-right:20px;margin-left:0px}.header-copy-paragraph{padding-left:0}.header-copy-paragraph p{line-height:18px;padding-right:0;padding-left:0}.main-logo{margin-top:20px;width:308px}.header-copy h2{font-weight:700;font-size:21px;color:#d62a2a;line-height:26px;margin:0 0 10px}@media (max-width:1200px){.form-image{position:relative;height:80px}}@media(max-width:760px){.header-copy-paragraph p,.header-main-copy{padding-right:0;padding-left:0}#MainheaDer{margin:0!important}.main-logo{width:auto;margin-top:0}.header-main-copy{margin-left:0}}</style>');
        
        
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