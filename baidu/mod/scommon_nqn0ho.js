var oe = new K(23, 25),
    pe = new K(9, 25),
    qe = new K(9, 0);
U.IE = function(a, b, c, d) {
    var e = re(b);
    if (e && !(0 > c || 9 < c)) {
        b = n;
        e = new S(e);
        if (H()) {
            var f = function() {
                return new Ib(C.ca + "markers_hd.png", new K(22, 31), {
                    anchor: new K(11, 31),
                    imageOffset: new K(0, -32 * c),
                    imageSize: new K(85, 477),
                    infoWindowAnchor: new K(11, 0)
                })
            }, b = f(),
                f = f();
            f.xm(new K(-28, -32 * c));
            e.At = b;
            e.Uy = f
        } else b = new Ib(C.ca + "markers.png", oe, {
            anchor: pe,
            imageOffset: new K(0, -25 * c),
            infoWindowAnchor: qe
        });
        e.Gf(b);
        a.Ua(e);
        d && e.$b(d);
        return e
    }
};
U.fo = function(a, b, c) {
    if (b = re(b)) {
        var b = new S(b),
            d = n;
        H() ? (d = new Ib(C.ca + "markers_hd.png", new K(21, 31), {
            anchor: pe,
            imageOffset: new K(-29, -320),
            imageSize: new K(85, 477),
            infoWindowAnchor: qe
        }), b.At = d) : d = new Ib(C.ca + "markers.png", oe, {
            anchor: pe,
            imageOffset: new K(0, -250),
            infoWindowAnchor: qe
        });
        b.Gf(d);
        a.Ua(b);
        c && b.$b(c);
        return b
    }
};
U.HE = function(a, b, c) {
    if (b = re(b)) {
        var b = new S(b),
            d = n;
        if (H()) {
            var e = function() {
                return new Ib(C.ca + "markers_hd.png", new K(21, 31), {
                    anchor: pe,
                    imageOffset: new K(0, -383),
                    imageSize: new K(85, 477),
                    infoWindowAnchor: qe
                })
            }, d = e(),
                e = e();
            e.xm(new K(-29, -352));
            b.At = d;
            b.Uy = e
        } else d = new Ib(C.ca + "markers.png", oe, {
            anchor: pe,
            imageOffset: new K(0, -300),
            infoWindowAnchor: qe
        });
        b.Gf(d);
        a.Ua(b);
        c && b.$b(c);
        return b
    }
};

function re(a) {
    var b = [],
        b = n;
    if (a instanceof F) b = a;
    else {
        if ("string" == typeof a) {
            b = t.trim(a).split(",");
            if (2 > b.length) return;
            b[0] = parseFloat(t.trim(b[0]));
            b[1] = parseFloat(t.trim(b[1]))
        } else if (b = a.slice(0), 2 > b.length) return;
        b = new F(b[0], b[1])
    }
    return b
}
U.AF = function(a) {
    var b = a.title,
        c = a.LE,
        d = a.vJ,
        e = a.IF,
        a = a.fu || 0;
    if (!b) return n;
    var f = b;
    1 == a ? f += "-\u516c\u4ea4\u8f66\u7ad9" : 3 == a && (f += "-\u5730\u94c1\u7ad9");
    var g = 13;
    e && (g = 10);
    f.replace(/[\u0100-\uffff]/g, "##").length > 2 * g + 1 && (f = f.substring(0, g) + "&#8230");
    b = "<p style='width:210px;font:bold 14px/16px " + C.fontFamily + ";margin:0;color:#cc5522;white-space:nowrap;overflow:hidden' title='" + b + "'>" + f;
    e && (b += "<a target='_blank' href='" + e + "' style='margin-left:5px;font-size:12px;color:#3d6dcc;font-weight:normal;text-decoration:none;'>\u8be6\u60c5\u00bb</a>");
    b += "</p>";
    e = [];
    e.push("<div style='font:12px " + C.fontFamily + ";margin-top:10px'>");
    if (c) {
        f = "\u5730\u5740\uff1a";
        if (1 == a || 3 == a) f = "\u8f66\u6b21\uff1a";
        e.push('<table cellspacing="0" style="overflow:hidden;table-layout:fixed;width:100%;font:12px ' + C.fontFamily + '" >');
        e.push('<tr><td style="vertical-align:top;width:38px;white-space:nowrap;word-break:keep-all">' + f + '&nbsp;</td><td style="line-height:16px">');
        e.push(c + "&nbsp;</td></tr>");
        d && e.push('<tr><td style="vertical-align:top;">\u7535\u8bdd\uff1a</td><td>' + d + "</td></tr>");
        e.push("</table>")
    } else d && (e.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px ' + C.fontFamily + '">'), e.push('<tr><td style="vertical-align:top;width:36px;white-space:nowrap;word-break:keep-all">\u7535\u8bdd\uff1a</td><td>' + d + "</td></tr></table>"));
    e.push("</div>");
    return new Jb(e.join(""), {
        title: b,
        height: 0,
        width: 230,
        margin: [10, 10, 20, 10]
    })
};
U.jo = function(a, b, c, d) {
    if (b = re(b)) return d = new S(b, {
        icon: H() ? new Ib(C.ca + "dest_mkr.png", new K(29, 34), {
            anchor: new K(14, 32),
            imageSize: new K(94, 41),
            imageOffset: new K(-29 * d, 0),
            infoWindowAnchor: new K(14, 0)
        }) : new Ib(C.ca + "dest_markers.png", new K(42, 34), {
            anchor: new K(14, 32),
            imageOffset: new K(0, -34 * d),
            infoWindowAnchor: new K(14, 0)
        }),
        baseZIndex: 35E5,
        draggingCursor: "pointer"
    }), a.Ua(d), c && d.$b(c), d
};
U.Aj = function(a, b) {
    return U.Wh(a, b, kc)
};
U.jB = [{
    stroke: 6,
    color: "#0030ff",
    opacity: 0.45,
    style: "solid"
}, {
    stroke: 6,
    color: "#0030ff",
    opacity: 0.45,
    style: "solid"
}, {
    stroke: 4,
    color: "#30a208",
    opacity: 0.55,
    style: "dashed"
}, {
    stroke: 5,
    color: "#0030ff",
    opacity: 0.45,
    style: "solid"
}, {
    stroke: 4,
    color: "#ff0103",
    opacity: 0.65,
    style: "dashed"
}, {
    stroke: 5,
    color: "#ff0103",
    opacity: 0.65,
    style: "solid"
}];
U.Wh = function(a, b, c) {
    var d = U.jB;
    "undefined" == typeof c && (c = 0);
    if (d[c]) {
        var e = d[c],
            d = new Ob(b, {
                strokeWeight: e.stroke,
                strokeColor: e.color,
                strokeOpacity: e.opacity,
                strokeStyle: e.style,
                clickable: o
            });
        a.Ua(d);
        d.sK = c;
        c == kc && (b = new Ob(b, {
            strokeWeight: e.stroke - 2,
            strokeColor: "#fff",
            strokeOpacity: 0.3,
            clickable: o
        }), d.or = b, a.Ua(b));
        return d
    }
};
U.wo = function(a) {
    var b = a.content,
        c = a.zo,
        d = a.total,
        e = a.kp,
        f = a.tL,
        a = a.lH,
        g = ["<div style='font:12px " + C.fontFamily + "'>"];
    b && g.push("<div style='margin:0 1em 24px 0'>" + b + "</div>");
    a || g.push(U.nG(d, c));
    g.push("</div>");
    b = new Jb(g.join(""), {
        title: "",
        height: 0,
        width: 220,
        margin: [10, 10, 20, 10]
    });
    if (a) return b;
    b.addEventListener("open", function() {
        var a = H() ? "touchend" : "click";
        t.qc("trans_prev") && t.C(t.qc("trans_prev"), a, function() {
            e && "function" == typeof e && e(c - 1, f)
        });
        t.qc("trans_next") && t.C(t.qc("trans_next"), a, function() {
            e && "function" == typeof e && e(c + 1, f)
        })
    });
    return b
};
U.nG = function(a, b) {
    var c = [];
    c.push('<table width="99%" cols="2" style="background:#eaf2ff;font:12px ' + C.fontFamily + '"><tbody><tr>');
    c.push('<td nowrap="nowrap" width="50%" align="left">');
    0 == b ? c.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0a\u4e00\u6b65</span>') : c.push('<a id="trans_prev" style="color:#7777cc;-moz-user-select:none" href="javascript:void(0)">\u4e0a\u4e00\u6b65</a>');
    c.push("</td>");
    c.push('<td nowrap="nowrap" width="50%" align="right">');
    b == a + 1 ? c.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0b\u4e00\u6b65</span>') : c.push('<a style="color:#7777cc" id="trans_next" href="javascript:void(0)">\u4e0b\u4e00\u6b65</a>');
    c.push("</td></tr></tbody></table>");
    return c.join("")
};
U.sx = function(a, b, c, d) {
    if (b = re(b)) {
        c = c || 0;
        if (H()) c = new Ib(C.ca + "dest_mkr.png", new K(20, 20), {
            imageSize: new K(94, 41),
            imageOffset: new K(-59, -21 * c),
            infoWindowAnchor: new K(10, 0)
        });
        else {
            var e = -55;
            1 == c && (e = -76);
            c = new Ib(C.ca + "trans_icons.png", new K(21, 21), {
                imageOffset: new K(0, e),
                infoWindowAnchor: new K(10, 0)
            })
        }
        c = new S(b, {
            icon: c
        });
        a.Ua(c);
        d && c.$b(d);
        return c
    }
};
U.Vl = function(a) {
    return a && a.ra && a.ra.he ? a.ra.he.childNodes[0] : n
};
U.KE = function(a, b, c) {
    b = new S(b, {
        icon: new Ib(Lc.uE, new K(11, 11))
    });
    c && b.$b(c);
    a.Ua(b);
    return b
};
U.px = function(a, b) {
    var c = new S(b, {
        icon: new Ib(C.ca + "drag.png", new K(11, 11)),
        draggingCursor: "pointer"
    });
    a.Ua(c);
    c.Fp(10);
    return c
};
U.Xx = function() {
    var a = new Kb("\u62d6\u52a8\u4ee5\u66f4\u6539\u8def\u7ebf", {
        offset: new K(30, -10)
    });
    a.oc({
        border: "solid 1px gray",
        padding: "2px",
        whiteSpace: "nowrap",
        background: "#fff"
    });
    return a
};
U.yG = function(a, b) {
    if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
};
V.Sb = 1;
V.sk = 2;
V.$i = 3;
V.Tm = 4;
V.Um = 5;
V.Sm = 6;
V.Rm = 7;
V.Uu = 8;
V.Tu = 9;
V.zg = function(a, b) {
    return a ? "http://map.baidu.com/?s=" + encodeURIComponent("inf&uid=" + a + "&c=" + b) + "&i=0&sr=1" : ""
};
V.MC = function(a) {
    return !a ? -1 : "string" == typeof a ? 2 : a instanceof F ? 1 : a instanceof qa ? 0 : "number" == typeof a ? 3 : -1
};
t.extend(V.prototype, {
    ef: function(a, b) {
        var c = V.MC(a.src);
        if (-1 != c) {
            var d = this;
            if (3 == c) b && b(a.src);
            else if (2 == c) a.gs == c && a.hs == a.src && a.gi ? b && b(a.gi) : (a.gs = c, a.hs = a.src, lc.Pa(function(a) {
                a && (a.result && 2 == a.result.type) && (d.fc.gi = a.content.code, b && b(d.fc.gi))
            }, {
                qt: "cur",
                wd: a.src
            }));
            else {
                var e, f = 18;
                0 == c ? (e = a.src.Ga(), f = a.src.U()) : e = a.src;
                c == a.gs && a.hs.pb(e) && a.gi ? b && b(a.gi) : (0 == c && (e = P.ob(e)), 1 == c && (e = P.ob(e)), a.gs = c, a.hs = new F(e.lng, e.lat), lc.Pa(function(a) {
                    if (a && a.result && a.result.type == 4) {
                        d.fc.gi = a.content ? a.content.uid : 1;
                        b && b(d.fc.gi)
                    }
                }, {
                    qt: "cen",
                    b: e.lng + "," + e.lat + ";" + e.lng + "," + e.lat,
                    l: f
                }))
            }
        }
    },
    Qa: function(a) {
        "number" == typeof a ? this.vc = a : delete this.vc
    },
    va: function(a, b, c) {
        var d;
        switch (a) {
            case V.Sb:
                d = this.m.mp;
                break;
            case V.sk:
                d = this.m.Rz;
                break;
            case V.Tm:
                d = this.m.Xt;
                break;
            case V.$i:
                d = this.m.Qz;
                break;
            case V.Um:
                d = this.m.Sz;
                break;
            case V.Sm:
                d = this.m.Pz;
                break;
            case V.Rm:
                d = this.m.Oz;
                break;
            case V.Uu:
                d = this.m.Nz;
                break;
            case V.Tu:
                d = this.m.Mz
        }
        d && d(b, c)
    }
});
var se = 0,
    te = 1,
    ue = 2;
N.unique = function(a) {
    for (var b = [], c = {}, d = 0, e = a.length; d < e; d++) c[a[d]] || (c[a[d]] = i, b.push(a[d]));
    return b
};
N.Ss = function(a, b) {
    if (b) var c = Math.min(b.width / 1100, b.height / 660),
    a = Math.round(a + Math.log(c) / Math.log(2));
    1 > a && (a = 1);
    18 < a && (a = 18);
    return a
};
N.ab = function(a, b) {
    if ("string" == typeof a && a) {
        var c = a.split("|"),
            d, e, f;
        if (1 == c.length) d = ve(a);
        else if (d = ve(c[2]), e = ve(c[0]), f = ve(c[1]), !b) return d;
        c = {
            type: d.qG
        };
        if (b) switch (c.type) {
            case ue:
                e = new F(d.Jc[0][0], d.Jc[0][1]);
                e = P.ib(e);
                c.O = e;
                c.W = [e];
                break;
            case te:
                c.W = [];
                d = d.Jc[0];
                for (var g = 0, j = d.length - 1; g < j; g += 2) {
                    var k = new F(d[g], d[g + 1]),
                        k = P.ib(k);
                    c.W.push(k)
                }
                e = new F(e.Jc[0][0], e.Jc[0][1]);
                f = new F(f.Jc[0][0], f.Jc[0][1]);
                e = P.ib(e);
                f = P.ib(f);
                c.nb = new Ia(e, f)
        }
        return c
    }
};
N.Vz = function(a) {
    var b;
    b ? 0.25 > b ? b = 0 : 0.25 < b && 1 > b ? b = 1 : 32 < b && (b = 32) : b = 0;
    var c = a.split("|");
    if (1 == c.length) {
        var d = ve(c[0]);
        return {
            type: d.type,
            bound: "",
            W: d.Jc.join(",")
        }
    }
    if (1 < c.length) {
        for (var e = a.split(";.="), a = [], f = [], g = 0, j = e.length, c = 0; c < j; c++) {
            g = e[c];
            1 < j && (0 == c && (g += ";"), 0 < c && c < j - 1 && (g = ".=" + g + ";"), c == j - 1 && (g = ".=" + g));
            var g = g.split("|"),
                d = ve(g[0]),
                k = ve(g[1]);
            a.push(d.Jc.join(","));
            a.push(k.Jc.join(","));
            d = ve(g[2]);
            g = d.type;
            d = d.Jc.join(",");
            d = N.jI(d);
            0 < b && (d = N.kI(d, b));
            f.push(d)
        }
        1 >= j && (f = f.join(";"));
        if (2 == j) {
            b = (f[0] + ";" + f[1]).split(";");
            e = [];
            for (c = 0; c < b.length; c++) f = new F(b[c].split(",")[0], b[c].split(",")[1]), f = P.ib(f), e.push(f);
            f = e
        }
        return {
            type: g,
            bound: a.join(";"),
            W: f
        }
    }
};
N.lI = function(a) {
    a = a.split(",");
    a = new F(a[0], a[1]);
    return P.ib(a)
};
var we = ["=", ".", "-", "*"],
    xe = 8388608;

function ve(a) {
    var b;
    b = a.charAt(0);
    var c = -1;
    b == we[1] ? c = ue : b == we[2] ? c = te : b == we[3] && (c = se);
    b = c;
    for (var c = a.substr(1), d = 0, e = c.length, f = [], a = [], g = []; d < e;)
        if (c.charAt(d) == we[0]) {
            if (13 > e - d) return 0;
            a: {
                for (var g = c.substr(d, 13), j = f, k = 0, l = 0, m = 0, p = 0; 6 > p; p++) {
                    m = ye(g.substr(1 + p, 1));
                    if (0 > m) {
                        g = -1 - p;
                        break a
                    }
                    k += m << 6 * p;
                    m = ye(g.substr(7 + p, 1));
                    if (0 > m) {
                        g = -7 - p;
                        break a
                    }
                    l += m << 6 * p
                }
                j.push(k);
                j.push(l);
                g = 0
            }
            if (0 > g) return 0;
            d += 13
        } else
    if (";" == c.charAt(d)) a.push(f.slice(0)), f.length = 0, ++d;
    else {
        if (8 > e - d) return 0;
        g = ze(c.substr(d, 8), f);
        if (0 > g) return 0;
        d += 8
    }
    c = 0;
    for (d = a.length; c < d; c++) {
        e = 0;
        for (f = a[c].length; e < f; e++) a[c][e] /= 100
    }
    return {
        qG: b,
        Jc: a
    }
}

function ze(a, b) {
    var c = b.length;
    if (2 > c) return -1;
    for (var d = 0, e = 0, f = 0, g = 0; 4 > g; g++) {
        f = ye(a.substr(g, 1));
        if (0 > f) return -1 - g;
        d += f << 6 * g;
        f = ye(a.substr(4 + g, 1));
        if (0 > f) return -5 - g;
        e += f << 6 * g
    }
    d > xe && (d = xe - d);
    e > xe && (e = xe - e);
    b.push(b[c - 2] + d);
    b.push(b[c - 1] + e);
    return 0
}

function ye(a) {
    var b = a.charCodeAt(0);
    return "A" <= a && "Z" >= a ? b - 65 : "a" <= a && "z" >= a ? 26 + b - 97 : "0" <= a && "9" >= a ? 52 + b - 48 : "+" == a ? 62 : "/" == a ? 63 : -1
};
