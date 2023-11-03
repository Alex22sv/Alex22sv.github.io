const footer = document.getElementById("footer");   
footer.innerHTML = `
    <div class="container">
        <div class="row  footer">
            <div class="copy text-center">
                <p class="link"><span>&#169; Sitio web bajo licencia <a href="https://github.com/Alex22sv/SitioWeb/blob/main/LICENSE">GPL-3.0 LICENSE</a> | Plantilla por&nbsp;<a href="http://w3layouts.com/"> W3Layouts</a></span></p>
                <a href="#home" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;"> </span></a>
            </div>
        </div>
        <script type="text/javascript">
                $(function() {
                $('a[href*=#]:not([href=#])').click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                        scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                    }
                });
                });
        </script>
        <!---- start-smoth-scrolling---->		
    </div>
`
