(function (exoDynamicParams) {
  !(function () {
    try {
      var t =
          void 0 !== document.currentScript
            ? document.currentScript
            : document.scripts[document.scripts.length - 1],
        a = t.getAttribute("data-goal"),
        e = t.getAttribute("data-value") || null;
      if (null != a) {
        var n = new Array(),
          r = 0;
        const t =
          new Date().toISOString().replace(/[-:.TZ]/g, "") +
          Math.floor(1e3 * Math.random()).toString();
        for (var o = 0; o < exoDynamicParams.aliases.length; o++) {
          r++;
          var c =
            "https://" +
            exoDynamicParams.aliases[o] +
            "/tag.php?goal=" +
            a +
            "&stackUid=" +
            t;
          e && (c += "&value=" + e),
            (n[o] = new Image(1, 1)),
            (n[o].src = c),
            (n[o].onload = function (t) {
              r--;
            }),
            (n[o].onerror = function (t) {
              r--;
            });
          try {
            document.body.appendChild(n[o]);
          } catch (t) {}
        }
        var i = 20,
          l = setInterval(function () {
            if (r < 1 || i < 1) {
              clearInterval(l);
              var t = new CustomEvent("goals-done");
              document.dispatchEvent(t);
            }
            i--;
          }, 100);
      }
    } catch (t) {}
  })();
})({
  aliases: [
    "s.magsrv.com",
    "s.opoxv.com",
    "s.orbsrv.com",
    "s.pemsrv.com",
    "syndication.realsrv.com",
    "s.zlink3.com",
  ],
});
