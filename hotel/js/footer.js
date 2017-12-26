function pickerDateRange(t, e) {
    var a = {
        aToday: "aToday",
        aYesterday: "aYesterday",
        aRecent7Days: "aRecent7Days",
        aRecent14Days: "aRecent14Days",
        aRecent30Days: "aRecent30Days",
        aRecent90Days: "aRecent90Days",
        startDate: "",
        endDate: "",
        startCompareDate: "",
        endCompareDate: "",
        minValidDate: "315507600",
        maxValidDate: "",
        success: function (t) {
            return !0
        },
        startDateId: "startDate",
        startCompareDateId: "startCompareDate",
        endDateId: "endDate",
        endCompareDateId: "endCompareDate",
        target: "",
        needCompare: !1,
        suffix: "",
        inputTrigger: "input_trigger",
        compareTrigger: "compare_trigger",
        compareCheckboxId: "needCompare",
        calendars: 2,
        dayRangeMax: 0,
        monthRangeMax: 12,
        dateTable: "dateRangeDateTable",
        selectCss: "dateRangeSelected",
        compareCss: "dateRangeCompare",
        coincideCss: "dateRangeCoincide",
        firstCss: "first",
        lastCss: "last",
        clickCss: "today",
        disableGray: "dateRangeGray",
        isToday: "dateRangeToday",
        joinLineId: "joinLine",
        isSingleDay: !1,
        defaultText: " 至 ",
        singleCompare: !1,
        stopToday: !1,
        startToday: !0,
        isTodayValid: !0,
        weekendDis: !1,
        disCertainDay: [],
        disCertainDate: [],
        shortOpr: !1,
        noCalendar: !1,
        theme: "gri",
        magicSelect: !1,
        autoCommit: !1,
        autoSubmit: !1,
        replaceBtn: "btn_compare"
    }, n = this;
    this.inputId = t, this.inputCompareId = t + "Compare", this.compareInputDiv = "div_compare_" + t, this.mOpts = $.extend({}, a, e), this.mOpts.calendars = Math.min(this.mOpts.calendars, 3), this.mOpts.compareCss = "ta" == this.mOpts.theme ? this.mOpts.selectCss : this.mOpts.compareCss, this.periodObj = {}, this.periodObj[n.mOpts.aToday] = 0, this.periodObj[n.mOpts.aYesterday] = 1, this.periodObj[n.mOpts.aRecent7Days] = 6, this.periodObj[n.mOpts.aRecent14Days] = 13, this.periodObj[n.mOpts.aRecent30Days] = 29, this.periodObj[n.mOpts.aRecent90Days] = 89, this.startDefDate = "";
    var i = "" == this.mOpts.suffix ? (new Date).getTime() : this.mOpts.suffix;
    this.calendarId = "calendar_" + i, this.dateListId = "dateRangePicker_" + i, this.dateRangeCompareDiv = "dateRangeCompareDiv_" + i, this.dateRangeDiv = "dateRangeDiv_" + i, this.compareCheckBoxDiv = "dateRangeCompareCheckBoxDiv_" + i, this.submitBtn = "submit_" + i, this.closeBtn = "closeBtn_" + i, this.preMonth = "dateRangePreMonth_" + i, this.nextMonth = "dateRangeNextMonth_" + i, this.startDateId = this.mOpts.startDateId + "_" + i, this.endDateId = this.mOpts.endDateId + "_" + i, this.compareCheckboxId = this.mOpts.compareCheckboxId + "_" + i, this.startCompareDateId = this.mOpts.startCompareDateId + "_" + i, this.endCompareDateId = this.mOpts.endCompareDateId + "_" + i;
    var r = {
        gri: ['<div id="' + this.calendarId + '" class="gri_dateRangeCalendar">', '<table class="gri_dateRangePicker"><tr id="' + this.dateListId + '"></tr></table>', '<div class="gri_dateRangeOptions" ' + (this.mOpts.autoSubmit ? ' style="display:none" ' : "") + ">", '<div class="gri_dateRangeInput" id="' + this.dateRangeDiv + '" >', '<input type="text" class="gri_dateRangeInput" name="' + this.startDateId + '" id="' + this.startDateId + '" value="' + this.mOpts.startDate + '" readonly />', '<span id="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="gri_dateRangeInput" name="' + this.endDateId + '" id="' + this.endDateId + '" value="' + this.mOpts.endDate + '" readonly /><br />', "</div>", '<div class="gri_dateRangeInput" id="' + this.dateRangeCompareDiv + '">', '<input type="text" class="gri_dateRangeInput" name="' + this.startCompareDateId + '" id="' + this.startCompareDateId + '" value="' + this.mOpts.startCompareDate + '" readonly />', '<span class="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="gri_dateRangeInput" name="' + this.endCompareDateId + '" id="' + this.endCompareDateId + '" value="' + this.mOpts.endCompareDate + '" readonly />', "</div>", "<div>", '<input type="button" name="' + this.submitBtn + '" id="' + this.submitBtn + '" value="确定" />', '&nbsp;<a id="' + this.closeBtn + '" href="javascript:;">关闭</a>', "</div>", "</div>", "</div>"],
        ta: ['<div id="' + this.calendarId + '" class="ta_calendar ta_calendar2 cf">', '<div class="ta_calendar_cont cf" id="' + this.dateListId + '">', "</div>", '<div class="ta_calendar_footer cf" ' + (this.mOpts.autoSubmit ? ' style="display:none" ' : "") + ">", '<div class="frm_msg">', '<div id="' + this.dateRangeDiv + '">', '<input type="text" class="ta_ipt_text_s" name="' + this.startDateId + '" id="' + this.startDateId + '" value="' + this.mOpts.startDate + '" readonly />', '<span class="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="ta_ipt_text_s" name="' + this.endDateId + '" id="' + this.endDateId + '" value="' + this.mOpts.endDate + '" readonly /><br />', "</div>", '<div id="' + this.dateRangeCompareDiv + '">', '<input type="text" class="ta_ipt_text_s" name="' + this.startCompareDateId + '" id="' + this.startCompareDateId + '" value="' + this.mOpts.startCompareDate + '" readonly />', '<span class="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="ta_ipt_text_s" name="' + this.endCompareDateId + '" id="' + this.endCompareDateId + '" value="' + this.mOpts.endCompareDate + '" readonly />', "</div>", "</div>", '<div class="frm_btn">', '<input class="ta_btn ta_btn_primary" type="button" name="' + this.submitBtn + '" id="' + this.submitBtn + '" value="确定" />', '<input class="ta_btn" type="button" id="' + this.closeBtn + '" value="取消"/>', "</div>", "</div>", "</div>"]
    }, s = {
        gri: ['<label class="gri_contrast" for ="' + this.compareCheckboxId + '">', '<input type="checkbox" class="gri_pc" name="' + this.compareCheckboxId + '" id="' + this.compareCheckboxId + '" value="1"/>对比', "</label>", '<input type="text" name="' + this.inputCompareId + '" id="' + this.inputCompareId + '" value="" class="gri_date"/>'],
        ta: ['<label class="contrast" for ="' + this.compareCheckboxId + '">', '<input type="checkbox" class="pc" name="' + this.compareCheckboxId + '" id="' + this.compareCheckboxId + '" value="1"/>对比', "</label>", '<div class="ta_date" id="' + this.compareInputDiv + '">', '\t<span name="dateCompare" id="' + this.inputCompareId + '" class="date_title"></span>', '\t<a class="opt_sel" id="' + this.mOpts.compareTrigger + '" href="#">', '\t\t<i class="i_orderd"></i>', "\t</a>", "</div>"]
    };
    "ta" == this.mOpts.theme ? $(s[this.mOpts.theme].join("")).insertAfter($("#div_" + this.inputId)) : $(s[this.mOpts.theme].join("")).insertAfter($("#" + this.inputId)), this.mOpts.noCalendar && ($("#" + this.inputId).css("display", "none"), $("#" + this.compareCheckboxId).parent().css("display", "none")), $(0 < $("#appendParent").length ? "#appendParent" : document.body).append(r[this.mOpts.theme].join("")), $("#" + this.calendarId).css("z-index", 9999), 1 > $("#" + this.mOpts.startDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.startDateId + '" name="' + this.mOpts.startDateId + '" value="' + this.mOpts.startDate + '" />') : $("#" + this.mOpts.startDateId).val(this.mOpts.startDate), 1 > $("#" + this.mOpts.endDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.endDateId + '" name="' + this.mOpts.endDateId + '" value="' + this.mOpts.endDate + '" />') : $("#" + this.mOpts.endDateId).val(this.mOpts.endDate), 1 > $("#" + this.mOpts.compareCheckboxId).length && $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="checkbox" id="' + this.mOpts.compareCheckboxId + '" name="' + this.mOpts.compareCheckboxId + '" value="0" style="display:none;" />'), 0 == this.mOpts.needCompare ? ($("#" + this.compareInputDiv).css("display", "none"), $("#" + this.compareCheckBoxDiv).css("display", "none"), $("#" + this.dateRangeCompareDiv).css("display", "none"), $("#" + this.compareCheckboxId).attr("disabled", !0), $("#" + this.startCompareDateId).attr("disabled", !0), $("#" + this.endCompareDateId).attr("disabled", !0), $("#" + this.compareCheckboxId).parent().css("display", "none"), $("#" + this.mOpts.replaceBtn).length > 0 && $("#" + this.mOpts.replaceBtn).hide()) : (1 > $("#" + this.mOpts.startCompareDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.startCompareDateId + '" name="' + this.mOpts.startCompareDateId + '" value="' + this.mOpts.startCompareDate + '" />') : $("#" + this.mOpts.startCompareDateId).val(this.mOpts.startCompareDate), 1 > $("#" + this.mOpts.endCompareDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.endCompareDateId + '" name="' + this.mOpts.endCompareDateId + '" value="' + this.mOpts.endCompareDate + '" />') : $("#" + this.mOpts.endCompareDateId).val(this.mOpts.endCompareDate), "" == this.mOpts.startCompareDate || "" == this.mOpts.endCompareDate ? ($("#" + this.compareCheckboxId).attr("checked", !1), $("#" + this.mOpts.compareCheckboxId).attr("checked", !1)) : ($("#" + this.compareCheckboxId).attr("checked", !0), $("#" + this.mOpts.compareCheckboxId).attr("checked", !0))), this.dateInput = this.startDateId, this.changeInput(this.dateInput), $("#" + this.startDateId).bind("click", function () {
        return n.endCompareDateId == n.dateInput && $("#" + n.startCompareDateId).val(n.startDefDate), n.startDefDate = "", n.removeCSS(1), n.changeInput(n.startDateId), !1
    }), $("#" + this.calendarId).bind("click", function (t) {
        t.stopPropagation()
    }), $("#" + this.startCompareDateId).bind("click", function () {
        return n.endDateId == n.dateInput && $("#" + n.startDateId).val(n.startDefDate), n.startDefDate = "", n.removeCSS(0), n.changeInput(n.startCompareDateId), !1
    }), $("#" + this.submitBtn).bind("click", function () {
        return n.close(1), n.mOpts.success({
            startDate: $("#" + n.mOpts.startDateId).val(),
            endDate: $("#" + n.mOpts.endDateId).val(),
            needCompare: $("#" + n.mOpts.compareCheckboxId).val(),
            startCompareDate: $("#" + n.mOpts.startCompareDateId).val(),
            endCompareDate: $("#" + n.mOpts.endCompareDateId).val()
        }), !1
    }), $("#" + this.closeBtn).bind("click", function () {
        return n.close(), !1
    }), $("#" + this.inputId).bind("click", function () {
        return n.init(), n.show(!1, n), !1
    }), $("#" + this.mOpts.inputTrigger).bind("click", function () {
        return n.init(), n.show(!1, n), !1
    }), $("#" + this.mOpts.compareTrigger).bind("click", function () {
        return n.init(!0), n.show(!0, n), !1
    }), $("#" + this.inputCompareId).bind("click", function () {
        return n.init(!0), n.show(!0, n), !1
    }), this.mOpts.singleCompare && ("ta" === this.mOpts.theme ? ($("#" + n.startDateId).val(n.mOpts.startDate), $("#" + n.endDateId).val(n.mOpts.startDate), $("#" + n.startCompareDateId).val(n.mOpts.startCompareDate), $("#" + n.endCompareDateId).val(n.mOpts.startCompareDate)) : ($("#" + n.startDateId).val(n.mOpts.startDate), $("#" + n.endDateId).val(n.mOpts.startDate), $("#" + n.startCompareDateId).val(n.mOpts.startCompareDate), $("#" + n.endCompareDateId).val(n.mOpts.startCompareDate), $("#" + this.compareCheckboxId).attr("checked", !0), $("#" + this.mOpts.compareCheckboxId).attr("checked", !0))), $("#" + this.dateRangeCompareDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none"), $("#" + this.compareInputDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none"), $("#" + this.compareCheckboxId).bind("click", function () {
        $("#" + n.inputCompareId).css("display", this.checked ? "" : "none"), $("#" + n.dateRangeCompareDiv).css("display", this.checked ? "" : "none"), $("#" + n.compareInputDiv).css("display", this.checked ? "" : "none"), $("#" + n.startCompareDateId).css("disabled", !this.checked), $("#" + n.endCompareDateId).css("disabled", !this.checked), $("#" + n.mOpts.compareCheckboxId).attr("checked", $("#" + n.compareCheckboxId).attr("checked")), $("#" + n.mOpts.compareCheckboxId).val($("#" + n.compareCheckboxId).attr("checked") ? 1 : 0), $("#" + n.compareCheckboxId).attr("checked") ? (sDate = n.str2date($("#" + n.startDateId).val()), sTime = sDate.getTime(), eDate = n.str2date($("#" + n.endDateId).val()), eTime = eDate.getTime(), scDate = $("#" + n.startCompareDateId).val(), ecDate = $("#" + n.endCompareDateId).val(), "" != scDate && "" != ecDate || (ecDate = n.str2date(n.date2ymd(sDate).join("-")), ecDate.setDate(ecDate.getDate() - 1), scDate = n.str2date(n.date2ymd(sDate).join("-")), scDate.setDate(scDate.getDate() - (eTime - sTime) / 864e5 - 1), ecDate.getTime() < 1e3 * n.mOpts.minValidDate && (scDate = sDate, ecDate = eDate), ecDate.getTime() >= 1e3 * n.mOpts.minValidDate && scDate.getTime() < 1e3 * n.mOpts.minValidDate && (scDate.setTime(1e3 * n.mOpts.minValidDate), scDate = n.str2date(n.date2ymd(scDate).join("-")), ecDate.setDate(scDate.getDate() + (eTime - sTime) / 864e5 - 1)), $("#" + n.startCompareDateId).val(n.formatDate(n.date2ymd(scDate).join("-"))), $("#" + n.endCompareDateId).val(n.formatDate(n.date2ymd(ecDate).join("-")))), n.addCSS(1), n.changeInput(n.startCompareDateId)) : (n.removeCSS(1), n.changeInput(n.startDateId)), n.close(1), n.mOpts.success({
            startDate: $("#" + n.mOpts.startDateId).val(),
            endDate: $("#" + n.mOpts.endDateId).val(),
            needCompare: $("#" + n.mOpts.compareCheckboxId).val(),
            startCompareDate: $("#" + n.mOpts.startCompareDateId).val(),
            endCompareDate: $("#" + n.mOpts.endCompareDateId).val()
        })
    }), this.init(), this.close(1), this.mOpts.replaceBtn && $("#" + this.mOpts.replaceBtn).length > 0 && ($("#" + n.compareCheckboxId).hide(), $(".contrast").hide(), $("#" + this.mOpts.replaceBtn).bind("click", function () {
        var t = this;
        $("#" + n.compareCheckboxId).attr("checked") ? $("#" + n.compareCheckboxId).removeAttr("checked") : $("#" + n.compareCheckboxId).attr("checked", "checked"), $("#" + n.compareCheckboxId).click(), $("#" + n.compareCheckboxId).attr("checked") ? function () {
            $("#" + n.compareCheckboxId).removeAttr("checked"), $(".contrast").hide(), $(t).text("按时间对比")
        }() : function () {
            $("#" + n.compareCheckboxId).attr("checked", "checked"), $(".contrast").show(), $(t).text("取消对比")
        }()
    })), this.mOpts.autoCommit && this.mOpts.success({
        startDate: $("#" + n.mOpts.startDateId).val(),
        endDate: $("#" + n.mOpts.endDateId).val(),
        needCompare: $("#" + n.mOpts.compareCheckboxId).val(),
        startCompareDate: $("#" + n.mOpts.startCompareDateId).val(),
        endCompareDate: $("#" + n.mOpts.endCompareDateId).val()
    }), $(document).bind("click", function () {
        n.close()
    })
}
function setDatePoint(t, e) {
    $(".daterangepicker").find('input[name="daterangepicker_start"]').attr("data-bn-ipg", t), $(".daterangepicker").find('input[name="daterangepicker_end"]').attr("data-bn-ipg", e)
}
function lazyload() {
    $("img.lazyload").lazyload({
        effect: "fadeIn",
        threshold: 200,
        placeholder: "//common3.qyerstatic.com/hotel/desktop/hotel_home/img/hotel_img_hold.png"
    })
}
function switchTab() {
    $(".search_tab").click(function () {
        if (!$(this).hasClass("active")) {
            $(".search_tab").removeClass("active"), $(this).addClass("active"), $("#hotelKey").val("");
            var t = $(".home_bg");
            if ("酒店" == $(this).html() && 0 != t.css("left")) {
                $(".home_bg").stop().animate({left: "0"}, 1e3), $(".home_banner__search").removeClass("bnb").addClass("hotel"), $("#hotelKey").attr("data-bn-ipg", "Hotel-home-destination"), $(".song_wrapper").removeClass("bnb").addClass("hotel");
                var e = $("#js_searchBtn").val().toString().replace("民宿", "酒店");
                $("#js_searchBtn").val(e).attr("data-bn-ipg", "Hotel-home-search"), setDatePoint("Hotel-home-checkin", "Hotel-home-checkout"), $("#date1").attr("data-bn-ipg", "Hotel-home-checkin"), $(".daterangepicker .input-mini").removeClass("bnb").addClass("hotel"), $(".quick_search.hotel").show(), $(".quick_search.bnb").hide()
            }
            if ("民宿" == $(this).html() && "-200%" != t.css("left")) {
                $(".home_bg").stop().animate({left: "-200%"}, 1e3), $(".home_banner__search").removeClass("hotel").addClass("bnb"), $("#hotelKey").attr("data-bn-ipg", "Hotel-home-bnbdestination"), $(".song_wrapper").removeClass("hotel").addClass("bnb");
                var e = $("#js_searchBtn").val().toString().replace("酒店", "民宿");
                $("#js_searchBtn").val(e).attr("data-bn-ipg", "Hotel-home-bnbsearch"), setDatePoint("Hotel-home-bnbcheckin", "Hotel-home-bnbcheckout"), $("#date1").attr("data-bn-ipg", "Hotel-home-bnbcheckin"), $(".daterangepicker .input-mini").removeClass("hotel").addClass("bnb"), $(".quick_search.bnb").show(), $(".quick_search.hotel").hide()
            }
        }
    }), $(".city_tab_box ul li").click(function () {
        if (!$(this).hasClass("active")) {
            $(".city_tab_box ul li").removeClass("active"), $(this).addClass("active");
            var t = $(this).html();
            getHotelAndBnb($(this).attr("data-id")), $(".more_hotel span").html("查看更多" + t + "住宿")
        }
    })
}
function serveTip() {
    var t = $(".serve_tip"), e = $(".serve_introduce");
    t.hover(function () {
        e.show()
    }, function (t) {
        t.toElement != e[0] && e.hide()
    }), e.hover(function () {
    }, function (a) {
        a.toElement != t[0] && e.hide()
    })
}
function hotelCardHover() {
    $(".hotel_img_wrapper").hover(function () {
        $(this).find(".card_overlay").fadeIn(300)
    }, function () {
        $(this).find(".card_overlay").fadeOut(100)
    })
}
function clearHotelkey() {
    $("#clearHotelkey").click(function () {
        $("#hotelKey").val(""), isSearch = 0
    })
}
function doSearchFun() {
    var t = {
        _timer: null, _sleep: 500, init: function () {
            this._bindEvnet()
        }, _bindEvnet: function () {
            $("#hotelKey").keyup(function () {
                $.trim($(this).val()) ? $("#clearHotelkey").show() : $("#clearHotelkey").hide(), $(".js_hot_poi_menu").hide(0), t.search(this.value)
            }).click(function () {
                var t, e = $(".home_banner__search");
                e.hasClass("hotel") && (t = $("#js_hot_poi_menu_hotel")), e.hasClass("bnb") && (t = $("#js_hot_poi_menu_bnb")), t.fadeIn(300, function () {
                    $(document).one("click", function (t) {
                        $(t.target).hasClass("search__city") || $(".js_hot_poi_menu").hide(0)
                    })
                })
            }).focus(function () {
                $.trim($(this).val()) && $("#clearHotelkey").show(), $(".search__city").addClass("focus");
                var t, e = $(".home_banner__search");
                e.hasClass("hotel") && (t = $("#js_hot_poi_menu_hotel")), e.hasClass("bnb") && (t = $("#js_hot_poi_menu_bnb")), t.fadeIn(300, function () {
                    $(document).one("click", function (t) {
                        $(t.target).hasClass("search__city") || $(".js_hot_poi_menu").hide(0)
                    })
                })
            }).blur(function () {
                $(".search__city").removeClass("focus"), $(document).one("click", function (t) {
                    $("#clearHotelkey").hide(), $(t.target).hasClass("search__city") || $(".js_hot_poi_menu").hide(0)
                })
            }), $(".js_hot_poi_menu a ").click(function () {
                $("#hotelKey").val(this.innerHTML), isSearch = 1, $(".js_hot_poi_menu").hide(0)
            }), $(".js_poi_menu").delegate("dd", "click", function () {
                $("#hotelKey").val($(this).find(".poi_name").html()), isSearch = 1, $(".js_poi_menu").fadeOut(300)
            }), $("#date1").click(function () {
                $(".js_hot_poi_menu").hide(0)
            })
        }, search: function () {
            window.clearTimeout(this._timer), this._timer = window.setTimeout(function () {
                t.doSearch()
            }, t._sleep)
        }, doSearch: function () {
            window.clearTimeout(this._timer), this._timer = null;
            var t = $.trim($("#hotelKey").val()), e = $(".home_banner__search");
            $(".js_poi_menu").html("");
            var a = 1;
            a = e.hasClass("hotel") ? 1 : 2, t ? (isSearch = 0, $.ajax({
                type: "get",
                dataType: "json",
                url: "/api/city/search",
                data: "keyword=" + encodeURIComponent(t) + "&type=" + a,
                success: function (t) {
                    if (0 === t.error_code) {
                        var e = $(".js_poi_menu");
                        t.data && t.data.length && (isSearch = 2, Render.render_poiMenu(t.data), e.fadeIn(300), $(document).one("click", function (t) {
                            if (!$(t.target).hasClass("clear_hotelkey") && !$(t.target).hasClass("search__city") && !$(t.target).parents("js_poi_menu")) {
                                var a = $(".js_poi_menu"), n = a.find(".poi_item:first").find(".poi_name").html();
                                $("#hotelKey").val(n)
                            }
                            e.fadeOut(300)
                        }))
                    }
                }
            })) : $(".js_poi_menu").fadeOut(300)
        }
    };
    t.init()
}
function formatDate(t) {
    var e = t.getFullYear();
    return t.getMonth() + 1 + "/" + t.getDate() + "/" + e
}
function checkDate() {
    $("#date1").daterangepicker({
        autoApply: !0,
        startDate: formatDate(new Date),
        endDate: "",
        minDate: formatDate(new Date)
    }, function (t, e, a) {
        $("#startDate").html(""), $("#endDate").html(""), $("#total_days").html("");
        var n = t ? t.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return e + "年" + a + "月" + n + "日"
        }) : "入住日期", i = e ? e.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return e + "年" + a + "月" + n + "日"
        }) : "退房日期", r = t ? t.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return a + "月" + n + "日"
        }) : "", s = e ? e.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return a + "月" + n + "日"
        }) : "";
        if ($("#startDate").html(n), $("#endDate").html(i), t && e) {
            var o = new Date(Date.parse(t.format("YYYY-MM-DD").replace(/-/g, "/"))).getTime(), l = new Date(Date.parse(e.format("YYYY-MM-DD").replace(/-/g, "/"))).getTime(), c = (l - o) / 864e5;
            $("#total_days").html("共" + c + "晚")
        }
        booking_start_yearMonth = t ? t.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return e + "-" + a
        }) : "", booking_start_day = t ? t.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return n
        }) : "", booking_end_yearMonth = e ? e.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return e + "-" + a
        }) : "", booking_end_day = e ? e.format("YYYY-MM-DD").replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
            return n
        }) : "", airbnb_fromDate = t ? t.format("YYYY-MM-DD") : "", airbnb_toDate = e ? e.format("YYYY-MM-DD") : "", startD = r, endD = s, airbnb_toDate && airbnb_toDate && updatePrice(airbnb_fromDate, airbnb_toDate)
    }).click(function () {
        var top = $("#date1").position().top;
        $(".daterangepicker").css("margin-top", eval(top - 170) + "px")
    })
}
function updatePrice(t, e) {
    var a = ($(".home_banner__search"), []);
    $(".hotel_card").find(".card_overlay").each(function () {
        $(this).hasClass("booking") && a.push($(this).parents(".hotel_card").attr("data-id"))
    }), $.ajax({
        url: "/ajax.php?action=ajaxhotelavail",
        type: "GET",
        dataType: "json",
        data: {return_style: "more", hotel_id: a.join(","), checkin: t, checkout: e},
        success: function (t) {
            var e, a = [], n = "";
            0 === t.error_code && (a = t.data, $(".hotel_card").find(".card_overlay.booking").each(function () {
                e = $(this).parents(".hotel_card"), n = e.attr("data-id"), a[n] && a[n].is_avail && e.find(".update_price").html(a[n].price)
            }))
        }
    })
}
function submitSearchForm() {
    $("#js_searchBtn").on("click", function () {
        $(".ta_calendar").hide();
        var t = $("#hotelKey"), e = $.trim(t.val()).replace(/\,/g, " ");
        if (!e)return t.focus(), !1;
        if (0 === isSearch)$("#hotelKey").val(""); else {
            if (2 === isSearch) {
                var a = $(".js_poi_menu").find(".poi_item:first").find(".poi_name").html();
                $("#hotelKey").val(a), e = a
            }
            var n, i = $(".home_banner__tab .search_tab.active").attr("data-id"), r = $(".home_banner__search"), s = new RegExp("_KEYWORD", "g");
            r.hasClass("hotel") && (n = 1, i = i.replace(s, e).replace("_CHECKIN_MONTHDAY", booking_start_day).replace("_CHECKIN_YEAR_MONTH", booking_start_yearMonth).replace("_CHECKOUT_MONTHDAY", booking_end_day).replace("_CHECKOUT_YEAR_MONTH", booking_end_yearMonth)), r.hasClass("bnb") && (n = 2, i = i.replace(s, e).replace("_CHECKIN", airbnb_fromDate).replace("_CHECKOUT", airbnb_toDate));
            addSearchHistroy({cityname: e, type: n, start: startD, end: endD, url: i}), window.open(i)
        }
    })
}
function addSearchHistroy(t) {
    var e = JSON.parse($.cookie("search_history"));
    e ? (e.length > 4 && (e.length = 4), 4 == e.length && t && e.shift()) : e = [], t && e.push(t), randerSearchHistroy(e), $.cookie("search_history", JSON.stringify(e), {
        expire: 365,
        path: "/"
    })
}
function delSearchHistroy(t) {
    var e = JSON.parse($.cookie("search_history"));
    e.splice(t, 1), randerSearchHistroy(e), $.cookie("search_history", JSON.stringify(e), {expire: 365, path: "/"})
}
function randerSearchHistroy(t) {
    var e = $(".js-search-histroy");
    if (!t.length)return void e.hide();
    e.html(_.template('  <div class="first">搜索记录</div><ul>  <% for(var i in search_history){ %>  <% if(search_history[i].type==1){ %>  <% if(!search_history[i].start&&!search_history[i].end){ %>    <li  class="history_hotel"><a href="<%=search_history[i].url%>" target="_blank" data-bn-ipg="Hotel-home-searchhistory"><%= search_history[i].cityname %> (未选择日期)</a><b></b><i class="hotel_iconfont transform_2" data-num="<%= i %>" data-bn-ipg="Hotel-home-searchhistory-delete">&#58893;</i></li>  <% } %>  <% if(search_history[i].start||search_history[i].end){ %>      <li  class="history_hotel"><a href="<%=search_history[i].url%>" target="_blank" data-bn-ipg="Hotel-home-searchhistory"><%= search_history[i].cityname %> ( <%= search_history[i].start %> - <%= search_history[i].end %> )</a><b></b><i class="hotel_iconfont transform_2" data-num="<%= i %>" data-bn-ipg="Hotel-home-searchhistory-delete">&#58893;</i></li>  <% } %>  <% } %>  <% if(search_history[i].type==2){ %>  <% if(!search_history[i].start&&!search_history[i].end){ %>     <li class="history_bnb"><a href="<%=search_history[i].url%>" target="_blank" data-bn-ipg="Hotel-home-searchhistory"><%= search_history[i].cityname %> (未选择日期)</a><b></b><i class="hotel_iconfont transform_2" data-num="<%= i %>" data-bn-ipg="Hotel-home-searchhistory-delete">&#58893;</i></li>  <% } %>  <% if(search_history[i].start||search_history[i].end){ %>     <li class="history_bnb"><a href="<%=search_history[i].url%>" target="_blank" data-bn-ipg="Hotel-home-searchhistory"><%= search_history[i].cityname %> ( <%= search_history[i].start %> - <%= search_history[i].end %> )</a><b></b><i class="hotel_iconfont transform_2" data-num="<%= i %>" data-bn-ipg="Hotel-home-searchhistory-delete">&#58893;</i></li>  <% } %>  <% } %>  <% } %></ul>  ')({search_history: t})).show()
}
function getHotelAndBnb(t) {
    Render.renderLoading($("#hotel_show_list")), $(".more_hotel").hide();
    var e = $(".city_tab_box li.active").html();
    $.ajax({
        url: "/api/hotel/list", type: "GET", dataType: "json", data: {city_id: t}, success: function (t) {
            0 === t.error_code && (Render.render("hotel_show_list", t.data.list), hotelCardHover(), $(".more_hotel").show().attr("href", t.data.url), $(".more_hotel span").html("查看更多" + e + "住宿"), updatePrice(airbnb_fromDate, airbnb_toDate), lazyload())
        }, error: function () {
        }
    })
}
function checkMessage() {
    $.ajax({
        url: "/api/freshnews/get/",
        type: "POST",
        dataType: "json",
        data: {
            type: "index",
            city_id: window.__globalData__ && window.__globalData__.city_data ? window.__globalData__.city_data.city_id : 0
        },
        success: function (t) {
            if (0 === t.error_code && 0 !== t.data.length)for (var e = t.data.length, a = 0; a < e; a++)!function () {
                var e = t.data[a];
                setTimeout(function () {
                    require(["web_old_tip2"], function (t) {
                        t.addTip({
                            text: e.text,
                            img: "ACE".indexOf(e.type) > -1 ? "http://common3.qyerstatic.com/hotel/desktop/hotel_home/img/tip2_people.png" : "http://common3.qyerstatic.com/hotel/desktop/hotel_home/img/tip2_order.svg",
                            showTime: 1e4
                        })
                    })
                }, 3e3 * (a + 1))
            }()
        }
    })
}
(function () {
    function t(t, e) {
        if (t !== e) {
            var a = null === t, n = t === b, i = t === t, r = null === e, s = e === b, o = e === e;
            if (t > e && !r || !i || a && !s && o || n && o)return 1;
            if (t < e && !a || !o || r && !n && i || s && i)return -1
        }
        return 0
    }

    function e(t, e, a) {
        for (var n = t.length, i = a ? n : -1; a ? i-- : ++i < n;)if (e(t[i], i, t))return i;
        return -1
    }

    function a(t, e, a) {
        if (e !== e)return p(t, a);
        for (var n = a - 1, i = t.length; ++n < i;)if (t[n] === e)return n;
        return -1
    }

    function n(t) {
        return "function" == typeof t || !1
    }

    function i(t) {
        return null == t ? "" : t + ""
    }

    function r(t, e) {
        for (var a = -1, n = t.length; ++a < n && e.indexOf(t.charAt(a)) > -1;);
        return a
    }

    function s(t, e) {
        for (var a = t.length; a-- && e.indexOf(t.charAt(a)) > -1;);
        return a
    }

    function o(e, a) {
        return t(e.criteria, a.criteria) || e.index - a.index
    }

    function l(e, a, n) {
        for (var i = -1, r = e.criteria, s = a.criteria, o = r.length, l = n.length; ++i < o;) {
            var c = t(r[i], s[i]);
            if (c) {
                if (i >= l)return c;
                var d = n[i];
                return c * ("asc" === d || !0 === d ? 1 : -1)
            }
        }
        return e.index - a.index
    }

    function c(t) {
        return Lt[t]
    }

    function d(t) {
        return Nt[t]
    }

    function h(t, e, a) {
        return e ? t = Wt[t] : a && (t = qt[t]), "\\" + t
    }

    function u(t) {
        return "\\" + qt[t]
    }

    function p(t, e, a) {
        for (var n = t.length, i = e + (a ? 0 : -1); a ? i-- : ++i < n;) {
            var r = t[i];
            if (r !== r)return i
        }
        return -1
    }

    function f(t) {
        return !!t && "object" == typeof t
    }

    function m(t) {
        return t <= 160 && t >= 9 && t <= 13 || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (t <= 8202 || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
    }

    function g(t, e) {
        for (var a = -1, n = t.length, i = -1, r = []; ++a < n;)t[a] === e && (t[a] = H, r[++i] = a);
        return r
    }

    function _(t, e) {
        for (var a, n = -1, i = t.length, r = -1, s = []; ++n < i;) {
            var o = t[n], l = e ? e(o, n, t) : o;
            n && a === l || (a = l, s[++r] = o)
        }
        return s
    }

    function v(t) {
        for (var e = -1, a = t.length; ++e < a && m(t.charCodeAt(e)););
        return e
    }

    function D(t) {
        for (var e = t.length; e-- && m(t.charCodeAt(e)););
        return e
    }

    function y(t) {
        return Ft[t]
    }

    function k(m) {
        function Lt(t) {
            if (f(t) && !Oo(t) && !(t instanceof Ht)) {
                if (t instanceof Ft)return t;
                if (ts.call(t, "__chain__") && ts.call(t, "__wrapped__"))return pn(t)
            }
            return new Ft(t)
        }

        function Nt() {
        }

        function Ft(t, e, a) {
            this.__wrapped__ = t, this.__actions__ = a || [], this.__chain__ = !!e
        }

        function Ht(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = xs, this.__views__ = []
        }

        function Wt() {
            var t = new Ht(this.__wrapped__);
            return t.__actions__ = ae(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ae(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ae(this.__views__), t
        }

        function qt() {
            if (this.__filtered__) {
                var t = new Ht(this);
                t.__dir__ = -1, t.__filtered__ = !0
            } else t = this.clone(), t.__dir__ *= -1;
            return t
        }

        function Ut() {
            var t = this.__wrapped__.value(), e = this.__dir__, a = Oo(t), n = e < 0, i = a ? t.length : 0, r = Ba(0, i, this.__views__), s = r.start, o = r.end, l = o - s, c = n ? o : s - 1, d = this.__iteratees__, h = d.length, u = 0, p = bs(l, this.__takeCount__);
            if (!a || i < E || i == l && p == l)return aa(t, this.__actions__);
            var f = [];
            t:for (; l-- && u < p;) {
                c += e;
                for (var m = -1, g = t[c]; ++m < h;) {
                    var _ = d[m], v = _.iteratee, D = _.type, y = v(g);
                    if (D == N)g = y; else if (!y) {
                        if (D == L)continue t;
                        break t
                    }
                }
                f[u++] = g
            }
            return f
        }

        function Bt() {
            this.__data__ = {}
        }

        function Vt(t) {
            return this.has(t) && delete this.__data__[t]
        }

        function Gt(t) {
            return "__proto__" == t ? b : this.__data__[t]
        }

        function zt(t) {
            return "__proto__" != t && ts.call(this.__data__, t)
        }

        function Kt(t, e) {
            return "__proto__" != t && (this.__data__[t] = e), this
        }

        function Jt(t) {
            var e = t ? t.length : 0;
            for (this.data = {hash: gs(null), set: new ds}; e--;)this.push(t[e])
        }

        function Xt(t, e) {
            var a = t.data;
            return ("string" == typeof e || Pi(e) ? a.set.has(e) : a.hash[e]) ? 0 : -1
        }

        function te(t) {
            var e = this.data;
            "string" == typeof t || Pi(t) ? e.set.add(t) : e.hash[t] = !0
        }

        function ee(t, e) {
            for (var a = -1, n = t.length, i = -1, r = e.length, s = Fr(n + r); ++a < n;)s[a] = t[a];
            for (; ++i < r;)s[a++] = e[i];
            return s
        }

        function ae(t, e) {
            var a = -1, n = t.length;
            for (e || (e = Fr(n)); ++a < n;)e[a] = t[a];
            return e
        }

        function ne(t, e) {
            for (var a = -1, n = t.length; ++a < n && !1 !== e(t[a], a, t););
            return t
        }

        function ie(t, e) {
            for (var a = t.length; a-- && !1 !== e(t[a], a, t););
            return t
        }

        function re(t, e) {
            for (var a = -1, n = t.length; ++a < n;)if (!e(t[a], a, t))return !1;
            return !0
        }

        function se(t, e, a, n) {
            for (var i = -1, r = t.length, s = n, o = s; ++i < r;) {
                var l = t[i], c = +e(l);
                a(c, s) && (s = c, o = l)
            }
            return o
        }

        function oe(t, e) {
            for (var a = -1, n = t.length, i = -1, r = []; ++a < n;) {
                var s = t[a];
                e(s, a, t) && (r[++i] = s)
            }
            return r
        }

        function le(t, e) {
            for (var a = -1, n = t.length, i = Fr(n); ++a < n;)i[a] = e(t[a], a, t);
            return i
        }

        function ce(t, e) {
            for (var a = -1, n = e.length, i = t.length; ++a < n;)t[i + a] = e[a];
            return t
        }

        function de(t, e, a, n) {
            var i = -1, r = t.length;
            for (n && r && (a = t[++i]); ++i < r;)a = e(a, t[i], i, t);
            return a
        }

        function he(t, e, a, n) {
            var i = t.length;
            for (n && i && (a = t[--i]); i--;)a = e(a, t[i], i, t);
            return a
        }

        function ue(t, e) {
            for (var a = -1, n = t.length; ++a < n;)if (e(t[a], a, t))return !0;
            return !1
        }

        function pe(t, e) {
            for (var a = t.length, n = 0; a--;)n += +e(t[a]) || 0;
            return n
        }

        function fe(t, e) {
            return t === b ? e : t
        }

        function me(t, e, a, n) {
            return t !== b && ts.call(n, a) ? t : e
        }

        function ge(t, e, a) {
            for (var n = -1, i = Fo(e), r = i.length; ++n < r;) {
                var s = i[n], o = t[s], l = a(o, e[s], s, t, e);
                (l === l ? l === o : o !== o) && (o !== b || s in t) || (t[s] = l)
            }
            return t
        }

        function _e(t, e) {
            return null == e ? t : De(e, Fo(e), t)
        }

        function ve(t, e) {
            for (var a = -1, n = null == t, i = !n && Qa(t), r = i ? t.length : 0, s = e.length, o = Fr(s); ++a < s;) {
                var l = e[a];
                o[a] = i ? Za(l, r) ? t[l] : b : n ? b : t[l]
            }
            return o
        }

        function De(t, e, a) {
            a || (a = {});
            for (var n = -1, i = e.length; ++n < i;) {
                var r = e[n];
                a[r] = t[r]
            }
            return a
        }

        function ye(t, e, a) {
            var n = typeof t;
            return "function" == n ? e === b ? t : ra(t, e, a) : null == t ? xr : "object" == n ? Ne(t) : e === b ? jr(t) : Fe(t, e)
        }

        function ke(t, e, a, n, i, r, s) {
            var o;
            if (a && (o = i ? a(t, n, i) : a(t)), o !== b)return o;
            if (!Pi(t))return t;
            var l = Oo(t);
            if (l) {
                if (o = Va(t), !e)return ae(t, o)
            } else {
                var c = as.call(t), d = c == G;
                if (c != K && c != W && (!d || i))return Et[c] ? za(t, c, e) : i ? t : {};
                if (o = Ga(d ? {} : t), !e)return _e(o, t)
            }
            r || (r = []), s || (s = []);
            for (var h = r.length; h--;)if (r[h] == t)return s[h];
            return r.push(t), s.push(o), (l ? ne : Ye)(t, function (n, i) {
                o[i] = ke(n, e, a, i, t, r, s)
            }), o
        }

        function be(t, e, a) {
            if ("function" != typeof t)throw new Kr(F);
            return hs(function () {
                t.apply(b, a)
            }, e)
        }

        function we(t, e) {
            var n = t ? t.length : 0, i = [];
            if (!n)return i;
            var r = -1, s = Wa(), o = s === a, l = o && e.length >= E ? fa(e) : null, c = e.length;
            l && (s = Xt, o = !1, e = l);
            t:for (; ++r < n;) {
                var d = t[r];
                if (o && d === d) {
                    for (var h = c; h--;)if (e[h] === d)continue t;
                    i.push(d)
                } else s(e, d, 0) < 0 && i.push(d)
            }
            return i
        }

        function Ce(t, e) {
            var a = !0;
            return Rs(t, function (t, n, i) {
                return a = !!e(t, n, i)
            }), a
        }

        function $e(t, e, a, n) {
            var i = n, r = i;
            return Rs(t, function (t, s, o) {
                var l = +e(t, s, o);
                (a(l, i) || l === n && l === r) && (i = l, r = t)
            }), r
        }

        function Ie(t, e, a, n) {
            var i = t.length;
            for (a = null == a ? 0 : +a || 0, a < 0 && (a = -a > i ? 0 : i + a), n = n === b || n > i ? i : +n || 0, n < 0 && (n += i), i = a > n ? 0 : n >>> 0, a >>>= 0; a < i;)t[a++] = e;
            return t
        }

        function xe(t, e) {
            var a = [];
            return Rs(t, function (t, n, i) {
                e(t, n, i) && a.push(t)
            }), a
        }

        function Me(t, e, a, n) {
            var i;
            return a(t, function (t, a, r) {
                if (e(t, a, r))return i = n ? a : t, !1
            }), i
        }

        function Oe(t, e, a, n) {
            n || (n = []);
            for (var i = -1, r = t.length; ++i < r;) {
                var s = t[i];
                f(s) && Qa(s) && (a || Oo(s) || $i(s)) ? e ? Oe(s, e, a, n) : ce(n, s) : a || (n[n.length] = s)
            }
            return n
        }

        function Se(t, e) {
            return Es(t, e, tr)
        }

        function Ye(t, e) {
            return Es(t, e, Fo)
        }

        function Te(t, e) {
            return Ls(t, e, Fo)
        }

        function je(t, e) {
            for (var a = -1, n = e.length, i = -1, r = []; ++a < n;) {
                var s = e[a];
                ji(t[s]) && (r[++i] = s)
            }
            return r
        }

        function Pe(t, e, a) {
            if (null != t) {
                a !== b && a in hn(t) && (e = [a]);
                for (var n = 0, i = e.length; null != t && n < i;)t = t[e[n++]];
                return n && n == i ? t : b
            }
        }

        function Re(t, e, a, n, i, r) {
            return t === e || (null == t || null == e || !Pi(t) && !f(e) ? t !== t && e !== e : Ae(t, e, Re, a, n, i, r))
        }

        function Ae(t, e, a, n, i, r, s) {
            var o = Oo(t), l = Oo(e), c = q, d = q;
            o || (c = as.call(t), c == W ? c = K : c != K && (o = qi(t))), l || (d = as.call(e), d == W ? d = K : d != K && (l = qi(e)));
            var h = c == K, u = d == K, p = c == d;
            if (p && !o && !h)return La(t, e, c);
            if (!i) {
                var f = h && ts.call(t, "__wrapped__"), m = u && ts.call(e, "__wrapped__");
                if (f || m)return a(f ? t.value() : t, m ? e.value() : e, n, i, r, s)
            }
            if (!p)return !1;
            r || (r = []), s || (s = []);
            for (var g = r.length; g--;)if (r[g] == t)return s[g] == e;
            r.push(t), s.push(e);
            var _ = (o ? Ea : Na)(t, e, a, n, i, r, s);
            return r.pop(), s.pop(), _
        }

        function Ee(t, e, a) {
            var n = e.length, i = n, r = !a;
            if (null == t)return !i;
            for (t = hn(t); n--;) {
                var s = e[n];
                if (r && s[2] ? s[1] !== t[s[0]] : !(s[0]in t))return !1
            }
            for (; ++n < i;) {
                s = e[n];
                var o = s[0], l = t[o], c = s[1];
                if (r && s[2]) {
                    if (l === b && !(o in t))return !1
                } else {
                    var d = a ? a(l, c, o) : b;
                    if (!(d === b ? Re(c, l, a, !0) : d))return !1
                }
            }
            return !0
        }

        function Le(t, e) {
            var a = -1, n = Qa(t) ? Fr(t.length) : [];
            return Rs(t, function (t, i, r) {
                n[++a] = e(t, i, r)
            }), n
        }

        function Ne(t) {
            var e = qa(t);
            if (1 == e.length && e[0][2]) {
                var a = e[0][0], n = e[0][1];
                return function (t) {
                    return null != t && (t[a] === n && (n !== b || a in hn(t)))
                }
            }
            return function (t) {
                return Ee(t, e)
            }
        }

        function Fe(t, e) {
            var a = Oo(t), n = Xa(t) && an(e), i = t + "";
            return t = un(t), function (r) {
                if (null == r)return !1;
                var s = i;
                if (r = hn(r), (a || !n) && !(s in r)) {
                    if (null == (r = 1 == t.length ? r : Pe(r, ze(t, 0, -1))))return !1;
                    s = In(t), r = hn(r)
                }
                return r[s] === e ? e !== b || s in r : Re(e, r[s], b, !0)
            }
        }

        function He(t, e, a, n, i) {
            if (!Pi(t))return t;
            var r = Qa(e) && (Oo(e) || qi(e)), s = r ? b : Fo(e);
            return ne(s || e, function (o, l) {
                if (s && (l = o, o = e[l]), f(o))n || (n = []), i || (i = []), We(t, e, l, He, a, n, i); else {
                    var c = t[l], d = a ? a(c, o, l, t, e) : b, h = d === b;
                    h && (d = o), d === b && (!r || l in t) || !h && (d === d ? d === c : c !== c) || (t[l] = d)
                }
            }), t
        }

        function We(t, e, a, n, i, r, s) {
            for (var o = r.length, l = e[a]; o--;)if (r[o] == l)return void(t[a] = s[o]);
            var c = t[a], d = i ? i(c, l, a, t, e) : b, h = d === b;
            h && (d = l, Qa(l) && (Oo(l) || qi(l)) ? d = Oo(c) ? c : Qa(c) ? ae(c) : [] : Fi(l) || $i(l) ? d = $i(c) ? zi(c) : Fi(c) ? c : {} : h = !1), r.push(l), s.push(d), h ? t[a] = n(d, l, i, r, s) : (d === d ? d !== c : c === c) && (t[a] = d)
        }

        function qe(t) {
            return function (e) {
                return null == e ? b : e[t]
            }
        }

        function Ue(t) {
            var e = t + "";
            return t = un(t), function (a) {
                return Pe(a, t, e)
            }
        }

        function Be(t, e) {
            for (var a = t ? e.length : 0; a--;) {
                var n = e[a];
                if (n != i && Za(n)) {
                    var i = n;
                    us.call(t, n, 1)
                }
            }
            return t
        }

        function Ve(t, e) {
            return t + _s($s() * (e - t + 1))
        }

        function Ge(t, e, a, n, i) {
            return i(t, function (t, i, r) {
                a = n ? (n = !1, t) : e(a, t, i, r)
            }), a
        }

        function ze(t, e, a) {
            var n = -1, i = t.length;
            e = null == e ? 0 : +e || 0, e < 0 && (e = -e > i ? 0 : i + e), a = a === b || a > i ? i : +a || 0, a < 0 && (a += i), i = e > a ? 0 : a - e >>> 0, e >>>= 0;
            for (var r = Fr(i); ++n < i;)r[n] = t[n + e];
            return r
        }

        function Ke(t, e) {
            var a;
            return Rs(t, function (t, n, i) {
                return !(a = e(t, n, i))
            }), !!a
        }

        function Qe(t, e) {
            var a = t.length;
            for (t.sort(e); a--;)t[a] = t[a].value;
            return t
        }

        function Ze(t, e, a) {
            var n = Fa(), i = -1;
            return e = le(e, function (t) {
                return n(t)
            }), Qe(Le(t, function (t) {
                return {
                    criteria: le(e, function (e) {
                        return e(t)
                    }), index: ++i, value: t
                }
            }), function (t, e) {
                return l(t, e, a)
            })
        }

        function Je(t, e) {
            var a = 0;
            return Rs(t, function (t, n, i) {
                a += +e(t, n, i) || 0
            }), a
        }

        function Xe(t, e) {
            var n = -1, i = Wa(), r = t.length, s = i === a, o = s && r >= E, l = o ? fa() : null, c = [];
            l ? (i = Xt, s = !1) : (o = !1, l = e ? [] : c);
            t:for (; ++n < r;) {
                var d = t[n], h = e ? e(d, n, t) : d;
                if (s && d === d) {
                    for (var u = l.length; u--;)if (l[u] === h)continue t;
                    e && l.push(h), c.push(d)
                } else i(l, h, 0) < 0 && ((e || o) && l.push(h), c.push(d))
            }
            return c
        }

        function ta(t, e) {
            for (var a = -1, n = e.length, i = Fr(n); ++a < n;)i[a] = t[e[a]];
            return i
        }

        function ea(t, e, a, n) {
            for (var i = t.length, r = n ? i : -1; (n ? r-- : ++r < i) && e(t[r], r, t););
            return a ? ze(t, n ? 0 : r, n ? r + 1 : i) : ze(t, n ? r + 1 : 0, n ? i : r)
        }

        function aa(t, e) {
            var a = t;
            a instanceof Ht && (a = a.value());
            for (var n = -1, i = e.length; ++n < i;) {
                var r = e[n];
                a = r.func.apply(r.thisArg, ce([a], r.args))
            }
            return a
        }

        function na(t, e, a) {
            var n = 0, i = t ? t.length : n;
            if ("number" == typeof e && e === e && i <= Ss) {
                for (; n < i;) {
                    var r = n + i >>> 1, s = t[r];
                    (a ? s <= e : s < e) && null !== s ? n = r + 1 : i = r
                }
                return i
            }
            return ia(t, e, xr, a)
        }

        function ia(t, e, a, n) {
            e = a(e);
            for (var i = 0, r = t ? t.length : 0, s = e !== e, o = null === e, l = e === b; i < r;) {
                var c = _s((i + r) / 2), d = a(t[c]), h = d !== b, u = d === d;
                if (s)var p = u || n; else p = o ? u && h && (n || null != d) : l ? u && (n || h) : null != d && (n ? d <= e : d < e);
                p ? i = c + 1 : r = c
            }
            return bs(r, Os)
        }

        function ra(t, e, a) {
            if ("function" != typeof t)return xr;
            if (e === b)return t;
            switch (a) {
                case 1:
                    return function (a) {
                        return t.call(e, a)
                    };
                case 3:
                    return function (a, n, i) {
                        return t.call(e, a, n, i)
                    };
                case 4:
                    return function (a, n, i, r) {
                        return t.call(e, a, n, i, r)
                    };
                case 5:
                    return function (a, n, i, r, s) {
                        return t.call(e, a, n, i, r, s)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }

        function sa(t) {
            var e = new rs(t.byteLength);
            return new ps(e).set(new ps(t)), e
        }

        function oa(t, e, a) {
            for (var n = a.length, i = -1, r = ks(t.length - n, 0), s = -1, o = e.length, l = Fr(o + r); ++s < o;)l[s] = e[s];
            for (; ++i < n;)l[a[i]] = t[i];
            for (; r--;)l[s++] = t[i++];
            return l
        }

        function la(t, e, a) {
            for (var n = -1, i = a.length, r = -1, s = ks(t.length - i, 0), o = -1, l = e.length, c = Fr(s + l); ++r < s;)c[r] = t[r];
            for (var d = r; ++o < l;)c[d + o] = e[o];
            for (; ++n < i;)c[d + a[n]] = t[r++];
            return c
        }

        function ca(t, e) {
            return function (a, n, i) {
                var r = e ? e() : {};
                if (n = Fa(n, i, 3), Oo(a))for (var s = -1, o = a.length; ++s < o;) {
                    var l = a[s];
                    t(r, l, n(l, s, a), a)
                } else Rs(a, function (e, a, i) {
                    t(r, e, n(e, a, i), i)
                });
                return r
            }
        }

        function da(t) {
            return _i(function (e, a) {
                var n = -1, i = null == e ? 0 : a.length, r = i > 2 ? a[i - 2] : b, s = i > 2 ? a[2] : b, o = i > 1 ? a[i - 1] : b;
                for ("function" == typeof r ? (r = ra(r, o, 5), i -= 2) : (r = "function" == typeof o ? o : b, i -= r ? 1 : 0), s && Ja(a[0], a[1], s) && (r = i < 3 ? b : r, i = 1); ++n < i;) {
                    var l = a[n];
                    l && t(e, l, r)
                }
                return e
            })
        }

        function ha(t, e) {
            return function (a, n) {
                var i = a ? Hs(a) : 0;
                if (!en(i))return t(a, n);
                for (var r = e ? i : -1, s = hn(a); (e ? r-- : ++r < i) && !1 !== n(s[r], r, s););
                return a
            }
        }

        function ua(t) {
            return function (e, a, n) {
                for (var i = hn(e), r = n(e), s = r.length, o = t ? s : -1; t ? o-- : ++o < s;) {
                    var l = r[o];
                    if (!1 === a(i[l], l, i))break
                }
                return e
            }
        }

        function pa(t, e) {
            function a() {
                return (this && this !== Qt && this instanceof a ? n : t).apply(e, arguments)
            }

            var n = ga(t);
            return a
        }

        function fa(t) {
            return gs && ds ? new Jt(t) : null
        }

        function ma(t) {
            return function (e) {
                for (var a = -1, n = Cr(dr(e)), i = n.length, r = ""; ++a < i;)r = t(r, n[a], a);
                return r
            }
        }

        function ga(t) {
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var a = Ps(t.prototype), n = t.apply(a, e);
                return Pi(n) ? n : a
            }
        }

        function _a(t) {
            function e(a, n, i) {
                i && Ja(a, n, i) && (n = b);
                var r = Aa(a, t, b, b, b, b, b, n);
                return r.placeholder = e.placeholder, r
            }

            return e
        }

        function va(t, e) {
            return _i(function (a) {
                var n = a[0];
                return null == n ? n : (a.push(e), t.apply(b, a))
            })
        }

        function Da(t, e) {
            return function (a, n, i) {
                if (i && Ja(a, n, i) && (n = b), n = Fa(n, i, 3), 1 == n.length) {
                    a = Oo(a) ? a : dn(a);
                    var r = se(a, n, t, e);
                    if (!a.length || r !== e)return r
                }
                return $e(a, n, t, e)
            }
        }

        function ya(t, a) {
            return function (n, i, r) {
                if (i = Fa(i, r, 3), Oo(n)) {
                    var s = e(n, i, a);
                    return s > -1 ? n[s] : b
                }
                return Me(n, i, t)
            }
        }

        function ka(t) {
            return function (a, n, i) {
                return a && a.length ? (n = Fa(n, i, 3), e(a, n, t)) : -1
            }
        }

        function ba(t) {
            return function (e, a, n) {
                return a = Fa(a, n, 3), Me(e, a, t, !0)
            }
        }

        function wa(t) {
            return function () {
                for (var e, a = arguments.length, n = t ? a : -1, i = 0, r = Fr(a); t ? n-- : ++n < a;) {
                    var s = r[i++] = arguments[n];
                    if ("function" != typeof s)throw new Kr(F);
                    !e && Ft.prototype.thru && "wrapper" == Ha(s) && (e = new Ft([], !0))
                }
                for (n = e ? -1 : a; ++n < a;) {
                    s = r[n];
                    var o = Ha(s), l = "wrapper" == o ? Fs(s) : b;
                    e = l && tn(l[0]) && l[1] == (Y | x | O | T) && !l[4].length && 1 == l[9] ? e[Ha(l[0])].apply(e, l[3]) : 1 == s.length && tn(s) ? e[o]() : e.thru(s)
                }
                return function () {
                    var t = arguments, n = t[0];
                    if (e && 1 == t.length && Oo(n) && n.length >= E)return e.plant(n).value();
                    for (var i = 0, s = a ? r[i].apply(this, t) : n; ++i < a;)s = r[i].call(this, s);
                    return s
                }
            }
        }

        function Ca(t, e) {
            return function (a, n, i) {
                return "function" == typeof n && i === b && Oo(a) ? t(a, n) : e(a, ra(n, i, 3))
            }
        }

        function $a(t) {
            return function (e, a, n) {
                return "function" == typeof a && n === b || (a = ra(a, n, 3)), t(e, a, tr)
            }
        }

        function Ia(t) {
            return function (e, a, n) {
                return "function" == typeof a && n === b || (a = ra(a, n, 3)), t(e, a)
            }
        }

        function xa(t) {
            return function (e, a, n) {
                var i = {};
                return a = Fa(a, n, 3), Ye(e, function (e, n, r) {
                    var s = a(e, n, r);
                    n = t ? s : n, e = t ? e : s, i[n] = e
                }), i
            }
        }

        function Ma(t) {
            return function (e, a, n) {
                return e = i(e), (t ? e : "") + Ta(e, a, n) + (t ? "" : e)
            }
        }

        function Oa(t) {
            var e = _i(function (a, n) {
                var i = g(n, e.placeholder);
                return Aa(a, t, b, n, i)
            });
            return e
        }

        function Sa(t, e) {
            return function (a, n, i, r) {
                var s = arguments.length < 3;
                return "function" == typeof n && r === b && Oo(a) ? t(a, n, i, s) : Ge(a, Fa(n, r, 4), i, s, e)
            }
        }

        function Ya(t, e, a, n, i, r, s, o, l, c) {
            function d() {
                for (var D = arguments.length, y = D, k = Fr(D); y--;)k[y] = arguments[y];
                if (n && (k = oa(k, n, i)), r && (k = la(k, r, s)), f || _) {
                    var w = d.placeholder, I = g(k, w);
                    if ((D -= I.length) < c) {
                        var x = o ? ae(o) : b, M = ks(c - D, 0), Y = f ? I : b, T = f ? b : I, j = f ? k : b, P = f ? b : k;
                        e |= f ? O : S, e &= ~(f ? S : O), m || (e &= ~(C | $));
                        var R = [t, e, a, j, Y, P, T, x, l, M], A = Ya.apply(b, R);
                        return tn(t) && Ws(A, R), A.placeholder = w, A
                    }
                }
                var E = u ? a : this, L = p ? E[t] : t;
                return o && (k = ln(k, o)), h && l < k.length && (k.length = l), this && this !== Qt && this instanceof d && (L = v || ga(t)), L.apply(E, k)
            }

            var h = e & Y, u = e & C, p = e & $, f = e & x, m = e & I, _ = e & M, v = p ? b : ga(t);
            return d
        }

        function Ta(t, e, a) {
            var n = t.length;
            if (e = +e, n >= e || !Ds(e))return "";
            var i = e - n;
            return a = null == a ? " " : a + "", gr(a, ms(i / a.length)).slice(0, i)
        }

        function ja(t, e, a, n) {
            function i() {
                for (var e = -1, o = arguments.length, l = -1, c = n.length, d = Fr(c + o); ++l < c;)d[l] = n[l];
                for (; o--;)d[l++] = arguments[++e];
                return (this && this !== Qt && this instanceof i ? s : t).apply(r ? a : this, d)
            }

            var r = e & C, s = ga(t);
            return i
        }

        function Pa(t) {
            var e = Ur[t];
            return function (t, a) {
                return a = a === b ? 0 : +a || 0, a ? (a = ls(10, a), e(t * a) / a) : e(t)
            }
        }

        function Ra(t) {
            return function (e, a, n, i) {
                var r = Fa(n);
                return null == n && r === ye ? na(e, a, t) : ia(e, a, r(n, i, 1), t)
            }
        }

        function Aa(t, e, a, n, i, r, s, o) {
            var l = e & $;
            if (!l && "function" != typeof t)throw new Kr(F);
            var c = n ? n.length : 0;
            if (c || (e &= ~(O | S), n = i = b), c -= i ? i.length : 0, e & S) {
                var d = n, h = i;
                n = i = b
            }
            var u = l ? b : Fs(t), p = [t, e, a, n, i, d, h, r, s, o];
            if (u && (nn(p, u), e = p[1], o = p[9]), p[9] = null == o ? l ? 0 : t.length : ks(o - c, 0) || 0, e == C)var f = pa(p[0], p[2]); else f = e != O && e != (C | O) || p[4].length ? Ya.apply(b, p) : ja.apply(b, p);
            return (u ? Ns : Ws)(f, p)
        }

        function Ea(t, e, a, n, i, r, s) {
            var o = -1, l = t.length, c = e.length;
            if (l != c && !(i && c > l))return !1;
            for (; ++o < l;) {
                var d = t[o], h = e[o], u = n ? n(i ? h : d, i ? d : h, o) : b;
                if (u !== b) {
                    if (u)continue;
                    return !1
                }
                if (i) {
                    if (!ue(e, function (t) {
                            return d === t || a(d, t, n, i, r, s)
                        }))return !1
                } else if (d !== h && !a(d, h, n, i, r, s))return !1
            }
            return !0
        }

        function La(t, e, a) {
            switch (a) {
                case U:
                case B:
                    return +t == +e;
                case V:
                    return t.name == e.name && t.message == e.message;
                case z:
                    return t != +t ? e != +e : t == +e;
                case Q:
                case Z:
                    return t == e + ""
            }
            return !1
        }

        function Na(t, e, a, n, i, r, s) {
            var o = Fo(t), l = o.length;
            if (l != Fo(e).length && !i)return !1;
            for (var c = l; c--;) {
                var d = o[c];
                if (!(i ? d in e : ts.call(e, d)))return !1
            }
            for (var h = i; ++c < l;) {
                d = o[c];
                var u = t[d], p = e[d], f = n ? n(i ? p : u, i ? u : p, d) : b;
                if (!(f === b ? a(u, p, n, i, r, s) : f))return !1;
                h || (h = "constructor" == d)
            }
            if (!h) {
                var m = t.constructor, g = e.constructor;
                if (m != g && "constructor"in t && "constructor"in e && !("function" == typeof m && m instanceof m && "function" == typeof g && g instanceof g))return !1
            }
            return !0
        }

        function Fa(t, e, a) {
            var n = Lt.callback || $r;
            return n = n === $r ? ye : n, a ? n(t, e, a) : n
        }

        function Ha(t) {
            for (var e = t.name + "", a = js[e], n = a ? a.length : 0; n--;) {
                var i = a[n], r = i.func;
                if (null == r || r == t)return i.name
            }
            return e
        }

        function Wa(t, e, n) {
            var i = Lt.indexOf || Cn;
            return i = i === Cn ? a : i, t ? i(t, e, n) : i
        }

        function qa(t) {
            for (var e = er(t), a = e.length; a--;)e[a][2] = an(e[a][1]);
            return e
        }

        function Ua(t, e) {
            var a = null == t ? b : t[e];
            return Ei(a) ? a : b
        }

        function Ba(t, e, a) {
            for (var n = -1, i = a.length; ++n < i;) {
                var r = a[n], s = r.size;
                switch (r.type) {
                    case"drop":
                        t += s;
                        break;
                    case"dropRight":
                        e -= s;
                        break;
                    case"take":
                        e = bs(e, t + s);
                        break;
                    case"takeRight":
                        t = ks(t, e - s)
                }
            }
            return {start: t, end: e}
        }

        function Va(t) {
            var e = t.length, a = new t.constructor(e);
            return e && "string" == typeof t[0] && ts.call(t, "index") && (a.index = t.index, a.input = t.input), a
        }

        function Ga(t) {
            var e = t.constructor;
            return "function" == typeof e && e instanceof e || (e = Vr), new e
        }

        function za(t, e, a) {
            var n = t.constructor;
            switch (e) {
                case J:
                    return sa(t);
                case U:
                case B:
                    return new n(+t);
                case X:
                case tt:
                case et:
                case at:
                case nt:
                case it:
                case rt:
                case st:
                case ot:
                    var i = t.buffer;
                    return new n(a ? sa(i) : i, t.byteOffset, t.length);
                case z:
                case Z:
                    return new n(t);
                case Q:
                    var r = new n(t.source, It.exec(t));
                    r.lastIndex = t.lastIndex
            }
            return r
        }

        function Ka(t, e, a) {
            null == t || Xa(e, t) || (e = un(e), t = 1 == e.length ? t : Pe(t, ze(e, 0, -1)), e = In(e));
            var n = null == t ? t : t[e];
            return null == n ? b : n.apply(t, a)
        }

        function Qa(t) {
            return null != t && en(Hs(t))
        }

        function Za(t, e) {
            return t = "number" == typeof t || Ot.test(t) ? +t : -1, e = null == e ? Ys : e, t > -1 && t % 1 == 0 && t < e
        }

        function Ja(t, e, a) {
            if (!Pi(a))return !1;
            var n = typeof e;
            if ("number" == n ? Qa(a) && Za(e, a.length) : "string" == n && e in a) {
                var i = a[e];
                return t === t ? t === i : i !== i
            }
            return !1
        }

        function Xa(t, e) {
            var a = typeof t;
            return !!("string" == a && Dt.test(t) || "number" == a) || !Oo(t) && (!vt.test(t) || null != e && t in hn(e))
        }

        function tn(t) {
            var e = Ha(t), a = Lt[e];
            if ("function" != typeof a || !(e in Ht.prototype))return !1;
            if (t === a)return !0;
            var n = Fs(a);
            return !!n && t === n[0]
        }

        function en(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Ys
        }

        function an(t) {
            return t === t && !Pi(t)
        }

        function nn(t, e) {
            var a = t[1], n = e[1], i = a | n, r = i < Y, s = n == Y && a == x || n == Y && a == T && t[7].length <= e[8] || n == (Y | T) && a == x;
            if (!r && !s)return t;
            n & C && (t[2] = e[2], i |= a & C ? 0 : I);
            var o = e[3];
            if (o) {
                var l = t[3];
                t[3] = l ? oa(l, o, e[4]) : ae(o), t[4] = l ? g(t[3], H) : ae(e[4])
            }
            return o = e[5], o && (l = t[5], t[5] = l ? la(l, o, e[6]) : ae(o), t[6] = l ? g(t[5], H) : ae(e[6])), o = e[7], o && (t[7] = ae(o)), n & Y && (t[8] = null == t[8] ? e[8] : bs(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
        }

        function rn(t, e) {
            return t === b ? e : So(t, e, rn)
        }

        function sn(t, e) {
            t = hn(t);
            for (var a = -1, n = e.length, i = {}; ++a < n;) {
                var r = e[a];
                r in t && (i[r] = t[r])
            }
            return i
        }

        function on(t, e) {
            var a = {};
            return Se(t, function (t, n, i) {
                e(t, n, i) && (a[n] = t)
            }), a
        }

        function ln(t, e) {
            for (var a = t.length, n = bs(e.length, a), i = ae(t); n--;) {
                var r = e[n];
                t[n] = Za(r, a) ? i[r] : b
            }
            return t
        }

        function cn(t) {
            for (var e = tr(t), a = e.length, n = a && t.length, i = !!n && en(n) && (Oo(t) || $i(t)), r = -1, s = []; ++r < a;) {
                var o = e[r];
                (i && Za(o, n) || ts.call(t, o)) && s.push(o)
            }
            return s
        }

        function dn(t) {
            return null == t ? [] : Qa(t) ? Pi(t) ? t : Vr(t) : rr(t)
        }

        function hn(t) {
            return Pi(t) ? t : Vr(t)
        }

        function un(t) {
            if (Oo(t))return t;
            var e = [];
            return i(t).replace(yt, function (t, a, n, i) {
                e.push(n ? i.replace(Ct, "$1") : a || t)
            }), e
        }

        function pn(t) {
            return t instanceof Ht ? t.clone() : new Ft(t.__wrapped__, t.__chain__, ae(t.__actions__))
        }

        function fn(t, e, a) {
            e = (a ? Ja(t, e, a) : null == e) ? 1 : ks(_s(e) || 1, 1);
            for (var n = 0, i = t ? t.length : 0, r = -1, s = Fr(ms(i / e)); n < i;)s[++r] = ze(t, n, n += e);
            return s
        }

        function mn(t) {
            for (var e = -1, a = t ? t.length : 0, n = -1, i = []; ++e < a;) {
                var r = t[e];
                r && (i[++n] = r)
            }
            return i
        }

        function gn(t, e, a) {
            return (t ? t.length : 0) ? ((a ? Ja(t, e, a) : null == e) && (e = 1), ze(t, e < 0 ? 0 : e)) : []
        }

        function _n(t, e, a) {
            var n = t ? t.length : 0;
            return n ? ((a ? Ja(t, e, a) : null == e) && (e = 1), e = n - (+e || 0), ze(t, 0, e < 0 ? 0 : e)) : []
        }

        function vn(t, e, a) {
            return t && t.length ? ea(t, Fa(e, a, 3), !0, !0) : []
        }

        function Dn(t, e, a) {
            return t && t.length ? ea(t, Fa(e, a, 3), !0) : []
        }

        function yn(t, e, a, n) {
            var i = t ? t.length : 0;
            return i ? (a && "number" != typeof a && Ja(t, e, a) && (a = 0, n = i), Ie(t, e, a, n)) : []
        }

        function kn(t) {
            return t ? t[0] : b
        }

        function bn(t, e, a) {
            var n = t ? t.length : 0;
            return a && Ja(t, e, a) && (e = !1), n ? Oe(t, e) : []
        }

        function wn(t) {
            return (t ? t.length : 0) ? Oe(t, !0) : []
        }

        function Cn(t, e, n) {
            var i = t ? t.length : 0;
            if (!i)return -1;
            if ("number" == typeof n)n = n < 0 ? ks(i + n, 0) : n; else if (n) {
                var r = na(t, e);
                return r < i && (e === e ? e === t[r] : t[r] !== t[r]) ? r : -1
            }
            return a(t, e, n || 0)
        }

        function $n(t) {
            return _n(t, 1)
        }

        function In(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : b
        }

        function xn(t, e, a) {
            var n = t ? t.length : 0;
            if (!n)return -1;
            var i = n;
            if ("number" == typeof a)i = (a < 0 ? ks(n + a, 0) : bs(a || 0, n - 1)) + 1; else if (a) {
                i = na(t, e, !0) - 1;
                var r = t[i];
                return (e === e ? e === r : r !== r) ? i : -1
            }
            if (e !== e)return p(t, i, !0);
            for (; i--;)if (t[i] === e)return i;
            return -1
        }

        function Mn() {
            var t = arguments, e = t[0];
            if (!e || !e.length)return e;
            for (var a = 0, n = Wa(), i = t.length; ++a < i;)for (var r = 0, s = t[a]; (r = n(e, s, r)) > -1;)us.call(e, r, 1);
            return e
        }

        function On(t, e, a) {
            var n = [];
            if (!t || !t.length)return n;
            var i = -1, r = [], s = t.length;
            for (e = Fa(e, a, 3); ++i < s;) {
                var o = t[i];
                e(o, i, t) && (n.push(o), r.push(i))
            }
            return Be(t, r), n
        }

        function Sn(t) {
            return gn(t, 1)
        }

        function Yn(t, e, a) {
            var n = t ? t.length : 0;
            return n ? (a && "number" != typeof a && Ja(t, e, a) && (e = 0, a = n), ze(t, e, a)) : []
        }

        function Tn(t, e, a) {
            return (t ? t.length : 0) ? ((a ? Ja(t, e, a) : null == e) && (e = 1), ze(t, 0, e < 0 ? 0 : e)) : []
        }

        function jn(t, e, a) {
            var n = t ? t.length : 0;
            return n ? ((a ? Ja(t, e, a) : null == e) && (e = 1), e = n - (+e || 0), ze(t, e < 0 ? 0 : e)) : []
        }

        function Pn(t, e, a) {
            return t && t.length ? ea(t, Fa(e, a, 3), !1, !0) : []
        }

        function Rn(t, e, a) {
            return t && t.length ? ea(t, Fa(e, a, 3)) : []
        }

        function An(t, e, n, i) {
            if (!(t ? t.length : 0))return [];
            null != e && "boolean" != typeof e && (i = n, n = Ja(t, e, i) ? b : e, e = !1);
            var r = Fa();
            return null == n && r === ye || (n = r(n, i, 3)), e && Wa() === a ? _(t, n) : Xe(t, n)
        }

        function En(t) {
            if (!t || !t.length)return [];
            var e = -1, a = 0;
            t = oe(t, function (t) {
                if (Qa(t))return a = ks(t.length, a), !0
            });
            for (var n = Fr(a); ++e < a;)n[e] = le(t, qe(e));
            return n
        }

        function Ln(t, e, a) {
            if (!(t ? t.length : 0))return [];
            var n = En(t);
            return null == e ? n : (e = ra(e, a, 4), le(n, function (t) {
                return de(t, e, b, !0)
            }))
        }

        function Nn() {
            for (var t = -1, e = arguments.length; ++t < e;) {
                var a = arguments[t];
                if (Qa(a))var n = n ? ce(we(n, a), we(a, n)) : a
            }
            return n ? Xe(n) : []
        }

        function Fn(t, e) {
            var a = -1, n = t ? t.length : 0, i = {};
            for (!n || e || Oo(t[0]) || (e = []); ++a < n;) {
                var r = t[a];
                e ? i[r] = e[a] : r && (i[r[0]] = r[1])
            }
            return i
        }

        function Hn(t) {
            var e = Lt(t);
            return e.__chain__ = !0, e
        }

        function Wn(t, e, a) {
            return e.call(a, t), t
        }

        function qn(t, e, a) {
            return e.call(a, t)
        }

        function Un() {
            return Hn(this)
        }

        function Bn() {
            return new Ft(this.value(), this.__chain__)
        }

        function Vn(t) {
            for (var e, a = this; a instanceof Nt;) {
                var n = pn(a);
                e ? i.__wrapped__ = n : e = n;
                var i = n;
                a = a.__wrapped__
            }
            return i.__wrapped__ = t, e
        }

        function Gn() {
            var t = this.__wrapped__, e = function (t) {
                return t.reverse()
            };
            if (t instanceof Ht) {
                var a = t;
                return this.__actions__.length && (a = new Ht(this)), a = a.reverse(), a.__actions__.push({
                    func: qn,
                    args: [e],
                    thisArg: b
                }), new Ft(a, this.__chain__)
            }
            return this.thru(e)
        }

        function zn() {
            return this.value() + ""
        }

        function Kn() {
            return aa(this.__wrapped__, this.__actions__)
        }

        function Qn(t, e, a) {
            var n = Oo(t) ? re : Ce;
            return a && Ja(t, e, a) && (e = b), "function" == typeof e && a === b || (e = Fa(e, a, 3)), n(t, e)
        }

        function Zn(t, e, a) {
            var n = Oo(t) ? oe : xe;
            return e = Fa(e, a, 3), n(t, e)
        }

        function Jn(t, e) {
            return no(t, Ne(e))
        }

        function Xn(t, e, a, n) {
            var i = t ? Hs(t) : 0;
            return en(i) || (t = rr(t), i = t.length), a = "number" != typeof a || n && Ja(e, a, n) ? 0 : a < 0 ? ks(i + a, 0) : a || 0, "string" == typeof t || !Oo(t) && Wi(t) ? a <= i && t.indexOf(e, a) > -1 : !!i && Wa(t, e, a) > -1
        }

        function ti(t, e, a) {
            var n = Oo(t) ? le : Le;
            return e = Fa(e, a, 3), n(t, e)
        }

        function ei(t, e) {
            return ti(t, jr(e))
        }

        function ai(t, e, a) {
            var n = Oo(t) ? oe : xe;
            return e = Fa(e, a, 3), n(t, function (t, a, n) {
                return !e(t, a, n)
            })
        }

        function ni(t, e, a) {
            if (a ? Ja(t, e, a) : null == e) {
                t = dn(t);
                var n = t.length;
                return n > 0 ? t[Ve(0, n - 1)] : b
            }
            var i = -1, r = Gi(t), n = r.length, s = n - 1;
            for (e = bs(e < 0 ? 0 : +e || 0, n); ++i < e;) {
                var o = Ve(i, s), l = r[o];
                r[o] = r[i], r[i] = l
            }
            return r.length = e, r
        }

        function ii(t) {
            return ni(t, xs)
        }

        function ri(t) {
            var e = t ? Hs(t) : 0;
            return en(e) ? e : Fo(t).length
        }

        function si(t, e, a) {
            var n = Oo(t) ? ue : Ke;
            return a && Ja(t, e, a) && (e = b), "function" == typeof e && a === b || (e = Fa(e, a, 3)), n(t, e)
        }

        function oi(t, e, a) {
            if (null == t)return [];
            a && Ja(t, e, a) && (e = b);
            var n = -1;
            return e = Fa(e, a, 3), Qe(Le(t, function (t, a, i) {
                return {criteria: e(t, a, i), index: ++n, value: t}
            }), o)
        }

        function li(t, e, a, n) {
            return null == t ? [] : (n && Ja(e, a, n) && (a = b), Oo(e) || (e = null == e ? [] : [e]), Oo(a) || (a = null == a ? [] : [a]), Ze(t, e, a))
        }

        function ci(t, e) {
            return Zn(t, Ne(e))
        }

        function di(t, e) {
            if ("function" != typeof e) {
                if ("function" != typeof t)throw new Kr(F);
                var a = t;
                t = e, e = a
            }
            return t = Ds(t = +t) ? t : 0, function () {
                if (--t < 1)return e.apply(this, arguments)
            }
        }

        function hi(t, e, a) {
            return a && Ja(t, e, a) && (e = b), e = t && null == e ? t.length : ks(+e || 0, 0), Aa(t, Y, b, b, b, b, e)
        }

        function ui(t, e) {
            var a;
            if ("function" != typeof e) {
                if ("function" != typeof t)throw new Kr(F);
                var n = t;
                t = e, e = n
            }
            return function () {
                return --t > 0 && (a = e.apply(this, arguments)), t <= 1 && (e = b), a
            }
        }

        function pi(t, e, a) {
            function n() {
                p && ss(p), c && ss(c), m = 0, c = p = f = b
            }

            function i(e, a) {
                a && ss(a), c = p = f = b, e && (m = mo(), d = t.apply(u, l), p || c || (l = u = b))
            }

            function r() {
                var t = e - (mo() - h);
                t <= 0 || t > e ? i(f, c) : p = hs(r, t)
            }

            function s() {
                i(_, p)
            }

            function o() {
                if (l = arguments, h = mo(), u = this, f = _ && (p || !v), !1 === g)var a = v && !p; else {
                    c || v || (m = h);
                    var n = g - (h - m), i = n <= 0 || n > g;
                    i ? (c && (c = ss(c)), m = h, d = t.apply(u, l)) : c || (c = hs(s, n))
                }
                return i && p ? p = ss(p) : p || e === g || (p = hs(r, e)), a && (i = !0, d = t.apply(u, l)), !i || p || c || (l = u = b), d
            }

            var l, c, d, h, u, p, f, m = 0, g = !1, _ = !0;
            if ("function" != typeof t)throw new Kr(F);
            if (e = e < 0 ? 0 : +e || 0, !0 === a) {
                var v = !0;
                _ = !1
            } else Pi(a) && (v = !!a.leading, g = "maxWait"in a && ks(+a.maxWait || 0, e), _ = "trailing"in a ? !!a.trailing : _);
            return o.cancel = n, o
        }

        function fi(t, e) {
            if ("function" != typeof t || e && "function" != typeof e)throw new Kr(F);
            var a = function () {
                var n = arguments, i = e ? e.apply(this, n) : n[0], r = a.cache;
                if (r.has(i))return r.get(i);
                var s = t.apply(this, n);
                return a.cache = r.set(i, s), s
            };
            return a.cache = new fi.Cache, a
        }

        function mi(t) {
            if ("function" != typeof t)throw new Kr(F);
            return function () {
                return !t.apply(this, arguments)
            }
        }

        function gi(t) {
            return ui(2, t)
        }

        function _i(t, e) {
            if ("function" != typeof t)throw new Kr(F);
            return e = ks(e === b ? t.length - 1 : +e || 0, 0), function () {
                for (var a = arguments, n = -1, i = ks(a.length - e, 0), r = Fr(i); ++n < i;)r[n] = a[e + n];
                switch (e) {
                    case 0:
                        return t.call(this, r);
                    case 1:
                        return t.call(this, a[0], r);
                    case 2:
                        return t.call(this, a[0], a[1], r)
                }
                var s = Fr(e + 1);
                for (n = -1; ++n < e;)s[n] = a[n];
                return s[e] = r, t.apply(this, s)
            }
        }

        function vi(t) {
            if ("function" != typeof t)throw new Kr(F);
            return function (e) {
                return t.apply(this, e)
            }
        }

        function Di(t, e, a) {
            var n = !0, i = !0;
            if ("function" != typeof t)throw new Kr(F);
            return !1 === a ? n = !1 : Pi(a) && (n = "leading"in a ? !!a.leading : n, i = "trailing"in a ? !!a.trailing : i), pi(t, e, {
                leading: n,
                maxWait: +e,
                trailing: i
            })
        }

        function yi(t, e) {
            return e = null == e ? xr : e, Aa(e, O, b, [t], [])
        }

        function ki(t, e, a, n) {
            return e && "boolean" != typeof e && Ja(t, e, a) ? e = !1 : "function" == typeof e && (n = a, a = e, e = !1), "function" == typeof a ? ke(t, e, ra(a, n, 3)) : ke(t, e)
        }

        function bi(t, e, a) {
            return "function" == typeof e ? ke(t, !0, ra(e, a, 3)) : ke(t, !0)
        }

        function wi(t, e) {
            return t > e
        }

        function Ci(t, e) {
            return t >= e
        }

        function $i(t) {
            return f(t) && Qa(t) && ts.call(t, "callee") && !cs.call(t, "callee")
        }

        function Ii(t) {
            return !0 === t || !1 === t || f(t) && as.call(t) == U
        }

        function xi(t) {
            return f(t) && as.call(t) == B
        }

        function Mi(t) {
            return !!t && 1 === t.nodeType && f(t) && !Fi(t)
        }

        function Oi(t) {
            return null == t || (Qa(t) && (Oo(t) || Wi(t) || $i(t) || f(t) && ji(t.splice)) ? !t.length : !Fo(t).length)
        }

        function Si(t, e, a, n) {
            a = "function" == typeof a ? ra(a, n, 3) : b;
            var i = a ? a(t, e) : b;
            return i === b ? Re(t, e, a) : !!i
        }

        function Yi(t) {
            return f(t) && "string" == typeof t.message && as.call(t) == V
        }

        function Ti(t) {
            return "number" == typeof t && Ds(t)
        }

        function ji(t) {
            return Pi(t) && as.call(t) == G
        }

        function Pi(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function Ri(t, e, a, n) {
            return a = "function" == typeof a ? ra(a, n, 3) : b, Ee(t, qa(e), a)
        }

        function Ai(t) {
            return Ni(t) && t != +t
        }

        function Ei(t) {
            return null != t && (ji(t) ? is.test(Xr.call(t)) : f(t) && Mt.test(t))
        }

        function Li(t) {
            return null === t
        }

        function Ni(t) {
            return "number" == typeof t || f(t) && as.call(t) == z
        }

        function Fi(t) {
            var e;
            if (!f(t) || as.call(t) != K || $i(t) || !ts.call(t, "constructor") && "function" == typeof(e = t.constructor) && !(e instanceof e))return !1;
            var a;
            return Se(t, function (t, e) {
                a = e
            }), a === b || ts.call(t, a)
        }

        function Hi(t) {
            return Pi(t) && as.call(t) == Q
        }

        function Wi(t) {
            return "string" == typeof t || f(t) && as.call(t) == Z
        }

        function qi(t) {
            return f(t) && en(t.length) && !!At[as.call(t)]
        }

        function Ui(t) {
            return t === b
        }

        function Bi(t, e) {
            return t < e
        }

        function Vi(t, e) {
            return t <= e
        }

        function Gi(t) {
            var e = t ? Hs(t) : 0;
            return en(e) ? e ? ae(t) : [] : rr(t)
        }

        function zi(t) {
            return De(t, tr(t))
        }

        function Ki(t, e, a) {
            var n = Ps(t);
            return a && Ja(t, e, a) && (e = b), e ? _e(n, e) : n
        }

        function Qi(t) {
            return je(t, tr(t))
        }

        function Zi(t, e, a) {
            var n = null == t ? b : Pe(t, un(e), e + "");
            return n === b ? a : n
        }

        function Ji(t, e) {
            if (null == t)return !1;
            var a = ts.call(t, e);
            if (!a && !Xa(e)) {
                if (e = un(e), null == (t = 1 == e.length ? t : Pe(t, ze(e, 0, -1))))return !1;
                e = In(e), a = ts.call(t, e)
            }
            return a || en(t.length) && Za(e, t.length) && (Oo(t) || $i(t))
        }

        function Xi(t, e, a) {
            a && Ja(t, e, a) && (e = b);
            for (var n = -1, i = Fo(t), r = i.length, s = {}; ++n < r;) {
                var o = i[n], l = t[o];
                e ? ts.call(s, l) ? s[l].push(o) : s[l] = [o] : s[l] = o
            }
            return s
        }

        function tr(t) {
            if (null == t)return [];
            Pi(t) || (t = Vr(t));
            var e = t.length;
            e = e && en(e) && (Oo(t) || $i(t)) && e || 0;
            for (var a = t.constructor, n = -1, i = "function" == typeof a && a.prototype === t, r = Fr(e), s = e > 0; ++n < e;)r[n] = n + "";
            for (var o in t)s && Za(o, e) || "constructor" == o && (i || !ts.call(t, o)) || r.push(o);
            return r
        }

        function er(t) {
            t = hn(t);
            for (var e = -1, a = Fo(t), n = a.length, i = Fr(n); ++e < n;) {
                var r = a[e];
                i[e] = [r, t[r]]
            }
            return i
        }

        function ar(t, e, a) {
            var n = null == t ? b : t[e];
            return n === b && (null == t || Xa(e, t) || (e = un(e), t = 1 == e.length ? t : Pe(t, ze(e, 0, -1)), n = null == t ? b : t[In(e)]), n = n === b ? a : n), ji(n) ? n.call(t) : n
        }

        function nr(t, e, a) {
            if (null == t)return t;
            var n = e + "";
            e = null != t[n] || Xa(e, t) ? [n] : un(e);
            for (var i = -1, r = e.length, s = r - 1, o = t; null != o && ++i < r;) {
                var l = e[i];
                Pi(o) && (i == s ? o[l] = a : null == o[l] && (o[l] = Za(e[i + 1]) ? [] : {})), o = o[l]
            }
            return t
        }

        function ir(t, e, a, n) {
            var i = Oo(t) || qi(t);
            if (e = Fa(e, n, 4), null == a)if (i || Pi(t)) {
                var r = t.constructor;
                a = i ? Oo(t) ? new r : [] : Ps(ji(r) ? r.prototype : b)
            } else a = {};
            return (i ? ne : Ye)(t, function (t, n, i) {
                return e(a, t, n, i)
            }), a
        }

        function rr(t) {
            return ta(t, Fo(t))
        }

        function sr(t) {
            return ta(t, tr(t))
        }

        function or(t, e, a) {
            return e = +e || 0, a === b ? (a = e, e = 0) : a = +a || 0, t >= bs(e, a) && t < ks(e, a)
        }

        function lr(t, e, a) {
            a && Ja(t, e, a) && (e = a = b);
            var n = null == t, i = null == e;
            if (null == a && (i && "boolean" == typeof t ? (a = t, t = 1) : "boolean" == typeof e && (a = e, i = !0)), n && i && (e = 1, i = !1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, a || t % 1 || e % 1) {
                var r = $s();
                return bs(t + r * (e - t + os("1e-" + ((r + "").length - 1))), e)
            }
            return Ve(t, e)
        }

        function cr(t) {
            return (t = i(t)) && t.charAt(0).toUpperCase() + t.slice(1)
        }

        function dr(t) {
            return (t = i(t)) && t.replace(St, c).replace(wt, "")
        }

        function hr(t, e, a) {
            t = i(t), e += "";
            var n = t.length;
            return a = a === b ? n : bs(a < 0 ? 0 : +a || 0, n), (a -= e.length) >= 0 && t.indexOf(e, a) == a
        }

        function ur(t) {
            return t = i(t), t && ft.test(t) ? t.replace(ut, d) : t
        }

        function pr(t) {
            return t = i(t), t && bt.test(t) ? t.replace(kt, h) : t || "(?:)"
        }

        function fr(t, e, a) {
            t = i(t), e = +e;
            var n = t.length;
            if (n >= e || !Ds(e))return t;
            var r = (e - n) / 2, s = _s(r);
            return a = Ta("", ms(r), a), a.slice(0, s) + t + a
        }

        function mr(t, e, a) {
            return (a ? Ja(t, e, a) : null == e) ? e = 0 : e && (e = +e), t = Dr(t), Cs(t, e || (xt.test(t) ? 16 : 10))
        }

        function gr(t, e) {
            var a = "";
            if (t = i(t), (e = +e) < 1 || !t || !Ds(e))return a;
            do {
                e % 2 && (a += t), e = _s(e / 2), t += t
            } while (e);
            return a
        }

        function _r(t, e, a) {
            return t = i(t), a = null == a ? 0 : bs(a < 0 ? 0 : +a || 0, t.length), t.lastIndexOf(e, a) == a
        }

        function vr(t, e, a) {
            var n = Lt.templateSettings;
            a && Ja(t, e, a) && (e = a = b), t = i(t), e = ge(_e({}, a || e), n, me);
            var r, s, o = ge(_e({}, e.imports), n.imports, me), l = Fo(o), c = ta(o, l), d = 0, h = e.interpolate || Yt, p = "__p += '", f = Gr((e.escape || Yt).source + "|" + h.source + "|" + (h === _t ? $t : Yt).source + "|" + (e.evaluate || Yt).source + "|$", "g"), m = "//# sourceURL=" + ("sourceURL"in e ? e.sourceURL : "lodash.templateSources[" + ++Rt + "]") + "\n";
            t.replace(f, function (e, a, n, i, o, l) {
                return n || (n = i), p += t.slice(d, l).replace(Tt, u), a && (r = !0, p += "' +\n__e(" + a + ") +\n'"), o && (s = !0, p += "';\n" + o + ";\n__p += '"), n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), d = l + e.length, e
            }), p += "';\n";
            var g = e.variable;
            g || (p = "with (obj) {\n" + p + "\n}\n"), p = (s ? p.replace(lt, "") : p).replace(ct, "$1").replace(dt, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
            var _ = Zo(function () {
                return qr(l, m + "return " + p).apply(b, c)
            });
            if (_.source = p, Yi(_))throw _;
            return _
        }

        function Dr(t, e, a) {
            var n = t;
            return (t = i(t)) ? (a ? Ja(n, e, a) : null == e) ? t.slice(v(t), D(t) + 1) : (e += "", t.slice(r(t, e), s(t, e) + 1)) : t
        }

        function yr(t, e, a) {
            var n = t;
            return t = i(t), t ? (a ? Ja(n, e, a) : null == e) ? t.slice(v(t)) : t.slice(r(t, e + "")) : t
        }

        function kr(t, e, a) {
            var n = t;
            return t = i(t), t ? (a ? Ja(n, e, a) : null == e) ? t.slice(0, D(t) + 1) : t.slice(0, s(t, e + "") + 1) : t
        }

        function br(t, e, a) {
            a && Ja(t, e, a) && (e = b);
            var n = j, r = P;
            if (null != e)if (Pi(e)) {
                var s = "separator"in e ? e.separator : s;
                n = "length"in e ? +e.length || 0 : n, r = "omission"in e ? i(e.omission) : r
            } else n = +e || 0;
            if (t = i(t), n >= t.length)return t;
            var o = n - r.length;
            if (o < 1)return r;
            var l = t.slice(0, o);
            if (null == s)return l + r;
            if (Hi(s)) {
                if (t.slice(o).search(s)) {
                    var c, d, h = t.slice(0, o);
                    for (s.global || (s = Gr(s.source, (It.exec(s) || "") + "g")), s.lastIndex = 0; c = s.exec(h);)d = c.index;
                    l = l.slice(0, null == d ? o : d)
                }
            } else if (t.indexOf(s, o) != o) {
                var u = l.lastIndexOf(s);
                u > -1 && (l = l.slice(0, u))
            }
            return l + r
        }

        function wr(t) {
            return t = i(t), t && pt.test(t) ? t.replace(ht, y) : t
        }

        function Cr(t, e, a) {
            return a && Ja(t, e, a) && (e = b), t = i(t), t.match(e || jt) || []
        }

        function $r(t, e, a) {
            return a && Ja(t, e, a) && (e = b), f(t) ? Mr(t) : ye(t, e)
        }

        function Ir(t) {
            return function () {
                return t
            }
        }

        function xr(t) {
            return t
        }

        function Mr(t) {
            return Ne(ke(t, !0))
        }

        function Or(t, e) {
            return Fe(t, ke(e, !0))
        }

        function Sr(t, e, a) {
            if (null == a) {
                var n = Pi(e), i = n ? Fo(e) : b, r = i && i.length ? je(e, i) : b;
                (r ? r.length : n) || (r = !1, a = e, e = t, t = this)
            }
            r || (r = je(e, Fo(e)));
            var s = !0, o = -1, l = ji(t), c = r.length;
            !1 === a ? s = !1 : Pi(a) && "chain"in a && (s = a.chain);
            for (; ++o < c;) {
                var d = r[o], h = e[d];
                t[d] = h, l && (t.prototype[d] = function (e) {
                    return function () {
                        var a = this.__chain__;
                        if (s || a) {
                            var n = t(this.__wrapped__);
                            return (n.__actions__ = ae(this.__actions__)).push({
                                func: e,
                                args: arguments,
                                thisArg: t
                            }), n.__chain__ = a, n
                        }
                        return e.apply(t, ce([this.value()], arguments))
                    }
                }(h))
            }
            return t
        }

        function Yr() {
            return Qt._ = ns, this
        }

        function Tr() {
        }

        function jr(t) {
            return Xa(t) ? qe(t) : Ue(t)
        }

        function Pr(t) {
            return function (e) {
                return Pe(t, un(e), e + "")
            }
        }

        function Rr(t, e, a) {
            a && Ja(t, e, a) && (e = a = b), t = +t || 0, a = null == a ? 1 : +a || 0, null == e ? (e = t, t = 0) : e = +e || 0;
            for (var n = -1, i = ks(ms((e - t) / (a || 1)), 0), r = Fr(i); ++n < i;)r[n] = t, t += a;
            return r
        }

        function Ar(t, e, a) {
            if ((t = _s(t)) < 1 || !Ds(t))return [];
            var n = -1, i = Fr(bs(t, Ms));
            for (e = ra(e, a, 1); ++n < t;)n < Ms ? i[n] = e(n) : e(n);
            return i
        }

        function Er(t) {
            var e = ++es;
            return i(t) + e
        }

        function Lr(t, e) {
            return (+t || 0) + (+e || 0)
        }

        function Nr(t, e, a) {
            return a && Ja(t, e, a) && (e = b), e = Fa(e, a, 3), 1 == e.length ? pe(Oo(t) ? t : dn(t), e) : Je(t, e)
        }

        m = m ? Zt.defaults(Qt.Object(), m, Zt.pick(Qt, Pt)) : Qt;
        var Fr = m.Array, Hr = m.Date, Wr = m.Error, qr = m.Function, Ur = m.Math, Br = m.Number, Vr = m.Object, Gr = m.RegExp, zr = m.String, Kr = m.TypeError, Qr = Fr.prototype, Zr = Vr.prototype, Jr = zr.prototype, Xr = qr.prototype.toString, ts = Zr.hasOwnProperty, es = 0, as = Zr.toString, ns = Qt._, is = Gr("^" + Xr.call(ts).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), rs = m.ArrayBuffer, ss = m.clearTimeout, os = m.parseFloat, ls = Ur.pow, cs = Zr.propertyIsEnumerable, ds = Ua(m, "Set"), hs = m.setTimeout, us = Qr.splice, ps = m.Uint8Array, fs = Ua(m, "WeakMap"), ms = Ur.ceil, gs = Ua(Vr, "create"), _s = Ur.floor, vs = Ua(Fr, "isArray"), Ds = m.isFinite, ys = Ua(Vr, "keys"), ks = Ur.max, bs = Ur.min, ws = Ua(Hr, "now"), Cs = m.parseInt, $s = Ur.random, Is = Br.NEGATIVE_INFINITY, xs = Br.POSITIVE_INFINITY, Ms = 4294967295, Os = Ms - 1, Ss = Ms >>> 1, Ys = 9007199254740991, Ts = fs && new fs, js = {};
        Lt.support = {};
        Lt.templateSettings = {escape: mt, evaluate: gt, interpolate: _t, variable: "", imports: {_: Lt}};
        var Ps = function () {
            function t() {
            }

            return function (e) {
                if (Pi(e)) {
                    t.prototype = e;
                    var a = new t;
                    t.prototype = b
                }
                return a || {}
            }
        }(), Rs = ha(Ye), As = ha(Te, !0), Es = ua(), Ls = ua(!0), Ns = Ts ? function (t, e) {
            return Ts.set(t, e), t
        } : xr, Fs = Ts ? function (t) {
            return Ts.get(t)
        } : Tr, Hs = qe("length"), Ws = function () {
            var t = 0, e = 0;
            return function (a, n) {
                var i = mo(), r = A - (i - e);
                if (e = i, r > 0) {
                    if (++t >= R)return a
                } else t = 0;
                return Ns(a, n)
            }
        }(), qs = _i(function (t, e) {
            return f(t) && Qa(t) ? we(t, Oe(e, !1, !0)) : []
        }), Us = ka(), Bs = ka(!0), Vs = _i(function (t) {
            for (var e = t.length, n = e, i = Fr(h), r = Wa(), s = r === a, o = []; n--;) {
                var l = t[n] = Qa(l = t[n]) ? l : [];
                i[n] = s && l.length >= 120 ? fa(n && l) : null
            }
            var c = t[0], d = -1, h = c ? c.length : 0, u = i[0];
            t:for (; ++d < h;)if (l = c[d], (u ? Xt(u, l) : r(o, l, 0)) < 0) {
                for (var n = e; --n;) {
                    var p = i[n];
                    if ((p ? Xt(p, l) : r(t[n], l, 0)) < 0)continue t
                }
                u && u.push(l), o.push(l)
            }
            return o
        }), Gs = _i(function (e, a) {
            a = Oe(a);
            var n = ve(e, a);
            return Be(e, a.sort(t)), n
        }), zs = Ra(), Ks = Ra(!0), Qs = _i(function (t) {
            return Xe(Oe(t, !1, !0))
        }), Zs = _i(function (t, e) {
            return Qa(t) ? we(t, e) : []
        }), Js = _i(En), Xs = _i(function (t) {
            var e = t.length, a = e > 2 ? t[e - 2] : b, n = e > 1 ? t[e - 1] : b;
            return e > 2 && "function" == typeof a ? e -= 2 : (a = e > 1 && "function" == typeof n ? (--e, n) : b, n = b), t.length = e, Ln(t, a, n)
        }), to = _i(function (t) {
            return t = Oe(t), this.thru(function (e) {
                return ee(Oo(e) ? e : [hn(e)], t)
            })
        }), eo = _i(function (t, e) {
            return ve(t, Oe(e))
        }), ao = ca(function (t, e, a) {
            ts.call(t, a) ? ++t[a] : t[a] = 1
        }), no = ya(Rs), io = ya(As, !0), ro = Ca(ne, Rs), so = Ca(ie, As), oo = ca(function (t, e, a) {
            ts.call(t, a) ? t[a].push(e) : t[a] = [e]
        }), lo = ca(function (t, e, a) {
            t[a] = e
        }), co = _i(function (t, e, a) {
            var n = -1, i = "function" == typeof e, r = Xa(e), s = Qa(t) ? Fr(t.length) : [];
            return Rs(t, function (t) {
                var o = i ? e : r && null != t ? t[e] : b;
                s[++n] = o ? o.apply(t, a) : Ka(t, e, a)
            }), s
        }), ho = ca(function (t, e, a) {
            t[a ? 0 : 1].push(e)
        }, function () {
            return [[], []]
        }), uo = Sa(de, Rs), po = Sa(he, As), fo = _i(function (t, e) {
            if (null == t)return [];
            var a = e[2];
            return a && Ja(e[0], e[1], a) && (e.length = 1), Ze(t, Oe(e), [])
        }), mo = ws || function () {
                return (new Hr).getTime()
            }, go = _i(function (t, e, a) {
            var n = C;
            if (a.length) {
                var i = g(a, go.placeholder);
                n |= O
            }
            return Aa(t, n, e, a, i)
        }), _o = _i(function (t, e) {
            e = e.length ? Oe(e) : Qi(t);
            for (var a = -1, n = e.length; ++a < n;) {
                var i = e[a];
                t[i] = Aa(t[i], C, t)
            }
            return t
        }), vo = _i(function (t, e, a) {
            var n = C | $;
            if (a.length) {
                var i = g(a, vo.placeholder);
                n |= O
            }
            return Aa(e, n, t, a, i)
        }), Do = _a(x), yo = _a(M), ko = _i(function (t, e) {
            return be(t, 1, e)
        }), bo = _i(function (t, e, a) {
            return be(t, e, a)
        }), wo = wa(), Co = wa(!0), $o = _i(function (t, e) {
            if (e = Oe(e), "function" != typeof t || !re(e, n))throw new Kr(F);
            var a = e.length;
            return _i(function (n) {
                for (var i = bs(n.length, a); i--;)n[i] = e[i](n[i]);
                return t.apply(this, n)
            })
        }), Io = Oa(O), xo = Oa(S), Mo = _i(function (t, e) {
            return Aa(t, T, b, b, b, Oe(e))
        }), Oo = vs || function (t) {
                return f(t) && en(t.length) && as.call(t) == q
            }, So = da(He), Yo = da(function (t, e, a) {
            return a ? ge(t, e, a) : _e(t, e)
        }), To = va(Yo, fe), jo = va(So, rn), Po = ba(Ye), Ro = ba(Te), Ao = $a(Es), Eo = $a(Ls), Lo = Ia(Ye), No = Ia(Te), Fo = ys ? function (t) {
            var e = null == t ? b : t.constructor;
            return "function" == typeof e && e.prototype === t || "function" != typeof t && Qa(t) ? cn(t) : Pi(t) ? ys(t) : []
        } : cn, Ho = xa(!0), Wo = xa(), qo = _i(function (t, e) {
            if (null == t)return {};
            if ("function" != typeof e[0]) {
                var e = le(Oe(e), zr);
                return sn(t, we(tr(t), e))
            }
            var a = ra(e[0], e[1], 3);
            return on(t, function (t, e, n) {
                return !a(t, e, n)
            })
        }), Uo = _i(function (t, e) {
            return null == t ? {} : "function" == typeof e[0] ? on(t, ra(e[0], e[1], 3)) : sn(t, Oe(e))
        }), Bo = ma(function (t, e, a) {
            return e = e.toLowerCase(), t + (a ? e.charAt(0).toUpperCase() + e.slice(1) : e)
        }), Vo = ma(function (t, e, a) {
            return t + (a ? "-" : "") + e.toLowerCase()
        }), Go = Ma(), zo = Ma(!0), Ko = ma(function (t, e, a) {
            return t + (a ? "_" : "") + e.toLowerCase()
        }), Qo = ma(function (t, e, a) {
            return t + (a ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
        }), Zo = _i(function (t, e) {
            try {
                return t.apply(b, e)
            } catch (t) {
                return Yi(t) ? t : new Wr(t)
            }
        }), Jo = _i(function (t, e) {
            return function (a) {
                return Ka(a, t, e)
            }
        }), Xo = _i(function (t, e) {
            return function (a) {
                return Ka(t, a, e)
            }
        }), tl = Pa("ceil"), el = Pa("floor"), al = Da(wi, Is), nl = Da(Bi, xs), il = Pa("round");
        return Lt.prototype = Nt.prototype, Ft.prototype = Ps(Nt.prototype), Ft.prototype.constructor = Ft, Ht.prototype = Ps(Nt.prototype), Ht.prototype.constructor = Ht, Bt.prototype.delete = Vt, Bt.prototype.get = Gt, Bt.prototype.has = zt, Bt.prototype.set = Kt, Jt.prototype.push = te, fi.Cache = Bt, Lt.after = di, Lt.ary = hi, Lt.assign = Yo, Lt.at = eo, Lt.before = ui, Lt.bind = go, Lt.bindAll = _o, Lt.bindKey = vo, Lt.callback = $r, Lt.chain = Hn, Lt.chunk = fn, Lt.compact = mn, Lt.constant = Ir, Lt.countBy = ao, Lt.create = Ki, Lt.curry = Do, Lt.curryRight = yo, Lt.debounce = pi, Lt.defaults = To, Lt.defaultsDeep = jo, Lt.defer = ko, Lt.delay = bo, Lt.difference = qs, Lt.drop = gn, Lt.dropRight = _n, Lt.dropRightWhile = vn, Lt.dropWhile = Dn, Lt.fill = yn, Lt.filter = Zn, Lt.flatten = bn, Lt.flattenDeep = wn, Lt.flow = wo, Lt.flowRight = Co, Lt.forEach = ro, Lt.forEachRight = so, Lt.forIn = Ao, Lt.forInRight = Eo, Lt.forOwn = Lo, Lt.forOwnRight = No, Lt.functions = Qi, Lt.groupBy = oo, Lt.indexBy = lo, Lt.initial = $n, Lt.intersection = Vs, Lt.invert = Xi, Lt.invoke = co, Lt.keys = Fo, Lt.keysIn = tr, Lt.map = ti, Lt.mapKeys = Ho, Lt.mapValues = Wo, Lt.matches = Mr, Lt.matchesProperty = Or, Lt.memoize = fi, Lt.merge = So, Lt.method = Jo, Lt.methodOf = Xo, Lt.mixin = Sr, Lt.modArgs = $o, Lt.negate = mi, Lt.omit = qo, Lt.once = gi, Lt.pairs = er, Lt.partial = Io, Lt.partialRight = xo, Lt.partition = ho, Lt.pick = Uo, Lt.pluck = ei, Lt.property = jr, Lt.propertyOf = Pr, Lt.pull = Mn, Lt.pullAt = Gs, Lt.range = Rr, Lt.rearg = Mo, Lt.reject = ai, Lt.remove = On, Lt.rest = Sn, Lt.restParam = _i, Lt.set = nr, Lt.shuffle = ii, Lt.slice = Yn, Lt.sortBy = oi, Lt.sortByAll = fo, Lt.sortByOrder = li, Lt.spread = vi, Lt.take = Tn, Lt.takeRight = jn, Lt.takeRightWhile = Pn, Lt.takeWhile = Rn, Lt.tap = Wn,Lt.throttle = Di,Lt.thru = qn,Lt.times = Ar,Lt.toArray = Gi,Lt.toPlainObject = zi,Lt.transform = ir,Lt.union = Qs,Lt.uniq = An,Lt.unzip = En,Lt.unzipWith = Ln,Lt.values = rr,Lt.valuesIn = sr,Lt.where = ci,Lt.without = Zs,Lt.wrap = yi,Lt.xor = Nn,Lt.zip = Js,Lt.zipObject = Fn,Lt.zipWith = Xs,Lt.backflow = Co,Lt.collect = ti,Lt.compose = Co,Lt.each = ro,Lt.eachRight = so,Lt.extend = Yo,Lt.iteratee = $r,Lt.methods = Qi,Lt.object = Fn,Lt.select = Zn,Lt.tail = Sn,Lt.unique = An,Sr(Lt, Lt),Lt.add = Lr,Lt.attempt = Zo,Lt.camelCase = Bo,Lt.capitalize = cr,Lt.ceil = tl,Lt.clone = ki,Lt.cloneDeep = bi,Lt.deburr = dr,Lt.endsWith = hr,Lt.escape = ur,Lt.escapeRegExp = pr,Lt.every = Qn,Lt.find = no,Lt.findIndex = Us,Lt.findKey = Po,Lt.findLast = io,Lt.findLastIndex = Bs,Lt.findLastKey = Ro,Lt.findWhere = Jn,Lt.first = kn,Lt.floor = el,Lt.get = Zi,Lt.gt = wi,Lt.gte = Ci,Lt.has = Ji,Lt.identity = xr,Lt.includes = Xn,Lt.indexOf = Cn,Lt.inRange = or,Lt.isArguments = $i,Lt.isArray = Oo,Lt.isBoolean = Ii,Lt.isDate = xi,Lt.isElement = Mi,Lt.isEmpty = Oi,Lt.isEqual = Si,Lt.isError = Yi,Lt.isFinite = Ti,Lt.isFunction = ji,Lt.isMatch = Ri,Lt.isNaN = Ai,Lt.isNative = Ei,Lt.isNull = Li,Lt.isNumber = Ni,Lt.isObject = Pi,Lt.isPlainObject = Fi,Lt.isRegExp = Hi,Lt.isString = Wi,Lt.isTypedArray = qi,Lt.isUndefined = Ui,Lt.kebabCase = Vo,Lt.last = In,Lt.lastIndexOf = xn,Lt.lt = Bi,Lt.lte = Vi,Lt.max = al,Lt.min = nl,Lt.noConflict = Yr,Lt.noop = Tr,Lt.now = mo,Lt.pad = fr,Lt.padLeft = Go,Lt.padRight = zo,Lt.parseInt = mr,Lt.random = lr,Lt.reduce = uo,Lt.reduceRight = po,Lt.repeat = gr,Lt.result = ar,Lt.round = il,Lt.runInContext = k,Lt.size = ri,Lt.snakeCase = Ko,Lt.some = si,Lt.sortedIndex = zs,Lt.sortedLastIndex = Ks,Lt.startCase = Qo,Lt.startsWith = _r,Lt.sum = Nr,Lt.template = vr,Lt.trim = Dr,Lt.trimLeft = yr,Lt.trimRight = kr,Lt.trunc = br,Lt.unescape = wr,Lt.uniqueId = Er,Lt.words = Cr,Lt.all = Qn,Lt.any = si,Lt.contains = Xn,Lt.eq = Si,Lt.detect = no,Lt.foldl = uo,Lt.foldr = po,Lt.head = kn,Lt.include = Xn,Lt.inject = uo,Sr(Lt, function () {
            var t = {};
            return Ye(Lt, function (e, a) {
                Lt.prototype[a] || (t[a] = e)
            }), t
        }(), !1),Lt.sample = ni,Lt.prototype.sample = function (t) {
            return this.__chain__ || null != t ? this.thru(function (e) {
                return ni(e, t)
            }) : ni(this.value())
        },Lt.VERSION = w,ne(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
            Lt[t].placeholder = Lt
        }),ne(["drop", "take"], function (t, e) {
            Ht.prototype[t] = function (a) {
                var n = this.__filtered__;
                if (n && !e)return new Ht(this);
                a = null == a ? 1 : ks(_s(a) || 0, 0);
                var i = this.clone();
                return n ? i.__takeCount__ = bs(i.__takeCount__, a) : i.__views__.push({
                    size: a,
                    type: t + (i.__dir__ < 0 ? "Right" : "")
                }), i
            }, Ht.prototype[t + "Right"] = function (e) {
                return this.reverse()[t](e).reverse()
            }
        }),ne(["filter", "map", "takeWhile"], function (t, e) {
            var a = e + 1, n = a != N;
            Ht.prototype[t] = function (t, e) {
                var i = this.clone();
                return i.__iteratees__.push({iteratee: Fa(t, e, 1), type: a}), i.__filtered__ = i.__filtered__ || n, i
            }
        }),ne(["first", "last"], function (t, e) {
            var a = "take" + (e ? "Right" : "");
            Ht.prototype[t] = function () {
                return this[a](1).value()[0]
            }
        }),ne(["initial", "rest"], function (t, e) {
            var a = "drop" + (e ? "" : "Right");
            Ht.prototype[t] = function () {
                return this.__filtered__ ? new Ht(this) : this[a](1)
            }
        }),ne(["pluck", "where"], function (t, e) {
            var a = e ? "filter" : "map", n = e ? Ne : jr;
            Ht.prototype[t] = function (t) {
                return this[a](n(t))
            }
        }),Ht.prototype.compact = function () {
            return this.filter(xr)
        },Ht.prototype.reject = function (t, e) {
            return t = Fa(t, e, 1), this.filter(function (e) {
                return !t(e)
            })
        },Ht.prototype.slice = function (t, e) {
            t = null == t ? 0 : +t || 0;
            var a = this;
            return a.__filtered__ && (t > 0 || e < 0) ? new Ht(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), e !== b && (e = +e || 0, a = e < 0 ? a.dropRight(-e) : a.take(e - t)), a)
        },Ht.prototype.takeRightWhile = function (t, e) {
            return this.reverse().takeWhile(t, e).reverse()
        },Ht.prototype.toArray = function () {
            return this.take(xs)
        },Ye(Ht.prototype, function (t, e) {
            var a = /^(?:filter|map|reject)|While$/.test(e), n = /^(?:first|last)$/.test(e), i = Lt[n ? "take" + ("last" == e ? "Right" : "") : e];
            i && (Lt.prototype[e] = function () {
                var e = n ? [1] : arguments, r = this.__chain__, s = this.__wrapped__, o = !!this.__actions__.length, l = s instanceof Ht, c = e[0], d = l || Oo(s);
                d && a && "function" == typeof c && 1 != c.length && (l = d = !1);
                var h = function (t) {
                    return n && r ? i(t, 1)[0] : i.apply(b, ce([t], e))
                }, u = {func: qn, args: [h], thisArg: b}, p = l && !o;
                if (n && !r)return p ? (s = s.clone(), s.__actions__.push(u), t.call(s)) : i.call(b, this.value())[0];
                if (!n && d) {
                    s = p ? s : new Ht(this);
                    var f = t.apply(s, e);
                    return f.__actions__.push(u), new Ft(f, r)
                }
                return this.thru(h)
            })
        }),ne(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
            var e = (/^(?:replace|split)$/.test(t) ? Jr : Qr)[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", n = /^(?:join|pop|replace|shift)$/.test(t);
            Lt.prototype[t] = function () {
                var t = arguments;
                return n && !this.__chain__ ? e.apply(this.value(), t) : this[a](function (a) {
                    return e.apply(a, t)
                })
            }
        }),Ye(Ht.prototype, function (t, e) {
            var a = Lt[e];
            if (a) {
                var n = a.name + "";
                (js[n] || (js[n] = [])).push({name: e, func: a})
            }
        }),js[Ya(b, $).name] = [{
            name: "wrapper",
            func: b
        }],Ht.prototype.clone = Wt,Ht.prototype.reverse = qt,Ht.prototype.value = Ut,Lt.prototype.chain = Un,Lt.prototype.commit = Bn,Lt.prototype.concat = to,Lt.prototype.plant = Vn,Lt.prototype.reverse = Gn,Lt.prototype.toString = zn,Lt.prototype.run = Lt.prototype.toJSON = Lt.prototype.valueOf = Lt.prototype.value = Kn,Lt.prototype.collect = Lt.prototype.map,Lt.prototype.head = Lt.prototype.first,Lt.prototype.select = Lt.prototype.filter,Lt.prototype.tail = Lt.prototype.rest,Lt
    }

    var b, w = "3.10.1", C = 1, $ = 2, I = 4, x = 8, M = 16, O = 32, S = 64, Y = 128, T = 256, j = 30, P = "...", R = 150, A = 16, E = 200, L = 1, N = 2, F = "Expected a function", H = "__lodash_placeholder__", W = "[object Arguments]", q = "[object Array]", U = "[object Boolean]", B = "[object Date]", V = "[object Error]", G = "[object Function]", z = "[object Number]", K = "[object Object]", Q = "[object RegExp]", Z = "[object String]", J = "[object ArrayBuffer]", X = "[object Float32Array]", tt = "[object Float64Array]", et = "[object Int8Array]", at = "[object Int16Array]", nt = "[object Int32Array]", it = "[object Uint8Array]", rt = "[object Uint8ClampedArray]", st = "[object Uint16Array]", ot = "[object Uint32Array]", lt = /\b__p \+= '';/g, ct = /\b(__p \+=) '' \+/g, dt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ht = /&(?:amp|lt|gt|quot|#39|#96);/g, ut = /[&<>"'`]/g, pt = RegExp(ht.source), ft = RegExp(ut.source), mt = /<%-([\s\S]+?)%>/g, gt = /<%([\s\S]+?)%>/g, _t = /<%=([\s\S]+?)%>/g, vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, Dt = /^\w*$/, yt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, kt = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, bt = RegExp(kt.source), wt = /[\u0300-\u036f\ufe20-\ufe23]/g, Ct = /\\(\\)?/g, $t = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, It = /\w*$/, xt = /^0[xX]/, Mt = /^\[object .+?Constructor\]$/, Ot = /^\d+$/, St = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Yt = /($^)/, Tt = /['\n\r\u2028\u2029\\]/g, jt = function () {
        var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
        return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
    }(), Pt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"], Rt = -1, At = {};
    At[X] = At[tt] = At[et] = At[at] = At[nt] = At[it] = At[rt] = At[st] = At[ot] = !0, At[W] = At[q] = At[J] = At[U] = At[B] = At[V] = At[G] = At["[object Map]"] = At[z] = At[K] = At[Q] = At["[object Set]"] = At[Z] = At["[object WeakMap]"] = !1;
    var Et = {};
    Et[W] = Et[q] = Et[J] = Et[U] = Et[B] = Et[X] = Et[tt] = Et[et] = Et[at] = Et[nt] = Et[z] = Et[K] = Et[Q] = Et[Z] = Et[it] = Et[rt] = Et[st] = Et[ot] = !0, Et[V] = Et[G] = Et["[object Map]"] = Et["[object Set]"] = Et["[object WeakMap]"] = !1;
    var Lt = {
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss"
    }, Nt = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, Ft = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }, Ht = {function: !0, object: !0}, Wt = {
        0: "x30",
        1: "x31",
        2: "x32",
        3: "x33",
        4: "x34",
        5: "x35",
        6: "x36",
        7: "x37",
        8: "x38",
        9: "x39",
        A: "x41",
        B: "x42",
        C: "x43",
        D: "x44",
        E: "x45",
        F: "x46",
        a: "x61",
        b: "x62",
        c: "x63",
        d: "x64",
        e: "x65",
        f: "x66",
        n: "x6e",
        r: "x72",
        t: "x74",
        u: "x75",
        v: "x76",
        x: "x78"
    }, qt = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, Ut = Ht[typeof exports] && exports && !exports.nodeType && exports, Bt = Ht[typeof module] && module && !module.nodeType && module, Vt = Ut && Bt && "object" == typeof global && global && global.Object && global, Gt = Ht[typeof self] && self && self.Object && self, zt = Ht[typeof window] && window && window.Object && window, Kt = Bt && Bt.exports === Ut && Ut, Qt = Vt || zt !== (this && this.window) && zt || Gt || this, Zt = k();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Qt._ = Zt, define(function () {
        return Zt
    })) : Ut && Bt ? Kt ? (Bt.exports = Zt)._ = Zt : Ut._ = Zt : Qt._ = Zt
}).call(this), function (t) {
    void 0 === t.cookie && (t.cookie = function (e, a, n) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(a)) || null === a || void 0 === a)) {
            if (n = t.extend({}, n), (null === a || void 0 === a) && (n.expires = -1), "number" == typeof n.expires) {
                var i = n.expires, r = n.expires = new Date;
                r.setDate(r.getDate() + i)
            }
            return a = String(a), document.cookie = [encodeURIComponent(e), "=", n.raw ? a : encodeURIComponent(a), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        n = a || {};
        for (var s, o = n.raw ? function (t) {
            return t
        } : decodeURIComponent, l = document.cookie.split("; "), c = 0; s = l[c] && l[c].split("="); c++)if (o(s[0]) === e)return o(s[1] || "");
        return null
    })
}(jQuery), function (t, e) {
    function a(e, a) {
        var i, r, s, o = e.nodeName.toLowerCase();
        return "area" === o ? (i = e.parentNode, r = i.name, !(!e.href || !r || "map" !== i.nodeName.toLowerCase()) && (!!(s = t("img[usemap=#" + r + "]")[0]) && n(s))) : (/input|select|textarea|button|object/.test(o) ? !e.disabled : "a" === o ? e.href || a : a) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
                return "hidden" === t.css(this, "visibility")
            }).length
    }

    var i = 0, r = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function (e) {
            return function (a, n) {
                return "number" == typeof a ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), n && n.call(e)
                    }, a)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus), scrollParent: function () {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        }, zIndex: function (a) {
            if (a !== e)return this.css("zIndex", a);
            if (this.length)for (var n, i, r = t(this[0]); r.length && r[0] !== document;) {
                if (("absolute" === (n = r.css("position")) || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), !isNaN(i) && 0 !== i))return i;
                r = r.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++i)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                r.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (a) {
                return !!t.data(a, e)
            }
        }) : function (e, a, n) {
            return !!t.data(e, n[3])
        }, focusable: function (e) {
            return a(e, !isNaN(t.attr(e, "tabindex")))
        }, tabbable: function (e) {
            var n = t.attr(e, "tabindex"), i = isNaN(n);
            return (i || n >= 0) && a(e, !i)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (a, n) {
        function i(e, a, n, i) {
            return t.each(r, function () {
                a -= parseFloat(t.css(e, "padding" + this)) || 0, n && (a -= parseFloat(t.css(e, "border" + this + "Width")) || 0), i && (a -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), a
        }

        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], s = n.toLowerCase(), o = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function (a) {
            return a === e ? o["inner" + n].call(this) : this.each(function () {
                t(this).css(s, i(this, a) + "px")
            })
        }, t.fn["outer" + n] = function (e, a) {
            return "number" != typeof e ? o["outer" + n].call(this, e) : this.each(function () {
                t(this).css(s, i(this, e, !0, a) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (a) {
            return arguments.length ? e.call(this, t.camelCase(a)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart"in document.createElement("div"), t.fn.extend({
        disableSelection: function () {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function (e, a, n) {
                var i, r = t.ui[e].prototype;
                for (i in n)r.plugins[i] = r.plugins[i] || [], r.plugins[i].push([a, n[i]])
            }, call: function (t, e, a) {
                var n, i = t.plugins[e];
                if (i && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)for (n = 0; i.length > n; n++)t.options[i[n][0]] && i[n][1].apply(t.element, a)
            }
        }, hasScroll: function (e, a) {
            if ("hidden" === t(e).css("overflow"))return !1;
            var n = a && "left" === a ? "scrollLeft" : "scrollTop", i = !1;
            return e[n] > 0 || (e[n] = 1, i = e[n] > 0, e[n] = 0, i)
        }
    })
}(jQuery), function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "关闭",
            prevText: "&#x3c;上月",
            nextText: "下月&#x3e;",
            currentText: "今天",
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader: "周",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1,
            fromobject: !1,
            toobject: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.bind("mouseout", function (t) {
            var a = $(t.target).closest(e);
            a.length && a.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (a) {
            var n = $(a.target).closest(e);
            !$.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) && n.length && (n.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n.addClass("ui-state-hover"), n.hasClass("ui-datepicker-prev") && n.addClass("ui-datepicker-prev-hover"), n.hasClass("ui-datepicker-next") && n.addClass("ui-datepicker-next-hover"))
        })
    }

    function extendRemove(t, e) {
        $.extend(t, e);
        for (var a in e)null != e[a] && e[a] != undefined || (t[a] = e[a]);
        return t
    }

    function isArray(t) {
        return t && ($.browser.safari && "object" == typeof t && t.length || t.constructor && t.constructor.toString().match(/\Array\(\)/))
    }

    $.extend($.ui, {datepicker: {version: "1.8.18"}});
    var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return extendRemove(this._defaults, t || {}), this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (t) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function (t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, e) {
            var a = $(t);
            e.append = $([]), e.trigger = $([]), a.hasClass(this.markerClassName) || (this._attachments(a, e), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (t, a, n) {
                e.settings[a] = n
            }).bind("getData.datepicker", function (t, a) {
                return this._get(e, a)
            }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, e) {
            var a = this._get(e, "appendText"), n = this._get(e, "isRTL");
            e.append && e.append.remove(), a && (e.append = $('<span class="' + this._appendClass + '">' + a + "</span>"), t[n ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
            var i = this._get(e, "showOn");
            if ("focus" != i && "both" != i || t.focus(this._showDatepicker), "button" == i || "both" == i) {
                var r = this._get(e, "buttonText"), s = this._get(e, "buttonImage");
                e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: r,
                    title: r
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == s ? r : $("<img/>").attr({
                    src: s,
                    alt: r,
                    title: r
                }))), t[n ? "before" : "after"](e.trigger), e.trigger.click(function () {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                })
            }
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                if (a.match(/[DM]/)) {
                    var n = function (t) {
                        for (var e = 0, a = 0, n = 0; n < t.length; n++)t[n].length > e && (e = t[n].length, a = n);
                        return a
                    };
                    e.setMonth(n(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(n(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                }
                t.input.attr("size", this._formatDate(t, e).length)
            }
        },
        _inlineDatepicker: function (t, e) {
            var a = $(t);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function (t, a, n) {
                e.settings[a] = n
            }).bind("getData.datepicker", function (t, a) {
                return this._get(e, a)
            }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, e, a, n, i) {
            var r = this._dialogInst;
            if (!r) {
                this.uuid += 1;
                var s = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + s + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), r = this._dialogInst = this._newInst(this._dialogInput, !1), r.settings = {}, $.data(this._dialogInput[0], PROP_NAME, r)
            }
            if (extendRemove(r.settings, n || {}), e = e && e.constructor == Date ? this._formatDate(r, e) : e, this._dialogInput.val(e), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null, !this._pos) {
                var o = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [o / 2 - 100 + c, l / 2 - 150 + d]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), r.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, r), this
        },
        _destroyDatepicker: function (t) {
            var e = $(t), a = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var n = t.nodeName.toLowerCase();
                $.removeData(t, PROP_NAME), "input" == n ? (a.append.remove(), a.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" != n && "span" != n || e.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (t) {
            var e = $(t), a = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var n = t.nodeName.toLowerCase();
                if ("input" == n)t.disabled = !1, a.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({opacity: "1.0", cursor: ""}); else if ("div" == n || "span" == n) {
                    var i = e.children("." + this._inlineClass);
                    i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function (e) {
                    return e == t ? null : e
                })
            }
        },
        _disableDatepicker: function (t) {
            var e = $(t), a = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var n = t.nodeName.toLowerCase();
                if ("input" == n)t.disabled = !0, a.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({opacity: "0.5", cursor: "default"}); else if ("div" == n || "span" == n) {
                    var i = e.children("." + this._inlineClass);
                    i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function (e) {
                    return e == t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t
            }
        },
        _isDisabledDatepicker: function (t) {
            if (!t)return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)if (this._disabledInputs[e] == t)return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return $.data(t, PROP_NAME)
            } catch (t) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, e, a) {
            var n = this._getInst(t);
            if (2 == arguments.length && "string" == typeof e)return "defaults" == e ? $.extend({}, $.datepicker._defaults) : n ? "all" == e ? $.extend({}, n.settings) : this._get(n, e) : null;
            var i = e || {};
            if ("string" == typeof e && (i = {}, i[e] = a), n) {
                this._curInst == n && this._hideDatepicker();
                var r = this._getDateDatepicker(t, !0), s = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max");
                extendRemove(n.settings, i), null !== s && i.dateFormat !== undefined && i.minDate === undefined && (n.settings.minDate = this._formatDate(n, s)), null !== o && i.dateFormat !== undefined && i.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, o)), this._attachments($(t), n), this._autoSize(n), this._setDate(n, r), this._updateAlternate(n), this._updateDatepicker(n)
            }
        },
        _changeDatepicker: function (t, e, a) {
            this._optionDatepicker(t, e, a)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var a = this._getInst(t);
            a && (this._setDate(a, e), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function (t, e) {
            var a = this._getInst(t);
            return a && !a.inline && this._setDateFromField(a, e), a ? this._getDate(a) : null
        },
        _doKeyDown: function (t) {
            var e = $.datepicker._getInst(t.target), a = !0, n = e.dpDiv.is(".ui-datepicker-rtl");
            if (e._keyEvent = !0, $.datepicker._datepickerShowing)switch (t.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                    i[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, i[0]);
                    var r = $.datepicker._get(e, "onSelect");
                    if (r) {
                        var s = $.datepicker._formatDate(e);
                        r.apply(e.input ? e.input[0] : null, [s, e])
                    } else $.datepicker._hideDatepicker();
                    return !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), a = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), a = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? 1 : -1, "D"), a = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), a = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? -1 : 1, "D"), a = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), a = t.ctrlKey || t.metaKey;
                    break;
                default:
                    a = !1
            } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : a = !1;
            a && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var e = $.datepicker._getInst(t.target);
            if ($.datepicker._get(e, "constrainInput")) {
                var a = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")), n = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                return t.ctrlKey || t.metaKey || n < " " || !a || a.indexOf(n) > -1
            }
        },
        _doKeyUp: function (t) {
            var e = $.datepicker._getInst(t.target);
            if (e.input.val() != e.lastVal)try {
                $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e)) && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
            } catch (t) {
                $.datepicker.log(t)
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                var e = $.datepicker._getInst(t);
                $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var a = $.datepicker._get(e, "beforeShow"), n = a ? a.apply(t, [t, e]) : {};
                if (!1 !== n) {
                    extendRemove(e.settings, n), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                    var i = !1;
                    $(t).parents().each(function () {
                        return !(i |= "fixed" == $(this).css("position"))
                    }), i && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                    var r = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
                    if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), $.datepicker._updateDatepicker(e), r = $.datepicker._checkOffset(e, r, i), e.dpDiv.css({
                            position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
                            display: "none",
                            left: r.left + "px",
                            top: r.top + "px"
                        }), !e.inline) {
                        var s = $.datepicker._get(e, "showAnim"), o = $.datepicker._get(e, "duration"), l = function () {
                            var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                            if (t.length) {
                                var a = $.datepicker._getBorders(e.dpDiv);
                                t.css({
                                    left: -a[0],
                                    top: -a[1],
                                    width: e.dpDiv.outerWidth(),
                                    height: e.dpDiv.outerHeight()
                                })
                            }
                        };
                        e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[s] ? e.dpDiv.show(s, $.datepicker._get(e, "showOptions"), o, l) : e.dpDiv[s || "show"](s ? o : null, l), s && o || l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                    }
                }
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4;
            var e = $.datepicker._getBorders(t.dpDiv);
            instActive = t, t.dpDiv.empty().append(this._generateHTML(t));
            var a = t.dpDiv.find("iframe.ui-datepicker-cover");
            a.length && a.css({
                left: -e[0],
                top: -e[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var n = this._getNumberOfMonths(t), i = n[1];
            if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", 218 * i + 10 * (i - 1) + "px"), t.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                var r = t.yearshtml;
                setTimeout(function () {
                    r === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), r = t.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (t) {
            var e = function (t) {
                return {thin: 1, medium: 2, thick: 3}[t] || t
            };
            return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
        },
        _checkOffset: function (t, e, a) {
            var n = t.dpDiv.outerWidth(), i = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, s = t.input ? t.input.outerHeight() : 0, o = document.documentElement.clientWidth + $(document).scrollLeft(), l = document.documentElement.clientHeight + $(document).scrollTop();
            return e.left -= this._get(t, "isRTL") ? n - r : 0, e.left -= a && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= a && e.top == t.input.offset().top + s ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > o && o > n ? Math.abs(e.left + n - o) : 0), e.top -= Math.min(e.top, e.top + i > l && l > i ? Math.abs(i + s) : 0), e
        },
        _findPos: function (t) {
            for (var e = this._getInst(t), a = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));)t = t[a ? "previousSibling" : "nextSibling"];
            var n = $(t).offset();
            return [n.left, n.top]
        },
        _hideDatepicker: function (t) {
            var e = this._curInst;
            if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                var a = this._get(e, "showAnim"), n = this._get(e, "duration"), i = this, r = function () {
                    $.datepicker._tidyDialog(e), i._curInst = null
                };
                $.effects && $.effects[a] ? e.dpDiv.hide(a, $.datepicker._get(e, "showOptions"), n, r) : e.dpDiv["slideDown" == a ? "slideUp" : "fadeIn" == a ? "fadeOut" : "hide"](a ? n : null, r), a || r(), this._datepickerShowing = !1;
                var s = this._get(e, "onClose");
                s && s.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if ($.datepicker._curInst) {
                var e = $(t.target), a = $.datepicker._getInst(e[0]);
                (e[0].id == $.datepicker._mainDivId || 0 != e.parents("#" + $.datepicker._mainDivId).length || e.hasClass($.datepicker.markerClassName) || e.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!e.hasClass($.datepicker.markerClassName) || $.datepicker._curInst == a) || $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, e, a) {
            var n = $(t), i = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(i, e + ("M" == a ? this._get(i, "showCurrentAtPos") : 0), a), this._updateDatepicker(i))
        },
        _gotoToday: function (t) {
            var e = $(t), a = this._getInst(e[0]);
            if (this._get(a, "gotoCurrent") && a.currentDay)a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear; else {
                var n = new Date;
                a.selectedDay = n.getDate(), a.drawMonth = a.selectedMonth = n.getMonth(), a.drawYear = a.selectedYear = n.getFullYear()
            }
            this._notifyChange(a), this._adjustDate(e)
        },
        _selectMonthYear: function (t, e, a) {
            var n = $(t), i = this._getInst(n[0]);
            i["selected" + ("M" == a ? "Month" : "Year")] = i["draw" + ("M" == a ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(n)
        },
        _selectDay: function (t, e, a, n) {
            var i = $(t);
            if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(i[0])) {
                var r = this._getInst(i[0]);
                r.selectedDay = r.currentDay = $("a", n).html(), r.selectedMonth = r.currentMonth = e, r.selectedYear = r.currentYear = a, this._selectDate(t, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear))
            }
        },
        _clearDate: function (t) {
            var e = $(t);
            this._getInst(e[0]);
            this._selectDate(e, "")
        },
        _selectDate: function (t, e) {
            var a = $(t), n = this._getInst(a[0]);
            e = null != e ? e : this._formatDate(n), n.input && n.input.val(e), this._updateAlternate(n);
            var i = this._get(n, "onSelect");
            i ? i.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var e = this._get(t, "altField");
            if (e) {
                var a = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), i = this.formatDate(a, n, this._getFormatConfig(t));
                $(e).each(function () {
                    $(this).val(i)
                })
            }
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && e < 6, ""]
        },
        iso8601Week: function (t) {
            var e = new Date(t.getTime());
            e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var a = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((a - e) / 864e5) / 7) + 1
        },
        parseDate: function (t, e, a) {
            if (null == t || null == e)throw"Invalid arguments";
            if ("" == (e = "object" == typeof e ? e.toString() : e + ""))return null;
            var n = (a ? a.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
            for (var i = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort, r = (a ? a.dayNames : null) || this._defaults.dayNames, s = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort, o = (a ? a.monthNames : null) || this._defaults.monthNames, l = -1, c = -1, d = -1, h = -1, u = !1, p = function (e) {
                var a = v + 1 < t.length && t.charAt(v + 1) == e;
                return a && v++, a
            }, f = function (t) {
                var a = p(t), n = "@" == t ? 14 : "!" == t ? 20 : "y" == t && a ? 4 : "o" == t ? 3 : 2, i = new RegExp("^\\d{1," + n + "}"), r = e.substring(_).match(i);
                if (!r)throw"Missing number at position " + _;
                return _ += r[0].length, parseInt(r[0], 10)
            }, m = function (t, a, n) {
                var i = $.map(p(t) ? n : a, function (t, e) {
                    return [[e, t]]
                }).sort(function (t, e) {
                    return -(t[1].length - e[1].length)
                }), r = -1;
                if ($.each(i, function (t, a) {
                        var n = a[1];
                        if (e.substr(_, n.length).toLowerCase() == n.toLowerCase())return r = a[0], _ += n.length, !1
                    }), -1 != r)return r + 1;
                throw"Unknown name at position " + _
            }, g = function () {
                if (e.charAt(_) != t.charAt(v))throw"Unexpected literal at position " + _;
                _++
            }, _ = 0, v = 0; v < t.length; v++)if (u)"'" != t.charAt(v) || p("'") ? g() : u = !1; else switch (t.charAt(v)) {
                case"d":
                    d = f("d");
                    break;
                case"D":
                    m("D", i, r);
                    break;
                case"o":
                    h = f("o");
                    break;
                case"m":
                    c = f("m");
                    break;
                case"M":
                    c = m("M", s, o);
                    break;
                case"y":
                    l = f("y");
                    break;
                case"@":
                    var D = new Date(f("@"));
                    l = D.getFullYear(), c = D.getMonth() + 1, d = D.getDate();
                    break;
                case"!":
                    var D = new Date((f("!") - this._ticksTo1970) / 1e4);
                    l = D.getFullYear(), c = D.getMonth() + 1, d = D.getDate();
                    break;
                case"'":
                    p("'") ? g() : u = !0;
                    break;
                default:
                    g()
            }
            if (_ < e.length)throw"Extra/unparsed characters found in date: " + e.substring(_);
            if (-1 == l ? l = (new Date).getFullYear() : l < 100 && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l <= n ? 0 : -100)), h > -1)for (c = 1, d = h; ;) {
                var y = this._getDaysInMonth(l, c - 1);
                if (d <= y)break;
                c++, d -= y
            }
            var D = this._daylightSavingAdjust(new Date(l, c - 1, d));
            if (D.getFullYear() != l || D.getMonth() + 1 != c || D.getDate() != d)throw"Invalid date";
            return D
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function (t, e, a) {
            if (!e)return "";
            var n = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort, i = (a ? a.dayNames : null) || this._defaults.dayNames, r = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort, s = (a ? a.monthNames : null) || this._defaults.monthNames, o = function (e) {
                var a = u + 1 < t.length && t.charAt(u + 1) == e;
                return a && u++, a
            }, l = function (t, e, a) {
                var n = "" + e;
                if (o(t))for (; n.length < a;)n = "0" + n;
                return n
            }, c = function (t, e, a, n) {
                return o(t) ? n[e] : a[e]
            }, d = "", h = !1;
            if (e)for (var u = 0; u < t.length; u++)if (h)"'" != t.charAt(u) || o("'") ? d += t.charAt(u) : h = !1; else switch (t.charAt(u)) {
                case"d":
                    d += l("d", e.getDate(), 2);
                    break;
                case"D":
                    d += c("D", e.getDay(), n, i);
                    break;
                case"o":
                    d += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    d += l("m", e.getMonth() + 1, 2);
                    break;
                case"M":
                    d += c("M", e.getMonth(), r, s);
                    break;
                case"y":
                    d += o("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                    break;
                case"@":
                    d += e.getTime();
                    break;
                case"!":
                    d += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    o("'") ? d += "'" : h = !0;
                    break;
                default:
                    d += t.charAt(u)
            }
            return d
        },
        _possibleChars: function (t) {
            for (var e = "", a = !1, n = function (e) {
                var a = i + 1 < t.length && t.charAt(i + 1) == e;
                return a && i++, a
            }, i = 0; i < t.length; i++)if (a)"'" != t.charAt(i) || n("'") ? e += t.charAt(i) : a = !1; else switch (t.charAt(i)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    e += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    n("'") ? e += "'" : a = !0;
                    break;
                default:
                    e += t.charAt(i)
            }
            return e
        },
        _get: function (t, e) {
            return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() != t.lastVal) {
                var a, n, i = this._get(t, "dateFormat"), r = t.lastVal = t.input ? t.input.val() : null;
                a = n = this._getDefaultDate(t);
                var s = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, r, s) || n
                } catch (t) {
                    this.log(t), r = e ? "" : r
                }
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = r ? a.getDate() : 0, t.currentMonth = r ? a.getMonth() : 0, t.currentYear = r ? a.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (t, e, a) {
            var n = null == e || "" === e ? a : "string" == typeof e ? function (e) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                } catch (t) {
                }
                for (var a = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, n = a.getFullYear(), i = a.getMonth(), r = a.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = s.exec(e); o;) {
                    switch (o[2] || "d") {
                        case"d":
                        case"D":
                            r += parseInt(o[1], 10);
                            break;
                        case"w":
                        case"W":
                            r += 7 * parseInt(o[1], 10);
                            break;
                        case"m":
                        case"M":
                            i += parseInt(o[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(n, i));
                            break;
                        case"y":
                        case"Y":
                            n += parseInt(o[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(n, i))
                    }
                    o = s.exec(e)
                }
                return new Date(n, i, r)
            }(e) : "number" == typeof e ? isNaN(e) ? a : function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }(e) : new Date(e.getTime());
            return n = n && "Invalid Date" == n.toString() ? a : n, n && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, a) {
            var n = !e, i = t.selectedMonth, r = t.selectedYear, s = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = s.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth(), t.drawYear = t.selectedYear = t.currentYear = s.getFullYear(), i == t.selectedMonth && r == t.selectedYear || a || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _generateHTML: function (t) {
            var e = new Date;
            e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
            var a = this._get(t, "isRTL"), n = this._get(t, "showButtonPanel"), i = this._get(t, "hideIfNoPrevNext"), r = this._get(t, "navigationAsDateFormat"), s = this._getNumberOfMonths(t), o = this._get(t, "showCurrentAtPos"), l = this._get(t, "stepMonths"), c = 1 != s[0] || 1 != s[1], d = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), h = this._getMinMaxDate(t, "min"), u = this._getMinMaxDate(t, "max"), p = t.drawMonth - o, f = t.drawYear;
            if (p < 0 && (p += 12, f--), u) {
                var m = this._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - s[0] * s[1] + 1, u.getDate()));
                for (m = h && m < h ? h : m; this._daylightSavingAdjust(new Date(f, p, 1)) > m;)--p < 0 && (p = 11, f--)
            }
            t.drawMonth = p, t.drawYear = f;
            var g = this._get(t, "prevText");
            g = r ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : g;
            var _ = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + t.id + "', -" + l + ", 'M');\" title=\"" + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "e" : "w") + '">' + g + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "e" : "w") + '">' + g + "</span></a>", v = this._get(t, "nextText");
            v = r ? this.formatDate(v, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : v;
            var D = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + t.id + "', +" + l + ", 'M');\" title=\"" + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "w" : "e") + '">' + v + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (a ? "w" : "e") + '">' + v + "</span></a>", y = this._get(t, "currentText"), k = this._get(t, "gotoCurrent") && t.currentDay ? d : e;
            y = r ? this.formatDate(y, k, this._getFormatConfig(t)) : y;
            var b = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(t, "closeText") + "</button>", w = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (a ? b : "") + (this._isInRange(t, k) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + t.id + "');\">" + y + "</button>" : "") + (a ? "" : b) + "</div>" : "", C = parseInt(this._get(t, "firstDay"), 10);
            C = isNaN(C) ? 0 : C;
            var I = this._get(t, "showWeek"), x = this._get(t, "dayNames"), M = (this._get(t, "dayNamesShort"), this._get(t, "dayNamesMin")), O = this._get(t, "monthNames"), S = this._get(t, "monthNamesShort"), Y = this._get(t, "beforeShowDay"), T = this._get(t, "showOtherMonths"), j = this._get(t, "selectOtherMonths"), P = (this._get(t, "calculateWeek") || this.iso8601Week, this._getDefaultDate(t)), R = "";
            if (0 != this._get(t, "fromobject") && 0 != this._get(t, "toobject"))var A = $("#" + this._get(t, "fromobject")).datepicker("getDate"), E = $("#" + this._get(t, "toobject")).datepicker("getDate");
            for (var L = 0; L < s[0]; L++) {
                var N = "";
                this.maxRows = 4;
                for (var F = 0; F < s[1]; F++) {
                    var H = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)), W = " ui-corner-all", q = "";
                    if (c) {
                        if (q += '<div class="ui-datepicker-group', s[1] > 1)switch (F) {
                            case 0:
                                q += " ui-datepicker-group-first", W = " ui-corner-" + (a ? "right" : "left");
                                break;
                            case s[1] - 1:
                                q += " ui-datepicker-group-last", W = " ui-corner-" + (a ? "left" : "right");
                                break;
                            default:
                                q += " ui-datepicker-group-middle", W = ""
                        }
                        q += '">'
                    }
                    q += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + W + '">' + (/all|left/.test(W) && 0 == L ? a ? D : _ : "") + (/all|right/.test(W) && 0 == L ? a ? _ : D : "") + this._generateMonthYearHeader(t, p, f, h, u, L > 0 || F > 0, O, S) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    for (var U = I ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", B = 0; B < 7; B++) {
                        var V = (B + C) % 7;
                        U += "<th" + ((B + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + x[V] + '">' + M[V] + "</span></th>"
                    }
                    q += U + "</tr></thead><tbody>";
                    var G = this._getDaysInMonth(f, p);
                    f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, G));
                    var z = (this._getFirstDayOfMonth(f, p) - C + 7) % 7, K = Math.ceil((z + G) / 7), Q = c && this.maxRows > K ? this.maxRows : K;
                    this.maxRows = Q;
                    for (var Z = this._daylightSavingAdjust(new Date(f, p, 1 - z)), J = 0; J < Q; J++) {
                        q += "<tr>";
                        for (var X = I ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(Z) + "</td>" : "", B = 0; B < 7; B++) {
                            var tt = Y ? Y.apply(t.input ? t.input[0] : null, [Z]) : [!0, ""], et = Z.getMonth() != p, at = et && !j || !tt[0] || h && Z < h || u && Z > u;
                            X += '<td class="' + ((B + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (et ? " ui-datepicker-other-month" : "") + (Z.getTime() == H.getTime() && p == t.selectedMonth && t._keyEvent || P.getTime() == Z.getTime() && P.getTime() == H.getTime() ? " " + this._dayOverClass : "") + (at ? " " + this._unselectableClass + " ui-state-disabled" : "") + (et && !T ? "" : " " + tt[1] + (Z.getTime() == d.getTime() ? " " + this._currentClass : "") + (Z.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (et && !T || !tt[2] ? "" : ' title="' + tt[2] + '"') + (at ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + t.id + "'," + Z.getMonth() + "," + Z.getFullYear() + ', this);return false;"') + ">" + (et && !T ? "&#xa0;" : at ? '<span class="ui-state-default' + (null != A && Z.getTime() == A.getTime() && dtplus.type == this._get(t, "toobject") ? " ui-state-active" : "") + '">' + Z.getDate() + "</span>" : '<a v="' + parseInt(Z.getMonth() + 1) + "," + Z.getDate() + "," + Z.getFullYear() + '" class="ui-state-default' + (Z.getTime() == e.getTime() ? " ui-state-highlight" : "") + (null != A && null != E && Z.getTime() > A.getTime() && Z.getTime() < E.getTime() && dtplus.type == this._get(t, "toobject") ? " ui-state-space" : "") + (Z.getTime() == d.getTime() || null != A && Z.getTime() == A.getTime() ? " ui-state-active" : "") + (et ? " ui-priority-secondary" : "") + '" href="#">' + Z.getDate() + "</a>") + "</td>", Z.setDate(Z.getDate() + 1), Z = this._daylightSavingAdjust(Z)
                        }
                        q += X + "</tr>"
                    }
                    p++, p > 11 && (p = 0, f++), q += "</tbody></table>" + (c ? "</div>" + (s[0] > 0 && F == s[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), N += q
                }
                R += N
            }
            return R += w + ($.browser && $.browser.msie && parseInt($.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, R
        },
        _generateMonthYearHeader: function (t, e, a, n, i, r, s, o) {
            var l = this._get(t, "changeMonth"), c = this._get(t, "changeYear"), d = this._get(t, "showMonthAfterYear"), h = '<div class="ui-datepicker-title">', u = "";
            if (r || !l)u += '<span class="ui-datepicker-month">' + s[e] + "</span>"; else {
                var p = n && n.getFullYear() == a, f = i && i.getFullYear() == a;
                u += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + t.id + "', this, 'M');\" >";
                for (var m = 0; m < 12; m++)(!p || m >= n.getMonth()) && (!f || m <= i.getMonth()) && (u += '<option value="' + m + '"' + (m == e ? ' selected="selected"' : "") + ">" + o[m] + "</option>");
                u += "</select>"
            }
            if (d || (h += u + (!r && l && c ? "" : "&#xa0;")), !t.yearshtml)if (t.yearshtml = "", r || !c)h += '<span class="ui-datepicker-year">' + a + "</span>"; else {
                var g = this._get(t, "yearRange").split(":"), _ = (new Date).getFullYear(), v = function (t) {
                    var e = t.match(/c[+-].*/) ? a + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? _ + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? _ : e
                }, D = v(g[0]), y = Math.max(D, v(g[1] || ""));
                for (D = n ? Math.max(D, n.getFullYear()) : D, y = i ? Math.min(y, i.getFullYear()) : y, t.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + t.id + "', this, 'Y');\" >"; D <= y; D++)t.yearshtml += '<option value="' + D + '"' + (D == a ? ' selected="selected"' : "") + ">" + D + "</option>";
                t.yearshtml += "</select>", h += t.yearshtml, t.yearshtml = null
            }
            return h += this._get(t, "yearSuffix"), d && (h += (!r && l && c ? "" : "&#xa0;") + u), h += "</div>"
        },
        _adjustInstDate: function (t, e, a) {
            var n = t.drawYear + ("Y" == a ? e : 0), i = t.drawMonth + ("M" == a ? e : 0), r = Math.min(t.selectedDay, this._getDaysInMonth(n, i)) + ("D" == a ? e : 0), s = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, i, r)));
            t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), "M" != a && "Y" != a || this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var a = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), i = a && e < a ? a : e;
            return i = n && i > n ? n : i
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, a, n) {
            var i = this._getNumberOfMonths(t), r = this._daylightSavingAdjust(new Date(a, n + (e < 0 ? e : i[0] * i[1]), 1));
            return e < 0 && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(t, r)
        },
        _isInRange: function (t, e) {
            var a = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max");
            return (!a || e.getTime() >= a.getTime()) && (!n || e.getTime() <= n.getTime())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, a, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var i = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, a, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), i, this._getFormatConfig(t))
        }
    }), $.fn.datepicker = function (t) {
        if (!this.length)return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function () {
            "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
        }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.18", window["DP_jQuery_" + dpuuid] = $
}(jQuery), $(".ui-state-default").on("mouseover", function () {
    dtplus.mover(this)
});
var dtplus = {
    type: "", instance: function (t, e, a, n, i, r) {
        void 0 === r && (r = 2), $("#" + t).datepicker({
            minDate: new Date,
            numberOfMonths: r,
            fromobject: t,
            toobject: e,
            beforeShow: function () {
                dtplus.type = t
            },
            onSelect: function (t) {
                var a = t.replace(/-0/g, "-");
                a = a.split("-"), void 0 == i && (i = 1), a = new Date(parseInt(a[0]), a[1] - 1, parseInt(a[2]) + i), $("#" + e).datepicker("option", "minDate", a)
            },
            onClose: function () {
                void 0 !== a && a()
            }
        }), $("#" + e).datepicker({
            minDate: $("#" + t).datepicker("getDate") ? $("#" + t).datepicker("getDate") : new Date,
            numberOfMonths: r,
            fromobject: t,
            toobject: e,
            beforeShow: function () {
                dtplus.type = e;
                var a = $("#" + t).datepicker("getDate"), n = $("#" + e).datepicker("getDate"), i = 0;
                if (null != a && null != n)var i = a.getMonth() != n.getMonth() ? 1 : 0;
                $("#" + e).datepicker("option", "showCurrentAtPos", i)
            },
            onSelect: function (t) {
                void 0 !== n && n()
            }
        })
    }, getdate: function (t) {
        return +new Date($(t).attr("v"))
    }, mover: function (t) {
        if ("to" == dtplus.type) {
            var e = dtplus.getdate(t), a = +$("#from").datepicker("getDate"), n = +$("#to").datepicker("getDate");
            a > 0 && $(".ui-state-default").each(function () {
                var t = dtplus.getdate(this);
                t > a && (t < e || t < n) ? $(this).addClass("ui-state-space") : $(this).removeClass("ui-state-space")
            })
        }
    }, weekstr: function (t) {
        return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][t]
    }
};
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";
    function t() {
        return rn.apply(null, arguments)
    }

    function e(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function a(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function n(t, e) {
        var a, n = [];
        for (a = 0; a < t.length; ++a)n.push(e(t[a], a));
        return n
    }

    function i(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function r(t, e) {
        for (var a in e)i(e, a) && (t[a] = e[a]);
        return i(e, "toString") && (t.toString = e.toString), i(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function s(t, e, a, n) {
        return Pt(t, e, a, n, !0).utc()
    }

    function o() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function l(t) {
        return null == t._pf && (t._pf = o()), t._pf
    }

    function c(t) {
        if (null == t._isValid) {
            var e = l(t), a = sn.call(e.parsedDateParts, function (t) {
                return null != t
            });
            t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && a), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
        }
        return t._isValid
    }

    function d(t) {
        var e = s(NaN);
        return null != t ? r(l(e), t) : l(e).userInvalidated = !0, e
    }

    function h(t) {
        return void 0 === t
    }

    function u(t, e) {
        var a, n, i;
        if (h(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), h(e._i) || (t._i = e._i), h(e._f) || (t._f = e._f), h(e._l) || (t._l = e._l), h(e._strict) || (t._strict = e._strict), h(e._tzm) || (t._tzm = e._tzm), h(e._isUTC) || (t._isUTC = e._isUTC), h(e._offset) || (t._offset = e._offset), h(e._pf) || (t._pf = l(e)), h(e._locale) || (t._locale = e._locale), on.length > 0)for (a in on)n = on[a], i = e[n], h(i) || (t[n] = i);
        return t
    }

    function p(e) {
        u(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), !1 === ln && (ln = !0, t.updateOffset(this), ln = !1)
    }

    function f(t) {
        return t instanceof p || null != t && null != t._isAMomentObject
    }

    function m(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t)
    }

    function g(t) {
        var e = +t, a = 0;
        return 0 !== e && isFinite(e) && (a = m(e)), a
    }

    function _(t, e, a) {
        var n, i = Math.min(t.length, e.length), r = Math.abs(t.length - e.length), s = 0;
        for (n = 0; n < i; n++)(a && t[n] !== e[n] || !a && g(t[n]) !== g(e[n])) && s++;
        return s + r
    }

    function v(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function D(e, a) {
        var n = !0;
        return r(function () {
            return null != t.deprecationHandler && t.deprecationHandler(null, e), n && (v(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), n = !1), a.apply(this, arguments)
        }, a)
    }

    function y(e, a) {
        null != t.deprecationHandler && t.deprecationHandler(e, a), cn[e] || (v(a), cn[e] = !0)
    }

    function k(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function b(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function w(t) {
        var e, a;
        for (a in t)e = t[a], k(e) ? this[a] = e : this["_" + a] = e;
        this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function C(t, e) {
        var a, n = r({}, t);
        for (a in e)i(e, a) && (b(t[a]) && b(e[a]) ? (n[a] = {}, r(n[a], t[a]), r(n[a], e[a])) : null != e[a] ? n[a] = e[a] : delete n[a]);
        return n
    }

    function $(t) {
        null != t && this.set(t)
    }

    function I(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function x(t) {
        for (var e, a, n, i, r = 0; r < t.length;) {
            for (i = I(t[r]).split("-"), e = i.length, a = I(t[r + 1]), a = a ? a.split("-") : null; e > 0;) {
                if (n = M(i.slice(0, e).join("-")))return n;
                if (a && a.length >= e && _(i, a, !0) >= e - 1)break;
                e--
            }
            r++
        }
        return null
    }

    function M(t) {
        var e = null;
        if (!pn[t] && "undefined" != typeof module && module && module.exports)try {
            e = hn._abbr, require("./locale/" + t), O(e)
        } catch (t) {
        }
        return pn[t]
    }

    function O(t, e) {
        var a;
        return t && (a = h(e) ? T(t) : S(t, e)) && (hn = a), hn._abbr
    }

    function S(t, e) {
        return null !== e ? (e.abbr = t, null != pn[t] ? (y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), e = C(pn[t]._config, e)) : null != e.parentLocale && (null != pn[e.parentLocale] ? e = C(pn[e.parentLocale]._config, e) : y("parentLocaleUndefined", "specified parentLocale is not defined yet")), pn[t] = new $(e), O(t), pn[t]) : (delete pn[t], null)
    }

    function Y(t, e) {
        if (null != e) {
            var a;
            null != pn[t] && (e = C(pn[t]._config, e)), a = new $(e), a.parentLocale = pn[t], pn[t] = a, O(t)
        } else null != pn[t] && (null != pn[t].parentLocale ? pn[t] = pn[t].parentLocale : null != pn[t] && delete pn[t]);
        return pn[t]
    }

    function T(t) {
        var a;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return hn;
        if (!e(t)) {
            if (a = M(t))return a;
            t = [t]
        }
        return x(t)
    }

    function j() {
        return dn(pn)
    }

    function P(t, e) {
        var a = t.toLowerCase();
        fn[a] = fn[a + "s"] = fn[e] = t
    }

    function R(t) {
        return "string" == typeof t ? fn[t] || fn[t.toLowerCase()] : void 0
    }

    function A(t) {
        var e, a, n = {};
        for (a in t)i(t, a) && (e = R(a)) && (n[e] = t[a]);
        return n
    }

    function E(e, a) {
        return function (n) {
            return null != n ? (N(this, e, n), t.updateOffset(this, a), this) : L(this, e)
        }
    }

    function L(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function N(t, e, a) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](a)
    }

    function F(t, e) {
        var a;
        if ("object" == typeof t)for (a in t)this.set(a, t[a]); else if (t = R(t), k(this[t]))return this[t](e);
        return this
    }

    function H(t, e, a) {
        var n = "" + Math.abs(t), i = e - n.length;
        return (t >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n
    }

    function W(t, e, a, n) {
        var i = n;
        "string" == typeof n && (i = function () {
            return this[n]()
        }), t && (vn[t] = i), e && (vn[e[0]] = function () {
            return H(i.apply(this, arguments), e[1], e[2])
        }), a && (vn[a] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), t)
        })
    }

    function q(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function U(t) {
        var e, a, n = t.match(mn);
        for (e = 0, a = n.length; e < a; e++)vn[n[e]] ? n[e] = vn[n[e]] : n[e] = q(n[e]);
        return function (e) {
            var i, r = "";
            for (i = 0; i < a; i++)r += n[i]instanceof Function ? n[i].call(e, t) : n[i];
            return r
        }
    }

    function B(t, e) {
        return t.isValid() ? (e = V(e, t.localeData()), _n[e] = _n[e] || U(e), _n[e](t)) : t.localeData().invalidDate()
    }

    function V(t, e) {
        function a(t) {
            return e.longDateFormat(t) || t
        }

        var n = 5;
        for (gn.lastIndex = 0; n >= 0 && gn.test(t);)t = t.replace(gn, a), gn.lastIndex = 0, n -= 1;
        return t
    }

    function G(t, e, a) {
        An[t] = k(e) ? e : function (t, n) {
            return t && a ? a : e
        }
    }

    function z(t, e) {
        return i(An, t) ? An[t](e._strict, e._locale) : new RegExp(K(t))
    }

    function K(t) {
        return Q(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, a, n, i) {
            return e || a || n || i
        }))
    }

    function Q(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Z(t, e) {
        var a, n = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (n = function (t, a) {
            a[e] = g(t)
        }), a = 0; a < t.length; a++)En[t[a]] = n
    }

    function J(t, e) {
        Z(t, function (t, a, n, i) {
            n._w = n._w || {}, e(t, n._w, n, i)
        })
    }

    function X(t, e, a) {
        null != e && i(En, t) && En[t](e, a._a, a, t)
    }

    function tt(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function et(t, a) {
        return e(this._months) ? this._months[t.month()] : this._months[Gn.test(a) ? "format" : "standalone"][t.month()]
    }

    function at(t, a) {
        return e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Gn.test(a) ? "format" : "standalone"][t.month()]
    }

    function nt(t, e, a) {
        var n, i, r, o = t.toLocaleLowerCase();
        if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)r = s([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
        return a ? "MMM" === e ? (i = un.call(this._shortMonthsParse, o), -1 !== i ? i : null) : (i = un.call(this._longMonthsParse, o), -1 !== i ? i : null) : "MMM" === e ? -1 !== (i = un.call(this._shortMonthsParse, o)) ? i : (i = un.call(this._longMonthsParse, o), -1 !== i ? i : null) : -1 !== (i = un.call(this._longMonthsParse, o)) ? i : (i = un.call(this._shortMonthsParse, o), -1 !== i ? i : null)
    }

    function it(t, e, a) {
        var n, i, r;
        if (this._monthsParseExact)return nt.call(this, t, e, a);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (i = s([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === e && this._longMonthsParse[n].test(t))return n;
            if (a && "MMM" === e && this._shortMonthsParse[n].test(t))return n;
            if (!a && this._monthsParse[n].test(t))return n
        }
    }

    function rt(t, e) {
        var a;
        if (!t.isValid())return t
            ;
        if ("string" == typeof e)if (/^\d+$/.test(e))e = g(e); else if ("number" != typeof(e = t.localeData().monthsParse(e)))return t;
        return a = Math.min(t.date(), tt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, a), t
    }

    function st(e) {
        return null != e ? (rt(this, e), t.updateOffset(this, !0), this) : L(this, "Month")
    }

    function ot() {
        return tt(this.year(), this.month())
    }

    function lt(t) {
        return this._monthsParseExact ? (i(this, "_monthsRegex") || dt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function ct(t) {
        return this._monthsParseExact ? (i(this, "_monthsRegex") || dt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex
    }

    function dt() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, a, n = [], i = [], r = [];
        for (e = 0; e < 12; e++)a = s([2e3, e]), n.push(this.monthsShort(a, "")), i.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
        for (n.sort(t), i.sort(t), r.sort(t), e = 0; e < 12; e++)n[e] = Q(n[e]), i[e] = Q(i[e]), r[e] = Q(r[e]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function ht(t) {
        var e, a = t._a;
        return a && -2 === l(t).overflow && (e = a[Nn] < 0 || a[Nn] > 11 ? Nn : a[Fn] < 1 || a[Fn] > tt(a[Ln], a[Nn]) ? Fn : a[Hn] < 0 || a[Hn] > 24 || 24 === a[Hn] && (0 !== a[Wn] || 0 !== a[qn] || 0 !== a[Un]) ? Hn : a[Wn] < 0 || a[Wn] > 59 ? Wn : a[qn] < 0 || a[qn] > 59 ? qn : a[Un] < 0 || a[Un] > 999 ? Un : -1, l(t)._overflowDayOfYear && (e < Ln || e > Fn) && (e = Fn), l(t)._overflowWeeks && -1 === e && (e = Bn), l(t)._overflowWeekday && -1 === e && (e = Vn), l(t).overflow = e), t
    }

    function ut(t) {
        var e, a, n, i, r, s, o = t._i, c = Jn.exec(o) || Xn.exec(o);
        if (c) {
            for (l(t).iso = !0, e = 0, a = ei.length; e < a; e++)if (ei[e][1].exec(c[1])) {
                i = ei[e][0], n = !1 !== ei[e][2];
                break
            }
            if (null == i)return void(t._isValid = !1);
            if (c[3]) {
                for (e = 0, a = ai.length; e < a; e++)if (ai[e][1].exec(c[3])) {
                    r = (c[2] || " ") + ai[e][0];
                    break
                }
                if (null == r)return void(t._isValid = !1)
            }
            if (!n && null != r)return void(t._isValid = !1);
            if (c[4]) {
                if (!ti.exec(c[4]))return void(t._isValid = !1);
                s = "Z"
            }
            t._f = i + (r || "") + (s || ""), xt(t)
        } else t._isValid = !1
    }

    function pt(e) {
        var a = ni.exec(e._i);
        if (null !== a)return void(e._d = new Date(+a[1]));
        ut(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e))
    }

    function ft(t, e, a, n, i, r, s) {
        var o = new Date(t, e, a, n, i, r, s);
        return t < 100 && t >= 0 && isFinite(o.getFullYear()) && o.setFullYear(t), o
    }

    function mt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function gt(t) {
        return _t(t) ? 366 : 365
    }

    function _t(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function vt() {
        return _t(this.year())
    }

    function Dt(t, e, a) {
        var n = 7 + e - a;
        return -(7 + mt(t, 0, n).getUTCDay() - e) % 7 + n - 1
    }

    function yt(t, e, a, n, i) {
        var r, s, o = (7 + a - n) % 7, l = Dt(t, n, i), c = 1 + 7 * (e - 1) + o + l;
        return c <= 0 ? (r = t - 1, s = gt(r) + c) : c > gt(t) ? (r = t + 1, s = c - gt(t)) : (r = t, s = c), {
            year: r,
            dayOfYear: s
        }
    }

    function kt(t, e, a) {
        var n, i, r = Dt(t.year(), e, a), s = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
        return s < 1 ? (i = t.year() - 1, n = s + bt(i, e, a)) : s > bt(t.year(), e, a) ? (n = s - bt(t.year(), e, a), i = t.year() + 1) : (i = t.year(), n = s), {
            week: n,
            year: i
        }
    }

    function bt(t, e, a) {
        var n = Dt(t, e, a), i = Dt(t + 1, e, a);
        return (gt(t) - n + i) / 7
    }

    function wt(t, e, a) {
        return null != t ? t : null != e ? e : a
    }

    function Ct(e) {
        var a = new Date(t.now());
        return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
    }

    function $t(t) {
        var e, a, n, i, r = [];
        if (!t._d) {
            for (n = Ct(t), t._w && null == t._a[Fn] && null == t._a[Nn] && It(t), t._dayOfYear && (i = wt(t._a[Ln], n[Ln]), t._dayOfYear > gt(i) && (l(t)._overflowDayOfYear = !0), a = mt(i, 0, t._dayOfYear), t._a[Nn] = a.getUTCMonth(), t._a[Fn] = a.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e)t._a[e] = r[e] = n[e];
            for (; e < 7; e++)t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[Hn] && 0 === t._a[Wn] && 0 === t._a[qn] && 0 === t._a[Un] && (t._nextDay = !0, t._a[Hn] = 0), t._d = (t._useUTC ? mt : ft).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Hn] = 24)
        }
    }

    function It(t) {
        var e, a, n, i, r, s, o, c;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (r = 1, s = 4, a = wt(e.GG, t._a[Ln], kt(Rt(), 1, 4).year), n = wt(e.W, 1), ((i = wt(e.E, 1)) < 1 || i > 7) && (c = !0)) : (r = t._locale._week.dow, s = t._locale._week.doy, a = wt(e.gg, t._a[Ln], kt(Rt(), r, s).year), n = wt(e.w, 1), null != e.d ? ((i = e.d) < 0 || i > 6) && (c = !0) : null != e.e ? (i = e.e + r, (e.e < 0 || e.e > 6) && (c = !0)) : i = r), n < 1 || n > bt(a, r, s) ? l(t)._overflowWeeks = !0 : null != c ? l(t)._overflowWeekday = !0 : (o = yt(a, n, i, r, s), t._a[Ln] = o.year, t._dayOfYear = o.dayOfYear)
    }

    function xt(e) {
        if (e._f === t.ISO_8601)return void ut(e);
        e._a = [], l(e).empty = !0;
        var a, n, i, r, s, o = "" + e._i, c = o.length, d = 0;
        for (i = V(e._f, e._locale).match(mn) || [], a = 0; a < i.length; a++)r = i[a], n = (o.match(z(r, e)) || [])[0], n && (s = o.substr(0, o.indexOf(n)), s.length > 0 && l(e).unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), d += n.length), vn[r] ? (n ? l(e).empty = !1 : l(e).unusedTokens.push(r), X(r, n, e)) : e._strict && !n && l(e).unusedTokens.push(r);
        l(e).charsLeftOver = c - d, o.length > 0 && l(e).unusedInput.push(o), !0 === l(e).bigHour && e._a[Hn] <= 12 && e._a[Hn] > 0 && (l(e).bigHour = void 0), l(e).parsedDateParts = e._a.slice(0), l(e).meridiem = e._meridiem, e._a[Hn] = Mt(e._locale, e._a[Hn], e._meridiem), $t(e), ht(e)
    }

    function Mt(t, e, a) {
        var n;
        return null == a ? e : null != t.meridiemHour ? t.meridiemHour(e, a) : null != t.isPM ? (n = t.isPM(a), n && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
    }

    function Ot(t) {
        var e, a, n, i, s;
        if (0 === t._f.length)return l(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (i = 0; i < t._f.length; i++)s = 0, e = u({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], xt(e), c(e) && (s += l(e).charsLeftOver, s += 10 * l(e).unusedTokens.length, l(e).score = s, (null == n || s < n) && (n = s, a = e));
        r(t, a || e)
    }

    function St(t) {
        if (!t._d) {
            var e = A(t._i);
            t._a = n([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                return t && parseInt(t, 10)
            }), $t(t)
        }
    }

    function Yt(t) {
        var e = new p(ht(Tt(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function Tt(t) {
        var n = t._i, i = t._f;
        return t._locale = t._locale || T(t._l), null === n || void 0 === i && "" === n ? d({nullInput: !0}) : ("string" == typeof n && (t._i = n = t._locale.preparse(n)), f(n) ? new p(ht(n)) : (e(i) ? Ot(t) : i ? xt(t) : a(n) ? t._d = n : jt(t), c(t) || (t._d = null), t))
    }

    function jt(i) {
        var r = i._i;
        void 0 === r ? i._d = new Date(t.now()) : a(r) ? i._d = new Date(r.valueOf()) : "string" == typeof r ? pt(i) : e(r) ? (i._a = n(r.slice(0), function (t) {
            return parseInt(t, 10)
        }), $t(i)) : "object" == typeof r ? St(i) : "number" == typeof r ? i._d = new Date(r) : t.createFromInputFallback(i)
    }

    function Pt(t, e, a, n, i) {
        var r = {};
        return "boolean" == typeof a && (n = a, a = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = i, r._l = a, r._i = t, r._f = e, r._strict = n, Yt(r)
    }

    function Rt(t, e, a, n) {
        return Pt(t, e, a, n, !1)
    }

    function At(t, a) {
        var n, i;
        if (1 === a.length && e(a[0]) && (a = a[0]), !a.length)return Rt();
        for (n = a[0], i = 1; i < a.length; ++i)a[i].isValid() && !a[i][t](n) || (n = a[i]);
        return n
    }

    function Et() {
        return At("isBefore", [].slice.call(arguments, 0))
    }

    function Lt() {
        return At("isAfter", [].slice.call(arguments, 0))
    }

    function Nt(t) {
        var e = A(t), a = e.year || 0, n = e.quarter || 0, i = e.month || 0, r = e.week || 0, s = e.day || 0, o = e.hour || 0, l = e.minute || 0, c = e.second || 0, d = e.millisecond || 0;
        this._milliseconds = +d + 1e3 * c + 6e4 * l + 1e3 * o * 60 * 60, this._days = +s + 7 * r, this._months = +i + 3 * n + 12 * a, this._data = {}, this._locale = T(), this._bubble()
    }

    function Ft(t) {
        return t instanceof Nt
    }

    function Ht(t, e) {
        W(t, 0, 0, function () {
            var t = this.utcOffset(), a = "+";
            return t < 0 && (t = -t, a = "-"), a + H(~~(t / 60), 2) + e + H(~~t % 60, 2)
        })
    }

    function Wt(t, e) {
        var a = (e || "").match(t) || [], n = a[a.length - 1] || [], i = (n + "").match(li) || ["-", 0, 0], r = 60 * i[1] + g(i[2]);
        return "+" === i[0] ? r : -r
    }

    function qt(e, n) {
        var i, r;
        return n._isUTC ? (i = n.clone(), r = (f(e) || a(e) ? e.valueOf() : Rt(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), t.updateOffset(i, !1), i) : Rt(e).local()
    }

    function Ut(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Bt(e, a) {
        var n, i = this._offset || 0;
        return this.isValid() ? null != e ? ("string" == typeof e ? e = Wt(jn, e) : Math.abs(e) < 16 && (e *= 60), !this._isUTC && a && (n = Ut(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!a || this._changeInProgress ? le(this, ae(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : Ut(this) : null != e ? this : NaN
    }

    function Vt(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function Gt(t) {
        return this.utcOffset(0, t)
    }

    function zt(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ut(this), "m")), this
    }

    function Kt() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Wt(Tn, this._i)), this
    }

    function Qt(t) {
        return !!this.isValid() && (t = t ? Rt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }

    function Zt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Jt() {
        if (!h(this._isDSTShifted))return this._isDSTShifted;
        var t = {};
        if (u(t, this), t = Tt(t), t._a) {
            var e = t._isUTC ? s(t._a) : Rt(t._a);
            this._isDSTShifted = this.isValid() && _(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Xt() {
        return !!this.isValid() && !this._isUTC
    }

    function te() {
        return !!this.isValid() && this._isUTC
    }

    function ee() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    function ae(t, e) {
        var a, n, r, s = t, o = null;
        return Ft(t) ? s = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (o = ci.exec(t)) ? (a = "-" === o[1] ? -1 : 1, s = {
            y: 0,
            d: g(o[Fn]) * a,
            h: g(o[Hn]) * a,
            m: g(o[Wn]) * a,
            s: g(o[qn]) * a,
            ms: g(o[Un]) * a
        }) : (o = di.exec(t)) ? (a = "-" === o[1] ? -1 : 1, s = {
            y: ne(o[2], a),
            M: ne(o[3], a),
            w: ne(o[4], a),
            d: ne(o[5], a),
            h: ne(o[6], a),
            m: ne(o[7], a),
            s: ne(o[8], a)
        }) : null == s ? s = {} : "object" == typeof s && ("from"in s || "to"in s) && (r = re(Rt(s.from), Rt(s.to)), s = {}, s.ms = r.milliseconds, s.M = r.months), n = new Nt(s), Ft(t) && i(t, "_locale") && (n._locale = t._locale), n
    }

    function ne(t, e) {
        var a = t && parseFloat(t.replace(",", "."));
        return (isNaN(a) ? 0 : a) * e
    }

    function ie(t, e) {
        var a = {milliseconds: 0, months: 0};
        return a.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(a.months, "M").isAfter(e) && --a.months, a.milliseconds = +e - +t.clone().add(a.months, "M"), a
    }

    function re(t, e) {
        var a;
        return t.isValid() && e.isValid() ? (e = qt(e, t), t.isBefore(e) ? a = ie(t, e) : (a = ie(e, t), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : {
            milliseconds: 0,
            months: 0
        }
    }

    function se(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function oe(t, e) {
        return function (a, n) {
            var i, r;
            return null === n || isNaN(+n) || (y(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), r = a, a = n, n = r), a = "string" == typeof a ? +a : a, i = ae(a, n), le(this, i, t), this
        }
    }

    function le(e, a, n, i) {
        var r = a._milliseconds, s = se(a._days), o = se(a._months);
        e.isValid() && (i = null == i || i, r && e._d.setTime(e._d.valueOf() + r * n), s && N(e, "Date", L(e, "Date") + s * n), o && rt(e, L(e, "Month") + o * n), i && t.updateOffset(e, s || o))
    }

    function ce(t, e) {
        var a = t || Rt(), n = qt(a, this).startOf("day"), i = this.diff(n, "days", !0), r = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse", s = e && (k(e[r]) ? e[r]() : e[r]);
        return this.format(s || this.localeData().calendar(r, this, Rt(a)))
    }

    function de() {
        return new p(this)
    }

    function he(t, e) {
        var a = f(t) ? t : Rt(t);
        return !(!this.isValid() || !a.isValid()) && (e = R(h(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(e).valueOf())
    }

    function ue(t, e) {
        var a = f(t) ? t : Rt(t);
        return !(!this.isValid() || !a.isValid()) && (e = R(h(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < a.valueOf() : this.clone().endOf(e).valueOf() < a.valueOf())
    }

    function pe(t, e, a, n) {
        return n = n || "()", ("(" === n[0] ? this.isAfter(t, a) : !this.isBefore(t, a)) && (")" === n[1] ? this.isBefore(e, a) : !this.isAfter(e, a))
    }

    function fe(t, e) {
        var a, n = f(t) ? t : Rt(t);
        return !(!this.isValid() || !n.isValid()) && (e = R(e || "millisecond"), "millisecond" === e ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(e).valueOf() <= a && a <= this.clone().endOf(e).valueOf()))
    }

    function me(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function ge(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function _e(t, e, a) {
        var n, i, r, s;
        return this.isValid() ? (n = qt(t, this), n.isValid() ? (i = 6e4 * (n.utcOffset() - this.utcOffset()), e = R(e), "year" === e || "month" === e || "quarter" === e ? (s = ve(this, n), "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (r = this - n, s = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - i) / 864e5 : "week" === e ? (r - i) / 6048e5 : r), a ? s : m(s)) : NaN) : NaN
    }

    function ve(t, e) {
        var a, n, i = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(i, "months");
        return e - r < 0 ? (a = t.clone().add(i - 1, "months"), n = (e - r) / (r - a)) : (a = t.clone().add(i + 1, "months"), n = (e - r) / (a - r)), -(i + n) || 0
    }

    function De() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ye() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? k(Date.prototype.toISOString) ? this.toDate().toISOString() : B(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : B(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function ke(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var a = B(this, e);
        return this.localeData().postformat(a)
    }

    function be(t, e) {
        return this.isValid() && (f(t) && t.isValid() || Rt(t).isValid()) ? ae({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function we(t) {
        return this.from(Rt(), t)
    }

    function Ce(t, e) {
        return this.isValid() && (f(t) && t.isValid() || Rt(t).isValid()) ? ae({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function $e(t) {
        return this.to(Rt(), t)
    }

    function Ie(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = T(t), null != e && (this._locale = e), this)
    }

    function xe() {
        return this._locale
    }

    function Me(t) {
        switch (t = R(t)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function Oe(t) {
        return void 0 === (t = R(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function Se() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function Ye() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function Te() {
        return this._offset ? new Date(this.valueOf()) : this._d
    }

    function je() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function Pe() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function Re() {
        return this.isValid() ? this.toISOString() : null
    }

    function Ae() {
        return c(this)
    }

    function Ee() {
        return r({}, l(this))
    }

    function Le() {
        return l(this).overflow
    }

    function Ne() {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }

    function Fe(t, e) {
        W(0, [t, t.length], 0, e)
    }

    function He(t) {
        return Be.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function We(t) {
        return Be.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function qe() {
        return bt(this.year(), 1, 4)
    }

    function Ue() {
        var t = this.localeData()._week;
        return bt(this.year(), t.dow, t.doy)
    }

    function Be(t, e, a, n, i) {
        var r;
        return null == t ? kt(this, n, i).year : (r = bt(t, n, i), e > r && (e = r), Ve.call(this, t, e, a, n, i))
    }

    function Ve(t, e, a, n, i) {
        var r = yt(t, e, a, n, i), s = mt(r.year, 0, r.dayOfYear);
        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
    }

    function Ge(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function ze(t) {
        return kt(t, this._week.dow, this._week.doy).week
    }

    function Ke() {
        return this._week.dow
    }

    function Qe() {
        return this._week.doy
    }

    function Ze(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Je(t) {
        var e = kt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Xe(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function ta(t, a) {
        return e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? "format" : "standalone"][t.day()]
    }

    function ea(t) {
        return this._weekdaysShort[t.day()]
    }

    function aa(t) {
        return this._weekdaysMin[t.day()]
    }

    function na(t, e, a) {
        var n, i, r, o = t.toLocaleLowerCase();
        if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)r = s([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
        return a ? "dddd" === e ? (i = un.call(this._weekdaysParse, o), -1 !== i ? i : null) : "ddd" === e ? (i = un.call(this._shortWeekdaysParse, o), -1 !== i ? i : null) : (i = un.call(this._minWeekdaysParse, o), -1 !== i ? i : null) : "dddd" === e ? -1 !== (i = un.call(this._weekdaysParse, o)) ? i : -1 !== (i = un.call(this._shortWeekdaysParse, o)) ? i : (i = un.call(this._minWeekdaysParse, o), -1 !== i ? i : null) : "ddd" === e ? -1 !== (i = un.call(this._shortWeekdaysParse, o)) ? i : -1 !== (i = un.call(this._weekdaysParse, o)) ? i : (i = un.call(this._minWeekdaysParse, o), -1 !== i ? i : null) : -1 !== (i = un.call(this._minWeekdaysParse, o)) ? i : -1 !== (i = un.call(this._weekdaysParse, o)) ? i : (i = un.call(this._shortWeekdaysParse, o), -1 !== i ? i : null)
    }

    function ia(t, e, a) {
        var n, i, r;
        if (this._weekdaysParseExact)return na.call(this, t, e, a);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (i = s([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === e && this._fullWeekdaysParse[n].test(t))return n;
            if (a && "ddd" === e && this._shortWeekdaysParse[n].test(t))return n;
            if (a && "dd" === e && this._minWeekdaysParse[n].test(t))return n;
            if (!a && this._weekdaysParse[n].test(t))return n
        }
    }

    function ra(t) {
        if (!this.isValid())return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = Xe(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function sa(t) {
        if (!this.isValid())return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function oa(t) {
        return this.isValid() ? null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) : null != t ? this : NaN
    }

    function la(t) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || ha.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex
    }

    function ca(t) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || ha.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
    }

    function da(t) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || ha.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
    }

    function ha() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, a, n, i, r, o = [], l = [], c = [], d = [];
        for (e = 0; e < 7; e++)a = s([2e3, 1]).day(e), n = this.weekdaysMin(a, ""), i = this.weekdaysShort(a, ""), r = this.weekdays(a, ""), o.push(n), l.push(i), c.push(r), d.push(n), d.push(i), d.push(r);
        for (o.sort(t), l.sort(t), c.sort(t), d.sort(t), e = 0; e < 7; e++)l[e] = Q(l[e]), c[e] = Q(c[e]), d[e] = Q(d[e]);
        this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
    }

    function ua(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function pa() {
        return this.hours() % 12 || 12
    }

    function fa() {
        return this.hours() || 24
    }

    function ma(t, e) {
        W(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function ga(t, e) {
        return e._meridiemParse
    }

    function _a(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function va(t, e, a) {
        return t > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
    }

    function Da(t, e) {
        e[Un] = g(1e3 * ("0." + t))
    }

    function ya() {
        return this._isUTC ? "UTC" : ""
    }

    function ka() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function ba(t) {
        return Rt(1e3 * t)
    }

    function wa() {
        return Rt.apply(null, arguments).parseZone()
    }

    function Ca(t, e, a) {
        var n = this._calendar[t];
        return k(n) ? n.call(e, a) : n
    }

    function $a(t) {
        var e = this._longDateFormat[t], a = this._longDateFormat[t.toUpperCase()];
        return e || !a ? e : (this._longDateFormat[t] = a.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function Ia() {
        return this._invalidDate
    }

    function xa(t) {
        return this._ordinal.replace("%d", t)
    }

    function Ma(t) {
        return t
    }

    function Oa(t, e, a, n) {
        var i = this._relativeTime[a];
        return k(i) ? i(t, e, a, n) : i.replace(/%d/i, t)
    }

    function Sa(t, e) {
        var a = this._relativeTime[t > 0 ? "future" : "past"];
        return k(a) ? a(e) : a.replace(/%s/i, e)
    }

    function Ya(t, e, a, n) {
        var i = T(), r = s().set(n, e);
        return i[a](r, t)
    }

    function Ta(t, e, a) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return Ya(t, e, a, "month");
        var n, i = [];
        for (n = 0; n < 12; n++)i[n] = Ya(t, n, a, "month");
        return i
    }

    function ja(t, e, a, n) {
        "boolean" == typeof t ? ("number" == typeof e && (a = e, e = void 0), e = e || "") : (e = t, a = e, t = !1, "number" == typeof e && (a = e, e = void 0), e = e || "");
        var i = T(), r = t ? i._week.dow : 0;
        if (null != a)return Ya(e, (a + r) % 7, n, "day");
        var s, o = [];
        for (s = 0; s < 7; s++)o[s] = Ya(e, (s + r) % 7, n, "day");
        return o
    }

    function Pa(t, e) {
        return Ta(t, e, "months")
    }

    function Ra(t, e) {
        return Ta(t, e, "monthsShort")
    }

    function Aa(t, e, a) {
        return ja(t, e, a, "weekdays")
    }

    function Ea(t, e, a) {
        return ja(t, e, a, "weekdaysShort")
    }

    function La(t, e, a) {
        return ja(t, e, a, "weekdaysMin")
    }

    function Na() {
        var t = this._data;
        return this._milliseconds = Ri(this._milliseconds), this._days = Ri(this._days), this._months = Ri(this._months), t.milliseconds = Ri(t.milliseconds), t.seconds = Ri(t.seconds), t.minutes = Ri(t.minutes), t.hours = Ri(t.hours), t.months = Ri(t.months), t.years = Ri(t.years), this
    }

    function Fa(t, e, a, n) {
        var i = ae(e, a);
        return t._milliseconds += n * i._milliseconds, t._days += n * i._days, t._months += n * i._months, t._bubble()
    }

    function Ha(t, e) {
        return Fa(this, t, e, 1)
    }

    function Wa(t, e) {
        return Fa(this, t, e, -1)
    }

    function qa(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function Ua() {
        var t, e, a, n, i, r = this._milliseconds, s = this._days, o = this._months, l = this._data;
        return r >= 0 && s >= 0 && o >= 0 || r <= 0 && s <= 0 && o <= 0 || (r += 864e5 * qa(Va(o) + s), s = 0, o = 0), l.milliseconds = r % 1e3, t = m(r / 1e3), l.seconds = t % 60, e = m(t / 60), l.minutes = e % 60, a = m(e / 60), l.hours = a % 24, s += m(a / 24), i = m(Ba(s)), o += i, s -= qa(Va(i)), n = m(o / 12), o %= 12, l.days = s, l.months = o, l.years = n, this
    }

    function Ba(t) {
        return 4800 * t / 146097
    }

    function Va(t) {
        return 146097 * t / 4800
    }

    function Ga(t) {
        var e, a, n = this._milliseconds;
        if ("month" === (t = R(t)) || "year" === t)return e = this._days + n / 864e5, a = this._months + Ba(e), "month" === t ? a : a / 12;
        switch (e = this._days + Math.round(Va(this._months)), t) {
            case"week":
                return e / 7 + n / 6048e5;
            case"day":
                return e + n / 864e5;
            case"hour":
                return 24 * e + n / 36e5;
            case"minute":
                return 1440 * e + n / 6e4;
            case"second":
                return 86400 * e + n / 1e3;
            case"millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function za() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
    }

    function Ka(t) {
        return function () {
            return this.as(t)
        }
    }

    function Qa(t) {
        return t = R(t), this[t + "s"]()
    }

    function Za(t) {
        return function () {
            return this._data[t]
        }
    }

    function Ja() {
        return m(this.days() / 7)
    }

    function Xa(t, e, a, n, i) {
        return i.relativeTime(e || 1, !!a, t, n)
    }

    function tn(t, e, a) {
        var n = ae(t).abs(), i = Zi(n.as("s")), r = Zi(n.as("m")), s = Zi(n.as("h")), o = Zi(n.as("d")), l = Zi(n.as("M")), c = Zi(n.as("y")), d = i < Ji.s && ["s", i] || r <= 1 && ["m"] || r < Ji.m && ["mm", r] || s <= 1 && ["h"] || s < Ji.h && ["hh", s] || o <= 1 && ["d"] || o < Ji.d && ["dd", o] || l <= 1 && ["M"] || l < Ji.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
        return d[2] = e, d[3] = +t > 0, d[4] = a, Xa.apply(null, d)
    }

    function en(t, e) {
        return void 0 !== Ji[t] && (void 0 === e ? Ji[t] : (Ji[t] = e, !0))
    }

    function an(t) {
        var e = this.localeData(), a = tn(this, !t, e);
        return t && (a = e.pastFuture(+this, a)), e.postformat(a)
    }

    function nn() {
        var t, e, a, n = Xi(this._milliseconds) / 1e3, i = Xi(this._days), r = Xi(this._months);
        t = m(n / 60), e = m(t / 60), n %= 60, t %= 60, a = m(r / 12), r %= 12;
        var s = a, o = r, l = i, c = e, d = t, h = n, u = this.asSeconds();
        return u ? (u < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (l ? l + "D" : "") + (c || d || h ? "T" : "") + (c ? c + "H" : "") + (d ? d + "M" : "") + (h ? h + "S" : "") : "P0D"
    }

    var rn, sn;
    sn = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), a = e.length >>> 0, n = 0; n < a; n++)if (n in e && t.call(this, e[n], n, e))return !0;
        return !1
    };
    var on = t.momentProperties = [], ln = !1, cn = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var dn;
    dn = Object.keys ? Object.keys : function (t) {
        var e, a = [];
        for (e in t)i(t, e) && a.push(e);
        return a
    };
    var hn, un, pn = {}, fn = {}, mn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, _n = {}, vn = {}, Dn = /\d/, yn = /\d\d/, kn = /\d{3}/, bn = /\d{4}/, wn = /[+-]?\d{6}/, Cn = /\d\d?/, $n = /\d\d\d\d?/, In = /\d\d\d\d\d\d?/, xn = /\d{1,3}/, Mn = /\d{1,4}/, On = /[+-]?\d{1,6}/, Sn = /\d+/, Yn = /[+-]?\d+/, Tn = /Z|[+-]\d\d:?\d\d/gi, jn = /Z|[+-]\d\d(?::?\d\d)?/gi, Pn = /[+-]?\d+(\.\d{1,3})?/, Rn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, An = {}, En = {}, Ln = 0, Nn = 1, Fn = 2, Hn = 3, Wn = 4, qn = 5, Un = 6, Bn = 7, Vn = 8;
    un = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
        return -1
    }, W("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), W("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), W("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), P("month", "M"), G("M", Cn), G("MM", Cn, yn), G("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), G("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), Z(["M", "MM"], function (t, e) {
        e[Nn] = g(t) - 1
    }), Z(["MMM", "MMMM"], function (t, e, a, n) {
        var i = a._locale.monthsParse(t, n, a._strict);
        null != i ? e[Nn] = i : l(a).invalidMonth = t
    });
    var Gn = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/, zn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Kn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Qn = Rn, Zn = Rn, Jn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Xn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, ti = /Z|[+-]\d\d(?::?\d\d)?/, ei = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], ai = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], ni = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = D("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), W("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), W(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), G("Y", Yn), G("YY", Cn, yn), G("YYYY", Mn, bn), G("YYYYY", On, wn), G("YYYYYY", On, wn), Z(["YYYYY", "YYYYYY"], Ln), Z("YYYY", function (e, a) {
        a[Ln] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e)
    }), Z("YY", function (e, a) {
        a[Ln] = t.parseTwoDigitYear(e)
    }), Z("Y", function (t, e) {
        e[Ln] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
        return g(t) + (g(t) > 68 ? 1900 : 2e3)
    };
    var ii = E("FullYear", !0);
    t.ISO_8601 = function () {
    };
    var ri = D("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
        var t = Rt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : d()
    }), si = D("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
        var t = Rt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t > this ? this : t : d()
    }), oi = function () {
        return Date.now ? Date.now() : +new Date
    };
    Ht("Z", ":"), Ht("ZZ", ""), G("Z", jn), G("ZZ", jn), Z(["Z", "ZZ"], function (t, e, a) {
        a._useUTC = !0, a._tzm = Wt(jn, t)
    });
    var li = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {
    };
    var ci = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/, di = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    ae.fn = Nt.prototype;
    var hi = oe(1, "add"), ui = oe(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var pi = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    W(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), W(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Fe("gggg", "weekYear"), Fe("ggggg", "weekYear"), Fe("GGGG", "isoWeekYear"), Fe("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), G("G", Yn), G("g", Yn), G("GG", Cn, yn), G("gg", Cn, yn), G("GGGG", Mn, bn), G("gggg", Mn, bn), G("GGGGG", On, wn), G("ggggg", On, wn), J(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, a, n) {
        e[n.substr(0, 2)] = g(t)
    }), J(["gg", "GG"], function (e, a, n, i) {
        a[i] = t.parseTwoDigitYear(e)
    }), W("Q", 0, "Qo", "quarter"), P("quarter", "Q"), G("Q", Dn), Z("Q", function (t, e) {
        e[Nn] = 3 * (g(t) - 1)
    }), W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), G("w", Cn), G("ww", Cn, yn), G("W", Cn), G("WW", Cn, yn), J(["w", "ww", "W", "WW"], function (t, e, a, n) {
        e[n.substr(0, 1)] = g(t)
    });
    var fi = {dow: 0, doy: 6};
    W("D", ["DD", 2], "Do", "date"), P("date", "D"), G("D", Cn), G("DD", Cn, yn), G("Do", function (t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), Z(["D", "DD"], Fn), Z("Do", function (t, e) {
        e[Fn] = g(t.match(Cn)[0], 10)
    });
    var mi = E("Date", !0);
    W("d", 0, "do", "day"), W("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), W("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), W("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), G("d", Cn), G("e", Cn), G("E", Cn), G("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), G("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), G("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), J(["dd", "ddd", "dddd"], function (t, e, a, n) {
        var i = a._locale.weekdaysParse(t, n, a._strict);
        null != i ? e.d = i : l(a).invalidWeekday = t
    }), J(["d", "e", "E"], function (t, e, a, n) {
        e[n] = g(t)
    });
    var gi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), _i = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), vi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Di = Rn, yi = Rn, ki = Rn;
    W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), G("DDD", xn), G("DDDD", kn), Z(["DDD", "DDDD"], function (t, e, a) {
        a._dayOfYear = g(t)
    }), W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, pa), W("k", ["kk", 2], 0, fa), W("hmm", 0, 0, function () {
        return "" + pa.apply(this) + H(this.minutes(), 2)
    }), W("hmmss", 0, 0, function () {
        return "" + pa.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
    }), W("Hmm", 0, 0, function () {
        return "" + this.hours() + H(this.minutes(), 2)
    }), W("Hmmss", 0, 0, function () {
        return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
    }), ma("a", !0), ma("A", !1), P("hour", "h"), G("a", ga), G("A", ga), G("H", Cn), G("h", Cn), G("HH", Cn, yn), G("hh", Cn, yn), G("hmm", $n), G("hmmss", In), G("Hmm", $n), G("Hmmss", In), Z(["H", "HH"], Hn), Z(["a", "A"], function (t, e, a) {
        a._isPm = a._locale.isPM(t), a._meridiem = t
    }), Z(["h", "hh"], function (t, e, a) {
        e[Hn] = g(t), l(a).bigHour = !0
    }), Z("hmm", function (t, e, a) {
        var n = t.length - 2;
        e[Hn] = g(t.substr(0, n)), e[Wn] = g(t.substr(n)), l(a).bigHour = !0
    }), Z("hmmss", function (t, e, a) {
        var n = t.length - 4, i = t.length - 2;
        e[Hn] = g(t.substr(0, n)), e[Wn] = g(t.substr(n, 2)), e[qn] = g(t.substr(i)), l(a).bigHour = !0
    }), Z("Hmm", function (t, e, a) {
        var n = t.length - 2;
        e[Hn] = g(t.substr(0, n)), e[Wn] = g(t.substr(n))
    }), Z("Hmmss", function (t, e, a) {
        var n = t.length - 4, i = t.length - 2;
        e[Hn] = g(t.substr(0, n)), e[Wn] = g(t.substr(n, 2)), e[qn] = g(t.substr(i))
    });
    var bi = /[ap]\.?m?\.?/i, wi = E("Hours", !0);
    W("m", ["mm", 2], 0, "minute"), P("minute", "m"), G("m", Cn), G("mm", Cn, yn), Z(["m", "mm"], Wn);
    var Ci = E("Minutes", !1);
    W("s", ["ss", 2], 0, "second"), P("second", "s"), G("s", Cn), G("ss", Cn, yn), Z(["s", "ss"], qn);
    var $i = E("Seconds", !1);
    W("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), W(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), W(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), W(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), W(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), W(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), W(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), P("millisecond", "ms"), G("S", xn, Dn), G("SS", xn, yn), G("SSS", xn, kn);
    var Ii;
    for (Ii = "SSSS"; Ii.length <= 9; Ii += "S")G(Ii, Sn);
    for (Ii = "S"; Ii.length <= 9; Ii += "S")Z(Ii, Da);
    var xi = E("Milliseconds", !1);
    W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
    var Mi = p.prototype;
    Mi.add = hi, Mi.calendar = ce, Mi.clone = de, Mi.diff = _e, Mi.endOf = Oe, Mi.format = ke, Mi.from = be, Mi.fromNow = we, Mi.to = Ce, Mi.toNow = $e, Mi.get = F, Mi.invalidAt = Le, Mi.isAfter = he, Mi.isBefore = ue, Mi.isBetween = pe, Mi.isSame = fe, Mi.isSameOrAfter = me, Mi.isSameOrBefore = ge, Mi.isValid = Ae, Mi.lang = pi, Mi.locale = Ie, Mi.localeData = xe, Mi.max = si, Mi.min = ri, Mi.parsingFlags = Ee, Mi.set = F, Mi.startOf = Me, Mi.subtract = ui, Mi.toArray = je, Mi.toObject = Pe, Mi.toDate = Te, Mi.toISOString = ye, Mi.toJSON = Re, Mi.toString = De, Mi.unix = Ye, Mi.valueOf = Se, Mi.creationData = Ne, Mi.year = ii, Mi.isLeapYear = vt, Mi.weekYear = He, Mi.isoWeekYear = We, Mi.quarter = Mi.quarters = Ge, Mi.month = st, Mi.daysInMonth = ot, Mi.week = Mi.weeks = Ze, Mi.isoWeek = Mi.isoWeeks = Je, Mi.weeksInYear = Ue, Mi.isoWeeksInYear = qe, Mi.date = mi, Mi.day = Mi.days = ra, Mi.weekday = sa, Mi.isoWeekday = oa, Mi.dayOfYear = ua, Mi.hour = Mi.hours = wi, Mi.minute = Mi.minutes = Ci, Mi.second = Mi.seconds = $i, Mi.millisecond = Mi.milliseconds = xi, Mi.utcOffset = Bt, Mi.utc = Gt, Mi.local = zt, Mi.parseZone = Kt, Mi.hasAlignedHourOffset = Qt, Mi.isDST = Zt, Mi.isDSTShifted = Jt, Mi.isLocal = Xt, Mi.isUtcOffset = te, Mi.isUtc = ee, Mi.isUTC = ee, Mi.zoneAbbr = ya, Mi.zoneName = ka, Mi.dates = D("dates accessor is deprecated. Use date instead.", mi), Mi.months = D("months accessor is deprecated. Use month instead", st), Mi.years = D("years accessor is deprecated. Use year instead", ii), Mi.zone = D("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Vt);
    var Oi = Mi, Si = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Yi = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Ti = /\d{1,2}/, ji = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Pi = $.prototype;
    Pi._calendar = Si, Pi.calendar = Ca, Pi._longDateFormat = Yi, Pi.longDateFormat = $a, Pi._invalidDate = "Invalid date", Pi.invalidDate = Ia, Pi._ordinal = "%d", Pi.ordinal = xa, Pi._ordinalParse = Ti, Pi.preparse = Ma, Pi.postformat = Ma, Pi._relativeTime = ji, Pi.relativeTime = Oa, Pi.pastFuture = Sa, Pi.set = w, Pi.months = et, Pi._months = zn, Pi.monthsShort = at, Pi._monthsShort = Kn, Pi.monthsParse = it, Pi._monthsRegex = Zn, Pi.monthsRegex = ct, Pi._monthsShortRegex = Qn, Pi.monthsShortRegex = lt, Pi.week = ze, Pi._week = fi, Pi.firstDayOfYear = Qe, Pi.firstDayOfWeek = Ke, Pi.weekdays = ta, Pi._weekdays = gi, Pi.weekdaysMin = aa, Pi._weekdaysMin = vi, Pi.weekdaysShort = ea, Pi._weekdaysShort = _i, Pi.weekdaysParse = ia, Pi._weekdaysRegex = Di, Pi.weekdaysRegex = la, Pi._weekdaysShortRegex = yi, Pi.weekdaysShortRegex = ca, Pi._weekdaysMinRegex = ki, Pi.weekdaysMinRegex = da, Pi.isPM = _a, Pi._meridiemParse = bi, Pi.meridiem = va, O("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
            var e = t % 10;
            return t + (1 === g(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", O), t.langData = D("moment.langData is deprecated. Use moment.localeData instead.", T);
    var Ri = Math.abs, Ai = Ka("ms"), Ei = Ka("s"), Li = Ka("m"), Ni = Ka("h"), Fi = Ka("d"), Hi = Ka("w"), Wi = Ka("M"), qi = Ka("y"), Ui = Za("milliseconds"), Bi = Za("seconds"), Vi = Za("minutes"), Gi = Za("hours"), zi = Za("days"), Ki = Za("months"), Qi = Za("years"), Zi = Math.round, Ji = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, Xi = Math.abs, tr = Nt.prototype;
    return tr.abs = Na, tr.add = Ha, tr.subtract = Wa, tr.as = Ga, tr.asMilliseconds = Ai, tr.asSeconds = Ei, tr.asMinutes = Li, tr.asHours = Ni, tr.asDays = Fi, tr.asWeeks = Hi, tr.asMonths = Wi, tr.asYears = qi, tr.valueOf = za, tr._bubble = Ua, tr.get = Qa, tr.milliseconds = Ui, tr.seconds = Bi, tr.minutes = Vi, tr.hours = Gi, tr.days = zi, tr.weeks = Ja, tr.months = Ki, tr.years = Qi, tr.humanize = an, tr.toISOString = nn, tr.toString = nn, tr.toJSON = nn, tr.locale = Ie, tr.localeData = xe, tr.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", nn), tr.lang = pi, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), G("x", Yn), G("X", Pn), Z("X", function (t, e, a) {
        a._d = new Date(1e3 * parseFloat(t, 10))
    }), Z("x", function (t, e, a) {
        a._d = new Date(g(t))
    }), t.version = "2.13.0", function (t) {
        rn = t
    }(Rt), t.fn = Oi, t.min = Et, t.max = Lt, t.now = oi, t.utc = s, t.unix = ba, t.months = Pa, t.isDate = a, t.locale = O, t.invalid = d, t.duration = ae, t.isMoment = f, t.weekdays = Aa, t.parseZone = wa, t.localeData = T, t.isDuration = Ft, t.monthsShort = Ra, t.weekdaysMin = La, t.defineLocale = S, t.updateLocale = Y, t.locales = j, t.weekdaysShort = Ea, t.normalizeUnits = R, t.relativeTimeThreshold = en, t.prototype = Oi, t
}), function (t, e) {
    if ("function" == typeof define && define.amd)define(["moment", "jquery"], function (a, n) {
        return t.daterangepicker = e(a, n)
    }); else if ("object" == typeof module && module.exports) {
        var a = "undefined" != typeof window ? window.jQuery : void 0;
        a || (a = require("jquery"), a.fn || (a.fn = {})), module.exports = e(require("moment"), a)
    } else t.daterangepicker = e(t.moment, t.jQuery)
}(this, function (moment, $) {
    var DateRangePicker = function (t, e, a) {
        if (this.parentEl = "body", this.firstDate = "", this.firstDateEnd = "", this.element = $(t), this.startDate = moment().startOf("day"), this.endDate = moment().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyClass = "btn-success", this.cancelClass = "btn-default", this.locale = {
                direction: "ltr",
                format: moment.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: moment.weekdaysMin(),
                monthNames: moment.monthsShort(),
                firstDay: moment.localeData().firstDayOfWeek()
            }, this.callback = function () {
            }, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), e = $.extend(this.element.data(), e), "string" == typeof e.template || e.template instanceof $ || (e.template = '<div class="daterangepicker"><div class="calendar left"><div class="daterangepicker_input"><input style="text-align:right;margin-left: 67px;position: relative;cursor: pointer" class="input-mini" type="text" name="daterangepicker_start" value="" /><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="divide_icon">-</div><div class="calendar right"><div class="daterangepicker_input"><input style="text-align:left;margin-left: -48px;cursor: pointer" class="input-mini" type="text" name="daterangepicker_end" value="" /><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div><i class="clear_date hotel_iconfont">&#58893;</i></div>'), this.parentEl = $(e.parentEl && $(e.parentEl).length ? e.parentEl : this.parentEl), this.container = $(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel && (this.locale.customRangeLabel = e.locale.customRangeLabel)), this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = moment(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = moment(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = moment(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = moment(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = moment(e.startDate)), "object" == typeof e.endDate && (this.endDate = moment(e.endDate)), "object" == typeof e.minDate && (this.minDate = moment(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = moment(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyClass && (this.applyClass = e.applyClass), "string" == typeof e.cancelClass && (this.cancelClass = e.cancelClass), "object" == typeof e.dateLimit && (this.dateLimit = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)for (var n = this.locale.firstDay; n > 0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), n--;
        var i, r, s;
        if (void 0 === e.startDate && void 0 === e.endDate && $(this.element).is("input[type=text]")) {
            var o = $(this.element).val(), l = o.split(this.locale.separator);
            i = r = null, 2 == l.length ? (i = moment(l[0], this.locale.format), r = moment(l[1], this.locale.format)) : this.singleDatePicker && "" !== o && (i = moment(o, this.locale.format), r = moment(o, this.locale.format)), null !== i && null !== r && (this.setStartDate(i), this.setEndDate(r))
        }
        if ("object" == typeof e.ranges) {
            for (s in e.ranges) {
                i = "string" == typeof e.ranges[s][0] ? moment(e.ranges[s][0], this.locale.format) : moment(e.ranges[s][0]), r = "string" == typeof e.ranges[s][1] ? moment(e.ranges[s][1], this.locale.format) : moment(e.ranges[s][1]), this.minDate && i.isBefore(this.minDate) && (i = this.minDate.clone());
                var c = this.maxDate;
                if (this.dateLimit && c && i.clone().add(this.dateLimit).isAfter(c) && (c = i.clone().add(this.dateLimit)), c && r.isAfter(c) && (r = c.clone()), !(this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && i.isAfter(c, this.timepicker ? "minute" : "day"))) {
                    var d = document.createElement("textarea");
                    d.innerHTML = s;
                    var h = d.value;
                    this.ranges[h] = [i, r]
                }
            }
            var u = "<ul>";
            for (s in this.ranges)u += '<li data-range-key="' + s + '">' + s + "</li>";
            this.showCustomRangeLabel && (u += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), u += "</ul>", this.container.find(".ranges").prepend(u)
        }
        "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && "object" != typeof e.ranges ? this.container.find(".ranges").hide() : this.autoApply && this.container.find(".applyBtn, .cancelBtn").addClass("hide"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide(), this.timePicker ? this.container.find(".ranges ul").hide() : this.container.find(".ranges").hide()), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), void 0 !== e.ranges && "right" == this.opens && this.container.find(".ranges").prependTo(this.container.find(".calendar.left").parent()), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", $.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.timeChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", $.proxy(this.showCalendars, this)).on("focus.daterangepicker", ".daterangepicker_input input", $.proxy(this.formInputsFocused, this)).on("blur.daterangepicker", ".daterangepicker_input input", $.proxy(this.formInputsBlurred, this)).on("change.daterangepicker", ".daterangepicker_input input", $.proxy(this.formInputsChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this)).on("click.daterangepicker", "li", $.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", $.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", "li", $.proxy(this.updateFormInputs, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": $.proxy(this.show, this),
            "focus.daterangepicker": $.proxy(this.show, this),
            "keyup.daterangepicker": $.proxy(this.elementChanged, this),
            "keydown.daterangepicker": $.proxy(this.keydown, this)
        }) : this.element.on("click.daterangepicker", $.proxy(this.toggle, this)), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"));
        var p = this;
        this.container.find(".clear_date").click(function () {
            p.firstDate = "", p.firstDateEnd = "", p.endDate = null, p.oldStartDate = null, p.oldEndDate = null, p.updateView(), p.callback("", "", this.chosenLabel), $(this).hide()
        })
    };
    return DateRangePicker.prototype = {
        constructor: DateRangePicker, setStartDate: function (t) {
            "string" == typeof t && (this.startDate = moment(t, this.locale.format)), "object" == typeof t && (this.startDate = moment(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView(), this.firstDate = this.startDate, this.container.find(".clear_date").show()
        }, setEndDate: function (t) {
            "string" == typeof t && (this.endDate = moment(t, this.locale.format)), "object" == typeof t && (this.endDate = moment(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.dateLimit)), this.previousRightTime = this.endDate.clone(), this.isShowing || this.updateElement(), this.updateMonthsInView(), this.firstDateEnd = this.endDate
        }, isInvalidDate: function () {
            return !1
        }, isCustomDate: function () {
            return !1
        }, updateView: function () {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate || !this.firstDate ? (this.container.find('input[name="daterangepicker_end"]').removeClass("active"), this.container.find('input[name="daterangepicker_start"]').addClass("active")) : (this.container.find('input[name="daterangepicker_end"]').addClass("active"), this.container.find('input[name="daterangepicker_start"]').removeClass("active")), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        }, updateMonthsInView: function () {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")))return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        }, updateCalendars: function () {
            if (this.timePicker) {
                var t, e, a;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                        var n = this.container.find(".left .ampmselect").val();
                        "PM" === n && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0)
                    }
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                    var n = this.container.find(".right .ampmselect").val();
                    "PM" === n && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0)
                }
                this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        }, renderCalendar: function (side) {
            var calendar = "left" == side ? this.leftCalendar : this.rightCalendar, month = calendar.month.month(), year = calendar.month.year(), hour = calendar.month.hour(), minute = calendar.month.minute(), second = calendar.month.second(), daysInMonth = moment([year, month]).daysInMonth(), firstDay = moment([year, month, 1]), lastDay = moment([year, month, daysInMonth]), lastMonth = moment(firstDay).subtract(1, "month").month(), lastYear = moment(firstDay).subtract(1, "month").year(), daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth(), dayOfWeek = firstDay.day(), calendar = [];
            calendar.firstDay = firstDay, calendar.lastDay = lastDay;
            for (var i = 0; i < 6; i++)calendar[i] = [];
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 2;
            startDay > daysInLastMonth && (startDay -= 7), dayOfWeek == this.locale.firstDay && (startDay = daysInLastMonth - 5);
            for (var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]), col, row, i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, "hour"))i > 0 && col % 7 == 0 && (col = 0, row++), calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second), curDate.hour(12), this.minDate && calendar[row][col].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && calendar[row][col].isBefore(this.minDate) && "left" == side && (calendar[row][col] = this.minDate.clone()), this.maxDate && calendar[row][col].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && calendar[row][col].isAfter(this.maxDate) && "right" == side && (calendar[row][col] = this.maxDate.clone());
            "left" == side ? this.leftCalendar.calendar = calendar : this.rightCalendar.calendar = calendar;
            var minDate = "left" == side ? this.minDate : this.startDate, maxDate = this.maxDate, selected = "left" == side ? this.startDate : this.endDate, arrow = "ltr" == this.locale.direction ? {
                left: "chevron-left",
                right: "chevron-right"
            } : {left: "chevron-right", right: "chevron-left"}, html = '<table class="table-condensed">';
            html += "<thead>", html += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (html += "<th></th>"), minDate && !minDate.isBefore(calendar.firstDay) || this.linkedCalendars && "left" != side ? html += "<th></th>" : html += '<th class="prev available"><i class="i_arrow_pre"></i></th>';
            var dateHtml = calendar[1][1].format(" YYYY") + "年" + eval(calendar[1][1].month() + 1) + "月";
            if (this.showDropdowns) {
                for (var currentMonth = calendar[1][1].month(), currentYear = calendar[1][1].year(), maxYear = maxDate && maxDate.year() || currentYear + 5, minYear = minDate && minDate.year() || currentYear - 50, inMinYear = currentYear == minYear, inMaxYear = currentYear == maxYear, monthHtml = '<select class="monthselect">', m = 0; m < 12; m++)(!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month()) ? monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>" : monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                monthHtml += "</select>";
                for (var yearHtml = '<select class="yearselect">', y = minYear; y <= maxYear; y++)yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : "") + ">" + y + "</option>";
                yearHtml += "</select>", dateHtml = monthHtml + yearHtml
            }
            if (html += '<th colspan="5" class="month">' + dateHtml + "</th>", maxDate && !maxDate.isAfter(calendar.lastDay) || this.linkedCalendars && "right" != side && !this.singleDatePicker ? html += "<th></th>" : html += '<th class="next available"><i class="i_arrow_next"></i></th>', html += "</tr>", html += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (html += '<th class="week">' + this.locale.weekLabel + "</th>"), $.each(["一", "二", "三", "四", "五", "六", "日"], function (t, e) {
                    html += "<th>" + e + "</th>"
                }), html += "</tr>", html += "</thead>", html += "<tbody>", null == this.endDate && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf("day");
                maxDate && !maxLimit.isBefore(maxDate) || (maxDate = maxLimit)
            }
            for (var row = 0; row < 6; row++) {
                html += "<tr>", this.showWeekNumbers ? html += '<td class="week">' + calendar[row][0].week() + "</td>" : this.showISOWeekNumbers && (html += '<td class="week">' + calendar[row][0].isoWeek() + "</td>");
                for (var col = 0; col < 7; col++) {
                    var classes = [];
                    calendar[row][col].isSame(new Date, "day") && classes.push("today"), calendar[row][col].isoWeekday() > 5 && classes.push("weekend"), calendar[row][col].month() != calendar[1][1].month() && classes.push("off"), this.minDate && calendar[row][col].isBefore(this.minDate, "day") && classes.push("off", "disabled"), maxDate && calendar[row][col].isAfter(maxDate, "day") && classes.push("off", "disabled"), this.isInvalidDate(calendar[row][col]) && classes.push("off", "disabled"), this.firstDate && (calendar[row][col].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && classes.push("active", "start-date"), null != this.endDate && calendar[row][col].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && classes.push("active", "end-date"), null != this.endDate && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate && classes.push("in-range"));
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    !1 !== isCustom && ("string" == typeof isCustom ? classes.push(isCustom) : Array.prototype.push.apply(classes, isCustom));
                    for (var cname = "", disabled = !1, i = 0; i < classes.length; i++)cname += classes[i] + " ", "disabled" == classes[i] && (disabled = !0);
                    disabled || (cname += "available"), html += '<td class="' + cname.replace(/^\s+|\s+$/g, "") + '" data-title="r' + row + "c" + col + '">' + calendar[row][col].date() + "</td>"
                }
                html += "</tr>"
            }
            html += "</tbody>", html += "</table>", this.container.find(".calendar." + side + " .calendar-table").html(html)
        }, renderTimePicker: function (t) {
            if ("right" != t || this.endDate) {
                var e, a, n, i = this.maxDate;
                if (!this.dateLimit || this.maxDate && !this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate) || (i = this.startDate.clone().add(this.dateLimit)), "left" == t)a = this.startDate.clone(), n = this.minDate; else if ("right" == t) {
                    a = this.endDate.clone(), n = this.startDate;
                    var r = this.container.find(".calendar.right .calendar-time div");
                    if (!this.endDate && "" != r.html() && (a.hour(r.find(".hourselect option:selected").val() || a.hour()), a.minute(r.find(".minuteselect option:selected").val() || a.minute()), a.second(r.find(".secondselect option:selected").val() || a.second()), !this.timePicker24Hour)) {
                        var s = r.find(".ampmselect option:selected").val();
                        "PM" === s && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === s && 12 === a.hour() && a.hour(0)
                    }
                    a.isBefore(this.startDate) && (a = this.startDate.clone()), i && a.isAfter(i) && (a = i.clone())
                }
                e = '<select class="hourselect">';
                for (var o = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = o; c <= l; c++) {
                    var d = c;
                    this.timePicker24Hour || (d = a.hour() >= 12 ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                    var h = a.clone().hour(d), u = !1;
                    n && h.minute(59).isBefore(n) && (u = !0), i && h.minute(0).isAfter(i) && (u = !0), d != a.hour() || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : e += '<option value="' + c + '" selected="selected">' + c + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (var c = 0; c < 60; c += this.timePickerIncrement) {
                    var p = c < 10 ? "0" + c : c, h = a.clone().minute(c), u = !1;
                    n && h.second(59).isBefore(n) && (u = !0), i && h.second(0).isAfter(i) && (u = !0), a.minute() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (var c = 0; c < 60; c++) {
                        var p = c < 10 ? "0" + c : c, h = a.clone().second(c), u = !1;
                        n && h.isBefore(n) && (u = !0), i && h.isAfter(i) && (u = !0), a.second() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var f = "", m = "";
                    n && a.clone().hour(12).minute(0).second(0).isBefore(n) && (f = ' disabled="disabled" class="disabled"'), i && a.clone().hour(0).minute(0).second(0).isAfter(i) && (m = ' disabled="disabled" class="disabled"'), a.hour() >= 12 ? e += '<option value="AM"' + f + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : e += '<option value="AM" selected="selected"' + f + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>"
                }
                this.container.find(".calendar." + t + " .calendar-time div").html(e)
            }
        }, updateFormInputs: function () {
            this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus") || (this.firstDate ? (this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                return n + "年" + e + "月" + a + "日"
            })), this.endDate && this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                return n + "年" + e + "月" + a + "日"
            })), this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")) : (this.container.find("input[name=daterangepicker_start]").val("入住日期"), this.container.find("input[name=daterangepicker_end]").val("退房日期")))
        }, move: function () {
            var t, e = {top: 0, left: 0}, a = $(window).width();
            this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, a = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("dropup"), "left" == this.opens ? (this.container.css({
                top: t,
                right: a - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                left: this.element.offset().left - e.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > $(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        }, show: function (t) {
            this.isShowing || (this._outsideClickProxy = $.proxy(function (t) {
                this.outsideClick(t)
            }, this), $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), $(window).on("resize.daterangepicker", $.proxy(function (t) {
                this.move(t)
            }, this)), this.firstDate && this.firstDateEnd ? (this.startDate && this.endDate && (this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone()), this.startDate || this.container.find("input[name=daterangepicker_start]").val("入住日期"), this.endDate || this.container.find("input[name=daterangepicker_end]").val("退房日期")) : this.firstDate && !this.firstDateEnd && (this.oldStartDate = this.startDate.clone()), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        }, hide: function (t) {
            this.isShowing && (this.firstDate ? this.firstDateEnd ? this.endDate ? this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate, this.endDate, this.chosenLabel) : (this.endDate = this.oldEndDate.clone(), this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                return n + "年" + e + "月" + a + "日"
            })), this.callback(this.startDate, this.endDate, this.chosenLabel)) : (this.endDate = this.startDate.clone().add(1, "day"), this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                return n + "年" + e + "月" + a + "日"
            })), this.callback(this.startDate, this.endDate, this.chosenLabel)) : this.firstDate || this.firstDateEnd || (this.container.find("input[name=daterangepicker_start]").val("入住日期"), this.container.find("input[name=daterangepicker_end]").val("退房日期")), this.updateElement(), $(document).off(".daterangepicker"), $(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        }, toggle: function (t) {
            this.isShowing ? this.hide() : this.show()
        }, outsideClick: function (t) {
            var e = $(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        }, showCalendars: function () {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        }, hideCalendars: function () {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        }, hoverRange: function (t) {
            if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus")) {
                var e = t.target.getAttribute("data-range-key");
                if (e == this.locale.customRangeLabel)this.updateView(); else {
                    var a = this.ranges[e];
                    this.container.find("input[name=daterangepicker_start]").val(a[0].format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                        return n + "年" + e + "月" + a + "日"
                    })), this.container.find("input[name=daterangepicker_end]").val(a[1].format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                        return n + "年" + e + "月" + a + "日"
                    }))
                }
            }
        }, clickRange: function (t) {
            var e = t.target.getAttribute("data-range-key");
            if (this.chosenLabel = e, e == this.locale.customRangeLabel)this.showCalendars(); else {
                var a = this.ranges[e];
                this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        }, clickPrev: function (t) {
            $(t.target).parents(".calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        }, clickNext: function (t) {
            $(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        }, hoverDate: function (t) {
            if ($(t.target).hasClass("available")) {
                var e = $(t.target).attr("data-title"), a = e.substr(1, 1), n = e.substr(3, 1), i = $(t.target).parents(".calendar"), r = i.hasClass("left") ? this.leftCalendar.calendar[a][n] : this.rightCalendar.calendar[a][n], s = this.leftCalendar, o = this.rightCalendar, l = this.startDate;
                if (!this.endDate && this.firstDate) {
                    this.container.find(".calendar td").each(function (t, e) {
                        if ($(e).removeClass("last-hover"), !$(e).hasClass("week")) {
                            var a = $(e).attr("data-title"), n = a.substr(1, 1), i = a.substr(3, 1), c = $(e).parents(".calendar"), d = c.hasClass("left") ? s.calendar[n][i] : o.calendar[n][i];
                            d.isAfter(l) && d.isBefore(r) || d.isSame(r, "day") ? $(e).addClass("in-range") : $(e).removeClass("in-range")
                        }
                    });
                    this.container.find(".calendar td.in-range:last").hasClass("start-date") || this.container.find(".calendar td.in-range:not(.off):last").addClass("last-hover")
                }
            }
        }, clickDate: function (t) {
            if ($(t.target).hasClass("available")) {
                var e = $(t.target).attr("data-title"), a = e.substr(1, 1), n = e.substr(3, 1), i = $(t.target).parents(".calendar"), r = i.hasClass("left") ? this.leftCalendar.calendar[a][n] : this.rightCalendar.calendar[a][n];
                if (this.endDate || r.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var s = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) {
                            var o = this.container.find(".left .ampmselect").val();
                            "PM" === o && s < 12 && (s += 12), "AM" === o && 12 === s && (s = 0)
                        }
                        var l = parseInt(this.container.find(".left .minuteselect").val(), 10), c = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        r = r.clone().hour(s).minute(l).second(c)
                    }
                    this.endDate = null, this.setStartDate(r.clone())
                } else if (!this.endDate && r.isBefore(this.startDate))this.setEndDate(this.startDate.clone()); else if (this.firstDate && !r.isSame(this.startDate, "day")) {
                    if (this.timePicker) {
                        var s = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) {
                            var o = this.container.find(".right .ampmselect").val();
                            "PM" === o && s < 12 && (s += 12), "AM" === o && 12 === s && (s = 0)
                        }
                        var l = parseInt(this.container.find(".right .minuteselect").val(), 10), c = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        r = r.clone().hour(s).minute(l).second(c)
                    }
                    this.setEndDate(r.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                } else this.setStartDate(r.clone());
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        }, calculateChosenLabel: function () {
            var t = !0, e = 0;
            for (var a in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[a][0]) && this.endDate.isSame(this.ranges[a][1])) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html();
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html();
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html() : this.chosenLabel = null, this.showCalendars())
        }, clickApply: function (t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        }, clickCancel: function (t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        }, monthOrYearChanged: function (t) {
            var e = $(t.target).closest(".calendar").hasClass("left"), a = e ? "left" : "right", n = this.container.find(".calendar." + a), i = parseInt(n.find(".monthselect").val(), 10), r = n.find(".yearselect").val();
            e || (r < this.startDate.year() || r == this.startDate.year() && i < this.startDate.month()) && (i = this.startDate.month(), r = this.startDate.year()), this.minDate && (r < this.minDate.year() || r == this.minDate.year() && i < this.minDate.month()) && (i = this.minDate.month(), r = this.minDate.year()), this.maxDate && (r > this.maxDate.year() || r == this.maxDate.year() && i > this.maxDate.month()) && (i = this.maxDate.month(), r = this.maxDate.year()), e ? (this.leftCalendar.month.month(i).year(r), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(i).year(r), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        }, timeChanged: function (t) {
            var e = $(t.target).closest(".calendar"), a = e.hasClass("left"), n = parseInt(e.find(".hourselect").val(), 10), i = parseInt(e.find(".minuteselect").val(), 10), r = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var s = e.find(".ampmselect").val();
                "PM" === s && n < 12 && (n += 12), "AM" === s && 12 === n && (n = 0)
            }
            if (a) {
                var o = this.startDate.clone();
                o.hour(n), o.minute(i), o.second(r), this.setStartDate(o), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())
            } else if (this.endDate) {
                var l = this.endDate.clone();
                l.hour(n), l.minute(i), l.second(r), this.setEndDate(l)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        }, formInputsChanged: function (t) {
            var e = $(t.target).closest(".calendar").hasClass("right"), a = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format), n = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);
            a.isValid() && n.isValid() && (e && n.isBefore(a) && (a = n.clone()), this.setStartDate(a), this.setEndDate(n), e ? this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                return n + "年" + e + "月" + a + "日"
            })) : this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, function (t, e, a, n) {
                return n + "年" + e + "月" + a + "日"
            }))), this.updateView()
        }, formInputsFocused: function (t) {
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass("active"), $(t.target).addClass("active"), $(t.target).closest(".calendar").hasClass("right") ? this.firstDate && (this.endDate = null, this.setStartDate(this.startDate.clone()), this.updateView()) : this.firstDateEnd && "退房日期" !== this.container.find('input[name="daterangepicker_end"]').val() && (this.setEndDate(this.oldEndDate.clone()), this.updateView())
        }, formInputsBlurred: function (t) {
            if (this.firstDateEnd) {
                if (!this.endDate) {
                    var e = this.container.find('input[name="daterangepicker_end"]').val(), a = moment(e, this.locale.format);
                    a.isValid() ? (this.setEndDate(a), this.updateView()) : "退房日期" !== e && (this.setEndDate(this.oldEndDate.clone()), this.updateView())
                }
            } else this.updateView()
        }, elementChanged: function () {
            if (this.element.is("input") && this.element.val().length && !(this.element.val().length < this.locale.format.length)) {
                var t = this.element.val().split(this.locale.separator), e = null, a = null;
                2 === t.length && (e = moment(t[0], this.locale.format), a = moment(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === a) && (e = moment(this.element.val(), this.locale.format), a = e), e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView())
            }
        }, keydown: function (t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide()
        }, updateElement: function () {
            this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        }, remove: function () {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, $.fn.daterangepicker = function (t, e) {
        return this.each(function () {
            var a = $(this);
            a.data("daterangepicker") && a.data("daterangepicker").remove(), a.data("daterangepicker", new DateRangePicker(a, t, e))
        }), this
    }, DateRangePicker
}), pickerDateRange.prototype.init = function (t) {
    var e = this, a = void 0 !== t ? t && $("#" + e.compareCheckboxId).attr("checked") : $("#" + e.compareCheckboxId).attr("checked");
    $("#" + this.dateListId).empty();
    var n = "" == this.mOpts.endDate ? new Date : this.str2date(this.mOpts.endDate);
    if (this.calendar_endDate = new Date(n.getFullYear(), n.getMonth() + 1, 0), this.mOpts.magicSelect && "ta" == this.mOpts.theme) {
        var i = 0;
        do {
            var r = null;
            if (0 == i)r = this.fillDate(this.str2date($("#" + this.endDateId).val()).getFullYear(), this.str2date($("#" + this.endDateId).val()).getMonth(), i), $("#" + this.dateListId).append(r); else {
                r = this.fillDate(this.str2date($("#" + this.startDateId).val()).getFullYear(), this.str2date($("#" + this.startDateId).val()).getMonth(), i);
                var s = "ta" == this.mOpts.theme ? $("#" + this.dateListId).find("table").get(0) : $("#" + this.dateListId).find("td").get(0);
                $(s).before(r)
            }
            i++
        } while (i < 2);
        this.calendar_startDate = new Date(this.str2date($("#" + this.startDateId).val()).getFullYear(), this.str2date($("#" + this.startDateId).val()).getMonth(), 1)
    } else {
        for (var i = 0; i < this.mOpts.calendars; i++) {
            var r = null;
            if ("ta" == this.mOpts.theme ? r = this.fillDate(n.getFullYear(), n.getMonth(), i) : (r = document.createElement("td"), $(r).append(this.fillDate(n.getFullYear(), n.getMonth(), i)), $(r).css("vertical-align", "top")), 0 == i)$("#" + this.dateListId).append(r); else {
                var s = "ta" == this.mOpts.theme ? $("#" + this.dateListId).find("table").get(0) : $("#" + this.dateListId).find("td").get(0);
                $(s).before(r)
            }
            n.setMonth(n.getMonth() - 1, 1)
        }
        this.calendar_startDate = new Date(n.getFullYear(), n.getMonth() + 1, 1)
    }
    $("#" + this.preMonth).bind("click", function () {
        return e.calendar_endDate.setMonth(e.calendar_endDate.getMonth() - 1, 1), e.mOpts.endDate = e.date2ymd(e.calendar_endDate).join("-"), e.init(t), 1 == e.mOpts.calendars && ("" == $("#" + e.startDateId).val() ? e.changeInput(e.startDateId) : e.changeInput(e.endDateId)), !1
    }), $("#" + this.nextMonth).bind("click", function () {
        return e.calendar_endDate.setMonth(e.calendar_endDate.getMonth() + 1, 1), e.mOpts.endDate = e.date2ymd(e.calendar_endDate).join("-"), e.init(t), 1 == e.mOpts.calendars && ("" == $("#" + e.startDateId).val() ? e.changeInput(e.startDateId) : e.changeInput(e.endDateId)), !1
    }), this.mOpts.magicSelect && this.bindChangeForSelect(), this.endDateId != this.dateInput && this.endCompareDateId != this.dateInput && (a && void 0 !== t ? this.addCSS(1) : this.addCSS(0)), a && void 0 !== t ? e.addCSS(1) : e.addCSS(0), $("#" + e.inputCompareId).css("display", a ? "" : "none"), $("#" + this.compareInputDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none");
    for (var o in e.periodObj)$("#" + o).length > 0 && ($("#" + o).unbind("click"), $("#" + o).bind("click", function () {
        var t = "ta" == e.mOpts.theme ? "active" : "a";
        $(this).parent().nextAll().removeClass(t), $(this).parent().prevAll().removeClass(t), $(this).parent().addClass(t);
        var a = e.getSpecialPeriod(e.periodObj[$(this).attr("id")]);
        $("#" + e.startDateId).val(e.formatDate(a.otherday)), $("#" + e.endDateId).val(e.formatDate(a.today)), $("#" + e.mOpts.startDateId).val($("#" + e.startDateId).val()), $("#" + e.mOpts.endDateId).val($("#" + e.endDateId).val()), "ta" == e.mOpts.theme ? $("#" + e.compareInputDiv).hide() : $("#" + e.inputCompareId).css("display", "none"), $("#" + e.compareCheckboxId).attr("checked", !1), $("#" + e.mOpts.compareCheckboxId).attr("checked", !1), $("#" + this.compareInputDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none"), e.close(1), $("#" + e.startCompareDateId).val(""), $("#" + e.endCompareDateId).val(""), $("#" + e.mOpts.startCompareDateId).val(""), $("#" + e.mOpts.endCompareDateId).val(""), $("#" + e.mOpts.compareCheckboxId).val(0), $("#" + e.mOpts.replaceBtn).length > 0 && ($(".contrast").hide(), $("#" + e.mOpts.replaceBtn).text("按时间对比")), e.mOpts.success({
            startDate: $("#" + e.mOpts.startDateId).val(),
            endDate: $("#" + e.mOpts.endDateId).val(),
            needCompare: $("#" + e.mOpts.compareCheckboxId).val(),
            startCompareDate: $("#" + e.mOpts.startCompareDateId).val(),
            endCompareDate: $("#" + e.mOpts.endCompareDateId).val()
        })
    }));
    $(document).bind("click", function () {
        e.close()
    }), $("#" + this.inputId).bind("change", function () {
        "" === $(this).val() && ($("#" + e.startDateId).val(""), $("#" + e.endDateId).val(""), $("#" + e.startCompareDateId).val(""), $("#" + e.endCompareDateId).val(""))
    })
}, pickerDateRange.prototype.bindChangeForSelect = function () {
    var t = this, e = function (t, e, a, n) {
        function i() {
            $("#" + e).removeClass(n)
        }

        function r() {
            $("#" + e).addClass(n)
        }

        function s() {
            return $("#" + e).attr("class") == n
        }

        n = n || "open";
        var o = null;
        $("#" + t).click(function () {
            s() ? i() : r()
        }).mouseover(function () {
            clearTimeout(o)
        }).mouseout(function () {
            o = setTimeout(i, 500)
        }), $("#" + a).mouseover(function () {
            clearTimeout(o)
        }).mouseout(function () {
            o = setTimeout(i, 500)
        })
    };
    try {
        $("#" + this.dateListId).find('div[id*="selected"]').each(function () {
            var a = $(this).attr("id").match(/(\w+)_(\d)/i);
            if (a) {
                var n = a[1], i = a[2];
                "yselected" == n ? e("_ybtn_" + i, $(this).attr("id"), "_yctn_" + i) : "mselected" == n && e("_mbtn_" + i, $(this).attr("id"), "_mctn_" + i), $(this).find("li a").each(function () {
                    $(this).click(function () {
                        var e = $(this).parents(".select_wrap").attr("id").match(/(\w+)_(\d)/i), a = e[1], n = e[2], i = null;
                        !1 ^ n ? ("yselected" == a ? t.calendar_startDate.setYear(1 * $(this).text(), 1) : (a = "mselected") && t.calendar_startDate.setMonth(1 * $(this).text() - 1, 1), t.mOpts.startDate = t.date2ymd(t.calendar_startDate).join("-"), i = t.fillDate(t.calendar_startDate.getFullYear(), t.calendar_startDate.getMonth(), n)) : ("yselected" == a ? t.calendar_endDate.setYear(1 * $(this).text(), 1) : (a = "mselected") && t.calendar_endDate.setMonth(1 * $(this).text() - 1, 1), t.mOpts.endDate = t.date2ymd(t.calendar_endDate).join("-"), i = t.fillDate(t.calendar_endDate.getFullYear(), t.calendar_endDate.getMonth(), n));
                        var r = $("#" + t.dateListId).find("table").get(1 ^ n);
                        $(r).replaceWith(i), t.removeCSS(0), t.bindChangeForSelect()
                    })
                })
            }
        })
    } catch (t) {
        window.console && console.log(t)
    }
}, pickerDateRange.prototype.getSpecialPeriod = function (t) {
    var e = this, a = new Date;
    1 == e.mOpts.isTodayValid && "" != e.mOpts.isTodayValid || 2 > t || a.setTime(a.getTime() - 864e5);
    var n = a.getTime() - 24 * t * 60 * 60 * 1e3 < 1e3 * e.mOpts.minValidDate ? 1e3 * e.mOpts.minValidDate : a.getTime() - 24 * t * 60 * 60 * 1e3, i = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate();
    a.setTime(n);
    var r = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate();
    return t == e.periodObj.aYesterday && (i = r), {today: i, otherday: r}
}, pickerDateRange.prototype.getCurrentDate = function () {
    return {
        startDate: $("#" + this.mOpts.startDateId).val(),
        endDate: $("#" + this.mOpts.endDateId).val(),
        needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
        startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
        endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
    }
}, pickerDateRange.prototype.removeCSS = function (t, e) {
    void 0 === e && (e = this.mOpts.theme + "_" + this.mOpts.coincideCss), void 0 === t && (t = 0);
    var a = this.calendar_startDate, n = this.calendar_endDate;
    this.mOpts.magicSelect && (a = this.str2date($("#" + this.startDateId).val()), n = this.str2date($("#" + this.endDateId).val()));
    for (var i = new Date(a.getFullYear(), a.getMonth(), a.getDate()), r = "", s = new Date(i); s.getTime() <= n.getTime(); s.setDate(s.getDate() + 1))r = 0 == t ? this.mOpts.theme + "_" + this.mOpts.selectCss : this.mOpts.theme + "_" + this.mOpts.compareCss, $("#" + this.calendarId + "_" + this.date2ymd(s).join("-")).removeClass(r), $("#" + this.calendarId + "_" + this.date2ymd(s).join("-")).removeClass(this.mOpts.firstCss).removeClass(this.mOpts.lastCss).removeClass(this.mOpts.clickCss)
}, pickerDateRange.prototype.addCSS = function (t, e) {
    void 0 === e && (e = this.mOpts.theme + "_" + this.mOpts.coincideCss), void 0 === t && (t = 0);
    for (var a = this.str2date($("#" + this.startDateId).val()), n = this.str2date($("#" + this.endDateId).val()), i = this.str2date($("#" + this.startCompareDateId).val()), r = this.str2date($("#" + this.endCompareDateId).val()), s = 0 == t ? a : i, o = 0 == t ? n : r, l = "", c = new Date(s); c.getTime() <= o.getTime(); c.setDate(c.getDate() + 1))0 == t ? (l = this.mOpts.theme + "_" + this.mOpts.selectCss, $("#" + this.calendarId + "_" + this.date2ymd(c).join("-")).removeClass(this.mOpts.firstCss).removeClass(this.mOpts.lastCss).removeClass(this.mOpts.clickCss), $("#" + this.calendarId + "_" + this.date2ymd(c).join("-")).removeClass(l)) : l = this.mOpts.theme + "_" + this.mOpts.compareCss, $("#" + this.calendarId + "_" + this.date2ymd(c).join("-")).attr("class", l);
    "ta" == this.mOpts.theme && ($("#" + this.calendarId + "_" + this.date2ymd(new Date(s)).join("-")).removeClass().addClass(this.mOpts.firstCss), $("#" + this.calendarId + "_" + this.date2ymd(new Date(o)).join("-")).removeClass().addClass(this.mOpts.lastCss), s.getTime() == o.getTime() && $("#" + this.calendarId + "_" + this.date2ymd(new Date(o)).join("-")).removeClass().addClass(this.mOpts.clickCss))
}, pickerDateRange.prototype.checkDateRange = function (t, e) {
    var a, n = this.str2date(t), i = this.str2date(e), r = n.getTime(), s = i.getTime();
    if (s >= r) {
        if (a = this.str2date(t), a.setMonth(a.getMonth() + this.mOpts.monthRangeMax), a.setDate(a.getDate() + this.mOpts.dayRangeMax - 1), a.getTime() < s)return alert("结束日期不能大于：" + this.date2ymd(a).join("-")), !1
    } else if (a = this.str2date(e), a.setMonth(a.getMonth() - this.mOpts.monthRangeMax), a.setDate(a.getDate() - this.mOpts.dayRangeMax + 1), a.getTime() > s)return alert("开始日期不能小于：" + this.date2ymd(a).join("-")), !1;
    return !0
}, pickerDateRange.prototype.selectDate = function (t) {
    this.changeInput(this.dateInput);
    var e = this.formatDate(t);
    if (this.startDateId == this.dateInput)this.removeCSS(0), this.removeCSS(1), $("#" + this.calendarId + "_" + t).attr("class", "ta" == this.mOpts.theme ? this.mOpts.clickCss : this.mOpts.theme + "_" + this.mOpts.selectCss), this.startDefDate = $("#" + this.dateInput).val(), $("#" + this.dateInput).val(e), 1 == this.mOpts.singleCompare || 1 == this.mOpts.isSingleDay ? (this.dateInput = this.startDateId, $("#" + this.endDateId).val(e), (this.mOpts.shortOpr || this.mOpts.autoSubmit) && this.close(1), this.mOpts.success({
        startDate: $("#" + this.mOpts.startDateId).val(),
        endDate: $("#" + this.mOpts.endDateId).val(),
        needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
        startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
        endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
    })) : this.dateInput = this.endDateId; else if (this.endDateId == this.dateInput) {
        if ("" == $("#" + this.startDateId).val())return this.dateInput = this.startDateId, this.selectDate(t), !1;
        if (0 == this.checkDateRange($("#" + this.startDateId).val(), t))return !1;
        -1 == this.compareStrDate(t, $("#" + this.startDateId).val()) && ($("#" + this.dateInput).val($("#" + this.startDateId).val()), $("#" + this.startDateId).val(e), e = $("#" + this.dateInput).val()), $("#" + this.dateInput).val(e), this.dateInput = this.startDateId, this.removeCSS(0), this.addCSS(0), this.startDefDate = "", this.mOpts.autoSubmit && (this.close(1), this.mOpts.success({
            startDate: $("#" + this.mOpts.startDateId).val(),
            endDate: $("#" + this.mOpts.endDateId).val(),
            needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
            startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
            endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
        }))
    } else if (this.startCompareDateId == this.dateInput)this.removeCSS(1), this.removeCSS(0), $("#" + this.calendarId + "_" + t).attr("class", "ta" == this.mOpts.theme ? this.mOpts.clickCss : this.mOpts.theme + "_" + this.mOpts.compareCss), this.startDefDate = $("#" + this.dateInput).val(), $("#" + this.dateInput).val(e), 1 == this.mOpts.singleCompare || 1 == this.mOpts.isSingleDay ? (this.dateInput = this.startCompareDateId, $("#" + this.endCompareDateId).val(e), (this.mOpts.shortOpr || this.mOpts.autoSubmit) && this.close(1), this.mOpts.success({
        startDate: $("#" + this.mOpts.startDateId).val(),
        endDate: $("#" + this.mOpts.endDateId).val(),
        needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
        startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
        endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
    })) : this.dateInput = this.endCompareDateId; else if (this.endCompareDateId == this.dateInput) {
        if ("" == $("#" + this.startCompareDateId).val())return this.dateInput = this.startCompareDateId, this.selectDate(t), !1;
        if (0 == this.checkDateRange($("#" + this.startCompareDateId).val(), t))return !1;
        -1 == this.compareStrDate(t, $("#" + this.startCompareDateId).val()) && ($("#" + this.dateInput).val($("#" + this.startCompareDateId).val()), $("#" + this.startCompareDateId).val(e), e = $("#" + this.dateInput).val()), $("#" + this.dateInput).val(e), this.dateInput = this.startCompareDateId, this.removeCSS(1), this.addCSS(1), this.startDefDate = "", this.mOpts.autoSubmit && (this.close(1), this.mOpts.success({
            startDate: $("#" + this.mOpts.startDateId).val(),
            endDate: $("#" + this.mOpts.endDateId).val(),
            needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
            startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
            endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
        }))
    }
}, pickerDateRange.prototype.show = function (t, e) {
    $("#" + e.dateRangeDiv).css("display", t ? "none" : ""), $("#" + e.dateRangeCompareDiv).css("display", t ? "" : "none");
    var a = t ? $("#" + this.inputCompareId).offset() : $("#" + this.inputId).offset(), n = (t ? $("#" + this.inputCompareId).height() : $("#" + this.inputId).height(), parseInt($(document.body)[0].clientWidth)), i = a.left;
    return $("#" + this.calendarId).css("display", "block"), 1 != this.mOpts.singleCompare && 1 != this.mOpts.isSingleDay || ($("#" + this.endDateId).css("display", "none"), $("#" + this.endCompareDateId).css("display", "none"), $("#" + this.mOpts.joinLineId).css("display", "none"), $("." + this.mOpts.joinLineId).css("display", "none")), 0 < n && $("#" + this.calendarId).width() + a.left > n && (i = a.left + $("#" + this.inputId).width() - $("#" + this.calendarId).width() + (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? 5 : 0), "ta" == e.mOpts.theme && (i += 50)), $("#" + this.calendarId).css("left", i + "px"), $("#" + this.calendarId).css("top", a.top + ("ta" == e.mOpts.theme ? 110 : 22) + "px"), t ? this.changeInput(this.startCompareDateId) : this.changeInput(this.startDateId), !1
}, pickerDateRange.prototype.close = function (t) {
    var e = this;
    if (t) {
        !0 === this.mOpts.shortOpr ? ($("#" + this.inputId).val($("#" + this.startDateId).val()), $("#" + this.inputCompareId).val($("#" + this.startCompareDateId).val())) : $("#" + this.inputId).val($("#" + this.startDateId).val() + ("" == $("#" + this.endDateId).val() ? "" : this.mOpts.defaultText + $("#" + this.endDateId).val()));
        var a = 1 == this.mOpts.isTodayValid && "" != this.mOpts.isTodayValid ? (new Date).getTime() : (new Date).getTime() - 864e5, n = this.str2date($("#" + this.startDateId).val()).getTime(), i = this.str2date($("#" + this.endDateId).val()).getTime();
        if (i < n) {
            var r = $("#" + this.startDateId).val();
            $("#" + this.startDateId).val($("#" + this.endDateId).val()), $("#" + this.endDateId).val(r)
        }
        var s = 1 == this.mOpts.shortOpr ? $("#" + this.startDateId).val() : $("#" + this.startDateId).val() + ("" == $("#" + this.endDateId).val() ? "" : this.mOpts.defaultText + $("#" + this.endDateId).val()), o = document.getElementById(this.inputId);
        if (o && "INPUT" == o.tagName ? ($("#" + this.inputId).val(s), $("#" + this.inputCompareId).is(":visible") && $("#" + this.inputCompareId).val(d)) : ($("#" + this.inputId).html(s), $("#" + this.inputCompareId).is(":visible") && $("#" + this.inputCompareId).html(d)), "ta" != this.mOpts.theme && "" != $("#" + this.startCompareDateId).val() && "" != $("#" + this.endCompareDateId).val()) {
            var l = this.str2date($("#" + this.startCompareDateId).val()).getTime(), c = (this.str2date($("#" + this.endCompareDateId).val()).getTime(), l + i - n);
            c > a && (c = a, $("#" + this.startCompareDateId).val(this.formatDate(this.date2ymd(new Date(c + n - i)).join("-")))), $("#" + this.endCompareDateId).val(this.formatDate(this.date2ymd(new Date(c)).join("-")));
            var l = this.str2date($("#" + this.startCompareDateId).val()).getTime();
            if (this.str2date($("#" + this.endCompareDateId).val()).getTime() < l) {
                var r = $("#" + this.startCompareDateId).val();
                $("#" + this.startCompareDateId).val($("#" + this.endCompareDateId).val()), $("#" + this.endCompareDateId).val(r)
            }
        }
        var d = 1 == this.mOpts.shortOpr ? $("#" + this.startCompareDateId).val() : $("#" + this.startCompareDateId).val() + ("" == $("#" + this.endCompareDateId).val() ? "" : this.mOpts.defaultText + $("#" + this.endCompareDateId).val());
        o && "INPUT" == o.tagName ? $("#" + this.inputCompareId).val(d) : $("#" + this.inputCompareId).html(d);
        $("#" + this.mOpts.startDateId).val($("#" + this.startDateId).val()), $("#" + this.mOpts.endDateId).val($("#" + this.endDateId).val()), $("#" + this.mOpts.startCompareDateId).val($("#" + this.startCompareDateId).val()), $("#" + this.mOpts.endCompareDateId).val($("#" + this.endCompareDateId).val());
        for (var h in this.periodObj)$("#" + this.mOpts[h]) && $("#" + this.mOpts[h]).parent().removeClass("a")
    }
    return $("#" + e.calendarId).css("display", "none"), !1
}, pickerDateRange.prototype.fillDate = function (t, e, a) {
    var n = this, i = "ta" == this.mOpts.theme, r = new Date(t, e, 1), s = new Date(t, e, 1), o = s.getDay();
    s.setDate(1 - o);
    var l = new Date(t, e + 1, 0), c = new Date(t, e + 1, 0);
    o = c.getDay(), c.setDate(c.getDate() + 6 - o);
    var d = new Date, h = d.getDate(), u = d.getMonth(), p = d.getFullYear(), f = document.createElement("table");
    if (i) {
        if (f.className = this.mOpts.dateTable, cap = document.createElement("caption"), this.mOpts.magicSelect) {
            var m = ['<div class="select_wrap" id="yselected_' + a + '"><div class="select" id="_ybtn_' + a + '">' + t + '</div><div class="dropdown" id="_yctn_' + a + '"><ul class="list_menu">'], g = ['<div class="select_wrap" id="mselected_' + a + '"><div class="select" id="_mbtn_' + a + '">' + (e + 1) + '</div><div class="dropdown" id="_mctn_' + a + '"><ul class="list_menu">'];
            v = 1, yt = p;
            do {
                m.push('<li><a href="javascript:;">' + yt-- + "</a></li>"), g.push('<li><a href="javascript:;">' + v++ + "</a></li>")
            } while (v <= 12);
            m.push("</ul></div></div>"), g.push("</ul></div></div>"), $(cap).append(m.join("") + '<span class="joinLine"> 年 </span>' + g.join("") + '<span class="joinLine"> 月 </span>')
        } else $(cap).append(t + "年" + (e + 1) + "月");
        $(f).append(cap), thead = document.createElement("thead"), tr = document.createElement("tr");
        for (var _ = ["日", "一", "二", "三", "四", "五", "六"], v = 0; v < 7; v++)th = document.createElement("th"), $(th).append(_[v]), $(tr).append(th);
        $(thead).append(tr), $(f).append(thead), tr = document.createElement("tr"), td = document.createElement("td"), this.mOpts.magicSelect || (0 == a && $(td).append('<a href="javascript:void(0);" id="' + this.nextMonth + '"><i class="i_next"></i></a>'), a + 1 == this.mOpts.calendars && $(td).append('<a href="javascript:void(0);" id="' + this.preMonth + '"><i class="i_pre"></i></a>')), $(td).attr("colSpan", 7), $(td).css("text-align", "center"), $(tr).append(td), $(f).append(tr)
    } else {
        f.className = this.mOpts.theme + "_" + this.mOpts.dateTable, tr = document.createElement("tr"), td = document.createElement("td"), 0 == a && $(td).append('<a href="javascript:void(0);" id="' + this.nextMonth + '" class="gri_dateRangeNextMonth"><span>next</span></a>'), a + 1 == this.mOpts.calendars && $(td).append('<a href="javascript:void(0);" id="' + this.preMonth + '" class="gri_dateRangePreMonth"><span>pre</span></a>'), $(td).append(t + "年" + (e + 1) + "月"), $(td).attr("colSpan", 7), $(td).css("text-align", "center"), $(td).css("background-color", "#F9F9F9"), $(tr).append(td), $(f).append(tr);
        var _ = ["日", "一", "二", "三", "四", "五", "六"];
        tr = document.createElement("tr");
        for (var v = 0; v < 7; v++)td = document.createElement("td"), $(td).append(_[v]), $(tr).append(td);
        $(f).append(tr)
    }
    for (var D = "", y = 0, k = "", b = s; b.getTime() <= c.getTime(); b.setDate(b.getDate() + 1)) {
        if (b.getTime() < r.getTime())D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "-1"; else if (b.getTime() > l.getTime())D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "1"; else if (1 == this.mOpts.stopToday && b.getTime() > d.getTime() || b.getTime() < 1e3 * n.mOpts.minValidDate || "" !== n.mOpts.maxValidDate && b.getTime() > 1e3 * n.mOpts.maxValidDate)D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "2"; else if (1 == this.mOpts.startToday && b.getTime() < d.getTime() - 864e5 || b.getTime() < 1e3 * n.mOpts.minValidDate || "" !== n.mOpts.maxValidDate && b.getTime() > 1e3 * n.mOpts.maxValidDate)D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "2"; else {
            if (y = "0", b.getDate() == h && b.getMonth() == u && b.getFullYear() == p ? 1 == this.mOpts.isTodayValid ? D = this.mOpts.theme + "_" + this.mOpts.isToday : (D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "2") : D = "",
                !this.mOpts.weekendDis || 6 != b.getDay() && 0 != b.getDay() || (D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "3"), this.mOpts.disCertainDay && this.mOpts.disCertainDay.length > 0)for (var w in this.mOpts.disCertainDay)isNaN(this.mOpts.disCertainDay[w]) || b.getDay() !== this.mOpts.disCertainDay[w] || (D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "4");
            if (this.mOpts.disCertainDate && this.mOpts.disCertainDate.length > 0) {
                var C = !1;
                for (var w in this.mOpts.disCertainDate)if (!isNaN(this.mOpts.disCertainDate[w]) || isNaN(parseInt(this.mOpts.disCertainDate[w])))if (!0 === this.mOpts.disCertainDate[0]) {
                    if (!(C = !(b.getDate() === this.mOpts.disCertainDate[w])))break
                } else if (C = !(b.getDate() !== this.mOpts.disCertainDate[w]))break;
                C && (D = this.mOpts.theme + "_" + this.mOpts.disableGray, y = "4")
            }
        }
        0 == b.getDay() && (tr = document.createElement("tr")), td = document.createElement("td"), td.innerHTML = b.getDate(), "" != D && $(td).attr("class", D), 0 == y && (k = b.getFullYear() + "-" + (b.getMonth() + 1) + "-" + b.getDate(), $(td).attr("id", n.calendarId + "_" + k), $(td).css("cursor", "pointer"), function (t) {
            $(td).bind("click", t, function () {
                return n.selectDate(t), !1
            })
        }(k)), $(tr).append(td), 6 == b.getDay() && $(f).append(tr)
    }
    return f
}, pickerDateRange.prototype.str2date = function (t) {
    var e = t.split("-");
    return new Date(e[0], e[1] - 1, e[2])
}, pickerDateRange.prototype.compareStrDate = function (t, e) {
    var a = this.str2date(t), n = this.str2date(e);
    return a.getTime() > n.getTime() ? 1 : a.getTime() == n.getTime() ? 0 : -1
}, pickerDateRange.prototype.date2ymd = function (t) {
    return [t.getFullYear(), t.getMonth() + 1, t.getDate()]
}, pickerDateRange.prototype.changeInput = function (t) {
    1 == this.mOpts.isSingleDay && (t = this.startDateId);
    var e = [this.startDateId, this.startCompareDateId, this.endDateId, this.endCompareDateId], a = "";
    a = t == this.startDateId || t == this.endDateId ? this.mOpts.theme + "_" + this.mOpts.selectCss : this.mOpts.theme + "_" + this.mOpts.compareCss, t == this.endDateId && this.mOpts.singleCompare && (a = this.mOpts.theme + "_" + this.mOpts.compareCss);
    for (var n in e)$("#" + e[n]).removeClass(this.mOpts.theme + "_" + this.mOpts.selectCss), $("#" + e[n]).removeClass(this.mOpts.theme + "_" + this.mOpts.compareCss);
    $("#" + t).addClass(a), $("#" + t).css("background-repeat", "repeat"), this.dateInput = t
}, pickerDateRange.prototype.formatDate = function (t) {
    return t.replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (t, e, a, n) {
        return e + "-" + a + "-" + n
    })
};
var requirejs, require, define;
!function (ca) {
    function G(t) {
        return "[object Function]" === M.call(t)
    }

    function H(t) {
        return "[object Array]" === M.call(t)
    }

    function v(t, e) {
        if (t) {
            var a;
            for (a = 0; a < t.length && (!t[a] || !e(t[a], a, t)); a += 1);
        }
    }

    function U(t, e) {
        if (t) {
            var a;
            for (a = t.length - 1; -1 < a && (!t[a] || !e(t[a], a, t)); a -= 1);
        }
    }

    function s(t, e) {
        return ga.call(t, e)
    }

    function j(t, e) {
        return s(t, e) && t[e]
    }

    function B(t, e) {
        for (var a in t)if (s(t, a) && e(t[a], a))break
    }

    function V(t, e, a, n) {
        return e && B(e, function (e, i) {
            !a && s(t, i) || (!n || "object" != typeof e || !e || H(e) || G(e) || e instanceof RegExp ? t[i] = e : (t[i] || (t[i] = {}), V(t[i], e, a, n)))
        }), t
    }

    function t(t, e) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function da(t) {
        throw t
    }

    function ea(t) {
        if (!t)return t;
        var e = ca;
        return v(t.split("."), function (t) {
            e = e[t]
        }), e
    }

    function C(t, e, a, n) {
        return e = Error(e + "\nhttp://requirejs.org/docs/errors.html#" + t), e.requireType = t, e.requireModules = n, a && (e.originalError = a), e
    }

    function ha(e) {
        function a(t, e, a) {
            var n, i, r, s, o, l, c, d = e && e.split("/");
            i = d;
            var h = I.map, u = h && h["*"];
            if (t && "." === t.charAt(0))if (e) {
                for (i = d.slice(0, d.length - 1), t = t.split("/"), e = t.length - 1, I.nodeIdCompat && R.test(t[e]) && (t[e] = t[e].replace(R, "")), i = t = i.concat(t), s = i.length, e = 0; e < s; e++)if ("." === (r = i[e]))i.splice(e, 1), e -= 1; else if (".." === r) {
                    if (1 === e && (".." === i[2] || ".." === i[0]))break;
                    0 < e && (i.splice(e - 1, 2), e -= 2)
                }
                t = t.join("/")
            } else 0 === t.indexOf("./") && (t = t.substring(2));
            if (a && h && (d || u)) {
                i = t.split("/"), e = i.length;
                t:for (; 0 < e; e -= 1) {
                    if (s = i.slice(0, e).join("/"), d)for (r = d.length; 0 < r; r -= 1)if ((a = j(h, d.slice(0, r).join("/"))) && (a = j(a, s))) {
                        n = a, o = e;
                        break t
                    }
                    !l && u && j(u, s) && (l = j(u, s), c = e)
                }
                !n && l && (n = l, o = c), n && (i.splice(0, o, n), t = i.join("/"))
            }
            return (n = j(I.pkgs, t)) ? n : t
        }

        function n(t) {
            z && v(document.getElementsByTagName("script"), function (e) {
                if (e.getAttribute("data-requiremodule") === t && e.getAttribute("data-requirecontext") === b.contextName)return e.parentNode.removeChild(e), !0
            })
        }

        function i(t) {
            var e = j(I.paths, t);
            if (e && H(e) && 1 < e.length)return e.shift(), b.require.undef(t), b.require([t]), !0
        }

        function r(t) {
            var e, a = t ? t.indexOf("!") : -1;
            return -1 < a && (e = t.substring(0, a), t = t.substring(a + 1, t.length)), [e, t]
        }

        function o(t, e, n, i) {
            var s, o, l = null, c = e ? e.name : null, d = t, h = !0, u = "";
            return t || (h = !1, t = "_@r" + (N += 1)), t = r(t), l = t[0], t = t[1], l && (l = a(l, c, i), o = j(A, l)), t && (l ? u = o && o.normalize ? o.normalize(t, function (t) {
                return a(t, c, i)
            }) : a(t, c, i) : (u = a(t, c, i), t = r(u), l = t[0], u = t[1], n = !0, s = b.nameToUrl(u))), n = !l || o || n ? "" : "_unnormalized" + (F += 1), {
                prefix: l,
                name: u,
                parentMap: e,
                unnormalized: !!n,
                url: s,
                originalName: d,
                isDefine: h,
                id: (l ? l + "!" + u : u) + n
            }
        }

        function l(t) {
            var e = t.id, a = j(x, e);
            return a || (a = x[e] = new b.Module(t)), a
        }

        function c(t, e, a) {
            var n = t.id, i = j(x, n);
            !s(A, n) || i && !i.defineEmitComplete ? (i = l(t), i.error && "error" === e ? a(i.error) : i.on(e, a)) : "defined" === e && a(A[n])
        }

        function d(t, e) {
            var a = t.requireModules, n = !1;
            e ? e(t) : (v(a, function (e) {
                (e = j(x, e)) && (e.error = t, e.events.error && (n = !0, e.emit("error", t)))
            }), n || h.onError(t))
        }

        function u() {
            S.length && (ia.apply(T, [T.length, 0].concat(S)), S = [])
        }

        function p(t) {
            delete x[t], delete M[t]
        }

        function f(t, e, a) {
            var n = t.map.id;
            t.error ? t.emit("error", t.error) : (e[n] = !0, v(t.depMaps, function (n, i) {
                var r = n.id, s = j(x, r);
                s && !t.depMatched[i] && !a[r] && (j(e, r) ? (t.defineDep(i, A[r]), t.check()) : f(s, e, a))
            }), a[n] = !0)
        }

        function m() {
            var t, e, a = (t = 1e3 * I.waitSeconds) && b.startTime + t < (new Date).getTime(), r = [], s = [], o = !1, l = !0;
            if (!y) {
                if (y = !0, B(M, function (t) {
                        var c = t.map, d = c.id;
                        if (t.enabled && (c.isDefine || s.push(t), !t.error))if (!t.inited && a)i(d) ? o = e = !0 : (r.push(d), n(d)); else if (!t.inited && t.fetched && c.isDefine && (o = !0, !c.prefix))return l = !1
                    }), a && r.length)return t = C("timeout", "Load timeout for modules: " + r, null, r), t.contextName = b.contextName, d(t);
                l && v(s, function (t) {
                    f(t, {}, {})
                }), a && !e || !o || !z && !fa || $ || ($ = setTimeout(function () {
                    $ = 0, m()
                }, 50)), y = !1
            }
        }

        function g(t) {
            s(A, t[0]) || l(o(t[0], null, !0)).init(t[1], t[2])
        }

        function _(t) {
            var t = t.currentTarget || t.srcElement, e = b.onScriptLoad;
            return t.detachEvent && !Z ? t.detachEvent("onreadystatechange", e) : t.removeEventListener("load", e, !1), e = b.onScriptError, (!t.detachEvent || Z) && t.removeEventListener("error", e, !1), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function D() {
            var t;
            for (u(); T.length;) {
                if (t = T.shift(), null === t[0])return d(C("mismatch", "Mismatched anonymous define() module: " + t[t.length - 1]));
                g(t)
            }
        }

        var y, k, b, w, $, I = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, x = {}, M = {}, Y = {}, T = [], A = {}, E = {}, L = {}, N = 1, F = 1;
        return w = {
            require: function (t) {
                return t.require ? t.require : t.require = b.makeRequire(t.map)
            }, exports: function (t) {
                if (t.usingExports = !0, t.map.isDefine)return t.exports ? A[t.map.id] = t.exports : t.exports = A[t.map.id] = {}
            }, module: function (t) {
                return t.module ? t.module : t.module = {
                    id: t.map.id, uri: t.map.url, config: function () {
                        return j(I.config, t.map.id) || {}
                    }, exports: t.exports || (t.exports = {})
                }
            }
        }, k = function (t) {
            this.events = j(Y, t.id) || {}, this.map = t, this.shim = j(I.shim, t.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, k.prototype = {
            init: function (e, a, n, i) {
                i = i || {}, this.inited || (this.factory = a, n ? this.on("error", n) : this.events.error && (n = t(this, function (t) {
                    this.emit("error", t)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            }, defineDep: function (t, e) {
                this.depMatched[t] || (this.depMatched[t] = !0, this.depCount -= 1, this.depExports[t] = e)
            }, fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, b.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim)return e.prefix ? this.callPlugin() : this.load();
                    b.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], t(this, function () {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            }, load: function () {
                var t = this.map.url;
                E[t] || (E[t] = !0, b.load(this.map.id, t))
            }, check: function () {
                if (this.enabled && !this.enabling) {
                    var t, e, a = this.map.id;
                    e = this.depExports;
                    var n = this.exports, i = this.factory;
                    if (this.inited) {
                        if (this.error)this.emit("error", this.error); else if (!this.defining) {
                            if (this.defining = !0, 1 > this.depCount && !this.defined) {
                                if (G(i)) {
                                    if (this.events.error && this.map.isDefine || h.onError !== da)try {
                                        n = b.execCb(a, i, e, n)
                                    } catch (e) {
                                        t = e
                                    } else n = b.execCb(a, i, e, n);
                                    if (this.map.isDefine && void 0 === n && ((e = this.module) ? n = e.exports : this.usingExports && (n = this.exports)), t)return t.requireMap = this.map, t.requireModules = this.map.isDefine ? [this.map.id] : null, t.requireType = this.map.isDefine ? "define" : "require", d(this.error = t)
                                } else n = i;
                                this.exports = n, this.map.isDefine && !this.ignore && (A[a] = n, h.onResourceLoad) && h.onResourceLoad(b, this.map, this.depMaps), p(a), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            }, callPlugin: function () {
                var e = this.map, n = e.id, i = o(e.prefix);
                this.depMaps.push(i), c(i, "defined", t(this, function (i) {
                    var r, u;
                    u = j(L, this.map.id);
                    var f = this.map.name, m = this.map.parentMap ? this.map.parentMap.name : null, g = b.makeRequire(e.parentMap, {enableBuildCallback: !0});
                    this.map.unnormalized ? (i.normalize && (f = i.normalize(f, function (t) {
                            return a(t, m, !0)
                        }) || ""), i = o(e.prefix + "!" + f, this.map.parentMap), c(i, "defined", t(this, function (t) {
                        this.init([], function () {
                            return t
                        }, null, {enabled: !0, ignore: !0})
                    })), (u = j(x, i.id)) && (this.depMaps.push(i), this.events.error && u.on("error", t(this, function (t) {
                        this.emit("error", t)
                    })), u.enable())) : u ? (this.map.url = b.nameToUrl(u), this.load()) : (r = t(this, function (t) {
                        this.init([], function () {
                            return t
                        }, null, {enabled: !0})
                    }), r.error = t(this, function (t) {
                        this.inited = !0, this.error = t, t.requireModules = [n], B(x, function (t) {
                            0 === t.map.id.indexOf(n + "_unnormalized") && p(t.map.id)
                        }), d(t)
                    }), r.fromText = t(this, function (t, a) {
                        var i = e.name, c = o(i), u = O;
                        a && (t = a), u && (O = !1), l(c), s(I.config, n) && (I.config[i] = I.config[n]);
                        try {
                            h.exec(t)
                        } catch (t) {
                            return d(C("fromtexteval", "fromText eval for " + n + " failed: " + t, t, [n]))
                        }
                        u && (O = !0), this.depMaps.push(c), b.completeLoad(i), g([i], r)
                    }), i.load(e.name, g, r, I))
                })), b.enable(i, this), this.pluginMaps[i.id] = i
            }, enable: function () {
                M[this.map.id] = this, this.enabling = this.enabled = !0, v(this.depMaps, t(this, function (e, a) {
                    var n, i;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[a] = e, n = j(w, e.id))return void(this.depExports[a] = n(this));
                        this.depCount += 1, c(e, "defined", t(this, function (t) {
                            this.defineDep(a, t), this.check()
                        })), this.errback && c(e, "error", t(this, this.errback))
                    }
                    n = e.id, i = x[n], !s(w, n) && i && !i.enabled && b.enable(e, this)
                })), B(this.pluginMaps, t(this, function (t) {
                    var e = j(x, t.id);
                    e && !e.enabled && b.enable(t, this)
                })), this.enabling = !1, this.check()
            }, on: function (t, e) {
                var a = this.events[t];
                a || (a = this.events[t] = []), a.push(e)
            }, emit: function (t, e) {
                v(this.events[t], function (t) {
                    t(e)
                }), "error" === t && delete this.events[t]
            }
        }, b = {
            config: I,
            contextName: e,
            registry: x,
            defined: A,
            urlFetched: E,
            defQueue: T,
            Module: k,
            makeModuleMap: o,
            nextTick: h.nextTick,
            onError: d,
            configure: function (t) {
                t.baseUrl && "/" !== t.baseUrl.charAt(t.baseUrl.length - 1) && (t.baseUrl += "/");
                var e = I.shim, a = {paths: !0, bundles: !0, config: !0, map: !0};
                B(t, function (t, e) {
                    a[e] ? (I[e] || (I[e] = {}), V(I[e], t, !0, !0)) : I[e] = t
                }), t.bundles && B(t.bundles, function (t, e) {
                    v(t, function (t) {
                        t !== e && (L[t] = e)
                    })
                }), t.shim && (B(t.shim, function (t, a) {
                    H(t) && (t = {deps: t}), !t.exports && !t.init || t.exportsFn || (t.exportsFn = b.makeShimExports(t)), e[a] = t
                }), I.shim = e), t.packages && v(t.packages, function (t) {
                    var e, t = "string" == typeof t ? {name: t} : t;
                    e = t.name, t.location && (I.paths[e] = t.location), I.pkgs[e] = t.name + "/" + (t.main || "main").replace(ja, "").replace(R, "")
                }), B(x, function (t, e) {
                    !t.inited && !t.map.unnormalized && (t.map = o(e))
                }), (t.deps || t.callback) && b.require(t.deps || [], t.callback)
            },
            makeShimExports: function (t) {
                return function () {
                    var e;
                    return t.init && (e = t.init.apply(ca, arguments)), e || t.exports && ea(t.exports)
                }
            },
            makeRequire: function (t, i) {
                function r(a, n, c) {
                    var u, p;
                    return i.enableBuildCallback && n && G(n) && (n.__requireJsBuild = !0), "string" == typeof a ? G(n) ? d(C("requireargs", "Invalid require call"), c) : t && s(w, a) ? w[a](x[t.id]) : h.get ? h.get(b, a, t, r) : (u = o(a, t, !1, !0), u = u.id, s(A, u) ? A[u] : d(C("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (D(), b.nextTick(function () {
                        D(), p = l(o(null, t)), p.skipMap = i.skipMap, p.init(a, n, c, {enabled: !0}), m()
                    }), r)
                }

                return i = i || {}, V(r, {
                    isBrowser: z, toUrl: function (e) {
                        var n, i = e.lastIndexOf("."), r = e.split("/")[0];
                        return -1 !== i && ("." !== r && ".." !== r || 1 < i) && (n = e.substring(i, e.length), e = e.substring(0, i)), b.nameToUrl(a(e, t && t.id, !0), n, !0)
                    }, defined: function (e) {
                        return s(A, o(e, t, !1, !0).id)
                    }, specified: function (e) {
                        return e = o(e, t, !1, !0).id, s(A, e) || s(x, e)
                    }
                }), t || (r.undef = function (e) {
                    u();
                    var a = o(e, t, !0), i = j(x, e);
                    n(e), delete A[e], delete E[a.url], delete Y[e], U(T, function (t, a) {
                        t[0] === e && T.splice(a, 1)
                    }), i && (i.events.defined && (Y[e] = i.events), p(e))
                }), r
            },
            enable: function (t) {
                j(x, t.id) && l(t).enable()
            },
            completeLoad: function (t) {
                var e, a, n = j(I.shim, t) || {}, r = n.exports;
                for (u(); T.length;) {
                    if (a = T.shift(), null === a[0]) {
                        if (a[0] = t, e)break;
                        e = !0
                    } else a[0] === t && (e = !0);
                    g(a)
                }
                if (a = j(x, t), !e && !s(A, t) && a && !a.inited) {
                    if (I.enforceDefine && (!r || !ea(r)))return i(t) ? void 0 : d(C("nodefine", "No define call for " + t, null, [t]));
                    g([t, n.deps || [], n.exportsFn])
                }
                m()
            },
            nameToUrl: function (t, e, a) {
                var n, i, r;
                if ((n = j(I.pkgs, t)) && (t = n), n = j(L, t))return b.nameToUrl(n, e, a);
                if (h.jsExtRegExp.test(t))n = t + (e || ""); else {
                    for (n = I.paths, t = t.split("/"), i = t.length; 0 < i; i -= 1)if (r = t.slice(0, i).join("/"), r = j(n, r)) {
                        H(r) && (r = r[0]), t.splice(0, i, r);
                        break
                    }
                    n = t.join("/"), n += e || (/^data\:|\?/.test(n) || a ? "" : ".js"), n = ("/" === n.charAt(0) || n.match(/^[\w\+\.\-]+:/) ? "" : I.baseUrl) + n
                }
                return I.urlArgs ? n + (-1 === n.indexOf("?") ? "?" : "&") + I.urlArgs : n
            },
            load: function (t, e) {
                h.load(b, t, e)
            },
            execCb: function (t, e, a, n) {
                return e.apply(n, a)
            },
            onScriptLoad: function (t) {
                ("load" === t.type || ka.test((t.currentTarget || t.srcElement).readyState)) && (P = null, t = _(t), b.completeLoad(t.id))
            },
            onScriptError: function (t) {
                var e = _(t);
                if (!i(e.id))return d(C("scripterror", "Script error for: " + e.id, t, [e.id]))
            }
        }, b.require = b.makeRequire(), b
    }

    var h, x, y, D, K, E, P, L, q, Q, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, R = /\.js$/, ja = /^\.\//;
    x = Object.prototype;
    var M = x.toString, ga = x.hasOwnProperty, ia = Array.prototype.splice, z = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), fa = !z && "undefined" != typeof importScripts, ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, Z = "undefined" != typeof opera && "[object Opera]" === opera.toString(), F = {}, r = {}, S = [], O = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (G(requirejs))return;
            r = requirejs, requirejs = void 0
        }
        void 0 !== require && !G(require) && (r = require, require = void 0), h = requirejs = function (t, e, a, n) {
            var i, r = "_";
            return !H(t) && "string" != typeof t && (i = t, H(e) ? (t = e, e = a, a = n) : t = []), i && i.context && (r = i.context), (n = j(F, r)) || (n = F[r] = h.s.newContext(r)), i && n.configure(i), n.require(t, e, a)
        }, h.config = function (t) {
            return h(t)
        }, h.nextTick = "undefined" != typeof setTimeout ? function (t) {
            setTimeout(t, 4)
        } : function (t) {
            t()
        }, require || (require = h), h.version = "2.1.11", h.jsExtRegExp = /^\/|:|\?|\.js$/, h.isBrowser = z, x = h.s = {
            contexts: F,
            newContext: ha
        }, h({}), v(["toUrl", "undef", "defined", "specified"], function (t) {
            h[t] = function () {
                var e = F._;
                return e.require[t].apply(e, arguments)
            }
        }), z && (y = x.head = document.getElementsByTagName("head")[0], D = document.getElementsByTagName("base")[0]) && (y = x.head = D.parentNode), h.onError = da, h.createNode = function (t) {
            var e = t.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return e.type = t.scriptType || "text/javascript", e.charset = "utf-8", e.async = !0, e
        }, h.load = function (t, e, a) {
            var n = t && t.config || {};
            if (z)return n = h.createNode(n, e, a), n.setAttribute("data-requirecontext", t.contextName), n.setAttribute("data-requiremodule", e), !n.attachEvent || n.attachEvent.toString && 0 > n.attachEvent.toString().indexOf("[native code") || Z ? (n.addEventListener("load", t.onScriptLoad, !1), n.addEventListener("error", t.onScriptError, !1)) : (O = !0, n.attachEvent("onreadystatechange", t.onScriptLoad)), n.src = a, L = n, D ? y.insertBefore(n, D) : y.appendChild(n), L = null, n;
            if (fa)try {
                importScripts(a), t.completeLoad(e)
            } catch (n) {
                t.onError(C("importscripts", "importScripts failed for " + e + " at " + a, n, [e]))
            }
        }, z && !r.skipDataMain && U(document.getElementsByTagName("script"), function (t) {
            if (y || (y = t.parentNode), K = t.getAttribute("data-main"))return q = K, r.baseUrl || (E = q.split("/"), q = E.pop(), Q = E.length ? E.join("/") + "/" : "./", r.baseUrl = Q), q = q.replace(R, ""), h.jsExtRegExp.test(q) && (q = K), r.deps = r.deps ? r.deps.concat(q) : [q], !0
        }), define = function (t, e, a) {
            var n, i;
            "string" != typeof t && (a = e, e = t, t = null), H(e) || (a = e, e = null), !e && G(a) && (e = [], a.length && (a.toString().replace(la, "").replace(ma, function (t, a) {
                e.push(a)
            }), e = (1 === a.length ? ["require"] : ["require", "exports", "module"]).concat(e))), O && ((n = L) || (P && "interactive" === P.readyState || U(document.getElementsByTagName("script"), function (t) {
                if ("interactive" === t.readyState)return P = t
            }), n = P), n && (t || (t = n.getAttribute("data-requiremodule")), i = F[n.getAttribute("data-requirecontext")])), (i ? i.defQueue : S).push([t, e, a])
        }, define.amd = {jQuery: !0}, h.exec = function (b) {
            return eval(b)
        }, h(r)
    }
}(this), window.QYER || (window.QYER = {uid: 0}), function () {
    var t = jQuery;
    !function () {
        window.qyerUtil = {
            init: function () {
                window.QYER && window.QYER.frameVersion > 1 && (this._initHead(), this.spam_text_filter(), this.includeGA(), this.frameCompatibleh())
            }, frameCompatibleh: function () {
                window._qyer_userid = window.QYER.uid, window.setCookie = this.setCookie, window.getCookie = this.getCookie, window._gaq = window._gaq || []
            }, includeGA: function () {
                window._gaq = window._gaq || [], window._gaq.push(["_setAccount", "UA-185023-1"], ["_setDomainName", "qyer.com"], ["_setSiteSpeedSampleRate", 10], ["_addIgnoredRef", "qyer.com"], ["_addOrganic", "soso", "w"], ["_addOrganic", "sogou", "query"], ["_addOrganic", "baidu", "word"], ["_addOrganic", "baidu", "q1"], ["_addOrganic", "baidu", "q2"], ["_addOrganic", "m.baidu", "word"], ["_addOrganic", "so.360", "q"], ["_addOrganic", "so", "q"], ["_addOrganic", "baidu", "w"], ["_addOrganic", "cn.bing", "q"], ["_addOrganic", "sm", "q"], ["_trackPageview"]), requirejs("https:" == document.location.protocol ? ["https://ssl.google-analytics.com/ga.js"] : ["http://qt.qyer.com/beacon.js", "http://www.google-analytics.com/ga.js"])
            }, setCookie: function (t, e, a) {
                var n = 365, i = new Date;
                arguments[2] || (a = 1), 1 == a ? (i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), document.cookie = t + "=" + escape(e) + "; path=/;domain=.qyer.com;expires=" + i.toGMTString()) : document.cookie = t + "=" + escape(e) + "; path=/;domain=.qyer.com", n = i = null
            }, getCookie: function (t) {
                var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
                return null != e ? unescape(e[2]) : null
            }, _initHead: function () {
                "ask.qyer.com" == window.location.hostname && t(".qyer_header_bg").css("position", "fixed")
            }, _head: null, _getHead: function () {
                return this._head || (this._head = document.getElementsByTagName("head")[0]), this._head
            }, loadCss: function (e, a) {
                !1 === a ? this.insertStyle(t.ajax({
                    url: e,
                    async: !1
                }).responseText) : t('<link rel="stylesheet" type="text/css" />').attr("href", e).appendTo(this._getHead())
            }, insertStyle: function (t) {
                var e = document.createElement("style");
                e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t, this._getHead().appendChild(e), e = null
            }, sliceArguments: function (t, e) {
                for (var a = [], n = e; n < t.length; n++)a.push(t[n]);
                return a
            }, isMobile: function () {
                var t = navigator.userAgent;
                return t.match(/Android/i) || -1 != t.indexOf("iPhone") || -1 != t.indexOf("iPad")
            }, getWordLen: function (e, a) {
                return a && (e = function (t) {
                    return t.replace(/[^\x00-\xff]/g, "*")
                }(e)), function (t) {
                    if (void 0 === t)return 0;
                    var e = t.match(/[^\x00-\x80]/g);
                    return t.length + (e ? e.length : 0)
                }(t.trim(e))
            }, subStr: function (t, e) {
                for (var a, n, i = 0, r = 0; r < t.length; r++)if (a = t.charAt(r), (i += encodeURI(a).length > 2 ? 1 : .5) >= e)return n = i == e ? r + 1 : r, t.substr(0, n);
                return t
            }, doTrackCode: function (e) {
                var a = "__dotarckcodebutton__";
                document.getElementById(a) || t('<button id="' + a + '" style="display:none;">dotarckcodebutton</button>').appendTo(document.body), t("#" + a).attr("data-bn-ipg", e).trigger("click"), a = null
            }, ajaxFillter: function (t, e, a) {
                if (0 != window.location.href.indexOf("http://plan.qyer.com") && "object" == typeof t && t.extra && t.extra.code)switch (0 | t.extra.code) {
                    case 1:
                        window.qyerUtil.showAntiSpam(t.extra.msg)
                }
            }, showAntiSpam: function (t) {
                requirejs(["web_ct_antispam"], function (e) {
                    e.show(t)
                })
            }, doAjax: function (e) {
                var a, n, i;
                if (a = e.minResponseTime ? new Date : null, i = function (t) {
                        if (void 0 === t.error_code)try {
                            t.error_code = t.error, t.result = t.result, 0 != t.error_code && (t.data = t.data || {}, t.data.msg = t.msg)
                        } catch (t) {
                        }
                        0 == t.error_code ? (void 0 === t.data && (t.data = e.__defaultData__), e.onCallSuccessBefore && e.onCallSuccessBefore(t), e.onSuccess && e.onSuccess(t), e.onCallSuccessAfter && e.onCallSuccessAfter(t)) : e.onError && e.onError(t)
                    }, e.testData)return void 0 === e.testData.data && (e.testData.data = e.__defaultData__), void setTimeout(function () {
                    i(e.testData)
                }, e.minResponseTime || 200);
                var r = window.location.host, s = e.url || e.posturl, o = e.data, l = "json";
                if (!0 === /static.qyer.com/.test(r) || !0 === /qyerstatic.com/.test(r)) {
                    var c;
                    o = t.extend({}, o, {__qFED__: e.__qFED__}), e.__qFED__ && e.__qFED__.id && (c = e.__qFED__.id, e.type = "GET"), s = "http://fe.2b6.me:3000/service/api/" + c, l = "jsonp", api = null
                }
                var d = t.ajax({
                    type: e.type || "POST",
                    url: s,
                    dataType: l,
                    data: o,
                    cache: e.cache || !1,
                    success: function (t) {
                        a ? (n = new Date - a, setTimeout(function () {
                            i.call(null, t)
                        }, n > e.minResponseTime ? 0 : e.minResponseTime - n)) : i.call(null, t), a = n = null
                    },
                    error: function (t, a) {
                        e.onError && e.onError({
                            error_code: -1,
                            __server_error__: !0,
                            __server_status__: d.statusText,
                            result: "error",
                            data: {msg: a || {}}
                        })
                    }
                });
                return d
            }, runOneInPeriodOfTime: function (t, e) {
                var a;
                return function (n, i, r, s, o) {
                    window.clearTimeout(a), a = window.setTimeout(function () {
                        t(n, i, r, s, o)
                    }, e || 300)
                }
            }, isLogin: function () {
                return !(!window.QYER || !window.QYER.uid)
            }, doLogin: function (t) {
                window.qyerUtil.isLogin() || requirejs(["web_ct_logindialog"], function (e) {
                    e.show(t)
                })
            }, doSignin: function (e) {
                requirejs(["web_ct_logindialog"], function (a) {
                    a.show(t.extend({}, {page: "regist"}, e))
                })
            }, getUrlParam: function (t, e) {
                var a, n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)");
                if (e) {
                    -1 != e.indexOf("?") && (a = e.substr(e.indexOf("?") + 1))
                } else a = window.location.search.substr(1);
                if (!a)return null;
                var i = a.match(n);
                return null != i ? unescape(i[2]) : null
            }, spam_text_filter: function () {
                var e, a, n, i, r;
                e = /(http:\/\/)?[\w\.]*\.?(mafengwo\.cn|mafengwo\.com|mafengwo\.net)[a-zA-Z\/0-9&\?\.#\-_]*/gim, r = t(".qyer_spam_text_filter"), r.find("a").each(function () {
                    a = t(this), (-1 != (a.html() + a.attr("href")).indexOf("mafengwo.cn") || -1 != (a.html() + a.attr("href")).indexOf("mafengwo.com") || -1 != (a.html() + a.attr("href")).indexOf("mafengwo.net")) && a.replaceWith(t(this).html())
                }), r.each(function () {
                    if (a = t(this), n = a.html().replace(/\<script.*?\>document\.write\(AC_FL_RunContent.*?\<\/script\>/gim, ""), null != (i = n.match(/\<img[\s\S]*?\>/gim)))for (var r = 0; r < i.length; r++)n = n.replace(i[r], "[imgimg]" + r + "[/imgimg]");
                    if (n = n.replace(e, ""), null != i)for (var r = 0; r < i.length; r++)n = n.replace("[imgimg]" + r + "[/imgimg]", i[r]);
                    a.html(n)
                }), e = a = n = i = r = null
            }, openUrl: function (e) {
                var a = t('<form action="' + e + '" target="_blank" method="get"></form>');
                a.appendTo(document.body), a.submit(), setTimeout(function () {
                    a.remove(), a = null
                }, 8e3)
            }
        }
    }(), function () {
        function t(t, e) {
            for (var a in e)t[a] = e[a]
        }

        t(Date.prototype, {
            qGetWeekStr: function () {
                return "星期" + ["日", "一", "二", "三", "四", "五", "六"][this.getDay()]
            }, qAddDate: function (t) {
                return this.setDate(this.getDate() + t), this
            }, qToString: function (t) {
                return [this.getFullYear(), this.getMonth() + 1, this.getDate()].join(t || "-")
            }
        }), t(String.prototype, {
            qToDate: function (t) {
                var e = this.split(t || "-");
                e = [0 | e[0], (0 | e[1]) - 1, 0 | e[2]];
                var a = new Date(e[0], e[1], e[2]);
                return e.length = 0, e = null, a
            }, qToIntFixed: function () {
                var t = 0 | this;
                return 10 > t ? "0" + t : t.toString()
            }, qToHTML: function () {
                return this.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/\n/gi, "<br />").replace(/\t/gi, "&nbsp;&nbsp;&nbsp;&nbsp;")
            }
        })
    }()
}(), $(function () {
    qyerUtil.init()
}), requirejs.config({
    baseUrl: "//common1.qyerstatic.com/hotel/bower_components",
    paths: {
        web_lib_jqueryuicore: "web_lib_jqueryuicore/jquery.ui.core.min",
        css: "lib_require_css/css",
        web_lib_jquerylazyload: "web_lib_jquerylazyload/jquery.lazyload",
        web_old_inputautocomplete: "web_old_inputautocomplete/inputAutocomplete",
        web_old_datepicker: "web_old_datepicker/datepicker",
        web_old_pages: "web_old_pages/pages",
        web_lib_template: "web_lib_template/template",
        web_ct_gototop: "web_ct_gototop/gotoTop",
        web_qui_quigmap: "web_qui_quigmap/src/QuiGmap",
        web_ct_genHotelURI: "web_ct_genHotelURI/genHotelURI",
        web_qui_controlbase: "web_qui_controlbase/controlBase",
        web_qui_quigmap_infobox: "web_qui_quigmap/infobox",
        web_old_tip2: "web_old_tip2/tip2",
        web_old_tooltips: "web_old_tooltips/tooltip",
        web_qui_quiupload: "web_qui_quiupload/QuiUpload",
        web_qui_quiupload_qiniu: "web_qui_quiupload/qiniu",
        plupload: "web_qui_quiupload/lib/plupload/plupload.full.min",
        web_ct_logindialog: "web_ct_logindialog/loginDialog",
        web_ct_logindialog_loginFormValid: "web_ct_logindialog/loginFormValid",
        web_old_popuplong: "web_old_popuplong/popupLong",
        web_old_select: "web_old_select/select",
        web_old_popup: "web_old_popup/popup",
        web_old_tip: "web_old_tip/tip",
        web_old_share: "web_old_share/share"
    }
});
var airbnb_fromDate = "", airbnb_toDate = "", startD = "", endD = "", booking_start_yearMonth = "", booking_end_yearMonth = "", booking_start_day = "", booking_end_day = "", isSearch = 0, Render = {
    init: function () {
        this.cardTPL.bnb = this.cardTPL.hotel.replace('<div class="star_box">{{star}}</div><span class="evaluate_score">{{grade}}分</span>', "{{room_type}}")
    }, cardTPL: {
        hotel: function () {
            return ['<li class="hotel_card" data-bn-ipg="Hotel-home-hotcityhotel" data-id="{{id}}">', '<div class="hotel_img_wrapper">', '<a class="card_overlay {{hover_type}}" target="_blank" href="{{href}}">', '<i class="overlay_icon {{hover_type}}"></i>', "<span>立即查看</span>", "</a>", '<img  class="lazyload hotel_img" width="234" height="156" src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/hotel_img_hold.png" data-original="{{pic}}">', "</div>", '<div class="hotel_introduce">', '<div class="hotel_name">{{cn_name}}</div>', '<div class="hotel_evaluate">', '<div class="star_box">{{star}}</div>', '<span class="evaluate_score">{{grade}}分</span>', "</div>", '<div class="hotel_price">', '<span class="left_price"><img style="margin-right: 2px;margin-bottom: 3px;" src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/money_icon.svg"><span class="update_price">{{price}}</span></span>', '<span class="right_price">元起</span>', "</div>", "</div>", "</li>"].join("")
        }(), bnb: null
    }, poiMenuTPL: function () {
        return ['<dl class="plan_search_drop_list plan_search_drop_list_place"><dd><a class="poi_item" href="javascript:void(0);"><span class="title_cn"><span class="poi_name">{{v}}</span>,{{country_cn}} </span><span class="title_en">{{v2}},{{country}}</span></a></dd></dl>'].join("")
    }(), render: function (t, e) {
        if (!e || !e.length)return void $("#" + t).html("<div><span class='list_tips'>没有内容</span></div>");
        for (var a = [], n = null, i = null, r = 0; r < e.length; r++) {
            i = e[r];
            var s = new RegExp("{{hover_type}}", "g");
            "1" == i.type && (n = this.cardTPL.hotel, n = n.replace(s, "booking")), "2" == i.type && (n = this.cardTPL.bnb, n = n.replace(s, "airbnb"));
            for (var o in i)if ("star" != o)n = "pic" != o || i[o] ? n.replace("{{" + o + "}}", i[o]) : n.replace("{{" + o + "}}", "//common3.qyerstatic.com/hotel/desktop/hotel_home/img/hotel_img_default.png"); else {
                var l = this.render_star(i[o]);
                n = n.replace("{{" + o + "}}", l)
            }
            a.push(n)
        }
        $("#" + t).html(a.join(""))
    }, render_poiMenu: function (t) {
        if (t && t.length) {
            for (var e = [], a = null, n = null, i = 0; i < t.length; i++) {
                a = this.poiMenuTPL, n = t[i];
                for (var r in n)a = a.replace("{{" + r + "}}", n[r]);
                e.push(a)
            }
            $(".js_poi_menu").html(e.join(""))
        }
    }, render_star: function (t) {
        for (var e = "", a = 0; a < t; a++)e += '<img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/star.svg">';
        return e
    }, renderLoading: function (t) {
        t.html('<div class="loading" style="height:640px;text-align: center"><img src="//static.qyer.com/models/basic/images/loading-32.gif" /></div>')
    }
};
Render.init(), $(function () {
    $(document).on("click", "[data-href]", function () {
        var t = $(this).data("href");
        t && (window.location.href = t)
    }), serveTip(), switchTab(), getHotelAndBnb($(".city_tab_box ul").find("li.active").attr("data-id")), doSearchFun(), checkDate(), submitSearchForm(), addSearchHistroy(), hotelCardHover(), $(document).on("click", ".js-search-histroy li i", function (t) {
        return delSearchHistroy($(this).data("num")), !1
    }), clearHotelkey(), checkMessage(), setDatePoint("Hotel-home-checkin", "Hotel-home-checkout")
});