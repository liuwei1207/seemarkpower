// iOS Viewport Fix 
(function (doc) {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

        function fix() {
            meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
            doc.removeEventListener(type, fix, true);
        }

        if ((meta = meta[meta.length - 1]) && addEvent in doc) {
            fix();
            scales = [.25, 1.6];
            doc[addEvent](type, fix, true);
        }
    }
}(document));

/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects || function (a, b) { function c(b) { var c; return b && b.constructor == Array && b.length == 3 ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent : e[a.trim(b).toLowerCase()] } function d(b, d) { var e; do { e = (a.curCSS || a.css)(b, d); if (e != "" && e != "transparent" || a.nodeName(b, "body")) break; d = "backgroundColor" } while (b = b.parentNode); return c(e) } function h() { var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, b = {}, c, d; if (a && a.length && a[0] && a[a[0]]) { var e = a.length; while (e--) c = a[e], typeof a[c] == "string" && (d = c.replace(/\-(\w)/g, function (a, b) { return b.toUpperCase() }), b[d] = a[c]) } else for (c in a) typeof a[c] == "string" && (b[c] = a[c]); return b } function i(b) { var c, d; for (c in b) d = b[c], (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c]; return b } function j(a, b) { var c = { _: 0 }, d; for (d in b) a[d] != b[d] && (c[d] = b[d]); return c } function k(b, c, d, e) { typeof b == "object" && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {}); if (typeof c == "number" || a.fx.speeds[c]) e = d, d = c, c = {}; return a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete, [b, c, d, e] } function l(b) { return !b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1 } a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (b, e) { a.fx.step[e] = function (a) { a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")" } }); var e = { aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0], transparent: [255, 255, 255] }, f = ["add", "remove", "toggle"], g = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; a.effects.animateClass = function (b, c, d, e) { return a.isFunction(d) && (e = d, d = null), this.queue(function () { var g = a(this), k = g.attr("style") || " ", l = i(h.call(this)), m, n = g.attr("class") || ""; a.each(f, function (a, c) { b[c] && g[c + "Class"](b[c]) }), m = i(h.call(this)), g.attr("class", n), g.animate(j(l, m), { queue: !1, duration: c, easing: d, complete: function () { a.each(f, function (a, c) { b[c] && g[c + "Class"](b[c]) }), typeof g.attr("style") == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k), e && e.apply(this, arguments), a.dequeue(this) } }) }) }, a.fn.extend({ _addClass: a.fn.addClass, addClass: function (b, c, d, e) { return c ? a.effects.animateClass.apply(this, [{ add: b }, c, d, e]) : this._addClass(b) }, _removeClass: a.fn.removeClass, removeClass: function (b, c, d, e) { return c ? a.effects.animateClass.apply(this, [{ remove: b }, c, d, e]) : this._removeClass(b) }, _toggleClass: a.fn.toggleClass, toggleClass: function (c, d, e, f, g) { return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? { add: c } : { remove: c }, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{ toggle: c }, d, e, f]) }, switchClass: function (b, c, d, e, f) { return a.effects.animateClass.apply(this, [{ add: c, remove: b }, d, e, f]) } }), a.extend(a.effects, { version: "1.8.24", save: function (a, b) { for (var c = 0; c < b.length; c++) b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]]) }, restore: function (a, b) { for (var c = 0; c < b.length; c++) b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c])) }, setMode: function (a, b) { return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b }, getBaseline: function (a, b) { var c, d; switch (a[0]) { case "top": c = 0; break; case "middle": c = .5; break; case "bottom": c = 1; break; default: c = a[0] / b.height } switch (a[1]) { case "left": d = 0; break; case "center": d = .5; break; case "right": d = 1; break; default: d = a[1] / b.width } return { x: d, y: c } }, createWrapper: function (b) { if (b.parent().is(".ui-effects-wrapper")) return b.parent(); var c = { width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float") }, d = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), e = document.activeElement; try { e.id } catch (f) { e = document.body } return b.wrap(d), (b[0] === e || a.contains(b[0], e)) && a(e).focus(), d = b.parent(), b.css("position") == "static" ? (d.css({ position: "relative" }), b.css({ position: "relative" })) : (a.extend(c, { position: b.css("position"), zIndex: b.css("z-index") }), a.each(["top", "left", "bottom", "right"], function (a, d) { c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto") }), b.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), d.css(c).show() }, removeWrapper: function (b) { var c, d = document.activeElement; return b.parent().is(".ui-effects-wrapper") ? (c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b }, setTransition: function (b, c, d, e) { return e = e || {}, a.each(c, function (a, c) { var f = b.cssUnit(c); f[0] > 0 && (e[c] = f[0] * d + f[1]) }), e } }), a.fn.extend({ effect: function (b, c, d, e) { var f = k.apply(this, arguments), g = { options: f[1], duration: f[2], callback: f[3] }, h = g.options.mode, i = a.effects[b]; return a.fx.off || !i ? h ? this[h](g.duration, g.callback) : this.each(function () { g.callback && g.callback.call(this) }) : i.call(this, g) }, _show: a.fn.show, show: function (a) { if (l(a)) return this._show.apply(this, arguments); var b = k.apply(this, arguments); return b[1].mode = "show", this.effect.apply(this, b) }, _hide: a.fn.hide, hide: function (a) { if (l(a)) return this._hide.apply(this, arguments); var b = k.apply(this, arguments); return b[1].mode = "hide", this.effect.apply(this, b) }, __toggle: a.fn.toggle, toggle: function (b) { if (l(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments); var c = k.apply(this, arguments); return c[1].mode = "toggle", this.effect.apply(this, c) }, cssUnit: function (b) { var c = this.css(b), d = []; return a.each(["em", "px", "%", "pt"], function (a, b) { c.indexOf(b) > 0 && (d = [parseFloat(c), b]) }), d } }); var m = {}; a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, b) { m[b] = function (b) { return Math.pow(b, a + 2) } }), a.extend(m, { Sine: function (a) { return 1 - Math.cos(a * Math.PI / 2) }, Circ: function (a) { return 1 - Math.sqrt(1 - a * a) }, Elastic: function (a) { return a === 0 || a === 1 ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin(((a - 1) * 80 - 7.5) * Math.PI / 15) }, Back: function (a) { return a * a * (3 * a - 2) }, Bounce: function (a) { var b, c = 4; while (a < ((b = Math.pow(2, --c)) - 1) / 11); return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((b * 3 - 2) / 22 - a, 2) } }), a.each(m, function (b, c) { a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) { return 1 - c(1 - a) }, a.easing["easeInOut" + b] = function (a) { return a < .5 ? c(a * 2) / 2 : c(a * -2 + 2) / -2 + 1 } }) }(jQuery);;

// Global
var mobileDevice;
var oldIE = $.browser.msie && $.browser.version < 9.0;

$(document).ready(function () {
    mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

    // Global Search
    $("div#header input#txtSearch").keyup(function (event) {
        var keyCode = event.which;

        if (keyCode === 13) {
            event.preventDefault();

            eval($(this).siblings("a.search").attr("href"));
        }
    });

    // Primary Navigation
    {
        function PrimaryNavigation_Resize() {
            if ($(window).width() < 990) {
                if ($("a#mobileNav").hasClass("expanded")) {
                    $("div#overlay").show();

                    $("div#primaryNav ul.primaryNav").height("auto");

                    var height = $("div#primaryNav ul.primaryNav.expanded li.selected > div.mobileNav, div#primaryNav ul.primaryNav.expanded li.selected").filter(":last").height();

                    $("div#primaryNav ul.primaryNav").height(height);

                    $("div#header div.search").show();
                }
                else
                    $("div#header div.search").hide();
            }
            else {
                $("div#overlay").hide();

                $("div#primaryNav ul.primaryNav").height("auto");
                $("div#primaryNav ul.primaryNav > li").removeClass("hover");

                $("div#header div.search").show();
            }
        }

        // Desktop hover
        if (!mobileDevice) {
            $("div#primaryNav ul.primaryNav > li").hover(function () {
                if ($(window).width() > 989)
                    $("div#overlay").show();
            }, function () {
                if ($(window).width() > 989)
                    $("div#overlay").hide();
            });
        }
        else {
            $("div#primaryNav ul.primaryNav > li > a").click(function (event) {
                if ($(window).width() > 989) {
                    $(this).parent("li").siblings("li").removeClass("hover");

                    if (!$(this).parent("li").hasClass("hover")) {
                        event.preventDefault();

                        $("div#overlay").show();

                        $(this).parent("li").addClass("hover");
                    }
                }
            });

            $("div#header, div#overlay").on("click", function (event) {
                if ($(window).width() > 989) {
                    if ($(event.target).closest("div#primaryNav ul.primaryNav").size() == 0) {
                        $("div#overlay").hide();

                        $("div#primaryNav ul.primaryNav > li").removeClass("hover");
                    }
                }
            });
        }

        // Generate mobile navigation elements
        $("div#primaryNav ul.primaryNav > li").each(function () {
            var section = $(this);
            var dropdown = section.children("div.dropdown");

            if (dropdown.size() > 0) {
                var mobileNav = $('<div class="mobileNav mobile-only"><ul class="clearfix"></ul></div>');

                dropdown.find("div.column").each(function () {
                    var secondLevelHeading = $(this).children("h4:first");

                    if (secondLevelHeading.size() > 0) {
                        var secondLevel = $('<li></li>');

                        secondLevel.append(secondLevelHeading.clone());

                        var thirdLevel = secondLevelHeading.parents("div.column:first").children("ul:first");

                        if (thirdLevel.size() > 0) {
                            secondLevel.append(thirdLevel.clone().addClass("clearfix"));

                            mobileNav.children("ul").prepend(secondLevel);
                        }
                    }
                });

                $(this).append(mobileNav);
            }

            section.children("div.mobileNav").prepend('<h4>' + section.children("a:first").clone()[0].outerHTML + '</h4>');
        });

        // Mobile menu toggle
        $("a#mobileNav").on("click", function (event) {
            event.preventDefault();

            $(this).toggleClass("expanded");

            var expanded = $(this).hasClass("expanded");

            $("div#primaryNav ul.primaryNav").toggleClass("expanded", expanded);
            $("div#header div.search").toggle(expanded);
            $("div#overlay").toggle(expanded);

            if (!expanded) {
                $("div#primaryNav ul.primaryNav").height("auto");
                $("div#primaryNav ul.primaryNav li, div#primaryNav ul.primaryNav div.column").removeClass("selected");
                $("a#mobileNav-back").hide();
            }
        });

        // Mobile click event
        $("h4, a", "div#primaryNav").on("click", function (event) {
            if ($(window).width() < 990) {
                if ($(this).siblings("div.mobileNav").size() > 0 || ($(this).parent("h4").parent("li.selected").size() == 0 && $(this).parents("li:first").children("ul").size() > 0)) {
                    event.preventDefault();

                    $(this).parents("li:first").addClass("selected");

                    PrimaryNavigation_Resize();

                    $("a#mobileNav-back").show();
                }
            }
        });

        // Adjusting mobile height and overlay on window resize
        $(window).on("resize", PrimaryNavigation_Resize);

        // Mobile back button
        $("a#mobileNav-back").on("click", function (event) {
            event.preventDefault();

            $("ul.primaryNav li.selected, ul.primaryNav div.column.selected").filter(":last").removeClass("selected");

            if ($("ul.primaryNav li.selected, ul.primaryNav div.column.selected").size() == 0)
                $("a#mobileNav-back").hide();

            PrimaryNavigation_Resize();
        });
    }

    // Textbox default values
    {
        $("input:text, textarea").each(function () {
            var title = $(this).prop("title");

            if (title !== null && title !== "" && $.trim($(this).val()) === "" || $(this).val() === title) {
                $(this).addClass("default");

                $(this).val(title);
            }

            $(this).focus(function () {
                $(this).removeClass("default");

                var title = $(this).prop("title");

                if (title !== null && title !== "" && $(this).val() === title)
                    $(this).val("");
            });

            $(this).blur(function () {
                var title = $(this).prop("title");

                if (title !== null && title !== "" && $.trim($(this).val()) === "") {
                    $(this).addClass("default");
                    $(this).val(title);
                }
            });
        });
    }

    // Mobile Tabbed Navigation
    $("div#template select.mobile-navigation").change(function () {
        var url = $(this).val();

        if (url !== undefined && $.trim(url) !== "")
            window.location.href = url;
    });

    // Expand/Collapse
    {
        // Toggle
        $(document).on("click.expand-collapse", "div.expand-collapse p.toggle a", function (event) {
            event.preventDefault();

            $(this).parents("div.expand-collapse:first").toggleClass("collapsed");
        });

        // Initialize
        $("div.expand-collapse").addClass("collapsed");
    }

    // Search Filters
    {
        // Handle Return
        $("div.search-filters div.search input[type='text']").keyup(function (event) {
            var keyCode = event.which;

            if (keyCode === 13) {
                event.preventDefault();

                eval($(this).siblings("a.search").attr("href"));
            }
        });

        // Expand/Collapse
        {
            function SearchFilters_EnableExpandCollapse() {
                $("div.search-filters ul").each(function () {
                    if ($(this).children("li").size() > 5) {
                        var searchFilters = $(this).parents("div.search-filters:first");
                        $(this).addClass("collapsed");

                        $(this).children("li:gt(4)").addClass("optional");
                        $(this).append('<li class="expand-collapse"><a href="#">' + searchFilters.data("moreText") + '&nbsp;&rsaquo;</a></li>');
                    }
                });
            }

            SearchFilters_EnableExpandCollapse();

            $(document).on("click", "div.search-filters ul li.expand-collapse a", function (event) {
                event.preventDefault();

                var searchFilters = $(this).parents("div.search-filters:first");
                var filterList = $(this).parents("ul:first");
                filterList.toggleClass("collapsed");

                if (filterList.hasClass("collapsed"))
                    $(this).html(searchFilters.data("moreText") + "&nbsp;&rsaquo;");
                else
                    $(this).html("&lsaquo;&nbsp;" + searchFilters.data("lessText"));
            });

            // Update Panel
            if (typeof Sys != "undefined") {
                Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (sender, eventArgs) {
                    SearchFilters_EnableExpandCollapse();
                });
            }
        }

        // Mobile Search Filters
        $(document).on("click", "div.search-filters h3", function () {
            if ($(window).width() < 990)
                $(this).parent().toggleClass("expanded");
        });
    }

    // Brand Tile Settings
    $(document).on("click", "div#template div.site-editor-configuration > div.heading", function () {
        $(this).parent().toggleClass("expanded");
    });
});

// Modules
$(document).ready(function () {
    // Slider
    {
        // Functions
        function Slider_GetOffset(module) {
            var windowWidth = $(window).width();
            var offset = module.data("offset");

            if (windowWidth < 480) {
                var mobileOffset = module.data("mobile-portrait-offset");

                if (mobileOffset !== undefined)
                    offset = mobileOffset;
            }
            else if (windowWidth < 989) {
                var mobileOffset = module.data("mobile-landscape-offset");

                if (mobileOffset !== undefined)
                    offset = mobileOffset;
            }

            return offset;
        }

        function Slider_SelectIndex(module, index, animate) {
            var slider = module.find("div.slider > ul");
            var adjustedIndex = index + slider.children("li.original").size();
            var offset = Slider_GetOffset(module);
            var position;

            if (slider.children("li.original").size() > offset)
                position = -1 * adjustedIndex * slider.children("li:first").outerWidth(true);
            else
                position = 0;

            var options = {
                left: position
            }

            module.data("selectedIndex", index);

            if (animate) {
                slider.stop(true, true);

                slider.animate(options, 800, "easeOutExpo", function () {
                    var startIndex = slider.children("li.original").size();
                    var endIndex = 2 * startIndex - 1;

                    if (adjustedIndex < startIndex)
                        Slider_SelectIndex(module, adjustedIndex, false);
                    else if (adjustedIndex > endIndex)
                        Slider_SelectIndex(module, adjustedIndex - (2 * startIndex), false);
                });
            }
            else
                slider.css(options);
        }

        function Slider_Resize(module) {
            var width = module.find("div.slider").width();
            var totalWidth = 0;
            var offset = Slider_GetOffset(module);
            var items = module.find("div.slider > ul > li");

            if (items.filter(".original").size() > offset) {
                items.show();

                module.find("a.previous, a.next").show();
            }
            else {
                items.not(".original").hide();

                module.data("selectedIndex", 0);
                module.find("a.previous, a.next").hide();
            }

            module.find("div.slider > ul > li:visible").each(function () {
                $(this).outerWidth(Math.ceil(width / offset));
                totalWidth += $(this).outerWidth();
            });

            module.find("div.slider > ul").width(totalWidth);

            var selectedIndex = module.data("selectedIndex");

            setTimeout(function () {
                Slider_SelectIndex(module, selectedIndex, false);
            }, 250);
        }

        // Initialization
        $("div.slider-container").each(function () {
            var module = $(this);
            var items = $(this).find("li");

            $(this).find("ul").prepend(items.clone()).prepend(items.clone());
            $(this).find("ul").append(items.clone()).append(items.clone());

            items.addClass("original");

            module.data("selectedIndex", 0);

            var offset = module.data("offset");

            module.find("a.previous").data("offset", -1 * offset);
            module.find("a.next").data("offset", offset);

            Slider_Resize(module);
        });

        // Resize
        $(window).on("resize.slider", function () {
            $("div.slider-container").each(function () {
                var module = $(this);

                Slider_Resize(module);
            });
        });

        // Pagination
        $(document).on("click.slider", "div.slider-container a.previous, div.slider-container a.next", function (event) {
            event.preventDefault();

            var module = $(this).parents("div.slider-container:first");
            var slider = module.find("div.slider > ul");

            if (!slider.is(":animated")) {
                var offset = Slider_GetOffset(module);

                if ($(this).is("a.previous"))
                    offset = -1 * offset;

                var selectedIndex = module.data("selectedIndex") + offset;

                Slider_SelectIndex(module, selectedIndex, true);
            }
        });
    }

    // Image Callout
    {
        $("div.image-callout").hover(function () {
            var info = $(this).find("p");
            info.stop(true, true);

            var originalHeight = info.height();

            $(this).addClass("hover");

            var expandedHeight = info.height();

            info.height(originalHeight).animate({
                height: expandedHeight
            }, 400, "easeOutExpo", function () {
                info.removeAttr("style");
            });
        }, function () {
            var info = $(this).find("p");
            info.stop(true, true);

            var originalHeight = info.height();

            $(this).removeClass("hover");

            var collapsedHeight = info.height();

            $(this).addClass("hover");

            info.height(originalHeight).animate({
                height: collapsedHeight
            }, 400, "easeOutExpo", function () {
                info.removeAttr("style");
                $(this).parents("div.image-callout:first").removeClass("hover");
            });
        });
    }

    // Boxes
    {
        // Set equal height
        function Boxes_Resize() {
            $("div.boxes > ul").each(function () {

                // Reset height to auto
                $(this).find("li > div.content").each(function () {
                    $(this).height("auto");
                });

                // Get max height
                var maxHeight = 0;

                $(this).find("li > div.content").each(function () {
                    var height = $(this).height();

                    if (height > maxHeight)
                        maxHeight = height;
                });

                $(this).find("li > div.content").each(function () {
                    $(this).height(maxHeight);
                });
            });

            // set all boxes in a double box to same width for non-mobile views
            $("div.two-columns").each(function () {
                if ($(this).find("> div.left div.boxes").size() > 0 && $(this).find("> div.left div.boxes").size() > 0) {
                    if ($("div#template").width() >= 990) {
                        var maxHeight = 0;

                        $(this).find("div.boxes ul li > div.content").each(function () {
                            var height = $(this).height();

                            if (height > maxHeight)
                                maxHeight = height;
                        });

                        $(this).find("div.boxes ul li > div.content").each(function () {
                            $(this).height(maxHeight);
                        });
                    }
                }
            });
        }

        // Set equal height on window resize
        $(window).on("resize.boxes", Boxes_Resize);
        $(window).on("load.boxes", Boxes_Resize);

        // Initialize
        Boxes_Resize();
    }

    // Featured Video
    {
        $("div.featured-video a.transcript").click(function (event) {
            event.preventDefault();

            var video = $(this).parents("div.featured-video:first");
            var transcript = video.siblings("div.video-transcript:first");

            transcript.toggle();

            var position = null;

            if (transcript.is(":visible"))
                position = transcript.offset().top;
            else
                position = video.offset().top;

            $("html, body").animate({
                scrollTop: position - 108
            }, 300);
        });
    }

    $("div.video-transcript a.hide-transcript").click(function (event) {
        event.preventDefault();

        var transcript = $(this).parents("div.video-transcript:first");
        var video = transcript.siblings("div.featured-video:first");

        transcript.hide();

        $("html, body").animate({
            scrollTop: video.offset().top - 108
        }, 300);
    });
});

// Template-Specific
$(document).ready(function () {
    var template = $("div#template");

    $("*").removeClass("no-javascript");

    if (template.hasClass("t01")) {
        // Brand tile animation
        function BrandTile_DisplayTile(index, animateSelector) {
            $("div#brandTile div.tiles > ul > li").removeClass("selected");
            $("div#brandTile div.tiles > ul > li:eq(" + index + ")").addClass("selected");

            if (template.width() >= 990) {
                if (animateSelector) {
                    $("div#brandTile ul.nav-bar").css({
                        visibility: "hidden"
                    });
                }

                // Hide content
                $("div#brandTile div.tiles > ul > li.selected div.content").css({
                    visibility: "hidden"
                });

                // Background image
                $("div#brandTile div.tiles > ul > li.selected").css({
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 600, "easeInExpo", function () {
                    // Display content
                    $("div#brandTile div.tiles > ul > li.selected div.content").css({
                        visibility: "visible",
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 600, "easeInExpo");

                    // Animate selector
                    if (animateSelector) {
                        $("div#brandTile ul.nav-bar").css({
                            visibility: "visible",
                            opacity: 0
                        }).animate({
                            opacity: 1
                        }, 600, "easeInExpo", function () {
                            setTimeout(function () {
                                var selectorQueue = $({});

                                $("div#brandTile ul.nav-bar > li").each(function () {
                                    var selector = $(this);

                                    selectorQueue.delay(300).queue(function (next) {
                                        selector.addClass("highlight");

                                        setTimeout(function () {
                                            selector.removeClass("highlight");
                                        }, 300);

                                        next();
                                    });
                                });
                            }, 200);
                        });
                    }
                });
            }
            else
                $("html, body").animate({
                    scrollTop: 0
                }, 600, "easeInExpo");
        }

        BrandTile_DisplayTile(0, true);

        // Brand tile click
        $(document).on("click", "div#brandTile ul.nav-bar > li a", function (event) {
            event.preventDefault();

            // Set selector style
            $(this).parents("li:first").siblings().removeClass("selected").addClass("unselected");
            $(this).parents("li:first").removeClass("unselected").addClass("selected");

            // Display selected tile
            var selectedIndex = $(this).parents("li:first").index();

            if ($("div#template.t01 div#brandTile div.tiles ul > li").size() > $("div#template.t01 div#brandTile ul.nav-bar > li").size())
                selectedIndex++;

            BrandTile_DisplayTile(selectedIndex, false);
        });
    }
    else if (template.hasClass("t03")) {
        $(document).on("click", "div#template.t03 ul#solutions-by > li > h4", function (event) {
            event.preventDefault();

            // Set selector style
            $(this).parents("li:first").siblings().removeClass("selected");
            $(this).parents("li:first").toggleClass("selected");
        });
    }
    else if (template.hasClass("t19")) {
        $("div#social-feed div.custom").hover(function () {
            var info = $(this).children("a");
            info.stop(true, true);

            var originalHeight = info.height();

            info.children("p").show();

            var expandedHeight = info.height();

            info.height(originalHeight).animate({
                height: expandedHeight
            }, 400, "easeOutExpo", function () {
                info.removeAttr("style");
            });
        }, function () {
            var info = $(this).children("a");
            info.stop(true, true);

            var originalHeight = info.height();

            info.children("p").hide();

            var collapsedHeight = info.height();

            info.height(originalHeight).animate({
                height: collapsedHeight
            }, 400, "easeOutExpo", function () {
                info.removeAttr("style");
            });
        });
    }
    else if (template.hasClass("t31")) {
        function ContactUs_GetLocations(region) {
            var filteredLocations = [];

            for (var i = 0; i < locations.length; i++) {
                var location = locations[i];

                if (location.Region === region)
                    filteredLocations.push(location);
            }

            return filteredLocations;
        }

        function ContactUs_GetLocation(id) {
            for (var i = 0; i < locations.length; i++) {
                var location = locations[i];

                if (location.Id === id)
                    return location;
            }

            return null;
        }

        function ContactUs_GetInfoWindowContent(location, moreInformation) {
            var html = '';
            html += '<h3>' + location.Title + '</h3>';
            html += '<p>';
            html += location.Address1 + '<br/>';
            html += location.City + (location.State !== null ? ', ' + location.State : "") + '<br/>';
            html += location.PostalCode + '<br/>';
            html += location.CountryName;
            html += '</p>';

            if (moreInformation) {
                html += '<p class="right">';
                html += '<a href="#" class="location" data-id="' + location.Id + '">' + locationStrings.MoreInformation + '&nbsp;&rsaquo;</a>';
                html += '</p>';
            }

            return html;
        }

        function ContactUs_DisplayRegion(region) {
            var filteredLocations = ContactUs_GetLocations(region);

            // Toggle Panel
            $("div#contact-global").hide();
            $("div#contact-region").show();

            // Set region heading
            $("div#contact-region h2").html(region);

            // Set city list
            var listHtml = "<ol>";

            for (var i = 0; i < filteredLocations.length; i++) {
                var location = filteredLocations[i];

                listHtml += '<li><a href="' + location.MapUrl + '" data-id="' + location.Id + '">' + location.Title + '</a></li>';
            }

            listHtml += "</ol>";

            $("div#contact-region > div.left > div.content").html(listHtml);

            if (!mobileDevice) {
                // Display Map
                var mapOptions = {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 15
                };

                var map = new google.maps.Map($("div#region-map")[0], mapOptions);
                var boundaries = new google.maps.LatLngBounds();
                var infoWindow = new google.maps.InfoWindow();

                for (var i = 0; i < filteredLocations.length; i++) {
                    var location = filteredLocations[i];

                    // Info Window Content
                    var markerHtml = ContactUs_GetInfoWindowContent(location, true);

                    // Marker Sprite
                    var markerImage = new google.maps.MarkerImage("/Image Library/Template Images/map-markers.png", new google.maps.Size(36, 50, "px", "px"));
                    markerImage.origin = new google.maps.Point(0, i * 50);

                    // Add Marker
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(location.Latitude, location.Longitude),
                        icon: markerImage,
                        optimized: false,
                        map: map,
                        content: markerHtml
                    });

                    boundaries.extend(marker.getPosition());

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent(this.content);
                        infoWindow.open(map, this);
                    });
                }

                if (filteredLocations.length > 1)
                    map.fitBounds(boundaries);
                else {
                    map.setCenter(boundaries.getCenter());
                    map.setZoom(15);
                }

                google.maps.event.trigger(map, 'resize');
            }
        }

        function ContactUs_DisplayLocation(location) {
            // Set location heading
            $("div#contact-location h2").html(location.Title);

            // Set location details
            var html = "";

            html += '<h3>' + locationStrings.Address + '</h3>';
            html += '<p>';
            html += location.Address1 + '<br/>';
            if (location.Address2 !== null)
                html += location.Address2 + '<br/>';
            if (location.Address3 !== null)
                html += location.Address3 + '<br/>';
            html += location.City + (location.State !== null ? ', ' + location.State : "") + '<br/>';
            html += location.PostalCode + '<br/>';
            html += location.CountryName;
            html += '</p>';
            html += '<p class="right mobile-only">';
            html += '<a href="' + location.MapUrl + '">' + locationStrings.ViewMap + '&nbsp;&rsaquo;</a>';
            html += '<p>';

            if (location.PhoneNumber !== null) {
                html += '<h3>' + locationStrings.Phone + '</h3>';
                html += '<p>';
                html += location.PhoneNumber;
                html += '</p>';
            }

            if (location.FaxNumber !== null) {
                html += '<h3>' + locationStrings.Fax + '</h3>';
                html += '<p>';
                html += location.FaxNumber;
                html += '</p>';
            }

            $("div#contact-location > div.left > div.content").html(html);

            // Toggle Panel
            $("div#contact-region").hide();
            $("div#contact-location").show();

            if (!mobileDevice) {
                // Display Map
                var mapOptions = {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: new google.maps.LatLng(location.Latitude, location.Longitude),
                    zoom: 15
                };

                var map = new google.maps.Map($("div#location-map")[0], mapOptions);
                var infoWindow = new google.maps.InfoWindow();

                // Info Window Content
                var markerHtml = ContactUs_GetInfoWindowContent(location, false);

                // Marker Sprite
                var markerImage = new google.maps.MarkerImage("/Image Library/Template Images/map-markers.png", new google.maps.Size(36, 50, "px", "px"));
                markerImage.origin = new google.maps.Point(0, 0);

                // Add Marker
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location.Latitude, location.Longitude),
                    icon: markerImage,
                    optimized: false,
                    map: map,
                    content: markerHtml
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(this.content);
                    infoWindow.open(map, this);
                });

                google.maps.event.trigger(map, 'resize');
            }
        }

        // Region Selection
        $("div#contact-global ul > li > a").click(function (event) {
            event.preventDefault();

            var region = $(this).parent("li").data("region");

            ContactUs_DisplayRegion(region);
        });

        // Region Back Button
        $("div#contact-region a.previous").click(function (event) {
            event.preventDefault();

            // Toggle Panel
            $("div#contact-region").hide();
            $("div#contact-global").show();
        });

        // Location Selection
        $(document).on("click", "div#contact-region ol > li > a", function (event) {
            event.preventDefault();

            var locationId = $(this).data("id");
            var location = ContactUs_GetLocation(locationId);

            if (location !== null) {
                ContactUs_DisplayLocation(location);
            }
        });

        // Location Back Button
        $("div#contact-location a.previous").click(function (event) {
            event.preventDefault();

            // Toggle Panel
            $("div#contact-location").hide();
            $("div#contact-region").show();
        });

        // Marker More Information Link
        $(document).on("click", "div#contact-us div.map a.location", function (event) {
            event.preventDefault();

            var locationId = $(this).data("id");
            var location = ContactUs_GetLocation(locationId);

            if (location !== null) {
                ContactUs_DisplayLocation(location);
            }
        });
    }
    else if (template.hasClass("t34")) {
        function EventAgenda_SelectTrack(index) {
            $("div#agenda > table > thead > tr > th, div#agenda > table > tbody > tr > td").each(function () {
                var colspan = $(this).attr("colspan");

                if ($(this).index() === index || (colspan !== null && parseInt(colspan) > 1))
                    $(this).addClass("selected").removeClass("unselected");
                else
                    $(this).addClass("unselected").removeClass("selected");
            });
        }

        // Mobile Track Selector
        $("div#agenda select.track-selector").change(function () {
            var selectedTrack = $(this).find(":selected").index();

            EventAgenda_SelectTrack(selectedTrack);
        });

        // Select first track for mobile
        EventAgenda_SelectTrack(0);
    }
});

// Eloqua
var EloquaForm = {
    formContainer: null,

    setValue: function (fieldName, value) {
        this.formContainer.find("[data-eloqua-name='" + fieldName + "']").val(value);
    },

    demandbase: {
        key: "1f4f81a0f8aa5cd637bf454c643037d27049729e",

        fieldMap: {
            "audience": "C_DB_Audience1",
            "audience_segment": "DB_Audience_Sub_Segment",
            "industry": "DB_Industry",
            "sub_industry": "C_DB_Sub_Industry1",
            "primary_sic": "C_DB_Primary_SIC_Code1",
            "employee_range": "C_DB_Employee_Band1",
            "revenue_range": "C_DB_Revenue_Band1",
            "street_address": "C_DB_Address",
            "city": "C_DB_City",
            "state": "C_DB_State",
            "zip": "C_DB_Zip",
            "country": "C_DB_Country_Code1",
            "phone": "C_DB_Company_Phone1",
            "fortune_1000": "DB_Fortune1000",
            "forbes_2000": "DB_Forbes2000",
            "web_site": "C_Website1",
            "ip": "DB_IP_Address",
            "marketing_alias": "C_DB_Company_Name",
            "demandbase_sid": "C_DB_Demandbase_ID1",
            "watch_list_account_status": "C_DB_Account_Status1",
            "information_level": "DB_Detailed_or_Basic",
            "manual_review": ""
        },

        loadValues: function (data) {
            var priority = 2;

            if (data["isp"] === true)
                return;
            else if (data.person != null) {
                data = data.person;

                priority = 3;
            }
            else if (data.pick != null) {
                data = data.pick;

                priority = 1;
            }
            else if (data.input_match != null) {
                data = data.input_match;

                priority = 1;
            }

            if (data != null) {
                for (var key in data) {
                    var fieldName = EloquaForm.demandbase.fieldMap[key];

                    if (fieldName != null) {
                        var field = $("input[data-eloqua-name='" + fieldName + "']");
                        var currentValuePriority = field.data("priority");

                        if (currentValuePriority === undefined || priority >= currentValuePriority) {
                            var value = data[key];

                            field.data("priority", priority);
                            field.val(value);
                        }
                    }
                }
            }
        },

        initialize: function () {
            if (EloquaForm.formContainer.hasClass("demandbase")) {
                $("head").append('<script type="text/javascript" src="http://api.demandbase.com/api/v2/ip.json?key=' + EloquaForm.demandbase.key + '&callback=EloquaForm.demandbase.loadValues"></script>');

                //if (Demandbase.CompanyAutocomplete) {
                //    Demandbase.CompanyAutocomplete.widget({
                //        company: EloquaForm.formContainer.data("companyFieldId"),
                //        email: EloquaForm.formContainer.data("emailFieldId"),
                //        key: EloquaForm.demandbase.key,
                //        callback: EloquaForm.demandbase.loadValues
                //    })
                //};
            }
        }
    },

    eloqua: {
        getSiteId: function () {
            return EloquaForm.formContainer.data("eloquaSiteId");
        },

        getFirstKey: function () {
            var eloquaSiteId = EloquaForm.eloqua.getSiteId();

            if (eloquaSiteId === 2826)
                return "293da3a8-b7c4-430c-9f46-95b12240a63f";
            else if (eloquaSiteId === 613206021)
                return "293da3a8-b7c4-430c-9f46-95b12240a63f";

            return null;
        },

        getSecondKey: function () {
            var eloquaSiteId = EloquaForm.eloqua.getSiteId();

            if (eloquaSiteId === 2826)
                return "4da0a50b-e2db-4a56-a1a5-9d4bea5e0ea6";
            else if (eloquaSiteId === 613206021)
                return "4da0a50b-e2db-4a56-a1a5-9d4bea5e0ea6";

            return null;
        },

        customerGuidTimer: null,

        setCustomerGuid: function () {
            if (typeof GetElqCustomerGUID === "function") {
                clearInterval(EloquaForm.eloqua.customerGuidTimer);

                EloquaForm.setValue("elqCustomerGUID", GetElqCustomerGUID());
            }
        },

        setValuesTimer: null,

        setValuesPass: 1,

        setValues: function () {
            if (typeof GetElqContentPersonalizationValue === "function") {
                if (EloquaForm.eloqua.setValuesPass === 1) {
                    clearInterval(EloquaForm.eloqua.setValuesTimer);

                    var email = GetElqContentPersonalizationValue("ElqEmailAddress");

                    if (email) {
                        EloquaForm.setValue("C_EmailAddress", email);

                        var eloquaSecondKey = EloquaForm.eloqua.getSecondKey();

                        if (eloquaSecondKey != null) {
                            _elqQ.push(['elqDataLookup', eloquaSecondKey, '<C_EmailAddress>' + email + '</C_EmailAddress>']);

                            EloquaForm.eloqua.setValuesPass = 2;

                            EloquaForm.eloqua.setValuesTimer = setInterval(EloquaForm.eloqua.setValues, 250);
                        }
                    }
                }
                else if (EloquaForm.eloqua.setValuesPass === 2) {
                    var email = GetElqContentPersonalizationValue("C_EmailAddress");

                    if (email) {
                        clearInterval(EloquaForm.eloqua.setValuesTimer);

                        var fields = EloquaForm.formContainer.find("[data-eloqua-name]").each(function () {
                            var fieldName = $(this).data("eloquaName");

                            if (fieldName && fieldName !== "C_Company") {
                                var value = GetElqContentPersonalizationValue(fieldName);

                                if (value)
                                    EloquaForm.setValue(fieldName, value);
                            }
                        });
                    }
                }
            }
        },

        initialize: function () {
            if (EloquaForm.formContainer.hasClass("eloqua")) {
                var eloquaFirstKey = EloquaForm.eloqua.getFirstKey();

                if (eloquaFirstKey != null) {
                    _elqQ.push(['elqGetCustomerGUID', eloquaFirstKey, '']);
                    _elqQ.push(['elqDataLookup', eloquaFirstKey, '']);

                    EloquaForm.eloqua.customerGuidTimer = setInterval(EloquaForm.eloqua.setCustomerGuid, 250);
                    EloquaForm.eloqua.setValuesTimer = setInterval(EloquaForm.eloqua.setValues, 250);
                }
            }
        }
    },

    urlParser: {
        getQueryStringValue: function (parameter) {
            var url = /^[^?]*/.exec(window.location.href);

            if (parameter == null)
                return url;
            else {
                var queryString = {};

                // Get QueryString values
                if (window.location.href.indexOf("?") > -1) {
                    var queryStringFragments = /\?(.*$)/.exec(window.location.href)[1].split("&");

                    for (var i = 0; i < queryStringFragments.length; i++) {
                        var key = queryStringFragments[i].split("=")[0];
                        var value = decodeURIComponent(queryStringFragments[i].split("=")[1]);

                        queryString[key] = value;
                    }

                    return queryString[parameter];
                }
            }

            return null;
        },

        initialize: function () {
            EloquaForm.setValue("LayoutURL", EloquaForm.urlParser.getQueryStringValue());
            EloquaForm.setValue("BannerLink", EloquaForm.urlParser.getQueryStringValue("bl0"));
            EloquaForm.setValue("3rdPartyEmail", EloquaForm.urlParser.getQueryStringValue("3pe"));
            EloquaForm.setValue("Language", EloquaForm.urlParser.getQueryStringValue("l9"));
            EloquaForm.setValue("Media", EloquaForm.urlParser.getQueryStringValue("cl1"));
        }
    },

    //validate: function (revalidate) {
    //    if (revalidate)
    //        Page_ClientValidate();

    //    EloquaForm.formContainer.toggleClass("error", !Page_IsValid)

    //    for (var i = 0; i < Page_Validators.length; i++) {
    //        var validator = Page_Validators[i];

    //        $("#" + validator.controltovalidate, EloquaForm.formContainer).parents("div.form-row:first").toggleClass("error", !validator.isvalid);
    //    }
    //},

    validateStateProvince_NorthAmerica: function (sender, args) {
        var country = EloquaForm.formContainer.find("[data-eloqua-name='C_Country']").val();
        var stateProvince = EloquaForm.formContainer.find("[data-eloqua-name='C_State_Prov']").val();

        if (stateProvince)
            args.IsValid = true;
        else if (country !== "USA" && country !== "Canada")
            args.IsValid = true;
        else
            args.IsValid = false;
    },

    validateProvince_China: function (sender, args) {
        var country = EloquaForm.formContainer.find("[data-eloqua-name='C_Country']").val();
        var province = EloquaForm.formContainer.find("[data-eloqua-name='C_Province1']").val();

        if (province)
            args.IsValid = true;
        else if (country !== "China")
            args.IsValid = true;
        else
            args.IsValid = false;
    },

    validateProvince_SouthKorea: function (sender, args) {
        var country = EloquaForm.formContainer.find("[data-eloqua-name='C_Country']").val();
        var province = EloquaForm.formContainer.find("[data-eloqua-name='C_Province1']").val();

        if (province)
            args.IsValid = true;
        else if (country !== "Korea, Republic of")
            args.IsValid = true;
        else
            args.IsValid = false;
    },

    validatePrefecture_Japan: function (sender, args) {
        var country = EloquaForm.formContainer.find("[data-eloqua-name='C_Country']").val();
        var prefecture = EloquaForm.formContainer.find("[data-eloqua-name='C_Province_JP']").val();

        if (prefecture)
            args.IsValid = true;
        else if (country !== "Japan")
            args.IsValid = true;
        else
            args.IsValid = false;
    },

    initialize: function () {
        if ($("div.form-container.eloqua").size() > 0) {
            EloquaForm.formContainer = $("div.form-container:first");

            // Validation
            EloquaForm.formContainer.find("input[type='submit']").click(function () {
                EloquaForm.validate(true);
            });

            //EloquaForm.validate(false);

            // Toggle Optional Fields
            if (EloquaForm.formContainer.find("input.toggle:checked").size() > 0)
                EloquaForm.formContainer.addClass("expanded");

            EloquaForm.formContainer.find("input.toggle").change(function () {
                var selected = $(this).is(":checked")

                EloquaForm.formContainer.toggleClass("expanded", selected);

                for (var i = 0; i < Page_Validators.length; i++) {
                    var validator = Page_Validators[i];

                    if ($(validator).parents("div.optional").size() > 0)
                        ValidatorEnable(validator, selected);
                }
            });

            // Initialize
            EloquaForm.demandbase.initialize();
            EloquaForm.eloqua.initialize();
            EloquaForm.urlParser.initialize();
        }
    }
};

$(document).ready(function () {
    EloquaForm.initialize();
});

// Other Functions
function ValidateTextBoxInput(textBoxSelector) {
    var textBox = $("#" + textBoxSelector);
    var value = $(textBox).val();
    var defaultText = $(textBox).prop("title");

    return defaultText === undefined || defaultText === "" || value !== defaultText;
}

function HandleReturn(elementSelector, handler) {
    $(elementSelector).keydown(function (event) {
        if (event.which === 13) {
            event.preventDefault();

            handler = $.proxy(handler, $(this));
            handler();
        }
    });
}

// Internet Explorer
$(document).ready(function () {
    if (oldIE) {
        // Thumbnails Module
        $("div#template div.thumbnails ul li:nth-child(5n+1)").addClass("last");

        // Thumbnails Module in Sidebar Container
        $("div#template div.sidebar-container div.thumbnails ul li:nth-child(5n+1)").removeClass("last");
        $("div#template div.sidebar-container div.thumbnails ul li:nth-child(4n+1)").addClass("last");
    }
});

// AddThis
$(window).load(function () {
    var template = $("div#template");

    if (template.hasClass("t02") ||
            template.hasClass("t03") ||
            template.hasClass("t04") ||
            template.hasClass("t05") ||
            template.hasClass("t06") ||
            template.hasClass("t07") ||
            template.hasClass("t08") ||
            template.hasClass("t09") ||
            template.hasClass("t10") ||
            template.hasClass("t11") ||
            template.hasClass("t12") ||
            template.hasClass("t13") ||
            template.hasClass("t14") ||
            template.hasClass("t16") ||
            template.hasClass("t17") ||
            template.hasClass("t18") ||
            template.hasClass("t21") ||
            template.hasClass("t22") ||
            template.hasClass("t23") ||
            template.hasClass("t25") ||
            template.hasClass("t27") ||
            template.hasClass("t29") ||
            template.hasClass("t31") ||
            template.hasClass("t32") ||
            template.hasClass("t33") ||
            template.hasClass("t34")) {
        var html = '';

        html += '<div id="addthis" class="addthis_toolbox addthis_default_style addthis_32x32_style">';
        html += '<a class="addthis_button_facebook"></a>';
        html += '<a class="addthis_button_twitter"></a>';
        html += '<a class="addthis_button_linkedin"></a>';
        html += '<a class="addthis_button_google_plusone_share"></a>';
        html += '</div>';

        $("div.container:last", "div#content").append(html);

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "";

        $("div.container", "div#content").append(script);
    }
});

