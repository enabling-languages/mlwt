var otFeatures = ["cv75", "cv75g1", "cv75g0", "serb", "serbg1", "serbg0", "cv90", "cv90g1", "cv90g0", "brig", "brigg1", "brigg0", "cv80", "cv80g1", "cv80g0", "cv82", "cv82g1", "cv82g0", "cv81", "cv81g1", "cv81g0", "cv91", "cv91g1", "cv91g0", "cv92", "cv92g1", "cv92g0", "pit9", "pit9g1", "pit9g0", "pit9g2", "pit9g3", "ss01", "ss01g1", "ss01g0", "ss04", "ss04g1", "ss04g0", "ss05", "ss05g1", "ss05g0", "cv77", "cv77g1", "cv77g0", "cv76", "cv76g1", "cv76g0", "cv13", "cv13g1", "cv13g0", "ss07", "ss07g1", "ss07g0", "cv14", "cv14g1", "cv14g0", "cv17", "cv17g1", "cv17g0", "cv25", "cv25g1", "cv25g0", "cv25g2", "cv28", "cv28g1", "cv28g0", "cv31", "cv31g1", "cv31g0", "cv34", "cv34g1", "cv34g0", "cv35", "cv35g1", "cv35g0", "cv37", "cv37g1", "cv37g0", "cv39", "cv39g1", "cv39g0", "cv43", "cv43g1", "cv43g0", "cv43g2", "cv43g3", "cv44", "cv44g1", "cv44g0", "cv46", "cv46g1", "cv46g0", "cv49", "cv49g1", "cv49g0", "cv51", "cv51g1", "cv51g0", "cv52", "cv52g1", "cv52g0", "cv55", "cv55g1", "cv55g0", "cv57", "cv57g1", "cv57g0", "cv56", "cv56g1", "cv56g0", "cv62", "cv62g1", "cv62g0", "cv62g2", "cv68", "cv68g1", "cv68g0", "cv67", "cv67g1", "cv67g0", "cv19", "cv19g1", "cv19g0", "cv20", "cv20g1", "cv20g0", "cv47", "cv47g1", "cv47g0", "cv70", "cv70g1", "cv70g0", "cv71", "cv71g1", "cv71g0", "cv78", "cv78g1", "cv78g0", "cv98", "cv98g1", "cv98g0", "ss06", "ss06g1", "ss06g0", "smcp", "smcpg1", "smcpg0", "c2sc", "c2scg1", "c2scg0", "cv10", "cv10g1", "cv10g0", "cv01", "cv01g1", "cv01g0", "cv04", "cv04g1", "cv04g0", "cv06", "cv06g1", "cv06g0", "cv07", "cv07g1", "cv07g0"];

var cssRules = {
    cv75: '"viet" 1, "cv75" 1',
    cv75g1: '"viet" 1, "cv75" 1',
    cv75g0: '"viet" 0, "cv75" 0',
    serb: '"serb" 1',
    serbg1: '"serb" 1',
    serbg0: '"serb" 0',
    cv90: '"chtn" 1, "cv90" 1',
    cv90g1: '"chtn" 1, "cv90" 1',
    cv90g0: '"chtn" 0, "cv90" 0',
    brig: '"brig" 1',
    brigg1: '"brig" 1',
    brigg0: '"brig" 0',
    cv80: '"mone" 1, "cv80" 1',
    cv80g1: '"mone" 1, "cv80" 1',
    cv80g0: '"mone" 0, "cv80" 0',
    cv82: '"sbrv" 1, "cv82" 1',
    cv82g1: '"sbrv" 1, "cv82" 1',
    cv82g0: '"sbrv" 0, "cv82" 0',
    cv81: '"shha" 1, "cv81" 1',
    cv81g1: '"shha" 1, "cv81" 1',
    cv81g0: '"shha" 0, "cv81" 0',
    cv91: '"tone" 1, "cv91" 1',
    cv91g1: '"tone" 1, "cv91" 1',
    cv91g0: '"tone" 0, "cv91" 0',
    cv92: '"tstv" 1, "cv92" 1',
    cv92g1: '"tstv" 1, "cv92" 1',
    cv92g0: '"tstv" 0, "cv92" 0',
    pit9: '"pit9" 1',
    pit9g1: '"pit9" 1',
    pit9g0: '"pit9" 0',
    pit9g2: '"pit9" 2',
    pit9g3: '"pit9" 3',
    ss01: '"litr" 1, "ss01" 1',
    ss01g1: '"litr" 1, "ss01" 1',
    ss01g0: '"litr" 0, "ss01" 0',
    ss04: '"bowl" 1, "ss04" 1',
    ss04g1: '"bowl" 1, "ss04" 1',
    ss04g0: '"bowl" 0, "ss04" 0',
    ss05: '"ital" 1, "ss05" 1',
    ss05g1: '"ital" 1, "ss05" 1',
    ss05g0: '"ital" 0, "ss05" 0',
    cv77: '"carn" 1, "cv77" 1',
    cv77g1: '"carn" 1, "cv77" 1',
    cv77g0: '"carn" 0, "cv77" 0',
    cv76: '"ogon" 1, "cv76" 1',
    cv76g1: '"ogon" 1, "cv76" 1',
    cv76g0: '"ogon" 0, "cv76" 0',
    cv13: '"B_hk" 1, "cv13" 1',
    cv13g1: '"B_hk" 1, "cv13" 1',
    cv13g0: '"B_hk" 0, "cv13" 0',
    ss07: '"lopr" 1, "ss07" 1',
    ss07g1: '"lopr" 1, "ss07" 1',
    ss07g0: '"lopr" 0, "ss07" 0',
    cv14: '"beta" 1, "ss07" 1',
    cv14g1: '"beta" 1, "ss07" 1',
    cv14g0: '"beta" 0, "ss07" 0',
    cv17: '"D_hk" 1, "cv17" 1',
    cv17g1: '"D_hk" 1, "cv17" 1',
    cv17g0: '"D_hk" 0, "cv17" 0',
    cv25: '"ramh" 1, "cv25" 1',
    cv25g1: '"ramh" 1, "cv25" 1',
    cv25g0: '"ramh" 0, "cv25" 0',
    cv25g2: '"ramh" 2, "cv25" 2',
    cv28: '"Hstk" 1, "cv28" 1',
    cv28g1: '"Hstk" 1, "cv28" 1',
    cv28g0: '"Hstk" 0, "cv28" 0',
    cv31: '"i_tl" 1, "cv31" 1',
    cv31g1: '"i_tl" 1, "cv31" 1',
    cv31g0: '"i_tl" 0, "cv31" 0',
    cv34: '"jser" 1, "cv34" 1',
    cv34g1: '"jser" 1, "cv34" 1',
    cv34g0: '"jser" 0, "cv34" 0',
    cv35: '"litJ" 1, "cv35" 1',
    cv35g1: '"litJ" 1, "cv35" 1',
    cv35g0: '"litJ" 0, "cv35" 0',
    cv37: '"Jstk" 1, "cv37" 1',
    cv37g1: '"Jstk" 1, "cv37" 1',
    cv37g0: '"Jstk" 0, "cv37" 0',
    cv39: '"l_tl" 1, "cv39" 1',
    cv39g1: '"l_tl" 1, "cv39" 1',
    cv39g0: '"l_tl" 0, "cv39" 0',
    cv43: '"Engs" 1, "cv43" 1',
    cv43g1: '"Engs" 1, "cv43" 1',
    cv43g0: '"Engs" 0, "cv43" 0',
    cv43g2: '"Engs" 2, "cv43" 2',
    cv43g3: '"Engs" 3, "cv43" 3',
    cv44: '"N_hk" 1, "cv44" 1',
    cv44g1: '"N_hk" 1, "cv44" 1',
    cv44g0: '"N_hk" 0, "cv44" 0',
    cv46: '"opnO" 1, "cv46" 1',
    cv46g1: '"opnO" 1, "cv46" 1',
    cv46g0: '"opnO" 0, "cv46" 0',
    cv49: '"p_hk" 1, "cv49" 1',
    cv49g1: '"p_hk" 1, "cv49" 1',
    cv49g0: '"p_hk" 0, "cv49" 0',
    cv51: '"q_tl" 1, "cv51" 1',
    cv51g1: '"q_tl" 1, "cv51" 1',
    cv51g0: '"q_tl" 0, "cv51" 0',
    cv52: '"Qalt" 1, "cv52" 1',
    cv52g1: '"Qalt" 1, "cv52" 1',
    cv52g0: '"Qalt" 0, "cv52" 0',
    cv55: '"R_tl" 1, "cv55" 1',
    cv55g1: '"R_tl" 1, "cv55" 1',
    cv55g0: '"R_tl" 0, "cv55" 0',
    cv57: '"t_hk" 1, "cv57" 1',
    cv57g1: '"t_hk" 1, "cv57" 1',
    cv57g0: '"t_hk" 0, "cv57" 0',
    cv56: '"t_tl" 1, "cv56" 1',
    cv56g1: '"t_tl" 1, "cv56" 1',
    cv56g0: '"t_tl" 0, "cv56" 0',
    cv62: '"v_hk" 1, "cv62" 1',
    cv62g1: '"v_hk" 1, "cv62" 1',
    cv62g0: '"v_hk" 0, "cv62" 0',
    cv62g2: '"v_hk" 2, "cv62" 2',
    cv68: '"Y_hk" 1, "cv68" 1',
    cv68g1: '"Y_hk" 1, "cv68" 1',
    cv68g0: '"Y_hk" 0, "cv68" 0',
    cv67: '"y_tl" 1, "cv67" 1',
    cv67g1: '"y_tl" 1, "cv67" 1',
    cv67g0: '"y_tl" 0, "cv67" 0',
    cv19: '"ezhc" 1, "cv19" 1',
    cv19g1: '"ezhc" 1, "cv19" 1',
    cv19g0: '"ezhc" 0, "cv19" 0',
    cv20: '"Ezhr" 1, "cv20" 1',
    cv20g1: '"Ezhr" 1, "cv20" 1',
    cv20g0: '"Ezhr" 0, "cv20" 0',
    cv47: '"opOU" 1, "cv47" 1',
    cv47g1: '"opOU" 1, "cv47" 1',
    cv47g0: '"opOU" 0, "cv47" 0',
    cv70: '"apos" 1, "cv70" 1',
    cv70g1: '"apos" 1, "cv70" 1',
    cv70g0: '"apos" 0, "cv70" 0',
    cv71: '"coln" 1, "cv71" 1',
    cv71g1: '"coln" 1, "cv71" 1',
    cv71g0: '"coln" 0, "cv71" 0',
    cv78: '"pcir" 1, "cv78" 1',
    cv78g1: '"pcir" 1, "cv78" 1',
    cv78g0: '"pcir" 0, "cv78" 0',
    cv98: '"empt" 1, "cv98" 1',
    cv98g1: '"empt" 1, "cv98" 1',
    cv98g0: '"empt" 0, "cv98" 0',
    ss06: '"invs" 1, "ss06" 1',
    ss06g1: '"invs" 1, "ss06" 1',
    ss06g0: '"invs" 0, "ss06" 0',
    smcp: '"smcp" 1',
    smcpg1: '"smcp" 1',
    smcpg0: '"smcp" 0',
    c2sc: '"smcp" 1, "c2sc" 1',
    c2scg1: '"smcp" 1, "c2sc" 1',
    c2scg0: '"smcp" 0, "c2sc" 0',
    cv10: '"dig0" 1, "cv10" 1',
    cv10g1: '"dig0" 1, "cv10" 1',
    cv10g0: '"dig0" 0, "cv10" 0',
    cv01: '"dig1" 1, "cv01" 1',
    cv01g1: '"dig1" 1, "cv01" 1',
    cv01g0: '"dig1" 0, "cv01" 0',
    cv04: '"dig4" 1, "cv04" 1',
    cv04g1: '"dig4" 1, "cv04" 1',
    cv04g0: '"dig4" 0, "cv04" 0',
    cv06: '"dg69" 1, "cv06" 1',
    cv06g1: '"dg69" 1, "cv06" 1',
    cv06g0: '"dg69" 0, "cv06" 0',
    cv07: '"dig7" 1, "cv07" 1',
    cv07g1: '"dig7" 1, "cv07" 1',
    cv07g0: '"dig7" 0, "cv07" 0'
};

var elStyle = document.createElement("style");
document.head.appendChild(elStyle);

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
};

function elIsIeEdge() {
    if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}

function elOpentypeSupport() {
    var els = document.querySelectorAll("[class]");
    var styleRules = [];
    [].forEach.call(els, function(el) {
        var classList = el.className.split(/\s+/);
        var classes = [];
        for (var i = 0; i < classList.length; i++) {
            if (otFeatures.contains(classList[i])) {
                classes.push(classList[i]);
            }
        }
        var selector = ".";
        var property = "";
        if (classes.length > 1) {
            for (var j = 0; j < classes.length; j++) {
                selector = selector + classes[j] + ".";
                property = property + cssRules[classes[j]] + ",";
            }
        }

        property = property.replace(/,\s*$/, "");
        selector = selector.replace(/\.$/, "");

        if (property && selector) {
            var addRule = selector + "{font-feature-settings:" + property + ";}";
            styleRules.push(addRule);
        }
    });

    var uniqueRules = styleRules.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });

    if (uniqueRules.length !== 0) {
        for (var i = 0; i < uniqueRules.length; i++) {

            elStyle.sheet.insertRule(uniqueRules[i], 0);
        }
    }
}

/*
function elBidiOverride(l) {
    if (l === "men-Mend" || "men-Mend-SL") {
        elStyle.sheet.insertRule( ":lang(men-Mend), :lang(men_mend-SL) {unicode-bidi: bidi-override;}",0);
    }
}
*/

/*
function elBDO() {
    var isIeEdge = elIsIeEdge();
    var elDocLang = elDocumentLang();
    var elLangs = elGetContentLangs();
    //identify if one of a set of langauges is present
    if (isIeEdge) {
        if ( elDocLang === "men-Mend" || "men-Mend-SL") {
            elBidiOverride("men-Mend");
        } else if (elLangs.includes('men-Mend')) {
            elBidiOverride("men-Mend");
        } else if (elLangs.includes('men-Mend-SL')) {
            elBidiOverride("men-Mend");
        }
    }
}
*/

function elBidiOverride(l) {
    switch (l) {
        case "men-Mend":
        case "men-Mend-SL":
            elStyle.sheet.insertRule( ":lang(men-Mend), :lang(men_mend-SL) {unicode-bidi: bidi-override;}",0);
            break;
        case "ff-Adlm":
        case "fuf-Adlm":
        case "fuv-Adlm":
            elStyle.sheet.insertRule( ":lang(ff-Adlm), :lang(fuf-Adlm), :lang(fuv-Adlm) {unicode-bidi: bidi-override;}",0);
            break;
        default:
            break;
    }
}

function checkLang() {
    var supportedLangs = ["men-Mend","men-Mend-SL","ff-Adlm","fuf-Adlm","fuv-Adlm"];
    var langs = [];
    [].forEach.call(supportedLangs, function(lang) {
        if (l === elDocumentLang()) {
            return l;
        } else if (l === elGetContentLangs()) {
            langs.push(l);
        }
    });
    return langs;
}

function elBDO() {
    var isIeEdge = elIsIeEdge();
    if (isIeEdge) {
        var presentLangs = checkLang();
        if (typeof presentLangs === 'string') {
            elBidiOverride(presentLangs);
        } else if (presentLangs.constructor === Array) {
            // itterate through array
            for (var i = 0; i < presentLangs.length; i++) {
                elBidiOverride(presentLangs[i]);
            }
        }
    }
}

/*
 * TODO:
 *      search to see if langauge is on root element,
 *      if it is add css to body, else search for content in
 *      language and apply to each matching elment
 *      in elBidiOverride2()
 *
 */
