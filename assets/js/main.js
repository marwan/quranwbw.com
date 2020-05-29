function play_verse(e, t) {
    current_playing_verse = t;
    var n = $(".s-a." + t);
    if (t <= e) {
        $("#bottom-nav-chapterverse").text("(loading...)");
        var r = function() {
                var n = $(".s-a." + t + " .sw").length;
                for (var r = 0; r <= n; r++) {
                    var i = r - 1,
                        s = t - 1;
                    if (reciter == 1) var o = $(".s-a." + t).children().eq(r).attr("data-ts-mishary");
                    else if (reciter == 3) var o = $(".s-a." + t).children().eq(r).attr("data-ts-husary");
                    o < chapter_audio.currentTime && (r > 0 && $(".s-a." + t).children().eq(i).children(".wa").removeClass("wa-hover"), $(".s-a." + t).children().eq(r).children(".wa").addClass("wa-hover"), $(".s-a." + s).children().eq(r).children(".wa").removeClass("wa-hover"))
                }
            },
            i = function() {
                t < e ? chapter_audio.duration - chapter_audio.currentTime <= .5 && (c || (t += 1, current_playing_verse = t + 1, chapter_audio.pause(), chapter_audio.currentTime = 0, play_verse(e, t), n.removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), chapter_audio.removeEventListener("timeupdate", r)), c++) : t == e && chapter_audio.duration - chapter_audio.currentTime <= .5 && (c || (chapter_audio.pause(), chapter_audio.currentTime = 0, chapter_audio.src = "", is_audio_playing = !1, has_chapter_audio_been_started = !1, playing_which_audio = "none", n.removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".play-pause-icon").removeClass("pause-icon"), $(".play-pause-icon").addClass("play-icon"), $("#bottom-nav-chapterverse").css("display", "none"), addPlayIcon(), $(".bottom-nav-chapterplayer").click()), c++)
            };
        n.addClass("verse-hover");
        var s = localStorage.getItem("auto_scroll"),
            o = t + 1,
            u = ("00" + chapter_number).slice(-3) + "00".concat(t).slice(-3),
            a = ("00" + chapter_number).slice(-3) + ("00" + o).slice(-3);
        audio.currentTime = 0, audio.pause(), audio.removeEventListener("timeupdate", r);
        var f = audio_url_arabic + "-" + reciter + "/" + u + ".mp3";
        chapter_audio.src = f, chapter_audio.load(), chapter_audio.play(), $("#bottom-nav-chapterverse").text("(Verse " + t + ")"), t < e && new Audio(audio_url_arabic + "-" + reciter + "/" + a + ".mp3");
        if (s == "Yes") try {
            $("html, body").animate({
                scrollTop: n.offset().top - 115
            }, 1e3)
        } catch (l) {}(reciter == 1 || reciter == 3) && chapter_audio.addEventListener("timeupdate", r), $("#chapter-audio").trigger("click");
        var c = 0;
        chapter_audio.addEventListener("timeupdate", i, !1)
    }
}

function addPlayIcon() {
    $(".play-pause-icon").removeClass("pause-icon"), $(".play-pause-icon").addClass("play-icon")
}

function addPauseIcon() {
    $(".play-pause-icon").removeClass("play-icon"), $(".play-pause-icon").addClass("pause-icon")
}

function modify_font(e, t) {
    var n;
    if (e == "wa") {
        var r = parseInt($(".wa").css("font-size"), 10);
        t == "increase" ? (r >= 112 ? n = "112px" : n = r + 4 + "px", $(".wa").css("font-size", n), $(".ar-font").text("Arabic (" + n.replace("px", "") + ")")) : t == "decrease" && (r <= 16 ? n = "16px" : n = r - 4 + "px", $(".wa").css("font-size", n), $(".ar-font").text("Arabic (" + n.replace("px", "") + ")")), localStorage.setItem("arabic_font_size", n)
    } else if (e == "wt") {
        var r = parseInt($(".wt").css("font-size"), 10);
        t == "increase" ? (r >= 70 ? n = "70px" : n = r + 2 + "px", $(".wt").css("font-size", n), $(".tr-font").text("Translation (" + n.replace("px", "") + ")")) : t == "decrease" && (r <= 8 ? n = "8px" : n = r - 2 + "px", $(".wt").css("font-size", n), $(".tr-font").text("Translation (" + n.replace("px", "") + ")")), localStorage.setItem("translation_font_size", n)
    } else if (e == "wl") {
        var r = parseInt($(".wl").css("font-size"), 10);
        t == "increase" ? (r >= 70 ? n = "70px" : n = r + 2 + "px", $(".wl").css("font-size", n), $(".tl-font").text("Transliteration (" + n.replace("px", "") + ")")) : t == "decrease" && (r <= 8 ? n = "8px" : n = r - 2 + "px", $(".wl").css("font-size", n), $(".tl-font").text("Transliteration (" + n.replace("px", "") + ")")), localStorage.setItem("transliteration_font_size", n)
    } else if (e == "f-t") {
        var r = parseInt($(".f-t").css("font-size"), 10);
        if (t == "increase") {
            var n = r + 2 + "px";
            $(".f-t").css("font-size", n)
        } else if (t == "decrease") {
            var n = r - 2 + "px";
            $(".f-t").css("font-size", n)
        }
        localStorage.setItem("full_tr_font_value", n)
    }
}

function toggle_text(e) {
    if (e == "wt") {
        var t = document.getElementById("translation");
        t.innerHTML == "Visible" ? (t.innerHTML = "Hidden", $(".wt").css("display", "none"), localStorage.setItem("toggle_translation_value", "none"), localStorage.setItem("toggle_translation_change", "Hidden")) : (t.innerHTML = "Visible", $(".wt").css("display", "block"), localStorage.setItem("toggle_translation_value", "block"), localStorage.setItem("toggle_translation_change", "Visible"))
    } else if (e == "wl") {
        var n = document.getElementById("transliteration");
        n.innerHTML == "Visible" ? (n.innerHTML = "Hidden", $(".wl").css("display", "none"), localStorage.setItem("toggle_transliteration_value", "none"), localStorage.setItem("toggle_transliteration_change", "Hidden")) : (n.innerHTML = "Visible", $(".wl").css("display", "block"), localStorage.setItem("toggle_transliteration_value", "block"), localStorage.setItem("toggle_transliteration_change", "Visible"))
    } else if (e == "font_type") {
        var r = document.getElementById("font");
        r.innerHTML == "IndoPak" ? (r.innerHTML = "Uthmani", $(".wa").css("font-family", "Uthmani"), localStorage.setItem("current_font", "Uthmani")) : r.innerHTML == "Uthmani" && (r.innerHTML = "IndoPak", $(".wa").css("font-family", "IndoPak"), localStorage.setItem("current_font", "IndoPak"))
    }
}

function toggle_theme_mode() {
    var e = document.getElementById("theme_mode");
    $("body").css("transition", "all 0.5s"), $(".chapter-nav-links").css("transition", "none");
    if (e.innerHTML == "Light") {
        e.innerHTML = "Dark";
        var t = document.getElementById("darktheme");
        t ? $("#darktheme").prop("disabled", !1) : $("head").append('<link rel="stylesheet" href="../assets/css/dark.css" id="darktheme"/>'), localStorage.setItem("current_theme_mode", "Dark")
    } else e.innerHTML = "Light", $("#darktheme").prop("disabled", !0), localStorage.setItem("current_theme_mode", "Light")
}

function toggle_display_mode() {
    $("body").css("transition", "all 0.5s");
    var e = document.getElementById("display_mode");
    if (e.innerHTML == "Word By Word") {
        e.innerHTML = "Normal";
        var t = document.getElementById("normalmode");
        t ? $("#normalmode").prop("disabled", !1) : $("head").append('<link rel="stylesheet" href="../assets/css/normal.css" id="normalmode"/>'), localStorage.setItem("current_display_mode", "Normal")
    } else e.innerHTML = "Word By Word", $("#normalmode").prop("disabled", !0), localStorage.setItem("current_display_mode", "Word By Word")
}

function toggle_auto_scroll() {
    var e = document.getElementById("auto_scroll");
    e.innerHTML == "Yes" ? (e.innerHTML = "No", localStorage.setItem("auto_scroll", "No")) : (e.innerHTML = "Yes", localStorage.setItem("auto_scroll", "Yes"))
}

function toggle_reciter() {
    var e = document.getElementById("reciter");
    e.innerHTML == reciters[1] ? (e.innerHTML = reciters[2], localStorage.setItem("current_reciter", reciters[2]), reciter = 2) : e.innerHTML == reciters[2] ? (e.innerHTML = reciters[3], localStorage.setItem("current_reciter", reciters[3]), reciter = 3) : e.innerHTML == reciters[3] && (e.innerHTML = reciters[1], localStorage.setItem("current_reciter", reciters[1]), reciter = 1)
}

function load_verses(e, t, n) {
    var r, i, s = Object.keys(e).length,
        o;
    for (r = t; r <= n; r++) {
        var u = e[r],
            a = u.split("//"),
            f = a.length - 1,
            l = a[f],
            c = '<span class="verse-' + r + ' verse-single" id="' + r + '"><div class="row verse-row"><div class="col-1 verse-buttons"><span class="verse-block-buttons verse-number-button">Verse ' + r + '</span><span class="verse-block-buttons listen-button">Listen</span></div> <div class="col-10 s-a ' + r + '">';
        single_verse_words = "";
        for (i = 0; i <= f - 1; i++) {
            var h = a[i],
                p = h.split("/"),
                d = p[0],
                v = p[1];
            word_arabic = p[2], word_transliteration = p[3], word_translation = p[4], single_verse_words += "<span class=sw data-ts-mishary=" + d + " data-ts-husary=" + v + "><span class=wa>" + word_arabic + "</span><span class=wl>" + word_transliteration + "</span><span class=wt>" + word_translation + "</span></span>"
        }
        if (sajda_chapters.includes(chapter_number)) {
            var m = sajda_chapters.indexOf(chapter_number),
                g = sajda_verses[m];
            r == g && (single_verse_words += "<span class='sw sajda-icon'></span>")
        }
        r == s ? single_verse_after = '</div></div><div class="row translation-row"><div class="col-1"></div><div class="col-10 f-t">' + l + "<hr></div></div></span>" : single_verse_after = '</div></div><div class="row translation-row"><div class="col-1"></div><div class="col-10 f-t">' + l + "<hr></div></div></span>";
        var y = c + single_verse_words + single_verse_after;
        $(".verses-block").append(y)
    }
}

function load_duas(e, t, n) {
    $.getJSON("data/" + e + ".json", function(r) {
        var i, s, o = Object.keys(r).length,
            u;
        for (i = t; i <= n; i++) {
            var a = r[i].w.length,
                f = r[i].a.g,
                l = "<div class='col-11 s-a " + e + "' id=" + i + " style='flex: 0 0 97.5%; max-width: 97.5%;'><div style='text-align: center; padding-bottom: 20px;'><a class='chapter-name-duas' target='_blank' href=/" + e + "/" + i + ">chapter " + chapter_names_transliteration[e] + ", verse " + i + "</a></div><div class=a><span></span>",
                c = "";
            for (s = 0; s <= a - 1; s++) {
                var h = r[i].w[s].b;
                word_arabic = r[i].w[s].c, word_transliteration = r[i].w[s].d, word_translation = r[i].w[s].e, c += "<span class=sw data-ts=" + h + "><span class=wl>" + word_transliteration + "</span><span class=wa>" + word_arabic + "</span><span class=wt>" + word_translation + "</span></span>"
            }
            if (i == o) var p = "</div><div class='col-12 f-t'>" + f + "</div><br></div>";
            else var p = "</div><div class='col-12 f-t'>" + f + "</div><hr></div>";
            var d = l + c + p;
            console.log(d)
        }
    })
}

function checkKey(e) {
    e = e || window.event, e.keyCode == "84" ? toggle_theme_mode() : e.keyCode == "70" ? toggle_text("font_type") : e.keyCode == "68" && toggle_display_mode()
}

function update_fonts() {
    var e = localStorage.getItem("arabic_font_size"),
        t = localStorage.getItem("translation_font_size"),
        n = localStorage.getItem("transliteration_font_size"),
        r = localStorage.getItem("current_font"),
        i = localStorage.getItem("current_font");
    setTimeout(function() {
        $(".wa").css("font-size", e), $(".wa").css("font-family", i), $(".wt").css("font-size", t), $(".wl").css("font-size", n), $("#font").length && (localStorage.getItem("current_font") === null ? $("#font").text("IndoPak") : $("#font").text(r))
    }, 200)
}

function save_location(e) {
    for (var t = 1; t <= chapter_verses; t++)
        if ($(".s-a#" + t).isInViewport()) {
            localStorage.setItem("last_chapter_name", e), localStorage.setItem("last_chapter_no", chapter_number), localStorage.setItem("last_verse_no", t - 1);
            var n = t - 1
        }
}
var chapter_verses, chapter_name_transliteration, reciter, reciter_name, current_reciter, word_arabic, word_transliteration, word_translation, normal_display_mode_disabled, dark_theme_disabled, chapter_name_translation, chapter_name_arabic, offline_mode, current_playing_verse, audio_url_main = "https://quranwbw.github.io/",
    audio_url_arabic = audio_url_main + "audio-ayah-arabic",
    audio_url_english = audio_url_main + "audio-ayah-english/",
    audio_url_words = audio_url_main + "audio-words-new/",
    audio = $("#player")[0],
    chapter_audio = $("#chapter-player")[0],
    is_audio_playing = !1,
    is_chapter_audio_paused = !0,
    has_chapter_audio_been_started = !1,
    playing_which_audio = "none";
site_tagline = "Word By Word English Translation And Transliteration", chapter_names_transliteration = ["", "Al-Faatiha", "Al-Baqara", "Aal-i-Imraan", "An-Nisaa", "Al-Maaida", "Al-An'aam", "Al-A'raaf", "Al-Anfaal", "At-Tawba", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Israa", "Al-Kahf", "Maryam", "Taa-Haa", "Al-Anbiyaa", "Al-Hajj", "Al-Muminoon", "An-Noor", "Al-Furqaan", "Ash-Shu'araa", "An-Naml", "Al-Qasas", "Al-Ankaboot", "Ar-Room", "Luqman", "As-Sajda", "Al-Ahzaab", "Saba", "Faatir", "Yaseen", "As-Saaffaat", "Saad", "Az-Zumar", "Al-Ghaafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhaan", "Al-Jaathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujuraat", "Qaaf", "Adh-Dhaariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahmaan", "Al-Waaqia", "Al-Hadid", "Al-Mujaadila", "Al-Hashr", "Al-Mumtahana", "As-Saff", "Al-Jumu'a", "Al-Munaafiqoon", "At-Taghaabun", "At-Talaaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haaqqa", "Al-Ma'aarij", "Nooh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyaama", "Al-Insaan", "Al-Mursalaat", "An-Naba", "An-Naazi'aat", "Abasa", "At-Takwir", "Al-Infitaar", "Al-Mutaffifin", "Al-Inshiqaaq", "Al-Burooj", "At-Taariq", "Al-A'laa", "Al-Ghaashiya", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Dhuhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzala", "Al-Aadiyaat", "Al-Qaari'a", "At-Takaathur", "Al-Asr", "Al-Humaza", "Al-Fil", "Quraish", "Al-Maa'un", "Al-Kawthar", "Al-Kaafiroon", "An-Nasr", "Al-Masad", "Al-Ikhlaas", "Al-Falaq", "An-Naas"], chapter_names_translation = ["", "The Opening", "The Cow", "The Family of Imraan", "The Women", "The Table", "The Cattle", "The Heights", "The Spoils of War", "The Repentance", "Jonas", "Hud", "Joseph", "The Thunder", "Abraham", "The Rock", "The Bee", "The Night Journey", "The Cave", "Mary", "Taa-Haa", "The Prophets", "The Pilgrimage", "The Believers", "The Light", "The Criterion", "The Poets", "The Ant", "The Stories", "The Spider", "The Romans", "Luqman", "The Prostration", "The Clans", "Sheba", "The Originator", "Yaseen", "Those drawn up in Ranks", "The letter Saad", "The Groups", "The Forgiver", "Explained in detail", "Consultation", "Ornaments of gold", "The Smoke", "Crouching", "The Dunes", "Muhammad", "The Victory", "The Inner Apartments", "The letter Qaaf", "The Winnowing Winds", "The Mount", "The Star", "The Moon", "The Beneficent", "The Inevitable", "The Iron", "The Pleading Woman", "The Exile", "She Who Is Examined", "The Ranks", "Friday", "The Hypocrites", "Mutual Disillusion", "Divorce", "The Prohibition", "The Sovereignty", "The Pen", "The Reality", "The Ascending Stairways", "Noah", "The Jinn", "The Enshrouded One", "The Cloaked One", "The Resurrection", "Man", "The Emissaries", "The Announcement", "Those who drag forth", "He frowned", "The Overthrowing", "The Cleaving", "Defrauding", "The Splitting Open", "The Constellations", "The Morning Star", "The Most High", "The Overwhelming", "The Dawn", "The City", "The Sun", "The Night", "The Morning Hours", "The Consolation", "The Fig", "The Clot", "The Power, Fate", "The Evidence", "The Earthquake", "The Chargers", "The Calamity", "Competition", "The Declining Day", "The Traducer", "The Elephant", "Quraysh", "Almsgiving", "Abundance", "The Disbelievers", "Divine Support", "The Palm Fibre", "Sincerity", "The Dawn", "Mankind"], chapter_names_arabic = ["", "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "ابراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", "سبإ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الانسان", "المرسلات", "النبإ", "النازعات", "عبس", "التكوير", "الإنفطار", "المطففين", "الإنشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"], chapter_total_verses = ["", "7", "286", "200", "176", "120", "165", "206", "75", "129", "109", "123", "111", "43", "52", "99", "128", "111", "110", "98", "135", "112", "78", "118", "64", "77", "227", "93", "88", "69", "60", "34", "30", "73", "54", "45", "83", "182", "88", "75", "85", "54", "53", "89", "59", "37", "35", "38", "29", "18", "45", "60", "49", "62", "55", "78", "96", "29", "22", "24", "13", "14", "11", "11", "18", "12", "12", "30", "52", "52", "44", "28", "28", "20", "56", "40", "31", "50", "40", "46", "42", "29", "19", "36", "25", "22", "17", "19", "26", "30", "20", "15", "21", "11", "8", "8", "19", "5", "8", "8", "11", "11", "8", "3", "9", "5", "4", "7", "3", "6", "3", "5", "4", "5", "6"], sajda_chapters = [7, 13, 16, 17, 19, 22, 25, 27, 32, 38, 41, 53, 84, 96], sajda_verses = [206, 15, 50, 109, 58, 18, 60, 26, 15, 24, 38, 62, 21, 19], reciters = ["", "Mishary Rashid Alafasy", "Yasser Al Dossari", "Mahmoud Khalil Al-Husary"];
var surah_json_data;
$(window).on("load", function(e) {
        var t = localStorage.getItem("current_theme_mode");
        t == "Light" ? dark_theme_disabled = !0 : t == "Dark" && (dark_theme_disabled = !1), dark_theme_disabled == 1 ? $("#darktheme").prop("disabled", !0) : dark_theme_disabled == 0 && $("head").append('<link rel="stylesheet" href="../assets/css/dark.css" id="darktheme"/>'), $("#theme_mode").length && (localStorage.getItem("current_theme_mode") === null ? $("#theme_mode").text("Light") : $("#theme_mode").text(t));
        if (location.pathname.split("/").slice(-1)[0] == "") {
            if (localStorage.getItem("last_chapter_no") != null) {
                var n = localStorage.getItem("last_chapter_name"),
                    r = localStorage.getItem("last_chapter_no"),
                    i = localStorage.getItem("last_verse_no");
                $(".last-read").css("display", "block"), $(".last-read-chapter").text(n), i == 0 ? (i = 1, $(".last-read-verse").text(i + " "), $(".last-read-link").attr("href", r)) : ($(".last-read-verse").text(i + " "), $(".last-read-link").attr("href", r + "#" + i))
            }
            for (var s = 1; s <= 114; s++) {
                var o = " <a href='" + s + "'><div class='table-row'><div> <span class='index-chapter-no'>" + s + "</span><div class='main'><span class='title'>" + chapter_names_transliteration[s] + " <span class='index-chaptername-ar'>" + chapter_names_arabic[s] + "</span></span><span class='subtitle'>" + chapter_names_translation[s] + " <span style='float: right;'>" + chapter_total_verses[s] + " Verses</span></span></div></div></div></a>";
                $(".trio").append(o)
            }
            var u, a = !1;
            $("#search").on("input", function() {
                $("#result").html(""), $("#state").val("");
                var e = $("#search").val(),
                    t = new RegExp(e, "i"),
                    n = 0;
                e.length >= 3 && ($("#result").css("display", "block"), $("#chapters-list").css("display", "none"), $("#total-search-results").css("display", "block"), $.each(u, function(r, i) {
                    if (i.t.search(t) != -1) {
                        var s = i.a,
                            o = i.t,
                            u, a, f = s.split("-"),
                            l = f[0],
                            c = f[1];
                        u = e, u = u.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*"), a = new RegExp("(" + u + ")", "gi"), o.length > 300 && (o = $.trim(o).substring(0, 300).trim(this) + "..."), o = o.replace(a, "<highlight>$1</highlight>"), o = o.replace(/(<highlight>[^<>]*)((<[^>]+>)+)([^<>]*<\/highlight>)/, "$1</highlight>$2<highlight>$4"), $("#result").append('<a target="_blank" href="' + l + "#" + c + '"><li class="list-group-item link-class"><span class="chapter-verse"> Chapter ' + chapter_names_transliteration[l] + " (" + l + "), Verse " + c + " </span><br>" + o + "</li></a>"), n++
                    }
                }), $(window).scrollTop($(".search-box").offset().top), $("#total-search-results").text("Found " + n + " results"))
            }), $("#search").focus(function() {
                $("html, body").animate({
                    scrollTop: $(this).offset().top - 70
                }, 1e3), $(this).attr("placeholder", "e.g. Ibrahim or Maryam"), a == 0 && $.getJSON("assets/data/translation.json", function(e) {
                    u = e, a = !0
                })
            }), $("#search").focusout(function() {
                $(this).attr("placeholder", "Search for something in translations...")
            }), $("#search").on("input", function() {
                $(this).val().length <= 3 && ($("#chapters-list").css("display", "block"), $("#result").css("display", "none"), $("#total-search-results").css("display", "none"))
            }), $.ajaxSetup({
                cache: !0
            })
        } else {
            $.getJSON("assets/data/" + chapter_number + ".json", function(e) {
                surah_json_data = e;
                if (window.location.hash) {
                    var t = "<div class='col-12 chapter-nav-margin'><div class='col-12 text-center'><button class='btn btn-sm btn-gold continue-reading-btn'>Continue Reading</button></div></div>",
                        n = window.location.hash.substr(1);
                    if (n.includes("-")) {
                        var r, i = !1,
                            s = n.split("-"),
                            o = parseInt(s[0]),
                            u = parseInt(s[1]);
                        o < 1 ? o = 1 : u > chapter_verses ? u = chapter_verses : o > u && (o = u), document.title = chapter_name_transliteration + " [" + chapter_number + ":" + o + "-" + u + "] - " + chapter_name_arabic + " - " + site_tagline, load_verses(e, o, u), update_fonts(), u < chapter_verses && $(".full-chapter").after(t);
                        var a = !1;
                        $(".continue-reading-btn").on("click", function() {
                            if (!$(".s-a#" + chapter_verses).length) {
                                var t = u + 1,
                                    n = t + 10 - 1;
                                n > chapter_verses && (n = chapter_verses), load_verses(e, t, n), update_fonts(), $(".chapter-nav-margin").css("display", "none"), document.title = chapter_name_transliteration + " [" + chapter_number + "] - " + chapter_name_arabic + " - " + site_tagline, setTimeout(function() {
                                    a = !0
                                }, 200)
                            }
                        }), $(window).scroll(function() {
                            if (a == 1) {
                                var t = parseInt($(".verses-block .verse-single:last").attr("id")) + 1,
                                    n = t + 10 - 1;
                                n > chapter_verses && (n = chapter_verses), $(".s-a#" + chapter_verses).length || $(window).scrollTop() + $(window).height() > $(document).height() - 500 && i == 0 && (load_verses(e, t, n), t = n + 1, n = t + 10 - 1, n > chapter_verses && (n = chapter_verses), i = !0, update_fonts()), clearTimeout($.data(this, "scrollTimer")), $.data(this, "scrollTimer", setTimeout(function() {
                                    i = !1
                                }, 150))
                            }
                        })
                    } else {
                        n = parseInt(window.location.hash.substr(1)), $.isNumeric(n) || (n = 1);
                        var r, i = !1;
                        n < 1 && (n = 1), n > chapter_verses && (n = chapter_verses), document.title = chapter_name_transliteration + " [" + chapter_number + ":" + n + "] - " + chapter_name_arabic + " - " + site_tagline, load_verses(e, n, n), update_fonts(), n < chapter_verses && $(".full-chapter").after(t);
                        var a = !1;
                        $(".continue-reading-btn").on("click", function() {
                            if (!$(".s-a." + chapter_verses).length) {
                                var t = n + 1,
                                    r = t + 10;
                                r > chapter_verses && (r = chapter_verses), load_verses(e, t, r), update_fonts(), $(".chapter-nav-margin").css("display", "none"), setTimeout(function() {
                                    a = !0
                                }, 200)
                            }
                        }), $(window).scroll(function() {
                            if (a == 1) {
                                var t = parseInt($(".verses-block .verse-single:last").attr("id")) + 1,
                                    n = t + 10 - 1;
                                n > chapter_verses && (n = chapter_verses), $(".s-a#" + chapter_verses).length || $(window).scrollTop() + $(window).height() > $(document).height() - 500 && i == 0 && (load_verses(e, t, n), t = n + 1, n = t + 10 - 1, n > chapter_verses && (n = chapter_verses), i = !0, update_fonts()), clearTimeout($.data(this, "scrollTimer")), $.data(this, "scrollTimer", setTimeout(function() {
                                    i = !1
                                }, 150))
                            }
                        })
                    }
                } else {
                    var r, i = !1;
                    chapter_verses >= 10 ? r = 10 : r = chapter_verses, load_verses(e, 1, r), update_fonts(), chapter_verses >= 10 && $(window).scroll(function() {
                        var t = parseInt($(".verses-block .verse-single:last").attr("id")) + 1,
                            n = t + 10 - 1;
                        n > chapter_verses && (n = chapter_verses), $(".s-a." + chapter_verses).length || $(window).scrollTop() + $(window).height() > $(document).height() - 500 && i == 0 && (load_verses(e, t, n), t = n + 1, n = t + 10 - 1, n > chapter_verses && (n = chapter_verses), i = !0, update_fonts()), clearTimeout($.data(this, "scrollTimer")), $.data(this, "scrollTimer", setTimeout(function() {
                            i = !1
                        }, 150))
                    })
                }
            }), $(".loader").css("display", "none"), $("#chapterSelector").append('<span class="chevron-down"></span>'), $("#verseSelector").append('<span class="chevron-down"></span>'), $(".bismillah-div").append("<div class='bismillah'></div>"), $(".bottom-nav__item--prevchapter .chapter-nav-links").prepend('<span class="chevron-left"></span>'), $(".bottom-nav__item--nextchapter .chapter-nav-links").append('<span class="chevron-right"></span>'), $(".bottom-nav-chapterplayer, .bottom-nav-chapterplayer2").prepend('<span class="play-pause-icon play-icon"></span>'), chapter_verses = chapter_total_verses[chapter_number], chapter_name_transliteration = chapter_names_transliteration[chapter_number], chapter_name_translation = chapter_names_translation[chapter_number], chapter_name_arabic = chapter_names_arabic[chapter_number];
            var f = chapter_names_transliteration[chapter_number - 1],
                l = chapter_names_transliteration[chapter_number + 1],
                c = "Learn chapter " + chapter_name_transliteration + " (" + chapter_name_arabic + ") Through " + site_tagline;
            document.title = chapter_name_transliteration + " [" + chapter_number + "] - " + chapter_name_arabic + " - " + site_tagline, $("meta[name=description]").attr("content", c), $("meta[name='og:title']").attr("content", c), $("meta[name='og:url']").attr("content", window.location.href), $(".navbar-brand").html("<span class='nav-chaptername-tr'>" + chapter_name_transliteration + "</span> " + "<span class='nav-chaptername-ar'><span class='nav-slash'>/</span> " + chapter_name_arabic + "</span> " + "<span class='nav-chaptername-en'><span class='nav-slash'>/</span> " + chapter_name_translation + "</span>"), chapter_number == 1 || chapter_number == 9 ? $(".full-chapter").css("margin-top", "50px") : $(".bismillah-div").css("display", "block"), $(".bottom-nav-chaptername").text(chapter_name_transliteration + " / " + chapter_name_arabic + " / " + chapter_name_translation), chapter_number == 1 ? $(".bottom-nav__item--prevchapter").css("visibility", "hidden") : $(".bottom-nav__item--prevchapter").css("visibility", "visible"), chapter_number == 114 ? $(".bottom-nav__item--nextchapter").css("visibility", "hidden") : $(".bottom-nav__item--nextchapter").css("visibility", "visible");
            var h = chapter_number - 1,
                p = chapter_number + 1;
            $(".bottom-nav__item--prevchapter .bottom-nav-chapter").text(" " + f), $(".bottom-nav__item--prevchapter .chapter-nav-links").attr("href", h), $(".bottom-nav__item--nextchapter .bottom-nav-chapter").text(l + " "), $(".bottom-nav__item--nextchapter .chapter-nav-links").attr("href", p), document.onkeydown = checkKey, localStorage.getItem("auto_scroll") == null && localStorage.setItem("auto_scroll", "Yes");
            var d = localStorage.getItem("auto_scroll");
            $("#auto_scroll").text(d), localStorage.getItem("current_reciter") == null && localStorage.setItem("current_reciter", reciters[1]), current_reciter = localStorage.getItem("current_reciter"), current_reciter == reciters[1] ? reciter = 1 : current_reciter == reciters[2] ? reciter = 2 : current_reciter == reciters[3] && (reciter = 3), $("#reciter").text(current_reciter);
            var v = localStorage.getItem("current_display_mode");
            v == "Word By Word" ? normal_display_mode_disabled = !0 : v == "Normal" && (normal_display_mode_disabled = !1), normal_display_mode_disabled == 1 ? $("#normalmode").prop("disabled", !0) : normal_display_mode_disabled == 0 && $("head").append('<link rel="stylesheet" href="../assets/css/normal.css" id="normalmode"/>'), $("#display_mode").length && (localStorage.getItem("current_display_mode") === null ? $("#display_mode").text("Word By Word") : $("#display_mode").text(v));
            for (var s = 1; s <= 114; s++) {
                if (s == chapter_number) var m = "<a class='d-i d-i-highlight' href='" + s + "'>" + s + ". " + chapter_names_transliteration[s] + " (" + chapter_names_arabic[s] + ")</a>";
                else var m = "<a class='d-i' href='" + s + "'>" + s + ". " + chapter_names_transliteration[s] + " (" + chapter_names_arabic[s] + ")</a>";
                $("#chapter-list").append(m)
            }
            for (var g = 1; g <= chapter_verses; g++) $(".verse-selector").append("<a class=d-i data-l=" + g + ">" + g + "</a>");
            $(".d-i").on("click", function() {
                var e = $(this).attr("data-l");
                if ($("#" + e).length) $("html, body").animate({
                    scrollTop: $("#" + e).offset().top - 30
                }, 1e3);
                else {
                    $(".verses-block").empty();
                    var t = parseInt(e),
                        n = t + 5;
                    n > chapter_verses && (n = chapter_verses), load_verses(surah_json_data, t, n), update_fonts();
                    var r = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
                    window.history.pushState("", "", r + "#" + t), document.title = chapter_name_transliteration + " [" + chapter_number + ":" + t + "-" + n + "] - " + chapter_name_arabic + " - " + site_tagline, $("html, body").animate({
                        scrollTop: $("#" + t).offset().top - 50
                    }, 1e3)
                }
            }), $(window).scroll(function() {
                clearTimeout($.data(this, "save_location")), $.data(this, "save_location", setTimeout(function() {
                    save_location(chapter_name_transliteration)
                }, 250))
            }), $(window).width() > 991 && $(".dropdown").hover(function() {
                $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(100)
            }, function() {
                $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeOut(100)
            })
        }
        if ("serviceWorker" in navigator) try {
            navigator.serviceWorker.getRegistrations().then(function(e) {
                var t = e.length;
                t == 1 ? ($(".offline-message").text("The website is offline viewable for you."), localStorage.setItem("offline_mode", "Enabled"), offline_mode = "Enabled") : t == 0 && ($(".offline-message").text("Click here to enable/download the website for offline viewing (around 10 MB)"), localStorage.setItem("offline_mode", "Disabled"), offline_mode = "Disabled")
            })
        } catch (y) {
            localStorage.getItem("offline_mode") === null ? (offline_mode = "Disabled", localStorage.setItem("offline_mode", "Disabled")) : offline_mode = localStorage.getItem("offline_mode"), offline_mode == "Enabled" ? $(".offline-message").text("The website is offline viewable for you.") : offline_mode == "Disabled" && $(".offline-message").text("Click here to enable/download the website for offline viewing (around 10 MB)")
        } else {
            var b = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            b == 1 && $(".offline-message").text("Switch to Safari to enable the website for offline viewing.")
        }
    }), $.fn.isInViewport = function() {
        try {
            var e = $(this).offset().top
        } catch (t) {}
        var n = e + $(this).outerHeight(),
            r = $(window).scrollTop(),
            i = r + $(window).height();
        return n > r && e < i
    },
    function(e) {
        e(document).ready(function() {
            var t = e(".fixed-top"),
                n = e(".bottom-nav"),
                r = 0,
                i = 700,
                s = 600,
                o;
            e(function() {
                e(window).scroll(function() {
                    var u = e(this).scrollTop();
                    if (r < u && u > t.outerHeight() && o != "down") {
                        if (e(window).width() < i || e(window).height() < s) t.stop().fadeOut(), n.stop().fadeOut(), o = "down"
                    } else if (r > u && o != "up") {
                        if (e(window).width() < i || e(window).height() < s) t.stop().fadeIn(), n.stop().fadeIn(), o = "up"
                    } else e(window).scrollTop() + e(window).height() == e(document).height() && (e(window).width() < i || e(window).height() < s) && (t.stop().fadeIn(), n.stop().fadeIn(), o = "up");
                    r = u
                })
            })
        })
    }(jQuery), $(".container").on("click", ".verse-number-button", function(e, t) {
        var n = $(this).parent().parent().parent().attr("id");
        $("html, body").animate({
            scrollTop: $(".s-a." + n).offset().top - 60
        }, 1e3)
    }), $(".container").on("click", ".listen-button", function(e, t) {
        if (navigator.onLine) {
            playing_which_audio == "chapter" && (chapter_audio.pause(), is_chapter_audio_paused = !0, addPlayIcon()), is_audio_playing = !0, playing_which_audio = "verse";
            var t = e || window.event;
            t.cancelBubble = !0, t.stopPropagation && t.stopPropagation();
            var n = localStorage.getItem("auto_scroll");
            $(".s-a").removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".f-t").removeClass("f-t-hover");
            var r = chapter_number,
                i = $(this).parent().parent().parent().attr("id"),
                s = parseInt(i) + 1;
            $(".s-a." + i).addClass("verse-hover");
            var o = ("00" + r).slice(-3) + ("00" + i).slice(-3),
                u = ("00" + r).slice(-3) + ("00" + s).slice(-3),
                a = audio_url_arabic + "-" + reciter + "/" + o + ".mp3";
            $("html, body").animate({
                scrollTop: $(".s-a." + i).offset().top - 60
            }, 1e3), audio.pause(), audio.currentTime = 0, audio.removeEventListener("timeupdate", f), audio.src = a, audio.load(), audio.play(), new Audio(audio_url_arabic + "-" + reciter + "/" + u + ".mp3"), (reciter == 1 || reciter == 3) && audio.addEventListener("timeupdate", f), audio.onended = function() {
                is_audio_playing = !1, playing_which_audio = "none", audio.pause(), audio.currentTime = 0, $(".s-a").removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".f-t").removeClass("f-t-hover"), audio.removeEventListener("timeupdate", f)
            };

            function f() {
                var e = $(".s-a." + i + " .sw").length;
                for (var t = 0; t <= e; t++) {
                    var n = t - 1,
                        r = i - 1;
                    if (reciter == 1) var s = $(".s-a." + i).children().eq(t).attr("data-ts-mishary");
                    else if (reciter == 3) var s = $(".s-a." + i).children().eq(t).attr("data-ts-husary");
                    s < audio.currentTime && (t > 0 && $(".s-a." + i).children().eq(n).children(".wa").removeClass("wa-hover"), $(".s-a." + i).children().eq(t).children(".wa").addClass("wa-hover"), $(".s-a." + r).children().eq(t).children(".wa").removeClass("wa-hover"))
                }
            }
        }
    }), $(".container").on("click", ".sw", function(e, t) {
        if (navigator.onLine) {
            playing_which_audio == "chapter" && (chapter_audio.pause(), is_chapter_audio_paused = !0, addPlayIcon()), is_audio_playing = !0, playing_which_audio = "word";
            var t = e || window.event;
            t.cancelBubble = !0, t.stopPropagation && t.stopPropagation(), $(".a").removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".f-t").removeClass("f-t-hover");
            var n = chapter_number,
                r = $(this).parent().parent().parent().attr("id");
            console.log(r);
            var i = parseInt($(this).index()) + 1;
            $(".s-a#" + r + " .a").children().eq(i).children(".wa").addClass("wa-hover");
            var s = n + "/" + ("00" + n).slice(-3) + "_" + ("00" + r).slice(-3) + "_" + ("00" + i).slice(-3),
                o = audio_url_words + s + ".mp3";
            audio.pause(), audio.currentTime = 0, audio.src = o, audio.load(), audio.play(), audio.onended = function() {
                is_audio_playing = !1, playing_which_audio = "none", audio.pause(), audio.currentTime = 0, $(".a").removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".f-t").removeClass("f-t-hover")
            }
        }
    }), $(".container").on("click", ".f-t", function(e, t) {
        if (navigator.onLine) {
            playing_which_audio == "chapter" && ($("#chapter-player")[0].pause(), is_chapter_audio_paused = !0, addPlayIcon()), is_audio_playing = !0, playing_which_audio = "translation";
            var t = e || window.event;
            t.cancelBubble = !0, t.stopPropagation && t.stopPropagation(), $(".a").removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".f-t").removeClass("f-t-hover");
            var n = chapter_number,
                r = $(this).parent().parent().attr("id");
            $(".s-a#" + r + " .f-t").addClass("f-t-hover");
            var i = ("00" + n).slice(-3) + ("00" + r).slice(-3),
                s = ("00" + n).slice(-3),
                o = audio_url_english + i + ".mp3";
            audio.pause(), audio.currentTime = 0, audio.src = o, audio.load(), audio.play(), audio.onended = function() {
                is_audio_playing = !1, playing_which_audio = "none", audio.pause(), audio.currentTime = 0, $(".a").removeClass("verse-hover"), $(".wa").removeClass("wa-hover"), $(".f-t").removeClass("f-t-hover")
            }
        }
    }), $(".bottom-nav-chapterplayer").on("click", function() {
        if (navigator.onLine)
            if ($(".play-pause-icon").hasClass("play-icon")) {
                if (playing_which_audio == "verse" || playing_which_audio == "word" || playing_which_audio == "translation" || playing_which_audio == "none") {
                    is_audio_playing = !0, playing_which_audio = "chapter", audio.pause(), audio.currentTime = 0, starting_verse = parseInt($(".verses-block").children(".verse-single").first().attr("id"));
                    if (has_chapter_audio_been_started == 1) {
                        chapter_audio.play();
                        try {
                            $("html, body").animate({
                                scrollTop: $(".s-a." + current_playing_verse).offset().top - 115
                            }, 1e3)
                        } catch (e) {}
                    } else has_chapter_audio_been_started == 0 && (has_chapter_audio_been_started = !0, play_verse(chapter_verses, starting_verse));
                    $("#bottom-nav-chapterverse").css("display", "inline-block"), addPauseIcon(), is_chapter_audio_paused = !1
                } else if (playing_which_audio == "chapter") {
                    chapter_audio.play();
                    try {
                        $("html, body").animate({
                            scrollTop: $(".s-a." + current_playing_verse).offset().top - 115
                        }, 1e3)
                    } catch (e) {}
                    addPauseIcon()
                }
            } else $(".play-pause-icon").hasClass("pause-icon") && playing_which_audio == "chapter" && (chapter_audio.pause(), addPlayIcon(), is_chapter_audio_paused = !0)
    }), $("#audio").on("click", function() {
        audio.play()
    }), $("#chapter-audio").on("click", function() {
        chapter_audio.play()
    }), $("#SettingsModal").on("shown.bs.modal", function() {
        $("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no")
    }), $("#SettingsModal").on("hidden.bs.modal", function() {
        $("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, shrink-to-fit=no")
    }), $("#chevron-navbar-icon").on("click", function() {
        $(this).toggleClass("chevron-down-nav chevron-up-nav")
    }), $("#reset-settings").on("click", function() {
        var e = document.getElementById("reset-settings");
        e.innerHTML = "Please refresh the page", window.localStorage.clear();
        if ("serviceWorker" in navigator) try {
            navigator.serviceWorker.getRegistrations().then(function(e) {
                var t = e.length;
                t == 1 ? ($(".offline-message").text("The website is offline viewable for you."), localStorage.setItem("offline_mode", "Enabled")) : t == 0 && ($(".offline-message").text("Click here to enable/download the website for offline viewing (around 10 MB)"), localStorage.setItem("offline_mode", "Disabled"))
            })
        } catch (t) {
            $(".offline-message").text("The website is offline viewable for you."), localStorage.setItem("offline_mode", "Enabled")
        }
    }), $(".back-to-verse").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".verse-hover").offset().top - 50
        }, 1e3)
    }), $(".offline-message").on("click", function() {
        "serviceWorker" in navigator && offline_mode == "Disabled" && ($(".offline-message").text("The data is being downloaded in background. You may continue using the website."), navigator.serviceWorker.addEventListener("message", function(e) {
            e.data == "registered" && (localStorage.setItem("offline_mode", "Enabled"), $(".offline-message").text("The data has been downloaded. The website is now offline viewable for you."))
        }), navigator.serviceWorker.register("../sw.js"))
    })