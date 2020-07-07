// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []

    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ba, ca = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , da;
    if ("function" == typeof Object.setPrototypeOf)
        da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var ha = {
                Lf: !0
            }
              , ia = {};
            try {
                ia.__proto__ = ha;
                ea = ia.Lf;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ja = da
      , ka = this || self
      , na = /^[\w+/_-]+[=]{0,2}$/
      , oa = null;
    var pa = function() {}
      , qa = function(a) {
        return "function" == typeof a
    }
      , g = function(a) {
        return "string" == typeof a
    }
      , ra = function(a) {
        return "number" == typeof a && !isNaN(a)
    }
      , sa = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }
      , ua = function(a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++)
            if (a[d] === b)
                return d;
        return -1
    }
      , wa = function(a, b) {
        if (a && sa(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , xa = function(a, b) {
        if (!ra(a) || !ra(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Aa = function(a, b) {
        for (var c = new ya, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ca = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Da = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Ea = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }
      , Fa = function(a) {
        var b = [];
        if (sa(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ha = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ia = function() {
        return (new Date).getTime()
    }
      , ya = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    ya.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    ya.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ja = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Ka = function(a) {
        var b = !1;
        return function() {
            if (!b)
                try {
                    a()
                } catch (c) {}
            b = !0
        }
    }
      , La = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Ma = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Oa = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Pa = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Qa = function(a) {
        var b = [];
        Ca(a, function(c, d) {
            10 > c.length && d && b.push(c)
        });
        return b.join(",")
    };
    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ra = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Ta = function(a) {
        if (null == a)
            return String(a);
        var b = Ra.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Ua = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Va = function(a) {
        if (!a || "object" != Ta(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Ua(a, "constructor") && !Ua(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Ua(a, b)
    }
      , n = function(a, b) {
        var c = b || ("array" == Ta(a) ? [] : {}), d;
        for (d in a)
            if (Ua(a, d)) {
                var e = a[d];
                "array" == Ta(e) ? ("array" != Ta(c[d]) && (c[d] = []),
                c[d] = n(e, c[d])) : Va(e) ? (Va(c[d]) || (c[d] = {}),
                c[d] = n(e, c[d])) : c[d] = e
            }
        return c
    };
    var sb;
    var tb = [], ub = [], vb = [], wb = [], xb = [], yb = {}, zb, Ab, Bb, Cb = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, Eb = function(a, b) {
        var c = a["function"];
        if (!c)
            throw Error("Error: No function name given for function call.");
        var d = yb[c], e = {}, f;
        for (f in a)
            a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]);
        return void 0 !== d ? d(e) : sb(c, e, b)
    }, Gb = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Fb(a[e], b, c));
        return d
    }, Hb = function(a) {
        var b = a["function"];
        if (!b)
            throw "Error: No function name given for function call.";
        var c = yb[b];
        return c ? c.priorityOverride || 0 : 0
    }, Fb = function(a, b, c) {
        if (sa(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Fb(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var h = tb[f];
                if (!h || b.$c(h))
                    return;
                c[f] = !0;
                try {
                    var k = Gb(h, b, c);
                    k.vtp_gtmEventId = b.id;
                    d = Eb(k, b);
                    Bb && (d = Bb.jg(d, k))
                } catch (y) {
                    b.Fe && b.Fe(y, Number(f)),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var l = 1; l < a.length; l += 2)
                    d[Fb(a[l], b, c)] = Fb(a[l + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var m = !1, p = 1; p < a.length; p++) {
                    var r = Fb(a[p], b, c);
                    Ab && (m = m || r === Ab.Kb);
                    d.push(r)
                }
                return Ab && m ? Ab.mg(d) : d.join("");
            case "escape":
                d = Fb(a[1], b, c);
                if (Ab && sa(a[1]) && "macro" === a[1][0] && Ab.Kg(a))
                    return Ab.ah(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Xa[a[t]] && (d = Xa[a[t]](d));
                return d;
            case "tag":
                var q = a[1];
                if (!wb[q])
                    throw Error("Unable to resolve tag reference " + q + ".");
                return d = {
                    se: a[2],
                    index: q
                };
            case "zb":
                var u = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                u["function"] = a[1];
                var v = Ib(u, b, c)
                  , w = !!a[4];
                return w || 2 !== v ? w !== (1 === v) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Ib = function(a, b, c) {
        try {
            return zb(Gb(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Jb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Dd: a("convert_case_to"),
            Ed: a("convert_false_to"),
            Fd: a("convert_null_to"),
            Gd: a("convert_true_to"),
            Hd: a("convert_undefined_to"),
            Fh: a("debug_mode_metadata"),
            wa: a("function"),
            jf: a("instance_name"),
            pf: a("live_only"),
            rf: a("malware_disabled"),
            sf: a("metadata"),
            Gh: a("original_vendor_template_id"),
            wf: a("once_per_event"),
            Md: a("once_per_load"),
            Ud: a("setup_tags"),
            Wd: a("tag_id"),
            Xd: a("teardown_tags")
        }
    }();
    var Kb = null
      , Nb = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        var c = []
          , d = [];
        Kb = Lb(a);
        for (var e = 0; e < ub.length; e++) {
            var f = ub[e]
              , h = Mb(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++)
                    c[k[l]] = !0;
                b(f.block || [])
            } else
                null === h && b(f.block || [])
        }
        for (var m = [], p = 0; p < wb.length; p++)
            c[p] && !d[p] && (m[p] = !0);
        return m
    }
      , Mb = function(a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = Kb(b[c]);
            if (0 === d)
                return !1;
            if (2 === d)
                return null
        }
        for (var e = a.unless || [], f = 0; f < e.length; f++) {
            var h = Kb(e[f]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , Lb = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Ib(vb[c], a));
            return b[c]
        }
    };
    /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var C = {
        ab: "_ee",
        Mc: "_syn",
        Jh: "_uei",
        Hh: "_pci",
        Ac: "event_callback",
        Jb: "event_timeout",
        I: "gtag.config",
        fa: "allow_ad_personalization_signals",
        Bc: "restricted_data_processing",
        Za: "allow_google_signals",
        ia: "cookie_expires",
        Ib: "cookie_update",
        $a: "session_duration",
        ka: "user_properties",
        va: "transport_url",
        N: "ads_data_redaction"
    };
    C.yd = "page_view";
    C.Ye = "user_engagement";
    C.na = "purchase";
    C.Zb = "refund";
    C.fb = "begin_checkout";
    C.Vb = "add_to_cart";
    C.Xb = "remove_from_cart";
    C.yh = "view_cart";
    C.Pd = "add_to_wishlist";
    C.Ia = "view_item";
    C.Eh = "view_promotion";
    C.Dh = "select_promotion";
    C.Ch = "select_item";
    C.xd = "view_item_list";
    C.Nd = "add_payment_info";
    C.wh = "add_shipping_info";
    C.$e = "allow_custom_scripts";
    C.af = "allow_display_features";
    C.zd = "allow_enhanced_conversions";
    C.ke = "enhanced_conversions";
    C.$b = "client_id";
    C.Y = "cookie_domain";
    C.ac = "cookie_name";
    C.La = "cookie_path";
    C.ca = "cookie_flags";
    C.ja = "currency";
    C.bc = "custom_params";
    C.de = "custom_map";
    C.Ec = "groups";
    C.Ma = "language";
    C.df = "country";
    C.Lh = "non_interaction";
    C.kb = "page_location";
    C.lb = "page_referrer";
    C.Fc = "page_title";
    C.mb = "send_page_view";
    C.ya = "send_to";
    C.Gc = "session_engaged";
    C.fc = "session_id";
    C.Hc = "session_number";
    C.Hf = "tracking_id";
    C.xa = "linker";
    C.ob = "url_passthrough";
    C.hb = "accept_incoming";
    C.L = "domains";
    C.jb = "url_position";
    C.ib = "decorate_forms";
    C.Ae = "phone_conversion_number";
    C.xe = "phone_conversion_callback";
    C.ye = "phone_conversion_css_class";
    C.Be = "phone_conversion_options";
    C.Bf = "phone_conversion_ids";
    C.Af = "phone_conversion_country_code";
    C.Qd = "aw_remarketing";
    C.Td = "aw_remarketing_only";
    C.da = "value";
    C.Df = "quantity";
    C.hf = "affiliation";
    C.he = "tax";
    C.nf = "shipping";
    C.xc = "list_name";
    C.Bd = "checkout_step";
    C.fe = "checkout_option";
    C.kf = "coupon";
    C.lf = "promotions";
    C.nb = "transaction_id";
    C.rb = "user_id";
    C.Ka = "conversion_linker";
    C.Ja = "conversion_cookie_prefix";
    C.Z = "cookie_prefix";
    C.T = "items";
    C.be = "aw_merchant_id";
    C.Zd = "aw_feed_country";
    C.$d = "aw_feed_language";
    C.Vd = "discount";
    C.ee = "disable_merchant_reported_purchases";
    C.pe = "new_customer";
    C.ce = "customer_lifetime_value";
    C.ff = "dc_natural_search";
    C.ef = "dc_custom_params";
    C.If = "trip_type";
    C.qe = "passengers";
    C.yf = "method";
    C.Gf = "search_term";
    C.cf = "content_type";
    C.zf = "optimize_id";
    C.qf = "experiments";
    C.gb = "google_signals";
    C.Cc = "google_tld";
    C.jc = "update";
    C.zc = "firebase_id";
    C.cc = "ga_restrict_domain";
    C.yc = "event_settings";
    C.wc = "dynamic_event_settings";
    C.Ef = "screen_name";
    C.uf = "_x_19";
    C.tf = "_x_20";
    C.Ge = [C.fa, C.Za, C.Bc, C.Y, C.ia, C.ca, C.ac, C.La, C.Z, C.Ib, C.de, C.bc, C.wc, C.Ac, C.yc, C.Jb, C.cc, C.gb, C.Cc, C.Ec, C.xa, C.ya, C.mb, C.$a, C.jc, C.ka, C.va, C.zd];
    C.Ge.push(C.T);
    C.Ce = [C.kb, C.lb, C.Fc, C.Ma, C.Ef, C.rb, C.zc];
    C.Jf = [C.na, C.Zb, C.fb, C.Vb, C.Xb, C.yh, C.Pd, C.Ia, C.Eh, C.Dh, C.xd, C.Ch, C.Nd, C.wh];
    C.Kd = [C.ya, C.Qd, C.Td, C.bc, C.mb, C.Ma, C.da, C.ja, C.nb, C.rb, C.Ka, C.Ja, C.Z, C.Y, C.ia, C.ca, C.kb, C.lb, C.Ae, C.xe, C.ye, C.Be, C.T, C.be, C.Zd, C.$d, C.Vd, C.ee, C.pe, C.ce, C.fa, C.Bc, C.jc, C.zc, C.ke, C.va, C.ob, C.zd];
    C.Ee = [C.fa, C.Za, C.Ib];
    C.He = [C.ia, C.Jb, C.$a];
    C.o = "ad_storage",
    C.H = "analytics_storage",
    C.sh = "region",
    C.vh = "wait_for_update";
    var E = window
      , F = document
      , hc = navigator
      , ic = F.currentScript && F.currentScript.src
      , jc = function(a, b) {
        var c = E[a];
        E[a] = void 0 === c ? b : c;
        return E[a]
    }
      , kc = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , lc = function(a, b, c) {
        var d = F.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        d.src = a;
        kc(d, b);
        c && (d.onerror = c);
        var e;
        if (null === oa)
            b: {
                var f = ka.document
                  , h = f.querySelector && f.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && na.test(k)) {
                        oa = k;
                        break b
                    }
                }
                oa = ""
            }
        e = oa;
        e && d.setAttribute("nonce", e);
        var l = F.getElementsByTagName("script")[0] || F.body || F.head;
        l.parentNode.insertBefore(d, l);
        return d
    }
      , mc = function() {
        if (ic) {
            var a = ic.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , nc = function(a, b) {
        var c = F.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = F.body && F.body.lastChild || F.body || F.head;
        d.parentNode.insertBefore(c, d);
        kc(c, b);
        void 0 !== a && (c.src = a);
        return c
    }
      , oc = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , pc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , qc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , G = function(a) {
        E.setTimeout(a, 0)
    }
      , rc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , sc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , tc = function(a) {
        var b = F.createElement("div");
        b.innerHTML = "A<div>" + a + "</div>";
        b = b.lastChild;
        for (var c = []; b.firstChild; )
            c.push(b.removeChild(b.firstChild));
        return c
    }
      , uc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, h = 0; f && h <= c; h++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , vc = function(a) {
        hc.sendBeacon && hc.sendBeacon(a) || oc(a)
    }
      , wc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var xc = {}
      , I = function(a, b) {
        xc[a] = xc[a] || [];
        xc[a][b] = !0
    }
      , yc = function(a) {
        for (var b = [], c = xc[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var zc = {}
      , Ac = function(a) {
        return void 0 == zc[a] ? !1 : zc[a]
    };
    var Bc = [];
    function Dc() {
        var a = jc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ec,
            update: Fc,
            addListener: Gc,
            notifyListeners: Hc,
            active: !1
        });
        return a.ics
    }
    function Ec(a, b, c, d, e, f) {
        var h = Dc();
        h.active = !0;
        if (void 0 != b) {
            var k = h.entries
              , l = k[a] || {}
              , m = l.region
              , p = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (p === e || (p === d ? m !== e : !p && !m)) {
                var r = !!(f && 0 < f && void 0 === l.update)
                  , t = {
                    region: p,
                    initial: "granted" === b,
                    update: l.update,
                    quiet: r
                };
                k[a] = t;
                r && E.setTimeout(function() {
                    k[a] === t && t.quiet && (t.quiet = !1,
                    Ic(a),
                    Hc(),
                    I("TAGGING", 2))
                }, f)
            }
        }
    }
    function Fc(a, b) {
        var c = Dc();
        c.active = !0;
        if (void 0 != b) {
            var d = Jc(a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Jc(a);
            f.quiet ? (f.quiet = !1,
            Ic(a)) : h !== d && Ic(a)
        }
    }
    function Gc(a, b) {
        Bc.push({
            me: a,
            wg: b
        })
    }
    function Ic(a) {
        for (var b = 0; b < Bc.length; ++b) {
            var c = Bc[b];
            sa(c.me) && -1 !== c.me.indexOf(a) && (c.Ne = !0)
        }
    }
    function Hc() {
        for (var a = 0; a < Bc.length; ++a) {
            var b = Bc[a];
            if (b.Ne) {
                b.Ne = !1;
                try {
                    b.wg.call()
                } catch (c) {}
            }
        }
    }
    var Jc = function(a) {
        var b = Dc().entries[a] || {};
        return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
    }
      , Kc = function(a) {
        return !(Dc().entries[a] || {}).quiet
    }
      , Lc = function() {
        return Ac("gtag_cs_api") ? Dc().active : !1
    }
      , Mc = function(a, b) {
        Dc().addListener(a, b)
    }
      , Nc = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Kc(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Mc(b, function() {
                d || c() || (d = !0,
                a())
            })
        } else
            a()
    }
      , Oc = function(a, b) {
        if (!1 === Jc(b)) {
            var c = !1;
            Mc([b], function() {
                !c && Jc(b) && (a(),
                c = !0)
            })
        }
    };
    var Pc = [C.o, C.H]
      , Qc = function(a) {
        var b = a[C.sh];
        b && I("GTM", 40);
        var c = a[C.vh];
        c && I("GTM", 41);
        for (var d = sa(b) ? b : [b], e = 0; e < d.length; ++e)
            for (var f = 0; f < Pc.length; f++) {
                var h = Pc[f]
                  , k = a[Pc[f]]
                  , l = d[e];
                Dc().set(h, k, l, "CN", "CN-50", c)
            }
    }
      , Rc = function(a) {
        for (var b = 0; b < Pc.length; b++) {
            var c = Pc[b]
              , d = a[Pc[b]];
            Dc().update(c, d)
        }
        Dc().notifyListeners()
    }
      , Sc = function(a) {
        var b = Jc(a);
        return void 0 != b ? b : !0
    }
      , Tc = function() {
        for (var a = [], b = 0; b < Pc.length; b++) {
            var c = Jc(Pc[b]);
            a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
        }
        return "G1" + a.join("")
    }
      , Uc = function(a) {
        Oc(a, C.o)
    }
      , Vc = function(a, b) {
        Nc(a, b)
    };
    var Xc = function(a) {
        return Wc ? F.querySelectorAll(a) : null
    }
      , Yc = function(a, b) {
        if (!Wc)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!F.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);return null
    }
      , Zc = !1;
    if (F.querySelectorAll)
        try {
            var $c = F.querySelectorAll(":root");
            $c && 1 == $c.length && $c[0] == F.documentElement && (Zc = !0)
        } catch (a) {}
    var Wc = Zc;
    var K = {}
      , od = null
      , pd = Math.random();
    K.s = "UA-149949619-1";
    K.Ob = "6o0";
    K.Ld = "";
    var qd = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0,
        __paused: !0,
        __tg: !0
    }
      , rd = "www.googletagmanager.com/gtm.js";
    rd = "www.googletagmanager.com/gtag/js";
    var sd = rd
      , td = null
      , ud = null
      , vd = null
      , wd = "//www.googletagmanager.com/a?id=" + K.s + "&cv=1"
      , xd = {}
      , yd = {}
      , zd = function() {
        var a = od.sequence || 0;
        od.sequence = a + 1;
        return a
    };
    var Ad = function() {
        return "&tc=" + wb.filter(function(a) {
            return a
        }).length
    }
      , Dd = function() {
        Bd || (Bd = E.setTimeout(Cd, 500))
    }
      , Cd = function() {
        Bd && (E.clearTimeout(Bd),
        Bd = void 0);
        void 0 === Ed || Fd[Ed] && !Gd && !Hd || (Id[Ed] || Jd.Mg() || 0 >= Kd-- ? (I("GTM", 1),
        Id[Ed] = !0) : (Jd.ih(),
        oc(Ld()),
        Fd[Ed] = !0,
        Md = Nd = Hd = Gd = ""))
    }
      , Ld = function() {
        var a = Ed;
        if (void 0 === a)
            return "";
        var b = yc("GTM")
          , c = yc("TAGGING");
        return [Od, Fd[a] ? "" : "&es=1", Pd[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Ad(), Gd, Hd, Nd, Md, "&z=0"].join("")
    }
      , Qd = function() {
        return [wd, "&v=3&t=t", "&pid=" + xa(), "&rv=" + K.Ob].join("")
    }
      , Rd = "0.005000" > Math.random()
      , Od = Qd()
      , Sd = function() {
        Od = Qd()
    }
      , Fd = {}
      , Gd = ""
      , Hd = ""
      , Md = ""
      , Nd = ""
      , Ed = void 0
      , Pd = {}
      , Id = {}
      , Bd = void 0
      , Jd = function(a, b) {
        var c = 0
          , d = 0;
        return {
            Mg: function() {
                if (c < a)
                    return !1;
                Ia() - d >= b && (c = 0);
                return c >= a
            },
            ih: function() {
                Ia() - d >= b && (c = 0);
                c++;
                d = Ia()
            }
        }
    }(2, 1E3)
      , Kd = 1E3
      , Td = function(a, b) {
        if (Rd && !Id[a] && Ed !== a) {
            Cd();
            Ed = a;
            Md = Gd = "";
            var c;
            c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
            Pd[a] = "&e=" + c + "&eid=" + a;
            Dd()
        }
    }
      , Ud = function(a, b, c) {
        if (Rd && !Id[a] && b) {
            a !== Ed && (Cd(),
            Ed = a);
            var d, e = String(b[Jb.wa] || "").replace(/_/g, "");
            0 === e.indexOf("cvt") && (e = "cvt");
            d = e;
            var f = c + d;
            Gd = Gd ? Gd + "." + f : "&tr=" + f;
            var h = b["function"];
            if (!h)
                throw Error("Error: No function name given for function call.");
            var k = (yb[h] ? "1" : "2") + d;
            Md = Md ? Md + "." + k : "&ti=" + k;
            Dd();
            2022 <= Ld().length && Cd()
        }
    }
      , Vd = function(a, b, c) {
        if (Rd && !Id[a]) {
            a !== Ed && (Cd(),
            Ed = a);
            var d = c + b;
            Hd = Hd ? Hd + "." + d : "&epr=" + d;
            Dd();
            2022 <= Ld().length && Cd()
        }
    };
    var Wd = {}
      , Xd = new ya
      , Yd = {}
      , Zd = {}
      , be = {
        name: "dataLayer",
        set: function(a, b) {
            n(Pa(a, b), Yd);
            $d()
        },
        get: function(a) {
            return ae(a, 2)
        },
        reset: function() {
            Xd = new ya;
            Yd = {};
            $d()
        }
    }
      , ae = function(a, b) {
        if (2 != b) {
            var c = Xd.get(a);
            if (Rd) {
                var d = ce(a);
                c !== d && I("GTM", 5)
            }
            return c
        }
        return ce(a)
    }
      , ce = function(a) {
        var b = a.split(".")
          , c = !1
          , d = void 0;
        var e = function(f, h) {
            for (var k = 0; void 0 !== f && k < b.length; k++) {
                if (null === f)
                    return !1;
                f = f[b[k]]
            }
            var l;
            if (void 0 !== f || 1 < k)
                l = f;
            else {
                var m;
                if (h.length) {
                    var p;
                    var r = h.pop();
                    if (r) {
                        var t = de(["gtag", "targets", r]);
                        p = Va(t) ? t : void 0
                    } else
                        p = void 0;
                    m = e(p, h)
                } else
                    m = de(b);
                l = m
            }
            return l
        };
        c = !0;
        d = e(Yd.eventModel, [void 0, void 0]);
        return c ? d : de(b)
    }
      , de = function(a) {
        for (var b = Yd, c = 0; c < a.length; c++) {
            if (null === b)
                return !1;
            if (void 0 === b)
                break;
            b = b[a[c]]
        }
        return b
    };
    var ee = function(a, b) {
        Zd.hasOwnProperty(a) || (Xd.set(a, b),
        n(Pa(a, b), Yd),
        $d())
    }
      , $d = function(a) {
        Ca(Zd, function(b, c) {
            Xd.set(b, c);
            n(Pa(b, void 0), Yd);
            n(Pa(b, c), Yd);
            a && delete Zd[b]
        })
    }
      , fe = function(a, b, c) {
        Wd[a] = Wd[a] || {};
        var d = 1 !== c ? ce(b) : Xd.get(b);
        "array" === Ta(d) || "object" === Ta(d) ? Wd[a][b] = n(d) : Wd[a][b] = d
    }
      , ge = function(a, b) {
        if (Wd[a])
            return Wd[a][b]
    }
      , he = function(a, b) {
        Wd[a] && delete Wd[a][b]
    };
    var ke = /:[0-9]+$/
      , le = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }
      , oe = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = me(a.protocol) || me(E.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || E.location.hostname).replace(ke, "").toLowerCase());
        return ne(a, b, c, d, e)
    }
      , ne = function(a, b, c, d, e) {
        var f, h = me(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = pe(a);
            break;
        case "protocol":
            f = h;
            break;
        case "host":
            f = a.hostname.replace(ke, "").toLowerCase();
            if (c) {
                var k = /^www\d*\./.exec(f);
                k && k[0] && (f = f.substr(k[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || I("TAGGING", 1);
            f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var l = f.split("/");
            0 <= ua(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
            f = l.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = le(f, e, void 0));
            break;
        case "extension":
            var m = a.pathname.split(".");
            f = 1 < m.length ? m[m.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , me = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , pe = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , qe = function(a) {
        var b = F.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || I("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(ke, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , re = function(a) {
        function b(m) {
            var p = m.split("=")[0];
            return 0 > d.indexOf(p) ? m : p + "=0"
        }
        function c(m) {
            return m.split("&").map(b).filter(function(p) {
                return void 0 != p
            }).join("&")
        }
        var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" ")
          , e = qe(a)
          , f = a.split(/[?#]/)[0]
          , h = e.search
          , k = e.hash;
        "?" === h[0] && (h = h.substring(1));
        "#" === k[0] && (k = k.substring(1));
        h = c(h);
        k = c(k);
        "" !== h && (h = "?" + h);
        "" !== k && (k = "#" + k);
        var l = "" + f + h + k;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    };
    function se(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("=")
              , k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    }
    ;var ue = function(a, b, c, d) {
        return te(d) ? se(a, String(b || document.cookie), c) : []
    }
      , xe = function(a, b, c, d, e) {
        if (te(e)) {
            var f = ve(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = we(f, function(h) {
                    return h.Tb
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = we(f, function(h) {
                    return h.yb
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function ye(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= ue(b, f, !1, d).indexOf(c)
    }
    var Ce = function(a, b, c) {
        function d(q, u, v) {
            if (null == v)
                return delete h[u],
                q;
            h[u] = v;
            return q + "; " + u + "=" + v
        }
        function e(q, u) {
            if (null == u)
                return delete h[u],
                q;
            h[u] = !0;
            return q + "; " + u
        }
        if (!te(c.Ca))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = ze(b),
        f = a + "=" + b);
        var h = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.Th);
        f = d(f, "samesite", c.Yh);
        c.Zh && (f = e(f, "secure"));
        var l = c.domain;
        if ("auto" === l) {
            for (var m = Ae(), p = 0; p < m.length; ++p) {
                var r = "none" !== m[p] ? m[p] : void 0
                  , t = d(f, "domain", r);
                t = e(t, c.flags);
                if (!Be(r, c.path) && ye(t, a, b, c.Ca))
                    return 0
            }
            return 1
        }
        l && "none" !== l && (f = d(f, "domain", l));
        f = e(f, c.flags);
        return Be(l, c.path) ? 1 : ye(f, a, b, c.Ca) ? 0 : 1
    }
      , De = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Ce(a, b, c)
    };
    function we(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h]
              , l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k],
            f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }
    function ve(a, b, c) {
        for (var d = [], e = ue(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split(".")
              , k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"),
                d.push({
                    id: h.join("."),
                    Tb: 1 * l[0] || 1,
                    yb: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var ze = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Ee = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Fe = /(^|\.)doubleclick\.net$/i
      , Be = function(a, b) {
        return Fe.test(document.location.hostname) || "/" === b && Ee.test(a)
    }
      , Ae = function() {
        var a = []
          , b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        Fe.test(e) || Ee.test(e) || a.push("none");
        return a
    }
      , te = function(a) {
        if (!Ac("gtag_cs_api") || !a || !Lc())
            return !0;
        if (!Kc(a))
            return !1;
        var b = Jc(a);
        return null == b ? !0 : !!b
    };
    var Ge = function() {
        for (var a = hc.userAgent + (F.cookie || "") + (F.referrer || ""), b = a.length, c = E.history.length; 0 < c; )
            a += c-- ^ b++;
        var d = 1, e, f, h;
        if (a)
            for (d = 0,
            f = a.length - 1; 0 <= f; f--)
                h = a.charCodeAt(f),
                d = (d << 6 & 268435455) + h + (h << 14),
                e = d & 266338304,
                d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Ia() / 1E3)].join(".")
    }
      , Je = function(a, b, c, d, e) {
        var f = He(b);
        return xe(a, f, Ie(c), d, e)
    }
      , Ke = function(a, b, c, d) {
        var e = "" + He(c)
          , f = Ie(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , He = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Ie = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function Le(a, b, c) {
        var d, e = a.wb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || Ia()) + 1E3 * e));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var Me = ["1"]
      , Ne = {}
      , Re = function(a) {
        var b = Oe(a.prefix);
        Ne[b] || Pe(b, a.path, a.domain) || (Qe(b, Ge(), a),
        Pe(b, a.path, a.domain))
    };
    function Qe(a, b, c) {
        var d = Ke(b, "1", c.domain, c.path)
          , e = Le(c);
        e.Ca = "ad_storage";
        De(a, d, e)
    }
    function Pe(a, b, c) {
        var d = Je(a, b, c, Me, "ad_storage");
        d && (Ne[a] = d);
        return d
    }
    function Oe(a) {
        return (a || "_gcl") + "_au"
    }
    ;var Se = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Te() {
        for (var a = Ue, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Ve() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ue, We;
    function Xe(a) {
        Ue = Ue || Ve();
        We = We || Te();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , h = d ? a.charCodeAt(c + 1) : 0
              , k = e ? a.charCodeAt(c + 2) : 0
              , l = f >> 2
              , m = (f & 3) << 4 | h >> 4
              , p = (h & 15) << 2 | k >> 6
              , r = k & 63;
            e || (r = 64,
            d || (p = 64));
            b.push(Ue[l], Ue[m], Ue[p], Ue[r])
        }
        return b.join("")
    }
    function Ye(a) {
        function b(l) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , p = We[m];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Ue = Ue || Ve();
        We = We || Te();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , h = b(64)
              , k = b(64);
            if (64 === k && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2),
            64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    }
    ;var Ze;
    var cf = function() {
        var a = $e
          , b = af
          , c = bf()
          , d = function(h) {
            a(h.target || h.srcElement || {})
        }
          , e = function(h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            pc(F, "mousedown", d);
            pc(F, "keyup", d);
            pc(F, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , df = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        bf().decorators.push(f)
    }
      , ef = function(a, b, c) {
        for (var d = bf().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h = d[f], k;
            if (k = !c || h.forms)
                a: {
                    var l = h.domains
                      , m = a
                      , p = !!h.sameHost;
                    if (l && (p || m !== F.location.hostname))
                        for (var r = 0; r < l.length; r++)
                            if (l[r]instanceof RegExp) {
                                if (l[r].test(m)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= m.indexOf(l[r]) || p && 0 <= l[r].indexOf(m)) {
                                k = !0;
                                break a
                            }
                    k = !1
                }
            if (k) {
                var t = h.placement;
                void 0 == t && (t = h.fragment ? 2 : 1);
                t === b && La(e, h.callback())
            }
        }
        return e
    }
      , bf = function() {
        var a = jc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    };
    var ff = /(.*?)\*(.*?)\*(.*)/
      , gf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , hf = /^(?:www\.|m\.|amp\.)+/
      , jf = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function kf(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var mf = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(Xe(String(d))))
            }
        var e = b.join("*");
        return ["1", lf(e), e].join("*")
    }
      , lf = function(a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Ze)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, k = 0; 8 > k; k++)
                    h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Ze = d;
        for (var l = 4294967295, m = 0; m < c.length; m++)
            l = l >>> 8 ^ Ze[(l ^ c.charCodeAt(m)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
      , of = function() {
        return function(a) {
            var b = qe(E.location.href)
              , c = b.search.replace("?", "")
              , d = le(c, "_gl", !0) || "";
            a.query = nf(d) || {};
            var e = oe(b, "fragment").match(kf("_gl"));
            a.fragment = nf(e && e[3] || "") || {}
        }
    }
      , pf = function(a) {
        var b = of()
          , c = bf();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (La(d, e.query),
        a && La(d, e.fragment));
        return d
    }
      , nf = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = ff.exec(d);
                        if (f) {
                            c = f;
                            break a
                        }
                        d = decodeURIComponent(d)
                    }
                    c = void 0
                }
                var h = c;
                if (h && "1" === h[1]) {
                    var k = h[3], l;
                    a: {
                        for (var m = h[2], p = 0; p < b; ++p)
                            if (m === lf(k, p)) {
                                l = !0;
                                break a
                            }
                        l = !1
                    }
                    if (l) {
                        for (var r = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2)
                            r[t[q]] = Ye(t[q + 1]);
                        return r
                    }
                }
            }
        } catch (u) {}
    };
    function qf(a, b, c, d) {
        function e(p) {
            var r = p
              , t = kf(a).exec(r)
              , q = r;
            if (t) {
                var u = t[2]
                  , v = t[4];
                q = t[1];
                v && (q = q + u + v)
            }
            p = q;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + m
        }
        d = void 0 === d ? !1 : d;
        var f = jf.exec(c);
        if (!f)
            return "";
        var h = f[1]
          , k = f[2] || ""
          , l = f[3] || ""
          , m = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }
    function rf(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = ef(b, 1, c)
          , e = ef(b, 2, c)
          , f = ef(b, 3, c);
        if (Ma(d)) {
            var h = mf(d);
            c ? sf("_gl", h, a) : tf("_gl", h, a, !1)
        }
        if (!c && Ma(e)) {
            var k = mf(e);
            tf("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a: {
                    var m = l
                      , p = f[l]
                      , r = a;
                    if (r.tagName) {
                        if ("a" === r.tagName.toLowerCase()) {
                            tf(m, p, r, void 0);
                            break a
                        }
                        if ("form" === r.tagName.toLowerCase()) {
                            sf(m, p, r);
                            break a
                        }
                    }
                    "string" == typeof r && qf(m, p, r, void 0)
                }
    }
    function tf(a, b, c, d) {
        if (c.href) {
            var e = qf(a, b, c.href, void 0 === d ? !1 : d);
            Se.test(e) && (c.href = e)
        }
    }
    function sf(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = F.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var m = qf(a, b, c.action);
                Se.test(m) && (c.action = m)
            }
        }
    }
    var $e = function(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || rf(e, e.hostname)
            }
        } catch (h) {}
    }
      , af = function(a) {
        try {
            if (a.action) {
                var b = oe(qe(a.action), "host");
                rf(a, b)
            }
        } catch (c) {}
    }
      , uf = function(a, b, c, d) {
        cf();
        df(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , vf = function(a, b) {
        cf();
        df(a, [ne(E.location, "host", !0)], b, !0, !0)
    }
      , wf = function() {
        var a = F.location.hostname
          , b = gf.exec(F.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , h = f[1];
            e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(hf, ""), l = e.replace(hf, ""), m;
        if (!(m = k === l)) {
            var p = "." + l;
            m = k.substring(k.length - p.length, k.length) === p
        }
        return m
    }
      , xf = function(a, b) {
        return !1 === a ? !1 : a || b || wf()
    };
    var yf = /^\w+$/
      , zf = /^[\w-]+$/
      , Af = /^~?[\w-]+$/
      , Bf = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp"
    }
      , Cf = function() {
        if (!Ac("gtag_cs_api") || !Lc())
            return !0;
        var a = Jc("ad_storage");
        return null == a ? !0 : !!a
    }
      , Df = function(a, b) {
        Kc("ad_storage") ? Cf() ? a() : Oc(a, "ad_storage") : b ? I("TAGGING", 3) : Nc(function() {
            Df(a, !0)
        }, ["ad_storage"])
    }
      , Gf = function(a) {
        var b = [];
        if (!F.cookie)
            return b;
        var c = ue(a, F.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = 0; d < c.length; d++) {
            var e = Ef(c[d]);
            e && -1 === ua(b, e) && b.push(e)
        }
        return Ff(b)
    };
    function Hf(a) {
        return a && "string" == typeof a && a.match(yf) ? a : "_gcl"
    }
    var Jf = function() {
        var a = qe(E.location.href)
          , b = oe(a, "query", !1, void 0, "gclid")
          , c = oe(a, "query", !1, void 0, "gclsrc")
          , d = oe(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || le(e, "gclid", void 0);
            c = c || le(e, "gclsrc", void 0)
        }
        return If(b, c, d)
    }
      , If = function(a, b, c) {
        var d = {}
          , e = function(f, h) {
            d[h] || (d[h] = []);
            d[h].push(f)
        };
        d.gclid = a;
        d.gclsrc = b;
        d.dclid = c;
        if (void 0 !== a && a.match(zf))
            switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                Ac("gtm_3pds") && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha");
                break;
            case "gp":
                e(a, "gp")
            }
        c && e(c, "dc");
        return d
    }
      , Lf = function(a) {
        var b = Jf();
        Df(function() {
            return Kf(b, a)
        })
    };
    function Kf(a, b, c) {
        function d(m, p) {
            var r = Mf(m, e);
            r && (De(r, p, f),
            h = !0)
        }
        b = b || {};
        var e = Hf(b.prefix);
        c = c || Ia();
        var f = Le(b, c, !0);
        f.Ca = "ad_storage";
        var h = !1
          , k = Math.round(c / 1E3)
          , l = function(m) {
            return ["GCL", k, m].join(".")
        };
        a.aw && (!0 === b.ci ? d("aw", l("~" + a.aw[0])) : d("aw", l(a.aw[0])));
        a.dc && d("dc", l(a.dc[0]));
        a.gf && d("gf", l(a.gf[0]));
        a.ha && d("ha", l(a.ha[0]));
        a.gp && d("gp", l(a.gp[0]));
        return h
    }
    var Of = function(a, b) {
        var c = pf(!0);
        Df(function() {
            for (var d = Hf(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Bf[f]) {
                    var h = Mf(f, d)
                      , k = c[h];
                    if (k) {
                        var l = Math.min(Nf(k), Ia()), m;
                        b: {
                            for (var p = l, r = ue(h, F.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                                if (Nf(r[t]) > p) {
                                    m = !0;
                                    break b
                                }
                            m = !1
                        }
                        if (!m) {
                            var q = Le(b, l, !0);
                            q.Ca = "ad_storage";
                            De(h, k, q)
                        }
                    }
                }
            }
            Kf(If(c.gclid, c.gclsrc), b)
        })
    }
      , Mf = function(a, b) {
        var c = Bf[a];
        if (void 0 !== c)
            return b + c
    }
      , Nf = function(a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    };
    function Ef(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1])
            return b[2]
    }
    var Pf = function(a, b, c, d, e) {
        if (sa(b)) {
            var f = Hf(e)
              , h = function() {
                for (var k = {}, l = 0; l < a.length; ++l) {
                    var m = Mf(a[l], f);
                    if (m) {
                        var p = ue(m, F.cookie, void 0, "ad_storage");
                        p.length && (k[m] = p.sort()[p.length - 1])
                    }
                }
                return k
            };
            Df(function() {
                uf(h, b, c, d)
            })
        }
    }
      , Ff = function(a) {
        return a.filter(function(b) {
            return Af.test(b)
        })
    }
      , Qf = function(a, b) {
        for (var c = Hf(b.prefix), d = {}, e = 0; e < a.length; e++)
            Bf[a[e]] && (d[a[e]] = Bf[a[e]]);
        Df(function() {
            Ca(d, function(f, h) {
                var k = ue(c + h, F.cookie, void 0, "ad_storage");
                if (k.length) {
                    var l = k[0]
                      , m = Nf(l)
                      , p = {};
                    p[f] = [Ef(l)];
                    Kf(p, b, m)
                }
            })
        })
    };
    function Rf(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Sf = function() {
        function a(e, f, h) {
            h && (e[f] = h)
        }
        var b = ["aw", "dc"];
        if (Lc()) {
            var c = Jf();
            if (Rf(c, b)) {
                var d = {};
                a(d, "gclid", c.gclid);
                a(d, "dclid", c.dclid);
                a(d, "gclsrc", c.gclsrc);
                vf(function() {
                    return d
                }, 3);
                vf(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , Tf = function() {
        var a;
        if (Cf()) {
            for (var b = [], c = F.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({
                    td: f[1],
                    value: f[2]
                })
            }
            var h = {};
            if (b && b.length)
                for (var k = 0; k < b.length; k++) {
                    var l = b[k].value.split(".");
                    "1" == l[0] && 3 == l.length && l[1] && (h[b[k].td] || (h[b[k].td] = []),
                    h[b[k].td].push({
                        timestamp: l[1],
                        yg: l[2]
                    }))
                }
            a = h
        } else
            a = {};
        return a
    };
    var Uf = /^\d+\.fls\.doubleclick\.net$/;
    function Vf(a, b) {
        Kc(C.o) ? Sc(C.o) ? a() : Uc(a) : b ? I("GTM", 42) : Vc(function() {
            Vf(a, !0)
        }, [C.o])
    }
    function Wf(a) {
        var b = qe(E.location.href)
          , c = oe(b, "host", !1);
        if (c && c.match(Uf)) {
            var d = oe(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    }
    function Xf(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = Wf("gcl" + a);
            if (d)
                return d.split(".")
        }
        var e = Hf(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Sc(C.o) && c, h;
            h = Jf()[a] || [];
            if (0 < h.length)
                return f ? ["0"] : h
        }
        var k = Mf(a, e);
        return k ? Gf(k) : []
    }
    var Yf = function(a) {
        var b = Wf("gac");
        if (b)
            return !Sc(C.o) && a ? "0" : decodeURIComponent(b);
        var c = Tf()
          , d = [];
        Ca(c, function(e, f) {
            for (var h = [], k = 0; k < f.length; k++)
                h.push(f[k].yg);
            h = Ff(h);
            h.length && d.push(e + ":" + h.join(","))
        });
        return d.join(";")
    }
      , Zf = function(a, b) {
        var c = Jf().dc || [];
        Vf(function() {
            Re(b);
            var d = Ne[Oe(b.prefix)]
              , e = !1;
            if (d && 0 < c.length) {
                var f = od.joined_au = od.joined_au || {}
                  , h = b.prefix || "_gcl";
                if (!f[h])
                    for (var k = 0; k < c.length; k++) {
                        var l = "http://ad.doubleclick.net/ddm/regclk";
                        l = l + "?gclid=" + c[k] + "&auiddc=" + d;
                        vc(l);
                        e = f[h] = !0
                    }
            }
            null == a && (a = e);
            if (a && d) {
                var m = Oe(b.prefix)
                  , p = Ne[m];
                p && Qe(m, p, b)
            }
        })
    };
    var $f = /[A-Z]+/
      , ag = /\s/
      , bg = function(a) {
        if (g(a) && (a = Ha(a),
        !ag.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if ($f.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e])
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        B: d
                    }
                }
            }
        }
    }
      , dg = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = bg(a[c]);
            d && (b[d.id] = d)
        }
        cg(b);
        var e = [];
        Ca(b, function(f, h) {
            e.push(h)
        });
        return e
    };
    function cg(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.B[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var eg = function() {
        var a = !1;
        return a
    };
    var S = function(a, b, c, d) {
        return (2 === fg() || d || "http:" != E.location.protocol ? a : b) + c
    }
      , fg = function() {
        var a = mc(), b;
        if (1 === a)
            a: {
                var c = sd;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = F.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var hg = function(a, b, c) {
        if (E[a.functionName])
            return b.fd && G(b.fd),
            E[a.functionName];
        var d = gg();
        E[a.functionName] = d;
        if (a.Qb)
            for (var e = 0; e < a.Qb.length; e++)
                E[a.Qb[e]] = E[a.Qb[e]] || gg();
        a.Yb && void 0 === E[a.Yb] && (E[a.Yb] = c);
        lc(S("https://", "http://", a.qd), b.fd, b.Wg);
        return d
    }
      , gg = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , ig = {
        functionName: "_googWcmImpl",
        Yb: "_googWcmAk",
        qd: "www.gstatic.com/wcm/loader.js"
    }
      , jg = {
        functionName: "_gaPhoneImpl",
        Yb: "ga_wpid",
        qd: "www.gstatic.com/gaphone/loader.js"
    }
      , kg = {
        Ze: "",
        Cf: "5"
    }
      , lg = {
        functionName: "_googCallTrackingImpl",
        Qb: [jg.functionName, ig.functionName],
        qd: "www.gstatic.com/call-tracking/call-tracking_" + (kg.Ze || kg.Cf) + ".js"
    }
      , mg = {}
      , ng = function(a, b, c, d) {
        I("GTM", 22);
        if (c) {
            d = d || {};
            var e = hg(ig, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.la && (f.autoreplace = c);
            e(2, d.la, f, c, 0, new Date, d.options)
        }
    }
      , og = function(a, b, c, d) {
        I("GTM", 21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: new Date
            }, f = 0; f < a.length; f++) {
                var h = a[f];
                mg[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.B.length ? (e.adData = {
                    ak: h.B[0],
                    cl: h.B[1]
                },
                mg[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                    gaWpid: h.containerId
                },
                mg[h.id] = !0))
            }
            (e.gaData || e.adData) && hg(lg, d)(d.la, e, d.options)
        }
    }
      , pg = function() {
        var a = !1;
        return a
    }
      , qg = function(a, b) {
        if (a)
            if (eg()) {} else {
                if (g(a)) {
                    var c = bg(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = b.getWithConfig(C.Bf);
                if (f && sa(f)) {
                    d = [];
                    for (var h = 0; h < f.length; h++) {
                        var k = bg(f[h]);
                        k && (d.push(k),
                        (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var l = b.getWithConfig(C.Ae), m;
                    if (l) {
                        sa(l) ? m = l : m = [l];
                        var p = b.getWithConfig(C.xe)
                          , r = b.getWithConfig(C.ye)
                          , t = b.getWithConfig(C.Be)
                          , q = b.getWithConfig(C.Af)
                          , u = p || r
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < m.length; w++)
                            if (w < v)
                                if (d)
                                    og(d, m[w], q, {
                                        la: u,
                                        options: t
                                    });
                                else if ("AW" === a.prefix && a.B[1])
                                    pg() ? og([a], m[w], q || "US", {
                                        la: u,
                                        options: t
                                    }) : ng(a.B[0], a.B[1], m[w], {
                                        la: u,
                                        options: t
                                    });
                                else if ("UA" === a.prefix)
                                    if (pg())
                                        og([a], m[w], q || "US", {
                                            la: u
                                        });
                                    else {
                                        var y = a.containerId
                                          , x = m[w]
                                          , A = {
                                            la: u
                                        };
                                        I("GTM", 23);
                                        if (x) {
                                            A = A || {};
                                            var B = hg(jg, A, y)
                                              , z = {};
                                            void 0 !== A.la ? z.receiver = A.la : z.replace = x;
                                            z.ga_wpid = y;
                                            z.destination = x;
                                            B(2, new Date, z)
                                        }
                                    }
                    }
                }
            }
    };
    var tg = function(a) {
        return Sc(C.o) ? a : a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = re(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        })
    };
    var ug = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , vg = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , wg = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , xg = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var zg = function(a) {
        var b = ae("gtm.whitelist");
        b && I("GTM", 9);
        b = "google gtagfl lcl zone oid op".split(" ");
        var c = b && Oa(Fa(b), vg)
          , d = ae("gtm.blacklist");
        d || (d = ae("tagTypeBlacklist")) && I("GTM", 3);
        d ? I("GTM", 8) : d = [];
        yg() && (d = Fa(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= ua(Fa(d), "google") && I("GTM", 2);
        var e = d && Oa(Fa(d), wg)
          , f = {};
        return function(h) {
            var k = h && h[Jb.wa];
            if (!k || "string" != typeof k)
                return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k])
                return f[k];
            var l = yd[k] || []
              , m = a(k, l);
            if (b) {
                var p;
                if (p = m)
                    a: {
                        if (0 > ua(c, k))
                            if (l && 0 < l.length)
                                for (var r = 0; r < l.length; r++) {
                                    if (0 > ua(c, l[r])) {
                                        I("GTM", 11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                m = p
            }
            var t = !1;
            if (d) {
                var q = 0 <= ua(e, k);
                if (q)
                    t = q;
                else {
                    var u = Aa(e, l || []);
                    u && I("GTM", 10);
                    t = u
                }
            }
            var v = !m || t;
            v || !(0 <= ua(l, "sandboxedScripts")) || c && -1 !== ua(c, "sandboxedScripts") || (v = Aa(e, xg));
            return f[k] = v
        }
    }
      , yg = function() {
        return ug.test(E.location && E.location.hostname)
    };
    var Bg = {
        jg: function(a, b) {
            b[Jb.Dd] && "string" === typeof a && (a = 1 == b[Jb.Dd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Jb.Fd) && null === a && (a = b[Jb.Fd]);
            b.hasOwnProperty(Jb.Hd) && void 0 === a && (a = b[Jb.Hd]);
            b.hasOwnProperty(Jb.Gd) && !0 === a && (a = b[Jb.Gd]);
            b.hasOwnProperty(Jb.Ed) && !1 === a && (a = b[Jb.Ed]);
            return a
        }
    };
    var Cg = {
        active: !0,
        isWhitelisted: function() {
            return !0
        }
    }
      , Dg = function(a) {
        var b = od.zones;
        !b && a && (b = od.zones = a());
        return b
    };
    var Eg = function() {};
    var Fg = !1
      , Gg = 0
      , Hg = [];
    function Ig(a) {
        if (!Fg) {
            var b = F.createEventObject
              , c = "complete" == F.readyState
              , d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Fg = !0;
                for (var e = 0; e < Hg.length; e++)
                    G(Hg[e])
            }
            Hg.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    G(arguments[f]);
                return 0
            }
        }
    }
    function Jg() {
        if (!Fg && 140 > Gg) {
            Gg++;
            try {
                F.documentElement.doScroll("left"),
                Ig()
            } catch (a) {
                E.setTimeout(Jg, 50)
            }
        }
    }
    var Kg = function(a) {
        Fg ? a() : Hg.push(a)
    };
    var Lg = {}
      , Mg = {}
      , Ng = function(a, b, c, d) {
        if (!Mg[a] || qd[b] || "__zone" === b)
            return -1;
        var e = {};
        Va(d) && (e = n(d, e));
        e.id = c;
        e.status = "timeout";
        return Mg[a].tags.push(e) - 1
    }
      , Og = function(a, b, c, d) {
        if (Mg[a]) {
            var e = Mg[a].tags[b];
            e && (e.status = c,
            e.executionTime = d)
        }
    };
    function Pg(a) {
        for (var b = Lg[a] || [], c = 0; c < b.length; c++)
            b[c]();
        Lg[a] = {
            push: function(d) {
                d(K.s, Mg[a])
            }
        }
    }
    var Sg = function(a, b, c) {
        Mg[a] = {
            tags: []
        };
        qa(b) && Qg(a, b);
        c && E.setTimeout(function() {
            return Pg(a)
        }, Number(c));
        return Rg(a)
    }
      , Qg = function(a, b) {
        Lg[a] = Lg[a] || [];
        Lg[a].push(Ka(function() {
            return G(function() {
                b(K.s, Mg[a])
            })
        }))
    };
    function Rg(a) {
        var b = 0
          , c = 0
          , d = !1;
        return {
            add: function() {
                c++;
                return Ka(function() {
                    b++;
                    d && b >= c && Pg(a)
                })
            },
            Xf: function() {
                d = !0;
                b >= c && Pg(a)
            }
        }
    }
    ;var Tg = function() {
        function a(d) {
            return !ra(d) || 0 > d ? 0 : d
        }
        if (!od._li && E.performance && E.performance.timing) {
            var b = E.performance.timing.navigationStart
              , c = ra(be.get("gtm.start")) ? be.get("gtm.start") : 0;
            od._li = {
                cst: a(c - b),
                cbt: a(ud - b)
            }
        }
    };
    var Xg = {}
      , Yg = function() {
        return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
    }
      , Zg = !1;
    var $g = function(a) {
        E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
        var b = E.GoogleAnalyticsObject;
        if (E[b])
            E.hasOwnProperty(b) || I("GTM", 12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            E[b] = c
        }
        Tg();
        return E[b]
    }
      , ah = function(a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = Yg();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var ch = function(a) {}
      , bh = function() {
        return E.GoogleAnalyticsObject || "ga"
    };
    var dh = function(a, b) {
        return function() {
            var c = Yg()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var h = f.get("hitPayload")
                      , k = f.get("hitCallback")
                      , l = 0 > h.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", h, !0),
                    f.set("hitCallback", k, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    function ih(a, b, c, d) {
        var e = wb[a]
          , f = jh(a, b, c, d);
        if (!f)
            return null;
        var h = Fb(e[Jb.Ud], c, []);
        if (h && h.length) {
            var k = h[0];
            f = ih(k.index, {
                D: f,
                C: 1 === k.se ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function jh(a, b, c, d) {
        function e() {
            if (f[Jb.rf])
                k();
            else {
                var w = Gb(f, c, [])
                  , y = Ng(c.id, String(f[Jb.wa]), Number(f[Jb.Wd]), w[Jb.sf])
                  , x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var z = Ia() - B;
                        Ud(c.id, wb[a], "5");
                        Og(c.id, y, "success", z);
                        h()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var z = Ia() - B;
                        Ud(c.id, wb[a], "6");
                        Og(c.id, y, "failure", z);
                        k()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Ud(c.id, f, "1");
                var A = function() {
                    var z = Ia() - B;
                    Ud(c.id, f, "7");
                    Og(c.id, y, "exception", z);
                    x || (x = !0,
                    k())
                };
                var B = Ia();
                try {
                    Eb(w, c)
                } catch (z) {
                    A(z)
                }
            }
        }
        var f = wb[a]
          , h = b.D
          , k = b.C
          , l = b.terminate;
        if (c.$c(f))
            return null;
        var m = Fb(f[Jb.Xd], c, []);
        if (m && m.length) {
            var p = m[0]
              , r = ih(p.index, {
                D: h,
                C: k,
                terminate: l
            }, c, d);
            if (!r)
                return null;
            h = r;
            k = 2 === p.se ? l : r
        }
        if (f[Jb.Md] || f[Jb.wf]) {
            var t = f[Jb.Md] ? xb : c.qh
              , q = h
              , u = k;
            if (!t[a]) {
                e = Ka(e);
                var v = kh(a, t, e);
                h = v.D;
                k = v.C
            }
            return function() {
                t[a](q, u)
            }
        }
        return e
    }
    function kh(a, b, c) {
        var d = []
          , e = [];
        b[a] = lh(d, e, c);
        return {
            D: function() {
                b[a] = mh;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            C: function() {
                b[a] = nh;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function lh(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function mh(a) {
        a()
    }
    function nh(a, b) {
        b()
    }
    ;var qh = function(a, b) {
        for (var c = [], d = 0; d < wb.length; d++)
            if (a.xb[d]) {
                var e = wb[d];
                var f = b.add();
                try {
                    var h = ih(d, {
                        D: f,
                        C: f,
                        terminate: f
                    }, a, d);
                    h ? c.push({
                        We: d,
                        Oe: Hb(e),
                        ug: h
                    }) : (oh(d, a),
                    f())
                } catch (l) {
                    f()
                }
            }
        b.Xf();
        c.sort(ph);
        for (var k = 0; k < c.length; k++)
            c[k].ug();
        return 0 < c.length
    };
    function ph(a, b) {
        var c, d = b.Oe, e = a.Oe;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var h = a.We
              , k = b.We;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }
    function oh(a, b) {
        if (!Rd)
            return;
        var c = function(d) {
            var e = b.$c(wb[d]) ? "3" : "4"
              , f = Fb(wb[d][Jb.Ud], b, []);
            f && f.length && c(f[0].index);
            Ud(b.id, wb[d], e);
            var h = Fb(wb[d][Jb.Xd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var rh = !1
      , sh = function(a, b, c, d, e) {
        if ("gtm.js" == b) {
            if (rh)
                return !1;
            rh = !0
        }
        Td(a, b);
        var f = Sg(a, d, e);
        fe(a, "event", 1);
        fe(a, "ecommerce", 1);
        fe(a, "gtm");
        var h = {
            id: a,
            name: b,
            $c: zg(c),
            xb: [],
            qh: [],
            Fe: function() {
                I("GTM", 6)
            }
        };
        h.xb = Nb(h);
        var k = qh(h, f);
        "gtm.js" !== b && "gtm.sync" !== b || ch(K.s);
        if (!k)
            return k;
        for (var l = 0; l < h.xb.length; l++)
            if (h.xb[l]) {
                var m = wb[l];
                if (m && !qd[String(m[Jb.wa])])
                    return !0
            }
        return !1
    };
    var th = function(a, b) {
        var c = Cb(a, b);
        wb.push(c);
        return wb.length - 1
    };
    function uh(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return qe("" + c + b).href
        }
    }
    function vh(a, b) {
        return wh() ? uh(a, b) : void 0
    }
    function wh() {
        var a = !1;
        return a
    }
    ;var xh = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.h = {};
        this.globalConfig = {};
        this.D = function() {}
        ;
        this.C = function() {}
        ;
        this.eventId = void 0
    }
      , yh = function(a) {
        var b = new xh;
        b.eventModel = a;
        return b
    }
      , zh = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , Ah = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , Bh = function(a, b) {
        a.h = b;
        return a
    }
      , Ch = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , Dh = function(a, b) {
        a.D = b;
        return a
    }
      , Eh = function(a, b) {
        a.C = b;
        return a
    };
    xh.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.h[a])
            return this.h[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a]
    }
    ;
    var Fh = function(a) {
        function b(e) {
            Ca(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Ca(c, function(e) {
            d.push(e)
        });
        return d
    };
    var Gh;
    if (3 === K.Ob.length)
        Gh = "g";
    else {
        var Hh = "G";
        Hh = "g";
        Gh = Hh
    }
    var Ih = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: Gh,
        OPT: "o"
    }
      , Jh = function(a) {
        var b = K.s.split("-"), c = b[0].toUpperCase(), d = Ih[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === K.Ob.length) {
            var h = "w";
            h = eg() ? "s" : "o";
            f = "2" + h
        } else
            f = "";
        return f + d + K.Ob + e
    };
    function Kh() {
        var a = !1;
        a = Lc();
        return a
    }
    function Lh(a, b, c) {
        function d(r) {
            var t;
            od.reported_gclid || (od.reported_gclid = {});
            t = od.reported_gclid;
            var q = f + (r ? "gcu" : "gcs");
            if (!t[q]) {
                t[q] = !0;
                var u = []
                  , v = function(B, z) {
                    z && u.push(B + "=" + encodeURIComponent(z))
                }
                  , w = "https://www.google.com";
                if (Lc()) {
                    var y = Sc(C.o);
                    v("gcs", Tc());
                    r && v("gcu", "1");
                    v("rnd", p);
                    if ((!f || h && "aw.ds" !== h) && Sc(C.o)) {
                        var x = Gf("_gcl_aw");
                        v("gclaw", x.join("."))
                    }
                    v("url", String(E.location).split(/[?#]/)[0]);
                    v("dclid", Mh(b, k));
                    !y && b && (w = "https://pagead2.googlesyndication.com")
                }
                "1" === pf(!1)._up && v("gtm_up", "1");
                v("gclid", Mh(b, f));
                v("gclsrc", h);
                v("gtm", Jh(!c));
                var A = w + "/pagead/landing?" + u.join("&");
                vc(A)
            }
        }
        var e = Jf()
          , f = e.gclid || ""
          , h = e.gclsrc
          , k = e.dclid || ""
          , l = !a && (!f || h && "aw.ds" !== h ? !1 : !0)
          , m = Kh();
        if (l || m) {
            var p = "" + Ge();
            m ? Vc(function() {
                d();
                Sc(C.o) || Uc(function() {
                    return d(!0)
                })
            }, [C.o]) : d()
        }
    }
    function Mh(a, b) {
        var c = a && !Sc(C.o);
        if (b && c)
            return "0";
        return b
    }
    var Nh = function(a) {
        var b = vh(a, "/pagead/conversion_async.js");
        return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? S("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js"
    }
      , Oh = !1
      , Ph = []
      , Qh = ["aw", "dc"]
      , Rh = function(a) {
        var b = E.google_trackConversion
          , c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c()
    }
      , Sh = function() {
        for (; 0 < Ph.length; )
            Rh(Ph.shift())
    }
      , Th = function(a) {
        if (!Oh) {
            Oh = !0;
            Tg();
            var b = function() {
                Sh();
                Ph = {
                    push: Rh
                }
            };
            eg() ? b() : lc(a, b, function() {
                Sh();
                Oh = !1
            })
        }
    }
      , Uh = function(a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        }
    }
      , Vh = function(a, b, c, d) {
        function e(Q) {
            var O = !0;
            O && Ph.push(D)
        }
        var f = bg(a)
          , h = b == C.I
          , k = f.B[0]
          , l = f.B[1]
          , m = void 0 !== l
          , p = function(Q) {
            return d.getWithConfig(Q)
        }
          , r = void 0 != p(C.N) && !1 !== p(C.N)
          , t = !1 !== p(C.Ka)
          , q = p(C.Ja) || p(C.Z)
          , u = p(C.Y)
          , v = p(C.ia)
          , w = p(C.ca)
          , y = p(C.va)
          , x = Nh(y)
          , A = {
            prefix: q,
            domain: u,
            wb: v,
            flags: w
        };
        if (h) {
            var B = p(C.xa) || {};
            t && (xf(B[C.hb], !!B[C.L]) && Of(Qh, A),
            Lf(A),
            Qf(["aw", "dc"], A));
            p(C.ob) && Sf();
            B[C.L] && Pf(Qh, B[C.L], B[C.jb], !!B[C.ib], q);
            qg(f, d);
            Lh(!1, r, a);
        }
        var z = !1 === p(C.Qd) || !1 === p(C.mb);
        if (!h || !m && !z)
            if (!0 === p(C.Td) && (m = !1),
            !1 !== p(C.fa) || m) {
                var D = {
                    google_conversion_id: k,
                    google_remarketing_only: !m,
                    onload_callback: d.D,
                    gtm_onFailure: d.C,
                    google_conversion_format: "3",
                    google_conversion_color: "ffffff",
                    google_conversion_domain: "",
                    google_conversion_label: l,
                    google_conversion_language: p(C.Ma),
                    google_conversion_value: p(C.da),
                    google_conversion_currency: p(C.ja),
                    google_conversion_order_id: p(C.nb),
                    google_user_id: p(C.rb),
                    google_conversion_page_url: p(C.kb),
                    google_conversion_referrer_url: p(C.lb),
                    google_gtm: Jh()
                };
                m && (D.google_transport_url = uh(y, "/"));
                D.google_restricted_data_processing = p(C.Bc);
                eg() && (D.opt_image_generator = function() {
                    return new Image
                }
                ,
                D.google_enable_display_cookie_match = !1);
                !1 === p(C.fa) && (D.google_allow_ad_personalization_signals = !1);
                D.google_read_gcl_cookie_opt_out = !t;
                t && q && (D.google_gcl_cookie_prefix = q);
                var H = function() {
                    var Q = p(C.bc)
                      , O = {
                        event: b
                    };
                    if (sa(Q)) {
                        I("GTM", 26);
                        for (var la = 0; la < Q.length; ++la) {
                            var fa = Q[la]
                              , M = p(fa);
                            void 0 !== M && (O[fa] = M)
                        }
                        return O
                    }
                    var J = d.eventModel;
                    if (!J)
                        return null;
                    n(J, O);
                    for (var V = 0; V < C.Kd.length; ++V)
                        delete O[C.Kd[V]];
                    return O
                }();
                H && (D.google_custom_params = H);
                !m && p(C.T) && (D.google_gtag_event_data = {
                    items: p(C.T),
                    value: p(C.da)
                });
                if (m && b == C.na) {
                    D.google_conversion_merchant_id = p(C.be);
                    D.google_basket_feed_country = p(C.Zd);
                    D.google_basket_feed_language = p(C.$d);
                    D.google_basket_discount = p(C.Vd);
                    D.google_basket_transaction_type = b;
                    D.google_disable_merchant_reported_conversions = !0 === p(C.ee);
                    eg() && (D.google_disable_merchant_reported_conversions = !0);
                    var L = Uh(p(C.T));
                    L && (D.google_conversion_items = L)
                }
                var N = function(Q, O) {
                    void 0 != O && "" !== O && (D.google_additional_conversion_params = D.google_additional_conversion_params || {},
                    D.google_additional_conversion_params[Q] = O)
                };
                "1" === pf(!1)._up && N("gtm_up", "1");
                m && (N("vdnc", p(C.pe)),
                N("vdltv", p(C.ce)));
                D.google_gtm_url_processor = function(Q) {
                    r && (Q = tg(Q));
                    return Q
                }
                ;
                (function() {
                    var Q = !1;
                    Q = !0;
                    Q && Lc() ? Vc(function() {
                        var O = Sc(C.o);
                        if (m)
                            N("gcs", Tc()),
                            O || y || !r || (D.google_transport_url = "https://pagead2.googlesyndication.com/"),
                            e(O);
                        else if (O) {
                            e(O);
                            return
                        }
                        O || Uc(function() {
                            D = n(D);
                            !y && D.google_transport_url && delete D.google_transport_url;
                            m && (N("gcs", Tc()),
                            N("gcu", "1"));
                            e(!0)
                        })
                    }, [C.o]) : e(!0)
                }
                )()
            }
        Th(x)
    };
    var Wh = function(a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }
      , Xh = function(a, b) {
        var c;
        if (2 === b.X)
            return a("ord", xa(1E11, 1E13)),
            !0;
        if (3 === b.X)
            return a("ord", "1"),
            a("num", xa(1E11, 1E13)),
            !0;
        if (4 === b.X)
            return Wh(b.sessionId) && a("ord", b.sessionId),
            !0;
        if (5 === b.X)
            c = "1";
        else if (6 === b.X)
            c = b.od;
        else
            return !1;
        Wh(c) && a("qty", c);
        Wh(b.Rb) && a("cost", b.Rb);
        Wh(b.transactionId) && a("ord", b.transactionId);
        return !0
    }
      , Zh = function(a, b, c) {
        function d(A, B, z) {
            r.hasOwnProperty(A) || (B = String(B),
            p.push(";" + A + "=" + (z ? B : Yh(B))))
        }
        var e = a.Tc
          , f = a.rd
          , h = a.protocol;
        h += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        var k = ";"
          , l = !0;
        l = Sc(C.o);
        var m = !l && a.zb;
        m && (h = "https://ade.googlesyndication.com/ddm/activity",
        k = "/",
        f = !1);
        var p = [k, "src=" + Yh(e), ";type=" + Yh(a.Wc), ";cat=" + Yh(a.qb)]
          , r = a.og || {};
        Ca(r, function(A, B) {
            p.push(";" + Yh(A) + "=" + Yh(B + ""))
        });
        if (Xh(d, a)) {
            Wh(a.vc) && d("u", a.vc);
            Wh(a.uc) && d("tran", a.uc);
            d("gtm", Jh());
            Lc() && (d("gcs", Tc()),
            c && d("gcu", "1"));
            "1" === pf(!1)._up && d("gtm_up", "1");
            !1 === a.Tf && d("npa", "1");
            if (a.Sc) {
                var t = void 0 === a.zb ? !0 : !!a.zb
                  , q = Xf("dc", a.Na, t);
                q && q.length && d("gcldc", q.join("."));
                var u = Xf("aw", a.Na, t);
                u && u.length && d("gclaw", u.join("."));
                var v = Yf(t);
                v && d("gac", v);
                Re({
                    prefix: a.Na,
                    wb: a.lg,
                    domain: a.kg,
                    flags: a.Nh
                });
                var w = Ne[Oe(a.Na)];
                w && d("auiddc", w)
            }
            Wh(a.kd) && d("prd", a.kd, !0);
            Ca(a.vd, function(A, B) {
                d(A, B)
            });
            p.push(b || "");
            if (Wh(a.hc)) {
                var y = a.hc || "";
                m && (y = re(y));
                d("~oref", y)
            }
            var x = h + p.join("") + "?";
            f ? nc(x, a.D) : oc(x, a.D, a.C)
        } else
            G(a.C)
    }
      , Yh = encodeURIComponent
      , $h = function(a, b) {
        var c = !1;
        c = !0;
        c && Lc() ? Vc(function() {
            Zh(a, b);
            Sc(C.o) || Uc(function() {
                Zh(a, b, !0)
            })
        }, [C.o]) : Zh(a, b)
    };
    var ai = function(a, b, c, d) {
        function e() {
            var f = {
                config: a,
                gtm: Jh()
            };
            c && (Re(d),
            f.auiddc = Ne[Oe(d.prefix)]);
            b && (f.loadInsecure = b);
            void 0 === E.__dc_ns_processor && (E.__dc_ns_processor = []);
            E.__dc_ns_processor.push(f);
            lc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        }
        Sc(C.o) ? e() : Uc(e)
    }
      , bi = function(a) {
        var b = /^u([1-9]\d?|100)$/
          , c = a.getWithConfig(C.de) || {}
          , d = Fh(a)
          , e = {}
          , f = {};
        if (Va(c))
            for (var h in c)
                if (c.hasOwnProperty(h) && b.test(h)) {
                    var k = c[h];
                    g(k) && (e[h] = k)
                }
        for (var l = 0; l < d.length; l++) {
            var m = d[l];
            b.test(m) && (e[m] = m)
        }
        for (var p in e)
            e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]));
        return f
    }
      , ci = function(a) {
        function b(l, m, p) {
            void 0 !== p && 0 !== (p + "").length && d.push(l + m + ":" + c(p + ""))
        }
        var c = encodeURIComponent
          , d = []
          , e = a(C.T) || [];
        if (sa(e))
            for (var f = 0; f < e.length; f++) {
                var h = e[f]
                  , k = f + 1;
                b("i", k, h.id);
                b("p", k, h.price);
                b("q", k, h.quantity);
                b("c", k, a(C.df));
                b("l", k, a(C.Ma))
            }
        return d.join("|")
    }
      , di = function(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
            var c = {
                standard: 2,
                unique: 3,
                per_session: 4,
                transactions: 5,
                items_sold: 6,
                "": 1
            }[(b[5] || "").toLowerCase()];
            if (c)
                return {
                    containerId: "DC-" + b[1],
                    ba: b[3] ? a : "",
                    Nf: b[1],
                    Mf: b[3] || "",
                    qb: b[4] || "",
                    X: c
                }
        }
    }
      , fi = function(a, b, c, d) {
        var e = di(a);
        if (e) {
            var f = function(O) {
                return d.getWithConfig(O)
            }
              , h = !1 !== f(C.Ka)
              , k = f(C.Ja) || f(C.Z)
              , l = f(C.Y)
              , m = f(C.ia)
              , p = f(C.ca)
              , r = f(C.ff)
              , t = 3 === fg();
            if (b === C.I) {
                var q = {
                    prefix: k,
                    domain: l,
                    wb: m,
                    flags: p
                }
                  , u = f(C.xa) || {}
                  , v = f(C.Ib)
                  , w = void 0 === v ? !0 : !!v;
                h && (xf(u[C.hb], !!u[C.L]) && Of(ei, q),
                Lf(q),
                Qf(ei, q),
                Zf(w, q));
                u[C.L] && Pf(ei, u[C.L], u[C.jb], !!u[C.ib], k);
                f(C.ob) && Sf();
                if (r && r.exclusion_parameters && r.engines)
                    if (eg()) {} else
                        ai(r, t, h, q);
                var y = void 0 != f(C.N) && !1 !== f(C.N);
                Lh(!0, y, a);
                G(d.D)
            } else {
                var x = {}
                  , A = f(C.ef);
                if (Va(A))
                    for (var B in A)
                        if (A.hasOwnProperty(B)) {
                            var z = A[B];
                            void 0 !== z && null !== z && (x[B] = z)
                        }
                var D = "";
                if (5 === e.X || 6 === e.X)
                    D = ci(f);
                var H = bi(d)
                  , L = !0 === f(C.$e);
                if (eg() && L) {
                    L = !1
                }
                var N = void 0 != f(C.N) && !1 !== f(C.N)
                  , Q = {
                    qb: e.qb,
                    Sc: h,
                    kg: l,
                    lg: m,
                    Na: k,
                    Rb: f(C.da),
                    X: e.X,
                    og: x,
                    Tc: e.Nf,
                    Wc: e.Mf,
                    C: d.C,
                    D: d.D,
                    hc: pe(qe(E.location.href)),
                    kd: D,
                    protocol: t ? "http:" : "https:",
                    od: f(C.Df),
                    rd: L,
                    sessionId: f(C.fc),
                    uc: void 0,
                    transactionId: f(C.nb),
                    vc: void 0,
                    vd: H,
                    Tf: !1 !== f(C.fa),
                    eventId: d.eventId,
                    zb: N
                };
                $h(Q)
            }
        } else
            G(d.C)
    }
      , ei = ["aw", "dc"];
    var hi = function(a) {
        function b() {
            var d = c
              , e = gi(JSON.stringify(a[d]))
              , f = "https://www.google.com/travel/flights/click/conversion/" + gi(a.conversion_id) + "/?" + d + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = Xf("gf", a.cookiePrefix, void 0);
                if (h && h.length)
                    for (var k = 0; k < h.length; k++)
                        f += "&gclgf=" + gi(h[k])
            }
            oc(f, a.onSuccess, a.onFailure)
        }
        var c;
        if (a.hasOwnProperty("conversion_data"))
            c = "conversion_data";
        else if (a.hasOwnProperty("price"))
            c = "price";
        else
            return;
        Sc(C.o) ? b() : Uc(b)
    }
      , gi = function(a) {
        return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
    };
    var ii = /.*\.google\.com(:\d+)?\/booking\/flights.*/
      , ki = function(a, b, c, d) {
        var e = function(y) {
            return d.getWithConfig(y)
        }
          , f = bg(a).B[0]
          , h = !1 !== e(C.Ka)
          , k = e(C.Ja) || e(C.Z)
          , l = e(C.Y)
          , m = e(C.ia)
          , p = e(C.ca);
        if (b === C.I) {
            if (h) {
                var r = {
                    prefix: k,
                    domain: l,
                    flags: p,
                    wb: m
                };
                Lf(r);
                Qf(["aw", "dc"], r)
            }
            G(d.D)
        } else {
            var t = {
                conversion_id: f,
                onFailure: d.C,
                onSuccess: d.D,
                conversionLinkerEnabled: h,
                cookiePrefix: k
            }
              , q = ii.test(E.location.href);
            if (b === C.Ia) {
                var u = {
                    partner_id: f,
                    is_direct_booking: q,
                    total_price: e(C.da),
                    currency: e(C.ja)
                };
                t.price = u;
                hi(t);
                return
            }
            if (b !== C.na)
                G(d.C);
            else {
                var v = {
                    partner_id: f,
                    trip_type: e(C.If),
                    total_price: e(C.da),
                    currency: e(C.ja),
                    is_direct_booking: q,
                    flight_segment: ji(e(C.T))
                }
                  , w = e(C.qe);
                w && "object" === typeof w && (v.passengers_total = Da(w.total),
                v.passengers_adult = Da(w.adult),
                v.passengers_child = Da(w.child),
                v.passengers_infant_in_seat = Da(w.infant_in_seat),
                v.passengers_infant_in_lap = Da(w.infant_in_lap));
                t.conversion_data = v;
                hi(t)
            }
        }
    }
      , ji = function(a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                    cabin: e.travel_class,
                    fare_product: e.fare_product,
                    booking_code: e.booking_code,
                    flight_number: e.flight_number,
                    origin: e.origin,
                    destination: e.destination,
                    departure_date: e.start_date
                },
                c++)
            }
            return b
        }
    };
    var pi = function(a, b, c, d) {
        function e() {
            if (k) {
                var x = b === C.Ia ? Xf("aw", l, void 0) : Xf("ha", l, void 0);
                v += x.map(function(A) {
                    return "&gclha=" + encodeURIComponent(A)
                }).join("")
            }
            oc(v, d.D, d.C)
        }
        var f = bg(a)
          , h = function(x) {
            return d.getWithConfig(x)
        }
          , k = !1 !== h(C.Ka)
          , l = h(C.Ja) || h(C.Z)
          , m = h(C.Y)
          , p = h(C.ia)
          , r = h(C.ca);
        if (b === C.I) {
            var t = h(C.xa) || {};
            if (k) {
                var q = {
                    prefix: l,
                    domain: m,
                    flags: r,
                    wb: p
                };
                xf(t[C.hb], !!t[C.L]) && Of(li, q);
                Lf(q);
                Qf(["aw", "dc"], q)
            }
            t[C.L] && Pf(li, t[C.L], t[C.jb], !!t[C.ib], l);
            G(d.D)
        } else {
            var u = f.B[0];
            if (/^\d+$/.test(u)) {
                var v = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + encodeURIComponent(u) + "/";
                if (b === C.na) {
                    var w = mi(h(C.nb), h(C.da), h(C.ja), h(C.T));
                    w = encodeURIComponent(ni(w));
                    v += "?data=" + w
                } else if (b === C.Ia) {
                    var y = oi(u, h(C.da), h(C.he), h(C.ja), h(C.T));
                    y = encodeURIComponent(ni(y));
                    v += "?label=FH&guid=ON&script=0&ord=" + xa(0, 4294967295) + ("&price=" + y)
                } else {
                    G(d.C);
                    return
                }
                Sc(C.o) ? e() : Uc(e)
            } else
                G(d.C)
        }
    }
      , mi = function(a, b, c, d) {
        var e = {};
        qi(a) && (e.hct_booking_xref = a);
        g(c) && (e.hct_currency_code = c);
        qi(b) && (e.hct_total_price = b,
        e.hct_base_price = b);
        if (!sa(d) || 0 === d.length)
            return e;
        var f = d[0];
        if (!Va(f))
            return e;
        qi(f[ri.za]) && (e.hct_partner_hotel_id = f[ri.za]);
        g(f[ri.oa]) && (e.hct_checkin_date = f[ri.oa]);
        g(f[ri.Ya]) && (e.hct_checkout_date = f[ri.Ya]);
        return e
    }
      , oi = function(a, b, c, d, e) {
        function f(p) {
            void 0 === p && (p = 0);
            if (qi(p))
                return l + p
        }
        function h(p, r, t) {
            t(r) && (k[p] = r)
        }
        var k = {};
        k.partner_id = a;
        var l = "USD";
        g(d) && (l = k.currency = d);
        qi(b) && (k.base_price_value_string = f(b),
        k.display_price_value_string = f(b));
        qi(c) && (k.tax_price_value_string = f(c));
        g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
        if (!sa(e) || 0 == e.length)
            return k;
        var m = e[0];
        if (!Va(m))
            return k;
        qi(m[ri.Od]) && (k.total_price_value_string = f(m[ri.Od]));
        h("partner_hotel_id", m[ri.za], qi);
        h("check_in_date", m[ri.oa], g);
        h("check_out_date", m[ri.Ya], g);
        h("adults", m[ri.vf], si);
        h(ri.Sd, m[ri.Sd], g);
        h(ri.Rd, m[ri.Rd], g);
        return k
    }
      , ni = function(a) {
        var b = [];
        Ca(a, function(c, d) {
            b.push(c + "=" + d)
        });
        return b.join(";")
    }
      , qi = function(a) {
        return g(a) || si(a)
    }
      , si = function(a) {
        return "number" === typeof a
    }
      , ri = {
        za: "id",
        Od: "price",
        oa: "start_date",
        Ya: "end_date",
        vf: "occupancy",
        Sd: "room_id",
        Rd: "rate_rule_id"
    }
      , li = ["ha"];
    var vi = function(a, b, c, d) {
        var e = bg(a)
          , f = !1 !== d.getWithConfig(C.Ka)
          , h = d.getWithConfig(C.Ja) || d.getWithConfig(C.Z)
          , k = d.getWithConfig(C.ca);
        if (b === C.I) {
            if (f) {
                var l = {
                    prefix: h,
                    flags: k
                };
                Lf(l);
                Qf(["aw", "dc"], l)
            }
            G(d.D)
        } else if (b === C.na) {
            var m = d.getWithConfig(C.da)
              , p = d.getWithConfig(C.ja)
              , r = d.getWithConfig(C.qe)
              , t = d.getWithConfig(C.T)
              , q = {};
            if (g(m) || "number" === typeof m)
                q.base_price_value_string = "" + p + m,
                q.tax_price_value_string = p + "0";
            Va(r) && "number" === typeof r.adult && (q.adult_count = r.adult);
            if (sa(t) && 0 !== t.length) {
                var u = t[0];
                if (Va(u)) {
                    if (g(u[ti.za]) || "number" === typeof u[ti.za])
                        q.partner_hotel_id = u[ti.za];
                    g(u[ti.oa]) && (q.hotel_checkin_date = u[ti.oa]);
                    var v = u[ti.Ya];
                    g(v) && (q.hotel_checkout_date = v,
                    q.return_date = v);
                    if (1 !== t.length) {
                        var w = t[1];
                        if (Va(w)) {
                            q.origin_airport = w[ti.xf];
                            q.departure_date = w[ti.oa];
                            for (var y = [w[ti.Yd]], x = [w[ti.Cd]], A = [w[ti.Id]], B = null !== v && g(v), z = 1, D = 2; D < t.length; D++) {
                                var H = t[D];
                                Va(H) && (y.push(H[ti.Yd]),
                                x.push(H[ti.Cd]),
                                A.push(H[ti.Id]),
                                B && H[ti.oa] < v && (z = D))
                            }
                            B && (q.destination_airport = t[z][ti.bf]);
                            q.cabins = y.join(",");
                            q.booking_codes = x.join(",");
                            q.flight_numbers = A.join(",")
                        }
                    }
                }
            }
            ui(e.B[0], q, f, h, d.D, d.C)
        } else
            G(d.C)
    }
      , ui = function(a, b, c, d, e, f) {
        function h() {
            c && (m += Xf("gp", d, void 0).map(function(p) {
                return "&gclgp=" + encodeURIComponent(p)
            }).join(""));
            oc(m, e, f)
        }
        if (/^\d+$/.test(a)) {
            var k = encodeURIComponent(a)
              , l = encodeURIComponent(wi(b))
              , m = "https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/" + k + "/?data=" + l;
            Sc(C.o) ? h() : Uc(h)
        } else
            G(f)
    }
      , wi = function(a) {
        var b = [], c;
        for (c in a)
            a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
        return b.join(";")
    }
      , ti = {
        za: "id",
        oa: "start_date",
        Ya: "end_date",
        xf: "origin",
        Yd: "travel_class",
        Cd: "booking_code",
        Id: "flight_number",
        bf: "destination"
    };
    var Gi = function(a, b, c) {
        var d = "https://www.google-analytics.com/analytics.js"
          , e = $g();
        if (qa(e)) {
            var f = "gtag_" + a.split("-").join("_")
              , h = function(w) {
                var y = [].slice.call(arguments, 0);
                y[0] = f + "." + y[0];
                e.apply(window, y)
            }
              , k = function() {
                var w = function(B, z) {
                    for (var D = 0; z && D < z.length; D++)
                        h(B, z[D])
                }
                  , y = xi(b, c);
                if (y) {
                    var x = y.action;
                    if ("impressions" === x)
                        w("ec:addImpression", y.Fg);
                    else if ("promo_click" === x || "promo_view" === x) {
                        var A = y.ld;
                        w("ec:addPromo", y.ld);
                        A && 0 < A.length && "promo_click" === x && h("ec:setAction", x)
                    } else
                        w("ec:addProduct", y.Ra),
                        h("ec:setAction", x, y.pb)
                }
            }
              , l = function() {
                if (eg()) {} else {
                    var w = c.getWithConfig(C.zf);
                    w && (h("require", w, {
                        dataLayer: "dataLayer"
                    }),
                    h("require", "render"))
                }
            }
              , m = yi(a, f, b, c)
              , p = function(w, y, x) {
                x && (y = "" + y);
                m.ra[w] = y
            };
            zi(f, m.Oa) && (e(function() {
                Yg() && Yg().remove(f)
            }),
            Ai[f] = !1);
            e("create", a, m.Oa);
            if (m.Oa._x_19) {
                var r = vh(m.Oa._x_19, "/analytics.js");
                r && (d = r);
                m.Oa._x_20 && !Ai[f] && (Ai[f] = !0,
                e(dh(f, m.Oa._x_20)))
            }
            (function() {
                var w = c.getWithConfig("custom_map");
                e(function() {
                    if (Va(w)) {
                        var y = m.ra, x = Yg().getByName(f), A;
                        for (A in w)
                            if (w.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) && void 0 != w[A]) {
                                var B = x.get(Bi(w[A]));
                                Ci(y, A, B)
                            }
                    }
                })
            }
            )();
            (function(w) {
                if (w) {
                    var y = {};
                    if (Va(w))
                        for (var x in Di)
                            Di.hasOwnProperty(x) && Ei(Di[x], x, w[x], y);
                    h("require", "linkid", y)
                }
            }
            )(m.linkAttribution);
            var t = m[C.xa];
            if (t && t[C.L]) {
                var q = t[C.jb];
                ah(f + ".", t[C.L], void 0 === q ? !!t.use_anchor : "fragment" === q, !!t[C.ib])
            }
            if (b === C.yd)
                l(),
                h("send", "pageview", m.ra);
            else if (b === C.I) {
                l();
                qg(a, c);
                c.getWithConfig(C.ob) && Sf();
                0 != m.sendPageView && h("send", "pageview", m.ra)
            } else
                "screen_view" === b ? h("send", "screenview", m.ra) : "timing_complete" === b ? (p("timingCategory", m.eventCategory, !0),
                p("timingVar", m.name, !0),
                p("timingValue", Da(m.value)),
                void 0 !== m.eventLabel && p("timingLabel", m.eventLabel, !0),
                h("send", "timing", m.ra)) : "exception" === b ? h("send", "exception", m.ra) : "optimize.callback" !== b && (0 <= ua([C.xd, "select_content", C.Ia, C.Vb, C.Xb, C.fb, "set_checkout_option", C.na, C.Zb, "view_promotion", "checkout_progress"], b) && (h("require", "ec", "ec.js"),
                k()),
                p("eventCategory", m.eventCategory, !0),
                p("eventAction", m.eventAction || b, !0),
                void 0 !== m.eventLabel && p("eventLabel", m.eventLabel, !0),
                void 0 !== m.value && p("eventValue", Da(m.value)),
                h("send", "event", m.ra));
            if (!Fi) {
                Fi = !0;
                Tg();
                var u = c.C
                  , v = function() {
                    Yg().loaded || u()
                };
                eg() ? G(v) : lc(d, v, u)
            }
        } else
            G(c.C)
    }, Hi = function(a, b, c, d) {
        Vc(function() {
            Gi(a, b, d)
        }, [C.H, C.o])
    }, Fi, Ai = {}, Ii = {
        client_id: 1,
        client_storage: "storage",
        cookie_name: 1,
        cookie_domain: 1,
        cookie_expires: 1,
        cookie_path: 1,
        cookie_update: 1,
        cookie_flags: 1,
        sample_rate: 1,
        site_speed_sample_rate: 1,
        use_amp_client_id: 1,
        store_gac: 1,
        conversion_linker: "storeGac"
    }, Ji = {
        anonymize_ip: 1,
        app_id: 1,
        app_installer_id: 1,
        app_name: 1,
        app_version: 1,
        campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignKeyword",
            content: "campaignContent",
            id: "campaignId"
        },
        currency: "currencyCode",
        description: "exDescription",
        fatal: "exFatal",
        language: 1,
        non_interaction: 1,
        page_hostname: "hostname",
        page_referrer: "referrer",
        page_path: "page",
        page_location: "location",
        page_title: "title",
        screen_name: 1,
        transport_type: "transport",
        user_id: 1
    }, Ki = {
        content_id: 1,
        event_category: 1,
        event_action: 1,
        event_label: 1,
        link_attribution: 1,
        linker: 1,
        method: 1,
        name: 1,
        send_page_view: 1,
        value: 1
    }, Di = {
        cookie_name: 1,
        cookie_expires: "duration",
        levels: 1
    }, Li = {
        anonymize_ip: 1,
        fatal: 1,
        non_interaction: 1,
        use_amp_client_id: 1,
        send_page_view: 1,
        store_gac: 1,
        conversion_linker: 1
    }, Ei = function(a, b, c, d) {
        if (void 0 !== c)
            if (Li[b] && (c = Ea(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[Bi(b)] = c;
            else if (g(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, Bi = function(a) {
        return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, Mi = function(a) {
        var b = "general";
        0 <= ua([C.Nd, C.Vb, C.Pd, C.fb, "checkout_progress", C.na, C.Zb, C.Xb, "set_checkout_option"], a) ? b = "ecommerce" : 0 <= ua("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, Ci = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, Ni = function(a) {
        if (sa(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, yi = function(a, b, c, d) {
        var e = function(z) {
            return d.getWithConfig(z)
        }
          , f = {}
          , h = {}
          , k = {}
          , l = Ni(e(C.qf));
        l && Ci(h, "exp", l);
        var m = e("custom_map");
        if (Va(m))
            for (var p in m)
                if (m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != m[p]) {
                    var r = e(String(m[p]));
                    void 0 !== r && Ci(h, p, r)
                }
        for (var t = Fh(d), q = 0; q < t.length; ++q) {
            var u = t[q]
              , v = e(u);
            if (Ki.hasOwnProperty(u))
                Ei(Ki[u], u, v, f);
            else if (Ji.hasOwnProperty(u))
                Ei(Ji[u], u, v, h);
            else if (Ii.hasOwnProperty(u))
                Ei(Ii[u], u, v, k);
            else if (/^(dimension|metric|content_group)\d+$/.test(u))
                Ei(1, u, v, h);
            else if ("developer_id" === u) {
                var w = Qa(v);
                w && (h["&did"] = w);
            } else
                u === C.Z && 0 > ua(t, C.ac) && (k.cookieName = v + "_ga")
        }
        Ci(k, "cookieDomain", "auto");
        Ci(h, "forceSSL", !0);
        Ci(f, "eventCategory", Mi(c));
        0 <= ua(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && Ci(h, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c ? Ci(f, "eventLabel", e(C.yf)) : "search" === c || "view_search_results" === c ? Ci(f, "eventLabel", e(C.Gf)) : "select_content" === c && Ci(f, "eventLabel", e(C.cf));
        var y = f[C.xa] || {}
          , x = y[C.hb];
        x || 0 != x && y[C.L] ? k.allowLinker = !0 : !1 === x && Ci(k, "useAmpClientId", !1);
        if (!1 === e(C.af) || !1 === e(C.fa) || !1 === e(C.Za))
            h.allowAdFeatures = !1;
        !1 === e(C.fa) && I("GTM", 27);
        k.name = b;
        h["&gtm"] = Jh(!0);
        h.hitCallback = d.D;
        Lc() && (h["&gcs"] = Tc(),
        Sc(C.H) || (k.storage = "none"),
        Sc(C.o) || (h.allowAdFeatures = !1,
        k.storeGac = !1));
        var A = e(C.va) || e(C.uf) || ae("gtag.remote_config." + a + ".url", 2)
          , B = e(C.tf) || ae("gtag.remote_config." + a + ".dualId", 2);
        if (A && null != ic) {
            k._x_19 = A;
        }
        B && (k._x_20 = B);
        f.ra = h;
        f.Oa = k;
        return f
    }, xi = function(a, b) {
        function c(v) {
            var w = n(v);
            w.list = v.list_name;
            w.listPosition = v.list_position;
            w.position = v.list_position || v.creative_slot;
            w.creative = v.creative_name;
            return w
        }
        function d(v) {
            for (var w = [], y = 0; v && y < v.length; y++)
                v[y] && w.push(c(v[y]));
            return w.length ? w : void 0
        }
        function e(v) {
            return {
                id: f(C.nb),
                affiliation: f(C.hf),
                revenue: f(C.da),
                tax: f(C.he),
                shipping: f(C.nf),
                coupon: f(C.kf),
                list: f(C.xc) || v
            }
        }
        for (var f = function(v) {
            return b.getWithConfig(v)
        }, h = f(C.T), k, l = 0; h && l < h.length && !(k = h[l][C.xc]); l++)
            ;
        var m = f("custom_map");
        if (Va(m))
            for (var p = 0; h && p < h.length; ++p) {
                var r = h[p], t;
                for (t in m)
                    m.hasOwnProperty(t) && /^(dimension|metric)\d+$/.test(t) && void 0 != m[t] && Ci(r, t, r[m[t]])
            }
        var q = null
          , u = f(C.lf);
        a === C.na || a === C.Zb ? q = {
            action: a,
            pb: e(),
            Ra: d(h)
        } : a === C.Vb ? q = {
            action: "add",
            Ra: d(h)
        } : a === C.Xb ? q = {
            action: "remove",
            Ra: d(h)
        } : a === C.Ia ? q = {
            action: "detail",
            pb: e(k),
            Ra: d(h)
        } : a === C.xd ? q = {
            action: "impressions",
            Fg: d(h)
        } : "view_promotion" === a ? q = {
            action: "promo_view",
            ld: d(u)
        } : "select_content" === a && u && 0 < u.length ? q = {
            action: "promo_click",
            ld: d(u)
        } : "select_content" === a ? q = {
            action: "click",
            pb: {
                list: f(C.xc) || k
            },
            Ra: d(h)
        } : a === C.fb || "checkout_progress" === a ? q = {
            action: "checkout",
            Ra: d(h),
            pb: {
                step: a === C.fb ? 1 : f(C.Bd),
                option: f(C.fe)
            }
        } : "set_checkout_option" === a && (q = {
            action: "checkout_option",
            pb: {
                step: f(C.Bd),
                option: f(C.fe)
            }
        });
        q && (q.Oh = f(C.ja));
        return q
    }, Oi = {}, zi = function(a, b) {
        var c = Oi[a];
        Oi[a] = n(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    function Pi() {
        var a = od;
        return a.gcq = a.gcq || new Qi
    }
    var Ri = function(a, b, c) {
        Pi().register(a, b, c)
    }
      , Si = function(a, b, c, d) {
        Pi().push("event", [b, a], c, d)
    }
      , Ti = function(a, b) {
        Pi().push("config", [a], b)
    }
      , Ui = {}
      , Vi = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.i = {};
        this.m = null;
        this.h = !1
    }
      , Wi = function(a, b, c, d, e) {
        this.type = a;
        this.m = b;
        this.ba = c || "";
        this.h = d;
        this.i = e
    }
      , Qi = function() {
        this.m = {};
        this.i = {};
        this.h = []
    }
      , Xi = function(a, b) {
        var c = bg(b);
        return a.m[c.containerId] = a.m[c.containerId] || new Vi
    }
      , Yi = function(a, b, c) {
        if (b) {
            var d = bg(b);
            if (d && 1 === Xi(a, b).status) {
                Xi(a, b).status = 2;
                var e = {};
                Rd && (e.timeoutId = E.setTimeout(function() {
                    I("GTM", 38);
                    Dd()
                }, 3E3));
                a.push("require", [e], d.containerId);
                Ui[d.containerId] = Ia();
                if (eg()) {} else {
                    var h = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c"
                      , k = ("http:" != E.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h)
                      , l = vh(c, h) || k;
                    lc(l)
                }
            }
        }
    }
      , Zi = function(a, b, c, d) {
        if (d.ba) {
            var e = Xi(a, d.ba)
              , f = e.m;
            if (f) {
                var h = n(c)
                  , k = n(e.targetConfig[d.ba])
                  , l = n(e.containerConfig)
                  , m = n(e.i)
                  , p = n(a.i)
                  , r = ae("gtm.uniqueEventId")
                  , t = bg(d.ba).prefix
                  , q = Eh(Dh(Ch(Bh(Ah(zh(yh(h), k), l), m), p), function() {
                    Vd(r, t, "2");
                }), function() {
                    Vd(r, t, "3");
                });
                try {
                    Vd(r, t, "1");
                    f(d.ba, b, d.m, q)
                } catch (u) {
                    Vd(r, t, "4");
                }
            }
        }
    };
    Qi.prototype.register = function(a, b, c) {
        if (3 !== Xi(this, a).status) {
            Xi(this, a).m = b;
            Xi(this, a).status = 3;
            c && (Xi(this, a).i = c);
            var d = bg(a)
              , e = Ui[d.containerId];
            if (void 0 !== e) {
                var f = od[d.containerId].bootstrap
                  , h = d.prefix.toUpperCase();
                od[d.containerId]._spx && (h = h.toLowerCase());
                var k = ae("gtm.uniqueEventId")
                  , l = h
                  , m = Ia() - f;
                if (Rd && !Id[k]) {
                    k !== Ed && (Cd(),
                    Ed = k);
                    var p = l + "." + Math.floor(f - e) + "." + Math.floor(m);
                    Nd = Nd ? Nd + "," + p : "&cl=" + p
                }
                delete Ui[d.containerId]
            }
            this.flush()
        }
    }
    ;
    Qi.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Ia() / 1E3);
        Yi(this, c, b[0][C.va] || this.i[C.va]);
        this.h.push(new Wi(a,e,c,b,d));
        d || this.flush()
    }
    ;
    Qi.prototype.flush = function(a) {
        for (var b = this; this.h.length; ) {
            var c = this.h[0];
            if (c.i)
                c.i = !1,
                this.h.push(c);
            else
                switch (c.type) {
                case "require":
                    if (3 !== Xi(this, c.ba).status && !a)
                        return;
                    Rd && E.clearTimeout(c.h[0].timeoutId);
                    break;
                case "set":
                    Ca(c.h[0], function(l, m) {
                        n(Pa(l, m), b.i)
                    });
                    break;
                case "config":
                    var d = c.h[0]
                      , e = !!d[C.jc];
                    delete d[C.jc];
                    var f = Xi(this, c.ba)
                      , h = bg(c.ba)
                      , k = h.containerId === h.id;
                    e || (k ? f.containerConfig = {} : f.targetConfig[c.ba] = {});
                    f.h && e || Zi(this, C.I, d, c);
                    f.h = !0;
                    delete d[C.ab];
                    k ? n(d, f.containerConfig) : n(d, f.targetConfig[c.ba]);
                    break;
                case "event":
                    Zi(this, c.h[1], c.h[0], c)
                }
            this.h.shift()
        }
    }
    ;
    var $i = ["HA", "GF", "GP", "G"]
      , aj = "G".split(/,/);
    aj.push("DC");
    aj.push("UA");
    aj.push("AW");
    var bj = null, cj = {}, dj = {}, ej, fj = !1;
    function gj(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = n(b),
        b[C.Ac] && (c.eventCallback = b[C.Ac]),
        b[C.Jb] && (c.eventTimeout = b[C.Jb]));
        return c
    }
    var hj = function() {
        bj = bj || !od.gtagRegistered;
        od.gtagRegistered = !0;
        return bj
    }
      , ij = function(a) {
        if (void 0 === dj[a.id]) {
            var b;
            switch (a.prefix) {
            case "UA":
                b = th("gtagua", {
                    trackingId: a.id
                });
                break;
            case "AW":
                b = th("gtagaw", {
                    conversionId: a
                });
                break;
            case "DC":
                b = th("gtagfl", {
                    targetId: a.id
                });
                break;
            case "GF":
                b = th("gtaggf", {
                    conversionId: a
                });
                break;
            case "HA":
                b = th("gtagha", {
                    conversionId: a
                });
                break;
            case "GP":
                b = th("gtaggp", {
                    conversionId: a.id
                });
                break;
            default:
                return
            }
            if (!ej) {
                var c = Cb("v", {
                    name: "send_to",
                    dataLayerVersion: 2
                });
                tb.push(c);
                ej = ["macro", tb.length - 1]
            }
            var d = {
                arg0: ej,
                arg1: a.id,
                ignore_case: !1
            };
            d[Jb.wa] = "_lc";
            vb.push(d);
            var e = {
                "if": [vb.length - 1],
                add: [b]
            };
            e["if"] && (e.add || e.block) && ub.push(e);
            dj[a.id] = b
        }
    }
      , jj = function(a) {
        Ca(cj, function(b, c) {
            var d = ua(c, a);
            0 <= d && c.splice(d, 1)
        })
    }
      , kj = function(a) {
        if (a.containerId !== K.s && "G" !== a.prefix) {
            var b;
            switch (a.prefix) {
            case "UA":
                b = 14;
                break;
            case "AW":
                b = 15;
                break;
            case "DC":
                b = 16;
                break;
            default:
                b = 17
            }
            I("GTM", b)
        }
    };
    var lj = {
        config: function(a) {
            var b = a[2] || {};
            if (2 > a.length || !g(a[1]) || !Va(b))
                return;
            var c = bg(a[1]);
            if (!c)
                return;
            jj(c.id);
            var d = c.id
              , e = b[C.Ec] || "default";
            e = e.toString().split(",");
            for (var f = 0; f < e.length; f++)
                cj[e[f]] = cj[e[f]] || [],
                cj[e[f]].push(d);
            delete b[C.Ec];
            fj || I("GTM", 43);
            zd();
            if (hj()) {
                if (-1 !== ua(aj, c.prefix) || -1 !== ua($i, c.prefix)) {
                    "G" === c.prefix && (b[C.ab] = !0);
                    Ti(b, c.id);
                    return
                }
                ij(c);
                kj(c)
            }
            ee("gtag.targets." + c.id, void 0);
            ee("gtag.targets." + c.id, n(b));
            var h = {};
            h[C.ya] = c.id;
            return gj(C.I, h);
        },
        event: function(a) {
            var b = a[1];
            if (g(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Va(a[2]) && void 0 != a[2])
                        return;
                    c = a[2]
                }
                var d = gj(b, c);
                var e;
                var f = c && c[C.ya];
                void 0 === f && (f = ae(C.ya, 2),
                void 0 === f && (f = "default"));
                if (g(f) || sa(f)) {
                    for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++)
                        0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(cj[h[l]] || []);
                    e = dg(k)
                } else
                    e = void 0;
                var m = e;
                if (!m)
                    return;
                var p = hj();
                zd();
                for (var r = [], t = 0; p && t < m.length; t++) {
                    var q = m[t];
                    if (-1 !== ua(aj, q.prefix) || -1 !== ua($i, q.prefix)) {
                        var u = n(c);
                        "G" === q.prefix && (u[C.ab] = !0);
                        Si(b, u, q.id)
                    } else
                        ij(q),
                        kj(q);
                    r.push(q.id)
                }
                d.eventModel = d.eventModel || {};
                0 < m.length ? d.eventModel[C.ya] = r.join() : delete d.eventModel[C.ya];
                fj || I("GTM", 43);
                return d
            }
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime)
                return fj = !0,
                {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && Va(a[1]) ? b = n(a[1]) : 3 == a.length && g(a[1]) && (b = {},
            Va(a[2]) || sa(a[2]) ? b[a[1]] = n(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (zd(),
                hj()) {
                    n(b);
                    var c = n(b);
                    Pi().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    };
    lj.consent = function(a) {
        if (3 === a.length) {
            var b = function() {
                c && n(a[2], {
                    subcommand: a[1]
                })
            };
            I("GTM", 39);
            var c = !1;
            c = hj();
            var d = a[1];
            if ("default" === d) {
                b();
                Qc(a[2]);
                return
            }
            if ("update" === d) {
                b();
                Rc(a[2]);
                return
            }
        }
    }
    ;
    var mj = {
        policy: !0
    }
      , nj = function(a, b) {
        if (a.length && g(a[0])) {
            var c = lj[a[0]];
            if (c && (!b || !mj[a[0]]))
                return c(a)
        }
    };
    var oj = function(a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0, e;
            for (e in c)
                if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break
                }
            d && (c.end(),
            c.end = null)
        }
    }
      , qj = function(a) {
        var b = pj()
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var rj = !1
      , sj = [];
    function tj() {
        if (!rj) {
            rj = !0;
            for (var a = 0; a < sj.length; a++)
                G(sj[a])
        }
    }
    var uj = function(a) {
        rj ? G(a) : sj.push(a)
    };
    var Mj = function(a) {
        if (Kj(a))
            return a;
        this.h = a
    };
    Mj.prototype.Cg = function() {
        return this.h
    }
    ;
    var Kj = function(a) {
        return !a || "object" !== Ta(a) || Va(a) ? !1 : "getUntrustedUpdateValue"in a
    };
    Mj.prototype.getUntrustedUpdateValue = Mj.prototype.Cg;
    var Nj = []
      , Oj = !1
      , Pj = function(a) {
        return E["dataLayer"].push(a)
    }
      , Qj = function(a) {
        var b = od["dataLayer"]
          , c = b ? b.subscribers : 1
          , d = 0;
        return function() {
            ++d === c && a()
        }
    };
    function Rj(a) {
        var b = a._clear;
        Ca(a, function(f, h) {
            "_clear" !== f && (b && ee(f, void 0),
            ee(f, h))
        });
        td || (td = a["gtm.start"]);
        var c = a.event
          , d = a["gtm.uniqueEventId"];
        if (!c)
            return !1;
        d || (d = zd(),
        a["gtm.uniqueEventId"] = d,
        ee("gtm.uniqueEventId", d));
        vd = c;
        var e = Sj(a);
        vd = null;
        switch (c) {
        case "gtm.init":
            I("GTM", 19),
            e && I("GTM", 20)
        }
        return e
    }
    function Sj(a) {
        var b = a.event, c = a["gtm.uniqueEventId"], d, e = od.zones;
        d = e ? e.checkState(K.s, c) : Cg;
        return d.active ? sh(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    function Tj() {
        for (var a = !1; !Oj && 0 < Nj.length; ) {
            Oj = !0;
            delete Yd.eventModel;
            $d();
            var b = Nj.shift();
            if (null != b) {
                var c = Kj(b);
                if (c) {
                    var d = b;
                    b = Kj(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var h = e[f]
                          , k = ae(h, 1);
                        if (sa(k) || Va(k))
                            k = n(k);
                        Zd[h] = k
                    }
                }
                try {
                    if (qa(b))
                        try {
                            b.call(be)
                        } catch (u) {}
                    else if (sa(b)) {
                        var l = b;
                        if (g(l[0])) {
                            var m = l[0].split(".")
                              , p = m.pop()
                              , r = l.slice(1)
                              , t = ae(m.join("."), 2);
                            if (void 0 !== t && null !== t)
                                try {
                                    t[p].apply(t, r)
                                } catch (u) {}
                        }
                    } else {
                        var q = b;
                        if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee")) && (b = nj(b, c),
                        !b)) {
                            Oj = !1;
                            continue
                        }
                        a = Rj(b) || a
                    }
                } finally {
                    c && $d(!0)
                }
            }
            Oj = !1
        }
        return !a
    }
    function Uj() {
        var a = Tj();
        try {
            oj(E["dataLayer"], K.s)
        } catch (b) {}
        return a
    }
    var Wj = function() {
        var a = jc("dataLayer", [])
          , b = jc("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Kg(function() {
            b.gtmDom || (b.gtmDom = !0,
            a.push({
                event: "gtm.dom"
            }))
        });
        uj(function() {
            b.gtmLoad || (b.gtmLoad = !0,
            a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < od.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new Mj(arguments[f])
            } else
                e = [].slice.call(arguments, 0);
            var h = c.apply(a, e);
            Nj.push.apply(Nj, e);
            if (300 < this.length)
                for (I("GTM", 4); 300 < this.length; )
                    this.shift();
            var k = "boolean" !== typeof h || h;
            return Tj() && k
        }
        ;
        var d = a.slice(0);
        Nj.push.apply(Nj, d);
        Vj() && G(Uj)
    }
      , Vj = function() {
        var a = !0;
        return a
    };
    var Xj = {};
    Xj.Kb = new String("undefined");
    var Yj = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === Xj.Kb ? b : a[d]);
            return c.join("")
        }
    };
    Yj.prototype.toString = function() {
        return this.h("undefined")
    }
    ;
    Yj.prototype.valueOf = Yj.prototype.toString;
    Xj.Ff = Yj;
    Xj.Lc = {};
    Xj.mg = function(a) {
        return new Yj(a)
    }
    ;
    var Zj = {};
    Xj.jh = function(a, b) {
        var c = zd();
        Zj[c] = [a, b];
        return c
    }
    ;
    Xj.ne = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Zj[c];
            if (d && "function" === typeof d[b])
                d[b]();
            Zj[c] = void 0
        }
    }
    ;
    Xj.Kg = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            b = b || 8 === a[d],
            c = c || 16 === a[d];
        return b && c
    }
    ;
    Xj.ah = function(a) {
        if (a === Xj.Kb)
            return a;
        var b = zd();
        Xj.Lc[b] = a;
        return 'google_tag_manager["' + K.s + '"].macro(' + b + ")"
    }
    ;
    Xj.Ug = function(a, b, c) {
        a instanceof Xj.Ff && (a = a.h(Xj.jh(b, c)),
        b = pa);
        return {
            Yc: a,
            D: b
        }
    }
    ;
    var ak = function(a, b, c) {
        function d(f, h) {
            var k = f[h];
            return k
        }
        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || rc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase || "";
        return e
    }
      , bk = function(a) {
        od.hasOwnProperty("autoEventsSettings") || (od.autoEventsSettings = {});
        var b = od.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , ck = function(a, b, c) {
        bk(a)[b] = c
    }
      , dk = function(a, b, c, d) {
        var e = bk(a)
          , f = Ja(e, b, d);
        e[b] = c(f)
    }
      , ek = function(a, b, c) {
        var d = bk(a);
        return Ja(d, b, c)
    };
    var fk = ["input", "select", "textarea"]
      , gk = ["button", "hidden", "image", "reset", "submit"]
      , hk = function(a) {
        var b = a.tagName.toLowerCase();
        return !wa(fk, function(c) {
            return c === b
        }) || "input" === b && wa(gk, function(c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    }
      , ik = function(a) {
        return a.form ? a.form.tagName ? a.form : F.getElementById(a.form) : uc(a, ["form"], 100)
    }
      , jk = function(a, b, c) {
        if (!a.elements)
            return 0;
        for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
            var h = a.elements[e];
            if (hk(h)) {
                if (h.getAttribute(c) === d)
                    return f;
                f++
            }
        }
        return 0
    };
    var kk = !!E.MutationObserver
      , lk = void 0
      , mk = function(a) {
        if (!lk) {
            var b = function() {
                var c = F.body;
                if (c)
                    if (kk)
                        (new MutationObserver(function() {
                            for (var e = 0; e < lk.length; e++)
                                G(lk[e])
                        }
                        )).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                    else {
                        var d = !1;
                        pc(c, "DOMNodeInserted", function() {
                            d || (d = !0,
                            G(function() {
                                d = !1;
                                for (var e = 0; e < lk.length; e++)
                                    G(lk[e])
                            }))
                        })
                    }
            };
            lk = [];
            F.body ? b() : G(b)
        }
        lk.push(a)
    };
    var Hk = E.clearTimeout
      , Ik = E.setTimeout
      , T = function(a, b, c) {
        if (eg()) {
            b && G(b)
        } else
            return lc(a, b, c)
    }
      , Jk = function() {
        return E.location.href
    }
      , Kk = function(a) {
        return oe(qe(a), "fragment")
    }
      , Lk = function(a) {
        return pe(qe(a))
    }
      , U = function(a, b) {
        return ae(a, b || 2)
    }
      , Mk = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = Pj(a)) : d = Pj(a);
        return d
    }
      , Nk = function(a, b) {
        E[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === E[a] || c && !E[a]) && (E[a] = b);
        return E[a]
    }
      , Ok = function(a, b, c) {
        return ue(a, b, void 0 === c ? !0 : !!c)
    }
      , Pk = function(a, b) {
        if (eg()) {
            b && G(b)
        } else
            nc(a, b)
    }
      , Qk = function(a) {
        return !!ek(a, "init", !1)
    }
      , Rk = function(a) {
        ck(a, "init", !0)
    }
      , Sk = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : sd;
        c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        T(S("https://", "http://", c))
    }
      , Tk = function(a, b) {
        var c = a[b];
        return c
    };
    var Uk = Xj.Ug;
    function ql(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var rl = new ya;
    function sl(a, b) {
        function c(h) {
            var k = qe(h)
              , l = oe(k, "protocol")
              , m = oe(k, "host", !0)
              , p = oe(k, "port")
              , r = oe(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p)
                l = "web",
                p = "default";
            return [l, m, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function tl(a) {
        return ul(a) ? 1 : 0
    }
    function ul(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && sa(c)) {
            for (var d = 0; d < c.length; d++)
                if (tl({
                    "function": a["function"],
                    arg0: b,
                    arg1: c[d]
                }))
                    return !0;
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var e;
            a: {
                if (b) {
                    var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                    try {
                        for (var h = 0; h < f.length; h++)
                            if (b[f[h]]) {
                                e = b[f[h]](c);
                                break a
                            }
                    } catch (t) {}
                }
                e = !1
            }
            return e;
        case "_ew":
            return ql(b, c);
        case "_eq":
            return String(b) == String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            var k;
            k = String(b).split(",");
            return 0 <= ua(k, String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var l;
            var m = a.ignore_case ? "i" : void 0;
            try {
                var p = String(c) + m
                  , r = rl.get(p);
                r || (r = new RegExp(c,m),
                rl.set(p, r));
                l = r.test(b)
            } catch (t) {
                l = !1
            }
            return l;
        case "_sw":
            return 0 == String(b).indexOf(String(c));
        case "_um":
            return sl(b, c)
        }
        return !1
    }
    ;var vl = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var wl = {}
      , xl = encodeURI
      , Y = encodeURIComponent
      , yl = oc;
    var zl = function(a, b) {
        if (!a)
            return !1;
        var c = oe(qe(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var Al = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    wl.Lg = function() {
        var a = !1;
        return a
    }
    ;
    function Tm() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var Um = function() {
        var a = Tm();
        a.hid = a.hid || xa();
        return a.hid
    };
    var en = window
      , fn = document
      , gn = function(a) {
        var b = en._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === en["ga-disable-" + a])
            return !0;
        try {
            var c = en.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = se("AMP_TOKEN", String(fn.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return fn.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function kn(a, b) {
        delete b.eventModel[C.ab];
        if (a !== C.I) {
            var c = b.getWithConfig(C.bc);
            if (sa(c)) {
                I("GTM", 26);
                for (var d = {}, e = 0; e < c.length; e++) {
                    var f = c[e]
                      , h = b.getWithConfig(f);
                    void 0 !== h && (d[f] = h)
                }
                b.eventModel = d
            }
        }
        mn(b.eventModel)
    }
    var mn = function(a) {
        Ca(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[C.ka] || {};
        Ca(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var pn = function(a, b, c) {
        Si(b, c, a)
    }
      , qn = function(a, b, c) {
        Si(b, c, a, !0)
    }
      , sn = function(a, b) {};
    function rn(a, b) {}
    var Z = {
        a: {}
    };

    Z.a.gtagha = ["google"],
    function() {
        (function(a) {
            Z.__gtagha = a;
            Z.__gtagha.b = "gtagha";
            Z.__gtagha.g = !0;
            Z.__gtagha.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_conversionId
              , c = vd
              , d = U("eventModel");
            Ri(b.id, pi);
            if (c === C.I) {
                var e = U("gtag.targets." + b.id);
                Ti(e, b.id)
            } else
                Si(c, d, b.id);
            G(a.vtp_gtmOnSuccess)
        })
    }();
    Z.a.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(ge(a.vtp_gtmEventId, "event"))
        })
    }();

    Z.a.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = U(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();
    Z.a.rep = ["google"],
    function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.b = "rep";
            Z.__rep.g = !0;
            Z.__rep.priorityOverride = 0
        }
        )(function(a) {
            var b;
            switch (bg(a.vtp_containerId).prefix) {
            case "AW":
                b = Vh;
                break;
            case "DC":
                b = fi;
                break;
            case "GF":
                b = ki;
                break;
            case "GP":
                b = vi;
                break;
            case "HA":
                b = pi;
                break;
            case "UA":
                b = Hi;
                break;
            default:
                G(a.vtp_gtmOnFailure);
                return
            }
            G(a.vtp_gtmOnSuccess);
            Ri(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();

    Z.a.cid = ["google"],
    function() {
        (function(a) {
            Z.__cid = a;
            Z.__cid.b = "cid";
            Z.__cid.g = !0;
            Z.__cid.priorityOverride = 0
        }
        )(function() {
            return K.s
        })
    }();

    Z.a.gtagaw = ["google"],
    function() {
        (function(a) {
            Z.__gtagaw = a;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0;
            Z.__gtagaw.priorityOverride = 0
        }
        )(function(a) {
            if (!1 === a.vtp_isAutoTag) {
                var b = "AW-" + String(a.vtp_conversionId);
                Si(String(a.vtp_eventName), a.vtp_eventData || {}, a.vtp_conversionLabel ? b + "/" + String(a.vtp_conversionLabel) : b)
            } else {
                var c = a.vtp_conversionId
                  , d = vd;
                Ri(c.id, Vh);
                if (d === C.I) {
                    var e = U("gtag.targets." + c.id);
                    Ti(e, c.id)
                } else {
                    var f = U("eventModel");
                    Si(d, f, c.id)
                }
            }
            G(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.b = "get";
            Z.__get.g = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? qn : pn)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();

    Z.a.gtagfl = [],
    function() {
        (function(a) {
            Z.__gtagfl = a;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0;
            Z.__gtagfl.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_targetId
              , c = vd
              , d = U("eventModel");
            Ri(b, fi);
            if (c === C.I) {
                var e = U("gtag.targets." + b);
                Ti(e, b)
            } else
                Si(c, d, b);
            G(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.gtaggf = ["google"],
    function() {
        (function(a) {
            Z.__gtaggf = a;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0;
            Z.__gtaggf.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_conversionId
              , c = vd
              , d = U("eventModel");
            Ri(b.id, ki);
            if (c === C.I) {
                var e = U("gtag.targets." + b.id);
                Ti(e, b.id)
            } else
                Si(c, d, b.id);
            G(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.gtaggp = ["google"],
    function() {
        (function(a) {
            Z.__gtaggp = a;
            Z.__gtaggp.b = "gtaggp";
            Z.__gtaggp.g = !0;
            Z.__gtaggp.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_conversionId
              , c = vd
              , d = U("eventModel");
            Ri(b, vi);
            if (c === C.I) {
                var e = U("gtag.targets." + b);
                Ti(e, b)
            } else
                Si(c, d, b);
            G(a.vtp_gtmOnSuccess)
        })
    }();

    Z.a.gtagua = ["google"],
    function() {
        (function(a) {
            Z.__gtagua = a;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0;
            Z.__gtagua.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_trackingId
              , c = vd
              , d = U("eventModel");
            Ri(b, Hi);
            if (c === C.I) {
                var e = U("gtag.targets." + b);
                Ti(e, b)
            } else
                Si(c, d, b);
            G(a.vtp_gtmOnSuccess)
        })
    }();

    var tn = {};
    tn.macro = function(a) {
        if (Xj.Lc.hasOwnProperty(a))
            return Xj.Lc[a]
    }
    ,
    tn.onHtmlSuccess = Xj.ne(!0),
    tn.onHtmlFailure = Xj.ne(!1);
    tn.dataLayer = be;
    tn.callback = function(a) {
        xd.hasOwnProperty(a) && qa(xd[a]) && xd[a]();
        delete xd[a]
    }
    ;
    function un() {
        od[K.s] = tn;
        La(yd, Z.a);
        Ab = Ab || Xj;
        Bb = Bg
    }
    function vn() {
        zc.gtm_3pds = !0;
        zc.gtag_cs_api = !0;
        od = E.google_tag_manager = E.google_tag_manager || {};
        if (od[K.s]) {
            var a = od.zones;
            a && a.unregisterChild(K.s);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++)
                tb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++)
                wb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++)
                vb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var p = l[m], r = {}, t = 0; t < p.length; t++)
                    r[p[t][0]] = Array.prototype.slice.call(p[t], 1);
                ub.push(r)
            }
            yb = Z;
            zb = tl;
            un();
            Wj();
            Fg = !1;
            Gg = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState)
                Ig();
            else {
                pc(F, "DOMContentLoaded", Ig);
                pc(F, "readystatechange", Ig);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !E.frameElement
                    } catch (y) {}
                    q && Jg()
                }
                pc(E, "load", Ig)
            }
            rj = !1;
            "complete" === F.readyState ? tj() : pc(E, "load", tj);
            a: {
                if (!Rd)
                    break a;
                E.setInterval(Sd, 864E5);
            }
            ud = (new Date).getTime();
            tn.bootstrap = ud;
        }
    }
    (function(a) {
        a()
    }
    )(vn);

}
)()
