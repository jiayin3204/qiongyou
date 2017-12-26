if (function (t, e) {
        function n(t) {
            var e = t.length, n = ut.type(t);
            return !ut.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
        }

        function i(t) {
            var e = Et[t] = {};
            return ut.each(t.match(pt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function o(t, n, i, o) {
            if (ut.acceptData(t)) {
                var r, s, a = ut.expando, l = t.nodeType, c = l ? ut.cache : t, u = l ? t[a] : t[a] && a;
                if (u && c[u] && (o || c[u].data) || i !== e || "string" != typeof n)return u || (u = l ? t[a] = et.pop() || ut.guid++ : a), c[u] || (c[u] = l ? {} : {toJSON: ut.noop}), "object" != typeof n && "function" != typeof n || (o ? c[u] = ut.extend(c[u], n) : c[u].data = ut.extend(c[u].data, n)), s = c[u], o || (s.data || (s.data = {}), s = s.data), i !== e && (s[ut.camelCase(n)] = i), "string" == typeof n ? null == (r = s[n]) && (r = s[ut.camelCase(n)]) : r = s, r
            }
        }

        function r(t, e, n) {
            if (ut.acceptData(t)) {
                var i, o, r = t.nodeType, s = r ? ut.cache : t, l = r ? t[ut.expando] : ut.expando;
                if (s[l]) {
                    if (e && (i = n ? s[l] : s[l].data)) {
                        ut.isArray(e) ? e = e.concat(ut.map(e, ut.camelCase)) : e in i ? e = [e] : (e = ut.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;)delete i[e[o]];
                        if (n ? !a(i) : !ut.isEmptyObject(i))return
                    }
                    (n || (delete s[l].data, a(s[l]))) && (r ? ut.cleanData([t], !0) : ut.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
                }
            }
        }

        function s(t, n, i) {
            if (i === e && 1 === t.nodeType) {
                var o = "data-" + n.replace(At, "-$1").toLowerCase();
                if ("string" == typeof(i = t.getAttribute(o))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : kt.test(i) ? ut.parseJSON(i) : i)
                    } catch (t) {
                    }
                    ut.data(t, n, i)
                } else i = e
            }
            return i
        }

        function a(t) {
            var e;
            for (e in t)if (("data" !== e || !ut.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
            return !0
        }

        function l() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return J.activeElement
            } catch (t) {
            }
        }

        function f(t, e) {
            do {
                t = t[e]
            } while (t && 1 !== t.nodeType);
            return t
        }

        function p(t, e, n) {
            if (ut.isFunction(e))return ut.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return ut.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Mt.test(e))return ut.filter(e, t, n);
                e = ut.filter(e, t)
            }
            return ut.grep(t, function (t) {
                return ut.inArray(t, e) >= 0 !== n
            })
        }

        function d(t) {
            var e = Xt.split("|"), n = t.createDocumentFragment();
            if (n.createElement)for (; e.length;)n.createElement(e.pop());
            return n
        }

        function h(t, e) {
            return ut.nodeName(t, "table") && ut.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== ut.find.attr(t, "type")) + "/" + t.type, t
        }

        function m(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function v(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)ut._data(n, "globalEval", !e || ut._data(e[i], "globalEval"))
        }

        function y(t, e) {
            if (1 === e.nodeType && ut.hasData(t)) {
                var n, i, o, r = ut._data(t), s = ut._data(e, r), a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)for (i = 0, o = a[n].length; i < o; i++)ut.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ut.extend({}, s.data))
            }
        }

        function b(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ut.support.noCloneEvent && e[ut.expando]) {
                    o = ut._data(e);
                    for (i in o.events)ut.removeEvent(e, i, o.handle);
                    e.removeAttribute(ut.expando)
                }
                "script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ut.support.html5Clone && t.innerHTML && !ut.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }

        function x(t, n) {
            var i, o, r = 0, s = typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== Q ? t.querySelectorAll(n || "*") : e;
            if (!s)for (s = [], i = t.childNodes || t; null != (o = i[r]); r++)!n || ut.nodeName(o, n) ? s.push(o) : ut.merge(s, x(o, n));
            return n === e || n && ut.nodeName(t, n) ? ut.merge([t], s) : s
        }

        function w(t) {
            ee.test(t.type) && (t.defaultChecked = t.checked)
        }

        function T(t, e) {
            if (e in t)return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = Ne.length; o--;)if ((e = Ne[o] + n)in t)return e;
            return i
        }

        function C(t, e) {
            return t = e || t, "none" === ut.css(t, "display") || !ut.contains(t.ownerDocument, t)
        }

        function N(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++)i = t[s], i.style && (r[s] = ut._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (r[s] = ut._data(i, "olddisplay", S(i.nodeName)))) : r[s] || (o = C(i), (n && "none" !== n || !o) && ut._data(i, "olddisplay", o ? n : ut.css(i, "display"))));
            for (s = 0; s < a; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function E(t, e, n) {
            var i = ve.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function k(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2)"margin" === n && (s += ut.css(t, n + Ce[r], !0, o)), i ? ("content" === n && (s -= ut.css(t, "padding" + Ce[r], !0, o)), "margin" !== n && (s -= ut.css(t, "border" + Ce[r] + "Width", !0, o))) : (s += ut.css(t, "padding" + Ce[r], !0, o), "padding" !== n && (s += ut.css(t, "border" + Ce[r] + "Width", !0, o)));
            return s
        }

        function A(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = ue(t), s = ut.support.boxSizing && "border-box" === ut.css(t, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = fe(t, e, r), (o < 0 || null == o) && (o = t.style[e]), ye.test(o))return o;
                i = s && (ut.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + k(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function S(t) {
            var e = J, n = xe[t];
            return n || (n = $(t, e), "none" !== n && n || (ce = (ce || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ce[0].contentWindow || ce[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = $(t, e), ce.detach()), xe[t] = n), n
        }

        function $(t, e) {
            var n = ut(e.createElement(t)).appendTo(e.body), i = ut.css(n[0], "display");
            return n.remove(), i
        }

        function D(t, e, n, i) {
            var o;
            if (ut.isArray(e))ut.each(e, function (e, o) {
                n || ke.test(t) ? i(t, o) : D(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== ut.type(e))i(t, e); else for (o in e)D(t + "[" + o + "]", e[o], n, i)
        }

        function j(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match(pt) || [];
                if (ut.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function L(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, ut.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var r = {}, s = t === We;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function O(t, n) {
            var i, o, r = ut.ajaxSettings.flatOptions || {};
            for (o in n)n[o] !== e && ((r[o] ? t : i || (i = {}))[o] = n[o]);
            return i && ut.extend(!0, t, i), t
        }

        function H(t, n, i) {
            for (var o, r, s, a, l = t.contents, c = t.dataTypes; "*" === c[0];)c.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
            if (r)for (a in l)if (l[a] && l[a].test(r)) {
                c.unshift(a);
                break
            }
            if (c[0]in i)s = c[0]; else {
                for (a in i) {
                    if (!c[0] || t.converters[a + " " + c[0]]) {
                        s = a;
                        break
                    }
                    o || (o = a)
                }
                s = s || o
            }
            if (s)return s !== c[0] && c.unshift(s), i[s]
        }

        function I(t, e, n, i) {
            var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1])for (s in t.converters)c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
                if (!(s = c[l + " " + r] || c["* " + r]))for (o in c)if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                    break
                }
                if (!0 !== s)if (s && t.throws)e = s(e); else try {
                    e = s(e)
                } catch (t) {
                    return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function R() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {
            }
        }

        function _() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        function F() {
            return setTimeout(function () {
                Ke = e
            }), Ke = ut.now()
        }

        function P(t, e, n) {
            for (var i, o = (on[e] || []).concat(on["*"]), r = 0, s = o.length; r < s; r++)if (i = o[r].call(n, e, t))return i
        }

        function q(t, e, n) {
            var i, o, r = 0, s = nn.length, a = ut.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var e = Ke || F(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++)c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, n]), r < 1 && l ? n : (a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: ut.extend({}, e),
                opts: ut.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ke || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ut.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; n < i; n++)c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (B(u, c.opts.specialEasing); r < s; r++)if (i = nn[r].call(c, t, u, c.opts))return i;
            return ut.map(u, P, c), ut.isFunction(c.opts.start) && c.opts.start.call(t, c), ut.fx.timer(ut.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(t, e) {
            var n, i, o, r, s;
            for (n in t)if (i = ut.camelCase(n), o = e[i], r = t[n], ut.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = ut.cssHooks[i]) && "expand"in s) {
                r = s.expand(r), delete t[i];
                for (n in r)n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function M(t, e, n) {
            var i, o, r, s, a, l, c = this, u = {}, f = t.style, p = t.nodeType && C(t), d = ut._data(t, "fxshow");
            n.queue || (a = ut._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, c.always(function () {
                c.always(function () {
                    a.unqueued--, ut.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ut.css(t, "display") && "none" === ut.css(t, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)if (o = e[i], Ze.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show"))continue;
                u[i] = d && d[i] || ut.style(t, i)
            }
            if (!ut.isEmptyObject(u)) {
                d ? "hidden"in d && (p = d.hidden) : d = ut._data(t, "fxshow", {}), r && (d.hidden = !p), p ? ut(t).show() : c.done(function () {
                    ut(t).hide()
                }), c.done(function () {
                    var e;
                    ut._removeData(t, "fxshow");
                    for (e in u)ut.style(t, e, u[e])
                });
                for (i in u)s = P(p ? d[i] : 0, i, c), i in d || (d[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(t, e, n, i, o) {
            return new W.prototype.init(t, e, n, i, o)
        }

        function U(t, e) {
            var n, i = {height: t}, o = 0;
            for (e = e ? 1 : 0; o < 4; o += 2 - e)n = Ce[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function z(t) {
            return ut.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }

        var X, V, Q = typeof e, Y = t.location, J = t.document, K = J.documentElement, G = t.jQuery, Z = t.$, tt = {}, et = [], nt = "1.10.2", it = et.concat, ot = et.push, rt = et.slice, st = et.indexOf, at = tt.toString, lt = tt.hasOwnProperty, ct = nt.trim, ut = function (t, e) {
            return new ut.fn.init(t, e, V)
        }, ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pt = /\S+/g, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, mt = /^[\],:{}\s]*$/, vt = /(?:^|:|,)(?:\s*\[)+/g, yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xt = /^-ms-/, wt = /-([\da-z])/gi, Tt = function (t, e) {
            return e.toUpperCase()
        }, Ct = function (t) {
            (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (Nt(), ut.ready())
        }, Nt = function () {
            J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Ct, !1), t.removeEventListener("load", Ct, !1)) : (J.detachEvent("onreadystatechange", Ct), t.detachEvent("onload", Ct))
        };
        ut.fn = ut.prototype = {
            jquery: nt, constructor: ut, init: function (t, n, i) {
                var o, r;
                if (!t)return this;
                if ("string" == typeof t) {
                    if (!(o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ht.exec(t)) || !o[1] && n)return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                    if (o[1]) {
                        if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), gt.test(o[1]) && ut.isPlainObject(n))for (o in n)ut.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                        return this
                    }
                    if ((r = J.getElementById(o[2])) && r.parentNode) {
                        if (r.id !== o[2])return i.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = J, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ut.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ut.makeArray(t, this))
            }, selector: "", length: 0, toArray: function () {
                return rt.call(this)
            }, get: function (t) {
                return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
            }, pushStack: function (t) {
                var e = ut.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return ut.each(this, t, e)
            }, ready: function (t) {
                return ut.ready.promise().done(t), this
            }, slice: function () {
                return this.pushStack(rt.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, map: function (t) {
                return this.pushStack(ut.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: ot, sort: [].sort, splice: [].splice
        }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
            var t, n, i, o, r, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ut.isFunction(a) || (a = {}), c === l && (a = this, --l); l < c; l++)if (null != (r = arguments[l]))for (o in r)t = a[o], i = r[o], a !== i && (u && i && (ut.isPlainObject(i) || (n = ut.isArray(i))) ? (n ? (n = !1, s = t && ut.isArray(t) ? t : []) : s = t && ut.isPlainObject(t) ? t : {}, a[o] = ut.extend(u, s, i)) : i !== e && (a[o] = i));
            return a
        }, ut.extend({
            expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
                return t.$ === ut && (t.$ = Z), e && t.jQuery === ut && (t.jQuery = G), ut
            }, isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? ut.readyWait++ : ut.ready(!0)
            }, ready: function (t) {
                if (!0 === t ? !--ut.readyWait : !ut.isReady) {
                    if (!J.body)return setTimeout(ut.ready);
                    ut.isReady = !0, !0 !== t && --ut.readyWait > 0 || (X.resolveWith(J, [ut]), ut.fn.trigger && ut(J).trigger("ready").off("ready"))
                }
            }, isFunction: function (t) {
                return "function" === ut.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === ut.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, type: function (t) {
                return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
            }, isPlainObject: function (t) {
                var n;
                if (!t || "object" !== ut.type(t) || t.nodeType || ut.isWindow(t))return !1;
                try {
                    if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf"))return !1
                } catch (t) {
                    return !1
                }
                if (ut.support.ownLast)for (n in t)return lt.call(t, n);
                for (n in t);
                return n === e || lt.call(t, n)
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, error: function (t) {
                throw new Error(t)
            }, parseHTML: function (t, e, n) {
                if (!t || "string" != typeof t)return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || J;
                var i = gt.exec(t), o = !n && [];
                return i ? [e.createElement(i[1])] : (i = ut.buildFragment([t], e, o), o && ut(o).remove(), ut.merge([], i.childNodes))
            }, parseJSON: function (e) {
                return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ut.trim(e)) && mt.test(e.replace(yt, "@").replace(bt, "]").replace(vt, "")) ? new Function("return " + e)() : void ut.error("Invalid JSON: " + e)
            }, parseXML: function (n) {
                var i, o;
                if (!n || "string" != typeof n)return null;
                try {
                    t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (t) {
                    i = e
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), i
            }, noop: function () {
            }, globalEval: function (e) {
                e && ut.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(xt, "ms-").replace(wt, Tt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var o = 0, r = t.length, s = n(t);
                if (i) {
                    if (s)for (; o < r && !1 !== e.apply(t[o], i); o++); else for (o in t)if (!1 === e.apply(t[o], i))break
                } else if (s)for (; o < r && !1 !== e.call(t[o], o, t[o]); o++); else for (o in t)if (!1 === e.call(t[o], o, t[o]))break;
                return t
            }, trim: ct && !ct.call("\ufeff ") ? function (t) {
                return null == t ? "" : ct.call(t)
            } : function (t) {
                return null == t ? "" : (t + "").replace(dt, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ut.merge(i, "string" == typeof t ? [t] : t) : ot.call(i, t)), i
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (st)return st.call(e, t, n);
                    for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)if (n in e && e[n] === t)return n
                }
                return -1
            }, merge: function (t, n) {
                var i = n.length, o = t.length, r = 0;
                if ("number" == typeof i)for (; r < i; r++)t[o++] = n[r]; else for (; n[r] !== e;)t[o++] = n[r++];
                return t.length = o, t
            }, grep: function (t, e, n) {
                var i, o = [], r = 0, s = t.length;
                for (n = !!n; r < s; r++)i = !!e(t[r], r), n !== i && o.push(t[r]);
                return o
            }, map: function (t, e, i) {
                var o, r = 0, s = t.length, a = n(t), l = [];
                if (a)for (; r < s; r++)null != (o = e(t[r], r, i)) && (l[l.length] = o); else for (r in t)null != (o = e(t[r], r, i)) && (l[l.length] = o);
                return it.apply([], l)
            }, guid: 1, proxy: function (t, n) {
                var i, o, r;
                return "string" == typeof n && (r = t[n], n = t, t = r), ut.isFunction(t) ? (i = rt.call(arguments, 2), o = function () {
                    return t.apply(n || this, i.concat(rt.call(arguments)))
                }, o.guid = t.guid = t.guid || ut.guid++, o) : e
            }, access: function (t, n, i, o, r, s, a) {
                var l = 0, c = t.length, u = null == i;
                if ("object" === ut.type(i)) {
                    r = !0;
                    for (l in i)ut.access(t, n, l, i[l], !0, s, a)
                } else if (o !== e && (r = !0, ut.isFunction(o) || (a = !0), u && (a ? (n.call(t, o), n = null) : (u = n, n = function (t, e, n) {
                        return u.call(ut(t), n)
                    })), n))for (; l < c; l++)n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
                return r ? t : u ? n.call(t) : c ? n(t[0], i) : s
            }, now: function () {
                return (new Date).getTime()
            }, swap: function (t, e, n, i) {
                var o, r, s = {};
                for (r in e)s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e)t.style[r] = s[r];
                return o
            }
        }), ut.ready.promise = function (e) {
            if (!X)if (X = ut.Deferred(), "complete" === J.readyState)setTimeout(ut.ready); else if (J.addEventListener)J.addEventListener("DOMContentLoaded", Ct, !1), t.addEventListener("load", Ct, !1); else {
                J.attachEvent("onreadystatechange", Ct), t.attachEvent("onload", Ct);
                var n = !1;
                try {
                    n = null == t.frameElement && J.documentElement
                } catch (t) {
                }
                n && n.doScroll && function t() {
                    if (!ut.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        Nt(), ut.ready()
                    }
                }()
            }
            return X.promise(e)
        }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        }), V = ut(J), function (t, e) {
            function n(t, e, n, i) {
                var o, r, s, a, l, c, p, d, h, g;
                if ((e ? e.ownerDocument || e : F) !== D && $(e), e = e || D, n = n || [], !t || "string" != typeof t)return n;
                if (1 !== (a = e.nodeType) && 9 !== a)return [];
                if (L && !i) {
                    if (o = vt.exec(t))if (s = o[1]) {
                        if (9 === a) {
                            if (!(r = e.getElementById(s)) || !r.parentNode)return n;
                            if (r.id === s)return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && R(e, r) && r.id === s)return n.push(r), n
                    } else {
                        if (o[2])return G.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = o[3]) && w.getElementsByClassName && e.getElementsByClassName)return G.apply(n, e.getElementsByClassName(s)), n
                    }
                    if (w.qsa && (!O || !O.test(t))) {
                        if (d = p = _, h = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = u(t), (p = e.getAttribute("id")) ? d = p.replace(xt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;)c[l] = d + f(c[l]);
                            h = ft.test(t) && e.parentNode || e, g = c.join(",")
                        }
                        if (g)try {
                            return G.apply(n, h.querySelectorAll(g)), n
                        } catch (t) {
                        } finally {
                            p || e.removeAttribute("id")
                        }
                    }
                }
                return b(t.replace(at, "$1"), e, n, i)
            }

            function i() {
                function t(n, i) {
                    return e.push(n += " ") > C.cacheLength && delete t[e.shift()], t[n] = i
                }

                var e = [];
                return t
            }

            function o(t) {
                return t[_] = !0, t
            }

            function r(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)C.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return o(function (e) {
                    return e = +e, o(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c() {
            }

            function u(t, e) {
                var i, o, r, s, a, l, c, u = M[t + " "];
                if (u)return e ? 0 : u.slice(0);
                for (a = t, l = [], c = C.preFilter; a;) {
                    i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ct.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (s in C.filter)!(o = gt[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return e ? a.length : a ? n.error(t) : M(t, l).slice(0)
            }

            function f(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = q++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
                } : function (e, n, s) {
                    var a, l, c, u = P + " " + r;
                    if (s) {
                        for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, s))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || o)if (c = e[_] || (e[_] = {}), (l = c[i]) && l[0] === u) {
                        if (!0 === (a = l[1]) || a === T)return !0 === a
                    } else if (l = c[i] = [u], l[1] = t(e, n, s) || T, !0 === l[1])return !0
                }
            }

            function d(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function h(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
                return s
            }

            function g(t, e, n, i, r, s) {
                return i && !i[_] && (i = g(i)), r && !r[_] && (r = g(r, s)), o(function (o, s, a, l) {
                    var c, u, f, p = [], d = [], g = s.length, m = o || y(e || "*", a.nodeType ? [a] : a, []), v = !t || !o && e ? m : h(m, p, t, a, l), b = n ? r || (o ? t : g || i) ? [] : s : v;
                    if (n && n(v, b, a, l), i)for (c = h(b, d), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (b[d[u]] = !(v[d[u]] = f));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(f = b[u]) && c.push(v[u] = f);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(f = b[u]) && (c = r ? tt.call(o, f) : p[u]) > -1 && (o[c] = !(s[c] = f))
                        }
                    } else b = h(b === s ? b.splice(g, b.length) : b), r ? r(null, s, b, l) : G.apply(s, b)
                })
            }

            function m(t) {
                for (var e, n, i, o = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = p(function (t) {
                    return t === e
                }, s, !0), c = p(function (t) {
                    return tt.call(e, t) > -1
                }, s, !0), u = [function (t, n, i) {
                    return !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                }]; a < o; a++)if (n = C.relative[t[a].type])u = [p(d(u), n)]; else {
                    if (n = C.filter[t[a].type].apply(null, t[a].matches), n[_]) {
                        for (i = ++a; i < o && !C.relative[t[i].type]; i++);
                        return g(a > 1 && d(u), a > 1 && f(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), n, a < i && m(t.slice(a, i)), i < o && m(t = t.slice(i)), i < o && f(t))
                    }
                    u.push(n)
                }
                return d(u)
            }

            function v(t, e) {
                var i = 0, r = e.length > 0, s = t.length > 0, a = function (o, a, l, c, u) {
                    var f, p, d, g = [], m = 0, v = "0", y = o && [], b = null != u, x = A, w = o || s && C.find.TAG("*", u && a.parentNode || a), N = P += null == x ? 1 : Math.random() || .1;
                    for (b && (A = a !== D && a, T = i); null != (f = w[v]); v++) {
                        if (s && f) {
                            for (p = 0; d = t[p++];)if (d(f, a, l)) {
                                c.push(f);
                                break
                            }
                            b && (P = N, T = ++i)
                        }
                        r && ((f = !d && f) && m--, o && y.push(f))
                    }
                    if (m += v, r && v !== m) {
                        for (p = 0; d = e[p++];)d(y, g, a, l);
                        if (o) {
                            if (m > 0)for (; v--;)y[v] || g[v] || (g[v] = J.call(c));
                            g = h(g)
                        }
                        G.apply(c, g), b && !o && g.length > 0 && m + e.length > 1 && n.uniqueSort(c)
                    }
                    return b && (P = N, A = x), y
                };
                return r ? o(a) : a
            }

            function y(t, e, i) {
                for (var o = 0, r = e.length; o < r; o++)n(t, e[o], i);
                return i
            }

            function b(t, e, n, i) {
                var o, r, s, a, l, c = u(t);
                if (!i && 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && L && C.relative[r[1].type]) {
                        if (!(e = (C.find.ID(s.matches[0].replace(wt, Tt), e) || [])[0]))return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = gt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)if ((l = C.find[a]) && (i = l(s.matches[0].replace(wt, Tt), ft.test(r[0].type) && e.parentNode || e))) {
                        if (r.splice(o, 1), !(t = i.length && f(r)))return G.apply(n, i), n;
                        break
                    }
                }
                return k(t, c)(i, e, !L, n, ft.test(t)), n
            }

            var x, w, T, C, N, E, k, A, S, $, D, j, L, O, H, I, R, _ = "sizzle" + -new Date, F = t.document, P = 0, q = 0, B = i(), M = i(), W = i(), U = !1, z = function (t, e) {
                return t === e ? (U = !0, 0) : 0
            }, X = typeof e, V = 1 << 31, Q = {}.hasOwnProperty, Y = [], J = Y.pop, K = Y.push, G = Y.push, Z = Y.slice, tt = Y.indexOf || function (t) {
                    for (var e = 0, n = this.length; e < n; e++)if (this[e] === t)return e;
                    return -1
                }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), rt = "\\[" + nt + "*(" + it + ")" + nt + "*(?:([*^$|!~]?=)" + nt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + nt + "*\\]", st = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + rt.replace(3, 8) + ")*)|.*)\\)|)", at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ft = new RegExp(nt + "*[+~]"), pt = new RegExp("=" + nt + "*([^\\]'\"]*)" + nt + "*\\]", "g"), dt = new RegExp(st), ht = new RegExp("^" + ot + "$"), gt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /^(?:input|select|textarea|button)$/i, bt = /^h\d$/i, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Tt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
            try {
                G.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
            } catch (t) {
                G = {
                    apply: Y.length ? function (t, e) {
                        K.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            E = n.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, w = n.support = {}, $ = n.setDocument = function (t) {
                var e = t ? t.ownerDocument || t : F, n = e.defaultView;
                return e !== D && 9 === e.nodeType && e.documentElement ? (D = e, j = e.documentElement, L = !E(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                    $()
                }), w.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function (t) {
                    return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = r(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = r(function (t) {
                    return j.appendChild(t).id = _, !e.getElementsByName || !e.getElementsByName(_).length
                }), w.getById ? (C.find.ID = function (t, e) {
                    if (typeof e.getElementById !== X && L) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (t) {
                    var e = t.replace(wt, Tt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete C.find.ID, C.filter.ID = function (t) {
                    var e = t.replace(wt, Tt);
                    return function (t) {
                        var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), C.find.TAG = w.getElementsByTagName ? function (t, e) {
                    if (typeof e.getElementsByTagName !== X)return e.getElementsByTagName(t)
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, C.find.CLASS = w.getElementsByClassName && function (t, e) {
                        if (typeof e.getElementsByClassName !== X && L)return e.getElementsByClassName(t)
                    }, H = [], O = [], (w.qsa = mt.test(e.querySelectorAll)) && (r(function (t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
                }), r(function (t) {
                    var n = e.createElement("input");
                    n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = mt.test(I = j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (t) {
                    w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), H.push("!=", st)
                }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), R = mt.test(j.contains) || j.compareDocumentPosition ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, z = j.compareDocumentPosition ? function (t, n) {
                    if (t === n)return U = !0, 0;
                    var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
                    return i ? 1 & i || !w.sortDetached && n.compareDocumentPosition(t) === i ? t === e || R(F, t) ? -1 : n === e || R(F, n) ? 1 : S ? tt.call(S, t) - tt.call(S, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function (t, n) {
                    var i, o = 0, r = t.parentNode, s = n.parentNode, l = [t], c = [n];
                    if (t === n)return U = !0, 0;
                    if (!r || !s)return t === e ? -1 : n === e ? 1 : r ? -1 : s ? 1 : S ? tt.call(S, t) - tt.call(S, n) : 0;
                    if (r === s)return a(t, n);
                    for (i = t; i = i.parentNode;)l.unshift(i);
                    for (i = n; i = i.parentNode;)c.unshift(i);
                    for (; l[o] === c[o];)o++;
                    return o ? a(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
                }, e) : D
            }, n.matches = function (t, e) {
                return n(t, null, null, e)
            }, n.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== D && $(t), e = e.replace(pt, "='$1']"), w.matchesSelector && L && (!H || !H.test(e)) && (!O || !O.test(e)))try {
                    var i = I.call(t, e);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (t) {
                }
                return n(e, D, null, [t]).length > 0
            }, n.contains = function (t, e) {
                return (t.ownerDocument || t) !== D && $(t), R(t, e)
            }, n.attr = function (t, n) {
                (t.ownerDocument || t) !== D && $(t);
                var i = C.attrHandle[n.toLowerCase()], o = i && Q.call(C.attrHandle, n.toLowerCase()) ? i(t, n, !L) : e;
                return o === e ? w.attributes || !L ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, n.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, n.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (U = !w.detectDuplicates, S = !w.sortStable && t.slice(0), t.sort(z), U) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return t
            }, N = n.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += N(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i]; i++)n += N(e);
                return n
            }, C = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: gt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(wt, Tt), t[3] = (t[4] || t[5] || "").replace(wt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var n, i = !t[5] && t[2];
                        return gt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && dt.test(i) && (n = u(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(wt, Tt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, e, i) {
                        return function (o) {
                            var r = n.attr(o, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, f, p, d, h, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                        h = g = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (u = m[_] || (m[_] = {}), c = u[t] || [], d = c[0] === P && c[1], p = c[0] === P && c[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === e) {
                                        u[t] = [P, d, p];
                                        break
                                    }
                                } else if (y && (c = (e[_] || (e[_] = {}))[t]) && c[0] === P)p = c[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[_] || (f[_] = {}))[t] = [P, p]), f !== e)););
                                return (p -= o) === i || p % i == 0 && p / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, e) {
                        var i, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                        return r[_] ? r(e) : r.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function (t, n) {
                            for (var i, o = r(t, e), s = o.length; s--;)i = tt.call(t, o[s]), t[i] = !(n[i] = o[s])
                        }) : function (t) {
                            return r(t, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: o(function (t) {
                        var e = [], n = [], i = k(t.replace(at, "$1"));
                        return i[_] ? o(function (t, e, n, o) {
                            for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, o, r) {
                            return e[0] = t, i(e, null, r, n), !n.pop()
                        }
                    }), has: o(function (t) {
                        return function (e) {
                            return n(t, e).length > 0
                        }
                    }), contains: o(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || N(e)).indexOf(t) > -1
                        }
                    }), lang: o(function (t) {
                        return ht.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(wt, Tt).toLowerCase(), function (e) {
                            var n;
                            do {
                                if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === j
                    }, focus: function (t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return !1 === t.disabled
                    }, disabled: function (t) {
                        return !0 === t.disabled
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)return !1;
                        return !0
                    }, parent: function (t) {
                        return !C.pseudos.empty(t)
                    }, header: function (t) {
                        return bt.test(t.nodeName)
                    }, input: function (t) {
                        return yt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (t, e) {
                        return [e - 1]
                    }), eq: l(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }), even: l(function (t, e) {
                        for (var n = 0; n < e; n += 2)t.push(n);
                        return t
                    }), odd: l(function (t, e) {
                        for (var n = 1; n < e; n += 2)t.push(n);
                        return t
                    }), lt: l(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: l(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(x);
            for (x in{submit: !0, reset: !0})C.pseudos[x] = function (t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(x);
            c.prototype = C.filters = C.pseudos, C.setFilters = new c, k = n.compile = function (t, e) {
                var n, i = [], o = [], r = W[t + " "];
                if (!r) {
                    for (e || (e = u(t)), n = e.length; n--;)r = m(e[n]), r[_] ? i.push(r) : o.push(r);
                    r = W(t, v(o, i))
                }
                return r
            }, w.sortStable = _.split("").sort(z).join("") === _, w.detectDuplicates = U, $(), w.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, n) {
                if (!n)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())return t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function (t, e, n) {
                var i;
                if (!n)return (i = t.getAttributeNode(e)) && i.specified ? i.value : !0 === t[e] ? e.toLowerCase() : null
            }), ut.find = n, ut.expr = n.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = n.uniqueSort, ut.text = n.getText, ut.isXMLDoc = n.isXML, ut.contains = n.contains
        }(t);
        var Et = {};
        ut.Callbacks = function (t) {
            t = "string" == typeof t ? Et[t] || i(t) : ut.extend({}, t);
            var n, o, r, s, a, l, c = [], u = !t.once && [], f = function (e) {
                for (o = t.memory && e, r = !0, a = l || 0, l = 0, s = c.length, n = !0; c && a < s; a++)if (!1 === c[a].apply(e[0], e[1]) && t.stopOnFalse) {
                    o = !1;
                    break
                }
                n = !1, c && (u ? u.length && f(u.shift()) : o ? c = [] : p.disable())
            }, p = {
                add: function () {
                    if (c) {
                        var e = c.length;
                        !function e(n) {
                            ut.each(n, function (n, i) {
                                var o = ut.type(i);
                                "function" === o ? t.unique && p.has(i) || c.push(i) : i && i.length && "string" !== o && e(i)
                            })
                        }(arguments), n ? s = c.length : o && (l = e, f(o))
                    }
                    return this
                }, remove: function () {
                    return c && ut.each(arguments, function (t, e) {
                        for (var i; (i = ut.inArray(e, c, i)) > -1;)c.splice(i, 1), n && (i <= s && s--, i <= a && a--)
                    }), this
                }, has: function (t) {
                    return t ? ut.inArray(t, c) > -1 : !(!c || !c.length)
                }, empty: function () {
                    return c = [], s = 0, this
                }, disable: function () {
                    return c = u = o = e, this
                }, disabled: function () {
                    return !c
                }, lock: function () {
                    return u = e, o || p.disable(), this
                }, locked: function () {
                    return !u
                }, fireWith: function (t, e) {
                    return !c || r && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : f(e)), this
                }, fire: function () {
                    return p.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return p
        }, ut.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return ut.Deferred(function (n) {
                            ut.each(e, function (e, r) {
                                var s = r[0], a = ut.isFunction(t[e]) && t[e];
                                o[r[1]](function () {
                                    var t = a && a.apply(this, arguments);
                                    t && ut.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? ut.extend(t, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, ut.each(e, function (t, r) {
                    var s = r[2], a = r[3];
                    i[r[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, r = rt.call(arguments), s = r.length, a = 1 !== s || t && ut.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ut.Deferred(), c = function (t, n, i) {
                    return function (o) {
                        n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++)r[o] && ut.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        }), ut.support = function (e) {
            var n, i, o, r, s, a, l, c, u, f = J.createElement("div");
            if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], !(i = f.getElementsByTagName("a")[0]) || !i.style || !n.length)return e;
            r = J.createElement("select"), a = r.appendChild(J.createElement("option")), o = f.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== f.className, e.leadingWhitespace = 3 === f.firstChild.nodeType, e.tbody = !f.getElementsByTagName("tbody").length, e.htmlSerialize = !!f.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!o.value, e.optSelected = a.selected, e.enctype = !!J.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
            try {
                delete f.test
            } catch (t) {
                e.deleteExpando = !1
            }
            o = J.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = J.createDocumentFragment(), s.appendChild(o), e.appendChecked = o.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
                e.noCloneEvent = !1
            }), f.cloneNode(!0).click());
            for (u in{
                submit: !0,
                change: !0,
                focusin: !0
            })f.setAttribute(l = "on" + u, "t"), e[u + "Bubbles"] = l in t || !1 === f.attributes[l].expando;
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === f.style.backgroundClip;
            for (u in ut(e))break;
            return e.ownLast = "0" !== u, ut(function () {
                var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = J.getElementsByTagName("body")[0];
                s && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = f.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(s, null != s.style.zoom ? {zoom: 1} : {}, function () {
                    e.boxSizing = 4 === f.offsetWidth
                }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(f, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(f, null) || {width: "4px"}).width, i = f.appendChild(J.createElement("div")), i.style.cssText = f.style.cssText = r, i.style.marginRight = i.style.width = "0", f.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof f.style.zoom !== Q && (f.innerHTML = "", f.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== f.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = f = o = i = null)
            }), n = r = s = a = i = o = null, e
        }({});
        var kt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, At = /([A-Z])/g;
        ut.extend({
            cache: {},
            noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return !!(t = t.nodeType ? ut.cache[t[ut.expando]] : t[ut.expando]) && !a(t)
            },
            data: function (t, e, n) {
                return o(t, e, n)
            },
            removeData: function (t, e) {
                return r(t, e)
            },
            _data: function (t, e, n) {
                return o(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return r(t, e, !0)
            },
            acceptData: function (t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)return !1;
                var e = t.nodeName && ut.noData[t.nodeName.toLowerCase()];
                return !e || !0 !== e && t.getAttribute("classid") === e
            }
        }), ut.fn.extend({
            data: function (t, n) {
                var i, o, r = null, a = 0, l = this[0];
                if (t === e) {
                    if (this.length && (r = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; a < i.length; a++)o = i[a].name, 0 === o.indexOf("data-") && (o = ut.camelCase(o.slice(5)), s(l, o, r[o]));
                        ut._data(l, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    ut.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    ut.data(this, t, n)
                }) : l ? s(l, t, ut.data(l, t)) : null
            }, removeData: function (t) {
                return this.each(function () {
                    ut.removeData(this, t)
                })
            }
        }), ut.extend({
            queue: function (t, e, n) {
                var i;
                if (t)return e = (e || "fx") + "queue", i = ut._data(t, e), n && (!i || ut.isArray(n) ? i = ut._data(t, e, ut.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = ut.queue(t, e), i = n.length, o = n.shift(), r = ut._queueHooks(t, e), s = function () {
                    ut.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ut._data(t, n) || ut._data(t, n, {
                        empty: ut.Callbacks("once memory").add(function () {
                            ut._removeData(t, e + "queue"), ut._removeData(t, n)
                        })
                    })
            }
        }), ut.fn.extend({
            queue: function (t, n) {
                var i = 2;
                return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ut.queue(this[0], t) : n === e ? this : this.each(function () {
                    var e = ut.queue(this, t, n);
                    ut._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ut.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    ut.dequeue(this, t)
                })
            }, delay: function (t, e) {
                return t = ut.fx ? ut.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, n) {
                var i, o = 1, r = ut.Deferred(), s = this, a = this.length, l = function () {
                    --o || r.resolveWith(s, [s])
                };
                for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;)(i = ut._data(s[a], t + "queueHooks")) && i.empty && (o++, i.empty.add(l));
                return l(), r.promise(n)
            }
        });
        var St, $t, Dt = /[\t\r\n\f]/g, jt = /\r/g, Lt = /^(?:input|select|textarea|button|object)$/i, Ot = /^(?:a|area)$/i, Ht = /^(?:checked|selected)$/i, It = ut.support.getSetAttribute, Rt = ut.support.input;
        ut.fn.extend({
            attr: function (t, e) {
                return ut.access(this, ut.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    ut.removeAttr(this, t)
                })
            }, prop: function (t, e) {
                return ut.access(this, ut.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = ut.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = e, delete this[t]
                    } catch (t) {
                    }
                })
            }, addClass: function (t) {
                var e, n, i, o, r, s = 0, a = this.length, l = "string" == typeof t && t;
                if (ut.isFunction(t))return this.each(function (e) {
                    ut(this).addClass(t.call(this, e, this.className))
                });
                if (l)for (e = (t || "").match(pt) || []; s < a; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                    for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    n.className = ut.trim(i)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
                if (ut.isFunction(t))return this.each(function (e) {
                    ut(this).removeClass(t.call(this, e, this.className))
                });
                if (l)for (e = (t || "").match(pt) || []; s < a; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                    for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    n.className = t ? ut.trim(i) : ""
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ut.isFunction(t) ? this.each(function (n) {
                    ut(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function () {
                    if ("string" === n)for (var e, i = 0, o = ut(this), r = t.match(pt) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else n !== Q && "boolean" !== n || (this.className && ut._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : ut._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(e) >= 0)return !0;
                return !1
            }, val: function (t) {
                var n, i, o, r = this[0];
                {
                    if (arguments.length)return o = ut.isFunction(t), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = o ? t.call(this, n, ut(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ut.isArray(r) && (r = ut.map(r, function (t) {
                            return null == t ? "" : t + ""
                        })), (i = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()]) && "set"in i && i.set(this, r, "value") !== e || (this.value = r))
                    });
                    if (r)return (i = ut.valHooks[r.type] || ut.valHooks[r.nodeName.toLowerCase()]) && "get"in i && (n = i.get(r, "value")) !== e ? n : (n = r.value, "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
                }
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ut.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)if (n = i[l], (n.selected || l === o) && (ut.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ut.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ut(n).val(), r)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = ut.makeArray(e), s = o.length; s--;)i = o[s], (i.selected = ut.inArray(ut(i).val(), r) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }, attr: function (t, n, i) {
                var o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s)return typeof t.getAttribute === Q ? ut.prop(t, n, i) : (1 === s && ut.isXMLDoc(t) || (n = n.toLowerCase(), o = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? $t : St)), i === e ? o && "get"in o && null !== (r = o.get(t, n)) ? r : (r = ut.find.attr(t, n), null == r ? e : r) : null !== i ? o && "set"in o && (r = o.set(t, i, n)) !== e ? r : (t.setAttribute(n, i + ""), i) : void ut.removeAttr(t, n))
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match(pt);
                if (r && 1 === t.nodeType)for (; n = r[o++];)i = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? Rt && It || !Ht.test(n) ? t[i] = !1 : t[ut.camelCase("default-" + n)] = t[i] = !1 : ut.attr(t, n, ""), t.removeAttribute(It ? n : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!ut.support.radioValue && "radio" === e && ut.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}, prop: function (t, n, i) {
                var o, r, s, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a)return s = 1 !== a || !ut.isXMLDoc(t), s && (n = ut.propFix[n] || n, r = ut.propHooks[n]), i !== e ? r && "set"in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get"in r && null !== (o = r.get(t, n)) ? o : t[n]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ut.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Lt.test(t.nodeName) || Ot.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), $t = {
            set: function (t, e, n) {
                return !1 === e ? ut.removeAttr(t, n) : Rt && It || !Ht.test(n) ? t.setAttribute(!It && ut.propFix[n] || n, n) : t[ut.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function (t, n) {
            var i = ut.expr.attrHandle[n] || ut.find.attr;
            ut.expr.attrHandle[n] = Rt && It || !Ht.test(n) ? function (t, n, o) {
                var r = ut.expr.attrHandle[n], s = o ? e : (ut.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
                return ut.expr.attrHandle[n] = r, s
            } : function (t, n, i) {
                return i ? e : t[ut.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), Rt && It || (ut.attrHooks.value = {
            set: function (t, e, n) {
                if (!ut.nodeName(t, "input"))return St && St.set(t, e, n);
                t.defaultValue = e
            }
        }), It || (St = {
            set: function (t, n, i) {
                var o = t.getAttributeNode(i);
                return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
            }
        }, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function (t, n, i) {
            var o;
            return i ? e : (o = t.getAttributeNode(n)) && "" !== o.value ? o.value : null
        }, ut.valHooks.button = {
            get: function (t, n) {
                var i = t.getAttributeNode(n);
                return i && i.specified ? i.value : e
            }, set: St.set
        }, ut.attrHooks.contenteditable = {
            set: function (t, e, n) {
                St.set(t, "" !== e && e, n)
            }
        }, ut.each(["width", "height"], function (t, e) {
            ut.attrHooks[e] = {
                set: function (t, n) {
                    if ("" === n)return t.setAttribute(e, "auto"), n
                }
            }
        })), ut.support.hrefNormalized || ut.each(["href", "src"], function (t, e) {
            ut.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ut.support.style || (ut.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || e
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        }), ut.support.optSelected || (ut.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ut.propFix[this.toLowerCase()] = this
        }), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each(["radio", "checkbox"], function () {
            ut.valHooks[this] = {
                set: function (t, e) {
                    if (ut.isArray(e))return t.checked = ut.inArray(ut(t).val(), e) >= 0
                }
            }, ut.support.checkOn || (ut.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var _t = /^(?:input|select|textarea)$/i, Ft = /^key/, Pt = /^(?:mouse|contextmenu)|click/, qt = /^(?:focusinfocus|focusoutblur)$/, Bt = /^([^.]*)(?:\.(.+)|)$/;
        ut.event = {
            global: {},
            add: function (t, n, i, o, r) {
                var s, a, l, c, u, f, p, d, h, g, m, v = ut._data(t);
                if (v) {
                    for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = ut.guid++), (a = v.events) || (a = v.events = {}), (f = v.handle) || (f = v.handle = function (t) {
                        return typeof ut === Q || t && ut.event.triggered === t.type ? e : ut.event.dispatch.apply(f.elem, arguments)
                    }, f.elem = t), n = (n || "").match(pt) || [""], l = n.length; l--;)s = Bt.exec(n[l]) || [], h = m = s[1], g = (s[2] || "").split(".").sort(), h && (u = ut.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = ut.event.special[h] || {}, p = ut.extend({
                        type: h,
                        origType: m,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && ut.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, c), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, o, g, f) || (t.addEventListener ? t.addEventListener(h, f, !1) : t.attachEvent && t.attachEvent("on" + h, f))), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), ut.event.global[h] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var r, s, a, l, c, u, f, p, d, h, g, m = ut.hasData(t) && ut._data(t);
                if (m && (u = m.events)) {
                    for (e = (e || "").match(pt) || [""], c = e.length; c--;)if (a = Bt.exec(e[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = ut.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, f.remove && f.remove.call(t, s));
                        l && !p.length && (f.teardown && !1 !== f.teardown.call(t, h, m.handle) || ut.removeEvent(t, d, m.handle), delete u[d])
                    } else for (d in u)ut.event.remove(t, d + e[c], n, i, !0);
                    ut.isEmptyObject(u) && (delete m.handle, ut._removeData(t, "events"))
                }
            },
            trigger: function (n, i, o, r) {
                var s, a, l, c, u, f, p, d = [o || J], h = lt.call(n, "type") ? n.type : n, g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = f = o = o || J, 3 !== o.nodeType && 8 !== o.nodeType && !qt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), a = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : ut.makeArray(i, [n]), u = ut.event.special[h] || {}, r || !u.trigger || !1 !== u.trigger.apply(o, i))) {
                    if (!r && !u.noBubble && !ut.isWindow(o)) {
                        for (c = u.delegateType || h, qt.test(c + h) || (l = l.parentNode); l; l = l.parentNode)d.push(l), f = l;
                        f === (o.ownerDocument || J) && d.push(f.defaultView || f.parentWindow || t)
                    }
                    for (p = 0; (l = d[p++]) && !n.isPropagationStopped();)n.type = p > 1 ? c : u.bindType || h, s = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"), s && s.apply(l, i), (s = a && l[a]) && ut.acceptData(l) && s.apply && !1 === s.apply(l, i) && n.preventDefault();
                    if (n.type = h, !r && !n.isDefaultPrevented() && (!u._default || !1 === u._default.apply(d.pop(), i)) && ut.acceptData(o) && a && o[h] && !ut.isWindow(o)) {
                        f = o[a], f && (o[a] = null), ut.event.triggered = h;
                        try {
                            o[h]()
                        } catch (t) {
                        }
                        ut.event.triggered = e, f && (o[a] = f)
                    }
                    return n.result
                }
            },
            dispatch: function (t) {
                t = ut.event.fix(t);
                var n, i, o, r, s, a = [], l = rt.call(arguments), c = (ut._data(this, "events") || {})[t.type] || [], u = ut.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (a = ut.event.handlers.call(this, t, c), n = 0; (r = a[n++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, s = 0; (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();)t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, (i = ((ut.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== e && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, n) {
                var i, o, r, s, a = [], l = n.delegateCount, c = t.target;
                if (l && c.nodeType && (!t.button || "click" !== t.type))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                    for (r = [], s = 0; s < l; s++)o = n[s], i = o.selector + " ", r[i] === e && (r[i] = o.needsContext ? ut(i, this).index(c) >= 0 : ut.find(i, this, null, [c]).length), r[i] && r.push(o);
                    r.length && a.push({elem: c, handlers: r})
                }
                return l < n.length && a.push({elem: this, handlers: n.slice(l)}), a
            },
            fix: function (t) {
                if (t[ut.expando])return t;
                var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Pt.test(o) ? this.mouseHooks : Ft.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ut.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || J), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, n) {
                    var i, o, r, s = n.button, a = n.fromElement;
                    return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || J, r = o.documentElement, i = o.body, t.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== u() && this.focus)try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === u() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (ut.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                    }, _default: function (t) {
                        return ut.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = ut.extend(new ut.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? ut.event.trigger(o, null, e) : ut.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ut.removeEvent = J.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Q && (t[i] = null), t.detachEvent(i, n))
        }, ut.Event = function (t, e) {
            if (!(this instanceof ut.Event))return new ut.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? l : c) : this.type = t, e && ut.extend(this, e), this.timeStamp = t && t.timeStamp || ut.now(), this[ut.expando] = !0
        }, ut.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ut.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
            ut.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === i || ut.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ut.support.submitBubbles || (ut.event.special.submit = {
            setup: function () {
                if (ut.nodeName(this, "form"))return !1;
                ut.event.add(this, "click._submit keypress._submit", function (t) {
                    var n = t.target, i = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : e;
                    i && !ut._data(i, "submitBubbles") && (ut.event.add(i, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), ut._data(i, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ut.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                if (ut.nodeName(this, "form"))return !1;
                ut.event.remove(this, "._submit")
            }
        }), ut.support.changeBubbles || (ut.event.special.change = {
            setup: function () {
                if (_t.test(this.nodeName))return "checkbox" !== this.type && "radio" !== this.type || (ut.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ut.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, t, !0)
                })), !1;
                ut.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    _t.test(e.nodeName) && !ut._data(e, "changeBubbles") && (ut.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ut.event.simulate("change", this.parentNode, t, !0)
                    }), ut._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)return t.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return ut.event.remove(this, "._change"), !_t.test(this.nodeName)
            }
        }), ut.support.focusinBubbles || ut.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = 0, i = function (t) {
                ut.event.simulate(e, t.target, ut.event.fix(t), !0)
            };
            ut.event.special[e] = {
                setup: function () {
                    0 == n++ && J.addEventListener(t, i, !0)
                }, teardown: function () {
                    0 == --n && J.removeEventListener(t, i, !0)
                }
            }
        }), ut.fn.extend({
            on: function (t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = e);
                    for (s in t)this.on(s, n, i, t[s], r);
                    return this
                }
                if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), !1 === o)o = c; else if (!o)return this;
                return 1 === r && (a = o, o = function (t) {
                    return ut().off(t), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ut.guid++)), this.each(function () {
                    ut.event.add(this, t, o, i, n)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, n, i) {
                var o, r;
                if (t && t.preventDefault && t.handleObj)return o = t.handleObj, ut(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (r in t)this.off(r, n, t[r]);
                    return this
                }
                return !1 !== n && "function" != typeof n || (i = n, n = e), !1 === i && (i = c), this.each(function () {
                    ut.event.remove(this, t, i, n)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    ut.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n)return ut.event.trigger(t, e, n, !0)
            }
        });
        var Mt = /^.[^:#\[\.,]*$/, Wt = /^(?:parents|prev(?:Until|All))/, Ut = ut.expr.match.needsContext, zt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ut.fn.extend({
            find: function (t) {
                var e, n = [], i = this, o = i.length;
                if ("string" != typeof t)return this.pushStack(ut(t).filter(function () {
                    for (e = 0; e < o; e++)if (ut.contains(i[e], this))return !0
                }));
                for (e = 0; e < o; e++)ut.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ut.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, has: function (t) {
                var e, n = ut(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; e < i; e++)if (ut.contains(this, n[e]))return !0
                })
            }, not: function (t) {
                return this.pushStack(p(this, t || [], !0))
            }, filter: function (t) {
                return this.pushStack(p(this, t || [], !1))
            }, is: function (t) {
                return !!p(this, "string" == typeof t && Ut.test(t) ? ut(t) : t || [], !1).length
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [], s = Ut.test(t) || "string" != typeof t ? ut(t, e || this.context) : 0; i < o; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, t))) {
                    n = r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? ut.unique(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? ut.inArray(this[0], ut(t)) : ut.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                var n = "string" == typeof t ? ut(t, e) : ut.makeArray(t && t.nodeType ? [t] : t), i = ut.merge(this.get(), n);
                return this.pushStack(ut.unique(i))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ut.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return ut.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return ut.dir(t, "parentNode", n)
            }, next: function (t) {
                return f(t, "nextSibling")
            }, prev: function (t) {
                return f(t, "previousSibling")
            }, nextAll: function (t) {
                return ut.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return ut.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return ut.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return ut.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return ut.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return ut.sibling(t.firstChild)
            }, contents: function (t) {
                return ut.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ut.merge([], t.childNodes)
            }
        }, function (t, e) {
            ut.fn[t] = function (n, i) {
                var o = ut.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ut.filter(i, o)), this.length > 1 && (zt[t] || (o = ut.unique(o)), Wt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        }), ut.extend({
            filter: function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ut.find.matchesSelector(i, t) ? [i] : [] : ut.find.matches(t, ut.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, dir: function (t, n, i) {
                for (var o = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !ut(r).is(i));)1 === r.nodeType && o.push(r), r = r[n];
                return o
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vt = / jQuery\d+="(?:null|\d+)"/g, Qt = new RegExp("<(?:" + Xt + ")[\\s/>]", "i"), Yt = /^\s+/, Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kt = /<([\w:]+)/, Gt = /<tbody/i, Zt = /<|&#?\w+;/, te = /<(?:script|style|link)/i, ee = /^(?:checkbox|radio)$/i, ne = /checked\s*(?:[^=]|=\s*.checked.)/i, ie = /^$|\/(?:java|ecma)script/i, oe = /^true\/(.*)/, re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ae = d(J), le = ae.appendChild(J.createElement("div"));
        se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, ut.fn.extend({
            text: function (t) {
                return ut.access(this, function (t) {
                    return t === e ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        h(this, t).appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? ut.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || ut.cleanData(x(n)), n.parentNode && (e && ut.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ut.cleanData(x(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                    t.options && ut.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ut.clone(this, t, e)
                })
            }, html: function (t) {
                return ut.access(this, function (t) {
                    var n = this[0] || {}, i = 0, o = this.length;
                    if (t === e)return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : e;
                    if ("string" == typeof t && !te.test(t) && (ut.support.htmlSerialize || !Qt.test(t)) && (ut.support.leadingWhitespace || !Yt.test(t)) && !se[(Kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Jt, "<$1></$2>");
                        try {
                            for (; i < o; i++)n = this[i] || {}, 1 === n.nodeType && (ut.cleanData(x(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (t) {
                        }
                    }
                    n && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = ut.map(this, function (t) {
                    return [t.nextSibling, t.parentNode]
                }), e = 0;
                return this.domManip(arguments, function (n) {
                    var i = t[e++], o = t[e++];
                    o && (i && i.parentNode !== o && (i = this.nextSibling), ut(this).remove(), o.insertBefore(n, i))
                }, !0), e ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e, n) {
                t = it.apply([], t);
                var i, o, r, s, a, l, c = 0, u = this.length, f = this, p = u - 1, d = t[0], h = ut.isFunction(d);
                if (h || !(u <= 1 || "string" != typeof d || ut.support.checkClone) && ne.test(d))return this.each(function (i) {
                    var o = f.eq(i);
                    h && (t[0] = d.call(this, i, o.html())), o.domManip(t, e, n)
                });
                if (u && (l = ut.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (s = ut.map(x(l, "script"), g), r = s.length; c < u; c++)o = l, c !== p && (o = ut.clone(o, !0, !0), r && ut.merge(s, x(o, "script"))), e.call(this[c], o, c);
                    if (r)for (a = s[s.length - 1].ownerDocument, ut.map(s, m), c = 0; c < r; c++)o = s[c], ie.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(a, o) && (o.src ? ut._evalUrl(o.src) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(re, "")));
                    l = i = null
                }
                return this
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ut.fn[t] = function (t) {
                for (var n, i = 0, o = [], r = ut(t), s = r.length - 1; i <= s; i++)n = i === s ? this : this.clone(!0), ut(r[i])[e](n), ot.apply(o, n.get());
                return this.pushStack(o)
            }
        }), ut.extend({
            clone: function (t, e, n) {
                var i, o, r, s, a, l = ut.contains(t.ownerDocument, t);
                if (ut.support.html5Clone || ut.isXMLDoc(t) || !Qt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(r = le.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ut.isXMLDoc(t)))for (i = x(r), a = x(t), s = 0; null != (o = a[s]); ++s)i[s] && b(o, i[s]);
                if (e)if (n)for (a = a || x(t), i = i || x(r), s = 0; null != (o = a[s]); s++)y(o, i[s]); else y(t, r);
                return i = x(r, "script"), i.length > 0 && v(i, !l && x(t, "script")), i = a = o = null, r
            }, buildFragment: function (t, e, n, i) {
                for (var o, r, s, a, l, c, u, f = t.length, p = d(e), h = [], g = 0; g < f; g++)if ((r = t[g]) || 0 === r)if ("object" === ut.type(r))ut.merge(h, r.nodeType ? [r] : r); else if (Zt.test(r)) {
                    for (a = a || p.appendChild(e.createElement("div")), l = (Kt.exec(r) || ["", ""])[1].toLowerCase(), u = se[l] || se._default, a.innerHTML = u[1] + r.replace(Jt, "<$1></$2>") + u[2], o = u[0]; o--;)a = a.lastChild;
                    if (!ut.support.leadingWhitespace && Yt.test(r) && h.push(e.createTextNode(Yt.exec(r)[0])), !ut.support.tbody)for (r = "table" !== l || Gt.test(r) ? "<table>" !== u[1] || Gt.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;)ut.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (ut.merge(h, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                    a = p.lastChild
                } else h.push(e.createTextNode(r));
                for (a && p.removeChild(a), ut.support.appendChecked || ut.grep(x(h, "input"), w), g = 0; r = h[g++];)if ((!i || -1 === ut.inArray(r, i)) && (s = ut.contains(r.ownerDocument, r), a = x(p.appendChild(r), "script"), s && v(a), n))for (o = 0; r = a[o++];)ie.test(r.type || "") && n.push(r);
                return a = null, p
            }, cleanData: function (t, e) {
                for (var n, i, o, r, s = 0, a = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (n = t[s]); s++)if ((e || ut.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)for (i in r.events)u[i] ? ut.event.remove(n, i) : ut.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Q ? n.removeAttribute(a) : n[a] = null, et.push(o))
                }
            }, _evalUrl: function (t) {
                return ut.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
            }
        }), ut.fn.extend({
            wrapAll: function (t) {
                if (ut.isFunction(t))return this.each(function (e) {
                    ut(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ut(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return ut.isFunction(t) ? this.each(function (e) {
                    ut(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = ut(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = ut.isFunction(t);
                return this.each(function (n) {
                    ut(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var ce, ue, fe, pe = /alpha\([^)]*\)/i, de = /opacity\s*=\s*([^)]*)/, he = /^(top|right|bottom|left)$/, ge = /^(none|table(?!-c[ea]).+)/, me = /^margin/, ve = new RegExp("^(" + ft + ")(.*)$", "i"), ye = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"), be = new RegExp("^([+-])=(" + ft + ")", "i"), xe = {BODY: "block"}, we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Te = {
            letterSpacing: 0,
            fontWeight: 400
        }, Ce = ["Top", "Right", "Bottom", "Left"], Ne = ["Webkit", "O", "Moz", "ms"];
        ut.fn.extend({
            css: function (t, n) {
                return ut.access(this, function (t, n, i) {
                    var o, r, s = {}, a = 0;
                    if (ut.isArray(n)) {
                        for (r = ue(t), o = n.length; a < o; a++)s[n[a]] = ut.css(t, n[a], !1, r);
                        return s
                    }
                    return i !== e ? ut.style(t, n, i) : ut.css(t, n)
                }, t, n, arguments.length > 1)
            }, show: function () {
                return N(this, !0)
            }, hide: function () {
                return N(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    C(this) ? ut(this).show() : ut(this).hide()
                })
            }
        }), ut.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = fe(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: ut.support.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, n, i, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a, l = ut.camelCase(n), c = t.style;
                    if (n = ut.cssProps[l] || (ut.cssProps[l] = T(c, l)), a = ut.cssHooks[n] || ut.cssHooks[l], i === e)return a && "get"in a && (r = a.get(t, !1, o)) !== e ? r : c[n];
                    if (!(s = typeof i, "string" === s && (r = be.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ut.css(t, n)), s = "number"), null == i || "number" === s && isNaN(i) || ("number" !== s || ut.cssNumber[l] || (i += "px"), ut.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set"in a && (i = a.set(t, i, o)) === e)))try {
                        c[n] = i
                    } catch (t) {
                    }
                }
            },
            css: function (t, n, i, o) {
                var r, s, a, l = ut.camelCase(n);
                return n = ut.cssProps[l] || (ut.cssProps[l] = T(t.style, l)), a = ut.cssHooks[n] || ut.cssHooks[l], a && "get"in a && (s = a.get(t, !0, i)), s === e && (s = fe(t, n, o)), "normal" === s && n in Te && (s = Te[n]), "" === i || i ? (r = parseFloat(s), !0 === i || ut.isNumeric(r) ? r || 0 : s) : s
            }
        }), t.getComputedStyle ? (ue = function (e) {
            return t.getComputedStyle(e, null)
        }, fe = function (t, n, i) {
            var o, r, s, a = i || ue(t), l = a ? a.getPropertyValue(n) || a[n] : e, c = t.style;
            return a && ("" !== l || ut.contains(t.ownerDocument, t) || (l = ut.style(t, n)), ye.test(l) && me.test(n) && (o = c.width, r = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = o, c.minWidth = r, c.maxWidth = s)), l
        }) : J.documentElement.currentStyle && (ue = function (t) {
            return t.currentStyle
        }, fe = function (t, n, i) {
            var o, r, s, a = i || ue(t), l = a ? a[n] : e, c = t.style;
            return null == l && c && c[n] && (l = c[n]), ye.test(l) && !he.test(n) && (o = c.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, s && (r.left = s)), "" === l ? "auto" : l
        }), ut.each(["height", "width"], function (t, e) {
            ut.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)return 0 === t.offsetWidth && ge.test(ut.css(t, "display")) ? ut.swap(t, we, function () {
                        return A(t, e, i)
                    }) : A(t, e, i)
                }, set: function (t, n, i) {
                    var o = i && ue(t);
                    return E(t, n, i ? k(t, e, i, ut.support.boxSizing && "border-box" === ut.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ut.support.opacity || (ut.cssHooks.opacity = {
            get: function (t, e) {
                return de.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, o = ut.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ut.trim(r.replace(pe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pe.test(r) ? r.replace(pe, o) : r + " " + o)
            }
        }), ut(function () {
            ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
                get: function (t, e) {
                    if (e)return ut.swap(t, {display: "inline-block"}, fe, [t, "marginRight"])
                }
            }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (t, e) {
                ut.cssHooks[e] = {
                    get: function (t, n) {
                        if (n)return n = fe(t, e), ye.test(n) ? ut(t).position()[e] + "px" : n
                    }
                }
            })
        }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ut.css(t, "display"))
        }, ut.expr.filters.visible = function (t) {
            return !ut.expr.filters.hidden(t)
        }), ut.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            ut.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)o[t + Ce[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, me.test(t) || (ut.cssHooks[t + e].set = E)
        });
        var Ee = /%20/g, ke = /\[\]$/, Ae = /\r?\n/g, Se = /^(?:submit|button|image|reset|file)$/i, $e = /^(?:input|select|textarea|keygen)/i;
        ut.fn.extend({
            serialize: function () {
                return ut.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = ut.prop(this, "elements");
                    return t ? ut.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ut(this).is(":disabled") && $e.test(this.nodeName) && !Se.test(t) && (this.checked || !ee.test(t))
                }).map(function (t, e) {
                    var n = ut(this).val();
                    return null == n ? null : ut.isArray(n) ? ut.map(n, function (t) {
                        return {name: e.name, value: t.replace(Ae, "\r\n")}
                    }) : {name: e.name, value: n.replace(Ae, "\r\n")}
                }).get()
            }
        }), ut.param = function (t, n) {
            var i, o = [], r = function (t, e) {
                e = ut.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (n === e && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(t) || t.jquery && !ut.isPlainObject(t))ut.each(t, function () {
                r(this.name, this.value)
            }); else for (i in t)D(i, t[i], n, r);
            return o.join("&").replace(Ee, "+")
        }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ut.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ut.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var De, je, Le = ut.now(), Oe = /\?/, He = /#.*$/, Ie = /([?&])_=[^&]*/, Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, _e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fe = /^(?:GET|HEAD)$/, Pe = /^\/\//, qe = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Be = ut.fn.load, Me = {}, We = {}, Ue = "*/".concat("*");
        try {
            je = Y.href
        } catch (t) {
            je = J.createElement("a"), je.href = "", je = je.href
        }
        De = qe.exec(je.toLowerCase()) || [], ut.fn.load = function (t, n, i) {
            if ("string" != typeof t && Be)return Be.apply(this, arguments);
            var o, r, s, a = this, l = t.indexOf(" ");
            return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), ut.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ut.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: n
            }).done(function (t) {
                r = arguments, a.html(o ? ut("<div>").append(ut.parseHTML(t)).find(o) : t)
            }).complete(i && function (t, e) {
                    a.each(i, r || [t.responseText, e, t])
                }), this
        }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ut.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: je,
                type: "GET",
                isLocal: _e.test(De[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ue,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ut.parseJSON, "text xml": ut.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? O(O(t, ut.ajaxSettings), e) : O(ut.ajaxSettings, t)
            },
            ajaxPrefilter: j(Me),
            ajaxTransport: j(We),
            ajax: function (n, i) {
                function o(n, i, o, r) {
                    var s, p, b, x, T, N = i;
                    2 !== w && (w = 2, c && clearTimeout(c), f = e, l = r || "", C.readyState = n > 0 ? 4 : 0, s = n >= 200 && n < 300 || 304 === n, o && (x = H(d, C, o)), x = I(d, x, C, s), s ? (d.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (ut.lastModified[a] = T), (T = C.getResponseHeader("etag")) && (ut.etag[a] = T)), 204 === n || "HEAD" === d.type ? N = "nocontent" : 304 === n ? N = "notmodified" : (N = x.state, p = x.data, b = x.error, s = !b)) : (b = N, !n && N || (N = "error", n < 0 && (n = 0))), C.status = n, C.statusText = (i || N) + "", s ? (t.qyerUtil && "function" == typeof t.qyerUtil.ajaxFillter && t.qyerUtil.ajaxFillter(p, N, C), m.resolveWith(h, [p, N, C])) : m.rejectWith(h, [C, N, b]), C.statusCode(y), y = e, u && g.trigger(s ? "ajaxSuccess" : "ajaxError", [C, d, s ? p : b]), v.fireWith(h, [C, N]), u && (g.trigger("ajaxComplete", [C, d]), --ut.active || ut.event.trigger("ajaxStop")))
                }

                "object" == typeof n && (i = n, n = e), i = i || {};
                var r, s, a, l, c, u, f, p, d = ut.ajaxSetup({}, i), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? ut(h) : ut.event, m = ut.Deferred(), v = ut.Callbacks("once memory"), y = d.statusCode || {}, b = {}, x = {}, w = 0, T = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === w) {
                            if (!p)for (p = {}; e = Re.exec(l);)p[e[1].toLowerCase()] = e[2];
                            e = p[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? l : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return w || (t = x[n] = x[n] || t, b[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return w || (d.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (w < 2)for (e in t)y[e] = [y[e], t[e]]; else C.always(t[C.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || T;
                        return f && f.abort(e), o(0, e), this
                    }
                };
                if (m.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, d.url = ((n || d.url || je) + "").replace(He, "").replace(Pe, De[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ut.trim(d.dataType || "*").toLowerCase().match(pt) || [""], null == d.crossDomain && (r = qe.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === De[1] && r[2] === De[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (De[3] || ("http:" === De[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ut.param(d.data, d.traditional)), L(Me, d, i, C), 2 === w)return C;
                u = d.global, u && 0 == ut.active++ && ut.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Fe.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Oe.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Ie.test(a) ? a.replace(Ie, "$1_=" + Le++) : a + (Oe.test(a) ? "&" : "?") + "_=" + Le++)), d.ifModified && (ut.lastModified[a] && C.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && C.setRequestHeader("If-None-Match", ut.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : d.accepts["*"]);
                for (s in d.headers)C.setRequestHeader(s, d.headers[s]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || 2 === w))return C.abort();
                T = "abort";
                for (s in{success: 1, error: 1, complete: 1})C[s](d[s]);
                if (f = L(We, d, i, C)) {
                    C.readyState = 1, u && g.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (c = setTimeout(function () {
                        C.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, f.send(b, o)
                    } catch (t) {
                        if (!(w < 2))throw t;
                        o(-1, t)
                    }
                } else o(-1, "No Transport");
                return C
            },
            getJSON: function (t, e, n) {
                return ut.get(t, e, n, "json")
            },
            getScript: function (t, n) {
                return ut.get(t, e, n, "script")
            }
        }), ut.each(["get", "post"], function (t, n) {
            ut[n] = function (t, i, o, r) {
                return ut.isFunction(i) && (r = r || o, o = i, i = e), ut.ajax({
                    url: t,
                    type: n,
                    dataType: r,
                    data: i,
                    success: o
                })
            }
        }), ut.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return ut.globalEval(t), t
                }
            }
        }), ut.ajaxPrefilter("script", function (t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ut.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var n, i = J.head || ut("head")[0] || J.documentElement;
                return {
                    send: function (e, o) {
                        n = J.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    }, abort: function () {
                        n && n.onload(e, !0)
                    }
                }
            }
        });
        var ze = [], Xe = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = ze.pop() || ut.expando + "_" + Le++;
                return this[t] = !0, t
            }
        }), ut.ajaxPrefilter("json jsonp", function (n, i, o) {
            var r, s, a, l = !1 !== n.jsonp && (Xe.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(n.data) && "data");
            if (l || "jsonp" === n.dataTypes[0])return r = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xe, "$1" + r) : !1 !== n.jsonp && (n.url += (Oe.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function () {
                return a || ut.error(r + " was not called"), a[0]
            }, n.dataTypes[0] = "json", s = t[r], t[r] = function () {
                a = arguments
            }, o.always(function () {
                t[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, ze.push(r)), a && ut.isFunction(s) && s(a[0]), a = s = e
            }), "script"
        });
        var Ve, Qe, Ye = 0, Je = t.ActiveXObject && function () {
                var t;
                for (t in Ve)Ve[t](e, !0)
            };
        ut.ajaxSettings.xhr = t.ActiveXObject ? function () {
            return !this.isLocal && R() || _()
        } : R, Qe = ut.ajaxSettings.xhr(), ut.support.cors = !!Qe && "withCredentials"in Qe, (Qe = ut.support.ajax = !!Qe) && ut.ajaxTransport(function (n) {
            if (!n.crossDomain || ut.support.cors) {
                var i;
                return {
                    send: function (o, r) {
                        var s, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (a in n.xhrFields)l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in o)l.setRequestHeader(a, o[a])
                        } catch (t) {
                        }
                        l.send(n.hasContent && n.data || null), i = function (t, o) {
                            var a, c, u, f;
                            try {
                                if (i && (o || 4 === l.readyState))if (i = e, s && (l.onreadystatechange = ut.noop, Je && delete Ve[s]), o)4 !== l.readyState && l.abort(); else {
                                    f = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (t) {
                                        u = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                                }
                            } catch (t) {
                                o || r(-1, t)
                            }
                            f && r(a, u, f, c)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Ye, Je && (Ve || (Ve = {}, ut(t).unload(Je)), Ve[s] = i), l.onreadystatechange = i) : i()
                    }, abort: function () {
                        i && i(e, !0)
                    }
                }
            }
        });
        var Ke, Ge, Ze = /^(?:toggle|show|hide)$/, tn = new RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"), en = /queueHooks$/, nn = [M], on = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), o = tn.exec(e), r = o && o[3] || (ut.cssNumber[t] ? "" : "px"), s = (ut.cssNumber[t] || "px" !== r && +i) && tn.exec(ut.css(n.elem, t)), a = 1, l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do {
                        a = a || ".5", s /= a, ut.style(n.elem, t, s + r)
                    } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
        ut.Animation = ut.extend(q, {
            tweener: function (t, e) {
                ut.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; i < o; i++)n = t[i], on[n] = on[n] || [], on[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? nn.unshift(t) : nn.push(t)
            }
        }), ut.Tween = W, W.prototype = {
            constructor: W, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ut.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = W.propHooks[this.prop];
                return t && t.get ? t.get(this) : W.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = W.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ut.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ut.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    ut.fx.step[t.prop] ? ut.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ut.cssProps[t.prop]] || ut.cssHooks[t.prop]) ? ut.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ut.each(["toggle", "show", "hide"], function (t, e) {
            var n = ut.fn[e];
            ut.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(U(e, !0), t, i, o)
            }
        }), ut.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(C).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = ut.isEmptyObject(t), r = ut.speed(e, n, i), s = function () {
                    var e = q(this, ut.extend({}, t), r);
                    (o || ut._data(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (t, n, i) {
                var o = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = n, n = t, t = e), n && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, n = null != t && t + "queueHooks", r = ut.timers, s = ut._data(this);
                    if (n)s[n] && s[n].stop && o(s[n]); else for (n in s)s[n] && s[n].stop && en.test(n) && o(s[n]);
                    for (n = r.length; n--;)r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                    !e && i || ut.dequeue(this, t)
                })
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, n = ut._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ut.timers, s = i ? i.length : 0;
                    for (n.finish = !0, ut.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ut.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            ut.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ut.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? ut.extend({}, t) : {
                complete: n || !n && e || ut.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ut.isFunction(e) && e
            };
            return i.duration = ut.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ut.fx.speeds ? ut.fx.speeds[i.duration] : ut.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ut.isFunction(i.old) && i.old.call(this), i.queue && ut.dequeue(this, i.queue)
            }, i
        }, ut.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ut.timers = [], ut.fx = W.prototype.init, ut.fx.tick = function () {
            var t, n = ut.timers, i = 0;
            for (Ke = ut.now(); i < n.length; i++)(t = n[i])() || n[i] !== t || n.splice(i--, 1);
            n.length || ut.fx.stop(), Ke = e
        }, ut.fx.timer = function (t) {
            t() && ut.timers.push(t) && ut.fx.start()
        }, ut.fx.interval = 13, ut.fx.start = function () {
            Ge || (Ge = setInterval(ut.fx.tick, ut.fx.interval))
        }, ut.fx.stop = function () {
            clearInterval(Ge), Ge = null
        }, ut.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (t) {
            return ut.grep(ut.timers, function (e) {
                return t === e.elem
            }).length
        }), ut.fn.offset = function (t) {
            if (arguments.length)return t === e ? this : this.each(function (e) {
                ut.offset.setOffset(this, t, e)
            });
            var n, i, o = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
            if (s)return n = s.documentElement, ut.contains(n, r) ? (typeof r.getBoundingClientRect !== Q && (o = r.getBoundingClientRect()), i = z(s), {
                top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }, ut.offset = {
            setOffset: function (t, e, n) {
                var i = ut.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var o, r, s = ut(t), a = s.offset(), l = ut.css(t, "top"), c = ut.css(t, "left"), u = ("absolute" === i || "fixed" === i) && ut.inArray("auto", [l, c]) > -1, f = {}, p = {};
                u ? (p = s.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), ut.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using"in e ? e.using.call(t, f) : s.css(f)
            }
        }, ut.fn.extend({
            position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === ut.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ut.nodeName(t[0], "html") || (n = t.offset()), n.top += ut.css(t[0], "borderTopWidth", !0), n.left += ut.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ut.css(i, "marginTop", !0),
                        left: e.left - n.left - ut.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || K; t && !ut.nodeName(t, "html") && "static" === ut.css(t, "position");)t = t.offsetParent;
                    return t || K
                })
            }
        }), ut.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
            var i = /Y/.test(n);
            ut.fn[t] = function (o) {
                return ut.access(this, function (t, o, r) {
                    var s = z(t);
                    if (r === e)return s ? n in s ? s[n] : s.document.documentElement[o] : t[o];
                    s ? s.scrollTo(i ? ut(s).scrollLeft() : r, i ? r : ut(s).scrollTop()) : t[o] = r
                }, t, o, arguments.length, null)
            }
        }), ut.each({Height: "height", Width: "width"}, function (t, n) {
            ut.each({padding: "inner" + t, content: n, "": "outer" + t}, function (i, o) {
                ut.fn[o] = function (o, r) {
                    var s = arguments.length && (i || "boolean" != typeof o), a = i || (!0 === o || !0 === r ? "margin" : "border");
                    return ut.access(this, function (n, i, o) {
                        var r;
                        return ut.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? ut.css(n, i, a) : ut.style(n, i, o, a)
                    }, n, s ? o : e, s, null)
                }
            })
        }), ut.fn.size = function () {
            return this.length
        }, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (t.jQuery = t.$ = ut, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ut
        }))
    }(window), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this))return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.4", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.carousel"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)return e;
        var i = "prev" == t ? -1 : 1, o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        if (!this.sliding)return this.slide("next")
    }, n.prototype.prev = function () {
        if (!this.sliding)return this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(e, o), s = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (r.hasClass("active"))return this.sliding = !1;
        var c = r[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.collapse"), r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition)return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(r).each(function () {
            var i = t(this), o = n(i), r = {relatedTarget: this};
            o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r)))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.4", s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o), s = r.hasClass("open");
            if (e(), !s) {
                "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {relatedTarget: this};
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i), s = o.hasClass("open");
                if (!s && 27 != e.which || s && 27 == e.which)return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a", l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(e.target);
                    38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery), function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var o = t(this), r = o.data("bs.modal"), s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    if (this.ignoreBackdropClick)return void(this.ignoreBackdropClick = !1);
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), s = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide)return n.hide();
        n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var o = this, r = this.tip(), s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(), f = r[0].offsetWidth, p = r[0].offsetHeight;
            if (c) {
                var d = a, h = this.options.container ? t(this.options.container) : this.$element.parent(), g = this.getPosition(h);
                a = "bottom" == a && u.bottom + p > g.bottom ? "top" : "top" == a && u.top - p < g.top ? "bottom" : "right" == a && u.right + f > g.width ? "left" : "left" == a && u.left - f < g.left ? "right" : a, r.removeClass(d).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, f, p);
            this.applyPlacement(m, a);
            var v = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var f = /top|bottom/.test(n), p = f ? 2 * u.left - o + l : 2 * u.top - r + c, d = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][d], f)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }

        var o = this, r = t(this.$tip), s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented())return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var r = i ? {
            top: 0,
            left: 0
        } : e.offset(), s = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, s, a, r)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r, u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.width && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, n.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), function (t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }

    e.VERSION = "3.3.4", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0])return this.activeTarget = null, this.clear();
        for (t = o.length; t--;)s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"), r = t.Event("hide.bs.tab", {relatedTarget: e[0]}), s = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var s = i.find("> .active"), a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return o < n && "top"
            ;
        if ("bottom" == this.affixed)return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed, l = a ? o : r.top, c = a ? s : e;
        return null != n && o <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom, s = t(document.body).height();
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - e - r})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), function (t, e, n, i) {
    var o = t(e);
    t.fn.lazyload = function (r) {
        function s() {
            var e = 0;
            l.each(function () {
                var n = t(this);
                if (!c.skip_invisible || n.is(":visible"))if (t.abovethetop(this, c) || t.leftofbegin(this, c)); else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                    if (++e > c.failure_limit)return !1
                } else n.trigger("appear"), e = 0
            })
        }

        var a, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: e,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return r && (i !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), i !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), t.extend(c, r)), a = c.container === i || c.container === e ? o : t(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function () {
            return s()
        }), this.each(function () {
            var e = this, n = t(e);
            e.loaded = !1, (n.attr("src") === i || !1 === n.attr("src")) && n.is("img") && n.attr("src", c.placeholder), n.one("appear", function () {
                if (!this.loaded) {
                    if (c.appear) {
                        var i = l.length;
                        c.appear.call(e, i, c)
                    }
                    t("<img />").bind("load", function () {
                        var i = n.attr("data-" + c.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[c.effect](c.effect_speed), e.loaded = !0;
                        var o = t.grep(l, function (t) {
                            return !t.loaded
                        });
                        if (l = t(o), c.load) {
                            var r = l.length;
                            c.load.call(e, r, c)
                        }
                    }).attr("src", n.attr("data-" + c.data_attribute))
                }
            }), 0 !== c.event.indexOf("scroll") && n.bind(c.event, function () {
                e.loaded || n.trigger("appear")
            })
        }), o.bind("resize", function () {
            s()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function (e) {
            e.originalEvent && e.originalEvent.persisted && l.each(function () {
                t(this).trigger("appear")
            })
        }), t(n).ready(function () {
            s()
        }), this
    }, t.belowthefold = function (n, r) {
        return (r.container === i || r.container === e ? (e.innerHeight ? e.innerHeight : o.height()) + o.scrollTop() : t(r.container).offset().top + t(r.container).height()) <= t(n).offset().top - r.threshold
    }, t.rightoffold = function (n, r) {
        return (r.container === i || r.container === e ? o.width() + o.scrollLeft() : t(r.container).offset().left + t(r.container).width()) <= t(n).offset().left - r.threshold
    }, t.abovethetop = function (n, r) {
        return (r.container === i || r.container === e ? o.scrollTop() : t(r.container).offset().top) >= t(n).offset().top + r.threshold + t(n).height()
    }, t.leftofbegin = function (n, r) {
        return (r.container === i || r.container === e ? o.scrollLeft() : t(r.container).offset().left) >= t(n).offset().left + r.threshold + t(n).width()
    }, t.inviewport = function (e, n) {
        return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function (e) {
            return t.belowthefold(e, {threshold: 0})
        }, "above-the-top": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-screen": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-screen": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }, "in-viewport": function (e) {
            return t.inviewport(e, {threshold: 0})
        }, "above-the-fold": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-fold": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-fold": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }
    })
}(jQuery, window, document);