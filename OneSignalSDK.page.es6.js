(() => {
  var e = {
      470: function (e, t, i) {
        var n;
        (n = function () {
          var e = !0;
          function t(t) {
            function i(e) {
              var i = t.match(e);
              return (i && i.length > 1 && i[1]) || "";
            }
            var n,
              o,
              s,
              r = i(/(ipod|iphone|ipad)/i).toLowerCase(),
              a = !/like android/i.test(t) && /android/i.test(t),
              l = /nexus\s*[0-6]\s*/i.test(t),
              d = !l && /nexus\s*[0-9]+/i.test(t),
              c = /CrOS/.test(t),
              u = /silk/i.test(t),
              h = /sailfish/i.test(t),
              g = /tizen/i.test(t),
              p = /(web|hpw)os/i.test(t),
              m = /windows phone/i.test(t),
              f = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
              v = !r && !u && /macintosh/i.test(t),
              b = !a && !h && !g && !p && /linux/i.test(t),
              S = i(/edge\/(\d+(\.\d+)?)/i),
              y = i(/version\/(\d+(\.\d+)?)/i),
              w = /tablet/i.test(t) && !/tablet pc/i.test(t),
              I = !w && /[^-]mobi/i.test(t),
              O = /xbox/i.test(t);
            /opera/i.test(t)
              ? (n = {
                  name: "Opera",
                  opera: e,
                  version: y || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
                })
              : /opr\/|opios/i.test(t)
              ? (n = {
                  name: "Opera",
                  opera: e,
                  version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y,
                })
              : /SamsungBrowser/i.test(t)
              ? (n = {
                  name: "Samsung Internet for Android",
                  samsungBrowser: e,
                  version: y || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
                })
              : /coast/i.test(t)
              ? (n = {
                  name: "Opera Coast",
                  coast: e,
                  version: y || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
                })
              : /yabrowser/i.test(t)
              ? (n = {
                  name: "Yandex Browser",
                  yandexbrowser: e,
                  version: y || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
                })
              : /ucbrowser/i.test(t)
              ? (n = {
                  name: "UC Browser",
                  ucbrowser: e,
                  version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /mxios/i.test(t)
              ? (n = {
                  name: "Maxthon",
                  maxthon: e,
                  version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /epiphany/i.test(t)
              ? (n = {
                  name: "Epiphany",
                  epiphany: e,
                  version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /puffin/i.test(t)
              ? (n = {
                  name: "Puffin",
                  puffin: e,
                  version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
                })
              : /sleipnir/i.test(t)
              ? (n = {
                  name: "Sleipnir",
                  sleipnir: e,
                  version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : /k-meleon/i.test(t)
              ? (n = {
                  name: "K-Meleon",
                  kMeleon: e,
                  version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
                })
              : m
              ? ((n = { name: "Windows Phone", windowsphone: e }),
                S
                  ? ((n.msedge = e), (n.version = S))
                  : ((n.msie = e), (n.version = i(/iemobile\/(\d+(\.\d+)?)/i))))
              : /msie|trident/i.test(t)
              ? (n = {
                  name: "Internet Explorer",
                  msie: e,
                  version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i),
                })
              : c
              ? (n = {
                  name: "Chrome",
                  chromeos: e,
                  chromeBook: e,
                  chrome: e,
                  version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                })
              : /chrome.+? edge/i.test(t)
              ? (n = { name: "Microsoft Edge", msedge: e, version: S })
              : /vivaldi/i.test(t)
              ? (n = {
                  name: "Vivaldi",
                  vivaldi: e,
                  version: i(/vivaldi\/(\d+(\.\d+)?)/i) || y,
                })
              : h
              ? (n = {
                  name: "Sailfish",
                  sailfish: e,
                  version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
                })
              : /seamonkey\//i.test(t)
              ? (n = {
                  name: "SeaMonkey",
                  seamonkey: e,
                  version: i(/seamonkey\/(\d+(\.\d+)?)/i),
                })
              : /firefox|iceweasel|fxios/i.test(t)
              ? ((n = {
                  name: "Firefox",
                  firefox: e,
                  version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i),
                }),
                /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) &&
                  (n.firefoxos = e))
              : u
              ? (n = {
                  name: "Amazon Silk",
                  silk: e,
                  version: i(/silk\/(\d+(\.\d+)?)/i),
                })
              : /phantom/i.test(t)
              ? (n = {
                  name: "PhantomJS",
                  phantom: e,
                  version: i(/phantomjs\/(\d+(\.\d+)?)/i),
                })
              : /slimerjs/i.test(t)
              ? (n = {
                  name: "SlimerJS",
                  slimer: e,
                  version: i(/slimerjs\/(\d+(\.\d+)?)/i),
                })
              : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)
              ? (n = {
                  name: "BlackBerry",
                  blackberry: e,
                  version: y || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
                })
              : p
              ? ((n = {
                  name: "WebOS",
                  webos: e,
                  version: y || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
                }),
                /touchpad\//i.test(t) && (n.touchpad = e))
              : /bada/i.test(t)
              ? (n = {
                  name: "Bada",
                  bada: e,
                  version: i(/dolfin\/(\d+(\.\d+)?)/i),
                })
              : g
              ? (n = {
                  name: "Tizen",
                  tizen: e,
                  version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y,
                })
              : /qupzilla/i.test(t)
              ? (n = {
                  name: "QupZilla",
                  qupzilla: e,
                  version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y,
                })
              : /chromium/i.test(t)
              ? (n = {
                  name: "Chromium",
                  chromium: e,
                  version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y,
                })
              : /chrome|crios|crmo/i.test(t)
              ? (n = {
                  name: "Chrome",
                  chrome: e,
                  version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                })
              : a
              ? (n = { name: "Android", version: y })
              : /safari|applewebkit/i.test(t)
              ? ((n = { name: "Safari", safari: e }), y && (n.version = y))
              : r
              ? ((n = {
                  name:
                    "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod",
                }),
                y && (n.version = y))
              : (n = /googlebot/i.test(t)
                  ? {
                      name: "Googlebot",
                      googlebot: e,
                      version: i(/googlebot\/(\d+(\.\d+))/i) || y,
                    }
                  : {
                      name: i(/^(.*)\/(.*) /),
                      version:
                        ((o = /^(.*)\/(.*) /),
                        (s = t.match(o)),
                        (s && s.length > 1 && s[2]) || ""),
                    }),
              !n.msedge && /(apple)?webkit/i.test(t)
                ? (/(apple)?webkit\/537\.36/i.test(t)
                    ? ((n.name = n.name || "Blink"), (n.blink = e))
                    : ((n.name = n.name || "Webkit"), (n.webkit = e)),
                  !n.version && y && (n.version = y))
                : !n.opera &&
                  /gecko\//i.test(t) &&
                  ((n.name = n.name || "Gecko"),
                  (n.gecko = e),
                  (n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i))),
              n.windowsphone || n.msedge || (!a && !n.silk)
                ? n.windowsphone || n.msedge || !r
                  ? v
                    ? (n.mac = e)
                    : O
                    ? (n.xbox = e)
                    : f
                    ? (n.windows = e)
                    : b && (n.linux = e)
                  : ((n[r] = e), (n.ios = e))
                : (n.android = e);
            var E = "";
            n.windows
              ? (E = (function (e) {
                  switch (e) {
                    case "NT":
                      return "NT";
                    case "XP":
                    case "NT 5.1":
                      return "XP";
                    case "NT 5.0":
                      return "2000";
                    case "NT 5.2":
                      return "2003";
                    case "NT 6.0":
                      return "Vista";
                    case "NT 6.1":
                      return "7";
                    case "NT 6.2":
                      return "8";
                    case "NT 6.3":
                      return "8.1";
                    case "NT 10.0":
                      return "10";
                    default:
                      return;
                  }
                })(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)))
              : n.windowsphone
              ? (E = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
              : n.mac
              ? (E = (E = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(
                  /[_\s]/g,
                  "."
                ))
              : r
              ? (E = (E = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(
                  /[_\s]/g,
                  "."
                ))
              : a
              ? (E = i(/android[ \/-](\d+(\.\d+)*)/i))
              : n.webos
              ? (E = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
              : n.blackberry
              ? (E = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
              : n.bada
              ? (E = i(/bada\/(\d+(\.\d+)*)/i))
              : n.tizen && (E = i(/tizen[\/\s](\d+(\.\d+)*)/i)),
              E && (n.osversion = E);
            var C = !n.windows && E.split(".")[0];
            return (
              w ||
              d ||
              "ipad" == r ||
              (a && (3 == C || (C >= 4 && !I))) ||
              n.silk
                ? (n.tablet = e)
                : (I ||
                    "iphone" == r ||
                    "ipod" == r ||
                    a ||
                    l ||
                    n.blackberry ||
                    n.webos ||
                    n.bada) &&
                  (n.mobile = e),
              n.msedge ||
              (n.msie && n.version >= 10) ||
              (n.yandexbrowser && n.version >= 15) ||
              (n.vivaldi && n.version >= 1) ||
              (n.chrome && n.version >= 20) ||
              (n.samsungBrowser && n.version >= 4) ||
              (n.firefox && n.version >= 20) ||
              (n.safari && n.version >= 6) ||
              (n.opera && n.version >= 10) ||
              (n.ios && n.osversion && n.osversion.split(".")[0] >= 6) ||
              (n.blackberry && n.version >= 10.1) ||
              (n.chromium && n.version >= 20)
                ? (n.a = e)
                : (n.msie && n.version < 10) ||
                  (n.chrome && n.version < 20) ||
                  (n.firefox && n.version < 20) ||
                  (n.safari && n.version < 6) ||
                  (n.opera && n.version < 10) ||
                  (n.ios && n.osversion && n.osversion.split(".")[0] < 6) ||
                  (n.chromium && n.version < 20)
                ? (n.c = e)
                : (n.x = e),
              n
            );
          }
          var i = t(
            ("undefined" != typeof navigator && navigator.userAgent) || ""
          );
          function n(e) {
            return e.split(".").length;
          }
          function o(e, t) {
            var i,
              n = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i++) n.push(t(e[i]));
            return n;
          }
          function s(e) {
            for (
              var t = Math.max(n(e[0]), n(e[1])),
                i = o(e, function (e) {
                  var i = t - n(e);
                  return o(
                    (e += new Array(i + 1).join(".0")).split("."),
                    function (e) {
                      return new Array(20 - e.length).join("0") + e;
                    }
                  ).reverse();
                });
              --t >= 0;

            ) {
              if (i[0][t] > i[1][t]) return 1;
              if (i[0][t] !== i[1][t]) return -1;
              if (0 === t) return 0;
            }
          }
          function r(e, n, o) {
            var r = i;
            "string" == typeof n && ((o = n), (n = void 0)),
              void 0 === n && (n = !1),
              o && (r = t(o));
            var a = "" + r.version;
            for (var l in e)
              if (e.hasOwnProperty(l) && r[l]) {
                if ("string" != typeof e[l])
                  throw new Error(
                    "Browser version in the minVersion map should be a string: " +
                      l +
                      ": " +
                      String(e)
                  );
                return s([a, e[l]]) < 0;
              }
            return n;
          }
          return (
            (i.test = function (e) {
              for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("string" == typeof n && n in i) return !0;
              }
              return !1;
            }),
            (i.isUnsupportedBrowser = r),
            (i.compareVersions = s),
            (i.check = function (e, t, i) {
              return !r(e, t, i);
            }),
            (i._detect = t),
            i
          );
        }),
          e.exports ? (e.exports = n()) : i.amdD("bowser", n);
      },
      365: (e) => {
        e.exports = function (e, n, o) {
          "function" == typeof n && ((o = n), (n = {}));
          n || (n = {});
          var s,
            r,
            a = n.prefix || "__jp",
            l = n.name || a + t++,
            d = n.param || "callback",
            c = null != n.timeout ? n.timeout : 6e4,
            u = encodeURIComponent,
            h = document.getElementsByTagName("script")[0] || document.head;
          c &&
            (r = setTimeout(function () {
              g(), o && o(new Error("Timeout"));
            }, c));
          function g() {
            s.parentNode && s.parentNode.removeChild(s),
              (window[l] = i),
              r && clearTimeout(r);
          }
          return (
            (window[l] = function (e) {
              g(), o && o(null, e);
            }),
            (e = (e += (~e.indexOf("?") ? "&" : "?") + d + "=" + u(l)).replace(
              "?&",
              "?"
            )),
            ((s = document.createElement("script")).src = e),
            h.parentNode.insertBefore(s, h),
            function () {
              window[l] && g();
            }
          );
        };
        var t = 0;
        function i() {}
      },
      894: (e, t, i) => {
        "use strict";
        var n;
        i.d(t, { Q: () => n }),
          (function (e) {
            (e.Identity = "identity"),
              (e.Properties = "properties"),
              (e.PushSubscriptions = "pushSubscriptions"),
              (e.EmailSubscriptions = "emailSubscriptions"),
              (e.SmsSubscriptions = "smsSubscriptions");
          })(n || (n = {}));
      },
      608: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => nn });
        var n,
          o = i(655),
          s = i(470),
          r = i.n(s);
        !(function (e) {
          (e.Safari = "safari"),
            (e.Firefox = "firefox"),
            (e.Chrome = "chrome"),
            (e.Opera = "opera"),
            (e.Edge = "edge"),
            (e.Other = "other");
        })(n || (n = {}));
        var a = i(50),
          l = i(450);
        class d {
          static getEnvironmentInfo() {
            return {
              browserType: this.getBrowser(),
              browserVersion: this.getBrowserVersion(),
              isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
              requiresUserInteraction: this.requiresUserInteraction(),
              osVersion: this.getOsVersion(),
            };
          }
          static getBrowser() {
            return "chrome" === (0, l.M)().name
              ? n.Chrome
              : "msedge" === (0, l.M)().name
              ? n.Edge
              : "opera" === (0, l.M)().name
              ? n.Opera
              : "firefox" === (0, l.M)().name
              ? n.Firefox
              : this.isMacOSSafari()
              ? n.Safari
              : n.Other;
          }
          static isMacOSSafari() {
            return void 0 !== window.safari;
          }
          static getBrowserVersion() {
            return a.Z.parseVersionString((0, l.M)().version);
          }
          static supportsServiceWorkers() {
            return window.navigator && "serviceWorker" in window.navigator;
          }
          static requiresUserInteraction() {
            return (
              ("firefox" === this.getBrowser() &&
                this.getBrowserVersion() >= 72) ||
              ("safari" === this.getBrowser() &&
                this.getBrowserVersion() >= 12.1)
            );
          }
          static getOsVersion() {
            return r().osversion;
          }
        }
        var c,
          u = i(365),
          h = i.n(u),
          g = i(326),
          p = i(468);
        !(function (e) {
          (e.ChromePush = "ChromePush"),
            (e.SafariPush = "SafariPush"),
            (e.SafariLegacyPush = "SafariLegacyPush"),
            (e.FirefoxPush = "FirefoxPush"),
            (e.Email = "Email"),
            (e.SMS = "SMS");
        })(c || (c = {}));
        var m,
          f = i(271);
        !(function (e) {
          (e[(e.NoNativePermission = 0)] = "NoNativePermission"),
            (e[(e.Subscribed = 1)] = "Subscribed"),
            (e[(e.UserOptedOut = -2)] = "UserOptedOut"),
            (e[(e.NotSubscribed = -10)] = "NotSubscribed"),
            (e[(e.TemporaryWebRecord = -20)] = "TemporaryWebRecord"),
            (e[(e.PermissionRevoked = -21)] = "PermissionRevoked"),
            (e[(e.PushSubscriptionRevoked = -22)] = "PushSubscriptionRevoked"),
            (e[(e.ServiceWorkerStatus403 = -23)] = "ServiceWorkerStatus403"),
            (e[(e.ServiceWorkerStatus404 = -24)] = "ServiceWorkerStatus404");
        })(m || (m = {}));
        var v,
          b = i(930);
        !(function (e) {
          (e[(e.ChromeLike = 5)] = "ChromeLike"),
            (e[(e.SafariLegacy = 7)] = "SafariLegacy"),
            (e[(e.Firefox = 8)] = "Firefox"),
            (e[(e.Email = 11)] = "Email"),
            (e[(e.Edge = 12)] = "Edge"),
            (e[(e.SMS = 14)] = "SMS"),
            (e[(e.SafariVapid = 17)] = "SafariVapid");
        })(v || (v = {}));
        class S {
          constructor(e) {
            const t = d.getEnvironmentInfo();
            (this.token = this._getToken(e)),
              (this.type = S.getSubscriptionType()),
              (this.notificationTypes = m.Subscribed),
              (this.sdk = String(160201)),
              (this.deviceModel = navigator.platform),
              (this.deviceOs = isNaN(t.browserVersion) ? -1 : t.browserVersion),
              (this.webAuth = e.w3cAuth),
              (this.webp256 = e.w3cP256dh);
          }
          _getToken(e) {
            return e.w3cEndpoint
              ? e.w3cEndpoint.toString()
              : e.safariDeviceToken;
          }
          serialize() {
            return {
              type: this.type,
              token: this.token,
              enabled: this.enabled,
              notification_types: this.notificationTypes,
              sdk: this.sdk,
              device_model: this.deviceModel,
              device_os: this.deviceOs,
              web_auth: this.webAuth,
              web_p256: this.webp256,
            };
          }
          static getSubscriptionType() {
            return f.Z.redetectBrowserUserAgent().firefox
              ? c.FirefoxPush
              : b.Z.useSafariVapidPush()
              ? c.SafariPush
              : b.Z.useSafariLegacyPush()
              ? c.SafariLegacyPush
              : c.ChromePush;
          }
          static getDeviceType() {
            switch (this.getSubscriptionType()) {
              case c.FirefoxPush:
                return v.Firefox;
              case c.SafariLegacyPush:
                return v.SafariLegacy;
              case c.SafariPush:
                return v.SafariVapid;
            }
            return v.ChromeLike;
          }
        }
        class y {
          constructor(e, t) {
            (this.label = e), (this.id = t);
          }
        }
        (y.ONESIGNAL_ID = "onesignal_id"), (y.EXTERNAL_ID = "external_id");
        var w,
          I = i(752);
        !(function (e) {
          (e[(e.MissingAppId = 0)] = "MissingAppId"),
            (e[(e.RetryLimitReached = 1)] = "RetryLimitReached");
        })(w || (w = {}));
        class O extends I.Z {
          constructor(e) {
            let t;
            switch (e) {
              case w.MissingAppId:
                t = "The API call is missing an app ID.";
                break;
              case w.RetryLimitReached:
                t = "The API call has reached the retry limit.";
            }
            super(t), Object.setPrototypeOf(this, O.prototype);
          }
        }
        var E = i(107);
        function C(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        var P = i(353);
        const T = { 5: 1e4, 4: 2e4, 3: 3e4, 2: 3e4, 1: 3e4 };
        class k {
          static get(e, t, i) {
            return k.call("GET", e, t, i);
          }
          static post(e, t, i) {
            return k.call("POST", e, t, i);
          }
          static put(e, t, i) {
            return k.call("PUT", e, t, i);
          }
          static delete(e, t, i) {
            return k.call("DELETE", e, t, i);
          }
          static patch(e, t, i) {
            return k.call("PATCH", e, t, i);
          }
          static call(e, t, i, n) {
            if (!this.requestHasAppId(t, i))
              return Promise.reject(new O(w.MissingAppId));
            const o = new Headers();
            if (
              (o.append("Origin", g.Z.getOrigin()),
              o.append("SDK-Version", `onesignal/web/${b.Z.version()}`),
              o.append("Content-Type", "application/json;charset=UTF-8"),
              n)
            )
              for (const e of Object.keys(n)) o.append(e, n[e]);
            const s = {
              method: e || "NO_METHOD_SPECIFIED",
              headers: o,
              cache: "no-cache",
            };
            i && (s.body = JSON.stringify(i));
            const r = `${g.Z.getOneSignalApiUrl(void 0, t).toString()}/${t}`;
            return k.executeFetch(r, s);
          }
          static executeFetch(e, t, i = 5) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (0 === i) return Promise.reject(new O(w.RetryLimitReached));
              try {
                const i = yield fetch(e, t),
                  { status: n } = i;
                return { result: yield i.json(), status: n };
              } catch (n) {
                if ("TypeError" === n.name)
                  return (
                    yield C(T[i]),
                    E.Z.error(
                      `OneSignal: Network timed out while calling ${e}. Retrying...`
                    ),
                    k.executeFetch(e, t, i - 1)
                  );
                throw new I.Z(
                  `OneSignalApiBase: failed to execute HTTP call: ${n}`
                );
              }
            });
          }
          static requestHasAppId(e, t) {
            if (e.startsWith("apps/")) {
              const t = e.split("/");
              return (0, P.TP)(t[1]);
            }
            return !(!t || "string" != typeof t.app_id) && (0, P.TP)(t.app_id);
          }
        }
        const N = k;
        function x(e) {
          return encodeURIComponent(e).replace(
            /[!'()*]/g,
            (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
          );
        }
        var A, M;
        !(function (e) {
          (e[(e.InvalidAppId = 0)] = "InvalidAppId"),
            (e[(e.AppNotConfiguredForWebPush = 1)] =
              "AppNotConfiguredForWebPush"),
            (e[(e.WrongSiteUrl = 2)] = "WrongSiteUrl"),
            (e[(e.MultipleInitialization = 3)] = "MultipleInitialization"),
            (e[(e.MissingSafariWebId = 4)] = "MissingSafariWebId"),
            (e[(e.Unknown = 5)] = "Unknown");
        })(A || (A = {}));
        class SdkInitError extends I.Z {
          constructor(e, t) {
            let i;
            switch (e) {
              case A.InvalidAppId:
                i =
                  "OneSignal: This app ID does not match any existing app. Double check your app ID.";
                break;
              case A.AppNotConfiguredForWebPush:
                i =
                  "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://tinyurl.com/2x5jzk83).";
                break;
              case A.WrongSiteUrl:
                i =
                  t && t.siteUrl
                    ? `OneSignal: This web push config can only be used on ${
                        new URL(t.siteUrl).origin
                      }. Your current origin is ${location.origin}.`
                    : "OneSignal: This web push config can not be used on the current site.";
                break;
              case A.MultipleInitialization:
                i =
                  "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.";
                break;
              case A.MissingSafariWebId:
                i =
                  "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.";
                break;
              case A.Unknown:
                i = "OneSignal: An unknown initialization error occurred.";
            }
            super(i),
              (this.reason = A[e]),
              Object.setPrototypeOf(this, SdkInitError.prototype);
          }
        }
        class D {
          static createUser(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i, subscriptionId: n } = e,
                o = n ? { "OneSignal-Subscription-Id": n } : void 0;
              let s = {};
              return (
                o && (s = Object.assign(Object.assign({}, s), o)),
                e.jwtHeader &&
                  (s = Object.assign(Object.assign({}, s), e.jwtHeader)),
                (t.refresh_device_metadata = !0),
                N.post(`apps/${i}/users`, t, s)
              );
            });
          }
          static getUser(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.get(
                `apps/${i}/users/by/${t.label}/${t.id}`,
                e.jwtHeader
              );
            });
          }
          static updateUser(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n, subscriptionId: o } = e;
              if (!f.Z.isValidUuid(n)) throw new SdkInitError(A.InvalidAppId);
              const s = o ? { "OneSignal-Subscription-Id": o } : void 0;
              let r = {};
              s && (r = Object.assign(Object.assign({}, r), s)),
                e.jwtHeader &&
                  (r = Object.assign(Object.assign({}, r), e.jwtHeader));
              const a = x(t.label),
                l = x(t.id);
              return N.patch(`apps/${n}/users/by/${a}/${l}`, i, r);
            });
          }
          static deleteUser(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.delete(
                `apps/${i}/users/by/${t.label}/${t.id}`,
                e.jwtHeader
              );
            });
          }
          static addAlias(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.patch(
                `apps/${n}/users/by/${t.label}/${t.id}/identity`,
                { identity: i },
                e.jwtHeader
              );
            });
          }
          static getUserIdentity(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.get(
                `apps/${i}/users/by/${t.label}/${t.id}/identity`,
                e.jwtHeader
              );
            });
          }
          static deleteAlias(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.delete(
                `apps/${n}/users/by/${t.label}/${t.id}/identity/${i}`,
                e.jwtHeader
              );
            });
          }
          static createSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.post(
                `apps/${n}/users/by/${t.label}/${t.id}/subscriptions`,
                i,
                e.jwtHeader
              );
            });
          }
          static updateSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.patch(`apps/${n}/subscriptions/${t}`, {
                subscription: i,
              });
            });
          }
          static deleteSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.delete(`apps/${i}/subscriptions/${t}`);
            });
          }
          static fetchAliasesForSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: i } = e;
              return N.get(`apps/${i}/subscriptions/${t}/identity`);
            });
          }
          static identifyUserForSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: n } = e;
              return N.patch(
                `apps/${n}/users/by/subscriptions/${t}/identity`,
                { identity: i },
                e.jwtHeader
              );
            });
          }
          static transferSubscription(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { appId: o } = e;
              return N.patch(
                `apps/${o}/subscriptions/${t}/owner`,
                { identity: Object.assign({}, i), retain_previous_owner: n },
                e.jwtHeader
              );
            });
          }
        }
        !(function (e) {
          (e[(e.Direct = 1)] = "Direct"),
            (e[(e.Indirect = 2)] = "Indirect"),
            (e[(e.Unattributed = 3)] = "Unattributed"),
            (e[(e.NotSupported = 4)] = "NotSupported");
        })(M || (M = {}));
        class Z {
          static sendNotification(e, t, i, n, o, s, r, l) {
            const d = {
              app_id: e,
              contents: n,
              include_player_ids: t,
              isAnyWeb: !0,
              data: r,
              web_buttons: l,
            };
            return (
              i && (d.headings = i),
              o && (d.url = o),
              s && ((d.chrome_web_icon = s), (d.firefox_icon = s)),
              a.Z.trimUndefined(d),
              N.post("notifications", d)
            );
          }
          static sendOutcome(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              E.Z.info("Outcome payload:", e);
              try {
                yield N.post("outcomes/measure", e);
              } catch (e) {
                E.Z.error("sendOutcome", e);
              }
            });
          }
        }
        const _ = class {
          static downloadServerAppConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              a.Z.enforceAppId(e);
              const t = yield k.get(`sync/${e}/web`, null);
              return null == t ? void 0 : t.result;
            });
          }
          static getUserIdFromSubscriptionIdentifier(e, t, i) {
            return (
              a.Z.enforceAppId(e),
              k
                .post("players", {
                  app_id: e,
                  device_type: t,
                  identifier: i,
                  notification_types: m.TemporaryWebRecord,
                })
                .then((e) => (e && e.id ? e.id : null))
                .catch(
                  (e) => (
                    E.Z.debug(
                      "Error getting user ID from subscription identifier:",
                      e
                    ),
                    null
                  )
                )
            );
          }
          static updateUserSession(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const n = new y(y.ONESIGNAL_ID, t),
                o = {
                  refresh_device_metadata: !0,
                  deltas: { session_count: 1 },
                };
              a.Z.enforceAppId(e), a.Z.enforceAlias(n);
              try {
                yield D.updateUser({ appId: e, subscriptionId: i }, n, o);
              } catch (e) {
                E.Z.debug("Error updating user session:", e);
              }
            });
          }
          static sendSessionDuration(e, t, i, n, s) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = {
                  refresh_device_metadata: !0,
                  deltas: { session_time: n },
                },
                r = new y(y.ONESIGNAL_ID, t),
                a = {
                  id: "os__session_duration",
                  app_id: e,
                  session_time: n,
                  notification_ids: s.notificationIds,
                  subscription: { id: i, type: S.getSubscriptionType() },
                  onesignal_id: t,
                };
              a.direct = s.type === M.Direct;
              try {
                yield D.updateUser({ appId: e, subscriptionId: i }, r, o),
                  a.notification_ids &&
                    a.notification_ids.length > 0 &&
                    (yield Z.sendOutcome(a));
              } catch (e) {
                E.Z.debug("Error sending session duration:", e);
              }
            });
          }
        };
        class U {
          static sendNotification(e, t, i, n, o, s, r, a) {
            return Z.sendNotification(e, t, i, n, o, s, r, a);
          }
          static jsonpLib(e, t) {
            h()(e, null, t);
          }
          static downloadServerAppConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return g.Z.getWindowEnv() === p.Q.Host
                ? yield new Promise((t, i) => {
                    U.jsonpLib(
                      `${g.Z.getOneSignalApiUrl().toString()}/sync/${e}/web`,
                      (e, n) => {
                        e ? i(e) : n.success ? t(n) : i(n);
                      }
                    );
                  })
                : yield _.downloadServerAppConfig(e);
            });
          }
        }
        var G;
        !(function (e) {
          (e.Native = "native"),
            (e.Push = "push"),
            (e.Category = "category"),
            (e.Sms = "sms"),
            (e.Email = "email"),
            (e.SmsAndEmail = "smsAndEmail");
        })(G || (G = {}));
        const B = 30,
          L = !1,
          R = !0,
          F = { pageViews: 1, timeDelay: 0 },
          W =
            "We'd like to show you notifications for the latest news and updates.",
          V = "Allow",
          $ = "Cancel",
          j = "Try Again",
          H = {
            updateMessage:
              "Update your push notification subscription preferences.",
            positiveUpdateButton: "Save Preferences",
            negativeUpdateButton: "Cancel",
          },
          Q = "Saving...",
          q = "Thank You!",
          K = {
            type: G.Push,
            text: { actionMessage: W, acceptButton: V, cancelButton: $ },
            autoPrompt: !1,
            delay: F,
          };
        class z {
          static convertTagsApiToBooleans(e) {
            const t = {};
            return (
              Object.keys(e).forEach((i) => {
                t[i] = "1" === e[i];
              }),
              t
            );
          }
          static convertTagsBooleansToApi(e) {
            const t = {};
            return (
              Object.keys(e).forEach((i) => {
                t[i] = !0 === e[i] ? "1" : "0";
              }),
              t
            );
          }
          static getObjectDifference(e, t) {
            const i = {};
            return (
              Object.keys(e).forEach((n) => {
                t[n] !== e[n] && (i[n] = e[n]);
              }),
              i
            );
          }
          static markAllTagsAsSpecified(e, t) {
            e.forEach((e) => {
              e.checked = t;
            });
          }
          static isTagObjectEmpty(e) {
            return 0 === Object.keys(e).length;
          }
          static getCheckedTagCategories(e, t) {
            if (!t) return e;
            if (z.isTagObjectEmpty(t)) {
              const t = (0, P.p$)(e);
              return z.markAllTagsAsSpecified(t, !0), t;
            }
            return (0, P.p$)(e).map((e) => {
              const i = t[e.tag];
              return (e.checked = z.getCheckedStatusForTagValue(i)), e;
            });
          }
          static getCheckedStatusForTagValue(e) {
            return void 0 === e || e;
          }
          static limitCategoriesToMaxCount(e, t) {
            let i = (0, P.p$)(e);
            return (i = e.slice(0, t)), i;
          }
        }
        class J {
          static isCategorySlidedownConfigured(e) {
            if (!e) return !1;
            const t = J.getFirstSlidedownPromptOptionsWithType(e, G.Category);
            return !!t && !!t.categories && t.categories.length > 0;
          }
          static isCategorySlidedownConfiguredVersion1(e) {
            var t, i;
            return (
              ((null ===
                (i =
                  null === (t = null == e ? void 0 : e.categories) ||
                  void 0 === t
                    ? void 0
                    : t.tags) || void 0 === i
                ? void 0
                : i.length) || 0) > 0
            );
          }
          static getFirstSlidedownPromptOptionsWithType(e, t) {
            return e ? e.filter((e) => e.type === t)[0] : void 0;
          }
          static isSlidedownAutoPromptConfigured(e) {
            if (!e) return !1;
            for (let t = 0; t < e.length; t++) if (e[t].autoPrompt) return !0;
            return !1;
          }
          static isSlidedownPushDependent(e) {
            return e === G.Push || e === G.Category;
          }
        }
        class Y {
          static upgradeConfigToVersionTwo(e) {
            var t, i, n;
            Y.isPromptOptionsVersion0(e.promptOptions) &&
              (e.promptOptions = Y.convertConfigToVersionOne(e.promptOptions)),
              Y.isSlidedownConfigVersion1(
                null === (t = e.promptOptions) || void 0 === t
                  ? void 0
                  : t.slidedown
              ) &&
                (null === (i = e.promptOptions) || void 0 === i
                  ? void 0
                  : i.slidedown) &&
                (e.promptOptions.slidedown = Y.convertConfigToVersionTwo(
                  null === (n = e.promptOptions) || void 0 === n
                    ? void 0
                    : n.slidedown
                ));
          }
          static convertConfigToVersionOne(e) {
            e.slidedown || (e.slidedown = {});
            const {
                acceptButtonText: t,
                cancelButtonText: i,
                actionMessage: n,
              } = e.slidedown,
              o = e.acceptButtonText || e.acceptButton,
              s = e.cancelButtonText || e.cancelButton;
            return (
              (e.slidedown.acceptButtonText = t || o),
              (e.slidedown.cancelButtonText = i || s),
              (e.slidedown.actionMessage = n || e.actionMessage),
              e
            );
          }
          static convertConfigToVersionTwo(e) {
            var t, i, n, o;
            const s = J.isCategorySlidedownConfiguredVersion1(e)
              ? G.Category
              : G.Push;
            let r, a;
            s === G.Category &&
              ((r =
                null === (t = e.categories) || void 0 === t
                  ? void 0
                  : t.positiveUpdateButton),
              (a =
                null === (i = e.categories) || void 0 === i
                  ? void 0
                  : i.negativeUpdateButton));
            return {
              prompts: [
                ...(e.prompts || []),
                {
                  type: s,
                  autoPrompt: e.autoPrompt,
                  text: {
                    actionMessage: e.actionMessage,
                    acceptButton: e.acceptButton || e.acceptButtonText,
                    cancelButton: e.cancelButton || e.cancelButtonText,
                    positiveUpdateButton: r,
                    negativeUpdateButton: a,
                    updateMessage:
                      null === (n = null == e ? void 0 : e.categories) ||
                      void 0 === n
                        ? void 0
                        : n.updateMessage,
                  },
                  delay: { pageViews: e.pageViews, timeDelay: e.timeDelay },
                  categories:
                    null === (o = null == e ? void 0 : e.categories) ||
                    void 0 === o
                      ? void 0
                      : o.tags,
                },
              ],
            };
          }
          static isPromptOptionsVersion0(e) {
            if (e) {
              const t = [
                "acceptButtonText",
                "cancelButtonText",
                "actionMessage",
              ];
              for (let i = 0; i < t.length; i++)
                if (e.hasOwnProperty(t[i])) return !0;
            }
            return !1;
          }
          static isSlidedownConfigVersion1(e) {
            if (e) {
              const t = [
                "enabled",
                "autoPrompt",
                "pageViews",
                "timeDelay",
                "acceptButton",
                "acceptButtonText",
                "cancelButton",
                "cancelButtonText",
                "actionMessage",
                "customizeTextEnabled",
                "categories",
              ];
              for (let i = 0; i < t.length; i++)
                if (e.hasOwnProperty(t[i])) return !0;
            }
            return !1;
          }
        }
        var X, ee, te, ie;
        !(function (e) {
          (e.TypicalSite = "typical"),
            (e.WordPress = "wordpress"),
            (e.Shopify = "shopify"),
            (e.Blogger = "blogger"),
            (e.Magento = "magento"),
            (e.Drupal = "drupal"),
            (e.SquareSpace = "squarespace"),
            (e.Joomla = "joomla"),
            (e.Weebly = "weebly"),
            (e.Wix = "wix"),
            (e.Custom = "custom");
        })(X || (X = {})),
          (function (e) {
            (e.Exact = "exact"), (e.Origin = "origin");
          })(ee || (ee = {})),
          (function (e) {
            (e.Navigate = "navigate"), (e.Focus = "focus");
          })(te || (te = {})),
          (function (e) {
            (e[(e.Dashboard = 0)] = "Dashboard"),
              (e[(e.JavaScript = 1)] = "JavaScript");
          })(ie || (ie = {}));
        class ne {
          static getAppConfig(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                if (!e || !e.appId || !f.Z.isValidUuid(e.appId))
                  throw new SdkInitError(A.InvalidAppId);
                const i = yield t(e.appId);
                Y.upgradeConfigToVersionTwo(e);
                const n = this.getMergedConfig(e, i);
                return (
                  this.checkUnsupportedSubdomain(n),
                  this.checkRestrictedOrigin(n),
                  n
                );
              } catch (e) {
                if (e) {
                  if (1 === e.code) throw new SdkInitError(A.InvalidAppId);
                  if (2 === e.code)
                    throw new SdkInitError(A.AppNotConfiguredForWebPush);
                }
                throw e;
              }
            });
          }
          static checkUnsupportedSubdomain(e) {
            const t = !window.isSecureContext;
            if (e.hasUnsupportedSubdomain || t)
              throw t
                ? new Error(
                    "OneSignalSDK: HTTP sites are no longer supported starting with version 16 (User Model), your public site must start with https://. Please visit the OneSignal dashboard's Settings > Web Configuration to find this option."
                  )
                : new Error(
                    'OneSignalSDK: The "My site is not fully HTTPS" option is no longer supported starting with version 16 (User Model) of the OneSignal SDK. Please visit the OneSignal dashboard\'s Settings > Web Configuration to find this option.'
                  );
          }
          static checkRestrictedOrigin(e) {
            if (
              e.restrictedOriginEnabled &&
              g.Z.getWindowEnv() === p.Q.Host &&
              !this.doesCurrentOriginMatchConfigOrigin(e.origin)
            )
              throw new SdkInitError(A.WrongSiteUrl, { siteUrl: e.origin });
          }
          static doesCurrentOriginMatchConfigOrigin(e) {
            try {
              return location.origin === new URL(e).origin;
            } catch (e) {
              return !1;
            }
          }
          static getIntegrationCapabilities(e) {
            switch (e) {
              case X.Custom:
              case X.WordPress:
                return { configuration: ie.JavaScript };
              default:
                return { configuration: ie.Dashboard };
            }
          }
          static getMergedConfig(e, t) {
            const i = this.getConfigIntegrationKind(t),
              n = this.hasUnsupportedSubdomainForConfigIntegrationKind(i, e, t),
              o = this.getUserConfigForConfigIntegrationKind(i, e, t);
            return {
              appId: t.app_id,
              hasUnsupportedSubdomain: n,
              siteName: t.config.siteInfo.name,
              origin: t.config.origin,
              restrictedOriginEnabled:
                t.features.restrict_origin && t.features.restrict_origin.enable,
              safariWebId: t.config.safari_web_id,
              vapidPublicKey: t.config.vapid_public_key,
              onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
              userConfig: o,
              enableOnSession: a.Z.valueOrDefault(
                t.features.enable_on_session,
                L
              ),
              sessionThreshold: a.Z.valueOrDefault(
                t.features.session_threshold,
                B
              ),
              enableSessionDuration: a.Z.valueOrDefault(
                t.features.web_on_focus_enabled,
                R
              ),
            };
          }
          static getConfigIntegrationKind(e) {
            return e.config.integration ? e.config.integration.kind : X.Custom;
          }
          static getCustomLinkConfig(e) {
            const t = {
              enabled: !1,
              style: "button",
              size: "medium",
              unsubscribeEnabled: !1,
              text: { explanation: "", subscribe: "", unsubscribe: "" },
              color: { button: "", text: "" },
            };
            if (
              !(
                e &&
                e.config &&
                e.config.staticPrompts &&
                e.config.staticPrompts.customlink &&
                e.config.staticPrompts.customlink.enabled
              )
            )
              return t;
            const i = e.config.staticPrompts.customlink;
            return {
              enabled: i.enabled,
              style: i.style,
              size: i.size,
              unsubscribeEnabled: i.unsubscribeEnabled,
              text: i.text
                ? {
                    subscribe: i.text.subscribe,
                    unsubscribe: i.text.unsubscribe,
                    explanation: i.text.explanation,
                  }
                : t.text,
              color: i.color
                ? { button: i.color.button, text: i.color.text }
                : t.color,
            };
          }
          static injectDefaultsIntoPromptOptions(e, t, i) {
            var n, o;
            let s = { enabled: !1 };
            e && e.customlink && (s = e.customlink);
            const r = t.customlink,
              l = Object.assign(Object.assign({}, e), {
                customlink: {
                  enabled: a.Z.getValueOrDefault(s.enabled, r.enabled),
                  style: a.Z.getValueOrDefault(s.style, r.style),
                  size: a.Z.getValueOrDefault(s.size, r.size),
                  unsubscribeEnabled: a.Z.getValueOrDefault(
                    s.unsubscribeEnabled,
                    r.unsubscribeEnabled
                  ),
                  text: {
                    subscribe: a.Z.getValueOrDefault(
                      s.text ? s.text.subscribe : void 0,
                      r.text.subscribe
                    ),
                    unsubscribe: a.Z.getValueOrDefault(
                      s.text ? s.text.unsubscribe : void 0,
                      r.text.unsubscribe
                    ),
                    explanation: a.Z.getValueOrDefault(
                      s.text ? s.text.explanation : void 0,
                      r.text.explanation
                    ),
                  },
                  color: {
                    button: a.Z.getValueOrDefault(
                      s.color ? s.color.button : void 0,
                      r.color.button
                    ),
                    text: a.Z.getValueOrDefault(
                      s.color ? s.color.text : void 0,
                      r.color.text
                    ),
                  },
                },
              });
            return (
              l.slidedown
                ? (l.slidedown.prompts =
                    null ===
                      (o =
                        null === (n = l.slidedown) || void 0 === n
                          ? void 0
                          : n.prompts) || void 0 === o
                      ? void 0
                      : o.map((e) => {
                          var t, i, n, o, s, r, l, d, c;
                          if (
                            ((e.type = a.Z.getValueOrDefault(e.type, G.Push)),
                            e.type === G.Category &&
                              (e.text = Object.assign(
                                Object.assign({}, e.text),
                                {
                                  positiveUpdateButton: a.Z.getValueOrDefault(
                                    null === (t = e.text) || void 0 === t
                                      ? void 0
                                      : t.positiveUpdateButton,
                                    H.positiveUpdateButton
                                  ),
                                  negativeUpdateButton: a.Z.getValueOrDefault(
                                    null === (i = e.text) || void 0 === i
                                      ? void 0
                                      : i.negativeUpdateButton,
                                    H.negativeUpdateButton
                                  ),
                                  updateMessage: a.Z.getValueOrDefault(
                                    null === (n = e.text) || void 0 === n
                                      ? void 0
                                      : n.updateMessage,
                                    H.updateMessage
                                  ),
                                }
                              )),
                            (e.text = Object.assign(Object.assign({}, e.text), {
                              actionMessage: a.Z.getValueOrDefault(
                                null === (o = e.text) || void 0 === o
                                  ? void 0
                                  : o.actionMessage,
                                W
                              ),
                              acceptButton: a.Z.getValueOrDefault(
                                null === (s = e.text) || void 0 === s
                                  ? void 0
                                  : s.acceptButton,
                                V
                              ),
                              cancelButton: a.Z.getValueOrDefault(
                                null === (r = e.text) || void 0 === r
                                  ? void 0
                                  : r.cancelButton,
                                $
                              ),
                              confirmMessage: a.Z.getValueOrDefault(
                                null === (l = e.text) || void 0 === l
                                  ? void 0
                                  : l.confirmMessage,
                                q
                              ),
                            })),
                            (e.autoPrompt = a.Z.getValueOrDefault(
                              e.autoPrompt,
                              !0
                            )),
                            (e.delay = {
                              pageViews: a.Z.getValueOrDefault(
                                null === (d = e.delay) || void 0 === d
                                  ? void 0
                                  : d.pageViews,
                                F.pageViews
                              ),
                              timeDelay: a.Z.getValueOrDefault(
                                null === (c = e.delay) || void 0 === c
                                  ? void 0
                                  : c.timeDelay,
                                F.timeDelay
                              ),
                            }),
                            e.categories)
                          ) {
                            const { categories: t } = e;
                            e.categories = z.limitCategoriesToMaxCount(t, 10);
                          }
                          return e;
                        }))
                : ((l.slidedown = { prompts: [] }),
                  (l.slidedown.prompts = [K])),
              l.native
                ? ((l.native.enabled = !!l.native.enabled),
                  (l.native.autoPrompt = l.native.hasOwnProperty("autoPrompt")
                    ? !!l.native.enabled && !!l.native.autoPrompt
                    : !!l.native.enabled),
                  (l.native.pageViews = a.Z.getValueOrDefault(
                    l.native.pageViews,
                    F.pageViews
                  )),
                  (l.native.timeDelay = a.Z.getValueOrDefault(
                    l.native.timeDelay,
                    F.timeDelay
                  )))
                : (l.native = {
                    enabled: !1,
                    autoPrompt: !1,
                    pageViews: F.pageViews,
                    timeDelay: F.timeDelay,
                  }),
              !0 === i.autoRegister &&
                ((l.native.enabled = !0), (l.native.autoPrompt = !0)),
              (l.autoPrompt =
                l.native.autoPrompt ||
                J.isSlidedownAutoPromptConfigured(l.slidedown.prompts)),
              l
            );
          }
          static getPromptOptionsForDashboardConfiguration(e) {
            const t = e.config.staticPrompts,
              i = t.native
                ? {
                    enabled: t.native.enabled,
                    autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt,
                    pageViews: a.Z.getValueOrDefault(
                      t.native.pageViews,
                      F.pageViews
                    ),
                    timeDelay: a.Z.getValueOrDefault(
                      t.native.timeDelay,
                      F.timeDelay
                    ),
                  }
                : {
                    enabled: !1,
                    autoPrompt: !1,
                    pageViews: F.pageViews,
                    timeDelay: F.timeDelay,
                  },
              { prompts: n } = t.slidedown;
            return {
              autoPrompt: i.autoPrompt || J.isSlidedownAutoPromptConfigured(n),
              native: i,
              slidedown: { prompts: n },
              fullscreen: {
                enabled: t.fullscreen.enabled,
                actionMessage: t.fullscreen.actionMessage,
                acceptButton: t.fullscreen.acceptButton,
                cancelButton: t.fullscreen.cancelButton,
                title: t.fullscreen.title,
                message: t.fullscreen.message,
                caption: t.fullscreen.caption,
                autoAcceptTitle: t.fullscreen.autoAcceptTitle,
              },
              customlink: this.getCustomLinkConfig(e),
            };
          }
          static getUserConfigForConfigIntegrationKind(e, t, i) {
            switch (this.getIntegrationCapabilities(e).configuration) {
              case ie.Dashboard:
                return {
                  appId: i.app_id,
                  autoRegister: !1,
                  autoResubscribe: i.config.autoResubscribe,
                  path: i.config.serviceWorker.path,
                  serviceWorkerPath: i.config.serviceWorker.workerName,
                  serviceWorkerParam: {
                    scope: i.config.serviceWorker.registrationScope,
                  },
                  subdomainName: i.config.siteInfo.proxyOrigin,
                  promptOptions:
                    this.getPromptOptionsForDashboardConfiguration(i),
                  welcomeNotification: {
                    disable: !i.config.welcomeNotification.enable,
                    title: i.config.welcomeNotification.title,
                    message: i.config.welcomeNotification.message,
                    url: i.config.welcomeNotification.url,
                  },
                  notifyButton: {
                    enable: i.config.staticPrompts.bell.enabled,
                    displayPredicate: i.config.staticPrompts.bell
                      .hideWhenSubscribed
                      ? () => !OneSignal.User.PushSubscription.optedIn
                      : null,
                    size: i.config.staticPrompts.bell.size,
                    position: i.config.staticPrompts.bell.location,
                    showCredit: !1,
                    offset: {
                      bottom: `${i.config.staticPrompts.bell.offset.bottom}px`,
                      left: `${i.config.staticPrompts.bell.offset.left}px`,
                      right: `${i.config.staticPrompts.bell.offset.right}px`,
                    },
                    colors: {
                      "circle.background":
                        i.config.staticPrompts.bell.color.main,
                      "circle.foreground":
                        i.config.staticPrompts.bell.color.accent,
                      "badge.background": "black",
                      "badge.foreground": "white",
                      "badge.bordercolor": "black",
                      "pulse.color": i.config.staticPrompts.bell.color.accent,
                      "dialog.button.background.hovering":
                        i.config.staticPrompts.bell.color.main,
                      "dialog.button.background.active":
                        i.config.staticPrompts.bell.color.main,
                      "dialog.button.background":
                        i.config.staticPrompts.bell.color.main,
                      "dialog.button.foreground": "white",
                    },
                    text: {
                      "tip.state.unsubscribed":
                        i.config.staticPrompts.bell.tooltip.unsubscribed,
                      "tip.state.subscribed":
                        i.config.staticPrompts.bell.tooltip.subscribed,
                      "tip.state.blocked":
                        i.config.staticPrompts.bell.tooltip.blocked,
                      "message.prenotify":
                        i.config.staticPrompts.bell.tooltip.unsubscribed,
                      "message.action.subscribing":
                        i.config.staticPrompts.bell.message.subscribing,
                      "message.action.subscribed":
                        i.config.staticPrompts.bell.message.subscribing,
                      "message.action.resubscribed":
                        i.config.staticPrompts.bell.message.subscribing,
                      "message.action.unsubscribed":
                        i.config.staticPrompts.bell.message.unsubscribing,
                      "dialog.main.title":
                        i.config.staticPrompts.bell.dialog.main.title,
                      "dialog.main.button.subscribe":
                        i.config.staticPrompts.bell.dialog.main.subscribeButton,
                      "dialog.main.button.unsubscribe":
                        i.config.staticPrompts.bell.dialog.main
                          .unsubscribeButton,
                      "dialog.blocked.title":
                        i.config.staticPrompts.bell.dialog.blocked.title,
                      "dialog.blocked.message":
                        i.config.staticPrompts.bell.dialog.blocked.message,
                    },
                  },
                  persistNotification: i.config.notificationBehavior
                    ? i.config.notificationBehavior.display.persist
                    : void 0,
                  webhooks: {
                    cors: i.config.webhooks.corsEnable,
                    "notification.willDisplay":
                      i.config.webhooks.notificationDisplayedHook,
                    "notification.clicked":
                      i.config.webhooks.notificationClickedHook,
                    "notification.dismissed":
                      i.config.webhooks.notificationDismissedHook,
                  },
                  notificationClickHandlerMatch: i.config.notificationBehavior
                    ? i.config.notificationBehavior.click.match
                    : void 0,
                  notificationClickHandlerAction: i.config.notificationBehavior
                    ? i.config.notificationBehavior.click.action
                    : void 0,
                  allowLocalhostAsSecureOrigin: i.config.setupBehavior
                    ? i.config.setupBehavior.allowLocalhostAsSecureOrigin
                    : void 0,
                  outcomes: {
                    direct: i.config.outcomes.direct,
                    indirect: {
                      enabled: i.config.outcomes.indirect.enabled,
                      influencedTimePeriodMin:
                        i.config.outcomes.indirect.notification_attribution
                          .minutes_since_displayed,
                      influencedNotificationsLimit:
                        i.config.outcomes.indirect.notification_attribution
                          .limit,
                    },
                    unattributed: i.config.outcomes.unattributed,
                  },
                };
              case ie.JavaScript: {
                const e = { scope: "/" },
                  n = "OneSignalSDKWorker.js",
                  o = Object.assign(
                    Object.assign(
                      Object.assign(Object.assign({}, t), {
                        promptOptions: this.injectDefaultsIntoPromptOptions(
                          t.promptOptions,
                          i.config.staticPrompts,
                          t
                        ),
                      }),
                      {
                        serviceWorkerParam: t.serviceWorkerParam
                          ? t.serviceWorkerParam
                          : e,
                        serviceWorkerPath: t.serviceWorkerPath
                          ? t.serviceWorkerPath
                          : n,
                        path: t.path ? t.path : "/",
                      }
                    ),
                    {
                      outcomes: {
                        direct: i.config.outcomes.direct,
                        indirect: {
                          enabled: i.config.outcomes.indirect.enabled,
                          influencedTimePeriodMin:
                            i.config.outcomes.indirect.notification_attribution
                              .minutes_since_displayed,
                          influencedNotificationsLimit:
                            i.config.outcomes.indirect.notification_attribution
                              .limit,
                        },
                        unattributed: i.config.outcomes.unattributed,
                      },
                    }
                  );
                return (
                  t.hasOwnProperty("autoResubscribe")
                    ? (o.autoResubscribe = !!t.autoResubscribe)
                    : t.hasOwnProperty("autoRegister")
                    ? (o.autoResubscribe = !!t.autoRegister)
                    : (o.autoResubscribe = !!i.config.autoResubscribe),
                  o
                );
              }
            }
          }
          static hasUnsupportedSubdomainForConfigIntegrationKind(e, t, i) {
            switch (this.getIntegrationCapabilities(e).configuration) {
              case ie.Dashboard:
                return i.config.siteInfo.proxyOriginEnabled;
              case ie.JavaScript:
                return !!t.subdomainName;
            }
          }
        }
        class oe {
          getAppConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield ne.getAppConfig(e, U.downloadServerAppConfig);
            });
          }
          getMergedConfig(e, t) {
            return ne.getMergedConfig(e, t);
          }
        }
        var se,
          InvalidArgumentError = i(86);
        class re {
          static getRegistration(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                const t = location.origin + e;
                return yield navigator.serviceWorker.getRegistration(t);
              } catch (t) {
                return (
                  E.Z.warn(
                    "[Service Worker Status] Error Checking service worker registration",
                    e,
                    t
                  ),
                  null
                );
              }
            });
          }
          static getAvailableServiceWorker(e) {
            const t = e.active || e.installing || e.waiting;
            return (
              t ||
                E.Z.warn("Could not find an available ServiceWorker instance!"),
              t
            );
          }
          static waitUntilActive(e) {
            return new Promise((t) => {
              const i = e.installing || e.waiting;
              i &&
                i.addEventListener("statechange", () => {
                  E.Z.debug("OneSignal Service Worker state changed:", i.state),
                    e.active && t();
                }),
                e.active && t();
            });
          }
        }
        !(function (e) {
          (e.WorkerVersion = "GetWorkerVersion"),
            (e.Subscribe = "Subscribe"),
            (e.SubscribeNew = "SubscribeNew"),
            (e.AmpSubscriptionState = "amp-web-push-subscription-state"),
            (e.AmpSubscribe = "amp-web-push-subscribe"),
            (e.AmpUnsubscribe = "amp-web-push-unsubscribe"),
            (e.NotificationWillDisplay = "notification.willDisplay"),
            (e.NotificationClicked = "notification.clicked"),
            (e.NotificationDismissed = "notification.dismissed"),
            (e.RedirectPage = "command.redirect"),
            (e.SessionUpsert = "os.session.upsert"),
            (e.SessionDeactivate = "os.session.deactivate"),
            (e.AreYouVisible = "os.page_focused_request"),
            (e.AreYouVisibleResponse = "os.page_focused_response"),
            (e.SetLogging = "os.set_sw_logging");
        })(se || (se = {}));
        class ae {
          constructor() {
            this.replies = {};
          }
          addListener(e, t, i) {
            const n = { callback: t, onceListenerOnly: i },
              o = this.replies[e.toString()];
            o ? o.push(n) : (this.replies[e.toString()] = [n]);
          }
          findListenersForMessage(e) {
            return this.replies[e.toString()] || [];
          }
          deleteListenerRecords(e) {
            this.replies[e.toString()] = null;
          }
          deleteAllListenerRecords() {
            this.replies = {};
          }
          deleteListenerRecord(e, t) {
            const i = this.replies[e.toString()];
            if (null != i)
              for (let e = i.length - 1; e >= 0; e--) {
                i[e] === t && i.splice(e, 1);
              }
          }
        }
        class le {
          constructor(e, t = new ae()) {
            (this.context = e), (this.replies = t);
          }
          broadcast(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (g.Z.getWindowEnv() !== p.Q.ServiceWorker) return;
              const i = yield self.clients.matchAll({
                type: "window",
                includeUncontrolled: !0,
              });
              for (const n of i)
                E.Z.debug(
                  `[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${
                    n.url
                  }.`
                ),
                  n.postMessage({ command: e, payload: t });
            });
          }
          unicast(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (g.Z.getWindowEnv() === p.Q.ServiceWorker) {
                if (!i)
                  throw new InvalidArgumentError.R(
                    "windowClient",
                    InvalidArgumentError.Q.Empty
                  );
                E.Z.debug(
                  `[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${
                    i.url
                  }.`
                ),
                  i.postMessage({ command: e, payload: t });
              } else E.Z.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`), this.directPostMessageToSW(e, t);
            });
          }
          directPostMessageToSW(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i;
              E.Z.debug(
                `[Worker Messenger] [Page -> SW] Direct command '${e.toString()}' to service worker.`
              );
              const n = yield null === (i = this.context) || void 0 === i
                ? void 0
                : i.serviceWorkerManager.getRegistration();
              if (!n)
                return void E.Z.error(
                  "`[Worker Messenger] [Page -> SW] Could not get ServiceWorkerRegistration to postMessage!"
                );
              const o = re.getAvailableServiceWorker(n);
              o
                ? o.postMessage({ command: e, payload: t })
                : E.Z.error(
                    "`[Worker Messenger] [Page -> SW] Could not get ServiceWorker to postMessage!"
                  );
            });
          }
          listen() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!b.Z.supportsServiceWorkers()) return;
              g.Z.getWindowEnv() === p.Q.ServiceWorker
                ? (self.addEventListener(
                    "message",
                    this.onWorkerMessageReceivedFromPage.bind(this)
                  ),
                  E.Z.debug(
                    "[Worker Messenger] Service worker is now listening for messages."
                  ))
                : yield this.listenForPage();
            });
          }
          listenForPage() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              navigator.serviceWorker.addEventListener(
                "message",
                this.onPageMessageReceivedFromServiceWorker.bind(this)
              ),
                E.Z.debug(
                  `(${location.origin}) [Worker Messenger] Page is now listening for messages.`
                );
            });
          }
          onWorkerMessageReceivedFromPage(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command),
              n = [],
              o = [];
            E.Z.debug(
              "[Worker Messenger] Service worker received message:",
              e.data
            );
            for (const e of i) e.onceListenerOnly && n.push(e), o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
              const i = n[e];
              this.replies.deleteListenerRecord(t.command, i);
            }
            for (const e of o) e.callback.apply(null, [t.payload]);
          }
          onPageMessageReceivedFromServiceWorker(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command),
              n = [],
              o = [];
            E.Z.debug("[Worker Messenger] Page received message:", e.data);
            for (const e of i) e.onceListenerOnly && n.push(e), o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
              const i = n[e];
              this.replies.deleteListenerRecord(t.command, i);
            }
            for (const e of o) e.callback.apply(null, [t.payload]);
          }
          on(e, t) {
            this.replies.addListener(e, t, !1);
          }
          once(e, t) {
            this.replies.addListener(e, t, !0);
          }
          off(e) {
            e
              ? this.replies.deleteListenerRecords(e)
              : this.replies.deleteAllListenerRecords();
          }
        }
        class de {
          constructor() {
            this.cache = {};
          }
          getCache() {
            return Object.assign({}, this.cache);
          }
          loadSdkStylesheet() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = g.Z.getOneSignalResourceUrlPath(),
                t = g.Z.getOneSignalCssFileName();
              return yield this.loadIfNew(
                0,
                new URL(`${e}/${t}?v=${b.Z.getSdkStylesVersionHash()}`)
              );
            });
          }
          loadFetchPolyfill() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield this.loadIfNew(
                1,
                new URL(
                  "https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"
                )
              );
            });
          }
          loadIfNew(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                this.cache[t.toString()] ||
                  (this.cache[t.toString()] = de.load(e, t)),
                yield this.cache[t.toString()]
              );
            });
          }
          static load(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                let i;
                return (
                  yield new Promise((n, o) => {
                    var s;
                    switch (e) {
                      case 1:
                        (i = document.createElement("script")),
                          i.setAttribute("type", "text/javascript"),
                          i.setAttribute("async", "async"),
                          i.setAttribute("src", t.toString());
                        break;
                      case 0:
                        (i = document.createElement("link")),
                          i.setAttribute("rel", "stylesheet"),
                          i.setAttribute("href", t.toString());
                    }
                    (i.onerror = o),
                      (i.onload = n),
                      null === (s = document.querySelector("head")) ||
                        void 0 === s ||
                        s.appendChild(i);
                  }),
                  0
                );
              } catch (e) {
                return 1;
              }
            });
          }
        }
        const ce = "os_pageViews",
          ue = "requiresPrivacyConsent";
        class he {
          static removeLegacySubscriptionOptions() {
            localStorage.removeItem("isOptedOut"),
              localStorage.removeItem("isPushNotificationsEnabled");
          }
          static setConsentRequired(e) {
            localStorage.setItem(ue, e.toString());
          }
          static getConsentRequired() {
            return "true" === localStorage.getItem(ue);
          }
          static setLocalPageViewCount(e) {
            localStorage.setItem(ce, e.toString());
          }
          static getLocalPageViewCount() {
            return Number(localStorage.getItem(ce));
          }
        }
        class ge {
          constructor() {
            this.incrementedPageViewCount = !1;
          }
          getPageViewCount() {
            try {
              const e = sessionStorage.getItem(ge.SESSION_STORAGE_KEY_NAME),
                t = e ? parseInt(e) : 0;
              return isNaN(t) ? 0 : t;
            } catch (e) {
              return 0;
            }
          }
          setPageViewCount(e) {
            try {
              sessionStorage.setItem(ge.SESSION_STORAGE_KEY_NAME, e.toString());
            } catch (e) {}
          }
          incrementPageViewCount() {
            if (this.incrementedPageViewCount) return;
            const e = this.getPageViewCount() + 1,
              t = this.getLocalPageViewCount() + 1;
            this.setPageViewCount(e),
              this.setLocalPageViewCount(t),
              (this.incrementedPageViewCount = !0),
              E.Z.debug(
                `Incremented page view count: newCountSingleTab: ${e},\n      newCountAccrossTabs: ${t}.`
              );
          }
          simulatePageNavigationOrRefresh() {
            this.incrementedPageViewCount = !1;
          }
          isFirstPageView() {
            return 1 === this.getPageViewCount();
          }
          getLocalPageViewCount() {
            return he.getLocalPageViewCount();
          }
          setLocalPageViewCount(e) {
            he.setLocalPageViewCount(e);
          }
        }
        ge.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";
        class pe {
          static get STORED_PERMISSION_KEY() {
            return "storedNotificationPermission";
          }
          getPermissionStatus() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!OneSignal.context)
                throw new I.Z(
                  "OneSignal.context is undefined. Make sure to call OneSignal.init() before calling getPermissionStatus()."
                );
              return yield OneSignal.context.permissionManager.getNotificationPermission(
                OneSignal.config.safariWebId
              );
            });
          }
          getNotificationPermission(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return b.Z.useSafariLegacyPush()
                ? pe.getLegacySafariNotificationPermission(e)
                : this.getW3cNotificationPermission();
            });
          }
          static getLegacySafariNotificationPermission(e) {
            if (e)
              return window.safari.pushNotification.permission(e).permission;
            throw new InvalidArgumentError.R(
              "safariWebId",
              InvalidArgumentError.Q.Empty
            );
          }
          getW3cNotificationPermission() {
            return Notification.permission;
          }
        }
        class me {
          constructor(e) {
            if (!e)
              throw new InvalidArgumentError.R(
                "path",
                InvalidArgumentError.Q.Empty
              );
            this.path = e.trim();
          }
          getQueryString() {
            const e = this.path.indexOf("?");
            return -1 === e
              ? null
              : this.path.length > e
              ? this.path.substring(e + 1)
              : null;
          }
          getWithoutQueryString() {
            return this.path.split(me.QUERY_STRING)[0];
          }
          getFileName() {
            var e;
            return null ===
              (e = this.getWithoutQueryString().split("\\").pop()) ||
              void 0 === e
              ? void 0
              : e.split("/").pop();
          }
          getFileNameWithQuery() {
            var e;
            return null === (e = this.path.split("\\").pop()) || void 0 === e
              ? void 0
              : e.split("/").pop();
          }
          getFullPath() {
            return this.path;
          }
          getPathWithoutFileName() {
            const e = this.getWithoutQueryString(),
              t = e.lastIndexOf(this.getFileName());
            let i = e.substring(0, t);
            return (i = i.replace(/[\\/]$/, "")), i;
          }
        }
        me.QUERY_STRING = "?";
        var fe = i(934),
          ve = i(644);
        class be extends I.Z {
          constructor(e, t) {
            super("Registration of a Service Worker failed."),
              (this.status = e),
              (this.statusText = t),
              Object.setPrototypeOf(this, be.prototype);
          }
        }
        const Se = be;
        class ye {
          static debug(...e) {
            self.shouldLog && console.debug(...e);
          }
          static trace(...e) {
            self.shouldLog && console.trace(...e);
          }
          static info(...e) {
            self.shouldLog && console.info(...e);
          }
          static warn(...e) {
            self.shouldLog && console.warn(...e);
          }
          static error(...e) {
            self.shouldLog && console.error(...e);
          }
        }
        const we = () => {
          ye.debug("Do nothing");
        };
        function Ie(e, t) {
          const i = 1e3 * t;
          let n, s;
          const r = new Promise((t, r) => {
            let a = !1;
            (n = self.setTimeout(
              () =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  a = !0;
                  try {
                    yield e(), t();
                  } catch (e) {
                    ye.error("Failed to execute callback", e), r();
                  }
                }),
              i
            )),
              (s = () => {
                ye.debug("Cancel called"), self.clearTimeout(n), a || t();
              });
          });
          return s
            ? { promise: r, cancel: s }
            : (ye.warn("clearTimeoutHandle was not assigned."),
              { promise: r, cancel: we });
        }
        class Oe {
          constructor(e, t, i, n) {
            (this.outcomeName = i),
              (this.config = t),
              (this.appId = e),
              (this.isUnique = n);
          }
          getAttribution() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield Oe.getAttribution(this.config);
            });
          }
          beforeOutcomeSend() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = this.isUnique ? "sendUniqueOutcome" : "sendOutcome";
              if (((0, P.tI)(e, this.outcomeName), !this.config))
                return (
                  E.Z.debug(
                    "Outcomes feature not supported by main application yet."
                  ),
                  !1
                );
              if (!this.outcomeName)
                return E.Z.error("Outcome name is required"), !1;
              yield (0, P.JX)();
              return (
                !!(yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled()) ||
                (E.Z.warn(
                  "Reporting outcomes is supported only for subscribed users."
                ),
                !1)
              );
            });
          }
          getAttributedNotifsByUniqueOutcomeName() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (yield fe.ZP.getAll("SentUniqueOutcome"))
                .filter((e) => e.outcomeName === this.outcomeName)
                .reduce((e, t) => [...e, ...(t.notificationIds || [])], []);
            });
          }
          getNotifsToAttributeWithUniqueOutcome(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield this.getAttributedNotifsByUniqueOutcomeName();
              return e.filter((e) => -1 === t.indexOf(e));
            });
          }
          shouldSendUnique(e, t) {
            return e.type === M.Unattributed || t.length > 0;
          }
          saveSentUniqueOutcome(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = this.outcomeName,
                i = yield fe.ZP.get("SentUniqueOutcome", t),
                n = yield fe.ZP.getCurrentSession(),
                o = [...(i ? i.notificationIds : []), ...e],
                s = n ? n.startTimestamp : null;
              yield fe.ZP.put("SentUniqueOutcome", {
                outcomeName: t,
                notificationIds: o,
                sentDuringSession: s,
              });
            });
          }
          wasSentDuringSession() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield fe.ZP.get("SentUniqueOutcome", this.outcomeName);
              if (!e) return !1;
              const t = yield fe.ZP.getCurrentSession(),
                i = t && e.sentDuringSession === t.startTimestamp,
                n = !t && !!e.sentDuringSession;
              return i || n;
            });
          }
          send(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { type: t, notificationIds: i, weight: n } = e;
              switch (t) {
                case M.Direct:
                  return (
                    this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                    void (yield OneSignal.context.updateManager.sendOutcomeDirect(
                      this.appId,
                      i,
                      this.outcomeName,
                      n
                    ))
                  );
                case M.Indirect:
                  return (
                    this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                    void (yield OneSignal.context.updateManager.sendOutcomeInfluenced(
                      this.appId,
                      i,
                      this.outcomeName,
                      n
                    ))
                  );
                case M.Unattributed:
                  if (this.isUnique) {
                    if (yield this.wasSentDuringSession())
                      return void E.Z.warn(
                        "(Unattributed) unique outcome was already sent during this session"
                      );
                    yield this.saveSentUniqueOutcome([]);
                  }
                  return void (yield OneSignal.context.updateManager.sendOutcomeUnattributed(
                    this.appId,
                    this.outcomeName,
                    n
                  ));
                default:
                  return void E.Z.warn(
                    "You are on a free plan. Please upgrade to use this functionality."
                  );
              }
            });
          }
          static getAttribution(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (e.direct && e.direct.enabled) {
                const e = yield fe.ZP.getAllNotificationClickedForOutcomes();
                if (e.length > 0)
                  return {
                    type: M.Direct,
                    notificationIds: [e[0].notificationId],
                  };
              }
              if (e.indirect && e.indirect.enabled) {
                const t = 60 * e.indirect.influencedTimePeriodMin * 1e3,
                  i = new Date(new Date().getTime() - t).getTime(),
                  n = yield fe.ZP.getAllNotificationReceivedForOutcomes();
                if (
                  (E.Z.debug(
                    `\tFound total of ${n.length} received notifications`
                  ),
                  n.length > 0)
                ) {
                  const t = e.indirect.influencedNotificationsLimit,
                    o = a.c.sortArrayOfObjects(n, (e) => e.timestamp, !0, !1),
                    s = o
                      .filter((e) => e.timestamp >= i)
                      .slice(0, t)
                      .map((e) => e.notificationId);
                  E.Z.debug(
                    `\tTotal of ${s.length} received notifications are within reporting window.`
                  );
                  const r = o
                    .filter((e) => -1 === s.indexOf(e.notificationId))
                    .map((e) => e.notificationId);
                  if (
                    (r.forEach((e) => fe.ZP.remove(fe.H4, e)),
                    E.Z.debug(
                      `\t${r.length} received notifications will be deleted.`
                    ),
                    s.length > 0)
                  )
                    return { type: M.Indirect, notificationIds: s };
                }
              }
              return e.unattributed && e.unattributed.enabled
                ? { type: M.Unattributed, notificationIds: [] }
                : { type: M.NotSupported, notificationIds: [] };
            });
          }
        }
        var Ee,
          Ce = i(392);
        class Pe {
          static getServiceWorkerHref(e, t, i) {
            return Pe.appendServiceWorkerParams(
              e.workerPath.getFullPath(),
              t,
              i
            );
          }
          static appendServiceWorkerParams(e, t, i) {
            return `${
              new URL(e, f.Q.getBaseUrl()).href
            }?${a.Z.encodeHashAsUriComponent({
              appId: t,
            })}&${a.Z.encodeHashAsUriComponent({ sdkVersion: i })}`;
          }
          static upsertSession(e, t, i, n, s, r, a) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = yield fe.ZP.getCurrentSession();
              if (!o) {
                const n = (0, Ce.I0)({ appId: e }),
                  o = yield fe.ZP.getLastNotificationClickedForOutcomes(e);
                return (
                  o && (n.notificationId = o.notificationId),
                  yield fe.ZP.upsertSession(n),
                  void (yield Pe.sendOnSessionCallIfNotPlayerCreate(
                    e,
                    t,
                    i,
                    r,
                    n
                  ))
                );
              }
              if (o.status === Ce.$y.Active)
                return void ye.debug("Session already active", o);
              if (!o.lastDeactivatedTimestamp)
                return void ye.debug("Session is in invalid state", o);
              const l = new Date().getTime();
              if (
                Pe.timeInSecondsBetweenTimestamps(
                  l,
                  o.lastDeactivatedTimestamp
                ) <= n
              )
                return (
                  (o.status = Ce.$y.Active),
                  (o.lastActivatedTimestamp = l),
                  (o.lastDeactivatedTimestamp = null),
                  void (yield fe.ZP.upsertSession(o))
                );
              yield Pe.finalizeSession(e, t, i, o, s, a);
              const d = (0, Ce.I0)({ appId: e });
              yield fe.ZP.upsertSession(d),
                yield Pe.sendOnSessionCallIfNotPlayerCreate(e, t, i, r, d);
            });
          }
          static deactivateSession(e, t, i, n, s, r) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = yield fe.ZP.getCurrentSession();
              if (!o)
                return void ye.debug(
                  "No active session found. Cannot deactivate."
                );
              const a = () => Pe.finalizeSession(e, t, i, o, s, r);
              if (o.status === Ce.$y.Inactive) return Ie(a, n);
              if (o.status !== Ce.$y.Active)
                return void ye.warn(
                  `Session in invalid state ${o.status}. Cannot deactivate.`
                );
              const l = new Date().getTime(),
                d = Pe.timeInSecondsBetweenTimestamps(
                  l,
                  o.lastActivatedTimestamp
                );
              (o.lastDeactivatedTimestamp = l),
                (o.accumulatedDuration += d),
                (o.status = Ce.$y.Inactive);
              const c = Ie(a, n);
              return yield fe.ZP.upsertSession(o), c;
            });
          }
          static sendOnSessionCallIfNotPlayerCreate(e, t, i, n, s) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              n !== Ce.eB.UserCreate &&
                (fe.ZP.upsertSession(s),
                fe.ZP.resetSentUniqueOutcomes(),
                yield _.updateUserSession(e, t, i));
            });
          }
          static finalizeSession(e, t, i, n, s, r) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (ye.debug(
                  "Finalize session",
                  `started: ${new Date(n.startTimestamp)}`,
                  `duration: ${n.accumulatedDuration}s`
                ),
                s)
              ) {
                ye.debug(
                  `send on_focus reporting session duration -> ${n.accumulatedDuration}s`
                );
                const o = yield Oe.getAttribution(r);
                ye.debug("send on_focus with attribution", o),
                  yield _.sendSessionDuration(
                    e,
                    t,
                    i,
                    n.accumulatedDuration,
                    o
                  );
              }
              yield Promise.all([
                fe.ZP.cleanupCurrentSession(),
                fe.ZP.removeAllNotificationClickedForOutcomes(),
              ]),
                ye.debug(
                  "Finalize session finished",
                  `started: ${new Date(n.startTimestamp)}`
                );
            });
          }
          static timeInSecondsBetweenTimestamps(e, t) {
            return e <= t ? 0 : Math.floor((e - t) / 1e3);
          }
        }
        !(function (e) {
          (e.OneSignalWorker = "OneSignal Worker"),
            (e.ThirdParty = "3rd Party"),
            (e.None = "None"),
            (e.Indeterminate = "Indeterminate");
        })(Ee || (Ee = {}));
        const Te = {
            allowButton: "onesignal-slidedown-allow-button",
            body: "slidedown-body",
            buttonIndicatorHolder: "onesignal-button-indicator-holder",
            cancelButton: "onesignal-slidedown-cancel-button",
            container: "onesignal-slidedown-container",
            dialog: "onesignal-slidedown-dialog",
            footer: "slidedown-footer",
            reset: "onesignal-reset",
            savingStateButton: "onesignal-saving-state-button",
            slideUp: "slide-up",
            slideDown: "slide-down",
            closeSlidedown: "close-slidedown",
            icon: "slidedown-body-icon",
            message: "slidedown-body-message",
            defaultIcon: "default-icon",
            loadingContainer: "onesignal-loading-container",
            clearfix: "clearfix",
          },
          ke = "onesignal-toast-text",
          Ne = "onesignal-toast-text",
          xe = {
            allowButton: "onesignal-slidedown-allow-button",
            body: "slidedown-body",
            buttonIndicatorHolder: "onesignal-button-indicator-holder",
            cancelButton: "onesignal-slidedown-cancel-button",
            container: "onesignal-slidedown-container",
            dialog: "onesignal-slidedown-dialog",
            footer: "slidedown-footer",
            normalSlidedown: "normal-slidedown",
            loadingContainer: "onesignal-loading-container",
          },
          Ae = "align-right",
          Me = "primary",
          De = "secondary",
          Ze = "slidedown-button",
          _e = "onesignal-category-label-input",
          Ue = "onesignal-category-label-text",
          Ge = "onesignal-category-label",
          Be = "onesignal-checkmark",
          Le = "tagging-container",
          Re = "tagging-container-col",
          Fe = "onesignal-loading-message",
          We = "tagging-container",
          Ve = "#95A1AC",
          $e = "#FFFFFF",
          je = "Fetching your preferences",
          He = "channel-capture-container",
          Qe = "input-with-validation-element",
          qe = "onesignal-error-input",
          Ke = "iti-onesignal-sms-input",
          ze = "onesignal-email-input",
          Je = "onesignal-validation-element-hidden",
          Ye = "onesignal-validation-element",
          Xe = "sms-input-with-validation-element",
          et = "email-input-with-validation-element",
          tt = "iti-onesignal-sms-input",
          it = "onesignal-email-input",
          nt = "onesignal-sms-validation-element",
          ot = "onesignal-email-validation-element",
          st = "onesignal-customlink-subscribe",
          rt = "onesignal-customlink-explanation",
          at = "onesignal-reset",
          lt = "hide",
          dt = {
            subscribed: "state-subscribed",
            unsubscribed: "state-unsubscribed",
          },
          ct = {
            containerSelector: `.${"onesignal-customlink-container"}`,
            subscribeSelector: `.${st}`,
            explanationSelector: `.${rt}`,
          };
        class ut {
          constructor(e) {
            this.config = e;
          }
          initialize() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              if (
                !(null === (e = this.config) || void 0 === e
                  ? void 0
                  : e.enabled)
              )
                return;
              if (!(yield this.loadSdkStyles())) return;
              E.Z.info("OneSignal: initializing customlink");
              const i =
                yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
              if (
                (null === (t = this.config) || void 0 === t
                  ? void 0
                  : t.unsubscribeEnabled) ||
                !i
              )
                for (
                  let e = 0;
                  e < this.customlinkContainerElements.length;
                  e++
                )
                  yield this.injectMarkup(this.customlinkContainerElements[e]);
              else this.hideCustomLinkContainers();
            });
          }
          injectMarkup(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (e.innerHTML = ""),
                yield this.mountExplanationNode(e),
                yield this.mountSubscriptionNode(e);
            });
          }
          mountExplanationNode(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                null === (t = this.config) || void 0 === t ? void 0 : t.text
              ) {
                if (this.config.text.explanation) {
                  const t = document.createElement("p");
                  (t.textContent = this.config.text.explanation),
                    (0, P.bF)(t, at),
                    (0, P.bF)(t, rt),
                    this.config.size && (0, P.bF)(t, this.config.size),
                    (yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled())
                      ? (0, P.bF)(t, dt.subscribed)
                      : (0, P.bF)(t, dt.unsubscribed),
                    e.appendChild(t);
                }
              } else E.Z.error("CustomLink: required property 'text' is missing in the config");
            });
          }
          mountSubscriptionNode(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                null === (t = this.config) || void 0 === t ? void 0 : t.text
              ) {
                if (this.config.text.subscribe) {
                  const t = document.createElement("button");
                  (0, P.bF)(t, at),
                    (0, P.bF)(t, st),
                    this.config.size && (0, P.bF)(t, this.config.size),
                    this.config.style && (0, P.bF)(t, this.config.style),
                    (yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled())
                      ? (0, P.bF)(t, dt.subscribed)
                      : (0, P.bF)(t, dt.unsubscribed),
                    this.setCustomColors(t),
                    yield this.setTextFromPushStatus(t),
                    t.addEventListener("click", () =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        E.Z.info("CustomLink: subscribe clicked"),
                          yield this.handleClick(t);
                      })
                    ),
                    t.setAttribute("type", "button"),
                    e.appendChild(t);
                }
              } else E.Z.error("CustomLink: required property 'text' is missing in the config");
            });
          }
          loadSdkStyles() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                0 ===
                  (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()) ||
                (E.Z.debug(
                  "Not initializing custom link button because styles failed to load."
                ),
                !1)
              );
            });
          }
          hideElement(e) {
            (0, P.bF)(e, lt);
          }
          hideCustomLinkContainers() {
            this.customlinkContainerElements.forEach((e) => {
              this.hideElement(e);
            });
          }
          handleClick(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (!OneSignal.User.PushSubscription.optedIn)
                return (
                  yield OneSignal.User.PushSubscription.optIn(),
                  void (
                    (null === (t = this.config) || void 0 === t
                      ? void 0
                      : t.unsubscribeEnabled) || this.hideCustomLinkContainers()
                  )
                );
              yield OneSignal.User.PushSubscription.optOut(),
                yield this.setTextFromPushStatus(e);
            });
          }
          setTextFromPushStatus(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n, o;
              (null ===
                (i =
                  null === (t = this.config) || void 0 === t
                    ? void 0
                    : t.text) || void 0 === i
                ? void 0
                : i.subscribe) &&
                ((yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled()) ||
                  (e.textContent = this.config.text.subscribe)),
                (null ===
                  (o =
                    null === (n = this.config) || void 0 === n
                      ? void 0
                      : n.text) || void 0 === o
                  ? void 0
                  : o.unsubscribe) &&
                  (yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled()) &&
                  (e.textContent = this.config.text.unsubscribe);
            });
          }
          setCustomColors(e) {
            var t, i, n, o, s, r, a;
            (null === (t = this.config) || void 0 === t ? void 0 : t.color) &&
              this.config.color.text &&
              ("button" ===
                (null === (i = this.config) || void 0 === i
                  ? void 0
                  : i.style) &&
              (null === (n = this.config) || void 0 === n
                ? void 0
                : n.color.button)
                ? ((e.style.backgroundColor =
                    null === (o = this.config) || void 0 === o
                      ? void 0
                      : o.color.button),
                  (e.style.color =
                    null === (s = this.config) || void 0 === s
                      ? void 0
                      : s.color.text))
                : "link" ===
                    (null === (r = this.config) || void 0 === r
                      ? void 0
                      : r.style) &&
                  (e.style.color =
                    null === (a = this.config) || void 0 === a
                      ? void 0
                      : a.color.text));
          }
          get customlinkContainerElements() {
            const e = document.querySelectorAll(ct.containerSelector);
            return Array.prototype.slice.call(e);
          }
        }
        class ht {
          static put(e, t) {
            return (
              void 0 === ht.store[e] && (ht.store[e] = [null, null]),
              ht.store[e].push(t),
              ht.store[e].length == ht.LIMIT + 1 && ht.store[e].shift(),
              ht.store[e]
            );
          }
          static get(e) {
            return (
              void 0 === ht.store[e] && (ht.store[e] = [null, null]),
              ht.store[e]
            );
          }
          static getFirst(e) {
            return ht.get(e)[0];
          }
          static getLast(e) {
            return ht.get(e)[1];
          }
          static remove(e) {
            delete ht.store[e];
          }
          static isEmpty(e) {
            const t = ht.get(e);
            return null === t[0] && null === t[1];
          }
        }
        (ht.store = {}), (ht.LIMIT = 2);
        const gt = class {
          static decodeHtmlEntities(e) {
            if ("undefined" == typeof DOMParser) return e;
            return (
              new DOMParser().parseFromString(e, "text/html").documentElement
                .textContent || ""
            );
          }
        };
        var pt, mt;
        !(function (e) {
          (e[(e.HttpsPermissionRequest = "HTTPS permission request")] =
            "HttpsPermissionRequest"),
            (e[
              (e.SlidedownPermissionMessage = "slidedown permission message")
            ] = "SlidedownPermissionMessage"),
            (e[(e.SubscriptionBell = "subscription bell")] =
              "SubscriptionBell");
        })(pt || (pt = {})),
          (function (e) {
            (e[(e.MissingAppId = 0)] = "MissingAppId"),
              (e[(e.RedundantPermissionMessage = 1)] =
                "RedundantPermissionMessage"),
              (e[(e.PushPermissionAlreadyGranted = 2)] =
                "PushPermissionAlreadyGranted"),
              (e[(e.UnsupportedEnvironment = 3)] = "UnsupportedEnvironment"),
              (e[(e.MissingDomElement = 4)] = "MissingDomElement"),
              (e[(e.ServiceWorkerNotActivated = 5)] =
                "ServiceWorkerNotActivated");
          })(mt || (mt = {}));
        class InvalidStateError extends I.Z {
          constructor(e, t) {
            let i;
            switch (e) {
              case mt.MissingAppId:
                i = "Missing required app ID.";
                break;
              case mt.RedundantPermissionMessage: {
                let e = "";
                t &&
                  t.permissionPromptType &&
                  (e = `(${pt[t.permissionPromptType]})`),
                  (i = `Another permission message ${e} is being displayed.`);
                break;
              }
              case mt.PushPermissionAlreadyGranted:
                i = "Push permission has already been granted.";
                break;
              case mt.UnsupportedEnvironment:
                i = "The current environment does not support this operation.";
                break;
              case mt.ServiceWorkerNotActivated:
                i = "The service worker must be activated first.";
            }
            super(i),
              (this.description = mt[e]),
              (this.reason = e),
              Object.setPrototypeOf(this, InvalidStateError.prototype);
          }
        }
        var ft,
          vt = i(985);
        class bt {
          static checkAndTriggerNotificationPermissionChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield fe.ZP.get("Options", "notificationPermission"),
                t =
                  yield OneSignal.context.permissionManager.getPermissionStatus();
              e !== t &&
                (yield vt.Q.triggerNotificationPermissionChanged(),
                yield fe.ZP.put("Options", {
                  key: "notificationPermission",
                  value: t,
                }));
            });
          }
          static getNotificationIcons() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield bt.getAppId();
              if (!e) throw new InvalidStateError(mt.MissingAppId);
              const t = `${g.Z.getOneSignalApiUrl().toString()}/apps/${e}/icon`,
                i = yield fetch(t),
                n = yield i.json();
              if (n.errors)
                throw (
                  (E.Z.error(`API call ${t}`, "failed with:", n.errors),
                  new Error("Failed to get notification icons."))
                );
              return n;
            });
          }
          static getSlidedownOptions(e) {
            return a.Z.getValueOrDefault(e.slidedown, { prompts: [] });
          }
          static getFullscreenPermissionMessageOptions(e) {
            return e
              ? e.fullscreen
                ? {
                    autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                    actionMessage: e.fullscreen.actionMessage,
                    exampleNotificationTitleDesktop: e.fullscreen.title,
                    exampleNotificationTitleMobile: e.fullscreen.title,
                    exampleNotificationMessageDesktop: e.fullscreen.message,
                    exampleNotificationMessageMobile: e.fullscreen.message,
                    exampleNotificationCaption: e.fullscreen.caption,
                    acceptButton: e.fullscreen.acceptButton,
                    cancelButton: e.fullscreen.cancelButton,
                  }
                : e
              : null;
          }
          static getPromptOptionsQueryString() {
            let e = "";
            if (
              bt.getFullscreenPermissionMessageOptions(
                OneSignal.config.userConfig.promptOptions
              )
            ) {
              const t = bt.getPromptOptionsPostHash();
              for (const i of Object.keys(t)) {
                e += "&" + i + "=" + t[i];
              }
            }
            return e;
          }
          static getPromptOptionsPostHash() {
            const e = bt.getFullscreenPermissionMessageOptions(
                OneSignal.config.userConfig.promptOptions
              ),
              t = {};
            if (e) {
              const i = {
                exampleNotificationTitleDesktop: "exampleNotificationTitle",
                exampleNotificationMessageDesktop: "exampleNotificationMessage",
                exampleNotificationTitleMobile: "exampleNotificationTitle",
                exampleNotificationMessageMobile: "exampleNotificationMessage",
              };
              for (const t of Object.keys(i)) {
                const n = i[t];
                e[t] && (e[n] = e[t]);
              }
              const n = [
                "autoAcceptTitle",
                "siteName",
                "autoAcceptTitle",
                "subscribeText",
                "showGraphic",
                "actionMessage",
                "exampleNotificationTitle",
                "exampleNotificationMessage",
                "exampleNotificationCaption",
                "acceptButton",
                "cancelButton",
                "timeout",
              ];
              for (let i = 0; i < n.length; i++) {
                const o = n[i],
                  s = e[o],
                  r = encodeURIComponent(s);
                (s || !1 === s || "" === s) && (t[o] = r);
              }
            }
            return t;
          }
          static getAppId() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (OneSignal.config.appId)
                return Promise.resolve(OneSignal.config.appId);
              return yield fe.ZP.get("Ids", "appId");
            });
          }
          static getDeviceId() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (yield OneSignal.database.getSubscription()).deviceId || void 0
              );
            });
          }
          static getCurrentPushToken() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              if (b.Z.useSafariLegacyPush()) {
                const i =
                  null ===
                    (t =
                      null === (e = window.safari) || void 0 === e
                        ? void 0
                        : e.pushNotification) || void 0 === t
                    ? void 0
                    : t.permission(OneSignal.config.safariWebId).deviceToken;
                return (null == i ? void 0 : i.toLowerCase()) || void 0;
              }
              const i =
                yield OneSignal.context.serviceWorkerManager.getRegistration();
              if (!i) return;
              const n = yield i.pushManager.getSubscription();
              return null == n ? void 0 : n.endpoint;
            });
          }
        }
        class St {
          constructor(e, t, i, n) {
            (this.model = e),
              (this.property = t),
              (this.oldValue = i),
              (this.newValue = n);
          }
        }
        class yt {
          constructor() {
            this.subscribers = new Set();
          }
          subscribe(e) {
            return this.subscribers.add(e), () => this.subscribers.delete(e);
          }
          broadcast(e) {
            this.subscribers.forEach((t) => {
              t(e);
            });
          }
        }
        !(function (e) {
          (e.Add = "add"),
            (e.Remove = "remove"),
            (e.Update = "update"),
            (e.Hydrate = "hydrate");
        })(ft || (ft = {}));
        class wt {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = ft.Add);
          }
        }
        class It {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = ft.Remove);
          }
        }
        class Ot {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = ft.Update);
          }
        }
        class Et {
          constructor(e, t) {
            (this.modelId = e), (this.payload = t), (this.type = ft.Hydrate);
          }
        }
        class Ct extends yt {
          constructor(e, t, i) {
            super(),
              (this.modelName = e),
              (this.modelId =
                null != i ? i : Math.random().toString(36).substring(2)),
              (this.modelName = e),
              (this.data = t),
              (this.onesignalId = void 0),
              (this.awaitOneSignalIdAvailable = new Promise((e) => {
                this.onesignalIdAvailableCallback = e;
              }));
          }
          setOneSignalId(e) {
            var t;
            (0, P.tI)("setOneSignalId", { onesignalId: e }),
              (this.onesignalId = e),
              e &&
                (null === (t = this.onesignalIdAvailableCallback) ||
                  void 0 === t ||
                  t.call(this, e));
          }
          set(e, t, i = !0) {
            let n;
            if (
              ((0, P.tI)("set", { property: e, newValue: t }),
              this.data && ((n = this.data[e]), (this.data[e] = t)),
              i)
            ) {
              const i = new Ot(this.modelId, new St(this, e, n, t));
              this.broadcast(i);
            }
          }
          hydrate(e) {
            (0, P.tI)("hydrate", { data: e }),
              (this.data = e),
              this.broadcast(new Et(this.modelId, this));
          }
          encode() {
            const e = this.modelId,
              t = this.modelName,
              i = this.onesignalId;
            return Object.assign(
              { modelId: e, modelName: t, onesignalId: i },
              this.data
            );
          }
          static decode(e) {
            (0, P.tI)("decode", { encodedModel: e });
            const { modelId: t, modelName: i, onesignalId: n } = e,
              s = (0, o._T)(e, ["modelId", "modelName", "onesignalId"]),
              r = new Ct(i, s, t);
            return r.setOneSignalId(n), r;
          }
        }
        var Pt = i(894);
        function Tt(e) {
          return void 0 !== e.property;
        }
        function kt(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            (null == e ? void 0 : e.constructor) === Object
          );
        }
        function Nt(e) {
          return void 0 !== (null == e ? void 0 : e.onesignal_id);
        }
        function xt(e) {
          return (
            void 0 !== (null == e ? void 0 : e.type) &&
            void 0 !== (null == e ? void 0 : e.id)
          );
        }
        class At {
          static initializeUser(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("initializeUser", { isTemporary: e });
              const t = OneSignal.coreDirector.getIdentityModel(),
                i = OneSignal.coreDirector.getPropertiesModel();
              !t || !i
                ? (At.createUserPropertiesModel(),
                  yield At.createAnonymousUser(e))
                : E.Z.debug("User already exists, skipping initialization.");
            });
          }
          static resetUserMetaProperties() {
            const e = Mt.createOrGetInstance();
            (e.hasOneSignalId = !1),
              (e.awaitOneSignalIdAvailable = void 0),
              (e.isCreatingUser = !1);
          }
          static createAnonymousUser(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let t;
              if (e) t = {};
              else {
                const e = yield At.createUserOnServer();
                if (!e) return;
                (t = e.identity), OneSignal.coreDirector.hydrateUser(e);
              }
              const i = new Ct(Pt.Q.Identity, t);
              i.setOneSignalId(t.onesignal_id),
                OneSignal.coreDirector.add(Pt.Q.Identity, i, !1),
                yield this.copyOneSignalIdPromiseFromIdentityModel();
            });
          }
          static createUserPropertiesModel() {
            const e = {
                language: b.Z.getLanguage(),
                timezone_id: Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
              t = new Ct(Pt.Q.Properties, e);
            return OneSignal.coreDirector.add(Pt.Q.Properties, t, !1), t;
          }
          static createUserOnServer() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = Mt.createOrGetInstance();
              if (!e.isCreatingUser) {
                e.isCreatingUser = !0;
                try {
                  const t = yield bt.getAppId(),
                    i = yield OneSignal.coreDirector.getPushSubscriptionModel();
                  let n;
                  xt(null == i ? void 0 : i.data) &&
                    (n = null == i ? void 0 : i.data.id);
                  const o = yield At.getAllUserData(),
                    s = yield D.createUser({ appId: t, subscriptionId: n }, o);
                  return (e.isCreatingUser = !1), s.result;
                } catch (e) {
                  E.Z.error(e);
                }
              }
            });
          }
          static createAndHydrateUser() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield At.createUserOnServer();
              e && OneSignal.coreDirector.hydrateUser(e);
            });
          }
          static getAllUserData() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("LoginManager.getAllUserData");
              const e = OneSignal.coreDirector.getIdentityModel(),
                t = OneSignal.coreDirector.getPropertiesModel(),
                i = yield OneSignal.coreDirector.getAllSubscriptionsModels(),
                n = {};
              return (
                (n.identity = null == e ? void 0 : e.data),
                (n.properties = null == t ? void 0 : t.data),
                (n.subscriptions = null == i ? void 0 : i.map((e) => e.data)),
                n
              );
            });
          }
          static copyOneSignalIdPromiseFromIdentityModel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              const t = Mt.createOrGetInstance(),
                i = OneSignal.coreDirector.getIdentityModel();
              (t.awaitOneSignalIdAvailable =
                null == i ? void 0 : i.awaitOneSignalIdAvailable),
                null === (e = t.awaitOneSignalIdAvailable) ||
                  void 0 === e ||
                  e.then((e) => {
                    (t.hasOneSignalId = !0), (t.onesignalId = e);
                  });
            });
          }
          static updateModelWithCurrentUserOneSignalId(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = Mt.createOrGetInstance();
              yield t.awaitOneSignalIdAvailable,
                e.setOneSignalId(t.onesignalId);
            });
          }
        }
        class Mt {
          constructor() {
            (this.hasOneSignalId = !1), (this.isCreatingUser = !1);
          }
          static createOrGetInstance() {
            return (
              Mt.singletonInstance ||
                ((Mt.singletonInstance = new Mt()),
                At.initializeUser(!0)
                  .then(() => {
                    At.copyOneSignalIdPromiseFromIdentityModel().catch((e) => {
                      console.error(e);
                    });
                  })
                  .catch((e) => {
                    console.error(e);
                  })),
              Mt.singletonInstance
            );
          }
          addAlias(e, t) {
            if (
              ((0, P.tI)("addAlias", { label: e, id: t }), "string" != typeof e)
            )
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.WrongType
              );
            if ("string" != typeof t)
              throw new InvalidArgumentError.R(
                "id",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.Empty
              );
            if (!t)
              throw new InvalidArgumentError.R(
                "id",
                InvalidArgumentError.Q.Empty
              );
            this.addAliases({ [e]: t });
          }
          addAliases(e) {
            if (
              ((0, P.tI)("addAliases", { aliases: e }),
              !e || 0 === Object.keys(e).length)
            )
              throw new InvalidArgumentError.R(
                "aliases",
                InvalidArgumentError.Q.Empty
              );
            Object.keys(e).forEach((e) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                if ("string" != typeof e)
                  throw new InvalidArgumentError.R(
                    "label",
                    InvalidArgumentError.Q.WrongType
                  );
              })
            ),
              Object.keys(e).forEach((t) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  const i = OneSignal.coreDirector.getIdentityModel();
                  null == i || i.set(t, e[t]);
                })
              );
          }
          removeAlias(e) {
            if (((0, P.tI)("removeAlias", { label: e }), "string" != typeof e))
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "label",
                InvalidArgumentError.Q.Empty
              );
            this.removeAliases([e]);
          }
          removeAliases(e) {
            if (
              ((0, P.tI)("removeAliases", { aliases: e }), !e || 0 === e.length)
            )
              throw new InvalidArgumentError.R(
                "aliases",
                InvalidArgumentError.Q.Empty
              );
            e.forEach((e) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                const t = OneSignal.coreDirector.getIdentityModel();
                null == t || t.set(e, void 0);
              })
            );
          }
          addEmail(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n;
              if (((0, P.tI)("addEmail", { email: e }), "string" != typeof e))
                throw new InvalidArgumentError.R(
                  "email",
                  InvalidArgumentError.Q.WrongType
                );
              if (!e)
                throw new InvalidArgumentError.R(
                  "email",
                  InvalidArgumentError.Q.Empty
                );
              if (!(0, P.vV)(e))
                throw new InvalidArgumentError.R(
                  "email",
                  InvalidArgumentError.Q.Malformed
                );
              const o = { type: c.Email, token: e },
                s = new Ct(Pt.Q.EmailSubscriptions, o);
              (null === (t = Mt.singletonInstance) || void 0 === t
                ? void 0
                : t.isCreatingUser) ||
              (null === (i = Mt.singletonInstance) || void 0 === i
                ? void 0
                : i.hasOneSignalId)
                ? (s.setOneSignalId(
                    null === (n = Mt.singletonInstance) || void 0 === n
                      ? void 0
                      : n.onesignalId
                  ),
                  OneSignal.coreDirector.add(Pt.Q.EmailSubscriptions, s, !0))
                : (OneSignal.coreDirector.add(Pt.Q.EmailSubscriptions, s, !1),
                  yield At.createAndHydrateUser()),
                At.updateModelWithCurrentUserOneSignalId(s).catch((e) => {
                  throw e;
                });
            });
          }
          addSms(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n;
              if (((0, P.tI)("addSms", { sms: e }), "string" != typeof e))
                throw new InvalidArgumentError.R(
                  "sms",
                  InvalidArgumentError.Q.WrongType
                );
              if (!e)
                throw new InvalidArgumentError.R(
                  "sms",
                  InvalidArgumentError.Q.Empty
                );
              const o = { type: c.SMS, token: e },
                s = new Ct(Pt.Q.SmsSubscriptions, o);
              (null === (t = Mt.singletonInstance) || void 0 === t
                ? void 0
                : t.isCreatingUser) ||
              (null === (i = Mt.singletonInstance) || void 0 === i
                ? void 0
                : i.hasOneSignalId)
                ? (s.setOneSignalId(
                    null === (n = Mt.singletonInstance) || void 0 === n
                      ? void 0
                      : n.onesignalId
                  ),
                  OneSignal.coreDirector.add(Pt.Q.SmsSubscriptions, s, !0))
                : (OneSignal.coreDirector.add(Pt.Q.SmsSubscriptions, s, !1),
                  yield At.createAndHydrateUser()),
                At.updateModelWithCurrentUserOneSignalId(s).catch((e) => {
                  throw e;
                });
            });
          }
          removeEmail(e) {
            if (((0, P.tI)("removeEmail", { email: e }), "string" != typeof e))
              throw new InvalidArgumentError.R(
                "email",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "email",
                InvalidArgumentError.Q.Empty
              );
            const t = OneSignal.coreDirector.getEmailSubscriptionModels();
            Object.keys(t).forEach((i) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                var n;
                (null === (n = t[i].data) || void 0 === n
                  ? void 0
                  : n.token) === e &&
                  OneSignal.coreDirector.remove(Pt.Q.EmailSubscriptions, i);
              })
            );
          }
          removeSms(e) {
            if (
              ((0, P.tI)("removeSms", { smsNumber: e }), "string" != typeof e)
            )
              throw new InvalidArgumentError.R(
                "smsNumber",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "smsNumber",
                InvalidArgumentError.Q.Empty
              );
            const t = OneSignal.coreDirector.getSmsSubscriptionModels();
            Object.keys(t).forEach((i) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                var n;
                (null === (n = t[i].data) || void 0 === n
                  ? void 0
                  : n.token) === e &&
                  OneSignal.coreDirector.remove(Pt.Q.SmsSubscriptions, i);
              })
            );
          }
          addTag(e, t) {
            if (
              ((0, P.tI)("addTag", { key: e, value: t }), "string" != typeof e)
            )
              throw new InvalidArgumentError.R(
                "key",
                InvalidArgumentError.Q.WrongType
              );
            if ("string" != typeof t)
              throw new InvalidArgumentError.R(
                "value",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "key",
                InvalidArgumentError.Q.Empty
              );
            if (!t)
              throw new InvalidArgumentError.R(
                "value",
                InvalidArgumentError.Q.Empty,
                "Did you mean to call removeTag?"
              );
            this.addTags({ [e]: t });
          }
          addTags(e) {
            var t;
            if (((0, P.tI)("addTags", { tags: e }), "object" != typeof e))
              throw new InvalidArgumentError.R(
                "tags",
                InvalidArgumentError.Q.WrongType
              );
            if (!e)
              throw new InvalidArgumentError.R(
                "tags",
                InvalidArgumentError.Q.Empty
              );
            const i = OneSignal.coreDirector.getPropertiesModel();
            (e = Object.assign(
              Object.assign(
                {},
                null === (t = null == i ? void 0 : i.data) || void 0 === t
                  ? void 0
                  : t.tags
              ),
              e
            )),
              null == i || i.set("tags", e);
          }
          removeTag(e) {
            if (((0, P.tI)("removeTag", { tagKey: e }), "string" != typeof e))
              throw new InvalidArgumentError.R(
                "tagKey",
                InvalidArgumentError.Q.WrongType
              );
            if (void 0 === e)
              throw new InvalidArgumentError.R(
                "tagKey",
                InvalidArgumentError.Q.Empty
              );
            this.removeTags([e]);
          }
          removeTags(e) {
            var t;
            if (((0, P.tI)("removeTags", { tagKeys: e }), !e || 0 === e.length))
              throw new InvalidArgumentError.R(
                "tagKeys",
                InvalidArgumentError.Q.Empty
              );
            const i = OneSignal.coreDirector.getPropertiesModel(),
              n = JSON.parse(
                JSON.stringify(
                  null === (t = null == i ? void 0 : i.data) || void 0 === t
                    ? void 0
                    : t.tags
                )
              );
            n &&
              (e.forEach((e) => {
                n[e] = "";
              }),
              null == i || i.set("tags", n));
          }
          getTags() {
            var e, t;
            return (
              (0, P.tI)("getTags"),
              null ===
                (t =
                  null === (e = OneSignal.coreDirector.getPropertiesModel()) ||
                  void 0 === e
                    ? void 0
                    : e.data) || void 0 === t
                ? void 0
                : t.tags
            );
          }
        }
        Mt.singletonInstance = void 0;
        class Dt {
          static isValidUrl(e, t) {
            if (t && t.allowNull && null === e) return !0;
            if (t && t.allowEmpty && null == e) return !0;
            try {
              const i = new URL(e);
              return !t || !t.requireHttps || "https:" === i.protocol;
            } catch (e) {
              return !1;
            }
          }
          static isValidBoolean(e, t) {
            return !(!t || !t.allowNull || null !== e) || !0 === e || !1 === e;
          }
          static isValidArray(e, t) {
            return (
              !(!t || !t.allowNull || null !== e) ||
              !(!t || !t.allowEmpty || null != e) ||
              e instanceof Array
            );
          }
        }
        class Zt {}
        class _t extends Zt {
          constructor(e, t, i) {
            super(),
              e && t
                ? ((this._optedIn = !t.optedOut),
                  (this._permission = i),
                  (this._token = t.subscriptionToken),
                  OneSignal.coreDirector
                    .getPushSubscriptionModel()
                    .then((e) => {
                      e && xt(e.data) && (this._id = e.data.id);
                    })
                    .catch((e) => {
                      E.Z.error(e);
                    }),
                  OneSignal.emitter.on(
                    OneSignal.EVENTS.SUBSCRIPTION_CHANGED,
                    (e) =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        (this._id = null == e ? void 0 : e.current.id),
                          (this._token = null == e ? void 0 : e.current.token);
                      })
                  ),
                  OneSignal.emitter.on(
                    OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                    (e) =>
                      (0, o.mG)(this, void 0, void 0, function* () {
                        this._permission = e;
                      })
                  ))
                : E.Z.warn(
                    `PushSubscriptionNamespace: skipping initialization. One or more required params are falsy: initialize: ${e}, subscription: ${t}`
                  );
          }
          get id() {
            return this._id;
          }
          get token() {
            return this._token;
          }
          get optedIn() {
            return !!this._optedIn && "granted" === this._permission;
          }
          optIn() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("optIn"), yield (0, P.JX)(), (this._optedIn = !0);
              "granted" ===
              (yield OneSignal.context.permissionManager.getPermissionStatus())
                ? yield this._enable(!0)
                : yield OneSignal.Notifications.requestPermission();
            });
          }
          optOut() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("optOut"),
                yield (0, P.JX)(),
                (this._optedIn = !1),
                yield this._enable(!1);
            });
          }
          addEventListener(e, t) {
            OneSignal.emitter.on(e, t);
          }
          removeEventListener(e, t) {
            OneSignal.emitter.off(e, t);
          }
          _enable(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield (0, P.JX)();
              const t = yield fe.ZP.getAppConfig(),
                i = yield fe.ZP.getSubscription();
              if (!t.appId) throw new InvalidStateError(mt.MissingAppId);
              if (!Dt.isValidBoolean(e))
                throw new InvalidArgumentError.R(
                  "enabled",
                  InvalidArgumentError.Q.Malformed
                );
              (i.optedOut = !e),
                yield fe.ZP.setSubscription(i),
                Ft.onInternalSubscriptionSet(i.optedOut).catch((e) => {
                  E.Z.error(e);
                }),
                Ft.checkAndTriggerSubscriptionChanged().catch((e) => {
                  E.Z.error(e);
                });
            });
          }
        }
        var Ut,
          Gt,
          Bt,
          Lt = i(680);
        class Rt extends Zt {
          constructor(e, t, i) {
            super(),
              (this.PushSubscription = new _t(!1)),
              e &&
                ((this._currentUser = Mt.createOrGetInstance()),
                (this.PushSubscription = new _t(!0, t, i)));
          }
          get onesignalId() {
            var e;
            return null === (e = this._currentUser) || void 0 === e
              ? void 0
              : e.onesignalId;
          }
          get externalId() {
            var e;
            const t = OneSignal.coreDirector.getIdentityModel();
            return null === (e = null == t ? void 0 : t.data) || void 0 === e
              ? void 0
              : e.external_id;
          }
          addAlias(e, t) {
            var i;
            null === (i = this._currentUser) ||
              void 0 === i ||
              i.addAlias(e, t);
          }
          addAliases(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addAliases(e);
          }
          removeAlias(e) {
            var t;
            null === (t = this._currentUser) ||
              void 0 === t ||
              t.removeAlias(e);
          }
          removeAliases(e) {
            var t;
            null === (t = this._currentUser) ||
              void 0 === t ||
              t.removeAliases(e);
          }
          addEmail(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addEmail(e);
          }
          removeEmail(e) {
            var t;
            null === (t = this._currentUser) ||
              void 0 === t ||
              t.removeEmail(e);
          }
          addSms(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addSms(e);
          }
          removeSms(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.removeSms(e);
          }
          addTag(e, t) {
            var i;
            null === (i = this._currentUser) || void 0 === i || i.addTag(e, t);
          }
          addTags(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.addTags(e);
          }
          removeTag(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.removeTag(e);
          }
          removeTags(e) {
            var t;
            null === (t = this._currentUser) || void 0 === t || t.removeTags(e);
          }
          getTags() {
            var e;
            return (
              (null === (e = this._currentUser) || void 0 === e
                ? void 0
                : e.getTags()) || {}
            );
          }
          addEventListener(e, t) {
            Rt.emitter.on(e, t);
          }
          removeEventListener(e, t) {
            Rt.emitter.off(e, t);
          }
        }
        Rt.emitter = new Lt.Z();
        class Ft {
          static onNotificationPermissionChange() {
            Ft.checkAndTriggerSubscriptionChanged();
          }
          static onInternalSubscriptionSet(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              ht.put("subscription.optedOut", e);
            });
          }
          static checkAndTriggerSubscriptionChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              f.Z.logMethodCall("checkAndTriggerSubscriptionChanged");
              const t = OneSignal.context,
                i =
                  yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled(),
                n = yield OneSignal.context.subscriptionManager.isOptedIn(),
                o = yield fe.ZP.getAppState(),
                {
                  lastKnownPushEnabled: s,
                  lastKnownPushId: r,
                  lastKnownPushToken: a,
                  lastKnownOptedIn: l,
                } = o,
                d = yield bt.getCurrentPushToken(),
                c = yield OneSignal.coreDirector.getPushSubscriptionModel(),
                u =
                  null === (e = null == c ? void 0 : c.data) || void 0 === e
                    ? void 0
                    : e.id;
              if (!(null === s || i !== s || d !== a || u !== r)) return;
              yield t.subscriptionManager.updateNotificationTypes(),
                (o.lastKnownPushEnabled = i),
                (o.lastKnownPushToken = d),
                (o.lastKnownPushId = u),
                (o.lastKnownOptedIn = n),
                yield fe.ZP.setAppState(o);
              const h = {
                previous: { id: r, token: a, optedIn: null == l || l },
                current: { id: u, token: d, optedIn: n },
              };
              E.Z.info("Push Subscription state changed: ", h),
                Ft.triggerSubscriptionChanged(h);
            });
          }
          static _onSubscriptionChanged(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i, n;
              Ft.onSubscriptionChanged_showWelcomeNotification(
                null === (t = null == e ? void 0 : e.current) || void 0 === t
                  ? void 0
                  : t.optedIn,
                null === (i = null == e ? void 0 : e.current) || void 0 === i
                  ? void 0
                  : i.id
              ),
                Ft.onSubscriptionChanged_sendCategorySlidedownTags(
                  null === (n = null == e ? void 0 : e.current) || void 0 === n
                    ? void 0
                    : n.optedIn
                ),
                Ft.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(),
                Ft.onSubscriptionChanged_updateCustomLink();
            });
          }
          static onSubscriptionChanged_sendCategorySlidedownTags(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i;
              if (!0 !== e) return;
              const n =
                null ===
                  (i =
                    null ===
                      (t =
                        OneSignal.context.appConfig.userConfig.promptOptions) ||
                    void 0 === t
                      ? void 0
                      : t.slidedown) || void 0 === i
                  ? void 0
                  : i.prompts;
              J.isCategorySlidedownConfigured(n) &&
                (yield OneSignal.context.tagManager.sendTags());
            });
          }
          static onSubscriptionChanged_showWelcomeNotification(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i;
              if (OneSignal.__doNotShowWelcomeNotification)
                return void E.Z.debug(
                  "Not showing welcome notification because user has previously subscribed."
                );
              const n =
                null === (i = OneSignal.config) || void 0 === i
                  ? void 0
                  : i.userConfig.welcomeNotification;
              if (void 0 !== n && !0 === n.disable) return;
              if (!0 !== e) return;
              if (!t) return;
              const { appId: o } = yield fe.ZP.getAppConfig();
              let s =
                  void 0 !== n && void 0 !== n.title && null !== n.title
                    ? n.title
                    : "",
                r =
                  void 0 !== n &&
                  void 0 !== n.message &&
                  null !== n.message &&
                  n.message.length > 0
                    ? n.message
                    : "Thanks for subscribing!";
              const a = new URL(location.href).origin + "?_osp=do_not_open",
                l = n && n.url && n.url.length > 0 ? n.url : a;
              (s = gt.decodeHtmlEntities(s)),
                (r = gt.decodeHtmlEntities(r)),
                E.Z.debug("Sending welcome notification."),
                Z.sendNotification(
                  o,
                  [t],
                  { en: s },
                  { en: r },
                  l,
                  null,
                  { __isOneSignalWelcomeNotification: !0 },
                  void 0
                ),
                ve.Z.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                  title: s,
                  message: r,
                  url: l,
                });
            });
          }
          static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!OneSignal.config.userConfig.notifyButton) return;
              const e =
                OneSignal.config.userConfig.notifyButton.displayPredicate;
              if (e && "function" == typeof e && OneSignal.notifyButton) {
                !1 !== (yield e())
                  ? (E.Z.debug(
                      "Showing notify button because display predicate returned true."
                    ),
                    OneSignal.notifyButton.launcher.show())
                  : (E.Z.debug(
                      "Hiding notify button because display predicate returned false."
                    ),
                    OneSignal.notifyButton.launcher.hide());
              }
            });
          }
          static onSubscriptionChanged_updateCustomLink() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              OneSignal.config.userConfig.promptOptions &&
                new ut(
                  OneSignal.config.userConfig.promptOptions.customlink
                ).initialize();
            });
          }
          static triggerSubscriptionChanged(e) {
            ve.Z.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e);
          }
          static triggerUserChanged(e) {
            ve.Z.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e, Rt.emitter);
          }
          static triggerNotificationClick(e) {
            const t = { notification: e.notification, result: e.result };
            return ve.Z.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, t);
          }
          static fireStoredNotificationClicks() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield (0, P.JX)();
              const e =
                OneSignal.config.pageUrl ||
                OneSignal.config.userConfig.pageUrl ||
                document.URL;
              function t(e) {
                return (0, o.mG)(this, void 0, void 0, function* () {
                  const t = yield fe.ZP.getAppState();
                  (t.pendingNotificationClickEvents[e.result.url] = null),
                    yield fe.ZP.setAppState(t);
                  const i = e.timestamp;
                  if (i) {
                    if ((Date.now() - i) / 1e3 / 60 > 5) return;
                  }
                  Ft.triggerNotificationClick(e);
                });
              }
              const i = yield fe.ZP.getAppState();
              if (
                "origin" ===
                (yield fe.ZP.get("Options", "notificationClickHandlerMatch"))
              ) {
                for (const e of Object.keys(i.pendingNotificationClickEvents))
                  if (new URL(e).origin === location.origin) {
                    const n = i.pendingNotificationClickEvents[e];
                    yield t(n);
                  }
              } else {
                let n = i.pendingNotificationClickEvents[e];
                if (n) yield t(n);
                else if (!n && e.endsWith("/")) {
                  const o = e.substring(0, e.length - 1);
                  (n = i.pendingNotificationClickEvents[o]), n && (yield t(n));
                }
              }
            });
          }
          static checkAndTriggerUserChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              f.Z.logMethodCall("checkAndTriggerUserChanged");
              const t = yield fe.ZP.getUserState(),
                { previousOneSignalId: i, previousExternalId: n } = t,
                o = yield OneSignal.coreDirector.getIdentityModel(),
                s = null == o ? void 0 : o.onesignalId,
                r =
                  null === (e = null == o ? void 0 : o.data) || void 0 === e
                    ? void 0
                    : e.external_id;
              if (!(s !== i || r !== n)) return;
              (t.previousOneSignalId = s),
                (t.previousExternalId = r),
                yield fe.ZP.setUserState(t);
              const a = { current: { onesignalId: s, externalId: r } };
              E.Z.info("User state changed: ", a), Ft.triggerUserChanged(a);
            });
          }
        }
        class Wt {
          constructor(e, t) {
            (this.context = e), (this.config = t);
          }
          getRegistration() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield re.getRegistration(
                this.config.registrationOptions.scope
              );
            });
          }
          getActiveState() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e =
                yield this.context.serviceWorkerManager.getRegistration();
              if (!e) return Ee.None;
              const t = Wt.activeSwFileName(e);
              return this.swActiveStateByFileName(t);
            });
          }
          static activeSwFileName(e) {
            const t = re.getAvailableServiceWorker(e);
            if (!t) return null;
            const i = new URL(t.scriptURL).pathname,
              n = new me(i).getFileName();
            if ("akam-sw.js" == n) {
              const e = new URLSearchParams(new URL(t.scriptURL).search).get(
                "othersw"
              );
              if (e)
                return (
                  E.Z.debug(
                    "Found a ServiceWorker under Akamai's akam-sw.js?othersw=",
                    e
                  ),
                  new me(new URL(e).pathname).getFileName()
                );
            }
            return n;
          }
          swActiveStateByFileName(e) {
            if (!e) return Ee.None;
            return e == this.config.workerPath.getFileName() ||
              "OneSignalSDK.sw.js" == e
              ? Ee.OneSignalWorker
              : Ee.ThirdParty;
          }
          getWorkerVersion() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return new Promise((e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  this.context.workerMessenger.once(se.WorkerVersion, (t) => {
                    e(t);
                  }),
                    yield this.context.workerMessenger.unicast(
                      se.WorkerVersion
                    );
                })
              );
            });
          }
          shouldInstallWorker() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!b.Z.supportsServiceWorkers()) return !1;
              if (!OneSignal.config) return !1;
              const e = yield this.getActiveState();
              if (
                (E.Z.debug("[shouldInstallWorker] workerState", e),
                e === Ee.None || e === Ee.ThirdParty)
              ) {
                const e =
                  "granted" ===
                  (yield OneSignal.context.permissionManager.getNotificationPermission(
                    OneSignal.config.safariWebId
                  ));
                return (
                  e &&
                    E.Z.info(
                      "[shouldInstallWorker] Notification Permissions enabled, will install ServiceWorker"
                    ),
                  e
                );
              }
              return (
                !!(yield this.haveParamsChanged()) || this.workerNeedsUpdate()
              );
            });
          }
          haveParamsChanged() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e =
                yield this.context.serviceWorkerManager.getRegistration();
              if (!e)
                return (
                  E.Z.info(
                    "[changedServiceWorkerParams] workerRegistration not found at scope",
                    this.config.registrationOptions.scope
                  ),
                  !0
                );
              const t = new URL(e.scope).pathname,
                i = this.config.registrationOptions.scope;
              if (t != i)
                return (
                  E.Z.info(
                    "[changedServiceWorkerParams] ServiceWorker scope changing",
                    { a_old: t, b_new: i }
                  ),
                  !0
                );
              const n = re.getAvailableServiceWorker(e),
                o = Pe.getServiceWorkerHref(
                  this.config,
                  this.context.appConfig.appId,
                  b.Z.version()
                );
              return (
                !(null == n ? void 0 : n.scriptURL) ||
                (o !== n.scriptURL &&
                  (E.Z.info(
                    "[changedServiceWorkerParams] ServiceWorker href changing:",
                    { a_old: null == n ? void 0 : n.scriptURL, b_new: o }
                  ),
                  !0))
              );
            });
          }
          workerNeedsUpdate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let e;
              E.Z.info(
                "[Service Worker Update] Checking service worker version..."
              );
              try {
                e = yield a.c.timeoutPromise(this.getWorkerVersion(), 2e3);
              } catch (e) {
                return (
                  E.Z.info(
                    "[Service Worker Update] Worker did not reply to version query; assuming older version and updating."
                  ),
                  !0
                );
              }
              return e !== b.Z.version()
                ? (E.Z.info(
                    `[Service Worker Update] Updating service worker from ${e} --\x3e ${b.Z.version()}.`
                  ),
                  !0)
                : (E.Z.info(
                    `[Service Worker Update] Service worker version is current at ${e} (no update required).`
                  ),
                  !1);
            });
          }
          establishServiceWorkerChannel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              E.Z.debug("establishServiceWorkerChannel");
              const e = this.context.workerMessenger;
              e.off(),
                e.on(se.NotificationWillDisplay, (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    E.Z.debug(
                      location.origin,
                      "Received notification display event from service worker."
                    );
                    const t = {
                      notification: e.notification,
                      preventDefault: function () {
                        throw new Error(
                          "Browser does not support preventing display."
                        );
                      },
                    };
                    yield ve.Z.trigger(
                      OneSignal.EVENTS.NOTIFICATION_WILL_DISPLAY,
                      t
                    );
                  })
                ),
                e.on(se.NotificationClicked, (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    if (
                      0 ===
                      OneSignal.emitter.numberOfListeners(
                        OneSignal.EVENTS.NOTIFICATION_CLICKED
                      )
                    ) {
                      E.Z.debug(
                        "notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval."
                      );
                      let t = e.result.url;
                      t || (t = location.href),
                        yield fe.ZP.putNotificationClickedEventPendingUrlOpening(
                          e
                        );
                    } else yield Ft.triggerNotificationClick(e);
                  })
                ),
                e.on(se.NotificationDismissed, (e) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    yield ve.Z.trigger(
                      OneSignal.EVENTS.NOTIFICATION_DISMISSED,
                      e
                    );
                  })
                );
              const t = f.Z.isSafari();
              e.on(se.AreYouVisible, (i) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  if (t) {
                    const t = {
                      timestamp: i.timestamp,
                      focused: document.hasFocus(),
                    };
                    yield e.directPostMessageToSW(se.AreYouVisibleResponse, t);
                  }
                })
              );
            });
          }
          installWorker() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!(yield this.shouldInstallWorker()))
                return this.getRegistration();
              E.Z.info("Installing worker...");
              (yield this.getActiveState()) === Ee.ThirdParty &&
                E.Z.info(
                  "[Service Worker Installation] 3rd party service worker detected."
                );
              const e = Pe.getServiceWorkerHref(
                  this.config,
                  this.context.appConfig.appId,
                  b.Z.version()
                ),
                t = `${f.Z.getBaseUrl()}${
                  this.config.registrationOptions.scope
                }`;
              let i;
              E.Z.info(
                `[Service Worker Installation] Installing service worker ${e} ${t}.`
              );
              try {
                i = yield navigator.serviceWorker.register(e, { scope: t });
              } catch (e) {
                E.Z.error(
                  `[Service Worker Installation] Installing service worker failed ${e}`
                ),
                  (i = yield this.fallbackToUserModelBetaWorker());
              }
              return (
                E.Z.debug(
                  "[Service Worker Installation] Service worker installed. Waiting for activation"
                ),
                yield re.waitUntilActive(i),
                E.Z.debug(
                  "[Service Worker Installation] Service worker active"
                ),
                yield this.establishServiceWorkerChannel(),
                i
              );
            });
          }
          fallbackToUserModelBetaWorker() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = "OneSignalSDK.sw.js",
                t = {
                  workerPath: new me(`/${e}`),
                  registrationOptions: this.config.registrationOptions,
                },
                i = Pe.getServiceWorkerHref(
                  t,
                  this.context.appConfig.appId,
                  b.Z.version()
                ),
                n = `${f.Z.getBaseUrl()}${
                  this.config.registrationOptions.scope
                }`;
              E.Z.info(
                `[Service Worker Installation] Attempting to install v16 Beta Worker ${i} ${n}.`
              );
              try {
                const t = yield navigator.serviceWorker.register(i, {
                    scope: n,
                  }),
                  o = `\n        [Service Worker Installation] Successfully installed v16 Beta Worker.\n        Deprecation warning: support for the v16 beta worker name of ${e}\n        will be removed May 5 2024. We have decided to keep the v15 name.\n        To avoid breaking changes for your users, please host both worker files:\n        OneSignalSDK.sw.js & OneSignalSDKWorker.js.\n      `;
                return E.Z.error(o), t;
              } catch (e) {
                const t = yield fetch(i);
                if (403 === t.status || 404 === t.status)
                  throw new Se(t.status, t.statusText);
                throw e;
              }
            });
          }
        }
        !(function (e) {
          (e.Default = "default"),
            (e.Granted = "granted"),
            (e.Denied = "denied");
        })(Ut || (Ut = {}));
        class Vt extends I.Z {
          constructor() {
            super("This code is not implemented yet."),
              Object.setPrototypeOf(this, Vt.prototype);
          }
        }
        !(function (e) {
          (e[(e.Blocked = 0)] = "Blocked"),
            (e[(e.Dismissed = 1)] = "Dismissed"),
            (e[(e.Default = 2)] = "Default");
        })(Gt || (Gt = {}));
        class PushPermissionNotGrantedError extends I.Z {
          constructor(e) {
            let t;
            switch (e) {
              case Gt.Dismissed:
                t = "The user dismissed the permission prompt.";
                break;
              case Gt.Blocked:
                t = "Notification permissions are blocked.";
                break;
              case Gt.Default:
                t = "Notification permissions have not been granted yet.";
            }
            super(t),
              (this.reason = e),
              Object.setPrototypeOf(
                this,
                PushPermissionNotGrantedError.prototype
              );
          }
        }
        !(function (e) {
          (e[(e.InvalidSafariSetup = 0)] = "InvalidSafariSetup"),
            (e[(e.Blocked = 1)] = "Blocked"),
            (e[(e.Dismissed = 2)] = "Dismissed");
        })(Bt || (Bt = {}));
        class $t extends I.Z {
          constructor(e) {
            let t;
            switch (e) {
              case Bt.InvalidSafariSetup:
                t =
                  "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.";
                break;
              case Bt.Blocked:
                t = "Notification permissions are blocked.";
                break;
              case Bt.Dismissed:
                t = "The notification permission prompt was dismissed.";
            }
            super(t), Object.setPrototypeOf(this, $t.prototype);
          }
        }
        class jt {
          static setFromW3cSubscription(e) {
            const t = new jt();
            if (e && ((t.w3cEndpoint = new URL(e.endpoint)), e.getKey)) {
              let i = null;
              try {
                i = e.getKey("p256dh");
              } catch (e) {}
              let n = null;
              try {
                n = e.getKey("auth");
              } catch (e) {}
              if (i) {
                const e = btoa(
                  String.fromCharCode.apply(null, new Uint8Array(i))
                );
                t.w3cP256dh = e;
              }
              if (n) {
                const e = btoa(
                  String.fromCharCode.apply(null, new Uint8Array(n))
                );
                t.w3cAuth = e;
              }
            }
            return t;
          }
          setFromSafariSubscription(e) {
            e && (this.safariDeviceToken = e);
          }
          serialize() {
            return {
              w3cEndpoint: this.w3cEndpoint
                ? this.w3cEndpoint.toString()
                : null,
              w3cP256dh: this.w3cP256dh,
              w3cAuth: this.w3cAuth,
              safariDeviceToken: this.safariDeviceToken,
            };
          }
          static deserialize(e) {
            const t = new jt();
            if (!e) return t;
            try {
              t.w3cEndpoint = new URL(e.w3cEndpoint);
            } catch (e) {}
            return (
              (t.w3cP256dh = e.w3cP256dh),
              (t.w3cAuth = e.w3cAuth),
              (t.safariDeviceToken = e.safariDeviceToken),
              t
            );
          }
        }
        class Ht {
          constructor(e, t) {
            (this.safariPermissionPromptFailed = !1),
              (this.context = e),
              (this.config = t);
          }
          isPushNotificationsEnabled() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getSubscriptionState();
              return e.subscribed && !e.optedOut;
            });
          }
          isOptedIn() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getSubscriptionState();
              return (
                "granted" ===
                  (yield OneSignal.context.permissionManager.getPermissionStatus()) &&
                !e.optedOut
              );
            });
          }
          isOptedOut(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("isOptedOut", e);
              const { optedOut: t } = yield fe.ZP.getSubscription();
              return (0, P.IV)(e, t), t;
            });
          }
          subscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let t;
              switch (g.Z.getWindowEnv()) {
                case p.Q.ServiceWorker:
                  t = yield this.subscribeFcmFromWorker(e);
                  break;
                case p.Q.Host:
                  if (
                    (yield OneSignal.context.permissionManager.getPermissionStatus()) ===
                    Ut.Denied
                  )
                    throw new PushPermissionNotGrantedError(Gt.Blocked);
                  if (b.Z.useSafariLegacyPush()) {
                    (t = yield this.subscribeSafari()),
                      yield this._updatePushSubscriptionModelWithRawSubscription(
                        t
                      ),
                      E.Z.info("Installing SW on Safari");
                    try {
                      yield this.context.serviceWorkerManager.installWorker(),
                        E.Z.info("SW on Safari successfully installed");
                    } catch (e) {
                      E.Z.error("SW on Safari failed to install.");
                    }
                  } else (t = yield this.subscribeFcmFromPage(e)), yield this._updatePushSubscriptionModelWithRawSubscription(t);
                  break;
                default:
                  throw new InvalidStateError(mt.UnsupportedEnvironment);
              }
              return t;
            });
          }
          _updatePushSubscriptionModelWithRawSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (!t)
                return (
                  OneSignal.coreDirector.generatePushSubscriptionModel(e),
                  void (yield At.createAndHydrateUser())
                );
              {
                const i = new S(e).serialize(),
                  n = Object.keys(i);
                for (let e = 0; e < n.length; e++) {
                  const o = n[e];
                  i[o] && t.set(o, i[o]);
                }
              }
            });
          }
          updateNotificationTypes() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getNotificationTypes();
              yield this.updatePushSubscriptionNotificationTypes(e);
            });
          }
          getNotificationTypes() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { optedOut: e } = yield fe.ZP.getSubscription();
              if (e) return m.UserOptedOut;
              return "granted" ===
                (yield OneSignal.context.permissionManager.getPermissionStatus())
                ? m.Subscribed
                : m.NoNativePermission;
            });
          }
          updatePushSubscriptionNotificationTypes(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              t
                ? (t.set("notification_types", e),
                  t.set("enabled", e === m.Subscribed))
                : E.Z.info(
                    "No Push Subscription yet to update notification_types."
                  );
            });
          }
          registerSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              e && (e = jt.deserialize(e)),
                (yield this.isAlreadyRegisteredWithOneSignal())
                  ? yield this.context.updateManager.sendPushDeviceRecordUpdate()
                  : this.context.sessionManager.upsertSession(Ce.eB.UserCreate);
              const t = yield fe.ZP.getSubscription();
              return (
                (t.deviceId = "99999999-9999-9999-9999-999999999999"),
                (t.optedOut = !1),
                e
                  ? b.Z.useSafariLegacyPush()
                    ? (t.subscriptionToken = e.safariDeviceToken)
                    : (t.subscriptionToken = e.w3cEndpoint
                        ? e.w3cEndpoint.toString()
                        : null)
                  : (t.subscriptionToken = null),
                yield fe.ZP.setSubscription(t),
                g.Z.getWindowEnv() !== p.Q.ServiceWorker &&
                  ve.Z.trigger(OneSignal.EVENTS.REGISTERED),
                "undefined" != typeof OneSignal &&
                  (OneSignal._sessionInitAlreadyRunning = !1),
                t
              );
            });
          }
          static requestPresubscribeNotificationPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield Ht.requestNotificationPermission();
            });
          }
          unsubscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (0 === e) throw new Vt();
              if (1 !== e) throw new Vt();
              if (g.Z.getWindowEnv() !== p.Q.ServiceWorker) throw new Vt();
              yield fe.ZP.put("Options", { key: "optedOut", value: !0 });
            });
          }
          static requestNotificationPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield window.Notification.requestPermission();
              return Ut[e];
            });
          }
          isAlreadyRegisteredWithOneSignal() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const { deviceId: e } = yield fe.ZP.getSubscription();
              return !!e;
            });
          }
          subscribeSafariPromptPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = (e) =>
                new Promise((t) => {
                  window.safari.pushNotification.requestPermission(
                    e,
                    this.config.safariWebId,
                    { app_id: this.config.appId },
                    (e) => {
                      e && e.deviceToken
                        ? t(e.deviceToken.toLowerCase())
                        : t(null);
                    }
                  );
                });
              return this.safariPermissionPromptFailed
                ? e(`${g.Z.getOneSignalApiUrl().toString()}/safari`)
                : e(
                    `${g.Z.getOneSignalApiUrl().toString()}/safari/apps/${
                      this.config.appId
                    }`
                  );
            });
          }
          subscribeSafari() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = new jt();
              if (!this.config.safariWebId)
                throw new SdkInitError(A.MissingSafariWebId);
              const { deviceToken: t } =
                window.safari.pushNotification.permission(
                  this.config.safariWebId
                );
              if (t) return e.setFromSafariSubscription(t.toLowerCase()), e;
              ve.Z.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
              const i = yield this.subscribeSafariPromptPermission();
              if ((vt.Q.triggerNotificationPermissionChanged(), !i))
                throw (
                  ((this.safariPermissionPromptFailed = !0),
                  new $t(Bt.InvalidSafariSetup))
                );
              return e.setFromSafariSubscription(i), e;
            });
          }
          subscribeFcmFromPage(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                g.Z.getWindowEnv() === p.Q.Host &&
                Notification.permission === Ut.Default
              ) {
                yield ve.Z.trigger(
                  OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED
                );
                const e = yield Ht.requestPresubscribeNotificationPermission(),
                  t = e === Ut.Default;
                switch (
                  (yield vt.Q.triggerNotificationPermissionChanged(t), e)
                ) {
                  case Ut.Default:
                    throw (
                      (E.Z.debug(
                        "Exiting subscription and not registering worker because the permission was dismissed."
                      ),
                      (OneSignal._sessionInitAlreadyRunning = !1),
                      new PushPermissionNotGrantedError(Gt.Dismissed))
                    );
                  case Ut.Denied:
                    throw (
                      (E.Z.debug(
                        "Exiting subscription and not registering worker because the permission was blocked."
                      ),
                      (OneSignal._sessionInitAlreadyRunning = !1),
                      new PushPermissionNotGrantedError(Gt.Blocked))
                    );
                }
              }
              let t;
              try {
                t = yield this.context.serviceWorkerManager.installWorker();
              } catch (e) {
                throw (
                  (e instanceof Se &&
                    (403 === e.status
                      ? yield this.context.subscriptionManager.registerFailedSubscription(
                          m.ServiceWorkerStatus403,
                          this.context
                        )
                      : 404 === e.status &&
                        (yield this.context.subscriptionManager.registerFailedSubscription(
                          m.ServiceWorkerStatus404,
                          this.context
                        ))),
                  e)
                );
              }
              if (!t) throw new Error("OneSignal service worker not found!");
              return (
                E.Z.debug(
                  "[Subscription Manager] Service worker is ready to continue subscribing."
                ),
                yield this.subscribeWithVapidKey(t.pushManager, e)
              );
            });
          }
          subscribeFcmFromWorker(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = self.registration;
              if (!t.active && "firefox" !== (0, l.M)().name)
                throw new InvalidStateError(mt.ServiceWorkerNotActivated);
              const i = yield t.pushManager.permissionState({
                userVisibleOnly: !0,
              });
              if ("denied" === i)
                throw new PushPermissionNotGrantedError(Gt.Blocked);
              if ("prompt" === i)
                throw new PushPermissionNotGrantedError(Gt.Default);
              return yield this.subscribeWithVapidKey(t.pushManager, e);
            });
          }
          getVapidKeyForBrowser() {
            let e;
            return (
              (e =
                "firefox" === (0, l.M)().name
                  ? this.config.onesignalVapidPublicKey
                  : this.config.vapidPublicKey),
              e
                ? (function (e) {
                    const t = (e + "=".repeat((4 - (e.length % 4)) % 4))
                        .replace(/-/g, "+")
                        .replace(/_/g, "/"),
                      i = atob(t),
                      n = new Uint8Array(i.length);
                    for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
                    return n;
                  })(e).buffer
                : void 0
            );
          }
          subscribeWithVapidKey(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const i = yield e.getSubscription();
              switch (t) {
                case 0:
                  if (!i) break;
                  i.options
                    ? E.Z.debug(
                        "[Subscription Manager] An existing push subscription exists and it's options is not null."
                      )
                    : (E.Z.debug(
                        "[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."
                      ),
                      yield Ht.doPushUnsubscribe(i));
                  break;
                case 1:
                  i && (yield Ht.doPushUnsubscribe(i));
              }
              const [n, o] = yield Ht.doPushSubscribe(
                e,
                this.getVapidKeyForBrowser()
              );
              yield Ht.updateSubscriptionTime(o, n.expirationTime);
              return jt.setFromW3cSubscription(n);
            });
          }
          static updateSubscriptionTime(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const i = yield fe.ZP.getSubscription();
              e && (i.createdAt = new Date().getTime()),
                (i.expirationTime = t),
                yield fe.ZP.setSubscription(i);
            });
          }
          static doPushUnsubscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              E.Z.debug(
                "[Subscription Manager] Unsubscribing existing push subscription."
              );
              const t = yield e.unsubscribe();
              return (
                E.Z.debug(
                  `[Subscription Manager] Unsubscribing existing push subscription result: ${t}`
                ),
                t
              );
            });
          }
          static doPushSubscribe(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!t)
                throw new Error(
                  "Missing required 'applicationServerKey' to subscribe for push notifications!"
                );
              const i = { userVisibleOnly: !0, applicationServerKey: t };
              E.Z.debug(
                "[Subscription Manager] Subscribing to web push with these options:",
                i
              );
              try {
                const t = yield e.getSubscription();
                return [yield e.subscribe(i), !t];
              } catch (t) {
                if ("InvalidStateError" == t.name) {
                  E.Z.warn(
                    "[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.",
                    t
                  );
                  const n = yield e.getSubscription();
                  return (
                    n && (yield Ht.doPushUnsubscribe(n)),
                    [yield e.subscribe(i), !0]
                  );
                }
                throw t;
              }
            });
          }
          isSubscriptionExpiring() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (yield this.context.serviceWorkerManager.getActiveState()) !==
                Ee.OneSignalWorker
              )
                return !1;
              const e =
                yield this.context.serviceWorkerManager.getRegistration();
              if (!e) return !1;
              if (!e.pushManager) return !1;
              const t = yield e.pushManager.getSubscription();
              if (!t) return !1;
              if (!t.expirationTime) return !1;
              let { createdAt: i } = yield fe.ZP.getSubscription();
              if (!i) {
                const e = 31536e6;
                i = new Date().getTime() + e;
              }
              const n = i + (t.expirationTime - i) / 2;
              return (
                !!t.expirationTime &&
                (new Date().getTime() >= t.expirationTime ||
                  new Date().getTime() >= n)
              );
            });
          }
          getSubscriptionState() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (g.Z.getWindowEnv() === p.Q.ServiceWorker) {
                const e = yield self.registration.pushManager.getSubscription(),
                  { optedOut: t } = yield fe.ZP.getSubscription();
                return { subscribed: !!e, optedOut: !!t };
              }
              return this.getSubscriptionStateFromBrowserContext();
            });
          }
          getSubscriptionStateFromBrowserContext() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              const { optedOut: i, subscriptionToken: n } =
                  yield fe.ZP.getSubscription(),
                o = yield OneSignal.coreDirector.getPushSubscriptionModel(),
                s =
                  xt(null == o ? void 0 : o.data) &&
                  !!(null == o ? void 0 : o.onesignalId);
              if (b.Z.useSafariLegacyPush()) {
                const o =
                  null ===
                    (t =
                      null === (e = window.safari) || void 0 === e
                        ? void 0
                        : e.pushNotification) || void 0 === t
                    ? void 0
                    : t.permission(this.config.safariWebId);
                return {
                  subscribed: !!(
                    s &&
                    n &&
                    "granted" === (null == o ? void 0 : o.permission) &&
                    (null == o ? void 0 : o.deviceToken)
                  ),
                  optedOut: !!i,
                };
              }
              const r =
                  yield this.context.serviceWorkerManager.getActiveState(),
                a = yield this.context.serviceWorkerManager.getRegistration(),
                l =
                  yield this.context.permissionManager.getNotificationPermission(
                    this.context.appConfig.safariWebId
                  ),
                d = r === Ee.OneSignalWorker;
              if (!a) return { subscribed: !1, optedOut: !!i };
              return {
                subscribed: !!(s && n && l === Ut.Granted && d),
                optedOut: !!i,
              };
            });
          }
          registerFailedSubscription(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              t.pageViewManager.isFirstPageView() &&
                (t.subscriptionManager.registerSubscription(new jt(), e),
                t.pageViewManager.incrementPageViewCount());
            });
          }
        }
        const Qt = class {
          static getServiceWorkerManager(e) {
            const t = e.appConfig,
              i = {
                workerPath: new me("OneSignalSDKWorker.js"),
                registrationOptions: { scope: "/" },
              };
            return (
              t.userConfig &&
                (t.userConfig.path &&
                  (i.workerPath = new me(
                    `${t.userConfig.path}${t.userConfig.serviceWorkerPath}`
                  )),
                t.userConfig.serviceWorkerParam &&
                  (i.registrationOptions = t.userConfig.serviceWorkerParam)),
              new Wt(e, i)
            );
          }
          static getSubscriptionManager(e) {
            const t = e.appConfig,
              i = {
                safariWebId: t.safariWebId,
                appId: t.appId,
                vapidPublicKey: t.vapidPublicKey,
                onesignalVapidPublicKey: t.onesignalVapidPublicKey,
              };
            return new Ht(e, i);
          }
        };
        class qt {
          constructor(e) {
            (this.context = e),
              (this.onSessionSent = e.pageViewManager.getPageViewCount() > 1);
          }
          sendPushDeviceRecordUpdate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              (
                null === (e = Mt.singletonInstance) || void 0 === e
                  ? void 0
                  : e.hasOneSignalId
              )
                ? this.onSessionSent || (yield this.sendOnSessionUpdate())
                : E.Z.debug(
                    "Not sending the update because user is not registered with OneSignal (no onesignal_id)"
                  );
            });
          }
          sendOnSessionUpdate() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              if (this.onSessionSent) return;
              if (!this.context.pageViewManager.isFirstPageView()) return;
              if (
                !(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
              )
                return void E.Z.debug(
                  "Not sending the on session because user is not registered with OneSignal (no device id)"
                );
              const t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (
                (null == t ? void 0 : t.data.notification_types) ===
                  m.Subscribed ||
                !0 ===
                  (null === (e = OneSignal.config) || void 0 === e
                    ? void 0
                    : e.enableOnSession)
              )
                try {
                  this.context.sessionManager.upsertSession(
                    Ce.eB.UserNewSession
                  ),
                    (this.onSessionSent = !0);
                } catch (e) {
                  E.Z.error(
                    `Failed to update user session. Error "${e.message}" ${e.stack}`
                  );
                }
            });
          }
          sendOutcomeDirect(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("sendOutcomeDirect");
              const o = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (o && xt(null == o ? void 0 : o.data)) {
                const s = {
                  id: i,
                  app_id: e,
                  notification_ids: t,
                  direct: !0,
                  subscription: {
                    id: o.data.id,
                    type: S.getSubscriptionType(),
                  },
                };
                return (
                  void 0 !== n && (s.weight = n), void (yield Z.sendOutcome(s))
                );
              }
              E.Z.warn(
                "Send outcome aborted because pushSubscriptionModel is not available."
              );
            });
          }
          sendOutcomeInfluenced(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("sendOutcomeInfluenced");
              const o = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (o && xt(null == o ? void 0 : o.data)) {
                const s = {
                  id: i,
                  app_id: e,
                  notification_ids: t,
                  direct: !1,
                  subscription: {
                    id: o.data.id,
                    type: S.getSubscriptionType(),
                  },
                };
                return (
                  void 0 !== n && (s.weight = n), void (yield Z.sendOutcome(s))
                );
              }
              E.Z.warn(
                "Send outcome aborted because pushSubscriptionModel is not available."
              );
            });
          }
          sendOutcomeUnattributed(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("sendOutcomeUnattributed");
              const n = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (n && xt(null == n ? void 0 : n.data)) {
                const o = {
                  id: t,
                  app_id: e,
                  subscription: {
                    id: n.data.id,
                    type: S.getSubscriptionType(),
                  },
                };
                return (
                  void 0 !== i && (o.weight = i), void (yield Z.sendOutcome(o))
                );
              }
              E.Z.warn(
                "Send outcome aborted because pushSubscriptionModel is not available."
              );
            });
          }
        }
        class Kt {
          constructor(e) {
            (this.onSessionSent = !1), (this.context = e);
          }
          notifySWToUpsertSession(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n;
              const o = {
                onesignalId: e,
                subscriptionId: t,
                appId: this.context.appConfig.appId,
                sessionThreshold: this.context.appConfig.sessionThreshold || 0,
                enableSessionDuration:
                  !!this.context.appConfig.enableSessionDuration,
                sessionOrigin: i,
                isSafari: f.Q.isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
              };
              (
                null === (n = this.context.environmentInfo) || void 0 === n
                  ? void 0
                  : n.isBrowserAndSupportsServiceWorkers
              )
                ? (E.Z.debug("Notify SW to upsert session"),
                  yield this.context.workerMessenger.unicast(
                    se.SessionUpsert,
                    o
                  ))
                : E.Z.debug("Notify upsert: do nothing");
            });
          }
          notifySWToDeactivateSession(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n;
              const o = {
                appId: this.context.appConfig.appId,
                subscriptionId: t,
                onesignalId: e,
                sessionThreshold: this.context.appConfig.sessionThreshold,
                enableSessionDuration:
                  this.context.appConfig.enableSessionDuration,
                sessionOrigin: i,
                isSafari: f.Q.isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
              };
              (
                null === (n = this.context.environmentInfo) || void 0 === n
                  ? void 0
                  : n.isBrowserAndSupportsServiceWorkers
              )
                ? (E.Z.debug("Notify SW to deactivate session"),
                  yield this.context.workerMessenger.unicast(
                    se.SessionDeactivate,
                    o
                  ))
                : E.Z.debug("Notify deactivate: do nothing");
            });
          }
          _getOneSignalAndSubscriptionIds() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.coreDirector.getIdentityModel(),
                t = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (!e || !e.onesignalId)
                throw new I.Z(
                  "Abort _getOneSignalAndSubscriptionIds: no identity"
                );
              if (!t || !xt(t.data))
                throw new I.Z(
                  "Abort _getOneSignalAndSubscriptionIds: no subscription"
                );
              const { onesignalId: i } = e,
                { id: n } = t.data;
              return { onesignalId: i, subscriptionId: n };
            });
          }
          handleVisibilityChange() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              if (
                null === (e = Mt.singletonInstance) || void 0 === e
                  ? void 0
                  : e.hasOneSignalId
              )
                try {
                  const e = document.visibilityState,
                    { onesignalId: t, subscriptionId: i } =
                      yield this._getOneSignalAndSubscriptionIds();
                  if ("visible" === e)
                    return (
                      this.setupOnFocusAndOnBlurForSession(),
                      E.Z.debug(
                        "handleVisibilityChange",
                        "visible",
                        `hasFocus: ${document.hasFocus()}`
                      ),
                      void (
                        document.hasFocus() &&
                        (yield this.notifySWToUpsertSession(
                          t,
                          i,
                          Ce.eB.VisibilityVisible
                        ))
                      )
                    );
                  if ("hidden" === e)
                    return (
                      E.Z.debug("handleVisibilityChange", "hidden"),
                      OneSignal.cache.focusHandler &&
                        OneSignal.cache.isFocusEventSetup &&
                        (window.removeEventListener(
                          "focus",
                          OneSignal.cache.focusHandler,
                          !0
                        ),
                        (OneSignal.cache.isFocusEventSetup = !1)),
                      OneSignal.cache.blurHandler &&
                        OneSignal.cache.isBlurEventSetup &&
                        (window.removeEventListener(
                          "blur",
                          OneSignal.cache.blurHandler,
                          !0
                        ),
                        (OneSignal.cache.isBlurEventSetup = !1)),
                      void (yield this.notifySWToDeactivateSession(
                        t,
                        i,
                        Ce.eB.VisibilityHidden
                      ))
                    );
                  E.Z.warn("Unhandled visibility state happened", e);
                } catch (e) {
                  E.Z.error("Error handling visibility change:", e);
                }
            });
          }
          handleOnBeforeUnload() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              if (
                null === (e = Mt.singletonInstance) || void 0 === e
                  ? void 0
                  : e.hasOneSignalId
              )
                try {
                  const { onesignalId: e, subscriptionId: t } =
                      yield this._getOneSignalAndSubscriptionIds(),
                    i = {
                      appId: this.context.appConfig.appId,
                      onesignalId: e,
                      subscriptionId: t,
                      sessionThreshold: this.context.appConfig.sessionThreshold,
                      enableSessionDuration:
                        this.context.appConfig.enableSessionDuration,
                      sessionOrigin: Ce.eB.BeforeUnload,
                      isSafari: f.Q.isSafari(),
                      outcomesConfig:
                        this.context.appConfig.userConfig.outcomes,
                    };
                  E.Z.debug("Notify SW to deactivate session (beforeunload)"),
                    this.context.workerMessenger.directPostMessageToSW(
                      se.SessionDeactivate,
                      i
                    );
                } catch (e) {
                  E.Z.error("Error handling onbeforeunload:", e);
                }
            });
          }
          handleOnFocus(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                (E.Z.debug("handleOnFocus", e),
                null === (t = Mt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.hasOneSignalId)
              )
                try {
                  if (e.target !== window) return;
                  const { onesignalId: t, subscriptionId: i } =
                    yield this._getOneSignalAndSubscriptionIds();
                  yield this.notifySWToUpsertSession(t, i, Ce.eB.Focus);
                } catch (e) {
                  E.Z.error("Error handling focus:", e);
                }
            });
          }
          handleOnBlur(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              if (
                (E.Z.debug("handleOnBlur", e),
                null === (t = Mt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.hasOneSignalId)
              )
                try {
                  if (e.target !== window) return;
                  const { onesignalId: t, subscriptionId: i } =
                    yield this._getOneSignalAndSubscriptionIds();
                  yield this.notifySWToDeactivateSession(t, i, Ce.eB.Blur);
                } catch (e) {
                  E.Z.error("Error handling blur:", e);
                }
            });
          }
          upsertSession(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t, i;
              if (
                null === (t = Mt.singletonInstance) || void 0 === t
                  ? void 0
                  : t.hasOneSignalId
              ) {
                const { onesignalId: t, subscriptionId: i } =
                  yield this._getOneSignalAndSubscriptionIds();
                yield this.notifySWToUpsertSession(t, i, e);
              }
              (
                null === (i = this.context.environmentInfo) || void 0 === i
                  ? void 0
                  : i.isBrowserAndSupportsServiceWorkers
              )
                ? this.setupSessionEventListeners()
                : ((this.onSessionSent = e === Ce.eB.UserCreate),
                  OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED));
            });
          }
          setupSessionEventListeners() {
            var e;
            (
              null === (e = this.context.environmentInfo) || void 0 === e
                ? void 0
                : e.isBrowserAndSupportsServiceWorkers
            )
              ? (this.setupOnFocusAndOnBlurForSession(),
                OneSignal.cache.isVisibilityChangeEventSetup ||
                  (document.addEventListener(
                    "visibilitychange",
                    this.handleVisibilityChange.bind(this),
                    !0
                  ),
                  (OneSignal.cache.isVisibilityChangeEventSetup = !0)),
                OneSignal.cache.isBeforeUnloadEventSetup ||
                  (window.addEventListener(
                    "beforeunload",
                    (e) => {
                      this.handleOnBeforeUnload(), delete e.returnValue;
                    },
                    !0
                  ),
                  (OneSignal.cache.isBeforeUnloadEventSetup = !0)))
              : E.Z.debug(
                  "Not setting session event listeners. No service worker possible."
                );
          }
          setupOnFocusAndOnBlurForSession() {
            E.Z.debug("setupOnFocusAndOnBlurForSession"),
              OneSignal.cache.focusHandler ||
                (OneSignal.cache.focusHandler = this.handleOnFocus.bind(this)),
              OneSignal.cache.isFocusEventSetup ||
                (window.addEventListener(
                  "focus",
                  OneSignal.cache.focusHandler,
                  !0
                ),
                (OneSignal.cache.isFocusEventSetup = !0)),
              OneSignal.cache.blurHandler ||
                (OneSignal.cache.blurHandler = this.handleOnBlur.bind(this)),
              OneSignal.cache.isBlurEventSetup ||
                (window.addEventListener(
                  "blur",
                  OneSignal.cache.blurHandler,
                  !0
                ),
                (OneSignal.cache.isBlurEventSetup = !0));
          }
          sendOnSessionUpdateFromPage() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              if (
                this.onSessionSent ||
                !this.context.pageViewManager.isFirstPageView()
              )
                return;
              const i = OneSignal.coreDirector.getIdentityModel(),
                n =
                  null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.id;
              if (!n)
                return void E.Z.debug(
                  "Not sending the on session because user is not registered with OneSignal (no onesignal id)"
                );
              const o = yield OneSignal.coreDirector.getPushSubscriptionModel();
              if (
                (null == o ? void 0 : o.data.notification_types) !==
                  m.Subscribed &&
                !0 !==
                  (null === (t = OneSignal.config) || void 0 === t
                    ? void 0
                    : t.enableOnSession)
              )
                return;
              let s;
              xt(null == o ? void 0 : o.data) &&
                (s = null == o ? void 0 : o.data.id);
              try {
                const e = new y(y.ONESIGNAL_ID, n),
                  t = {
                    refresh_device_metadata: !0,
                    deltas: { session_count: 1 },
                  },
                  i = yield bt.getAppId();
                a.Z.enforceAppId(i), a.Z.enforceAlias(e);
                try {
                  yield D.updateUser({ appId: i, subscriptionId: s }, e, t),
                    (this.onSessionSent = !0);
                } catch (e) {
                  E.Z.debug("Error updating user session:", e);
                }
              } catch (e) {
                E.Z.error(
                  `Failed to update user session. Error "${e.message}" ${e.stack}`
                );
              }
            });
          }
        }
        class zt {
          constructor(e) {
            (this.tagsFromTaggingContainer = {}),
              (this.remoteTags = {}),
              (this.context = e);
          }
          sendTags() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              E.Z.info(
                "Category Slidedown Local Tags:",
                this.tagsFromTaggingContainer
              );
              const e = z.convertTagsBooleansToApi(
                  this.tagsFromTaggingContainer
                ),
                t = z.getObjectDifference(e, this.remoteTags);
              return z.isTagObjectEmpty(t)
                ? (E.Z.warn(
                    "OneSignal: no change detected in Category preferences. Skipping tag update."
                  ),
                  t)
                : yield OneSignal.User.addTags(t);
            });
          }
          storeTagValuesToUpdate(e) {
            this.tagsFromTaggingContainer = e;
          }
          storeRemotePlayerTags(e) {
            this.context.tagManager.remoteTags = e;
          }
        }
        function Jt(e) {
          return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="24px" height="24px" fill="${e}"> <g transform="rotate(0 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.916s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.833s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.666s"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.583s"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.5s"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.416s"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.333s"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.25s"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.166s"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.083s"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="0s"/> </rect> </g> </svg>`;
        }
        class Yt {
          mount(e, t) {
            const i = this.generateHtml(e, t);
            (0, P.gd)(`#${xe.body}`).appendChild(i),
              this.taggingContainer &&
                this.taggingContainer.addEventListener(
                  "change",
                  this.toggleCheckedTag
                );
            const n = (0, P.gd)(`#${xe.allowButton}`);
            (n.disabled = !1),
              (0, P.BH)(n, "disabled"),
              (0, P.tf)(`#${xe.loadingContainer}`);
          }
          load() {
            const e = (0, P.gd)(`#${xe.loadingContainer}`),
              t = (0, P.gd)(`#${xe.allowButton}`),
              i = document.createElement("div");
            (0, P.bF)(e, `${Te.loadingContainer}`),
              (0, P.bF)(i, Fe),
              (0, P.bF)(t, "disabled"),
              (0, P.IM)(e, "beforeend", Jt(Ve)),
              (i.innerText = je),
              e.appendChild(i),
              (t.disabled = !0);
          }
          generateHtml(e, t) {
            const i = z.getCheckedTagCategories(e, t),
              n = i.filter((e) => i.indexOf(e) % 2 == 0),
              o = i.filter((e) => i.indexOf(e) % 2),
              s = document.createElement("div"),
              r = document.createElement("div"),
              a = document.createElement("div");
            return (
              (0, P.bF)(s, Re),
              (0, P.bF)(r, Re),
              (0, P.bF)(a, Le),
              (a.id = We),
              n.forEach((e) => {
                s.appendChild(this.getCategoryLabelElement(e));
              }),
              o.forEach((e) => {
                r.appendChild(this.getCategoryLabelElement(e));
              }),
              a.appendChild(s),
              a.appendChild(r),
              a
            );
          }
          getCategoryLabelElement(e) {
            const { label: t } = e,
              i = document.createElement("label"),
              n = document.createElement("span"),
              o = document.createElement("input"),
              s = document.createElement("span"),
              r = document.createElement("div"),
              a = document.createElement("div");
            return (
              (0, P.bF)(i, Ge),
              (0, P.bF)(n, Ue),
              (0, P.bF)(o, _e),
              (0, P.bF)(s, Be),
              (i.title = t),
              (n.innerText = t),
              (o.type = "checkbox"),
              (o.value = e.tag),
              (o.checked = !!e.checked),
              i.appendChild(n),
              i.appendChild(o),
              i.appendChild(s),
              r.setAttribute("style", "clear:both"),
              a.appendChild(i),
              a.appendChild(r),
              a
            );
          }
          get taggingContainer() {
            const e = `#${xe.body} > div.${Le}`;
            return (0, P.gd)(e);
          }
          toggleCheckedTag(e) {
            const t = e.target;
            if (t && "checkbox" === t.getAttribute("type")) {
              const e = t.checked;
              t.setAttribute("checked", e.toString());
            }
          }
          static getValuesFromTaggingContainer() {
            const e = `#${xe.body} > div.${Le}> div > div > label > input[type=checkbox]`,
              t = document.querySelectorAll(e),
              i = {};
            return (
              t.forEach((e) => {
                i[e.value] = e.checked;
              }),
              i
            );
          }
        }
        var Xt, ei, ti, ii, ni, oi;
        !(function (e) {
          (e.Stylesheet =
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css"),
            (e.Main =
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js"),
            (e.Utils =
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js");
        })(Xt || (Xt = {})),
          (function (e) {
            (e.Stylesheet =
              "sha512-yye/u0ehQsrVrfSd6biT17t39Rg9kNc+vENcCXZuMz2a+LWFGvXUnYuWUW6pbfYj1jcBb/C39UZw2ciQvwDDvg=="),
              (e.Main =
                "sha512-OnkjbJ4TwPpgSmjXACCb5J4cJwi880VRe+vWpPDlr8M38/L3slN5uUAeOeWU2jN+4vN0gImCXFGdJmc0wO4Mig=="),
              (e.Utils =
                "sha512-bUcJxlqkiGA3cmoYPuZaLRsyc5ChG9APG4ajom2AXKSlBtOmx4kLV3c8uv/6uSz43FMjI4Q2QI21+D223rT76w==");
          })(ei || (ei = {}));
        class si {
          constructor(e) {
            (this.smsInputFieldIsValid = !0),
              (this.emailInputFieldIsValid = !0),
              (this.promptOptions = e);
          }
          generateHtml() {
            const e = document.createElement("div");
            let t, i, n;
            switch (((0, P.bF)(e, He), (e.id = He), this.promptOptions.type)) {
              case G.Sms:
                (t = this.promptOptions.text.smsLabel || "Phone Number"),
                  (i = this.getInputWithValidationElement(G.Sms, t)),
                  e.appendChild(i);
                break;
              case G.Email:
                (t = this.promptOptions.text.emailLabel || "Email"),
                  (n = this.getInputWithValidationElement(G.Email, t)),
                  e.appendChild(n);
                break;
              case G.SmsAndEmail:
                (t = this.promptOptions.text.emailLabel || "Email"),
                  (n = this.getInputWithValidationElement(G.Email, t)),
                  e.appendChild(n),
                  (t = this.promptOptions.text.smsLabel || "Phone Number"),
                  (i = this.getInputWithValidationElement(G.Sms, t)),
                  e.appendChild(i);
            }
            return e;
          }
          getValidationElementWithMessage(e) {
            const t = document.createElement("div"),
              i = document.createElement("img"),
              n = document.createElement("p");
            return (
              (n.innerText = e),
              i.setAttribute(
                "src",
                "data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.98775 -0.00114406C5.85015 0.0338508 3.81219 0.908665 2.31442 2.43419C1.565 3.18031 0.973715 4.06987 0.575897 5.04969C0.17808 6.02952 -0.0180997 7.07949 -0.000914196 8.13686C-0.00214385 9.17005 0.200528 10.1933 0.595487 11.148C0.990446 12.1028 1.56993 12.9702 2.30072 13.7005C3.03151 14.4309 3.89925 15.0098 4.85421 15.4042C5.80916 15.7986 6.83256 16.0007 7.86575 15.9989H8.00842C10.1467 15.9769 12.1889 15.1075 13.6869 13.5816C15.185 12.0557 16.0165 9.99781 15.9991 7.85952C16.0015 6.8138 15.7949 5.77814 15.3913 4.81345C14.9876 3.84876 14.3952 2.97451 13.6488 2.24213C12.9023 1.50974 12.017 0.933994 11.0448 0.548751C10.0726 0.163508 9.03324 -0.0234551 7.98775 -0.00114406ZM6.99909 11.0269C6.99428 10.8961 7.01558 10.7658 7.06175 10.6434C7.10792 10.521 7.17803 10.4091 7.26797 10.3141C7.35792 10.2191 7.4659 10.143 7.58559 10.0903C7.70529 10.0375 7.8343 10.0092 7.96509 10.0069H7.98309C8.24616 10.0074 8.49882 10.1097 8.6881 10.2924C8.87739 10.4751 8.9886 10.724 8.99842 10.9869C9.00331 11.1176 8.98207 11.248 8.93594 11.3704C8.8898 11.4928 8.8197 11.6048 8.72974 11.6998C8.63978 11.7948 8.53176 11.8709 8.41202 11.9236C8.29229 11.9763 8.16323 12.0046 8.03242 12.0069H8.01442C7.75145 12.006 7.49897 11.9036 7.30976 11.721C7.12054 11.5383 7.00923 11.2896 6.99909 11.0269ZM7.33242 8.33219V4.33219C7.33242 4.15538 7.40266 3.98581 7.52768 3.86079C7.65271 3.73576 7.82227 3.66552 7.99909 3.66552C8.1759 3.66552 8.34547 3.73576 8.47049 3.86079C8.59551 3.98581 8.66575 4.15538 8.66575 4.33219V8.33219C8.66575 8.509 8.59551 8.67857 8.47049 8.80359C8.34547 8.92862 8.1759 8.99886 7.99909 8.99886C7.82227 8.99886 7.65271 8.92862 7.52768 8.80359C7.40266 8.67857 7.33242 8.509 7.33242 8.33219Z' fill='%23E54B4D'/%3e%3c/svg%3e"
              ),
              t.appendChild(i),
              t.appendChild(n),
              t
            );
          }
          getInputWithValidationElement(e, t) {
            const i =
                this.getTypeSpecificVariablesForValidationElemGeneration(e),
              n = document.createElement("label"),
              o = document.createElement("input"),
              s = document.createElement("div"),
              r = document.createElement("div"),
              a = this.getValidationElementWithMessage(i.message),
              l = document.createElement("div");
            return (
              s.setAttribute("style", "clear:both"),
              r.setAttribute("style", "clear:both"),
              (0, P.bF)(a, Je),
              (0, P.bF)(a, Ye),
              (a.id = i.validationElementId),
              (n.title = t),
              (n.innerText = t),
              (n.htmlFor = i.inputElementId),
              (o.type = i.domElementType),
              (o.id = i.inputElementId),
              (o.tabIndex = i.tabIndex),
              (0, P.bF)(o, i.inputClass),
              (0, P.bF)(l, Qe),
              (l.id = i.wrappingDivId),
              l.appendChild(n),
              l.appendChild(s),
              l.appendChild(o),
              l.appendChild(r),
              l.appendChild(a),
              l
            );
          }
          getTypeSpecificVariablesForValidationElemGeneration(e) {
            if (e === G.Email)
              return {
                message: "Please enter a valid email",
                domElementType: "email",
                validationElementId: ot,
                inputElementId: it,
                inputClass: ze,
                wrappingDivId: et,
                tabIndex: 1,
              };
            if (e === G.Sms)
              return {
                message: "Please enter a valid phone number",
                domElementType: "tel",
                validationElementId: nt,
                inputElementId: tt,
                inputClass: Ke,
                wrappingDivId: Xe,
                tabIndex: 2,
              };
            throw new Error("invalid channel type for input validation");
          }
          initializePhoneInputLibrary() {
            const e = (0, P.gd)(`#${tt}`);
            e && window.intlTelInput
              ? (this.itiOneSignal = window.intlTelInput(e, {
                  autoPlaceholder: "off",
                  separateDialCode: !0,
                }))
              : E.Z.error(
                  "OneSignal: there was a problem initializing International Telephone Input"
                );
          }
          addSmsInputEventListeners() {
            const e = (0, P.gd)(`#${tt}`);
            e.addEventListener("keyup", (t) => {
              var i;
              (this.smsInputFieldIsValid =
                this.itiOneSignal.isValidNumber() ||
                "" === (null == e ? void 0 : e.value)),
                "Enter" === t.key &&
                  (null === (i = document.getElementById(xe.allowButton)) ||
                    void 0 === i ||
                    i.click()),
                this.updateValidationOnSmsInputChange();
            }),
              e.addEventListener("blur", () => {
                (this.smsInputFieldIsValid =
                  this.itiOneSignal.isValidNumber() ||
                  "" === (null == e ? void 0 : e.value)),
                  this.updateValidationOnSmsInputChange();
              });
          }
          addEmailInputEventListeners() {
            const e = (0, P.gd)(`#${it}`);
            e.addEventListener("keyup", (t) => {
              var i;
              const n = null == e ? void 0 : e.value;
              (this.emailInputFieldIsValid =
                si.validateEmailInputWithReturnVal(n)),
                "Enter" === t.key &&
                  (null === (i = document.getElementById(xe.allowButton)) ||
                    void 0 === i ||
                    i.click()),
                this.updateValidationOnEmailInputChange();
            });
          }
          updateValidationOnSmsInputChange() {
            const e = (0, P.gd)(`#${Xe}`),
              t = (0, P.gd)(`#${nt}`);
            (0, P.BH)(e, qe), (0, P.bF)(t, Je);
          }
          updateValidationOnEmailInputChange() {
            const e = (0, P.gd)(`#${et}`),
              t = (0, P.gd)(`#${ot}`);
            (0, P.BH)(e, qe), (0, P.bF)(t, Je);
          }
          loadPhoneLibraryScripts() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (OneSignal._didLoadITILibrary) return;
              const e = document.createElement("script"),
                t = document.createElement("script"),
                i = document.createElement("link");
              (e.src = Xt.Main),
                (t.src = Xt.Utils),
                (i.href = Xt.Stylesheet),
                (i.rel = "stylesheet"),
                (e.integrity = ei.Main),
                (t.integrity = ei.Utils),
                (i.integrity = ei.Stylesheet),
                (e.crossOrigin = "anonymous"),
                (t.crossOrigin = "anonymous"),
                (i.crossOrigin = "anonymous"),
                document.head.appendChild(e),
                document.head.appendChild(t),
                document.head.appendChild(i);
              const n = new Promise((t) => {
                  e.onload = () => {
                    t();
                  };
                }),
                o = new Promise((e) => {
                  t.onload = () => {
                    e();
                  };
                });
              yield Promise.all([n, o]), (OneSignal._didLoadITILibrary = !0);
            });
          }
          mount() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = si.isUsingSmsInputField(this.promptOptions.type),
                t = si.isUsingEmailInputField(this.promptOptions.type);
              e && (yield this.loadPhoneLibraryScripts());
              const i = this.generateHtml();
              (0, P.gd)(`#${xe.body}`).appendChild(i),
                e &&
                  (this.initializePhoneInputLibrary(),
                  this.addSmsInputEventListeners()),
                t && this.addEmailInputEventListeners();
            });
          }
          isEmailInputFieldEmpty() {
            return "" === this.getValueFromEmailInput();
          }
          isSmsInputFieldEmpty() {
            return "" === this.getValueFromSmsInput();
          }
          getValueFromEmailInput() {
            const e = (0, P.gd)(`#${it}`);
            return (null == e ? void 0 : e.value) || "";
          }
          getValueFromSmsInput() {
            return (
              this.itiOneSignal.getNumber(
                intlTelInputUtils.numberFormat.E164
              ) || ""
            );
          }
          static showSmsInputError(e) {
            const t = document.querySelector(`#${nt}`),
              i = document.querySelector(`#${Xe}`);
            t && i
              ? e
                ? (t.classList.remove(Je), i.classList.add(qe))
                : (t.classList.add(Je), i.classList.remove(qe))
              : E.Z.error(
                  "OneSignal: couldn't find slidedown validation element"
                );
          }
          static showEmailInputError(e) {
            const t = document.querySelector(`#${ot}`),
              i = document.querySelector(`#${et}`);
            t && i
              ? e
                ? (t.classList.remove(Je), i.classList.add(qe))
                : (t.classList.add(Je), i.classList.remove(qe))
              : E.Z.error(
                  "OneSignal: couldn't find slidedown validation element"
                );
          }
          static resetInputErrorStates(e) {
            switch (e) {
              case G.Sms:
                si.showSmsInputError(!1);
                break;
              case G.Email:
                si.showEmailInputError(!1);
                break;
              case G.SmsAndEmail:
                si.showSmsInputError(!1), si.showEmailInputError(!1);
            }
          }
          static validateEmailInputWithReturnVal(e) {
            return (
              /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e || "") ||
              "" === e
            );
          }
          static isUsingSmsInputField(e) {
            return e === G.Sms || e === G.SmsAndEmail;
          }
          static isUsingEmailInputField(e) {
            return e === G.Email || e === G.SmsAndEmail;
          }
        }
        !(function (e) {
          (e[(e.InvalidSms = 0)] = "InvalidSms"),
            (e[(e.InvalidEmail = 1)] = "InvalidEmail"),
            (e[(e.InvalidEmailAndSms = 2)] = "InvalidEmailAndSms");
        })(ti || (ti = {}));
        class ri extends I.Z {
          constructor(e) {
            let t;
            switch (e) {
              case ti.InvalidEmail:
                t = "Invalid email";
                break;
              case ti.InvalidSms:
                t = "Invalid sms";
                break;
              case ti.InvalidEmailAndSms:
                t = "Invalid email & sms";
            }
            super(t),
              (this.description = ti[e]),
              (this.reason = e),
              Object.setPrototypeOf(this, ri.prototype);
          }
        }
        class ai {
          constructor(e) {
            var t, i, n;
            switch (
              ((this.savingButton = Q),
              (this.errorButton = j),
              (this.options = e),
              (this.options.text.actionMessage = e.text.actionMessage.substring(
                0,
                90
              )),
              (this.options.text.acceptButton = e.text.acceptButton.substring(
                0,
                16
              )),
              (this.options.text.cancelButton = e.text.cancelButton.substring(
                0,
                16
              )),
              (this.notificationIcons = null),
              (this.channelCaptureContainer = null),
              (this.isShowingFailureState = !1),
              e.type)
            ) {
              case G.Category:
                (this.negativeUpdateButton =
                  null === (t = this.options.text.negativeUpdateButton) ||
                  void 0 === t
                    ? void 0
                    : t.substring(0, 16)),
                  (this.positiveUpdateButton =
                    null === (i = this.options.text.positiveUpdateButton) ||
                    void 0 === i
                      ? void 0
                      : i.substring(0, 16)),
                  (this.updateMessage =
                    null === (n = this.options.text.updateMessage) ||
                    void 0 === n
                      ? void 0
                      : n.substring(0, 90)),
                  (this.tagCategories = e.categories),
                  (this.errorButton = a.c.getValueOrDefault(
                    this.options.text.positiveUpdateButton,
                    j
                  ));
                break;
              case G.Sms:
              case G.Email:
              case G.SmsAndEmail:
                this.errorButton = a.c.getValueOrDefault(
                  this.options.text.acceptButton,
                  j
                );
            }
          }
          create(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (null === this.notificationIcons) {
                const t = yield bt.getNotificationIcons();
                (this.notificationIcons = t),
                  this.container.className.includes(Te.container) &&
                    (0, P.tf)(`#${xe.container}`);
                const i =
                    e && this.tagCategories
                      ? this.positiveUpdateButton
                      : this.options.text.acceptButton,
                  n =
                    e && this.tagCategories
                      ? this.negativeUpdateButton
                      : this.options.text.cancelButton,
                  o = (function (e) {
                    const {
                        icon: t,
                        messageText: i,
                        positiveButtonText: n,
                        negativeButtonText: o,
                      } = e,
                      s =
                        t === Te.defaultIcon
                          ? "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M33.232 28.434a2.5 2.5 0 001.768.733 1.667 1.667 0 010 3.333H5a1.667 1.667 0 110-3.333 2.5 2.5 0 002.5-2.5v-8.104A13.262 13.262 0 0118.333 5.122V1.667a1.666 1.666 0 113.334 0v3.455A13.262 13.262 0 0132.5 18.563v8.104a2.5 2.5 0 00.732 1.767zM16.273 35h7.454a.413.413 0 01.413.37 4.167 4.167 0 11-8.28 0 .417.417 0 01.413-.37z' fill='%23BDC4CB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h40v40H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                          : t,
                      r = t === Te.defaultIcon ? Te.defaultIcon : "",
                      a = document.createElement("div"),
                      l = document.createElement("div"),
                      d = document.createElement("div"),
                      c = document.createElement("div"),
                      u = document.createElement("div"),
                      h = document.createElement("div"),
                      g = document.createElement("button"),
                      p = document.createElement("button"),
                      m = document.createElement("div"),
                      f = document.createElement("div"),
                      v = document.createElement("img");
                    return (
                      (0, P.bF)(l, Te.body),
                      (0, P.bF)(c, Te.icon),
                      (0, P.bF)(d, Te.message),
                      (0, P.bF)(h, Te.footer),
                      (0, P.bF)(m, Te.clearfix),
                      (0, P.bF)(f, Te.clearfix),
                      (0, P.bF)(g, Ae),
                      (0, P.bF)(g, Me),
                      (0, P.bF)(g, Ze),
                      (0, P.bF)(p, Ae),
                      (0, P.bF)(p, De),
                      (0, P.bF)(p, Ze),
                      (a.id = xe.normalSlidedown),
                      (l.id = xe.body),
                      (u.id = xe.loadingContainer),
                      (g.id = xe.allowButton),
                      (p.id = xe.cancelButton),
                      (h.id = xe.footer),
                      r && (0, P.bF)(v, r),
                      v.setAttribute("alt", "notification icon"),
                      v.setAttribute("src", s || ""),
                      (d.innerText = i || ""),
                      (g.innerText = n || ""),
                      (p.innerText = o || ""),
                      c.appendChild(v),
                      l.appendChild(c),
                      l.appendChild(d),
                      l.appendChild(m),
                      l.appendChild(u),
                      h.appendChild(g),
                      h.appendChild(p),
                      h.appendChild(f),
                      a.appendChild(l),
                      a.appendChild(h),
                      a
                    );
                  })({
                    messageText:
                      e && this.tagCategories
                        ? this.updateMessage
                        : this.options.text.actionMessage,
                    icon:
                      this.options.icon || this.getPlatformNotificationIcon(),
                    positiveButtonText: i,
                    negativeButtonText: n,
                  }),
                  s = document.createElement("div"),
                  r = document.createElement("div");
                (s.id = xe.container),
                  (0, P.bF)(s, Te.container),
                  (0, P.bF)(s, Te.reset),
                  (0, P.gd)("body").appendChild(s),
                  (r.id = xe.dialog),
                  (0, P.bF)(r, Te.dialog),
                  r.appendChild(o),
                  this.container.appendChild(r),
                  (0, P.bF)(
                    this.container,
                    (0, l.M)().mobile ? Te.slideUp : Te.slideDown
                  ),
                  this.allowButton.addEventListener(
                    "click",
                    this.onSlidedownAllowed.bind(this)
                  ),
                  this.cancelButton.addEventListener(
                    "click",
                    this.onSlidedownCanceled.bind(this)
                  );
              }
            });
          }
          static triggerSlidedownEvent(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield ve.Z.trigger(e);
            });
          }
          onSlidedownAllowed(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield ai.triggerSlidedownEvent(ai.EVENTS.ALLOW_CLICK);
            });
          }
          onSlidedownCanceled(e) {
            ai.triggerSlidedownEvent(ai.EVENTS.CANCEL_CLICK),
              this.close(),
              ai.triggerSlidedownEvent(ai.EVENTS.CLOSED);
          }
          close() {
            (0, P.bF)(this.container, Te.closeSlidedown),
              (0, P.IH)(
                this.dialog,
                "animationend",
                (e, t) => {
                  e.target !== this.dialog ||
                    ("slideDownExit" !== e.animationName &&
                      "slideUpExit" !== e.animationName) ||
                    ((0, P.tf)(`#${xe.container}`), t());
                },
                !0
              );
          }
          setSaveState() {
            (this.allowButton.disabled = !0),
              (this.allowButton.textContent = null),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getTextSpan(this.savingButton)
              ),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getIndicatorHolder()
              ),
              (0, P.IM)(this.buttonIndicatorHolder, "beforeend", Jt($e)),
              (0, P.bF)(this.allowButton, "disabled"),
              (0, P.bF)(this.allowButton, Te.savingStateButton);
          }
          removeSaveState() {
            (this.allowButton.textContent = this.positiveUpdateButton),
              (0, P.tf)(`#${Te.buttonIndicatorHolder}`),
              (this.allowButton.disabled = !1),
              (0, P.BH)(this.allowButton, "disabled"),
              (0, P.BH)(this.allowButton, Te.savingStateButton);
          }
          setFailureState() {
            (this.allowButton.textContent = null),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getTextSpan(this.errorButton)
              ),
              this.options.type === G.Category &&
                (this.allowButton.insertAdjacentElement(
                  "beforeend",
                  this.getIndicatorHolder()
                ),
                (0, P.IM)(
                  this.buttonIndicatorHolder,
                  "beforeend",
                  (function (e = "#FFFFFF") {
                    return `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.711 2.652a5.489 5.489 0 00-4.044 4.05 5.513 5.513 0 00.104 2.968.167.167 0 00.25.089l.893-.588a.667.667 0 011.02.692l-.61 2.937a.667.667 0 01-.786.52L.6 12.713a.667.667 0 01-.232-1.21l.933-.615a.166.166 0 00.063-.2 7.167 7.167 0 018.828-9.516.833.833 0 01-.507 1.587 5.489 5.489 0 00-2.974-.108zM15.75 3.542c.09.096.15.216.172.346a.667.667 0 01-.301.681l-.898.564a.166.166 0 00-.066.2 7.167 7.167 0 01-8.77 9.514.835.835 0 01-.154-1.544.831.831 0 01.646-.048 5.5 5.5 0 006.856-6.949.167.167 0 00-.176-.114.164.164 0 00-.071.026l-.962.604a.667.667 0 01-1.005-.713l.667-2.924a.667.667 0 01.8-.502l2.925.667c.129.03.246.096.336.192z" fill="${e}"/></svg>`;
                  })()
                ),
                (0, P.bF)(this.allowButton, "onesignal-error-state-button")),
              (this.isShowingFailureState = !0);
          }
          setFailureStateForInvalidChannelInput(e) {
            switch (e) {
              case ti.InvalidSms:
                si.showSmsInputError(!0);
                break;
              case ti.InvalidEmail:
                si.showEmailInputError(!0);
                break;
              case ti.InvalidEmailAndSms:
                si.showSmsInputError(!0), si.showEmailInputError(!0);
            }
          }
          removeFailureState() {
            (0, P.tf)("#onesignal-button-indicator-holder"),
              (0, P.BH)(this.allowButton, "onesignal-error-state-button"),
              J.isSlidedownPushDependent(this.options.type) ||
                si.resetInputErrorStates(this.options.type),
              (this.isShowingFailureState = !1);
          }
          getPlatformNotificationIcon() {
            return (0, P.S6)(this.notificationIcons);
          }
          getIndicatorHolder() {
            const e = document.createElement("div");
            return (
              (e.id = xe.buttonIndicatorHolder),
              (0, P.bF)(e, Te.buttonIndicatorHolder),
              e
            );
          }
          getTextSpan(e) {
            const t = document.createElement("span");
            return (t.textContent = e), t;
          }
          get container() {
            return (0, P.gd)(`#${xe.container}`);
          }
          get dialog() {
            return (0, P.gd)(`#${xe.dialog}`);
          }
          get allowButton() {
            return (0, P.gd)(`#${xe.allowButton}`);
          }
          get cancelButton() {
            return (0, P.gd)(`#${xe.cancelButton}`);
          }
          get buttonIndicatorHolder() {
            return (0, P.gd)(`#${xe.buttonIndicatorHolder}`);
          }
          get slidedownFooter() {
            return (0, P.gd)(`#${xe.footer}`);
          }
          static get EVENTS() {
            return {
              ALLOW_CLICK: "slidedownAllowClick",
              CANCEL_CLICK: "slidedownCancelClick",
              SHOWN: "slidedownShown",
              CLOSED: "slidedownClosed",
              QUEUED: "slidedownQueued",
            };
          }
        }
        class PermissionMessageDismissedError extends I.Z {
          constructor(e) {
            super(
              `The permission message of type ${
                e || "unknown"
              } was previously dismissed.`
            ),
              Object.setPrototypeOf(
                this,
                PermissionMessageDismissedError.prototype
              );
          }
        }
        class li {
          constructor(e) {
            this.message = e;
          }
          show() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = document.createElement("div"),
                t = document.createElement("p");
              (t.innerText = this.message), e.appendChild(t);
              const i = document.createElement("div"),
                n = document.createElement("div");
              (i.id = xe.container),
                (e.id = Ne),
                (0, P.bF)(e, ke),
                (0, P.bF)(i, Te.container),
                (0, P.bF)(i, Te.reset),
                (0, P.gd)("body").appendChild(i),
                (n.id = xe.dialog),
                (0, P.bF)(n, Te.dialog),
                n.appendChild(e),
                this.container.appendChild(n),
                (0, P.bF)(
                  this.container,
                  (0, l.M)().mobile ? Te.slideUp : Te.slideDown
                ),
                li.triggerSlidedownEvent(li.EVENTS.SHOWN);
            });
          }
          static triggerSlidedownEvent(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield ve.Z.trigger(e);
            });
          }
          close() {
            (0, P.bF)(this.container, Te.closeSlidedown),
              (0, P.IH)(
                this.dialog,
                "animationend",
                (e, t) => {
                  e.target !== this.dialog ||
                    ("slideDownExit" !== e.animationName &&
                      "slideUpExit" !== e.animationName) ||
                    ((0, P.tf)(`#${xe.container}`), t());
                },
                !0
              );
          }
          get container() {
            return (0, P.gd)(`#${xe.container}`);
          }
          get dialog() {
            return (0, P.gd)(`#${xe.dialog}`);
          }
          static get EVENTS() {
            return { SHOWN: "toastShown", CLOSED: "toastClosed" };
          }
        }
        !(function (e) {
          (e.Push = "push"), (e.NonPush = "nonPush");
        })(ii || (ii = {})),
          (function (e) {
            (e.PromptDismissCount = "promptDismissCount"),
              (e.NonPushPromptsDismissCount = "nonPushPromptsDismissCount");
          })(ni || (ni = {})),
          (function (e) {
            (e.OneSignalNotificationPrompt = "onesignal-notification-prompt"),
              (e.OneSignalNonPushPrompt = "onesignal-non-push-prompt");
          })(oi || (oi = {}));
        class AlreadySubscribedError extends I.Z {
          constructor() {
            super(
              "This operation can only be performed when the user is not subscribed."
            ),
              Object.setPrototypeOf(this, AlreadySubscribedError.prototype);
          }
        }
        class di extends I.Z {
          constructor(e) {
            super(
              `This operation can only be performed when the channel '${e}' does not yet exist.`
            ),
              Object.setPrototypeOf(this, di.prototype);
          }
        }
        class ci {
          static isLocalStorageSupported() {
            try {
              return (
                "undefined" != typeof localStorage &&
                (localStorage.getItem("test"), !0)
              );
            } catch (e) {
              return !1;
            }
          }
          static setItem(e, t, i) {
            if (!ci.isLocalStorageSupported()) return;
            const n = void 0 !== i ? 60 * i * 1e3 : 0,
              o = {
                value: JSON.stringify(t),
                timestamp: void 0 !== i ? new Date().getTime() + n : void 0,
              };
            localStorage.setItem(e, JSON.stringify(o));
          }
          static getItem(e) {
            if (!ci.isLocalStorageSupported()) return null;
            const t = localStorage.getItem(e);
            let i;
            try {
              i = JSON.parse(t);
            } catch (e) {
              return null;
            }
            if (null === i) return null;
            if (i.timestamp && new Date().getTime() >= i.timestamp)
              return localStorage.removeItem(e), null;
            let n = i.value;
            try {
              n = JSON.parse(i.value);
            } catch (e) {
              return n;
            }
            return n;
          }
          static removeItem(e) {
            if (!ci.isLocalStorageSupported()) return null;
            localStorage.removeItem(e);
          }
        }
        const ui = {
            [ii.Push]: ni.PromptDismissCount,
            [ii.NonPush]: ni.NonPushPromptsDismissCount,
          },
          hi = {
            [ii.Push]: oi.OneSignalNotificationPrompt,
            [ii.NonPush]: oi.OneSignalNonPushPrompt,
          };
        class gi {
          static markPromptDismissedWithType(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = ui[e],
                i = hi[e];
              let n = yield fe.ZP.get("Options", t);
              n || (n = 0), (n += 1);
              let o = 3;
              2 == n ? (o = 7) : n > 2 && (o = 30),
                E.Z.debug(
                  `(${g.Z.getWindowEnv().toString()}) OneSignal: User dismissed the ${e} notification prompt; reprompt after ${o} days.`
                ),
                yield fe.ZP.put("Options", { key: t, value: n });
              const s = 24 * o * 60;
              return ci.setItem(i, "dismissed", s);
            });
          }
          static wasPromptOfTypeDismissed(e) {
            switch (e) {
              case ii.Push:
                return (
                  "dismissed" === ci.getItem(oi.OneSignalNotificationPrompt)
                );
              case ii.NonPush:
                return "dismissed" === ci.getItem(oi.OneSignalNonPushPrompt);
            }
            return !1;
          }
        }
        class pi {
          static registerForPush() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return yield pi.internalRegisterForPush();
            });
          }
          static internalRegisterForPush() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.context;
              let t = null;
              if (g.Z.getWindowEnv() !== p.Q.Host)
                throw new InvalidStateError(mt.UnsupportedEnvironment);
              try {
                const i = yield e.subscriptionManager.subscribe(0);
                (t = yield e.subscriptionManager.registerSubscription(i)),
                  e.pageViewManager.incrementPageViewCount(),
                  yield vt.Q.triggerNotificationPermissionChanged(),
                  yield Ft.checkAndTriggerSubscriptionChanged();
              } catch (e) {
                E.Z.error(e);
              }
              return t;
            });
          }
        }
        class mi {
          constructor(
            e,
            t,
            i,
            n = "shown",
            o = ["opacity", "transform"],
            s,
            r = 500
          ) {
            (this.selector = e),
              (this.showClass = t),
              (this.hideClass = i),
              (this.state = n),
              (this.targetTransitionEvents = o),
              (this.nestedContentSelector = s),
              (this.transitionCheckTimeout = r);
          }
          show() {
            return this.hidden
              ? new Promise((e) => {
                  (this.state = "showing"),
                    ve.Z.trigger(mi.EVENTS.SHOWING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.hideClass && (0, P.BH)(t, this.hideClass),
                        this.showClass && (0, P.bF)(t, this.showClass))
                      : E.Z.error(
                          `(show) could not find animated element with selector ${this.selector}`
                        ),
                    0 == this.targetTransitionEvents.length)
                  )
                    return e(this);
                  {
                    const t = setTimeout(() => {
                      E.Z.debug(
                        `Element did not completely show (state: ${this.state}).`
                      );
                    }, this.transitionCheckTimeout);
                    (0, P.IH)(
                      this.element,
                      "transitionend",
                      (i, n) => {
                        if (
                          i.target === this.element &&
                          (0, P.r3)(this.targetTransitionEvents, i.propertyName)
                        )
                          return (
                            clearTimeout(t),
                            n(),
                            (this.state = "shown"),
                            ve.Z.trigger(mi.EVENTS.SHOWN, this),
                            e(this)
                          );
                      },
                      !0
                    );
                  }
                })
              : Promise.resolve(this);
          }
          hide() {
            return this.shown
              ? new Promise((e) => {
                  (this.state = "hiding"), ve.Z.trigger(mi.EVENTS.HIDING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.showClass && (0, P.BH)(t, this.showClass),
                        this.hideClass && (0, P.bF)(t, this.hideClass))
                      : E.Z.error(
                          `(hide) could not find animated element with selector ${this.selector}`
                        ),
                    0 == this.targetTransitionEvents.length)
                  )
                    return e(this);
                  (0, P.IH)(
                    this.element,
                    "transitionend",
                    (t, i) => {
                      const n = setTimeout(() => {
                        E.Z.debug(
                          `Element did not completely hide (state: ${this.state}).`
                        );
                      }, this.transitionCheckTimeout);
                      if (
                        t.target === this.element &&
                        (0, P.r3)(this.targetTransitionEvents, t.propertyName)
                      )
                        return (
                          clearTimeout(n),
                          i(),
                          (this.state = "hidden"),
                          ve.Z.trigger(mi.EVENTS.HIDDEN, this),
                          e(this)
                        );
                    },
                    !0
                  );
                })
              : Promise.resolve(this);
          }
          waitUntilShown() {
            return "shown" === this.state
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(mi.EVENTS.SHOWN, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          waitUntilHidden() {
            return "hidden" === this.state
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(mi.EVENTS.HIDDEN, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          static get EVENTS() {
            return {
              SHOWING: "animatedElementShowing",
              SHOWN: "animatedElementShown",
              HIDING: "animatedElementHiding",
              HIDDEN: "animatedElementHidden",
            };
          }
          get content() {
            if (!this.element) return "";
            if (this.nestedContentSelector) {
              const e = this.element.querySelector(this.nestedContentSelector);
              return e ? e.innerHTML : "";
            }
            return this.element.innerHTML;
          }
          set content(e) {
            if (this.element)
              if (this.nestedContentSelector) {
                const t = this.element.querySelector(
                  this.nestedContentSelector
                );
                t && (t.textContent = e);
              } else this.element.textContent = e;
          }
          get element() {
            return document.querySelector(this.selector);
          }
          get showing() {
            return "showing" === this.state;
          }
          get shown() {
            return "shown" === this.state;
          }
          get hiding() {
            return "hiding" === this.state;
          }
          get hidden() {
            return "hidden" === this.state;
          }
        }
        class fi extends mi {
          constructor(
            e,
            t,
            i,
            n,
            o,
            s = "shown",
            r = "active",
            a = ["opacity", "transform"],
            l
          ) {
            super(e, t, i, s, a),
              (this.selector = e),
              (this.showClass = t),
              (this.hideClass = i),
              (this.activeClass = n),
              (this.inactiveClass = o),
              (this.state = s),
              (this.activeState = r),
              (this.targetTransitionEvents = a),
              (this.nestedContentSelector = l);
          }
          activate() {
            return this.inactive && this.shown
              ? new Promise((e) => {
                  (this.activeState = "activating"),
                    ve.Z.trigger(fi.EVENTS.ACTIVATING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.inactiveClass && (0, P.BH)(t, this.inactiveClass),
                        this.activeClass && (0, P.bF)(t, this.activeClass))
                      : E.Z.error("Could not find active animated element"),
                    !this.shown)
                  )
                    return (
                      E.Z.debug("Ending activate() transition (alternative)."),
                      (this.activeState = "active"),
                      ve.Z.trigger(fi.EVENTS.ACTIVE, this),
                      e(this)
                    );
                  if (0 == this.targetTransitionEvents.length) return e(this);
                  {
                    const t = setTimeout(() => {
                      E.Z.debug(
                        `Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`
                      );
                    }, this.transitionCheckTimeout);
                    (0, P.IH)(
                      this.element,
                      "transitionend",
                      (i, n) => {
                        if (
                          i.target === this.element &&
                          (0, P.r3)(this.targetTransitionEvents, i.propertyName)
                        )
                          return (
                            clearTimeout(t),
                            n(),
                            (this.activeState = "active"),
                            ve.Z.trigger(fi.EVENTS.ACTIVE, this),
                            e(this)
                          );
                      },
                      !0
                    );
                  }
                })
              : Promise.resolve(this);
          }
          inactivate() {
            return this.active
              ? new Promise((e) => {
                  (this.activeState = "inactivating"),
                    ve.Z.trigger(fi.EVENTS.INACTIVATING, this);
                  const t = this.element;
                  if (
                    (t
                      ? (this.activeClass && (0, P.BH)(t, this.activeClass),
                        this.inactiveClass && (0, P.bF)(t, this.inactiveClass))
                      : E.Z.error("Could not find active animated element"),
                    !this.shown)
                  )
                    return (
                      (this.activeState = "inactive"),
                      ve.Z.trigger(fi.EVENTS.INACTIVE, this),
                      e(this)
                    );
                  if (0 == this.targetTransitionEvents.length) return e(this);
                  {
                    const t = setTimeout(() => {
                      E.Z.debug(
                        `Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`
                      );
                    }, this.transitionCheckTimeout);
                    (0, P.IH)(
                      this.element,
                      "transitionend",
                      (i, n) => {
                        if (
                          i.target === this.element &&
                          (0, P.r3)(this.targetTransitionEvents, i.propertyName)
                        )
                          return (
                            clearTimeout(t),
                            n(),
                            (this.activeState = "inactive"),
                            ve.Z.trigger(fi.EVENTS.INACTIVE, this),
                            e(this)
                          );
                      },
                      !0
                    );
                  }
                })
              : Promise.resolve(this);
          }
          waitUntilActive() {
            return this.active
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(fi.EVENTS.ACTIVE, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          waitUntilInactive() {
            return this.inactive
              ? Promise.resolve(this)
              : new Promise((e) => {
                  OneSignal.emitter.once(fi.EVENTS.INACTIVE, (t) => {
                    if (t === this) return e(this);
                  });
                });
          }
          static get EVENTS() {
            return Object.assign(Object.assign({}, mi.EVENTS), {
              ACTIVATING: "activeAnimatedElementActivating",
              ACTIVE: "activeAnimatedElementActive",
              INACTIVATING: "activeAnimatedElementInactivating",
              INACTIVE: "activeAnimatedElementInactive",
            });
          }
          get activating() {
            return "activating" === this.activeState;
          }
          get active() {
            return "active" === this.activeState;
          }
          get inactivating() {
            return "inactivating" === this.activeState;
          }
          get inactive() {
            return "inactive" === this.activeState;
          }
        }
        class vi extends fi {
          constructor() {
            super(
              ".onesignal-bell-launcher-badge",
              "onesignal-bell-launcher-badge-opened",
              null,
              "onesignal-bell-launcher-badge-active",
              null,
              "hidden"
            );
          }
          increment() {
            if (!isNaN(this.content)) {
              let e = +this.content;
              (e += 1), (this.content = e.toString());
            }
          }
          show() {
            const e = super.show();
            return OneSignal.notifyButton.setCustomColorsIfSpecified(), e;
          }
          decrement() {
            if (!isNaN(this.content)) {
              let e = +this.content;
              (e -= 1), (this.content = e > 0 ? e.toString() : "");
            }
          }
        }
        class bi extends mi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher-message",
              "onesignal-bell-launcher-message-opened",
              void 0,
              "hidden",
              ["opacity", "transform"],
              ".onesignal-bell-launcher-message-body"
            ),
              (this.bell = e),
              (this.contentType = ""),
              (this.queued = []);
          }
          static get TIMEOUT() {
            return 2500;
          }
          static get TYPES() {
            return { TIP: "tip", MESSAGE: "message", QUEUED: "queued" };
          }
          display(e, t, i = 0) {
            return (
              E.Z.debug(`Calling display(${e}, ${t}, ${i}).`),
              (this.shown ? this.hide() : (0, P.Ld)())
                .then(() => {
                  (this.content = gt.decodeHtmlEntities(t)),
                    (this.contentType = e);
                })
                .then(() => this.show())
                .then(() => (0, P.gw)(i))
                .then(() => this.hide())
                .then(() => {
                  (this.content = this.getTipForState()),
                    (this.contentType = "tip");
                })
            );
          }
          getTipForState() {
            return this.bell.state === Ii.STATES.UNSUBSCRIBED
              ? this.bell.options.text["tip.state.unsubscribed"]
              : this.bell.state === Ii.STATES.SUBSCRIBED
              ? this.bell.options.text["tip.state.subscribed"]
              : this.bell.state === Ii.STATES.BLOCKED
              ? this.bell.options.text["tip.state.blocked"]
              : "";
          }
          enqueue(e) {
            return (
              this.queued.push(gt.decodeHtmlEntities(e)),
              new Promise((e) => {
                this.bell.badge.shown
                  ? this.bell.badge
                      .hide()
                      .then(() => this.bell.badge.increment())
                      .then(() => this.bell.badge.show())
                      .then(e)
                  : (this.bell.badge.increment(),
                    this.bell.initialized
                      ? this.bell.badge.show().then(e)
                      : e());
              })
            );
          }
          dequeue(e) {
            const t = this.queued.pop(e);
            return new Promise((e) => {
              this.bell.badge.shown
                ? this.bell.badge
                    .hide()
                    .then(() => this.bell.badge.decrement())
                    .then((e) =>
                      e > 0 ? this.bell.badge.show() : Promise.resolve(this)
                    )
                    .then(e(t))
                : (this.bell.badge.decrement(), e(t));
            });
          }
        }
        class Si extends fi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher-button",
              void 0,
              void 0,
              "onesignal-bell-launcher-button-active",
              void 0,
              "shown",
              ""
            ),
              (this.bell = e),
              (this.events = { mouse: "bell.launcher.button.mouse" });
            const t = this.element;
            t &&
              (t.addEventListener(
                "touchstart",
                () => {
                  this.onHovering(), this.onTap();
                },
                { passive: !0 }
              ),
              t.addEventListener("mouseenter", () => {
                this.onHovering();
              }),
              t.addEventListener("mouseleave", () => {
                this.onHovered();
              }),
              t.addEventListener(
                "touchmove",
                () => {
                  this.onHovered();
                },
                { passive: !0 }
              ),
              t.addEventListener("mousedown", () => {
                this.onTap();
              }),
              t.addEventListener("mouseup", () => {
                this.onEndTap();
              }),
              t.addEventListener("click", () => {
                this.onHovered(), this.onClick();
              }));
          }
          onHovering() {
            (ht.isEmpty(this.events.mouse) ||
              "out" === ht.getLast(this.events.mouse)) &&
              ve.Z.trigger(Ii.EVENTS.HOVERING),
              ht.put(this.events.mouse, "over");
          }
          onHovered() {
            ht.put(this.events.mouse, "out"), ve.Z.trigger(Ii.EVENTS.HOVERED);
          }
          onTap() {
            this.pulse(), this.activate(), this.bell.badge.activate();
          }
          onEndTap() {
            this.inactivate(), this.bell.badge.inactivate();
          }
          onClick() {
            if (
              (ve.Z.trigger(Ii.EVENTS.BELL_CLICK),
              ve.Z.trigger(Ii.EVENTS.LAUNCHER_CLICK),
              this.bell.message.shown &&
                this.bell.message.contentType == bi.TYPES.MESSAGE)
            )
              return;
            const e = ht.getLast("subscription.optedOut");
            return (
              this.bell.unsubscribed
                ? e
                  ? this.bell.launcher.activateIfInactive().then(() => {
                      this.bell.showDialogProcedure();
                    })
                  : (Oi.registerForPushNotifications(),
                    (this.bell._ignoreSubscriptionState = !0),
                    OneSignal.emitter.once(
                      OneSignal.EVENTS.SUBSCRIPTION_CHANGED,
                      () => {
                        this.bell.message
                          .display(
                            bi.TYPES.MESSAGE,
                            this.bell.options.text["message.action.subscribed"],
                            bi.TIMEOUT
                          )
                          .then(() => {
                            (this.bell._ignoreSubscriptionState = !1),
                              this.bell.launcher.inactivate();
                          });
                      }
                    ))
                : (this.bell.subscribed || this.bell.blocked) &&
                  this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure();
                  }),
              this.bell.message.hide()
            );
          }
          pulse() {
            (0, P.tf)(".pulse-ring"),
              this.element &&
                (0, P.IM)(
                  this.element,
                  "beforeend",
                  '<div class="pulse-ring"></div>'
                ),
              this.bell.setCustomColorsIfSpecified();
          }
        }
        class yi extends mi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher-dialog",
              "onesignal-bell-launcher-dialog-opened",
              void 0,
              "hidden",
              ["opacity", "transform"],
              ".onesignal-bell-launcher-dialog-body"
            ),
              (this.bell = e),
              (this.subscribeButtonId =
                "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button"),
              (this.unsubscribeButtonId =
                "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button"),
              (this.notificationIcons = null);
          }
          show() {
            return this.updateBellLauncherDialogBody().then(() => super.show());
          }
          get subscribeButtonSelectorId() {
            return "subscribe-button";
          }
          get unsubscribeButtonSelectorId() {
            return "unsubscribe-button";
          }
          get subscribeButton() {
            return this.element
              ? this.element.querySelector("#" + this.subscribeButtonSelectorId)
              : null;
          }
          get unsubscribeButton() {
            return this.element
              ? this.element.querySelector(
                  "#" + this.unsubscribeButtonSelectorId
                )
              : null;
          }
          updateBellLauncherDialogBody() {
            return OneSignal.context.subscriptionManager
              .isPushNotificationsEnabled()
              .then((e) => {
                this.nestedContentSelector &&
                  (0, P.jI)(this.nestedContentSelector);
                let t = "Nothing to show.",
                  i = "";
                if (
                  (this.bell.options.showCredit &&
                    (i =
                      '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'),
                  (this.bell.state === Ii.STATES.SUBSCRIBED && !0 === e) ||
                    (this.bell.state === Ii.STATES.UNSUBSCRIBED && !1 === e))
                ) {
                  let e = "";
                  const n = (0, P.S6)(this.notificationIcons);
                  e =
                    "default-icon" != n
                      ? `<div class="push-notification-icon"><img src="${n}"></div>`
                      : '<div class="push-notification-icon push-notification-icon-default"></div>';
                  let o = "";
                  (o =
                    this.bell.state !== Ii.STATES.SUBSCRIBED
                      ? `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.subscribe"]}</button>`
                      : `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.unsubscribe"]}</button>`),
                    (t = `<h1>${this.bell.options.text["dialog.main.title"]}</h1><div class="divider"></div><div class="push-notification">${e}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${o}</div>${i}`);
                } else if (this.bell.state === Ii.STATES.BLOCKED) {
                  let e = null;
                  "chrome" === (0, l.M)().name
                    ? (0, l.M)().mobile ||
                      (0, l.M)().tablet ||
                      (e = "/bell/chrome-unblock.jpg")
                    : "firefox" === (0, l.M)().name
                    ? (e = "/bell/firefox-unblock.jpg")
                    : "safari" == (0, l.M)().name
                    ? (e = "/bell/safari-unblock.jpg")
                    : "msedge" === (0, l.M)().name &&
                      (e = "/bell/edge-unblock.png");
                  let n = "";
                  e &&
                    ((e = g.Z.getOneSignalStaticResourcesUrl() + e),
                    (n = `<a href="${e}" target="_blank"><img src="${e}"></a></div>`)),
                    ((0, l.M)().mobile || (0, l.M)().tablet) &&
                      "chrome" === (0, l.M)().name &&
                      (n =
                        "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"),
                    (t = `<h1>${this.bell.options.text["dialog.blocked.title"]}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text["dialog.blocked.message"]}</p>${n}</div>${i}`);
                }
                this.nestedContentSelector &&
                  (0, P.IM)(this.nestedContentSelector, "beforeend", t),
                  this.subscribeButton &&
                    this.subscribeButton.addEventListener("click", () => {
                      (OneSignal.__doNotShowWelcomeNotification = !1),
                        ve.Z.trigger(Ii.EVENTS.SUBSCRIBE_CLICK);
                    }),
                  this.unsubscribeButton &&
                    this.unsubscribeButton.addEventListener("click", () =>
                      ve.Z.trigger(Ii.EVENTS.UNSUBSCRIBE_CLICK)
                    ),
                  this.bell.setCustomColorsIfSpecified();
              });
          }
        }
        class wi extends fi {
          constructor(e) {
            super(
              ".onesignal-bell-launcher",
              "onesignal-bell-launcher-active",
              void 0,
              void 0,
              "onesignal-bell-launcher-inactive",
              "hidden",
              "active"
            ),
              (this.bell = e),
              (this.wasInactive = !1);
          }
          resize(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.element)
                throw new InvalidStateError(mt.MissingDomElement);
              if (
                ("small" === e &&
                  (0, P.Uj)(this.element, "onesignal-bell-launcher-sm")) ||
                ("medium" === e &&
                  (0, P.Uj)(this.element, "onesignal-bell-launcher-md")) ||
                ("large" === e &&
                  (0, P.Uj)(this.element, "onesignal-bell-launcher-lg"))
              )
                return Promise.resolve(this);
              if (
                ((0, P.BH)(this.element, "onesignal-bell-launcher-sm"),
                (0, P.BH)(this.element, "onesignal-bell-launcher-md"),
                (0, P.BH)(this.element, "onesignal-bell-launcher-lg"),
                "small" === e)
              )
                (0, P.bF)(this.element, "onesignal-bell-launcher-sm");
              else if ("medium" === e)
                (0, P.bF)(this.element, "onesignal-bell-launcher-md");
              else {
                if ("large" !== e)
                  throw new Error("Invalid OneSignal bell size " + e);
                (0, P.bF)(this.element, "onesignal-bell-launcher-lg");
              }
              return this.shown
                ? yield new Promise((e) => {
                    if (0 == this.targetTransitionEvents.length) return e(this);
                    {
                      const t = setTimeout(() => {
                        E.Z.debug(
                          `Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`
                        );
                      }, this.transitionCheckTimeout);
                      (0, P.IH)(
                        this.element,
                        "transitionend",
                        (i, n) => {
                          if (
                            i.target === this.element &&
                            (0, P.r3)(
                              this.targetTransitionEvents,
                              i.propertyName
                            )
                          )
                            return clearTimeout(t), n(), e(this);
                        },
                        !0
                      );
                    }
                  })
                : this;
            });
          }
          activateIfInactive() {
            return this.inactive
              ? ((this.wasInactive = !0), this.activate())
              : (0, P.Ld)();
          }
          inactivateIfWasInactive() {
            return this.wasInactive
              ? ((this.wasInactive = !1), this.inactivate())
              : (0, P.Ld)();
          }
          clearIfWasInactive() {
            this.wasInactive = !1;
          }
          inactivate() {
            return this.bell.message.hide().then(() =>
              this.bell.badge.content.length > 0
                ? this.bell.badge
                    .hide()
                    .then(() =>
                      Promise.all([super.inactivate(), this.resize("small")])
                    )
                    .then(() => this.bell.badge.show())
                : Promise.all([super.inactivate(), this.resize("small")])
            );
          }
          activate() {
            return this.bell.badge.content.length > 0
              ? this.bell.badge
                  .hide()
                  .then(() =>
                    Promise.all([
                      super.activate(),
                      this.resize(this.bell.options.size),
                    ])
                  )
              : Promise.all([
                  super.activate(),
                  this.resize(this.bell.options.size),
                ]);
          }
        }
        class Ii {
          static get EVENTS() {
            return {
              STATE_CHANGED: "notifyButtonStateChange",
              LAUNCHER_CLICK: "notifyButtonLauncherClick",
              BELL_CLICK: "notifyButtonButtonClick",
              SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
              UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
              HOVERING: "notifyButtonHovering",
              HOVERED: "notifyButtonHover",
            };
          }
          static get STATES() {
            return {
              UNINITIALIZED: "uninitialized",
              SUBSCRIBED: "subscribed",
              UNSUBSCRIBED: "unsubscribed",
              BLOCKED: "blocked",
            };
          }
          static get TEXT_SUBS() {
            return {
              "prompt.native.grant": {
                default: "Allow",
                chrome: "Allow",
                firefox: "Always Receive Notifications",
                safari: "Allow",
              },
            };
          }
          constructor(e, t) {
            (this.state = Ii.STATES.UNINITIALIZED),
              (this._ignoreSubscriptionState = !1),
              (this.hovering = !1),
              (this.initialized = !1),
              (this.DEFAULT_SIZE = "medium"),
              (this.DEFAULT_POSITION = "bottom-right"),
              (this.DEFAULT_THEME = "default"),
              (this.options = {
                enable: e.enable || !1,
                size: e.size || this.DEFAULT_SIZE,
                position: e.position || this.DEFAULT_POSITION,
                theme: e.theme || this.DEFAULT_THEME,
                showLauncherAfter: e.showLauncherAfter || 10,
                showBadgeAfter: e.showBadgeAfter || 300,
                text: this.setDefaultTextOptions(e.text || {}),
                prenotify: e.prenotify,
                showCredit: e.showCredit,
                colors: e.colors,
                offset: e.offset,
              }),
              t && (this._launcher = t),
              this.options.enable &&
                (this.validateOptions(this.options),
                (this.state = Ii.STATES.UNINITIALIZED),
                (this._ignoreSubscriptionState = !1),
                this.installEventHooks(),
                this.updateState());
          }
          showDialogProcedure() {
            this.dialog.shown ||
              this.dialog.show().then(() => {
                (0, P.IH)(
                  document,
                  "click",
                  (e, t) => {
                    this.dialog.element.contains(e.target) ||
                      (t(),
                      this.dialog.shown &&
                        this.dialog.hide().then(() => {
                          this.launcher.inactivateIfWasInactive();
                        }));
                  },
                  !0
                );
              });
          }
          validateOptions(e) {
            if (!e.size || !(0, P.r3)(["small", "medium", "large"], e.size))
              throw new Error(
                `Invalid size ${e.size} for notify button. Choose among 'small', 'medium', or 'large'.`
              );
            if (
              !e.position ||
              !(0, P.r3)(["bottom-left", "bottom-right"], e.position)
            )
              throw new Error(
                `Invalid position ${e.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`
              );
            if (!e.theme || !(0, P.r3)(["default", "inverse"], e.theme))
              throw new Error(
                `Invalid theme ${e.theme} for notify button. Choose either 'default', or 'inverse'.`
              );
            if (!e.showLauncherAfter || e.showLauncherAfter < 0)
              throw new Error(
                `Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`
              );
            if (!e.showBadgeAfter || e.showBadgeAfter < 0)
              throw new Error(
                `Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`
              );
          }
          setDefaultTextOptions(e) {
            return {
              "tip.state.unsubscribed":
                e["tip.state.unsubscribed"] || "Subscribe to notifications",
              "tip.state.subscribed":
                e["tip.state.subscribed"] ||
                "You're subscribed to notifications",
              "tip.state.blocked":
                e["tip.state.blocked"] || "You've blocked notifications",
              "message.prenotify":
                e["message.prenotify"] || "Click to subscribe to notifications",
              "message.action.subscribed":
                e["message.action.subscribed"] || "Thanks for subscribing!",
              "message.action.resubscribed":
                e["message.action.resubscribed"] ||
                "You're subscribed to notifications",
              "message.action.subscribing":
                e["message.action.subscribing"] ||
                "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
              "message.action.unsubscribed":
                e["message.action.unsubscribed"] ||
                "You won't receive notifications again",
              "dialog.main.title":
                e["dialog.main.title"] || "Manage Site Notifications",
              "dialog.main.button.subscribe":
                e["dialog.main.button.subscribe"] || "SUBSCRIBE",
              "dialog.main.button.unsubscribe":
                e["dialog.main.button.unsubscribe"] || "UNSUBSCRIBE",
              "dialog.blocked.title":
                e["dialog.blocked.title"] || "Unblock Notifications",
              "dialog.blocked.message":
                e["dialog.blocked.message"] ||
                "Follow these instructions to allow notifications:",
            };
          }
          installEventHooks() {
            nn.emitter.on(Ii.EVENTS.SUBSCRIBE_CLICK, () => {
              (this.dialog.subscribeButton.disabled = !0),
                (this._ignoreSubscriptionState = !0),
                nn.User.PushSubscription.optIn()
                  .then(
                    () => (
                      (this.dialog.subscribeButton.disabled = !1),
                      this.dialog.hide()
                    )
                  )
                  .then(() =>
                    this.message.display(
                      bi.TYPES.MESSAGE,
                      this.options.text["message.action.resubscribed"],
                      bi.TIMEOUT
                    )
                  )
                  .then(
                    () => (
                      (this._ignoreSubscriptionState = !1),
                      this.launcher.clearIfWasInactive(),
                      this.launcher.inactivate()
                    )
                  )
                  .then(() => this.updateState())
                  .catch((e) => {
                    throw e;
                  });
            }),
              nn.emitter.on(Ii.EVENTS.UNSUBSCRIBE_CLICK, () => {
                (this.dialog.unsubscribeButton.disabled = !0),
                  nn.User.PushSubscription.optOut()
                    .then(
                      () => (
                        (this.dialog.unsubscribeButton.disabled = !1),
                        this.dialog.hide()
                      )
                    )
                    .then(
                      () => (
                        this.launcher.clearIfWasInactive(),
                        this.launcher.activate()
                      )
                    )
                    .then(() =>
                      this.message.display(
                        bi.TYPES.MESSAGE,
                        this.options.text["message.action.unsubscribed"],
                        bi.TIMEOUT
                      )
                    )
                    .then(() => this.updateState());
              }),
              nn.emitter.on(Ii.EVENTS.HOVERING, () => {
                (this.hovering = !0),
                  this.launcher.activateIfInactive(),
                  this.message.shown || this.dialog.shown
                    ? (this.hovering = !1)
                    : this.message.contentType !== bi.TYPES.MESSAGE
                    ? new Promise((e) => {
                        if (this.message.queued.length > 0)
                          return this.message.dequeue().then((t) => {
                            (this.message.content = t),
                              (this.message.contentType = bi.TYPES.QUEUED),
                              e();
                          });
                        (this.message.content = gt.decodeHtmlEntities(
                          this.message.getTipForState()
                        )),
                          (this.message.contentType = bi.TYPES.TIP),
                          e();
                      })
                        .then(() => this.message.show())
                        .then(() => {
                          this.hovering = !1;
                        })
                        .catch((e) => {
                          E.Z.error(e);
                        })
                    : (this.hovering = !1);
              }),
              nn.emitter.on(Ii.EVENTS.HOVERED, () => {
                this.message.contentType !== bi.TYPES.MESSAGE &&
                  this.dialog.hidden &&
                  (this.hovering &&
                    ((this.hovering = !1),
                    this.message
                      .waitUntilShown()
                      .then(() => (0, P.gw)(bi.TIMEOUT))
                      .then(() => this.message.hide())
                      .then(() => {
                        this.launcher.wasInactive &&
                          this.dialog.hidden &&
                          (this.launcher.inactivate(),
                          (this.launcher.wasInactive = !1));
                      })),
                  this.message.shown &&
                    this.message.hide().then(() => {
                      this.launcher.wasInactive &&
                        this.dialog.hidden &&
                        (this.launcher.inactivate(),
                        (this.launcher.wasInactive = !1));
                    }));
              }),
              nn.emitter.on(nn.EVENTS.SUBSCRIPTION_CHANGED, (e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  if (
                    e.current.optedIn &&
                    (this.badge.shown &&
                      this.options.prenotify &&
                      this.badge.hide(),
                    null === this.dialog.notificationIcons)
                  ) {
                    const e = yield bt.getNotificationIcons();
                    this.dialog.notificationIcons = e;
                  }
                  const t =
                    yield nn.context.permissionManager.getPermissionStatus();
                  let i;
                  (i = e.current.optedIn
                    ? Ii.STATES.SUBSCRIBED
                    : t === Ut.Denied
                    ? Ii.STATES.BLOCKED
                    : Ii.STATES.UNSUBSCRIBED),
                    this.setState(i, this._ignoreSubscriptionState);
                })
              ),
              nn.emitter.on(Ii.EVENTS.STATE_CHANGED, (e) => {
                this.launcher.element &&
                  (e.to === Ii.STATES.SUBSCRIBED
                    ? this.launcher.inactivate()
                    : (e.to === Ii.STATES.UNSUBSCRIBED || Ii.STATES.BLOCKED) &&
                      this.launcher.activate());
              }),
              nn.emitter.on(
                nn.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                () => {
                  this.updateState();
                }
              );
          }
          addDefaultClasses() {
            const e = this.container;
            if ("bottom-left" === this.options.position)
              e && (0, P.bF)(e, "onesignal-bell-container-bottom-left"),
                (0, P.bF)(
                  this.launcher.selector,
                  "onesignal-bell-launcher-bottom-left"
                );
            else {
              if ("bottom-right" !== this.options.position)
                throw new Error(
                  `Invalid OneSignal notify button position ${this.options.position}`
                );
              e && (0, P.bF)(e, "onesignal-bell-container-bottom-right"),
                (0, P.bF)(
                  this.launcher.selector,
                  "onesignal-bell-launcher-bottom-right"
                );
            }
            if ("default" === this.options.theme)
              (0, P.bF)(
                this.launcher.selector,
                "onesignal-bell-launcher-theme-default"
              );
            else {
              if ("inverse" !== this.options.theme)
                throw new Error(
                  `Invalid OneSignal notify button theme ${this.options.theme}`
                );
              (0, P.bF)(
                this.launcher.selector,
                "onesignal-bell-launcher-theme-inverse"
              );
            }
          }
          create() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.options.enable) return;
              if (
                0 !==
                (yield nn.context.dynamicResourceLoader.loadSdkStylesheet())
              )
                return void E.Z.debug(
                  "Not showing notify button because styles failed to load."
                );
              this.container && (0, P.tf)("#onesignal-bell-container"),
                (0, P.IM)(
                  "body",
                  "beforeend",
                  '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'
                ),
                this.container &&
                  (0, P.IM)(
                    this.container,
                    "beforeend",
                    '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'
                  ),
                (0, P.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-button"></div>'
                ),
                (0, P.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-badge"></div>'
                ),
                (0, P.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-message"></div>'
                ),
                (0, P.IM)(
                  this.message.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-message-body"></div>'
                ),
                (0, P.IM)(
                  this.launcher.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-dialog"></div>'
                ),
                (0, P.IM)(
                  this.dialog.selector,
                  "beforeend",
                  '<div class="onesignal-bell-launcher-dialog-body"></div>'
                ),
                (0, P.IM)(
                  this.button.selector,
                  "beforeend",
                  '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>'
                );
              const e =
                  yield nn.context.subscriptionManager.isPushNotificationsEnabled(),
                t =
                  (gi.wasPromptOfTypeDismissed(ii.Push),
                  e ? "small" : this.options.size || this.DEFAULT_SIZE);
              yield this.launcher.resize(t),
                this.addDefaultClasses(),
                this.applyOffsetIfSpecified(),
                this.setCustomColorsIfSpecified(),
                this.patchSafariSvgFilterBug(),
                E.Z.info("Showing the notify button."),
                yield (e ? this.launcher.inactivate() : (0, P.Ld)())
                  .then(() =>
                    e && null === this.dialog.notificationIcons
                      ? bt.getNotificationIcons().then((e) => {
                          this.dialog.notificationIcons = e;
                        })
                      : (0, P.Ld)()
                  )
                  .then(() => (0, P.gw)(this.options.showLauncherAfter || 0))
                  .then(() => this.launcher.show())
                  .then(() => (0, P.gw)(this.options.showBadgeAfter || 0))
                  .then(() =>
                    this.options.prenotify && !e && nn._isNewVisitor
                      ? this.message
                          .enqueue(this.options.text["message.prenotify"])
                          .then(() => this.badge.show())
                      : (0, P.Ld)()
                  )
                  .then(() => (this.initialized = !0));
            });
          }
          patchSafariSvgFilterBug() {
            if (
              !(
                "safari" == (0, l.M)().name && Number((0, l.M)().version) >= 9.1
              )
            ) {
              const e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));",
                t = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
                i = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
              this.graphic.setAttribute(
                "style",
                `filter: ${e}; -webkit-filter: ${e};`
              ),
                this.badge.element.setAttribute(
                  "style",
                  `filter: ${t}; -webkit-filter: ${t};`
                ),
                this.dialog.element.setAttribute(
                  "style",
                  `filter: ${i}; -webkit-filter: ${i};`
                );
            }
            "safari" == (0, l.M)().name &&
              this.badge.element.setAttribute("style", "display: none;");
          }
          applyOffsetIfSpecified() {
            const e = this.options.offset;
            if (e) {
              const t = this.launcher.element;
              if (!t) return void E.Z.error("Could not find bell dom element");
              (t.style.cssText = ""),
                e.bottom && (t.style.cssText += `bottom: ${e.bottom};`),
                "bottom-right" === this.options.position
                  ? e.right && (t.style.cssText += `right: ${e.right};`)
                  : "bottom-left" === this.options.position &&
                    e.left &&
                    (t.style.cssText += `left: ${e.left};`);
            }
          }
          setCustomColorsIfSpecified() {
            const e = this.dialog.element.querySelector("button.action"),
              t = this.button.element.querySelector(".pulse-ring");
            this.graphic.querySelector(".background").style.cssText = "";
            const i = this.graphic.querySelectorAll(".foreground");
            for (let e = 0; e < i.length; e++) {
              i[e].style.cssText = "";
            }
            if (
              ((this.graphic.querySelector(".stroke").style.cssText = ""),
              (this.badge.element.style.cssText = ""),
              e && ((e.style.cssText = ""), (e.style.cssText = "")),
              t && (t.style.cssText = ""),
              this.options.colors)
            ) {
              const i = this.options.colors;
              if (
                (i["circle.background"] &&
                  (this.graphic.querySelector(
                    ".background"
                  ).style.cssText += `fill: ${i["circle.background"]}`),
                i["circle.foreground"])
              ) {
                const e = this.graphic.querySelectorAll(".foreground");
                for (let t = 0; t < e.length; t++) {
                  e[t].style.cssText += `fill: ${i["circle.foreground"]}`;
                }
                this.graphic.querySelector(
                  ".stroke"
                ).style.cssText += `stroke: ${i["circle.foreground"]}`;
              }
              i["badge.background"] &&
                (this.badge.element.style.cssText += `background: ${i["badge.background"]}`),
                i["badge.bordercolor"] &&
                  (this.badge.element.style.cssText += `border-color: ${i["badge.bordercolor"]}`),
                i["badge.foreground"] &&
                  (this.badge.element.style.cssText += `color: ${i["badge.foreground"]}`),
                e &&
                  (i["dialog.button.background"] &&
                    (this.dialog.element.querySelector(
                      "button.action"
                    ).style.cssText += `background: ${i["dialog.button.background"]}`),
                  i["dialog.button.foreground"] &&
                    (this.dialog.element.querySelector(
                      "button.action"
                    ).style.cssText += `color: ${i["dialog.button.foreground"]}`),
                  i["dialog.button.background.hovering"] &&
                    this.addCssToHead(
                      "onesignal-background-hover-style",
                      `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${i["dialog.button.background.hovering"]} !important; }`
                    ),
                  i["dialog.button.background.active"] &&
                    this.addCssToHead(
                      "onesignal-background-active-style",
                      `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${i["dialog.button.background.active"]} !important; }`
                    )),
                t &&
                  i["pulse.color"] &&
                  (this.button.element.querySelector(
                    ".pulse-ring"
                  ).style.cssText = `border-color: ${i["pulse.color"]}`);
            }
          }
          addCssToHead(e, t) {
            if (document.getElementById(e)) return;
            const i = document.createElement("style");
            (i.id = e),
              (i.type = "text/css"),
              i.appendChild(document.createTextNode(t)),
              document.head.appendChild(i);
          }
          updateState() {
            Promise.all([
              nn.context.subscriptionManager.isPushNotificationsEnabled(),
              nn.context.permissionManager.getPermissionStatus(),
            ])
              .then(([e, t]) => {
                this.setState(
                  e ? Ii.STATES.SUBSCRIBED : Ii.STATES.UNSUBSCRIBED
                ),
                  t === Ut.Denied && this.setState(Ii.STATES.BLOCKED);
              })
              .catch((e) => {
                E.Z.error(e);
              });
          }
          setState(e, t = !1) {
            const i = this.state;
            (this.state = e),
              i === e ||
                t ||
                ve.Z.trigger(Ii.EVENTS.STATE_CHANGED, { from: i, to: e });
          }
          get container() {
            return document.querySelector("#onesignal-bell-container");
          }
          get graphic() {
            return this.button.element.querySelector("svg");
          }
          get launcher() {
            return (
              this._launcher || (this._launcher = new wi(this)), this._launcher
            );
          }
          get button() {
            return this._button || (this._button = new Si(this)), this._button;
          }
          get badge() {
            return this._badge || (this._badge = new vi()), this._badge;
          }
          get message() {
            return (
              this._message || (this._message = new bi(this)), this._message
            );
          }
          get dialog() {
            return this._dialog || (this._dialog = new yi(this)), this._dialog;
          }
          get subscribed() {
            return this.state === Ii.STATES.SUBSCRIBED;
          }
          get unsubscribed() {
            return this.state === Ii.STATES.UNSUBSCRIBED;
          }
          get blocked() {
            return this.state === Ii.STATES.BLOCKED;
          }
        }
        class Oi {
          static internalInit() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              E.Z.debug("Called internalInit()"),
                yield OneSignal.context.serviceWorkerManager.installWorker();
              const e = OneSignal.context.sessionManager;
              OneSignal.emitter.on(
                OneSignal.EVENTS.SESSION_STARTED,
                e.sendOnSessionUpdateFromPage.bind(e)
              ),
                OneSignal.context.pageViewManager.incrementPageViewCount(),
                "visible" === document.visibilityState
                  ? yield Oi.sessionInit()
                  : Oi.postponeSessionInitUntilPageIsInFocus();
            });
          }
          static postponeSessionInitUntilPageIsInFocus() {
            (0, P.IH)(
              document,
              "visibilitychange",
              (e, t) => {
                "visible" === document.visibilityState &&
                  (t(), Oi.sessionInit());
              },
              !0
            );
          }
          static sessionInit() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (E.Z.debug("Called sessionInit()"),
                OneSignal._sessionInitAlreadyRunning)
              )
                return void E.Z.debug(
                  "Returning from sessionInit because it has already been called."
                );
              OneSignal._sessionInitAlreadyRunning = !0;
              try {
                yield Oi.doInitialize();
              } catch (e) {
                if (e instanceof SdkInitError) return;
                throw e;
              }
              const e =
                  yield OneSignal.context.subscriptionManager.isOptedOut(),
                t = yield fe.ZP.getSubscription();
              (t.optedOut = e),
                yield fe.ZP.setSubscription(t),
                yield Oi.handleAutoResubscribe(e);
              const i =
                yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
              yield fe.ZP.setIsPushEnabled(!!i),
                OneSignal.config.userConfig.promptOptions.autoPrompt &&
                  !e &&
                  OneSignal.context.promptsManager.spawnAutoPrompts(),
                (OneSignal._sessionInitAlreadyRunning = !1),
                yield ve.Z.trigger(OneSignal.EVENTS.SDK_INITIALIZED);
            });
          }
          static registerForPushNotifications() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield pi.registerForPush();
            });
          }
          static onSdkInitialized() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield Oi.processExpiringSubscriptions();
              (yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
                ? (OneSignal.context.sessionManager.setupSessionEventListeners(),
                  e ||
                    (yield OneSignal.context.updateManager.sendOnSessionUpdate()))
                : OneSignal.config.userConfig.promptOptions.autoPrompt ||
                  OneSignal.config.userConfig.autoResubscribe ||
                  (yield OneSignal.context.updateManager.sendOnSessionUpdate()),
                yield ve.Z.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC);
            });
          }
          static storeInitialValues() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e =
                  yield OneSignal.context.subscriptionManager.isPushNotificationsEnabled(),
                t =
                  yield OneSignal.context.permissionManager.getPermissionStatus(),
                i = yield OneSignal.context.subscriptionManager.isOptedOut();
              ht.put("subscription.optedOut", i),
                yield fe.ZP.put("Options", { key: "isPushEnabled", value: e }),
                yield fe.ZP.put("Options", {
                  key: "notificationPermission",
                  value: t,
                });
            });
          }
          static setWelcomeNotificationFlag() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (yield OneSignal.context.permissionManager.getNotificationPermission(
                OneSignal.context.appConfig.safariWebId
              )) === Ut.Granted &&
                (OneSignal.__doNotShowWelcomeNotification = !0);
            });
          }
          static establishServiceWorkerChannel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (navigator.serviceWorker && window.isSecureContext)
                try {
                  yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel();
                } catch (e) {
                  E.Z.error(e);
                }
            });
          }
          static processExpiringSubscriptions() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.context;
              E.Z.debug("Checking subscription expiration...");
              if (!(yield e.subscriptionManager.isSubscriptionExpiring()))
                return E.Z.debug("Subscription is not considered expired."), !1;
              E.Z.debug("Subscription is considered expiring.");
              const t = yield e.subscriptionManager.subscribe(1);
              return yield e.subscriptionManager.registerSubscription(t), !0;
            });
          }
          static doInitialize() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = [];
              e.push(Oi.storeInitialValues()),
                e.push(Oi.installNativePromptPermissionChangedHook()),
                e.push(Oi.setWelcomeNotificationFlag()),
                e.push(Oi.establishServiceWorkerChannel()),
                e.push(Oi.showNotifyButton()),
                e.push(Oi.showPromptsFromWebConfigEditor());
              try {
                yield Promise.all(e);
              } catch (e) {
                throw (E.Z.error(e), new SdkInitError(A.Unknown));
              }
            });
          }
          static showNotifyButton() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (b.Z.isBrowser() && !OneSignal.notifyButton) {
                (OneSignal.config.userConfig.notifyButton =
                  OneSignal.config.userConfig.notifyButton || {}),
                  OneSignal.config.userConfig.bell &&
                    ((OneSignal.config.userConfig.bell = Object.assign(
                      Object.assign({}, OneSignal.config.userConfig.bell),
                      OneSignal.config.userConfig.notifyButton
                    )),
                    (OneSignal.config.userConfig.notifyButton = Object.assign(
                      Object.assign(
                        {},
                        OneSignal.config.userConfig.notifyButton
                      ),
                      OneSignal.config.userConfig.bell
                    )));
                const e =
                  OneSignal.config.userConfig.notifyButton.displayPredicate;
                e && "function" == typeof e
                  ? OneSignal.emitter.once(
                      OneSignal.EVENTS.SDK_INITIALIZED,
                      () =>
                        (0, o.mG)(this, void 0, void 0, function* () {
                          !1 !==
                          (yield Promise.resolve(
                            OneSignal.config.userConfig.notifyButton.displayPredicate()
                          ))
                            ? ((OneSignal.notifyButton = new Ii(
                                OneSignal.config.userConfig.notifyButton
                              )),
                              OneSignal.notifyButton.create())
                            : E.Z.debug(
                                "Notify button display predicate returned false so not showing the notify button."
                              );
                        })
                    )
                  : ((OneSignal.notifyButton = new Ii(
                      OneSignal.config.userConfig.notifyButton
                    )),
                    OneSignal.notifyButton.create());
              }
            });
          }
          static showPromptsFromWebConfigEditor() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = OneSignal.config;
              e.userConfig.promptOptions &&
                (yield new ut(
                  e.userConfig.promptOptions.customlink
                ).initialize());
            });
          }
          static installNativePromptPermissionChangedHook() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                if (navigator.permissions) {
                  (yield navigator.permissions.query({
                    name: "notifications",
                  })).onchange = function () {
                    (0, P.bJ)();
                  };
                }
              } catch (e) {
                E.Z.warn(
                  `Could not install native notification permission change hook w/ error: ${e}`
                );
              }
            });
          }
          static saveInitOptions() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = [],
                t = OneSignal.config.userConfig.persistNotification;
              e.push(
                fe.ZP.put("Options", {
                  key: "persistNotification",
                  value: null == t || t,
                })
              );
              const i = OneSignal.config.userConfig.webhooks;
              return (
                [
                  "notification.willDisplay",
                  "notification.clicked",
                  "notification.dismissed",
                ].forEach((t) => {
                  i && i[t]
                    ? e.push(
                        fe.ZP.put("Options", {
                          key: `webhooks.${t}`,
                          value: i[t],
                        })
                      )
                    : e.push(
                        fe.ZP.put("Options", {
                          key: `webhooks.${t}`,
                          value: !1,
                        })
                      );
                }),
                i && i.cors
                  ? e.push(
                      fe.ZP.put("Options", { key: "webhooks.cors", value: !0 })
                    )
                  : e.push(
                      fe.ZP.put("Options", { key: "webhooks.cors", value: !1 })
                    ),
                OneSignal.config.userConfig.notificationClickHandlerMatch
                  ? e.push(
                      fe.ZP.put("Options", {
                        key: "notificationClickHandlerMatch",
                        value:
                          OneSignal.config.userConfig
                            .notificationClickHandlerMatch,
                      })
                    )
                  : e.push(
                      fe.ZP.put("Options", {
                        key: "notificationClickHandlerMatch",
                        value: "exact",
                      })
                    ),
                OneSignal.config.userConfig.notificationClickHandlerAction
                  ? e.push(
                      fe.ZP.put("Options", {
                        key: "notificationClickHandlerAction",
                        value:
                          OneSignal.config.userConfig
                            .notificationClickHandlerAction,
                      })
                    )
                  : e.push(
                      fe.ZP.put("Options", {
                        key: "notificationClickHandlerAction",
                        value: "navigate",
                      })
                    ),
                Promise.all(e)
              );
            });
          }
          static initSaveState(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield bt.getAppId(),
                i = OneSignal.config;
              yield fe.ZP.put("Ids", { type: "appId", id: t });
              const n = e || i.siteName || document.title || "Notification";
              yield fe.ZP.put("Options", { key: "pageTitle", value: n }),
                E.Z.info(`OneSignal: Set pageTitle to be '${n}'.`);
            });
          }
          static handleAutoResubscribe(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (E.Z.info("handleAutoResubscribe", {
                  autoResubscribe: OneSignal.config.userConfig.autoResubscribe,
                  isOptedOut: e,
                }),
                OneSignal.config.userConfig.autoResubscribe && !e)
              ) {
                (yield OneSignal.context.permissionManager.getNotificationPermission(
                  OneSignal.context.appConfig.safariWebId
                )) == Ut.Granted && (yield pi.registerForPush());
              }
            });
          }
          static polyfillSafariFetch() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if ("safari" == (0, l.M)().name && void 0 === window.fetch) {
                E.Z.debug("Loading fetch polyfill for Safari..");
                try {
                  yield new de().loadFetchPolyfill(),
                    E.Z.debug("Done loading fetch polyfill.");
                } catch (e) {
                  E.Z.debug("Error loading fetch polyfill:", e);
                }
              }
            });
          }
          static errorIfInitAlreadyCalled() {
            if (OneSignal._initCalled)
              throw new SdkInitError(A.MultipleInitialization);
            OneSignal._initCalled = !0;
          }
        }
        var Ei;
        !(function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NoDeviceId = 1)] = "NoDeviceId"),
            (e[(e.NoEmailSet = 2)] = "NoEmailSet"),
            (e[(e.NoSMSSet = 3)] = "NoSMSSet"),
            (e[(e.OptedOut = 4)] = "OptedOut");
        })(Ei || (Ei = {}));
        class NotSubscribedError extends I.Z {
          constructor(e) {
            let t;
            switch (e) {
              case Ei.Unknown || Ei.NoDeviceId:
                t =
                  "This operation can only be performed after the user is subscribed.";
                break;
              case Ei.NoEmailSet:
                t = "No email is currently set.";
                break;
              case Ei.NoSMSSet:
                t = "No sms is currently set.";
                break;
              case Ei.OptedOut:
                t =
                  "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.";
            }
            super(t),
              (this.reason = Ei[e]),
              Object.setPrototypeOf(this, NotSubscribedError.prototype);
          }
        }
        class Ci {
          constructor(e) {
            (this.context = e),
              (this.slidedownQueue = []),
              (this.isSlidedownShowing = !1);
          }
          checkIfSlidedownShouldBeShown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              const i =
                (yield OneSignal.context.permissionManager.getPermissionStatus()) ===
                Ut.Denied;
              let n;
              const o =
                  yield OneSignal.context.subscriptionManager.getSubscriptionState(),
                { subscribed: s, optedOut: r } = o,
                a =
                  null === (t = e.slidedownPromptOptions) || void 0 === t
                    ? void 0
                    : t.type;
              let l = !1;
              if ((a && (l = J.isSlidedownPushDependent(a)), l)) {
                if (s)
                  return (
                    !!e.isInUpdateMode ||
                    (E.Z.info(new AlreadySubscribedError()), !1)
                  );
                if (((n = gi.wasPromptOfTypeDismissed(ii.Push)), r))
                  throw new NotSubscribedError(Ei.OptedOut);
                if (i)
                  return (
                    E.Z.info(new PushPermissionNotGrantedError(Gt.Blocked)), !1
                  );
              } else {
                if (!e.force) {
                  const e = yield OneSignal.coreDirector.hasSms(),
                    t = yield OneSignal.coreDirector.hasEmail(),
                    i = e && t;
                  if (e && a === G.Sms) return E.Z.info(new di(G.Sms)), !1;
                  if (t && a === G.Email) return E.Z.info(new di(G.Email)), !1;
                  if (i && a === G.SmsAndEmail)
                    return E.Z.info(new di(G.SmsAndEmail)), !1;
                }
                n = gi.wasPromptOfTypeDismissed(ii.NonPush);
              }
              return (
                !(n && !e.force && !e.isInUpdateMode) ||
                (E.Z.info(new PermissionMessageDismissedError(a)), !1)
              );
            });
          }
          registerForPush() {
            Oi.registerForPushNotifications();
          }
          handleAllowForCategoryType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.slidedown)
                throw new I.Z(
                  "SlidedownManager: handleAllowForCategoryType: this.slidedown is undefined"
                );
              const e = Yt.getValuesFromTaggingContainer();
              this.context.tagManager.storeTagValuesToUpdate(e),
                this.registerForPush(),
                yield this.context.tagManager.sendTags(!0);
            });
          }
          handleAllowForEmailType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t, i;
              if (!this.slidedown)
                throw new I.Z(
                  "SlidedownManager: handleAllowForEmailType: this.slidedown is undefined"
                );
              const n =
                  null === (e = this.slidedown.channelCaptureContainer) ||
                  void 0 === e
                    ? void 0
                    : e.emailInputFieldIsValid,
                o =
                  null === (t = this.slidedown.channelCaptureContainer) ||
                  void 0 === t
                    ? void 0
                    : t.isEmailInputFieldEmpty();
              if (!n || o) throw new ri(ti.InvalidEmail);
              const s =
                null === (i = this.slidedown.channelCaptureContainer) ||
                void 0 === i
                  ? void 0
                  : i.getValueFromEmailInput();
              this.updateEmail(s);
            });
          }
          handleAllowForSmsType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t, i;
              if (!this.slidedown)
                throw new I.Z(
                  "SlidedownManager: handleAllowForSmsType: this.slidedown is undefined"
                );
              const n =
                  null === (e = this.slidedown.channelCaptureContainer) ||
                  void 0 === e
                    ? void 0
                    : e.smsInputFieldIsValid,
                o =
                  null === (t = this.slidedown.channelCaptureContainer) ||
                  void 0 === t
                    ? void 0
                    : t.isSmsInputFieldEmpty();
              if (!n || o) throw new ri(ti.InvalidSms);
              const s =
                null === (i = this.slidedown.channelCaptureContainer) ||
                void 0 === i
                  ? void 0
                  : i.getValueFromSmsInput();
              this.updateSMS(s);
            });
          }
          handleAllowForSmsAndEmailType() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t, i, n, o, s;
              if (!this.slidedown)
                throw new I.Z(
                  "SlidedownManager: handleAllowForSmsAndEmailType: this.slidedown is undefined"
                );
              const r =
                  null === (e = this.slidedown.channelCaptureContainer) ||
                  void 0 === e
                    ? void 0
                    : e.smsInputFieldIsValid,
                a =
                  null === (t = this.slidedown.channelCaptureContainer) ||
                  void 0 === t
                    ? void 0
                    : t.emailInputFieldIsValid,
                l =
                  null === (i = this.slidedown.channelCaptureContainer) ||
                  void 0 === i
                    ? void 0
                    : i.isEmailInputFieldEmpty(),
                d =
                  null === (n = this.slidedown.channelCaptureContainer) ||
                  void 0 === n
                    ? void 0
                    : n.isSmsInputFieldEmpty();
              if ((!r && !a) || (l && d)) throw new ri(ti.InvalidEmailAndSms);
              const c =
                  null === (o = this.slidedown.channelCaptureContainer) ||
                  void 0 === o
                    ? void 0
                    : o.getValueFromEmailInput(),
                u =
                  null === (s = this.slidedown.channelCaptureContainer) ||
                  void 0 === s
                    ? void 0
                    : s.getValueFromSmsInput();
              if (!a) throw new ri(ti.InvalidEmail);
              if ((l || this.updateEmail(c), !r)) throw new ri(ti.InvalidSms);
              d || this.updateSMS(u);
            });
          }
          updateEmail(e) {
            e && OneSignal.User.addEmail(e);
          }
          updateSMS(e) {
            e && OneSignal.User.addSms(e);
          }
          showConfirmationToast() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.slidedown)
                throw new I.Z(
                  "SlidedownManager: showConfirmationToast: this.slidedown is undefined"
                );
              const e = this.slidedown.options.text.confirmMessage;
              if (!e) return;
              yield C(1e3);
              const t = new li(e);
              yield t.show(),
                yield C(5e3),
                t.close(),
                li.triggerSlidedownEvent(li.EVENTS.CLOSED);
            });
          }
          mountAuxiliaryContainers(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              switch (
                null === (t = e.slidedownPromptOptions) || void 0 === t
                  ? void 0
                  : t.type
              ) {
                case G.Category:
                  this.mountTaggingContainer(e);
                  break;
                case G.Email:
                case G.Sms:
                case G.SmsAndEmail:
                  yield this.mountChannelCaptureContainer(e);
              }
            });
          }
          mountTaggingContainer(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              f.Q.logMethodCall("mountTaggingContainer");
              try {
                let i = {};
                const n = new Yt(),
                  o =
                    null === (t = e.slidedownPromptOptions) || void 0 === t
                      ? void 0
                      : t.categories;
                if (!o) throw new Error("Categories not defined");
                const s = OneSignal.coreDirector.getPropertiesModel(),
                  r = null == s ? void 0 : s.data.tags;
                e.isInUpdateMode && r
                  ? (this.context.tagManager.storeRemotePlayerTags(r),
                    (i = z.convertTagsApiToBooleans(r)))
                  : z.markAllTagsAsSpecified(o, !0),
                  n.mount(o, i);
              } catch (e) {
                E.Z.error(
                  "OneSignal: Attempted to create tagging container with error",
                  e
                );
              }
            });
          }
          mountChannelCaptureContainer(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Q.logMethodCall("mountChannelCaptureContainer");
              try {
                if (e.slidedownPromptOptions) {
                  const t = new si(e.slidedownPromptOptions);
                  t.mount(),
                    this.slidedown &&
                      (this.slidedown.channelCaptureContainer = t);
                }
              } catch (e) {
                E.Z.error(
                  "OneSignal: Attempted to create channel capture container with error",
                  e
                );
              }
            });
          }
          handleAllowClick() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (!this.slidedown)
                throw new I.Z(
                  "SlidedownManager: handleAllowClick: this.slidedown is undefined"
                );
              const e = this.slidedown.options.type;
              this.slidedown.isShowingFailureState &&
                this.slidedown.removeFailureState();
              try {
                switch (e) {
                  case G.Push:
                    this.registerForPush();
                    break;
                  case G.Category:
                    yield this.handleAllowForCategoryType();
                    break;
                  case G.Email:
                    yield this.handleAllowForEmailType();
                    break;
                  case G.Sms:
                    yield this.handleAllowForSmsType();
                    break;
                  case G.SmsAndEmail:
                    yield this.handleAllowForSmsAndEmailType();
                }
              } catch (e) {
                return (
                  E.Z.warn("OneSignal Slidedown failed to update:", e),
                  this.slidedown.removeSaveState(),
                  this.slidedown.setFailureState(),
                  void (
                    void 0 !== e.reason &&
                    this.slidedown.setFailureStateForInvalidChannelInput(
                      e.reason
                    )
                  )
                );
              }
              switch (
                (this.slidedown &&
                  (this.slidedown.close(),
                  J.isSlidedownPushDependent(e) ||
                    (yield this.showConfirmationToast()),
                  yield C(1e3),
                  ai.triggerSlidedownEvent(ai.EVENTS.CLOSED)),
                e)
              ) {
                case G.Push:
                case G.Category:
                  E.Z.debug(
                    "Setting flag to not show the slidedown to the user again."
                  ),
                    gi.markPromptDismissedWithType(ii.Push);
                  break;
                default:
                  E.Z.debug(
                    "Setting flag to not show the slidedown to the user again."
                  ),
                    gi.markPromptDismissedWithType(ii.NonPush);
              }
            });
          }
          setIsSlidedownShowing(e) {
            this.isSlidedownShowing = e;
          }
          showQueued() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (this.slidedownQueue.length > 0) {
                const e = this.dequeue();
                e && (yield this.createSlidedown(e));
              }
            });
          }
          enqueue(e) {
            this.slidedownQueue.push(e),
              ai.triggerSlidedownEvent(ai.EVENTS.QUEUED);
          }
          dequeue() {
            return this.slidedownQueue.shift();
          }
          createSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var t;
              f.Q.logMethodCall("createSlidedown");
              try {
                if (!(yield this.checkIfSlidedownShouldBeShown(e))) return;
              } catch (e) {
                return void E.Z.warn(
                  "checkIfSlidedownShouldBeShown returned an error",
                  e
                );
              }
              if (
                ((function () {
                  const e = OneSignal.notifyButton;
                  e &&
                    e.options.enable &&
                    "hidden" !== OneSignal.notifyButton.launcher.state &&
                    OneSignal.notifyButton.launcher
                      .waitUntilShown()
                      .then(() => {
                        OneSignal.notifyButton.launcher.hide();
                      }),
                    OneSignal.emitter.once(ai.EVENTS.CLOSED, () => {
                      OneSignal.notifyButton &&
                        OneSignal.notifyButton.options.enable &&
                        OneSignal.notifyButton.launcher.show();
                    });
                })(),
                this.isSlidedownShowing)
              )
                this.enqueue(e);
              else
                try {
                  this.setIsSlidedownShowing(!0);
                  const t = e.slidedownPromptOptions || K;
                  (this.slidedown = new ai(t)),
                    yield this.slidedown.create(e.isInUpdateMode),
                    yield this.mountAuxiliaryContainers(e),
                    E.Z.debug("Showing OneSignal Slidedown"),
                    ai.triggerSlidedownEvent(ai.EVENTS.SHOWN);
                } catch (e) {
                  E.Z.error(
                    "There was an error showing the OneSignal Slidedown:",
                    e
                  ),
                    this.setIsSlidedownShowing(!1),
                    null === (t = this.slidedown) || void 0 === t || t.close();
                }
            });
          }
        }
        class Pi {
          constructor(e) {
            (this.isNativePromptShowing = !1),
              (this.context = e),
              (this.eventHooksInstalled = !1);
          }
          shouldForceSlidedownOverNative() {
            const { environmentInfo: e } = OneSignal,
              {
                browserType: t,
                browserVersion: i,
                requiresUserInteraction: n,
              } = e;
            return (
              ("chrome" === t &&
                Number(i) >= 63 &&
                ((0, l.M)().tablet || (0, l.M)().mobile)) ||
              n
            );
          }
          spawnAutoPrompts() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e, t;
              const i = OneSignal.config.userConfig.promptOptions,
                n = this.shouldForceSlidedownOverNative(),
                o = this.getDelayedPromptOptions(i, G.Native),
                s = this.isPageViewConditionMet(o),
                r = o.enabled && s,
                a = n && r;
              if (r && !a)
                return void this.internalShowDelayedPrompt(
                  G.Native,
                  o.timeDelay || 0
                );
              const l = !!J.getFirstSlidedownPromptOptionsWithType(
                null === (e = i.slidedown) || void 0 === e ? void 0 : e.prompts,
                G.Push
              );
              a &&
                !l &&
                this.internalShowDelayedPrompt(G.Push, o.timeDelay || 0);
              const d =
                null === (t = i.slidedown) || void 0 === t ? void 0 : t.prompts;
              if (d && (null == d ? void 0 : d.length) > 0)
                for (let e = 0; e < d.length; e++) {
                  const t = d[e],
                    n = this.getDelayedPromptOptions(i, t.type),
                    o = this.isPageViewConditionMet(n),
                    s = { slidedownPromptOptions: t };
                  n.enabled &&
                    o &&
                    this.internalShowDelayedPrompt(t.type, n.timeDelay || 0, s);
                }
            });
          }
          internalShowDelayedPrompt(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                (f.Z.logMethodCall("internalShowDelayedPrompt"),
                "number" != typeof t)
              )
                return void E.Z.error(
                  "internalShowDelayedPrompt: timeDelay not a number"
                );
              const { requiresUserInteraction: n } = d.getEnvironmentInfo();
              switch (
                (n && e === G.Native && (e = G.Push),
                t > 0 && (yield C(1e3 * t)),
                e)
              ) {
                case G.Native:
                  yield this.internalShowNativePrompt();
                  break;
                case G.Push:
                  yield this.internalShowSlidedownPrompt(i);
                  break;
                case G.Category:
                  yield this.internalShowCategorySlidedown(i);
                  break;
                case G.Sms:
                  yield this.internalShowSmsSlidedown(i);
                  break;
                case G.Email:
                  yield this.internalShowEmailSlidedown(i);
                  break;
                case G.SmsAndEmail:
                  yield this.internalShowSmsAndEmailSlidedown(i);
                  break;
                default:
                  E.Z.error("Invalid Delayed Prompt type");
              }
            });
          }
          internalShowNativePrompt() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Z.logMethodCall("internalShowNativePrompt"),
                this.isNativePromptShowing
                  ? E.Z.debug(
                      "Already showing autoprompt. Abort showing a native prompt."
                    )
                  : ((this.isNativePromptShowing = !0),
                    yield Oi.registerForPushNotifications(),
                    (this.isNativePromptShowing = !1),
                    gi.markPromptDismissedWithType(ii.Push));
            });
          }
          internalShowSlidedownPrompt(e = { force: !1 }) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Z.logMethodCall("internalShowSlidedownPrompt"),
                e.slidedownPromptOptions || (e.slidedownPromptOptions = K);
              0 ===
              (yield this.context.dynamicResourceLoader.loadSdkStylesheet())
                ? (this.eventHooksInstalled ||
                    this.installEventHooksForSlidedown(),
                  yield this.context.slidedownManager.createSlidedown(e))
                : E.Z.debug(
                    "Not showing slidedown permission message because styles failed to load."
                  );
            });
          }
          internalShowCategorySlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Z.logMethodCall("internalShowCategorySlidedown"),
                yield this.internalShowParticularSlidedown(G.Category, e);
            });
          }
          internalShowSmsSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Z.logMethodCall("internalShowSmsSlidedown"),
                yield this.internalShowParticularSlidedown(G.Sms, e);
            });
          }
          internalShowEmailSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Z.logMethodCall("internalShowEmailSlidedown"),
                yield this.internalShowParticularSlidedown(G.Email, e);
            });
          }
          internalShowSmsAndEmailSlidedown(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              f.Z.logMethodCall("internalShowSmsAndEmailSlidedown"),
                yield this.internalShowParticularSlidedown(G.SmsAndEmail, e);
            });
          }
          internalShowParticularSlidedown(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i, n;
              const o =
                  null ===
                    (n =
                      null ===
                        (i = this.context.appConfig.userConfig.promptOptions) ||
                      void 0 === i
                        ? void 0
                        : i.slidedown) || void 0 === n
                    ? void 0
                    : n.prompts,
                s =
                  (null == t ? void 0 : t.slidedownPromptOptions) ||
                  J.getFirstSlidedownPromptOptionsWithType(o, e);
              if (!s) {
                if (e !== G.Push)
                  return void E.Z.error(
                    `OneSignal: slidedown of type '${e}' couldn't be shown. Check your configuration on the OneSignal dashboard or your custom code initialization.`
                  );
                E.Z.warn(
                  "The OneSignal 'push' slidedown will be shown with default text settings. To customize, see the OneSignal documentation."
                );
              }
              yield this.internalShowSlidedownPrompt(
                Object.assign(Object.assign({}, t), {
                  slidedownPromptOptions: s,
                })
              );
            });
          }
          installEventHooksForSlidedown() {
            (this.eventHooksInstalled = !0),
              OneSignal.emitter.on(ai.EVENTS.SHOWN, () => {
                this.context.slidedownManager.setIsSlidedownShowing(!0);
              }),
              OneSignal.emitter.on(ai.EVENTS.CLOSED, () => {
                this.context.slidedownManager.setIsSlidedownShowing(!1),
                  this.context.slidedownManager.showQueued();
              }),
              OneSignal.emitter.on(ai.EVENTS.ALLOW_CLICK, () =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  yield this.context.slidedownManager.handleAllowClick(),
                    ve.Z.trigger(
                      OneSignal.EVENTS.TEST_FINISHED_ALLOW_CLICK_HANDLING
                    );
                })
              ),
              OneSignal.emitter.on(ai.EVENTS.CANCEL_CLICK, () => {
                var e;
                if (!this.context.slidedownManager.slidedown) return;
                switch (
                  null === (e = this.context.slidedownManager.slidedown) ||
                  void 0 === e
                    ? void 0
                    : e.options.type
                ) {
                  case G.Push:
                  case G.Category:
                    E.Z.debug(
                      "Setting flag to not show the slidedown to the user again."
                    ),
                      gi.markPromptDismissedWithType(ii.Push);
                    break;
                  default:
                    E.Z.debug(
                      "Setting flag to not show the slidedown to the user again."
                    ),
                      gi.markPromptDismissedWithType(ii.NonPush);
                }
              });
          }
          isPageViewConditionMet(e) {
            if (!e || void 0 === e.pageViews) return !1;
            if (!e.autoPrompt || !e.enabled) return !1;
            return (
              this.context.pageViewManager.getLocalPageViewCount() >=
              e.pageViews
            );
          }
          getDelayedPromptOptions(e, t) {
            var i, n, o, s;
            const r = {
              enabled: !1,
              autoPrompt: !1,
              timeDelay: F.timeDelay,
              pageViews: F.pageViews,
            };
            if (!e || !e.native || !e.slidedown) return r;
            switch (t) {
              case G.Native: {
                const t = e.native;
                return {
                  enabled: null == t ? void 0 : t.enabled,
                  autoPrompt: null == t ? void 0 : t.autoPrompt,
                  timeDelay: null == t ? void 0 : t.timeDelay,
                  pageViews: null == t ? void 0 : t.pageViews,
                };
              }
              case G.Push:
              case G.Category:
              case G.Email:
              case G.Sms:
              case G.SmsAndEmail: {
                const { userConfig: e } = this.context.appConfig,
                  r = J.getFirstSlidedownPromptOptionsWithType(
                    (null ===
                      (n =
                        null === (i = e.promptOptions) || void 0 === i
                          ? void 0
                          : i.slidedown) || void 0 === n
                      ? void 0
                      : n.prompts) || [],
                    t
                  );
                return {
                  enabled: !!r,
                  autoPrompt: !!(null == r ? void 0 : r.autoPrompt),
                  timeDelay:
                    null === (o = null == r ? void 0 : r.delay) || void 0 === o
                      ? void 0
                      : o.timeDelay,
                  pageViews:
                    null === (s = null == r ? void 0 : r.delay) || void 0 === s
                      ? void 0
                      : s.pageViews,
                };
              }
              default:
                return r;
            }
          }
        }
        class Ti {
          constructor(e) {
            (this.appConfig = e),
              "undefined" != typeof OneSignal &&
                OneSignal.environmentInfo &&
                (this.environmentInfo = OneSignal.environmentInfo),
              (this.subscriptionManager = Qt.getSubscriptionManager(this)),
              (this.serviceWorkerManager = Qt.getServiceWorkerManager(this)),
              (this.pageViewManager = new ge()),
              (this.permissionManager = new pe()),
              (this.workerMessenger = new le(this)),
              (this.updateManager = new qt(this)),
              (this.sessionManager = new Kt(this)),
              (this.tagManager = new zt(this)),
              (this.slidedownManager = new Ci(this)),
              (this.promptsManager = new Pi(this)),
              (this.dynamicResourceLoader = new de());
          }
        }
        class ki {
          static processItem(e, t) {
            if ("function" != typeof t)
              throw new I.Z("Only accepts function type!");
            t(e);
          }
        }
        class Ni extends Zt {
          constructor(e) {
            super(),
              (this._permissionNative = e),
              (this._permission = e === Ut.Granted),
              nn.emitter.on(
                nn.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                (e) => {
                  (this._permissionNative = e),
                    (this._permission = e === Ut.Granted);
                }
              );
          }
          get permissionNative() {
            return this._permissionNative;
          }
          get permission() {
            return this._permission;
          }
          setDefaultUrl(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, P.tI)("setDefaultUrl", e), void 0 === e))
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.Empty
                );
              if ("string" != typeof e)
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.WrongType
                );
              if (!Dt.isValidUrl(e, { allowNull: !0 }))
                throw new InvalidArgumentError.R(
                  "url",
                  InvalidArgumentError.Q.Malformed
                );
              yield (0, P.JX)(), (0, P.tI)("setDefaultNotificationUrl", e);
              const t = yield fe.ZP.getAppState();
              (t.defaultNotificationUrl = e), yield fe.ZP.setAppState(t);
            });
          }
          setDefaultTitle(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, P.tI)("setDefaultTitle", e), void 0 === e))
                throw new InvalidArgumentError.R(
                  "title",
                  InvalidArgumentError.Q.Empty
                );
              if ("string" != typeof e)
                throw new InvalidArgumentError.R(
                  "title",
                  InvalidArgumentError.Q.WrongType
                );
              yield (0, P.JX)();
              const t = yield fe.ZP.getAppState();
              (t.defaultNotificationTitle = e), yield fe.ZP.setAppState(t);
            });
          }
          isPushSupported() {
            return (0, P.tI)("isPushNotificationsSupported"), !0;
          }
          requestPermission() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield (0, P.JX)(),
                yield nn.context.promptsManager.internalShowNativePrompt();
            });
          }
          addEventListener(e, t) {
            nn.emitter.on(e, t),
              "click" === e && Ft.fireStoredNotificationClicks();
          }
          removeEventListener(e, t) {
            nn.emitter.off(e, t);
          }
        }
        class xi {
          constructor() {
            (this._mutexPromise = Promise.resolve()), (this._mutexLocked = !1);
          }
          add(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("ModelCache.add", { modelName: e, model: t });
              const i = t.encode(),
                n = Object.assign({}, i);
              yield fe.ZP.put(e, n);
            });
          }
          remove(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("ModelCache.remove", { modelName: e, modelId: t }),
                yield fe.ZP.remove(e, t);
            });
          }
          update(e, t, i, n) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              this._mutexLocked && (yield this._mutexPromise),
                (this._mutexLocked = !0),
                (this._mutexPromise = new Promise((s, r) =>
                  (0, o.mG)(this, void 0, void 0, function* () {
                    (0,
                    P.tI)("ModelCache.update", { modelName: e, modelId: t, key: i, value: n });
                    const o = yield this.get(e, t);
                    o ||
                      r(
                        "ModelCache: Attempting to update a model that does not exist"
                      ),
                      o &&
                        ((o[i] = n),
                        yield fe.ZP.put(e, o),
                        (this._mutexLocked = !1),
                        s()),
                      setTimeout(
                        r.bind(this, "Database promise never resolved."),
                        1e4
                      );
                  })
                ));
            });
          }
          load(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("ModelCache.load", { modelNames: e });
              const t = {};
              for (let i = 0; i < e.length; i++) {
                const n = e[i],
                  o = yield this.getAndDecodeModelsWithModelName(n);
                o && (t[n] = o);
              }
              return t;
            });
          }
          get(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("ModelCache.get", { modelName: e, modelId: t });
              try {
                return yield this._mutexPromise, yield fe.ZP.get(e, t);
              } catch (e) {
                return;
              }
            });
          }
          getCachedEncodedModels(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (0, P.tI)("ModelCache.getCachedEncodedModels", {
                  modelName: e,
                }),
                yield fe.ZP.getAll(e)
              );
            });
          }
          getAndDecodeModelsWithModelName(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              P.tI)("ModelCache.getAndDecodeModelsWithModelName", { modelName: e });
              const t = yield this.getCachedEncodedModels(e);
              if (0 !== Object.keys(t).length) return t.map(Ct.decode);
            });
          }
          reset() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("ModelCache.reset");
              const e = [];
              Object.values(Pt.Q).forEach((t) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  e.push(fe.ZP.singletonInstance.remove(t));
                })
              ),
                yield Promise.all(e);
            });
          }
        }
        class Ai extends yt {
          constructor(e, t) {
            super(),
              (this.modelCache = e),
              (this.modelStores = t),
              Object.keys(t).forEach((e) => {
                t[e].subscribe(this.processModelChange.bind(this));
              });
          }
          processModelChange(e) {
            (0, P.tI)("processModelChange", { modelStoreChange: e }),
              e.type === ft.Add && this.processModelAdded(e),
              e.type === ft.Remove && this.processModelRemoved(e),
              e.type === ft.Update && this.processModelUpdated(e),
              e.type === ft.Hydrate && this.processModelHydrated(e);
          }
          processModelAdded(e) {
            (0, P.tI)("processModelAdded", { modelStoreChange: e });
            const { payload: t } = e;
            this.modelCache.add(t.modelName, t),
              this.broadcast({ model: t, changeType: ft.Add });
          }
          processModelRemoved(e) {
            (0, P.tI)("processModelRemoved", { modelStoreChange: e });
            const { modelId: t, payload: i } = e;
            this.modelCache.remove(i.modelName, t),
              this.broadcast({ model: i, changeType: ft.Remove });
          }
          processModelUpdated(e) {
            (0, P.tI)("processModelUpdated", { modelStoreChange: e });
            const { modelId: t, payload: i } = e;
            if (
              (this.modelCache.update(
                i.model.modelName,
                t,
                i.property,
                i.newValue
              ),
              i.oldValue !== i.newValue)
            ) {
              const e = {
                model: i.model,
                changeType: ft.Update,
                property: i.property,
                oldValue: i.oldValue,
                newValue: i.newValue,
              };
              this.broadcast(e);
            }
          }
          processModelHydrated(e) {
            (0, P.tI)("processModelHydrated", { modelStoreChange: e });
            const { modelId: t, payload: i } = e;
            this.modelCache.remove(i.modelName, t),
              this.modelCache.add(i.modelName, i);
          }
        }
        Ai.supportedModels = Object.values(Pt.Q);
        class Mi {
          constructor(e) {
            (this.result = e), (this.success = !0), (this.retriable = !1);
          }
        }
        class Di {
          constructor(e) {
            (this.result = e), (this.success = !1), (this.retriable = !0);
          }
        }
        class Zi {
          constructor(e) {
            (this.result = e), (this.success = !1), (this.retriable = !1);
          }
        }
        function _i(e) {
          const t = e.model,
            i = null == t ? void 0 : t.data;
          if (!t)
            throw new I.Z(
              `processSubscriptionModel: bad subscription OSModel<SubscriptionModel>: ${JSON.stringify(
                t
              )}`
            );
          if (void 0 === (null == (n = i) ? void 0 : n.type))
            throw new I.Z(
              `processSubscriptionModel: bad subscription object: ${JSON.stringify(
                i
              )}`
            );
          var n;
          if (!t.onesignalId)
            throw new I.Z(
              `processSubscriptionModel: missing onesignalId: ${JSON.stringify(
                t
              )}`
            );
          let o;
          return (
            xt(i) && (o = null == i ? void 0 : i.id),
            {
              subscription: i,
              aliasPair: new y(y.ONESIGNAL_ID, t.onesignalId),
              subscriptionId: o,
              payload: e.payload,
            }
          );
        }
        function Ui(e) {
          var t;
          const i = null === (t = e.model) || void 0 === t ? void 0 : t.data;
          if (!Nt(i))
            throw new I.Z(
              `processIdentityModel: bad identity object: ${JSON.stringify(i)}`
            );
          const { onesignal_id: n } = i,
            o = JSON.parse(JSON.stringify(i));
          if ((delete o.onesignal_id, !n))
            throw new I.Z(
              `processIdentityModel: missing onesignalId: ${JSON.stringify(i)}`
            );
          return { identity: o, aliasPair: new y(y.ONESIGNAL_ID, n) };
        }
        class Gi {
          static addIdentity(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("addIdentity", e);
              const t = yield bt.getAppId(),
                { identity: i, aliasPair: n } = Ui(e),
                o = yield D.addAlias({ appId: t }, n, i);
              return Gi._processIdentityResponse(o);
            });
          }
          static removeIdentity(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, P.tI)("removeIdentity", e), !e.payload))
                throw new I.Z(
                  "removeIdentity: operation.payload is not defined"
                );
              if (1 !== Object.keys(e.payload).length)
                throw new I.Z(
                  "removeIdentity: operation.payload must have exactly one key"
                );
              const t = yield bt.getAppId(),
                i = Object.keys(e.payload)[0],
                { aliasPair: n } = Ui(e),
                o = yield D.deleteAlias({ appId: t }, n, i);
              return Gi._processIdentityResponse(o);
            });
          }
          static _processIdentityResponse(e) {
            if (!e)
              throw new I.Z("processIdentityResponse: response is not defined");
            const { status: t, result: i } = e,
              { identity: n } = i;
            if (t >= 200 && t < 300) {
              if (!Nt(n))
                throw new I.Z(
                  `processIdentityResponse: result ${n} is not an identity object`
                );
              return new Mi(n);
            }
            return t >= 400 && t < 500 ? new Zi() : new Di();
          }
        }
        class Bi {
          static addSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("SubscriptionRequests.addSubscription", e);
              const t = yield bt.getAppId(),
                { subscription: i, aliasPair: n } = _i(e),
                o = yield D.createSubscription({ appId: t }, n, {
                  subscription: i,
                });
              return Bi._processSubscriptionResponse(o);
            });
          }
          static removeSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("SubscriptionRequests.removeSubscription", e);
              const { subscriptionId: t } = _i(e);
              if (!t)
                throw new I.Z(
                  "removeSubscription: subscriptionId is not defined"
                );
              const i = yield bt.getAppId(),
                n = yield D.deleteSubscription({ appId: i }, t);
              return Bi._processSubscriptionResponse(n);
            });
          }
          static updateSubscription(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("SubscriptionRequests.updateSubscription", e);
              const { payload: t, subscriptionId: i } = _i(e);
              if (!i)
                throw new I.Z(
                  "updateSubscription: subscriptionId is not defined"
                );
              if (!t)
                throw new I.Z("updateSubscription: payload is not defined");
              const n = yield bt.getAppId(),
                o = yield D.updateSubscription({ appId: n }, i, t);
              return Bi._processSubscriptionResponse(o);
            });
          }
          static _processSubscriptionResponse(e) {
            if (!e)
              throw new Error(
                "processSubscriptionResponse: response is not defined"
              );
            const { status: t, result: i } = e,
              n = i.subscription;
            if (t >= 200 && t < 300) {
              if (n && !xt(n))
                throw new I.Z(
                  `processSubscriptionResponse: bad subscription object: ${n}`
                );
              return new Mi(n);
            }
            return t >= 400 && t < 500 ? new Zi() : new Di();
          }
        }
        class Li {
          static updateUserProperties(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("UserPropertyRequests.updateUserProperties", e);
              const t = e.model,
                i = null == t ? void 0 : t.data;
              if (!i || !t)
                throw new I.Z(`updateUserProperty: bad identity model: ${t}`);
              if (!t.onesignalId)
                return (
                  E.Z.info(
                    "Caching User Property update until subscription is created."
                  ),
                  new Zi()
                );
              const n = new y(y.ONESIGNAL_ID, t.onesignalId),
                o = yield bt.getAppId(),
                s = yield OneSignal.coreDirector.getPushSubscriptionModel();
              let r;
              xt(null == s ? void 0 : s.data) &&
                (r = null == s ? void 0 : s.data.id);
              const a = yield D.updateUser({ appId: o, subscriptionId: r }, n, {
                properties: i,
              });
              return Li._processUserPropertyResponse(a);
            });
          }
          static _processUserPropertyResponse(e) {
            if (!e)
              throw new Error(
                "processUserPropertyResponse: response is not defined"
              );
            const { status: t, result: i } = e;
            return t >= 200 && t < 300
              ? new Mi(null == i ? void 0 : i.properties)
              : t >= 400 && t < 500
              ? new Zi()
              : new Di();
          }
        }
        const Ri = {
            add: Bi.addSubscription,
            remove: Bi.removeSubscription,
            update: Bi.updateSubscription,
          },
          Fi = {
            [Pt.Q.Identity]: {
              modelName: Pt.Q.Identity,
              add: Gi.addIdentity,
              remove: Gi.removeIdentity,
            },
            [Pt.Q.Properties]: {
              modelName: Pt.Q.Properties,
              update: Li.updateUserProperties,
            },
            [Pt.Q.PushSubscriptions]: Object.assign(
              { modelName: Pt.Q.PushSubscriptions },
              Ri
            ),
            [Pt.Q.EmailSubscriptions]: Object.assign(
              { modelName: Pt.Q.EmailSubscriptions },
              Ri
            ),
            [Pt.Q.SmsSubscriptions]: Object.assign(
              { modelName: Pt.Q.SmsSubscriptions },
              Ri
            ),
          };
        class Wi {
          constructor(e, t, i) {
            (this.changeType = e),
              (this.modelName = t),
              (this.operationId = Math.random().toString(36).substring(2)),
              (this.payload = i ? this.getPayload(i) : void 0),
              (this.model = i ? i[i.length - 1].model : void 0),
              (this.timestamp = Date.now()),
              (this.jwtTokenAvailable = new Promise((e) =>
                (0, o.mG)(this, void 0, void 0, function* () {
                  (this.jwtToken = yield fe.ZP.getJWTToken()), e();
                })
              ));
          }
          getPayload(e) {
            return Tt(e[0]) ? this.aggregateDeltas(e) : e[0].model.data;
          }
          aggregateDeltas(e) {
            const t = {};
            return (
              e.forEach((e) => {
                if (Tt(e)) {
                  const i = t.hasOwnProperty(e.property),
                    n = kt(e.newValue);
                  if (!(n === kt(e.oldValue) || void 0 === e.oldValue))
                    throw new Error("Cannot merge incompatible values");
                  const o = i && n,
                    s = Object.assign(
                      Object.assign({}, t[e.property]),
                      e.newValue
                    );
                  t[e.property] = o ? s : e.newValue;
                }
              }),
              t
            );
          }
          static getInstanceWithModelReference(e) {
            var t;
            const {
              operationId: i,
              payload: n,
              modelName: o,
              changeType: s,
              timestamp: r,
              model: a,
            } = e;
            if (!a) throw new I.Z("Operation.fromJSON: model is undefined");
            const l =
              null === (t = OneSignal.coreDirector) || void 0 === t
                ? void 0
                : t.getModelByTypeAndId(o, a.modelId);
            if (l) {
              const t = new Wi(s, o);
              return (
                (t.model = l),
                (t.operationId = i),
                (t.timestamp = r),
                (t.payload = n),
                (t.jwtToken = e.jwtToken),
                (t.jwtTokenAvailable = Promise.resolve()),
                t
              );
            }
            throw new Error(
              `Could not find model with id ${a.modelId} of type ${o}. Maybe user logged out?`
            );
          }
        }
        class Vi {
          static enqueue(e) {
            (0, P.tI)("OperationCache.enqueue", { operation: e });
            const t = localStorage.getItem("operationCache"),
              i = t ? JSON.parse(t) : {};
            (i[e.operationId] = e),
              localStorage.setItem("operationCache", JSON.stringify(i));
          }
          static getOperationsWithModelName(e) {
            const t = localStorage.getItem("operationCache"),
              i = t ? Object.values(JSON.parse(t)) : [],
              n = [];
            for (let e = 0; e < i.length; e++) {
              const t = i[e];
              try {
                const e = Wi.getInstanceWithModelReference(t);
                e && n.push(e);
              } catch (e) {
                E.Z.warn(
                  `Could not parse operation ${t.operationId} from cache`,
                  e
                ),
                  this.delete(t.operationId);
              }
            }
            return n
              .sort((e, t) => e.timestamp - t.timestamp)
              .filter((t) => t.modelName === e);
          }
          static delete(e) {
            (0, P.tI)("OperationCache.delete", { id: e });
            const t = localStorage.getItem("operationCache"),
              i = t ? JSON.parse(t) : {};
            delete i[e],
              localStorage.setItem("operationCache", JSON.stringify(i));
          }
          static flushOperations() {
            (0, P.tI)("OperationCache.flushOperations"),
              localStorage.removeItem("operationCache");
          }
        }
        class $i {
          constructor(e) {
            (this._deltaQueue = []),
              (this._operationQueue = []),
              (this.onlineStatus = !0),
              setInterval(() => {
                this._deltaQueue.length > 0 &&
                  this.processDeltaQueue.call(this);
              }, 1e3 * $i.DELTAS_BATCH_PROCESSING_TIME),
              setInterval(() => {
                E.Z.debug(
                  "OneSignal: checking for operations to process from cache"
                );
                const e = this.getOperationsFromCache();
                (this._operationQueue = [...e, ...this._operationQueue]),
                  this._operationQueue.length > 0 &&
                    this._processOperationQueue.call(this);
              }, 1e3 * $i.OPERATIONS_BATCH_PROCESSING_TIME),
              window.addEventListener(
                "online",
                this._onNetworkChange.bind(this, !0)
              ),
              window.addEventListener(
                "offline",
                this._onNetworkChange.bind(this, !1)
              ),
              (this._executeAdd = e.add),
              (this._executeUpdate = e.update),
              (this._executeRemove = e.remove);
          }
          enqueueDelta(e) {
            (0, P.tI)("ExecutorBase.enqueueDelta", { delta: e });
            const t = JSON.parse(JSON.stringify(e));
            this._deltaQueue.push(t);
          }
          get deltaQueue() {
            return this._deltaQueue;
          }
          get operationQueue() {
            return this._operationQueue;
          }
          _enqueueOperation(e) {
            (0, P.tI)("ExecutorBase.enqueueOperation", { operation: e }),
              this._operationQueue.push(e);
          }
          _flushDeltas() {
            (0, P.tI)("ExecutorBase._flushDeltas"), (this._deltaQueue = []);
          }
          _flushOperations() {
            (0, P.tI)("ExecutorBase._flushOperations"),
              (this._operationQueue = []);
          }
          _getChangeType(e, t) {
            (0, P.tI)("ExecutorBase._getChangeType", {
              oldValue: e,
              newValue: t,
            });
            const i = !!e && !t,
              n = e !== t && !!t && !!e;
            let o;
            if (!e && !!t) o = ft.Add;
            else if (i) o = ft.Remove;
            else {
              if (!n) throw new Error("Unsupported change type");
              o = ft.Update;
            }
            return o;
          }
          _processOperationQueue() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e =
                  OneSignal.config.userConfig.requiresUserPrivacyConsent ||
                  he.getConsentRequired(),
                t = yield fe.ZP.getConsentGiven();
              if (!e || t)
                for (; this._operationQueue.length > 0; ) {
                  const e = this._operationQueue.shift();
                  e &&
                    (Vi.enqueue(e),
                    this.onlineStatus &&
                      this._processOperation(e, $i.RETRY_COUNT).catch((e) => {
                        E.Z.error(e);
                      }));
                }
            });
          }
          _processOperation(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i, n, o, s, r;
              (0, P.tI)("ExecutorBase._processOperation", {
                operation: e,
                retries: t,
              }),
                yield null === (i = e.model) || void 0 === i
                  ? void 0
                  : i.awaitOneSignalIdAvailable,
                yield e.jwtTokenAvailable;
              let a = { success: !1, retriable: !0 };
              if (
                ((null == e ? void 0 : e.changeType) === ft.Add
                  ? (a = yield null === (n = this._executeAdd) || void 0 === n
                      ? void 0
                      : n.call(this, e))
                  : (null == e ? void 0 : e.changeType) === ft.Remove
                  ? (a = yield null === (o = this._executeRemove) ||
                    void 0 === o
                      ? void 0
                      : o.call(this, e))
                  : (null == e ? void 0 : e.changeType) === ft.Update &&
                    (a = yield null === (s = this._executeUpdate) ||
                    void 0 === s
                      ? void 0
                      : s.call(this, e)),
                a.success)
              ) {
                if (a.result) {
                  const t = yield Wi.getInstanceWithModelReference(e);
                  null === (r = null == t ? void 0 : t.model) ||
                    void 0 === r ||
                    r.hydrate(a.result);
                }
                Vi.delete(null == e ? void 0 : e.operationId);
              } else
                a.retriable && t > 0
                  ? setTimeout(() => {
                      this._processOperation(e, t - 1).catch((e) => {
                        E.Z.error(e);
                      });
                    }, 5e3)
                  : Vi.delete(null == e ? void 0 : e.operationId);
            });
          }
          _onNetworkChange(e) {
            (0, P.tI)("ExecutorBase._onNetworkChange", { online: e }),
              (this.onlineStatus = e),
              e && this._processOperationQueue.call(this);
          }
        }
        ($i.DELTAS_BATCH_PROCESSING_TIME = 1),
          ($i.OPERATIONS_BATCH_PROCESSING_TIME = 5),
          ($i.RETRY_COUNT = 5);
        class ji extends $i {
          constructor(e) {
            super(e);
          }
          processDeltaQueue() {
            if (0 === this._deltaQueue.length) return;
            const e = [],
              t = [];
            this._deltaQueue.forEach((i) => {
              if (!Tt(i)) return;
              const n = this._getChangeType(i.oldValue, i.newValue);
              n === ft.Add || n === ft.Update
                ? e.push(i)
                : n === ft.Remove && t.push(i);
            }),
              e.length > 0 &&
                this._enqueueOperation(new Wi(ft.Add, Pt.Q.Identity, e)),
              t.length > 0 &&
                this._enqueueOperation(new Wi(ft.Remove, Pt.Q.Identity, t)),
              this._flushDeltas();
          }
          getOperationsFromCache() {
            return Vi.getOperationsWithModelName(Pt.Q.Identity);
          }
        }
        class Hi extends $i {
          constructor(e) {
            super(e);
          }
          processDeltaQueue() {
            0 !== this._deltaQueue.length &&
              (this._enqueueOperation(
                new Wi(ft.Update, Pt.Q.Properties, this._deltaQueue)
              ),
              this._flushDeltas());
          }
          getOperationsFromCache() {
            return Vi.getOperationsWithModelName(Pt.Q.Properties);
          }
        }
        class Qi extends $i {
          constructor(e) {
            super(e);
          }
          processDeltaQueue() {
            this.separateDeltasByModelId().forEach((e) => {
              const t = this.separateDeltasByChangeType(e);
              Object.keys(t).forEach((e) => {
                const i = t[e];
                i.length > 0 &&
                  this._enqueueOperation(new Wi(e, i[0].model.modelName, i));
              });
            }),
              this._flushDeltas();
          }
          getOperationsFromCache() {
            return [
              ...Vi.getOperationsWithModelName(Pt.Q.SmsSubscriptions),
              ...Vi.getOperationsWithModelName(Pt.Q.EmailSubscriptions),
              ...Vi.getOperationsWithModelName(Pt.Q.PushSubscriptions),
            ];
          }
          separateDeltasByChangeType(e) {
            const t = { [ft.Add]: [], [ft.Remove]: [], [ft.Update]: [] };
            return (
              e.forEach((e) => {
                var i;
                t[e.changeType] || (t[e.changeType] = []),
                  null === (i = t[e.changeType]) || void 0 === i || i.push(e);
              }),
              t
            );
          }
          separateDeltasByModelId() {
            const e = {};
            return (
              this._deltaQueue.forEach((t) => {
                const { modelId: i } = t.model;
                e[i] || (e[i] = []), e[i].push(t);
              }),
              Object.values(e)
            );
          }
        }
        class qi {
          static build(e) {
            switch (e.modelName) {
              case Pt.Q.Identity:
                return new ji(e);
              case Pt.Q.Properties:
                return new Hi(e);
              case Pt.Q.PushSubscriptions:
              case Pt.Q.EmailSubscriptions:
              case Pt.Q.SmsSubscriptions:
                return new Qi(e);
            }
          }
        }
        class Ki {
          constructor() {
            (this.store = {}),
              Object.values(Pt.Q).forEach((e) => {
                const t = Fi[e];
                this.store[e] = qi.build(t);
              });
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            Object.values(this.store).forEach((e) => {
              e.processDeltaQueue();
            });
          }
        }
        class zi {
          constructor(e) {
            (this.modelRepo = e),
              (this.executorStore = new Ki()),
              (this._unsubscribeFromModelRepo = this.modelRepo.subscribe(
                (e) => {
                  this._processDelta(e);
                }
              ));
          }
          setModelRepoAndResubscribe(e) {
            (this.modelRepo = e),
              this._unsubscribeFromModelRepo(),
              (this._unsubscribeFromModelRepo = this.modelRepo.subscribe(
                (e) => {
                  this._processDelta(e);
                }
              ));
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            this.executorStore.forceDeltaQueueProcessingOnAllExecutors();
          }
          _processDelta(e) {
            var t;
            (0, P.tI)("processDelta", { delta: e });
            const { modelName: i } = e.model;
            null === (t = this.executorStore.store[i]) ||
              void 0 === t ||
              t.enqueueDelta(e);
          }
        }
        class Ji extends yt {
          constructor(e = []) {
            super(),
              (this.models = {}),
              (this.unsubscribeCallbacks = {}),
              e.forEach((e) => {
                (this.models[e.modelId] = e), this.subscribeUpdateListener(e);
              });
          }
          add(e, t) {
            this.subscribeUpdateListener(e),
              (this.models[e.modelId] = e),
              t
                ? this.broadcast(new wt(e.modelId, e))
                : this.broadcast(new Et(e.modelId, e));
          }
          remove(e) {
            const t = JSON.stringify(this.models[e]);
            delete this.models[e],
              this.unsubscribeCallbacks[e](),
              this.broadcast(new It(e, JSON.parse(t)));
          }
          subscribeUpdateListener(e) {
            this.unsubscribeCallbacks[e.modelId] = e.subscribe((t) => {
              const { payload: i } = t;
              var n;
              t.type === ft.Update &&
              null !== (n = i) &&
              "object" == typeof n &&
              (null == n ? void 0 : n.constructor) === St
                ? this.broadcast(new Ot(e.modelId, i))
                : t.type === ft.Hydrate &&
                  (function (e) {
                    return (
                      null !== e &&
                      "object" == typeof e &&
                      (null == e ? void 0 : e.constructor) === Ct
                    );
                  })(i) &&
                  this.broadcast(new Et(e.modelId, i));
            });
          }
        }
        class Yi {
          static build(e) {
            const t = {};
            return (
              Object.values(Pt.Q).forEach((i) => {
                const n = e ? e[i] : void 0,
                  o = new Ji(n);
                t[i] = o;
              }),
              t
            );
          }
        }
        class Xi {
          constructor() {
            (this.initResolver = () => null),
              (this.initPromise = new Promise((e) => {
                this.initResolver = e;
              })),
              (this.modelCache = new xi()),
              this.modelCache
                .load(Ai.supportedModels)
                .then((e) => {
                  const t = Yi.build(e);
                  (this.modelRepo = new Ai(this.modelCache, t)),
                    (this.operationRepo = new zi(this.modelRepo)),
                    this.initResolver();
                })
                .catch((e) => {
                  E.Z.error(e);
                });
          }
          init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("CoreModule.init"), yield this.initPromise;
            });
          }
          resetModelRepoAndCache() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var e;
              (0, P.tI)("CoreModule.resetModelRepo"),
                yield this.modelCache.reset();
              const t = Yi.build();
              (this.modelRepo = new Ai(this.modelCache, t)),
                null === (e = this.operationRepo) ||
                  void 0 === e ||
                  e.setModelRepoAndResubscribe(this.modelRepo);
            });
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            var e;
            null === (e = this.operationRepo) ||
              void 0 === e ||
              e.forceDeltaQueueProcessingOnAllExecutors();
          }
        }
        class en {
          constructor(e) {
            this.core = e;
          }
          generatePushSubscriptionModel(e) {
            (0, P.tI)("CoreModuleDirector.generatePushSubscriptionModel", {
              rawPushSubscription: e,
            });
            const t = new Ct(Pt.Q.PushSubscriptions, new S(e).serialize()),
              i = Mt.createOrGetInstance();
            i.hasOneSignalId && t.setOneSignalId(i.onesignalId),
              nn.coreDirector.add(Pt.Q.PushSubscriptions, t, !1);
          }
          resetModelRepoAndCache() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.core.resetModelRepoAndCache();
            });
          }
          hydrateUser(e) {
            (0, P.tI)("CoreModuleDirector.hydrateUser", { user: e });
            try {
              const t = this.getIdentityModel(),
                i = this.getPropertiesModel(),
                { onesignal_id: n } = e.identity;
              if (!n) throw new I.Z("OneSignal ID is missing from user data");
              null == t || t.setOneSignalId(n),
                null == i || i.setOneSignalId(n),
                null == t || t.hydrate(e.identity),
                null == i || i.hydrate(e.properties),
                this._hydrateSubscriptions(e.subscriptions, n),
                Ft.checkAndTriggerUserChanged();
            } catch (e) {
              E.Z.error(`Error hydrating user: ${e}`);
            }
          }
          _hydrateSubscriptions(e, t) {
            if (
              ((0, P.tI)("CoreModuleDirector._hydrateSubscriptions", {
                subscriptions: e,
              }),
              !e)
            )
              return;
            const i = this.getModelStores();
            e.forEach((e) =>
              (0, o.mG)(this, void 0, void 0, function* () {
                const n = ((e) =>
                    "Email" === e.type
                      ? Pt.Q.EmailSubscriptions
                      : "SMS" === e.type
                      ? Pt.Q.SmsSubscriptions
                      : Pt.Q.PushSubscriptions)(e),
                  o = e.token
                    ? this.getSubscriptionOfTypeWithToken(n, e.token)
                    : void 0;
                if (o) o.setOneSignalId(t), o.hydrate(e);
                else {
                  const o = new Ct(n, e);
                  o.setOneSignalId(t), i[n].add(o, !1);
                }
              })
            );
          }
          forceDeltaQueueProcessingOnAllExecutors() {
            (0, P.tI)(
              "CoreModuleDirector.forceDeltaQueueProcessingOnAllExecutors"
            ),
              this.core.forceDeltaQueueProcessingOnAllExecutors();
          }
          add(e, t, i = !0) {
            (0, P.tI)("CoreModuleDirector.add", { modelName: e, model: t });
            this.getModelStores()[e].add(t, i);
          }
          remove(e, t) {
            (0, P.tI)("CoreModuleDirector.remove", {
              modelName: e,
              modelId: t,
            });
            this.getModelStores()[e].remove(t);
          }
          getModelByTypeAndId(e, t) {
            (0, P.tI)("CoreModuleDirector.getModelByTypeAndId", {
              modelName: e,
              modelId: t,
            });
            return this.getModelStores()[e].models[t];
          }
          getEmailSubscriptionModels() {
            (0, P.tI)("CoreModuleDirector.getEmailSubscriptionModels");
            return this.getModelStores().emailSubscriptions.models;
          }
          hasEmail() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getEmailSubscriptionModels();
              return Object.keys(e).length > 0;
            });
          }
          getSmsSubscriptionModels() {
            (0, P.tI)("CoreModuleDirector.getSmsSubscriptionModels");
            return this.getModelStores().smsSubscriptions.models;
          }
          hasSms() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = yield this.getSmsSubscriptionModels();
              return Object.keys(e).length > 0;
            });
          }
          getAllPushSubscriptionModels() {
            (0, P.tI)("CoreModuleDirector.getAllPushSubscriptionModels");
            return this.getModelStores().pushSubscriptions.models;
          }
          getPushSubscriptionModelByCurrentToken() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              P.tI)("CoreModuleDirector.getPushSubscriptionModelByCurrentToken");
              const e = yield bt.getCurrentPushToken();
              if (e)
                return this.getSubscriptionOfTypeWithToken(
                  Pt.Q.PushSubscriptions,
                  e
                );
            });
          }
          getPushSubscriptionModelByLastKnownToken() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0,
              P.tI)("CoreModuleDirector.getPushSubscriptionModelByLastKnownToken");
              const { lastKnownPushToken: e } = yield fe.ZP.getAppState();
              if (e)
                return this.getSubscriptionOfTypeWithToken(
                  Pt.Q.PushSubscriptions,
                  e
                );
            });
          }
          getPushSubscriptionModel() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              return (
                (0, P.tI)("CoreModuleDirector.getPushSubscriptionModel"),
                (yield this.getPushSubscriptionModelByCurrentToken()) ||
                  (yield this.getPushSubscriptionModelByLastKnownToken())
              );
            });
          }
          getIdentityModel() {
            (0, P.tI)("CoreModuleDirector.getIdentityModel");
            const e = this.getModelStores(),
              t = Object.keys(e.identity.models);
            return e.identity.models[t[0]];
          }
          getPropertiesModel() {
            (0, P.tI)("CoreModuleDirector.getPropertiesModel");
            const e = this.getModelStores(),
              t = Object.keys(e.properties.models);
            return e.properties.models[t[0]];
          }
          getAllSubscriptionsModels() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("CoreModuleDirector.getAllSubscriptionsModels");
              const e = this.getEmailSubscriptionModels(),
                t = this.getSmsSubscriptionModels(),
                i = yield this.getPushSubscriptionModel();
              return Object.values(e)
                .concat(Object.values(t))
                .concat(i ? [i] : []);
            });
          }
          getSubscriptionOfTypeWithToken(e, t) {
            switch (
              ((0, P.tI)("CoreModuleDirector.getSubscriptionOfTypeWithToken", {
                type: e,
                token: t,
              }),
              e)
            ) {
              case Pt.Q.EmailSubscriptions: {
                const e = this.getEmailSubscriptionModels();
                return Object.values(e).find((e) => e.data.token === t);
              }
              case Pt.Q.SmsSubscriptions: {
                const e = this.getSmsSubscriptionModels();
                return Object.values(e).find((e) => e.data.token === t);
              }
              case Pt.Q.PushSubscriptions: {
                const e = this.getAllPushSubscriptionModels();
                return Object.values(e).find((e) => e.data.token === t);
              }
              default:
                return;
            }
          }
          getModelStores() {
            var e;
            return null === (e = this.core.modelRepo) || void 0 === e
              ? void 0
              : e.modelStores;
          }
        }
        class tn {
          static login(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var i, n;
              const o = he.getConsentRequired(),
                s = yield fe.ZP.getConsentGiven();
              if (o && !s)
                throw new I.Z(
                  "Login: Consent required but not given, skipping login"
                );
              try {
                nn.coreDirector.forceDeltaQueueProcessingOnAllExecutors(),
                  t && (yield fe.ZP.setJWTToken(t));
                const o = nn.coreDirector.getIdentityModel(),
                  s = null == o ? void 0 : o.onesignalId;
                if (!o) throw new I.Z("Login: No identity model found");
                if (
                  (null === (i = null == o ? void 0 : o.data) || void 0 === i
                    ? void 0
                    : i.external_id) === e
                )
                  return void E.Z.debug(
                    "Login: External ID already set, skipping login"
                  );
                const r = yield nn.coreDirector.getPushSubscriptionModel();
                let a;
                r && xt(r.data) && (a = r.data.id);
                const l = tn.isIdentified(o.data);
                let d;
                if ((tn.setExternalId(o, e), l)) {
                  d = { identity: { external_id: e } };
                  const t = yield nn.coreDirector.getPushSubscriptionModel();
                  t && (d.subscriptions = [t.data]);
                } else d = yield At.getAllUserData();
                yield nn.coreDirector.resetModelRepoAndCache(),
                  yield At.initializeUser(!0);
                try {
                  const e = yield tn.identifyOrUpsertUser(d, l, a),
                    t =
                      null === (n = null == e ? void 0 : e.identity) ||
                      void 0 === n
                        ? void 0
                        : n.onesignal_id;
                  if (!t)
                    return void E.Z.info(
                      "Caching login call, waiting on network or subscription creation."
                    );
                  yield tn.fetchAndHydrate(t);
                } catch (e) {
                  if (
                    (E.Z.error(
                      `Login: Error while identifying/upserting user: ${e.message}`
                    ),
                    s)
                  ) {
                    E.Z.debug("Login: Restoring old user data");
                    try {
                      yield tn.fetchAndHydrate(s);
                    } catch (e) {
                      E.Z.error(
                        `Login: Error while restoring old user data: ${e.message}`
                      );
                    }
                  }
                  throw e;
                }
              } catch (e) {
                E.Z.error(e);
              }
            });
          }
          static logout() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = nn.coreDirector.getIdentityModel();
              if (!e || !e.data || !e.data.external_id)
                return void E.Z.debug(
                  "Logout: User is not logged in, skipping logout"
                );
              nn.coreDirector.forceDeltaQueueProcessingOnAllExecutors(),
                At.resetUserMetaProperties();
              const t = yield nn.coreDirector.getPushSubscriptionModel();
              yield nn.coreDirector.resetModelRepoAndCache(),
                nn.coreDirector.add(Pt.Q.PushSubscriptions, t, !1),
                yield At.initializeUser(!1);
            });
          }
          static setExternalId(e, t) {
            if (
              ((0, P.tI)("LoginManager.setExternalId", { externalId: t }), !e)
            )
              throw new I.Z("login: no identity model found");
            e.set("external_id", t, !1);
          }
          static isIdentified(e) {
            return (
              (0, P.tI)("LoginManager.isIdentified", { identity: e }),
              void 0 !== e.external_id
            );
          }
          static identifyOrUpsertUser(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let n;
              return (
                (0, P.tI)("LoginManager.identifyOrUpsertUser", {
                  userData: e,
                  isIdentified: t,
                  subscriptionId: i,
                }),
                (n = t
                  ? yield this.upsertUser(e, i)
                  : yield this.identifyUser(e, i)),
                n
              );
            });
          }
          static upsertUser(e, t, i = 5) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, P.tI)("LoginManager.upsertUser", {
                  userData: e,
                  subscriptionId: t,
                }),
                0 === i)
              )
                throw new I.Z("Login: upsertUser failed: max retries reached");
              const n = yield bt.getAppId(),
                o = JSON.parse(JSON.stringify(e));
              this.stripAliasesOtherThanExternalId(e);
              const s = yield D.createUser({ appId: n, subscriptionId: t }, e),
                r = null == s ? void 0 : s.result,
                a = null == s ? void 0 : s.status;
              if (a >= 200 && a < 300) E.Z.info("Successfully created user", r);
              else if (a >= 400 && a < 500) E.Z.error("Malformed request", r);
              else if (a >= 500)
                return (
                  E.Z.error("Server error. Retrying..."),
                  yield C(T[i]),
                  this.upsertUser(o, t, i - 1)
                );
              return r;
            });
          }
          static identifyUser(e, t, i = 5) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              var n;
              if (
                ((0, P.tI)("LoginManager.identifyUser", {
                  userData: e,
                  pushSubscriptionId: t,
                }),
                0 === i)
              )
                throw new I.Z(
                  "Login: identifyUser failed: max retries reached"
                );
              const { onesignal_id: o } = e.identity,
                s = JSON.parse(JSON.stringify(e));
              this.stripAliasesOtherThanExternalId(e);
              const { identity: r } = e;
              if (!r) throw new I.Z("identifyUser failed: no identity found");
              if (!o) {
                const t = nn.coreDirector.getIdentityModel();
                return null == t || t.set(y.EXTERNAL_ID, r.external_id, !1), e;
              }
              const a = yield bt.getAppId(),
                l = new y(y.ONESIGNAL_ID, o),
                d = yield D.addAlias({ appId: a }, l, r),
                c = null == d ? void 0 : d.status;
              if (c >= 200 && c < 300) E.Z.info("identifyUser succeeded");
              else {
                if (409 === c && t)
                  return yield this.transferSubscription(a, t, r);
                if (c >= 400 && c < 500)
                  throw new I.Z(
                    `identifyUser: malformed request: ${JSON.stringify(
                      null == d ? void 0 : d.result
                    )}`
                  );
                if (c >= 500)
                  return (
                    E.Z.error("identifyUser failed: server error. Retrying..."),
                    yield C(T[i]),
                    this.identifyUser(s, t, i - 1)
                  );
              }
              return {
                identity:
                  null === (n = null == d ? void 0 : d.result) || void 0 === n
                    ? void 0
                    : n.identity,
              };
            });
          }
          static fetchAndHydrate(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("LoginManager.fetchAndHydrate", { onesignalId: e });
              const t = yield D.getUser(
                { appId: yield bt.getAppId() },
                new y(y.ONESIGNAL_ID, e)
              );
              nn.coreDirector.hydrateUser(null == t ? void 0 : t.result);
            });
          }
          static stripAliasesOtherThanExternalId(e) {
            (0, P.tI)("LoginManager.stripAliasesOtherThanExternalId", {
              userData: e,
            });
            const { identity: t } = e;
            if (!t)
              throw new I.Z(
                "stripAliasesOtherThanExternalId failed: no identity found"
              );
            const { external_id: i } = t;
            if (!i)
              throw new I.Z(
                "stripAliasesOtherThanExternalId failed: no external_id found"
              );
            const n = { external_id: i };
            e.identity = n;
          }
          static transferSubscription(e, t, i) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              E.Z.error(
                "^^^ Handling 409 HTTP response reported by the browser above. This is an expected result when the User already exists. Push subscription is being transferred the existing User."
              );
              const n = yield D.transferSubscription({ appId: e }, t, i, !1),
                o = null == n ? void 0 : n.status,
                s = null == n ? void 0 : n.result;
              if (o && o >= 200 && o < 300) {
                E.Z.info("transferSubscription succeeded");
                return { identity: null == s ? void 0 : s.identity };
              }
              throw new I.Z(
                `transferSubscription failed: ${JSON.stringify(s)}}`
              );
            });
          }
        }
        class nn {
          static _initializeCoreModuleAndOSNamespaces() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const e = new Xi();
              yield e.initPromise, (nn.coreDirector = new en(e));
              const t = yield fe.ZP.getSubscription(),
                i = yield nn.context.permissionManager.getPermissionStatus();
              (nn.User = new Rt(!0, t, i)), (this.Notifications = new Ni(i));
            });
          }
          static _initializeConfig(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              const t = yield new oe().getAppConfig(e);
              E.Z.debug("OneSignal: Final web app config:", t),
                (nn.config = t),
                (nn.environmentInfo = d.getEnvironmentInfo()),
                (nn.context = new Ti(t)),
                (nn.config = nn.context.appConfig);
            });
          }
          static login(e, t) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, P.tI)("login", { externalId: e, jwtToken: t }),
                void 0 === e)
              )
                throw new InvalidArgumentError.R(
                  "externalId",
                  InvalidArgumentError.Q.Empty
                );
              if ("string" != typeof e)
                throw new InvalidArgumentError.R(
                  "externalId",
                  InvalidArgumentError.Q.WrongType
                );
              if (void 0 !== t && "string" != typeof t)
                throw new InvalidArgumentError.R(
                  "jwtToken",
                  InvalidArgumentError.Q.WrongType
                );
              yield tn.login(e, t);
            });
          }
          static logout() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              (0, P.tI)("logout"), tn.logout();
            });
          }
          static init(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, P.tI)("init"),
                E.Z.debug(
                  `Browser Environment: ${(0, l.M)().name} ${
                    (0, l.M)().version
                  }`
                ),
                he.removeLegacySubscriptionOptions(),
                yield Oi.polyfillSafariFetch(),
                Oi.errorIfInitAlreadyCalled(),
                yield nn._initializeConfig(e),
                !nn.config)
              )
                throw new Error("OneSignal config not initialized!");
              if ("safari" != (0, l.M)().name || nn.config.safariWebId) {
                if (
                  (yield nn._initializeCoreModuleAndOSNamespaces(),
                  he.getConsentRequired())
                ) {
                  if (!(yield fe.ZP.getConsentGiven()))
                    return void (nn.pendingInit = !0);
                }
                yield nn._delayedInit();
              } else E.Z.warn(new SdkInitError(A.MissingSafariWebId));
            });
          }
          static _delayedInit() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              function e() {
                return (0, o.mG)(this, void 0, void 0, function* () {
                  nn.__initAlreadyCalled ||
                    ((nn.__initAlreadyCalled = !0),
                    nn.emitter.on(
                      nn.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                      Ft.onNotificationPermissionChange
                    ),
                    nn.emitter.on(
                      nn.EVENTS.SUBSCRIPTION_CHANGED,
                      Ft._onSubscriptionChanged
                    ),
                    nn.emitter.on(
                      nn.EVENTS.SDK_INITIALIZED,
                      Oi.onSdkInitialized
                    ),
                    window.addEventListener("focus", () => {
                      bt.checkAndTriggerNotificationPermissionChanged();
                    }),
                    yield Oi.initSaveState(),
                    yield Oi.saveInitOptions(),
                    yield Oi.internalInit());
                });
              }
              (nn.pendingInit = !1),
                nn.context.workerMessenger.listen(),
                "complete" === document.readyState ||
                "interactive" === document.readyState
                  ? yield e()
                  : (E.Z.debug(
                      "OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."
                    ),
                    window.addEventListener("DOMContentLoaded", () => {
                      e();
                    }),
                    (document.onreadystatechange = () => {
                      ("complete" !== document.readyState &&
                        "interactive" !== document.readyState) ||
                        e();
                    }));
            });
          }
          static setConsentGiven(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (((0, P.tI)("setConsentGiven", { consent: e }), void 0 === e))
                throw new InvalidArgumentError.R(
                  "consent",
                  InvalidArgumentError.Q.Empty
                );
              if ("boolean" != typeof e)
                throw new InvalidArgumentError.R(
                  "consent",
                  InvalidArgumentError.Q.WrongType
                );
              yield fe.ZP.setConsentGiven(e),
                e && nn.pendingInit && (yield nn._delayedInit());
            });
          }
          static setConsentRequired(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              if (
                ((0, P.tI)("setConsentRequired", { requiresConsent: e }),
                void 0 === e)
              )
                throw new InvalidArgumentError.R(
                  "requiresConsent",
                  InvalidArgumentError.Q.Empty
                );
              if ("boolean" != typeof e)
                throw new InvalidArgumentError.R(
                  "requiresConsent",
                  InvalidArgumentError.Q.WrongType
                );
              he.setConsentRequired(e);
            });
          }
          static push(e) {
            ki.processItem(nn, e);
          }
        }
        (nn.EVENTS = {
          NOTIFICATION_PERMISSION_CHANGED_AS_STRING: "permissionChangeAsString",
          NOTIFICATION_PERMISSION_CHANGED_AS_BOOLEAN: "permissionChange",
          SUBSCRIPTION_CHANGED: "change",
          WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
          NOTIFICATION_WILL_DISPLAY: "foregroundWillDisplay",
          NOTIFICATION_DISMISSED: "dismiss",
          NOTIFICATION_CLICKED: "click",
          SDK_INITIALIZED: "initializeInternal",
          SDK_INITIALIZED_PUBLIC: "initialize",
          REGISTERED: "register",
          PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
          TEST_FINISHED_ALLOW_CLICK_HANDLING: "testFinishedAllowClickHandling",
          SESSION_STARTED: "os.sessionStarted",
        }),
          (nn.VERSION = b.Z.version()),
          (nn._VERSION = b.Z.version()),
          (nn.sdkEnvironment = g.Z),
          (nn.config = null),
          (nn._sessionInitAlreadyRunning = !1),
          (nn._isNewVisitor = !1),
          (nn.timedLocalStorage = ci),
          (nn.initialized = !1),
          (nn._didLoadITILibrary = !1),
          (nn.notifyButton = null),
          (nn.environment = b.Z),
          (nn.database = fe.ZP),
          (nn.event = ve.Z),
          (nn.pendingInit = !0),
          (nn.emitter = new Lt.Z()),
          (nn.cache = {}),
          (nn._LOGGING = !1),
          (nn.LOGGING = !1),
          (nn._initCalled = !1),
          (nn.__initAlreadyCalled = !1),
          (nn.Notifications = new Ni()),
          (nn.Slidedown = new (class extends Zt {
            constructor() {
              super();
            }
            promptPush(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, P.JX)(),
                  yield nn.context.promptsManager.internalShowParticularSlidedown(
                    G.Push,
                    e
                  );
              });
            }
            promptPushCategories(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, P.JX)();
                const t =
                  yield nn.context.subscriptionManager.isPushNotificationsEnabled();
                yield nn.context.promptsManager.internalShowCategorySlidedown(
                  Object.assign(Object.assign({}, e), { isInUpdateMode: t })
                );
              });
            }
            promptSms(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, P.JX)(),
                  yield nn.context.promptsManager.internalShowSmsSlidedown(
                    Object.assign({}, e)
                  );
              });
            }
            promptEmail(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, P.JX)(),
                  yield nn.context.promptsManager.internalShowEmailSlidedown(
                    Object.assign({}, e)
                  );
              });
            }
            promptSmsAndEmail(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                yield (0, P.JX)(),
                  yield nn.context.promptsManager.internalShowSmsAndEmailSlidedown(
                    Object.assign({}, e)
                  );
              });
            }
            addEventListener(e, t) {
              nn.emitter.on(e, t);
            }
            removeEventListener(e, t) {
              nn.emitter.off(e, t);
            }
          })()),
          (nn.Session = new (class {
            sendOutcome(e, t) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                const i = OneSignal.config.userConfig.outcomes;
                if (!i)
                  return void E.Z.error(
                    `Could not send ${e}. No outcomes config found.`
                  );
                const n = new Oe(OneSignal.config.appId, i, e, !1);
                if (void 0 !== t && "number" != typeof t)
                  return void E.Z.error(
                    "Outcome weight can only be a number if present."
                  );
                if (!(yield n.beforeOutcomeSend())) return;
                const o = yield n.getAttribution();
                yield n.send({
                  type: o.type,
                  notificationIds: o.notificationIds,
                  weight: t,
                });
              });
            }
            sendUniqueOutcome(e) {
              return (0, o.mG)(this, void 0, void 0, function* () {
                const t = OneSignal.config.userConfig.outcomes;
                if (!t)
                  return void E.Z.error(
                    `Could not send ${e}. No outcomes config found.`
                  );
                const i = new Oe(OneSignal.config.appId, t, e, !0);
                if (!(yield i.beforeOutcomeSend())) return;
                const n = yield i.getAttribution();
                if (n.type === M.NotSupported)
                  return void E.Z.warn(
                    "You are on a free plan. Please upgrade to use this functionality."
                  );
                const { notificationIds: o } = n,
                  s = yield i.getNotifsToAttributeWithUniqueOutcome(o);
                i.shouldSendUnique(n, s)
                  ? yield i.send({ type: n.type, notificationIds: s })
                  : E.Z.warn(
                      `'${e}' was already reported for all notifications.`
                    );
              });
            }
          })()),
          (nn.User = new Rt(!1)),
          (nn.Debug = new (class {
            setLogLevel(e) {
              E.Z.setLevel(e);
            }
          })()),
          E.Z.info(
            `OneSignal Web SDK loaded (version ${
              nn._VERSION
            },\n  ${g.Z.getWindowEnv().toString()} environment).`
          ),
          E.Z.debug(
            `Current Page URL: ${
              "undefined" == typeof location ? "NodeJS" : location.href
            }`
          );
      },
      191: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        var n = i(608);
        class o {
          static push(e) {
            n.Z.push(e);
          }
        }
      },
      50: (e, t, i) => {
        "use strict";
        i.d(t, { c: () => o, Z: () => s });
        var n = i(752);
        class TimeoutError extends n.Z {
          constructor(e = "The asynchronous operation has timed out.") {
            super(e),
              (this.message = e),
              Object.setPrototypeOf(this, TimeoutError.prototype);
          }
        }
        class o {
          static contains(e, t) {
            return !!e && -1 !== e.indexOf(t);
          }
          static trimUndefined(e) {
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
          }
          static capitalize(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          }
          static isNullOrUndefined(e) {
            return null == e;
          }
          static valueOrDefault(e, t) {
            return null == e ? t : e;
          }
          static stringify(e) {
            return JSON.stringify(
              e,
              (e, t) => ("function" == typeof t ? "[Function]" : t),
              4
            );
          }
          static encodeHashAsUriComponent(e) {
            let t = "";
            const i = Object.keys(e);
            for (const n of i) {
              const i = e[n];
              t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`;
            }
            return t;
          }
          static timeoutPromise(e, t) {
            const i = new Promise((e, i) => {
              setTimeout(() => {
                i(new TimeoutError());
              }, t);
            });
            return Promise.race([e, i]);
          }
          static getValueOrDefault(e, t) {
            return null != e ? e : t;
          }
          static padStart(e, t, i) {
            let n = e;
            for (; n.length < t; ) n = i + n;
            return n;
          }
          static parseVersionString(e) {
            const t = e.toString().split("."),
              i = o.padStart(t[0], 2, "0");
            let n;
            return (
              (n = t[1] ? o.padStart(t[1], 2, "0") : "00"), Number(`${i}.${n}`)
            );
          }
          static lastParts(e, t, i) {
            const n = e.split(t),
              o = Math.max(n.length - i, 0);
            return n.slice(o).join(t);
          }
          static enforceAppId(e) {
            if (!e) throw new Error("App id cannot be empty");
          }
          static enforceAlias(e) {
            if (!e.label) throw new Error("Alias label cannot be empty");
            if (!e.id) throw new Error("Alias id cannot be empty");
          }
          static sortArrayOfObjects(e, t, i = !1, n = !0) {
            const o = n ? e : e.slice();
            return (
              o.sort((e, n) => {
                const o = t(e),
                  s = t(n);
                return o > s ? (i ? -1 : 1) : o < s ? (i ? 1 : -1) : 0;
              }),
              o
            );
          }
        }
        const s = o;
      },
      86: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => n, R: () => InvalidArgumentError });
        var n,
          o = i(752);
        !(function (e) {
          (e[(e.Empty = 0)] = "Empty"),
            (e[(e.Malformed = 1)] = "Malformed"),
            (e[(e.EnumOutOfRange = 2)] = "EnumOutOfRange"),
            (e[(e.WrongType = 3)] = "WrongType");
        })(n || (n = {}));
        class InvalidArgumentError extends o.Z {
          constructor(e, t, i) {
            let o;
            switch (t) {
              case n.Empty:
                o = `Supply a non-empty value to '${e}'. ${i}`;
                break;
              case n.Malformed:
                o = `The value for '${e}' was malformed. ${i}`;
                break;
              case n.EnumOutOfRange:
                o = `The value for '${e}' was out of range of the expected input enum. ${i}`;
                break;
              case n.WrongType:
                o = `The value for '${e}' was of the wrong type. ${i}`;
            }
            super(o),
              (this.argument = e),
              (this.reason = n[t]),
              Object.setPrototypeOf(this, InvalidArgumentError.prototype);
          }
        }
      },
      752: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => n });
        class n extends Error {
          constructor(e = "") {
            super(e),
              Object.defineProperty(this, "message", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !0,
              }),
              Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: this.constructor.name,
                writable: !0,
              }),
              Error.hasOwnProperty("captureStackTrace")
                ? Error.captureStackTrace(this, this.constructor)
                : (Object.defineProperty(this, "stack", {
                    configurable: !0,
                    enumerable: !1,
                    value: new Error(e).stack,
                    writable: !0,
                  }),
                  Object.setPrototypeOf(this, n.prototype));
          }
        }
      },
      930: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => a });
        var n = i(326),
          o = i(468),
          s = i(450);
        function r() {
          return (
            "undefined" != typeof PushSubscriptionOptions &&
            PushSubscriptionOptions.prototype.hasOwnProperty(
              "applicationServerKey"
            )
          );
        }
        class a {
          static isBrowser() {
            return "undefined" != typeof window;
          }
          static useSafariLegacyPush() {
            var e;
            return (
              this.isBrowser() &&
              null !=
                (null === (e = window.safari) || void 0 === e
                  ? void 0
                  : e.pushNotification)
            );
          }
          static useSafariVapidPush() {
            return (
              "safari" == (0, s.M)().name && r() && !this.useSafariLegacyPush()
            );
          }
          static version() {
            return Number(160201);
          }
          static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
            return ["tw", "hant"];
          }
          static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
            return ["cn", "hans"];
          }
          static getLanguage() {
            let e = navigator.language;
            if (e) {
              e = e.toLowerCase();
              const t = e.split("-");
              if ("zh" == t[0]) {
                for (const e of a.TRADITIONAL_CHINESE_LANGUAGE_TAG)
                  if (-1 !== t.indexOf(e)) return "zh-Hant";
                for (const e of a.SIMPLIFIED_CHINESE_LANGUAGE_TAG)
                  if (-1 !== t.indexOf(e)) return "zh-Hans";
                return "zh-Hant";
              }
              return t[0].substring(0, 2);
            }
            return "en";
          }
          static supportsServiceWorkers() {
            return (
              n.Z.getWindowEnv() === o.Q.ServiceWorker ||
              ("undefined" != typeof navigator && "serviceWorker" in navigator)
            );
          }
          static getSdkStylesVersionHash() {
            return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__
              ? "2"
              : __SRC_STYLESHEETS_MD5_HASH__;
          }
        }
      },
      680: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        var n = i(655);
        class o {
          constructor() {
            this._events = {};
          }
          on(e, t) {
            return (
              (this._events[e] = this._events[e] || []),
              this._events[e].push(t),
              this
            );
          }
          once(e, t) {
            const i = this;
            function n() {
              i.off(e, n), t.apply(this, arguments);
            }
            return (n.listener = t), this.on(e, n), this;
          }
          off(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
              for (let e = 0; e < i.length; e += 1)
                if (i[e] === t || i[e].listener === t) {
                  i.splice(e, 1);
                  break;
                }
              0 === i.length && this.removeAllListeners(e);
            }
            return this;
          }
          removeAllListeners(e) {
            return e ? delete this._events[e] : (this._events = {}), this;
          }
          listeners(e) {
            try {
              return this._events[e];
            } catch (e) {
              return;
            }
          }
          numberOfListeners(e) {
            const t = this.listeners(e);
            return t ? t.length : 0;
          }
          emit(...e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const t = e.shift();
              let i = this._events[t];
              if (void 0 !== i) {
                i = i.slice(0);
                const t = i.length;
                for (let n = 0; n < t; n += 1) yield i[n].apply(this, e);
              }
              return this;
            });
          }
        }
      },
      107: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => n });
        class n {
          static shouldLog() {
            try {
              if (
                "undefined" == typeof window ||
                void 0 === window.localStorage
              )
                return !1;
              const e = window.localStorage.getItem("loglevel");
              return !(!e || "trace" !== e.toLowerCase());
            } catch (e) {
              return !1;
            }
          }
          static setLevel(e) {
            if ("undefined" != typeof window && void 0 !== window.localStorage)
              try {
                window.localStorage.setItem("loglevel", e),
                  (n.proxyMethodsCreated = void 0),
                  n.createProxyMethods();
              } catch (e) {
                return;
              }
          }
          static createProxyMethods() {
            if (void 0 !== n.proxyMethodsCreated) return;
            n.proxyMethodsCreated = !0;
            const e = {
              log: "debug",
              trace: "trace",
              info: "info",
              warn: "warn",
              error: "error",
            };
            for (const t of Object.keys(e)) {
              const i = void 0 !== console[t],
                o = e[t],
                s = i && (n.shouldLog() || "error" === o);
              n[o] = s ? console[t].bind(console) : function () {};
            }
          }
        }
        n.createProxyMethods();
      },
      326: (e, t, i) => {
        "use strict";
        var n;
        i.d(t, { Z: () => a }),
          (function (e) {
            (e.Development = "Development"),
              (e.Staging = "Staging"),
              (e.Production = "Production");
          })(n || (n = {}));
        var o = i(468),
          InvalidArgumentError = i(86),
          s = i(930);
        const r = ["outcomes", "on_focus"];
        class a {
          static getBuildEnv() {
            return n.Production;
          }
          static getApiEnv() {
            return n.Production;
          }
          static getOrigin() {
            return s.Z.isBrowser()
              ? window.location.origin
              : "undefined" != typeof self &&
                "undefined" != typeof ServiceWorkerGlobalScope
              ? self.location.origin
              : "Unknown";
          }
          static getWindowEnv() {
            if ("undefined" == typeof window) {
              if (
                "undefined" != typeof self &&
                "undefined" != typeof ServiceWorkerGlobalScope
              )
                return o.Q.ServiceWorker;
              throw Error("OneSignalSDK: Unsupported JS runtime!");
            }
            return o.Q.Host;
          }
          static getBuildEnvPrefix(e = a.getBuildEnv()) {
            switch (e) {
              case n.Development:
                return "Dev-";
              case n.Staging:
                return "Staging-";
              case n.Production:
                return "";
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
          }
          static getOneSignalApiUrl(e = a.getApiEnv(), t) {
            const i = "onesignal.com";
            switch (e) {
              case n.Development:
                return a.isTurbineEndpoint(t)
                  ? new URL(`https://${i}:18080/api/v1`)
                  : new URL(`https://${i}:3001/api/v1`);
              case n.Staging:
                return new URL(`https://${i}/api/v1`);
              case n.Production:
                return new URL("https://onesignal.com/api/v1");
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
          }
          static getOneSignalStaticResourcesUrl() {
            return new URL("https://media.onesignal.com/web-sdk");
          }
          static getOneSignalResourceUrlPath(e = a.getBuildEnv()) {
            const t = "localhost";
            let i;
            switch (e) {
              case n.Development:
                i = `http://${t}:4000`;
                break;
              case n.Staging:
                i = `https://${t}`;
                break;
              case n.Production:
                i = "https://onesignal.com";
                break;
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
            return new URL(`${i}/sdks/web/v16`);
          }
          static getOneSignalCssFileName(e = a.getBuildEnv()) {
            const t = "OneSignalSDK.page.styles.css";
            switch (e) {
              case n.Development:
                return `Dev-${t}`;
              case n.Staging:
                return `Staging-${t}`;
              case n.Production:
                return t;
              default:
                throw new InvalidArgumentError.R(
                  "buildEnv",
                  InvalidArgumentError.Q.EnumOutOfRange
                );
            }
          }
          static isTurbineEndpoint(e) {
            return !!e && r.some((t) => e.indexOf(t) > -1);
          }
        }
      },
      392: (e, t, i) => {
        "use strict";
        var n, o;
        i.d(t, { $y: () => n, I0: () => r, Ky: () => s, eB: () => o }),
          (function (e) {
            (e.Active = "active"), (e.Inactive = "inactive");
          })(n || (n = {})),
          (function (e) {
            (e[(e.UserCreate = 1)] = "UserCreate"),
              (e[(e.UserNewSession = 2)] = "UserNewSession"),
              (e[(e.VisibilityVisible = 3)] = "VisibilityVisible"),
              (e[(e.VisibilityHidden = 4)] = "VisibilityHidden"),
              (e[(e.BeforeUnload = 5)] = "BeforeUnload"),
              (e[(e.PageRefresh = 6)] = "PageRefresh"),
              (e[(e.Focus = 7)] = "Focus"),
              (e[(e.Blur = 8)] = "Blur");
          })(o || (o = {}));
        const s = "oneSignalSession";
        function r(e) {
          const t = new Date().getTime(),
            i = (e && e.notificationId) || null;
          return {
            sessionKey: s,
            appId: e.appId,
            startTimestamp: t,
            accumulatedDuration: 0,
            notificationId: i,
            status: n.Active,
            lastDeactivatedTimestamp: null,
            lastActivatedTimestamp: t,
          };
        }
      },
      468: (e, t, i) => {
        "use strict";
        var n;
        i.d(t, { Q: () => n }),
          (function (e) {
            (e.ServiceWorker = "ServiceWorker"), (e.Host = "Host");
          })(n || (n = {}));
      },
      934: (e, t, i) => {
        "use strict";
        i.d(t, { H4: () => b, ZP: () => S });
        var n = i(655),
          o = i(680),
          s = i(894),
          r = i(50),
          a = i(107);
        class l {
          constructor(e, t = 5) {
            (this.databaseName = e),
              (this.dbVersion = t),
              (this.emitter = new o.Z());
          }
          open(e) {
            return new Promise((t) => {
              let i;
              try {
                i = indexedDB.open(e, this.dbVersion);
              } catch (e) {}
              if (!i) return null;
              (i.onerror = this.onDatabaseOpenError.bind(this)),
                (i.onblocked = this.onDatabaseOpenBlocked.bind(this)),
                (i.onupgradeneeded = this.onDatabaseUpgradeNeeded.bind(this)),
                (i.onsuccess = () => {
                  (this.database = i.result),
                    (this.database.onerror = this.onDatabaseError),
                    (this.database.onversionchange =
                      this.onDatabaseVersionChange),
                    t(this.database);
                });
            });
          }
          close() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              var e;
              (yield this.ensureDatabaseOpen()).close(),
                null === (e = this.database) || void 0 === e || e.close();
            });
          }
          ensureDatabaseOpen() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (
                this.openLock || (this.openLock = this.open(this.databaseName)),
                yield this.openLock
              );
            });
          }
          onDatabaseOpenError(e) {
            e.preventDefault();
            const t = e.target.error;
            r.Z.contains(
              t.message,
              "The operation failed for reasons unrelated to the database itself and not covered by any other error code"
            ) ||
            r.Z.contains(
              t.message,
              "A mutation operation was attempted on a database that did not allow mutations"
            )
              ? a.Z.warn(
                  "OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6"
                )
              : a.Z.warn(
                  "OneSignal: Fatal error opening IndexedDb database:",
                  t
                );
          }
          onDatabaseError(e) {
            a.Z.debug("IndexedDb: Generic database error", e.target.errorCode);
          }
          onDatabaseOpenBlocked() {
            a.Z.debug("IndexedDb: Blocked event");
          }
          onDatabaseVersionChange(e) {
            a.Z.debug("IndexedDb: versionchange event");
          }
          onDatabaseUpgradeNeeded(e) {
            a.Z.debug(
              "IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event)."
            );
            const t = e.target,
              i = t.transaction;
            if (!i) throw Error("Can't migrate DB without a transaction");
            const n = t.result,
              o = e.newVersion || Number.MAX_SAFE_INTEGER;
            o >= 1 &&
              e.oldVersion < 1 &&
              (n.createObjectStore("Ids", { keyPath: "type" }),
              n.createObjectStore("NotificationOpened", { keyPath: "url" }),
              n.createObjectStore("Options", { keyPath: "key" })),
              o >= 2 &&
                e.oldVersion < 2 &&
                (n.createObjectStore("Sessions", { keyPath: "sessionKey" }),
                n.createObjectStore("NotificationReceived", {
                  keyPath: "notificationId",
                }),
                n.createObjectStore("NotificationClicked", {
                  keyPath: "notificationId",
                })),
              o >= 3 &&
                e.oldVersion < 3 &&
                n.createObjectStore("SentUniqueOutcome", {
                  keyPath: "outcomeName",
                }),
              o >= 4 &&
                e.oldVersion < 4 &&
                (n.createObjectStore(s.Q.Identity, { keyPath: "modelId" }),
                n.createObjectStore(s.Q.Properties, { keyPath: "modelId" }),
                n.createObjectStore(s.Q.PushSubscriptions, {
                  keyPath: "modelId",
                }),
                n.createObjectStore(s.Q.SmsSubscriptions, {
                  keyPath: "modelId",
                }),
                n.createObjectStore(s.Q.EmailSubscriptions, {
                  keyPath: "modelId",
                })),
              o >= 5 &&
                e.oldVersion < 5 &&
                (this.migrateOutcomesNotificationClickedTableForV5(n, i),
                this.migrateOutcomesNotificationReceivedTableForV5(n, i)),
              o >= 6 && e.oldVersion,
              "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0);
          }
          migrateOutcomesNotificationClickedTableForV5(e, t) {
            const i = "Outcomes.NotificationClicked";
            e.createObjectStore(i, { keyPath: "notificationId" });
            const n = "NotificationClicked",
              o = t.objectStore(n).openCursor();
            (o.onsuccess = () => {
              if (!o.result) return void e.deleteObjectStore(n);
              const s = o.result.value;
              t
                .objectStore(i)
                .put({
                  notificationId: s.notificationId || s.notification.id,
                  appId: s.appId,
                  timestamp: s.timestamp,
                }),
                o.result.continue();
            }),
              (o.onerror = () => {
                console.error(
                  "Could not migrate NotificationClicked records",
                  o.error
                );
              });
          }
          migrateOutcomesNotificationReceivedTableForV5(e, t) {
            const i = "Outcomes.NotificationReceived";
            e.createObjectStore(i, { keyPath: "notificationId" });
            const n = "NotificationReceived",
              o = t.objectStore(n).openCursor();
            (o.onsuccess = () => {
              o.result
                ? (t.objectStore(i).put(o.result.value), o.result.continue())
                : e.deleteObjectStore(n);
            }),
              (o.onerror = () => {
                console.error(
                  "Could not migrate NotificationReceived records",
                  o.error
                );
              });
          }
          get(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const i = yield this.ensureDatabaseOpen();
              return t
                ? yield new Promise((n, o) => {
                    const s = i.transaction(e).objectStore(e).get(t);
                    (s.onsuccess = () => {
                      n(s.result);
                    }),
                      (s.onerror = () => {
                        o(s.error);
                      });
                  })
                : yield new Promise((t, n) => {
                    const o = {},
                      s = i.transaction(e).objectStore(e).openCursor();
                    (s.onsuccess = (e) => {
                      const i = e.target.result;
                      if (i) {
                        const e = i.key;
                        (o[e] = i.value), i.continue();
                      } else t(o);
                    }),
                      (s.onerror = () => {
                        n(s.error);
                      });
                  });
            });
          }
          getAll(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const t = yield this.ensureDatabaseOpen();
              return yield new Promise((i, n) => {
                const o = t.transaction(e).objectStore(e).openCursor(),
                  s = [];
                (o.onsuccess = (e) => {
                  const t = e.target.result;
                  t ? (s.push(t.value), t.continue()) : i(s);
                }),
                  (o.onerror = () => {
                    n(o.error);
                  });
              });
            });
          }
          put(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (
                yield this.ensureDatabaseOpen(),
                yield new Promise((i, n) => {
                  try {
                    const o = this.database
                      .transaction([e], "readwrite")
                      .objectStore(e)
                      .put(t);
                    (o.onsuccess = () => {
                      i(t);
                    }),
                      (o.onerror = (e) => {
                        a.Z.error("Database PUT Transaction Error:", e), n(e);
                      });
                  } catch (e) {
                    a.Z.error("Database PUT Error:", e), n(e);
                  }
                })
              );
            });
          }
          remove(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const i = yield this.ensureDatabaseOpen();
              return new Promise((n, o) => {
                try {
                  const s = i.transaction([e], "readwrite").objectStore(e),
                    r = t ? s.delete(t) : s.clear();
                  (r.onsuccess = () => {
                    n(t);
                  }),
                    (r.onerror = (e) => {
                      a.Z.error("Database REMOVE Transaction Error:", e), o(e);
                    });
                } catch (e) {
                  a.Z.error("Database REMOVE Error:", e), o(e);
                }
              });
            });
          }
        }
        class d {
          constructor() {
            this.lastKnownOptedIn = !0;
          }
        }
        class c {}
        class u {
          serialize() {
            return {
              deviceId: this.deviceId,
              subscriptionToken: this.subscriptionToken,
              optedOut: this.optedOut,
              createdAt: this.createdAt,
              expirationTime: this.expirationTime,
            };
          }
          static deserialize(e) {
            const t = new u();
            return (
              (t.deviceId = e.deviceId),
              (t.subscriptionToken = e.subscriptionToken),
              (t.optedOut = e.optedOut),
              (t.createdAt = e.createdAt),
              (t.expirationTime = e.expirationTime),
              t
            );
          }
        }
        var h,
          g = i(392);
        class p {
          static toDatabase(e) {
            const t = e.notification,
              i = e.result;
            return {
              id: t.notificationId,
              heading: t.title,
              content: t.body,
              data: t.additionalData,
              url: i.url,
              rr: t.confirmDelivery,
              icon: t.icon,
              image: t.image,
              tag: t.topic,
              badge: t.badgeIcon,
              action: i.actionId,
              buttons: this.toDatabaseButtons(t.actionButtons),
              timestamp: e.timestamp,
            };
          }
          static toDatabaseButtons(e) {
            return null == e
              ? void 0
              : e.map((e) => ({
                  action: e.actionId,
                  title: e.text,
                  icon: e.icon,
                  url: e.launchURL,
                }));
          }
          static fromDatabase(e) {
            return {
              result: { actionId: e.action, url: e.url },
              notification: {
                notificationId: e.id,
                title: e.heading,
                body: e.content,
                additionalData: e.data,
                launchURL: e.url,
                confirmDelivery: e.rr,
                icon: e.icon,
                image: e.image,
                topic: e.tag,
                badgeIcon: e.badge,
                actionButtons: this.toOSNotificationButtons(e.buttons),
              },
              timestamp: e.timestamp,
            };
          }
          static toOSNotificationButtons(e) {
            return null == e
              ? void 0
              : e.map((e) => ({
                  actionId: e.action,
                  text: e.title,
                  icon: e.icon,
                  launchURL: e.url,
                }));
          }
        }
        class m {
          static toDatabase(e, t) {
            return {
              appId: e,
              notificationId: t.notification.notificationId,
              timestamp: t.timestamp,
            };
          }
          static fromDatabase(e) {
            return {
              appId: e.appId,
              notificationId: e.notificationId,
              timestamp: e.timestamp,
            };
          }
        }
        class f {
          static toDatabase(e, t, i) {
            return { appId: e, notificationId: t.notificationId, timestamp: i };
          }
          static fromDatabase(e) {
            return {
              appId: e.appId,
              notificationId: e.notificationId,
              timestamp: e.timestamp,
            };
          }
        }
        !(function (e) {
          e[(e.SET = 0)] = "SET";
        })(h || (h = {}));
        const v = "Outcomes.NotificationClicked",
          b = "Outcomes.NotificationReceived";
        class S {
          constructor(e) {
            (this.databaseName = e),
              (this.emitter = new o.Z()),
              (this.database = new l(this.databaseName));
          }
          static resetInstance() {
            S.databaseInstance = null;
          }
          static get singletonInstance() {
            return (
              S.databaseInstanceName ||
                (S.databaseInstanceName = "ONE_SIGNAL_SDK_DB"),
              S.databaseInstance ||
                (S.databaseInstance = new S(S.databaseInstanceName)),
              S.databaseInstance
            );
          }
          static applyDbResultFilter(e, t, i) {
            switch (e) {
              case "Options":
                return i && t ? i.value : i && !t ? i : null;
              case "Ids":
                return i && t ? i.id : i && !t ? i : null;
              default:
                return i || null;
            }
          }
          get(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const i = yield this.database.get(e, t);
              return S.applyDbResultFilter(e, t, i);
            });
          }
          getAll(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.database.getAll(e);
            });
          }
          put(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield new Promise((i, n) => {
                this.database.put(e, t).then(() => i());
              }),
                this.emitter.emit(S.EVENTS.SET, t);
            });
          }
          remove(e, t) {
            return this.database.remove(e, t);
          }
          getAppConfig() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {},
                t = yield this.get("Ids", "appId");
              return (
                (e.appId = t),
                (e.vapidPublicKey = yield this.get(
                  "Options",
                  "vapidPublicKey"
                )),
                e
              );
            });
          }
          setAppConfig(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              e.appId &&
                (yield this.put("Ids", { type: "appId", id: e.appId })),
                e.vapidPublicKey &&
                  (yield this.put("Options", {
                    key: "vapidPublicKey",
                    value: e.vapidPublicKey,
                  }));
            });
          }
          getAppState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = new d();
              return (
                (e.defaultNotificationUrl = yield this.get(
                  "Options",
                  "defaultUrl"
                )),
                (e.defaultNotificationTitle = yield this.get(
                  "Options",
                  "defaultTitle"
                )),
                (e.lastKnownPushEnabled = yield this.get(
                  "Options",
                  "isPushEnabled"
                )),
                (e.pendingNotificationClickEvents =
                  yield this.getAllPendingNotificationClickEvents()),
                (e.lastKnownPushId = yield this.get("Options", "lastPushId")),
                (e.lastKnownPushToken = yield this.get(
                  "Options",
                  "lastPushToken"
                )),
                (e.lastKnownOptedIn = yield this.get("Options", "lastOptedIn")),
                e
              );
            });
          }
          setIsPushEnabled(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Options", { key: "isPushEnabled", value: e });
            });
          }
          setAppState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                (e.defaultNotificationUrl &&
                  (yield this.put("Options", {
                    key: "defaultUrl",
                    value: e.defaultNotificationUrl,
                  })),
                (e.defaultNotificationTitle ||
                  "" === e.defaultNotificationTitle) &&
                  (yield this.put("Options", {
                    key: "defaultTitle",
                    value: e.defaultNotificationTitle,
                  })),
                null != e.lastKnownPushEnabled &&
                  (yield this.setIsPushEnabled(e.lastKnownPushEnabled)),
                null != e.lastKnownPushId &&
                  (yield this.put("Options", {
                    key: "lastPushId",
                    value: e.lastKnownPushId,
                  })),
                null != e.lastKnownPushToken &&
                  (yield this.put("Options", {
                    key: "lastPushToken",
                    value: e.lastKnownPushToken,
                  })),
                null != e.lastKnownOptedIn &&
                  (yield this.put("Options", {
                    key: "lastOptedIn",
                    value: e.lastKnownOptedIn,
                  })),
                e.pendingNotificationClickEvents)
              ) {
                const t = Object.keys(e.pendingNotificationClickEvents);
                for (const i of t) {
                  const t = e.pendingNotificationClickEvents[i];
                  t
                    ? yield this.put("NotificationOpened", {
                        url: i,
                        data: t.data,
                        timestamp: t.timestamp,
                      })
                    : null === t &&
                      (yield this.remove("NotificationOpened", i));
                }
              }
            });
          }
          getUserState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = new c();
              return (
                (e.previousOneSignalId = ""),
                (e.previousExternalId = ""),
                (e.previousOneSignalId = yield this.get(
                  "Options",
                  "previousOneSignalId"
                )),
                (e.previousExternalId = yield this.get(
                  "Options",
                  "previousExternalId"
                )),
                e
              );
            });
          }
          setUserState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Options", {
                key: "previousOneSignalId",
                value: e.previousOneSignalId,
              }),
                yield this.put("Options", {
                  key: "previousExternalId",
                  value: e.previousExternalId,
                });
            });
          }
          getSubscription() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = new u();
              (e.deviceId = yield this.get("Ids", "userId")),
                (e.subscriptionToken = yield this.get("Ids", "registrationId"));
              const t = yield this.get("Options", "optedOut"),
                i = yield this.get("Options", "subscription"),
                n = yield this.get("Options", "subscriptionCreatedAt"),
                o = yield this.get("Options", "subscriptionExpirationTime");
              return (
                (e.optedOut = null != t ? t : null != i && !i),
                (e.createdAt = n),
                (e.expirationTime = o),
                e
              );
            });
          }
          setDeviceId(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Ids", { type: "userId", id: e });
            });
          }
          setSubscription(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              e.deviceId && (yield this.setDeviceId(e.deviceId)),
                void 0 !== e.subscriptionToken &&
                  (yield this.put("Ids", {
                    type: "registrationId",
                    id: e.subscriptionToken,
                  })),
                null != e.optedOut &&
                  (yield this.put("Options", {
                    key: "optedOut",
                    value: e.optedOut,
                  })),
                null != e.createdAt &&
                  (yield this.put("Options", {
                    key: "subscriptionCreatedAt",
                    value: e.createdAt,
                  })),
                null != e.expirationTime
                  ? yield this.put("Options", {
                      key: "subscriptionExpirationTime",
                      value: e.expirationTime,
                    })
                  : yield this.remove("Options", "subscriptionExpirationTime");
            });
          }
          setJWTToken(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Ids", { type: "jwtToken", id: e });
            });
          }
          getJWTToken() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.get("Ids", "jwtToken");
            });
          }
          setProvideUserConsent(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Options", { key: "userConsent", value: e });
            });
          }
          getConsentGiven() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.get("Options", "userConsent");
            });
          }
          getSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield this.get("Sessions", e);
            });
          }
          setSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("Sessions", e);
            });
          }
          removeSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.remove("Sessions", e);
            });
          }
          getLastNotificationClickedForOutcomes(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              let t = [];
              try {
                t = yield this.getAllNotificationClickedForOutcomes();
              } catch (e) {
                a.Z.error("Database.getLastNotificationClickedForOutcomes", e);
              }
              return t.find((t) => t.appId === e) || null;
            });
          }
          getAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (yield this.getAll(v)).map((e) => m.fromDatabase(e));
            });
          }
          putNotificationClickedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put(v, m.toDatabase(e, t));
            });
          }
          putNotificationClickedEventPendingUrlOpening(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put("NotificationOpened", p.toDatabase(e));
            });
          }
          getAllPendingNotificationClickEvents() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {},
                t = yield this.getAll("NotificationOpened");
              for (const i of t) {
                const t = p.fromDatabase(i),
                  n = t.result.url;
                n && (e[n] = t);
              }
              return e;
            });
          }
          removeAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.remove(v);
            });
          }
          getAllNotificationReceivedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (yield this.getAll(b)).map((e) => f.fromDatabase(e));
            });
          }
          putNotificationReceivedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.put(b, f.toDatabase(e, t, new Date().getTime()));
            });
          }
          resetSentUniqueOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = (yield this.getAll("SentUniqueOutcome")).map(
                (e) => (
                  (e.sentDuringSession = null), S.put("SentUniqueOutcome", e)
                )
              );
              yield Promise.all(e);
            });
          }
          static rebuild() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return Promise.all([
                S.singletonInstance.remove("Ids"),
                S.singletonInstance.remove("NotificationOpened"),
                S.singletonInstance.remove("Options"),
                S.singletonInstance.remove(b),
                S.singletonInstance.remove(v),
                S.singletonInstance.remove("SentUniqueOutcome"),
              ]);
            });
          }
          static on(...e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return S.singletonInstance.emitter.on.apply(
                S.singletonInstance.emitter,
                e
              );
            });
          }
          static setIsPushEnabled(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return S.singletonInstance.setIsPushEnabled(e);
            });
          }
          static getCurrentSession() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getSession(g.Ky);
            });
          }
          static upsertSession(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield S.singletonInstance.setSession(e);
            });
          }
          static cleanupCurrentSession() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield S.singletonInstance.removeSession(g.Ky);
            });
          }
          static setSubscription(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setSubscription(e);
            });
          }
          static getSubscription() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getSubscription();
            });
          }
          static setJWTToken(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setJWTToken(e);
            });
          }
          static getJWTToken() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getJWTToken();
            });
          }
          static setConsentGiven(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setProvideUserConsent(e);
            });
          }
          static getConsentGiven() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getConsentGiven();
            });
          }
          static setAppState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setAppState(e);
            });
          }
          static getAppState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAppState();
            });
          }
          static setUserState(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setUserState(e);
            });
          }
          static getUserState() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getUserState();
            });
          }
          static setAppConfig(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.setAppConfig(e);
            });
          }
          static getAppConfig() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAppConfig();
            });
          }
          static getLastNotificationClickedForOutcomes(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getLastNotificationClickedForOutcomes(
                e
              );
            });
          }
          static removeAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.removeAllNotificationClickedForOutcomes();
            });
          }
          static getAllNotificationReceivedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAllNotificationReceivedForOutcomes();
            });
          }
          static putNotificationReceivedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.putNotificationReceivedForOutcomes(
                e,
                t
              );
            });
          }
          static getAllNotificationClickedForOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAllNotificationClickedForOutcomes();
            });
          }
          static putNotificationClickedForOutcomes(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.putNotificationClickedForOutcomes(
                e,
                t
              );
            });
          }
          static putNotificationClickedEventPendingUrlOpening(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.putNotificationClickedEventPendingUrlOpening(
                e
              );
            });
          }
          static resetSentUniqueOutcomes() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.resetSentUniqueOutcomes();
            });
          }
          static setDeviceId(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield S.singletonInstance.setDeviceId(e);
            });
          }
          static remove(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.remove(e, t);
            });
          }
          static put(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.put(e, t);
            });
          }
          static get(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.get(e, t);
            });
          }
          static getAll(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return yield S.singletonInstance.getAll(e);
            });
          }
        }
        S.EVENTS = h;
      },
      644: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => d });
        var n = i(655),
          o = i(930),
          s = i(326),
          r = i(50),
          a = i(107);
        const l = [
          "notifyButtonHovering",
          "notifyButtonHover",
          "notifyButtonButtonClick",
          "notifyButtonLauncherClick",
          "animatedElementHiding",
          "animatedElementHidden",
          "animatedElementShowing",
          "animatedElementShown",
          "activeAnimatedElementActivating",
          "activeAnimatedElementActive",
          "activeAnimatedElementInactivating",
          "activeAnimatedElementInactive",
        ];
        class d {
          static trigger(e, t, i) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (!r.Z.contains(l, e)) {
                const i = t;
                let n = r.Z.capitalize(s.Z.getWindowEnv().toString());
                i || !1 === i
                  ? a.Z.debug(`(${n}) » ${e}:`, i)
                  : a.Z.debug(`(${n}) » ${e}`);
              }
              if (o.Z.isBrowser()) {
                if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
                  if (OneSignal.initialized) return;
                  OneSignal.initialized = !0;
                }
                i ? yield i.emit(e, t) : yield OneSignal.emitter.emit(e, t);
              }
            });
          }
        }
      },
      271: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => d, Z: () => c });
        var n = i(470),
          o = i.n(n),
          s = i(930),
          r = i(50),
          a = i(107),
          l = i(450);
        class d {
          static getBaseUrl() {
            return location.origin;
          }
          static isLocalhostAllowedAsSecureOrigin() {
            return (
              OneSignal.config &&
              OneSignal.config.userConfig &&
              !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
            );
          }
          static redetectBrowserUserAgent() {
            return "" === (0, l.M)().name && "" === (0, l.M)().version
              ? o()._detect(navigator.userAgent)
              : o();
          }
          static isValidUuid(e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
              e
            );
          }
          static getRandomUuid() {
            const e =
              "undefined" == typeof window
                ? i.g.crypto
                : window.crypto || window.msCrypto;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (t) {
                const i = e.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                return ("x" == t ? i : (3 & i) | 8).toString(16);
              }
            );
          }
          static logMethodCall(e, ...t) {
            return a.Z.debug(`Called ${e}(${t.map(r.c.stringify).join(", ")})`);
          }
          static isSafari() {
            return s.Z.isBrowser() && void 0 !== window.safari;
          }
        }
        const c = d;
      },
      985: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => r });
        var n = i(655),
          o = i(934),
          s = i(644);
        class r {
          static triggerNotificationPermissionChanged(e = !1) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (!r.executing) {
                r.executing = !0;
                try {
                  yield r.privateTriggerNotificationPermissionChanged(e);
                } finally {
                  r.executing = !1;
                }
              }
            });
          }
          static privateTriggerNotificationPermissionChanged(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const t =
                  yield OneSignal.context.permissionManager.getPermissionStatus(),
                i = yield o.ZP.get("Options", "notificationPermission");
              (t !== i || e) &&
                (yield o.ZP.put("Options", {
                  key: "notificationPermission",
                  value: t,
                }),
                s.Z.trigger(
                  OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
                  t
                ),
                this.triggerBooleanPermissionChangeEvent(i, t, e));
            });
          }
          static triggerBooleanPermissionChangeEvent(e, t, i) {
            const n = "granted" === t;
            (n !== ("granted" === e) || i) &&
              s.Z.trigger(
                OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_BOOLEAN,
                n
              );
          }
        }
        r.executing = !1;
      },
      450: (e, t, i) => {
        "use strict";
        i.d(t, { M: () => o });
        var n = i(470);
        function o() {
          return {
            mobile: n.mobile,
            tablet: n.tablet,
            name: n.name.toLowerCase(),
            version: n.version,
          };
        }
      },
      353: (e, t, i) => {
        "use strict";
        i.d(t, {
          BH: () => b,
          ER: () => P,
          IH: () => E,
          IM: () => m,
          IV: () => h,
          JX: () => c,
          Ld: () => w,
          S6: () => T,
          TP: () => O,
          Uj: () => S,
          bF: () => v,
          bJ: () => u,
          gd: () => k,
          gw: () => y,
          iJ: () => C,
          jI: () => f,
          p$: () => N,
          r3: () => I,
          tI: () => g,
          tf: () => d,
          vV: () => p,
        });
        var n = i(655),
          o = (i(326), i(468), i(271)),
          s = i(985),
          r = i(50),
          a = i(107),
          l = i(450);
        function d(e) {
          const t = document.querySelectorAll(e);
          if (t.length > 0)
            for (let e = 0; e < t.length; e++) {
              const i = t[e].parentNode;
              i && i.removeChild(t[e]);
            }
        }
        function c() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return new Promise((e) => {
              OneSignal.initialized
                ? e()
                : OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, e);
            });
          });
        }
        function u(e = !1) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return s.Q.triggerNotificationPermissionChanged(e);
          });
        }
        function h(e, ...t) {
          if (e) return e.apply(null, t);
        }
        function g(e, ...t) {
          return o.Q.logMethodCall(e, ...t);
        }
        function p(e) {
          return (
            !!e &&
            !!e.match(
              /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
            )
          );
        }
        function m(e, t, i) {
          let n;
          if (((n = "string" == typeof e ? document.querySelector(e) : e), !n))
            throw new Error(
              `${e} must be a CSS selector string or DOM Element object.`
            );
          n.insertAdjacentHTML(t, i);
        }
        function f(e) {
          if ("string" == typeof e) {
            const t = document.querySelector(e);
            if (null === t)
              throw new Error(`Cannot find element with selector "${e}"`);
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          } else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          }
        }
        function v(e, t) {
          if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
              throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.add(t);
          } else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            e.classList.add(t);
          }
        }
        function b(e, t) {
          if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
              throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.remove(t);
          } else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            e.classList.remove(t);
          }
        }
        function S(e, t) {
          if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
              throw new Error(`Cannot find element with selector "${e}"`);
            return i.classList.contains(t);
          }
          if ("object" == typeof e) return e.classList.contains(t);
          throw new Error(
            `${e} must be a CSS selector string or DOM Element object.`
          );
        }
        function y(e) {
          return new Promise((t) => {
            setTimeout(t, e);
          });
        }
        function w() {
          return Promise.resolve();
        }
        function I(e, t) {
          return r.c.contains(e, t);
        }
        function O(e) {
          return o.Q.isValidUuid(e);
        }
        function E(e, t, i, n = !1) {
          if (
            (t || a.Z.error("Cannot call on() with no event: ", t),
            i || a.Z.error("Cannot call on() with no task: ", i),
            "string" == typeof e)
          ) {
            const n = document.querySelectorAll(e);
            if (n.length > 0) for (let e = 0; e < n.length; e++) E(n[e], t, i);
          } else if (
            ((o = e), "[object Array]" === Object.prototype.toString.call(o))
          )
            for (let n = 0; n < e.length; n++) E(e[n], t, i);
          else {
            if ("object" != typeof e)
              throw new Error(
                `${e} must be a CSS selector string or DOM Element object.`
              );
            {
              const o = function (t) {
                const s = function () {
                  e.removeEventListener(t.type, o);
                };
                n || s(), i(t, s);
              };
              e.addEventListener(t, o);
            }
          }
          var o;
        }
        function C() {
          return window.__oneSignalSdkLoadCount || 0;
        }
        function P() {
          window.__oneSignalSdkLoadCount = C() + 1;
        }
        function T(e) {
          return e
            ? "safari" == (0, l.M)().name && e.safari
              ? e.safari
              : "firefox" === (0, l.M)().name && e.firefox
              ? e.firefox
              : e.chrome || e.firefox || e.safari || "default-icon"
            : "default-icon";
        }
        function k(e) {
          const t = document.querySelector(e);
          return (
            t ||
            (a.Z.debug(`No instance of ${e} found. Returning stub.`),
            document.createElement("div"))
          );
        }
        function N(e) {
          return JSON.parse(JSON.stringify(e));
        }
      },
      655: (e, t, i) => {
        "use strict";
        i.d(t, { _T: () => n, mG: () => o });
        function n(e, t) {
          var i = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (i[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (i[n[o]] = e[n[o]]);
          }
          return i;
        }
        function o(e, t, i, n) {
          return new (i || (i = Promise))(function (o, s) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function a(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, a);
            }
            l((n = n.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
      },
    },
    t = {};
  function i(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var s = (t[n] = { exports: {} });
    return e[n].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.amdD = function () {
    throw new Error("define cannot be used indirect");
  }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = i(353),
        t = i(107),
        n = i(608);
      class o {
        static processOneSignalDeferredArray(e) {
          for (const i of e)
            try {
              n.Z.push(i);
            } catch (e) {
              t.Z.error(e);
            }
        }
      }
      !(function () {
        if (((0, e.ER)(), (0, e.iJ)() > 1))
          return (
            t.Z.warn(
              "OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."
            ),
            void t.Z.debug(
              `OneSignal: Exiting from SDK initialization to prevent double-initialization errors. Occurred ${(0,
              e.iJ)()} times.`
            )
          );
        window.OneSignal = i(608).Z;
        const n = window.OneSignalDeferred;
        (window.OneSignalDeferred = i(191).Z),
          o.processOneSignalDeferredArray(n);
      })();
    })();
})();
//# sourceMappingURL=OneSignalSDK.page.es6.js.map
