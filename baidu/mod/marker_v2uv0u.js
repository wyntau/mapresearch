Va.prototype.add = ga(0, function(a) {
    this.Xd.push(a)
});

function Nd(a, b) {
    0 < a.Xd.length ? a.Xd[a.Xd.length - 1].m.finish = b : a.m.finish = b
}
t.extend(Q.prototype, {
    initialize: function(a) {
        this.map = a;
        this.Bk();
        this.N();
        this.mj && this.mj.sa(this.map, this);
        this.J.L = this.L;
        t.lang.ua.call(this, this.L);
        this.sb || t.z.H(this.J);
        return this.J
    },
    N: function() {
        function a(a, b) {
            var f = a.srcElement || a.target,
                g = a.clientX || a.pageX,
                j = a.clientY || a.pageY;
            if (a && b && g && j && f) {
                var f = t.z.ba(c.xa),
                    k = eb();
                b.pixel = b.Oa = new O(g - f.left + k[1], j - f.top + k[0]);
                b.point = c.Sa(b.Oa)
            }
            return b
        }
        if (this.J) {
            var b = this,
                c = this.map;
            t.C(this.J, "mouseover", function(c) {
                b.xh || b.dispatchEvent(a(c, z(new L("onmouseover"), c)))
            });
            t.C(this.J, "mouseout", function(c) {
                b.xh || b.dispatchEvent(a(c, z(new L("onmouseout"), c)))
            });
            b.w.rd && (t.C(this.J, "touchstart", function(a) {
                b.N.Lr = new O(a.changedTouches[0].clientX, a.changedTouches[0].clientY)
            }), t.C(this.J, "touchend", function(c) {
                var e = Ea(),
                    f = new O(c.changedTouches[0].clientX, c.changedTouches[0].clientY);
                10 < Math.abs(f.x - b.N.Lr.x) || 10 < Math.abs(f.y - b.N.Lr.y) ? b.N.Lr = n : (b.dispatchEvent(a(c, z(new L("onclick"), c))), e - b.Iv < b.map.F.ds && b.dispatchEvent(a(c, z(new L("ondblclick"), c))), b.Iv = e)
            }), H() || t.C(this.J, "click", function(c) {
                for (var e = c.srcElement || c.target; e;) {
                    if (e == b.J) {
                        (!(b instanceof S) || b instanceof S && (!b.$q || b.$q && b.ba().pb(b.$q))) && b.dispatchEvent(a(c, z(new L("onclick"), c)));
                        break
                    } else if (b.map && b.map.ra && e == b.map.ra.Db) break;
                    e = e.parentNode
                }
            }), t.C(this.J, "dblclick", function(c) {
                b.dispatchEvent(a(c, z(new L("ondblclick"), c)));
                ka(c)
            }), (!t.M.uf || 4 > t.M.uf) && t.C(this.J, "contextmenu", function(c) {
                b.dispatchEvent(a(c, z(new L("onrightclick"), c)))
            }));
            t.C(this.J, "mousedown", function(c) {
                if (b instanceof S) b.$q = b.ba();
                b.dispatchEvent(a(c, z(new L("onmousedown"), c)))
            });
            t.C(this.J, "mouseup", function(c) {
                b.dispatchEvent(a(c, z(new L("onmouseup"), c)));
                t.M.uf >= 4 && (c.button == 2 && b.w.rd) && b.dispatchEvent(a(c, z(new L("onrightclick"), c)))
            })
        }
    },
    H: function() {
        this.sb != o && (this.sb = o, Eb.prototype.H.call(this), this.ub && (this.ub.Ka && this.ub.Ka == this) && this.Xb())
    },
    show: function() {
        this.sb != i && (this.sb = i, Eb.prototype.show.call(this))
    },
    hA: function(a) {
        if (a)
            for (var b in a) typeof this.w[b] == typeof a[b] && (this.w[b] = a[b])
    },
    Fp: function(a) {
        this.zIndex = a;
        this.Uh()
    },
    Uh: function() {
        var a;
        hb(this.zIndex) ? a = this.zIndex : (a = 0, this.map && this.ba() && (a = this.ba() ? this.ba().lat : 0, a = Eb.bm(a) + (this.w.Bx || 0)));
        this.J && (this.J.style.zIndex = a)
    },
    zj: function(a) {
        this.mj = a;
        this.map && a.sa(this.map, this)
    },
    ck: function() {
        this.mj.remove();
        this.mj = n
    }
});
W(Wc, {
    show: Wc.show,
    hide: Wc.H,
    addContextMenu: Wc.zj,
    removeContextMenu: Wc.ck
});
var Od = new Ib(C.ca + "marker_red_hd.png", new K(23, 25), {
    anchor: new K(10, 25),
    infoWindowAnchor: new K(10, 0),
    imageSize: new K(23, 25)
});
S.Zm = Eb.bm(-90) + 1E6;
S.$u = S.Zm + 1E6;
S.zC = function(a) {
    if (S.ln[a]) return S.ln[a];
    var b = S.ln[a] = ["BMap_" + Math.round(1E4 * Math.random()), "BMap_" + Math.round(1E4 * Math.random())],
        c = Qb[a],
        d = S.vE;
    d || (d = S.vE = J("style", {
        type: "text/css"
    }), document.getElementsByTagName("head")[0].appendChild(d));
    d.textContent += S.Pv(c.Gi, b[0]) + S.Pv(c.Em, b[1]);
    return S.ln[a]
};
S.Pv = function(a, b) {
    var c = ["@-webkit-keyframes " + b + " {\\n"];
    t.hc.Sd(a, function(a) {
        c.push(100 * a.bb, "% { ");
        c.push("-webkit-transform: translate(", a.translate[0], "px,", a.translate[1], "px); ");
        c.push("-webkit-animation-timing-function: ", a.fb, "; ");
        c.push("}\\n")
    });
    c.push("}\\n");
    return c.join("")
};
S.rB = function(a, b) {
    if (!S.cf && (S.cf = J("img", {
        src: C.ca + "drag_cross.png",
        width: 13,
        height: 9
    }), S.cf.style.position = "absolute", 6 == t.M.S)) {
        delete S.cf;
        var c = (S.cf = J("div")).style;
        c.position = "absolute";
        c.width = "13px";
        c.height = "9px";
        c.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src="' + C.ca + 'drag_cross.png")'
    }
    c = S.cf.style;
    c.left = a.width - 6 + "px";
    c.top = a.height - 5 + "px";
    b.appendChild(S.cf)
};
S.MD = function() {
    S.cf && S.cf.parentNode && S.cf.parentNode.removeChild(S.cf)
};
S.ln = [];
S.uv = function() {
    this.style.WebkitAnimation = ""
};
t.extend(S.prototype, {
    initialize: function(a) {
        this.Dh();
        Q.prototype.initialize.call(this, a);
        this.sb || t.z.H(this.wb);
        a.$g() && this.w.Me == Lb && (this.w.Me = Od);
        this.ga(this.O);
        this.Gf(this.w.Me);
        this.Ep(this.w.ph);
        this.w.label && this.fn && this.w.label.addEventListener("remove", this.fn);
        this.Ti(this.w.label);
        this.$b(this.w.title);
        this.Sq();
        return this.J
    },
    Dh: function() {
        this.Yk || (this.Yk = i, this.Lc = this.wb = this.pc = this.J = n, this.Eh = o)
    },
    Bk: function() {
        var a = this.map.Le();
        this.J = bb(a.Qt, this.rD());
        this.wb = bb(a.Cz, this.lD());
        this.wb.L = this.L
    },
    rD: function() {
        var a = ['<span class="BMap_Marker BMap_noprint" unselectable="on" '];
        a.push(this.w.title ? 'title="' + this.w.title + '"' : '"');
        a.push(' style="position:absolute;padding:0;margin:0;border:0;width:0;height:0;-moz-user-select:none;');
        a.push(this.w.rd ? "cursor:pointer;" : "");
        a.push("background:url(" + C.ca + "blank.gif);");
        a.push("width:" + this.w.Me.size.width + "px;");
        a.push("height:" + this.w.Me.size.height + "px;");
        a.push('"></span>');
        return a.join("")
    },
    lD: function() {
        var a = ['<span class="BMap_Marker" unselectable="on" '];
        a.push('style="position:absolute;padding:0;margin:0;border:0;');
        a.push('width:0;height:0;-moz-user-select:none"></span>');
        return a.join("")
    },
    lE: function() {
        var a = ['<span unselectable="on" '];
        a.push('style="position:absolute;padding:0;margin:0;border:0;');
        a.push('width:0;height:0;-moz-user-select:none"></span>');
        return a.join("")
    },
    draw: function() {
        if (this.J) {
            var a = this.OC();
            this.J.style.left = a[0].x + "px";
            this.J.style.top = a[0].y + "px";
            this.wb && (this.wb.style.left = a[0].x + "px", this.wb.style.top = a[0].y + "px");
            this.pc && (this.pc.style.left = a[1].x + "px", this.pc.style.top = a[1].y + "px");
            this.ub != n && this.ub.za() && this.ub.ga();
            this.Uh()
        }
    },
    OC: function() {
        var a = this.w.fa || new K(0, 0),
            b = this.w.Me.anchor || new K(0, 0),
            c = this.map.Qe(this.ba()),
            b = [new O(c.x + a.width - b.width, c.y + a.height - b.height)];
        if (this.w.ph) {
            var d = this.w.ph.anchor || new K(0, 0);
            b[1] = new O(c.x + a.width - d.width, c.y + a.height - d.height)
        }
        return b
    },
    Tb: function() {
        this.map ? (this.J = this.initialize(this.map), this.Dk && (this.Si(this.Dk), delete this.Dk)) : delete this.Dk
    },
    remove: function() {
        this.Si(n);
        this.wb && this.wb.parentNode && this.wb.parentNode.removeChild(this.wb);
        this.pc && this.pc.parentNode && this.pc.parentNode.removeChild(this.pc);
        this.ub && (this.ub.Ka && this.ub.Ka === this) && (this.Xb(), this.ub = n);
        this.lb = this.Lc = this.pc = this.wb = n;
        if (this.w.label) {
            var a = this.w.label;
            a.removeEventListener("remove", this.fn);
            t.lang.Co(a.L);
            a.mA(n);
            a.J = n;
            this.w.label = n
        }
        Q.prototype.remove.call(this)
    },
    H: function() {
        Q.prototype.H.call(this);
        this.J && t.z.H(this.J);
        this.wb && t.z.H(this.wb);
        this.pc && t.z.H(this.pc)
    },
    show: function() {
        Q.prototype.show.call(this);
        this.J && t.z.show(this.J);
        this.wb && t.z.show(this.wb);
        this.pc && t.z.show(this.pc)
    },
    Gf: function(a) {
        if (a instanceof Ib && (this.w.Me = a, this.map && this.J && this.wb)) {
            try {
                this.Lc && (this.wb.removeChild(this.Lc), this.Lc = n), this.J.style.width = a.size.width + "px", this.J.style.height = a.size.height + "px"
            } catch (b) {}
            if (this.w.Me) {
                var c = this.Lc = J("div"),
                    d = c.style;
                d.position = "absolute";
                d.padding = d.margin = "0";
                d.width = a.size.width + "px";
                d.height = a.size.height + "px";
                d.overflow = "hidden";
                c.innerHTML = Pd(a);
                c.wy = o;
                this.wb.appendChild(this.Lc)
            }
            this.draw()
        }
    },
    Ep: function(a) {
        if (a instanceof Ib && (this.w.ph = a, this.map && this.J && this.wb)) {
            this.pc || (this.pc = bb(this.map.Le().Dz, this.lE()));
            try {
                this.lb && (this.pc.removeChild(this.lb), this.lb = n), this.pc.style.width = a.size.width + "px", this.pc.style.height = a.size.height + "px"
            } catch (b) {}
            if (this.w.ph) {
                var c = this.lb = J("div"),
                    d = c.style;
                d.position = "absolute";
                d.padding = d.margin = "0";
                d.width = a.size.width + "px";
                d.height = a.size.height + "px";
                d.overflow = "hidden";
                c.innerHTML = Pd(a);
                c.wy = o;
                this.pc.appendChild(this.lb)
            }
            this.draw()
        }
    },
    Ti: function(a) {
        if (a && a instanceof Kb) {
            var b = this;
            G.load("marker", function() {
                b.gE(a)
            }, i)
        }
    },
    gE: function(a) {
        if (a instanceof Kb) {
            this.w.label = a;
            var b = this;
            this.w.label.Of || (this.w.label.Of = i, this.fn = function() {
                b.w.label = n
            }, this.w.label.addEventListener("remove", this.fn));
            if (this.map) {
                a.Ld(this.map);
                a.J ? this.wb.appendChild(a.J) : (a.J = bb(this.J, a.ta()), a.J.L = a.L);
                var c = a.J.style;
                c.left = a.w.fa.width + "px";
                c.top = a.w.fa.height + "px";
                a.mA(this)
            }
        }
    },
    Sq: function() {
        function a(a, b) {
            b.pixel = b.Oa = a.Oa;
            b.point = b.O = a.O;
            return b
        }

        function b(a) {
            var b = a.clientX,
                c = a.clientY;
            a.changedTouches && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
            return new O(b, c)
        }
        if (this.J && !this.J.Of) {
            this.J.Of = i;
            var c = this.map,
                d = this,
                e = 0,
                f = 0,
                g = 0,
                j = {
                    x: 0,
                    y: 0
                };
            this.Ll = function(a) {
                if (d.w.Ab && 2 != a.button) {
                    d.Eh = i;
                    var j = c.kb(d.O),
                        m = b(a);
                    e = m.x - j.x;
                    f = m.y - j.y;
                    g = Ea();
                    d.map.D.mn = d;
                    t.C(document, "mousemove", d.hg);
                    t.C(document, "mouseup", d.gg);
                    t.C(document, "touchmove", d.hg);
                    t.C(document, "touchend", d.gg);
                    d.J && d.J.setCapture && d.J.setCapture();
                    d.J.style.cursor = d.w.kc;
                    "touchstart" == a.type && A(a)
                }
            };
            this.hg = function(g) {
                if (d.Eh && (g = b(g), j = g = new O(g.x - e, g.y - f), d.yq = g, d.w.eA && 15 < g.x && g.x < d.map.width - 15 && 30 < g.y && g.y < d.map.height - 15 || !d.w.eA)) {
                    var l = d.map.Sa(g),
                        m = {
                            Oa: g,
                            O: l
                        };
                    d.Mh = d.Nh = 0;
                    if (20 >= g.x || g.x >= d.map.width - 20 || 50 >= g.y || g.y >= d.map.height - 10) {
                        if (20 >= g.x ? d.Mh = 8 : g.x >= d.map.width - 20 && (d.Mh = -8), 50 >= g.y ? d.Nh = 8 : g.y >= d.map.height - 10 && (d.Nh = -8), !d.Zc) d.Zc = setInterval(function() {
                            c.pe(d.Mh, d.Nh, {
                                noAnimation: i
                            });
                            var a = c.Sa(d.yq);
                            d.ga(a)
                        }, 30)
                    } else d.Zc && (clearInterval(d.Zc), d.Zc = n), d.ga(l);
                    d.xh || (d.dispatchEvent(a(m, new L("ondragstart"))), d.xh = i, d.w.aA && (d.Si(3), S.rB(d.w.Me.anchor, d.wb)));
                    d.dispatchEvent(a(m, new L("ondragging")))
                }
            };
            this.gg = function() {
                d.J && d.J.releaseCapture && d.J.releaseCapture();
                d.Eh = o;
                d.map.D.mn = n;
                t.Uc(document, "mousemove", d.hg);
                t.Uc(document, "mouseup", d.gg);
                t.Uc(document, "touchmove", d.hg);
                t.Uc(document, "touchend", d.gg);
                e = f = 0;
                d.Zc && (clearInterval(d.Zc), d.Zc = n);
                if (100 <= Ea() - g && (2 < j.x || 2 < j.y)) d.xh = o, d.dispatchEvent(a({
                    Oa: d.map.kb(d.ba()),
                    O: d.ba()
                }, new L("ondragend"))), d.w.aA && (d.Si(4), S.MD()), j.x = j.y = 0;
                d.Uh();
                d.J && (d.J.style.cursor = d.w.rd ? "pointer" : "")
            };
            t.C(this.J, "mousedown", this.Ll);
            t.C(this.J, "touchstart", this.Ll)
        }
    },
    ga: function(a) {
        a instanceof F && (this.O = this.w.O = new F(a.lng, a.lat), this.draw())
    },
    Uh: function() {
        var a;
        this.Eh == i ? a = S.$u : this.w.Mt == i ? a = S.Zm + (this.ov || 0) : hb(this.zIndex) ? a = this.zIndex : (a = 0, this.map && this.ba() && (a = Eb.bm(this.ba().lat) + this.w.Bx));
        this.J && (this.J.style.zIndex = a);
        this.wb && (this.wb.style.zIndex = a)
    },
    jk: function(a, b) {
        this.w.Mt = !! a;
        a && (this.ov = b || 0);
        this.Uh()
    },
    $b: function(a) {
        this.w.title = a + "";
        this.J && (this.J.title = this.w.title)
    },
    Rc: function(a) {
        a instanceof K && (this.w.fa = a, this.ga(this.ba()))
    },
    Si: function(a) {
        var b = this;
        G.load("markeranimation", function() {
            b.dE(a)
        }, i)
    },
    dE: function(a) {
        if (this.Lc) {
            this.JB(a != n);
            var b = Qb[a];
            b && (b = b ? b.options.LA : o, !H() || b ? this.rC(a) : this.qC(a))
        }
    },
    JB: function(a) {
        this.Dv(this.Lc);
        this.Dv(this.lb);
        if (a) {
            if (this.sg && (this.sg.stop(), this.sg = n), this.Lc.style.top = this.Lc.style.left = "0px", this.lb) this.lb.style.top = this.lb.style.left = "0px"
        } else if (this.sg) {
            var b = this;
            Nd(this.sg, function() {
                b.sg = n
            })
        }
    },
    qC: function(a) {
        var b = Qb[a],
            a = S.zC(a);
        this.Rw(this.Lc, a[0], b);
        this.Rw(this.lb, a[1], b)
    },
    Dv: function(a) {
        a && (a.style.WebkitAnimation = "", t.Uc(a, "webkitAnimationEnd", S.uv))
    },
    Rw: function(a, b, c) {
        a && (t.C(a, "webkitAnimationEnd", S.uv), a.style.WebkitAnimation = b + " " + c.options.duration + "ms" + (c.options.loop == Xa ? " infinite" : ""))
    },
    rC: function(a) {
        var b = this.Lc.style,
            c = o,
            d;
        this.lb && (c = i, d = this.lb.style);
        var e = Qb[a],
            f = this,
            g = e.Gi.length,
            j = e.options.duration,
            k = f.sg = new Va({
                duration: 0,
                Pg: Xa
            }),
            l = e.Gi,
            m = e.Em;
        b.top = l[0].translate[1] + "px";
        c && (d.left = m[0].translate[0] + "px", d.top = m[0].translate[1] + "px");
        for (var p = 1; p < g; p++)(function() {
            function a() {}
            var b = [l[p].translate[0] - l[p - 1].translate[0], l[p].translate[1] - l[p - 1].translate[1]],
                d = [l[p - 1].translate[0], l[p - 1].translate[1]];
            if (c) var y = [m[p].translate[0] - m[p - 1].translate[0], m[p].translate[1] - m[p - 1].translate[1]],
            E = [m[p - 1].translate[0], m[p - 1].translate[1]];
            var x = Wa[l[p - 1].fb];
            p == g - 1 && (a = e.options.loop != Xa ? function() {
                f.sg = n
            } : function() {
                f.sg.start()
            });
            k.add(new Va({
                duration: (e.Gi[p].bb - l[p - 1].bb) * j,
                fd: 40,
                Pg: Xa,
                Wd: x,
                ta: function(a) {
                    if (f.Lc) f.Lc.style.top = d[1] + Math.round(a * b[1]) + "px";
                    if (c && f.lb) {
                        f.lb.style.left = E[0] + Math.round(a * y[0]) + "px";
                        f.lb.style.top = E[1] + Math.round(a * y[1]) + "px"
                    }
                },
                finish: a
            }))
        })();
        k.start()
    }
});
W(Xc, {
    setIcon: Xc.Gf,
    setPosition: Xc.ga,
    setOffset: Xc.Rc,
    setLabel: Xc.Ti,
    setTitle: Xc.$b,
    setTop: Xc.jk,
    setAnimation: Xc.Si,
    setShadow: Xc.Ep,
    show: Xc.show,
    hide: Xc.H,
    remove: Xc.remove
});

function Pd(a) {
    var b = "",
        b = "",
        c = a.imageUrl,
        d = a.imageOffset,
        e = a.imageSize;
    6 == t.M.S && 0 < c.toLowerCase().indexOf(".png") ? (b = ["<div"], a.printImageUrl && b.push(' class="BMap_noprint"'), b.push(' style="width: 1px; height: 1px;'), b.push("; left:" + d.width + "px"), b.push("; top:" + d.height + "px"), b.push("; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src='" + c + "')"), b.push('; position:absolute;"></div>'), a.printImageUrl && (b.push('<img class="BMap_noscreen" style="border:none;margin-left:' + d.width + "px;"), b.push("margin-top:" + d.height + 'px;" src="' + a.printImageUrl + '" />'))) : (b = ['<img src="', c, '" style="border:none;margin-left:' + d.width + "px", "; margin-top:" + d.height + "px", "; "], e && b.push("; width:" + e.width + "px; height:" + e.height + "px;"), b.push('" />'));
    return b = b.join("")
};
t.extend(Kb.prototype, {
    Bk: function() {
        var a = this.w,
            b = this.content,
            c = J("label", {
                "class": "BMapLabel",
                unselectable: "on"
            });
        a.title && (c.title = a.title);
        var d = c.style;
        d.position = "absolute";
        d.MozUserSelect = "none";
        0 == a.width || "auto" == a.width ? d.display = "inline" : (d.width = a.width + "px", d.display = "block", d.overflow = "hidden");
        "true" == a.rd ? d.cursor = "pointer" : t.M.S || (d.cursor = "inherit");
        c.innerHTML = b;
        this.map.Le().qz.appendChild(c);
        this.J = c;
        this.oc(a.mk);
        return c
    },
    ga: function(a) {
        a instanceof F && !this.So() && (this.O = this.w.position = new F(a.lng, a.lat), this.draw())
    },
    draw: function() {
        if (this.J && this.ba() && !this.So()) {
            var a = this.w.fa || new K(0, 0),
                b = this.map.Qe(this.ba());
            this.J.style.left = b.x + a.width + "px";
            this.J.style.top = b.y + a.height + "px";
            this.Uh()
        }
    },
    Tb: function() {
        this.map && !this.Jn && (this.J = this.initialize(this.map), this.draw())
    },
    Bc: function(a) {
        this.content = a;
        this.J && (this.J.innerHTML = a)
    },
    YI: function(a) {
        0 <= a && 1 >= a && (this.w.opacity = a);
        if (this.J) {
            var b = this.J.style;
            b.opacity = a;
            b.filter = "alpha(opacity=" + 100 * a + ")"
        }
    },
    Rc: function(a) {
        a instanceof K && (this.w.fa = new K(a.width, a.height), this.So() && this.J ? (this.J.style.left = a.width + "px", this.J.style.top = a.height + "px") : this.draw())
    },
    oc: function(a) {
        a = a || {};
        this.w.mk = t.extend(this.w.mk, a);
        if (this.J)
            for (var b in a) try {
                this.J.style[b] = a[b]
            } catch (c) {}
    },
    $b: function(a) {
        this.w.title = a + "";
        this.J && (this.J.title = this.w.title)
    }
});
W(Yc, {
    setStyle: Yc.oc,
    setContent: Yc.Bc,
    setPosition: Yc.ga,
    setOffset: Yc.Rc,
    setTitle: Yc.$b
});
