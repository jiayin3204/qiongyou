$(function () {
    function e(e) {
        var t, i, s;
        if (t = e.minResponseTime ? new Date : null, s = function (t) {
                if ("undefined" == typeof t.error_code)try {
                    t.error_code = t.error, t.result = t.result, 0 != t.error_code && (t.data = t.data || {}, t.data.msg = t.msg)
                } catch (i) {
                }
                0 == t.error_code ? ("undefined" == typeof t.data && (t.data = e.__defaultData__), e.onCallSuccessBefore && e.onCallSuccessBefore(t), e.onSuccess && e.onSuccess(t), e.onCallSuccessAfter && e.onCallSuccessAfter(t)) : e.onError && e.onError(t)
            }, e.testData)return "undefined" == typeof e.testData.data && (e.testData.data = e.__defaultData__), void setTimeout(function () {
            s(e.testData)
        }, e.minResponseTime || 200);
        var r = window.location.host, a = e.url || e.posturl, n = e.data, o = "json";
        if (/static.qyer.com/.test(r) === !0) {
            var l;
            n = $.extend({}, n, {__qFED__: e.__qFED__}), e.__qFED__ && e.__qFED__.id && (l = e.__qFED__.id, e.type = "GET"), a = "http://fe.2b6.me:3000/service/api/" + l, o = "jsonp", api = null
        }
        var c = $.ajax({
            type: e.type || "POST",
            url: a,
            dataType: o,
            data: n,
            cache: e.cache || !1,
            success: function (r) {
                t ? (i = new Date - t, setTimeout(function () {
                    s.call(null, r)
                }, i > e.minResponseTime ? 0 : e.minResponseTime - i)) : s.call(null, r), t = i = null
            },
            error: function (t, i) {
                e.onError && e.onError({
                    error_code: -1,
                    __server_error__: !0,
                    __server_status__: c.statusText,
                    result: "error",
                    data: {msg: i || {}}
                })
            }
        });
        return c
    }

    function t(e) {
        this.opts = $.extend({box: "#js_qyer_header_userStatus"}, e), this.$userStatusBox = $(this.opts.box), this.ajaxUrls = {
            userStatus: "/qcross/home/ajax?action=loginstatus",
            msgCount: "/qcross/user/ajax.php?action=getunreadcount",
            msgInfo: "/qcross/home/ajax?action=notice"
        }, this.hasNewMessage = !0, this.init()
    }

    function s(e) {
        this.opts = $.extend({box: "#siteSearch"}, e), this.$searchBox = $(this.opts.box), this.$input = this.$searchBox.find(".txt"), this.$form = this.$searchBox.find("form"), this.searchUrl = this.$form.attr("action"), this.ajaxUrls = {sitesearch: "/qcross/home/ajax?action=sitesearch"}, this.searchTimer = null, this.$history = null, this.$autocomplete = null, this._history = [], this._search = {}, this.init()
    }

    function r() {
        this.href = window.location.href, this.refer = document.referrer, this.source = null, this.isnew = this.getCookie("isnew"), this.init()
    }

    var a = {
        getUserStatus: function (t) {
            e(t)
        }, sitesearch: function (t) {
            e(t)
        }
    };
    $(".nav li.nav-list-layer").on("mouseenter", function () {
        clearTimeout(this.timer), $(this).addClass("hover"), $(this).siblings(".hover").length && $(this).siblings(".hover").removeClass("hover")
    }), $(".nav li.nav-list-layer").on("mouseleave", function () {
        var e = $(this);
        this.timer = setTimeout(function () {
            e.removeClass("hover")
        }, 500)
    });
    var n = {
        isParent: function (e, t) {
            for (; void 0 != e && null != e && "BODY" != e.tagName.toUpperCase() && "HTML" != e.tagName.toUpperCase();) {
                if (e == t)return !0;
                e = e.parentNode
            }
            return !1
        }, loadInner: function () {
            return '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>'
        }, fliterScript: function (e) {
            return e.replace(/<script[^>]*>[\s\S]*?<\/[^>]*script>/gi, "")
        }
    };
    t.prototype = {
        init: function () {
            window.QYER = window.QYER || {uid: 0}, this.getUserStatus(), this.bindEvent()
        }, getUserStatus: function () {
            var e = this;
            a.getUserStatus({
                url: this.ajaxUrls.userStatus, data: {timer: (new Date).getTime()}, onSuccess: function (t) {
                    0 == t.error_code && (window.QYER = window.QYER || {}, window.QYER.uid = t.data.uid, window._qyer_userid = t.data.uid, t.data.uid > 0 && (window.QYER.uid = t.data.uid, e.renderUserInfoInner(t.data.userinfo)), window.__userStatusCallBack && __userStatusCallBack.call(window, t.data))
                }
            })
        }, renderUserInfoInner: function (e) {
            function t(e) {
                var t = "";
                return t += ' <span class="auth_avatar_q s">', t += "<i" + (e.url && "" != e.url ? " onclick=\"window.location='" + e.url + "';\"" : "") + ' class="icon ' + e.type + '" title="' + e.text + '"></i>', t += "</span>"
            }

            var i = ['<div class="user-info show">', '<div class="userstatus">', ' <span class="username"><a target="_blank" data-bn-ipg="index-head-user" href="//www.qyer.com/u/' + e.uid + '">' + e.username + "</a></span>", e.auth ? t(e.auth) : "", ' <span style="vertical-align: -2px;"><i class="iconfont icon-jiantouxia"></i></span>', e.menuInner, "</div>", '<div class="usermsg">', '<a href="javascript:;" class="message"><i class="iconfont icon-xinfeng"></i><em class="num">' + (e.msgCount && e.msgCount > 0 ? e.msgCount : "") + "</em></a>", '<em class="newmsg"' + (e.msgCount && e.msgCount ? "" : ' style="display:none;"') + "></em>", '<div class="q-layer q-layer-message">', '<div class="layer-msg-tab">', "<ul>", '<li class="current' + (e.msg && e.msg.board ? " new" : "") + '" data-msg-type="board"><a href="javascript:;">站内通知</a></li>', "<li" + (e.msg && e.msg.notice ? ' class="new"' : "") + ' data-msg-type="notice"><a href="javascript:;">消息</a></li>', "<li" + (e.msg && e.msg.message ? ' class="new"' : "") + ' data-msg-type="message"><a href="javascript:;">私信</a></li>', "</ul>", "</div>", '<div class="layer-msg-container">', '<div class="layer-msg-item layer-msg-item-board" style="display: block;">', '<div class="layer-msg-inner"><div class="loading"></div></div>', '<div class="layer-msg-more">', '<a href="' + e.msgUrl.board + '"  data-bn-ipg="index-head-black-all">查看全部</a>', "</div>", "</div>", '<div class="layer-msg-item layer-msg-item-notice">', '<div class="layer-msg-inner"><div class="loading"></div></div>', '<div class="layer-msg-more">', '<a href="' + e.msgUrl.notice + '"   data-bn-ipg="index-head-notice-all">查看全部</a>', "</div>", "</div>", '<div class="layer-msg-item layer-msg-item-message">', '<div class="layer-msg-inner"><div class="loading"></div></div>', '<div class="layer-msg-more">', '<a href="' + e.msgUrl.message + '"  data-bn-ipg="index-head-letter-all">查看全部</a>', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
            this.$userStatusBox.html(i), this.getUserMsgCount()
        }, renderUserMsgInner: function (e) {
            this.renderMsg("board", e.board, this.$userStatusBox.find(".layer-msg-item-board > .layer-msg-inner")), this.renderMsg("notice", e.notice, this.$userStatusBox.find(".layer-msg-item-notice > .layer-msg-inner")), this.renderMsg("message", e.message, this.$userStatusBox.find(".layer-msg-item-message > .layer-msg-inner"))
        }, renderMsg: function (e, t, i) {
            var s, r, a = [];
            switch (e) {
                case"board":
                    s = "站内通知", r = "black";
                    break;
                case"notice":
                    s = "消息", r = "notice";
                    break;
                case"message":
                default:
                    s = "私信", r = "letter"
            }
            if (this.$userStatusBox.find("[data-msg-type=" + e + "]")[t.unread > 0 ? "addClass" : "removeClass"]("new"), t.list.length) {
                a.push("<ul>");
                for (var n = 0; n < t.list.length; n++) {
                    var o = t.list[n];
                    a.push("<li" + (0 == o.unread ? "" : ' class="unread"') + ">"), a.push('<div class="layer-msg-cont">'), a.push('<p class="cont">'), a.push('<a href="' + o.url + '" data-bn-ipg="index-head-msgrdrop-' + r + "List-" + n + '">' + ("message" == e ? o.from + ": " : "") + o.msg + "</a>"), a.push("</p>"), a.push("</div>"), a.push("</li>")
                }
                a.push("</ul>")
            } else a.push('<div class="msg-empty">暂时没有新的' + s + "</div>");
            i.html(a.join(""))
        }, getUserMsgCount: function () {
            var e = this, t = !0, i = 0;
            $(window).focus(function () {
                t = !0
            }).blur(function () {
                t = !1
            });
            var s = function () {
                var s = !!i, r = 10 * Math.random() < 7, a = !t;
                s || r || a || (e.hasNewMessage = !0, $.getJSON(e.ajaxUrls.msgCount, {timer: (new Date).getTime()}).done(function (t) {
                    i = t.total_count, e.$userStatusBox.find(".newmsg")[t.total_count > 0 ? "show" : "hide"](), e.$userStatusBox.find(".num").html(t.total_count)
                }))
            };
            setInterval(function () {
                s()
            }, 3e4)
        }, getUserMsgInfo: function () {
            var e = this;
            this.hasNewMessage = !1, $.getJSON(this.ajaxUrls.msgInfo, {timer: (new Date).getTime()}).done(function (t) {
                0 == t.error_code && e.renderUserMsgInner(t.data)
            })
        }, bindEvent: function () {
            var e = this;
            this.$userStatusBox.on("click", ".otherlogin-link", function () {
                return e.otherlogin(this.getAttribute("data-type"), this.getAttribute("url")), !1
            }).on("mouseenter", ".userstatus,.usermsg", function () {
                clearTimeout(this.timer), $(this).addClass("hover"), $(this).hasClass("usermsg") && e.hasNewMessage && e.getUserMsgInfo()
            }).on("mouseleave", ".userstatus,.usermsg", function () {
                var e = $(this);
                this.timer = setTimeout(function () {
                    e.removeClass("hover")
                }, 500)
            }).on("click", ".layer-msg-tab li", function () {
                if ($(this).hasClass("current"))return !1;
                var t = this.getAttribute("data-msg-type");
                $(this).addClass("current").siblings().removeClass("current"), e.$userStatusBox.find(".layer-msg-item-" + t).show().siblings().hide()
            })
        }, otherlogin: function (e, t) {
            var t = "https://passport.qyer.com/oauth?using=" + e + "&ref=" + (t || window.location.href);
            window.location = t, t = null
        }
    }, new t({}), function (e, t) {
        function s() {
            var t = e.cookie.match(/guid=([^;]+);/);
            return t && t.length && t[1] ? t[1] : ""
        }

        var r = !(/Android|iPhone|SymbianOS|Windows Phone/gi.test(navigator.userAgent) && /^(https?:)?\/\/m\.qyer\.com\/?.*$/.test(window.location.href)), a = {
            ad_request: "//hades.qyer.com/ad/show",
            current_url: encodeURIComponent(e.location.href),
            guid: s(),
            callback: "adHandler",
            limit: 1,
            timeout: 100,
            context: "ad",
            v: "1.2",
            start: function () {
                for (var e = a.getClassNames("ad_zone", "div"), t = 0; t < e.length; t++) {
                    var i = e[t];
                    a.sendjsonp(a.createRquest(i))
                }
            },
            createRquest: function (e) {
                var t = e.getAttribute("data-countries"), i = e.getAttribute("data-areas"), s = a.ad_request, r = e.id.replace(/zoneid-/, "");
                return s += "?", s += "zone_id=" + r, s += "&context=" + a.context, t && (s += "&countries=" + t), i && (s += "&areas=" + i), "object" == typeof QYER && QYER && QYER.uid && (s += "&uid=" + QYER.uid), s += "&current_url=" + a.current_url, s += "&guid=" + a.guid, s += "&callback=" + a.callback, s += "&limit=" + a.limit
            },
            sendjsonp: function (t) {
                var i = e.createElement("script");
                i.setAttribute("src", t), e.getElementsByTagName("head")[0].appendChild(i)
            },
            adHandler: function (t) {
                if (t && 0 === t.status) {
                    var i = t.data.content, s = i.zone_id, n = e.getElementById("zoneid-" + s);
                    if (i.ad_list.length) {
                        var o = i.ad_list[0];
                        n.style.height = o.height + "px", n.style.width = o.width + "px", r || (n.style.width = "100%", n.style.height = window.screen.width / o.width * o.height + "px");
                        var l = a.createFrame({width: n.clientWidth, height: n.clientHeight});
                        n.appendChild(l), a.loadFrame(l, a.createContent(o)), n.className += " loaded", l.style.display = "block", window.jQuery ? "none" == n.style.display && jQuery(n).slideDown() : "block" == n.style.display, $(window).trigger("AD_LOADED", [t])
                    } else a.hideFrame(n), n.className += " loaded nocontent"
                }
            },
            createContent: function (e) {
                function t(t, i) {
                    return t += "?clickTAG=" + encodeURIComponent(e.target_url), ['<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="100%" height="100%" title="flash">', '<param name="movie" value="' + t + '" />', '<param name="quality" value="high" />', '<param name="IsAutoPlay" value="1" />', '<param name="PLAY" value="true">', '<param name="wmode" value="transparent">', '<embed id="swfControl" src="' + t + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%" wmode="transparent" autostart="true" play="true"></embed>', "</object>"].join("")
                }

                var i = "";
                if (e) {
                    switch (i += '<a href="' + e.target_url + '" target="_blank" style="position:relative;width:100%;height:100%;display:block;">', e.content_type.toLowerCase()) {
                        case"img":
                            i += '<img src="' + e.content_url + '" alt="' + e.alt + '" title="" border="" style="display:block;width:100%;height:100%;" />';
                            break;
                        case"flash":
                            i += t(e.content_url, e.target_url)
                    }
                    "ST_AD" == e.content_type_op && (i += '<img src="//static.qyer.com/models//common/component/headfoot/icon/ad_icon_3x.png" style="width:44px !important;height:15px !important;position:absolute !important;left:0px !important;bottom:0px !important;" />'), i += "</a>"
                }
                return i
            },
            hideFrame: function (e) {
                e.style.display = "none"
            },
            createFrame: function (t) {
                var i = e.createElement("IFRAME"), s = i.style;
                return i.scrolling = "no", i.frameBorder = 0, i.width = "100%", i.height = "100%", s.border = 0, s.overflow = "hidden", i
            },
            loadFrame: function (e, t) {
                var i = e.contentDocument || e.contentWindow.document;
                i.open(), i.writeln('<!DOCTYPE html><html style="width:100%;height:100%;"><head><base target="_top"></head><body border="0" margin="0" style="margin: 0;padding:0;width:100%;height:100%;">'), i.writeln(t), i.writeln("</body></html>"), i.close()
            },
            getClassNames: function (t, s) {
                function r(e, t) {
                    for (var i = e.className.split(/\s+/), s = 0; s < i.length; s++)if (i[s] == t)return !0;
                    return !1
                }

                if (e.getElementsByClassName)return e.getElementsByClassName(t);
                var a = e.getElementsByTagName(s), n = [];
                for (i = 0; i < a.length; i++)r(a[i], t) && n.push(a[i]);
                return n
            }
        };
        window.adHandler = a.adHandler, a.start()
    }(document, window), s.prototype = {
        init: function () {
            this.createHistory(), this.createAutoComplete(), this.bindEvent(), this.getStorage()
        }, bindEvent: function () {
            var e = this;
            this.$input.on("focus", function () {
                e.hideLayer(), e.searchBoxActive()
            }), this.$input.on("keyup", function (t) {
                switch (t.keyCode) {
                    case 38:
                    case 37:
                        e.switchUpDown("up");
                        break;
                    case 40:
                    case 39:
                        e.switchUpDown("down");
                        break;
                    default:
                        clearTimeout(e.searchTimer), e.searchTimer = setTimeout(function () {
                            "" == e.getSearchWord() ? e.showHistory() : e.searchWord(e.getSearchWord())
                        }, 400)
                }
            }), this.$form.on("submit", function () {
                var t = $.trim(e.$input.val()), i = e.searchUrl + "?wd=" + window.encodeURIComponent(t);
                return "" != t && void e.setStorage(t, i)
            })
        }, searchBoxActive: function () {
            this.$searchBox.addClass("active"), this.clickDocumentEvent(this.$searchBox[0], this.searchBoxClose), "" == this.getSearchWord() ? this.showHistory() : this.searchWord(this.getSearchWord())
        }, searchBoxClose: function () {
            this.$searchBox.removeClass("active"), this.$input.val(""), this.$history && this.$history.removeClass("show")
        }, clickDocumentEvent: function (e, t) {
            var i = this, s = "e_" + (new Date).getTime();
            $(document).unbind("click." + s), $(document).bind("click." + s, function (r) {
                n.isParent(r.target, e) || r.target == e || (t.call(i), $(document).unbind("click." + s))
            })
        }, createHistory: function () {
            if (!window.localStorage)return !1;
            var e = this, t = ['<div class="q-layer q-layer-sitesearch-history">', "<ul>", "</ul>", '<div class="history-clear">', '<a href="javascript:;">清空历史记录</a>', "</div>", "</div>"];
            this.$searchBox.append(t.join("")), this.$history = this.$searchBox.find(".q-layer-sitesearch-history"), this.$history.on("click", ".history-clear > a", function () {
                e.clearStorage()
            })
        }, hideLayer: function () {
            this.$searchBox.find(".q-layer").removeClass("show")
        }, showHistory: function () {
            if (!this._history.length)return !1;
            for (var e = [], t = 0; t < this._history.length && (e.push('<li data-type="history" data-wd="' + this._history[t].key + '"><a href="' + this._history[t].url + '">' + this._history[t].key + "</a></li>"), !(t >= 8)); t++);
            this.$history.find("ul").html(e.join("")), this.$history.addClass("show"), this.hideAutoComplete()
        }, hideHistory: function () {
            this.$history.removeClass("show")
        }, showAutoComplete: function () {
            this.$autocomplete.addClass("show")
        }, hideAutoComplete: function () {
            this.$autocomplete.removeClass("show")
        }, createAutoComplete: function () {
            var e = ['<div class="q-layer q-layer-sitesearch-autocomplete">', "<ul>", "</ul>", "</div>"];
            this.$searchBox.append(e.join("")), this.$autocomplete = this.$searchBox.find(".q-layer-sitesearch-autocomplete")
        }, getStorage: function () {
            if (window.localStorage && window.localStorage.sitesearch_history) {
                var e = window.localStorage.sitesearch_history;
                this._history = JSON.parse(e)
            }
        }, setStorage: function (e, t) {
            if (!window.localStorage)return !1;
            for (var i = -1, s = 0; s < this._history.length; s++)if (this._history[s].key == e) {
                i = s;
                break
            }
            i != -1 && this._history.splice(s, 1), this._history.unshift({
                key: e,
                url: t
            }), window.localStorage.sitesearch_history = JSON.stringify(this._history)
        }, getSearchWord: function () {
            return n.fliterScript($.trim(this.$input.val()))
        }, setSearchWord: function (e) {
            this.$input.val(e)
        }, clearStorage: function () {
            return !!window.localStorage && (window.localStorage.removeItem("sitesearch_history"), this._history = [], void this.$history.find("ul").empty())
        }, switchUpDown: function (e) {
            this.$history.is(":visible") ? this.switchUpDownInHistory(e) : this.$autocomplete.is(":visible") && this.switchUpDownInAutoComplete(e)
        }, switchUpDownInHistory: function (e) {
            var t = this.$history.find("li"), i = this.$history.find("li.current"), s = null;
            s = "up" == e ? i.length && i.prev().length ? i.prev() : t.last() : i.length && i.next().length ? i.next() : t.first(), this.currentLayer(s)
        }, switchUpDownInAutoComplete: function (e) {
            var t = this.$autocomplete.find("li"), i = this.$autocomplete.find("li.current"), s = null;
            s = "up" == e ? i.length && i.prev().length ? i.prev() : t.last() : i.length && i.next().length ? i.next() : t.first(), this.currentLayer(s)
        }, currentLayer: function (e) {
            switch (e.addClass("current").siblings().removeClass("current"), this.$form.attr("action", this.searchUrl), e.attr("data-type")) {
                case"history":
                    this.setSearchWord(e.attr("data-wd"));
                    break;
                case"item":
                    this.$form.attr("action", e.find("a").attr("href"));
                    break;
                case"word":
                    this.setSearchWord(e.find("a").text())
            }
        }, ajaxSearch: function (e) {
            var t = this, i = {keyword: e, timer: (new Date).getTime()}, s = this.ajaxUrls.sitesearch;
            a.sitesearch({
                url: s, type: "get", data: i, onSuccess: function (i) {
                    i.data.list.length ? t.renderAutoComplete(t.$autocomplete, i.data, e) : t.hideLayer()
                }
            })
        }, searchWord: function (e) {
            this._search[e] ? this.renderAutoComplete(this.$autocomplete, this._search[e]) : this.ajaxSearch(e)
        }, renderAutoComplete: function (e, t, i) {
            var s = [];
            if ("string" == typeof t)s = t; else {
                for (var r = 0; r < t.list.length; r++) {
                    var a = t.list[r];
                    "item" == a.type_name ? (s.push('<li data-type="item">'), s.push('<a href="' + a.url + '">'), s.push("<dl>"), s.push("<dt>"), s.push('<img src="' + a.src + '" width="30" height="30" />'), s.push("</dt>"), s.push("<dd>"), s.push("<p>"), s.push('<span class="cn">' + a.cn_name + "</span>"), s.push('<span class="en">' + a.en_name + "</span>"), s.push("</p>"), s.push("<p>"), s.push('<span class="poi">' + a.belong_name + "</span>"), s.push("</p>"), s.push("</dd>"), s.push("</dl>"), s.push("</a>"), s.push("</li>")) : s.push('<li data-type="word"><a href="' + a.url + '">' + a.word + "</a></li>")
                }
                s = s.join("")
            }
            s && (e.find("ul").html(s), this._search[i] = s), this.hideHistory(), this.showAutoComplete()
        }, replaceKeyword: function (e, t) {
            return e.replace(t, "<em>" + t + "</em>")
        }
    }, new s({}), r.prototype = {
        href: null,
        refer: null,
        source: null,
        isnew: null,
        isBigBanner: !1,
        init: function () {
            if (this.setSource(), window.QYER && window.QYER.uid > 0)return !1;
            var e, t;
            return e = "m|login|passport", t = new RegExp("^http://(" + e + ").(qyer|go2eu).com", "i"), !t.test(this.href) && (this.getHtml(), void this.setIsnew())
        },
        getHtml: function () {
            var e = this;
            $.getJSON("/qcross/home/ajax?action=banner", function (t) {
                0 === t.error_code && ($("body").append(e.renderHtml(t.data)), e.bindEvent(), setTimeout(function () {
                    window.qyerTrack.doTrack("bl-" + t.data.trackid + "-show")
                }, 1e3), banner.beforeloginshow(), e = null)
            })
        },
        renderHtml: function (e) {
            var t = ['<style type="text/css">', "/* 底部浮动层 */", ".qyer_layer_fix { color:#fff; position:fixed; left:0; bottom:0; height:70px; width:100%; z-index:900; min-width:980px;display:none;}", "/* 左侧活动图片 */", ".qyer_layer_hot_img { position:absolute; bottom:0; left:0; display:inline-block;}", "/* 右侧关闭图标 */", ".qyer_layer_close { background:url(//static.qyer.com/images/common/layer/qyer_layer_close.png) no-repeat right center; text-indent:-9999px; width:31px; height:29px; position:absolute; right:20px; top:20px; cursor:pointer;}", ".qyer_layer_close:hover { background-position:center center;}", ".qyer_layer_close:active { background-position:left center;}", "/* 浮动层信息 */", ".qyer_layer_main { width:980px; min-width:980px; margin:0 auto; height:70px; position:relative;}", ".qyer_layer_fl { position:absolute; right:505px; bottom:0;}", ".qyer_layer_fr { position:absolute; right:110px; bottom:0; height:70px;}", ".qyer_layer_fr input { float:left; width:100px; height:30px; margin:20px 0 0 10px; border:0; background:url(//static.qyer.com/images/common/layer/qyer_layer_btn_2.png?sfs=efwf) no-repeat; cursor:pointer; text-indent:-9999px;box-shadow:0 0 2px rgba(0,0,0,0.5);}", ".qyer_layer_fr .qyer_layer_btn_weibo { background-position:0 0; box-shadow:0 0 2px rgba(0,0,0,0.5);}", ".qyer_layer_fr .qyer_layer_btn_weibo:hover { background-position:0 -30px;}", ".qyer_layer_fr .qyer_layer_btn_qq { background-position:-100px 0;}", ".qyer_layer_fr .qyer_layer_btn_qq:hover { background-position:-100px -30px;}", ".qyer_layer_fr .qyer_layer_btn_qy { float:left; width:110px; height:30px; margin:20px 0 0 0; background:url(//static.qyer.com/images/common/layer/qyer_layer_btn_2.png?w3fsf=fwfsf) no-repeat -200px 0; cursor:pointer; text-indent:-9999px; box-shadow:0 0 2px rgba(0,0,0,0.5);} ", ".qyer_layer_fr .qyer_layer_btn_qy:hover { background-position:-200px -30px;}", ".qyer_layer_fr span { color:#a6a6a6; font-size:14px; color:#d7d7d7; line-height:70px; width:65px; text-align:center;}", ".qyer_layer_fr a { color:#d7d7d7; font-weight:700; text-decoration:underline;}", ".qyer_layer_fr a:hover { color:#fff;} ", "</style>", '<div class="qyer_layer_fix _jsbeforelogindiv" style=" background:url(//static.qyer.com/images/common/layer/qyer_layer_bg.png);">', '<div data-bn-ipg="bl-' + e.trackid + '-left-1" class="qyer_layer_hot_img">', "<!--设置可显示隐藏 -->", "<!--左侧热门图片 -->", '<a href="' + e.banner_url + '" target="_blank"></a>', "</div>", '<div class="qyer_layer_main">', '<div data-bn-ipg="bl-' + e.trackid + '-left-2" class="qyer_layer_fl">', "<!--左侧文字提示 -->", '<a href="' + e.banner_url + '" target="_blank"><img src="//static.qyer.com/' + e.big_img + '" alt="" /></a>', "</div>", "<!--快速登录入口 -->", '<div class="qyer_layer_fr">', '<input data-bn-ipg="bl-' + e.trackid + '-weibo" type="button" value="微博登录" url="' + e.banner_url + '" class="qyer_layer_btn_weibo _jsweibologin" />', '<input data-bn-ipg="bl-' + e.trackid + '-qq" type="button" value="QQ登录" url="' + e.banner_url + '" class="qyer_layer_btn_qq _jsqqlogin" />', '<span class="fontYaHei fl"><a data-bn-ipg="bl-' + e.trackid + '-login" href="javascript:void(0);" url="152" isopen="0" class="_jslogin">登录</a> 或 </span>', '<a data-bn-ipg="bl-' + e.trackid + '-dr" href="javascript:void(0);" url="152" isopen="0" class="_jslogin_reg qyer_layer_btn_qy">注册</a>', "</div>", "</div>", '<div data-bn-ipg="bl-' + e.trackid + '-close" class="qyer_layer_close">关闭</div><!--设置可显示隐藏 --></div>'].join("");
            return t
        },
        bindEvent: function () {
            var e = this;
            $(document).on("click", "._jslogin", function (e) {
                window.location.href = $("#js_qyer_header_userStatus a[data-bn-ipg=index-head-un-login]").attr("href")
            }).on("click", "._jslogin_reg", function (t) {
                e.isBigBanner ? window.location.href = $("#js_qyer_header_userStatus a[data-bn-ipg=index-head-un-login]").attr("href") : window.location.href = $("#js_qyer_header_userStatus a[data-bn-ipg=index-head-un-register]").attr("href")
            }).on("click", "._jsweibologin", function () {
                var e = "https://passport.qyer.com/oauth?using=weibo&ref=" + (e || window.location.href);
                window.location = e, e = null
            }).on("click", "._jstao_li", function (e) {
                e.preventDefault();
                var t = "https://passport.qyer.com/oauth?using=taobao&ref=" + (t || window.location.href);
                window.location = t, t = null
            }).on("click", "._jsqqlogin", function () {
                var e = "https://passport.qyer.com/oauth?using=qq&ref=" + (e || window.location.href);
                window.location = e, e = null
            }).on("click", ".qyer_layer_close", function (t) {
                $("._jsbeforelogindiv").fadeOut(1e3, function () {
                    $(this).remove(), e = null
                })
            })
        },
        setCookie: function (e, t, i) {
            var s = 365, r = new Date;
            arguments[2] || (i = 1), 1 == i ? (r.setTime(r.getTime() + 24 * s * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + "; path=/;domain=.qyer.com;expires=" + r.toGMTString()) : document.cookie = e + "=" + escape(t) + "; path=/;domain=.qyer.com", s = r = null
        },
        getCookie: function (e) {
            var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            return null != t ? unescape(t[2]) : null
        },
        setSource: function () {
            if (this.getSource(), !this.source) {
                var e = ".+", t = new RegExp("^http://(" + e + ").(qyer|go2eu).com", "i");
                this.refer && !t.test(this.refer) && this.setCookie("source_url", this.refer), e = t = null
            }
        },
        getSource: function () {
            return this.source = this.getCookie("source_url"), this.source
        },
        setIsnew: function () {
            this.isnew || this.setCookie("isnew", (new Date).getTime())
        },
        beforeloginshow: function () {
            setTimeout(function () {
                $("._jsbeforelogindiv").fadeIn(500)
            }, 100)
        },
        beforeloginup: function () {
            this.isBigBanner = !0, this.beforeloginshow()
        }
    }, setTimeout(function () {
        window.QYER.uid || window.banner || (window.banner = new r)
    }, 8e3)
});