! function(r) {
    "use strict";
    var l = r("body"),
        e = r("#preloader"),
        o = r("#navigation-toggle"),
        s = !1;

    function c() { return Math.max(r(window).width(), window.innerWidth) }

    function n(e) { var t = r(window).scrollTop(); return .5 * Math.abs(t - e) }

    function a() {
        var a, i = function() { for (var e, t, a = document.querySelectorAll("section"), i = 0, o = [], s = document.querySelector("#home").offsetHeight; e = a[i++];) { e.hasAttribute("id") && ("home" === (t = e.id) ? o.push({ id: t, offsetTop: e.offsetTop }) : o.push({ id: t, offsetTop: e.offsetTop + s })) } return o }(),
            o = 0;
        window.addEventListener("scroll", function() {
            if (!0 === s) return !1;
            var e = document.documentElement.scrollTop || document.body.scrollTop,
                t = document.documentElement.scrollTop || document.body.scrollTop;
            for (o in a < e ? e += Math.max(r(window).height(), window.innerHeight) : e < a && (e = t), i) e >= i[o].offsetTop && r('#navigation a[href="#' + i[o].id + '"]').length && (r("#navigation .active").removeClass("active"), r('#navigation a[href="#' + i[o].id + '"]').addClass("active"));
            a = t
        })
    }

    function i() {
        var a, i, o, s, n;
        l.hasClass("auto-hide-mobile-nav") && (c() < 1200 ? (n = s = o = i = a = 0, r(window).on("scroll", function(e) {
            var t = r(window).scrollTop();
            n++, a < t ? (o = 16, 1 === n && (s = t), i = t - s) : (o = 8, n = 0), 300 < i & 16 === o ? l.addClass("mobile-nav-hide") : l.removeClass("mobile-nav-hide"), a = t
        })) : l.removeClass("mobile-nav-hide"))
    }

    function t() {
        var e = r("#backtotop"),
            t = r(window).scrollTop();
        576 <= c() && 200 < t ? e.addClass("show") : e.removeClass("show")
    }

    function d() {
        var a, i, e = r("#page-cover");
        0 < e.length && (a = Math.max(r("#page-cover .page-cover-wrap").height(), r("#page-cover .page-cover-wrap").innerHeight()), e.offset().top, i = r("#page-cover section .container"), e.css("height", a), r(window).on("scroll", function() {
            var e, t = r(window).scrollTop();
            t < a && (e = (100 - 100 * t / a) / 100, i.css("opacity", e), 0)
        }))
    }

    function h() {
        var t, e;
        0 < r(".isotope-container").length && (null == (e = (t = r(".isotope-container")).data("column-width")) && (e = ".isotope-item"), t.isotope({ filter: "*", animationEngine: "best-available", resizable: !1, itemSelector: ".isotope-item", masonry: { columnWidth: e }, animationOptions: { duration: 750, easing: "linear", queue: !1 } }), t.imagesLoaded().progress(function() { t.isotope("layout") })), r("nav.isotope-filter ul a").on("click", function() { var e = r(this).attr("data-filter"); return t.isotope({ filter: e }), r("nav.isotope-filter ul a").removeClass("active"), r(this).addClass("active"), !1 })
    }

    function g() {
        var e = r(".slider");
        0 < e.length && (e.hasClass("slick-initialized") || e.slick({ slidesToShow: 1, infinite: !0, nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>', prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>' }), c() <= 1199 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-xl") && e.slick("unslick"), c() <= 991 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-lg") && e.slick("unslick"), c() <= 767 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-md") && e.slick("unslick"), c() <= 575 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-sm") && e.slick("unslick"))
    }
    r(window).on("load", function() { e.delay(700).fadeOut(500), a() }), r(document).ready(function() {
        var t, e;
        t = "site-header-open", l.on("click", "#navigation-toggle", function(e) { e.preventDefault(), r(this).hasClass("open") ? (r(this).removeClass("open"), l.removeClass(t)) : (r(this).addClass("open"), l.addClass(t)) }), l.on("click", ".header-overlay", function() { l.hasClass(t) && o.hasClass("open") && o.trigger("click") }), r(document).keyup(function(e) { 27 == e.keyCode && l.hasClass(t) && o.trigger("click") }), 0 < r("#backtotop").length && r("body").on("click", "#backtotop", function(e) { e.preventDefault(); var t = n(0); return r("html, body").animate({ scrollTop: 0 }, t, "easeOutQuad"), !1 }), r("body").on("click", "a.scrollto", function(e) { var t, a, i; "" !== this.hash && 0 < r(this.hash).length && (e.preventDefault(), s = !0, t = this.hash, i = n(a = r(t).offset().top), r(".page-cover " + t).length && (i = n(a = r(t).offset().top - r(window).scrollTop())), r('#navigation a[href="' + t + '"]').length && (r("#navigation .active").removeClass("active"), r('#navigation a[href="' + t + '"]').addClass("active")), r("html, body").stop().animate({ scrollTop: a }, i, "easeOutQuad", function() { window.location.hash = t, s = !1 }), o.hasClass("open") && o.trigger("click")) }), i(), a(), d(), (e = r(".bg-image-holder")).length && e.each(function() {
                var e = r(this).children("img").attr("src");
                r(this).css("background-image", "url(" + e + ")").children("img").hide()
            }), l.hasClass("slideshow-background") && l.vegas({ preload: !0, timer: !1, delay: 5e3, transition: "fade", transitionDuration: 1e3, slides: [{ src: "demo/images/image-15.jpg" }, { src: "demo/images/image-16.jpg" }, { src: "demo/images/image-10.jpg" }, { src: "demo/images/image-14.jpg" }] }), l.hasClass("slideshow-zoom-background") && l.vegas({ preload: !0, timer: !1, delay: 7e3, transition: "zoomOut", transitionDuration: 4e3, slides: [{ src: "demo/images/image-7.jpg" }, { src: "demo/images/image-16.jpg" }, { src: "demo/images/image-17.jpg" }, { src: "demo/images/image-15.jpg" }] }), l.hasClass("kenburns-background") && l.vegas({ preload: !0, transition: "swirlLeft2", transitionDuration: 4e3, timer: !1, delay: 1e4, slides: [{ src: "demo/images/image-1.jpg", valign: "center" }, { src: "demo/images/image-14.jpg", valign: "top" }, { src: "demo/images/image-17.jpg", valign: "center" }], walk: function(e) {} }), l.hasClass("mobile") && r(".video-wrapper").css("display", "none"), r("[data-gradient-bg]").each(function(e, t) {
                var a = r(this),
                    i = "granim-" + e,
                    o = (o = (o = a.attr("data-gradient-bg")).replace(" ", "")).replace(/'/g, '"');
                o = JSON.parse(o), a.prepend('<canvas id="' + i + '"></canvas>');
                new Granim({ element: "#" + i, name: "basic-gradient", direction: "left-right", opacity: [1, 1], isPausedWhenNotInView: !0, states: { "default-state": { gradients: o } } })
            }), g(), h(),
            function() {
                if (!r().featherlight) return console.log("Featherlight: featherlight not defined.");
                r.extend(r.featherlight.defaults, { closeIcon: '<i class="fas fa-times"></i>' }), r.extend(r.featherlightGallery.defaults, { previousIcon: '<i class="fas fa-chevron-left"></i>', nextIcon: '<i class="fas fa-chevron-right"></i>' }), r.featherlight.prototype.afterOpen = function() { l.addClass("featherlight-open") }, r.featherlight.prototype.afterContent = function() {
                    var e = this.$currentTarget.attr("data-title"),
                        t = this.$currentTarget.attr("data-text");
                    (e || t) && (this.$instance.find(".caption").remove(), e = e ? '<h4 class="title-gallery">' + e + "</h4>" : "", t = t ? '<p class="text-gallery">' + t + "</p>" : "", r('<div class="caption">').html(e + t).appendTo(this.$instance.find(".featherlight-content")))
                }, r.featherlight.prototype.afterClose = function() { l.removeClass("featherlight-open") }, r("a.open-popup-link").featherlight({ targetAttr: "href", variant: "featherlight-popup", afterOpen: function() { o.hasClass("open") && o.trigger("click") } })
            }(),
            function() {
                var e = r(".subscribe-form");
                if (e.length < 1) return;
                e.each(function() {
                    var e = r(this),
                        a = e.find(".subscribe-form-result");
                    e.find("form").validate({ submitHandler: function(t) { a.fadeOut(500), r(t).ajaxSubmit({ target: a, dataType: "json", resetForm: !0, success: function(e) { a.html(e.message).fadeIn(500), "error" != e.alert && (r(t).clearForm(), setTimeout(function() { a.fadeOut(500) }, 5e3)) } }) } })
                })
            }(),
            function() {
                // var e = r(".contact-form");
                // if (e.length < 1) return;
                // e.each(function() {
                //     var e = r(this),
                //         a = e.find(".contact-form-result");
                //     // e.find("form").validate({ submitHandler: function(t) { a.fadeOut(500), r(t).ajaxSubmit({ target: a, dataType: "json", success: function(e) { a.html(e.message).fadeIn(500), "error" != e.alert && (r(t).clearForm(), setTimeout(function() { a.fadeOut(500) }, 5e3)) } }) } })
                // })
            }(), r('[data-toggle="tooltip"]').tooltip(), r('[data-toggle="popover"]').popover(), 0 < r("#typed").length && new Typed("#typed", { stringsElement: "#typed-strings", typeSpeed: 40, backDelay: 3e3, loop: !0 })
    }), r(window).on("resize", function() { 1200 <= c() && (o.removeClass("open"), l.removeClass("site-header-open")), i(), a(), t(), d(), g(), h() }), r(window).on("scroll", function() { t() })
}(jQuery);