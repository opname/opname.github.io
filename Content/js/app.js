function openPdf(name, root) {
    var target = "target";
    switch (name) {
        case "GettingStarted": name = "1-JavaScript" + name; target += "1"; break;
        case "PatternEssentials": name = "2-JavaScript" + name; target += "2"; break;
        case "ModernPatterns": name = "3-JavaScript" + name; target += "3"; break;
        case "ClassicPatterns": name = "4-JavaScript" + name; target += "4"; break;
        case "ModelViewPatterns": name = "5-JavaScript" + name; target += "5"; break;
        case "jQueryPatterns": name = "6-JavaScript" + name; target += "6"; break;
        case "ArchitecturePatterns": name = "7-JavaScript" + name; target += "7"; break;
        case "PatternsInAction": name = "8-JavaScript" + name; target += "8"; break;
        case "Rockstar": name = "9-JavaScript" + name; target += "9"; break;
    }
    var pdf = (root ? "" : "../") + name + "2013.pdf";
    window.open(pdf, target, "menubar=1,location=1,resizable=1,toolbar=1" ).focus(); 
    return false;
}

function openSite(url) {
    window.open(url, "url", "scrollbars=yes,resizable=yes").focus();
    return false;
}