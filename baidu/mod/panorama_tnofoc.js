var lf = 1,
    mf = 5;

function nf(a) {
    return a * Math.PI / 180
}
mf = 5;
lf = 1;
t.extend(sa.prototype, {
    Tb: function() {
        this.SB();
        for (var a = 0; a < B.qr.length; a++) B.qr[a](this);
        this.Ub != n ? this.dispatchEvent(new L("onid_changed")) : this.ze != n && (this.dispatchEvent(new L("onposition_changed")), this.dispatchEvent(new L("onposition_changed_inner")));
        this.m.visible ? this.show() : this.H();
        this.qB()
    },
    qB: function() {
        function a() {
            var a = this.Va(),
                b = this.je();
            e.href = H() ? "http://map.baidu.com/mobile/?third_party=js_api#index/streetview/ss_id=" + b + "&ss_heading=" + a.heading + "&ss_pitch=" + a.pitch + "/vt=streetview" : "http://map.baidu.com/?panoid=" + b + "&panotype=street&heading=" + a.heading + "&pitch=" + -a.pitch + "&s=tpl%3ACity&sfrom=api"
        }
        var b = this,
            c = this.hn = J("div"),
            d = c.style;
        d.position = "absolute";
        d.zIndex = "32";
        d.right = d.top = "10px";
        d.width = "17px";
        d.height = "16px";
        d.background = 'url("' + C.ca + 'st-close.png") no-repeat';
        H() && (d.width = "25.5px", d.height = "24px", d.backgroundSize = "25.5px 24px");
        d.cursor = "pointer";
        c.title = "\u9000\u51fa\u5168\u666f";
        c.onclick = function() {
            b.H()
        };
        d.display = "none";
        this.B.appendChild(c);
        c = J("div");
        c.style.height = "32px";
        c.style.position = "absolute";
        c.style.left = "1px";
        c.style.bottom = "0px";
        c.style.zIndex = "32";
        this.A && this.A.Ba() === this.B && (c.style.display = "none");
        this.Gn = c;
        var e = J("a", {
            title: "\u5230\u767e\u5ea6\u5730\u56fe\u67e5\u770b\u6b64\u533a\u57df",
            target: "_blank"
        });
        e.style.outline = "none";
        d = C.ca + (H() ? "copyright_logo_s.png" : "copyright_logo.png");
        e.innerHTML = 6 == t.M.S ? "<div style='cursor:pointer;width:77px;height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + d + ")'></div>" : "<img style='border:none;width:77px;height:32px' src='" + d + "' />";
        H() && (1 < window.devicePixelRatio && (d = C.ca + "copyright_logo_hd.png"), c.style.height = "25px", e.innerHTML = "<img style='border:none;width:68px;height:25px' src='" + d + "' />");
        a.call(this);
        this.addEventListener("dataload", a);
        this.addEventListener("pov_changed", a);
        c.appendChild(e);
        this.B.appendChild(c);
        this.m.navigationControl && (this.fl = new of(this), this.m.visible || this.fl.H())
    },
    lh: function(a) {
        a != this.Ub && (this.Ub = a, this.dispatchEvent(new L("onid_changed")))
    },
    ga: function(a) {
        a.pb(this.ze) || (this.ze = a, this.dispatchEvent(new L("onposition_changed")), this.dispatchEvent(new L("onposition_changed_inner")))
    },
    nh: function(a) {
        var b = this.Fb;
        this.Fb = a;
        a = this.Fb.pitch;
        "cvsRender" == this.Vk() ? (90 < a && (a = 90), -90 > a && (a = -90)) : "cssRender" == this.Vk() && (45 < a && (a = 45), -45 > a && (a = -45));
        this.Fb.pitch = a;
        (b.heading != this.Fb.heading || b.pitch != this.Fb.pitch) && this.dispatchEvent(new L("onpov_changed"))
    },
    Cp: function(a) {
        var b = this.Fb,
            c = a.heading - b.heading,
            d = a.pitch - b.pitch,
            e = this;
        new Va({
            fd: 30,
            duration: 200,
            Wd: Wa.ly,
            ta: function(a) {
                e.nh({
                    heading: b.heading + a * c,
                    pitch: b.pitch + a * d
                })
            },
            finish: function() {
                e.nh(a)
            }
        })
    },
    Ed: function(a) {
        a != this.ge && (a > Nc && (a = Nc), a < Oc && (a = Oc), a != this.ge && (this.ge = a, this.dispatchEvent(new L("onzoom_changed"))))
    },
    Cr: function() {
        if (this.A) {
            for (var a = this.A.jt(), b = 0; b < a.length; b++)(a[b] instanceof S || a[b] instanceof Kb) && a[b].O && this.ea.push(a[b]);
            this.dispatchEvent(new L("onoverlay_changed"))
        }
    },
    Zg: function() {
        this.Eg.style.display = "none"
    },
    Gp: function() {
        this.dispatchEvent(new L("onoverlay_show"));
        this.Eg.style.display = "block"
    },
    show: function() {
        this.m.visible = i;
        t.z.show(this.Rh);
        this.hn && (this.A && this.A.Ba() === this.B) && t.z.show(this.hn);
        this.Gn && t.z.show(this.Gn);
        this.fl && this.fl.show();
        this.Cr()
    },
    H: function() {
        this.m.visible = o;
        t.z.H(this.Rh);
        this.hn && t.z.H(this.hn);
        this.Gn && t.z.H(this.Gn);
        this.fl && this.fl.H()
    },
    vu: function(a) {
        this.A = a;
        this.Cr()
    },
    SB: function() {
        var a = J("div"),
            b = a.style;
        b.overflow = "hidden";
        b.position = "absolute";
        b.zIndex = "31";
        b.top = b.left = "0px";
        b.height = b.width = "100%";
        b.backgroundColor = "#e5e3df";
        this.Rh = a;
        this.Gg = this.fj("1");
        this.dl = this.fj("3");
        this.Fn = this.fj("4");
        this.Eg = this.fj("2");
        a.appendChild(this.Gg);
        a.appendChild(this.dl);
        a.appendChild(this.Fn);
        a.appendChild(this.Eg);
        this.dl.style.width = this.B.clientWidth + "px";
        this.dl.style.height = this.B.clientHeight + "px";
        this.dl.style.overflow = "hidden";
        this.dl.style.WebkitUserSelect = "none";
        this.B.appendChild(a);
        "absolute" != Aa(this.B).position && (this.B.style.position = "relative")
    },
    fj: function(a) {
        var b = J("div"),
            c = b.style;
        c.position = "absolute";
        c.top = c.left = "0";
        c.zIndex = a || "0";
        c.WebkitUserSelect = "none";
        return b
    },
    Ba: s("B"),
    ti: function() {
        return new K(this.B.clientWidth, this.B.clientHeight)
    },
    eL: s("ml"),
    dH: s("Yn"),
    pA: ba("Yn")
});
Pc = sa.prototype;
W(Pc, {
    setId: Pc.lh,
    setPosition: Pc.ga,
    setPov: Pc.nh,
    setZoom: Pc.Ed,
    show: Pc.show,
    hide: Pc.H
});
zb.ev = "http://pcsv0.map.bdimg.com/scape/?";
zb.fr = new P;
t.extend(zb.prototype, {
    GB: function() {
        this.Ub ? this.Zl(this.Ub, this.Ze) : this.er && this.yi(this.er, this.Ze)
    },
    Zl: function(a, b) {
        this.Vv(zb.ev + "qt=scb&l=17&sid=" + a, b)
    },
    yi: function(a, b) {
        var c = zb.fr.mm(a);
        this.Vv(zb.ev + "qt=qscb&l=17&x=" + c.x + "&y=" + c.y + "&action=1", b)
    },
    Vv: function(a, b) {
        var c = this;
        this.Ar(a, function(a) {
            a && a.result && 0 == a.result.error ? b && b(c.kD(a)) : b && b(n)
        })
    },
    Ar: function(a, b) {
        var c = (1E5 * Math.random()).toFixed(0);
        B._rd = B._rd || {};
        B._rd["_cbk" + c] = function(a) {
            b && b(a);
            delete B._rd["_cbk" + c]
        };
        La(a + ("&fn=BMap._rd._cbk" + c))
    },
    kD: function(a) {
        var b = {}, c = a.content[0];
        b.description = c.Rname || c.Info || "";
        b.id = c.ID;
        b.gu = c.RX / 100;
        b.hu = c.RY / 100;
        b.position = zb.fr.$j(new O(b.gu, b.hu));
        b.links = [];
        if (c.Links)
            for (a = 0; a < c.Links.length; a++) b.links.push({
                id: c.Links[a].PID,
                dir: c.Links[a].DIR,
                heading: c.Links[a].DIR
            });
        for (a = 0; a < c.Roads.length; a++)
            if (c.Roads[a].Panos)
                for (var d = 0; d < c.Roads[a].Panos.length; d++) {
                    if (c.Roads[a].Panos[d].PID == b.id) {
                        var e = c.Roads[a].Name;
                        "" == e && (e = c.Rname || "\u672a\u77e5");
                        for (var f = n, g = n, j = d - 1; j < d; j++)
                            if (c.Roads[a].Panos[j]) {
                                f = c.Roads[a].Panos[j];
                                break
                            }
                        f != n && b.links.push({
                            id: f.PID,
                            dir: (f.DIR + 180) % 360,
                            heading: (f.DIR + 180) % 360,
                            description: e
                        });
                        for (j = d + 1; j > d; j--)
                            if (c.Roads[a].Panos[j]) {
                                g = c.Roads[a].Panos[j];
                                break
                            }
                        g != n && (f = g.DIR, 0 == f && (f = c.Roads[a].Panos[d].DIR), b.links.push({
                            id: g.PID,
                            dir: f,
                            heading: f,
                            description: e
                        }))
                    }
                    for (j = 0; j < b.links.length; j++) c.Roads[a].Panos[d].PID == b.links[j].id && (b.links[j].description = c.Roads[a].Name, "" == b.links[j].description && (b.links[j].description = c.Rname || "\u672a\u77e5"))
                }
            b.mode = c.Mode;
        b.relevants = [];
        for (a = 0; a < c.SwitchID.length; a++) b.relevants[a] = {
            id: c.SwitchID[a].ID,
            mode: c.SwitchID[a].Time.toLowerCase()
        };
        b.tiles = new pf({
            dirNorth: c.NorthDir,
            centerHeading: (180 + c.NorthDir) % 360,
            pitch: c.Pitch
        });
        d = [];
        if (c = c.VPoint) {
            e = c.length;
            for (a = 0; a < e; a++) g = {}, g.PID = c[a].PID, f = zb.fr.$j(new O(c[a].X / 100, c[a].Y / 100)), g.X = 6378137 * -(f.lat - b.position.lat) / 180 * Math.PI, g.Z = 6378137 * (f.lng - b.position.lng) / 180 * Math.PI, d.push(g)
        }
        b.VPoint = d;
        return b
    }
});
Qc = zb.prototype;
W(Qc, {
    getPanoramaById: Qc.Zl,
    getPanoramaByLocation: Qc.yi
});

function qf(a, b) {
    for (var c = 180 / Math.pow(2, b) / a, d = 360 / (2 * Math.pow(2, b - 2) * c); 512 < d;) b++, d = 360 / (2 * Math.pow(2, b - 2) * c);
    c = b;
    c > mf && (d *= Math.pow(2, c - mf), c = mf);
    c < lf && (c = lf);
    return {
        Bt: c,
        qs: d
    }
};

function pf(a) {
    this.tileSize = new K(512, 512);
    this.worldSize = new K(512 * this.Xg(mf), 512 * this.wt(mf));
    this.centerHeading = 180;
    var a = a || {}, b;
    for (b in a) this[b] = a[b]
}
var rf = ["http://pcsv0.map.bdimg.com/scape/", "http://pcsv1.map.bdimg.com/scape/", "http://pcsv2.map.bdimg.com/scape/"];
t.extend(pf.prototype, {
    getTilesUrl: function(a, b, c) {
        return rf[(b.x + b.y) % rf.length] + "?qt=pdata&sid={sid}&pos={y}_{x}&z={zoom}".replace("{sid}", a).replace("{x}", b.x).replace("{y}", b.y).replace("{zoom}", c)
    },
    wt: function(a) {
        return Math.pow(2, a - 2)
    },
    Xg: function(a) {
        return 2 * this.wt(a)
    }
});

function sf(a) {
    this.il = new uf(a);
    a.m.linksControl && (this.pj = new vf(a));
    this.pr = new wf(a);
    this.Q = a;
    this.N()
}
B.$t(function(a) {
    a.Kw = new sf(a)
});
t.extend(sf.prototype, {
    N: function() {
        var a = this.Q,
            b = this;
        a.addEventListener("dataload", function(c) {
            b.oa = c.data;
            b.iq();
            b.fE(c.data);
            b.ta(a.Va(), b.Ag, b.kf)
        });
        a.addEventListener("pov_changed", function() {
            b.ta(a.Va(), b.Ag, b.kf)
        });
        a.addEventListener("zoom_changed", function() {
            b.iq();
            b.kE(a.Va(), b.Ag, b.kf)
        });
        b.Gv = a.ti();
        setInterval(function() {
            if (a.je()) {
                var c = a.ti();
                c.pb(b.Gv) || (b.iq(), b.iE(c), b.ta(a.Va(), b.Ag, b.kf), b.Gv = c, a.dispatchEvent(new L("size_changed")))
            }
        }, 80)
    },
    fE: function(a) {
        this.il.setData(a, this.mt(), this.Ag);
        this.Q.m.linksControl && this.pj.setData(a);
        this.pr.setData(a)
    },
    kE: function(a, b, c) {
        this.il.Ed(this.mt(), this.Ag);
        "cvsRender" != this.Q.ml && this.il.ta(a, b, c);
        this.Q.m.linksControl && this.pj.ta(a, b, c);
        this.pr.ta(a, b, c)
    },
    iE: function(a) {
        this.il.Cc(this.Ag, this.mt(), a);
        this.Q.m.linksControl && this.pj.Cc(a.width, a.height)
    },
    ta: function(a, b, c) {
        this.il.ta(a, b, c);
        this.Q.m.linksControl && this.pj.ta(a, b, c);
        this.pr.ta(a, b, c)
    },
    YK: s("Ag"),
    mt: function() {
        return this.Q.U()
    },
    VK: s("kf"),
    iq: function() {
        var a = qf(this.Q.ti().width, this.Q.U());
        this.kf = a.qs;
        this.Ag = a.Bt
    }
});

function uf(a) {
    this.Q = a;
    return "cvsRender" == a.ml ? new xf(a) : new yf(a)
};

function xf(a) {
    this.Q = a;
    this.Gg = a.Gg;
    this.fj();
    this.Q.aa = this
}
t.extend(xf.prototype, {
    setData: function(a, b, c) {
        this.oa = a;
        this.jD(b, c)
    },
    fj: function() {
        var a = J("canvas");
        a.width = this.Q.Ba().clientWidth;
        a.height = this.Q.Ba().clientHeight;
        var b = a.style;
        b.position = "absolute";
        b.left = b.top = "0";
        this.Gg.appendChild(a);
        this.eF = a.getContext("2d");
        this.Df = [];
        this.xx = [];
        this.Kb = new zf(this.eF, this.Df, 0, a.width, a.height, this.Q);
        for (a = b = a = 0; 16 > a; a++) {
            this.Df[a] = [];
            for (b = 0; 8 > b; b++) {
                var c = new Af;
                c.xz = a;
                c.yz = b;
                c.canvas = this.Kb;
                this.Df[a][b] = c
            }
        }
        this.Q.DK = this.Kb
    },
    ta: function(a, b) {
        var c = a.heading % 360,
            d = a.pitch;
        this.Nq({
            heading: c,
            pitch: d
        }, b);
        this.Kb.TF({
            heading: c,
            pitch: d
        }, b)
    },
    jD: function(a, b) {
        this.Kb.EF();
        this.yC(this.oa);
        this.Kb.jH(this.oa);
        this.Nw(a, b);
        this.Mq(b, i)
    },
    Ed: function(a, b) {
        var c = this,
            d = i;
        b == this.Kb.aa.zoom && (d = o);
        this.Nw(a, b);
        d && this.Mq(b, i);
        setTimeout(function() {
            c.Nq()
        }, 1E3)
    },
    yC: function(a) {
        var b = this,
            c = a.tiles,
            d = {
                Ad: []
            };
        d.Ad[0] = new Image;
        d.Ad[0].src = c.getTilesUrl(a.id, {
            x: 0,
            y: 0
        }, 2);
        d.Ad[1] = new Image;
        d.Ad[1].src = c.getTilesUrl(a.id, {
            x: 1,
            y: 0
        }, 2);
        b.RA = 0;
        d.Ad[0].onload = function() {
            b.ep()
        };
        d.Ad[1].onload = function() {
            b.ep()
        };
        this.xx[0] = d
    },
    ep: function() {
        this.RA++;
        2 == this.RA && (this.Kb.cJ(this.xx[0].Ad), this.Kb.ep())
    },
    Nq: function(a, b) {
        if (this.oa && this.oa.tiles)
            for (var c = this.oa.tiles, d = [], b = b || this.Kb.aa.zoom, d = this.Df, e = this.Kb.Ts(a), f = e.Om, g = e.Kl, j = e.lm, e = e.um, e = e > j ? e - j : 64 + e - j, k = 0, l = 0, m = 0; m < e + Math.pow(2, 7 - b);) {
                for (var p = f; p < g + Math.pow(2, 7 - b);) {
                    k = m + j;
                    63 < k ? k %= 64 : 0 > k && (k += 64);
                    k = Math.floor(k * Math.pow(2, b - 7));
                    l = Math.floor(p * Math.pow(2, b - 7));
                    if (k < Math.pow(2, b - 1) && l < Math.pow(2, b - 2) && 0 == d[k][l].li) {
                        var u = c.getTilesUrl(this.oa.id, {
                            x: k,
                            y: l
                        }, b);
                        d[k][l].qA(u)
                    }
                    p += Math.pow(2, 7 - b)
                }
                m += Math.pow(2, 7 - b)
            }
    },
    Mq: function(a, b) {
        var c = o;
        b && (c = i);
        if (!c)
            if (this.Np) this.Np = o;
            else return;
        if (this.oa && this.oa.tiles) {
            for (var c = this.oa.tiles, d = [], e = Math.pow(2, a - 1), f = Math.pow(2, a - 2), d = this.Df, g = 0; g < e; g++)
                for (var j = 0; j < f; j++) d[g][j].xI();
            for (var g = this.Kb.Ts(), e = g.Om, f = g.Kl, k = g.lm, g = g.um, l = g > k ? g - k : 64 + g - k, m = 0, p = 0, g = 0; g < l + Math.pow(2, 7 - a);) {
                for (j = e; j < f + Math.pow(2, 7 - a);) {
                    m = g + k;
                    63 < m ? m %= 64 : 0 > m && (m += 64);
                    m = Math.floor(m * Math.pow(2, a - 7));
                    p = Math.floor(j * Math.pow(2, a - 7));
                    if (m < Math.pow(2, a - 1) && p < Math.pow(2, a - 2)) {
                        var u = c.getTilesUrl(this.oa.id, {
                            x: m,
                            y: p
                        }, a);
                        d[m][p].qA(u)
                    }
                    j += Math.pow(2, 7 - a)
                }
                g += Math.pow(2, 7 - a)
            }
        }
    },
    Cc: function(a, b, c) {
        a != this.Kb.aa.zoom && (this.Np = i);
        this.Kb.zI(a, b, c);
        this.Mq(a);
        this.Nq();
        this.Kb.refresh()
    },
    Nw: function(a, b) {
        var c = o;
        b == this.Kb.aa.zoom ? this.Np = o : (this.Np = i, b < this.Kb.aa.zoom && (c = i));
        this.Kb.yI(a, b);
        return c
    },
    Hy: function(a) {
        return this.Kb.NG(a)
    },
    Vs: function(a, b) {
        return this.Kb.Vs(a, b)
    },
    gL: function() {
        return this.Kb.aa.qa
    }
});

function Af() {
    this.Ad = new Image;
    this.src = "";
    this.canvas = n;
    this.yz = this.xz = this.li = 0;
    var a = this;
    this.Xy = function() {
        a.li = 2;
        a.canvas.XF(a.xz, a.yz)
    };
    this.Ad.onload = this.Xy;
    this.qA = function(b) {
        this.src == b ? 0 == this.li && a.Xy() : (this.src = this.Ad.src = b, this.li = 1)
    };
    this.xI = function() {
        this.src = this.Ad.src = "";
        this.li = 0
    }
}

function zf(a, b, c, d, e, f) {
    this.heading = this.pitch = 0;
    this.zoom = 2;
    this.Df = b;
    this.jh = [];
    this.ie = a;
    this.Zh = o;
    this.aa = {
        a: d,
        Da: e,
        Ee: 0,
        zl: 0,
        qa: 0,
        WJ: 512,
        heading: 0,
        pitch: 0,
        Qb: 32,
        zoom: 0,
        fk: 0,
        Bj: 0,
        rk: 0,
        AK: 0,
        Mi: 0,
        BK: 0,
        nk: 0,
        qm: 0
    };
    this.Q = f;
    this.em = o;
    this.pB()
}
t.extend(zf.prototype, {
    pB: function() {
        if (t.M.Lx) {
            var a = navigator.userAgent.substr(navigator.userAgent.indexOf("Chrome"), 12);
            27 < Number(/[1-9][0-9]*/.exec(a + "1")[0]) ? (this.aa.Bj = 0.0078125, this.aa.qm = 2) : (this.aa.Bj = 0.015625, this.aa.qm = 4);
            this.aa.Mi = 0;
            this.aa.nk = 0
        } else t.M.S ? (this.aa.Bj = 0.0078125, this.aa.Mi = 0, this.aa.nk = 6) : (this.aa.Bj = 0.0078125, this.aa.Mi = 0, this.aa.nk = 4), this.aa.qm = 2
    },
    cJ: ba("jh"),
    Oo: function() {
        var a = this.aa,
            b = Math.PI / Math.pow(2, this.aa.fk);
        b > Math.PI / 2 + 0.1 && (b = 2 * Math.PI / 3);
        return a.a / 2 / Math.tan(b / 2)
    },
    zI: function(a, b, c) {
        var d = this.aa;
        d.a = c.width;
        d.Da = c.height;
        this.ie.canvas.width = c.width;
        this.ie.canvas.height = c.height;
        d.zoom = a;
        d.fk = b;
        d.qa = this.Oo();
        d.Qb = 16 * Math.pow(2, a - 2);
        d.rm = Math.pow(2, a - 1);
        d.Oi = Math.pow(2, a - 2);
        d.bk = Math.pow(2, 7 - a)
    },
    yI: function(a, b) {
        var c = this.aa;
        if (0 == this.aa.qa) c.zoom = b, c.fk = a, c.qa = this.Oo(), c.Qb = 16 * Math.pow(2, b - 2), c.rm = Math.pow(2, b - 1), c.Oi = Math.pow(2, b - 2), c.bk = Math.pow(2, 7 - b), c.rk = c.Bj * Math.pow(2, -a);
        else if (!(a == c.fk && b == c.zoom)) {
            this.Zh = i;
            var d = this.aa.qa;
            c.Qb = 16 * Math.pow(2, b - 2);
            c.zoom = b;
            c.fk = a;
            c.rm = Math.pow(2, b - 1);
            c.Oi = Math.pow(2, b - 2);
            c.bk = Math.pow(2, 7 - b);
            d = (this.Oo() - d) / 32;
            this.Q.Zg();
            this.lx(0, d);
            c.rk = c.Bj * Math.pow(2, -a)
        }
    },
    jH: function(a) {
        this.aa.heading -= this.aa.Ee / 180 * Math.PI;
        this.aa.Ee = a.tiles.dirNorth;
        this.aa.heading += a.tiles.dirNorth / 180 * Math.PI;
        this.aa.zl = a.tiles.pitch || 0
    },
    lx: function(a, b) {
        var c = this;
        if (5 > a) this.aa.qa += b * Math.pow(2, a), this.nC(), setTimeout(function() {
            c.lx(a + 1, b)
        }, 0);
        else if (5 == a) {
            this.Zh = o;
            var d = this.aa.zoom;
            this.aa.qa = this.Oo();
            this.aa.Qb = 16 * Math.pow(2, d - 2);
            this.aa.rm = Math.pow(2, d - 1);
            this.aa.Oi = Math.pow(2, d - 2);
            this.aa.bk = Math.pow(2, 7 - d);
            this.Q.Gp();
            this.refresh()
        }
    },
    FL: function(a, b) {
        this.Zh = i;
        var c = this.aa;
        this.Vt = {
            data: a,
            SE: b
        };
        this.Vt.Fe = 0;
        var d = Math.cos((a.dir + c.Ee) / 180 * Math.PI),
            c = -Math.sin((a.dir + c.Ee) / 180 * Math.PI),
            c = d = 0;
        this.Q.Zg();
        this.jC({
            index: 1,
            GK: d,
            HK: c
        })
    },
    XF: function(a, b) {
        if (!this.Zh && this.em)
            if (1 < this.aa.fk) this.refresh();
            else {
                var c = this.aa,
                    d = c.Qb,
                    e = 512 / d,
                    f = c.bk,
                    g = Math.cos(c.pitch),
                    j = Math.cos(c.heading),
                    k = Math.sin(c.heading),
                    l = c.qa * Math.sin(c.pitch),
                    m = c.qa * g * k;
                c.wk = -c.qa * g * j;
                c.xk = l;
                c.yk = m;
                c.Bl = j;
                c.Hm = k;
                for (g = 0; g < e; g++)
                    for (j = 0; j < e; j++) {
                        k = {
                            La: {
                                x: g * d,
                                y: j * d - 1
                            },
                            Ma: {
                                x: g * d - 1,
                                y: j * d + d + 1
                            },
                            Na: {
                                x: g * d + d + 1,
                                y: j * d + d
                            }
                        };
                        l = {
                            La: {
                                x: g * d - 1,
                                y: j * d
                            },
                            Ma: {
                                x: g * d + d + 1,
                                y: j * d - 1
                            },
                            Na: {
                                x: g * d + d,
                                y: j * d + d + 1
                            }
                        };
                        if (0 == g) var p = -1;
                        else g == f - 1 && (p = 1); if (0 == j) var u = -1;
                        else j == f - 1 && (u = 1);
                        this.ys(k, a, b, c.zoom, p, u);
                        this.zs(l, a, b, c.zoom, p, u)
                    }
            }
    },
    jC: function() {
        var a = this.aa;
        this.ie.clearRect(0, 0, a.a, a.Da);
        a.heading -= a.Ee / 180 * Math.PI;
        a.Ee = this.Vt.SE.JL;
        a.heading += a.Ee / 180 * Math.PI;
        this.jh = this.Vt.data.Ad;
        this.Zh = o;
        this.Q.Gp();
        this.refresh()
    },
    cj: function(a, b, c, d, e) {
        var c = this.aa,
            b = 2 * (0.5 * a.x / 512 + b / 2) * Math.PI,
            f = (0.5 - a.y / 512) * Math.PI,
            g = c.qa,
            a = Math.cos(f),
            j = Math.sin(Math.abs(f));
        0.4 > j ? j = 0.4 : 0.98 < j && (j = c.qm);
        var b = b + d * j,
            k = -a * Math.cos(b),
            j = Math.sin(f + e * j),
            l = a * Math.sin(b),
            e = c.Bl,
            d = c.Hm,
            b = c.wk,
            a = c.xk,
            f = c.yk,
            m = b * k + j * a + l * f;
        0 > m && (m = o);
        m = g * g / m;
        g = m * k - b;
        k = m * j - a;
        l = m * l - f;
        m = Math.pow(g, 2) + Math.pow(k, 2) + Math.pow(l, 2);
        j = Math.sqrt(m);
        0 == m ? d = e = 0 : (m = (g * d + l * e) / j, 1 < m ? m = 1 : -1 > m && (m = -1), m = Math.acos(m), 0 > g * e * a + k * d * f - k * e * b - l * a * d && (m = 2 * Math.PI - m), e = j * Math.cos(m), d = j * Math.sin(m));
        return {
            x: c.a / 2 + e,
            y: c.Da / 2 - d
        }
    },
    jy: function(a, b, c, d, e, f) {
        var g = this.ie,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            p = this.aa.rk;
        d && (1 == d ? k = p : -1 == d && (j = p));
        e && (-1 == e ? l = p : 1 == e && (m = p));
        d = this.aa.Mi;
        j = this.cj(a.La, b, c, -d - j, l, f);
        if (!j) return o;
        l = this.cj(a.Ma, b, c, d + k, d + l, f);
        if (!l) return o;
        c = this.cj(a.Na, b, c, k, -d - m, f);
        if (!c) return o;
        c = {
            La: j,
            Ma: l,
            Na: c
        };
        f = c.La;
        k = c.Ma;
        m = c.Na;
        g.save();
        g.beginPath();
        g.moveTo(f.x, f.y);
        g.lineTo(k.x, k.y);
        g.lineTo(m.x, m.y);
        g.closePath();
        g.clip();
        a = this.Yg(a, c);
        g.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
        g.drawImage(this.jh[b], 0, 0);
        g.restore()
    },
    iy: function(a, b, c, d, e, f) {
        var g = this.ie,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            p = this.aa.rk;
        d && (1 == d ? k = p : -1 == d && (j = p));
        e && (-1 == e ? l = p : 1 == e && (m = p));
        d = this.aa.Mi;
        l = this.cj(a.La, b, c, -j, d + l, f);
        if (!l) return o;
        j = this.cj(a.Ma, b, c, -d - j, -d - m, f);
        if (!j) return o;
        c = this.cj(a.Na, b, c, d + k, -m, f);
        if (!c) return o;
        c = {
            La: l,
            Ma: j,
            Na: c
        };
        f = c.La;
        k = c.Ma;
        m = c.Na;
        g.save();
        g.beginPath();
        g.moveTo(f.x, f.y);
        g.lineTo(k.x, k.y);
        g.lineTo(m.x, m.y);
        g.closePath();
        g.clip();
        a = this.Yg(a, c);
        g.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
        g.drawImage(this.jh[b], 0, 0);
        g.restore()
    },
    EF: function() {
        this.em = o;
        this.Q.Zg()
    },
    ep: function() {
        this.em = i;
        this.refresh();
        this.Q.Gp()
    },
    TF: function(a) {
        if (this.em && !this.Zh) {
            var b = this.aa;
            b.pitch = a.pitch / 180 * Math.PI - b.zl / 180 * Math.PI;
            b.heading = (a.heading + b.Ee) / 180 * Math.PI;
            b.heading > 2 * Math.PI ? b.heading -= 2 * Math.PI : 0 > b.heading && (b.heading += 2 * Math.PI);
            a = b.Qb;
            this.ie.clearRect(0, 0, b.a, b.Da);
            var c = b.bound,
                d = c.Om,
                e = c.Kl,
                f = c.lm,
                c = c.um,
                c = c > f ? c - f : 64 + c - f,
                g = b.bk,
                j = b.nk,
                k = Math.cos(b.pitch),
                l = Math.cos(b.heading),
                m = Math.sin(b.heading),
                p = b.qa * Math.sin(b.pitch),
                u = b.qa * k * m;
            b.wk = -b.qa * k * l;
            b.xk = p;
            b.yk = u;
            b.Bl = l;
            b.Hm = m;
            for (k = 0; k < c; k++)
                for (l = d; l < e; l++) {
                    u = k + f;
                    63 < u ? u %= 64 : 0 > u && (u += 64);
                    var m = Math.floor(u / g),
                        p = Math.floor(l / g),
                        u = u % g,
                        v = l % g,
                        w = {
                            La: {
                                x: u * a,
                                y: v * a - j
                            },
                            Ma: {
                                x: u * a - j,
                                y: v * a + a + j
                            },
                            Na: {
                                x: u * a + a + j,
                                y: v * a + a
                            }
                        }, y = {
                            La: {
                                x: u * a - j,
                                y: v * a
                            },
                            Ma: {
                                x: u * a + a + j,
                                y: v * a - j
                            },
                            Na: {
                                x: u * a + a,
                                y: v * a + a + j
                            }
                        };
                    if (0 == u) var E = -1;
                    else u == g - 1 && (E = 1); if (0 == v) var x = -1;
                    else v == g - 1 && (x = 1);
                    this.ys(w, m, p, b.zoom, E, x);
                    this.zs(y, m, p, b.zoom, E, x)
                }
        }
    },
    refresh: function() {
        if (this.em && !this.Zh) {
            var a = this.aa,
                b = a.Qb;
            this.ie.clearRect(0, 0, a.a, a.Da);
            var c = this.Ts(),
                d = c.Om,
                e = c.Kl,
                f = c.lm,
                c = c.um,
                c = c > f ? c - f : 64 + c - f,
                g = a.bk,
                j = Math.cos(a.pitch),
                k = Math.cos(a.heading),
                l = Math.sin(a.heading),
                m = a.qa * Math.sin(a.pitch),
                p = a.qa * j * l;
            a.wk = -a.qa * j * k;
            a.xk = m;
            a.yk = p;
            a.Bl = k;
            a.Hm = l;
            j = a.nk;
            for (k = 0; k < c; k++)
                for (l = d; l < e; l++) {
                    var u = k + f;
                    63 < u ? u %= 64 : 0 > u && (u += 64);
                    var m = Math.floor(u / g),
                        p = Math.floor(l / g),
                        u = u % g,
                        v = l % g,
                        w = {
                            La: {
                                x: u * b,
                                y: v * b - j
                            },
                            Ma: {
                                x: u * b - j,
                                y: v * b + b + j
                            },
                            Na: {
                                x: u * b + b + j,
                                y: v * b + b
                            }
                        }, y = {
                            La: {
                                x: u * b - j,
                                y: v * b
                            },
                            Ma: {
                                x: u * b + b + j,
                                y: v * b - j
                            },
                            Na: {
                                x: u * b + b,
                                y: v * b + b + j
                            }
                        };
                    if (0 == u) var E = -1;
                    else u == g - 1 && (E = 1); if (0 == v) var x = -1;
                    else v == g - 1 && (x = 1);
                    this.ys(w, m, p, a.zoom, E, x);
                    this.zs(y, m, p, a.zoom, E, x)
                }
        }
    },
    nC: function() {
        var a = this.aa;
        this.ie.clearRect(0, 0, a.a, a.Da);
        var b = a.nk,
            c = Math.cos(a.pitch),
            d = Math.cos(a.heading),
            e = Math.sin(a.heading),
            f = a.qa * Math.sin(a.pitch),
            g = a.qa * c * e;
        a.wk = -a.qa * c * d;
        a.xk = f;
        a.yk = g;
        a.Bl = d;
        a.Hm = e;
        for (a = 0; 16 > a; a++)
            for (c = 0; 16 > c; c++) {
                d = {
                    La: {
                        x: 32 * a,
                        y: 32 * c - b
                    },
                    Ma: {
                        x: 32 * a - b,
                        y: 32 * c + 32 + b
                    },
                    Na: {
                        x: 32 * a + 32 + b,
                        y: 32 * c + 32
                    }
                };
                e = {
                    La: {
                        x: 32 * a - b,
                        y: 32 * c
                    },
                    Ma: {
                        x: 32 * a + 32 + b,
                        y: 32 * c - b
                    },
                    Na: {
                        x: 32 * a + 32,
                        y: 32 * c + 32 + b
                    }
                };
                if (0 == a) var j = -1;
                else 15 == a && (j = 1); if (0 == c) var k = -1;
                else 15 == c && (k = 1);
                this.iy(d, 0, 2, j, k);
                this.jy(e, 0, 2, j, k);
                this.iy(d, 1, 2, j, k);
                this.jy(e, 1, 2, j, k)
            }
    },
    Vs: function(a, b) {
        var c = this.aa,
            d = a - c.a / 2,
            e = c.Da / 2 - b,
            f = c.pitch + c.zl / 180 * Math.PI,
            g = c.heading - c.Ee / 180 * Math.PI,
            j = -c.qa * Math.cos(f) * Math.cos(g),
            k = c.qa * Math.sin(f),
            l = c.qa * Math.cos(f) * Math.sin(g),
            m = d * Math.sin(g),
            d = d * Math.cos(g),
            p = e * Math.sin(f) * Math.cos(g),
            e = e * Math.cos(f),
            j = j + m + p,
            k = k + e,
            e = l + d + -e * Math.sin(f) * Math.sin(g),
            f = this.Va(j, k, e);
        if (2 < k) return o;
        g = 2.08 / (2.08 - k);
        j *= g;
        e *= g;
        return {
            hv: j,
            iv: e,
            qa: Math.sqrt(Math.pow(j, 2) + Math.pow(e, 2)),
            pu: c.qa,
            heading: f.heading
        }
    },
    Ts: function(a) {
        var b = this.aa;
        a && (b.heading = (a.heading + b.Ee) / 180 * Math.PI, b.heading > 2 * Math.PI ? b.heading -= 2 * Math.PI : 0 > b.heading && (b.heading += 2 * Math.PI), b.pitch = a.pitch / 180 * Math.PI - b.zl / 180 * Math.PI);
        var c = Math.cos(b.pitch),
            d = Math.sin(b.pitch),
            e = Math.cos(b.heading),
            f = Math.sin(b.heading),
            a = -b.qa * c * e,
            g = b.qa * d,
            j = b.qa * c * f,
            k = b.Da / 2 * d * e,
            l = b.Da / 2 * c,
            m = -b.Da / 2 * d * f,
            p = -b.Da / 2 * d * e,
            c = -b.Da / 2 * c,
            d = b.Da / 2 * d * f,
            u = -b.a / 2 * f,
            v = -b.a / 2 * e,
            f = b.a / 2 * f,
            e = b.a / 2 * e;
        if (0 < b.pitch) var w = this.Va(a + k + u, g + l + 0, j + m + v),
        y = this.Va(a + p, g + c, j + d), E = this.Va(a + p + f, g + c + 0, j + d + e);
        else var x = a + k,
        I = g + l, m = j + m, D = this.Va(x, I, m), I = this.Va(x + u, I + 0, m + v), x = this.Va(a + p + f, g + c + 0, j + d + e);
        a = Math.atan(b.Da / 2 / b.qa);
        b.pitch + a > Math.PI / 2 ? (D = 0, y = y.pitch < E.pitch ? y.pitch : E.pitch, y = Math.ceil(32 * (Math.PI / 2 - y) / Math.PI)) : b.pitch - a < -Math.PI / 2 ? (y = D.pitch > I.pitch ? D.pitch : I.pitch, D = Math.floor(32 * (Math.PI / 2 - y) / Math.PI), y = 32) : 0 < b.pitch ? (D = Math.floor(32 * (Math.PI / 2 - b.pitch - a) / Math.PI), y = y.pitch > E.pitch ? E.pitch : y.pitch, y = Math.ceil(32 * (Math.PI / 2 - y) / Math.PI)) : (y = D.pitch > I.pitch ? D.pitch : I.pitch, D = Math.floor(32 * (Math.PI / 2 - y) / Math.PI), y = Math.ceil(32 * (Math.PI / 2 - b.pitch + a) / Math.PI));
        Math.abs(b.pitch) >= Math.PI / 2 - a ? (x = 0, w = 64) : 0 < b.pitch ? (x = Math.floor(32 * w.heading / Math.PI), w = b.heading > w.heading ? Math.ceil(32 * (2 * b.heading - w.heading) / Math.PI) : Math.ceil(32 * (2 * b.heading + 2 * Math.PI - w.heading) / Math.PI)) : (w = Math.ceil(32 * x.heading / Math.PI), x = b.heading > x.heading ? Math.floor(32 * (2 * b.heading - 2 * Math.PI - x.heading) / Math.PI) : Math.floor(32 * (2 * b.heading - x.heading) / Math.PI));
        0 > x && (x += 64);
        64 < w && (w -= 64);
        32 < y && (y = 32);
        0 > D && (D = 0);
        b.bound = {
            Om: D,
            Kl: y,
            lm: x,
            um: w
        };
        return {
            Om: D,
            Kl: y,
            lm: x,
            um: w
        }
    },
    ys: function(a, b, c, d, e, f) {
        if (2 == this.Df[b][c].li) {
            var g = this.ie,
                j = 0,
                k = 0,
                l = 0,
                m = 0,
                p = this.aa.rk;
            e && (1 == e ? k = p : -1 == e && (j = p));
            f && (-1 == f ? l = p : 1 == f && (m = p));
            e = this.aa.Mi;
            l = this.de(a.La, b, c, d, 0, -j, e, l);
            if (!l) return o;
            j = this.de(a.Ma, b, c, d, -e, -j, -e, -m);
            if (!j) return o;
            d = this.de(a.Na, b, c, d, e, k, 0, -m);
            if (!d) return o;
            d = {
                La: l,
                Ma: j,
                Na: d
            };
            k = d.La;
            m = d.Ma;
            j = d.Na;
            g.save();
            g.beginPath();
            g.moveTo(k.x, k.y);
            g.lineTo(m.x, m.y);
            g.lineTo(j.x, j.y);
            g.closePath();
            g.clip();
            a = this.Yg(a, d);
            g.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
            g.drawImage(this.Df[b][c].Ad, 0, 0)
        } else {
            g = this.ie;
            m = l = k = j = 0;
            p = 0.0078125;
            e && (1 == e ? k = p : -1 == e && (j = p));
            f && (-1 == f ? l = p : 1 == f && (m = p));
            e = 0.0078125;
            l = this.de(a.La, b, c, d, 0, -j, e, l);
            if (!l) return o;
            j = this.de(a.Ma, b, c, d, -e, -j, -e, -m);
            if (!j) return o;
            d = this.de(a.Na, b, c, d, e, k, 0, -m);
            if (!d) return o;
            d = {
                La: l,
                Ma: j,
                Na: d
            };
            k = d.La;
            m = d.Ma;
            j = d.Na;
            g.save();
            g.beginPath();
            g.moveTo(k.x, k.y);
            g.lineTo(m.x, m.y);
            g.lineTo(j.x, j.y);
            g.closePath();
            g.clip();
            k = a.La;
            m = a.Ma;
            j = a.Na;
            l = this.aa.Oi;
            e = 512 * b;
            c *= 512;
            b >= l ? (a.La = {
                x: (e + k.x) / l - 512,
                y: (c + k.y) / l
            }, a.Ma = {
                x: (e + m.x) / l - 512,
                y: (c + m.y) / l
            }, a.Na = {
                x: (e + j.x) / l - 512,
                y: (c + j.y) / l
            }, a = this.Yg(a, d), g.transform(a[0], a[1], a[2], a[3], a[4], a[5]), g.drawImage(this.jh[1], 0, 0)) : (a.La = {
                x: (e + k.x) / l,
                y: (c + k.y) / l
            }, a.Ma = {
                x: (e + m.x) / l,
                y: (c + m.y) / l
            }, a.Na = {
                x: (e + j.x) / l,
                y: (c + j.y) / l
            }, a = this.Yg(a, d), g.transform(a[0], a[1], a[2], a[3], a[4], a[5]), g.drawImage(this.jh[0], 0, 0))
        }
        g.restore()
    },
    zs: function(a, b, c, d, e, f) {
        if (2 == this.Df[b][c].li) {
            var g = this.ie,
                j = 0,
                k = 0,
                l = 0,
                m = 0,
                p = this.aa.rk;
            e && (1 == e ? k = p : -1 == e && (j = p));
            f && (-1 == f ? l = p : 1 == f && (m = p));
            e = this.aa.Mi;
            j = this.de(a.La, b, c, d, -e, -j, 0, l);
            if (!j) return o;
            l = this.de(a.Ma, b, c, d, e, k, e, l);
            if (!l) return o;
            d = this.de(a.Na, b, c, d, 0, k, -e, -m);
            if (!d) return o;
            d = {
                La: j,
                Ma: l,
                Na: d
            };
            k = d.La;
            m = d.Ma;
            l = d.Na;
            g.save();
            g.beginPath();
            g.moveTo(k.x, k.y);
            g.lineTo(m.x, m.y);
            g.lineTo(l.x, l.y);
            g.closePath();
            g.clip();
            a = this.Yg(a, d);
            g.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
            g.drawImage(this.Df[b][c].Ad, 0, 0)
        } else {
            g = this.ie;
            m = l = k = j = 0;
            p = 0.0078125;
            e && (1 == e ? k = p : -1 == e && (j = p));
            f && (-1 == f ? l = p : 1 == f && (m = p));
            e = 0.0078125;
            j = this.de(a.La, b, c, d, -e, -j, 0, l);
            if (!j) return o;
            l = this.de(a.Ma, b, c, d, e, k, e, l);
            if (!l) return o;
            d = this.de(a.Na, b, c, d, 0, k, -e, -m);
            if (!d) return o;
            d = {
                La: j,
                Ma: l,
                Na: d
            };
            k = d.La;
            m = d.Ma;
            l = d.Na;
            g.save();
            g.beginPath();
            g.moveTo(k.x, k.y);
            g.lineTo(m.x, m.y);
            g.lineTo(l.x, l.y);
            g.closePath();
            g.clip();
            k = a.La;
            m = a.Ma;
            l = a.Na;
            j = this.aa.Oi;
            e = 512 * b;
            c *= 512;
            b >= j ? (a.La = {
                x: (e + k.x) / j - 512,
                y: (c + k.y) / j
            }, a.Ma = {
                x: (e + m.x) / j - 512,
                y: (c + m.y) / j
            }, a.Na = {
                x: (e + l.x) / j - 512,
                y: (c + l.y) / j
            }, a = this.Yg(a, d), g.transform(a[0], a[1], a[2], a[3], a[4], a[5]), g.drawImage(this.jh[1], 0, 0)) : (a.La = {
                x: (e + k.x) / j,
                y: (c + k.y) / j
            }, a.Ma = {
                x: (e + m.x) / j,
                y: (c + m.y) / j
            }, a.Na = {
                x: (e + l.x) / j,
                y: (c + l.y) / j
            }, a = this.Yg(a, d), g.transform(a[0], a[1], a[2], a[3], a[4], a[5]), g.drawImage(this.jh[0], 0, 0))
        }
        g.restore()
    },
    de: function(a, b, c, d, e, f, g, j) {
        d = this.aa;
        b = 2 * (1 / d.rm * a.x / 512 + b / d.rm) * Math.PI;
        c = (0.5 - 1 / d.Oi * a.y / 512 - c / d.Oi) * Math.PI;
        a = Math.sin(Math.abs(c));
        0.4 > a ? a = 0.4 : 0.98 < a && (a = d.qm);
        var b = b + (e + f) * a,
            c = c + (g + j) * a,
            k = d.qa,
            e = Math.cos(c),
            a = -e * Math.cos(b),
            c = Math.sin(c),
            l = e * Math.sin(b),
            b = d.Bl,
            e = d.Hm,
            f = d.wk,
            g = d.xk,
            j = d.yk,
            m = f * a + c * g + l * j;
        if (0 > m) return o;
        k = k * k / m;
        a = k * a - f;
        c = k * c - g;
        l = k * l - j;
        m = Math.pow(a, 2) + Math.pow(c, 2) + Math.pow(l, 2);
        k = Math.sqrt(m);
        0 == m ? e = b = 0 : (m = (a * e + l * b) / k, 1 < m ? m = 1 : -1 > m && (m = -1), m = Math.acos(m), 0 > a * b * g + c * e * j - c * b * f - l * g * e && (m = 2 * Math.PI - m), b = k * Math.cos(m), e = k * Math.sin(m));
        return {
            x: d.a / 2 + b,
            y: d.Da / 2 - e
        }
    },
    NG: function(a) {
        var b = this.Q.ba();
        if (b) {
            var c = this.aa,
                d = c.heading,
                e = c.qa,
                f = c.pitch + c.zl / 180 * Math.PI,
                d = d - c.Ee / 180 * Math.PI,
                g = 6378137 * -(a.lat - b.lat) / 180 * Math.PI,
                j = 6378137 * (a.lng - b.lng) / 180 * Math.PI,
                a = Math.sqrt(Math.pow(g, 2) + Math.pow(j, 2)),
                k = Math.cos(f),
                b = Math.cos(d),
                d = Math.sin(d),
                l = -e * k * b,
                f = e * Math.sin(f),
                k = e * k * d,
                m = l * g + -2.08 * f + j * k;
            if (0 > m) return o;
            var m = e * e / m,
                g = m * g - l,
                e = -2.08 * m - f,
                m = m * j - k,
                p = Math.pow(g, 2) + Math.pow(e, 2) + Math.pow(m, 2),
                j = Math.sqrt(p);
            0 == p ? d = b = 0 : (p = (g * d + m * b) / j, 1 < p ? p = 1 : -1 > p && (p = -1), p = Math.acos(p), 0 > g * b * f + e * d * k - e * b * l - m * f * d && (p = 2 * Math.PI - p), b = j * Math.cos(p), d = j * Math.sin(p));
            return {
                x: c.a / 2 + b,
                y: c.Da / 2 - d,
                qa: a
            }
        }
        return o
    },
    Va: function(a, b, c) {
        var d = Math.pow(a, 2),
            e = Math.pow(c, 2);
        return {
            heading: 0 < c ? Math.PI - Math.acos(a / Math.sqrt(d + e)) : Math.PI + Math.acos(a / Math.sqrt(d + e)),
            pitch: Math.asin(b / Math.sqrt(d + Math.pow(b, 2) + e))
        }
    },
    Yg: function(a, b) {
        var c = a.La.x,
            d = a.La.y,
            e = a.Ma.y,
            f = a.Na.y,
            g = b.La.x,
            j = b.La.y,
            k = b.Ma.x,
            l = b.Ma.y,
            m = b.Na.x,
            p = b.Na.y,
            u = e - d,
            v = f - d,
            w = a.Ma.x - c,
            y = a.Na.x - c,
            u = e - d,
            v = f - d,
            e = m - g,
            l = l - j,
            k = k - g,
            p = p - j,
            f = y * u - w * v,
            u = [(e * u - k * v) / f, (p * u - l * v) / f, (e * w - k * y) / -f, (l * y - p * w) / f];
        u[4] = g - u[0] * c - u[2] * d;
        u[5] = j - u[3] * d - u[1] * c;
        return u
    }
});

function yf(a) {
    this.Q = a;
    this.Ub = this.oa = n;
    this.Ln = 0;
    this.Gg = a.Gg;
    this.Th = [];
    this.Zf = {};
    this.Kr = {};
    this.Ej = {
        vl: 0.001,
        width: 0,
        height: 0,
        heading: 0,
        pitch: 0
    };
    this.Q.aa = this
}
t.extend(yf.prototype, {
    setData: function(a) {
        this.Ot();
        this.oa = a
    },
    Ot: function() {
        for (var a in this.Zf) this.Kr[a] = this.Zf[a]
    },
    ta: function(a, b, c) {
        if (this.oa) {
            var d = a.heading,
                e = a.pitch,
                f = this.oa.tiles,
                g = f.dirNorth,
                j = f.Xg(b),
                k = f.wt(b),
                l = 360 / j,
                f = this.Q,
                j = 360 / (j * c);
            this.kj = b;
            this.kf = c;
            var m = g + d,
                p = 90 - e,
                e = Math.floor(m / l),
                d = Math.floor(p / l),
                g = f.Ba().clientWidth,
                f = f.Ba().clientHeight,
                u = g / 2,
                v = f / 2,
                m = Math.round(u - m % l / j);
            0 > e && (m -= c);
            for (var l = Math.round(v - p % l / j), p = Math.floor(d - v / c), v = Math.ceil(d + v / c), p = 0 > p ? 0 : p, v = v > k - 1 ? k - 1 : v, w = e - Math.round(u / c), k = e + Math.round(u / c), y = m; 0 > y;) y += c;
            y <= u ? w-- : y > u && k++;
            for (var E in this.Zf) u = this.Zf[E].fx, u.id != this.oa.id || u.zoom != b || (c = u.x, (u.y < p || u.y > v || c < w || c > k) && this.hw(E));
            E = [];
            for (u = w; u <= k; u++)
                for (c = p; c <= v; c++) E.push([u, c]);
            this.Ln += E.length;
            E.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([e, d]));
            for (u = 0; u < E.length; u++) c = E[u][0], this.pE(c, E[u][1], b, e, d, m, l);
            this.Ej.vl = j;
            this.Ej.width = g;
            this.Ej.height = f;
            this.Ej.heading = a.heading;
            this.Ej.pitch = a.pitch
        }
    },
    pE: function(a, b, c, d, e, f, g) {
        var j = this.oa.tiles,
            k = this.kf,
            l = j.Xg(c),
            m = this.Av(this.oa.id, a, b, c),
            p = this.Zf[m];
        if (p) j = p.style, j.top = Math.round((b - e) * k + g) + "px", j.left = Math.round((a - d) * k + f) + "px", j.width = p.style.height = Math.ceil(k) + "px", this.we();
        else if (p = this.Th[m]) c = p, j = p.style, j.top = Math.round((b - e) * k + g) + "px", j.left = Math.round((a - d) * k + f) + "px", j.width = p.style.height = Math.ceil(k) + "px", this.Zf[m] = c, this.Gg.appendChild(c), this.we();
        else {
            p = J("img");
            p.setAttribute("errorCount", 0);
            for (var u = a; 0 > u;) u = l + u;
            var v = j.getTilesUrl(this.oa.id, new O((u + l) % l, b), c),
                w = this;
            p.onload = function() {
                w.we();
                w.Gg.appendChild(this)
            };
            p.onerror = function() {
                var a = this,
                    b = a.getAttribute("errorCount");
                3 > b ? (b++, setTimeout(function() {
                    a.src = v
                }, 100), a.setAttribute("errorCount", b)) : w.we()
            };
            j = p.style;
            j.position = "absolute";
            j.border = "none";
            j.width = j.height = Math.ceil(k) + "px";
            j.WebkitUserSelect = "none";
            j.WebkitUserDrag = "none";
            p.src = v;
            p.fx = {
                id: this.oa.id,
                zoom: c,
                x: a,
                y: b
            };
            p.style.top = Math.round((b - e) * k + g) + "px";
            p.style.left = Math.round((a - d) * k + f) + "px";
            p.ontouchstart = function(a) {
                a.preventDefault()
            };
            this.Zf[m] = p;
            if (100 < this.Th.length) {
                a = Math.round(60);
                for (b = 0; b < a; b++) d = this.Th[b].fx, delete this.Th[this.Av(d.id, d.x, d.y, d.zoom)];
                this.Th.splice(0, a)
            }
            this.Th[m] = p;
            this.Th.push(p)
        }
    },
    hw: function(a) {
        var b = this.Zf[a];
        b && b.parentNode && b.parentNode.removeChild(b);
        delete this.Zf[a];
        delete this.Kr[a]
    },
    Ed: function(a, b) {
        var c = this.kj;
        this.kj = b;
        c != this.kj && this.Ot()
    },
    Cc: function(a) {
        var b = this.kj;
        this.kj = a;
        b != this.kj && this.Ot()
    },
    we: function() {
        var a = this;
        this.Ln--;
        if (0 == this.Ln) {
            for (var b in this.Kr)(function() {
                var c = b;
                setTimeout(function() {
                    a.hw(c)
                }, 200)
            })();
            this.Q.dispatchEvent(new L("ontilesloaded"))
        }
    },
    Av: function(a, b, c, d) {
        var e = this.oa.tiles.Xg(d),
            f = (b + e) % e;
        0 == this.Q.U() && (f = (b + 2 * e) % (2 * e));
        return a + "_" + f + "_" + c + "_" + d
    },
    Hy: function(a) {
        var b = this.Ej,
            c = this.Q.ba();
        if (c) {
            var d = 6378137 * -(a.lat - c.lat) / 180 * Math.PI,
                e = 6378137 * (a.lng - c.lng) / 180 * Math.PI,
                a = Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2)),
                c = b.heading % 360 - b.vl * b.width / 2,
                f = b.pitch + b.vl * b.height / 2,
                d = this.Va(d, -2.08, e);
            return {
                x: (180 * (d.heading % 360 / Math.PI) - c) / b.vl,
                y: (f - 180 * (d.pitch / Math.PI)) / b.vl,
                qa: a
            }
        }
        return o
    },
    Va: function(a, b, c) {
        var d = Math.pow(a, 2),
            e = Math.pow(c, 2);
        return {
            heading: 0 < c ? Math.PI - Math.acos(a / Math.sqrt(d + e)) : Math.PI + Math.acos(a / Math.sqrt(d + e)),
            pitch: Math.asin(b / Math.sqrt(d + Math.pow(b, 2) + e))
        }
    }
});

function vf(a) {
    this.Q = a;
    a.rw = this;
    this.Yd = [];
    this.yv = [];
    this.Ek = [];
    this.xv = [];
    this.Bh = [];
    this.jw = [];
    this.Wn = [];
    this.Tt = this.zw = this.yw = this.kn = this.jn = 0;
    this.Ux = {};
    this.nm = this.dp = o;
    nb() ? this.qd = this.tq() : ob() ? (this.tg = this.QB(), this.uq = this.tg.getContext("2d"), this.wB(), this.Xk = []) : mb() && (this.bo = this.ZB());
    this.Ub = n;
    this.Op = "#549eef"
}
var Bf = [
    [0, -11],
    [4, -6.5],
    [2, -6.5],
    [2, -3],
    [-2, -3],
    [-2, -6.5],
    [-4, -6.5]
],
    Cf = [
        [5, -2],
        [5, -12],
        [-5, -12],
        [-5, -2]
    ],
    Df = [
        [0, -110],
        [40, -65],
        [20, -65],
        [20, -30],
        [-20, -30],
        [-20, -65],
        [-40, -65]
    ],
    Ef = [
        [45, -20],
        [45, -120],
        [-45, -120],
        [-45, -20]
    ],
    Ff = "\u5317 \u4e1c\u5317 \u4e1c \u4e1c\u5357 \u5357 \u897f\u5357 \u897f \u897f\u5317 \u5317".split(" ");
t.extend(vf.prototype, {
    tq: function() {
        var a = J("svg", {
            version: "1.1",
            overflow: "hidden"
        }, "http://www.w3.org/2000/svg"),
            b = this.Q,
            c = b.Ba().clientWidth,
            d = b.Ba().clientHeight;
        this.qd = a;
        this.jn = c;
        this.kn = d;
        this.yw = b.Ba().offsetLeft || 0;
        this.zw = b.Ba().offsetTop || 0;
        this.Uw(c, d);
        a.style.position = "absolute";
        a.style.left = "0";
        a.style.top = "0";
        a.style.WebkitUserSelect = a.style.cB = a.style.MozUserSelect = "none";
        b.Fn.appendChild(a);
        nb() && "cvsRender" == this.Q.ml && this.WI(a);
        return a
    },
    WI: function(a) {
        var b = this,
            c = J("ellipse", {
                fill: "white",
                "fill-rule": "evenodd",
                "fill-opacity": "0.4",
                cx: "100",
                cy: "100",
                rx: "20",
                ry: "20"
            }, "http://www.w3.org/2000/svg");
        c.setAttribute("visibility", "hidden");
        this.Bs = c;
        a.appendChild(c);
        a = this.Q.Ba();
        t.C(a, "mousedown", function(a) {
            b.Tt = (new Date).valueOf();
            b.EI(a.offsetX || a.layerX || 0, a.offsetY || a.layerY || 0)
        });
        t.C(a, "mouseup", function() {
            200 > (new Date).valueOf() - b.Tt && (b.dp && b.Q.m.visible) && b.click();
            b.Tt = 0
        });
        t.C(a, "mousemove", function(a) {
            b.FI(a.offsetX || a.layerX || 0, a.offsetY || a.layerY || 0);
            b.QI(a.offsetX || a.layerX || 0, a.offsetY || a.layerY || 0)
        });
        t.M.uf ? t.C(a, "mouseout", function(a) {
            var c = a.clientX || a.pageX || 0,
                a = a.clientY || a.pageY || 0,
                c = c - b.yw,
                a = a - b.zw;
            (40 > Math.abs(Math.abs(c - b.jn / 2) - b.jn / 2) || 40 > Math.abs(Math.abs(a - b.kn / 2) - b.kn / 2)) && b.Bs.setAttribute("visibility", "hidden")
        }) : t.C(a, "mouseout", function() {
            b.Bs.setAttribute("visibility", "hidden")
        });
        b.Q.addEventListener("hide_ellipse", function() {
            b.nm = i
        });
        b.Q.addEventListener("show_ellipse", function() {
            b.nm = o
        })
    },
    QB: function() {
        var a = J("canvas"),
            b = this.Q,
            c = b.Ba().clientWidth,
            d = b.Ba().clientHeight;
        this.tg = a;
        a.width = c;
        a.height = d;
        var e = a.style;
        e.position = "absolute";
        e.top = e.left = "0";
        e.width = c + "px";
        e.height = d + "px";
        e.$J = "rgba(0, 0, 0, 0)";
        b.Fn.appendChild(a);
        return a
    },
    ZB: function() {
        var a = this.Q.Ba(),
            b = a.clientWidth,
            a = a.clientHeight;
        return bb(this.Q.Fn, ['<v:group style="behavior:url(#default#VML);z-index:1;width:', b + "px;height:" + a + 'px;position:absolute;left:0;top:0;"', 'coordsize="' + b + "," + a + '" ', 'coordorigin="-' + b / 2 + ",-" + 0.75 * a + '">', "</v:group>"].join(""))
    },
    Cc: function(a, b) {
        if (nb()) this.Uw(a, b);
        else if (ob()) {
            var c = this.tg;
            c.width = a;
            c.height = b;
            c.style.width = a + "px";
            c.style.height = b + "px"
        }
    },
    Uw: function(a, b) {
        this.qd && (this.qd.setAttribute("width", a + "px"), this.qd.setAttribute("height", b + "px"), this.qd.setAttribute("viewBox", "0 0 " + a + " " + b), this.jn = a, this.kn = b)
    },
    setData: ba("oa"),
    ta: function(a, b, c, d) {
        if (this.oa) {
            this.Fb = a;
            this.ge = b;
            this.kf = c;
            var e = (a.heading + 360) % 360,
                a = a.pitch,
                f = this.Q,
                g = f.Ba().clientWidth,
                j = f.Ba().clientHeight,
                b = 360 / (this.oa.tiles.Xg(b) * c),
                c = f.U() + 1,
                b = 0.75 * j + 1 * (a / b) / c;
            b < j / 2 && (b = j / 2);
            j = (90 - a) / 200;
            c = 10;
            nb() ? this.KD(this.oa.id, this.oa.links) : ob() ? (this.uq.clearRect(0, 0, this.tg.width, this.tg.height), this.oa.id != this.Ub && (this.Xk.length = 0)) : mb() && (c = 36, this.LD(this.oa.id, this.oa.links));
            for (f = 0; f < this.oa.links.length; f++) {
                var k = this.oa.links[f].dir - e,
                    k = (360 + k) % 360,
                    l = g / 2 + 50 * Math.sin(nf(k)),
                    m = b - 60 * Math.cos(nf(k)) * j;
                if (nb()) this.fC(f, [g / 2, b], [c, c * j], k), this.kC(f, [l, m]);
                else if (ob()) {
                    var p = "#444";
                    d == f && (p = this.Op);
                    this.Lv([g / 2, b + 3], [c, c * j], k, "#000", 0.4);
                    this.Lv([g / 2, b], [c, c * j], k, "#fff", 0.95, p);
                    this.lC(f, [l, m], p);
                    k = [g / 2 + 60 * Math.sin(nf(k)), b - 50 * Math.cos(nf(k)) * j];
                    this.Xk[f] = [Math.round(k[0]), Math.round(k[1])]
                } else mb() && (l = 1, -30 < a && (l = 80 > a - -30 ? l + Math.tan(nf(a - -30)) : l + 6), l = -Math.sin(nf(Math.min(a, -30))) / l, this.bo.coordorigin = Math.round(-g / 2) + "," + Math.round(-b + 40), this.gC(f, k, l))
            }
        }
    },
    KD: function(a, b) {
        if (a != this.Ub) {
            this.Ub = a;
            linksCount = b.length;
            if (linksCount > this.Yd.length) {
                for (var c = linksCount - this.Yd.length, d = this.qd, e = 0; e < c; e++) {
                    var f = J("path", {
                        fill: "black",
                        "fill-rule": "evenodd",
                        "fill-opacity": "0.4",
                        stroke: "none"
                    }, "http://www.w3.org/2000/svg"),
                        g = J("path", {
                            fill: "white",
                            "fill-rule": "evenodd",
                            "fill-opacity": "0.9",
                            stroke: "#444",
                            "stroke-width": "0.2",
                            "stroke-linecap": "round"
                        }, "http://www.w3.org/2000/svg"),
                        j = ["M"],
                        k = Bf;
                    j.push(k[0][0]);
                    j.push(k[0][1]);
                    for (var l = 1; l < k.length; l++) j.push("L"), j.push(k[l][0]), j.push(k[l][1]);
                    j.push(k[0][0]);
                    j.push(k[0][1]);
                    f.setAttribute("d", j.join(" "));
                    this.Ek.push(f);
                    d.appendChild(f);
                    g.setAttribute("d", j.join(" "));
                    this.Yd.push(g);
                    d.appendChild(g);
                    l = J("text", {
                        fill: "#444",
                        "fill-rule": "evenodd",
                        stroke: "none",
                        "font-size": "16px",
                        "font-family": "arial",
                        "text-anchor": "middle",
                        "alignment-baseline": "middle"
                    }, "http://www.w3.org/2000/svg");
                    l.style.WebkitUserSelect = l.style.cB = l.style.MozUserSelect = "none";
                    this.Wn.push(l);
                    d.appendChild(l);
                    var f = J("path", {
                        fill: "white",
                        "fill-rule": "evenodd",
                        "fill-opacity": "0",
                        stroke: "none",
                        cursor: "pointer"
                    }, "http://www.w3.org/2000/svg"),
                        m = this;
                    f.vv = g;
                    f.dx = l;
                    f.style.MozUserSelect = "none";
                    g = ["M"];
                    j = Cf;
                    g.push(j[0][0]);
                    g.push(j[0][1]);
                    for (l = 1; l < j.length; l++) g.push("L"), g.push(j[l][0]), g.push(j[l][1]);
                    f.setAttribute("d", g.join(" "));
                    t.C(f, H() ? "touchstart" : "mousedown", function(a) {
                        m.uj = {
                            heading: m.Fb.heading,
                            pitch: m.Fb.pitch
                        };
                        m.Mk = this;
                        this.vv.setAttribute("stroke", m.Op);
                        this.dx.setAttribute("fill", m.Op);
                        db(a)
                    });
                    this.Bh.push(f);
                    d.appendChild(f);
                    t.C(f, "mousemove", function() {
                        m.nm = i
                    });
                    t.C(f, "mouseout", function() {
                        m.nm = o
                    })
                }
                t.C(this.Q.B, H() ? "touchend" : "mouseup", function() {
                    if (m.Mk) {
                        if (m.Fb.heading == m.uj.heading && m.Fb.pitch == m.uj.pitch) {
                            var a = m.Mk.getAttribute("sid");
                            a && (m.Q.dispatchEvent(new L("onlinkclick")), m.Q.lh(a));
                            m.tK = m.uK = n
                        }
                        m.Mk.vv.setAttribute("stroke", "#444");
                        m.Mk.dx.setAttribute("fill", "#444");
                        m.uj = n;
                        m.Mk = n
                    }
                })
            }
            for (e = 0; e < this.Yd.length; e++) c = "", e < linksCount ? (d = this.Wn[e], 0 < d.childNodes.length && d.removeChild(d.childNodes[0]), l = this.Wv(b[e].dir), d.appendChild(document.createTextNode(l)), this.Bh[e].setAttribute("sid", b[e].id)) : c = "none", this.Yd[e].style.display = c, this.Ek[e].style.display = c, this.Wn[e].style.display = c, this.Bh[e].style.display = c
        }
    },
    wB: function() {
        var a = this,
            b = a.Q,
            a = this,
            b = a.Q;
        t.C(this.tg, "touchstart", function(b) {
            a.uj = {
                heading: a.Fb.heading,
                pitch: a.Fb.pitch
            };
            var d = cb(a.tg);
            a.An = a.Dy(b.touches[0].clientX - d.left, b.touches[0].clientY - d.top);
            a.ta(a.Fb, a.ge, a.kf, a.An)
        });
        t.C(this.tg, "touchend", function() {
            a.Fb.heading == a.uj.heading && a.Fb.pitch == a.uj.pitch && a.oa.links[a.An] && (b.dispatchEvent(new L("onlinkclick")), b.lh(a.oa.links[a.An].id));
            a.An = n
        })
    },
    Dy: function(a, b) {
        for (var c = 0; c < this.Xk.length; c++)
            if (30 > Math.abs(a - this.Xk[c][0]) && 30 > Math.abs(b - this.Xk[c][1])) return c;
        return -1
    },
    LD: function(a, b) {
        if (a != this.Ub) {
            this.Ub = a;
            linksCount = b.length;
            if (linksCount > this.Yd.length)
                for (var c = linksCount - this.Yd.length, d = 0; d < c; d++) {
                    for (var e = [], f = Df, g = 0; g < f.length; g++) e.push(f[g][0]), e.push(f[g][1]);
                    e.push(f[0][0]);
                    e.push(f[0][1]);
                    g = bb(this.bo, ["<v:polyline ", 'points="' + e.join(" ") + '"', ' style="behavior:url(#default#VML);z-index:1;left:0;top:0;" stroked="false"><v:fill style="behavior:url(#default#VML)" color="black" opacity="0.5"></v:fill><v:skew style="behavior:url(#default#VML)" on="true" origin="0,1.5" matrix="1,0,0,1,0,0" offset="0,0.05"></v:skew></v:polyline>'].join(""));
                    this.Ek.push(g);
                    this.xv.push(g.getElementsByTagName("skew")[0]);
                    g = bb(this.bo, ["<v:polyline ", 'points="' + e.join(" ") + '"', 'fillcolor="white" stroked="true" strokecolor="#444" strokeweight="1"  style="behavior:url(#default#VML);z-index:2;left:0;top:0;"><v:fill style="behavior:url(#default#VML)" color="white" opacity="1"></v:fill><v:skew style="behavior:url(#default#VML)" on="true" origin="0,1.5" matrix="1,0,0,1,0,0" offset="0,0"></v:skew></v:polyline>'].join(""));
                    this.Yd.push(g);
                    this.yv.push(g.getElementsByTagName("skew")[0]);
                    e = [];
                    f = Ef;
                    for (g = 0; g < f.length; g++) e.push(f[g][0]), e.push(f[g][1]);
                    var g = bb(this.bo, ['<v:polyline style="cursor:pointer;z-index:3;behavior:url(#default#VML);"', ' points="' + e.join(" ") + '" stroked="false">', '<v:fill style="behavior:url(#default#VML);" color="white" opacity="0"></v:fill><v:skew style="behavior:url(#default#VML);" on="true" origin="0,1.2" matrix="1,0,0,1,0,0"></v:skew></v:polyline>'].join("")),
                        j = this;
                    t.C(g, "click", function(a) {
                        (a = a.srcElement.sid) && j.Q.lh(a)
                    });
                    this.Bh.push(g);
                    this.jw.push(g.getElementsByTagName("skew")[0])
                }
            for (d = 0; d < this.Yd.length; d++) c = "", d < linksCount ? this.Bh[d].sid = b[d].id : c = "none", this.Yd[d].style.display = c, this.Ek[d].style.display = c, this.Bh[d].style.display = c
        }
    },
    fC: function(a, b, c, d) {
        this.Yd[a] && (this.Yd[a].setAttribute("transform", "translate(" + b[0] + " " + b[1] + ")scale(" + c[0] + " " + c[1] + ")rotate(" + d + ")"), this.Ek[a].setAttribute("transform", "translate(" + b[0] + " " + (b[1] + 4) + ")scale(" + c[0] + " " + c[1] + ")rotate(" + d + ")"), this.Bh[a].setAttribute("transform", "translate(" + b[0] + " " + b[1] + ")scale(" + c[0] + " " + c[1] + ")rotate(" + d + ")"))
    },
    kC: function(a, b) {
        this.Wn[a].setAttribute("transform", "translate(" + b[0] + " " + b[1] + ")")
    },
    gC: function(a, b, c) {
        this.dq(this.yv[a], b, 0, c);
        this.dq(this.xv[a], b, 0.6, c);
        this.dq(this.jw[a], b, 0, c)
    },
    dq: function(a, b, c, d) {
        var e = nf(b),
            b = Math.cos(e),
            e = Math.sin(e);
        a.matrix = [Number(b).toFixed(4), Number(-e).toFixed(4), Number(e * d).toFixed(4), Number(b * d).toFixed(4), 0, 0].join();
        a.offset = "0," + Math.round(50 * c) / 1E3
    },
    Lv: function(a, b, c, d, e, f) {
        var g = this.uq;
        g.save();
        g.fillStyle = d;
        g.globalAlpha = e;
        g.translate(a[0], a[1]);
        g.scale(b[0], b[1]);
        g.rotate(nf(c));
        g.beginPath();
        g.moveTo(Bf[0][0], Bf[0][1]);
        for (a = 1; a < Bf.length; a++) g.lineTo(Bf[a][0], Bf[a][1]);
        g.closePath();
        g.fill();
        f && (g.lineWidth = "0.2", g.lineCap = "round", g.lineJoin = "round", g.strokeStyle = f, g.stroke());
        g.restore()
    },
    lC: function(a, b, c) {
        var d = this.uq;
        d.save();
        a = this.Wv(this.oa.links[a].dir);
        d.font = "16px sans-serif";
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.fillStyle = c;
        d.fillText(a, b[0], b[1]);
        d.restore()
    },
    Wv: function(a) {
        return Ff[Math.ceil(Math.floor((a + 360) % 360 / 22.5) / 2)]
    },
    click: function() {
        if (!(2 < Math.abs(this.RF - this.ZH) || 2 < Math.abs(this.ey - this.ey))) {
            var a = this.Ux;
            if (a) {
                for (var b = this.oa.links, c = this.EG(a.hv, a.iv), d = 30, e = 0, f = 0; f < b.length; f++) e = b[f].dir - c, e = 180 < Math.abs(e) ? b[f].dir > c ? 360 + c - b[f].dir : 360 - c + b[f].dir : Math.abs(e), e < d && (d = e);
                29 > d && (b = this.Q.ba(), this.Q.ga(new F(b.lng + 180 * a.iv / Math.PI / 6378137, b.lat - 180 * a.hv / Math.PI / 6378137)))
            }
        }
    },
    EI: function(a, b) {
        this.RF = a;
        this.ey = b
    },
    FI: ba("ZH"),
    QI: function(a, b) {
        this.Ux = coord = this.Q.aa.Vs(a, b);
        var c = this.Bs;
        if (coord && !this.nm && this.Q.m.visible) {
            c.setAttribute("cx", a);
            c.setAttribute("cy", b);
            var d = Math.abs(2 * coord.pu / (coord.qa - 2) - 2 * coord.pu / (coord.qa + 2)) / 2,
                e = 2 * coord.pu / coord.qa;
            if (4 < coord.qa) {
                if (100 < e) {
                    var f = e / 100,
                        e = 100,
                        d = d / f;
                    d > e && (d = e)
                }
                c.setAttribute("rx", e);
                c.setAttribute("ry", d);
                c.setAttribute("visibility", "visible");
                this.dp = i
            } else this.dp = o, c.setAttribute("visibility", "hidden")
        } else this.dp = o, c.setAttribute("visibility", "hidden")
    },
    EG: function(a, b) {
        var c = 0;
        0 < a ? c = 180 * (Math.atan(b / a) / Math.PI) : 0 > a ? c = 180 * (Math.atan(b / a) / Math.PI) + 180 : 0 == a && (c = 0 < b ? 90 : -90);
        heading = 180 - c;
        360 < heading ? heading -= 360 : 0 > heading && (heading += 360);
        return heading
    }
});

function Gf(a) {
    this.Q = a;
    this.kf = 512;
    a.U()
}
B.$t(function(a) {
    var b = new Gf(a);
    a.addEventListener("dataload", function(a) {
        b.oa = a.data;
        b.Qf()
    })
});
Gf.prototype.Qf = function() {
    function a(a, b) {
        f = i;
        g = a;
        j = b;
        p = w.Va().heading;
        u = w.Va().pitch;
        w.dispatchEvent(new L("ontouchstart"))
    }

    function b(a, b) {
        if (f) {
            m = i;
            k = -a * I.cq;
            l = b * I.cq;
            var c = p + k,
                d = u + l;
            d > E && (d = E);
            d < x && (d = x);
            horizonAngle = c;
            verticalAngle = d;
            verticalAngle > E && (verticalAngle = E);
            verticalAngle < x && (verticalAngle = x);
            w.nh({
                heading: c,
                pitch: d
            });
            w.dispatchEvent(new L("ontouchmove"))
        }
    }

    function c() {
        f = o;
        !m && D && w.dispatchEvent(new L("onclick"));
        m = o
    }

    function d() {
        var a = qf(w.ti().width, w.U());
        I.cq = 360 / (I.oa.tiles.Xg(a.Bt) * a.qs)
    }

    function e(a) {
        if (w.m.enableScrollWheelZoom) {
            var a = window.event || a,
                b = new L("onmousewheel");
            b.pk = 0 <= a.wheelDelta || 0 > a.detail;
            var c = new Date;
            if (!(220 > c - M) && (M = c, "path" != (a.srcElement || a.target).tagName)) {
                var c = z(b, a),
                    d = a.srcElement || a.target,
                    e = a.offsetX || a.layerX || 0,
                    f = a.offsetY || a.layerY || 0;
                1 != d.nodeType && (d = d.parentNode);
                for (; d && d != w.Ba();) {
                    d.L && (t.lang.Mc(d.L) instanceof Q && (overlay = t.lang.Mc(d.L)), t.lang.Mc(d.L) instanceof Jb && (infoWindow = t.lang.Mc(d.L)));
                    if (!(0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName) && "http://www.w3.org/2000/svg" != d.namespaceURI) e += d.offsetLeft || 0, f += d.offsetTop || 0;
                    else if ("http://www.w3.org/2000/svg" == d.namespaceURI) {
                        var g = w.Kw.pj && w.Kw.pj.qd || n;
                        if (-1 < navigator.userAgent.indexOf("Opera") && "svg" != d.tagName) {
                            if (d = t.lang.Mc(d.L)) d = d.ig(), e += I.kb(d.le()).x, f += I.kb(d.ke()).y;
                            break
                        }
                        if (g && (!t.M.S || 9 <= t.M.S && "svg" == d.nodeName.toLowerCase())) e += parseInt(g.style.left), f += parseInt(g.style.top)
                    }
                    d = d.offsetParent
                }
                c.x = e;
                c.y = f;
                var f = w.ti(),
                    c = 180 / Math.pow(2, w.U()) / f.width,
                    e = b.x - f.width / 2,
                    f = f.height / 2 - b.y,
                    d = w.Va().heading + e * c,
                    g = w.Va().pitch + f * c,
                    j, k, l;
                if (b.pk == i) {
                    if (w.U() == Nc) {
                        db(a);
                        return
                    }
                    j = w.U() + 1;
                    k = d - e * (c / 2);
                    l = g - f * (c / 2)
                } else if (b.pk == o) {
                    if (w.U() == Oc) {
                        db(a);
                        return
                    }
                    j = w.U() - 1;
                    k = d - e * 2 * c;
                    l = g - f * 2 * c
                }
                w.Ed(j);
                w.nh({
                    heading: k,
                    pitch: l
                })
            }
            db(a)
        }
    }
    if (!this.dD) {
        this.dD = i;
        var f = o,
            g, j, k = 0,
            l = 0,
            m = o,
            p, u, v, w = this.Q,
            y = qf(w.ti().width, w.U());
        this.cq = 360 / (this.oa.tiles.Xg(y.Bt) * y.qs);
        var E = 90,
            x = -90;
        "cssRender" == w.ml && (E = 45, x = -45);
        var I = this,
            D = o;
        H() ? (t.C(w.Rh, "touchstart", function(b) {
            var c = b.touches[0].clientX,
                d = b.touches[0].clientY;
            if (nb()) D = i;
            else {
                D = o;
                if (w.rw) {
                    var e = cb(w.Rh);
                    w.rw.Dy(c - e.left, d - e.top) == -1 && (D = i)
                } else D = i
            }
            a(c, d);
            (!t.platform.Tj || navigator.userAgent.indexOf("QQBrowser") == -1) && b.preventDefault();
            b.stopPropagation()
        }), t.C(document, "touchmove", function(a) {
            b(a.touches[0].clientX - g, a.touches[0].clientY - j);
            a.preventDefault();
            a.stopPropagation()
        }), t.C(document, "touchend", function() {
            c();
            D = o
        })) : (t.C(w.Rh, "mousedown", function(b) {
            a(b.clientX || b.pageX || 0, b.clientY || b.pageY || 0);
            v = b.target || b.srcElement;
            t.M.S && v.setCapture && v.setCapture();
            w.Rh.style.cursor = C.kc;
            t.M.S || db(b)
        }), t.C(document, "mousemove", function(a) {
            b((a.clientX || a.pageX || 0) - g, (a.clientY || a.pageY || 0) - j);
            ka(a)
        }), t.C(document, "mouseup", function(a) {
            A(a);
            c();
            t.M.S && (v && v.releaseCapture) && v.releaseCapture();
            w.Rh.style.cursor = C.jb
        }));
        w.addEventListener("zoom_changed", d);
        w.addEventListener("size_changed", d);
        var M = new Date;
        t.C(w.Ba(), "mousewheel", e);
        window.addEventListener && w.Ba().addEventListener("DOMMouseScroll", e, o)
    }
};

function wf(a) {
    this.Q = a;
    this.wh = [];
    this.Sf = {};
    var b = this;
    this.sb = i;
    this.np = [];
    this.Q.addEventListener("overlay_changed", function() {
        b.gI()
    });
    this.Q.addEventListener("overlay_show", function() {
        b.qI()
    })
}
t.extend(wf.prototype, {
    setData: function(a) {
        this.oa = a;
        this.Qf()
    },
    Qf: function() {
        var a = this.oa.pois;
        if (a) {
            this.OD();
            for (var b = this.oa.pointX, c = this.oa.pointY, d = 0; d < Math.min(10, a.length); d++) {
                var e = a[d].gu - b,
                    f = a[d].hu - c,
                    g = 180 * Math.atan(e / f) / Math.PI,
                    g = (g + 90) % 90,
                    j = 0;
                0 < e && 0 > f && (j = 90);
                0 > e && 0 > f && (j = 180);
                0 > e && 0 < f && (j = 270);
                g += j;
                g = Math.round(g);
                e = a[d].id;
                a[d].xK = g;
                a[e] = a[d];
                f = this.tB(a[d].title);
                this.wh.push(f);
                for (var j = o, k = g - 15; k < g + 16; k++) {
                    var l = (k + 360) % 360;
                    if (this.Sf[l]) {
                        this.Sf[l][e] = f;
                        j = i;
                        break
                    }
                }
                j || (this.Sf[g] || (this.Sf[g] = {}), this.Sf[g][e] = f)
            }
        }
    },
    tB: function(a) {
        var b = J("div");
        b.innerHTML = a;
        a = b.style;
        a.position = "absolute";
        a.background = "rgba(0, 0, 0, 0.5)";
        a.padding = "4px";
        a.font = "14px arial";
        a.color = "white";
        a.whiteSpace = "nowrap";
        a.CK = "4px";
        a.border = "1px solid rgba(0, 0, 0, 0.8)";
        this.Q.Eg.appendChild(b);
        t.C(b, "touchstart", function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        t.C(b, "touchend", function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        return b
    },
    qI: function() {
        for (var a = this.np, b = 0; b < a.length; b++) this.mu(a[b])
    },
    ta: function(a, b, c) {
        var d = this,
            e;
        for (e in this.Sf) {
            var a = 0,
                f;
            for (f in this.Sf[e]) {
                var g = this.ED(e, 15, b, c),
                    j = this.Sf[e][f];
                j.style.left = g[0] + "px";
                j.style.top = g[1] + a + "px";
                a += 28
            }
        }
        b = this.np;
        for (c = 0; c < b.length; c++) this.mu(b[c]);
        setTimeout(function() {
            d.Q.Eg.style.display = "block"
        }, 500)
    },
    gI: function() {
        for (var a = this.Q.Eg, b = this.np, c = this.Q.ea, d = 0; d < b.length; d++) a.removeChild(b[d].op);
        for (d = 0; d < c.length; d++)
            if (b = c[d].Lc ? c[d].Lc : c[d].J) b = b.cloneNode(i), b.style.zIndex = "2", b.style.display = "none", a.appendChild(b), c[d].op = b, this.mu(c[d]);
        this.np = c
    },
    mu: function(a) {
        var b = this.wG(a.O);
        if (!b || 50 < b.qa) a = a.op.style, a.display = "none";
        else if (1E4 > b.x && 1E4 > b.y) {
            var a = a.op.style,
                c = a.width.substr(0, 2),
                d = a.height.substr(0, 2),
                e = 16 >= b.qa ? 2 : 32 / b.qa;
            0.5 > e && (e = 0.5);
            a.webkitTransform = "scale(" + e + ")";
            a.left = b.x - c * e / 2 + "px";
            a.top = b.y - d * e + "px";
            a.display = "block"
        } else a = a.op.style, a.display = "none"
    },
    wG: function(a) {
        return this.Q.aa.Hy(a)
    },
    ED: function(a, b, c, d) {
        var e = this.Q;
        for (svHeading = e.Va().heading % 360; 0 > svHeading;) svHeading = (svHeading + 360) % 360;
        var f = (a - svHeading) % 360,
            a = e.ti(),
            c = 360 / (this.oa.tiles.Xg(c) * d);
        180 < f ? f -= 360 : -180 > f && (f += 360);
        d = Math.round(a.width / 2 + f / c);
        b = Math.round(a.height / 2 - (b - e.Va().pitch) / c);
        return [d, b]
    },
    OD: function() {
        for (var a = 0; a < this.wh.length; a++) this.wh[a] && this.wh[a].parentNode && this.wh[a].parentNode.removeChild(this.wh[a]);
        this.wh.length = 0;
        this.Sf = {}
    }
});

function of(a) {
    this.Qf(a)
}
t.extend(of.prototype, {
    Qf: function(a) {
        this.Q = a;
        this.yj = this.xj = i;
        this.Za();
        this.N()
    },
    Za: function() {
        this.B = J("div");
        var a = this.B.style;
        a.position = "absolute";
        a.left = "10px";
        a.top = "10px";
        a.zIndex = "32";
        a = this.B;
        a.innerHTML = this.Tk();
        za() ? (this.Vb = t.R(a.children[2]), this.oj = [t.R(this.Vb.children[0]), t.R(this.Vb.children[1]), t.R(this.Vb.children[2]), t.R(this.Vb.children[3])], nb() ? this.ax = t.R(a.children[1].childNodes[0]) : mb() && (this.jx = t.R(a.children[1].childNodes[0])), this.Wb = t.R(a.children[3])) : H() && (this.Wb = t.R(a.children[0]));
        this.Xe = t.R(this.Wb.children[0]);
        this.Zd = t.R(this.Wb.children[1]);
        t.M.S && (this.Vb.style.background = 'url("' + C.ca + 'blank.gif") repeat');
        6 == t.M.S && this.YD();
        H() && (this.Wb.style.left = this.Wb.style.top = "0", this.Wb.style.width = "36px", this.Wb.style.height = "78px", this.Wb.style.backgroundSize = "291px 111px", this.Wb.style.backgroundPosition = "-111px 0", this.Xe.style.width = this.Zd.style.width = "33px", this.Xe.style.height = this.Zd.style.height = "36px", this.Zd.style.top = "37.5px");
        this.Q.U() == Nc && this.sj("zoomIn", o);
        this.Q.U() == Oc && this.sj("zoomOut", o);
        this.Q.Ba().appendChild(a)
    },
    Tk: function() {
        var a = [];
        za() && (a.push(this.Cq()), a.push(this.uC()), a.push(this.vC()));
        a.push(this.Dq());
        return a.join("")
    },
    uC: function() {
        if (nb()) return '<svg version="1.1" overflow="hidden" width="82px" height="82px" viewBox="0 0 82 82" style="position: absolute; top: 0px; left: 0px;"><g transform="rotate(0, 41, 41)"><rect x="33" y="1" width="14" height="12" rx="4" ry="4" stroke="#868685" stroke-width="1" fill="#f8f8f8"></rect><polyline points="37.5,9.5 37.5,3.5 42.5,9.5 42.5,3.5" stroke-linejoin="bevel" stroke-width="1.5" fill="#f2f4f6" stroke="#868685"></polyline></g></svg>';
        if (mb()) return '<div style="position:absolute;top:0;left:0;z-index:0"><v:group style="position:absolute;width:82px;height:82px; behavior:url(#default#VML);rotation:0" unselectable="on" coordsize="82,82" coordorigin="-41,-41"><v:roundrect style="width:14px;height:12px;top:-40px; behavior:url(#default#VML);left:-7px;z-index:2" fillcolor="#f8f8f8" arcsize ="19661f" coordsize="21600,21600" strokecolor="#868685" strokeweight="1pt"></v:roundrect><v:polyline style="behavior: url(#default#VML);z-index:3" fillcolor="#f2f4f6" points="-3,-31,-3,-37,3,-31,3,-37" strokeweight="1.2pt"><v:stroke style="behavior:url(#default#VML)" color="#868685" joinstyle="bevel"></v:stroke></v:polyline></v:group></div>'
    },
    Cq: function() {
        return '<div style="position:absolute;top:4px;left:4px;width:74px;height:74px;background:url(' + C.ca + 'st-navictrl.png) no-repeat;-webkit-user-select:none;overflow:hidden"><div></div></div>'
    },
    vC: function() {
        return '<div style="position:absolute;top:0px;left:0;width:82px;height:82px;-webkit-user-select:none;cursor:' + C.jb + '"><div style="position:absolute;left:32px;top:13px;cursor:pointer;width:17px;height:17px;" title="\u5411\u4e0a\u5e73\u79fb"></div><div style="position:absolute;left:14px;top:32px;cursor:pointer;width:17px;height:17px;" title="\u5411\u5de6\u5e73\u79fb"></div><div style="position:absolute;left:51px;top:32px;cursor:pointer;width:17px;height:17px;" title="\u5411\u53f3\u5e73\u79fb"></div><div style="position:absolute;left:33px;top:51px;cursor:pointer;width:17px;height:17px;" title="\u5411\u4e0b\u5e73\u79fb"></div></div>'
    },
    Dq: function() {
        return '<div style="position:absolute;top:84px;left:30px;width:24px;height:52px;background:url(' + C.ca + 'st-navictrl.png) no-repeat -74px 0;-webkit-user-select:none;overflow:hidden"><div style="position:absolute;cursor:pointer;width:22px;height:24px;top:0;left:0;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)" title="\u653e\u5927\u4e00\u7ea7"></div><div style="position:absolute;cursor:pointer;width:22px;height:24px;top:25px;left:0;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)" title="\u7f29\u5c0f\u4e00\u7ea7"></div><div></div></div>'
    },
    N: function() {
        var a = this.Q,
            b = this;
        if (za()) {
            t.C(this.oj[0], "click", function() {
                var b = a.Va();
                a.Cp({
                    heading: b.heading,
                    pitch: b.pitch + 30
                })
            });
            t.C(this.oj[1], "click", function() {
                var b = a.Va();
                a.Cp({
                    heading: b.heading - 45,
                    pitch: b.pitch
                })
            });
            t.C(this.oj[2], "click", function() {
                var b = a.Va();
                a.Cp({
                    heading: b.heading + 45,
                    pitch: b.pitch
                })
            });
            t.C(this.oj[3], "click", function() {
                var b = a.Va();
                a.Cp({
                    heading: b.heading,
                    pitch: b.pitch - 30
                })
            });
            for (var c = 0; c < this.oj.length; c++) t.C(this.oj[c], "mousedown", A);
            b.Kn = o;
            t.C(this.Vb, "mousedown", function(c) {
                b.Kn = i;
                b.Vb.style.cursor = C.kc;
                t.M.S && b.Vb.setCapture && b.Vb.setCapture();
                b.$w = b.zv(c);
                b.$B = a.Va().heading;
                t.M.S || db(c)
            });
            t.C(document, "mousemove", function(c) {
                b.Kn && a.nh({
                    heading: b.$B + 360 - (b.zv(c) - b.$w),
                    pitch: a.Va().pitch
                })
            });
            t.C(document, "mouseup", function() {
                b.Kn && (b.Kn = o, b.Vb.style.cursor = C.jb, t.M.S && b.Vb.releaseCapture && b.Vb.releaseCapture(), b.$w = n)
            });
            a.addEventListener("position_changed", function() {
                var c = 360 - this.Va().heading;
                nb() ? b.ax.setAttribute("transform", "rotate(" + c + ", 41, 41)") : mb() && (b.jx.style.rotation = c);
                a.removeEventListener("position_changed", arguments.callee)
            });
            a.addEventListener("pov_changed", function() {
                var a = 360 - this.Va().heading;
                nb() ? b.ax.setAttribute("transform", "rotate(" + a + ", 41, 41)") : mb() && (b.jx.style.rotation = a)
            })
        }
        t.C(this.B, "mousemove", function() {
            a.dispatchEvent(new L("hide_ellipse"))
        });
        t.C(this.B, "mouseout", function() {
            a.dispatchEvent(new L("show_ellipse"))
        });
        t.C(this.Xe, "click", function() {
            a.Ed(a.U() + 1)
        });
        t.C(this.Zd, "click", function() {
            a.Ed(a.U() - 1)
        });
        za() ? (t.C(this.Xe, "mousedown", function() {
            b.Fg(b.xj, -98)
        }), t.C(this.Zd, "mousedown", function() {
            b.Fg(b.yj, -122)
        }), t.C(this.Xe, "mouseup", function() {
            b.Fg(b.xj, -74)
        }), t.C(this.Zd, "mouseup", function() {
            b.Fg(b.yj, -74)
        })) : H() && (t.C(this.Xe, "touchstart", function() {
            b.Fg(b.xj, -98)
        }), t.C(this.Zd, "touchstart", function() {
            b.Fg(b.yj, -122)
        }), t.C(this.Xe, "touchend", function() {
            b.Fg(b.xj, -74)
        }), t.C(this.Zd, "touchend", function() {
            b.Fg(b.yj, -74)
        }));
        this.Q.addEventListener("zoom_changed", function() {
            if (this.U() == Nc) b.sj("zoomIn", o);
            else if (this.U() == Oc) b.sj("zoomOut", o);
            else {
                b.sj("zoomIn", i);
                b.sj("zoomOut", i)
            }
        })
    },
    Fg: function(a, b) {
        a && (6 == t.M.S ? this.Wb.children[2].style.left = b + "px" : (H() && (b *= 1.5), this.Wb.style.backgroundPosition = b + "px 0"))
    },
    YD: function() {
        var a = this.B.children[0];
        a.style.background = "";
        a.children[0].style.cssText += "position:absolute;left:0;top:0;width:98px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + C.ca + "st-navictrl.png')";
        this.Wb.style.background = "";
        this.Wb.children[2].style.cssText += "position:absolute;z-index:-1;left:-74px;top:0;width:98px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + C.ca + "st-navictrl.png')"
    },
    show: function() {
        this.B.style.display = ""
    },
    H: function() {
        this.B.style.display = "none"
    },
    zv: function(a) {
        var a = window.event || a,
            b = a.pageX || a.clientX,
            a = a.pageY || a.clientY,
            c = cb(this.Q.Ba()),
            b = b - c.left - 50,
            a = -(a - c.top - 50),
            b = 180 * (Math.atan2(a, b) / Math.PI);
        return 90 > b ? 90 - b : 450 - b
    },
    sj: function(a, b) {
        var c = this.Wb.children[2];
        if ("zoomIn" == a)
            if (b)
                if (this.xj = i, this.Xe.style.cursor = "pointer", 6 == t.M.S) c.style.left = "-74px";
                else {
                    var d = -74;
                    H() && (d *= 1.5);
                    this.Wb.style.backgroundPosition = d + "px 0"
                } else this.xj = o, this.Xe.style.cursor = "", 6 == t.M.S ? c.style.left = "-170px" : (d = -170, H() && (d *= 1.5), this.Wb.style.backgroundPosition = d + "px 0");
                "zoomOut" == a && (b ? (this.yj = i, this.Zd.style.cursor = "pointer", 6 == t.M.S ? c.style.left = "-74px" : (d = -74, H() && (d *= 1.5), this.Wb.style.backgroundPosition = d + "px 0")) : (this.yj = o, this.Zd.style.cursor = "", 6 == t.M.S ? c.style.left = "-146px" : (d = -146, H() && (d *= 1.5), this.Wb.style.backgroundPosition = d + "px 0")))
    }
});
