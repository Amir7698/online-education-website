$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    $(window).on('scroll load', function(){
        
        $(this).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        
    if ($(window).scrollTop() > 30) {
        $('header').addClass('header-active');
        
    } else {
        $('header').removeClass('header-active');
    }

        $('section').each(function(){

        // grab the id of current section (home, about, contact...)
        var id = $(this).attr('id');

        // how many pixels has user scrolled from top right now
        var top = $(window).scrollTop();

        // how tall is this section (browser measures automatically)
        var height = $(this).height();

        // where does this section start on the page, minus 200 to trigger early
        // where does this section start on the page, minus 200 to trigger early
        // we need offset because without it we don't know WHERE on the page this section begins
        // offset().top gives us the distance from page top to this section's starting point
        var offset = $(this).offset().top - 200;

        if (top >= offset  && top < height + offset) {
            $('.navbar ul li a').removeClass('active');
            // find the nav link whose href matches the current section
            // we build the selector string dynamically using the id variable
            // id = "about" → '[href="#' + id + '"]' becomes '[href="#about"]'
            // without quotes around id → uses the VALUE of the variable
            // with quotes 'id' → would iterally search for href="#id" which is wrong
            $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }

    });
    });





});



// PAGE
// ─────────────────────────────────────────────────
// 0px ← page top

// $(window).scrollTop() = 0       ← user at top

// │
// │  #home section
// │  $(this).attr('id')     = "home"
// │  $(this).offset().top   = 0
// │  $(this).height()       = 800
// │  offset = 0 - 200       = -200
// │
// │  condition:
// │  scrollTop(0) >= -200   ✓
// │  scrollTop(0) < 800+(-200) = 600  ✓
// │  → HOME link gets active
// │
// 800px
// ─────────────────────────────────────────────────

// $(window).scrollTop() = 900     ← user scrolled here

// │
// │  #about section
// │  $(this).attr('id')     = "about"
// │  $(this).offset().top   = 800
// │  $(this).height()       = 600
// │  offset = 800 - 200     = 600
// │
// │  condition:
// │  scrollTop(900) >= 600  ✓
// │  scrollTop(900) < 600+600 = 1200  ✓
// │  → $('.navbar ul li a').removeClass('active')
// │  → ABOUT link gets active
// │
// 1400px
// ─────────────────────────────────────────────────

// $(window).scrollTop() = 1500    ← user scrolled here

// │
// │  #contact section
// │  $(this).attr('id')     = "contact"
// │  $(this).offset().top   = 1400
// │  $(this).height()       = 1000
// │  offset = 1400 - 200    = 1200
// │
// │  condition:
// │  scrollTop(1500) >= 1200  ✓
// │  scrollTop(1500) < 1200+1000 = 2200  ✓
// │  → $('.navbar ul li a').removeClass('active')
// │  → CONTACT link gets active
// │
// 2400px ← page bottom
// ─────────────────────────────────────────────────