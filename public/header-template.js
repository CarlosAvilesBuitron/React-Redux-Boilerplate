(function($) {
    $(document).ready(function() {
        
        var headerHTML = ('<div class=row style="margin-left:0px; margin-right:0px;"><div class="col-sm-3 form-image hide-for-small no-padding-left"><img alt="Give Now"border=0 class=img-responsive src=https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/girl-banner-crop.png></div><div class=col-sm-9><div class=row><div class="col-sm-12 no-padding header-copy"><a href=http://www.stlabre.org/ ><img alt="St. Labre Indian School"border=0 class=img-responsive src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/st-labre-form-logo.png?v=1462903841000"></a><h1>Give Now</h1><h2>Help Keep the Miracle Alive</h2></div></div><div class=row><div class="col-sm-12 no-padding header-copy-paragraph"><p>By supporting St. Labre, you will have a lasting impact for the nearly 750 Native American boys and girls who are depending on us for the first-class education that will lift them out of poverty. Thanks to donors like you, these kids will have a chance at a better, brighter future.</div></div></div></div>');
        
        var headerCSS = ('<style type="text/css">form{background:url(https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/background-banner-form.png?v=1464984273000) no-repeat #FFF}</style>');
        
        
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