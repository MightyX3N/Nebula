(function () {
    const url = new URL(window.location.href);
    const hasQ = url.searchParams.has("q");
    const hasUDM = url.searchParams.has("udm");

    if (hasQ && !hasUDM) {
        url.searchParams.set("udm", "14");
        window.location.replace(url.toString());
    }
})();
