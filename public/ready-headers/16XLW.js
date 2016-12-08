(function($) {
    $(document).ready(function() {
        
        var headerHTML = ('<div class=row><div class="col-sm-4 form-image hide-for-small no-padding-left"><img alt="Give Now"border=0 class=img-responsive src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/16xlw-christmas.png?v=1473691548000"></div><div class="col-sm-8 header-main-copy"><div class=row><div class="col-sm-12 no-padding header-copy"><a href=http://www.stlabre.org/ ><img alt="St. Labre Indian School"border=0 class="img-responsive main-logo"src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/st-labre-form-logo.png?v=1462903841000"></a><h2>Help make hope possible for the<br class=hideMobile>Indian children of St. Labre</h2></div></div><div class=row><div class="col-sm-12 no-padding header-copy-paragraph"><p>Your gift now helps provide our boys and girls with real hope and possibility... as well as something special this Christmas.<br class=hideMobile><span class=featured-text>As our way of saying thank you for your generosity, let us send you the newest edition in our series of Christmas blankets.</span> It represents the warmth and love you extend to the Northern Cheyenne and Crow children who go to school and live at St. Labre.</div></div></div></div>');
        
        var headerCSS = ('<style type="text/css">form{background:url(https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/background-banner-form.png?v=1464984273000) no-repeat #FFF}#mainHeader{margin:0 -20px}.form-image{height:80px}.form-image img{position:relative!important}.header-main-copy{padding-right:20px;margin-left:-30px;padding-left:0}.header-copy-paragraph p{line-height:18px}.main-logo{margin-top:10px;width:308px}.header-copy h2{font-weight:700;font-size:21px;color:#d62a2a;line-height:26px;margin:10px 0}.featured-text{font-weight:700;color:#d93942}@media (max-width:1200px){.form-image{position:relative;height:80px}}@media(max-width:760px){#mainHeader{margin:0!important}.main-logo{width:auto;margin-top:0}.header-main-copy{padding-right:30px;padding-left:30px;margin-left:0}.hideMobile{display:none!important}}</style>');
        
        
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