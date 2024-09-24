/*!
 * GSAP 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
	"use strict";

	function _inheritsLoose(t, e) {
		t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
	}

	function _assertThisInitialized(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function r(t) {
		return "string" == typeof t
	}

	function s(t) {
		return "function" == typeof t
	}

	function t(t) {
		return "number" == typeof t
	}

	function u(t) {
		return void 0 === t
	}

	function v(t) {
		return "object" == typeof t
	}

	function w(t) {
		return !1 !== t
	}

	function x() {
		return "undefined" != typeof window
	}

	function y(t) {
		return s(t) || r(t)
	}

	function P(t) {
		return (i = yt(t, ot)) && Ee
	}

	function Q(t, e) {
		return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
	}

	function R(t, e) {
		return !e && console.warn(t)
	}

	function S(t, e) {
		return t && (ot[t] = e) && i && (i[t] = e) || ot
	}

	function T() {
		return 0
	}

	function ea(t) {
		var e, r, i = t[0];
		if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
			for (r = gt.length; r-- && !gt[r].targetTest(i););
			e = gt[r]
		}
		for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e))) || t.splice(r, 1);
		return t
	}

	function fa(t) {
		return t._gsap || ea(Ot(t))[0]._gsap
	}

	function ga(t, e, r) {
		return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
	}

	function ha(t, e) {
		return (t = t.split(",")).forEach(e) || t
	}

	function ia(t) {
		return Math.round(1e5 * t) / 1e5 || 0
	}

	function ja(t) {
		return Math.round(1e7 * t) / 1e7 || 0
	}

	function ka(t, e) {
		var r = e.charAt(0),
			i = parseFloat(e.substr(2));
		return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
	}

	function la(t, e) {
		for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
		return i < r
	}

	function ma() {
		var t, e, r = ct.length,
			i = ct.slice(0);
		for (dt = {}, t = ct.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
	}

	function na(t, e, r, i) {
		ct.length && !L && ma(), t.render(e, r, i || L && e < 0 && (t._initted || t._startAt)), ct.length && !L && ma()
	}

	function oa(t) {
		var e = parseFloat(t);
		return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
	}

	function pa(t) {
		return t
	}

	function qa(t, e) {
		for (var r in e) r in t || (t[r] = e[r]);
		return t
	}

	function ta(t, e) {
		for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
		return t
	}

	function ua(t, e) {
		var r, i = {};
		for (r in t) r in e || (i[r] = t[r]);
		return i
	}

	function va(t) {
		var e = t.parent || I,
			r = t.keyframes ? function _setKeyframeDefaults(i) {
				return function(t, e) {
					for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
				}
			}($(t.keyframes)) : qa;
		if (w(t.inherit))
			for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
		return t
	}

	function xa(t, e, r, i, n) {
		void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
		var a, s = t[i];
		if (n)
			for (a = e[n]; s && s[n] > a;) s = s._prev;
		return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
	}

	function ya(t, e, r, i) {
		void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
		var n = e._prev,
			a = e._next;
		n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
	}

	function za(t, e) {
		t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
	}

	function Aa(t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var r = t; r;) r._dirty = 1, r = r.parent;
		return t
	}

	function Ca(t, e, r, i) {
		return t._startAt && (L ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
	}

	function Ea(t) {
		return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
	}

	function Ga(t, e) {
		return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
	}

	function Ha(t) {
		return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
	}

	function Ia(t, e) {
		var r = t._dp;
		return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t
	}

	function Ja(t, e) {
		var r;
		if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ga(t.rawTime(), e), (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
			if (t._dur < t.duration())
				for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
			t._zTime = -X
		}
	}

	function Ka(e, r, i, n) {
		return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e
	}

	function La(t, e) {
		return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
	}

	function Ma(t, e, r, i, n) {
		return Gt(t, e, n), t._initted ? !r && t._pt && !L && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1
	}

	function Ra(t, e, r, i) {
		var n = t._repeat,
			a = ja(e) || 0,
			s = t._tTime / t._tDur;
		return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t
	}

	function Sa(t) {
		return t instanceof Xt ? Aa(t) : Ra(t, t._dur)
	}

	function Va(e, r, i) {
		var n, a, s = t(r[1]),
			o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
			u = r[o];
		if (s && (u.duration = r[1]), u.parent = i, e) {
			for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
			u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
		}
		return new Zt(r[0], u, r[1 + o])
	}

	function Wa(t, e) {
		return t || 0 === t ? e(t) : e
	}

	function Ya(t, e) {
		return r(t) && (e = st.exec(t)) ? e[1] : ""
	}

	function _a(t, e) {
		return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
	}

	function cb(r) {
		return r = Ot(r)[0] || R("Invalid scope") || {},
			function(t) {
				var e = r.current || r.nativeElement || r;
				return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
			}
	}

	function db(t) {
		return t.sort(function() {
			return .5 - Math.random()
		})
	}

	function eb(t) {
		if (s(t)) return t;
		var p = v(t) ? t : {
				each: t
			},
			_ = jt(p.ease),
			m = p.from || 0,
			g = parseFloat(p.base) || 0,
			y = {},
			e = 0 < m && m < 1,
			T = isNaN(m) || e,
			b = p.axis,
			w = m,
			x = m;
		return r(m) ? w = x = {
				center: .5,
				edges: .5,
				end: 1
			} [m] || 0 : !e && T && (w = m[0], x = m[1]),
			function(t, e, r) {
				var i, n, a, s, o, u, h, l, f, c = (r || p).length,
					d = y[c];
				if (!d) {
					if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
						for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
						f--
					}
					for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s), h < o && (h = o), o < l && (l = o);
					"random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Yt(_) : _
				}
				return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u
			}
	}

	function fb(i) {
		var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
		return function(e) {
			var r = ja(Math.round(parseFloat(e) / i) * i * n);
			return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
		}
	}

	function gb(h, e) {
		var l, f, r = $(h);
		return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function(t) {
			return f = h(t), Math.abs(f - t) <= l ? f : t
		} : function(e) {
			for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
			return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e)
		} : fb(h))
	}

	function hb(t, e, r, i) {
		return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
			return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
		})
	}

	function lb(e, r, t) {
		return Wa(t, function(t) {
			return e[~~r(t)]
		})
	}

	function ob(t) {
		for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
		return s + t.substr(a, t.length - a)
	}

	function rb(t, e, r) {
		var i, n, a, s = t.labels,
			o = U;
		for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
		return a
	}

	function tb(t) {
		return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && At(t, "onInterrupt"), t
	}

	function wb(t) {
		if (x() && t) {
			var e = (t = !t.name && t.default || t).name,
				r = s(t),
				i = e && !r && t.init ? function() {
					this._props = []
				} : t,
				n = {
					init: T,
					render: he,
					add: Qt,
					kill: ce,
					modifier: fe,
					rawVars: 0
				},
				a = {
					targetTest: 0,
					get: 0,
					getSetter: ne,
					aliases: {},
					register: 0
				};
			if (Ft(), t !== i) {
				if (pt[e]) return;
				qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
			}
			S(e, i), t.register && t.register(Ee, i, _e)
		} else t && Ct.push(t)
	}

	function zb(t, e, r) {
		return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + .5 | 0
	}

	function Ab(e, r, i) {
		var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & St, e & St] : 0 : Et.black;
		if (!p) {
			if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Et[e]) p = Et[e];
			else if ("#" === e.charAt(0)) {
				if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & St, p & St, parseInt(e.substr(7), 16) / 255];
				p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & St, e & St]
			} else if ("hsl" === e.substr(0, 3))
				if (p = d = e.match(tt), r) {
					if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
				} else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = zb(o + 1 / 3, n, a), p[1] = zb(o, n, a), p[2] = zb(o - 1 / 3, n, a);
			else p = e.match(tt) || Et.transparent;
			p = p.map(Number)
		}
		return r && !d && (n = p[0] / St, a = p[1] / St, s = p[2] / St, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
	}

	function Bb(t) {
		var r = [],
			i = [],
			n = -1;
		return t.split(Dt).forEach(function(t) {
			var e = t.match(rt) || [];
			r.push.apply(r, e), i.push(n += e.length + 1)
		}), r.c = i, r
	}

	function Cb(t, e, r) {
		var i, n, a, s, o = "",
			u = (t + o).match(Dt),
			h = e ? "hsla(" : "rgba(",
			l = 0;
		if (!u) return t;
		if (u = u.map(function(t) {
				return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
			}), r && (a = Bb(t), (i = r.c).join(o) !== a.c.join(o)))
			for (s = (n = t.replace(Dt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
		if (!n)
			for (s = (n = t.split(Dt)).length - 1; l < s; l++) o += n[l] + u[l];
		return o + n[s]
	}

	function Fb(t) {
		var e, r = t.join(" ");
		if (Dt.lastIndex = 0, Dt.test(r)) return e = zt.test(r), t[1] = Cb(t[1], e), t[0] = Cb(t[0], e, Bb(t[1])), !0
	}

	function Ob(t) {
		var e = (t + "").split("("),
			r = Bt[e[0]];
		return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
			for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(It, "").trim() : +i, s = r.substr(e + 1).trim();
			return n
		}(e[1])] : function _valueInParentheses(t) {
			var e = t.indexOf("(") + 1,
				r = t.indexOf(")"),
				i = t.indexOf("(", e);
			return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
		}(t).split(",").map(oa)) : Bt._CE && Lt.test(t) ? Bt._CE("", t) : r
	}

	function Qb(t, e) {
		for (var r, i = t._first; i;) i instanceof Xt ? Qb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
	}

	function Sb(t, e, r, i) {
		void 0 === r && (r = function easeOut(t) {
			return 1 - e(1 - t)
		}), void 0 === i && (i = function easeInOut(t) {
			return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
		});
		var n, a = {
			easeIn: e,
			easeOut: r,
			easeInOut: i
		};
		return ha(t, function(t) {
			for (var e in Bt[t] = ot[t] = a, Bt[n = t.toLowerCase()] = r, a) Bt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Bt[t + "." + e] = a[e]
		}), a
	}

	function Tb(e) {
		return function(t) {
			return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
		}
	}

	function Ub(r, t, e) {
		function Jm(t) {
			return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
		}
		var i = 1 <= t ? t : 1,
			n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
			a = n / N * (Math.asin(1 / i) || 0),
			s = "out" === r ? Jm : "in" === r ? function(t) {
				return 1 - Jm(1 - t)
			} : Tb(Jm);
		return n = N / n, s.config = function(t, e) {
			return Ub(r, t, e)
		}, s
	}

	function Vb(e, r) {
		function Rm(t) {
			return t ? --t * t * ((r + 1) * t + r) + 1 : 0
		}
		void 0 === r && (r = 1.70158);
		var t = "out" === e ? Rm : "in" === e ? function(t) {
			return 1 - Rm(1 - t)
		} : Tb(Rm);
		return t.config = function(t) {
			return Vb(e, t)
		}, t
	}
	var B, L, l, I, h, n, a, i, o, f, c, d, p, _, m, g, b, k, M, O, A, C, E, D, z, F, Y, j, q = {
			autoSleep: 120,
			force3D: "auto",
			nullTargetWarn: 1,
			units: {
				lineHeight: ""
			}
		},
		V = {
			duration: .5,
			overwrite: !1,
			delay: 0
		},
		U = 1e8,
		X = 1 / U,
		N = 2 * Math.PI,
		W = N / 4,
		G = 0,
		K = Math.sqrt,
		J = Math.cos,
		H = Math.sin,
		Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
		$ = Array.isArray,
		tt = /(?:-?\.?\d|\.)+/gi,
		et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
		rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
		it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
		nt = /[+-]=-?[.\d]+/,
		at = /[^,'"\[\]\s]+/gi,
		st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
		ot = {},
		ut = {
			suppressEvents: !0,
			isStart: !0,
			kill: !1
		},
		ht = {
			suppressEvents: !0,
			kill: !1
		},
		lt = {
			suppressEvents: !0
		},
		ft = {},
		ct = [],
		dt = {},
		pt = {},
		_t = {},
		mt = 30,
		gt = [],
		vt = "",
		yt = function _merge(t, e) {
			for (var r in e) t[r] = e[r];
			return t
		},
		Tt = function _animationCycle(t, e) {
			var r = Math.floor(t /= e);
			return t && r === t ? r - 1 : r
		},
		bt = function _isFromOrFromStart(t) {
			var e = t.data;
			return "isFromStart" === e || "isStart" === e
		},
		wt = {
			_start: 0,
			endTime: T,
			totalDuration: T
		},
		xt = function _parsePosition(t, e, i) {
			var n, a, s, o = t.labels,
				u = t._recent || wt,
				h = t.duration() >= U ? u.endTime(!1) : t._dur;
			return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
		},
		kt = function _clamp(t, e, r) {
			return r < t ? t : e < r ? e : r
		},
		Mt = [].slice,
		Ot = function toArray(t, e, i) {
			return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? $(t) ? function _flatten(t, e, i) {
				return void 0 === i && (i = []), t.forEach(function(t) {
					return r(t) && !e || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
				}) || i
			}(t, i) : _a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
		},
		Pt = function mapRange(e, t, r, i, n) {
			var a = t - e,
				s = i - r;
			return Wa(n, function(t) {
				return r + ((t - e) / a * s || 0)
			})
		},
		At = function _callback(t, e, r) {
			var i, n, a, s = t.vars,
				o = s[e],
				u = l,
				h = t._ctx;
			if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
		},
		Ct = [],
		St = 255,
		Et = {
			aqua: [0, St, St],
			lime: [0, St, 0],
			silver: [192, 192, 192],
			black: [0, 0, 0],
			maroon: [128, 0, 0],
			teal: [0, 128, 128],
			blue: [0, 0, St],
			navy: [0, 0, 128],
			white: [St, St, St],
			olive: [128, 128, 0],
			yellow: [St, St, 0],
			orange: [St, 165, 0],
			gray: [128, 128, 128],
			purple: [128, 0, 128],
			green: [0, 128, 0],
			red: [St, 0, 0],
			pink: [St, 192, 203],
			cyan: [0, St, St],
			transparent: [St, St, St, 0]
		},
		Dt = function() {
			var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
			for (t in Et) e += "|" + t + "\\b";
			return new RegExp(e + ")", "gi")
		}(),
		zt = /hsl[a]?\(/,
		Rt = (M = Date.now, O = 500, A = 33, C = M(), E = C, z = D = 1e3 / 240, g = {
			time: 0,
			frame: 0,
			tick: function tick() {
				yl(!0)
			},
			deltaRatio: function deltaRatio(t) {
				return b / (1e3 / (t || 60))
			},
			wake: function wake() {
				o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ee, (h.gsapVersions || (h.gsapVersions = [])).push(Ee.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame, Ct.forEach(wb)), p && g.sleep(), _ = m || function(t) {
					return setTimeout(t, z - 1e3 * g.time + 1 | 0)
				}, d = 1, yl(2))
			},
			sleep: function sleep() {
				(m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
			},
			lagSmoothing: function lagSmoothing(t, e) {
				O = t || 1 / 0, A = Math.min(e || 33, O)
			},
			fps: function fps(t) {
				D = 1e3 / (t || 240), z = 1e3 * g.time + D
			},
			add: function add(n, t, e) {
				var a = t ? function(t, e, r, i) {
					n(t, e, r, i), g.remove(a)
				} : n;
				return g.remove(n), F[e ? "unshift" : "push"](a), Ft(), a
			},
			remove: function remove(t, e) {
				~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--
			},
			_listeners: F = []
		}),
		Ft = function _wake() {
			return !d && Rt.wake()
		},
		Bt = {},
		Lt = /^[\d.\-M][\d.\-,\s]/,
		It = /["']/g,
		Yt = function _invertEase(e) {
			return function(t) {
				return 1 - e(1 - t)
			}
		},
		jt = function _parseEase(t, e) {
			return t && (s(t) ? t : Bt[t] || Ob(t)) || e
		};

	function yl(t) {
		var e, r, i, n, a = M() - E,
			s = !0 === t;
		if (O < a && (C += a - A), (0 < (e = (i = (E += a) - C) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (D <= e ? 4 : D - e), r = 1), s || (p = _(yl)), r)
			for (k = 0; k < F.length; k++) F[k](i, b, n, t)
	}

	function gn(t) {
		return t < j ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
	}
	ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
		var r = e < 5 ? e + 1 : e;
		Sb(t + ",Power" + (r - 1), e ? function(t) {
			return Math.pow(t, r)
		} : function(t) {
			return t
		}, function(t) {
			return 1 - Math.pow(1 - t, r)
		}, function(t) {
			return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
		})
	}), Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn, Sb("Elastic", Ub("in"), Ub("out"), Ub()), Y = 7.5625, j = 1 / 2.75, Sb("Bounce", function(t) {
		return 1 - gn(1 - t)
	}, gn), Sb("Expo", function(t) {
		return t ? Math.pow(2, 10 * (t - 1)) : 0
	}), Sb("Circ", function(t) {
		return -(K(1 - t * t) - 1)
	}), Sb("Sine", function(t) {
		return 1 === t ? 1 : 1 - J(t * W)
	}), Sb("Back", Vb("in"), Vb("out"), Vb()), Bt.SteppedEase = Bt.steps = ot.SteppedEase = {
		config: function config(t, e) {
			void 0 === t && (t = 1);
			var r = 1 / t,
				i = t + (e ? 0 : 1),
				n = e ? 1 : 0;
			return function(t) {
				return ((i * kt(0, .99999999, t) | 0) + n) * r
			}
		}
	}, V.ease = Bt["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
		return vt += t + "," + t + "Params,"
	});
	var qt, Vt = function GSCache(t, e) {
			this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : ne
		},
		Ut = ((qt = Animation.prototype).delay = function delay(t) {
			return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
		}, qt.duration = function duration(t) {
			return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
		}, qt.totalDuration = function totalDuration(t) {
			return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
		}, qt.totalTime = function totalTime(t, e) {
			if (Ft(), !arguments.length) return this._tTime;
			var r = this._dp;
			if (r && r.smoothChildTiming && this._ts) {
				for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
				!this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
			}
			return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this
		}, qt.time = function time(t, e) {
			return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
		}, qt.totalProgress = function totalProgress(t, e) {
			return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
		}, qt.progress = function progress(t, e) {
			return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
		}, qt.iteration = function iteration(t, e) {
			var r = this.duration() + this._rDelay;
			return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
		}, qt.timeScale = function timeScale(t) {
			if (!arguments.length) return this._rts === -X ? 0 : this._rts;
			if (this._rts === t) return this;
			var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
			return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, this.totalTime(kt(-Math.abs(this._delay), this._tDur, e), !0), Ha(this),
				function _recacheAncestors(t) {
					for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
					return t
				}(this)
		}, qt.paused = function paused(t) {
			return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps
		}, qt.startTime = function startTime(t) {
			if (arguments.length) {
				this._start = t;
				var e = this.parent || this._dp;
				return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this
			}
			return this._start
		}, qt.endTime = function endTime(t) {
			return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
		}, qt.rawTime = function rawTime(t) {
			var e = this.parent || this._dp;
			return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
		}, qt.revert = function revert(t) {
			void 0 === t && (t = lt);
			var e = L;
			return L = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), L = e, this
		}, qt.globalTime = function globalTime(t) {
			for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
			return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : r
		}, qt.repeat = function repeat(t) {
			return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
		}, qt.repeatDelay = function repeatDelay(t) {
			if (arguments.length) {
				var e = this._time;
				return this._rDelay = t, Sa(this), e ? this.time(e) : this
			}
			return this._rDelay
		}, qt.yoyo = function yoyo(t) {
			return arguments.length ? (this._yoyo = t, this) : this._yoyo
		}, qt.seek = function seek(t, e) {
			return this.totalTime(xt(this, t), w(e))
		}, qt.restart = function restart(t, e) {
			return this.play().totalTime(t ? -this._delay : 0, w(e))
		}, qt.play = function play(t, e) {
			return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
		}, qt.reverse = function reverse(t, e) {
			return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
		}, qt.pause = function pause(t, e) {
			return null != t && this.seek(t, e), this.paused(!0)
		}, qt.resume = function resume() {
			return this.paused(!1)
		}, qt.reversed = function reversed(t) {
			return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0
		}, qt.invalidate = function invalidate() {
			return this._initted = this._act = 0, this._zTime = -X, this
		}, qt.isActive = function isActive() {
			var t, e = this.parent || this._dp,
				r = this._start;
			return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X))
		}, qt.eventCallback = function eventCallback(t, e, r) {
			var i = this.vars;
			return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
		}, qt.then = function then(t) {
			var i = this;
			return new Promise(function(e) {
				function Bo() {
					var t = i.then;
					i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
				}
				var r = s(t) ? t : pa;
				i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Bo() : i._prom = Bo
			})
		}, qt.kill = function kill() {
			tb(this)
		}, Animation);

	function Animation(t) {
		this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Rt.wake()
	}
	qa(Ut.prototype, {
		_time: 0,
		_start: 0,
		_end: 0,
		_tTime: 0,
		_tDur: 0,
		_dirty: 0,
		_repeat: 0,
		_yoyo: !1,
		parent: null,
		_initted: !1,
		_rDelay: 0,
		_ts: 1,
		_dp: 0,
		ratio: 0,
		_zTime: -X,
		_prom: 0,
		_ps: !1,
		_rts: 1
	});
	var Xt = function(i) {
		function Timeline(t, e) {
			var r;
			return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), I && Ka(t.parent || I, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r
		}
		_inheritsLoose(Timeline, i);
		var e = Timeline.prototype;
		return e.to = function to(t, e, r) {
			return Va(0, arguments, this), this
		}, e.from = function from(t, e, r) {
			return Va(1, arguments, this), this
		}, e.fromTo = function fromTo(t, e, r, i) {
			return Va(2, arguments, this), this
		}, e.set = function set(t, e, r) {
			return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Zt(t, e, xt(this, r), 1), this
		}, e.call = function call(t, e, r) {
			return Ka(this, Zt.delayedCall(0, t, e), r)
		}, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
			return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Zt(t, r, xt(this, n)), this
		}, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
			return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
		}, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
			return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
		}, e.render = function render(t, e, r) {
			var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
				m = this._dirty ? this.totalDuration() : this._tDur,
				g = this._dur,
				v = t <= 0 ? 0 : ja(t),
				y = this._zTime < 0 != t < 0 && (this._initted || !g);
			if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
				if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
					if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
					if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && this._tTime - c * o - this._dur <= 0 && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
						var T = d && 1 & c,
							b = T === (d && 1 & s);
						if (s < c && (T = !T), _ = T ? 0 : v % g ? g : v, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && At(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
						if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
						Qb(this, p)
					}
				}
				if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
						var i;
						if (e < r)
							for (i = t._first; i && i._start <= r;) {
								if ("isPause" === i.data && i._start > e) return i;
								i = i._next
							} else
								for (i = t._last; i && i._start >= r;) {
									if ("isPause" === i.data && i._start < e) return i;
									i = i._prev
								}
					}(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && !s && (At(this, "onStart"), this._tTime !== v)) return this;
				if (_ <= i && 0 <= t)
					for (n = this._first; n;) {
						if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
							if (n.parent !== this) return this.render(t, e, r);
							if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
								h = 0, a && (v += this._zTime = -X);
								break
							}
						}
						n = a
					} else {
						n = this._last;
						for (var w = t < 0 ? t : i; n;) {
							if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
								if (n.parent !== this) return this.render(t, e, r);
								if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || L && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
									h = 0, a && (v += this._zTime = w ? -X : X);
									break
								}
							}
							n = a
						}
					}
				if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
				this._onUpdate && !e && At(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (At(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
			}
			return this
		}, e.add = function add(e, i) {
			var n = this;
			if (t(i) || (i = xt(this, i, e)), !(e instanceof Ut)) {
				if ($(e)) return e.forEach(function(t) {
					return n.add(t, i)
				}), this;
				if (r(e)) return this.addLabel(e, i);
				if (!s(e)) return this;
				e = Zt.delayedCall(0, e)
			}
			return this !== e ? Ka(this, e, i) : this
		}, e.getChildren = function getChildren(t, e, r, i) {
			void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
			for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Zt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
			return n
		}, e.getById = function getById(t) {
			for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
				if (e[r].vars.id === t) return e[r]
		}, e.remove = function remove(t) {
			return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this))
		}, e.totalTime = function totalTime(t, e) {
			return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
		}, e.addLabel = function addLabel(t, e) {
			return this.labels[t] = xt(this, e), this
		}, e.removeLabel = function removeLabel(t) {
			return delete this.labels[t], this
		}, e.addPause = function addPause(t, e, r) {
			var i = Zt.delayedCall(0, e || T, r);
			return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t))
		}, e.removePause = function removePause(t) {
			var e = this._first;
			for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next
		}, e.killTweensOf = function killTweensOf(t, e, r) {
			for (var i = this.getTweensOf(t, r), n = i.length; n--;) Nt !== i[n] && i[n].kill(t, e);
			return this
		}, e.getTweensOf = function getTweensOf(e, r) {
			for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof Zt ? la(s._targets, a) && (o ? (!Nt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
			return n
		}, e.tweenTo = function tweenTo(t, e) {
			e = e || {};
			var r, i = this,
				n = xt(i, t),
				a = e.startAt,
				s = e.onStart,
				o = e.onStartParams,
				u = e.immediateRender,
				h = Zt.to(i, qa({
					ease: e.ease || "none",
					lazy: !1,
					immediateRender: !1,
					time: n,
					overwrite: "auto",
					duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
					onStart: function onStart() {
						if (i.pause(), !r) {
							var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
							h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1
						}
						s && s.apply(h, o || [])
					}
				}, e));
			return u ? h.render(0) : h
		}, e.tweenFromTo = function tweenFromTo(t, e, r) {
			return this.tweenTo(e, qa({
				startAt: {
					time: xt(this, t)
				}
			}, r))
		}, e.recent = function recent() {
			return this._recent
		}, e.nextLabel = function nextLabel(t) {
			return void 0 === t && (t = this._time), rb(this, xt(this, t))
		}, e.previousLabel = function previousLabel(t) {
			return void 0 === t && (t = this._time), rb(this, xt(this, t), 1)
		}, e.currentLabel = function currentLabel(t) {
			return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X)
		}, e.shiftChildren = function shiftChildren(t, e, r) {
			void 0 === r && (r = 0);
			for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
			if (e)
				for (i in a) a[i] >= r && (a[i] += t);
			return Aa(this)
		}, e.invalidate = function invalidate(t) {
			var e = this._first;
			for (this._lock = 0; e;) e.invalidate(t), e = e._next;
			return i.prototype.invalidate.call(this, t)
		}, e.clear = function clear(t) {
			void 0 === t && (t = !0);
			for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
			return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this)
		}, e.totalDuration = function totalDuration(t) {
			var e, r, i, n = 0,
				a = this,
				s = a._last,
				o = U;
			if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
			if (a._dirty) {
				for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
				Ra(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0
			}
			return a._tDur
		}, Timeline.updateRoot = function updateRoot(t) {
			if (I._ts && (na(I, Ga(t, I)), f = Rt.frame), Rt.frame >= mt) {
				mt += q.autoSleep || 120;
				var e = I._first;
				if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
					for (; e && !e._ts;) e = e._next;
					e || Rt.sleep()
				}
			}
		}, Timeline
	}(Ut);
	qa(Xt.prototype, {
		_lock: 0,
		_hasPause: 0,
		_forcing: 0
	});

	function ac(t, e, i, n, a, o) {
		var u, h, l, f;
		if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
				if (s(t) && (t = Kt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || Z(t)) return r(t) ? Kt(t, a, e, i, n) : t;
				var o, u = {};
				for (o in t) u[o] = Kt(t[o], a, e, i, n);
				return u
			}(e[t], n, a, o, i), i, n, o) && (i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
			for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
		return u
	}

	function gc(t, r, e, i) {
		var n, a, s = r.ease || i || "power1.inOut";
		if ($(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
			return a.push({
				t: e / (r.length - 1) * 100,
				v: t,
				e: s
			})
		});
		else
			for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
				t: parseFloat(t),
				v: r[n],
				e: s
			})
	}
	var Nt, Wt, Qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
			s(n) && (n = n(a || 0, t, o));
			var c, d = t[e],
				p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
				_ = s(d) ? l ? re : te : $t;
			if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
				var o, u, h, l, f, c, d, p, _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
					m = 0,
					g = 0;
				for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
					_next: _._pt,
					p: f || 1 === g ? f : ",",
					s: c,
					c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
					m: h && h < 4 ? Math.round : 0
				}, m = it.lastIndex);
				return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
			}.call(this, t, e, p, n, _, h || q.stringFilter, l)) : (c = new _e(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? se : ae, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
		},
		Gt = function _initTween(t, e, r) {
			var i, n, a, s, o, u, h, l, f, c, d, p, _, m = t.vars,
				g = m.ease,
				v = m.startAt,
				y = m.immediateRender,
				T = m.lazy,
				b = m.onUpdate,
				x = m.onUpdateParams,
				k = m.callbackScope,
				M = m.runBackwards,
				O = m.yoyoEase,
				P = m.keyframes,
				A = m.autoRevert,
				C = t._dur,
				S = t._startAt,
				E = t._targets,
				D = t.parent,
				z = D && "nested" === D.data ? D.vars.targets : E,
				R = "auto" === t._overwrite && !B,
				F = t.timeline;
			if (!F || P && g || (g = "none"), t._ease = jt(g, V.ease), t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !F && !!m.runBackwards, !F || P && !m.stagger) {
				if (p = (l = E[0] ? fa(E[0]).harness : 0) && m[l.prop], i = ua(m, ft), S && (S._zTime < 0 && S.progress(1), e < 0 && M && y && !A ? S.render(-1, !0) : S.revert(M && C ? ht : ut), S._lazy = 0), v) {
					if (za(t._startAt = Zt.set(E, qa({
							data: "isStart",
							overwrite: !1,
							parent: D,
							immediateRender: !0,
							lazy: !S && w(T),
							startAt: null,
							delay: 0,
							onUpdate: b,
							onUpdateParams: x,
							callbackScope: k,
							stagger: 0
						}, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L || !y && !A) && t._startAt.revert(ht), y && C && e <= 0 && r <= 0) return void(e && (t._zTime = e))
				} else if (M && C && !S)
					if (e && (y = !1), a = qa({
							overwrite: !1,
							data: "isFromStart",
							lazy: y && !S && w(T),
							immediateRender: y,
							stagger: 0,
							parent: D
						}, i), p && (a[l.prop] = p), za(t._startAt = Zt.set(E, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
						if (!e) return
					} else _initTween(t._startAt, X, X);
				for (t._pt = t._ptCache = 0, T = C && w(T) || T && !C, n = 0; n < E.length; n++) {
					if (h = (o = E[n])._gsap || ea(E)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = z === E ? n : z.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, d, z) && (t._pt = s = new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
							c[t] = s
						}), f.priority && (u = 1)), !l || p)
						for (a in i) pt[a] && (f = ac(a, i, t, d, o, z)) ? f.priority && (u = 1) : c[a] = s = Qt.call(t, o, a, "get", i[a], d, z, 0, m.stringFilter);
					t._op && t._op[n] && t.kill(o, t._op[n]), R && t._pt && (Nt = t, I.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Nt = 0), t._pt && T && (dt[h.id] = 1)
				}
				u && pe(t), t._onInit && t._onInit(t)
			}
			t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, P && e <= 0 && F.render(U, !0, !0)
		},
		Kt = function _parseFuncOrString(t, e, i, n, a) {
			return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
		},
		Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
		Ht = {};
	ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
		return Ht[t] = 1
	});
	var Zt = function(z) {
		function Tween(e, r, i, n) {
			var a;
			"number" == typeof r && (i.duration = r, r = i, i = null);
			var s, o, u, h, l, f, c, d, p = (a = z.call(this, n ? r : va(r)) || this).vars,
				_ = p.duration,
				m = p.delay,
				g = p.immediateRender,
				T = p.stagger,
				b = p.overwrite,
				x = p.keyframes,
				k = p.defaults,
				M = p.scrollTrigger,
				O = p.yoyoEase,
				P = r.parent || I,
				A = ($(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
			if (a._targets = A.length ? ea(A) : R("GSAP target " + e + " not found. https://greensock.com", !q.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
				if (r = a.vars, (s = a.timeline = new Xt({
						data: "nested",
						defaults: k || {},
						targets: P && "nested" === P.data ? P.vars.targets : A
					})).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
					if (h = A.length, c = T && eb(T), v(T))
						for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
					for (o = 0; o < h; o++)(u = ua(r, Ht)).stagger = 0, O && (u.yoyoEase = O), d && yt(u, d), f = A[o], u.duration = +Kt(_, _assertThisInitialized(a), o, f, A), u.delay = (+Kt(m, _assertThisInitialized(a), o, f, A) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, A) : 0), s._ease = Bt.none;
					s.duration() ? _ = m = 0 : a.timeline = 0
				} else if (x) {
					va(qa(s.vars.defaults, {
						ease: "none"
					})), s._ease = jt(x.ease || r.ease || "none");
					var C, S, E, D = 0;
					if ($(x)) x.forEach(function(t) {
						return s.to(A, t, ">")
					}), s.duration();
					else {
						for (l in u = {}, x) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
						for (l in u)
							for (C = u[l].sort(function(t, e) {
									return t.t - e.t
								}), o = D = 0; o < C.length; o++)(E = {
								ease: (S = C[o]).e,
								duration: (S.t - (o ? C[o - 1].t : 0)) / 100 * _
							})[l] = S.v, s.to(A, E, D), D += E.duration;
						s.duration() < _ && s.to({}, {
							duration: _ - s.duration()
						})
					}
				}
				_ || a.duration(_ = s.duration())
			} else a.timeline = 0;
			return !0 !== b || B || (Nt = _assertThisInitialized(a), I.killTweensOf(A), Nt = 0), Ka(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
				return !t || t._ts && _hasNoPausedAncestors(t.parent)
			}(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -X, a.render(Math.max(0, -m) || 0)), M && La(_assertThisInitialized(a), M), a
		}
		_inheritsLoose(Tween, z);
		var e = Tween.prototype;
		return e.render = function render(t, e, r) {
			var i, n, a, s, o, u, h, l, f, c = this._time,
				d = this._tDur,
				p = this._dur,
				_ = t < 0,
				m = d - X < t && !_ ? d : t < X ? 0 : t;
			if (p) {
				if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
					if (i = m, l = this.timeline, this._repeat) {
						if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
						if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
						a !== o && (l && this._yEase && Qb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
					}
					if (!this._initted) {
						if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
						if (c !== this._time) return this;
						if (p !== this._dur) return this.render(t, e, r)
					}
					if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && !a && (At(this, "onStart"), this._tTime !== m)) return this;
					for (n = this._pt; n;) n.r(h, n.d), n = n._next;
					l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), At(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && At(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (At(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
				}
			} else ! function _renderZeroDurationTween(t, e, r, i) {
				var n, a, s, o = t.ratio,
					u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
						var e = t.parent;
						return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
					}(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
					h = t._rDelay,
					l = 0;
				if (h && t._repeat && (l = kt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || L || i || t._zTime === X || !e && t._zTime) {
					if (!t._initted && Ma(t, e, i, r, l)) return;
					for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
					e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && At(t, "onUpdate"), l && t._repeat && !r && t.parent && At(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || L || (At(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
				} else t._zTime || (t._zTime = e)
			}(this, t, e, r);
			return this
		}, e.targets = function targets() {
			return this._targets
		}, e.invalidate = function invalidate(t) {
			return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t)
		}, e.resetTo = function resetTo(t, e, r, i) {
			d || Rt.wake(), this._ts || this.play();
			var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
			return this._initted || Gt(this, a), n = this._ease(a / this._dur),
				function _updatePropTweens(t, e, r, i, n, a, s) {
					var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
					if (!f)
						for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
							if ((o = h[l][e]) && o.d && o.d._pt)
								for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
							if (!o) return Wt = 1, t.vars[e] = "+=0", Gt(t, s), Wt = 0, 1;
							f.push(o)
						}
					for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b))
				}(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
		}, e.kill = function kill(t, e) {
			if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
			if (this.timeline) {
				var i = this.timeline.totalDuration();
				return this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this
			}
			var n, a, s, o, u, h, l, f = this._targets,
				c = t ? Ot(t) : f,
				d = this._ptLookup,
				p = this._pt;
			if ((!e || "all" === e) && function _arraysMatch(t, e) {
					for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
					return r < 0
				}(f, c)) return "all" === e && (this._pt = 0), tb(this);
			for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
					return u[t] = 1
				}), e = u), e = function _addAliasesToVars(t, e) {
					var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
						o = s && s.aliases;
					if (!o) return e;
					for (i in r = yt({}, e), o)
						if (i in r)
							for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
					return r
				}(f, e)), l = f.length; l--;)
				if (~c.indexOf(f[l]))
					for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
			return this._initted && !this._pt && p && tb(this), this
		}, Tween.to = function to(t, e, r) {
			return new Tween(t, e, r)
		}, Tween.from = function from(t, e) {
			return Va(1, arguments)
		}, Tween.delayedCall = function delayedCall(t, e, r, i) {
			return new Tween(e, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: t,
				onComplete: e,
				onReverseComplete: e,
				onCompleteParams: r,
				onReverseCompleteParams: r,
				callbackScope: i
			})
		}, Tween.fromTo = function fromTo(t, e, r) {
			return Va(2, arguments)
		}, Tween.set = function set(t, e) {
			return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
		}, Tween.killTweensOf = function killTweensOf(t, e, r) {
			return I.killTweensOf(t, e, r)
		}, Tween
	}(Ut);
	qa(Zt.prototype, {
		_targets: [],
		_lazy: 0,
		_startAt: 0,
		_op: 0,
		_onInit: 0
	}), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
		Zt[r] = function() {
			var t = new Xt,
				e = Mt.call(arguments, 0);
			return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
		}
	});

	function oc(t, e, r) {
		return t.setAttribute(e, r)
	}

	function wc(t, e, r, i) {
		i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
	}
	var $t = function _setterPlain(t, e, r) {
			return t[e] = r
		},
		te = function _setterFunc(t, e, r) {
			return t[e](r)
		},
		re = function _setterFuncWithParam(t, e, r, i) {
			return t[e](i.fp, r)
		},
		ne = function _getSetter(t, e) {
			return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : $t
		},
		ae = function _renderPlain(t, e) {
			return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
		},
		se = function _renderBoolean(t, e) {
			return e.set(e.t, e.p, !!(e.s + e.c * t), e)
		},
		ue = function _renderComplexString(t, e) {
			var r = e._pt,
				i = "";
			if (!t && e.b) i = e.b;
			else if (1 === t && e.e) i = e.e;
			else {
				for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
				i += e.c
			}
			e.set(e.t, e.p, i, e)
		},
		he = function _renderPropTweens(t, e) {
			for (var r = e._pt; r;) r.r(t, r.d), r = r._next
		},
		fe = function _addPluginModifier(t, e, r, i) {
			for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
		},
		ce = function _killPropTweensOf(t) {
			for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
			return !e
		},
		pe = function _sortPropTweensByPriority(t) {
			for (var e, r, i, n, a = t._pt; a;) {
				for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
				(a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
			}
			t._pt = i
		},
		_e = (PropTween.prototype.modifier = function modifier(t, e, r) {
			this.mSet = this.mSet || this.set, this.set = wc, this.m = t, this.mt = r, this.tween = e
		}, PropTween);

	function PropTween(t, e, r, i, n, a, s, o, u) {
		this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ae, this.d = s || this, this.set = o || $t, this.pr = u || 0, (this._next = t) && (t._prev = this)
	}
	ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
		return ft[t] = 1
	}), ot.TweenMax = ot.TweenLite = Zt, ot.TimelineLite = ot.TimelineMax = Xt, I = new Xt({
		sortChildren: !1,
		defaults: V,
		autoRemoveChildren: !0,
		id: "root",
		smoothChildTiming: !0
	}), q.stringFilter = Fb;

	function Ec(t) {
		return (ye[t] || Te).map(function(t) {
			return t()
		})
	}

	function Fc() {
		var t = Date.now(),
			o = [];
		2 < t - Me && (Ec("matchMediaInit"), ge.forEach(function(t) {
			var e, r, i, n, a = t.queries,
				s = t.conditions;
			for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
			n && (t.revert(), i && o.push(t))
		}), Ec("matchMediaRevert"), o.forEach(function(t) {
			return t.onMatch(t)
		}), Me = t, Ec("matchMedia"))
	}
	var me, ge = [],
		ye = {},
		Te = [],
		Me = 0,
		Oe = 0,
		Pe = ((me = Context.prototype).add = function add(t, i, n) {
			function Ew() {
				var t, e = l,
					r = a.selector;
				return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
			}
			s(t) && (n = i, i = t, t = s);
			var a = this;
			return a.last = Ew, t === s ? Ew(a) : t ? a[t] = Ew : Ew
		}, me.ignore = function ignore(t) {
			var e = l;
			l = null, t(this), l = e
		}, me.getTweens = function getTweens() {
			var e = [];
			return this.data.forEach(function(t) {
				return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Zt && !(t.parent && "nested" === t.parent.data) && e.push(t)
			}), e
		}, me.clear = function clear() {
			this._r.length = this.data.length = 0
		}, me.kill = function kill(e, t) {
			var r = this;
			if (e) {
				var i = this.getTweens();
				this.data.forEach(function(t) {
					"isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
						return i.splice(i.indexOf(t), 1)
					}))
				}), i.map(function(t) {
					return {
						g: t.globalTime(0),
						t: t
					}
				}).sort(function(t, e) {
					return e.g - t.g || -1 / 0
				}).forEach(function(t) {
					return t.t.revert(e)
				}), this.data.forEach(function(t) {
					return !(t instanceof Zt) && t.revert && t.revert(e)
				}), this._r.forEach(function(t) {
					return t(e, r)
				}), this.isReverted = !0
			} else this.data.forEach(function(t) {
				return t.kill && t.kill()
			});
			if (this.clear(), t)
				for (var n = ge.length; n--;) ge[n].id === this.id && ge.splice(n, 1)
		}, me.revert = function revert(t) {
			this.kill(t || {})
		}, Context);

	function Context(t, e) {
		this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Oe++, t && this.add(t)
	}
	var Ae, Ce = ((Ae = MatchMedia.prototype).add = function add(t, e, r) {
		v(t) || (t = {
			matches: t
		});
		var i, n, a, s = new Pe(0, r || this.scope),
			o = s.conditions = {};
		for (n in l && !s.selector && (s.selector = l.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ge.indexOf(s) < 0 && ge.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Fc) : i.addEventListener("change", Fc));
		return a && e(s), this
	}, Ae.revert = function revert(t) {
		this.kill(t || {})
	}, Ae.kill = function kill(e) {
		this.contexts.forEach(function(t) {
			return t.kill(e, !0)
		})
	}, MatchMedia);

	function MatchMedia(t) {
		this.contexts = [], this.scope = t
	}
	var Se = {
		registerPlugin: function registerPlugin() {
			for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
			e.forEach(function(t) {
				return wb(t)
			})
		},
		timeline: function timeline(t) {
			return new Xt(t)
		},
		getTweensOf: function getTweensOf(t, e) {
			return I.getTweensOf(t, e)
		},
		getProperty: function getProperty(i, t, e, n) {
			r(i) && (i = Ot(i)[0]);
			var a = fa(i || {}).get,
				s = e ? pa : oa;
			return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
				return s((pt[t] && pt[t].get || a)(i, t, e, r))
			} : i
		},
		quickSetter: function quickSetter(r, e, i) {
			if (1 < (r = Ot(r)).length) {
				var n = r.map(function(t) {
						return Ee.quickSetter(t, e, i)
					}),
					a = n.length;
				return function(t) {
					for (var e = a; e--;) n[e](t)
				}
			}
			r = r[0] || {};
			var s = pt[e],
				o = fa(r),
				u = o.harness && (o.harness.aliases || {})[e] || e,
				h = s ? function(t) {
					var e = new s;
					c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && he(1, c)
				} : o.set(r, u);
			return s ? h : function(t) {
				return h(r, u, i ? t + i : t, o, 1)
			}
		},
		quickTo: function quickTo(t, i, e) {
			function Wx(t, e, r) {
				return n.resetTo(i, t, e, r)
			}
			var r, n = Ee.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
			return Wx.tween = n, Wx
		},
		isTweening: function isTweening(t) {
			return 0 < I.getTweensOf(t, !0).length
		},
		defaults: function defaults(t) {
			return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {})
		},
		config: function config(t) {
			return ta(q, t || {})
		},
		registerEffect: function registerEffect(t) {
			var i = t.name,
				n = t.effect,
				e = t.plugins,
				a = t.defaults,
				r = t.extendTimeline;
			(e || "").split(",").forEach(function(t) {
				return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
			}), _t[i] = function(t, e, r) {
				return n(Ot(t), qa(e || {}, a), r)
			}, r && (Xt.prototype[i] = function(t, e, r) {
				return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
			})
		},
		registerEase: function registerEase(t, e) {
			Bt[t] = jt(e)
		},
		parseEase: function parseEase(t, e) {
			return arguments.length ? jt(t, e) : Bt
		},
		getById: function getById(t) {
			return I.getById(t)
		},
		exportRoot: function exportRoot(t, e) {
			void 0 === t && (t = {});
			var r, i, n = new Xt(t);
			for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r;) i = r._next, !e && !r._dur && r instanceof Zt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
			return Ka(I, n, 0), n
		},
		context: function context(t, e) {
			return t ? new Pe(t, e) : l
		},
		matchMedia: function matchMedia(t) {
			return new Ce(t)
		},
		matchMediaRefresh: function matchMediaRefresh() {
			return ge.forEach(function(t) {
				var e, r, i = t.conditions;
				for (r in i) i[r] && (i[r] = !1, e = 1);
				e && t.revert()
			}) || Fc()
		},
		addEventListener: function addEventListener(t, e) {
			var r = ye[t] || (ye[t] = []);
			~r.indexOf(e) || r.push(e)
		},
		removeEventListener: function removeEventListener(t, e) {
			var r = ye[t],
				i = r && r.indexOf(e);
			0 <= i && r.splice(i, 1)
		},
		utils: {
			wrap: function wrap(e, t, r) {
				var i = t - e;
				return $(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function(t) {
					return (i + (t - e) % i) % i + e
				})
			},
			wrapYoyo: function wrapYoyo(e, t, r) {
				var i = t - e,
					n = 2 * i;
				return $(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function(t) {
					return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
				})
			},
			distribute: eb,
			random: hb,
			snap: gb,
			normalize: function normalize(t, e, r) {
				return Pt(t, e, 0, 1, r)
			},
			getUnit: Ya,
			clamp: function clamp(e, r, t) {
				return Wa(t, function(t) {
					return kt(e, r, t)
				})
			},
			splitColor: Ab,
			toArray: Ot,
			selector: cb,
			mapRange: Pt,
			pipe: function pipe() {
				for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
				return function(t) {
					return e.reduce(function(t, e) {
						return e(t)
					}, t)
				}
			},
			unitize: function unitize(e, r) {
				return function(t) {
					return e(parseFloat(t)) + (r || Ya(t))
				}
			},
			interpolate: function interpolate(e, i, t, n) {
				var a = isNaN(e + i) ? 0 : function(t) {
					return (1 - t) * e + t * i
				};
				if (!a) {
					var s, o, u, h, l, f = r(e),
						c = {};
					if (!0 === t && (n = 1) && (t = null), f) e = {
						p: e
					}, i = {
						p: i
					};
					else if ($(e) && !$(i)) {
						for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
						h--, a = function func(t) {
							t *= h;
							var e = Math.min(l, ~~t);
							return u[e](t - e)
						}, t = i
					} else n || (e = yt($(e) ? [] : {}, e));
					if (!u) {
						for (s in i) Qt.call(c, e, s, "get", i[s]);
						a = function func(t) {
							return he(t, c) || (f ? e.p : e)
						}
					}
				}
				return Wa(t, a)
			},
			shuffle: db
		},
		install: P,
		effects: _t,
		ticker: Rt,
		updateRoot: Xt.updateRoot,
		plugins: pt,
		globalTimeline: I,
		core: {
			PropTween: _e,
			globals: S,
			Tween: Zt,
			Timeline: Xt,
			Animation: Ut,
			getCache: fa,
			_removeLinkedListItem: ya,
			reverting: function reverting() {
				return L
			},
			context: function context(t) {
				return t && l && (l.data.push(t), t._ctx = l), l
			},
			suppressOverwrites: function suppressOverwrites(t) {
				return B = t
			}
		}
	};
	ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
		return Se[t] = Zt[t]
	}), Rt.add(Xt.updateRoot), c = Se.to({}, {
		duration: 0
	});

	function Jc(t, e) {
		for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
		return r
	}

	function Lc(t, a) {
		return {
			name: t,
			rawVars: 1,
			init: function init(t, n, e) {
				e._onInit = function(t) {
					var e, i;
					if (r(n) && (e = {}, ha(n, function(t) {
							return e[t] = 1
						}), n = e), a) {
						for (i in e = {}, n) e[i] = a(n[i]);
						n = e
					}! function _addModifiers(t, e) {
						var r, i, n, a = t._targets;
						for (r in e)
							for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Jc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
					}(t, n)
				}
			}
		}
	}
	var Ee = Se.registerPlugin({
		name: "attr",
		init: function init(t, e, r, i, n) {
			var a, s, o;
			for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
		},
		render: function render(t, e) {
			for (var r = e._pt; r;) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
		}
	}, {
		name: "endArray",
		init: function init(t, e) {
			for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
		}
	}, Lc("roundProps", fb), Lc("modifiers"), Lc("snap", gb)) || Se;
	Zt.version = Xt.version = Ee.version = "3.12.2", o = 1, x() && Ft();

	function vd(t, e) {
		return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
	}

	function wd(t, e) {
		return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
	}

	function xd(t, e) {
		return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
	}

	function yd(t, e) {
		var r = e.s + e.c * t;
		e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
	}

	function zd(t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e)
	}

	function Ad(t, e) {
		return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
	}

	function Bd(t, e, r) {
		return t.style[e] = r
	}

	function Cd(t, e, r) {
		return t.style.setProperty(e, r)
	}

	function Dd(t, e, r) {
		return t._gsap[e] = r
	}

	function Ed(t, e, r) {
		return t._gsap.scaleX = t._gsap.scaleY = r
	}

	function Fd(t, e, r, i, n) {
		var a = t._gsap;
		a.scaleX = a.scaleY = r, a.renderTransform(n, a)
	}

	function Gd(t, e, r, i, n) {
		var a = t._gsap;
		a[e] = r, a.renderTransform(n, a)
	}

	function Jd(t, e) {
		var r = this,
			i = this.target,
			n = i.style;
		if (t in ar && n) {
			if (this.tfm = this.tfm || {}, "transform" === t) return cr.transform.split(",").forEach(function(t) {
				return Jd.call(r, t, e)
			});
			if (~(t = cr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
					return r.tfm[t] = yr(i, t)
				}) : this.tfm[t] = i._gsap.x ? i._gsap[t] : yr(i, t), 0 <= this.props.indexOf(dr)) return;
			i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pr, e, "")), t = dr
		}(n || e) && this.props.push(t, e, n[t])
	}

	function Kd(t) {
		t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
	}

	function Ld() {
		var t, e, r = this.props,
			i = this.target,
			n = i.style,
			a = i._gsap;
		for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(hr, "-$1").toLowerCase());
		if (this.tfm) {
			for (e in this.tfm) a[e] = this.tfm[e];
			a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Ie()) && t.isStart || n[dr] || (Kd(n), a.uncache = 1)
		}
	}

	function Md(t, e) {
		var r = {
			target: t,
			props: [],
			revert: Ld,
			save: Jd
		};
		return t._gsap || Ee.core.getCache(t), e && e.split(",").forEach(function(t) {
			return r.save(t)
		}), r
	}

	function Od(t, e) {
		var r = ze.createElementNS ? ze.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ze.createElement(t);
		return r.style ? r : ze.createElement(t)
	}

	function Pd(t, e, r) {
		var i = getComputedStyle(t);
		return i[e] || i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Pd(t, mr(e) || e, 1) || ""
	}

	function Sd() {
		(function _windowExists() {
			return "undefined" != typeof window
		})() && window.document && (De = window, ze = De.document, Re = ze.documentElement, Be = Od("div") || {
			style: {}
		}, Od("div"), dr = mr(dr), pr = dr + "Origin", Be.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ye = !!mr("perspective"), Ie = Ee.core.reverting, Fe = 1)
	}

	function Td(t) {
		var e, r = Od("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
			i = this.parentNode,
			n = this.nextSibling,
			a = this.style.cssText;
		if (Re.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
			e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Td
		} catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
		return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), this.style.cssText = a, e
	}

	function Ud(t, e) {
		for (var r = e.length; r--;)
			if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
	}

	function Vd(e) {
		var r;
		try {
			r = e.getBBox()
		} catch (t) {
			r = Td.call(e, !0)
		}
		return r && (r.width || r.height) || e.getBBox === Td || (r = Td.call(e, !0)), !r || r.width || r.x || r.y ? r : {
			x: +Ud(e, ["x", "cx", "x1"]) || 0,
			y: +Ud(e, ["y", "cy", "y1"]) || 0,
			width: 0,
			height: 0
		}
	}

	function Wd(t) {
		return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Vd(t))
	}

	function Xd(t, e) {
		if (e) {
			var r = t.style;
			e in ar && e !== pr && (e = dr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(hr, "-$1").toLowerCase())) : r.removeAttribute(e)
		}
	}

	function Yd(t, e, r, i, n, a) {
		var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
		return (t._pt = s).b = i, s.e = n, t._props.push(r), s
	}

	function _d(t, e, r, i) {
		var n, a, s, o, u = parseFloat(r) || 0,
			h = (r + "").trim().substr((u + "").length) || "px",
			l = Be.style,
			f = lr.test(e),
			c = "svg" === t.tagName.toLowerCase(),
			d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
			p = "px" === i,
			_ = "%" === i;
		return i === h || !u || gr[i] || gr[h] ? u : ("px" === h || p || (u = _d(t, e, r, "px")), o = t.getCTM && Wd(t), !_ && "%" !== h || !ar[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ze && a.appendChild || (a = ze.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || vr[Pd(a, "display")] || (l.position = Pd(t, "position")), a === t && (l.position = "static"), a.appendChild(Be), n = Be[d], a.removeChild(Be), l.position = "absolute", f && _ && ((s = fa(a)).time = Rt.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)))
	}

	function be(t, e, r, i) {
		if (!r || "none" === r) {
			var n = mr(e, t, 1),
				a = n && Pd(t, n, 1);
			a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Pd(t, "borderTopColor"))
		}
		var s, o, u, h, l, f, c, d, p, _, m, g = new _e(this._pt, t.style, e, 0, 1, ue),
			v = 0,
			y = 0;
		if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Pd(t, e) || i, t.style[e] = r), Fb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
			for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || q.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = _d(t, e, f, _) || 0), g._pt = {
				_next: g._pt,
				p: p || 1 === y ? p : ",",
				s: h,
				c: d - h,
				m: l && l < 4 || "zIndex" === e ? Math.round : 0
			});
			g.c = v < i.length ? i.substring(v, i.length) : ""
		} else g.r = "display" === e && "none" === i ? Ad : zd;
		return nt.test(i) && (g.e = 0), this._pt = g
	}

	function de(t) {
		var e = t.split(" "),
			r = e[0],
			i = e[1] || "50%";
		return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Tr[r] || r, e[1] = Tr[i] || i, e.join(" ")
	}

	function ee(t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var r, i, n, a = e.t,
				s = a.style,
				o = e.u,
				u = a._gsap;
			if ("all" === o || !0 === o) s.cssText = "", i = 1;
			else
				for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], ar[r] && (i = 1, r = "transformOrigin" === r ? pr : dr), Xd(a, r);
			i && (Xd(a, dr), u && (u.svg && a.removeAttribute("transform"), kr(a, 1), u.uncache = 1, Kd(s)))
		}
	}

	function ie(t) {
		return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
	}

	function je(t) {
		var e = Pd(t, dr);
		return ie(e) ? wr : e.substr(7).match(et).map(ia)
	}

	function ke(t, e) {
		var r, i, n, a, s = t._gsap || fa(t),
			o = t.style,
			u = je(t);
		return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? wr : u : (u !== wr || t.offsetParent || t === Re || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, Re.appendChild(t)), u = je(t), n ? o.display = n : Xd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
	}

	function le(t, e, r, i, n, a) {
		var s, o, u, h = t._gsap,
			l = n || ke(t, !0),
			f = h.xOrigin || 0,
			c = h.yOrigin || 0,
			d = h.xOffset || 0,
			p = h.yOffset || 0,
			_ = l[0],
			m = l[1],
			g = l[2],
			v = l[3],
			y = l[4],
			T = l[5],
			b = e.split(" "),
			w = parseFloat(b[0]) || 0,
			x = parseFloat(b[1]) || 0;
		r ? l !== wr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Vd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[pr] = "0px 0px", a && (Yd(a, h, "xOrigin", f, w), Yd(a, h, "yOrigin", c, x), Yd(a, h, "xOffset", d, h.xOffset), Yd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
	}

	function oe(t, e, r) {
		var i = Ya(e);
		return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i
	}

	function ve(t, e, i, n, a) {
		var s, o, u = 360,
			h = r(a),
			l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n,
			f = n + l + "deg";
		return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new _e(t._pt, e, i, n, l, wd), o.e = f, o.u = "deg", t._props.push(i), o
	}

	function we(t, e) {
		for (var r in e) t[r] = e[r];
		return t
	}

	function xe(t, e, r) {
		var i, n, a, s, o, u, h, l = we({}, r._gsap),
			f = r.style;
		for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[dr] = e, i = kr(r, 1), Xd(r, dr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[dr], f[dr] = e, i = kr(r, 1), f[dr] = a), ar)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new _e(t._pt, i, n, o, u - o, vd), t._pt.u = h || 0, t._props.push(n));
		we(i, l)
	}
	var De, ze, Re, Fe, Be, Le, Ie, Ye, qe = Bt.Power0,
		Ve = Bt.Power1,
		Ue = Bt.Power2,
		Xe = Bt.Power3,
		Ne = Bt.Power4,
		We = Bt.Linear,
		Qe = Bt.Quad,
		Ge = Bt.Cubic,
		Ke = Bt.Quart,
		Je = Bt.Quint,
		He = Bt.Strong,
		Ze = Bt.Elastic,
		$e = Bt.Back,
		tr = Bt.SteppedEase,
		er = Bt.Bounce,
		rr = Bt.Sine,
		ir = Bt.Expo,
		nr = Bt.Circ,
		ar = {},
		sr = 180 / Math.PI,
		or = Math.PI / 180,
		ur = Math.atan2,
		hr = /([A-Z])/g,
		lr = /(left|right|width|margin|padding|x)/i,
		fr = /[\s,\(]\S/,
		cr = {
			autoAlpha: "opacity,visibility",
			scale: "scaleX,scaleY",
			alpha: "opacity"
		},
		dr = "transform",
		pr = dr + "Origin",
		_r = "O,Moz,ms,Ms,Webkit".split(","),
		mr = function _checkPropPrefix(t, e, r) {
			var i = (e || Be).style,
				n = 5;
			if (t in i && !r) return t;
			for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(_r[n] + t in i););
			return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t
		},
		gr = {
			deg: 1,
			rad: 1,
			turn: 1
		},
		vr = {
			grid: 1,
			flex: 1
		},
		yr = function _get(t, e, r, i) {
			var n;
			return Fe || Sd(), e in cr && "transform" !== e && ~(e = cr[e]).indexOf(",") && (e = e.split(",")[0]), ar[e] && "transform" !== e ? (n = kr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Mr(Pd(t, pr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = br[e] && br[e](t, e, r) || Pd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n
		},
		Tr = {
			top: "0%",
			bottom: "100%",
			left: "0%",
			right: "100%",
			center: "50%"
		},
		br = {
			clearProps: function clearProps(t, e, r, i, n) {
				if ("isFromStart" !== n.data) {
					var a = t._pt = new _e(t._pt, e, r, 0, 0, ee);
					return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
				}
			}
		},
		wr = [1, 0, 0, 1, 0, 0],
		xr = {},
		kr = function _parseTransform(t, e) {
			var r = t._gsap || new Vt(t);
			if ("x" in r && !e && !r.uncache) return r;
			var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, k, M, O, P, A, C, S, E, D, z, R, F = t.style,
				B = r.scaleX < 0,
				L = "deg",
				I = getComputedStyle(t),
				Y = Pd(t, pr) || "0";
			return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Wd(t)), I.translate && ("none" === I.translate && "none" === I.scale && "none" === I.rotate || (F[dr] = ("none" !== I.translate ? "translate3d(" + (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") + ("none" !== I.scale ? "scale(" + I.scale.split(" ").join(",") + ") " : "") + ("none" !== I[dr] ? I[dr] : "")), F.scale = F.rotate = F.translate = "none"), m = ke(t, r.svg), r.svg && (O = r.uncache ? (P = t.getBBox(), Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), le(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== wr && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? ur(b, T) * sr : 0, (f = w || x ? ur(w, x) * sr + u : 0) && (o *= Math.abs(Math.cos(f * or))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], D = m[7], C = m[8], S = m[9], E = m[10], z = m[11], i = m[12], n = m[13], a = m[14], h = (g = ur(R, E)) * sr, g && (O = k * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), P = M * v + S * y, A = R * v + E * y, C = k * -y + C * v, S = M * -y + S * v, E = R * -y + E * v, z = D * -y + z * v, k = O, M = P, R = A), l = (g = ur(-w, E)) * sr, g && (v = Math.cos(-g), z = x * (y = Math.sin(-g)) + z * v, T = O = T * v - C * y, b = P = b * v - S * y, w = A = w * v - E * y), u = (g = ur(b, T)) * sr, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = O, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(M * M + R * R)), g = ur(k, M), f = 2e-4 < Math.abs(g) ? g * sr : 0, d = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, dr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + L, r.rotationX = ia(h) + L, r.rotationY = ia(l) + L, r.skewX = f + L, r.skewY = c + L, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[pr] = Mr(Y)), r.xOffset = r.yOffset = 0, r.force3D = q.force3D, r.renderTransform = r.svg ? Er : Ye ? Sr : Or, r.uncache = 0, r
		},
		Mr = function _firstTwoOnly(t) {
			return (t = t.split(" "))[0] + " " + t[1]
		},
		Or = function _renderNon3DTransforms(t, e) {
			e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Sr(t, e)
		},
		Pr = "0deg",
		Ar = "0px",
		Cr = ") ",
		Sr = function _renderCSSTransforms(t, e) {
			var r = e || this,
				i = r.xPercent,
				n = r.yPercent,
				a = r.x,
				s = r.y,
				o = r.z,
				u = r.rotation,
				h = r.rotationY,
				l = r.rotationX,
				f = r.skewX,
				c = r.skewY,
				d = r.scaleX,
				p = r.scaleY,
				_ = r.transformPerspective,
				m = r.force3D,
				g = r.target,
				v = r.zOrigin,
				y = "",
				T = "auto" === m && t && 1 !== t || !0 === m;
			if (v && (l !== Pr || h !== Pr)) {
				var b, w = parseFloat(h) * or,
					x = Math.sin(w),
					k = Math.cos(w);
				w = parseFloat(l) * or, b = Math.cos(w), a = oe(g, a, x * b * -v), s = oe(g, s, -Math.sin(w) * -v), o = oe(g, o, k * b * -v + v)
			}
			_ !== Ar && (y += "perspective(" + _ + Cr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ar && s === Ar && o === Ar || (y += o !== Ar || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Cr), u !== Pr && (y += "rotate(" + u + Cr), h !== Pr && (y += "rotateY(" + h + Cr), l !== Pr && (y += "rotateX(" + l + Cr), f === Pr && c === Pr || (y += "skew(" + f + ", " + c + Cr), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Cr), g.style[dr] = y || "translate(0, 0)"
		},
		Er = function _renderSVGTransforms(t, e) {
			var r, i, n, a, s, o = e || this,
				u = o.xPercent,
				h = o.yPercent,
				l = o.x,
				f = o.y,
				c = o.rotation,
				d = o.skewX,
				p = o.skewY,
				_ = o.scaleX,
				m = o.scaleY,
				g = o.target,
				v = o.xOrigin,
				y = o.yOrigin,
				T = o.xOffset,
				b = o.yOffset,
				w = o.forceCSS,
				x = parseFloat(l),
				k = parseFloat(f);
			c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= or, d *= or, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= or, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = _d(g, "x", l, "px"), k = _d(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), k = ia(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), k = ia(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[dr] = s)
		};
	ha("padding,margin,Width,Radius", function(e, r) {
		var t = "Right",
			i = "Bottom",
			n = "Left",
			o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
				return r < 2 ? e + t : "border" + t + e
			});
		br[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
			var a, s;
			if (arguments.length < 4) return a = o.map(function(t) {
				return yr(e, t, r)
			}), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
			a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
				return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
			}), e.init(t, s, n)
		}
	});
	var Dr, zr, Rr, Fr = {
		name: "css",
		register: Sd,
		targetTest: function targetTest(t) {
			return t.style && t.nodeType
		},
		init: function init(t, e, i, n, a) {
			var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
				x = t.style,
				k = i.vars.startAt;
			for (c in Fe || Sd(), this.styles = this.styles || Md(t), b = this.styles.props, this.tween = i, e)
				if ("autoRound" !== c && (o = e[c], !pt[c] || !ac(c, e, i, n, t, a)))
					if (l = typeof o, f = br[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);
					else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Dt.lastIndex = 0, Dt.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = _d(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);
			else if ("undefined" !== l) {
				if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += q.units[c] || Ya(yr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = yr(t, c))) : s = yr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in cr && ("autoAlpha" === c && (1 === h && "hidden" === yr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Yd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = cr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in ar)
					if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || kr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new _e(this._pt, x, dr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new _e(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, vd), this._pt.u = 0, w.push("scaleY", c), c += "X";
					else {
						if ("transformOrigin" === c) {
							b.push(pr, 0, x[pr]), o = de(o), v.svg ? le(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p), Yd(this, x, c, Mr(s), Mr(o)));
							continue
						}
						if ("svgOrigin" === c) {
							le(t, o, 1, y, 0, this);
							continue
						}
						if (c in xr) {
							ve(this, v, c, h, _ ? ka(h, _ + o) : o);
							continue
						}
						if ("smoothOrigin" === c) {
							Yd(this, v, "smooth", v.smooth, o);
							continue
						}
						if ("force3D" === c) {
							v[c] = o;
							continue
						}
						if ("transform" === c) {
							xe(this, o, t);
							continue
						}
					}
				else c in x || (c = mr(c) || c);
				if (m || (u || 0 === u) && (h || 0 === h) && !fr.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in q.units ? q.units[c] : d)) && (h = _d(t, c, s, p)), this._pt = new _e(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? vd : yd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = xd);
				else if (c in x) be.call(this, t, c, s, _ ? _ + o : o);
				else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
				else if ("parseTransform" !== c) {
					Q(c, o);
					continue
				}
				m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c)
			}
			T && pe(this)
		},
		render: function render(t, e) {
			if (e.tween._time || !Ie())
				for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
			else e.styles.revert()
		},
		get: yr,
		aliases: cr,
		getSetter: function getSetter(t, e, r) {
			var i = cr[e];
			return i && i.indexOf(",") < 0 && (e = i), e in ar && e !== pr && (t._gsap.x || yr(t, "x")) ? r && Le === r ? "scale" === e ? Ed : Dd : (Le = r || {}) && ("scale" === e ? Fd : Gd) : t.style && !u(t.style[e]) ? Bd : ~e.indexOf("-") ? Cd : ne(t, e)
		},
		core: {
			_removeProperty: Xd,
			_getMatrix: ke
		}
	};
	Ee.utils.checkPrefix = mr, Ee.core.getStyleSaver = Md, Rr = ha((Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (zr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
		ar[t] = 1
	}), ha(zr, function(t) {
		q.units[t] = "deg", xr[t] = 1
	}), cr[Rr[13]] = Dr + "," + zr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
		var e = t.split(":");
		cr[e[1]] = Rr[e[0]]
	}), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
		q.units[t] = "px"
	}), Ee.registerPlugin(Fr);
	var Br = Ee.registerPlugin(Fr) || Ee,
		Lr = Br.core.Tween;
	e.Back = $e, e.Bounce = er, e.CSSPlugin = Fr, e.Circ = nr, e.Cubic = Ge, e.Elastic = Ze, e.Expo = ir, e.Linear = We, e.Power0 = qe, e.Power1 = Ve, e.Power2 = Ue, e.Power3 = Xe, e.Power4 = Ne, e.Quad = Qe, e.Quart = Ke, e.Quint = Je, e.Sine = rr, e.SteppedEase = tr, e.Strong = He, e.TimelineLite = Xt, e.TimelineMax = Xt, e.TweenLite = Zt, e.TweenMax = Lr, e.default = Br, e.gsap = Br;
	if (typeof(window) === "undefined" || window !== e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	} else {
		delete e.default
	}
});

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-csstransforms3d-mediaqueries-touchevents-setclasses !*/
! function(e, n, t) {
	function r(e) {
		var n = _.className,
			t = Modernizr._config.classPrefix || "";
		if (b && (n = n.baseVal), Modernizr._config.enableJSClass) {
			var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
			n = n.replace(r, "$1" + t + "js$2")
		}
		Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), b ? _.className.baseVal = n : _.className = n)
	}

	function o(e, n) {
		return typeof e === n
	}

	function s() {
		var e, n, t, r, s, i, a;
		for (var u in S)
			if (S.hasOwnProperty(u)) {
				if (e = [], n = S[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
					for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
				for (r = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), C.push((r ? "" : "no-") + a.join("-"))
			}
	}

	function i(e) {
		return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
			return n + t.toUpperCase()
		}).replace(/^-/, "")
	}

	function a() {
		return "function" != typeof n.createElement ? n.createElement(arguments[0]) : b ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
	}

	function u() {
		var e = n.body;
		return e || (e = a(b ? "svg" : "body"), e.fake = !0), e
	}

	function l(e, t, r, o) {
		var s, i, l, f, c = "modernizr",
			d = a("div"),
			p = u();
		if (parseInt(r, 10))
			for (; r--;) l = a("div"), l.id = o ? o[r] : c + (r + 1), d.appendChild(l);
		return s = a("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), i = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!i
	}

	function f(e, n) {
		return !!~("" + e).indexOf(n)
	}

	function c(e, n) {
		return function() {
			return e.apply(n, arguments)
		}
	}

	function d(e, n, t) {
		var r;
		for (var s in e)
			if (e[s] in n) return t === !1 ? e[s] : (r = n[e[s]], o(r, "function") ? c(r, t || n) : r);
		return !1
	}

	function p(n, t, r) {
		var o;
		if ("getComputedStyle" in e) {
			o = getComputedStyle.call(e, n, t);
			var s = e.console;
			if (null !== o) r && (o = o.getPropertyValue(r));
			else if (s) {
				var i = s.error ? "error" : "log";
				s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
			}
		} else o = !t && n.currentStyle && n.currentStyle[r];
		return o
	}

	function m(e) {
		return e.replace(/([A-Z])/g, function(e, n) {
			return "-" + n.toLowerCase()
		}).replace(/^ms-/, "-ms-")
	}

	function v(n, r) {
		var o = n.length;
		if ("CSS" in e && "supports" in e.CSS) {
			for (; o--;)
				if (e.CSS.supports(m(n[o]), r)) return !0;
			return !1
		}
		if ("CSSSupportsRule" in e) {
			for (var s = []; o--;) s.push("(" + m(n[o]) + ":" + r + ")");
			return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
				return "absolute" == p(e, null, "position")
			})
		}
		return t
	}

	function h(e, n, r, s) {
		function u() {
			c && (delete L.style, delete L.modElem)
		}
		if (s = o(s, "undefined") ? !1 : s, !o(r, "undefined")) {
			var l = v(e, r);
			if (!o(l, "undefined")) return l
		}
		for (var c, d, p, m, h, y = ["modernizr", "tspan", "samp"]; !L.style && y.length;) c = !0, L.modElem = a(y.shift()), L.style = L.modElem.style;
		for (p = e.length, d = 0; p > d; d++)
			if (m = e[d], h = L.style[m], f(m, "-") && (m = i(m)), L.style[m] !== t) {
				if (s || o(r, "undefined")) return u(), "pfx" == n ? m : !0;
				try {
					L.style[m] = r
				} catch (g) {}
				if (L.style[m] != h) return u(), "pfx" == n ? m : !0
			} return u(), !1
	}

	function y(e, n, t, r, s) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			a = (e + " " + j.join(i + " ") + i).split(" ");
		return o(n, "string") || o(n, "undefined") ? h(a, n, r, s) : (a = (e + " " + N.join(i + " ") + i).split(" "), d(a, n, t))
	}

	function g(e, n, r) {
		return y(e, t, t, n, r)
	}
	var C = [],
		S = [],
		x = {
			_version: "3.6.0",
			_config: {
				classPrefix: "",
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0
			},
			_q: [],
			on: function(e, n) {
				var t = this;
				setTimeout(function() {
					n(t[e])
				}, 0)
			},
			addTest: function(e, n, t) {
				S.push({
					name: e,
					fn: n,
					options: t
				})
			},
			addAsyncTest: function(e) {
				S.push({
					name: null,
					fn: e
				})
			}
		},
		Modernizr = function() {};
	Modernizr.prototype = x, Modernizr = new Modernizr;
	var _ = n.documentElement,
		b = "svg" === _.nodeName.toLowerCase(),
		w = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
	x._prefixes = w;
	var T = "CSS" in e && "supports" in e.CSS,
		z = "supportsCSS" in e;
	Modernizr.addTest("supports", T || z);
	var P = x.testStyles = l;
	Modernizr.addTest("touchevents", function() {
		var t;
		if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
		else {
			var r = ["@media (", w.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
			P(r, function(e) {
				t = 9 === e.offsetTop
			})
		}
		return t
	});
	var E = "Moz O ms Webkit",
		j = x._config.usePrefixes ? E.split(" ") : [];
	x._cssomPrefixes = j;
	var k = function(n) {
		var r, o = w.length,
			s = e.CSSRule;
		if ("undefined" == typeof s) return t;
		if (!n) return !1;
		if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in s) return "@" + n;
		for (var i = 0; o > i; i++) {
			var a = w[i],
				u = a.toUpperCase() + "_" + r;
			if (u in s) return "@-" + a.toLowerCase() + "-" + n
		}
		return !1
	};
	x.atRule = k;
	var N = x._config.usePrefixes ? E.toLowerCase().split(" ") : [];
	x._domPrefixes = N;
	var q = {
		elem: a("modernizr")
	};
	Modernizr._q.push(function() {
		delete q.elem
	});
	var L = {
		style: q.elem.style
	};
	Modernizr._q.unshift(function() {
		delete L.style
	}), x.testAllProps = y;
	var A = x.prefixed = function(e, n, t) {
		return 0 === e.indexOf("@") ? k(e) : (-1 != e.indexOf("-") && (e = i(e)), n ? y(e, n, t) : y(e, "pfx"))
	};
	Modernizr.addTest("backgroundblendmode", A("backgroundBlendMode", "text")), x.testAllProps = g, Modernizr.addTest("csstransforms3d", function() {
		return !!g("perspective", "1px", !0)
	});
	var M = function() {
		var n = e.matchMedia || e.msMatchMedia;
		return n ? function(e) {
			var t = n(e);
			return t && t.matches || !1
		} : function(n) {
			var t = !1;
			return l("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
				t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
			}), t
		}
	}();
	x.mq = M, Modernizr.addTest("mediaqueries", M("only all")), s(), r(C), delete x.addTest, delete x.addAsyncTest;
	for (var O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
	e.Modernizr = Modernizr
}(window, document);
/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
	"use strict";
	var _ = function() {};
	_.version = "2.0.7", window.addEventListener("mousewheel", function() {});
	var P = "data-scrollmagic-pin-spacer";
	_.Controller = function(e) {
		var n, r, i = "REVERSE",
			t = "PAUSED",
			o = z.defaults,
			s = this,
			a = R.extend({}, o, e),
			l = [],
			c = !1,
			f = 0,
			u = t,
			d = !0,
			h = 0,
			p = !0,
			g = function() {
				0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval))
			},
			v = function() {
				return a.vertical ? R.get.scrollTop(a.container) : R.get.scrollLeft(a.container)
			},
			m = function() {
				return a.vertical ? R.get.height(a.container) : R.get.width(a.container)
			},
			w = this._setScrollPos = function(e) {
				a.vertical ? d ? window.scrollTo(R.get.scrollLeft(), e) : a.container.scrollTop = e : d ? window.scrollTo(e, R.get.scrollTop()) : a.container.scrollLeft = e
			},
			y = function() {
				if (p && c) {
					var e = R.type.Array(c) ? c : l.slice(0);
					c = !1;
					var t = f,
						n = (f = s.scrollPos()) - t;
					0 !== n && (u = 0 < n ? "FORWARD" : i), u === i && e.reverse(), e.forEach(function(e, t) {
						e.update(!0)
					})
				}
			},
			S = function() {
				n = R.rAF(y)
			},
			b = function(e) {
				"resize" == e.type && (h = m(), u = t), !0 !== c && (c = !0, S())
			},
			E = function() {
				if (!d && h != m()) {
					var t;
					try {
						t = new Event("resize", {
							bubbles: !1,
							cancelable: !1
						})
					} catch (e) {
						(t = document.createEvent("Event")).initEvent("resize", !1, !1)
					}
					a.container.dispatchEvent(t)
				}
				l.forEach(function(e, t) {
					e.refresh()
				}), g()
			};
		this._options = a;
		var x = function(e) {
			if (e.length <= 1) return e;
			var t = e.slice(0);
			return t.sort(function(e, t) {
				return e.scrollOffset() > t.scrollOffset() ? 1 : -1
			}), t
		};
		return this.addScene = function(e) {
				if (R.type.Array(e)) e.forEach(function(e, t) {
					s.addScene(e)
				});
				else if (e instanceof _.Scene)
					if (e.controller() !== s) e.addTo(s);
					else if (l.indexOf(e) < 0)
					for (var t in l.push(e), l = x(l), e.on("shift.controller_sort", function() {
							l = x(l)
						}), a.globalSceneOptions) e[t] && e[t].call(e, a.globalSceneOptions[t]);
				return s
			}, this.removeScene = function(e) {
				if (R.type.Array(e)) e.forEach(function(e, t) {
					s.removeScene(e)
				});
				else {
					var t = l.indexOf(e); - 1 < t && (e.off("shift.controller_sort"), l.splice(t, 1), e.remove())
				}
				return s
			}, this.updateScene = function(e, n) {
				return R.type.Array(e) ? e.forEach(function(e, t) {
					s.updateScene(e, n)
				}) : n ? e.update(!0) : !0 !== c && e instanceof _.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e), c = x(c), S()), s
			}, this.update = function(e) {
				return b({
					type: "resize"
				}), e && y(), s
			}, this.scrollTo = function(e, t) {
				if (R.type.Number(e)) w.call(a.container, e, t);
				else if (e instanceof _.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t);
				else if (R.type.Function(e)) w = e;
				else {
					var n = R.get.elements(e)[0];
					if (n) {
						for (; n.parentNode.hasAttribute(P);) n = n.parentNode;
						var r = a.vertical ? "top" : "left",
							i = R.get.offset(a.container),
							o = R.get.offset(n);
						d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t)
					}
				}
				return s
			}, this.scrollPos = function(e) {
				return arguments.length ? (R.type.Function(e) && (v = e), s) : v.call(s)
			}, this.info = function(e) {
				var t = {
					size: h,
					vertical: a.vertical,
					scrollPos: f,
					scrollDirection: u,
					container: a.container,
					isDocument: d
				};
				return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
			}, this.loglevel = function(e) {
				return s
			}, this.enabled = function(e) {
				return arguments.length ? (p != e && (p = !!e, s.updateScene(l, !0)), s) : p
			}, this.destroy = function(e) {
				window.clearTimeout(r);
				for (var t = l.length; t--;) l[t].destroy(e);
				return a.container.removeEventListener("resize", b), a.container.removeEventListener("scroll", b), R.cAF(n), null
			},
			function() {
				for (var e in a) o.hasOwnProperty(e) || delete a[e];
				if (a.container = R.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";
				(d = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), h = m(), a.container.addEventListener("resize", b), a.container.addEventListener("scroll", b);
				var t = parseInt(a.refreshInterval, 10);
				a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval, g()
			}(), s
	};
	var z = {
		defaults: {
			container: window,
			vertical: !0,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	_.Controller.addOption = function(e, t) {
		z.defaults[e] = t
	}, _.Controller.extend = function(e) {
		var t = this;
		_.Controller = function() {
			return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
		}, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller
	}, _.Scene = function(e) {
		var n, l, c = "BEFORE",
			f = "DURING",
			u = "AFTER",
			r = D.defaults,
			d = this,
			h = R.extend({}, r, e),
			p = c,
			g = 0,
			a = {
				start: 0,
				end: 0
			},
			v = 0,
			i = !0,
			s = {};
		this.on = function(e, i) {
			return R.type.Function(i) && (e = e.trim().split(" ")).forEach(function(e) {
				var t = e.split("."),
					n = t[0],
					r = t[1];
				"*" != n && (s[n] || (s[n] = []), s[n].push({
					namespace: r || "",
					callback: i
				}))
			}), d
		}, this.off = function(e, o) {
			return e && (e = e.trim().split(" ")).forEach(function(e, t) {
				var n = e.split("."),
					r = n[0],
					i = n[1] || "";
				("*" === r ? Object.keys(s) : [r]).forEach(function(e) {
					for (var t = s[e] || [], n = t.length; n--;) {
						var r = t[n];
						!r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1)
					}
					t.length || delete s[e]
				})
			}), d
		}, this.trigger = function(e, n) {
			if (e) {
				var t = e.trim().split("."),
					r = t[0],
					i = t[1],
					o = s[r];
				o && o.forEach(function(e, t) {
					i && i !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n))
				})
			}
			return d
		}, d.on("change.internal", function(e) {
			"loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update())
		}).on("shift.internal", function(e) {
			t(), d.update()
		}), this.addTo = function(e) {
			return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), o(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
				controller: l
			}), d.update()), d
		}, this.enabled = function(e) {
			return arguments.length ? (i != e && (i = !!e, d.update(!0)), d) : i
		}, this.remove = function() {
			if (l) {
				l.info("container").removeEventListener("resize", S);
				var e = l;
				l = void 0, e.removeScene(d), d.trigger("remove")
			}
			return d
		}, this.destroy = function(e) {
			return d.trigger("destroy", {
				reset: e
			}), d.remove(), d.off("*.*"), null
		}, this.update = function(e) {
			if (l)
				if (e)
					if (l.enabled() && i) {
						var t, n = l.info("scrollPos");
						t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, d.trigger("update", {
							startPos: a.start,
							endPos: a.end,
							scrollPos: n
						}), d.progress(t)
					} else m && p === f && C(!0);
			else l.updateScene(d, !1);
			return d
		}, this.refresh = function() {
			return o(), y(), d
		}, this.progress = function(e) {
			if (arguments.length) {
				var t = !1,
					n = p,
					r = l ? l.info("scrollDirection") : "PAUSED",
					i = h.reverse || g <= e;
				if (0 === h.duration ? (t = g != e, p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f) : e < 0 && p !== c && i ? (p = c, t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e, p = f, t = !0) : 1 <= e && p !== u ? (g = 1, p = u, t = !0) : p !== f || i || C(), t) {
					var o = {
							progress: g,
							state: p,
							scrollDirection: r
						},
						s = p != n,
						a = function(e) {
							d.trigger(e, o)
						};
					s && n !== f && (a("enter"), a(n === c ? "start" : "end")), a("progress"), s && p !== f && (a(p === c ? "start" : "end"), a("leave"))
				}
				return d
			}
			return g
		};
		var m, w, t = function() {
				a = {
					start: v + h.offset
				}, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration
			},
			o = function(e) {
				if (n) {
					var t = "duration";
					x(t, n.call(d)) && !e && (d.trigger("change", {
						what: t,
						newval: h[t]
					}), d.trigger("shift", {
						reason: t
					}))
				}
			},
			y = function(e) {
				var t = 0,
					n = h.triggerElement;
				if (l && (n || 0 < v)) {
					if (n)
						if (n.parentNode) {
							for (var r = l.info(), i = R.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) n = n.parentNode;
							var s = R.get.offset(n);
							r.isDocument || (i[o] -= l.scrollPos()), t = s[o] - i[o]
						} else d.triggerElement(void 0);
					var a = t != v;
					v = t, a && !e && d.trigger("shift", {
						reason: "triggerElementPosition"
					})
				}
			},
			S = function(e) {
				0 < h.triggerHook && d.trigger("shift", {
					reason: "containerResize"
				})
			},
			b = R.extend(D.validate, {
				duration: function(t) {
					if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
						var e = parseFloat(t) / 100;
						t = function() {
							return l ? l.info("size") * e : 0
						}
					}
					if (R.type.Function(t)) {
						n = t;
						try {
							t = parseFloat(n.call(d))
						} catch (e) {
							t = -1
						}
					}
					if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n && (n = void 0), 0;
					return t
				}
			}),
			E = function(e) {
				(e = arguments.length ? [e] : Object.keys(b)).forEach(function(t, e) {
					var n;
					if (b[t]) try {
						n = b[t](h[t])
					} catch (e) {
						n = r[t]
					} finally {
						h[t] = n
					}
				})
			},
			x = function(e, t) {
				var n = !1,
					r = h[e];
				return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n
			},
			z = function(t) {
				d[t] || (d[t] = function(e) {
					return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
						what: t,
						newval: h[t]
					}), -1 < D.shifts.indexOf(t) && d.trigger("shift", {
						reason: t
					})), d) : h[t]
				})
			};
		this.controller = function() {
			return l
		}, this.state = function() {
			return p
		}, this.scrollOffset = function() {
			return a.start
		}, this.triggerPosition = function() {
			var e = h.offset;
			return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e
		}, d.on("shift.internal", function(e) {
			var t = "duration" === e.reason;
			(p === u && t || p === f && 0 === h.duration) && C(), t && F()
		}).on("progress.internal", function(e) {
			C()
		}).on("add.internal", function(e) {
			F()
		}).on("destroy.internal", function(e) {
			d.removePin(e.reset)
		});
		var C = function(e) {
				if (m && l) {
					var t = l.info(),
						n = w.spacer.firstChild;
					if (e || p !== f) {
						var r = {
								position: w.inFlow ? "relative" : "absolute",
								top: 0,
								left: 0
							},
							i = R.css(n, "position") != r.position;
						w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) ? i = !0 : p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), i && F()
					} else {
						"fixed" != R.css(n, "position") && (R.css(n, {
							position: "fixed"
						}), F());
						var o = R.get.offset(w.spacer, !0),
							s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;
						o[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
							top: o.top,
							left: o.left
						})
					}
				}
			},
			F = function() {
				if (m && l && w.inFlow) {
					var e = p === f,
						t = l.info("vertical"),
						n = w.spacer.firstChild,
						r = R.isMarginCollapseType(R.css(w.spacer, "display")),
						i = {};
					w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
						width: R.get.width(w.spacer)
					}) : R.css(m, {
						width: "100%"
					}) : (i["min-width"] = R.get.width(t ? m : n, !0, !0), i.width = e ? i["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, {
						height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
					}) : R.css(m, {
						height: "100%"
					}) : (i["min-height"] = R.get.height(t ? n : m, !0, !r), i.height = e ? i["min-height"] : "auto"), w.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g, i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, i)
				}
			},
			L = function() {
				l && m && p === f && !l.info("isDocument") && C()
			},
			T = function() {
				l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && F()
			},
			A = function(e) {
				l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
			};
		this.setPin = function(e, t) {
			if (t = R.extend({}, {
					pushFollowers: !0,
					spacerClass: "scrollmagic-pin-spacer"
				}, t), !(e = R.get.elements(e)[0])) return d;
			if ("fixed" === R.css(e, "position")) return d;
			if (m) {
				if (m === e) return d;
				d.removePin()
			}
			var n = (m = e).parentNode.style.display,
				r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
			m.parentNode.style.display = "none";
			var i = "absolute" != R.css(m, "position"),
				o = R.css(m, r.concat(["display"])),
				s = R.css(m, ["width", "height"]);
			m.parentNode.style.display = n, !i && t.pushFollowers && (t.pushFollowers = !1);
			var a = m.parentNode.insertBefore(document.createElement("div"), m),
				l = R.extend(o, {
					position: i ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});
			if (i || R.extend(l, R.css(m, ["width", "height"])), R.css(a, l), a.setAttribute(P, ""), R.addClass(a, t.spacerClass), w = {
					spacer: a,
					relSize: {
						width: "%" === s.width.slice(-1),
						height: "%" === s.height.slice(-1),
						autoFullWidth: "auto" === s.width && i && R.isMarginCollapseType(o.display)
					},
					pushFollowers: t.pushFollowers,
					inFlow: i
				}, !m.___origStyle) {
				m.___origStyle = {};
				var c = m.style;
				r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
					m.___origStyle[e] = c[e] || ""
				})
			}
			return w.relSize.width && R.css(a, {
				width: s.width
			}), w.relSize.height && R.css(a, {
				height: s.height
			}), a.appendChild(m), R.css(m, {
				position: i ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			}), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
				boxSizing: "border-box",
				mozBoxSizing: "border-box",
				webkitBoxSizing: "border-box"
			}), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", T), m.addEventListener("mousewheel", A), m.addEventListener("DOMMouseScroll", A), C(), d
		}, this.removePin = function(e) {
			if (m) {
				if (p === f && C(!0), e || !l) {
					var t = w.spacer.firstChild;
					if (t.hasAttribute(P)) {
						var n = w.spacer.style,
							r = {};
						["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
							r[e] = n[e] || ""
						}), R.css(t, r)
					}
					w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle)
				}
				window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", T), m.removeEventListener("mousewheel", A), m.removeEventListener("DOMMouseScroll", A), m = void 0
			}
			return d
		};
		var N, O = [];
		return d.on("destroy.internal", function(e) {
				d.removeClassToggle(e.reset)
			}), this.setClassToggle = function(e, t) {
				var n = R.get.elements(e);
				return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function(e) {
					var n = "enter" === e.type ? R.addClass : R.removeClass;
					O.forEach(function(e, t) {
						n(e, N)
					})
				})), d
			}, this.removeClassToggle = function(e) {
				return e && O.forEach(function(e, t) {
					R.removeClass(e, N)
				}), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d
			},
			function() {
				for (var e in h) r.hasOwnProperty(e) || delete h[e];
				for (var t in r) z(t);
				E()
			}(), d
	};
	var D = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: void 0,
			triggerHook: .5,
			reverse: !0,
			loglevel: 2
		},
		validate: {
			offset: function(e) {
				if (e = parseFloat(e), !R.type.Number(e)) throw 0;
				return e
			},
			triggerElement: function(e) {
				if (e = e || void 0) {
					var t = R.get.elements(e)[0];
					if (!t || !t.parentNode) throw 0;
					e = t
				}
				return e
			},
			triggerHook: function(e) {
				var t = {
					onCenter: .5,
					onEnter: 1,
					onLeave: 0
				};
				if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
				else {
					if (!(e in t)) throw 0;
					e = t[e]
				}
				return e
			},
			reverse: function(e) {
				return !!e
			}
		},
		shifts: ["duration", "offset", "triggerHook"]
	};
	_.Scene.addOption = function(e, t, n, r) {
		e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e))
	}, _.Scene.extend = function(e) {
		var t = this;
		_.Scene = function() {
			return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
		}, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene
	}, _.Event = function(e, t, n, r) {
		for (var i in r = r || {}) this[i] = r[i];
		return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
	};
	var R = _._util = function(s) {
		var n, e = {},
			a = function(e) {
				return parseFloat(e) || 0
			},
			l = function(e) {
				return e.currentStyle ? e.currentStyle : s.getComputedStyle(e)
			},
			r = function(e, t, n, r) {
				if ((t = t === document ? s : t) === s) r = !1;
				else if (!u.DomElement(t)) return 0;
				e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
				var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
				if (n && r) {
					var o = l(t);
					i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)
				}
				return i
			},
			c = function(e) {
				return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
					return e[1].toUpperCase()
				})
			};
		e.extend = function(e) {
			for (e = e || {}, n = 1; n < arguments.length; n++)
				if (arguments[n])
					for (var t in arguments[n]) arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
			return e
		}, e.isMarginCollapseType = function(e) {
			return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
		};
		var i = 0,
			t = ["ms", "moz", "webkit", "o"],
			o = s.requestAnimationFrame,
			f = s.cancelAnimationFrame;
		for (n = 0; !o && n < 4; ++n) o = s[t[n] + "RequestAnimationFrame"], f = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
		o || (o = function(e) {
			var t = (new Date).getTime(),
				n = Math.max(0, 16 - (t - i)),
				r = s.setTimeout(function() {
					e(t + n)
				}, n);
			return i = t + n, r
		}), f || (f = function(e) {
			s.clearTimeout(e)
		}), e.rAF = o.bind(s), e.cAF = f.bind(s);
		var u = e.type = function(e) {
			return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
		};
		u.String = function(e) {
			return "string" === u(e)
		}, u.Function = function(e) {
			return "function" === u(e)
		}, u.Array = function(e) {
			return Array.isArray(e)
		}, u.Number = function(e) {
			return !u.Array(e) && 0 <= e - parseFloat(e) + 1
		}, u.DomElement = function(e) {
			return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
		};
		var d = e.get = {};
		return d.elements = function(e) {
			var t = [];
			if (u.String(e)) try {
				e = document.querySelectorAll(e)
			} catch (e) {
				return t
			}
			if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
				for (var n = 0, r = t.length = e.length; n < r; n++) {
					var i = e[n];
					t[n] = u.DomElement(i) ? i : d.elements(i)
				} else(u.DomElement(e) || e === document || e === s) && (t = [e]);
			return t
		}, d.scrollTop = function(e) {
			return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0
		}, d.scrollLeft = function(e) {
			return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0
		}, d.width = function(e, t, n) {
			return r("width", e, t, n)
		}, d.height = function(e, t, n) {
			return r("height", e, t, n)
		}, d.offset = function(e, t) {
			var n = {
				top: 0,
				left: 0
			};
			if (e && e.getBoundingClientRect) {
				var r = e.getBoundingClientRect();
				n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
			}
			return n
		}, e.addClass = function(e, t) {
			t && (e.classList ? e.classList.add(t) : e.className += " " + t)
		}, e.removeClass = function(e, t) {
			t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
		}, e.css = function(e, t) {
			if (u.String(t)) return l(e)[c(t)];
			if (u.Array(t)) {
				var n = {},
					r = l(e);
				return t.forEach(function(e, t) {
					n[e] = r[c(e)]
				}), n
			}
			for (var i in t) {
				var o = t[i];
				o == parseFloat(o) && (o += "px"), e.style[c(i)] = o
			}
		}, e
	}(window || {});
	return _
});


/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
! function(t, e) {
	"use strict";

	function r(r, a, i, u, l) {
		function f() {
			L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function() {
				s(!0)
			}, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function(t) {
				"resize" === t.type && (w = B = -1), s(t.all)
			}), u.a = function(t) {
				t = c(t), i.push.apply(i, t)
			}, u.g = function() {
				return i = n(i).filter(function() {
					return !n(this).data(a.loadedName)
				})
			}, u.f = function(t) {
				for (var e = 0; e < t.length; e++) {
					var r = i.filter(function() {
						return this === t[e]
					});
					r.length && s(!1, r)
				}
			}, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
		}

		function c(t) {
			var i = a.defaultImage,
				o = a.placeholder,
				u = a.imageBase,
				l = a.srcsetAttribute,
				f = a.loaderAttribute,
				c = a._f || {};
			t = n(t).filter(function() {
				var t = n(this),
					r = m(this);
				return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
			}).data("plugin_" + a.name, r);
			for (var s = 0, d = t.length; s < d; s++) {
				var A = n(t[s]),
					g = m(t[s]),
					h = A.attr(a.imageBaseAttribute) || u;
				g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
			}
			return t
		}

		function s(t, e) {
			if (!i.length) return void(a.autoDestroy && r.destroy());
			for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
				if (t || e || A(o[s])) {
					var g = n(o[s]),
						h = m(o[s]),
						b = g.attr(a.attribute),
						v = g.attr(a.imageBaseAttribute) || l,
						p = g.attr(a.loaderAttribute);
					g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
				} u && (i = n(i).filter(function() {
				return !n(this).data(c)
			}))
		}

		function d(t, e, r, i) {
			++z;
			var o = function() {
				y("onError", t), p(), o = n.noop
			};
			y("beforeLoad", t);
			var u = a.attribute,
				l = a.srcsetAttribute,
				f = a.sizesAttribute,
				c = a.retinaAttribute,
				s = a.removeAttribute,
				d = a.loadedName,
				A = t.attr(c);
			if (i) {
				var g = function() {
					s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
				};
				t.off(I).one(I, o).one(D, g), y(i, t, function(e) {
					e ? (t.off(D), g()) : (t.off(I), o())
				}) || t.trigger(I)
			} else {
				var h = n(new Image);
				h.one(I, o).one(D, function() {
					t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
				});
				var m = (L && A ? A : t.attr(u)) || "";
				h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
			}
		}

		function A(t) {
			var e = t.getBoundingClientRect(),
				r = a.scrollDirection,
				n = a.threshold,
				i = h() + n > e.top && -n < e.bottom,
				o = g() + n > e.left && -n < e.right;
			return "vertical" === r ? i : "horizontal" === r ? o : i && o
		}

		function g() {
			return w >= 0 ? w : w = n(t).width()
		}

		function h() {
			return B >= 0 ? B : B = n(t).height()
		}

		function m(t) {
			return t.tagName.toLowerCase()
		}

		function b(t, e) {
			if (e) {
				var r = t.split(",");
				t = "";
				for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
			}
			return t
		}

		function v(t, e) {
			var n, i = 0;
			return function(o, u) {
				function l() {
					i = +new Date, e.call(r, o)
				}
				var f = +new Date - i;
				n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
			}
		}

		function p() {
			--z, i.length || z || y("onFinishedAll")
		}

		function y(t, e, n) {
			return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
		}
		var z = 0,
			w = -1,
			B = -1,
			L = !1,
			T = "afterLoad",
			D = "load",
			I = "error",
			N = "img",
			E = "src",
			F = "srcset",
			C = "sizes",
			O = "background-image";
		"event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
	}

	function a(a, o) {
		var u = this,
			l = n.extend({}, u.config, o),
			f = {},
			c = l.name + "-" + ++i;
		return u.config = function(t, r) {
			return r === e ? l[t] : (l[t] = r, u)
		}, u.addItems = function(t) {
			return f.a && f.a("string" === n.type(t) ? n(t) : t), u
		}, u.getItems = function() {
			return f.g ? f.g() : {}
		}, u.update = function(t) {
			return f.e && f.e({}, !t), u
		}, u.force = function(t) {
			return f.f && f.f("string" === n.type(t) ? n(t) : t), u
		}, u.loadAll = function() {
			return f.e && f.e({
				all: !0
			}, !0), u
		}, u.destroy = function() {
			return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
		}, r(u, l, a, f, c), l.chainable ? a : u
	}
	var n = t.jQuery || t.Zepto,
		i = 0,
		o = !1;
	n.fn.Lazy = n.fn.lazy = function(t) {
		return new a(this, t)
	}, n.Lazy = n.lazy = function(t, r, i) {
		if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
			t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
			for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
			for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0]
		}
	}, a.prototype.config = {
		name: "lazy",
		chainable: !0,
		autoDestroy: !0,
		bind: "load",
		threshold: 500,
		visibleOnly: !1,
		appendScroll: t,
		scrollDirection: "both",
		imageBase: null,
		defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
		placeholder: null,
		delay: -1,
		combined: !1,
		attribute: "data-src",
		srcsetAttribute: "data-srcset",
		sizesAttribute: "data-sizes",
		retinaAttribute: "data-retina",
		loaderAttribute: "data-loader",
		imageBaseAttribute: "data-imagebase",
		removeAttribute: !0,
		handledName: "handled",
		loadedName: "loaded",
		effect: "show",
		effectTime: 0,
		enableThrottle: !0,
		throttle: 250,
		beforeLoad: e,
		afterLoad: e,
		onError: e,
		onFinishedAll: e
	}, n(t).on("load", function() {
		o = !0
	})
}(window);

/*! PhotoSwipe - v4.1.3 - 2019-01-08
 * http://photoswipe.com
 * Copyright (c) 2019 Dmitry Semenov; */


! function(t, n) {
	"object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Scrollbar = n() : t.Scrollbar = n()
}(window, (function() {
	return function(t) {
		var n = {};

		function e(r) {
			if (n[r]) return n[r].exports;
			var o = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
		}
		return e.m = t, e.c = n, e.d = function(t, n, r) {
			e.o(t, n) || Object.defineProperty(t, n, {
				enumerable: !0,
				get: r
			})
		}, e.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, e.t = function(t, n) {
			if (1 & n && (t = e(t)), 8 & n) return t;
			if (4 & n && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (e.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & n && "string" != typeof t)
				for (var o in t) e.d(r, o, function(n) {
					return t[n]
				}.bind(null, o));
			return r
		}, e.n = function(t) {
			var n = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return e.d(n, "a", n), n
		}, e.o = function(t, n) {
			return Object.prototype.hasOwnProperty.call(t, n)
		}, e.p = "", e(e.s = 58)
	}([function(t, n, e) {
		var r = e(25)("wks"),
			o = e(16),
			i = e(2).Symbol,
			u = "function" == typeof i;
		(t.exports = function(t) {
			return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
		}).store = r
	}, function(t, n) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		}
	}, function(t, n) {
		var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = e)
	}, function(t, n) {
		var e = t.exports = {
			version: "2.6.9"
		};
		"number" == typeof __e && (__e = e)
	}, function(t, n, e) {
		t.exports = !e(13)((function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(t, n, e) {
		var r = e(2),
			o = e(3),
			i = e(11),
			u = e(6),
			c = e(10),
			s = function(t, n, e) {
				var a, f, l, p, h = t & s.F,
					d = t & s.G,
					v = t & s.S,
					y = t & s.P,
					m = t & s.B,
					g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
					b = d ? o : o[n] || (o[n] = {}),
					x = b.prototype || (b.prototype = {});
				for (a in d && (e = n), e) l = ((f = !h && g && void 0 !== g[a]) ? g : e)[a], p = m && f ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, a, l, t & s.U), b[a] != l && i(b, a, p), y && x[a] != l && (x[a] = l)
			};
		r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
	}, function(t, n, e) {
		var r = e(2),
			o = e(11),
			i = e(9),
			u = e(16)("src"),
			c = e(60),
			s = ("" + c).split("toString");
		e(3).inspectSource = function(t) {
			return c.call(t)
		}, (t.exports = function(t, n, e, c) {
			var a = "function" == typeof e;
			a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)))
		})(Function.prototype, "toString", (function() {
			return "function" == typeof this && this[u] || c.call(this)
		}))
	}, function(t, n, e) {
		var r = e(8),
			o = e(41),
			i = e(43),
			u = Object.defineProperty;
		n.f = e(4) ? Object.defineProperty : function(t, n, e) {
			if (r(t), n = i(n, !0), r(e), o) try {
				return u(t, n, e)
			} catch (t) {}
			if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
			return "value" in e && (t[n] = e.value), t
		}
	}, function(t, n, e) {
		var r = e(1);
		t.exports = function(t) {
			if (!r(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, n) {
		var e = {}.hasOwnProperty;
		t.exports = function(t, n) {
			return e.call(t, n)
		}
	}, function(t, n, e) {
		var r = e(44);
		t.exports = function(t, n, e) {
			if (r(t), void 0 === n) return t;
			switch (e) {
				case 1:
					return function(e) {
						return t.call(n, e)
					};
				case 2:
					return function(e, r) {
						return t.call(n, e, r)
					};
				case 3:
					return function(e, r, o) {
						return t.call(n, e, r, o)
					}
			}
			return function() {
				return t.apply(n, arguments)
			}
		}
	}, function(t, n, e) {
		var r = e(7),
			o = e(17);
		t.exports = e(4) ? function(t, n, e) {
			return r.f(t, n, o(1, e))
		} : function(t, n, e) {
			return t[n] = e, t
		}
	}, function(t, n, e) {
		var r = e(1);
		t.exports = function(t, n) {
			if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
			return t
		}
	}, function(t, n) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		}
	}, function(t, n) {
		t.exports = {}
	}, function(t, n, e) {
		var r = e(10),
			o = e(49),
			i = e(50),
			u = e(8),
			c = e(19),
			s = e(51),
			a = {},
			f = {};
		(n = t.exports = function(t, n, e, l, p) {
			var h, d, v, y, m = p ? function() {
					return t
				} : s(t),
				g = r(e, l, n ? 2 : 1),
				b = 0;
			if ("function" != typeof m) throw TypeError(t + " is not iterable!");
			if (i(m)) {
				for (h = c(t.length); h > b; b++)
					if ((y = n ? g(u(d = t[b])[0], d[1]) : g(t[b])) === a || y === f) return y
			} else
				for (v = m.call(t); !(d = v.next()).done;)
					if ((y = o(v, g, d.value, n)) === a || y === f) return y
		}).BREAK = a, n.RETURN = f
	}, function(t, n) {
		var e = 0,
			r = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
		}
	}, function(t, n) {
		t.exports = function(t, n) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: n
			}
		}
	}, function(t, n, e) {
		var r = e(31),
			o = e(28);
		t.exports = function(t) {
			return r(o(t))
		}
	}, function(t, n, e) {
		var r = e(27),
			o = Math.min;
		t.exports = function(t) {
			return t > 0 ? o(r(t), 9007199254740991) : 0
		}
	}, function(t, n, e) {
		var r = e(28);
		t.exports = function(t) {
			return Object(r(t))
		}
	}, function(t, n, e) {
		var r = e(16)("meta"),
			o = e(1),
			i = e(9),
			u = e(7).f,
			c = 0,
			s = Object.isExtensible || function() {
				return !0
			},
			a = !e(13)((function() {
				return s(Object.preventExtensions({}))
			})),
			f = function(t) {
				u(t, r, {
					value: {
						i: "O" + ++c,
						w: {}
					}
				})
			},
			l = t.exports = {
				KEY: r,
				NEED: !1,
				fastKey: function(t, n) {
					if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
					if (!i(t, r)) {
						if (!s(t)) return "F";
						if (!n) return "E";
						f(t)
					}
					return t[r].i
				},
				getWeak: function(t, n) {
					if (!i(t, r)) {
						if (!s(t)) return !0;
						if (!n) return !1;
						f(t)
					}
					return t[r].w
				},
				onFreeze: function(t) {
					return a && l.NEED && s(t) && !i(t, r) && f(t), t
				}
			}
	}, function(t, n, e) {
		"use strict";
		var r = e(23),
			o = {};
		o[e(0)("toStringTag")] = "z", o + "" != "[object z]" && e(6)(Object.prototype, "toString", (function() {
			return "[object " + r(this) + "]"
		}), !0)
	}, function(t, n, e) {
		var r = e(24),
			o = e(0)("toStringTag"),
			i = "Arguments" == r(function() {
				return arguments
			}());
		t.exports = function(t) {
			var n, e, u;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
				try {
					return t[n]
				} catch (t) {}
			}(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
		}
	}, function(t, n) {
		var e = {}.toString;
		t.exports = function(t) {
			return e.call(t).slice(8, -1)
		}
	}, function(t, n, e) {
		var r = e(3),
			o = e(2),
			i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
		(t.exports = function(t, n) {
			return i[t] || (i[t] = void 0 !== n ? n : {})
		})("versions", []).push({
			version: r.version,
			mode: e(40) ? "pure" : "global",
			copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(61)(!0);
		e(29)(String, "String", (function(t) {
			this._t = String(t), this._i = 0
		}), (function() {
			var t, n = this._t,
				e = this._i;
			return e >= n.length ? {
				value: void 0,
				done: !0
			} : (t = r(n, e), this._i += t.length, {
				value: t,
				done: !1
			})
		}))
	}, function(t, n) {
		var e = Math.ceil,
			r = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
		}
	}, function(t, n) {
		t.exports = function(t) {
			if (null == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(40),
			o = e(5),
			i = e(6),
			u = e(11),
			c = e(14),
			s = e(62),
			a = e(33),
			f = e(68),
			l = e(0)("iterator"),
			p = !([].keys && "next" in [].keys()),
			h = function() {
				return this
			};
		t.exports = function(t, n, e, d, v, y, m) {
			s(e, n, d);
			var g, b, x, _ = function(t) {
					if (!p && t in O) return O[t];
					switch (t) {
						case "keys":
						case "values":
							return function() {
								return new e(this, t)
							}
					}
					return function() {
						return new e(this, t)
					}
				},
				w = n + " Iterator",
				E = "values" == v,
				S = !1,
				O = t.prototype,
				T = O[l] || O["@@iterator"] || v && O[v],
				A = T || _(v),
				M = v ? E ? _("entries") : A : void 0,
				P = "Array" == n && O.entries || T;
			if (P && (x = f(P.call(new t))) !== Object.prototype && x.next && (a(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)), E && T && "values" !== T.name && (S = !0, A = function() {
					return T.call(this)
				}), r && !m || !p && !S && O[l] || u(O, l, A), c[n] = A, c[w] = h, v)
				if (g = {
						values: E ? A : _("values"),
						keys: y ? A : _("keys"),
						entries: M
					}, m)
					for (b in g) b in O || i(O, b, g[b]);
				else o(o.P + o.F * (p || S), n, g);
			return g
		}
	}, function(t, n, e) {
		var r = e(64),
			o = e(46);
		t.exports = Object.keys || function(t) {
			return r(t, o)
		}
	}, function(t, n, e) {
		var r = e(24);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == r(t) ? t.split("") : Object(t)
		}
	}, function(t, n, e) {
		var r = e(25)("keys"),
			o = e(16);
		t.exports = function(t) {
			return r[t] || (r[t] = o(t))
		}
	}, function(t, n, e) {
		var r = e(7).f,
			o = e(9),
			i = e(0)("toStringTag");
		t.exports = function(t, n, e) {
			t && !o(t = e ? t : t.prototype, i) && r(t, i, {
				configurable: !0,
				value: n
			})
		}
	}, function(t, n, e) {
		for (var r = e(69), o = e(30), i = e(6), u = e(2), c = e(11), s = e(14), a = e(0), f = a("iterator"), l = a("toStringTag"), p = s.Array, h = {
				CSSRuleList: !0,
				CSSStyleDeclaration: !1,
				CSSValueList: !1,
				ClientRectList: !1,
				DOMRectList: !1,
				DOMStringList: !1,
				DOMTokenList: !0,
				DataTransferItemList: !1,
				FileList: !1,
				HTMLAllCollection: !1,
				HTMLCollection: !1,
				HTMLFormElement: !1,
				HTMLSelectElement: !1,
				MediaList: !0,
				MimeTypeArray: !1,
				NamedNodeMap: !1,
				NodeList: !0,
				PaintRequestList: !1,
				Plugin: !1,
				PluginArray: !1,
				SVGLengthList: !1,
				SVGNumberList: !1,
				SVGPathSegList: !1,
				SVGPointList: !1,
				SVGStringList: !1,
				SVGTransformList: !1,
				SourceBufferList: !1,
				StyleSheetList: !0,
				TextTrackCueList: !1,
				TextTrackList: !1,
				TouchList: !1
			}, d = o(h), v = 0; v < d.length; v++) {
			var y, m = d[v],
				g = h[m],
				b = u[m],
				x = b && b.prototype;
			if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), s[m] = p, g))
				for (y in r) x[y] || i(x, y, r[y], !0)
		}
	}, function(t, n, e) {
		var r = e(6);
		t.exports = function(t, n, e) {
			for (var o in n) r(t, o, n[o], e);
			return t
		}
	}, function(t, n) {
		t.exports = function(t, n, e, r) {
			if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(2),
			o = e(5),
			i = e(6),
			u = e(35),
			c = e(21),
			s = e(15),
			a = e(36),
			f = e(1),
			l = e(13),
			p = e(52),
			h = e(33),
			d = e(73);
		t.exports = function(t, n, e, v, y, m) {
			var g = r[t],
				b = g,
				x = y ? "set" : "add",
				_ = b && b.prototype,
				w = {},
				E = function(t) {
					var n = _[t];
					i(_, t, "delete" == t ? function(t) {
						return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t)
					} : "has" == t ? function(t) {
						return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t)
					} : "get" == t ? function(t) {
						return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
					} : "add" == t ? function(t) {
						return n.call(this, 0 === t ? 0 : t), this
					} : function(t, e) {
						return n.call(this, 0 === t ? 0 : t, e), this
					})
				};
			if ("function" == typeof b && (m || _.forEach && !l((function() {
					(new b).entries().next()
				})))) {
				var S = new b,
					O = S[x](m ? {} : -0, 1) != S,
					T = l((function() {
						S.has(1)
					})),
					A = p((function(t) {
						new b(t)
					})),
					M = !m && l((function() {
						for (var t = new b, n = 5; n--;) t[x](n, n);
						return !t.has(-0)
					}));
				A || ((b = n((function(n, e) {
					a(n, b, t);
					var r = d(new g, n, b);
					return null != e && s(e, y, r[x], r), r
				}))).prototype = _, _.constructor = b), (T || M) && (E("delete"), E("has"), y && E("get")), (M || O) && E(x), m && _.clear && delete _.clear
			} else b = v.getConstructor(n, t, y, x), u(b.prototype, e), c.NEED = !0;
			return h(b, t), w[t] = b, o(o.G + o.W + o.F * (b != g), w), m || v.setStrong(b, t, y), b
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(5);
		t.exports = function(t) {
			r(r.S, t, {
				of: function() {
					for (var t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
					return new this(n)
				}
			})
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(5),
			o = e(44),
			i = e(10),
			u = e(15);
		t.exports = function(t) {
			r(r.S, t, {
				from: function(t) {
					var n, e, r, c, s = arguments[1];
					return o(this), (n = void 0 !== s) && o(s), null == t ? new this : (e = [], n ? (r = 0, c = i(s, arguments[2], 2), u(t, !1, (function(t) {
						e.push(c(t, r++))
					}))) : u(t, !1, e.push, e), new this(e))
				}
			})
		}
	}, function(t, n) {
		t.exports = !1
	}, function(t, n, e) {
		t.exports = !e(4) && !e(13)((function() {
			return 7 != Object.defineProperty(e(42)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(t, n, e) {
		var r = e(1),
			o = e(2).document,
			i = r(o) && r(o.createElement);
		t.exports = function(t) {
			return i ? o.createElement(t) : {}
		}
	}, function(t, n, e) {
		var r = e(1);
		t.exports = function(t, n) {
			if (!r(t)) return t;
			var e, o;
			if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
			if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
			if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, n) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, n, e) {
		var r = e(8),
			o = e(63),
			i = e(46),
			u = e(32)("IE_PROTO"),
			c = function() {},
			s = function() {
				var t, n = e(42)("iframe"),
					r = i.length;
				for (n.style.display = "none", e(67).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
				return s()
			};
		t.exports = Object.create || function(t, n) {
			var e;
			return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = s(), void 0 === n ? e : o(e, n)
		}
	}, function(t, n) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(t, n) {
		t.exports = function(t, n) {
			return {
				value: n,
				done: !!t
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(7).f,
			o = e(45),
			i = e(35),
			u = e(10),
			c = e(36),
			s = e(15),
			a = e(29),
			f = e(47),
			l = e(72),
			p = e(4),
			h = e(21).fastKey,
			d = e(12),
			v = p ? "_s" : "size",
			y = function(t, n) {
				var e, r = h(n);
				if ("F" !== r) return t._i[r];
				for (e = t._f; e; e = e.n)
					if (e.k == n) return e
			};
		t.exports = {
			getConstructor: function(t, n, e, a) {
				var f = t((function(t, r) {
					c(t, f, n, "_i"), t._t = n, t._i = o(null), t._f = void 0, t._l = void 0, t[v] = 0, null != r && s(r, e, t[a], t)
				}));
				return i(f.prototype, {
					clear: function() {
						for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i];
						t._f = t._l = void 0, t[v] = 0
					},
					delete: function(t) {
						var e = d(this, n),
							r = y(e, t);
						if (r) {
							var o = r.n,
								i = r.p;
							delete e._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), e._f == r && (e._f = o), e._l == r && (e._l = i), e[v]--
						}
						return !!r
					},
					forEach: function(t) {
						d(this, n);
						for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
							for (r(e.v, e.k, this); e && e.r;) e = e.p
					},
					has: function(t) {
						return !!y(d(this, n), t)
					}
				}), p && r(f.prototype, "size", {
					get: function() {
						return d(this, n)[v]
					}
				}), f
			},
			def: function(t, n, e) {
				var r, o, i = y(t, n);
				return i ? i.v = e : (t._l = i = {
					i: o = h(n, !0),
					k: n,
					v: e,
					p: r = t._l,
					n: void 0,
					r: !1
				}, t._f || (t._f = i), r && (r.n = i), t[v]++, "F" !== o && (t._i[o] = i)), t
			},
			getEntry: y,
			setStrong: function(t, n, e) {
				a(t, n, (function(t, e) {
					this._t = d(t, n), this._k = e, this._l = void 0
				}), (function() {
					for (var t = this._k, n = this._l; n && n.r;) n = n.p;
					return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0, f(1))
				}), e ? "entries" : "values", !e, !0), l(n)
			}
		}
	}, function(t, n, e) {
		var r = e(8);
		t.exports = function(t, n, e, o) {
			try {
				return o ? n(r(e)[0], e[1]) : n(e)
			} catch (n) {
				var i = t.return;
				throw void 0 !== i && r(i.call(t)), n
			}
		}
	}, function(t, n, e) {
		var r = e(14),
			o = e(0)("iterator"),
			i = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (r.Array === t || i[o] === t)
		}
	}, function(t, n, e) {
		var r = e(23),
			o = e(0)("iterator"),
			i = e(14);
		t.exports = e(3).getIteratorMethod = function(t) {
			if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
		}
	}, function(t, n, e) {
		var r = e(0)("iterator"),
			o = !1;
		try {
			var i = [7][r]();
			i.return = function() {
				o = !0
			}, Array.from(i, (function() {
				throw 2
			}))
		} catch (t) {}
		t.exports = function(t, n) {
			if (!n && !o) return !1;
			var e = !1;
			try {
				var i = [7],
					u = i[r]();
				u.next = function() {
					return {
						done: e = !0
					}
				}, i[r] = function() {
					return u
				}, t(i)
			} catch (t) {}
			return e
		}
	}, function(t, n) {
		n.f = {}.propertyIsEnumerable
	}, function(t, n, e) {
		var r = e(23),
			o = e(77);
		t.exports = function(t) {
			return function() {
				if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
				return o(this)
			}
		}
	}, function(t, n, e) {
		var r = e(10),
			o = e(31),
			i = e(20),
			u = e(19),
			c = e(87);
		t.exports = function(t, n) {
			var e = 1 == t,
				s = 2 == t,
				a = 3 == t,
				f = 4 == t,
				l = 6 == t,
				p = 5 == t || l,
				h = n || c;
			return function(n, c, d) {
				for (var v, y, m = i(n), g = o(m), b = r(c, d, 3), x = u(g.length), _ = 0, w = e ? h(n, x) : s ? h(n, 0) : void 0; x > _; _++)
					if ((p || _ in g) && (y = b(v = g[_], _, m), t))
						if (e) w[_] = y;
						else if (y) switch (t) {
					case 3:
						return !0;
					case 5:
						return v;
					case 6:
						return _;
					case 2:
						w.push(v)
				} else if (f) return !1;
				return l ? -1 : a || f ? f : w
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4),
			o = e(30),
			i = e(90),
			u = e(53),
			c = e(20),
			s = e(31),
			a = Object.assign;
		t.exports = !a || e(13)((function() {
			var t = {},
				n = {},
				e = Symbol(),
				r = "abcdefghijklmnopqrst";
			return t[e] = 7, r.split("").forEach((function(t) {
				n[t] = t
			})), 7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r
		})) ? function(t, n) {
			for (var e = c(t), a = arguments.length, f = 1, l = i.f, p = u.f; a > f;)
				for (var h, d = s(arguments[f++]), v = l ? o(d).concat(l(d)) : o(d), y = v.length, m = 0; y > m;) h = v[m++], r && !p.call(d, h) || (e[h] = d[h]);
			return e
		} : a
	}, function(t, n, e) {
		"use strict";
		(function(t) {
			var e = "object" == typeof t && t && t.Object === Object && t;
			n.a = e
		}).call(this, e(99))
	}, function(t, n, e) {
		t.exports = e(100)
	}, function(t, n, e) {
		e(22), e(26), e(34), e(71), e(76), e(78), e(79), t.exports = e(3).Map
	}, function(t, n, e) {
		t.exports = e(25)("native-function-to-string", Function.toString)
	}, function(t, n, e) {
		var r = e(27),
			o = e(28);
		t.exports = function(t) {
			return function(n, e) {
				var i, u, c = String(o(n)),
					s = r(e),
					a = c.length;
				return s < 0 || s >= a ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(45),
			o = e(17),
			i = e(33),
			u = {};
		e(11)(u, e(0)("iterator"), (function() {
			return this
		})), t.exports = function(t, n, e) {
			t.prototype = r(u, {
				next: o(1, e)
			}), i(t, n + " Iterator")
		}
	}, function(t, n, e) {
		var r = e(7),
			o = e(8),
			i = e(30);
		t.exports = e(4) ? Object.defineProperties : function(t, n) {
			o(t);
			for (var e, u = i(n), c = u.length, s = 0; c > s;) r.f(t, e = u[s++], n[e]);
			return t
		}
	}, function(t, n, e) {
		var r = e(9),
			o = e(18),
			i = e(65)(!1),
			u = e(32)("IE_PROTO");
		t.exports = function(t, n) {
			var e, c = o(t),
				s = 0,
				a = [];
			for (e in c) e != u && r(c, e) && a.push(e);
			for (; n.length > s;) r(c, e = n[s++]) && (~i(a, e) || a.push(e));
			return a
		}
	}, function(t, n, e) {
		var r = e(18),
			o = e(19),
			i = e(66);
		t.exports = function(t) {
			return function(n, e, u) {
				var c, s = r(n),
					a = o(s.length),
					f = i(u, a);
				if (t && e != e) {
					for (; a > f;)
						if ((c = s[f++]) != c) return !0
				} else
					for (; a > f; f++)
						if ((t || f in s) && s[f] === e) return t || f || 0;
				return !t && -1
			}
		}
	}, function(t, n, e) {
		var r = e(27),
			o = Math.max,
			i = Math.min;
		t.exports = function(t, n) {
			return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
		}
	}, function(t, n, e) {
		var r = e(2).document;
		t.exports = r && r.documentElement
	}, function(t, n, e) {
		var r = e(9),
			o = e(20),
			i = e(32)("IE_PROTO"),
			u = Object.prototype;
		t.exports = Object.getPrototypeOf || function(t) {
			return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(70),
			o = e(47),
			i = e(14),
			u = e(18);
		t.exports = e(29)(Array, "Array", (function(t, n) {
			this._t = u(t), this._i = 0, this._k = n
		}), (function() {
			var t = this._t,
				n = this._k,
				e = this._i++;
			return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
		}), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
	}, function(t, n, e) {
		var r = e(0)("unscopables"),
			o = Array.prototype;
		null == o[r] && e(11)(o, r, {}), t.exports = function(t) {
			o[r][t] = !0
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(48),
			o = e(12);
		t.exports = e(37)("Map", (function(t) {
			return function() {
				return t(this, arguments.length > 0 ? arguments[0] : void 0)
			}
		}), {
			get: function(t) {
				var n = r.getEntry(o(this, "Map"), t);
				return n && n.v
			},
			set: function(t, n) {
				return r.def(o(this, "Map"), 0 === t ? 0 : t, n)
			}
		}, r, !0)
	}, function(t, n, e) {
		"use strict";
		var r = e(2),
			o = e(7),
			i = e(4),
			u = e(0)("species");
		t.exports = function(t) {
			var n = r[t];
			i && n && !n[u] && o.f(n, u, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, function(t, n, e) {
		var r = e(1),
			o = e(74).set;
		t.exports = function(t, n, e) {
			var i, u = n.constructor;
			return u !== e && "function" == typeof u && (i = u.prototype) !== e.prototype && r(i) && o && o(t, i), t
		}
	}, function(t, n, e) {
		var r = e(1),
			o = e(8),
			i = function(t, n) {
				if (o(t), !r(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
			};
		t.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, r) {
				try {
					(r = e(10)(Function.call, e(75).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
				} catch (t) {
					n = !0
				}
				return function(t, e) {
					return i(t, e), n ? t.__proto__ = e : r(t, e), t
				}
			}({}, !1) : void 0),
			check: i
		}
	}, function(t, n, e) {
		var r = e(53),
			o = e(17),
			i = e(18),
			u = e(43),
			c = e(9),
			s = e(41),
			a = Object.getOwnPropertyDescriptor;
		n.f = e(4) ? a : function(t, n) {
			if (t = i(t), n = u(n, !0), s) try {
				return a(t, n)
			} catch (t) {}
			if (c(t, n)) return o(!r.f.call(t, n), t[n])
		}
	}, function(t, n, e) {
		var r = e(5);
		r(r.P + r.R, "Map", {
			toJSON: e(54)("Map")
		})
	}, function(t, n, e) {
		var r = e(15);
		t.exports = function(t, n) {
			var e = [];
			return r(t, !1, e.push, e, n), e
		}
	}, function(t, n, e) {
		e(38)("Map")
	}, function(t, n, e) {
		e(39)("Map")
	}, function(t, n, e) {
		e(22), e(26), e(34), e(81), e(82), e(83), e(84), t.exports = e(3).Set
	}, function(t, n, e) {
		"use strict";
		var r = e(48),
			o = e(12);
		t.exports = e(37)("Set", (function(t) {
			return function() {
				return t(this, arguments.length > 0 ? arguments[0] : void 0)
			}
		}), {
			add: function(t) {
				return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
			}
		}, r)
	}, function(t, n, e) {
		var r = e(5);
		r(r.P + r.R, "Set", {
			toJSON: e(54)("Set")
		})
	}, function(t, n, e) {
		e(38)("Set")
	}, function(t, n, e) {
		e(39)("Set")
	}, function(t, n, e) {
		e(22), e(34), e(86), e(92), e(93), t.exports = e(3).WeakMap
	}, function(t, n, e) {
		"use strict";
		var r, o = e(2),
			i = e(55)(0),
			u = e(6),
			c = e(21),
			s = e(56),
			a = e(91),
			f = e(1),
			l = e(12),
			p = e(12),
			h = !o.ActiveXObject && "ActiveXObject" in o,
			d = c.getWeak,
			v = Object.isExtensible,
			y = a.ufstore,
			m = function(t) {
				return function() {
					return t(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			},
			g = {
				get: function(t) {
					if (f(t)) {
						var n = d(t);
						return !0 === n ? y(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
					}
				},
				set: function(t, n) {
					return a.def(l(this, "WeakMap"), t, n)
				}
			},
			b = t.exports = e(37)("WeakMap", m, g, a, !0, !0);
		p && h && (s((r = a.getConstructor(m, "WeakMap")).prototype, g), c.NEED = !0, i(["delete", "has", "get", "set"], (function(t) {
			var n = b.prototype,
				e = n[t];
			u(n, t, (function(n, o) {
				if (f(n) && !v(n)) {
					this._f || (this._f = new r);
					var i = this._f[t](n, o);
					return "set" == t ? this : i
				}
				return e.call(this, n, o)
			}))
		})))
	}, function(t, n, e) {
		var r = e(88);
		t.exports = function(t, n) {
			return new(r(t))(n)
		}
	}, function(t, n, e) {
		var r = e(1),
			o = e(89),
			i = e(0)("species");
		t.exports = function(t) {
			var n;
			return o(t) && ("function" != typeof(n = t.constructor) || n !== Array && !o(n.prototype) || (n = void 0), r(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n
		}
	}, function(t, n, e) {
		var r = e(24);
		t.exports = Array.isArray || function(t) {
			return "Array" == r(t)
		}
	}, function(t, n) {
		n.f = Object.getOwnPropertySymbols
	}, function(t, n, e) {
		"use strict";
		var r = e(35),
			o = e(21).getWeak,
			i = e(8),
			u = e(1),
			c = e(36),
			s = e(15),
			a = e(55),
			f = e(9),
			l = e(12),
			p = a(5),
			h = a(6),
			d = 0,
			v = function(t) {
				return t._l || (t._l = new y)
			},
			y = function() {
				this.a = []
			},
			m = function(t, n) {
				return p(t.a, (function(t) {
					return t[0] === n
				}))
			};
		y.prototype = {
			get: function(t) {
				var n = m(this, t);
				if (n) return n[1]
			},
			has: function(t) {
				return !!m(this, t)
			},
			set: function(t, n) {
				var e = m(this, t);
				e ? e[1] = n : this.a.push([t, n])
			},
			delete: function(t) {
				var n = h(this.a, (function(n) {
					return n[0] === t
				}));
				return ~n && this.a.splice(n, 1), !!~n
			}
		}, t.exports = {
			getConstructor: function(t, n, e, i) {
				var a = t((function(t, r) {
					c(t, a, n, "_i"), t._t = n, t._i = d++, t._l = void 0, null != r && s(r, e, t[i], t)
				}));
				return r(a.prototype, {
					delete: function(t) {
						if (!u(t)) return !1;
						var e = o(t);
						return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i]
					},
					has: function(t) {
						if (!u(t)) return !1;
						var e = o(t);
						return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i)
					}
				}), a
			},
			def: function(t, n, e) {
				var r = o(i(n), !0);
				return !0 === r ? v(t).set(n, e) : r[t._i] = e, t
			},
			ufstore: v
		}
	}, function(t, n, e) {
		e(38)("WeakMap")
	}, function(t, n, e) {
		e(39)("WeakMap")
	}, function(t, n, e) {
		e(26), e(95), t.exports = e(3).Array.from
	}, function(t, n, e) {
		"use strict";
		var r = e(10),
			o = e(5),
			i = e(20),
			u = e(49),
			c = e(50),
			s = e(19),
			a = e(96),
			f = e(51);
		o(o.S + o.F * !e(52)((function(t) {
			Array.from(t)
		})), "Array", {
			from: function(t) {
				var n, e, o, l, p = i(t),
					h = "function" == typeof this ? this : Array,
					d = arguments.length,
					v = d > 1 ? arguments[1] : void 0,
					y = void 0 !== v,
					m = 0,
					g = f(p);
				if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && c(g))
					for (e = new h(n = s(p.length)); n > m; m++) a(e, m, y ? v(p[m], m) : p[m]);
				else
					for (l = g.call(p), e = new h; !(o = l.next()).done; m++) a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
				return e.length = m, e
			}
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(7),
			o = e(17);
		t.exports = function(t, n, e) {
			n in t ? r.f(t, n, o(0, e)) : t[n] = e
		}
	}, function(t, n, e) {
		e(98), t.exports = e(3).Object.assign
	}, function(t, n, e) {
		var r = e(5);
		r(r.S + r.F, "Object", {
			assign: e(56)
		})
	}, function(t, n) {
		var e;
		e = function() {
			return this
		}();
		try {
			e = e || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (e = window)
		}
		t.exports = e
	}, function(t, n, e) {
		"use strict";
		e.r(n);
		var r = {};
		e.r(r), e.d(r, "keyboardHandler", (function() {
			return et
		})), e.d(r, "mouseHandler", (function() {
			return rt
		})), e.d(r, "resizeHandler", (function() {
			return ot
		})), e.d(r, "selectHandler", (function() {
			return it
		})), e.d(r, "touchHandler", (function() {
			return ut
		})), e.d(r, "wheelHandler", (function() {
			return ct
		}));
		/*! *****************************************************************************
		Copyright (c) Microsoft Corporation. All rights reserved.
		Licensed under the Apache License, Version 2.0 (the "License"); you may not use
		this file except in compliance with the License. You may obtain a copy of the
		License at http://www.apache.org/licenses/LICENSE-2.0

		THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
		KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
		WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
		MERCHANTABLITY OR NON-INFRINGEMENT.

		See the Apache Version 2.0 License for specific language governing permissions
		and limitations under the License.
		***************************************************************************** */
		var o = function(t, n) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, n) {
						t.__proto__ = n
					} || function(t, n) {
						for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
					})(t, n)
			},
			i = function() {
				return (i = Object.assign || function(t) {
					for (var n, e = 1, r = arguments.length; e < r; e++)
						for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
					return t
				}).apply(this, arguments)
			};

		function u(t, n, e, r) {
			var o, i = arguments.length,
				u = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, e) : r;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, e, r);
			else
				for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
			return i > 3 && u && Object.defineProperty(n, e, u), u
		}
		e(59), e(80), e(85), e(94), e(97);
		var c = function(t) {
				var n = typeof t;
				return null != t && ("object" == n || "function" == n)
			},
			s = e(57),
			a = "object" == typeof self && self && self.Object === Object && self,
			f = s.a || a || Function("return this")(),
			l = f.Symbol,
			p = Object.prototype,
			h = p.hasOwnProperty,
			d = p.toString,
			v = l ? l.toStringTag : void 0,
			y = Object.prototype.toString,
			m = l ? l.toStringTag : void 0,
			g = function(t) {
				return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : m && m in Object(t) ? function(t) {
					var n = h.call(t, v),
						e = t[v];
					try {
						t[v] = void 0;
						var r = !0
					} catch (t) {}
					var o = d.call(t);
					return r && (n ? t[v] = e : delete t[v]), o
				}(t) : function(t) {
					return y.call(t)
				}(t)
			},
			b = /^\s+|\s+$/g,
			x = /^[-+]0x[0-9a-f]+$/i,
			_ = /^0b[01]+$/i,
			w = /^0o[0-7]+$/i,
			E = parseInt,
			S = function(t) {
				if ("number" == typeof t) return t;
				if (function(t) {
						return "symbol" == typeof t || function(t) {
							return null != t && "object" == typeof t
						}(t) && "[object Symbol]" == g(t)
					}(t)) return NaN;
				if (c(t)) {
					var n = "function" == typeof t.valueOf ? t.valueOf() : t;
					t = c(n) ? n + "" : n
				}
				if ("string" != typeof t) return 0 === t ? t : +t;
				t = t.replace(b, "");
				var e = _.test(t);
				return e || w.test(t) ? E(t.slice(2), e ? 2 : 8) : x.test(t) ? NaN : +t
			},
			O = function(t, n, e) {
				return void 0 === e && (e = n, n = void 0), void 0 !== e && (e = (e = S(e)) == e ? e : 0), void 0 !== n && (n = (n = S(n)) == n ? n : 0),
					function(t, n, e) {
						return t == t && (void 0 !== e && (t = t <= e ? t : e), void 0 !== n && (t = t >= n ? t : n)), t
					}(S(t), n, e)
			};

		function T(t, n) {
			return void 0 === t && (t = -1 / 0), void 0 === n && (n = 1 / 0),
				function(e, r) {
					var o = "_" + r;
					Object.defineProperty(e, r, {
						get: function() {
							return this[o]
						},
						set: function(e) {
							Object.defineProperty(this, o, {
								value: O(e, t, n),
								enumerable: !1,
								writable: !0,
								configurable: !0
							})
						},
						enumerable: !0,
						configurable: !0
					})
				}
		}

		function A(t, n) {
			var e = "_" + n;
			Object.defineProperty(t, n, {
				get: function() {
					return this[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						value: !!t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					})
				},
				enumerable: !0,
				configurable: !0
			})
		}
		var M = function() {
				return f.Date.now()
			},
			P = Math.max,
			j = Math.min,
			k = function(t, n, e) {
				var r, o, i, u, s, a, f = 0,
					l = !1,
					p = !1,
					h = !0;
				if ("function" != typeof t) throw new TypeError("Expected a function");

				function d(n) {
					var e = r,
						i = o;
					return r = o = void 0, f = n, u = t.apply(i, e)
				}

				function v(t) {
					var e = t - a;
					return void 0 === a || e >= n || e < 0 || p && t - f >= i
				}

				function y() {
					var t = M();
					if (v(t)) return m(t);
					s = setTimeout(y, function(t) {
						var e = n - (t - a);
						return p ? j(e, i - (t - f)) : e
					}(t))
				}

				function m(t) {
					return s = void 0, h && r ? d(t) : (r = o = void 0, u)
				}

				function g() {
					var t = M(),
						e = v(t);
					if (r = arguments, o = this, a = t, e) {
						if (void 0 === s) return function(t) {
							return f = t, s = setTimeout(y, n), l ? d(t) : u
						}(a);
						if (p) return clearTimeout(s), s = setTimeout(y, n), d(a)
					}
					return void 0 === s && (s = setTimeout(y, n)), u
				}
				return n = S(n) || 0, c(e) && (l = !!e.leading, i = (p = "maxWait" in e) ? P(S(e.maxWait) || 0, n) : i, h = "trailing" in e ? !!e.trailing : h), g.cancel = function() {
					void 0 !== s && clearTimeout(s), f = 0, r = a = o = s = void 0
				}, g.flush = function() {
					return void 0 === s ? u : m(M())
				}, g
			};

		function D() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return function(n, e, r) {
				var o = r.value;
				return {
					get: function() {
						return this.hasOwnProperty(e) || Object.defineProperty(this, e, {
							value: k.apply(void 0, function() {
								for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
								var r = Array(t),
									o = 0;
								for (n = 0; n < e; n++)
									for (var i = arguments[n], u = 0, c = i.length; u < c; u++, o++) r[o] = i[u];
								return r
							}([o], t))
						}), this[e]
					}
				}
			}
		}
		var L, N = function() {
				function t(t) {
					var n = this;
					void 0 === t && (t = {}), this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(t).forEach((function(e) {
						n[e] = t[e]
					}))
				}
				return Object.defineProperty(t.prototype, "wheelEventTarget", {
					get: function() {
						return this.delegateTo
					},
					set: function(t) {
						console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = t
					},
					enumerable: !0,
					configurable: !0
				}), u([T(0, 1)], t.prototype, "damping", void 0), u([T(0, 1 / 0)], t.prototype, "thumbMinSize", void 0), u([A], t.prototype, "renderByPixels", void 0), u([A], t.prototype, "alwaysShowTracks", void 0), u([A], t.prototype, "continuousScrolling", void 0), t
			}(),
			z = new WeakMap;

		function C() {
			if (void 0 !== L) return L;
			var t = !1;
			try {
				var n = function() {},
					e = Object.defineProperty({}, "passive", {
						get: function() {
							t = !0
						}
					});
				window.addEventListener("testPassive", n, e), window.removeEventListener("testPassive", n, e)
			} catch (t) {}
			return L = !!t && {
				passive: !1
			}
		}

		function R(t) {
			var n = z.get(t) || [];
			return z.set(t, n),
				function(t, e, r) {
					function o(t) {
						t.defaultPrevented || r(t)
					}
					e.split(/\s+/g).forEach((function(e) {
						n.push({
							elem: t,
							eventName: e,
							handler: o
						}), t.addEventListener(e, o, C())
					}))
				}
		}

		function F(t) {
			var n = function(t) {
				return t.touches ? t.touches[t.touches.length - 1] : t
			}(t);
			return {
				x: n.clientX,
				y: n.clientY
			}
		}

		function I(t, n) {
			return void 0 === n && (n = []), n.some((function(n) {
				return t === n
			}))
		}
		var W = ["webkit", "moz", "ms", "o"],
			H = new RegExp("^-(?!(?:" + W.join("|") + ")-)");

		function B(t, n) {
			n = function(t) {
				var n = {};
				return Object.keys(t).forEach((function(e) {
					if (H.test(e)) {
						var r = t[e];
						e = e.replace(/^-/, ""), n[e] = r, W.forEach((function(t) {
							n["-" + t + "-" + e] = r
						}))
					} else n[e] = t[e]
				})), n
			}(n), Object.keys(n).forEach((function(e) {
				var r = e.replace(/^-/, "").replace(/-([a-z])/g, (function(t, n) {
					return n.toUpperCase()
				}));
				t.style[r] = n[e]
			}))
		}
		var G, X = function() {
				function t(t) {
					this.updateTime = Date.now(), this.delta = {
						x: 0,
						y: 0
					}, this.velocity = {
						x: 0,
						y: 0
					}, this.lastPosition = {
						x: 0,
						y: 0
					}, this.lastPosition = F(t)
				}
				return t.prototype.update = function(t) {
					var n = this.velocity,
						e = this.updateTime,
						r = this.lastPosition,
						o = Date.now(),
						i = F(t),
						u = {
							x: -(i.x - r.x),
							y: -(i.y - r.y)
						},
						c = o - e || 16,
						s = u.x / c * 16,
						a = u.y / c * 16;
					n.x = .9 * s + .1 * n.x, n.y = .9 * a + .1 * n.y, this.delta = u, this.updateTime = o, this.lastPosition = i
				}, t
			}(),
			V = function() {
				function t() {
					this._touchList = {}
				}
				return Object.defineProperty(t.prototype, "_primitiveValue", {
					get: function() {
						return {
							x: 0,
							y: 0
						}
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.isActive = function() {
					return void 0 !== this._activeTouchID
				}, t.prototype.getDelta = function() {
					var t = this._getActiveTracker();
					return t ? i({}, t.delta) : this._primitiveValue
				}, t.prototype.getVelocity = function() {
					var t = this._getActiveTracker();
					return t ? i({}, t.velocity) : this._primitiveValue
				}, t.prototype.track = function(t) {
					var n = this,
						e = t.targetTouches;
					return Array.from(e).forEach((function(t) {
						n._add(t)
					})), this._touchList
				}, t.prototype.update = function(t) {
					var n = this,
						e = t.touches,
						r = t.changedTouches;
					return Array.from(e).forEach((function(t) {
						n._renew(t)
					})), this._setActiveID(r), this._touchList
				}, t.prototype.release = function(t) {
					var n = this;
					delete this._activeTouchID, Array.from(t.changedTouches).forEach((function(t) {
						n._delete(t)
					}))
				}, t.prototype._add = function(t) {
					if (!this._has(t)) {
						var n = new X(t);
						this._touchList[t.identifier] = n
					}
				}, t.prototype._renew = function(t) {
					this._has(t) && this._touchList[t.identifier].update(t)
				}, t.prototype._delete = function(t) {
					delete this._touchList[t.identifier]
				}, t.prototype._has = function(t) {
					return this._touchList.hasOwnProperty(t.identifier)
				}, t.prototype._setActiveID = function(t) {
					this._activeTouchID = t[t.length - 1].identifier
				}, t.prototype._getActiveTracker = function() {
					return this._touchList[this._activeTouchID]
				}, t
			}();
		! function(t) {
			t.X = "x", t.Y = "y"
		}(G || (G = {}));
		var U = function() {
				function t(t, n) {
					void 0 === n && (n = 0), this._direction = t, this._minSize = n, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + t
				}
				return t.prototype.attachTo = function(t) {
					t.appendChild(this.element)
				}, t.prototype.update = function(t, n, e) {
					this.realSize = Math.min(n / e, 1) * n, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = t / e * (n + (this.realSize - this.displaySize)), B(this.element, this._getStyle())
				}, t.prototype._getStyle = function() {
					switch (this._direction) {
						case G.X:
							return {
								width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)"
							};
						case G.Y:
							return {
								height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)"
							};
						default:
							return null
					}
				}, t
			}(),
			Y = function() {
				function t(t, n) {
					void 0 === n && (n = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + t, this.thumb = new U(t, n), this.thumb.attachTo(this.element)
				}
				return t.prototype.attachTo = function(t) {
					t.appendChild(this.element)
				}, t.prototype.show = function() {
					this._isShown || (this._isShown = !0, this.element.classList.add("show"))
				}, t.prototype.hide = function() {
					this._isShown && (this._isShown = !1, this.element.classList.remove("show"))
				}, t.prototype.update = function(t, n, e) {
					B(this.element, {
						display: e <= n ? "none" : "block"
					}), this.thumb.update(t, n, e)
				}, t
			}(),
			q = function() {
				function t(t) {
					this._scrollbar = t;
					var n = t.options.thumbMinSize;
					this.xAxis = new Y(G.X, n), this.yAxis = new Y(G.Y, n), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show())
				}
				return t.prototype.update = function() {
					var t = this._scrollbar,
						n = t.size,
						e = t.offset;
					this.xAxis.update(e.x, n.container.width, n.content.width), this.yAxis.update(e.y, n.container.height, n.content.height)
				}, t.prototype.autoHideOnIdle = function() {
					this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide())
				}, u([D(300)], t.prototype, "autoHideOnIdle", null), t
			}(),
			K = new WeakMap;

		function $(t) {
			return Math.pow(t - 1, 3) + 1
		}
		var J, Q, Z, tt = function() {
				function t(t, n) {
					var e = this.constructor;
					this.scrollbar = t, this.name = e.pluginName, this.options = i(i({}, e.defaultOptions), n)
				}
				return t.prototype.onInit = function() {}, t.prototype.onDestroy = function() {}, t.prototype.onUpdate = function() {}, t.prototype.onRender = function(t) {}, t.prototype.transformDelta = function(t, n) {
					return i({}, t)
				}, t.pluginName = "", t.defaultOptions = {}, t
			}(),
			nt = {
				order: new Set,
				constructors: {}
			};

		function et(t) {
			var n = R(t),
				e = t.containerEl;
			n(e, "keydown", (function(n) {
				var r = document.activeElement;
				if ((r === e || e.contains(r)) && ! function(t) {
						return !("INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable) && !t.disabled
					}(r)) {
					var o = function(t, n) {
						var e = t.size,
							r = t.limit,
							o = t.offset;
						switch (n) {
							case J.TAB:
								return function(t) {
									requestAnimationFrame((function() {
										t.scrollIntoView(document.activeElement, {
											offsetTop: t.size.container.height / 2,
											onlyScrollIfNeeded: !0
										})
									}))
								}(t);
							case J.SPACE:
								return [0, 200];
							case J.PAGE_UP:
								return [0, 40 - e.container.height];
							case J.PAGE_DOWN:
								return [0, e.container.height - 40];
							case J.END:
								return [0, r.y - o.y];
							case J.HOME:
								return [0, -o.y];
							case J.LEFT:
								return [-40, 0];
							case J.UP:
								return [0, -40];
							case J.RIGHT:
								return [40, 0];
							case J.DOWN:
								return [0, 40];
							default:
								return null
						}
					}(t, n.keyCode || n.which);
					if (o) {
						var i = o[0],
							u = o[1];
						t.addTransformableMomentum(i, u, n, (function(e) {
							e ? n.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus())
						}))
					}
				}
			}))
		}

		function rt(t) {
			var n, e, r, o, i, u = R(t),
				c = t.containerEl,
				s = t.track,
				a = s.xAxis,
				f = s.yAxis;

			function l(n, e) {
				var r = t.size;
				return n === Q.X ? e / (r.container.width + (a.thumb.realSize - a.thumb.displaySize)) * r.content.width : n === Q.Y ? e / (r.container.height + (f.thumb.realSize - f.thumb.displaySize)) * r.content.height : 0
			}

			function p(t) {
				return I(t, [a.element, a.thumb.element]) ? Q.X : I(t, [f.element, f.thumb.element]) ? Q.Y : void 0
			}
			u(c, "click", (function(n) {
				if (!e && I(n.target, [a.element, f.element])) {
					var r = n.target,
						o = p(r),
						i = r.getBoundingClientRect(),
						u = F(n),
						c = t.offset,
						s = t.limit;
					if (o === Q.X) {
						var h = u.x - i.left - a.thumb.displaySize / 2;
						t.setMomentum(O(l(o, h) - c.x, -c.x, s.x - c.x), 0)
					}
					o === Q.Y && (h = u.y - i.top - f.thumb.displaySize / 2, t.setMomentum(0, O(l(o, h) - c.y, -c.y, s.y - c.y)))
				}
			})), u(c, "mousedown", (function(e) {
				if (I(e.target, [a.thumb.element, f.thumb.element])) {
					n = !0;
					var u = e.target,
						s = F(e),
						l = u.getBoundingClientRect();
					o = p(u), r = {
						x: s.x - l.left,
						y: s.y - l.top
					}, i = c.getBoundingClientRect(), B(t.containerEl, {
						"-user-select": "none"
					})
				}
			})), u(window, "mousemove", (function(u) {
				if (n) {
					e = !0;
					var c = t.offset,
						s = F(u);
					if (o === Q.X) {
						var a = s.x - r.x - i.left;
						t.setPosition(l(o, a), c.y)
					}
					o === Q.Y && (a = s.y - r.y - i.top, t.setPosition(c.x, l(o, a)))
				}
			})), u(window, "mouseup blur", (function() {
				n = e = !1, B(t.containerEl, {
					"-user-select": ""
				})
			}))
		}

		function ot(t) {
			R(t)(window, "resize", k(t.update.bind(t), 300))
		}

		function it(t) {
			var n, e = R(t),
				r = t.containerEl,
				o = t.contentEl,
				i = t.offset,
				u = t.limit,
				c = !1;
			e(window, "mousemove", (function(e) {
				c && (cancelAnimationFrame(n), function e(r) {
					var o = r.x,
						c = r.y;
					(o || c) && (t.setMomentum(O(i.x + o, 0, u.x) - i.x, O(i.y + c, 0, u.y) - i.y), n = requestAnimationFrame((function() {
						e({
							x: o,
							y: c
						})
					})))
				}(function(t, n) {
					var e = t.bounding,
						r = e.top,
						o = e.right,
						i = e.bottom,
						u = e.left,
						c = F(n),
						s = c.x,
						a = c.y,
						f = {
							x: 0,
							y: 0
						};
					return 0 === s && 0 === a ? f : (s > o - 20 ? f.x = s - o + 20 : s < u + 20 && (f.x = s - u - 20), a > i - 20 ? f.y = a - i + 20 : a < r + 20 && (f.y = a - r - 20), f.x *= 2, f.y *= 2, f)
				}(t, e)))
			})), e(o, "selectstart", (function(t) {
				t.stopPropagation(), cancelAnimationFrame(n), c = !0
			})), e(window, "mouseup blur", (function() {
				cancelAnimationFrame(n), c = !1
			})), e(r, "scroll", (function(t) {
				t.preventDefault(), r.scrollTop = r.scrollLeft = 0
			}))
		}

		function ut(t) {
			var n, e = /Android/.test(navigator.userAgent) ? 3 : 2,
				r = t.options.delegateTo || t.containerEl,
				o = new V,
				i = R(t),
				u = 0;
			i(r, "touchstart", (function(e) {
				o.track(e), t.setMomentum(0, 0), 0 === u && (n = t.options.damping, t.options.damping = Math.max(n, .5)), u++
			})), i(r, "touchmove", (function(n) {
				if (!Z || Z === t) {
					o.update(n);
					var e = o.getDelta(),
						r = e.x,
						i = e.y;
					t.addTransformableMomentum(r, i, n, (function(e) {
						e && (n.preventDefault(), Z = t)
					}))
				}
			})), i(r, "touchcancel touchend", (function(r) {
				var i = o.getVelocity(),
					c = {
						x: 0,
						y: 0
					};
				Object.keys(i).forEach((function(t) {
					var r = i[t] / n;
					c[t] = Math.abs(r) < 50 ? 0 : r * e
				})), t.addTransformableMomentum(c.x, c.y, r), 0 == --u && (t.options.damping = n), o.release(r), Z = null
			}))
		}

		function ct(t) {
			R(t)(t.options.delegateTo || t.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", (function(n) {
				var e = function(t) {
						if ("deltaX" in t) {
							var n = ft(t.deltaMode);
							return {
								x: t.deltaX / st.STANDARD * n,
								y: t.deltaY / st.STANDARD * n
							}
						}
						return "wheelDeltaX" in t ? {
							x: t.wheelDeltaX / st.OTHERS,
							y: t.wheelDeltaY / st.OTHERS
						} : {
							x: 0,
							y: t.wheelDelta / st.OTHERS
						}
					}(n),
					r = e.x,
					o = e.y;
				t.addTransformableMomentum(r, o, n, (function(t) {
					t && n.preventDefault()
				}))
			}))
		}! function(t) {
			t[t.TAB = 9] = "TAB", t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN"
		}(J || (J = {})),
		function(t) {
			t[t.X = 0] = "X", t[t.Y = 1] = "Y"
		}(Q || (Q = {}));
		var st = {
				STANDARD: 1,
				OTHERS: -3
			},
			at = [1, 28, 500],
			ft = function(t) {
				return at[t] || at[0]
			},
			lt = new Map,
			pt = function() {
				function t(t, n) {
					var e = this;
					this.offset = {
						x: 0,
						y: 0
					}, this.limit = {
						x: 1 / 0,
						y: 1 / 0
					}, this.bounding = {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}, this._plugins = [], this._momentum = {
						x: 0,
						y: 0
					}, this._listeners = new Set, this.containerEl = t;
					var r = this.contentEl = document.createElement("div");
					this.options = new N(n), t.setAttribute("data-scrollbar", "true"), t.setAttribute("tabindex", "-1"), B(t, {
						overflow: "hidden",
						outline: "none"
					}), window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"), r.className = "scroll-content", Array.from(t.childNodes).forEach((function(t) {
						r.appendChild(t)
					})), t.appendChild(r), this.track = new q(this), this.size = this.getSize(), this._plugins = function(t, n) {
						return Array.from(nt.order).filter((function(t) {
							return !1 !== n[t]
						})).map((function(e) {
							var r = new(0, nt.constructors[e])(t, n[e]);
							return n[e] = r.options, r
						}))
					}(this, this.options.plugins);
					var o = t.scrollLeft,
						i = t.scrollTop;
					t.scrollLeft = t.scrollTop = 0, this.setPosition(o, i, {
						withoutCallbacks: !0
					});
					var u = window,
						c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver;
					"function" == typeof c && (this._observer = new c((function() {
						e.update()
					})), this._observer.observe(r, {
						subtree: !0,
						childList: !0
					})), lt.set(t, this), requestAnimationFrame((function() {
						e._init()
					}))
				}
				return Object.defineProperty(t.prototype, "parent", {
					get: function() {
						for (var t = this.containerEl.parentElement; t;) {
							var n = lt.get(t);
							if (n) return n;
							t = t.parentElement
						}
						return null
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "scrollTop", {
					get: function() {
						return this.offset.y
					},
					set: function(t) {
						this.setPosition(this.scrollLeft, t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "scrollLeft", {
					get: function() {
						return this.offset.x
					},
					set: function(t) {
						this.setPosition(t, this.scrollTop)
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getSize = function() {
					return function(t) {
						var n = t.containerEl,
							e = t.contentEl;
						return {
							container: {
								width: n.clientWidth,
								height: n.clientHeight
							},
							content: {
								width: e.offsetWidth - e.clientWidth + e.scrollWidth,
								height: e.offsetHeight - e.clientHeight + e.scrollHeight
							}
						}
					}(this)
				}, t.prototype.update = function() {
					! function(t) {
						var n = t.getSize(),
							e = {
								x: Math.max(n.content.width - n.container.width, 0),
								y: Math.max(n.content.height - n.container.height, 0)
							},
							r = t.containerEl.getBoundingClientRect(),
							o = {
								top: Math.max(r.top, 0),
								right: Math.min(r.right, window.innerWidth),
								bottom: Math.min(r.bottom, window.innerHeight),
								left: Math.max(r.left, 0)
							};
						t.size = n, t.limit = e, t.bounding = o, t.track.update(), t.setPosition()
					}(this), this._plugins.forEach((function(t) {
						t.onUpdate()
					}))
				}, t.prototype.isVisible = function(t) {
					return function(t, n) {
						var e = t.bounding,
							r = n.getBoundingClientRect(),
							o = Math.max(e.top, r.top),
							i = Math.max(e.left, r.left),
							u = Math.min(e.right, r.right);
						return o < Math.min(e.bottom, r.bottom) && i < u
					}(this, t)
				}, t.prototype.setPosition = function(t, n, e) {
					var r = this;
					void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = {});
					var o = function(t, n, e) {
						var r = t.options,
							o = t.offset,
							u = t.limit,
							c = t.track,
							s = t.contentEl;
						return r.renderByPixels && (n = Math.round(n), e = Math.round(e)), n = O(n, 0, u.x), e = O(e, 0, u.y), n !== o.x && c.xAxis.show(), e !== o.y && c.yAxis.show(), r.alwaysShowTracks || c.autoHideOnIdle(), n === o.x && e === o.y ? null : (o.x = n, o.y = e, B(s, {
							"-transform": "translate3d(" + -n + "px, " + -e + "px, 0)"
						}), c.update(), {
							offset: i({}, o),
							limit: i({}, u)
						})
					}(this, t, n);
					o && !e.withoutCallbacks && this._listeners.forEach((function(t) {
						t.call(r, o)
					}))
				}, t.prototype.scrollTo = function(t, n, e, r) {
					void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = 0), void 0 === r && (r = {}),
						function(t, n, e, r, o) {
							void 0 === r && (r = 0);
							var i = void 0 === o ? {} : o,
								u = i.easing,
								c = void 0 === u ? $ : u,
								s = i.callback,
								a = t.options,
								f = t.offset,
								l = t.limit;
							a.renderByPixels && (n = Math.round(n), e = Math.round(e));
							var p = f.x,
								h = f.y,
								d = O(n, 0, l.x) - p,
								v = O(e, 0, l.y) - h,
								y = Date.now();
							cancelAnimationFrame(K.get(t)),
								function n() {
									var e = Date.now() - y,
										o = r ? c(Math.min(e / r, 1)) : 1;
									if (t.setPosition(p + d * o, h + v * o), e >= r) "function" == typeof s && s.call(t);
									else {
										var i = requestAnimationFrame(n);
										K.set(t, i)
									}
								}()
						}(this, t, n, e, r)
				}, t.prototype.scrollIntoView = function(t, n) {
					void 0 === n && (n = {}),
						function(t, n, e) {
							var r = void 0 === e ? {} : e,
								o = r.alignToTop,
								i = void 0 === o || o,
								u = r.onlyScrollIfNeeded,
								c = void 0 !== u && u,
								s = r.offsetTop,
								a = void 0 === s ? 0 : s,
								f = r.offsetLeft,
								l = void 0 === f ? 0 : f,
								p = r.offsetBottom,
								h = void 0 === p ? 0 : p,
								d = t.containerEl,
								v = t.bounding,
								y = t.offset,
								m = t.limit;
							if (n && d.contains(n)) {
								var g = n.getBoundingClientRect();
								if (!c || !t.isVisible(n)) {
									var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
									t.setMomentum(g.left - v.left - l, O(b, -y.y, m.y - y.y))
								}
							}
						}(this, t, n)
				}, t.prototype.addListener = function(t) {
					if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
					this._listeners.add(t)
				}, t.prototype.removeListener = function(t) {
					this._listeners.delete(t)
				}, t.prototype.addTransformableMomentum = function(t, n, e, r) {
					this._updateDebounced();
					var o = this._plugins.reduce((function(t, n) {
							return n.transformDelta(t, e) || t
						}), {
							x: t,
							y: n
						}),
						i = !this._shouldPropagateMomentum(o.x, o.y);
					i && this.addMomentum(o.x, o.y), r && r.call(this, i)
				}, t.prototype.addMomentum = function(t, n) {
					this.setMomentum(this._momentum.x + t, this._momentum.y + n)
				}, t.prototype.setMomentum = function(t, n) {
					0 === this.limit.x && (t = 0), 0 === this.limit.y && (n = 0), this.options.renderByPixels && (t = Math.round(t), n = Math.round(n)), this._momentum.x = t, this._momentum.y = n
				}, t.prototype.updatePluginOptions = function(t, n) {
					this._plugins.forEach((function(e) {
						e.name === t && Object.assign(e.options, n)
					}))
				}, t.prototype.destroy = function() {
					var t = this.containerEl,
						n = this.contentEl;
					! function(t) {
						var n = z.get(t);
						n && (n.forEach((function(t) {
							var n = t.elem,
								e = t.eventName,
								r = t.handler;
							n.removeEventListener(e, r, C())
						})), z.delete(t))
					}(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), lt.delete(this.containerEl);
					for (var e = Array.from(n.childNodes); t.firstChild;) t.removeChild(t.firstChild);
					e.forEach((function(n) {
						t.appendChild(n)
					})), B(t, {
						overflow: ""
					}), t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, this._plugins.forEach((function(t) {
						t.onDestroy()
					})), this._plugins.length = 0
				}, t.prototype._init = function() {
					var t = this;
					this.update(), Object.keys(r).forEach((function(n) {
						r[n](t)
					})), this._plugins.forEach((function(t) {
						t.onInit()
					})), this._render()
				}, t.prototype._updateDebounced = function() {
					this.update()
				}, t.prototype._shouldPropagateMomentum = function(t, n) {
					void 0 === t && (t = 0), void 0 === n && (n = 0);
					var e = this.options,
						r = this.offset,
						o = this.limit;
					if (!e.continuousScrolling) return !1;
					0 === o.x && 0 === o.y && this._updateDebounced();
					var i = O(t + r.x, 0, o.x),
						u = O(n + r.y, 0, o.y),
						c = !0;
					return (c = (c = c && i === r.x) && u === r.y) && (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
				}, t.prototype._render = function() {
					var t = this._momentum;
					if (t.x || t.y) {
						var n = this._nextTick("x"),
							e = this._nextTick("y");
						t.x = n.momentum, t.y = e.momentum, this.setPosition(n.position, e.position)
					}
					var r = i({}, this._momentum);
					this._plugins.forEach((function(t) {
						t.onRender(r)
					})), this._renderID = requestAnimationFrame(this._render.bind(this))
				}, t.prototype._nextTick = function(t) {
					var n = this.options,
						e = this.offset,
						r = this._momentum,
						o = e[t],
						i = r[t];
					if (Math.abs(i) <= .1) return {
						momentum: 0,
						position: o + i
					};
					var u = i * (1 - n.damping);
					return n.renderByPixels && (u |= 0), {
						momentum: u,
						position: o + i - u
					}
				}, u([D(100, {
					leading: !0
				})], t.prototype, "_updateDebounced", null), t
			}(),
			ht = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",
			dt = "smooth-scrollbar-style",
			vt = !1;

		function yt() {
			if (!vt && "undefined" != typeof window) {
				var t = document.createElement("style");
				t.id = dt, t.textContent = ht, document.head && document.head.appendChild(t), vt = !0
			}
		}
		e.d(n, "ScrollbarPlugin", (function() {
			return tt
		}));
		/*!
		 * cast `I.Scrollbar` to `Scrollbar` to avoid error
		 *
		 * `I.Scrollbar` is not assignable to `Scrollbar`:
		 *     "privateProp" is missing in `I.Scrollbar`
		 *
		 * @see https://github.com/Microsoft/TypeScript/issues/2672
		 */
		var mt = function(t) {
			function n() {
				return null !== t && t.apply(this, arguments) || this
			}
			return function(t, n) {
				function e() {
					this.constructor = t
				}
				o(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
			}(n, t), n.init = function(t, n) {
				if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t);
				return yt(), lt.has(t) ? lt.get(t) : new pt(t, n)
			}, n.initAll = function(t) {
				return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(e) {
					return n.init(e, t)
				}))
			}, n.has = function(t) {
				return lt.has(t)
			}, n.get = function(t) {
				return lt.get(t)
			}, n.getAll = function() {
				return Array.from(lt.values())
			}, n.destroy = function(t) {
				var n = lt.get(t);
				n && n.destroy()
			}, n.destroyAll = function() {
				lt.forEach((function(t) {
					t.destroy()
				}))
			}, n.use = function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				return function() {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					t.forEach((function(t) {
						var n = t.pluginName;
						if (!n) throw new TypeError("plugin name is required");
						nt.order.add(n), nt.constructors[n] = t
					}))
				}.apply(void 0, t)
			}, n.attachStyle = function() {
				return yt()
			}, n.detachStyle = function() {
				return function() {
					if (vt && "undefined" != typeof window) {
						var t = document.getElementById(dt);
						t && t.parentNode && (t.parentNode.removeChild(t), vt = !1)
					}
				}()
			}, n.version = "8.5.1", n.ScrollbarPlugin = tt, n
		}(pt);
		n.default = mt
	}]).default
}));
// threejs.org/license
(function(k, ua) {
	"object" === typeof exports && "undefined" !== typeof module ? ua(exports) : "function" === typeof define && define.amd ? define(["exports"], ua) : (k = k || self, ua(k.THREE = {}))
})(this, function(k) {
	function ua() {}

	function v(a, b) {
		this.x = a || 0;
		this.y = b || 0
	}

	function ya() {
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
		0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}

	function W(a, b, c, d, e, f, g, h, l, m) {
		Object.defineProperty(this, "id", {
			value: ej++
		});
		this.uuid = O.generateUUID();
		this.name = "";
		this.image = void 0 !== a ? a : W.DEFAULT_IMAGE;
		this.mipmaps = [];
		this.mapping = void 0 !== b ? b : W.DEFAULT_MAPPING;
		this.wrapS = void 0 !== c ? c : 1001;
		this.wrapT = void 0 !== d ? d : 1001;
		this.magFilter = void 0 !== e ? e : 1006;
		this.minFilter = void 0 !== f ? f : 1008;
		this.anisotropy = void 0 !== l ? l : 1;
		this.format = void 0 !== g ? g : 1023;
		this.internalFormat = null;
		this.type = void 0 !== h ? h : 1009;
		this.offset = new v(0, 0);
		this.repeat = new v(1, 1);
		this.center = new v(0, 0);
		this.rotation = 0;
		this.matrixAutoUpdate = !0;
		this.matrix = new ya;
		this.generateMipmaps = !0;
		this.premultiplyAlpha = !1;
		this.flipY = !0;
		this.unpackAlignment = 4;
		this.encoding = void 0 !== m ? m : 3E3;
		this.version = 0;
		this.onUpdate = null
	}

	function R(a, b, c, d) {
		this.x = a || 0;
		this.y = b || 0;
		this.z = c || 0;
		this.w = void 0 !== d ? d : 1
	}

	function Ba(a, b, c) {
		this.width = a;
		this.height = b;
		this.scissor = new R(0, 0, a, b);
		this.scissorTest = !1;
		this.viewport = new R(0, 0, a, b);
		c = c || {};
		this.texture = new W(void 0, c.mapping, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding);
		this.texture.image = {};
		this.texture.image.width =
			a;
		this.texture.image.height = b;
		this.texture.generateMipmaps = void 0 !== c.generateMipmaps ? c.generateMipmaps : !1;
		this.texture.minFilter = void 0 !== c.minFilter ? c.minFilter : 1006;
		this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
		this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
		this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null
	}

	function Xf(a, b, c) {
		Ba.call(this, a, b, c);
		this.samples = 4
	}

	function va(a, b, c, d) {
		this._x = a || 0;
		this._y = b || 0;
		this._z = c || 0;
		this._w = void 0 !== d ? d : 1
	}

	function p(a, b,
		c) {
		this.x = a || 0;
		this.y = b || 0;
		this.z = c || 0
	}

	function N() {
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
		0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}

	function Ub(a, b, c, d) {
		this._x = a || 0;
		this._y = b || 0;
		this._z = c || 0;
		this._order = d || Ub.DefaultOrder
	}

	function De() {
		this.mask = 1
	}

	function y() {
		Object.defineProperty(this, "id", {
			value: fj++
		});
		this.uuid = O.generateUUID();
		this.name = "";
		this.type = "Object3D";
		this.parent = null;
		this.children = [];
		this.up = y.DefaultUp.clone();
		var a = new p,
			b = new Ub,
			c = new va,
			d = new p(1, 1, 1);
		b._onChange(function() {
			c.setFromEuler(b, !1)
		});
		c._onChange(function() {
			b.setFromQuaternion(c, void 0, !1)
		});
		Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: a
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: b
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: c
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: d
			},
			modelViewMatrix: {
				value: new N
			},
			normalMatrix: {
				value: new ya
			}
		});
		this.matrix = new N;
		this.matrixWorld = new N;
		this.matrixAutoUpdate = y.DefaultMatrixAutoUpdate;
		this.matrixWorldNeedsUpdate = !1;
		this.layers = new De;
		this.visible = !0;
		this.receiveShadow = this.castShadow = !1;
		this.frustumCulled = !0;
		this.renderOrder = 0;
		this.userData = {}
	}

	function zc() {
		y.call(this);
		this.type = "Scene";
		this.overrideMaterial = this.fog = this.environment = this.background = null;
		this.autoUpdate = !0;
		"undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
			detail: this
		}))
	}

	function Va(a, b) {
		this.min = void 0 !== a ? a : new p(Infinity, Infinity, Infinity);
		this.max = void 0 !==
			b ? b : new p(-Infinity, -Infinity, -Infinity)
	}

	function Yf(a, b, c, d, e) {
		var f;
		var g = 0;
		for (f = a.length - 3; g <= f; g += 3) {
			Vb.fromArray(a, g);
			var h = e.x * Math.abs(Vb.x) + e.y * Math.abs(Vb.y) + e.z * Math.abs(Vb.z),
				l = b.dot(Vb),
				m = c.dot(Vb),
				z = d.dot(Vb);
			if (Math.max(-Math.max(l, m, z), Math.min(l, m, z)) > h) return !1
		}
		return !0
	}

	function eb(a, b) {
		this.center = void 0 !== a ? a : new p;
		this.radius = void 0 !== b ? b : -1
	}

	function Wb(a, b) {
		this.origin = void 0 !== a ? a : new p;
		this.direction = void 0 !== b ? b : new p(0, 0, -1)
	}

	function Wa(a, b) {
		this.normal = void 0 !== a ? a : new p(1,
			0, 0);
		this.constant = void 0 !== b ? b : 0
	}

	function pa(a, b, c) {
		this.a = void 0 !== a ? a : new p;
		this.b = void 0 !== b ? b : new p;
		this.c = void 0 !== c ? c : new p
	}

	function D(a, b, c) {
		return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c)
	}

	function Zf(a, b, c) {
		0 > c && (c += 1);
		1 < c && --c;
		return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
	}

	function $f(a) {
		return .04045 > a ? .0773993808 * a : Math.pow(.9478672986 * a + .0521327014, 2.4)
	}

	function ag(a) {
		return .0031308 > a ? 12.92 * a : 1.055 * Math.pow(a, .41666) - .055
	}

	function Ac(a, b, c, d, e, f) {
		this.a = a;
		this.b =
			b;
		this.c = c;
		this.normal = d && d.isVector3 ? d : new p;
		this.vertexNormals = Array.isArray(d) ? d : [];
		this.color = e && e.isColor ? e : new D;
		this.vertexColors = Array.isArray(e) ? e : [];
		this.materialIndex = void 0 !== f ? f : 0
	}

	function K() {
		Object.defineProperty(this, "id", {
			value: gj++
		});
		this.uuid = O.generateUUID();
		this.name = "";
		this.type = "Material";
		this.fog = !0;
		this.blending = 1;
		this.side = 0;
		this.vertexColors = this.flatShading = !1;
		this.opacity = 1;
		this.transparent = !1;
		this.blendSrc = 204;
		this.blendDst = 205;
		this.blendEquation = 100;
		this.blendEquationAlpha =
			this.blendDstAlpha = this.blendSrcAlpha = null;
		this.depthFunc = 3;
		this.depthWrite = this.depthTest = !0;
		this.stencilWriteMask = 255;
		this.stencilFunc = 519;
		this.stencilRef = 0;
		this.stencilFuncMask = 255;
		this.stencilZPass = this.stencilZFail = this.stencilFail = 7680;
		this.stencilWrite = !1;
		this.clippingPlanes = null;
		this.clipShadows = this.clipIntersection = !1;
		this.shadowSide = null;
		this.colorWrite = !0;
		this.precision = null;
		this.polygonOffset = !1;
		this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
		this.dithering = !1;
		this.alphaTest = 0;
		this.premultipliedAlpha = !1;
		this.toneMapped = this.visible = !0;
		this.userData = {};
		this.version = 0
	}

	function Pa(a) {
		K.call(this);
		this.type = "MeshBasicMaterial";
		this.color = new D(16777215);
		this.lightMap = this.map = null;
		this.lightMapIntensity = 1;
		this.aoMap = null;
		this.aoMapIntensity = 1;
		this.envMap = this.alphaMap = this.specularMap = null;
		this.combine = 0;
		this.reflectivity = 1;
		this.refractionRatio = .98;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.wireframeLinejoin = this.wireframeLinecap = "round";
		this.morphTargets = this.skinning = !1;
		this.setValues(a)
	}

	function G(a, b, c) {
		if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.name = "";
		this.array = a;
		this.itemSize = b;
		this.count = void 0 !== a ? a.length / b : 0;
		this.normalized = !0 === c;
		this.usage = 35044;
		this.updateRange = {
			offset: 0,
			count: -1
		};
		this.version = 0
	}

	function yd(a, b, c) {
		G.call(this, new Int8Array(a), b, c)
	}

	function zd(a, b, c) {
		G.call(this, new Uint8Array(a), b, c)
	}

	function Ad(a, b, c) {
		G.call(this, new Uint8ClampedArray(a), b, c)
	}

	function Bd(a, b, c) {
		G.call(this, new Int16Array(a),
			b, c)
	}

	function Xb(a, b, c) {
		G.call(this, new Uint16Array(a), b, c)
	}

	function Cd(a, b, c) {
		G.call(this, new Int32Array(a), b, c)
	}

	function Yb(a, b, c) {
		G.call(this, new Uint32Array(a), b, c)
	}

	function B(a, b, c) {
		G.call(this, new Float32Array(a), b, c)
	}

	function Dd(a, b, c) {
		G.call(this, new Float64Array(a), b, c)
	}

	function rh() {
		this.vertices = [];
		this.normals = [];
		this.colors = [];
		this.uvs = [];
		this.uvs2 = [];
		this.groups = [];
		this.morphTargets = {};
		this.skinWeights = [];
		this.skinIndices = [];
		this.boundingSphere = this.boundingBox = null;
		this.groupsNeedUpdate =
			this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
	}

	function sh(a) {
		if (0 === a.length) return -Infinity;
		for (var b = a[0], c = 1, d = a.length; c < d; ++c) a[c] > b && (b = a[c]);
		return b
	}

	function F() {
		Object.defineProperty(this, "id", {
			value: hj += 2
		});
		this.uuid = O.generateUUID();
		this.name = "";
		this.type = "BufferGeometry";
		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.morphTargetsRelative = !1;
		this.groups = [];
		this.boundingSphere = this.boundingBox = null;
		this.drawRange = {
			start: 0,
			count: Infinity
		};
		this.userData = {}
	}

	function ea(a, b) {
		y.call(this);
		this.type = "Mesh";
		this.geometry = void 0 !== a ? a : new F;
		this.material = void 0 !== b ? b : new Pa;
		this.updateMorphTargets()
	}

	function th(a, b, c, d, e, f, g, h) {
		if (null === (1 === b.side ? d.intersectTriangle(g, f, e, !0, h) : d.intersectTriangle(e, f, g, 2 !== b.side, h))) return null;
		Ee.copy(h);
		Ee.applyMatrix4(a.matrixWorld);
		b = c.ray.origin.distanceTo(Ee);
		return b < c.near || b > c.far ? null : {
			distance: b,
			point: Ee.clone(),
			object: a
		}
	}

	function Fe(a, b, c, d, e, f, g, h, l, m, z, n) {
		Db.fromBufferAttribute(e, m);
		Eb.fromBufferAttribute(e,
			z);
		Fb.fromBufferAttribute(e, n);
		e = a.morphTargetInfluences;
		if (b.morphTargets && f && e) {
			Ge.set(0, 0, 0);
			He.set(0, 0, 0);
			Ie.set(0, 0, 0);
			for (var t = 0, r = f.length; t < r; t++) {
				var k = e[t],
					u = f[t];
				0 !== k && (bg.fromBufferAttribute(u, m), cg.fromBufferAttribute(u, z), dg.fromBufferAttribute(u, n), g ? (Ge.addScaledVector(bg, k), He.addScaledVector(cg, k), Ie.addScaledVector(dg, k)) : (Ge.addScaledVector(bg.sub(Db), k), He.addScaledVector(cg.sub(Eb), k), Ie.addScaledVector(dg.sub(Fb), k)))
			}
			Db.add(Ge);
			Eb.add(He);
			Fb.add(Ie)
		}
		a.isSkinnedMesh && (a.boneTransform(m,
			Db), a.boneTransform(z, Eb), a.boneTransform(n, Fb));
		if (a = th(a, b, c, d, Db, Eb, Fb, Ed)) h && (Bc.fromBufferAttribute(h, m), Cc.fromBufferAttribute(h, z), Dc.fromBufferAttribute(h, n), a.uv = pa.getUV(Ed, Db, Eb, Fb, Bc, Cc, Dc, new v)), l && (Bc.fromBufferAttribute(l, m), Cc.fromBufferAttribute(l, z), Dc.fromBufferAttribute(l, n), a.uv2 = pa.getUV(Ed, Db, Eb, Fb, Bc, Cc, Dc, new v)), h = new Ac(m, z, n), pa.getNormal(Db, Eb, Fb, h.normal), a.face = h;
		return a
	}

	function L() {
		Object.defineProperty(this, "id", {
			value: ij += 2
		});
		this.uuid = O.generateUUID();
		this.name =
			"";
		this.type = "Geometry";
		this.vertices = [];
		this.colors = [];
		this.faces = [];
		this.faceVertexUvs = [
			[]
		];
		this.morphTargets = [];
		this.morphNormals = [];
		this.skinWeights = [];
		this.skinIndices = [];
		this.lineDistances = [];
		this.boundingSphere = this.boundingBox = null;
		this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
	}

	function Ec(a) {
		var b = {},
			c;
		for (c in a) {
			b[c] = {};
			for (var d in a[c]) {
				var e = a[c][d];
				e && (e.isColor || e.isMatrix3 ||
					e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e
			}
		}
		return b
	}

	function wa(a) {
		for (var b = {}, c = 0; c < a.length; c++) {
			var d = Ec(a[c]),
				e;
			for (e in d) b[e] = d[e]
		}
		return b
	}

	function Ca(a) {
		K.call(this);
		this.type = "ShaderMaterial";
		this.defines = {};
		this.uniforms = {};
		this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
		this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
		this.linewidth = 1;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
		this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		};
		this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		};
		this.index0AttributeName = void 0;
		this.uniformsNeedUpdate = !1;
		void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a))
	}

	function fb() {
		y.call(this);
		this.type = "Camera";
		this.matrixWorldInverse = new N;
		this.projectionMatrix = new N;
		this.projectionMatrixInverse = new N
	}

	function P(a, b, c, d) {
		fb.call(this);
		this.type = "PerspectiveCamera";
		this.fov = void 0 !== a ? a : 50;
		this.zoom = 1;
		this.near = void 0 !== c ? c : .1;
		this.far = void 0 !== d ? d : 2E3;
		this.focus = 10;
		this.aspect = void 0 !== b ? b : 1;
		this.view = null;
		this.filmGauge = 35;
		this.filmOffset = 0;
		this.updateProjectionMatrix()
	}

	function Fc(a, b, c) {
		y.call(this);
		this.type = "CubeCamera";
		if (!0 !== c.isWebGLCubeRenderTarget) console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
		else {
			this.renderTarget = c;
			var d = new P(90, 1, a, b);
			d.layers = this.layers;
			d.up.set(0, -1, 0);
			d.lookAt(new p(1, 0, 0));
			this.add(d);
			var e = new P(90, 1, a, b);
			e.layers = this.layers;
			e.up.set(0, -1, 0);
			e.lookAt(new p(-1, 0, 0));
			this.add(e);
			var f = new P(90, 1, a, b);
			f.layers = this.layers;
			f.up.set(0, 0, 1);
			f.lookAt(new p(0, 1, 0));
			this.add(f);
			var g = new P(90, 1, a, b);
			g.layers = this.layers;
			g.up.set(0, 0, -1);
			g.lookAt(new p(0, -1, 0));
			this.add(g);
			var h = new P(90, 1, a, b);
			h.layers = this.layers;
			h.up.set(0, -1, 0);
			h.lookAt(new p(0, 0, 1));
			this.add(h);
			var l = new P(90, 1, a, b);
			l.layers = this.layers;
			l.up.set(0, -1, 0);
			l.lookAt(new p(0, 0, -1));
			this.add(l);
			this.update = function(a, b) {
				null === this.parent && this.updateMatrixWorld();
				var m = a.xr.enabled,
					z = a.getRenderTarget();
				a.xr.enabled = !1;
				var r = c.texture.generateMipmaps;
				c.texture.generateMipmaps = !1;
				a.setRenderTarget(c, 0);
				a.render(b, d);
				a.setRenderTarget(c, 1);
				a.render(b, e);
				a.setRenderTarget(c, 2);
				a.render(b, f);
				a.setRenderTarget(c, 3);
				a.render(b, g);
				a.setRenderTarget(c, 4);
				a.render(b, h);
				c.texture.generateMipmaps = r;
				a.setRenderTarget(c,
					5);
				a.render(b, l);
				a.setRenderTarget(z);
				a.xr.enabled = m
			};
			this.clear = function(a, b, d, e) {
				for (var f = a.getRenderTarget(), g = 0; 6 > g; g++) a.setRenderTarget(c, g), a.clear(b, d, e);
				a.setRenderTarget(f)
			}
		}
	}

	function Zb(a, b, c) {
		Number.isInteger(b) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), b = c);
		Ba.call(this, a, a, b)
	}

	function $b(a, b, c, d, e, f, g, h, l, m, z, n) {
		W.call(this, null, f, g, h, l, m, d, e, z, n);
		this.image = {
			data: a || null,
			width: b || 1,
			height: c || 1
		};
		this.magFilter =
			void 0 !== l ? l : 1003;
		this.minFilter = void 0 !== m ? m : 1003;
		this.flipY = this.generateMipmaps = !1;
		this.unpackAlignment = 1;
		this.needsUpdate = !0
	}

	function Gc(a, b, c, d, e, f) {
		this.planes = [void 0 !== a ? a : new Wa, void 0 !== b ? b : new Wa, void 0 !== c ? c : new Wa, void 0 !== d ? d : new Wa, void 0 !== e ? e : new Wa, void 0 !== f ? f : new Wa]
	}

	function uh() {
		function a(e, f) {
			!1 !== c && (d(e, f), b.requestAnimationFrame(a))
		}
		var b = null,
			c = !1,
			d = null;
		return {
			start: function() {
				!0 !== c && null !== d && (b.requestAnimationFrame(a), c = !0)
			},
			stop: function() {
				c = !1
			},
			setAnimationLoop: function(a) {
				d =
					a
			},
			setContext: function(a) {
				b = a
			}
		}
	}

	function jj(a, b) {
		function c(b, c) {
			var d = b.array,
				e = b.usage,
				f = a.createBuffer();
			a.bindBuffer(c, f);
			a.bufferData(c, d, e);
			b.onUploadCallback();
			c = 5126;
			d instanceof Float32Array ? c = 5126 : d instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : d instanceof Uint16Array ? c = 5123 : d instanceof Int16Array ? c = 5122 : d instanceof Uint32Array ? c = 5125 : d instanceof Int32Array ? c = 5124 : d instanceof Int8Array ? c = 5120 : d instanceof Uint8Array && (c =
				5121);
			return {
				buffer: f,
				type: c,
				bytesPerElement: d.BYTES_PER_ELEMENT,
				version: b.version
			}
		}
		var d = b.isWebGL2,
			e = new WeakMap;
		return {
			get: function(a) {
				a.isInterleavedBufferAttribute && (a = a.data);
				return e.get(a)
			},
			remove: function(b) {
				b.isInterleavedBufferAttribute && (b = b.data);
				var c = e.get(b);
				c && (a.deleteBuffer(c.buffer), e.delete(b))
			},
			update: function(b, g) {
				b.isInterleavedBufferAttribute && (b = b.data);
				var f = e.get(b);
				if (void 0 === f) e.set(b, c(b, g));
				else if (f.version < b.version) {
					var l = b.array,
						m = b.updateRange;
					a.bindBuffer(g,
						f.buffer); - 1 === m.count ? a.bufferSubData(g, 0, l) : (d ? a.bufferSubData(g, m.offset * l.BYTES_PER_ELEMENT, l, m.offset, m.count) : a.bufferSubData(g, m.offset * l.BYTES_PER_ELEMENT, l.subarray(m.offset, m.offset + m.count)), m.count = -1);
					f.version = b.version
				}
			}
		}
	}

	function Fd(a, b, c, d) {
		L.call(this);
		this.type = "PlaneGeometry";
		this.parameters = {
			width: a,
			height: b,
			widthSegments: c,
			heightSegments: d
		};
		this.fromBufferGeometry(new ac(a, b, c, d));
		this.mergeVertices()
	}

	function ac(a, b, c, d) {
		F.call(this);
		this.type = "PlaneBufferGeometry";
		this.parameters = {
			width: a,
			height: b,
			widthSegments: c,
			heightSegments: d
		};
		a = a || 1;
		b = b || 1;
		var e = a / 2,
			f = b / 2;
		c = Math.floor(c) || 1;
		d = Math.floor(d) || 1;
		var g = c + 1,
			h = d + 1,
			l = a / c,
			m = b / d,
			z = [],
			n = [],
			t = [],
			r = [];
		for (a = 0; a < h; a++) {
			var k = a * m - f;
			for (b = 0; b < g; b++) n.push(b * l - e, -k, 0), t.push(0, 0, 1), r.push(b / c), r.push(1 - a / d)
		}
		for (a = 0; a < d; a++)
			for (b = 0; b < c; b++) e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, z.push(b + g * a, e, h), z.push(e, f, h);
		this.setIndex(z);
		this.setAttribute("position", new B(n, 3));
		this.setAttribute("normal", new B(t, 3));
		this.setAttribute("uv", new B(r, 2))
	}

	function kj(a, b, c, d) {
		function e(a, c) {
			b.buffers.color.setClear(a.r, a.g, a.b, c, d)
		}
		var f = new D(0),
			g = 0,
			h, l, m = null,
			z = 0,
			n = null;
		return {
			getClearColor: function() {
				return f
			},
			setClearColor: function(a, b) {
				f.set(a);
				g = void 0 !== b ? b : 1;
				e(f, g)
			},
			getClearAlpha: function() {
				return g
			},
			setClearAlpha: function(a) {
				g = a;
				e(f, g)
			},
			render: function(b, d, k, u) {
				d = d.background;
				k = a.xr;
				(k = k.getSession && k.getSession()) && "additive" === k.environmentBlendMode && (d = null);
				null === d ? e(f, g) : d && d.isColor && (e(d, 1), u = !0);
				(a.autoClear || u) && a.clear(a.autoClearColor,
					a.autoClearDepth, a.autoClearStencil);
				if (d && (d.isCubeTexture || d.isWebGLCubeRenderTarget || 306 === d.mapping)) {
					void 0 === l && (l = new ea(new Gd(1, 1, 1), new Ca({
						type: "BackgroundCubeMaterial",
						uniforms: Ec(gb.cube.uniforms),
						vertexShader: gb.cube.vertexShader,
						fragmentShader: gb.cube.fragmentShader,
						side: 1,
						depthTest: !1,
						depthWrite: !1,
						fog: !1
					})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(a, b, c) {
						this.matrixWorld.copyPosition(c.matrixWorld)
					}, Object.defineProperty(l.material,
						"envMap", {
							get: function() {
								return this.uniforms.envMap.value
							}
						}), c.update(l));
					u = d.isWebGLCubeRenderTarget ? d.texture : d;
					l.material.uniforms.envMap.value = u;
					l.material.uniforms.flipEnvMap.value = u.isCubeTexture ? -1 : 1;
					if (m !== d || z !== u.version || n !== a.toneMapping) l.material.needsUpdate = !0, m = d, z = u.version, n = a.toneMapping;
					b.unshift(l, l.geometry, l.material, 0, 0, null)
				} else if (d && d.isTexture) {
					void 0 === h && (h = new ea(new ac(2, 2), new Ca({
						type: "BackgroundMaterial",
						uniforms: Ec(gb.background.uniforms),
						vertexShader: gb.background.vertexShader,
						fragmentShader: gb.background.fragmentShader,
						side: 0,
						depthTest: !1,
						depthWrite: !1,
						fog: !1
					})), h.geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
						get: function() {
							return this.uniforms.t2D.value
						}
					}), c.update(h));
					h.material.uniforms.t2D.value = d;
					!0 === d.matrixAutoUpdate && d.updateMatrix();
					h.material.uniforms.uvTransform.value.copy(d.matrix);
					if (m !== d || z !== d.version || n !== a.toneMapping) h.material.needsUpdate = !0, m = d, z = d.version, n = a.toneMapping;
					b.unshift(h, h.geometry, h.material, 0, 0, null)
				}
			}
		}
	}

	function lj(a, b, c, d) {
		var e = d.isWebGL2,
			f;
		this.setMode = function(a) {
			f = a
		};
		this.render = function(b, d) {
			a.drawArrays(f, b, d);
			c.update(d, f)
		};
		this.renderInstances = function(d, h, l, m) {
			if (0 !== m) {
				if (e) {
					d = a;
					var g = "drawArraysInstanced"
				} else if (d = b.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", null === d) {
					console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
					return
				}
				d[g](f, h, l, m);
				c.update(l, f, m)
			}
		}
	}

	function mj(a, b, c) {
		function d(b) {
			if ("highp" ===
				b) {
				if (0 < a.getShaderPrecisionFormat(35633, 36338).precision && 0 < a.getShaderPrecisionFormat(35632, 36338).precision) return "highp";
				b = "mediump"
			}
			return "mediump" === b && 0 < a.getShaderPrecisionFormat(35633, 36337).precision && 0 < a.getShaderPrecisionFormat(35632, 36337).precision ? "mediump" : "lowp"
		}
		var e, f = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext || "undefined" !== typeof WebGL2ComputeRenderingContext && a instanceof WebGL2ComputeRenderingContext,
			g = void 0 !== c.precision ? c.precision : "highp",
			h = d(g);
		h !== g && (console.warn("THREE.WebGLRenderer:", g, "not supported, using", h, "instead."), g = h);
		c = !0 === c.logarithmicDepthBuffer;
		h = a.getParameter(34930);
		var l = a.getParameter(35660),
			m = a.getParameter(3379),
			z = a.getParameter(34076),
			n = a.getParameter(34921),
			k = a.getParameter(36347),
			r = a.getParameter(36348),
			q = a.getParameter(36349),
			u = 0 < l,
			p = f || !!b.get("OES_texture_float"),
			x = u && p,
			w = f ? a.getParameter(36183) : 0;
		return {
			isWebGL2: f,
			getMaxAnisotropy: function() {
				if (void 0 !== e) return e;
				var c = b.get("EXT_texture_filter_anisotropic");
				return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
			},
			getMaxPrecision: d,
			precision: g,
			logarithmicDepthBuffer: c,
			maxTextures: h,
			maxVertexTextures: l,
			maxTextureSize: m,
			maxCubemapSize: z,
			maxAttributes: n,
			maxVertexUniforms: k,
			maxVaryings: r,
			maxFragmentUniforms: q,
			vertexTextures: u,
			floatFragmentTextures: p,
			floatVertexTextures: x,
			maxSamples: w
		}
	}

	function nj() {
		function a() {
			m.value !== d && (m.value = d, m.needsUpdate = 0 < e);
			c.numPlanes = e;
			c.numIntersection = 0
		}

		function b(a, b, d, e) {
			var f = null !== a ? a.length : 0,
				g = null;
			if (0 !==
				f) {
				g = m.value;
				if (!0 !== e || null === g) {
					e = d + 4 * f;
					b = b.matrixWorldInverse;
					l.getNormalMatrix(b);
					if (null === g || g.length < e) g = new Float32Array(e);
					for (e = 0; e !== f; ++e, d += 4) h.copy(a[e]).applyMatrix4(b, l), h.normal.toArray(g, d), g[d + 3] = h.constant
				}
				m.value = g;
				m.needsUpdate = !0
			}
			c.numPlanes = f;
			c.numIntersection = 0;
			return g
		}
		var c = this,
			d = null,
			e = 0,
			f = !1,
			g = !1,
			h = new Wa,
			l = new ya,
			m = {
				value: null,
				needsUpdate: !1
			};
		this.uniform = m;
		this.numIntersection = this.numPlanes = 0;
		this.init = function(a, c, g) {
			var h = 0 !== a.length || c || 0 !== e || f;
			f = c;
			d = b(a, g, 0);
			e = a.length;
			return h
		};
		this.beginShadows = function() {
			g = !0;
			b(null)
		};
		this.endShadows = function() {
			g = !1;
			a()
		};
		this.setState = function(c, h, l, k, q, u) {
			if (!f || null === c || 0 === c.length || g && !l) g ? b(null) : a();
			else {
				l = g ? 0 : e;
				var n = 4 * l,
					z = q.clippingState || null;
				m.value = z;
				z = b(c, k, n, u);
				for (c = 0; c !== n; ++c) z[c] = d[c];
				q.clippingState = z;
				this.numIntersection = h ? this.numPlanes : 0;
				this.numPlanes += l
			}
		}
	}

	function oj(a) {
		var b = {};
		return {
			get: function(c) {
				if (void 0 !== b[c]) return b[c];
				switch (c) {
					case "WEBGL_depth_texture":
						var d = a.getExtension("WEBGL_depth_texture") ||
							a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
						break;
					case "EXT_texture_filter_anisotropic":
						d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
						break;
					case "WEBGL_compressed_texture_s3tc":
						d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
						break;
					case "WEBGL_compressed_texture_pvrtc":
						d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
						break;
					default:
						d = a.getExtension(c)
				}
				null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
				return b[c] = d
			}
		}
	}

	function pj(a, b, c) {
		function d(a) {
			var e = a.target;
			a = f.get(e);
			null !== a.index && b.remove(a.index);
			for (var h in a.attributes) b.remove(a.attributes[h]);
			e.removeEventListener("dispose", d);
			f.delete(e);
			if (h = g.get(a)) b.remove(h), g.delete(a);
			c.memory.geometries--
		}

		function e(a) {
			var c = [],
				d = a.index,
				e = a.attributes.position;
			if (null !== d) {
				var f = d.array;
				d = d.version;
				e = 0;
				for (var h = f.length; e < h; e += 3) {
					var k = f[e + 0],
						q = f[e + 1],
						u = f[e + 2];
					c.push(k, q, q, u, u, k)
				}
			} else
				for (f = e.array, d = e.version, e = 0, h = f.length / 3 - 1; e < h; e += 3) k = e + 0, q = e + 1, u = e + 2, c.push(k, q, q, u, u, k);
			c = new(65535 < sh(c) ? Yb : Xb)(c, 1);
			c.version = d;
			b.update(c, 34963);
			(f = g.get(a)) && b.remove(f);
			g.set(a, c)
		}
		var f = new WeakMap,
			g = new WeakMap;
		return {
			get: function(a, b) {
				var e = f.get(b);
				if (e) return e;
				b.addEventListener("dispose",
					d);
				b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new F).setFromObject(a)), e = b._bufferGeometry);
				f.set(b, e);
				c.memory.geometries++;
				return e
			},
			update: function(a) {
				var c = a.index,
					d = a.attributes;
				null !== c && b.update(c, 34963);
				for (var e in d) b.update(d[e], 34962);
				a = a.morphAttributes;
				for (e in a) {
					c = a[e];
					d = 0;
					for (var f = c.length; d < f; d++) b.update(c[d], 34962)
				}
			},
			getWireframeAttribute: function(a) {
				var b = g.get(a);
				if (b) {
					var c = a.index;
					null !== c && b.version < c.version && e(a)
				} else e(a);
				return g.get(a)
			}
		}
	}

	function qj(a, b, c, d) {
		var e = d.isWebGL2,
			f, g, h;
		this.setMode = function(a) {
			f = a
		};
		this.setIndex = function(a) {
			g = a.type;
			h = a.bytesPerElement
		};
		this.render = function(b, d) {
			a.drawElements(f, d, g, b * h);
			c.update(d, f)
		};
		this.renderInstances = function(d, m, z, n) {
			if (0 !== n) {
				if (e) {
					d = a;
					var l = "drawElementsInstanced"
				} else if (d = b.get("ANGLE_instanced_arrays"), l = "drawElementsInstancedANGLE", null === d) {
					console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
					return
				}
				d[l](f, z, g, m * h, n);
				c.update(z, f, n)
			}
		}
	}

	function rj(a) {
		var b = {
			frame: 0,
			calls: 0,
			triangles: 0,
			points: 0,
			lines: 0
		};
		return {
			memory: {
				geometries: 0,
				textures: 0
			},
			render: b,
			programs: null,
			autoReset: !0,
			reset: function() {
				b.frame++;
				b.calls = 0;
				b.triangles = 0;
				b.points = 0;
				b.lines = 0
			},
			update: function(a, d, e) {
				e = e || 1;
				b.calls++;
				switch (d) {
					case 4:
						b.triangles += a / 3 * e;
						break;
					case 1:
						b.lines += a / 2 * e;
						break;
					case 3:
						b.lines += e * (a - 1);
						break;
					case 2:
						b.lines += e * a;
						break;
					case 0:
						b.points += e * a;
						break;
					default:
						console.error("THREE.WebGLInfo: Unknown draw mode:",
							d)
				}
			}
		}
	}

	function sj(a, b) {
		return Math.abs(b[1]) - Math.abs(a[1])
	}

	function tj(a) {
		var b = {},
			c = new Float32Array(8);
		return {
			update: function(d, e, f, g) {
				var h = d.morphTargetInfluences,
					l = void 0 === h ? 0 : h.length;
				d = b[e.id];
				if (void 0 === d) {
					d = [];
					for (var m = 0; m < l; m++) d[m] = [m, 0];
					b[e.id] = d
				}
				var z = f.morphTargets && e.morphAttributes.position;
				f = f.morphNormals && e.morphAttributes.normal;
				for (m = 0; m < l; m++) {
					var n = d[m];
					0 !== n[1] && (z && e.deleteAttribute("morphTarget" + m), f && e.deleteAttribute("morphNormal" + m))
				}
				for (m = 0; m < l; m++) n = d[m], n[0] = m,
					n[1] = h[m];
				d.sort(sj);
				for (m = h = 0; 8 > m; m++) {
					if (n = d[m])
						if (l = n[0], n = n[1]) {
							z && e.setAttribute("morphTarget" + m, z[l]);
							f && e.setAttribute("morphNormal" + m, f[l]);
							c[m] = n;
							h += n;
							continue
						} c[m] = 0
				}
				e = e.morphTargetsRelative ? 1 : 1 - h;
				g.getUniforms().setValue(a, "morphTargetBaseInfluence", e);
				g.getUniforms().setValue(a, "morphTargetInfluences", c)
			}
		}
	}

	function uj(a, b, c, d) {
		var e = new WeakMap;
		return {
			update: function(a) {
				var f = d.render.frame,
					h = a.geometry,
					l = b.get(a, h);
				e.get(l) !== f && (h.isGeometry && l.updateFromObject(a), b.update(l), e.set(l,
					f));
				a.isInstancedMesh && c.update(a.instanceMatrix, 34962);
				return l
			},
			dispose: function() {
				e = new WeakMap
			}
		}
	}

	function qb(a, b, c, d, e, f, g, h, l, m) {
		a = void 0 !== a ? a : [];
		W.call(this, a, void 0 !== b ? b : 301, c, d, e, f, void 0 !== g ? g : 1022, h, l, m);
		this.flipY = !1
	}

	function Hc(a, b, c, d) {
		W.call(this, null);
		this.image = {
			data: a || null,
			width: b || 1,
			height: c || 1,
			depth: d || 1
		};
		this.minFilter = this.magFilter = 1003;
		this.wrapR = 1001;
		this.flipY = this.generateMipmaps = !1;
		this.needsUpdate = !0
	}

	function Ic(a, b, c, d) {
		W.call(this, null);
		this.image = {
			data: a || null,
			width: b ||
				1,
			height: c || 1,
			depth: d || 1
		};
		this.minFilter = this.magFilter = 1003;
		this.wrapR = 1001;
		this.flipY = this.generateMipmaps = !1;
		this.needsUpdate = !0
	}

	function Jc(a, b, c) {
		var d = a[0];
		if (0 >= d || 0 < d) return a;
		var e = b * c,
			f = vh[e];
		void 0 === f && (f = new Float32Array(e), vh[e] = f);
		if (0 !== b)
			for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d) e += c, a[d].toArray(f, e);
		return f
	}

	function Qa(a, b) {
		if (a.length !== b.length) return !1;
		for (var c = 0, d = a.length; c < d; c++)
			if (a[c] !== b[c]) return !1;
		return !0
	}

	function Ja(a, b) {
		for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
	}

	function wh(a,
		b) {
		var c = xh[b];
		void 0 === c && (c = new Int32Array(b), xh[b] = c);
		for (var d = 0; d !== b; ++d) c[d] = a.allocateTextureUnit();
		return c
	}

	function vj(a, b) {
		var c = this.cache;
		c[0] !== b && (a.uniform1f(this.addr, b), c[0] = b)
	}

	function wj(a, b) {
		var c = this.cache;
		if (void 0 !== b.x) {
			if (c[0] !== b.x || c[1] !== b.y) a.uniform2f(this.addr, b.x, b.y), c[0] = b.x, c[1] = b.y
		} else Qa(c, b) || (a.uniform2fv(this.addr, b), Ja(c, b))
	}

	function xj(a, b) {
		var c = this.cache;
		if (void 0 !== b.x) {
			if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z) a.uniform3f(this.addr, b.x, b.y, b.z), c[0] = b.x,
				c[1] = b.y, c[2] = b.z
		} else if (void 0 !== b.r) {
			if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b) a.uniform3f(this.addr, b.r, b.g, b.b), c[0] = b.r, c[1] = b.g, c[2] = b.b
		} else Qa(c, b) || (a.uniform3fv(this.addr, b), Ja(c, b))
	}

	function yj(a, b) {
		var c = this.cache;
		if (void 0 !== b.x) {
			if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w) a.uniform4f(this.addr, b.x, b.y, b.z, b.w), c[0] = b.x, c[1] = b.y, c[2] = b.z, c[3] = b.w
		} else Qa(c, b) || (a.uniform4fv(this.addr, b), Ja(c, b))
	}

	function zj(a, b) {
		var c = this.cache,
			d = b.elements;
		void 0 === d ? Qa(c, b) || (a.uniformMatrix2fv(this.addr,
			!1, b), Ja(c, b)) : Qa(c, d) || (yh.set(d), a.uniformMatrix2fv(this.addr, !1, yh), Ja(c, d))
	}

	function Aj(a, b) {
		var c = this.cache,
			d = b.elements;
		void 0 === d ? Qa(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), Ja(c, b)) : Qa(c, d) || (zh.set(d), a.uniformMatrix3fv(this.addr, !1, zh), Ja(c, d))
	}

	function Bj(a, b) {
		var c = this.cache,
			d = b.elements;
		void 0 === d ? Qa(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), Ja(c, b)) : Qa(c, d) || (Ah.set(d), a.uniformMatrix4fv(this.addr, !1, Ah), Ja(c, d))
	}

	function Cj(a, b, c) {
		var d = this.cache,
			e = c.allocateTextureUnit();
		d[0] !==
			e && (a.uniform1i(this.addr, e), d[0] = e);
		c.safeSetTexture2D(b || Bh, e)
	}

	function Dj(a, b, c) {
		var d = this.cache,
			e = c.allocateTextureUnit();
		d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
		c.setTexture2DArray(b || Ej, e)
	}

	function Fj(a, b, c) {
		var d = this.cache,
			e = c.allocateTextureUnit();
		d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
		c.setTexture3D(b || Gj, e)
	}

	function Hj(a, b, c) {
		var d = this.cache,
			e = c.allocateTextureUnit();
		d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
		c.safeSetTextureCube(b || Ch, e)
	}

	function Ij(a, b) {
		var c = this.cache;
		c[0] !==
			b && (a.uniform1i(this.addr, b), c[0] = b)
	}

	function Jj(a, b) {
		var c = this.cache;
		Qa(c, b) || (a.uniform2iv(this.addr, b), Ja(c, b))
	}

	function Kj(a, b) {
		var c = this.cache;
		Qa(c, b) || (a.uniform3iv(this.addr, b), Ja(c, b))
	}

	function Lj(a, b) {
		var c = this.cache;
		Qa(c, b) || (a.uniform4iv(this.addr, b), Ja(c, b))
	}

	function Mj(a, b) {
		var c = this.cache;
		c[0] !== b && (a.uniform1ui(this.addr, b), c[0] = b)
	}

	function Nj(a) {
		switch (a) {
			case 5126:
				return vj;
			case 35664:
				return wj;
			case 35665:
				return xj;
			case 35666:
				return yj;
			case 35674:
				return zj;
			case 35675:
				return Aj;
			case 35676:
				return Bj;
			case 5124:
			case 35670:
				return Ij;
			case 35667:
			case 35671:
				return Jj;
			case 35668:
			case 35672:
				return Kj;
			case 35669:
			case 35673:
				return Lj;
			case 5125:
				return Mj;
			case 35678:
			case 36198:
			case 36298:
			case 36306:
			case 35682:
				return Cj;
			case 35679:
			case 36299:
			case 36307:
				return Fj;
			case 35680:
			case 36300:
			case 36308:
			case 36293:
				return Hj;
			case 36289:
			case 36303:
			case 36311:
			case 36292:
				return Dj
		}
	}

	function Oj(a, b) {
		a.uniform1fv(this.addr, b)
	}

	function Pj(a, b) {
		a.uniform1iv(this.addr, b)
	}

	function Qj(a, b) {
		a.uniform2iv(this.addr,
			b)
	}

	function Rj(a, b) {
		a.uniform3iv(this.addr, b)
	}

	function Sj(a, b) {
		a.uniform4iv(this.addr, b)
	}

	function Tj(a, b) {
		b = Jc(b, this.size, 2);
		a.uniform2fv(this.addr, b)
	}

	function Uj(a, b) {
		b = Jc(b, this.size, 3);
		a.uniform3fv(this.addr, b)
	}

	function Vj(a, b) {
		b = Jc(b, this.size, 4);
		a.uniform4fv(this.addr, b)
	}

	function Wj(a, b) {
		b = Jc(b, this.size, 4);
		a.uniformMatrix2fv(this.addr, !1, b)
	}

	function Xj(a, b) {
		b = Jc(b, this.size, 9);
		a.uniformMatrix3fv(this.addr, !1, b)
	}

	function Yj(a, b) {
		b = Jc(b, this.size, 16);
		a.uniformMatrix4fv(this.addr, !1, b)
	}

	function Zj(a,
		b, c) {
		var d = b.length,
			e = wh(c, d);
		a.uniform1iv(this.addr, e);
		for (a = 0; a !== d; ++a) c.safeSetTexture2D(b[a] || Bh, e[a])
	}

	function ak(a, b, c) {
		var d = b.length,
			e = wh(c, d);
		a.uniform1iv(this.addr, e);
		for (a = 0; a !== d; ++a) c.safeSetTextureCube(b[a] || Ch, e[a])
	}

	function bk(a) {
		switch (a) {
			case 5126:
				return Oj;
			case 35664:
				return Tj;
			case 35665:
				return Uj;
			case 35666:
				return Vj;
			case 35674:
				return Wj;
			case 35675:
				return Xj;
			case 35676:
				return Yj;
			case 5124:
			case 35670:
				return Pj;
			case 35667:
			case 35671:
				return Qj;
			case 35668:
			case 35672:
				return Rj;
			case 35669:
			case 35673:
				return Sj;
			case 35678:
			case 36198:
			case 36298:
			case 36306:
			case 35682:
				return Zj;
			case 35680:
			case 36300:
			case 36308:
			case 36293:
				return ak
		}
	}

	function ck(a, b, c) {
		this.id = a;
		this.addr = c;
		this.cache = [];
		this.setValue = Nj(b.type)
	}

	function Dh(a, b, c) {
		this.id = a;
		this.addr = c;
		this.cache = [];
		this.size = b.size;
		this.setValue = bk(b.type)
	}

	function Eh(a) {
		this.id = a;
		this.seq = [];
		this.map = {}
	}

	function Gb(a, b) {
		this.seq = [];
		this.map = {};
		for (var c = a.getProgramParameter(b, 35718), d = 0; d < c; ++d) {
			var e = a.getActiveUniform(b, d),
				f = a.getUniformLocation(b, e.name),
				g = this,
				h = e.name,
				l = h.length;
			for (eg.lastIndex = 0;;) {
				var m = eg.exec(h),
					z = eg.lastIndex,
					n = m[1],
					k = m[3];
				"]" === m[2] && (n |= 0);
				if (void 0 === k || "[" === k && z + 2 === l) {
					h = g;
					e = void 0 === k ? new ck(n, e, f) : new Dh(n, e, f);
					h.seq.push(e);
					h.map[e.id] = e;
					break
				} else k = g.map[n], void 0 === k && (k = new Eh(n), n = g, g = k, n.seq.push(g), n.map[g.id] = g), g = k
			}
		}
	}

	function Fh(a, b, c) {
		b = a.createShader(b);
		a.shaderSource(b, c);
		a.compileShader(b);
		return b
	}

	function Gh(a) {
		switch (a) {
			case 3E3:
				return ["Linear", "( value )"];
			case 3001:
				return ["sRGB", "( value )"];
			case 3002:
				return ["RGBE",
					"( value )"
				];
			case 3004:
				return ["RGBM", "( value, 7.0 )"];
			case 3005:
				return ["RGBM", "( value, 16.0 )"];
			case 3006:
				return ["RGBD", "( value, 256.0 )"];
			case 3007:
				return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
			case 3003:
				return ["LogLuv", "( value )"];
			default:
				throw Error("unsupported encoding: " + a);
		}
	}

	function Hh(a, b, c) {
		var d = a.getShaderParameter(b, 35713),
			e = a.getShaderInfoLog(b).trim();
		if (d && "" === e) return "";
		a = a.getShaderSource(b).split("\n");
		for (b = 0; b < a.length; b++) a[b] = b + 1 + ": " + a[b];
		a = a.join("\n");
		return "THREE.WebGLShader: gl.getShaderInfoLog() " +
			c + "\n" + e + a
	}

	function Hd(a, b) {
		b = Gh(b);
		return "vec4 " + a + "( vec4 value ) { return " + b[0] + "ToLinear" + b[1] + "; }"
	}

	function dk(a, b) {
		b = Gh(b);
		return "vec4 " + a + "( vec4 value ) { return LinearTo" + b[0] + b[1] + "; }"
	}

	function ek(a, b) {
		switch (b) {
			case 1:
				b = "Linear";
				break;
			case 2:
				b = "Reinhard";
				break;
			case 3:
				b = "Uncharted2";
				break;
			case 4:
				b = "OptimizedCineon";
				break;
			case 5:
				b = "ACESFilmic";
				break;
			default:
				throw Error("unsupported toneMapping: " + b);
		}
		return "vec3 " + a + "( vec3 color ) { return " + b + "ToneMapping( color ); }"
	}

	function fk(a) {
		var b = [],
			c;
		for (c in a) {
			var d = a[c];
			!1 !== d && b.push("#define " + c + " " + d)
		}
		return b.join("\n")
	}

	function Id(a) {
		return "" !== a
	}

	function Ih(a, b) {
		return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,
			b.numPointLightShadows)
	}

	function Jh(a, b) {
		return a.replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, b.numClippingPlanes - b.numClipIntersection)
	}

	function fg(a, b) {
		a = M[b];
		if (void 0 === a) throw Error("Can not resolve #include <" + b + ">");
		return a.replace(gg, fg)
	}

	function Kh(a, b, c, d) {
		console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");
		return hg(a, b, c, d)
	}

	function hg(a, b, c, d) {
		a = "";
		for (b = parseInt(b); b <
			parseInt(c); b++) a += d.replace(/\[ i \]/g, "[ " + b + " ]").replace(/UNROLLED_LOOP_INDEX/g, b);
		return a
	}

	function Lh(a) {
		var b = "precision " + a.precision + " float;\nprecision " + a.precision + " int;";
		"highp" === a.precision ? b += "\n#define HIGH_PRECISION" : "mediump" === a.precision ? b += "\n#define MEDIUM_PRECISION" : "lowp" === a.precision && (b += "\n#define LOW_PRECISION");
		return b
	}

	function gk(a) {
		var b = "SHADOWMAP_TYPE_BASIC";
		1 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === a.shadowMapType &&
			(b = "SHADOWMAP_TYPE_VSM");
		return b
	}

	function hk(a) {
		var b = "ENVMAP_TYPE_CUBE";
		if (a.envMap) switch (a.envMapMode) {
			case 301:
			case 302:
				b = "ENVMAP_TYPE_CUBE";
				break;
			case 306:
			case 307:
				b = "ENVMAP_TYPE_CUBE_UV";
				break;
			case 303:
			case 304:
				b = "ENVMAP_TYPE_EQUIREC";
				break;
			case 305:
				b = "ENVMAP_TYPE_SPHERE"
		}
		return b
	}

	function ik(a) {
		var b = "ENVMAP_MODE_REFLECTION";
		if (a.envMap) switch (a.envMapMode) {
			case 302:
			case 304:
				b = "ENVMAP_MODE_REFRACTION"
		}
		return b
	}

	function jk(a) {
		var b = "ENVMAP_BLENDING_NONE";
		if (a.envMap) switch (a.combine) {
			case 0:
				b =
					"ENVMAP_BLENDING_MULTIPLY";
				break;
			case 1:
				b = "ENVMAP_BLENDING_MIX";
				break;
			case 2:
				b = "ENVMAP_BLENDING_ADD"
		}
		return b
	}

	function kk(a, b, c) {
		var d = a.getContext(),
			e = c.defines,
			f = c.vertexShader,
			g = c.fragmentShader,
			h = gk(c),
			l = hk(c),
			m = ik(c),
			z = jk(c),
			n = 0 < a.gammaFactor ? a.gammaFactor : 1,
			k = c.isWebGL2 ? "" : [c.extensionDerivatives || c.envMapCubeUV || c.bumpMap || c.tangentSpaceNormalMap || c.clearcoatNormalMap || c.flatShading || "physical" === c.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (c.extensionFragDepth || c.logarithmicDepthBuffer) &&
				c.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", c.extensionDrawBuffers && c.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (c.extensionShaderTextureLOD || c.envMap) && c.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
			].filter(Id).join("\n"),
			r = fk(e),
			q = d.createProgram();
		c.isRawShaderMaterial ? (e = [r].filter(Id).join("\n"), 0 < e.length && (e += "\n"), h = [k, r].filter(Id).join("\n"), 0 < h.length && (h += "\n")) : (e = [Lh(c), "#define SHADER_NAME " +
			c.shaderName, r, c.instancing ? "#define USE_INSTANCING" : "", c.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + n, "#define MAX_BONES " + c.maxBones, c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + m : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" :
			"", c.normalMap && c.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", c.normalMap && c.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", c.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", c.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", c.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", c.displacementMap && c.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", c.metalnessMap ? "#define USE_METALNESSMAP" :
			"", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.vertexTangents ? "#define USE_TANGENT" : "", c.vertexColors ? "#define USE_COLOR" : "", c.vertexUvs ? "#define USE_UV" : "", c.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals && !1 === c.flatShading ? "#define USE_MORPHNORMALS" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" :
			"", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + h : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && c.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING",
			" attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;",
			"\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"
		].filter(Id).join("\n"), h = [k, Lh(c), "#define SHADER_NAME " + c.shaderName, r, c.alphaTest ? "#define ALPHATEST " + c.alphaTest + (c.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + n, c.useFog && c.fog ? "#define USE_FOG" :
			"", c.useFog && c.fogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.matcap ? "#define USE_MATCAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + l : "", c.envMap ? "#define " + m : "", c.envMap ? "#define " + z : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.normalMap && c.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", c.normalMap && c.tangentSpaceNormalMap ?
			"#define TANGENTSPACE_NORMALMAP" : "", c.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", c.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", c.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", c.metalnessMap ? "#define USE_METALNESSMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.sheen ? "#define USE_SHEEN" : "", c.vertexTangents ? "#define USE_TANGENT" : "", c.vertexColors ? "#define USE_COLOR" : "", c.vertexUvs ? "#define USE_UV" :
			"", c.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", c.gradientMap ? "#define USE_GRADIENTMAP" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + h : "", c.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", c.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && c.rendererExtensionFragDepth ?
			"#define USE_LOGDEPTHBUF_EXT" : "", (c.extensionShaderTextureLOD || c.envMap) && c.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== c.toneMapping ? "#define TONE_MAPPING" : "", 0 !== c.toneMapping ? M.tonemapping_pars_fragment : "", 0 !== c.toneMapping ? ek("toneMapping", c.toneMapping) : "", c.dithering ? "#define DITHERING" : "", c.outputEncoding || c.mapEncoding || c.matcapEncoding || c.envMapEncoding || c.emissiveMapEncoding ||
			c.lightMapEncoding ? M.encodings_pars_fragment : "", c.mapEncoding ? Hd("mapTexelToLinear", c.mapEncoding) : "", c.matcapEncoding ? Hd("matcapTexelToLinear", c.matcapEncoding) : "", c.envMapEncoding ? Hd("envMapTexelToLinear", c.envMapEncoding) : "", c.emissiveMapEncoding ? Hd("emissiveMapTexelToLinear", c.emissiveMapEncoding) : "", c.lightMapEncoding ? Hd("lightMapTexelToLinear", c.lightMapEncoding) : "", c.outputEncoding ? dk("linearToOutputTexel", c.outputEncoding) : "", c.depthPacking ? "#define DEPTH_PACKING " + c.depthPacking : "", "\n"
		].filter(Id).join("\n"));
		f = f.replace(gg, fg);
		f = Ih(f, c);
		f = Jh(f, c);
		g = g.replace(gg, fg);
		g = Ih(g, c);
		g = Jh(g, c);
		f = f.replace(Mh, hg).replace(Nh, Kh);
		g = g.replace(Mh, hg).replace(Nh, Kh);
		c.isWebGL2 && !c.isRawShaderMaterial && (l = !1, m = /^\s*#version\s+300\s+es\s*\n/, c.isShaderMaterial && null !== f.match(m) && null !== g.match(m) && (l = !0, f = f.replace(m, ""), g = g.replace(m, "")), e = "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" + e, h = ["#version 300 es\n\n#define varying in", l ? "" : "out highp vec4 pc_fragColor;", l ? "" :
			"#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"
		].join("\n") + "\n" + h);
		g = h + g;
		f = Fh(d, 35633, e + f);
		g = Fh(d, 35632, g);
		d.attachShader(q, f);
		d.attachShader(q,
			g);
		void 0 !== c.index0AttributeName ? d.bindAttribLocation(q, 0, c.index0AttributeName) : !0 === c.morphTargets && d.bindAttribLocation(q, 0, "position");
		d.linkProgram(q);
		if (a.debug.checkShaderErrors) {
			a = d.getProgramInfoLog(q).trim();
			l = d.getShaderInfoLog(f).trim();
			m = d.getShaderInfoLog(g).trim();
			n = z = !0;
			if (!1 === d.getProgramParameter(q, 35714)) z = !1, k = Hh(d, f, "vertex"), r = Hh(d, g, "fragment"), console.error("THREE.WebGLProgram: shader error: ", d.getError(), "35715", d.getProgramParameter(q, 35715), "gl.getProgramInfoLog", a, k,
				r);
			else if ("" !== a) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a);
			else if ("" === l || "" === m) n = !1;
			n && (this.diagnostics = {
				runnable: z,
				programLog: a,
				vertexShader: {
					log: l,
					prefix: e
				},
				fragmentShader: {
					log: m,
					prefix: h
				}
			})
		}
		d.deleteShader(f);
		d.deleteShader(g);
		var u;
		this.getUniforms = function() {
			void 0 === u && (u = new Gb(d, q));
			return u
		};
		var p;
		this.getAttributes = function() {
			if (void 0 === p) {
				for (var a = {}, b = d.getProgramParameter(q, 35721), c = 0; c < b; c++) {
					var e = d.getActiveAttrib(q, c).name;
					a[e] = d.getAttribLocation(q, e)
				}
				p =
					a
			}
			return p
		};
		this.destroy = function() {
			d.deleteProgram(q);
			this.program = void 0
		};
		this.name = c.shaderName;
		this.id = lk++;
		this.cacheKey = b;
		this.usedTimes = 1;
		this.program = q;
		this.vertexShader = f;
		this.fragmentShader = g;
		return this
	}

	function mk(a, b, c) {
		function d(a) {
			if (a) a.isTexture ? b = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), b = a.texture.encoding);
			else var b = 3E3;
			return b
		}
		var e = [],
			f = c.isWebGL2,
			g = c.logarithmicDepthBuffer,
			h = c.floatVertexTextures,
			l = c.precision,
			m = c.maxVertexUniforms,
			z = c.vertexTextures,
			n = {
				MeshDepthMaterial: "depth",
				MeshDistanceMaterial: "distanceRGBA",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "toon",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				MeshMatcapMaterial: "matcap",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points",
				ShadowMaterial: "shadow",
				SpriteMaterial: "sprite"
			},
			k = "precision isWebGL2 supportsVertexTextures outputEncoding instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatMap clearcoatRoughnessMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");
		this.getParameters = function(e, k, t, p, x, w, ja) {
			var q = p.fog;
			p = e.isMeshStandardMaterial ? p.environment : null;
			p = e.envMap || p;
			var r = n[e.type];
			if (ja.isSkinnedMesh) {
				var u = ja.skeleton.bones;
				if (h) u = 1024;
				else {
					var E = Math.min(Math.floor((m - 20) / 4), u.length);
					E < u.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + u.length + " bones. This GPU supports " + E + "."), u = 0) : u = E
				}
			} else u = 0;
			null !== e.precision && (l = c.getMaxPrecision(e.precision), l !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using",
				l, "instead."));
			r ? (E = gb[r], E = {
				name: e.type,
				uniforms: Oh.clone(E.uniforms),
				vertexShader: E.vertexShader,
				fragmentShader: E.fragmentShader
			}) : E = {
				name: e.type,
				uniforms: e.uniforms,
				vertexShader: e.vertexShader,
				fragmentShader: e.fragmentShader
			};
			e.onBeforeCompile(E, a);
			var v = a.getRenderTarget();
			return {
				isWebGL2: f,
				shaderID: r,
				shaderName: E.name,
				uniforms: E.uniforms,
				vertexShader: E.vertexShader,
				fragmentShader: E.fragmentShader,
				defines: e.defines,
				isRawShaderMaterial: e.isRawShaderMaterial,
				isShaderMaterial: e.isShaderMaterial,
				precision: l,
				instancing: !0 === ja.isInstancedMesh,
				supportsVertexTextures: z,
				outputEncoding: null !== v ? d(v.texture) : a.outputEncoding,
				map: !!e.map,
				mapEncoding: d(e.map),
				matcap: !!e.matcap,
				matcapEncoding: d(e.matcap),
				envMap: !!p,
				envMapMode: p && p.mapping,
				envMapEncoding: d(p),
				envMapCubeUV: !!p && (306 === p.mapping || 307 === p.mapping),
				lightMap: !!e.lightMap,
				lightMapEncoding: d(e.lightMap),
				aoMap: !!e.aoMap,
				emissiveMap: !!e.emissiveMap,
				emissiveMapEncoding: d(e.emissiveMap),
				bumpMap: !!e.bumpMap,
				normalMap: !!e.normalMap,
				objectSpaceNormalMap: 1 ===
					e.normalMapType,
				tangentSpaceNormalMap: 0 === e.normalMapType,
				clearcoatMap: !!e.clearcoatMap,
				clearcoatRoughnessMap: !!e.clearcoatRoughnessMap,
				clearcoatNormalMap: !!e.clearcoatNormalMap,
				displacementMap: !!e.displacementMap,
				roughnessMap: !!e.roughnessMap,
				metalnessMap: !!e.metalnessMap,
				specularMap: !!e.specularMap,
				alphaMap: !!e.alphaMap,
				gradientMap: !!e.gradientMap,
				sheen: !!e.sheen,
				combine: e.combine,
				vertexTangents: e.normalMap && e.vertexTangents,
				vertexColors: e.vertexColors,
				vertexUvs: !!e.map || !!e.bumpMap || !!e.normalMap ||
					!!e.specularMap || !!e.alphaMap || !!e.emissiveMap || !!e.roughnessMap || !!e.metalnessMap || !!e.clearcoatMap || !!e.clearcoatRoughnessMap || !!e.clearcoatNormalMap || !!e.displacementMap,
				uvsVertexOnly: !(e.map || e.bumpMap || e.normalMap || e.specularMap || e.alphaMap || e.emissiveMap || e.roughnessMap || e.metalnessMap || e.clearcoatNormalMap) && !!e.displacementMap,
				fog: !!q,
				useFog: e.fog,
				fogExp2: q && q.isFogExp2,
				flatShading: e.flatShading,
				sizeAttenuation: e.sizeAttenuation,
				logarithmicDepthBuffer: g,
				skinning: e.skinning && 0 < u,
				maxBones: u,
				useVertexTexture: h,
				morphTargets: e.morphTargets,
				morphNormals: e.morphNormals,
				maxMorphTargets: a.maxMorphTargets,
				maxMorphNormals: a.maxMorphNormals,
				numDirLights: k.directional.length,
				numPointLights: k.point.length,
				numSpotLights: k.spot.length,
				numRectAreaLights: k.rectArea.length,
				numHemiLights: k.hemi.length,
				numDirLightShadows: k.directionalShadowMap.length,
				numPointLightShadows: k.pointShadowMap.length,
				numSpotLightShadows: k.spotShadowMap.length,
				numClippingPlanes: x,
				numClipIntersection: w,
				dithering: e.dithering,
				shadowMapEnabled: a.shadowMap.enabled &&
					0 < t.length,
				shadowMapType: a.shadowMap.type,
				toneMapping: e.toneMapped ? a.toneMapping : 0,
				physicallyCorrectLights: a.physicallyCorrectLights,
				premultipliedAlpha: e.premultipliedAlpha,
				alphaTest: e.alphaTest,
				doubleSided: 2 === e.side,
				flipSided: 1 === e.side,
				depthPacking: void 0 !== e.depthPacking ? e.depthPacking : !1,
				index0AttributeName: e.index0AttributeName,
				extensionDerivatives: e.extensions && e.extensions.derivatives,
				extensionFragDepth: e.extensions && e.extensions.fragDepth,
				extensionDrawBuffers: e.extensions && e.extensions.drawBuffers,
				extensionShaderTextureLOD: e.extensions && e.extensions.shaderTextureLOD,
				rendererExtensionFragDepth: f || null !== b.get("EXT_frag_depth"),
				rendererExtensionDrawBuffers: f || null !== b.get("WEBGL_draw_buffers"),
				rendererExtensionShaderTextureLod: f || null !== b.get("EXT_shader_texture_lod"),
				onBeforeCompile: e.onBeforeCompile
			}
		};
		this.getProgramCacheKey = function(b) {
			var c = [];
			b.shaderID ? c.push(b.shaderID) : (c.push(b.fragmentShader), c.push(b.vertexShader));
			if (void 0 !== b.defines)
				for (var d in b.defines) c.push(d), c.push(b.defines[d]);
			if (void 0 === b.isRawShaderMaterial) {
				for (d = 0; d < k.length; d++) c.push(b[k[d]]);
				c.push(a.outputEncoding);
				c.push(a.gammaFactor)
			}
			c.push(b.onBeforeCompile.toString());
			return c.join()
		};
		this.acquireProgram = function(b, c) {
			for (var d, f = 0, g = e.length; f < g; f++) {
				var h = e[f];
				if (h.cacheKey === c) {
					d = h;
					++d.usedTimes;
					break
				}
			}
			void 0 === d && (d = new kk(a, c, b), e.push(d));
			return d
		};
		this.releaseProgram = function(a) {
			if (0 === --a.usedTimes) {
				var b = e.indexOf(a);
				e[b] = e[e.length - 1];
				e.pop();
				a.destroy()
			}
		};
		this.programs = e
	}

	function nk() {
		var a = new WeakMap;
		return {
			get: function(b) {
				var c = a.get(b);
				void 0 === c && (c = {}, a.set(b, c));
				return c
			},
			remove: function(b) {
				a.delete(b)
			},
			update: function(b, c, d) {
				a.get(b)[c] = d
			},
			dispose: function() {
				a = new WeakMap
			}
		}
	}

	function ok(a, b) {
		return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
	}

	function pk(a, b) {
		return a.groupOrder !== b.groupOrder ?
			a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
	}

	function Ph() {
		function a(a, d, e, m, z, n) {
			var g = b[c];
			void 0 === g ? (g = {
				id: a.id,
				object: a,
				geometry: d,
				material: e,
				program: e.program || f,
				groupOrder: m,
				renderOrder: a.renderOrder,
				z: z,
				group: n
			}, b[c] = g) : (g.id = a.id, g.object = a, g.geometry = d, g.material = e, g.program = e.program || f, g.groupOrder = m, g.renderOrder = a.renderOrder, g.z = z, g.group = n);
			c++;
			return g
		}
		var b = [],
			c = 0,
			d = [],
			e = [],
			f = {
				id: -1
			};
		return {
			opaque: d,
			transparent: e,
			init: function() {
				c = 0;
				d.length = 0;
				e.length = 0
			},
			push: function(b, c, f, m, z, n) {
				b = a(b, c, f, m, z, n);
				(!0 === f.transparent ? e : d).push(b)
			},
			unshift: function(b, c, f, m, z, n) {
				b = a(b, c, f, m, z, n);
				(!0 === f.transparent ? e : d).unshift(b)
			},
			finish: function() {
				for (var a = c, d = b.length; a < d; a++) {
					var e = b[a];
					if (null === e.id) break;
					e.id = null;
					e.object = null;
					e.geometry = null;
					e.material = null;
					e.program = null;
					e.group = null
				}
			},
			sort: function(a, b) {
				1 < d.length && d.sort(a || ok);
				1 < e.length && e.sort(b || pk)
			}
		}
	}

	function qk() {
		function a(c) {
			c = c.target;
			c.removeEventListener("dispose",
				a);
			b.delete(c)
		}
		var b = new WeakMap;
		return {
			get: function(c, d) {
				var e = b.get(c);
				if (void 0 === e) {
					var f = new Ph;
					b.set(c, new WeakMap);
					b.get(c).set(d, f);
					c.addEventListener("dispose", a)
				} else f = e.get(d), void 0 === f && (f = new Ph, e.set(d, f));
				return f
			},
			dispose: function() {
				b = new WeakMap
			}
		}
	}

	function rk() {
		var a = {};
		return {
			get: function(b) {
				if (void 0 !== a[b.id]) return a[b.id];
				switch (b.type) {
					case "DirectionalLight":
						var c = {
							direction: new p,
							color: new D
						};
						break;
					case "SpotLight":
						c = {
							position: new p,
							direction: new p,
							color: new D,
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0
						};
						break;
					case "PointLight":
						c = {
							position: new p,
							color: new D,
							distance: 0,
							decay: 0
						};
						break;
					case "HemisphereLight":
						c = {
							direction: new p,
							skyColor: new D,
							groundColor: new D
						};
						break;
					case "RectAreaLight":
						c = {
							color: new D,
							position: new p,
							halfWidth: new p,
							halfHeight: new p
						}
				}
				return a[b.id] = c
			}
		}
	}

	function sk() {
		var a = {};
		return {
			get: function(b) {
				if (void 0 !== a[b.id]) return a[b.id];
				switch (b.type) {
					case "DirectionalLight":
						var c = {
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new v
						};
						break;
					case "SpotLight":
						c = {
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new v
						};
						break;
					case "PointLight":
						c = {
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new v,
							shadowCameraNear: 1,
							shadowCameraFar: 1E3
						}
				}
				return a[b.id] = c
			}
		}
	}

	function tk(a, b) {
		return (b.castShadow ? 1 : 0) - (a.castShadow ? 1 : 0)
	}

	function uk() {
		for (var a = new rk, b = sk(), c = {
				version: 0,
				hash: {
					directionalLength: -1,
					pointLength: -1,
					spotLength: -1,
					rectAreaLength: -1,
					hemiLength: -1,
					numDirectionalShadows: -1,
					numPointShadows: -1,
					numSpotShadows: -1
				},
				ambient: [0, 0, 0],
				probe: [],
				directional: [],
				directionalShadow: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadow: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				point: [],
				pointShadow: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: []
			}, d = 0; 9 > d; d++) c.probe.push(new p);
		var e = new p,
			f = new N,
			g = new N;
		return {
			setup: function(d, l, m) {
				for (var h = 0, n = 0, k = 0, r = 0; 9 > r; r++) c.probe[r].set(0, 0, 0);
				var q = l = 0,
					u = 0,
					p = 0,
					x = 0,
					w = 0,
					ja = 0,
					T = 0;
				m = m.matrixWorldInverse;
				d.sort(tk);
				r = 0;
				for (var Z = d.length; r < Z; r++) {
					var C = d[r],
						v = C.color,
						Q = C.intensity,
						Da = C.distance,
						Ka = C.shadow && C.shadow.map ? C.shadow.map.texture :
						null;
					if (C.isAmbientLight) h += v.r * Q, n += v.g * Q, k += v.b * Q;
					else if (C.isLightProbe)
						for (Ka = 0; 9 > Ka; Ka++) c.probe[Ka].addScaledVector(C.sh.coefficients[Ka], Q);
					else if (C.isDirectionalLight) {
						var U = a.get(C);
						U.color.copy(C.color).multiplyScalar(C.intensity);
						U.direction.setFromMatrixPosition(C.matrixWorld);
						e.setFromMatrixPosition(C.target.matrixWorld);
						U.direction.sub(e);
						U.direction.transformDirection(m);
						C.castShadow && (Q = C.shadow, v = b.get(C), v.shadowBias = Q.bias, v.shadowRadius = Q.radius, v.shadowMapSize = Q.mapSize, c.directionalShadow[l] =
							v, c.directionalShadowMap[l] = Ka, c.directionalShadowMatrix[l] = C.shadow.matrix, w++);
						c.directional[l] = U;
						l++
					} else C.isSpotLight ? (U = a.get(C), U.position.setFromMatrixPosition(C.matrixWorld), U.position.applyMatrix4(m), U.color.copy(v).multiplyScalar(Q), U.distance = Da, U.direction.setFromMatrixPosition(C.matrixWorld), e.setFromMatrixPosition(C.target.matrixWorld), U.direction.sub(e), U.direction.transformDirection(m), U.coneCos = Math.cos(C.angle), U.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), U.decay = C.decay, C.castShadow &&
							(Q = C.shadow, v = b.get(C), v.shadowBias = Q.bias, v.shadowRadius = Q.radius, v.shadowMapSize = Q.mapSize, c.spotShadow[u] = v, c.spotShadowMap[u] = Ka, c.spotShadowMatrix[u] = C.shadow.matrix, T++), c.spot[u] = U, u++) : C.isRectAreaLight ? (U = a.get(C), U.color.copy(v).multiplyScalar(Q), U.position.setFromMatrixPosition(C.matrixWorld), U.position.applyMatrix4(m), g.identity(), f.copy(C.matrixWorld), f.premultiply(m), g.extractRotation(f), U.halfWidth.set(.5 * C.width, 0, 0), U.halfHeight.set(0, .5 * C.height, 0), U.halfWidth.applyMatrix4(g), U.halfHeight.applyMatrix4(g),
							c.rectArea[p] = U, p++) : C.isPointLight ? (U = a.get(C), U.position.setFromMatrixPosition(C.matrixWorld), U.position.applyMatrix4(m), U.color.copy(C.color).multiplyScalar(C.intensity), U.distance = C.distance, U.decay = C.decay, C.castShadow && (Q = C.shadow, v = b.get(C), v.shadowBias = Q.bias, v.shadowRadius = Q.radius, v.shadowMapSize = Q.mapSize, v.shadowCameraNear = Q.camera.near, v.shadowCameraFar = Q.camera.far, c.pointShadow[q] = v, c.pointShadowMap[q] = Ka, c.pointShadowMatrix[q] = C.shadow.matrix, ja++), c.point[q] = U, q++) : C.isHemisphereLight &&
						(U = a.get(C), U.direction.setFromMatrixPosition(C.matrixWorld), U.direction.transformDirection(m), U.direction.normalize(), U.skyColor.copy(C.color).multiplyScalar(Q), U.groundColor.copy(C.groundColor).multiplyScalar(Q), c.hemi[x] = U, x++)
				}
				c.ambient[0] = h;
				c.ambient[1] = n;
				c.ambient[2] = k;
				d = c.hash;
				if (d.directionalLength !== l || d.pointLength !== q || d.spotLength !== u || d.rectAreaLength !== p || d.hemiLength !== x || d.numDirectionalShadows !== w || d.numPointShadows !== ja || d.numSpotShadows !== T) c.directional.length = l, c.spot.length =
					u, c.rectArea.length = p, c.point.length = q, c.hemi.length = x, c.directionalShadow.length = w, c.directionalShadowMap.length = w, c.pointShadow.length = ja, c.pointShadowMap.length = ja, c.spotShadow.length = T, c.spotShadowMap.length = T, c.directionalShadowMatrix.length = w, c.pointShadowMatrix.length = ja, c.spotShadowMatrix.length = T, d.directionalLength = l, d.pointLength = q, d.spotLength = u, d.rectAreaLength = p, d.hemiLength = x, d.numDirectionalShadows = w, d.numPointShadows = ja, d.numSpotShadows = T, c.version = vk++
			},
			state: c
		}
	}

	function Qh() {
		var a =
			new uk,
			b = [],
			c = [];
		return {
			init: function() {
				b.length = 0;
				c.length = 0
			},
			state: {
				lightsArray: b,
				shadowsArray: c,
				lights: a
			},
			setupLights: function(d) {
				a.setup(b, c, d)
			},
			pushLight: function(a) {
				b.push(a)
			},
			pushShadow: function(a) {
				c.push(a)
			}
		}
	}

	function wk() {
		function a(c) {
			c = c.target;
			c.removeEventListener("dispose", a);
			b.delete(c)
		}
		var b = new WeakMap;
		return {
			get: function(c, d) {
				if (!1 === b.has(c)) {
					var e = new Qh;
					b.set(c, new WeakMap);
					b.get(c).set(d, e);
					c.addEventListener("dispose", a)
				} else !1 === b.get(c).has(d) ? (e = new Qh, b.get(c).set(d, e)) :
					e = b.get(c).get(d);
				return e
			},
			dispose: function() {
				b = new WeakMap
			}
		}
	}

	function Hb(a) {
		K.call(this);
		this.type = "MeshDepthMaterial";
		this.depthPacking = 3200;
		this.morphTargets = this.skinning = !1;
		this.displacementMap = this.alphaMap = this.map = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.fog = !1;
		this.setValues(a)
	}

	function Ib(a) {
		K.call(this);
		this.type = "MeshDistanceMaterial";
		this.referencePosition = new p;
		this.nearDistance = 1;
		this.farDistance = 1E3;
		this.morphTargets = this.skinning = !1;
		this.displacementMap = this.alphaMap = this.map = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.fog = !1;
		this.setValues(a)
	}

	function Rh(a, b, c) {
		function d(a, b, c) {
			c = a << 0 | b << 1 | c << 2;
			var d = n[c];
			void 0 === d && (d = new Hb({
				depthPacking: 3201,
				morphTargets: a,
				skinning: b
			}), n[c] = d);
			return d
		}

		function e(a, b, c) {
			c = a << 0 | b << 1 | c << 2;
			var d = k[c];
			void 0 === d && (d = new Ib({
				morphTargets: a,
				skinning: b
			}), k[c] = d);
			return d
		}

		function f(b, c, f, g, h, l, m) {
			var n = d,
				k = b.customDepthMaterial;
			!0 === g.isPointLight && (n = e, k = b.customDistanceMaterial);
			void 0 === k ? (k = !1, !0 === f.morphTargets && (k = c.morphAttributes && c.morphAttributes.position && 0 < c.morphAttributes.position.length), c = !1, !0 === b.isSkinnedMesh && (!0 === f.skinning ? c = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b)), b = n(k, c, !0 === b.isInstancedMesh)) : b = k;
			a.localClippingEnabled && !0 === f.clipShadows && 0 !== f.clippingPlanes.length && (k = b.uuid, n = f.uuid, c = r[k], void 0 === c && (c = {}, r[k] = c), k = c[n], void 0 === k && (k = b.clone(), c[n] = k), b = k);
			b.visible = f.visible;
			b.wireframe =
				f.wireframe;
			b.side = 3 === m ? null !== f.shadowSide ? f.shadowSide : f.side : null !== f.shadowSide ? f.shadowSide : q[f.side];
			b.clipShadows = f.clipShadows;
			b.clippingPlanes = f.clippingPlanes;
			b.clipIntersection = f.clipIntersection;
			b.wireframeLinewidth = f.wireframeLinewidth;
			b.linewidth = f.linewidth;
			!0 === g.isPointLight && !0 === b.isMeshDistanceMaterial && (b.referencePosition.setFromMatrixPosition(g.matrixWorld), b.nearDistance = h, b.farDistance = l);
			return b
		}

		function g(c, d, e, l, m) {
			if (!1 !== c.visible) {
				if (c.layers.test(d.layers) && (c.isMesh ||
						c.isLine || c.isPoints) && (c.castShadow || c.receiveShadow && 3 === m) && (!c.frustumCulled || h.intersectsObject(c))) {
					c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, c.matrixWorld);
					var n = b.update(c),
						k = c.material;
					if (Array.isArray(k))
						for (var z = n.groups, t = 0, q = z.length; t < q; t++) {
							var r = z[t],
								u = k[r.materialIndex];
							u && u.visible && (u = f(c, n, u, l, e.near, e.far, m), a.renderBufferDirect(e, null, n, u, c, r))
						} else k.visible && (u = f(c, n, k, l, e.near, e.far, m), a.renderBufferDirect(e, null, n, u, c, null))
				}
				c = c.children;
				n = 0;
				for (k = c.length; n <
					k; n++) g(c[n], d, e, l, m)
			}
		}
		var h = new Gc,
			l = new v,
			m = new v,
			z = new R,
			n = [],
			k = [],
			r = {},
			q = {
				0: 1,
				1: 0,
				2: 2
			},
			u = new Ca({
				defines: {
					SAMPLE_RATE: .25,
					HALF_SAMPLE_RATE: .125
				},
				uniforms: {
					shadow_pass: {
						value: null
					},
					resolution: {
						value: new v
					},
					radius: {
						value: 4
					}
				},
				vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
				fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
			}),
			p = u.clone();
		p.defines.HORIZONAL_PASS = 1;
		var x = new F;
		x.setAttribute("position", new G(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
		var w = new ea(x, u),
			ja = this;
		this.enabled = !1;
		this.autoUpdate = !0;
		this.needsUpdate = !1;
		this.type = 1;
		this.render = function(d, e, f) {
			if (!1 !== ja.enabled && (!1 !== ja.autoUpdate || !1 !== ja.needsUpdate) && 0 !== d.length) {
				var n = a.getRenderTarget(),
					k = a.getActiveCubeFace(),
					t = a.getActiveMipmapLevel(),
					q = a.state;
				q.setBlending(0);
				q.buffers.color.setClear(1, 1, 1, 1);
				q.buffers.depth.setTest(!0);
				q.setScissorTest(!1);
				for (var r = 0, E = d.length; r < E; r++) {
					var x = d[r],
						C = x.shadow;
					if (void 0 === C) console.warn("THREE.WebGLShadowMap:", x, "has no shadow.");
					else {
						l.copy(C.mapSize);
						var v = C.getFrameExtents();
						l.multiply(v);
						m.copy(C.mapSize);
						if (l.x > c || l.y > c) l.x > c && (m.x = Math.floor(c / v.x), l.x = m.x * v.x, C.mapSize.x = m.x), l.y > c && (m.y = Math.floor(c / v.y), l.y = m.y * v.y, C.mapSize.y = m.y);
						null !== C.map || C.isPointLightShadow || 3 !== this.type || (v = {
								minFilter: 1006,
								magFilter: 1006,
								format: 1023
							}, C.map = new Ba(l.x, l.y, v), C.map.texture.name = x.name + ".shadowMap",
							C.mapPass = new Ba(l.x, l.y, v), C.camera.updateProjectionMatrix());
						null === C.map && (v = {
							minFilter: 1003,
							magFilter: 1003,
							format: 1023
						}, C.map = new Ba(l.x, l.y, v), C.map.texture.name = x.name + ".shadowMap", C.camera.updateProjectionMatrix());
						a.setRenderTarget(C.map);
						a.clear();
						v = C.getViewportCount();
						for (var Z = 0; Z < v; Z++) {
							var T = C.getViewport(Z);
							z.set(m.x * T.x, m.y * T.y, m.x * T.z, m.y * T.w);
							q.viewport(z);
							C.updateMatrices(x, Z);
							h = C.getFrustum();
							g(e, f, C.camera, x, this.type)
						}
						C.isPointLightShadow || 3 !== this.type || (x = C, C = f, v = b.update(w),
							u.uniforms.shadow_pass.value = x.map.texture, u.uniforms.resolution.value = x.mapSize, u.uniforms.radius.value = x.radius, a.setRenderTarget(x.mapPass), a.clear(), a.renderBufferDirect(C, null, v, u, w, null), p.uniforms.shadow_pass.value = x.mapPass.texture, p.uniforms.resolution.value = x.mapSize, p.uniforms.radius.value = x.radius, a.setRenderTarget(x.map), a.clear(), a.renderBufferDirect(C, null, v, p, w, null))
					}
				}
				ja.needsUpdate = !1;
				a.setRenderTarget(n, k, t)
			}
		}
	}

	function xk(a, b, c) {
		function d(b, c, d) {
			var e = new Uint8Array(4),
				f = a.createTexture();
			a.bindTexture(b, f);
			a.texParameteri(b, 10241, 9728);
			a.texParameteri(b, 10240, 9728);
			for (b = 0; b < d; b++) a.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e);
			return f
		}

		function e(c, d) {
			p[c] = 1;
			0 === x[c] && (a.enableVertexAttribArray(c), x[c] = 1);
			w[c] !== d && ((t ? a : b.get("ANGLE_instanced_arrays"))[t ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](c, d), w[c] = d)
		}

		function f(b) {
			!0 !== v[b] && (a.enable(b), v[b] = !0)
		}

		function g(b) {
			!1 !== v[b] && (a.disable(b), v[b] = !1)
		}

		function h(b, c, d, e, h, l, m, n) {
			if (0 === b) Z && (g(3042), Z = !1);
			else if (Z || (f(3042),
					Z = !0), 5 !== b) {
				if (b !== C || n !== y) {
					if (100 !== B || 100 !== Ka) a.blendEquation(32774), Ka = B = 100;
					if (n) switch (b) {
						case 1:
							a.blendFuncSeparate(1, 771, 1, 771);
							break;
						case 2:
							a.blendFunc(1, 1);
							break;
						case 3:
							a.blendFuncSeparate(0, 0, 769, 771);
							break;
						case 4:
							a.blendFuncSeparate(0, 768, 0, 770);
							break;
						default:
							console.error("THREE.WebGLState: Invalid blending: ", b)
					} else switch (b) {
						case 1:
							a.blendFuncSeparate(770, 771, 1, 771);
							break;
						case 2:
							a.blendFunc(770, 1);
							break;
						case 3:
							a.blendFunc(0, 769);
							break;
						case 4:
							a.blendFunc(0, 768);
							break;
						default:
							console.error("THREE.WebGLState: Invalid blending: ",
								b)
					}
					A = U = Da = Q = null;
					C = b;
					y = n
				}
			} else {
				h = h || c;
				l = l || d;
				m = m || e;
				if (c !== B || h !== Ka) a.blendEquationSeparate(xa[c], xa[h]), B = c, Ka = h;
				if (d !== Q || e !== Da || l !== U || m !== A) a.blendFuncSeparate(J[d], J[e], J[l], J[m]), Q = d, Da = e, U = l, A = m;
				C = b;
				y = null
			}
		}

		function l(b) {
			D !== b && (b ? a.frontFace(2304) : a.frontFace(2305), D = b)
		}

		function m(b) {
			0 !== b ? (f(2884), b !== F && (1 === b ? a.cullFace(1029) : 2 === b ? a.cullFace(1028) : a.cullFace(1032))) : g(2884);
			F = b
		}

		function k(b, c, d) {
			if (b) {
				if (f(32823), G !== c || K !== d) a.polygonOffset(c, d), G = c, K = d
			} else g(32823)
		}

		function n(b) {
			void 0 ===
				b && (b = 33984 + L - 1);
			N !== b && (a.activeTexture(b), N = b)
		}
		var t = c.isWebGL2,
			r = new function() {
				var b = !1,
					c = new R,
					d = null,
					e = new R(0, 0, 0, 0);
				return {
					setMask: function(c) {
						d === c || b || (a.colorMask(c, c, c, c), d = c)
					},
					setLocked: function(a) {
						b = a
					},
					setClear: function(b, d, f, g, h) {
						!0 === h && (b *= g, d *= g, f *= g);
						c.set(b, d, f, g);
						!1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c))
					},
					reset: function() {
						b = !1;
						d = null;
						e.set(-1, 0, 0, 0)
					}
				}
			},
			q = new function() {
				var b = !1,
					c = null,
					d = null,
					e = null;
				return {
					setTest: function(a) {
						a ? f(2929) : g(2929)
					},
					setMask: function(d) {
						c ===
							d || b || (a.depthMask(d), c = d)
					},
					setFunc: function(b) {
						if (d !== b) {
							if (b) switch (b) {
								case 0:
									a.depthFunc(512);
									break;
								case 1:
									a.depthFunc(519);
									break;
								case 2:
									a.depthFunc(513);
									break;
								case 3:
									a.depthFunc(515);
									break;
								case 4:
									a.depthFunc(514);
									break;
								case 5:
									a.depthFunc(518);
									break;
								case 6:
									a.depthFunc(516);
									break;
								case 7:
									a.depthFunc(517);
									break;
								default:
									a.depthFunc(515)
							} else a.depthFunc(515);
							d = b
						}
					},
					setLocked: function(a) {
						b = a
					},
					setClear: function(b) {
						e !== b && (a.clearDepth(b), e = b)
					},
					reset: function() {
						b = !1;
						e = d = c = null
					}
				}
			},
			u = new function() {
				var b = !1,
					c = null,
					d = null,
					e = null,
					h = null,
					l = null,
					m = null,
					n = null,
					k = null;
				return {
					setTest: function(a) {
						b || (a ? f(2960) : g(2960))
					},
					setMask: function(d) {
						c === d || b || (a.stencilMask(d), c = d)
					},
					setFunc: function(b, c, f) {
						if (d !== b || e !== c || h !== f) a.stencilFunc(b, c, f), d = b, e = c, h = f
					},
					setOp: function(b, c, d) {
						if (l !== b || m !== c || n !== d) a.stencilOp(b, c, d), l = b, m = c, n = d
					},
					setLocked: function(a) {
						b = a
					},
					setClear: function(b) {
						k !== b && (a.clearStencil(b), k = b)
					},
					reset: function() {
						b = !1;
						k = n = m = l = h = e = d = c = null
					}
				}
			};
		c = a.getParameter(34921);
		var p = new Uint8Array(c),
			x = new Uint8Array(c),
			w = new Uint8Array(c),
			v = {},
			T = null,
			Z = null,
			C = null,
			B = null,
			Q = null,
			Da = null,
			Ka = null,
			U = null,
			A = null,
			y = !1,
			D = null,
			F = null,
			H = null,
			G = null,
			K = null,
			L = a.getParameter(35661),
			O = !1;
		c = 0;
		c = a.getParameter(7938); - 1 !== c.indexOf("WebGL") ? (c = parseFloat(/^WebGL ([0-9])/.exec(c)[1]), O = 1 <= c) : -1 !== c.indexOf("OpenGL ES") && (c = parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]), O = 2 <= c);
		var N = null,
			Jd = {},
			aa = new R,
			Sh = new R,
			Ra = {};
		Ra[3553] = d(3553, 3553, 1);
		Ra[34067] = d(34067, 34069, 6);
		r.setClear(0, 0, 0, 1);
		q.setClear(1);
		u.setClear(0);
		f(2929);
		q.setFunc(3);
		l(!1);
		m(1);
		f(2884);
		h(0);
		var xa = {
			100: 32774,
			101: 32778,
			102: 32779
		};
		t ? (xa[103] = 32775, xa[104] = 32776) : (c = b.get("EXT_blend_minmax"), null !== c && (xa[103] = c.MIN_EXT, xa[104] = c.MAX_EXT));
		var J = {
			200: 0,
			201: 1,
			202: 768,
			204: 770,
			210: 776,
			208: 774,
			206: 772,
			203: 769,
			205: 771,
			209: 775,
			207: 773
		};
		return {
			buffers: {
				color: r,
				depth: q,
				stencil: u
			},
			initAttributes: function() {
				for (var a = 0, b = p.length; a < b; a++) p[a] = 0
			},
			enableAttribute: function(a) {
				e(a, 0)
			},
			enableAttributeAndDivisor: e,
			disableUnusedAttributes: function() {
				for (var b = 0, c = x.length; b !== c; ++b) x[b] !==
					p[b] && (a.disableVertexAttribArray(b), x[b] = 0)
			},
			vertexAttribPointer: function(b, c, d, e, f, g) {
				!0 !== t || 5124 !== d && 5125 !== d ? a.vertexAttribPointer(b, c, d, e, f, g) : a.vertexAttribIPointer(b, c, d, e, f, g)
			},
			enable: f,
			disable: g,
			useProgram: function(b) {
				return T !== b ? (a.useProgram(b), T = b, !0) : !1
			},
			setBlending: h,
			setMaterial: function(a, b) {
				2 === a.side ? g(2884) : f(2884);
				var c = 1 === a.side;
				b && (c = !c);
				l(c);
				1 === a.blending && !1 === a.transparent ? h(0) : h(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha,
					a.premultipliedAlpha);
				q.setFunc(a.depthFunc);
				q.setTest(a.depthTest);
				q.setMask(a.depthWrite);
				r.setMask(a.colorWrite);
				b = a.stencilWrite;
				u.setTest(b);
				b && (u.setMask(a.stencilWriteMask), u.setFunc(a.stencilFunc, a.stencilRef, a.stencilFuncMask), u.setOp(a.stencilFail, a.stencilZFail, a.stencilZPass));
				k(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits)
			},
			setFlipSided: l,
			setCullFace: m,
			setLineWidth: function(b) {
				b !== H && (O && a.lineWidth(b), H = b)
			},
			setPolygonOffset: k,
			setScissorTest: function(a) {
				a ? f(3089) : g(3089)
			},
			activeTexture: n,
			bindTexture: function(b, c) {
				null === N && n();
				var d = Jd[N];
				void 0 === d && (d = {
					type: void 0,
					texture: void 0
				}, Jd[N] = d);
				if (d.type !== b || d.texture !== c) a.bindTexture(b, c || Ra[b]), d.type = b, d.texture = c
			},
			unbindTexture: function() {
				var b = Jd[N];
				void 0 !== b && void 0 !== b.type && (a.bindTexture(b.type, null), b.type = void 0, b.texture = void 0)
			},
			compressedTexImage2D: function() {
				try {
					a.compressedTexImage2D.apply(a, arguments)
				} catch (ca) {
					console.error("THREE.WebGLState:", ca)
				}
			},
			texImage2D: function() {
				try {
					a.texImage2D.apply(a, arguments)
				} catch (ca) {
					console.error("THREE.WebGLState:",
						ca)
				}
			},
			texImage3D: function() {
				try {
					a.texImage3D.apply(a, arguments)
				} catch (ca) {
					console.error("THREE.WebGLState:", ca)
				}
			},
			scissor: function(b) {
				!1 === aa.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), aa.copy(b))
			},
			viewport: function(b) {
				!1 === Sh.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), Sh.copy(b))
			},
			reset: function() {
				for (var b = 0; b < x.length; b++) 1 === x[b] && (a.disableVertexAttribArray(b), x[b] = 0);
				v = {};
				N = null;
				Jd = {};
				F = D = C = T = null;
				r.reset();
				q.reset();
				u.reset()
			}
		}
	}

	function yk(a, b, c, d, e, f, g) {
		function h(a, b) {
			return G ? new OffscreenCanvas(a,
				b) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
		}

		function l(a, b, c, d) {
			var e = 1;
			if (a.width > d || a.height > d) e = d / Math.max(a.width, a.height);
			if (1 > e || !0 === b) {
				if ("undefined" !== typeof HTMLImageElement && a instanceof HTMLImageElement || "undefined" !== typeof HTMLCanvasElement && a instanceof HTMLCanvasElement || "undefined" !== typeof ImageBitmap && a instanceof ImageBitmap) return d = b ? O.floorPowerOfTwo : Math.floor, b = d(e * a.width), e = d(e * a.height), void 0 === H && (H = h(b, e)), c = c ? h(b, e) : H, c.width = b, c.height = e,
					c.getContext("2d").drawImage(a, 0, 0, b, e), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + a.width + "x" + a.height + ") to (" + b + "x" + e + ")."), c;
				"data" in a && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + a.width + "x" + a.height + ").")
			}
			return a
		}

		function m(a) {
			return O.isPowerOfTwo(a.width) && O.isPowerOfTwo(a.height)
		}

		function k(a, b) {
			return a.generateMipmaps && b && 1003 !== a.minFilter && 1006 !== a.minFilter
		}

		function n(b, c, e, f) {
			a.generateMipmap(b);
			d.get(c).__maxMipLevel = Math.log(Math.max(e,
				f)) * Math.LOG2E
		}

		function t(c, d, e) {
			if (!1 === Da) return d;
			if (null !== c) {
				if (void 0 !== a[c]) return a[c];
				console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + c + "'")
			}
			c = d;
			6403 === d && (5126 === e && (c = 33326), 5131 === e && (c = 33325), 5121 === e && (c = 33321));
			6407 === d && (5126 === e && (c = 34837), 5131 === e && (c = 34843), 5121 === e && (c = 32849));
			6408 === d && (5126 === e && (c = 34836), 5131 === e && (c = 34842), 5121 === e && (c = 32856));
			33325 !== c && 33326 !== c && 34842 !== c && 34836 !== c || b.get("EXT_color_buffer_float");
			return c
		}

		function r(a) {
			return 1003 ===
				a || 1004 === a || 1005 === a ? 9728 : 9729
		}

		function q(b) {
			b = b.target;
			b.removeEventListener("dispose", q);
			var c = d.get(b);
			void 0 !== c.__webglInit && (a.deleteTexture(c.__webglTexture), d.remove(b));
			b.isVideoTexture && F.delete(b);
			g.memory.textures--
		}

		function u(b) {
			b = b.target;
			b.removeEventListener("dispose", u);
			var c = d.get(b),
				e = d.get(b.texture);
			if (b) {
				void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture);
				b.depthTexture && b.depthTexture.dispose();
				if (b.isWebGLCubeRenderTarget)
					for (e = 0; 6 > e; e++) a.deleteFramebuffer(c.__webglFramebuffer[e]),
						c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]);
				else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer), c.__webglMultisampledFramebuffer && a.deleteFramebuffer(c.__webglMultisampledFramebuffer), c.__webglColorRenderbuffer && a.deleteRenderbuffer(c.__webglColorRenderbuffer), c.__webglDepthRenderbuffer && a.deleteRenderbuffer(c.__webglDepthRenderbuffer);
				d.remove(b.texture);
				d.remove(b)
			}
			g.memory.textures--
		}

		function p(a, b) {
			var e = d.get(a);
			if (a.isVideoTexture) {
				var f = g.render.frame;
				F.get(a) !== f && (F.set(a, f), a.update())
			}
			if (0 < a.version && e.__version !== a.version)
				if (f = a.image, void 0 === f) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
				else if (!1 === f.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				Z(e, a, b);
				return
			}
			c.activeTexture(33984 + b);
			c.bindTexture(3553, e.__webglTexture)
		}

		function x(b, e) {
			if (6 === b.image.length) {
				var g = d.get(b);
				if (0 < b.version && g.__version !==
					b.version) {
					T(g, b);
					c.activeTexture(33984 + e);
					c.bindTexture(34067, g.__webglTexture);
					a.pixelStorei(37440, b.flipY);
					var h = b && (b.isCompressedTexture || b.image[0].isCompressedTexture);
					e = b.image[0] && b.image[0].isDataTexture;
					for (var z = [], q = 0; 6 > q; q++) z[q] = h || e ? e ? b.image[q].image : b.image[q] : l(b.image[q], !1, !0, U);
					var r = z[0],
						u = m(r) || Da,
						p = f.convert(b.format),
						E = f.convert(b.type),
						w = t(b.internalFormat, p, E);
					v(34067, b, u);
					if (h) {
						for (q = 0; 6 > q; q++) {
							var x = z[q].mipmaps;
							for (h = 0; h < x.length; h++) {
								var aa = x[h];
								1023 !== b.format && 1022 !==
									b.format ? null !== p ? c.compressedTexImage2D(34069 + q, h, w, aa.width, aa.height, 0, aa.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : c.texImage2D(34069 + q, h, w, aa.width, aa.height, 0, p, E, aa.data)
							}
						}
						g.__maxMipLevel = x.length - 1
					} else {
						x = b.mipmaps;
						for (q = 0; 6 > q; q++)
							if (e)
								for (c.texImage2D(34069 + q, 0, w, z[q].width, z[q].height, 0, p, E, z[q].data), h = 0; h < x.length; h++) aa = x[h], aa = aa.image[q].image, c.texImage2D(34069 + q, h + 1, w, aa.width, aa.height, 0, p, E, aa.data);
							else
								for (c.texImage2D(34069 +
										q, 0, w, p, E, z[q]), h = 0; h < x.length; h++) aa = x[h], c.texImage2D(34069 + q, h + 1, w, p, E, aa.image[q]);
						g.__maxMipLevel = x.length
					}
					k(b, u) && n(34067, b, r.width, r.height);
					g.__version = b.version;
					if (b.onUpdate) b.onUpdate(b)
				} else c.activeTexture(33984 + e), c.bindTexture(34067, g.__webglTexture)
			}
		}

		function w(a, b) {
			c.activeTexture(33984 + b);
			c.bindTexture(34067, d.get(a).__webglTexture)
		}

		function v(c, f, g) {
			g ? (a.texParameteri(c, 10242, L[f.wrapS]), a.texParameteri(c, 10243, L[f.wrapT]), 32879 !== c && 35866 !== c || a.texParameteri(c, 32882, L[f.wrapR]),
				a.texParameteri(c, 10240, N[f.magFilter]), a.texParameteri(c, 10241, N[f.minFilter])) : (a.texParameteri(c, 10242, 33071), a.texParameteri(c, 10243, 33071), 32879 !== c && 35866 !== c || a.texParameteri(c, 32882, 33071), 1001 === f.wrapS && 1001 === f.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(c, 10240, r(f.magFilter)), a.texParameteri(c, 10241, r(f.minFilter)), 1003 !== f.minFilter && 1006 !== f.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
			!(g = b.get("EXT_texture_filter_anisotropic")) || 1015 === f.type && null === b.get("OES_texture_float_linear") || 1016 === f.type && null === (Da || b.get("OES_texture_half_float_linear")) || !(1 < f.anisotropy || d.get(f).__currentAnisotropy) || (a.texParameterf(c, g.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(f.anisotropy, e.getMaxAnisotropy())), d.get(f).__currentAnisotropy = f.anisotropy)
		}

		function T(b, c) {
			void 0 === b.__webglInit && (b.__webglInit = !0, c.addEventListener("dispose", q), b.__webglTexture = a.createTexture(), g.memory.textures++)
		}

		function Z(b, d, e) {
			var g = 3553;
			d.isDataTexture2DArray && (g = 35866);
			d.isDataTexture3D && (g = 32879);
			T(b, d);
			c.activeTexture(33984 + e);
			c.bindTexture(g, b.__webglTexture);
			a.pixelStorei(37440, d.flipY);
			a.pixelStorei(37441, d.premultiplyAlpha);
			a.pixelStorei(3317, d.unpackAlignment);
			e = Da ? !1 : 1001 !== d.wrapS || 1001 !== d.wrapT || 1003 !== d.minFilter && 1006 !== d.minFilter;
			e = e && !1 === m(d.image);
			e = l(d.image, e, !1, y);
			var h = m(e) || Da,
				z = f.convert(d.format),
				q = f.convert(d.type),
				r = t(d.internalFormat, z, q);
			v(g, d, h);
			var u = d.mipmaps;
			if (d.isDepthTexture) r =
				6402, Da ? r = 1015 === d.type ? 36012 : 1014 === d.type ? 33190 : 1020 === d.type ? 35056 : 33189 : 1015 === d.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === d.format && 6402 === r && 1012 !== d.type && 1014 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), d.type = 1012, q = f.convert(d.type)), 1027 === d.format && 6402 === r && (r = 34041, 1020 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
					d.type = 1020, q = f.convert(d.type))), c.texImage2D(3553, 0, r, e.width, e.height, 0, z, q, null);
			else if (d.isDataTexture)
				if (0 < u.length && h) {
					for (var p = 0, E = u.length; p < E; p++) {
						var w = u[p];
						c.texImage2D(3553, p, r, w.width, w.height, 0, z, q, w.data)
					}
					d.generateMipmaps = !1;
					b.__maxMipLevel = u.length - 1
				} else c.texImage2D(3553, 0, r, e.width, e.height, 0, z, q, e.data), b.__maxMipLevel = 0;
			else if (d.isCompressedTexture) {
				p = 0;
				for (E = u.length; p < E; p++) w = u[p], 1023 !== d.format && 1022 !== d.format ? null !== z ? c.compressedTexImage2D(3553, p, r, w.width, w.height,
					0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : c.texImage2D(3553, p, r, w.width, w.height, 0, z, q, w.data);
				b.__maxMipLevel = u.length - 1
			} else if (d.isDataTexture2DArray) c.texImage3D(35866, 0, r, e.width, e.height, e.depth, 0, z, q, e.data), b.__maxMipLevel = 0;
			else if (d.isDataTexture3D) c.texImage3D(32879, 0, r, e.width, e.height, e.depth, 0, z, q, e.data), b.__maxMipLevel = 0;
			else if (0 < u.length && h) {
				p = 0;
				for (E = u.length; p < E; p++) w = u[p], c.texImage2D(3553, p, r, z, q,
					w);
				d.generateMipmaps = !1;
				b.__maxMipLevel = u.length - 1
			} else c.texImage2D(3553, 0, r, z, q, e), b.__maxMipLevel = 0;
			k(d, h) && n(g, d, e.width, e.height);
			b.__version = d.version;
			if (d.onUpdate) d.onUpdate(d)
		}

		function C(b, e, g, h) {
			var l = f.convert(e.texture.format),
				m = f.convert(e.texture.type),
				n = t(e.texture.internalFormat, l, m);
			c.texImage2D(h, 0, n, e.width, e.height, 0, l, m, null);
			a.bindFramebuffer(36160, b);
			a.framebufferTexture2D(36160, g, h, d.get(e.texture).__webglTexture, 0);
			a.bindFramebuffer(36160, null)
		}

		function B(b, c, d) {
			a.bindRenderbuffer(36161,
				b);
			if (c.depthBuffer && !c.stencilBuffer) {
				var e = 33189;
				d ? ((d = c.depthTexture) && d.isDepthTexture && (1015 === d.type ? e = 36012 : 1014 === d.type && (e = 33190)), d = Q(c), a.renderbufferStorageMultisample(36161, d, e, c.width, c.height)) : a.renderbufferStorage(36161, e, c.width, c.height);
				a.framebufferRenderbuffer(36160, 36096, 36161, b)
			} else c.depthBuffer && c.stencilBuffer ? (d ? (d = Q(c), a.renderbufferStorageMultisample(36161, d, 35056, c.width, c.height)) : a.renderbufferStorage(36161, 34041, c.width, c.height), a.framebufferRenderbuffer(36160,
				33306, 36161, b)) : (b = f.convert(c.texture.format), e = f.convert(c.texture.type), e = t(c.texture.internalFormat, b, e), d ? (d = Q(c), a.renderbufferStorageMultisample(36161, d, e, c.width, c.height)) : a.renderbufferStorage(36161, e, c.width, c.height));
			a.bindRenderbuffer(36161, null)
		}

		function Q(a) {
			return Da && a.isWebGLMultisampleRenderTarget ? Math.min(D, a.samples) : 0
		}
		var Da = e.isWebGL2,
			A = e.maxTextures,
			U = e.maxCubemapSize,
			y = e.maxTextureSize,
			D = e.maxSamples,
			F = new WeakMap,
			H, G = !1;
		try {
			G = "undefined" !== typeof OffscreenCanvas && null !==
				(new OffscreenCanvas(1, 1)).getContext("2d")
		} catch (Jd) {}
		var K = 0,
			L = {
				1E3: 10497,
				1001: 33071,
				1002: 33648
			},
			N = {
				1003: 9728,
				1004: 9984,
				1005: 9986,
				1006: 9729,
				1007: 9985,
				1008: 9987
			},
			M = !1,
			R = !1;
		this.allocateTextureUnit = function() {
			var a = K;
			a >= A && console.warn("THREE.WebGLTextures: Trying to use " + a + " texture units while this GPU supports only " + A);
			K += 1;
			return a
		};
		this.resetTextureUnits = function() {
			K = 0
		};
		this.setTexture2D = p;
		this.setTexture2DArray = function(a, b) {
			var e = d.get(a);
			0 < a.version && e.__version !== a.version ? Z(e, a, b) : (c.activeTexture(33984 +
				b), c.bindTexture(35866, e.__webglTexture))
		};
		this.setTexture3D = function(a, b) {
			var e = d.get(a);
			0 < a.version && e.__version !== a.version ? Z(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(32879, e.__webglTexture))
		};
		this.setTextureCube = x;
		this.setTextureCubeDynamic = w;
		this.setupRenderTarget = function(b) {
			var e = d.get(b),
				h = d.get(b.texture);
			b.addEventListener("dispose", u);
			h.__webglTexture = a.createTexture();
			g.memory.textures++;
			var l = !0 === b.isWebGLCubeRenderTarget,
				z = !0 === b.isWebGLMultisampleRenderTarget,
				q = m(b) || Da;
			!Da ||
				1022 !== b.texture.format || 1015 !== b.texture.type && 1016 !== b.texture.type || (b.texture.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."));
			if (l)
				for (e.__webglFramebuffer = [], z = 0; 6 > z; z++) e.__webglFramebuffer[z] = a.createFramebuffer();
			else if (e.__webglFramebuffer = a.createFramebuffer(), z)
				if (Da) {
					e.__webglMultisampledFramebuffer = a.createFramebuffer();
					e.__webglColorRenderbuffer = a.createRenderbuffer();
					a.bindRenderbuffer(36161, e.__webglColorRenderbuffer);
					z = f.convert(b.texture.format);
					var r = f.convert(b.texture.type);
					z = t(b.texture.internalFormat, z, r);
					r = Q(b);
					a.renderbufferStorageMultisample(36161, r, z, b.width, b.height);
					a.bindFramebuffer(36160, e.__webglMultisampledFramebuffer);
					a.framebufferRenderbuffer(36160, 36064, 36161, e.__webglColorRenderbuffer);
					a.bindRenderbuffer(36161, null);
					b.depthBuffer && (e.__webglDepthRenderbuffer = a.createRenderbuffer(), B(e.__webglDepthRenderbuffer, b, !0));
					a.bindFramebuffer(36160, null)
				} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
			if (l) {
				c.bindTexture(34067, h.__webglTexture);
				v(34067, b.texture, q);
				for (z = 0; 6 > z; z++) C(e.__webglFramebuffer[z], b, 36064, 34069 + z);
				k(b.texture, q) && n(34067, b.texture, b.width, b.height);
				c.bindTexture(34067, null)
			} else c.bindTexture(3553, h.__webglTexture), v(3553, b.texture, q), C(e.__webglFramebuffer, b, 36064, 3553), k(b.texture, q) && n(3553, b.texture, b.width, b.height), c.bindTexture(3553, null);
			if (b.depthBuffer) {
				e = d.get(b);
				h = !0 === b.isWebGLCubeRenderTarget;
				if (b.depthTexture) {
					if (h) throw Error("target.depthTexture not supported in Cube render targets");
					if (b && b.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
					a.bindFramebuffer(36160, e.__webglFramebuffer);
					if (!b.depthTexture || !b.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
					d.get(b.depthTexture).__webglTexture && b.depthTexture.image.width === b.width && b.depthTexture.image.height === b.height || (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = !0);
					p(b.depthTexture, 0);
					e = d.get(b.depthTexture).__webglTexture;
					if (1026 === b.depthTexture.format) a.framebufferTexture2D(36160, 36096, 3553, e, 0);
					else if (1027 === b.depthTexture.format) a.framebufferTexture2D(36160, 33306, 3553, e, 0);
					else throw Error("Unknown depthTexture format");
				} else if (h)
					for (e.__webglDepthbuffer = [], h = 0; 6 > h; h++) a.bindFramebuffer(36160, e.__webglFramebuffer[h]), e.__webglDepthbuffer[h] = a.createRenderbuffer(), B(e.__webglDepthbuffer[h], b, !1);
				else a.bindFramebuffer(36160, e.__webglFramebuffer), e.__webglDepthbuffer =
					a.createRenderbuffer(), B(e.__webglDepthbuffer, b, !1);
				a.bindFramebuffer(36160, null)
			}
		};
		this.updateRenderTargetMipmap = function(a) {
			var b = a.texture,
				e = m(a) || Da;
			if (k(b, e)) {
				e = a.isWebGLCubeRenderTarget ? 34067 : 3553;
				var f = d.get(b).__webglTexture;
				c.bindTexture(e, f);
				n(e, b, a.width, a.height);
				c.bindTexture(e, null)
			}
		};
		this.updateMultisampleRenderTarget = function(b) {
			if (b.isWebGLMultisampleRenderTarget)
				if (Da) {
					var c = d.get(b);
					a.bindFramebuffer(36008, c.__webglMultisampledFramebuffer);
					a.bindFramebuffer(36009, c.__webglFramebuffer);
					var e = b.width,
						f = b.height,
						g = 16384;
					b.depthBuffer && (g |= 256);
					b.stencilBuffer && (g |= 1024);
					a.blitFramebuffer(0, 0, e, f, 0, 0, e, f, g, 9728);
					a.bindFramebuffer(36160, c.__webglMultisampledFramebuffer)
				} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
		};
		this.safeSetTexture2D = function(a, b) {
			a && a.isWebGLRenderTarget && (!1 === M && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), M = !0), a = a.texture);
			p(a, b)
		};
		this.safeSetTextureCube = function(a, b) {
			a && a.isWebGLCubeRenderTarget && (!1 === R && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), R = !0), a = a.texture);
			a && a.isCubeTexture || Array.isArray(a.image) && 6 === a.image.length ? x(a, b) : w(a, b)
		}
	}

	function Th(a, b, c) {
		var d = c.isWebGL2;
		return {
			convert: function(a) {
				if (1009 === a) return 5121;
				if (1017 === a) return 32819;
				if (1018 === a) return 32820;
				if (1019 === a) return 33635;
				if (1010 === a) return 5120;
				if (1011 === a) return 5122;
				if (1012 === a) return 5123;
				if (1013 === a) return 5124;
				if (1014 === a) return 5125;
				if (1015 === a) return 5126;
				if (1016 === a) {
					if (d) return 5131;
					var c = b.get("OES_texture_half_float");
					return null !== c ? c.HALF_FLOAT_OES : null
				}
				if (1021 === a) return 6406;
				if (1022 === a) return 6407;
				if (1023 === a) return 6408;
				if (1024 === a) return 6409;
				if (1025 === a) return 6410;
				if (1026 === a) return 6402;
				if (1027 === a) return 34041;
				if (1028 === a) return 6403;
				if (1029 === a) return 36244;
				if (1030 === a) return 33319;
				if (1031 === a) return 33320;
				if (1032 ===
					a) return 36248;
				if (1033 === a) return 36249;
				if (33776 === a || 33777 === a || 33778 === a || 33779 === a)
					if (c = b.get("WEBGL_compressed_texture_s3tc"), null !== c) {
						if (33776 === a) return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (33777 === a) return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (33778 === a) return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (33779 === a) return c.COMPRESSED_RGBA_S3TC_DXT5_EXT
					} else return null;
				if (35840 === a || 35841 === a || 35842 === a || 35843 === a)
					if (c = b.get("WEBGL_compressed_texture_pvrtc"), null !== c) {
						if (35840 === a) return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
						if (35841 === a) return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
						if (35842 === a) return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
						if (35843 === a) return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
					} else return null;
				if (36196 === a) return c = b.get("WEBGL_compressed_texture_etc1"), null !== c ? c.COMPRESSED_RGB_ETC1_WEBGL : null;
				if (37492 === a || 37496 === a)
					if (c = b.get("WEBGL_compressed_texture_etc"), null !== c) {
						if (37492 === a) return c.COMPRESSED_RGB8_ETC2;
						if (37496 === a) return c.COMPRESSED_RGBA8_ETC2_EAC
					} if (37808 === a || 37809 === a || 37810 === a || 37811 === a || 37812 ===
					a || 37813 === a || 37814 === a || 37815 === a || 37816 === a || 37817 === a || 37818 === a || 37819 === a || 37820 === a || 37821 === a || 37840 === a || 37841 === a || 37842 === a || 37843 === a || 37844 === a || 37845 === a || 37846 === a || 37847 === a || 37848 === a || 37849 === a || 37850 === a || 37851 === a || 37852 === a || 37853 === a) return c = b.get("WEBGL_compressed_texture_astc"), null !== c ? a : null;
				if (36492 === a) return c = b.get("EXT_texture_compression_bptc"), null !== c ? a : null;
				if (1020 === a) {
					if (d) return 34042;
					c = b.get("WEBGL_depth_texture");
					return null !== c ? c.UNSIGNED_INT_24_8_WEBGL : null
				}
			}
		}
	}

	function Le(a) {
		P.call(this);
		this.cameras = a || []
	}

	function Kc() {
		y.call(this);
		this.type = "Group"
	}

	function Me() {
		this._grip = this._targetRay = null
	}

	function Uh(a, b) {
		function c(a) {
			var b = q.get(a.inputSource);
			b && b.dispatchEvent({
				type: a.type
			})
		}

		function d() {
			q.forEach(function(a, b) {
				a.disconnect(b)
			});
			q.clear();
			a.setFramebuffer(null);
			a.setRenderTarget(a.getRenderTarget());
			Q.stop();
			h.isPresenting = !1;
			h.dispatchEvent({
				type: "sessionend"
			})
		}

		function e(a) {
			k = a;
			Q.setContext(l);
			Q.start();
			h.isPresenting = !0;
			h.dispatchEvent({
				type: "sessionstart"
			})
		}

		function f(a) {
			for (var b = l.inputSources, c = 0; c < r.length; c++) q.set(b[c], r[c]);
			for (c = 0; c < a.removed.length; c++) {
				b = a.removed[c];
				var d = q.get(b);
				d && (d.dispatchEvent({
					type: "disconnected",
					data: b
				}), q.delete(b))
			}
			for (c = 0; c < a.added.length; c++) b = a.added[c], (d = q.get(b)) && d.dispatchEvent({
				type: "connected",
				data: b
			})
		}

		function g(a, b) {
			null === b ? a.matrixWorld.copy(a.matrix) : a.matrixWorld.multiplyMatrices(b.matrixWorld, a.matrix);
			a.matrixWorldInverse.getInverse(a.matrixWorld)
		}
		var h = this,
			l = null,
			m = 1,
			k = null,
			n = "local-floor",
			t =
			null,
			r = [],
			q = new Map,
			u = new P;
		u.layers.enable(1);
		u.viewport = new R;
		var E = new P;
		E.layers.enable(2);
		E.viewport = new R;
		var x = [u, E],
			w = new Le;
		w.layers.enable(1);
		w.layers.enable(2);
		var v = null,
			T = null;
		this.isPresenting = this.enabled = !1;
		this.getController = function(a) {
			var b = r[a];
			void 0 === b && (b = new Me, r[a] = b);
			return b.getTargetRaySpace()
		};
		this.getControllerGrip = function(a) {
			var b = r[a];
			void 0 === b && (b = new Me, r[a] = b);
			return b.getGripSpace()
		};
		this.setFramebufferScaleFactor = function(a) {
			m = a;
			!0 === h.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
		};
		this.setReferenceSpaceType = function(a) {
			n = a;
			!0 === h.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
		};
		this.getReferenceSpace = function() {
			return k
		};
		this.getSession = function() {
			return l
		};
		this.setSession = function(a) {
			l = a;
			null !== l && (l.addEventListener("select", c), l.addEventListener("selectstart", c), l.addEventListener("selectend", c), l.addEventListener("squeeze", c), l.addEventListener("squeezestart", c), l.addEventListener("squeezeend", c), l.addEventListener("end",
				d), a = b.getContextAttributes(), !0 !== a.xrCompatible && b.makeXRCompatible(), a = new XRWebGLLayer(l, b, {
				antialias: a.antialias,
				alpha: a.alpha,
				depth: a.depth,
				stencil: a.stencil,
				framebufferScaleFactor: m
			}), l.updateRenderState({
				baseLayer: a
			}), l.requestReferenceSpace(n).then(e), l.addEventListener("inputsourceschange", f))
		};
		var Z = new p,
			C = new p;
		this.getCamera = function(a) {
			w.near = E.near = u.near = a.near;
			w.far = E.far = u.far = a.far;
			if (v !== w.near || T !== w.far) l.updateRenderState({
				depthNear: w.near,
				depthFar: w.far
			}), v = w.near, T = w.far;
			var b = a.parent,
				c = w.cameras;
			g(w, b);
			for (var d = 0; d < c.length; d++) g(c[d], b);
			a.matrixWorld.copy(w.matrixWorld);
			a = a.children;
			d = 0;
			for (b = a.length; d < b; d++) a[d].updateMatrixWorld(!0);
			if (2 === c.length) {
				Z.setFromMatrixPosition(u.matrixWorld);
				C.setFromMatrixPosition(E.matrixWorld);
				c = Z.distanceTo(C);
				var e = u.projectionMatrix.elements,
					f = E.projectionMatrix.elements,
					h = e[14] / (e[10] - 1);
				d = e[14] / (e[10] + 1);
				a = (e[9] + 1) / e[5];
				b = (e[9] - 1) / e[5];
				var m = (e[8] - 1) / e[0],
					n = (f[8] + 1) / f[0];
				f = h * m;
				e = h * n;
				n = c / (-m + n);
				m = n * -m;
				u.matrixWorld.decompose(w.position,
					w.quaternion, w.scale);
				w.translateX(m);
				w.translateZ(n);
				w.matrixWorld.compose(w.position, w.quaternion, w.scale);
				w.matrixWorldInverse.getInverse(w.matrixWorld);
				h += n;
				n = d + n;
				w.projectionMatrix.makePerspective(f - m, e + (c - m), a * d / n * h, b * d / n * h, h, n)
			} else w.projectionMatrix.copy(u.projectionMatrix);
			return w
		};
		var B = null,
			Q = new uh;
		Q.setAnimationLoop(function(b, c) {
			t = c.getViewerPose(k);
			if (null !== t) {
				var d = t.views,
					e = l.renderState.baseLayer;
				a.setFramebuffer(e.framebuffer);
				var f = !1;
				d.length !== w.cameras.length && (w.cameras.length =
					0, f = !0);
				for (var g = 0; g < d.length; g++) {
					var h = d[g],
						m = e.getViewport(h),
						n = x[g];
					n.matrix.fromArray(h.transform.matrix);
					n.projectionMatrix.fromArray(h.projectionMatrix);
					n.viewport.set(m.x, m.y, m.width, m.height);
					0 === g && w.matrix.copy(n.matrix);
					!0 === f && w.cameras.push(n)
				}
			}
			d = l.inputSources;
			for (g = 0; g < r.length; g++) r[g].update(d[g], c, k);
			B && B(b, c)
		});
		this.setAnimationLoop = function(a) {
			B = a
		};
		this.dispose = function() {}
	}

	function zk(a) {
		function b(b, c, f) {
			b.opacity.value = c.opacity;
			c.color && b.diffuse.value.copy(c.color);
			c.emissive &&
				b.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
			c.map && (b.map.value = c.map);
			c.alphaMap && (b.alphaMap.value = c.alphaMap);
			c.specularMap && (b.specularMap.value = c.specularMap);
			if (f = c.envMap || f) b.envMap.value = f, b.flipEnvMap.value = f.isCubeTexture ? -1 : 1, b.reflectivity.value = c.reflectivity, b.refractionRatio.value = c.refractionRatio, b.maxMipLevel.value = a.get(f).__maxMipLevel;
			c.lightMap && (b.lightMap.value = c.lightMap, b.lightMapIntensity.value = c.lightMapIntensity);
			c.aoMap && (b.aoMap.value = c.aoMap,
				b.aoMapIntensity.value = c.aoMapIntensity);
			if (c.map) var d = c.map;
			else c.specularMap ? d = c.specularMap : c.displacementMap ? d = c.displacementMap : c.normalMap ? d = c.normalMap : c.bumpMap ? d = c.bumpMap : c.roughnessMap ? d = c.roughnessMap : c.metalnessMap ? d = c.metalnessMap : c.alphaMap ? d = c.alphaMap : c.emissiveMap && (d = c.emissiveMap);
			void 0 !== d && (d.isWebGLRenderTarget && (d = d.texture), !0 === d.matrixAutoUpdate && d.updateMatrix(), b.uvTransform.value.copy(d.matrix));
			if (c.aoMap) var e = c.aoMap;
			else c.lightMap && (e = c.lightMap);
			void 0 !== e &&
				(e.isWebGLRenderTarget && (e = e.texture), !0 === e.matrixAutoUpdate && e.updateMatrix(), b.uv2Transform.value.copy(e.matrix))
		}

		function c(a, b, c) {
			a.roughness.value = b.roughness;
			a.metalness.value = b.metalness;
			b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
			b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
			b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
			b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, 1 === b.side && (a.bumpScale.value *= -1));
			b.normalMap && (a.normalMap.value = b.normalMap,
				a.normalScale.value.copy(b.normalScale), 1 === b.side && a.normalScale.value.negate());
			b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
			if (b.envMap || c) a.envMapIntensity.value = b.envMapIntensity
		}
		return {
			refreshFogUniforms: function(a, b) {
				a.fogColor.value.copy(b.color);
				b.isFog ? (a.fogNear.value = b.near, a.fogFar.value = b.far) : b.isFogExp2 && (a.fogDensity.value = b.density)
			},
			refreshMaterialUniforms: function(a, e, f,
				g, h) {
				if (e.isMeshBasicMaterial) b(a, e);
				else if (e.isMeshLambertMaterial) b(a, e), e.emissiveMap && (a.emissiveMap.value = e.emissiveMap);
				else if (e.isMeshToonMaterial) b(a, e), a.specular.value.copy(e.specular), a.shininess.value = Math.max(e.shininess, 1E-4), e.gradientMap && (a.gradientMap.value = e.gradientMap), e.emissiveMap && (a.emissiveMap.value = e.emissiveMap), e.bumpMap && (a.bumpMap.value = e.bumpMap, a.bumpScale.value = e.bumpScale, 1 === e.side && (a.bumpScale.value *= -1)), e.normalMap && (a.normalMap.value = e.normalMap, a.normalScale.value.copy(e.normalScale),
					1 === e.side && a.normalScale.value.negate()), e.displacementMap && (a.displacementMap.value = e.displacementMap, a.displacementScale.value = e.displacementScale, a.displacementBias.value = e.displacementBias);
				else if (e.isMeshPhongMaterial) b(a, e), a.specular.value.copy(e.specular), a.shininess.value = Math.max(e.shininess, 1E-4), e.emissiveMap && (a.emissiveMap.value = e.emissiveMap), e.bumpMap && (a.bumpMap.value = e.bumpMap, a.bumpScale.value = e.bumpScale, 1 === e.side && (a.bumpScale.value *= -1)), e.normalMap && (a.normalMap.value = e.normalMap,
					a.normalScale.value.copy(e.normalScale), 1 === e.side && a.normalScale.value.negate()), e.displacementMap && (a.displacementMap.value = e.displacementMap, a.displacementScale.value = e.displacementScale, a.displacementBias.value = e.displacementBias);
				else if (e.isMeshStandardMaterial) b(a, e, f), e.isMeshPhysicalMaterial ? (c(a, e, f), a.reflectivity.value = e.reflectivity, a.clearcoat.value = e.clearcoat, a.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && a.sheen.value.copy(e.sheen), e.clearcoatMap && (a.clearcoatMap.value =
					e.clearcoatMap), e.clearcoatRoughnessMap && (a.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (a.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), a.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && a.clearcoatNormalScale.value.negate()), a.transparency.value = e.transparency) : c(a, e, f);
				else if (e.isMeshMatcapMaterial) b(a, e), e.matcap && (a.matcap.value = e.matcap), e.bumpMap && (a.bumpMap.value = e.bumpMap, a.bumpScale.value = e.bumpScale, 1 === e.side && (a.bumpScale.value *= -1)),
					e.normalMap && (a.normalMap.value = e.normalMap, a.normalScale.value.copy(e.normalScale), 1 === e.side && a.normalScale.value.negate()), e.displacementMap && (a.displacementMap.value = e.displacementMap, a.displacementScale.value = e.displacementScale, a.displacementBias.value = e.displacementBias);
				else if (e.isMeshDepthMaterial) b(a, e), e.displacementMap && (a.displacementMap.value = e.displacementMap, a.displacementScale.value = e.displacementScale, a.displacementBias.value = e.displacementBias);
				else if (e.isMeshDistanceMaterial) b(a,
					e), e.displacementMap && (a.displacementMap.value = e.displacementMap, a.displacementScale.value = e.displacementScale, a.displacementBias.value = e.displacementBias), a.referencePosition.value.copy(e.referencePosition), a.nearDistance.value = e.nearDistance, a.farDistance.value = e.farDistance;
				else if (e.isMeshNormalMaterial) b(a, e), e.bumpMap && (a.bumpMap.value = e.bumpMap, a.bumpScale.value = e.bumpScale, 1 === e.side && (a.bumpScale.value *= -1)), e.normalMap && (a.normalMap.value = e.normalMap, a.normalScale.value.copy(e.normalScale),
					1 === e.side && a.normalScale.value.negate()), e.displacementMap && (a.displacementMap.value = e.displacementMap, a.displacementScale.value = e.displacementScale, a.displacementBias.value = e.displacementBias);
				else if (e.isLineBasicMaterial) a.diffuse.value.copy(e.color), a.opacity.value = e.opacity, e.isLineDashedMaterial && (a.dashSize.value = e.dashSize, a.totalSize.value = e.dashSize + e.gapSize, a.scale.value = e.scale);
				else if (e.isPointsMaterial) {
					a.diffuse.value.copy(e.color);
					a.opacity.value = e.opacity;
					a.size.value = e.size * g;
					a.scale.value = .5 * h;
					e.map && (a.map.value = e.map);
					e.alphaMap && (a.alphaMap.value = e.alphaMap);
					if (e.map) var d = e.map;
					else e.alphaMap && (d = e.alphaMap);
					void 0 !== d && (!0 === d.matrixAutoUpdate && d.updateMatrix(), a.uvTransform.value.copy(d.matrix))
				} else if (e.isSpriteMaterial) {
					a.diffuse.value.copy(e.color);
					a.opacity.value = e.opacity;
					a.rotation.value = e.rotation;
					e.map && (a.map.value = e.map);
					e.alphaMap && (a.alphaMap.value = e.alphaMap);
					if (e.map) var m = e.map;
					else e.alphaMap && (m = e.alphaMap);
					void 0 !== m && (!0 === m.matrixAutoUpdate &&
						m.updateMatrix(), a.uvTransform.value.copy(m.matrix))
				} else e.isShadowMaterial ? (a.color.value.copy(e.color), a.opacity.value = e.opacity) : e.isShaderMaterial && (e.uniformsNeedUpdate = !1)
			}
		}
	}

	function jg(a) {
		var b;

		function c() {
			sa = new oj(I);
			Ha = new mj(I, sa, a);
			!1 === Ha.isWebGL2 && (sa.get("WEBGL_depth_texture"), sa.get("OES_texture_float"), sa.get("OES_texture_half_float"), sa.get("OES_texture_half_float_linear"), sa.get("OES_standard_derivatives"), sa.get("OES_element_index_uint"), sa.get("ANGLE_instanced_arrays"));
			sa.get("OES_texture_float_linear");
			ra = new Th(I, sa, Ha);
			X = new xk(I, sa, Ha);
			X.scissor(S.copy(ka).multiplyScalar(xa).floor());
			X.viewport(Y.copy(da).multiplyScalar(xa).floor());
			fa = new rj(I);
			P = new nk;
			ba = new yk(I, sa, X, P, Ha, ra, fa);
			oa = new jj(I, Ha);
			va = new pj(I, oa, fa);
			pa = new uj(I, va, oa, fa);
			Aa = new tj(I);
			ta = new mk(y, sa, Ha);
			za = new zk(P);
			ya = new qk;
			wa = new wk;
			qa = new kj(y, X, pa, ja);
			Ca = new lj(I, sa, fa, Ha);
			Ea = new qj(I, sa, fa, Ha);
			fa.programs = ta.programs;
			y.capabilities = Ha;
			y.extensions = sa;
			y.properties = P;
			y.renderLists = ya;
			y.state = X;
			y.info = fa
		}

		function d(a) {
			a.preventDefault();
			F = !0
		}

		function e() {
			console.log("THREE.WebGLRenderer: Context Restored.");
			F = !1;
			c()
		}

		function f(a) {
			a = a.target;
			a.removeEventListener("dispose", f);
			g(a);
			P.remove(a)
		}

		function g(a) {
			var b = P.get(a).program;
			a.program = void 0;
			void 0 !== b && ta.releaseProgram(b)
		}

		function h(a, b) {
			a.render(function(a) {
				y.renderBufferImmediate(a, b)
			})
		}

		function l(a, b, c, d) {
			if (!1 !== a.visible) {
				if (a.layers.test(b.layers))
					if (a.isGroup) c = a.renderOrder;
					else if (a.isLOD) !0 === a.autoUpdate && a.update(b);
				else if (a.isLight) Q.pushLight(a), a.castShadow && Q.pushShadow(a);
				else if (a.isSprite) {
					if (!a.frustumCulled || na.intersectsSprite(a)) {
						d && Jb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(la);
						var e = pa.update(a),
							f = a.material;
						f.visible && B.push(a, e, f, c, Jb.z, null)
					}
				} else if (a.isImmediateRenderObject) d && Jb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(la), B.push(a, null, a.material, c, Jb.z, null);
				else if (a.isMesh || a.isLine || a.isPoints)
					if (a.isSkinnedMesh && a.skeleton.frame !== fa.render.frame && (a.skeleton.update(),
							a.skeleton.frame = fa.render.frame), !a.frustumCulled || na.intersectsObject(a))
						if (d && Jb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(la), e = pa.update(a), f = a.material, Array.isArray(f))
							for (var g = e.groups, h = 0, m = g.length; h < m; h++) {
								var n = g[h],
									k = f[n.materialIndex];
								k && k.visible && B.push(a, e, k, c, Jb.z, n)
							} else f.visible && B.push(a, e, f, c, Jb.z, null);
				a = a.children;
				h = 0;
				for (m = a.length; h < m; h++) l(a[h], b, c, d)
			}
		}

		function m(a, b, c, d) {
			for (var e = 0, f = a.length; e < f; e++) {
				var g = a[e],
					h = g.object,
					l = g.geometry,
					m = void 0 === d ? g.material :
					d;
				g = g.group;
				if (c.isArrayCamera) {
					W = c;
					for (var n = c.cameras, z = 0, q = n.length; z < q; z++) {
						var t = n[z];
						h.layers.test(t.layers) && (X.viewport(Y.copy(t.viewport)), Q.setupLights(t), k(h, b, t, l, m, g))
					}
				} else W = null, k(h, b, c, l, m, g)
			}
		}

		function k(a, c, d, e, f, g) {
			a.onBeforeRender(y, c, d, e, f, g);
			Q = wa.get(c, W || d);
			a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld);
			a.normalMatrix.getNormalMatrix(a.modelViewMatrix);
			if (a.isImmediateRenderObject) {
				var l = t(d, c, f, a);
				X.setMaterial(f);
				V = b = null;
				Ke = !1;
				h(a, l)
			} else y.renderBufferDirect(d,
				c, e, f, a, g);
			a.onAfterRender(y, c, d, e, f, g);
			Q = wa.get(c, W || d)
		}

		function n(a, b, c) {
			var d = P.get(a),
				e = Q.state.lights,
				h = e.state.version;
			c = ta.getParameters(a, e.state, Q.state.shadowsArray, b, ha.numPlanes, ha.numIntersection, c);
			var l = ta.getProgramCacheKey(c),
				m = d.program,
				n = !0;
			if (void 0 === m) a.addEventListener("dispose", f);
			else if (m.cacheKey !== l) g(a);
			else {
				if (d.lightsStateVersion !== h) d.lightsStateVersion = h;
				else if (void 0 !== c.shaderID) return;
				n = !1
			}
			n && (m = ta.acquireProgram(c, l), d.program = m, d.uniforms = c.uniforms, d.outputEncoding =
				c.outputEncoding, a.program = m);
			c = m.getAttributes();
			if (a.morphTargets)
				for (l = a.numSupportedMorphTargets = 0; l < y.maxMorphTargets; l++) 0 <= c["morphTarget" + l] && a.numSupportedMorphTargets++;
			if (a.morphNormals)
				for (l = a.numSupportedMorphNormals = 0; l < y.maxMorphNormals; l++) 0 <= c["morphNormal" + l] && a.numSupportedMorphNormals++;
			c = d.uniforms;
			if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping) d.numClippingPlanes = ha.numPlanes, d.numIntersection = ha.numIntersection, c.clippingPlanes = ha.uniform;
			d.environment = a.isMeshStandardMaterial ?
				b.environment : null;
			d.fog = b.fog;
			d.needsLights = a.isMeshLambertMaterial || a.isMeshToonMaterial || a.isMeshPhongMaterial || a.isMeshStandardMaterial || a.isShadowMaterial || a.isShaderMaterial && !0 === a.lights;
			d.lightsStateVersion = h;
			d.needsLights && (c.ambientLightColor.value = e.state.ambient, c.lightProbe.value = e.state.probe, c.directionalLights.value = e.state.directional, c.directionalLightShadows.value = e.state.directionalShadow, c.spotLights.value = e.state.spot, c.spotLightShadows.value = e.state.spotShadow, c.rectAreaLights.value =
				e.state.rectArea, c.pointLights.value = e.state.point, c.pointLightShadows.value = e.state.pointShadow, c.hemisphereLights.value = e.state.hemi, c.directionalShadowMap.value = e.state.directionalShadowMap, c.directionalShadowMatrix.value = e.state.directionalShadowMatrix, c.spotShadowMap.value = e.state.spotShadowMap, c.spotShadowMatrix.value = e.state.spotShadowMatrix, c.pointShadowMap.value = e.state.pointShadowMap, c.pointShadowMatrix.value = e.state.pointShadowMatrix);
			a = d.program.getUniforms();
			a = Gb.seqWithValue(a.seq, c);
			d.uniformsList = a
		}

		function t(a, b, c, d) {
			ba.resetTextureUnits();
			var e = b.fog,
				f = c.isMeshStandardMaterial ? b.environment : null,
				g = null === G ? y.outputEncoding : G.texture.encoding,
				h = P.get(c),
				l = Q.state.lights;
			Je && (ig || a !== ia) && ha.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, h, a === ia && c.id === M);
			c.version === h.__version ? void 0 === h.program ? n(c, b, d) : c.fog && h.fog !== e ? n(c, b, d) : h.environment !== f ? n(c, b, d) : h.needsLights && h.lightsStateVersion !== l.state.version ? n(c, b, d) : void 0 === h.numClippingPlanes || h.numClippingPlanes ===
				ha.numPlanes && h.numIntersection === ha.numIntersection ? h.outputEncoding !== g && n(c, b, d) : n(c, b, d) : (n(c, b, d), h.__version = c.version);
			var m = !1,
				k = !1,
				z = !1;
			b = h.program;
			g = b.getUniforms();
			l = h.uniforms;
			X.useProgram(b.program) && (z = k = m = !0);
			c.id !== M && (M = c.id, k = !0);
			if (m || ia !== a) {
				g.setValue(I, "projectionMatrix", a.projectionMatrix);
				Ha.logarithmicDepthBuffer && g.setValue(I, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
				ia !== a && (ia = a, z = k = !0);
				if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshStandardMaterial ||
					c.envMap) m = g.map.cameraPosition, void 0 !== m && m.setValue(I, Jb.setFromMatrixPosition(a.matrixWorld));
				(c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial) && g.setValue(I, "isOrthographic", !0 === a.isOrthographicCamera);
				(c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) && g.setValue(I, "viewMatrix", a.matrixWorldInverse)
			}
			if (c.skinning &&
				(g.setOptional(I, d, "bindMatrix"), g.setOptional(I, d, "bindMatrixInverse"), a = d.skeleton))
				if (m = a.bones, Ha.floatVertexTextures) {
					if (void 0 === a.boneTexture) {
						m = Math.sqrt(4 * m.length);
						m = O.ceilPowerOfTwo(m);
						m = Math.max(m, 4);
						var q = new Float32Array(m * m * 4);
						q.set(a.boneMatrices);
						var t = new $b(q, m, m, 1023, 1015);
						a.boneMatrices = q;
						a.boneTexture = t;
						a.boneTextureSize = m
					}
					g.setValue(I, "boneTexture", a.boneTexture, ba);
					g.setValue(I, "boneTextureSize", a.boneTextureSize)
				} else g.setOptional(I, a, "boneMatrices");
			if (k || h.receiveShadow !==
				d.receiveShadow) h.receiveShadow = d.receiveShadow, g.setValue(I, "receiveShadow", d.receiveShadow);
			k && (g.setValue(I, "toneMappingExposure", y.toneMappingExposure), g.setValue(I, "toneMappingWhitePoint", y.toneMappingWhitePoint), h.needsLights && (k = z, l.ambientLightColor.needsUpdate = k, l.lightProbe.needsUpdate = k, l.directionalLights.needsUpdate = k, l.directionalLightShadows.needsUpdate = k, l.pointLights.needsUpdate = k, l.pointLightShadows.needsUpdate = k, l.spotLights.needsUpdate = k, l.spotLightShadows.needsUpdate = k, l.rectAreaLights.needsUpdate =
				k, l.hemisphereLights.needsUpdate = k), e && c.fog && za.refreshFogUniforms(l, e), za.refreshMaterialUniforms(l, c, f, xa, Ra), void 0 !== l.ltc_1 && (l.ltc_1.value = A.LTC_1), void 0 !== l.ltc_2 && (l.ltc_2.value = A.LTC_2), Gb.upload(I, h.uniformsList, l, ba));
			c.isShaderMaterial && !0 === c.uniformsNeedUpdate && (Gb.upload(I, h.uniformsList, l, ba), c.uniformsNeedUpdate = !1);
			c.isSpriteMaterial && g.setValue(I, "center", d.center);
			g.setValue(I, "modelViewMatrix", d.modelViewMatrix);
			g.setValue(I, "normalMatrix", d.normalMatrix);
			g.setValue(I, "modelMatrix",
				d.matrixWorld);
			return b
		}
		a = a || {};
		var r = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
			q = void 0 !== a.context ? a.context : null,
			u = void 0 !== a.alpha ? a.alpha : !1,
			E = void 0 !== a.depth ? a.depth : !0,
			x = void 0 !== a.stencil ? a.stencil : !0,
			w = void 0 !== a.antialias ? a.antialias : !1,
			ja = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
			T = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
			Z = void 0 !== a.powerPreference ? a.powerPreference : "default",
			C = void 0 !== a.failIfMajorPerformanceCaveat ?
			a.failIfMajorPerformanceCaveat : !1,
			B = null,
			Q = null;
		this.domElement = r;
		this.debug = {
			checkShaderErrors: !0
		};
		this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
		this.clippingPlanes = [];
		this.localClippingEnabled = !1;
		this.gammaFactor = 2;
		this.outputEncoding = 3E3;
		this.physicallyCorrectLights = !1;
		this.toneMapping = 0;
		this.toneMappingWhitePoint = this.toneMappingExposure = 1;
		this.maxMorphTargets = 8;
		this.maxMorphNormals = 4;
		var y = this,
			F = !1,
			D = null,
			H = 0,
			K = 0,
			G = null,
			L = null,
			M = -1;
		var V = b =
			null;
		var Ke = !1;
		var ia = null,
			W = null,
			Y = new R,
			S = new R,
			aa = null,
			ea = r.width,
			Ra = r.height,
			xa = 1,
			J = null,
			ca = null,
			da = new R(0, 0, ea, Ra),
			ka = new R(0, 0, ea, Ra),
			ma = !1,
			na = new Gc,
			ha = new nj,
			Je = !1,
			ig = !1,
			la = new N,
			Jb = new p;
		try {
			u = {
				alpha: u,
				depth: E,
				stencil: x,
				antialias: w,
				premultipliedAlpha: ja,
				preserveDrawingBuffer: T,
				powerPreference: Z,
				failIfMajorPerformanceCaveat: C
			};
			r.addEventListener("webglcontextlost", d, !1);
			r.addEventListener("webglcontextrestored", e, !1);
			var I = q || r.getContext("webgl", u) || r.getContext("experimental-webgl", u);
			if (null === I) {
				if (null !== r.getContext("webgl")) throw Error("Error creating WebGL context with your selected attributes.");
				throw Error("Error creating WebGL context.");
			}
			void 0 === I.getShaderPrecisionFormat && (I.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			})
		} catch (Vh) {
			throw console.error("THREE.WebGLRenderer: " + Vh.message), Vh;
		}
		var sa, Ha, X, fa, P, ba, oa, va, pa, ta, za, ya, wa, qa, Aa, Ca, Ea, ra;
		c();
		var ua = new Uh(y, I);
		this.xr = ua;
		var Ga = new Rh(y, pa, Ha.maxTextureSize);
		this.shadowMap = Ga;
		this.getContext = function() {
			return I
		};
		this.getContextAttributes = function() {
			return I.getContextAttributes()
		};
		this.forceContextLoss = function() {
			var a = sa.get("WEBGL_lose_context");
			a && a.loseContext()
		};
		this.forceContextRestore = function() {
			var a = sa.get("WEBGL_lose_context");
			a && a.restoreContext()
		};
		this.getPixelRatio = function() {
			return xa
		};
		this.setPixelRatio = function(a) {
			void 0 !== a && (xa = a, this.setSize(ea, Ra, !1))
		};
		this.getSize = function(a) {
			void 0 === a && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
				a = new v);
			return a.set(ea, Ra)
		};
		this.setSize = function(a, b, c) {
			ua.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (ea = a, Ra = b, r.width = Math.floor(a * xa), r.height = Math.floor(b * xa), !1 !== c && (r.style.width = a + "px", r.style.height = b + "px"), this.setViewport(0, 0, a, b))
		};
		this.getDrawingBufferSize = function(a) {
			void 0 === a && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), a = new v);
			return a.set(ea * xa, Ra * xa).floor()
		};
		this.setDrawingBufferSize =
			function(a, b, c) {
				ea = a;
				Ra = b;
				xa = c;
				r.width = Math.floor(a * c);
				r.height = Math.floor(b * c);
				this.setViewport(0, 0, a, b)
			};
		this.getCurrentViewport = function(a) {
			void 0 === a && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), a = new R);
			return a.copy(Y)
		};
		this.getViewport = function(a) {
			return a.copy(da)
		};
		this.setViewport = function(a, b, c, d) {
			a.isVector4 ? da.set(a.x, a.y, a.z, a.w) : da.set(a, b, c, d);
			X.viewport(Y.copy(da).multiplyScalar(xa).floor())
		};
		this.getScissor = function(a) {
			return a.copy(ka)
		};
		this.setScissor = function(a, b, c, d) {
			a.isVector4 ? ka.set(a.x, a.y, a.z, a.w) : ka.set(a, b, c, d);
			X.scissor(S.copy(ka).multiplyScalar(xa).floor())
		};
		this.getScissorTest = function() {
			return ma
		};
		this.setScissorTest = function(a) {
			X.setScissorTest(ma = a)
		};
		this.setOpaqueSort = function(a) {
			J = a
		};
		this.setTransparentSort = function(a) {
			ca = a
		};
		this.getClearColor = function() {
			return qa.getClearColor()
		};
		this.setClearColor = function() {
			qa.setClearColor.apply(qa, arguments)
		};
		this.getClearAlpha = function() {
			return qa.getClearAlpha()
		};
		this.setClearAlpha =
			function() {
				qa.setClearAlpha.apply(qa, arguments)
			};
		this.clear = function(a, b, c) {
			var d = 0;
			if (void 0 === a || a) d |= 16384;
			if (void 0 === b || b) d |= 256;
			if (void 0 === c || c) d |= 1024;
			I.clear(d)
		};
		this.clearColor = function() {
			this.clear(!0, !1, !1)
		};
		this.clearDepth = function() {
			this.clear(!1, !0, !1)
		};
		this.clearStencil = function() {
			this.clear(!1, !1, !0)
		};
		this.dispose = function() {
			r.removeEventListener("webglcontextlost", d, !1);
			r.removeEventListener("webglcontextrestored", e, !1);
			ya.dispose();
			wa.dispose();
			P.dispose();
			pa.dispose();
			ua.dispose();
			Ba.stop()
		};
		this.renderBufferImmediate = function(a, b) {
			X.initAttributes();
			var c = P.get(a);
			a.hasPositions && !c.position && (c.position = I.createBuffer());
			a.hasNormals && !c.normal && (c.normal = I.createBuffer());
			a.hasUvs && !c.uv && (c.uv = I.createBuffer());
			a.hasColors && !c.color && (c.color = I.createBuffer());
			b = b.getAttributes();
			a.hasPositions && (I.bindBuffer(34962, c.position), I.bufferData(34962, a.positionArray, 35048), X.enableAttribute(b.position), I.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0));
			a.hasNormals && (I.bindBuffer(34962,
				c.normal), I.bufferData(34962, a.normalArray, 35048), X.enableAttribute(b.normal), I.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0));
			a.hasUvs && (I.bindBuffer(34962, c.uv), I.bufferData(34962, a.uvArray, 35048), X.enableAttribute(b.uv), I.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0));
			a.hasColors && (I.bindBuffer(34962, c.color), I.bufferData(34962, a.colorArray, 35048), X.enableAttribute(b.color), I.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0));
			X.disableUnusedAttributes();
			I.drawArrays(4, 0, a.count);
			a.count = 0
		};
		var Ia = new zc;
		this.renderBufferDirect =
			function(a, c, d, e, f, g) {
				null === c && (c = Ia);
				var h = f.isMesh && 0 > f.matrixWorld.determinant(),
					l = t(a, c, e, f);
				X.setMaterial(e, h);
				var m = !1;
				if (b !== d.id || V !== l.id || Ke !== (!0 === e.wireframe)) b = d.id, V = l.id, Ke = !0 === e.wireframe, m = !0;
				if (e.morphTargets || e.morphNormals) Aa.update(f, d, e, l), m = !0;
				!0 === f.isInstancedMesh && (m = !0);
				a = d.index;
				c = d.attributes.position;
				if (null === a) {
					if (void 0 === c || 0 === c.count) return
				} else if (0 === a.count) return;
				var n = 1;
				!0 === e.wireframe && (a = va.getWireframeAttribute(d), n = 2);
				h = Ca;
				if (null !== a) {
					var k = oa.get(a);
					h = Ea;
					h.setIndex(k)
				}
				if (m) {
					if (!1 !== Ha.isWebGL2 || !f.isInstancedMesh && !d.isInstancedBufferGeometry || null !== sa.get("ANGLE_instanced_arrays")) {
						X.initAttributes();
						m = d.attributes;
						l = l.getAttributes();
						var z = e.defaultAttributeValues;
						for (ja in l) {
							var q = l[ja];
							if (0 <= q) {
								var r = m[ja];
								if (void 0 !== r) {
									var u = r.normalized,
										p = r.itemSize,
										w = oa.get(r);
									if (void 0 !== w) {
										var E = w.buffer,
											x = w.type;
										w = w.bytesPerElement;
										if (r.isInterleavedBufferAttribute) {
											var v = r.data,
												C = v.stride;
											r = r.offset;
											v && v.isInstancedInterleavedBuffer ? (X.enableAttributeAndDivisor(q,
												v.meshPerAttribute), void 0 === d._maxInstanceCount && (d._maxInstanceCount = v.meshPerAttribute * v.count)) : X.enableAttribute(q);
											I.bindBuffer(34962, E);
											X.vertexAttribPointer(q, p, x, u, C * w, r * w)
										} else r.isInstancedBufferAttribute ? (X.enableAttributeAndDivisor(q, r.meshPerAttribute), void 0 === d._maxInstanceCount && (d._maxInstanceCount = r.meshPerAttribute * r.count)) : X.enableAttribute(q), I.bindBuffer(34962, E), X.vertexAttribPointer(q, p, x, u, 0, 0)
									}
								} else if ("instanceMatrix" === ja) w = oa.get(f.instanceMatrix), void 0 !== w && (E = w.buffer,
									x = w.type, X.enableAttributeAndDivisor(q + 0, 1), X.enableAttributeAndDivisor(q + 1, 1), X.enableAttributeAndDivisor(q + 2, 1), X.enableAttributeAndDivisor(q + 3, 1), I.bindBuffer(34962, E), I.vertexAttribPointer(q + 0, 4, x, !1, 64, 0), I.vertexAttribPointer(q + 1, 4, x, !1, 64, 16), I.vertexAttribPointer(q + 2, 4, x, !1, 64, 32), I.vertexAttribPointer(q + 3, 4, x, !1, 64, 48));
								else if (void 0 !== z && (u = z[ja], void 0 !== u)) switch (u.length) {
									case 2:
										I.vertexAttrib2fv(q, u);
										break;
									case 3:
										I.vertexAttrib3fv(q, u);
										break;
									case 4:
										I.vertexAttrib4fv(q, u);
										break;
									default:
										I.vertexAttrib1fv(q,
											u)
								}
							}
						}
						X.disableUnusedAttributes()
					}
					null !== a && I.bindBuffer(34963, k.buffer)
				}
				var ja = d.drawRange.start * n;
				m = null !== g ? g.start * n : 0;
				k = Math.max(ja, m);
				g = Math.max(0, Math.min(null !== a ? a.count : c.count, ja + d.drawRange.count * n, m + (null !== g ? g.count * n : Infinity)) - 1 - k + 1);
				0 !== g && (f.isMesh ? !0 === e.wireframe ? (X.setLineWidth(e.wireframeLinewidth * (null === G ? xa : 1)), h.setMode(1)) : h.setMode(4) : f.isLine ? (e = e.linewidth, void 0 === e && (e = 1), X.setLineWidth(e * (null === G ? xa : 1)), f.isLineSegments ? h.setMode(1) : f.isLineLoop ? h.setMode(2) : h.setMode(3)) :
					f.isPoints ? h.setMode(0) : f.isSprite && h.setMode(4), f.isInstancedMesh ? h.renderInstances(d, k, g, f.count) : d.isInstancedBufferGeometry ? h.renderInstances(d, k, g, Math.min(d.instanceCount, d._maxInstanceCount)) : h.render(k, g))
			};
		this.compile = function(a, b) {
			Q = wa.get(a, b);
			Q.init();
			a.traverse(function(a) {
				a.isLight && (Q.pushLight(a), a.castShadow && Q.pushShadow(a))
			});
			Q.setupLights(b);
			var c = {};
			a.traverse(function(b) {
				var d = b.material;
				if (d)
					if (Array.isArray(d))
						for (var e = 0; e < d.length; e++) {
							var f = d[e];
							!1 === f.uuid in c && (n(f,
								a, b), c[f.uuid] = !0)
						} else !1 === d.uuid in c && (n(d, a, b), c[d.uuid] = !0)
			})
		};
		var Fa = null,
			Ba = new uh;
		Ba.setAnimationLoop(function(a) {
			ua.isPresenting || Fa && Fa(a)
		});
		"undefined" !== typeof window && Ba.setContext(window);
		this.setAnimationLoop = function(a) {
			Fa = a;
			ua.setAnimationLoop(a);
			Ba.start()
		};
		this.render = function(a, c, d, e) {
			if (void 0 !== d) {
				console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
				var f = d
			}
			if (void 0 !== e) {
				console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
				var g = e
			}
			c && c.isCamera ? F || (V = b = null, Ke = !1, M = -1, ia = null, !0 === a.autoUpdate && a.updateMatrixWorld(), null === c.parent && c.updateMatrixWorld(), ua.enabled && ua.isPresenting && (c = ua.getCamera(c)), a.onBeforeRender(y, a, c, f || G), Q = wa.get(a, c), Q.init(), la.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse), na.setFromProjectionMatrix(la), ig = this.localClippingEnabled, Je = ha.init(this.clippingPlanes, ig, c), B = ya.get(a, c), B.init(), l(a, c, 0, y.sortObjects), B.finish(), !0 === y.sortObjects && B.sort(J, ca), Je && ha.beginShadows(),
				Ga.render(Q.state.shadowsArray, a, c), Q.setupLights(c), Je && ha.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== f && this.setRenderTarget(f), qa.render(B, a, c, g), d = B.opaque, e = B.transparent, a.overrideMaterial ? (f = a.overrideMaterial, d.length && m(d, a, c, f), e.length && m(e, a, c, f)) : (d.length && m(d, a, c), e.length && m(e, a, c)), a.onAfterRender(y, a, c), null !== G && (ba.updateRenderTargetMipmap(G), ba.updateMultisampleRenderTarget(G)), X.buffers.depth.setTest(!0), X.buffers.depth.setMask(!0), X.buffers.color.setMask(!0),
				X.setPolygonOffset(!1), Q = B = null) : console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
		};
		this.setFramebuffer = function(a) {
			D !== a && null === G && I.bindFramebuffer(36160, a);
			D = a
		};
		this.getActiveCubeFace = function() {
			return H
		};
		this.getActiveMipmapLevel = function() {
			return K
		};
		this.getRenderTarget = function() {
			return G
		};
		this.setRenderTarget = function(a, b, c) {
			G = a;
			H = b;
			K = c;
			a && void 0 === P.get(a).__webglFramebuffer && ba.setupRenderTarget(a);
			var d = D,
				e = !1;
			a ? (d = P.get(a).__webglFramebuffer, a.isWebGLCubeRenderTarget ?
				(d = d[b || 0], e = !0) : d = a.isWebGLMultisampleRenderTarget ? P.get(a).__webglMultisampledFramebuffer : d, Y.copy(a.viewport), S.copy(a.scissor), aa = a.scissorTest) : (Y.copy(da).multiplyScalar(xa).floor(), S.copy(ka).multiplyScalar(xa).floor(), aa = ma);
			L !== d && (I.bindFramebuffer(36160, d), L = d);
			X.viewport(Y);
			X.scissor(S);
			X.setScissorTest(aa);
			e && (a = P.get(a.texture), I.framebufferTexture2D(36160, 36064, 34069 + (b || 0), a.__webglTexture, c || 0))
		};
		this.readRenderTargetPixels = function(a, b, c, d, e, f, g) {
			if (a && a.isWebGLRenderTarget) {
				var h =
					P.get(a).__webglFramebuffer;
				a.isWebGLCubeRenderTarget && void 0 !== g && (h = h[g]);
				if (h) {
					g = !1;
					h !== L && (I.bindFramebuffer(36160, h), g = !0);
					try {
						var l = a.texture,
							m = l.format,
							n = l.type;
						1023 !== m && ra.convert(m) !== I.getParameter(35739) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === n || ra.convert(n) === I.getParameter(35738) || 1015 === n && (Ha.isWebGL2 || sa.get("OES_texture_float") || sa.get("WEBGL_color_buffer_float")) || 1016 === n && (Ha.isWebGL2 ?
							sa.get("EXT_color_buffer_float") : sa.get("EXT_color_buffer_half_float")) ? 36053 === I.checkFramebufferStatus(36160) ? 0 <= b && b <= a.width - d && 0 <= c && c <= a.height - e && I.readPixels(b, c, d, e, ra.convert(m), ra.convert(n), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
					} finally {
						g && I.bindFramebuffer(36160, L)
					}
				}
			} else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
		};
		this.copyFramebufferToTexture = function(a, b, c) {
			void 0 === c && (c = 0);
			var d = Math.pow(2, -c),
				e = Math.floor(b.image.width * d);
			d = Math.floor(b.image.height * d);
			var f = ra.convert(b.format);
			ba.setTexture2D(b, 0);
			I.copyTexImage2D(3553, c, f, a.x, a.y, e, d, 0);
			X.unbindTexture()
		};
		this.copyTextureToTexture = function(a, b, c, d) {
			void 0 === d && (d = 0);
			var e = b.image.width,
				f = b.image.height,
				g = ra.convert(c.format),
				h = ra.convert(c.type);
			ba.setTexture2D(c, 0);
			b.isDataTexture ? I.texSubImage2D(3553, d, a.x, a.y, e, f, g, h, b.image.data) : b.isCompressedTexture ?
				I.compressedTexSubImage2D(3553, d, a.x, a.y, b.mipmaps[0].width, b.mipmaps[0].height, g, b.mipmaps[0].data) : I.texSubImage2D(3553, d, a.x, a.y, g, h, b.image);
			0 === d && c.generateMipmaps && I.generateMipmap(3553);
			X.unbindTexture()
		};
		this.initTexture = function(a) {
			ba.setTexture2D(a, 0);
			X.unbindTexture()
		};
		"undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
			detail: this
		}))
	}

	function Ne(a, b) {
		this.name = "";
		this.color = new D(a);
		this.density = void 0 !== b ? b : 2.5E-4
	}

	function Oe(a, b, c) {
		this.name =
			"";
		this.color = new D(a);
		this.near = void 0 !== b ? b : 1;
		this.far = void 0 !== c ? c : 1E3
	}

	function rb(a, b) {
		this.array = a;
		this.stride = b;
		this.count = void 0 !== a ? a.length / b : 0;
		this.usage = 35044;
		this.updateRange = {
			offset: 0,
			count: -1
		};
		this.version = 0
	}

	function Kd(a, b, c, d) {
		this.name = "";
		this.data = a;
		this.itemSize = b;
		this.offset = c;
		this.normalized = !0 === d
	}

	function Kb(a) {
		K.call(this);
		this.type = "SpriteMaterial";
		this.color = new D(16777215);
		this.alphaMap = this.map = null;
		this.rotation = 0;
		this.transparent = this.sizeAttenuation = !0;
		this.setValues(a)
	}

	function Ld(a) {
		y.call(this);
		this.type = "Sprite";
		if (void 0 === Lc) {
			Lc = new F;
			var b = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]);
			b = new rb(b, 5);
			Lc.setIndex([0, 1, 2, 0, 2, 3]);
			Lc.setAttribute("position", new Kd(b, 3, 0, !1));
			Lc.setAttribute("uv", new Kd(b, 2, 3, !1))
		}
		this.geometry = Lc;
		this.material = void 0 !== a ? a : new Kb;
		this.center = new v(.5, .5)
	}

	function Pe(a, b, c, d, e, f) {
		Mc.subVectors(a, c).addScalar(.5).multiply(d);
		void 0 !== e ? (Md.x = f * Mc.x - e * Mc.y, Md.y = e * Mc.x + f * Mc.y) : Md.copy(Mc);
		a.copy(b);
		a.x += Md.x;
		a.y += Md.y;
		a.applyMatrix4(Wh)
	}

	function Nd() {
		y.call(this);
		this._currentLevel = 0;
		this.type = "LOD";
		Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		});
		this.autoUpdate = !0
	}

	function Qe(a, b) {
		a && a.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
		ea.call(this, a, b);
		this.type = "SkinnedMesh";
		this.bindMode = "attached";
		this.bindMatrix = new N;
		this.bindMatrixInverse = new N
	}

	function Re(a, b) {
		a = a || [];
		this.bones = a.slice(0);
		this.boneMatrices = new Float32Array(16 *
			this.bones.length);
		this.frame = -1;
		if (void 0 === b) this.calculateInverses();
		else if (this.bones.length === b.length) this.boneInverses = b.slice(0);
		else
			for (console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [], a = 0, b = this.bones.length; a < b; a++) this.boneInverses.push(new N)
	}

	function kg() {
		y.call(this);
		this.type = "Bone"
	}

	function Se(a, b, c) {
		ea.call(this, a, b);
		this.instanceMatrix = new G(new Float32Array(16 * c), 16);
		this.count = c;
		this.frustumCulled = !1
	}

	function da(a) {
		K.call(this);
		this.type =
			"LineBasicMaterial";
		this.color = new D(16777215);
		this.linewidth = 1;
		this.linejoin = this.linecap = "round";
		this.morphTargets = !1;
		this.setValues(a)
	}

	function La(a, b, c) {
		1 === c && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
		y.call(this);
		this.type = "Line";
		this.geometry = void 0 !== a ? a : new F;
		this.material = void 0 !== b ? b : new da;
		this.updateMorphTargets()
	}

	function ma(a, b) {
		La.call(this, a, b);
		this.type = "LineSegments"
	}

	function Te(a, b) {
		La.call(this, a, b);
		this.type =
			"LineLoop"
	}

	function Xa(a) {
		K.call(this);
		this.type = "PointsMaterial";
		this.color = new D(16777215);
		this.alphaMap = this.map = null;
		this.size = 1;
		this.sizeAttenuation = !0;
		this.morphTargets = !1;
		this.setValues(a)
	}

	function Nc(a, b) {
		y.call(this);
		this.type = "Points";
		this.geometry = void 0 !== a ? a : new F;
		this.material = void 0 !== b ? b : new Xa;
		this.updateMorphTargets()
	}

	function lg(a, b, c, d, e, f, g) {
		var h = mg.distanceSqToPoint(a);
		h < c && (c = new p, mg.closestPointToPoint(a, c), c.applyMatrix4(d), a = e.ray.origin.distanceTo(c), a < e.near || a > e.far ||
			f.push({
				distance: a,
				distanceToRay: Math.sqrt(h),
				point: c,
				index: b,
				face: null,
				object: g
			}))
	}

	function ng(a, b, c, d, e, f, g, h, l) {
		W.call(this, a, b, c, d, e, f, g, h, l);
		this.format = void 0 !== g ? g : 1022;
		this.minFilter = void 0 !== f ? f : 1006;
		this.magFilter = void 0 !== e ? e : 1006;
		this.generateMipmaps = !1
	}

	function Oc(a, b, c, d, e, f, g, h, l, m, k, n) {
		W.call(this, null, f, g, h, l, m, d, e, k, n);
		this.image = {
			width: b,
			height: c
		};
		this.mipmaps = a;
		this.generateMipmaps = this.flipY = !1
	}

	function Od(a, b, c, d, e, f, g, h, l) {
		W.call(this, a, b, c, d, e, f, g, h, l);
		this.needsUpdate = !0
	}

	function Pd(a, b, c, d, e, f, g, h, l, m) {
		m = void 0 !== m ? m : 1026;
		if (1026 !== m && 1027 !== m) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		void 0 === c && 1026 === m && (c = 1012);
		void 0 === c && 1027 === m && (c = 1020);
		W.call(this, null, d, e, f, g, h, m, c, l);
		this.image = {
			width: a,
			height: b
		};
		this.magFilter = void 0 !== g ? g : 1003;
		this.minFilter = void 0 !== h ? h : 1003;
		this.generateMipmaps = this.flipY = !1
	}

	function Pc(a) {
		F.call(this);
		this.type = "WireframeGeometry";
		var b = [],
			c, d, e, f = [0, 0],
			g = {},
			h = ["a", "b", "c"];
		if (a &&
			a.isGeometry) {
			var l = a.faces;
			var m = 0;
			for (d = l.length; m < d; m++) {
				var k = l[m];
				for (c = 0; 3 > c; c++) {
					var n = k[h[c]];
					var t = k[h[(c + 1) % 3]];
					f[0] = Math.min(n, t);
					f[1] = Math.max(n, t);
					n = f[0] + "," + f[1];
					void 0 === g[n] && (g[n] = {
						index1: f[0],
						index2: f[1]
					})
				}
			}
			for (n in g) m = g[n], h = a.vertices[m.index1], b.push(h.x, h.y, h.z), h = a.vertices[m.index2], b.push(h.x, h.y, h.z)
		} else if (a && a.isBufferGeometry)
			if (h = new p, null !== a.index) {
				l = a.attributes.position;
				k = a.index;
				var r = a.groups;
				0 === r.length && (r = [{
					start: 0,
					count: k.count,
					materialIndex: 0
				}]);
				a = 0;
				for (e =
					r.length; a < e; ++a)
					for (m = r[a], c = m.start, d = m.count, m = c, d = c + d; m < d; m += 3)
						for (c = 0; 3 > c; c++) n = k.getX(m + c), t = k.getX(m + (c + 1) % 3), f[0] = Math.min(n, t), f[1] = Math.max(n, t), n = f[0] + "," + f[1], void 0 === g[n] && (g[n] = {
							index1: f[0],
							index2: f[1]
						});
				for (n in g) m = g[n], h.fromBufferAttribute(l, m.index1), b.push(h.x, h.y, h.z), h.fromBufferAttribute(l, m.index2), b.push(h.x, h.y, h.z)
			} else
				for (l = a.attributes.position, m = 0, d = l.count / 3; m < d; m++)
					for (c = 0; 3 > c; c++) g = 3 * m + c, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z), g = 3 * m + (c + 1) % 3, h.fromBufferAttribute(l,
						g), b.push(h.x, h.y, h.z);
		this.setAttribute("position", new B(b, 3))
	}

	function Qd(a, b, c) {
		L.call(this);
		this.type = "ParametricGeometry";
		this.parameters = {
			func: a,
			slices: b,
			stacks: c
		};
		this.fromBufferGeometry(new Qc(a, b, c));
		this.mergeVertices()
	}

	function Qc(a, b, c) {
		F.call(this);
		this.type = "ParametricBufferGeometry";
		this.parameters = {
			func: a,
			slices: b,
			stacks: c
		};
		var d = [],
			e = [],
			f = [],
			g = [],
			h = new p,
			l = new p,
			m = new p,
			k = new p,
			n = new p,
			t, r;
		3 > a.length && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
		var q = b + 1;
		for (t = 0; t <= c; t++) {
			var u = t / c;
			for (r = 0; r <= b; r++) {
				var E = r / b;
				a(E, u, l);
				e.push(l.x, l.y, l.z);
				0 <= E - 1E-5 ? (a(E - 1E-5, u, m), k.subVectors(l, m)) : (a(E + 1E-5, u, m), k.subVectors(m, l));
				0 <= u - 1E-5 ? (a(E, u - 1E-5, m), n.subVectors(l, m)) : (a(E, u + 1E-5, m), n.subVectors(m, l));
				h.crossVectors(k, n).normalize();
				f.push(h.x, h.y, h.z);
				g.push(E, u)
			}
		}
		for (t = 0; t < c; t++)
			for (r = 0; r < b; r++) a = t * q + r + 1, h = (t + 1) * q + r + 1, l = (t + 1) * q + r, d.push(t * q + r, a, l), d.push(a, h, l);
		this.setIndex(d);
		this.setAttribute("position", new B(e, 3));
		this.setAttribute("normal",
			new B(f, 3));
		this.setAttribute("uv", new B(g, 2))
	}

	function Rd(a, b, c, d) {
		L.call(this);
		this.type = "PolyhedronGeometry";
		this.parameters = {
			vertices: a,
			indices: b,
			radius: c,
			detail: d
		};
		this.fromBufferGeometry(new Ga(a, b, c, d));
		this.mergeVertices()
	}

	function Ga(a, b, c, d) {
		function e(a) {
			h.push(a.x, a.y, a.z)
		}

		function f(b, c) {
			b *= 3;
			c.x = a[b + 0];
			c.y = a[b + 1];
			c.z = a[b + 2]
		}

		function g(a, b, c, d) {
			0 > d && 1 === a.x && (l[b] = a.x - 1);
			0 === c.x && 0 === c.z && (l[b] = d / 2 / Math.PI + .5)
		}
		F.call(this);
		this.type = "PolyhedronBufferGeometry";
		this.parameters = {
			vertices: a,
			indices: b,
			radius: c,
			detail: d
		};
		c = c || 1;
		d = d || 0;
		var h = [],
			l = [];
		(function(a) {
			for (var c = new p, d = new p, g = new p, h = 0; h < b.length; h += 3) {
				f(b[h + 0], c);
				f(b[h + 1], d);
				f(b[h + 2], g);
				var l, m, k = c,
					x = d,
					w = g,
					v = Math.pow(2, a),
					T = [];
				for (m = 0; m <= v; m++) {
					T[m] = [];
					var Z = k.clone().lerp(w, m / v),
						C = x.clone().lerp(w, m / v),
						y = v - m;
					for (l = 0; l <= y; l++) T[m][l] = 0 === l && m === v ? Z : Z.clone().lerp(C, l / y)
				}
				for (m = 0; m < v; m++)
					for (l = 0; l < 2 * (v - m) - 1; l++) k = Math.floor(l / 2), 0 === l % 2 ? (e(T[m][k + 1]), e(T[m + 1][k]), e(T[m][k])) : (e(T[m][k + 1]), e(T[m + 1][k + 1]), e(T[m + 1][k]))
			}
		})(d);
		(function(a) {
			for (var b =
					new p, c = 0; c < h.length; c += 3) b.x = h[c + 0], b.y = h[c + 1], b.z = h[c + 2], b.normalize().multiplyScalar(a), h[c + 0] = b.x, h[c + 1] = b.y, h[c + 2] = b.z
		})(c);
		(function() {
			for (var a = new p, b = 0; b < h.length; b += 3) a.x = h[b + 0], a.y = h[b + 1], a.z = h[b + 2], l.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5));
			a = new p;
			b = new p;
			for (var c = new p, d = new p, e = new v, f = new v, k = new v, E = 0, x = 0; E < h.length; E += 9, x += 6) {
				a.set(h[E + 0], h[E + 1], h[E + 2]);
				b.set(h[E + 3], h[E + 4], h[E + 5]);
				c.set(h[E + 6], h[E + 7], h[E + 8]);
				e.set(l[x + 0],
					l[x + 1]);
				f.set(l[x + 2], l[x + 3]);
				k.set(l[x + 4], l[x + 5]);
				d.copy(a).add(b).add(c).divideScalar(3);
				var w = Math.atan2(d.z, -d.x);
				g(e, x + 0, a, w);
				g(f, x + 2, b, w);
				g(k, x + 4, c, w)
			}
			for (a = 0; a < l.length; a += 6) b = l[a + 0], c = l[a + 2], d = l[a + 4], e = Math.min(b, c, d), .9 < Math.max(b, c, d) && .1 > e && (.2 > b && (l[a + 0] += 1), .2 > c && (l[a + 2] += 1), .2 > d && (l[a + 4] += 1))
		})();
		this.setAttribute("position", new B(h, 3));
		this.setAttribute("normal", new B(h.slice(), 3));
		this.setAttribute("uv", new B(l, 2));
		0 === d ? this.computeVertexNormals() : this.normalizeNormals()
	}

	function Sd(a,
		b) {
		L.call(this);
		this.type = "TetrahedronGeometry";
		this.parameters = {
			radius: a,
			detail: b
		};
		this.fromBufferGeometry(new Rc(a, b));
		this.mergeVertices()
	}

	function Rc(a, b) {
		Ga.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
		this.type = "TetrahedronBufferGeometry";
		this.parameters = {
			radius: a,
			detail: b
		}
	}

	function Td(a, b) {
		L.call(this);
		this.type = "OctahedronGeometry";
		this.parameters = {
			radius: a,
			detail: b
		};
		this.fromBufferGeometry(new bc(a, b));
		this.mergeVertices()
	}

	function bc(a, b) {
		Ga.call(this, [1, 0, 0,
			-1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1
		], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
		this.type = "OctahedronBufferGeometry";
		this.parameters = {
			radius: a,
			detail: b
		}
	}

	function Ud(a, b) {
		L.call(this);
		this.type = "IcosahedronGeometry";
		this.parameters = {
			radius: a,
			detail: b
		};
		this.fromBufferGeometry(new Sc(a, b));
		this.mergeVertices()
	}

	function Sc(a, b) {
		var c = (1 + Math.sqrt(5)) / 2;
		Ga.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5,
			11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
		], a, b);
		this.type = "IcosahedronBufferGeometry";
		this.parameters = {
			radius: a,
			detail: b
		}
	}

	function Vd(a, b) {
		L.call(this);
		this.type = "DodecahedronGeometry";
		this.parameters = {
			radius: a,
			detail: b
		};
		this.fromBufferGeometry(new Tc(a, b));
		this.mergeVertices()
	}

	function Tc(a, b) {
		var c = (1 + Math.sqrt(5)) / 2,
			d = 1 / c;
		Ga.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c,
			0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d
		], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b);
		this.type = "DodecahedronBufferGeometry";
		this.parameters = {
			radius: a,
			detail: b
		}
	}

	function Wd(a, b, c, d, e, f) {
		L.call(this);
		this.type = "TubeGeometry";
		this.parameters = {
			path: a,
			tubularSegments: b,
			radius: c,
			radialSegments: d,
			closed: e
		};
		void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
		a = new cc(a, b, c, d, e);
		this.tangents = a.tangents;
		this.normals = a.normals;
		this.binormals = a.binormals;
		this.fromBufferGeometry(a);
		this.mergeVertices()
	}

	function cc(a, b, c, d, e) {
		function f(e) {
			k = a.getPointAt(e / b, k);
			var f = g.normals[e];
			e = g.binormals[e];
			for (t = 0; t <= d; t++) {
				var m = t / d * Math.PI * 2,
					n = Math.sin(m);
				m = -Math.cos(m);
				l.x = m * f.x + n * e.x;
				l.y = m * f.y + n * e.y;
				l.z = m * f.z + n * e.z;
				l.normalize();
				q.push(l.x, l.y, l.z);
				h.x = k.x + c * l.x;
				h.y = k.y + c * l.y;
				h.z =
					k.z + c * l.z;
				r.push(h.x, h.y, h.z)
			}
		}
		F.call(this);
		this.type = "TubeBufferGeometry";
		this.parameters = {
			path: a,
			tubularSegments: b,
			radius: c,
			radialSegments: d,
			closed: e
		};
		b = b || 64;
		c = c || 1;
		d = d || 8;
		e = e || !1;
		var g = a.computeFrenetFrames(b, e);
		this.tangents = g.tangents;
		this.normals = g.normals;
		this.binormals = g.binormals;
		var h = new p,
			l = new p,
			m = new v,
			k = new p,
			n, t, r = [],
			q = [],
			u = [],
			E = [];
		for (n = 0; n < b; n++) f(n);
		f(!1 === e ? b : 0);
		for (n = 0; n <= b; n++)
			for (t = 0; t <= d; t++) m.x = n / b, m.y = t / d, u.push(m.x, m.y);
		(function() {
			for (t = 1; t <= b; t++)
				for (n = 1; n <= d; n++) {
					var a =
						(d + 1) * t + (n - 1),
						c = (d + 1) * t + n,
						e = (d + 1) * (t - 1) + n;
					E.push((d + 1) * (t - 1) + (n - 1), a, e);
					E.push(a, c, e)
				}
		})();
		this.setIndex(E);
		this.setAttribute("position", new B(r, 3));
		this.setAttribute("normal", new B(q, 3));
		this.setAttribute("uv", new B(u, 2))
	}

	function Xd(a, b, c, d, e, f, g) {
		L.call(this);
		this.type = "TorusKnotGeometry";
		this.parameters = {
			radius: a,
			tube: b,
			tubularSegments: c,
			radialSegments: d,
			p: e,
			q: f
		};
		void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
		this.fromBufferGeometry(new Uc(a,
			b, c, d, e, f));
		this.mergeVertices()
	}

	function Uc(a, b, c, d, e, f) {
		function g(a, b, c, d, e) {
			var f = Math.sin(a);
			b = c / b * a;
			c = Math.cos(b);
			e.x = d * (2 + c) * .5 * Math.cos(a);
			e.y = d * (2 + c) * f * .5;
			e.z = d * Math.sin(b) * .5
		}
		F.call(this);
		this.type = "TorusKnotBufferGeometry";
		this.parameters = {
			radius: a,
			tube: b,
			tubularSegments: c,
			radialSegments: d,
			p: e,
			q: f
		};
		a = a || 1;
		b = b || .4;
		c = Math.floor(c) || 64;
		d = Math.floor(d) || 8;
		e = e || 2;
		f = f || 3;
		var h = [],
			l = [],
			m = [],
			k = [],
			n, t = new p,
			r = new p,
			q = new p,
			u = new p,
			E = new p,
			x = new p,
			w = new p;
		for (n = 0; n <= c; ++n) {
			var v = n / c * e * Math.PI * 2;
			g(v, e, f, a, q);
			g(v + .01, e, f, a, u);
			x.subVectors(u, q);
			w.addVectors(u, q);
			E.crossVectors(x, w);
			w.crossVectors(E, x);
			E.normalize();
			w.normalize();
			for (v = 0; v <= d; ++v) {
				var T = v / d * Math.PI * 2,
					Z = -b * Math.cos(T);
				T = b * Math.sin(T);
				t.x = q.x + (Z * w.x + T * E.x);
				t.y = q.y + (Z * w.y + T * E.y);
				t.z = q.z + (Z * w.z + T * E.z);
				l.push(t.x, t.y, t.z);
				r.subVectors(t, q).normalize();
				m.push(r.x, r.y, r.z);
				k.push(n / c);
				k.push(v / d)
			}
		}
		for (v = 1; v <= c; v++)
			for (n = 1; n <= d; n++) a = (d + 1) * v + (n - 1), b = (d + 1) * v + n, e = (d + 1) * (v - 1) + n, h.push((d + 1) * (v - 1) + (n - 1), a, e), h.push(a, b, e);
		this.setIndex(h);
		this.setAttribute("position", new B(l, 3));
		this.setAttribute("normal", new B(m, 3));
		this.setAttribute("uv", new B(k, 2))
	}

	function Yd(a, b, c, d, e) {
		L.call(this);
		this.type = "TorusGeometry";
		this.parameters = {
			radius: a,
			tube: b,
			radialSegments: c,
			tubularSegments: d,
			arc: e
		};
		this.fromBufferGeometry(new Vc(a, b, c, d, e));
		this.mergeVertices()
	}

	function Vc(a, b, c, d, e) {
		F.call(this);
		this.type = "TorusBufferGeometry";
		this.parameters = {
			radius: a,
			tube: b,
			radialSegments: c,
			tubularSegments: d,
			arc: e
		};
		a = a || 1;
		b = b || .4;
		c = Math.floor(c) || 8;
		d = Math.floor(d) ||
			6;
		e = e || 2 * Math.PI;
		var f = [],
			g = [],
			h = [],
			l = [],
			m = new p,
			k = new p,
			n = new p,
			t, r;
		for (t = 0; t <= c; t++)
			for (r = 0; r <= d; r++) {
				var q = r / d * e,
					u = t / c * Math.PI * 2;
				k.x = (a + b * Math.cos(u)) * Math.cos(q);
				k.y = (a + b * Math.cos(u)) * Math.sin(q);
				k.z = b * Math.sin(u);
				g.push(k.x, k.y, k.z);
				m.x = a * Math.cos(q);
				m.y = a * Math.sin(q);
				n.subVectors(k, m).normalize();
				h.push(n.x, n.y, n.z);
				l.push(r / d);
				l.push(t / c)
			}
		for (t = 1; t <= c; t++)
			for (r = 1; r <= d; r++) a = (d + 1) * (t - 1) + r - 1, b = (d + 1) * (t - 1) + r, e = (d + 1) * t + r, f.push((d + 1) * t + r - 1, a, e), f.push(a, b, e);
		this.setIndex(f);
		this.setAttribute("position",
			new B(g, 3));
		this.setAttribute("normal", new B(h, 3));
		this.setAttribute("uv", new B(l, 2))
	}

	function Xh(a, b, c, d, e) {
		for (var f, g = 0, h = b, l = c - d; h < c; h += d) g += (a[l] - a[h]) * (a[h + 1] + a[l + 1]), l = h;
		if (e === 0 < g)
			for (e = b; e < c; e += d) f = Yh(e, a[e], a[e + 1], f);
		else
			for (e = c - d; e >= b; e -= d) f = Yh(e, a[e], a[e + 1], f);
		f && Ue(f, f.next) && (Zd(f), f = f.next);
		return f
	}

	function Lb(a, b) {
		if (!a) return a;
		b || (b = a);
		do {
			var c = !1;
			if (a.steiner || !Ue(a, a.next) && 0 !== na(a.prev, a, a.next)) a = a.next;
			else {
				Zd(a);
				a = b = a.prev;
				if (a === a.next) break;
				c = !0
			}
		} while (c || a !== b);
		return b
	}

	function $d(a, b, c, d, e, f, g) {
		if (a) {
			if (!g && f) {
				var h = a,
					l = h;
				do null === l.z && (l.z = og(l.x, l.y, d, e, f)), l.prevZ = l.prev, l = l.nextZ = l.next; while (l !== h);
				l.prevZ.nextZ = null;
				l.prevZ = null;
				h = l;
				var m, k, n, t, r = 1;
				do {
					l = h;
					var q = h = null;
					for (k = 0; l;) {
						k++;
						var p = l;
						for (m = n = 0; m < r && (n++, p = p.nextZ, p); m++);
						for (t = r; 0 < n || 0 < t && p;) 0 !== n && (0 === t || !p || l.z <= p.z) ? (m = l, l = l.nextZ, n--) : (m = p, p = p.nextZ, t--), q ? q.nextZ = m : h = m, m.prevZ = q, q = m;
						l = p
					}
					q.nextZ = null;
					r *= 2
				} while (1 < k)
			}
			for (h = a; a.prev !== a.next;) {
				l = a.prev;
				p = a.next;
				if (f) q = Ak(a, d, e, f);
				else a: if (q =
						a, k = q.prev, n = q, r = q.next, 0 <= na(k, n, r)) q = !1;
					else {
						for (m = q.next.next; m !== q.prev;) {
							if (Wc(k.x, k.y, n.x, n.y, r.x, r.y, m.x, m.y) && 0 <= na(m.prev, m, m.next)) {
								q = !1;
								break a
							}
							m = m.next
						}
						q = !0
					} if (q) b.push(l.i / c), b.push(a.i / c), b.push(p.i / c), Zd(a), h = a = p.next;
				else if (a = p, a === h) {
					if (!g) $d(Lb(a), b, c, d, e, f, 1);
					else if (1 === g) {
						a = Lb(a);
						g = b;
						h = c;
						l = a;
						do p = l.prev, q = l.next.next, !Ue(p, q) && Zh(p, l, l.next, q) && ae(p, q) && ae(q, p) && (g.push(p.i / h), g.push(l.i / h), g.push(q.i / h), Zd(l), Zd(l.next), l = a = q), l = l.next; while (l !== a);
						a = Lb(l);
						$d(a, b, c, d, e, f, 2)
					} else if (2 ===
						g) a: {
						g = a;do {
							for (h = g.next.next; h !== g.prev;) {
								if (l = g.i !== h.i) {
									l = g;
									p = h;
									if (q = l.next.i !== p.i && l.prev.i !== p.i) {
										b: {
											q = l;do {
												if (q.i !== l.i && q.next.i !== l.i && q.i !== p.i && q.next.i !== p.i && Zh(q, q.next, l, p)) {
													q = !0;
													break b
												}
												q = q.next
											} while (q !== l);q = !1
										}
										q = !q
									}
									if (q) {
										if (q = ae(l, p) && ae(p, l)) {
											q = l;
											k = !1;
											n = (l.x + p.x) / 2;
											r = (l.y + p.y) / 2;
											do q.y > r !== q.next.y > r && q.next.y !== q.y && n < (q.next.x - q.x) * (r - q.y) / (q.next.y - q.y) + q.x && (k = !k), q = q.next; while (q !== l);
											q = k
										}
										q = q && (na(l.prev, l, p.prev) || na(l, p.prev, p)) || Ue(l, p) && 0 < na(l.prev, l, l.next) && 0 < na(p.prev,
											p, p.next)
									}
									l = q
								}
								if (l) {
									a = $h(g, h);
									g = Lb(g, g.next);
									a = Lb(a, a.next);
									$d(g, b, c, d, e, f);
									$d(a, b, c, d, e, f);
									break a
								}
								h = h.next
							}
							g = g.next
						} while (g !== a)
					}
					break
				}
			}
		}
	}

	function Ak(a, b, c, d) {
		var e = a.prev,
			f = a.next;
		if (0 <= na(e, a, f)) return !1;
		var g = e.x > a.x ? e.x > f.x ? e.x : f.x : a.x > f.x ? a.x : f.x,
			h = e.y > a.y ? e.y > f.y ? e.y : f.y : a.y > f.y ? a.y : f.y,
			l = og(e.x < a.x ? e.x < f.x ? e.x : f.x : a.x < f.x ? a.x : f.x, e.y < a.y ? e.y < f.y ? e.y : f.y : a.y < f.y ? a.y : f.y, b, c, d);
		b = og(g, h, b, c, d);
		c = a.prevZ;
		for (d = a.nextZ; c && c.z >= l && d && d.z <= b;) {
			if (c !== a.prev && c !== a.next && Wc(e.x, e.y, a.x, a.y, f.x,
					f.y, c.x, c.y) && 0 <= na(c.prev, c, c.next)) return !1;
			c = c.prevZ;
			if (d !== a.prev && d !== a.next && Wc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= na(d.prev, d, d.next)) return !1;
			d = d.nextZ
		}
		for (; c && c.z >= l;) {
			if (c !== a.prev && c !== a.next && Wc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= na(c.prev, c, c.next)) return !1;
			c = c.prevZ
		}
		for (; d && d.z <= b;) {
			if (d !== a.prev && d !== a.next && Wc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= na(d.prev, d, d.next)) return !1;
			d = d.nextZ
		}
		return !0
	}

	function Bk(a, b) {
		return a.x - b.x
	}

	function Ck(a, b) {
		var c = b,
			d = a.x,
			e = a.y,
			f = -Infinity;
		do {
			if (e <=
				c.y && e >= c.next.y && c.next.y !== c.y) {
				var g = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
				if (g <= d && g > f) {
					f = g;
					if (g === d) {
						if (e === c.y) return c;
						if (e === c.next.y) return c.next
					}
					var h = c.x < c.next.x ? c : c.next
				}
			}
			c = c.next
		} while (c !== b);
		if (!h) return null;
		if (d === f) return h;
		b = h;
		g = h.x;
		var l = h.y,
			m = Infinity;
		c = h;
		do {
			if (d >= c.x && c.x >= g && d !== c.x && Wc(e < l ? d : f, e, g, l, e < l ? f : d, e, c.x, c.y)) {
				var k = Math.abs(e - c.y) / (d - c.x);
				var n;
				if ((n = ae(c, a)) && !(n = k < m) && (n = k === m) && !(n = c.x > h.x) && (n = c.x === h.x)) {
					n = h;
					var t = c;
					n = 0 > na(n.prev, n, t.prev) && 0 > na(t.next,
						n, n.next)
				}
				n && (h = c, m = k)
			}
			c = c.next
		} while (c !== b);
		return h
	}

	function og(a, b, c, d, e) {
		a = 32767 * (a - c) * e;
		b = 32767 * (b - d) * e;
		a = (a | a << 8) & 16711935;
		a = (a | a << 4) & 252645135;
		a = (a | a << 2) & 858993459;
		b = (b | b << 8) & 16711935;
		b = (b | b << 4) & 252645135;
		b = (b | b << 2) & 858993459;
		return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
	}

	function Dk(a) {
		var b = a,
			c = a;
		do {
			if (b.x < c.x || b.x === c.x && b.y < c.y) c = b;
			b = b.next
		} while (b !== a);
		return c
	}

	function Wc(a, b, c, d, e, f, g, h) {
		return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b - h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h)
	}

	function na(a,
		b, c) {
		return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
	}

	function Ue(a, b) {
		return a.x === b.x && a.y === b.y
	}

	function Zh(a, b, c, d) {
		var e = Ve(na(a, b, c)),
			f = Ve(na(a, b, d)),
			g = Ve(na(c, d, a)),
			h = Ve(na(c, d, b));
		return e !== f && g !== h || 0 === e && We(a, c, b) || 0 === f && We(a, d, b) || 0 === g && We(c, a, d) || 0 === h && We(c, b, d) ? !0 : !1
	}

	function We(a, b, c) {
		return b.x <= Math.max(a.x, c.x) && b.x >= Math.min(a.x, c.x) && b.y <= Math.max(a.y, c.y) && b.y >= Math.min(a.y, c.y)
	}

	function Ve(a) {
		return 0 < a ? 1 : 0 > a ? -1 : 0
	}

	function ae(a, b) {
		return 0 > na(a.prev, a, a.next) ? 0 <= na(a, b, a.next) &&
			0 <= na(a, a.prev, b) : 0 > na(a, b, a.prev) || 0 > na(a, a.next, b)
	}

	function $h(a, b) {
		var c = new pg(a.i, a.x, a.y),
			d = new pg(b.i, b.x, b.y),
			e = a.next,
			f = b.prev;
		a.next = b;
		b.prev = a;
		c.next = e;
		e.prev = c;
		d.next = c;
		c.prev = d;
		f.next = d;
		d.prev = f;
		return d
	}

	function Yh(a, b, c, d) {
		a = new pg(a, b, c);
		d ? (a.next = d.next, a.prev = d, d.next.prev = a, d.next = a) : (a.prev = a, a.next = a);
		return a
	}

	function Zd(a) {
		a.next.prev = a.prev;
		a.prev.next = a.next;
		a.prevZ && (a.prevZ.nextZ = a.nextZ);
		a.nextZ && (a.nextZ.prevZ = a.prevZ)
	}

	function pg(a, b, c) {
		this.i = a;
		this.x = b;
		this.y = c;
		this.nextZ =
			this.prevZ = this.z = this.next = this.prev = null;
		this.steiner = !1
	}

	function ai(a) {
		var b = a.length;
		2 < b && a[b - 1].equals(a[0]) && a.pop()
	}

	function bi(a, b) {
		for (var c = 0; c < b.length; c++) a.push(b[c].x), a.push(b[c].y)
	}

	function dc(a, b) {
		L.call(this);
		this.type = "ExtrudeGeometry";
		this.parameters = {
			shapes: a,
			options: b
		};
		this.fromBufferGeometry(new hb(a, b));
		this.mergeVertices()
	}

	function hb(a, b) {
		function c(a) {
			function c(a, b, c) {
				b || console.error("THREE.ExtrudeGeometry: vec does not exist");
				return b.clone().multiplyScalar(c).add(a)
			}

			function g(a, b, c) {
				var d = a.x - b.x;
				var e = a.y - b.y;
				var f = c.x - a.x;
				var g = c.y - a.y,
					h = d * d + e * e;
				if (Math.abs(d * g - e * f) > Number.EPSILON) {
					var l = Math.sqrt(h),
						m = Math.sqrt(f * f + g * g);
					h = b.x - e / l;
					b = b.y + d / l;
					g = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f);
					f = h + d * g - a.x;
					d = b + e * g - a.y;
					e = f * f + d * d;
					if (2 >= e) return new v(f, d);
					e = Math.sqrt(e / 2)
				} else a = !1, d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? (f = -e, e = Math.sqrt(h)) : (f = d, d = e, e = Math.sqrt(h / 2));
				return new v(f / e, d /
					e)
			}

			function h(a, b) {
				for (J = a.length; 0 <= --J;) {
					var c = J;
					var f = J - 1;
					0 > f && (f = a.length - 1);
					var g, h = w + 2 * B;
					for (g = 0; g < h; g++) {
						var l = W * g,
							m = W * (g + 1),
							k = b + f + l,
							n = b + f + m;
						m = b + c + m;
						q(b + c + l);
						q(k);
						q(m);
						q(k);
						q(n);
						q(m);
						l = e.length / 3;
						l = F.generateSideWallUV(d, e, l - 6, l - 3, l - 2, l - 1);
						u(l[0]);
						u(l[1]);
						u(l[3]);
						u(l[1]);
						u(l[2]);
						u(l[3])
					}
				}
			}

			function l(a, b, c) {
				E.push(a);
				E.push(b);
				E.push(c)
			}

			function k(a, b, c) {
				q(a);
				q(b);
				q(c);
				a = e.length / 3;
				a = F.generateTopUV(d, e, a - 3, a - 2, a - 1);
				u(a[0]);
				u(a[1]);
				u(a[2])
			}

			function q(a) {
				e.push(E[3 * a]);
				e.push(E[3 * a + 1]);
				e.push(E[3 *
					a + 2])
			}

			function u(a) {
				f.push(a.x);
				f.push(a.y)
			}
			var E = [],
				x = void 0 !== b.curveSegments ? b.curveSegments : 12,
				w = void 0 !== b.steps ? b.steps : 1,
				ja = void 0 !== b.depth ? b.depth : 100,
				T = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
				Z = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
				C = void 0 !== b.bevelSize ? b.bevelSize : Z - 2,
				y = void 0 !== b.bevelOffset ? b.bevelOffset : 0,
				B = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
				A = b.extrudePath,
				F = void 0 !== b.UVGenerator ? b.UVGenerator : Ek;
			void 0 !== b.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
				ja = b.amount);
			var D = !1;
			if (A) {
				var G = A.getSpacedPoints(w);
				D = !0;
				T = !1;
				var H = A.computeFrenetFrames(w, !1);
				var K = new p;
				var L = new p;
				var N = new p
			}
			T || (y = C = Z = B = 0);
			var O;
			x = a.extractPoints(x);
			a = x.shape;
			var M = x.holes;
			if (!sb.isClockWise(a)) {
				a = a.reverse();
				var ia = 0;
				for (O = M.length; ia < O; ia++) {
					var P = M[ia];
					sb.isClockWise(P) && (M[ia] = P.reverse())
				}
			}
			var Y = sb.triangulateShape(a, M),
				V = a;
			ia = 0;
			for (O = M.length; ia < O; ia++) P = M[ia], a = a.concat(P);
			var aa, W = a.length,
				R, ea = Y.length;
			x = [];
			var J = 0;
			var ca = V.length;
			var S = ca - 1;
			for (aa = J + 1; J < ca; J++,
				S++, aa++) S === ca && (S = 0), aa === ca && (aa = 0), x[J] = g(V[J], V[S], V[aa]);
			A = [];
			var fa = x.concat();
			ia = 0;
			for (O = M.length; ia < O; ia++) {
				P = M[ia];
				var ba = [];
				J = 0;
				ca = P.length;
				S = ca - 1;
				for (aa = J + 1; J < ca; J++, S++, aa++) S === ca && (S = 0), aa === ca && (aa = 0), ba[J] = g(P[J], P[S], P[aa]);
				A.push(ba);
				fa = fa.concat(ba)
			}
			for (S = 0; S < B; S++) {
				ca = S / B;
				var da = Z * Math.cos(ca * Math.PI / 2);
				aa = C * Math.sin(ca * Math.PI / 2) + y;
				J = 0;
				for (ca = V.length; J < ca; J++) {
					var ha = c(V[J], x[J], aa);
					l(ha.x, ha.y, -da)
				}
				ia = 0;
				for (O = M.length; ia < O; ia++)
					for (P = M[ia], ba = A[ia], J = 0, ca = P.length; J < ca; J++) ha =
						c(P[J], ba[J], aa), l(ha.x, ha.y, -da)
			}
			aa = C + y;
			for (J = 0; J < W; J++) ha = T ? c(a[J], fa[J], aa) : a[J], D ? (L.copy(H.normals[0]).multiplyScalar(ha.x), K.copy(H.binormals[0]).multiplyScalar(ha.y), N.copy(G[0]).add(L).add(K), l(N.x, N.y, N.z)) : l(ha.x, ha.y, 0);
			for (ca = 1; ca <= w; ca++)
				for (J = 0; J < W; J++) ha = T ? c(a[J], fa[J], aa) : a[J], D ? (L.copy(H.normals[ca]).multiplyScalar(ha.x), K.copy(H.binormals[ca]).multiplyScalar(ha.y), N.copy(G[ca]).add(L).add(K), l(N.x, N.y, N.z)) : l(ha.x, ha.y, ja / w * ca);
			for (S = B - 1; 0 <= S; S--) {
				ca = S / B;
				da = Z * Math.cos(ca * Math.PI /
					2);
				aa = C * Math.sin(ca * Math.PI / 2) + y;
				J = 0;
				for (ca = V.length; J < ca; J++) ha = c(V[J], x[J], aa), l(ha.x, ha.y, ja + da);
				ia = 0;
				for (O = M.length; ia < O; ia++)
					for (P = M[ia], ba = A[ia], J = 0, ca = P.length; J < ca; J++) ha = c(P[J], ba[J], aa), D ? l(ha.x, ha.y + G[w - 1].y, G[w - 1].x + da) : l(ha.x, ha.y, ja + da)
			}(function() {
				var a = e.length / 3;
				if (T) {
					var b = 0 * W;
					for (J = 0; J < ea; J++) R = Y[J], k(R[2] + b, R[1] + b, R[0] + b);
					b = W * (w + 2 * B);
					for (J = 0; J < ea; J++) R = Y[J], k(R[0] + b, R[1] + b, R[2] + b)
				} else {
					for (J = 0; J < ea; J++) R = Y[J], k(R[2], R[1], R[0]);
					for (J = 0; J < ea; J++) R = Y[J], k(R[0] + W * w, R[1] + W * w, R[2] + W *
						w)
				}
				d.addGroup(a, e.length / 3 - a, 0)
			})();
			(function() {
				var a = e.length / 3,
					b = 0;
				h(V, b);
				b += V.length;
				ia = 0;
				for (O = M.length; ia < O; ia++) P = M[ia], h(P, b), b += P.length;
				d.addGroup(a, e.length / 3 - a, 1)
			})()
		}
		F.call(this);
		this.type = "ExtrudeBufferGeometry";
		this.parameters = {
			shapes: a,
			options: b
		};
		a = Array.isArray(a) ? a : [a];
		for (var d = this, e = [], f = [], g = 0, h = a.length; g < h; g++) c(a[g]);
		this.setAttribute("position", new B(e, 3));
		this.setAttribute("uv", new B(f, 2));
		this.computeVertexNormals()
	}

	function ci(a, b, c) {
		c.shapes = [];
		if (Array.isArray(a))
			for (var d =
					0, e = a.length; d < e; d++) c.shapes.push(a[d].uuid);
		else c.shapes.push(a.uuid);
		void 0 !== b.extrudePath && (c.options.extrudePath = b.extrudePath.toJSON());
		return c
	}

	function be(a, b) {
		L.call(this);
		this.type = "TextGeometry";
		this.parameters = {
			text: a,
			parameters: b
		};
		this.fromBufferGeometry(new Xc(a, b));
		this.mergeVertices()
	}

	function Xc(a, b) {
		b = b || {};
		var c = b.font;
		if (!c || !c.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new L;
		a = c.generateShapes(a, b.size);
		b.depth = void 0 !==
			b.height ? b.height : 50;
		void 0 === b.bevelThickness && (b.bevelThickness = 10);
		void 0 === b.bevelSize && (b.bevelSize = 8);
		void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
		hb.call(this, a, b);
		this.type = "TextBufferGeometry"
	}

	function ce(a, b, c, d, e, f, g) {
		L.call(this);
		this.type = "SphereGeometry";
		this.parameters = {
			radius: a,
			widthSegments: b,
			heightSegments: c,
			phiStart: d,
			phiLength: e,
			thetaStart: f,
			thetaLength: g
		};
		this.fromBufferGeometry(new ec(a, b, c, d, e, f, g));
		this.mergeVertices()
	}

	function ec(a, b, c, d, e, f, g) {
		F.call(this);
		this.type = "SphereBufferGeometry";
		this.parameters = {
			radius: a,
			widthSegments: b,
			heightSegments: c,
			phiStart: d,
			phiLength: e,
			thetaStart: f,
			thetaLength: g
		};
		a = a || 1;
		b = Math.max(3, Math.floor(b) || 8);
		c = Math.max(2, Math.floor(c) || 6);
		d = void 0 !== d ? d : 0;
		e = void 0 !== e ? e : 2 * Math.PI;
		f = void 0 !== f ? f : 0;
		g = void 0 !== g ? g : Math.PI;
		var h = Math.min(f + g, Math.PI),
			l, m, k = 0,
			n = [],
			t = new p,
			r = new p,
			q = [],
			u = [],
			E = [],
			v = [];
		for (m = 0; m <= c; m++) {
			var w = [],
				y = m / c,
				T = 0;
			0 == m && 0 == f ? T = .5 / b : m == c && h == Math.PI && (T = -.5 / b);
			for (l = 0; l <= b; l++) {
				var Z = l / b;
				t.x = -a * Math.cos(d + Z * e) * Math.sin(f + y * g);
				t.y = a * Math.cos(f +
					y * g);
				t.z = a * Math.sin(d + Z * e) * Math.sin(f + y * g);
				u.push(t.x, t.y, t.z);
				r.copy(t).normalize();
				E.push(r.x, r.y, r.z);
				v.push(Z + T, 1 - y);
				w.push(k++)
			}
			n.push(w)
		}
		for (m = 0; m < c; m++)
			for (l = 0; l < b; l++) a = n[m][l + 1], d = n[m][l], e = n[m + 1][l], g = n[m + 1][l + 1], (0 !== m || 0 < f) && q.push(a, d, g), (m !== c - 1 || h < Math.PI) && q.push(d, e, g);
		this.setIndex(q);
		this.setAttribute("position", new B(u, 3));
		this.setAttribute("normal", new B(E, 3));
		this.setAttribute("uv", new B(v, 2))
	}

	function de(a, b, c, d, e, f) {
		L.call(this);
		this.type = "RingGeometry";
		this.parameters = {
			innerRadius: a,
			outerRadius: b,
			thetaSegments: c,
			phiSegments: d,
			thetaStart: e,
			thetaLength: f
		};
		this.fromBufferGeometry(new Yc(a, b, c, d, e, f));
		this.mergeVertices()
	}

	function Yc(a, b, c, d, e, f) {
		F.call(this);
		this.type = "RingBufferGeometry";
		this.parameters = {
			innerRadius: a,
			outerRadius: b,
			thetaSegments: c,
			phiSegments: d,
			thetaStart: e,
			thetaLength: f
		};
		a = a || .5;
		b = b || 1;
		e = void 0 !== e ? e : 0;
		f = void 0 !== f ? f : 2 * Math.PI;
		c = void 0 !== c ? Math.max(3, c) : 8;
		d = void 0 !== d ? Math.max(1, d) : 1;
		var g = [],
			h = [],
			l = [],
			m = [],
			k = a,
			n = (b - a) / d,
			t = new p,
			r = new v,
			q, u;
		for (q = 0; q <= d; q++) {
			for (u =
				0; u <= c; u++) a = e + u / c * f, t.x = k * Math.cos(a), t.y = k * Math.sin(a), h.push(t.x, t.y, t.z), l.push(0, 0, 1), r.x = (t.x / b + 1) / 2, r.y = (t.y / b + 1) / 2, m.push(r.x, r.y);
			k += n
		}
		for (q = 0; q < d; q++)
			for (b = q * (c + 1), u = 0; u < c; u++) a = u + b, e = a + c + 1, f = a + c + 2, k = a + 1, g.push(a, e, k), g.push(e, f, k);
		this.setIndex(g);
		this.setAttribute("position", new B(h, 3));
		this.setAttribute("normal", new B(l, 3));
		this.setAttribute("uv", new B(m, 2))
	}

	function ee(a, b, c, d) {
		L.call(this);
		this.type = "LatheGeometry";
		this.parameters = {
			points: a,
			segments: b,
			phiStart: c,
			phiLength: d
		};
		this.fromBufferGeometry(new Zc(a,
			b, c, d));
		this.mergeVertices()
	}

	function Zc(a, b, c, d) {
		F.call(this);
		this.type = "LatheBufferGeometry";
		this.parameters = {
			points: a,
			segments: b,
			phiStart: c,
			phiLength: d
		};
		b = Math.floor(b) || 12;
		c = c || 0;
		d = d || 2 * Math.PI;
		d = O.clamp(d, 0, 2 * Math.PI);
		var e = [],
			f = [],
			g = [],
			h = 1 / b,
			l = new p,
			m = new v,
			k;
		for (k = 0; k <= b; k++) {
			var n = c + k * h * d;
			var t = Math.sin(n),
				r = Math.cos(n);
			for (n = 0; n <= a.length - 1; n++) l.x = a[n].x * t, l.y = a[n].y, l.z = a[n].x * r, f.push(l.x, l.y, l.z), m.x = k / b, m.y = n / (a.length - 1), g.push(m.x, m.y)
		}
		for (k = 0; k < b; k++)
			for (n = 0; n < a.length - 1; n++) c = n +
				k * a.length, h = c + a.length, l = c + a.length + 1, m = c + 1, e.push(c, h, m), e.push(h, l, m);
		this.setIndex(e);
		this.setAttribute("position", new B(f, 3));
		this.setAttribute("uv", new B(g, 2));
		this.computeVertexNormals();
		if (d === 2 * Math.PI)
			for (d = this.attributes.normal.array, e = new p, f = new p, g = new p, c = b * a.length * 3, n = k = 0; k < a.length; k++, n += 3) e.x = d[n + 0], e.y = d[n + 1], e.z = d[n + 2], f.x = d[c + n + 0], f.y = d[c + n + 1], f.z = d[c + n + 2], g.addVectors(e, f).normalize(), d[n + 0] = d[c + n + 0] = g.x, d[n + 1] = d[c + n + 1] = g.y, d[n + 2] = d[c + n + 2] = g.z
	}

	function fc(a, b) {
		L.call(this);
		this.type = "ShapeGeometry";
		"object" === typeof b && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), b = b.curveSegments);
		this.parameters = {
			shapes: a,
			curveSegments: b
		};
		this.fromBufferGeometry(new gc(a, b));
		this.mergeVertices()
	}

	function gc(a, b) {
		function c(a) {
			var c, h = e.length / 3;
			a = a.extractPoints(b);
			var m = a.shape,
				k = a.holes;
			!1 === sb.isClockWise(m) && (m = m.reverse());
			a = 0;
			for (c = k.length; a < c; a++) {
				var z = k[a];
				!0 === sb.isClockWise(z) && (k[a] = z.reverse())
			}
			var p = sb.triangulateShape(m, k);
			a = 0;
			for (c = k.length; a <
				c; a++) z = k[a], m = m.concat(z);
			a = 0;
			for (c = m.length; a < c; a++) z = m[a], e.push(z.x, z.y, 0), f.push(0, 0, 1), g.push(z.x, z.y);
			a = 0;
			for (c = p.length; a < c; a++) m = p[a], d.push(m[0] + h, m[1] + h, m[2] + h), l += 3
		}
		F.call(this);
		this.type = "ShapeBufferGeometry";
		this.parameters = {
			shapes: a,
			curveSegments: b
		};
		b = b || 12;
		var d = [],
			e = [],
			f = [],
			g = [],
			h = 0,
			l = 0;
		if (!1 === Array.isArray(a)) c(a);
		else
			for (var m = 0; m < a.length; m++) c(a[m]), this.addGroup(h, l, m), h += l, l = 0;
		this.setIndex(d);
		this.setAttribute("position", new B(e, 3));
		this.setAttribute("normal", new B(f, 3));
		this.setAttribute("uv", new B(g, 2))
	}

	function di(a, b) {
		b.shapes = [];
		if (Array.isArray(a))
			for (var c = 0, d = a.length; c < d; c++) b.shapes.push(a[c].uuid);
		else b.shapes.push(a.uuid);
		return b
	}

	function $c(a, b) {
		F.call(this);
		this.type = "EdgesGeometry";
		this.parameters = {
			thresholdAngle: b
		};
		var c = [];
		b = Math.cos(O.DEG2RAD * (void 0 !== b ? b : 1));
		var d = [0, 0],
			e = {},
			f = ["a", "b", "c"];
		if (a.isBufferGeometry) {
			var g = new L;
			g.fromBufferGeometry(a)
		} else g = a.clone();
		g.mergeVertices();
		g.computeFaceNormals();
		a = g.vertices;
		g = g.faces;
		for (var h = 0, l =
				g.length; h < l; h++)
			for (var m = g[h], k = 0; 3 > k; k++) {
				var n = m[f[k]];
				var t = m[f[(k + 1) % 3]];
				d[0] = Math.min(n, t);
				d[1] = Math.max(n, t);
				n = d[0] + "," + d[1];
				void 0 === e[n] ? e[n] = {
					index1: d[0],
					index2: d[1],
					face1: h,
					face2: void 0
				} : e[n].face2 = h
			}
		for (n in e)
			if (d = e[n], void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= b) f = a[d.index1], c.push(f.x, f.y, f.z), f = a[d.index2], c.push(f.x, f.y, f.z);
		this.setAttribute("position", new B(c, 3))
	}

	function hc(a, b, c, d, e, f, g, h) {
		L.call(this);
		this.type = "CylinderGeometry";
		this.parameters = {
			radiusTop: a,
			radiusBottom: b,
			height: c,
			radialSegments: d,
			heightSegments: e,
			openEnded: f,
			thetaStart: g,
			thetaLength: h
		};
		this.fromBufferGeometry(new tb(a, b, c, d, e, f, g, h));
		this.mergeVertices()
	}

	function tb(a, b, c, d, e, f, g, h) {
		function l(c) {
			var e, f = new v,
				l = new p,
				z = 0,
				u = !0 === c ? a : b,
				w = !0 === c ? 1 : -1;
			var y = q;
			for (e = 1; e <= d; e++) n.push(0, E * w, 0), t.push(0, w, 0), r.push(.5, .5), q++;
			var B = q;
			for (e = 0; e <= d; e++) {
				var A = e / d * h + g,
					D = Math.cos(A);
				A = Math.sin(A);
				l.x = u * A;
				l.y = E * w;
				l.z = u * D;
				n.push(l.x, l.y, l.z);
				t.push(0, w, 0);
				f.x = .5 * D + .5;
				f.y = .5 * A * w + .5;
				r.push(f.x, f.y);
				q++
			}
			for (e = 0; e < d; e++) f = y + e, l = B + e, !0 === c ? k.push(l, l + 1, f) : k.push(l + 1, l, f), z += 3;
			m.addGroup(x, z, !0 === c ? 1 : 2);
			x += z
		}
		F.call(this);
		this.type = "CylinderBufferGeometry";
		this.parameters = {
			radiusTop: a,
			radiusBottom: b,
			height: c,
			radialSegments: d,
			heightSegments: e,
			openEnded: f,
			thetaStart: g,
			thetaLength: h
		};
		var m = this;
		a = void 0 !== a ? a : 1;
		b = void 0 !== b ? b : 1;
		c = c || 1;
		d = Math.floor(d) || 8;
		e = Math.floor(e) || 1;
		f = void 0 !== f ? f : !1;
		g = void 0 !== g ? g : 0;
		h = void 0 !== h ? h : 2 * Math.PI;
		var k = [],
			n = [],
			t = [],
			r = [],
			q = 0,
			u = [],
			E = c / 2,
			x = 0;
		(function() {
			var f, l, z = new p,
				v = new p,
				C = 0,
				y = (b - a) / c;
			for (l = 0; l <= e; l++) {
				var B = [],
					A = l / e,
					D = A * (b - a) + a;
				for (f = 0; f <= d; f++) {
					var F = f / d,
						G = F * h + g,
						H = Math.sin(G);
					G = Math.cos(G);
					v.x = D * H;
					v.y = -A * c + E;
					v.z = D * G;
					n.push(v.x, v.y, v.z);
					z.set(H, y, G).normalize();
					t.push(z.x, z.y, z.z);
					r.push(F, 1 - A);
					B.push(q++)
				}
				u.push(B)
			}
			for (f = 0; f < d; f++)
				for (l = 0; l < e; l++) z = u[l + 1][f], v = u[l + 1][f + 1], y = u[l][f + 1], k.push(u[l][f], z, y), k.push(z, v, y), C += 6;
			m.addGroup(x, C, 0);
			x += C
		})();
		!1 === f && (0 < a && l(!0), 0 < b && l(!1));
		this.setIndex(k);
		this.setAttribute("position", new B(n, 3));
		this.setAttribute("normal",
			new B(t, 3));
		this.setAttribute("uv", new B(r, 2))
	}

	function fe(a, b, c, d, e, f, g) {
		hc.call(this, 0, a, b, c, d, e, f, g);
		this.type = "ConeGeometry";
		this.parameters = {
			radius: a,
			height: b,
			radialSegments: c,
			heightSegments: d,
			openEnded: e,
			thetaStart: f,
			thetaLength: g
		}
	}

	function ge(a, b, c, d, e, f, g) {
		tb.call(this, 0, a, b, c, d, e, f, g);
		this.type = "ConeBufferGeometry";
		this.parameters = {
			radius: a,
			height: b,
			radialSegments: c,
			heightSegments: d,
			openEnded: e,
			thetaStart: f,
			thetaLength: g
		}
	}

	function he(a, b, c, d) {
		L.call(this);
		this.type = "CircleGeometry";
		this.parameters = {
			radius: a,
			segments: b,
			thetaStart: c,
			thetaLength: d
		};
		this.fromBufferGeometry(new ad(a, b, c, d));
		this.mergeVertices()
	}

	function ad(a, b, c, d) {
		F.call(this);
		this.type = "CircleBufferGeometry";
		this.parameters = {
			radius: a,
			segments: b,
			thetaStart: c,
			thetaLength: d
		};
		a = a || 1;
		b = void 0 !== b ? Math.max(3, b) : 8;
		c = void 0 !== c ? c : 0;
		d = void 0 !== d ? d : 2 * Math.PI;
		var e = [],
			f = [],
			g = [],
			h = [],
			l, m = new p,
			k = new v;
		f.push(0, 0, 0);
		g.push(0, 0, 1);
		h.push(.5, .5);
		var n = 0;
		for (l = 3; n <= b; n++, l += 3) {
			var t = c + n / b * d;
			m.x = a * Math.cos(t);
			m.y = a * Math.sin(t);
			f.push(m.x, m.y,
				m.z);
			g.push(0, 0, 1);
			k.x = (f[l] / a + 1) / 2;
			k.y = (f[l + 1] / a + 1) / 2;
			h.push(k.x, k.y)
		}
		for (l = 1; l <= b; l++) e.push(l, l + 1, 0);
		this.setIndex(e);
		this.setAttribute("position", new B(f, 3));
		this.setAttribute("normal", new B(g, 3));
		this.setAttribute("uv", new B(h, 2))
	}

	function ic(a) {
		K.call(this);
		this.type = "ShadowMaterial";
		this.color = new D(0);
		this.transparent = !0;
		this.setValues(a)
	}

	function ub(a) {
		Ca.call(this, a);
		this.type = "RawShaderMaterial"
	}

	function ib(a) {
		K.call(this);
		this.defines = {
			STANDARD: ""
		};
		this.type = "MeshStandardMaterial";
		this.color =
			new D(16777215);
		this.roughness = 1;
		this.metalness = 0;
		this.lightMap = this.map = null;
		this.lightMapIntensity = 1;
		this.aoMap = null;
		this.aoMapIntensity = 1;
		this.emissive = new D(0);
		this.emissiveIntensity = 1;
		this.bumpMap = this.emissiveMap = null;
		this.bumpScale = 1;
		this.normalMap = null;
		this.normalMapType = 0;
		this.normalScale = new v(1, 1);
		this.displacementMap = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
		this.envMapIntensity = 1;
		this.refractionRatio = .98;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.wireframeLinejoin = this.wireframeLinecap = "round";
		this.vertexTangents = this.morphNormals = this.morphTargets = this.skinning = !1;
		this.setValues(a)
	}

	function jc(a) {
		ib.call(this);
		this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		};
		this.type = "MeshPhysicalMaterial";
		this.clearcoat = 0;
		this.clearcoatMap = null;
		this.clearcoatRoughness = 0;
		this.clearcoatRoughnessMap = null;
		this.clearcoatNormalScale = new v(1, 1);
		this.clearcoatNormalMap = null;
		this.reflectivity = .5;
		this.sheen = null;
		this.transparency = 0;
		this.setValues(a)
	}

	function Mb(a) {
		K.call(this);
		this.type = "MeshPhongMaterial";
		this.color = new D(16777215);
		this.specular = new D(1118481);
		this.shininess = 30;
		this.lightMap = this.map = null;
		this.lightMapIntensity = 1;
		this.aoMap = null;
		this.aoMapIntensity = 1;
		this.emissive = new D(0);
		this.emissiveIntensity = 1;
		this.bumpMap = this.emissiveMap = null;
		this.bumpScale = 1;
		this.normalMap = null;
		this.normalMapType = 0;
		this.normalScale = new v(1, 1);
		this.displacementMap = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.envMap = this.alphaMap = this.specularMap =
			null;
		this.combine = 0;
		this.reflectivity = 1;
		this.refractionRatio = .98;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.wireframeLinejoin = this.wireframeLinecap = "round";
		this.morphNormals = this.morphTargets = this.skinning = !1;
		this.setValues(a)
	}

	function kc(a) {
		K.call(this);
		this.defines = {
			TOON: ""
		};
		this.type = "MeshToonMaterial";
		this.color = new D(16777215);
		this.specular = new D(1118481);
		this.shininess = 30;
		this.lightMap = this.gradientMap = this.map = null;
		this.lightMapIntensity = 1;
		this.aoMap = null;
		this.aoMapIntensity = 1;
		this.emissive =
			new D(0);
		this.emissiveIntensity = 1;
		this.bumpMap = this.emissiveMap = null;
		this.bumpScale = 1;
		this.normalMap = null;
		this.normalMapType = 0;
		this.normalScale = new v(1, 1);
		this.displacementMap = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.alphaMap = this.specularMap = null;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.wireframeLinejoin = this.wireframeLinecap = "round";
		this.morphNormals = this.morphTargets = this.skinning = !1;
		this.setValues(a)
	}

	function lc(a) {
		K.call(this);
		this.type = "MeshNormalMaterial";
		this.bumpMap =
			null;
		this.bumpScale = 1;
		this.normalMap = null;
		this.normalMapType = 0;
		this.normalScale = new v(1, 1);
		this.displacementMap = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.morphNormals = this.morphTargets = this.skinning = this.fog = !1;
		this.setValues(a)
	}

	function mc(a) {
		K.call(this);
		this.type = "MeshLambertMaterial";
		this.color = new D(16777215);
		this.lightMap = this.map = null;
		this.lightMapIntensity = 1;
		this.aoMap = null;
		this.aoMapIntensity = 1;
		this.emissive = new D(0);
		this.emissiveIntensity =
			1;
		this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
		this.combine = 0;
		this.reflectivity = 1;
		this.refractionRatio = .98;
		this.wireframe = !1;
		this.wireframeLinewidth = 1;
		this.wireframeLinejoin = this.wireframeLinecap = "round";
		this.morphNormals = this.morphTargets = this.skinning = !1;
		this.setValues(a)
	}

	function nc(a) {
		K.call(this);
		this.defines = {
			MATCAP: ""
		};
		this.type = "MeshMatcapMaterial";
		this.color = new D(16777215);
		this.bumpMap = this.map = this.matcap = null;
		this.bumpScale = 1;
		this.normalMap = null;
		this.normalMapType =
			0;
		this.normalScale = new v(1, 1);
		this.displacementMap = null;
		this.displacementScale = 1;
		this.displacementBias = 0;
		this.alphaMap = null;
		this.morphNormals = this.morphTargets = this.skinning = !1;
		this.setValues(a)
	}

	function oc(a) {
		da.call(this);
		this.type = "LineDashedMaterial";
		this.scale = 1;
		this.dashSize = 3;
		this.gapSize = 1;
		this.setValues(a)
	}

	function Ma(a, b, c, d) {
		this.parameterPositions = a;
		this._cachedIndex = 0;
		this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
		this.sampleValues = b;
		this.valueSize = c
	}

	function Xe(a, b, c, d) {
		Ma.call(this,
			a, b, c, d);
		this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
	}

	function ie(a, b, c, d) {
		Ma.call(this, a, b, c, d)
	}

	function Ye(a, b, c, d) {
		Ma.call(this, a, b, c, d)
	}

	function ta(a, b, c, d) {
		if (void 0 === a) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (void 0 === b || 0 === b.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + a);
		this.name = a;
		this.times = ka.convertArray(b, this.TimeBufferType);
		this.values = ka.convertArray(c, this.ValueBufferType);
		this.setInterpolation(d || this.DefaultInterpolation)
	}

	function Ze(a, b, c) {
		ta.call(this, a, b, c)
	}

	function $e(a, b, c, d) {
		ta.call(this, a, b, c, d)
	}

	function bd(a, b, c, d) {
		ta.call(this, a, b, c, d)
	}

	function af(a, b, c, d) {
		Ma.call(this, a, b, c, d)
	}

	function je(a, b, c, d) {
		ta.call(this, a, b, c, d)
	}

	function bf(a, b, c, d) {
		ta.call(this, a, b, c, d)
	}

	function cd(a, b, c, d) {
		ta.call(this, a, b, c, d)
	}

	function Sa(a, b, c, d) {
		this.name = a;
		this.tracks = c;
		this.duration = void 0 !== b ? b : -1;
		this.blendMode = void 0 !== d ? d : 2500;
		this.uuid = O.generateUUID();
		0 > this.duration && this.resetDuration()
	}

	function Fk(a) {
		switch (a.toLowerCase()) {
			case "scalar":
			case "double":
			case "float":
			case "number":
			case "integer":
				return bd;
			case "vector":
			case "vector2":
			case "vector3":
			case "vector4":
				return cd;
			case "color":
				return $e;
			case "quaternion":
				return je;
			case "bool":
			case "boolean":
				return Ze;
			case "string":
				return bf
		}
		throw Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
	}

	function Gk(a) {
		if (void 0 === a.type) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
		var b = Fk(a.type);
		if (void 0 === a.times) {
			var c = [],
				d = [];
			ka.flattenJSON(a.keys, c, d, "value");
			a.times = c;
			a.values = d
		}
		return void 0 !== b.parse ? b.parse(a) : new b(a.name,
			a.times, a.values, a.interpolation)
	}

	function qg(a, b, c) {
		var d = this,
			e = !1,
			f = 0,
			g = 0,
			h = void 0,
			l = [];
		this.onStart = void 0;
		this.onLoad = a;
		this.onProgress = b;
		this.onError = c;
		this.itemStart = function(a) {
			g++;
			if (!1 === e && void 0 !== d.onStart) d.onStart(a, f, g);
			e = !0
		};
		this.itemEnd = function(a) {
			f++;
			if (void 0 !== d.onProgress) d.onProgress(a, f, g);
			if (f === g && (e = !1, void 0 !== d.onLoad)) d.onLoad()
		};
		this.itemError = function(a) {
			if (void 0 !== d.onError) d.onError(a)
		};
		this.resolveURL = function(a) {
			return h ? h(a) : a
		};
		this.setURLModifier = function(a) {
			h =
				a;
			return this
		};
		this.addHandler = function(a, b) {
			l.push(a, b);
			return this
		};
		this.removeHandler = function(a) {
			a = l.indexOf(a); - 1 !== a && l.splice(a, 2);
			return this
		};
		this.getHandler = function(a) {
			for (var b = 0, c = l.length; b < c; b += 2) {
				var d = l[b],
					e = l[b + 1];
				d.global && (d.lastIndex = 0);
				if (d.test(a)) return e
			}
			return null
		}
	}

	function V(a) {
		this.manager = void 0 !== a ? a : ei;
		this.crossOrigin = "anonymous";
		this.resourcePath = this.path = "";
		this.requestHeader = {}
	}

	function Ta(a) {
		V.call(this, a)
	}

	function rg(a) {
		V.call(this, a)
	}

	function sg(a) {
		V.call(this,
			a)
	}

	function cf(a) {
		V.call(this, a)
	}

	function dd(a) {
		V.call(this, a)
	}

	function df(a) {
		V.call(this, a)
	}

	function ef(a) {
		V.call(this, a)
	}

	function H() {
		this.type = "Curve";
		this.arcLengthDivisions = 200
	}

	function Na(a, b, c, d, e, f, g, h) {
		H.call(this);
		this.type = "EllipseCurve";
		this.aX = a || 0;
		this.aY = b || 0;
		this.xRadius = c || 1;
		this.yRadius = d || 1;
		this.aStartAngle = e || 0;
		this.aEndAngle = f || 2 * Math.PI;
		this.aClockwise = g || !1;
		this.aRotation = h || 0
	}

	function ed(a, b, c, d, e, f) {
		Na.call(this, a, b, c, c, d, e, f);
		this.type = "ArcCurve"
	}

	function tg() {
		var a = 0,
			b =
			0,
			c = 0,
			d = 0;
		return {
			initCatmullRom: function(e, f, g, h, l) {
				e = l * (g - e);
				h = l * (h - f);
				a = f;
				b = e;
				c = -3 * f + 3 * g - 2 * e - h;
				d = 2 * f - 2 * g + e + h
			},
			initNonuniformCatmullRom: function(e, f, g, h, l, m, k) {
				e = ((f - e) / l - (g - e) / (l + m) + (g - f) / m) * m;
				h = ((g - f) / m - (h - f) / (m + k) + (h - g) / k) * m;
				a = f;
				b = e;
				c = -3 * f + 3 * g - 2 * e - h;
				d = 2 * f - 2 * g + e + h
			},
			calc: function(e) {
				var f = e * e;
				return a + b * e + c * f + d * f * e
			}
		}
	}

	function qa(a, b, c, d) {
		H.call(this);
		this.type = "CatmullRomCurve3";
		this.points = a || [];
		this.closed = b || !1;
		this.curveType = c || "centripetal";
		this.tension = d || .5
	}

	function fi(a, b, c, d, e) {
		b = .5 * (d -
			b);
		e = .5 * (e - c);
		var f = a * a;
		return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c
	}

	function ke(a, b, c, d) {
		var e = 1 - a;
		return e * e * b + 2 * (1 - a) * a * c + a * a * d
	}

	function le(a, b, c, d, e) {
		var f = 1 - a,
			g = 1 - a;
		return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
	}

	function Ya(a, b, c, d) {
		H.call(this);
		this.type = "CubicBezierCurve";
		this.v0 = a || new v;
		this.v1 = b || new v;
		this.v2 = c || new v;
		this.v3 = d || new v
	}

	function jb(a, b, c, d) {
		H.call(this);
		this.type = "CubicBezierCurve3";
		this.v0 = a || new p;
		this.v1 = b || new p;
		this.v2 = c || new p;
		this.v3 = d || new p
	}

	function Ia(a, b) {
		H.call(this);
		this.type = "LineCurve";
		this.v1 = a || new v;
		this.v2 = b || new v
	}

	function Za(a, b) {
		H.call(this);
		this.type = "LineCurve3";
		this.v1 = a || new p;
		this.v2 = b || new p
	}

	function $a(a, b, c) {
		H.call(this);
		this.type = "QuadraticBezierCurve";
		this.v0 = a || new v;
		this.v1 = b || new v;
		this.v2 = c || new v
	}

	function kb(a, b, c) {
		H.call(this);
		this.type = "QuadraticBezierCurve3";
		this.v0 = a || new p;
		this.v1 = b || new p;
		this.v2 = c || new p
	}

	function ab(a) {
		H.call(this);
		this.type = "SplineCurve";
		this.points = a || []
	}

	function vb() {
		H.call(this);
		this.type = "CurvePath";
		this.curves = [];
		this.autoClose = !1
	}

	function bb(a) {
		vb.call(this);
		this.type = "Path";
		this.currentPoint = new v;
		a && this.setFromPoints(a)
	}

	function Nb(a) {
		bb.call(this, a);
		this.uuid = O.generateUUID();
		this.type = "Shape";
		this.holes = []
	}

	function S(a, b) {
		y.call(this);
		this.type = "Light";
		this.color = new D(a);
		this.intensity = void 0 !== b ? b : 1;
		this.receiveShadow = void 0
	}

	function ff(a, b, c) {
		S.call(this, a, c);
		this.type = "HemisphereLight";
		this.castShadow = void 0;
		this.position.copy(y.DefaultUp);
		this.updateMatrix();
		this.groundColor = new D(b)
	}

	function lb(a) {
		this.camera =
			a;
		this.bias = 0;
		this.radius = 1;
		this.mapSize = new v(512, 512);
		this.mapPass = this.map = null;
		this.matrix = new N;
		this._frustum = new Gc;
		this._frameExtents = new v(1, 1);
		this._viewportCount = 1;
		this._viewports = [new R(0, 0, 1, 1)]
	}

	function gf() {
		lb.call(this, new P(50, 1, .5, 500))
	}

	function hf(a, b, c, d, e, f) {
		S.call(this, a, b);
		this.type = "SpotLight";
		this.position.copy(y.DefaultUp);
		this.updateMatrix();
		this.target = new y;
		Object.defineProperty(this, "power", {
			get: function() {
				return this.intensity * Math.PI
			},
			set: function(a) {
				this.intensity =
					a / Math.PI
			}
		});
		this.distance = void 0 !== c ? c : 0;
		this.angle = void 0 !== d ? d : Math.PI / 3;
		this.penumbra = void 0 !== e ? e : 0;
		this.decay = void 0 !== f ? f : 1;
		this.shadow = new gf
	}

	function ug() {
		lb.call(this, new P(90, 1, .5, 500));
		this._frameExtents = new v(4, 2);
		this._viewportCount = 6;
		this._viewports = [new R(2, 1, 1, 1), new R(0, 1, 1, 1), new R(3, 1, 1, 1), new R(1, 1, 1, 1), new R(3, 0, 1, 1), new R(1, 0, 1, 1)];
		this._cubeDirections = [new p(1, 0, 0), new p(-1, 0, 0), new p(0, 0, 1), new p(0, 0, -1), new p(0, 1, 0), new p(0, -1, 0)];
		this._cubeUps = [new p(0, 1, 0), new p(0, 1, 0),
			new p(0, 1, 0), new p(0, 1, 0), new p(0, 0, 1), new p(0, 0, -1)
		]
	}

	function jf(a, b, c, d) {
		S.call(this, a, b);
		this.type = "PointLight";
		Object.defineProperty(this, "power", {
			get: function() {
				return 4 * this.intensity * Math.PI
			},
			set: function(a) {
				this.intensity = a / (4 * Math.PI)
			}
		});
		this.distance = void 0 !== c ? c : 0;
		this.decay = void 0 !== d ? d : 1;
		this.shadow = new ug
	}

	function fd(a, b, c, d, e, f) {
		fb.call(this);
		this.type = "OrthographicCamera";
		this.zoom = 1;
		this.view = null;
		this.left = void 0 !== a ? a : -1;
		this.right = void 0 !== b ? b : 1;
		this.top = void 0 !== c ? c : 1;
		this.bottom =
			void 0 !== d ? d : -1;
		this.near = void 0 !== e ? e : .1;
		this.far = void 0 !== f ? f : 2E3;
		this.updateProjectionMatrix()
	}

	function kf() {
		lb.call(this, new fd(-5, 5, 5, -5, .5, 500))
	}

	function lf(a, b) {
		S.call(this, a, b);
		this.type = "DirectionalLight";
		this.position.copy(y.DefaultUp);
		this.updateMatrix();
		this.target = new y;
		this.shadow = new kf
	}

	function mf(a, b) {
		S.call(this, a, b);
		this.type = "AmbientLight";
		this.castShadow = void 0
	}

	function nf(a, b, c, d) {
		S.call(this, a, b);
		this.type = "RectAreaLight";
		this.width = void 0 !== c ? c : 10;
		this.height = void 0 !== d ? d :
			10
	}

	function of() {
		this.coefficients = [];
		for (var a = 0; 9 > a; a++) this.coefficients.push(new p)
	}

	function Ua(a, b) {
		S.call(this, void 0, b);
		this.type = "LightProbe";
		this.sh = void 0 !== a ? a : new of
	}

	function pf(a) {
		V.call(this, a);
		this.textures = {}
	}

	function me() {
		F.call(this);
		this.type = "InstancedBufferGeometry";
		this.instanceCount = Infinity
	}

	function qf(a, b, c, d) {
		"number" === typeof c && (d = c, c = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
		G.call(this, a, b, c);
		this.meshPerAttribute =
			d || 1
	}

	function rf(a) {
		V.call(this, a)
	}

	function sf(a) {
		V.call(this, a)
	}

	function vg(a) {
		"undefined" === typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
		"undefined" === typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
		V.call(this, a);
		this.options = void 0
	}

	function wg() {
		this.type = "ShapePath";
		this.color = new D;
		this.subPaths = [];
		this.currentPath = null
	}

	function xg(a) {
		this.type = "Font";
		this.data = a
	}

	function yg(a) {
		V.call(this, a)
	}

	function tf(a) {
		V.call(this,
			a)
	}

	function zg(a, b, c) {
		Ua.call(this, void 0, c);
		a = (new D).set(a);
		c = (new D).set(b);
		b = new p(a.r, a.g, a.b);
		a = new p(c.r, c.g, c.b);
		c = Math.sqrt(Math.PI);
		var d = c * Math.sqrt(.75);
		this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);
		this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d)
	}

	function Ag(a, b) {
		Ua.call(this, void 0, b);
		a = (new D).set(a);
		this.sh.coefficients[0].set(a.r, a.g, a.b).multiplyScalar(2 * Math.sqrt(Math.PI))
	}

	function gi() {
		this.type = "StereoCamera";
		this.aspect = 1;
		this.eyeSep = .064;
		this.cameraL = new P;
		this.cameraL.layers.enable(1);
		this.cameraL.matrixAutoUpdate = !1;
		this.cameraR = new P;
		this.cameraR.layers.enable(2);
		this.cameraR.matrixAutoUpdate = !1;
		this._cache = {
			focus: null,
			fov: null,
			aspect: null,
			near: null,
			far: null,
			zoom: null,
			eyeSep: null
		}
	}

	function Bg(a) {
		this.autoStart = void 0 !== a ? a : !0;
		this.elapsedTime = this.oldTime = this.startTime = 0;
		this.running = !1
	}

	function Cg() {
		y.call(this);
		this.type = "AudioListener";
		this.context = Dg.getContext();
		this.gain = this.context.createGain();
		this.gain.connect(this.context.destination);
		this.filter = null;
		this.timeDelta = 0;
		this._clock = new Bg
	}

	function gd(a) {
		y.call(this);
		this.type = "Audio";
		this.listener = a;
		this.context = a.context;
		this.gain = this.context.createGain();
		this.gain.connect(a.getInput());
		this.autoplay = !1;
		this.buffer = null;
		this.detune = 0;
		this.loop = !1;
		this.offset = this.loopEnd = this.loopStart = 0;
		this.duration = void 0;
		this.playbackRate = 1;
		this.isPlaying = !1;
		this.hasPlaybackControl = !0;
		this.sourceType = "empty";
		this._progress = this._startedAt = 0;
		this.filters = []
	}

	function Eg(a) {
		gd.call(this, a);
		this.panner =
			this.context.createPanner();
		this.panner.panningModel = "HRTF";
		this.panner.connect(this.gain)
	}

	function Fg(a, b) {
		this.analyser = a.context.createAnalyser();
		this.analyser.fftSize = void 0 !== b ? b : 2048;
		this.data = new Uint8Array(this.analyser.frequencyBinCount);
		a.getOutput().connect(this.analyser)
	}

	function Gg(a, b, c) {
		this.binding = a;
		this.valueSize = c;
		switch (b) {
			case "quaternion":
				a = this._slerp;
				b = this._slerpAdditive;
				var d = this._setAdditiveIdentityQuaternion;
				this.buffer = new Float64Array(6 * c);
				this._workIndex = 5;
				break;
			case "string":
			case "bool":
				b =
					a = this._select;
				d = this._setAdditiveIdentityOther;
				this.buffer = Array(5 * c);
				break;
			default:
				a = this._lerp, b = this._lerpAdditive, d = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * c)
		}
		this._mixBufferRegion = a;
		this._mixBufferRegionAdditive = b;
		this._setIdentity = d;
		this._origIndex = 3;
		this._addIndex = 4;
		this.referenceCount = this.useCount = this.cumulativeWeightAdditive = this.cumulativeWeight = 0
	}

	function hi(a, b, c) {
		c = c || Aa.parseTrackName(b);
		this._targetGroup = a;
		this._bindings = a.subscribe_(b, c)
	}

	function Aa(a, b,
		c) {
		this.path = b;
		this.parsedPath = c || Aa.parseTrackName(b);
		this.node = Aa.findNode(a, this.parsedPath.nodeName) || a;
		this.rootNode = a
	}

	function ii() {
		this.uuid = O.generateUUID();
		this._objects = Array.prototype.slice.call(arguments);
		this.nCachedObjects_ = 0;
		var a = {};
		this._indicesByUUID = a;
		for (var b = 0, c = arguments.length; b !== c; ++b) a[arguments[b].uuid] = b;
		this._paths = [];
		this._parsedPaths = [];
		this._bindings = [];
		this._bindingsIndicesByPath = {};
		var d = this;
		this.stats = {
			objects: {
				get total() {
					return d._objects.length
				},
				get inUse() {
					return this.total -
						d.nCachedObjects_
				}
			},
			get bindingsPerObject() {
				return d._bindings.length
			}
		}
	}

	function ji(a, b, c, d) {
		this._mixer = a;
		this._clip = b;
		this._localRoot = c || null;
		this.blendMode = d || b.blendMode;
		a = b.tracks;
		b = a.length;
		c = Array(b);
		d = {
			endingStart: 2400,
			endingEnd: 2400
		};
		for (var e = 0; e !== b; ++e) {
			var f = a[e].createInterpolant(null);
			c[e] = f;
			f.settings = d
		}
		this._interpolantSettings = d;
		this._interpolants = c;
		this._propertyBindings = Array(b);
		this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
		this.loop =
			2201;
		this._loopCount = -1;
		this._startTime = null;
		this.time = 0;
		this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
		this.repetitions = Infinity;
		this.paused = !1;
		this.enabled = !0;
		this.clampWhenFinished = !1;
		this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
	}

	function Hg(a) {
		this._root = a;
		this._initMemoryManager();
		this.time = this._accuIndex = 0;
		this.timeScale = 1
	}

	function uf(a, b) {
		"string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."), a = b);
		this.value = a
	}

	function Ig(a, b, c) {
		rb.call(this,
			a, b);
		this.meshPerAttribute = c || 1
	}

	function Jg(a, b, c, d) {
		this.ray = new Wb(a, b);
		this.near = c || 0;
		this.far = d || Infinity;
		this.camera = null;
		this.layers = new De;
		this.params = {
			Mesh: {},
			Line: {
				threshold: 1
			},
			LOD: {},
			Points: {
				threshold: 1
			},
			Sprite: {}
		};
		Object.defineProperties(this.params, {
			PointCloud: {
				get: function() {
					console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
					return this.Points
				}
			}
		})
	}

	function ki(a, b) {
		return a.distance - b.distance
	}

	function Kg(a, b, c, d) {
		a.layers.test(b.layers) && a.raycast(b,
			c);
		if (!0 === d) {
			a = a.children;
			d = 0;
			for (var e = a.length; d < e; d++) Kg(a[d], b, c, !0)
		}
	}

	function li(a, b, c) {
		this.radius = void 0 !== a ? a : 1;
		this.phi = void 0 !== b ? b : 0;
		this.theta = void 0 !== c ? c : 0;
		return this
	}

	function mi(a, b, c) {
		this.radius = void 0 !== a ? a : 1;
		this.theta = void 0 !== b ? b : 0;
		this.y = void 0 !== c ? c : 0;
		return this
	}

	function Lg(a, b) {
		this.min = void 0 !== a ? a : new v(Infinity, Infinity);
		this.max = void 0 !== b ? b : new v(-Infinity, -Infinity)
	}

	function Mg(a, b) {
		this.start = void 0 !== a ? a : new p;
		this.end = void 0 !== b ? b : new p
	}

	function ne(a) {
		y.call(this);
		this.material = a;
		this.render = function() {};
		this.hasUvs = this.hasColors = this.hasNormals = this.hasPositions = !1;
		this.uvArray = this.colorArray = this.normalArray = this.positionArray = null;
		this.count = 0
	}

	function hd(a, b) {
		y.call(this);
		this.light = a;
		this.light.updateMatrixWorld();
		this.matrix = a.matrixWorld;
		this.matrixAutoUpdate = !1;
		this.color = b;
		a = new F;
		b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
		for (var c = 0, d = 1; 32 > c; c++, d++) {
			var e = c / 32 * Math.PI * 2,
				f = d / 32 * Math.PI * 2;
			b.push(Math.cos(e), Math.sin(e), 1,
				Math.cos(f), Math.sin(f), 1)
		}
		a.setAttribute("position", new B(b, 3));
		b = new da({
			fog: !1,
			toneMapped: !1
		});
		this.cone = new ma(a, b);
		this.add(this.cone);
		this.update()
	}

	function ni(a) {
		var b = [];
		a && a.isBone && b.push(a);
		for (var c = 0; c < a.children.length; c++) b.push.apply(b, ni(a.children[c]));
		return b
	}

	function pc(a) {
		for (var b = ni(a), c = new F, d = [], e = [], f = new D(0, 0, 1), g = new D(0, 1, 0), h = 0; h < b.length; h++) {
			var l = b[h];
			l.parent && l.parent.isBone && (d.push(0, 0, 0), d.push(0, 0, 0), e.push(f.r, f.g, f.b), e.push(g.r, g.g, g.b))
		}
		c.setAttribute("position",
			new B(d, 3));
		c.setAttribute("color", new B(e, 3));
		d = new da({
			vertexColors: !0,
			depthTest: !1,
			depthWrite: !1,
			toneMapped: !1,
			transparent: !0
		});
		ma.call(this, c, d);
		this.type = "SkeletonHelper";
		this.root = a;
		this.bones = b;
		this.matrix = a.matrixWorld;
		this.matrixAutoUpdate = !1
	}

	function id(a, b, c) {
		this.light = a;
		this.light.updateMatrixWorld();
		this.color = c;
		a = new ec(b, 4, 2);
		b = new Pa({
			wireframe: !0,
			fog: !1,
			toneMapped: !1
		});
		ea.call(this, a, b);
		this.type = "PointLightHelper";
		this.matrix = this.light.matrixWorld;
		this.matrixAutoUpdate = !1;
		this.update()
	}

	function jd(a, b, c) {
		y.call(this);
		this.light = a;
		this.light.updateMatrixWorld();
		this.matrix = a.matrixWorld;
		this.matrixAutoUpdate = !1;
		this.color = c;
		a = new bc(b);
		a.rotateY(.5 * Math.PI);
		this.material = new Pa({
			wireframe: !0,
			fog: !1,
			toneMapped: !1
		});
		void 0 === this.color && (this.material.vertexColors = !0);
		b = a.getAttribute("position");
		b = new Float32Array(3 * b.count);
		a.setAttribute("color", new G(b, 3));
		this.add(new ea(a, this.material));
		this.update()
	}

	function vf(a, b, c, d) {
		a = a || 10;
		b = b || 10;
		c = new D(void 0 !== c ? c : 4473924);
		d = new D(void 0 !==
			d ? d : 8947848);
		var e = b / 2,
			f = a / b,
			g = a / 2;
		a = [];
		for (var h = [], l = 0, m = 0, k = -g; l <= b; l++, k += f) {
			a.push(-g, 0, k, g, 0, k);
			a.push(k, 0, -g, k, 0, g);
			var n = l === e ? c : d;
			n.toArray(h, m);
			m += 3;
			n.toArray(h, m);
			m += 3;
			n.toArray(h, m);
			m += 3;
			n.toArray(h, m);
			m += 3
		}
		b = new F;
		b.setAttribute("position", new B(a, 3));
		b.setAttribute("color", new B(h, 3));
		c = new da({
			vertexColors: !0,
			toneMapped: !1
		});
		ma.call(this, b, c);
		this.type = "GridHelper"
	}

	function wf(a, b, c, d, e, f) {
		a = a || 10;
		b = b || 16;
		c = c || 8;
		d = d || 64;
		e = new D(void 0 !== e ? e : 4473924);
		f = new D(void 0 !== f ? f : 8947848);
		var g = [],
			h = [],
			l;
		for (l = 0; l <= b; l++) {
			var m = l / b * 2 * Math.PI;
			var k = Math.sin(m) * a;
			m = Math.cos(m) * a;
			g.push(0, 0, 0);
			g.push(k, 0, m);
			var n = l & 1 ? e : f;
			h.push(n.r, n.g, n.b);
			h.push(n.r, n.g, n.b)
		}
		for (l = 0; l <= c; l++) {
			n = l & 1 ? e : f;
			var t = a - a / c * l;
			for (b = 0; b < d; b++) m = b / d * 2 * Math.PI, k = Math.sin(m) * t, m = Math.cos(m) * t, g.push(k, 0, m), h.push(n.r, n.g, n.b), m = (b + 1) / d * 2 * Math.PI, k = Math.sin(m) * t, m = Math.cos(m) * t, g.push(k, 0, m), h.push(n.r, n.g, n.b)
		}
		a = new F;
		a.setAttribute("position", new B(g, 3));
		a.setAttribute("color", new B(h, 3));
		g = new da({
			vertexColors: !0,
			toneMapped: !1
		});
		ma.call(this, a, g);
		this.type = "PolarGridHelper"
	}

	function kd(a, b, c) {
		y.call(this);
		this.light = a;
		this.light.updateMatrixWorld();
		this.matrix = a.matrixWorld;
		this.matrixAutoUpdate = !1;
		this.color = c;
		void 0 === b && (b = 1);
		a = new F;
		a.setAttribute("position", new B([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3));
		b = new da({
			fog: !1,
			toneMapped: !1
		});
		this.lightPlane = new La(a, b);
		this.add(this.lightPlane);
		a = new F;
		a.setAttribute("position", new B([0, 0, 0, 0, 0, 1], 3));
		this.targetLine = new La(a, b);
		this.add(this.targetLine);
		this.update()
	}

	function oe(a) {
		function b(a,
			b, d) {
			c(a, d);
			c(b, d)
		}

		function c(a, b) {
			f.push(0, 0, 0);
			g.push(b.r, b.g, b.b);
			void 0 === h[a] && (h[a] = []);
			h[a].push(f.length / 3 - 1)
		}
		var d = new F,
			e = new da({
				color: 16777215,
				vertexColors: !0,
				toneMapped: !1
			}),
			f = [],
			g = [],
			h = {},
			l = new D(16755200),
			m = new D(16711680),
			k = new D(43775),
			n = new D(16777215),
			t = new D(3355443);
		b("n1", "n2", l);
		b("n2", "n4", l);
		b("n4", "n3", l);
		b("n3", "n1", l);
		b("f1", "f2", l);
		b("f2", "f4", l);
		b("f4", "f3", l);
		b("f3", "f1", l);
		b("n1", "f1", l);
		b("n2", "f2", l);
		b("n3", "f3", l);
		b("n4", "f4", l);
		b("p", "n1", m);
		b("p", "n2", m);
		b("p",
			"n3", m);
		b("p", "n4", m);
		b("u1", "u2", k);
		b("u2", "u3", k);
		b("u3", "u1", k);
		b("c", "t", n);
		b("p", "c", t);
		b("cn1", "cn2", t);
		b("cn3", "cn4", t);
		b("cf1", "cf2", t);
		b("cf3", "cf4", t);
		d.setAttribute("position", new B(f, 3));
		d.setAttribute("color", new B(g, 3));
		ma.call(this, d, e);
		this.type = "CameraHelper";
		this.camera = a;
		this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
		this.matrix = a.matrixWorld;
		this.matrixAutoUpdate = !1;
		this.pointMap = h;
		this.update()
	}

	function fa(a, b, c, d, e, f, g) {
		xf.set(e, f, g).unproject(d);
		a =
			b[a];
		if (void 0 !== a)
			for (c = c.getAttribute("position"), b = 0, d = a.length; b < d; b++) c.setXYZ(a[b], xf.x, xf.y, xf.z)
	}

	function wb(a, b) {
		this.object = a;
		void 0 === b && (b = 16776960);
		a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
		var c = new Float32Array(24),
			d = new F;
		d.setIndex(new G(a, 1));
		d.setAttribute("position", new G(c, 3));
		ma.call(this, d, new da({
			color: b,
			toneMapped: !1
		}));
		this.type = "BoxHelper";
		this.matrixAutoUpdate = !1;
		this.update()
	}

	function pe(a, b) {
		this.type = "Box3Helper";
		this.box = a;
		b = b || 16776960;
		a =
			new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
		var c = new F;
		c.setIndex(new G(a, 1));
		c.setAttribute("position", new B([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3));
		ma.call(this, c, new da({
			color: b,
			toneMapped: !1
		}));
		this.type = "Box3Helper";
		this.geometry.computeBoundingSphere()
	}

	function qe(a, b, c) {
		this.plane = a;
		this.size = void 0 === b ? 1 : b;
		a = void 0 !== c ? c : 16776960;
		b = new F;
		b.setAttribute("position", new B([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3));
		b.computeBoundingSphere();
		La.call(this, b, new da({
			color: a,
			toneMapped: !1
		}));
		this.type = "PlaneHelper";
		b = new F;
		b.setAttribute("position", new B([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3));
		b.computeBoundingSphere();
		this.add(new ea(b, new Pa({
			color: a,
			opacity: .2,
			transparent: !0,
			depthWrite: !1,
			toneMapped: !1
		})))
	}

	function xb(a, b, c, d, e, f) {
		y.call(this);
		this.type = "ArrowHelper";
		void 0 === a && (a = new p(0, 0, 1));
		void 0 === b && (b = new p(0, 0, 0));
		void 0 === c && (c = 1);
		void 0 === d && (d = 16776960);
		void 0 === e && (e = .2 * c);
		void 0 === f && (f =
			.2 * e);
		void 0 === yf && (yf = new F, yf.setAttribute("position", new B([0, 0, 0, 0, 1, 0], 3)), Ng = new tb(0, .5, 1, 5, 1), Ng.translate(0, -.5, 0));
		this.position.copy(b);
		this.line = new La(yf, new da({
			color: d,
			toneMapped: !1
		}));
		this.line.matrixAutoUpdate = !1;
		this.add(this.line);
		this.cone = new ea(Ng, new Pa({
			color: d,
			toneMapped: !1
		}));
		this.cone.matrixAutoUpdate = !1;
		this.add(this.cone);
		this.setDirection(a);
		this.setLength(c, e, f)
	}

	function re(a) {
		a = a || 1;
		var b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a];
		a = new F;
		a.setAttribute("position", new B(b,
			3));
		a.setAttribute("color", new B([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
		b = new da({
			vertexColors: !0,
			toneMapped: !1
		});
		ma.call(this, a, b);
		this.type = "AxesHelper"
	}

	function Og(a) {
		this._renderer = a;
		this._pingPongRenderTarget = null;
		a = new Float32Array(20);
		var b = new p(0, 1, 0);
		a = new ub({
			defines: {
				n: 20
			},
			uniforms: {
				envMap: {
					value: null
				},
				samples: {
					value: 1
				},
				weights: {
					value: a
				},
				latitudinal: {
					value: !1
				},
				dTheta: {
					value: 0
				},
				mipInt: {
					value: 0
				},
				poleAxis: {
					value: b
				},
				inputEncoding: {
					value: mb[3E3]
				},
				outputEncoding: {
					value: mb[3E3]
				}
			},
			vertexShader: Pg(),
			fragmentShader: "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n" + Qg() + "\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvec3 getSample(float theta, vec3 axis) {\n\tfloat cosTheta = cos(theta);\n\t// Rodrigues' axis-angle rotation\n\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\treturn bilinearCubeUV(envMap, sampleDirection, mipInt);\n}\n\nvoid main() {\n\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\tif (all(equal(axis, vec3(0.0))))\n\t\taxis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);\n\taxis = normalize(axis);\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb += weights[0] * getSample(0.0, axis);\n\tfor (int i = 1; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfloat theta = dTheta * float(i);\n\t\tgl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);\n\t\tgl_FragColor.rgb += weights[i] * getSample(theta, axis);\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		});
		a.type = "SphericalGaussianBlur";
		this._blurMaterial = a;
		this._cubemapShader = this._equirectShader = null;
		this._compileMaterial(this._blurMaterial)
	}

	function oi(a) {
		a = new Ba(3 * nb, 3 * nb, a);
		a.texture.mapping = 306;
		a.texture.name = "PMREM.cubeUv";
		a.scissorTest = !0;
		return a
	}

	function Rg(a, b, c, d, e) {
		a.viewport.set(b, c, d, e);
		a.scissor.set(b, c, d, e)
	}

	function pi() {
		var a = new v(1, 1);
		a = new ub({
			uniforms: {
				envMap: {
					value: null
				},
				texelSize: {
					value: a
				},
				inputEncoding: {
					value: mb[3E3]
				},
				outputEncoding: {
					value: mb[3E3]
				}
			},
			vertexShader: Pg(),
			fragmentShader: "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n" + Qg() + "\n\n#include <common>\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv = equirectUv( outputDirection );\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		});
		a.type = "EquirectangularToCubeUV";
		return a
	}

	function qi() {
		var a = new ub({
			uniforms: {
				envMap: {
					value: null
				},
				inputEncoding: {
					value: mb[3E3]
				},
				outputEncoding: {
					value: mb[3E3]
				}
			},
			vertexShader: Pg(),
			fragmentShader: "\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n" + Qg() + "\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		});
		a.type = "CubemapToCubeUV";
		return a
	}

	function Pg() {
		return "\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\n\n// RH coordinate system; PMREM face-indexing convention\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\t} else if (face == 2.0) {\n\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\t} else if (face == 5.0) {\n\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\t}\n\treturn direction;\n}\n\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"
	}

	function Qg() {
		return "\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"
	}

	function ri(a) {
		console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
		qa.call(this, a);
		this.type = "catmullrom";
		this.closed = !0
	}

	function si(a) {
		console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
		qa.call(this, a);
		this.type = "catmullrom"
	}

	function Sg(a) {
		console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
		qa.call(this, a);
		this.type = "catmullrom"
	}
	void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2,
		-52));
	void 0 === Number.isInteger && (Number.isInteger = function(a) {
		return "number" === typeof a && isFinite(a) && Math.floor(a) === a
	});
	void 0 === Math.sign && (Math.sign = function(a) {
		return 0 > a ? -1 : 0 < a ? 1 : +a
	});
	!1 === "name" in Function.prototype && Object.defineProperty(Function.prototype, "name", {
		get: function() {
			return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
		}
	});
	void 0 === Object.assign && (Object.assign = function(a) {
		if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
		for (var b =
				Object(a), c = 1; c < arguments.length; c++) {
			var d = arguments[c];
			if (void 0 !== d && null !== d)
				for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e])
		}
		return b
	});
	Object.assign(ua.prototype, {
		addEventListener: function(a, b) {
			void 0 === this._listeners && (this._listeners = {});
			var c = this._listeners;
			void 0 === c[a] && (c[a] = []); - 1 === c[a].indexOf(b) && c[a].push(b)
		},
		hasEventListener: function(a, b) {
			if (void 0 === this._listeners) return !1;
			var c = this._listeners;
			return void 0 !== c[a] && -1 !== c[a].indexOf(b)
		},
		removeEventListener: function(a,
			b) {
			void 0 !== this._listeners && (a = this._listeners[a], void 0 !== a && (b = a.indexOf(b), -1 !== b && a.splice(b, 1)))
		},
		dispatchEvent: function(a) {
			if (void 0 !== this._listeners) {
				var b = this._listeners[a.type];
				if (void 0 !== b) {
					a.target = this;
					b = b.slice(0);
					for (var c = 0, d = b.length; c < d; c++) b[c].call(this, a)
				}
			}
		}
	});
	for (var za = [], se = 0; 256 > se; se++) za[se] = (16 > se ? "0" : "") + se.toString(16);
	var O = {
		DEG2RAD: Math.PI / 180,
		RAD2DEG: 180 / Math.PI,
		generateUUID: function() {
			var a = 4294967295 * Math.random() | 0,
				b = 4294967295 * Math.random() | 0,
				c = 4294967295 * Math.random() |
				0,
				d = 4294967295 * Math.random() | 0;
			return (za[a & 255] + za[a >> 8 & 255] + za[a >> 16 & 255] + za[a >> 24 & 255] + "-" + za[b & 255] + za[b >> 8 & 255] + "-" + za[b >> 16 & 15 | 64] + za[b >> 24 & 255] + "-" + za[c & 63 | 128] + za[c >> 8 & 255] + "-" + za[c >> 16 & 255] + za[c >> 24 & 255] + za[d & 255] + za[d >> 8 & 255] + za[d >> 16 & 255] + za[d >> 24 & 255]).toUpperCase()
		},
		clamp: function(a, b, c) {
			return Math.max(b, Math.min(c, a))
		},
		euclideanModulo: function(a, b) {
			return (a % b + b) % b
		},
		mapLinear: function(a, b, c, d, e) {
			return d + (a - b) * (e - d) / (c - b)
		},
		lerp: function(a, b, c) {
			return (1 - c) * a + c * b
		},
		smoothstep: function(a,
			b, c) {
			if (a <= b) return 0;
			if (a >= c) return 1;
			a = (a - b) / (c - b);
			return a * a * (3 - 2 * a)
		},
		smootherstep: function(a, b, c) {
			if (a <= b) return 0;
			if (a >= c) return 1;
			a = (a - b) / (c - b);
			return a * a * a * (a * (6 * a - 15) + 10)
		},
		randInt: function(a, b) {
			return a + Math.floor(Math.random() * (b - a + 1))
		},
		randFloat: function(a, b) {
			return a + Math.random() * (b - a)
		},
		randFloatSpread: function(a) {
			return a * (.5 - Math.random())
		},
		degToRad: function(a) {
			return a * O.DEG2RAD
		},
		radToDeg: function(a) {
			return a * O.RAD2DEG
		},
		isPowerOfTwo: function(a) {
			return 0 === (a & a - 1) && 0 !== a
		},
		ceilPowerOfTwo: function(a) {
			return Math.pow(2,
				Math.ceil(Math.log(a) / Math.LN2))
		},
		floorPowerOfTwo: function(a) {
			return Math.pow(2, Math.floor(Math.log(a) / Math.LN2))
		},
		setQuaternionFromProperEuler: function(a, b, c, d, e) {
			var f = Math.cos,
				g = Math.sin,
				h = f(c / 2);
			c = g(c / 2);
			var l = f((b + d) / 2),
				m = g((b + d) / 2),
				k = f((b - d) / 2),
				n = g((b - d) / 2);
			f = f((d - b) / 2);
			b = g((d - b) / 2);
			switch (e) {
				case "XYX":
					a.set(h * m, c * k, c * n, h * l);
					break;
				case "YZY":
					a.set(c * n, h * m, c * k, h * l);
					break;
				case "ZXZ":
					a.set(c * k, c * n, h * m, h * l);
					break;
				case "XZX":
					a.set(h * m, c * b, c * f, h * l);
					break;
				case "YXY":
					a.set(c * f, h * m, c * b, h * l);
					break;
				case "ZYZ":
					a.set(c *
						b, c * f, h * m, h * l);
					break;
				default:
					console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + e)
			}
		}
	};
	Object.defineProperties(v.prototype, {
		width: {
			get: function() {
				return this.x
			},
			set: function(a) {
				this.x = a
			}
		},
		height: {
			get: function() {
				return this.y
			},
			set: function(a) {
				this.y = a
			}
		}
	});
	Object.assign(v.prototype, {
		isVector2: !0,
		set: function(a, b) {
			this.x = a;
			this.y = b;
			return this
		},
		setScalar: function(a) {
			this.y = this.x = a;
			return this
		},
		setX: function(a) {
			this.x = a;
			return this
		},
		setY: function(a) {
			this.y =
				a;
			return this
		},
		setComponent: function(a, b) {
			switch (a) {
				case 0:
					this.x = b;
					break;
				case 1:
					this.y = b;
					break;
				default:
					throw Error("index is out of range: " + a);
			}
			return this
		},
		getComponent: function(a) {
			switch (a) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw Error("index is out of range: " + a);
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y)
		},
		copy: function(a) {
			this.x = a.x;
			this.y = a.y;
			return this
		},
		add: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
				this.addVectors(a, b);
			this.x += a.x;
			this.y += a.y;
			return this
		},
		addScalar: function(a) {
			this.x += a;
			this.y += a;
			return this
		},
		addVectors: function(a, b) {
			this.x = a.x + b.x;
			this.y = a.y + b.y;
			return this
		},
		addScaledVector: function(a, b) {
			this.x += a.x * b;
			this.y += a.y * b;
			return this
		},
		sub: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
			this.x -= a.x;
			this.y -= a.y;
			return this
		},
		subScalar: function(a) {
			this.x -= a;
			this.y -= a;
			return this
		},
		subVectors: function(a, b) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			return this
		},
		multiply: function(a) {
			this.x *= a.x;
			this.y *= a.y;
			return this
		},
		multiplyScalar: function(a) {
			this.x *= a;
			this.y *= a;
			return this
		},
		divide: function(a) {
			this.x /= a.x;
			this.y /= a.y;
			return this
		},
		divideScalar: function(a) {
			return this.multiplyScalar(1 / a)
		},
		applyMatrix3: function(a) {
			var b = this.x,
				c = this.y;
			a = a.elements;
			this.x = a[0] * b + a[3] * c + a[6];
			this.y = a[1] * b + a[4] * c + a[7];
			return this
		},
		min: function(a) {
			this.x = Math.min(this.x, a.x);
			this.y = Math.min(this.y, a.y);
			return this
		},
		max: function(a) {
			this.x = Math.max(this.x, a.x);
			this.y = Math.max(this.y, a.y);
			return this
		},
		clamp: function(a, b) {
			this.x = Math.max(a.x, Math.min(b.x, this.x));
			this.y = Math.max(a.y, Math.min(b.y, this.y));
			return this
		},
		clampScalar: function(a, b) {
			this.x = Math.max(a, Math.min(b, this.x));
			this.y = Math.max(a, Math.min(b, this.y));
			return this
		},
		clampLength: function(a, b) {
			var c = this.length();
			return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
		},
		floor: function() {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this
		},
		ceil: function() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			return this
		},
		round: function() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this
		},
		roundToZero: function() {
			this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
			return this
		},
		negate: function() {
			this.x = -this.x;
			this.y = -this.y;
			return this
		},
		dot: function(a) {
			return this.x * a.x + this.y * a.y
		},
		cross: function(a) {
			return this.x * a.y - this.y * a.x
		},
		lengthSq: function() {
			return this.x *
				this.x + this.y * this.y
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		angle: function() {
			return Math.atan2(-this.y, -this.x) + Math.PI
		},
		distanceTo: function(a) {
			return Math.sqrt(this.distanceToSquared(a))
		},
		distanceToSquared: function(a) {
			var b = this.x - a.x;
			a = this.y - a.y;
			return b * b + a * a
		},
		manhattanDistanceTo: function(a) {
			return Math.abs(this.x - a.x) + Math.abs(this.y -
				a.y)
		},
		setLength: function(a) {
			return this.normalize().multiplyScalar(a)
		},
		lerp: function(a, b) {
			this.x += (a.x - this.x) * b;
			this.y += (a.y - this.y) * b;
			return this
		},
		lerpVectors: function(a, b, c) {
			this.x = a.x + (b.x - a.x) * c;
			this.y = a.y + (b.y - a.y) * c;
			return this
		},
		equals: function(a) {
			return a.x === this.x && a.y === this.y
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			this.x = a[b];
			this.y = a[b + 1];
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			a[b] = this.x;
			a[b + 1] = this.y;
			return a
		},
		fromBufferAttribute: function(a, b, c) {
			void 0 !==
				c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
			this.x = a.getX(b);
			this.y = a.getY(b);
			return this
		},
		rotateAround: function(a, b) {
			var c = Math.cos(b);
			b = Math.sin(b);
			var d = this.x - a.x,
				e = this.y - a.y;
			this.x = d * c - e * b + a.x;
			this.y = d * b + e * c + a.y;
			return this
		},
		random: function() {
			this.x = Math.random();
			this.y = Math.random();
			return this
		}
	});
	Object.assign(ya.prototype, {
		isMatrix3: !0,
		set: function(a, b, c, d, e, f, g, h, l) {
			var m = this.elements;
			m[0] = a;
			m[1] = d;
			m[2] = g;
			m[3] = b;
			m[4] = e;
			m[5] = h;
			m[6] = c;
			m[7] = f;
			m[8] =
				l;
			return this
		},
		identity: function() {
			this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
			return this
		},
		clone: function() {
			return (new this.constructor).fromArray(this.elements)
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			b[3] = a[3];
			b[4] = a[4];
			b[5] = a[5];
			b[6] = a[6];
			b[7] = a[7];
			b[8] = a[8];
			return this
		},
		extractBasis: function(a, b, c) {
			a.setFromMatrix3Column(this, 0);
			b.setFromMatrix3Column(this, 1);
			c.setFromMatrix3Column(this, 2);
			return this
		},
		setFromMatrix4: function(a) {
			a = a.elements;
			this.set(a[0], a[4], a[8], a[1],
				a[5], a[9], a[2], a[6], a[10]);
			return this
		},
		multiply: function(a) {
			return this.multiplyMatrices(this, a)
		},
		premultiply: function(a) {
			return this.multiplyMatrices(a, this)
		},
		multiplyMatrices: function(a, b) {
			var c = a.elements,
				d = b.elements;
			b = this.elements;
			a = c[0];
			var e = c[3],
				f = c[6],
				g = c[1],
				h = c[4],
				l = c[7],
				m = c[2],
				k = c[5];
			c = c[8];
			var n = d[0],
				t = d[3],
				p = d[6],
				q = d[1],
				u = d[4],
				v = d[7],
				x = d[2],
				w = d[5];
			d = d[8];
			b[0] = a * n + e * q + f * x;
			b[3] = a * t + e * u + f * w;
			b[6] = a * p + e * v + f * d;
			b[1] = g * n + h * q + l * x;
			b[4] = g * t + h * u + l * w;
			b[7] = g * p + h * v + l * d;
			b[2] = m * n + k * q + c * x;
			b[5] = m * t + k *
				u + c * w;
			b[8] = m * p + k * v + c * d;
			return this
		},
		multiplyScalar: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[3] *= a;
			b[6] *= a;
			b[1] *= a;
			b[4] *= a;
			b[7] *= a;
			b[2] *= a;
			b[5] *= a;
			b[8] *= a;
			return this
		},
		determinant: function() {
			var a = this.elements,
				b = a[0],
				c = a[1],
				d = a[2],
				e = a[3],
				f = a[4],
				g = a[5],
				h = a[6],
				l = a[7];
			a = a[8];
			return b * f * a - b * g * l - c * e * a + c * g * h + d * e * l - d * f * h
		},
		getInverse: function(a, b) {
			void 0 !== b && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
			var c = a.elements;
			a = this.elements;
			b = c[0];
			var d = c[1],
				e = c[2],
				f = c[3],
				g = c[4],
				h = c[5],
				l = c[6],
				m = c[7];
			c = c[8];
			var k = c * g - h * m,
				n = h * l - c * f,
				p = m * f - g * l,
				r = b * k + d * n + e * p;
			if (0 === r) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			r = 1 / r;
			a[0] = k * r;
			a[1] = (e * m - c * d) * r;
			a[2] = (h * d - e * g) * r;
			a[3] = n * r;
			a[4] = (c * b - e * l) * r;
			a[5] = (e * f - h * b) * r;
			a[6] = p * r;
			a[7] = (d * l - m * b) * r;
			a[8] = (g * b - d * f) * r;
			return this
		},
		transpose: function() {
			var a = this.elements;
			var b = a[1];
			a[1] = a[3];
			a[3] = b;
			b = a[2];
			a[2] = a[6];
			a[6] = b;
			b = a[5];
			a[5] = a[7];
			a[7] = b;
			return this
		},
		getNormalMatrix: function(a) {
			return this.setFromMatrix4(a).getInverse(this).transpose()
		},
		transposeIntoArray: function(a) {
			var b = this.elements;
			a[0] = b[0];
			a[1] = b[3];
			a[2] = b[6];
			a[3] = b[1];
			a[4] = b[4];
			a[5] = b[7];
			a[6] = b[2];
			a[7] = b[5];
			a[8] = b[8];
			return this
		},
		setUvTransform: function(a, b, c, d, e, f, g) {
			var h = Math.cos(e);
			e = Math.sin(e);
			this.set(c * h, c * e, -c * (h * f + e * g) + f + a, -d * e, d * h, -d * (-e * f + h * g) + g + b, 0, 0, 1)
		},
		scale: function(a, b) {
			var c = this.elements;
			c[0] *= a;
			c[3] *= a;
			c[6] *= a;
			c[1] *= b;
			c[4] *= b;
			c[7] *= b;
			return this
		},
		rotate: function(a) {
			var b = Math.cos(a);
			a = Math.sin(a);
			var c = this.elements,
				d = c[0],
				e = c[3],
				f = c[6],
				g = c[1],
				h = c[4],
				l = c[7];
			c[0] = b * d + a * g;
			c[3] = b * e + a * h;
			c[6] = b * f + a * l;
			c[1] = -a * d + b * g;
			c[4] = -a * e + b * h;
			c[7] = -a * f + b * l;
			return this
		},
		translate: function(a, b) {
			var c = this.elements;
			c[0] += a * c[2];
			c[3] += a * c[5];
			c[6] += a * c[8];
			c[1] += b * c[2];
			c[4] += b * c[5];
			c[7] += b * c[8];
			return this
		},
		equals: function(a) {
			var b = this.elements;
			a = a.elements;
			for (var c = 0; 9 > c; c++)
				if (b[c] !== a[c]) return !1;
			return !0
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			for (var c = 0; 9 > c; c++) this.elements[c] = a[c + b];
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			var c =
				this.elements;
			a[b] = c[0];
			a[b + 1] = c[1];
			a[b + 2] = c[2];
			a[b + 3] = c[3];
			a[b + 4] = c[4];
			a[b + 5] = c[5];
			a[b + 6] = c[6];
			a[b + 7] = c[7];
			a[b + 8] = c[8];
			return a
		}
	});
	var ld, Ob = {
			getDataURL: function(a) {
				if ("undefined" == typeof HTMLCanvasElement) return a.src;
				if (!(a instanceof HTMLCanvasElement)) {
					void 0 === ld && (ld = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"));
					ld.width = a.width;
					ld.height = a.height;
					var b = ld.getContext("2d");
					a instanceof ImageData ? b.putImageData(a, 0, 0) : b.drawImage(a, 0, 0, a.width, a.height);
					a = ld
				}
				return 2048 <
					a.width || 2048 < a.height ? a.toDataURL("image/jpeg", .6) : a.toDataURL("image/png")
			}
		},
		ej = 0;
	W.DEFAULT_IMAGE = void 0;
	W.DEFAULT_MAPPING = 300;
	W.prototype = Object.assign(Object.create(ua.prototype), {
		constructor: W,
		isTexture: !0,
		updateMatrix: function() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.name = a.name;
			this.image = a.image;
			this.mipmaps = a.mipmaps.slice(0);
			this.mapping = a.mapping;
			this.wrapS = a.wrapS;
			this.wrapT = a.wrapT;
			this.magFilter = a.magFilter;
			this.minFilter = a.minFilter;
			this.anisotropy = a.anisotropy;
			this.format = a.format;
			this.internalFormat = a.internalFormat;
			this.type = a.type;
			this.offset.copy(a.offset);
			this.repeat.copy(a.repeat);
			this.center.copy(a.center);
			this.rotation = a.rotation;
			this.matrixAutoUpdate = a.matrixAutoUpdate;
			this.matrix.copy(a.matrix);
			this.generateMipmaps = a.generateMipmaps;
			this.premultiplyAlpha = a.premultiplyAlpha;
			this.flipY = a.flipY;
			this.unpackAlignment =
				a.unpackAlignment;
			this.encoding = a.encoding;
			return this
		},
		toJSON: function(a) {
			var b = void 0 === a || "string" === typeof a;
			if (!b && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
			var c = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				type: this.type,
				encoding: this.encoding,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};
			if (void 0 !== this.image) {
				var d = this.image;
				void 0 === d.uuid && (d.uuid = O.generateUUID());
				if (!b && void 0 === a.images[d.uuid]) {
					if (Array.isArray(d)) {
						var e = [];
						for (var f = 0, g = d.length; f < g; f++) e.push(Ob.getDataURL(d[f]))
					} else e = Ob.getDataURL(d);
					a.images[d.uuid] = {
						uuid: d.uuid,
						url: e
					}
				}
				c.image = d.uuid
			}
			b || (a.textures[this.uuid] = c);
			return c
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		},
		transformUv: function(a) {
			if (300 !== this.mapping) return a;
			a.applyMatrix3(this.matrix);
			if (0 > a.x || 1 < a.x) switch (this.wrapS) {
				case 1E3:
					a.x -= Math.floor(a.x);
					break;
				case 1001:
					a.x = 0 > a.x ? 0 : 1;
					break;
				case 1002:
					a.x = 1 === Math.abs(Math.floor(a.x) % 2) ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x)
			}
			if (0 > a.y || 1 < a.y) switch (this.wrapT) {
				case 1E3:
					a.y -= Math.floor(a.y);
					break;
				case 1001:
					a.y = 0 > a.y ? 0 : 1;
					break;
				case 1002:
					a.y = 1 === Math.abs(Math.floor(a.y) % 2) ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y)
			}
			this.flipY && (a.y = 1 - a.y);
			return a
		}
	});
	Object.defineProperty(W.prototype,
		"needsUpdate", {
			set: function(a) {
				!0 === a && this.version++
			}
		});
	Object.defineProperties(R.prototype, {
		width: {
			get: function() {
				return this.z
			},
			set: function(a) {
				this.z = a
			}
		},
		height: {
			get: function() {
				return this.w
			},
			set: function(a) {
				this.w = a
			}
		}
	});
	Object.assign(R.prototype, {
		isVector4: !0,
		set: function(a, b, c, d) {
			this.x = a;
			this.y = b;
			this.z = c;
			this.w = d;
			return this
		},
		setScalar: function(a) {
			this.w = this.z = this.y = this.x = a;
			return this
		},
		setX: function(a) {
			this.x = a;
			return this
		},
		setY: function(a) {
			this.y = a;
			return this
		},
		setZ: function(a) {
			this.z =
				a;
			return this
		},
		setW: function(a) {
			this.w = a;
			return this
		},
		setComponent: function(a, b) {
			switch (a) {
				case 0:
					this.x = b;
					break;
				case 1:
					this.y = b;
					break;
				case 2:
					this.z = b;
					break;
				case 3:
					this.w = b;
					break;
				default:
					throw Error("index is out of range: " + a);
			}
			return this
		},
		getComponent: function(a) {
			switch (a) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw Error("index is out of range: " + a);
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z, this.w)
		},
		copy: function(a) {
			this.x =
				a.x;
			this.y = a.y;
			this.z = a.z;
			this.w = void 0 !== a.w ? a.w : 1;
			return this
		},
		add: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
			this.x += a.x;
			this.y += a.y;
			this.z += a.z;
			this.w += a.w;
			return this
		},
		addScalar: function(a) {
			this.x += a;
			this.y += a;
			this.z += a;
			this.w += a;
			return this
		},
		addVectors: function(a, b) {
			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;
			this.w = a.w + b.w;
			return this
		},
		addScaledVector: function(a, b) {
			this.x += a.x *
				b;
			this.y += a.y * b;
			this.z += a.z * b;
			this.w += a.w * b;
			return this
		},
		sub: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
			this.x -= a.x;
			this.y -= a.y;
			this.z -= a.z;
			this.w -= a.w;
			return this
		},
		subScalar: function(a) {
			this.x -= a;
			this.y -= a;
			this.z -= a;
			this.w -= a;
			return this
		},
		subVectors: function(a, b) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;
			this.w = a.w - b.w;
			return this
		},
		multiplyScalar: function(a) {
			this.x *= a;
			this.y *= a;
			this.z *=
				a;
			this.w *= a;
			return this
		},
		applyMatrix4: function(a) {
			var b = this.x,
				c = this.y,
				d = this.z,
				e = this.w;
			a = a.elements;
			this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
			this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
			this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
			this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
			return this
		},
		divideScalar: function(a) {
			return this.multiplyScalar(1 / a)
		},
		setAxisAngleFromQuaternion: function(a) {
			this.w = 2 * Math.acos(a.w);
			var b = Math.sqrt(1 - a.w * a.w);
			1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
			return this
		},
		setAxisAngleFromRotationMatrix: function(a) {
			a =
				a.elements;
			var b = a[0];
			var c = a[4];
			var d = a[8],
				e = a[1],
				f = a[5],
				g = a[9];
			var h = a[2];
			var l = a[6];
			var m = a[10];
			if (.01 > Math.abs(c - e) && .01 > Math.abs(d - h) && .01 > Math.abs(g - l)) {
				if (.1 > Math.abs(c + e) && .1 > Math.abs(d + h) && .1 > Math.abs(g + l) && .1 > Math.abs(b + f + m - 3)) return this.set(1, 0, 0, 0), this;
				a = Math.PI;
				b = (b + 1) / 2;
				f = (f + 1) / 2;
				m = (m + 1) / 2;
				c = (c + e) / 4;
				d = (d + h) / 4;
				g = (g + l) / 4;
				b > f && b > m ? .01 > b ? (l = 0, c = h = .707106781) : (l = Math.sqrt(b), h = c / l, c = d / l) : f > m ? .01 > f ? (l = .707106781, h = 0, c = .707106781) : (h = Math.sqrt(f), l = c / h, c = g / h) : .01 > m ? (h = l = .707106781, c = 0) : (c =
					Math.sqrt(m), l = d / c, h = g / c);
				this.set(l, h, c, a);
				return this
			}
			a = Math.sqrt((l - g) * (l - g) + (d - h) * (d - h) + (e - c) * (e - c));
			.001 > Math.abs(a) && (a = 1);
			this.x = (l - g) / a;
			this.y = (d - h) / a;
			this.z = (e - c) / a;
			this.w = Math.acos((b + f + m - 1) / 2);
			return this
		},
		min: function(a) {
			this.x = Math.min(this.x, a.x);
			this.y = Math.min(this.y, a.y);
			this.z = Math.min(this.z, a.z);
			this.w = Math.min(this.w, a.w);
			return this
		},
		max: function(a) {
			this.x = Math.max(this.x, a.x);
			this.y = Math.max(this.y, a.y);
			this.z = Math.max(this.z, a.z);
			this.w = Math.max(this.w, a.w);
			return this
		},
		clamp: function(a,
			b) {
			this.x = Math.max(a.x, Math.min(b.x, this.x));
			this.y = Math.max(a.y, Math.min(b.y, this.y));
			this.z = Math.max(a.z, Math.min(b.z, this.z));
			this.w = Math.max(a.w, Math.min(b.w, this.w));
			return this
		},
		clampScalar: function(a, b) {
			this.x = Math.max(a, Math.min(b, this.x));
			this.y = Math.max(a, Math.min(b, this.y));
			this.z = Math.max(a, Math.min(b, this.z));
			this.w = Math.max(a, Math.min(b, this.w));
			return this
		},
		clampLength: function(a, b) {
			var c = this.length();
			return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
		},
		floor: function() {
			this.x =
				Math.floor(this.x);
			this.y = Math.floor(this.y);
			this.z = Math.floor(this.z);
			this.w = Math.floor(this.w);
			return this
		},
		ceil: function() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			this.z = Math.ceil(this.z);
			this.w = Math.ceil(this.w);
			return this
		},
		round: function() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			this.z = Math.round(this.z);
			this.w = Math.round(this.w);
			return this
		},
		roundToZero: function() {
			this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
			this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
			this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
			return this
		},
		negate: function() {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			this.w = -this.w;
			return this
		},
		dot: function(a) {
			return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		},
		manhattanLength: function() {
			return Math.abs(this.x) +
				Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function(a) {
			return this.normalize().multiplyScalar(a)
		},
		lerp: function(a, b) {
			this.x += (a.x - this.x) * b;
			this.y += (a.y - this.y) * b;
			this.z += (a.z - this.z) * b;
			this.w += (a.w - this.w) * b;
			return this
		},
		lerpVectors: function(a, b, c) {
			this.x = a.x + (b.x - a.x) * c;
			this.y = a.y + (b.y - a.y) * c;
			this.z = a.z + (b.z - a.z) * c;
			this.w = a.w + (b.w - a.w) * c;
			return this
		},
		equals: function(a) {
			return a.x === this.x && a.y === this.y && a.z === this.z &&
				a.w === this.w
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			this.x = a[b];
			this.y = a[b + 1];
			this.z = a[b + 2];
			this.w = a[b + 3];
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			a[b] = this.x;
			a[b + 1] = this.y;
			a[b + 2] = this.z;
			a[b + 3] = this.w;
			return a
		},
		fromBufferAttribute: function(a, b, c) {
			void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
			this.x = a.getX(b);
			this.y = a.getY(b);
			this.z = a.getZ(b);
			this.w = a.getW(b);
			return this
		},
		random: function() {
			this.x = Math.random();
			this.y =
				Math.random();
			this.z = Math.random();
			this.w = Math.random();
			return this
		}
	});
	Ba.prototype = Object.assign(Object.create(ua.prototype), {
		constructor: Ba,
		isWebGLRenderTarget: !0,
		setSize: function(a, b) {
			if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.texture.image.width = a, this.texture.image.height = b, this.dispose();
			this.viewport.set(0, 0, a, b);
			this.scissor.set(0, 0, a, b)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.width = a.width;
			this.height = a.height;
			this.viewport.copy(a.viewport);
			this.texture = a.texture.clone();
			this.depthBuffer = a.depthBuffer;
			this.stencilBuffer = a.stencilBuffer;
			this.depthTexture = a.depthTexture;
			return this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	});
	Xf.prototype = Object.assign(Object.create(Ba.prototype), {
		constructor: Xf,
		isWebGLMultisampleRenderTarget: !0,
		copy: function(a) {
			Ba.prototype.copy.call(this, a);
			this.samples = a.samples;
			return this
		}
	});
	Object.assign(va, {
		slerp: function(a, b, c, d) {
			return c.copy(a).slerp(b, d)
		},
		slerpFlat: function(a, b, c, d, e, f, g) {
			var h =
				c[d + 0],
				l = c[d + 1],
				m = c[d + 2];
			c = c[d + 3];
			d = e[f + 0];
			var k = e[f + 1],
				n = e[f + 2];
			e = e[f + 3];
			if (c !== e || h !== d || l !== k || m !== n) {
				f = 1 - g;
				var p = h * d + l * k + m * n + c * e,
					r = 0 <= p ? 1 : -1,
					q = 1 - p * p;
				q > Number.EPSILON && (q = Math.sqrt(q), p = Math.atan2(q, p * r), f = Math.sin(f * p) / q, g = Math.sin(g * p) / q);
				r *= g;
				h = h * f + d * r;
				l = l * f + k * r;
				m = m * f + n * r;
				c = c * f + e * r;
				f === 1 - g && (g = 1 / Math.sqrt(h * h + l * l + m * m + c * c), h *= g, l *= g, m *= g, c *= g)
			}
			a[b] = h;
			a[b + 1] = l;
			a[b + 2] = m;
			a[b + 3] = c
		},
		multiplyQuaternionsFlat: function(a, b, c, d, e, f) {
			var g = c[d],
				h = c[d + 1],
				l = c[d + 2];
			c = c[d + 3];
			d = e[f];
			var m = e[f + 1],
				k = e[f + 2];
			e =
				e[f + 3];
			a[b] = g * e + c * d + h * k - l * m;
			a[b + 1] = h * e + c * m + l * d - g * k;
			a[b + 2] = l * e + c * k + g * m - h * d;
			a[b + 3] = c * e - g * d - h * m - l * k;
			return a
		}
	});
	Object.defineProperties(va.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(a) {
				this._x = a;
				this._onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(a) {
				this._y = a;
				this._onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(a) {
				this._z = a;
				this._onChangeCallback()
			}
		},
		w: {
			get: function() {
				return this._w
			},
			set: function(a) {
				this._w = a;
				this._onChangeCallback()
			}
		}
	});
	Object.assign(va.prototype, {
		isQuaternion: !0,
		set: function(a, b, c, d) {
			this._x = a;
			this._y = b;
			this._z = c;
			this._w = d;
			this._onChangeCallback();
			return this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		},
		copy: function(a) {
			this._x = a.x;
			this._y = a.y;
			this._z = a.z;
			this._w = a.w;
			this._onChangeCallback();
			return this
		},
		setFromEuler: function(a, b) {
			if (!a || !a.isEuler) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
			var c = a._x,
				d = a._y,
				e = a._z;
			a = a.order;
			var f = Math.cos,
				g = Math.sin,
				h = f(c / 2),
				l = f(d / 2);
			f = f(e / 2);
			c = g(c / 2);
			d = g(d / 2);
			e = g(e / 2);
			switch (a) {
				case "XYZ":
					this._x = c * l * f + h * d * e;
					this._y = h * d * f - c * l * e;
					this._z = h * l * e + c * d * f;
					this._w = h * l * f - c * d * e;
					break;
				case "YXZ":
					this._x = c * l * f + h * d * e;
					this._y = h * d * f - c * l * e;
					this._z = h * l * e - c * d * f;
					this._w = h * l * f + c * d * e;
					break;
				case "ZXY":
					this._x = c * l * f - h * d * e;
					this._y = h * d * f + c * l * e;
					this._z = h * l * e + c * d * f;
					this._w = h * l * f - c * d * e;
					break;
				case "ZYX":
					this._x = c * l * f - h * d * e;
					this._y = h * d * f + c * l * e;
					this._z = h * l * e - c * d * f;
					this._w = h * l * f + c * d * e;
					break;
				case "YZX":
					this._x = c * l * f + h * d * e;
					this._y =
						h * d * f + c * l * e;
					this._z = h * l * e - c * d * f;
					this._w = h * l * f - c * d * e;
					break;
				case "XZY":
					this._x = c * l * f - h * d * e;
					this._y = h * d * f - c * l * e;
					this._z = h * l * e + c * d * f;
					this._w = h * l * f + c * d * e;
					break;
				default:
					console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
			}!1 !== b && this._onChangeCallback();
			return this
		},
		setFromAxisAngle: function(a, b) {
			b /= 2;
			var c = Math.sin(b);
			this._x = a.x * c;
			this._y = a.y * c;
			this._z = a.z * c;
			this._w = Math.cos(b);
			this._onChangeCallback();
			return this
		},
		setFromRotationMatrix: function(a) {
			var b = a.elements,
				c = b[0];
			a = b[4];
			var d = b[8],
				e = b[1],
				f = b[5],
				g = b[9],
				h = b[2],
				l = b[6];
			b = b[10];
			var m = c + f + b;
			0 < m ? (c = .5 / Math.sqrt(m + 1), this._w = .25 / c, this._x = (l - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (l - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = .25 * c, this._z = (g + l) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + l) / c, this._z = .25 * c);
			this._onChangeCallback();
			return this
		},
		setFromUnitVectors: function(a,
			b) {
			var c = a.dot(b) + 1;
			1E-6 > c ? (c = 0, Math.abs(a.x) > Math.abs(a.z) ? (this._x = -a.y, this._y = a.x, this._z = 0) : (this._x = 0, this._y = -a.z, this._z = a.y)) : (this._x = a.y * b.z - a.z * b.y, this._y = a.z * b.x - a.x * b.z, this._z = a.x * b.y - a.y * b.x);
			this._w = c;
			return this.normalize()
		},
		angleTo: function(a) {
			return 2 * Math.acos(Math.abs(O.clamp(this.dot(a), -1, 1)))
		},
		rotateTowards: function(a, b) {
			var c = this.angleTo(a);
			if (0 === c) return this;
			this.slerp(a, Math.min(1, b / c));
			return this
		},
		inverse: function() {
			return this.conjugate()
		},
		conjugate: function() {
			this._x *=
				-1;
			this._y *= -1;
			this._z *= -1;
			this._onChangeCallback();
			return this
		},
		dot: function(a) {
			return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
		},
		lengthSq: function() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		},
		length: function() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		},
		normalize: function() {
			var a = this.length();
			0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
			this._onChangeCallback();
			return this
		},
		multiply: function(a, b) {
			return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
		},
		premultiply: function(a) {
			return this.multiplyQuaternions(a, this)
		},
		multiplyQuaternions: function(a, b) {
			var c = a._x,
				d = a._y,
				e = a._z;
			a = a._w;
			var f = b._x,
				g = b._y,
				h = b._z;
			b = b._w;
			this._x = c * b + a * f + d * h - e * g;
			this._y = d * b + a * g + e * f - c * h;
			this._z = e * b + a * h + c * g - d * f;
			this._w = a * b - c * f - d * g - e * h;
			this._onChangeCallback();
			return this
		},
		slerp: function(a, b) {
			if (0 === b) return this;
			if (1 === b) return this.copy(a);
			var c = this._x,
				d = this._y,
				e = this._z,
				f = this._w,
				g = f * a._w + c * a._x + d * a._y + e * a._z;
			0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
			if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
			a = 1 - g * g;
			if (a <= Number.EPSILON) return g = 1 - b, this._w = g * f + b * this._w, this._x = g * c + b * this._x, this._y = g * d + b * this._y, this._z = g * e + b * this._z, this.normalize(), this._onChangeCallback(), this;
			a = Math.sqrt(a);
			var h = Math.atan2(a,
				g);
			g = Math.sin((1 - b) * h) / a;
			b = Math.sin(b * h) / a;
			this._w = f * g + this._w * b;
			this._x = c * g + this._x * b;
			this._y = d * g + this._y * b;
			this._z = e * g + this._z * b;
			this._onChangeCallback();
			return this
		},
		equals: function(a) {
			return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			this._x = a[b];
			this._y = a[b + 1];
			this._z = a[b + 2];
			this._w = a[b + 3];
			this._onChangeCallback();
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			a[b] = this._x;
			a[b + 1] = this._y;
			a[b + 2] = this._z;
			a[b +
				3] = this._w;
			return a
		},
		fromBufferAttribute: function(a, b) {
			this._x = a.getX(b);
			this._y = a.getY(b);
			this._z = a.getZ(b);
			this._w = a.getW(b);
			return this
		},
		_onChange: function(a) {
			this._onChangeCallback = a;
			return this
		},
		_onChangeCallback: function() {}
	});
	var Tg = new p,
		ti = new va;
	Object.assign(p.prototype, {
		isVector3: !0,
		set: function(a, b, c) {
			this.x = a;
			this.y = b;
			this.z = c;
			return this
		},
		setScalar: function(a) {
			this.z = this.y = this.x = a;
			return this
		},
		setX: function(a) {
			this.x = a;
			return this
		},
		setY: function(a) {
			this.y = a;
			return this
		},
		setZ: function(a) {
			this.z =
				a;
			return this
		},
		setComponent: function(a, b) {
			switch (a) {
				case 0:
					this.x = b;
					break;
				case 1:
					this.y = b;
					break;
				case 2:
					this.z = b;
					break;
				default:
					throw Error("index is out of range: " + a);
			}
			return this
		},
		getComponent: function(a) {
			switch (a) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw Error("index is out of range: " + a);
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z)
		},
		copy: function(a) {
			this.x = a.x;
			this.y = a.y;
			this.z = a.z;
			return this
		},
		add: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
				this.addVectors(a, b);
			this.x += a.x;
			this.y += a.y;
			this.z += a.z;
			return this
		},
		addScalar: function(a) {
			this.x += a;
			this.y += a;
			this.z += a;
			return this
		},
		addVectors: function(a, b) {
			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;
			return this
		},
		addScaledVector: function(a, b) {
			this.x += a.x * b;
			this.y += a.y * b;
			this.z += a.z * b;
			return this
		},
		sub: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
			this.x -= a.x;
			this.y -= a.y;
			this.z -= a.z;
			return this
		},
		subScalar: function(a) {
			this.x -= a;
			this.y -= a;
			this.z -= a;
			return this
		},
		subVectors: function(a, b) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;
			return this
		},
		multiply: function(a, b) {
			if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
			this.x *= a.x;
			this.y *= a.y;
			this.z *= a.z;
			return this
		},
		multiplyScalar: function(a) {
			this.x *= a;
			this.y *= a;
			this.z *= a;
			return this
		},
		multiplyVectors: function(a, b) {
			this.x = a.x *
				b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;
			return this
		},
		applyEuler: function(a) {
			a && a.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
			return this.applyQuaternion(ti.setFromEuler(a))
		},
		applyAxisAngle: function(a, b) {
			return this.applyQuaternion(ti.setFromAxisAngle(a, b))
		},
		applyMatrix3: function(a) {
			var b = this.x,
				c = this.y,
				d = this.z;
			a = a.elements;
			this.x = a[0] * b + a[3] * c + a[6] * d;
			this.y = a[1] * b + a[4] * c + a[7] * d;
			this.z = a[2] * b + a[5] * c + a[8] * d;
			return this
		},
		applyNormalMatrix: function(a) {
			return this.applyMatrix3(a).normalize()
		},
		applyMatrix4: function(a) {
			var b = this.x,
				c = this.y,
				d = this.z;
			a = a.elements;
			var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
			this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
			this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
			this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
			return this
		},
		applyQuaternion: function(a) {
			var b = this.x,
				c = this.y,
				d = this.z,
				e = a.x,
				f = a.y,
				g = a.z;
			a = a.w;
			var h = a * b + f * d - g * c,
				l = a * c + g * b - e * d,
				m = a * d + e * c - f * b;
			b = -e * b - f * c - g * d;
			this.x = h * a + b * -e + l * -g - m * -f;
			this.y = l * a + b * -f + m * -e - h * -g;
			this.z = m * a + b * -g + h * -f - l * -e;
			return this
		},
		project: function(a) {
			return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)
		},
		unproject: function(a) {
			return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)
		},
		transformDirection: function(a) {
			var b = this.x,
				c = this.y,
				d = this.z;
			a = a.elements;
			this.x = a[0] * b + a[4] * c + a[8] * d;
			this.y = a[1] * b + a[5] * c + a[9] * d;
			this.z = a[2] * b + a[6] * c + a[10] * d;
			return this.normalize()
		},
		divide: function(a) {
			this.x /= a.x;
			this.y /= a.y;
			this.z /= a.z;
			return this
		},
		divideScalar: function(a) {
			return this.multiplyScalar(1 / a)
		},
		min: function(a) {
			this.x = Math.min(this.x, a.x);
			this.y = Math.min(this.y, a.y);
			this.z = Math.min(this.z,
				a.z);
			return this
		},
		max: function(a) {
			this.x = Math.max(this.x, a.x);
			this.y = Math.max(this.y, a.y);
			this.z = Math.max(this.z, a.z);
			return this
		},
		clamp: function(a, b) {
			this.x = Math.max(a.x, Math.min(b.x, this.x));
			this.y = Math.max(a.y, Math.min(b.y, this.y));
			this.z = Math.max(a.z, Math.min(b.z, this.z));
			return this
		},
		clampScalar: function(a, b) {
			this.x = Math.max(a, Math.min(b, this.x));
			this.y = Math.max(a, Math.min(b, this.y));
			this.z = Math.max(a, Math.min(b, this.z));
			return this
		},
		clampLength: function(a, b) {
			var c = this.length();
			return this.divideScalar(c ||
				1).multiplyScalar(Math.max(a, Math.min(b, c)))
		},
		floor: function() {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			this.z = Math.floor(this.z);
			return this
		},
		ceil: function() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			this.z = Math.ceil(this.z);
			return this
		},
		round: function() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			this.z = Math.round(this.z);
			return this
		},
		roundToZero: function() {
			this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
			this.z =
				0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
			return this
		},
		negate: function() {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			return this
		},
		dot: function(a) {
			return this.x * a.x + this.y * a.y + this.z * a.z
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function(a) {
			return this.normalize().multiplyScalar(a)
		},
		lerp: function(a, b) {
			this.x += (a.x - this.x) * b;
			this.y += (a.y - this.y) * b;
			this.z += (a.z - this.z) * b;
			return this
		},
		lerpVectors: function(a, b, c) {
			this.x = a.x + (b.x - a.x) * c;
			this.y = a.y + (b.y - a.y) * c;
			this.z = a.z + (b.z - a.z) * c;
			return this
		},
		cross: function(a, b) {
			return void 0 !== b ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b)) : this.crossVectors(this, a)
		},
		crossVectors: function(a, b) {
			var c = a.x,
				d = a.y;
			a = a.z;
			var e = b.x,
				f = b.y;
			b = b.z;
			this.x = d * b - a * f;
			this.y = a *
				e - c * b;
			this.z = c * f - d * e;
			return this
		},
		projectOnVector: function(a) {
			var b = a.lengthSq();
			if (0 === b) return this.set(0, 0, 0);
			b = a.dot(this) / b;
			return this.copy(a).multiplyScalar(b)
		},
		projectOnPlane: function(a) {
			Tg.copy(this).projectOnVector(a);
			return this.sub(Tg)
		},
		reflect: function(a) {
			return this.sub(Tg.copy(a).multiplyScalar(2 * this.dot(a)))
		},
		angleTo: function(a) {
			var b = Math.sqrt(this.lengthSq() * a.lengthSq());
			if (0 === b) return Math.PI / 2;
			a = this.dot(a) / b;
			return Math.acos(O.clamp(a, -1, 1))
		},
		distanceTo: function(a) {
			return Math.sqrt(this.distanceToSquared(a))
		},
		distanceToSquared: function(a) {
			var b = this.x - a.x,
				c = this.y - a.y;
			a = this.z - a.z;
			return b * b + c * c + a * a
		},
		manhattanDistanceTo: function(a) {
			return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z)
		},
		setFromSpherical: function(a) {
			return this.setFromSphericalCoords(a.radius, a.phi, a.theta)
		},
		setFromSphericalCoords: function(a, b, c) {
			var d = Math.sin(b) * a;
			this.x = d * Math.sin(c);
			this.y = Math.cos(b) * a;
			this.z = d * Math.cos(c);
			return this
		},
		setFromCylindrical: function(a) {
			return this.setFromCylindricalCoords(a.radius, a.theta,
				a.y)
		},
		setFromCylindricalCoords: function(a, b, c) {
			this.x = a * Math.sin(b);
			this.y = c;
			this.z = a * Math.cos(b);
			return this
		},
		setFromMatrixPosition: function(a) {
			a = a.elements;
			this.x = a[12];
			this.y = a[13];
			this.z = a[14];
			return this
		},
		setFromMatrixScale: function(a) {
			var b = this.setFromMatrixColumn(a, 0).length(),
				c = this.setFromMatrixColumn(a, 1).length();
			a = this.setFromMatrixColumn(a, 2).length();
			this.x = b;
			this.y = c;
			this.z = a;
			return this
		},
		setFromMatrixColumn: function(a, b) {
			return this.fromArray(a.elements, 4 * b)
		},
		setFromMatrix3Column: function(a,
			b) {
			return this.fromArray(a.elements, 3 * b)
		},
		equals: function(a) {
			return a.x === this.x && a.y === this.y && a.z === this.z
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			this.x = a[b];
			this.y = a[b + 1];
			this.z = a[b + 2];
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			a[b] = this.x;
			a[b + 1] = this.y;
			a[b + 2] = this.z;
			return a
		},
		fromBufferAttribute: function(a, b, c) {
			void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
			this.x = a.getX(b);
			this.y = a.getY(b);
			this.z = a.getZ(b);
			return this
		},
		random: function() {
			this.x = Math.random();
			this.y = Math.random();
			this.z = Math.random();
			return this
		}
	});
	var md = new p,
		ba = new N,
		Hk = new p(0, 0, 0),
		Ik = new p(1, 1, 1),
		Pb = new p,
		zf = new p,
		Ea = new p;
	Object.assign(N.prototype, {
		isMatrix4: !0,
		set: function(a, b, c, d, e, f, g, h, l, m, k, n, p, r, q, u) {
			var z = this.elements;
			z[0] = a;
			z[4] = b;
			z[8] = c;
			z[12] = d;
			z[1] = e;
			z[5] = f;
			z[9] = g;
			z[13] = h;
			z[2] = l;
			z[6] = m;
			z[10] = k;
			z[14] = n;
			z[3] = p;
			z[7] = r;
			z[11] = q;
			z[15] = u;
			return this
		},
		identity: function() {
			this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			return this
		},
		clone: function() {
			return (new N).fromArray(this.elements)
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			b[3] = a[3];
			b[4] = a[4];
			b[5] = a[5];
			b[6] = a[6];
			b[7] = a[7];
			b[8] = a[8];
			b[9] = a[9];
			b[10] = a[10];
			b[11] = a[11];
			b[12] = a[12];
			b[13] = a[13];
			b[14] = a[14];
			b[15] = a[15];
			return this
		},
		copyPosition: function(a) {
			var b = this.elements;
			a = a.elements;
			b[12] = a[12];
			b[13] = a[13];
			b[14] = a[14];
			return this
		},
		extractBasis: function(a, b, c) {
			a.setFromMatrixColumn(this, 0);
			b.setFromMatrixColumn(this, 1);
			c.setFromMatrixColumn(this, 2);
			return this
		},
		makeBasis: function(a, b, c) {
			this.set(a.x,
				b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
			return this
		},
		extractRotation: function(a) {
			var b = this.elements,
				c = a.elements,
				d = 1 / md.setFromMatrixColumn(a, 0).length(),
				e = 1 / md.setFromMatrixColumn(a, 1).length();
			a = 1 / md.setFromMatrixColumn(a, 2).length();
			b[0] = c[0] * d;
			b[1] = c[1] * d;
			b[2] = c[2] * d;
			b[3] = 0;
			b[4] = c[4] * e;
			b[5] = c[5] * e;
			b[6] = c[6] * e;
			b[7] = 0;
			b[8] = c[8] * a;
			b[9] = c[9] * a;
			b[10] = c[10] * a;
			b[11] = 0;
			b[12] = 0;
			b[13] = 0;
			b[14] = 0;
			b[15] = 1;
			return this
		},
		makeRotationFromEuler: function(a) {
			a && a.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			var b = this.elements,
				c = a.x,
				d = a.y,
				e = a.z,
				f = Math.cos(c);
			c = Math.sin(c);
			var g = Math.cos(d);
			d = Math.sin(d);
			var h = Math.cos(e);
			e = Math.sin(e);
			if ("XYZ" === a.order) {
				a = f * h;
				var l = f * e,
					m = c * h,
					k = c * e;
				b[0] = g * h;
				b[4] = -g * e;
				b[8] = d;
				b[1] = l + m * d;
				b[5] = a - k * d;
				b[9] = -c * g;
				b[2] = k - a * d;
				b[6] = m + l * d;
				b[10] = f * g
			} else "YXZ" === a.order ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a + k * c, b[4] = m * c - l, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = l * c - m, b[6] = k + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a - k * c, b[4] = -f * e, b[8] = m + l * c, b[1] = l + m * c, b[5] = f * h, b[9] =
				k - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, l = f * e, m = c * h, k = c * e, b[0] = g * h, b[4] = m * d - l, b[8] = a * d + k, b[1] = g * e, b[5] = k * d + a, b[9] = l * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = k - a * e, b[8] = m * e + l, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = l * e + m, b[10] = a - k * e) : "XZY" === a.order && (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + k, b[5] = f * h, b[9] = l * e - m, b[2] = m * e - l, b[6] = c * h, b[10] = k * e + a);
			b[3] = 0;
			b[7] = 0;
			b[11] = 0;
			b[12] = 0;
			b[13] = 0;
			b[14] = 0;
			b[15] = 1;
			return this
		},
		makeRotationFromQuaternion: function(a) {
			return this.compose(Hk,
				a, Ik)
		},
		lookAt: function(a, b, c) {
			var d = this.elements;
			Ea.subVectors(a, b);
			0 === Ea.lengthSq() && (Ea.z = 1);
			Ea.normalize();
			Pb.crossVectors(c, Ea);
			0 === Pb.lengthSq() && (1 === Math.abs(c.z) ? Ea.x += 1E-4 : Ea.z += 1E-4, Ea.normalize(), Pb.crossVectors(c, Ea));
			Pb.normalize();
			zf.crossVectors(Ea, Pb);
			d[0] = Pb.x;
			d[4] = zf.x;
			d[8] = Ea.x;
			d[1] = Pb.y;
			d[5] = zf.y;
			d[9] = Ea.y;
			d[2] = Pb.z;
			d[6] = zf.z;
			d[10] = Ea.z;
			return this
		},
		multiply: function(a, b) {
			return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
				this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
		},
		premultiply: function(a) {
			return this.multiplyMatrices(a, this)
		},
		multiplyMatrices: function(a, b) {
			var c = a.elements,
				d = b.elements;
			b = this.elements;
			a = c[0];
			var e = c[4],
				f = c[8],
				g = c[12],
				h = c[1],
				l = c[5],
				m = c[9],
				k = c[13],
				n = c[2],
				p = c[6],
				r = c[10],
				q = c[14],
				u = c[3],
				v = c[7],
				x = c[11];
			c = c[15];
			var w = d[0],
				y = d[4],
				B = d[8],
				Z = d[12],
				C = d[1],
				A = d[5],
				D = d[9],
				F = d[13],
				G = d[2],
				H = d[6],
				K = d[10],
				L = d[14],
				M = d[3],
				N = d[7],
				O = d[11];
			d = d[15];
			b[0] = a * w + e * C + f * G + g * M;
			b[4] = a * y + e * A + f * H + g * N;
			b[8] = a * B + e * D + f * K +
				g * O;
			b[12] = a * Z + e * F + f * L + g * d;
			b[1] = h * w + l * C + m * G + k * M;
			b[5] = h * y + l * A + m * H + k * N;
			b[9] = h * B + l * D + m * K + k * O;
			b[13] = h * Z + l * F + m * L + k * d;
			b[2] = n * w + p * C + r * G + q * M;
			b[6] = n * y + p * A + r * H + q * N;
			b[10] = n * B + p * D + r * K + q * O;
			b[14] = n * Z + p * F + r * L + q * d;
			b[3] = u * w + v * C + x * G + c * M;
			b[7] = u * y + v * A + x * H + c * N;
			b[11] = u * B + v * D + x * K + c * O;
			b[15] = u * Z + v * F + x * L + c * d;
			return this
		},
		multiplyScalar: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[4] *= a;
			b[8] *= a;
			b[12] *= a;
			b[1] *= a;
			b[5] *= a;
			b[9] *= a;
			b[13] *= a;
			b[2] *= a;
			b[6] *= a;
			b[10] *= a;
			b[14] *= a;
			b[3] *= a;
			b[7] *= a;
			b[11] *= a;
			b[15] *= a;
			return this
		},
		determinant: function() {
			var a =
				this.elements,
				b = a[0],
				c = a[4],
				d = a[8],
				e = a[12],
				f = a[1],
				g = a[5],
				h = a[9],
				l = a[13],
				m = a[2],
				k = a[6],
				n = a[10],
				p = a[14];
			return a[3] * (+e * h * k - d * l * k - e * g * n + c * l * n + d * g * p - c * h * p) + a[7] * (+b * h * p - b * l * n + e * f * n - d * f * p + d * l * m - e * h * m) + a[11] * (+b * l * k - b * g * p - e * f * k + c * f * p + e * g * m - c * l * m) + a[15] * (-d * g * m - b * h * k + b * g * n + d * f * k - c * f * n + c * h * m)
		},
		transpose: function() {
			var a = this.elements;
			var b = a[1];
			a[1] = a[4];
			a[4] = b;
			b = a[2];
			a[2] = a[8];
			a[8] = b;
			b = a[6];
			a[6] = a[9];
			a[9] = b;
			b = a[3];
			a[3] = a[12];
			a[12] = b;
			b = a[7];
			a[7] = a[13];
			a[13] = b;
			b = a[11];
			a[11] = a[14];
			a[14] = b;
			return this
		},
		setPosition: function(a,
			b, c) {
			var d = this.elements;
			a.isVector3 ? (d[12] = a.x, d[13] = a.y, d[14] = a.z) : (d[12] = a, d[13] = b, d[14] = c);
			return this
		},
		getInverse: function(a, b) {
			void 0 !== b && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
			b = this.elements;
			var c = a.elements;
			a = c[0];
			var d = c[1],
				e = c[2],
				f = c[3],
				g = c[4],
				h = c[5],
				l = c[6],
				m = c[7],
				k = c[8],
				n = c[9],
				p = c[10],
				r = c[11],
				q = c[12],
				u = c[13],
				v = c[14];
			c = c[15];
			var x = n * v * m - u * p * m + u * l * r - h * v * r - n * l * c + h * p * c,
				w = q * p * m - k * v * m - q * l * r + g * v * r + k * l * c - g * p * c,
				y = k * u * m - q * n * m + q * h * r - g * u *
				r - k * h * c + g * n * c,
				B = q * n * l - k * u * l - q * h * p + g * u * p + k * h * v - g * n * v,
				A = a * x + d * w + e * y + f * B;
			if (0 === A) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			A = 1 / A;
			b[0] = x * A;
			b[1] = (u * p * f - n * v * f - u * e * r + d * v * r + n * e * c - d * p * c) * A;
			b[2] = (h * v * f - u * l * f + u * e * m - d * v * m - h * e * c + d * l * c) * A;
			b[3] = (n * l * f - h * p * f - n * e * m + d * p * m + h * e * r - d * l * r) * A;
			b[4] = w * A;
			b[5] = (k * v * f - q * p * f + q * e * r - a * v * r - k * e * c + a * p * c) * A;
			b[6] = (q * l * f - g * v * f - q * e * m + a * v * m + g * e * c - a * l * c) * A;
			b[7] = (g * p * f - k * l * f + k * e * m - a * p * m - g * e * r + a * l * r) * A;
			b[8] = y * A;
			b[9] = (q * n * f - k * u * f - q * d * r + a * u * r + k * d * c - a * n * c) * A;
			b[10] = (g * u * f - q * h * f + q * d * m -
				a * u * m - g * d * c + a * h * c) * A;
			b[11] = (k * h * f - g * n * f - k * d * m + a * n * m + g * d * r - a * h * r) * A;
			b[12] = B * A;
			b[13] = (k * u * e - q * n * e + q * d * p - a * u * p - k * d * v + a * n * v) * A;
			b[14] = (q * h * e - g * u * e - q * d * l + a * u * l + g * d * v - a * h * v) * A;
			b[15] = (g * n * e - k * h * e + k * d * l - a * n * l - g * d * p + a * h * p) * A;
			return this
		},
		scale: function(a) {
			var b = this.elements,
				c = a.x,
				d = a.y;
			a = a.z;
			b[0] *= c;
			b[4] *= d;
			b[8] *= a;
			b[1] *= c;
			b[5] *= d;
			b[9] *= a;
			b[2] *= c;
			b[6] *= d;
			b[10] *= a;
			b[3] *= c;
			b[7] *= d;
			b[11] *= a;
			return this
		},
		getMaxScaleOnAxis: function() {
			var a = this.elements;
			return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] *
				a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
		},
		makeTranslation: function(a, b, c) {
			this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
			return this
		},
		makeRotationX: function(a) {
			var b = Math.cos(a);
			a = Math.sin(a);
			this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
			return this
		},
		makeRotationY: function(a) {
			var b = Math.cos(a);
			a = Math.sin(a);
			this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
			return this
		},
		makeRotationZ: function(a) {
			var b = Math.cos(a);
			a = Math.sin(a);
			this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			return this
		},
		makeRotationAxis: function(a,
			b) {
			var c = Math.cos(b);
			b = Math.sin(b);
			var d = 1 - c,
				e = a.x,
				f = a.y;
			a = a.z;
			var g = d * e,
				h = d * f;
			this.set(g * e + c, g * f - b * a, g * a + b * f, 0, g * f + b * a, h * f + c, h * a - b * e, 0, g * a - b * f, h * a + b * e, d * a * a + c, 0, 0, 0, 0, 1);
			return this
		},
		makeScale: function(a, b, c) {
			this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
			return this
		},
		makeShear: function(a, b, c) {
			this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
			return this
		},
		compose: function(a, b, c) {
			var d = this.elements,
				e = b._x,
				f = b._y,
				g = b._z,
				h = b._w,
				l = e + e,
				m = f + f,
				k = g + g;
			b = e * l;
			var n = e * m;
			e *= k;
			var p = f * m;
			f *= k;
			g *= k;
			l *= h;
			m *= h;
			h *= k;
			k = c.x;
			var r =
				c.y;
			c = c.z;
			d[0] = (1 - (p + g)) * k;
			d[1] = (n + h) * k;
			d[2] = (e - m) * k;
			d[3] = 0;
			d[4] = (n - h) * r;
			d[5] = (1 - (b + g)) * r;
			d[6] = (f + l) * r;
			d[7] = 0;
			d[8] = (e + m) * c;
			d[9] = (f - l) * c;
			d[10] = (1 - (b + p)) * c;
			d[11] = 0;
			d[12] = a.x;
			d[13] = a.y;
			d[14] = a.z;
			d[15] = 1;
			return this
		},
		decompose: function(a, b, c) {
			var d = this.elements,
				e = md.set(d[0], d[1], d[2]).length(),
				f = md.set(d[4], d[5], d[6]).length(),
				g = md.set(d[8], d[9], d[10]).length();
			0 > this.determinant() && (e = -e);
			a.x = d[12];
			a.y = d[13];
			a.z = d[14];
			ba.copy(this);
			a = 1 / e;
			d = 1 / f;
			var h = 1 / g;
			ba.elements[0] *= a;
			ba.elements[1] *= a;
			ba.elements[2] *=
				a;
			ba.elements[4] *= d;
			ba.elements[5] *= d;
			ba.elements[6] *= d;
			ba.elements[8] *= h;
			ba.elements[9] *= h;
			ba.elements[10] *= h;
			b.setFromRotationMatrix(ba);
			c.x = e;
			c.y = f;
			c.z = g;
			return this
		},
		makePerspective: function(a, b, c, d, e, f) {
			void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
			var g = this.elements;
			g[0] = 2 * e / (b - a);
			g[4] = 0;
			g[8] = (b + a) / (b - a);
			g[12] = 0;
			g[1] = 0;
			g[5] = 2 * e / (c - d);
			g[9] = (c + d) / (c - d);
			g[13] = 0;
			g[2] = 0;
			g[6] = 0;
			g[10] = -(f + e) / (f - e);
			g[14] = -2 * f * e / (f - e);
			g[3] = 0;
			g[7] = 0;
			g[11] = -1;
			g[15] = 0;
			return this
		},
		makeOrthographic: function(a, b, c, d, e, f) {
			var g = this.elements,
				h = 1 / (b - a),
				l = 1 / (c - d),
				m = 1 / (f - e);
			g[0] = 2 * h;
			g[4] = 0;
			g[8] = 0;
			g[12] = -((b + a) * h);
			g[1] = 0;
			g[5] = 2 * l;
			g[9] = 0;
			g[13] = -((c + d) * l);
			g[2] = 0;
			g[6] = 0;
			g[10] = -2 * m;
			g[14] = -((f + e) * m);
			g[3] = 0;
			g[7] = 0;
			g[11] = 0;
			g[15] = 1;
			return this
		},
		equals: function(a) {
			var b = this.elements;
			a = a.elements;
			for (var c = 0; 16 > c; c++)
				if (b[c] !== a[c]) return !1;
			return !0
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			for (var c = 0; 16 > c; c++) this.elements[c] = a[c + b];
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			var c = this.elements;
			a[b] = c[0];
			a[b + 1] = c[1];
			a[b + 2] = c[2];
			a[b + 3] = c[3];
			a[b + 4] = c[4];
			a[b + 5] = c[5];
			a[b + 6] = c[6];
			a[b + 7] = c[7];
			a[b + 8] = c[8];
			a[b + 9] = c[9];
			a[b + 10] = c[10];
			a[b + 11] = c[11];
			a[b + 12] = c[12];
			a[b + 13] = c[13];
			a[b + 14] = c[14];
			a[b + 15] = c[15];
			return a
		}
	});
	var ui = new N,
		vi = new va;
	Ub.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
	Ub.DefaultOrder = "XYZ";
	Object.defineProperties(Ub.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(a) {
				this._x = a;
				this._onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(a) {
				this._y = a;
				this._onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(a) {
				this._z = a;
				this._onChangeCallback()
			}
		},
		order: {
			get: function() {
				return this._order
			},
			set: function(a) {
				this._order = a;
				this._onChangeCallback()
			}
		}
	});
	Object.assign(Ub.prototype, {
		isEuler: !0,
		set: function(a, b, c, d) {
			this._x = a;
			this._y = b;
			this._z = c;
			this._order = d || this._order;
			this._onChangeCallback();
			return this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._order)
		},
		copy: function(a) {
			this._x = a._x;
			this._y = a._y;
			this._z = a._z;
			this._order = a._order;
			this._onChangeCallback();
			return this
		},
		setFromRotationMatrix: function(a, b, c) {
			var d = O.clamp,
				e = a.elements;
			a = e[0];
			var f = e[4],
				g = e[8],
				h = e[1],
				l = e[5],
				m = e[9],
				k = e[2],
				n = e[6];
			e = e[10];
			b = b || this._order;
			switch (b) {
				case "XYZ":
					this._y = Math.asin(d(g, -1, 1));
					.9999999 > Math.abs(g) ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(n, l), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-d(m, -1, 1));
					.9999999 > Math.abs(m) ? (this._y =
						Math.atan2(g, e), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-k, a), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(d(n, -1, 1));
					.9999999 > Math.abs(n) ? (this._y = Math.atan2(-k, e), this._z = Math.atan2(-f, l)) : (this._y = 0, this._z = Math.atan2(h, a));
					break;
				case "ZYX":
					this._y = Math.asin(-d(k, -1, 1));
					.9999999 > Math.abs(k) ? (this._x = Math.atan2(n, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, l));
					break;
				case "YZX":
					this._z = Math.asin(d(h, -1, 1));
					.9999999 > Math.abs(h) ? (this._x = Math.atan2(-m, l), this._y = Math.atan2(-k,
						a)) : (this._x = 0, this._y = Math.atan2(g, e));
					break;
				case "XZY":
					this._z = Math.asin(-d(f, -1, 1));
					.9999999 > Math.abs(f) ? (this._x = Math.atan2(n, l), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0);
					break;
				default:
					console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + b)
			}
			this._order = b;
			!1 !== c && this._onChangeCallback();
			return this
		},
		setFromQuaternion: function(a, b, c) {
			ui.makeRotationFromQuaternion(a);
			return this.setFromRotationMatrix(ui, b, c)
		},
		setFromVector3: function(a, b) {
			return this.set(a.x,
				a.y, a.z, b || this._order)
		},
		reorder: function(a) {
			vi.setFromEuler(this);
			return this.setFromQuaternion(vi, a)
		},
		equals: function(a) {
			return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
		},
		fromArray: function(a) {
			this._x = a[0];
			this._y = a[1];
			this._z = a[2];
			void 0 !== a[3] && (this._order = a[3]);
			this._onChangeCallback();
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			a[b] = this._x;
			a[b + 1] = this._y;
			a[b + 2] = this._z;
			a[b + 3] = this._order;
			return a
		},
		toVector3: function(a) {
			return a ? a.set(this._x,
				this._y, this._z) : new p(this._x, this._y, this._z)
		},
		_onChange: function(a) {
			this._onChangeCallback = a;
			return this
		},
		_onChangeCallback: function() {}
	});
	Object.assign(De.prototype, {
		set: function(a) {
			this.mask = 1 << a | 0
		},
		enable: function(a) {
			this.mask = this.mask | 1 << a | 0
		},
		enableAll: function() {
			this.mask = -1
		},
		toggle: function(a) {
			this.mask ^= 1 << a | 0
		},
		disable: function(a) {
			this.mask &= ~(1 << a | 0)
		},
		disableAll: function() {
			this.mask = 0
		},
		test: function(a) {
			return 0 !== (this.mask & a.mask)
		}
	});
	var fj = 0,
		wi = new p,
		nd = new va,
		yb = new N,
		Af = new p,
		te = new p,
		Jk = new p,
		Kk = new va,
		xi = new p(1, 0, 0),
		yi = new p(0, 1, 0),
		zi = new p(0, 0, 1),
		Lk = {
			type: "added"
		},
		Mk = {
			type: "removed"
		};
	y.DefaultUp = new p(0, 1, 0);
	y.DefaultMatrixAutoUpdate = !0;
	y.prototype = Object.assign(Object.create(ua.prototype), {
		constructor: y,
		isObject3D: !0,
		onBeforeRender: function() {},
		onAfterRender: function() {},
		applyMatrix4: function(a) {
			this.matrixAutoUpdate && this.updateMatrix();
			this.matrix.premultiply(a);
			this.matrix.decompose(this.position, this.quaternion, this.scale)
		},
		applyQuaternion: function(a) {
			this.quaternion.premultiply(a);
			return this
		},
		setRotationFromAxisAngle: function(a, b) {
			this.quaternion.setFromAxisAngle(a, b)
		},
		setRotationFromEuler: function(a) {
			this.quaternion.setFromEuler(a, !0)
		},
		setRotationFromMatrix: function(a) {
			this.quaternion.setFromRotationMatrix(a)
		},
		setRotationFromQuaternion: function(a) {
			this.quaternion.copy(a)
		},
		rotateOnAxis: function(a, b) {
			nd.setFromAxisAngle(a, b);
			this.quaternion.multiply(nd);
			return this
		},
		rotateOnWorldAxis: function(a, b) {
			nd.setFromAxisAngle(a, b);
			this.quaternion.premultiply(nd);
			return this
		},
		rotateX: function(a) {
			return this.rotateOnAxis(xi,
				a)
		},
		rotateY: function(a) {
			return this.rotateOnAxis(yi, a)
		},
		rotateZ: function(a) {
			return this.rotateOnAxis(zi, a)
		},
		translateOnAxis: function(a, b) {
			wi.copy(a).applyQuaternion(this.quaternion);
			this.position.add(wi.multiplyScalar(b));
			return this
		},
		translateX: function(a) {
			return this.translateOnAxis(xi, a)
		},
		translateY: function(a) {
			return this.translateOnAxis(yi, a)
		},
		translateZ: function(a) {
			return this.translateOnAxis(zi, a)
		},
		localToWorld: function(a) {
			return a.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function(a) {
			return a.applyMatrix4(yb.getInverse(this.matrixWorld))
		},
		lookAt: function(a, b, c) {
			a.isVector3 ? Af.copy(a) : Af.set(a, b, c);
			a = this.parent;
			this.updateWorldMatrix(!0, !1);
			te.setFromMatrixPosition(this.matrixWorld);
			this.isCamera || this.isLight ? yb.lookAt(te, Af, this.up) : yb.lookAt(Af, te, this.up);
			this.quaternion.setFromRotationMatrix(yb);
			a && (yb.extractRotation(a.matrixWorld), nd.setFromRotationMatrix(yb), this.quaternion.premultiply(nd.inverse()))
		},
		add: function(a) {
			if (1 < arguments.length) {
				for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
				return this
			}
			if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.",
				a), this;
			a && a.isObject3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, this.children.push(a), a.dispatchEvent(Lk)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
			return this
		},
		remove: function(a) {
			if (1 < arguments.length) {
				for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);
				return this
			}
			b = this.children.indexOf(a); - 1 !== b && (a.parent = null, this.children.splice(b, 1), a.dispatchEvent(Mk));
			return this
		},
		attach: function(a) {
			this.updateWorldMatrix(!0, !1);
			yb.getInverse(this.matrixWorld);
			null !== a.parent && (a.parent.updateWorldMatrix(!0, !1), yb.multiply(a.parent.matrixWorld));
			a.applyMatrix4(yb);
			a.updateWorldMatrix(!1, !1);
			this.add(a);
			return this
		},
		getObjectById: function(a) {
			return this.getObjectByProperty("id", a)
		},
		getObjectByName: function(a) {
			return this.getObjectByProperty("name", a)
		},
		getObjectByProperty: function(a, b) {
			if (this[a] === b) return this;
			for (var c = 0, d = this.children.length; c < d; c++) {
				var e = this.children[c].getObjectByProperty(a, b);
				if (void 0 !== e) return e
			}
		},
		getWorldPosition: function(a) {
			void 0 ===
				a && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), a = new p);
			this.updateMatrixWorld(!0);
			return a.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function(a) {
			void 0 === a && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), a = new va);
			this.updateMatrixWorld(!0);
			this.matrixWorld.decompose(te, a, Jk);
			return a
		},
		getWorldScale: function(a) {
			void 0 === a && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), a = new p);
			this.updateMatrixWorld(!0);
			this.matrixWorld.decompose(te, Kk, a);
			return a
		},
		getWorldDirection: function(a) {
			void 0 === a && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), a = new p);
			this.updateMatrixWorld(!0);
			var b = this.matrixWorld.elements;
			return a.set(b[8], b[9], b[10]).normalize()
		},
		raycast: function() {},
		traverse: function(a) {
			a(this);
			for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverse(a)
		},
		traverseVisible: function(a) {
			if (!1 !== this.visible) {
				a(this);
				for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverseVisible(a)
			}
		},
		traverseAncestors: function(a) {
			var b = this.parent;
			null !== b && (a(b), b.traverseAncestors(a))
		},
		updateMatrix: function() {
			this.matrix.compose(this.position, this.quaternion, this.scale);
			this.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function(a) {
			this.matrixAutoUpdate && this.updateMatrix();
			if (this.matrixWorldNeedsUpdate || a) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
			for (var b = this.children, c =
					0, d = b.length; c < d; c++) b[c].updateMatrixWorld(a)
		},
		updateWorldMatrix: function(a, b) {
			var c = this.parent;
			!0 === a && null !== c && c.updateWorldMatrix(!0, !1);
			this.matrixAutoUpdate && this.updateMatrix();
			null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
			if (!0 === b)
				for (a = this.children, b = 0, c = a.length; b < c; b++) a[b].updateWorldMatrix(!1, !0)
		},
		toJSON: function(a) {
			function b(b, c) {
				void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a));
				return c.uuid
			}

			function c(a) {
				var b = [],
					c;
				for (c in a) {
					var d = a[c];
					delete d.metadata;
					b.push(d)
				}
				return b
			}
			var d = void 0 === a || "string" === typeof a,
				e = {};
			d && (a = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {}
			}, e.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			var f = {};
			f.uuid = this.uuid;
			f.type = this.type;
			"" !== this.name && (f.name = this.name);
			!0 === this.castShadow && (f.castShadow = !0);
			!0 === this.receiveShadow && (f.receiveShadow = !0);
			!1 === this.visible && (f.visible = !1);
			!1 === this.frustumCulled && (f.frustumCulled = !1);
			0 !== this.renderOrder &&
				(f.renderOrder = this.renderOrder);
			"{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
			f.layers = this.layers.mask;
			f.matrix = this.matrix.toArray();
			!1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1);
			this.isInstancedMesh && (f.type = "InstancedMesh", f.count = this.count, f.instanceMatrix = this.instanceMatrix.toJSON());
			if (this.isMesh || this.isLine || this.isPoints) {
				f.geometry = b(a.geometries, this.geometry);
				var g = this.geometry.parameters;
				if (void 0 !== g && void 0 !== g.shapes)
					if (g = g.shapes, Array.isArray(g))
						for (var h =
								0, l = g.length; h < l; h++) b(a.shapes, g[h]);
					else b(a.shapes, g)
			}
			if (void 0 !== this.material)
				if (Array.isArray(this.material)) {
					g = [];
					h = 0;
					for (l = this.material.length; h < l; h++) g.push(b(a.materials, this.material[h]));
					f.material = g
				} else f.material = b(a.materials, this.material);
			if (0 < this.children.length)
				for (f.children = [], h = 0; h < this.children.length; h++) f.children.push(this.children[h].toJSON(a).object);
			if (d) {
				d = c(a.geometries);
				h = c(a.materials);
				l = c(a.textures);
				var m = c(a.images);
				g = c(a.shapes);
				0 < d.length && (e.geometries = d);
				0 < h.length && (e.materials = h);
				0 < l.length && (e.textures = l);
				0 < m.length && (e.images = m);
				0 < g.length && (e.shapes = g)
			}
			e.object = f;
			return e
		},
		clone: function(a) {
			return (new this.constructor).copy(this, a)
		},
		copy: function(a, b) {
			void 0 === b && (b = !0);
			this.name = a.name;
			this.up.copy(a.up);
			this.position.copy(a.position);
			this.quaternion.copy(a.quaternion);
			this.scale.copy(a.scale);
			this.matrix.copy(a.matrix);
			this.matrixWorld.copy(a.matrixWorld);
			this.matrixAutoUpdate = a.matrixAutoUpdate;
			this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
			this.layers.mask = a.layers.mask;
			this.visible = a.visible;
			this.castShadow = a.castShadow;
			this.receiveShadow = a.receiveShadow;
			this.frustumCulled = a.frustumCulled;
			this.renderOrder = a.renderOrder;
			this.userData = JSON.parse(JSON.stringify(a.userData));
			if (!0 === b)
				for (b = 0; b < a.children.length; b++) this.add(a.children[b].clone());
			return this
		}
	});
	zc.prototype = Object.assign(Object.create(y.prototype), {
		constructor: zc,
		isScene: !0,
		copy: function(a, b) {
			y.prototype.copy.call(this, a, b);
			null !== a.background && (this.background = a.background.clone());
			null !== a.environment && (this.environment = a.environment.clone());
			null !== a.fog && (this.fog = a.fog.clone());
			null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
			this.autoUpdate = a.autoUpdate;
			this.matrixAutoUpdate = a.matrixAutoUpdate;
			return this
		},
		toJSON: function(a) {
			var b = y.prototype.toJSON.call(this, a);
			null !== this.background && (b.object.background = this.background.toJSON(a));
			null !== this.environment && (b.object.environment = this.environment.toJSON(a));
			null !== this.fog && (b.object.fog = this.fog.toJSON());
			return b
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	});
	var zb = [new p, new p, new p, new p, new p, new p, new p, new p],
		ue = new p,
		Ug = new Va,
		od = new p,
		pd = new p,
		qd = new p,
		Qb = new p,
		Rb = new p,
		qc = new p,
		ve = new p,
		Bf = new p,
		Cf = new p,
		Vb = new p;
	Object.assign(Va.prototype, {
		isBox3: !0,
		set: function(a, b) {
			this.min.copy(a);
			this.max.copy(b);
			return this
		},
		setFromArray: function(a) {
			for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.length; h < l; h += 3) {
				var m = a[h],
					k = a[h + 1],
					n = a[h + 2];
				m < b && (b =
					m);
				k < c && (c = k);
				n < d && (d = n);
				m > e && (e = m);
				k > f && (f = k);
				n > g && (g = n)
			}
			this.min.set(b, c, d);
			this.max.set(e, f, g);
			return this
		},
		setFromBufferAttribute: function(a) {
			for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.count; h < l; h++) {
				var m = a.getX(h),
					k = a.getY(h),
					n = a.getZ(h);
				m < b && (b = m);
				k < c && (c = k);
				n < d && (d = n);
				m > e && (e = m);
				k > f && (f = k);
				n > g && (g = n)
			}
			this.min.set(b, c, d);
			this.max.set(e, f, g);
			return this
		},
		setFromPoints: function(a) {
			this.makeEmpty();
			for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
			return this
		},
		setFromCenterAndSize: function(a, b) {
			b = ue.copy(b).multiplyScalar(.5);
			this.min.copy(a).sub(b);
			this.max.copy(a).add(b);
			return this
		},
		setFromObject: function(a) {
			this.makeEmpty();
			return this.expandByObject(a)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.min.copy(a.min);
			this.max.copy(a.max);
			return this
		},
		makeEmpty: function() {
			this.min.x = this.min.y = this.min.z = Infinity;
			this.max.x = this.max.y = this.max.z = -Infinity;
			return this
		},
		isEmpty: function() {
			return this.max.x <
				this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		},
		getCenter: function(a) {
			void 0 === a && (console.warn("THREE.Box3: .getCenter() target is now required"), a = new p);
			return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		getSize: function(a) {
			void 0 === a && (console.warn("THREE.Box3: .getSize() target is now required"), a = new p);
			return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min)
		},
		expandByPoint: function(a) {
			this.min.min(a);
			this.max.max(a);
			return this
		},
		expandByVector: function(a) {
			this.min.sub(a);
			this.max.add(a);
			return this
		},
		expandByScalar: function(a) {
			this.min.addScalar(-a);
			this.max.addScalar(a);
			return this
		},
		expandByObject: function(a) {
			a.updateWorldMatrix(!1, !1);
			var b = a.geometry;
			void 0 !== b && (null === b.boundingBox && b.computeBoundingBox(), Ug.copy(b.boundingBox), Ug.applyMatrix4(a.matrixWorld), this.union(Ug));
			a = a.children;
			b = 0;
			for (var c = a.length; b < c; b++) this.expandByObject(a[b]);
			return this
		},
		containsPoint: function(a) {
			return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z ||
				a.z > this.max.z ? !1 : !0
		},
		containsBox: function(a) {
			return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z
		},
		getParameter: function(a, b) {
			void 0 === b && (console.warn("THREE.Box3: .getParameter() target is now required"), b = new p);
			return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
		},
		intersectsBox: function(a) {
			return a.max.x < this.min.x || a.min.x > this.max.x ||
				a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
		},
		intersectsSphere: function(a) {
			this.clampPoint(a.center, ue);
			return ue.distanceToSquared(a.center) <= a.radius * a.radius
		},
		intersectsPlane: function(a) {
			if (0 < a.normal.x) {
				var b = a.normal.x * this.min.x;
				var c = a.normal.x * this.max.x
			} else b = a.normal.x * this.max.x, c = a.normal.x * this.min.x;
			0 < a.normal.y ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y);
			0 < a.normal.z ? (b += a.normal.z *
				this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z);
			return b <= -a.constant && c >= -a.constant
		},
		intersectsTriangle: function(a) {
			if (this.isEmpty()) return !1;
			this.getCenter(ve);
			Bf.subVectors(this.max, ve);
			od.subVectors(a.a, ve);
			pd.subVectors(a.b, ve);
			qd.subVectors(a.c, ve);
			Qb.subVectors(pd, od);
			Rb.subVectors(qd, pd);
			qc.subVectors(od, qd);
			a = [0, -Qb.z, Qb.y, 0, -Rb.z, Rb.y, 0, -qc.z, qc.y, Qb.z, 0, -Qb.x, Rb.z, 0, -Rb.x, qc.z, 0, -qc.x, -Qb.y, Qb.x, 0, -Rb.y, Rb.x, 0, -qc.y, qc.x, 0];
			if (!Yf(a, od, pd, qd, Bf)) return !1;
			a = [1, 0, 0, 0, 1, 0, 0, 0, 1];
			if (!Yf(a, od, pd, qd, Bf)) return !1;
			Cf.crossVectors(Qb, Rb);
			a = [Cf.x, Cf.y, Cf.z];
			return Yf(a, od, pd, qd, Bf)
		},
		clampPoint: function(a, b) {
			void 0 === b && (console.warn("THREE.Box3: .clampPoint() target is now required"), b = new p);
			return b.copy(a).clamp(this.min, this.max)
		},
		distanceToPoint: function(a) {
			return ue.copy(a).clamp(this.min, this.max).sub(a).length()
		},
		getBoundingSphere: function(a) {
			void 0 === a && console.error("THREE.Box3: .getBoundingSphere() target is now required");
			this.getCenter(a.center);
			a.radius = .5 * this.getSize(ue).length();
			return a
		},
		intersect: function(a) {
			this.min.max(a.min);
			this.max.min(a.max);
			this.isEmpty() && this.makeEmpty();
			return this
		},
		union: function(a) {
			this.min.min(a.min);
			this.max.max(a.max);
			return this
		},
		applyMatrix4: function(a) {
			if (this.isEmpty()) return this;
			zb[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(a);
			zb[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(a);
			zb[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(a);
			zb[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(a);
			zb[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(a);
			zb[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(a);
			zb[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(a);
			zb[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(a);
			this.setFromPoints(zb);
			return this
		},
		translate: function(a) {
			this.min.add(a);
			this.max.add(a);
			return this
		},
		equals: function(a) {
			return a.min.equals(this.min) && a.max.equals(this.max)
		}
	});
	var Nk = new Va;
	Object.assign(eb.prototype, {
		set: function(a, b) {
			this.center.copy(a);
			this.radius =
				b;
			return this
		},
		setFromPoints: function(a, b) {
			var c = this.center;
			void 0 !== b ? c.copy(b) : Nk.setFromPoints(a).getCenter(c);
			for (var d = b = 0, e = a.length; d < e; d++) b = Math.max(b, c.distanceToSquared(a[d]));
			this.radius = Math.sqrt(b);
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.center.copy(a.center);
			this.radius = a.radius;
			return this
		},
		isEmpty: function() {
			return 0 > this.radius
		},
		makeEmpty: function() {
			this.center.set(0, 0, 0);
			this.radius = -1;
			return this
		},
		containsPoint: function(a) {
			return a.distanceToSquared(this.center) <=
				this.radius * this.radius
		},
		distanceToPoint: function(a) {
			return a.distanceTo(this.center) - this.radius
		},
		intersectsSphere: function(a) {
			var b = this.radius + a.radius;
			return a.center.distanceToSquared(this.center) <= b * b
		},
		intersectsBox: function(a) {
			return a.intersectsSphere(this)
		},
		intersectsPlane: function(a) {
			return Math.abs(a.distanceToPoint(this.center)) <= this.radius
		},
		clampPoint: function(a, b) {
			var c = this.center.distanceToSquared(a);
			void 0 === b && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
				b = new p);
			b.copy(a);
			c > this.radius * this.radius && (b.sub(this.center).normalize(), b.multiplyScalar(this.radius).add(this.center));
			return b
		},
		getBoundingBox: function(a) {
			void 0 === a && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), a = new Va);
			if (this.isEmpty()) return a.makeEmpty(), a;
			a.set(this.center, this.center);
			a.expandByScalar(this.radius);
			return a
		},
		applyMatrix4: function(a) {
			this.center.applyMatrix4(a);
			this.radius *= a.getMaxScaleOnAxis();
			return this
		},
		translate: function(a) {
			this.center.add(a);
			return this
		},
		equals: function(a) {
			return a.center.equals(this.center) && a.radius === this.radius
		}
	});
	var Ab = new p,
		Vg = new p,
		Df = new p,
		Sb = new p,
		Wg = new p,
		Ef = new p,
		Xg = new p;
	Object.assign(Wb.prototype, {
		set: function(a, b) {
			this.origin.copy(a);
			this.direction.copy(b);
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.origin.copy(a.origin);
			this.direction.copy(a.direction);
			return this
		},
		at: function(a, b) {
			void 0 === b && (console.warn("THREE.Ray: .at() target is now required"), b = new p);
			return b.copy(this.direction).multiplyScalar(a).add(this.origin)
		},
		lookAt: function(a) {
			this.direction.copy(a).sub(this.origin).normalize();
			return this
		},
		recast: function(a) {
			this.origin.copy(this.at(a, Ab));
			return this
		},
		closestPointToPoint: function(a, b) {
			void 0 === b && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), b = new p);
			b.subVectors(a, this.origin);
			a = b.dot(this.direction);
			return 0 > a ? b.copy(this.origin) : b.copy(this.direction).multiplyScalar(a).add(this.origin)
		},
		distanceToPoint: function(a) {
			return Math.sqrt(this.distanceSqToPoint(a))
		},
		distanceSqToPoint: function(a) {
			var b = Ab.subVectors(a, this.origin).dot(this.direction);
			if (0 > b) return this.origin.distanceToSquared(a);
			Ab.copy(this.direction).multiplyScalar(b).add(this.origin);
			return Ab.distanceToSquared(a)
		},
		distanceSqToSegment: function(a, b, c, d) {
			Vg.copy(a).add(b).multiplyScalar(.5);
			Df.copy(b).sub(a).normalize();
			Sb.copy(this.origin).sub(Vg);
			var e = .5 * a.distanceTo(b),
				f = -this.direction.dot(Df),
				g = Sb.dot(this.direction),
				h = -Sb.dot(Df),
				l = Sb.lengthSq(),
				m = Math.abs(1 - f * f);
			if (0 < m) {
				a = f * h - g;
				b = f *
					g - h;
				var k = e * m;
				0 <= a ? b >= -k ? b <= k ? (e = 1 / m, a *= e, b *= e, f = a * (a + f * b + 2 * g) + b * (f * a + b + 2 * h) + l) : (b = e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : (b = -e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : b <= -k ? (a = Math.max(0, -(-f * e + g)), b = 0 < a ? -e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l) : b <= k ? (a = 0, b = Math.min(Math.max(-e, -h), e), f = b * (b + 2 * h) + l) : (a = Math.max(0, -(f * e + g)), b = 0 < a ? e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l)
			} else b = 0 < f ? -e : e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l;
			c && c.copy(this.direction).multiplyScalar(a).add(this.origin);
			d && d.copy(Df).multiplyScalar(b).add(Vg);
			return f
		},
		intersectSphere: function(a, b) {
			Ab.subVectors(a.center, this.origin);
			var c = Ab.dot(this.direction),
				d = Ab.dot(Ab) - c * c;
			a = a.radius * a.radius;
			if (d > a) return null;
			a = Math.sqrt(a - d);
			d = c - a;
			c += a;
			return 0 > d && 0 > c ? null : 0 > d ? this.at(c, b) : this.at(d, b)
		},
		intersectsSphere: function(a) {
			return this.distanceSqToPoint(a.center) <= a.radius * a.radius
		},
		distanceToPlane: function(a) {
			var b = a.normal.dot(this.direction);
			if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;
			a = -(this.origin.dot(a.normal) +
				a.constant) / b;
			return 0 <= a ? a : null
		},
		intersectPlane: function(a, b) {
			a = this.distanceToPlane(a);
			return null === a ? null : this.at(a, b)
		},
		intersectsPlane: function(a) {
			var b = a.distanceToPoint(this.origin);
			return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
		},
		intersectBox: function(a, b) {
			var c = 1 / this.direction.x;
			var d = 1 / this.direction.y;
			var e = 1 / this.direction.z,
				f = this.origin;
			if (0 <= c) {
				var g = (a.min.x - f.x) * c;
				c *= a.max.x - f.x
			} else g = (a.max.x - f.x) * c, c *= a.min.x - f.x;
			if (0 <= d) {
				var h = (a.min.y - f.y) * d;
				d *= a.max.y - f.y
			} else h = (a.max.y -
				f.y) * d, d *= a.min.y - f.y;
			if (g > d || h > c) return null;
			if (h > g || g !== g) g = h;
			if (d < c || c !== c) c = d;
			0 <= e ? (h = (a.min.z - f.z) * e, a = (a.max.z - f.z) * e) : (h = (a.max.z - f.z) * e, a = (a.min.z - f.z) * e);
			if (g > a || h > c) return null;
			if (h > g || g !== g) g = h;
			if (a < c || c !== c) c = a;
			return 0 > c ? null : this.at(0 <= g ? g : c, b)
		},
		intersectsBox: function(a) {
			return null !== this.intersectBox(a, Ab)
		},
		intersectTriangle: function(a, b, c, d, e) {
			Wg.subVectors(b, a);
			Ef.subVectors(c, a);
			Xg.crossVectors(Wg, Ef);
			b = this.direction.dot(Xg);
			if (0 < b) {
				if (d) return null;
				d = 1
			} else if (0 > b) d = -1, b = -b;
			else return null;
			Sb.subVectors(this.origin, a);
			a = d * this.direction.dot(Ef.crossVectors(Sb, Ef));
			if (0 > a) return null;
			c = d * this.direction.dot(Wg.cross(Sb));
			if (0 > c || a + c > b) return null;
			a = -d * Sb.dot(Xg);
			return 0 > a ? null : this.at(a / b, e)
		},
		applyMatrix4: function(a) {
			this.origin.applyMatrix4(a);
			this.direction.transformDirection(a);
			return this
		},
		equals: function(a) {
			return a.origin.equals(this.origin) && a.direction.equals(this.direction)
		}
	});
	var Yg = new p,
		Ok = new p,
		Pk = new ya;
	Object.assign(Wa.prototype, {
		isPlane: !0,
		set: function(a, b) {
			this.normal.copy(a);
			this.constant = b;
			return this
		},
		setComponents: function(a, b, c, d) {
			this.normal.set(a, b, c);
			this.constant = d;
			return this
		},
		setFromNormalAndCoplanarPoint: function(a, b) {
			this.normal.copy(a);
			this.constant = -b.dot(this.normal);
			return this
		},
		setFromCoplanarPoints: function(a, b, c) {
			b = Yg.subVectors(c, b).cross(Ok.subVectors(a, b)).normalize();
			this.setFromNormalAndCoplanarPoint(b, a);
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.normal.copy(a.normal);
			this.constant = a.constant;
			return this
		},
		normalize: function() {
			var a = 1 / this.normal.length();
			this.normal.multiplyScalar(a);
			this.constant *= a;
			return this
		},
		negate: function() {
			this.constant *= -1;
			this.normal.negate();
			return this
		},
		distanceToPoint: function(a) {
			return this.normal.dot(a) + this.constant
		},
		distanceToSphere: function(a) {
			return this.distanceToPoint(a.center) - a.radius
		},
		projectPoint: function(a, b) {
			void 0 === b && (console.warn("THREE.Plane: .projectPoint() target is now required"), b = new p);
			return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)
		},
		intersectLine: function(a, b) {
			void 0 === b && (console.warn("THREE.Plane: .intersectLine() target is now required"), b = new p);
			var c = a.delta(Yg),
				d = this.normal.dot(c);
			if (0 === d) {
				if (0 === this.distanceToPoint(a.start)) return b.copy(a.start)
			} else if (d = -(a.start.dot(this.normal) + this.constant) / d, !(0 > d || 1 < d)) return b.copy(c).multiplyScalar(d).add(a.start)
		},
		intersectsLine: function(a) {
			var b = this.distanceToPoint(a.start);
			a = this.distanceToPoint(a.end);
			return 0 > b && 0 < a || 0 > a && 0 < b
		},
		intersectsBox: function(a) {
			return a.intersectsPlane(this)
		},
		intersectsSphere: function(a) {
			return a.intersectsPlane(this)
		},
		coplanarPoint: function(a) {
			void 0 === a && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), a = new p);
			return a.copy(this.normal).multiplyScalar(-this.constant)
		},
		applyMatrix4: function(a, b) {
			b = b || Pk.getNormalMatrix(a);
			a = this.coplanarPoint(Yg).applyMatrix4(a);
			b = this.normal.applyMatrix3(b).normalize();
			this.constant = -a.dot(b);
			return this
		},
		translate: function(a) {
			this.constant -= a.dot(this.normal);
			return this
		},
		equals: function(a) {
			return a.normal.equals(this.normal) &&
				a.constant === this.constant
		}
	});
	var cb = new p,
		Bb = new p,
		Zg = new p,
		Cb = new p,
		rd = new p,
		sd = new p,
		Ai = new p,
		$g = new p,
		ah = new p,
		bh = new p;
	Object.assign(pa, {
		getNormal: function(a, b, c, d) {
			void 0 === d && (console.warn("THREE.Triangle: .getNormal() target is now required"), d = new p);
			d.subVectors(c, b);
			cb.subVectors(a, b);
			d.cross(cb);
			a = d.lengthSq();
			return 0 < a ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0)
		},
		getBarycoord: function(a, b, c, d, e) {
			cb.subVectors(d, b);
			Bb.subVectors(c, b);
			Zg.subVectors(a, b);
			a = cb.dot(cb);
			b = cb.dot(Bb);
			c = cb.dot(Zg);
			var f = Bb.dot(Bb);
			d = Bb.dot(Zg);
			var g = a * f - b * b;
			void 0 === e && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), e = new p);
			if (0 === g) return e.set(-2, -1, -1);
			g = 1 / g;
			f = (f * c - b * d) * g;
			a = (a * d - b * c) * g;
			return e.set(1 - f - a, a, f)
		},
		containsPoint: function(a, b, c, d) {
			pa.getBarycoord(a, b, c, d, Cb);
			return 0 <= Cb.x && 0 <= Cb.y && 1 >= Cb.x + Cb.y
		},
		getUV: function(a, b, c, d, e, f, g, h) {
			this.getBarycoord(a, b, c, d, Cb);
			h.set(0, 0);
			h.addScaledVector(e, Cb.x);
			h.addScaledVector(f, Cb.y);
			h.addScaledVector(g, Cb.z);
			return h
		},
		isFrontFacing: function(a,
			b, c, d) {
			cb.subVectors(c, b);
			Bb.subVectors(a, b);
			return 0 > cb.cross(Bb).dot(d) ? !0 : !1
		}
	});
	Object.assign(pa.prototype, {
		set: function(a, b, c) {
			this.a.copy(a);
			this.b.copy(b);
			this.c.copy(c);
			return this
		},
		setFromPointsAndIndices: function(a, b, c, d) {
			this.a.copy(a[b]);
			this.b.copy(a[c]);
			this.c.copy(a[d]);
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.a.copy(a.a);
			this.b.copy(a.b);
			this.c.copy(a.c);
			return this
		},
		getArea: function() {
			cb.subVectors(this.c, this.b);
			Bb.subVectors(this.a,
				this.b);
			return .5 * cb.cross(Bb).length()
		},
		getMidpoint: function(a) {
			void 0 === a && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), a = new p);
			return a.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
		},
		getNormal: function(a) {
			return pa.getNormal(this.a, this.b, this.c, a)
		},
		getPlane: function(a) {
			void 0 === a && (console.warn("THREE.Triangle: .getPlane() target is now required"), a = new Wa);
			return a.setFromCoplanarPoints(this.a, this.b, this.c)
		},
		getBarycoord: function(a, b) {
			return pa.getBarycoord(a,
				this.a, this.b, this.c, b)
		},
		getUV: function(a, b, c, d, e) {
			return pa.getUV(a, this.a, this.b, this.c, b, c, d, e)
		},
		containsPoint: function(a) {
			return pa.containsPoint(a, this.a, this.b, this.c)
		},
		isFrontFacing: function(a) {
			return pa.isFrontFacing(this.a, this.b, this.c, a)
		},
		intersectsBox: function(a) {
			return a.intersectsTriangle(this)
		},
		closestPointToPoint: function(a, b) {
			void 0 === b && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), b = new p);
			var c = this.a,
				d = this.b,
				e = this.c;
			rd.subVectors(d, c);
			sd.subVectors(e,
				c);
			$g.subVectors(a, c);
			var f = rd.dot($g),
				g = sd.dot($g);
			if (0 >= f && 0 >= g) return b.copy(c);
			ah.subVectors(a, d);
			var h = rd.dot(ah),
				l = sd.dot(ah);
			if (0 <= h && l <= h) return b.copy(d);
			var m = f * l - h * g;
			if (0 >= m && 0 <= f && 0 >= h) return d = f / (f - h), b.copy(c).addScaledVector(rd, d);
			bh.subVectors(a, e);
			a = rd.dot(bh);
			var k = sd.dot(bh);
			if (0 <= k && a <= k) return b.copy(e);
			f = a * g - f * k;
			if (0 >= f && 0 <= g && 0 >= k) return m = g / (g - k), b.copy(c).addScaledVector(sd, m);
			g = h * k - a * l;
			if (0 >= g && 0 <= l - h && 0 <= a - k) return Ai.subVectors(e, d), m = (l - h) / (l - h + (a - k)), b.copy(d).addScaledVector(Ai,
				m);
			e = 1 / (g + f + m);
			d = f * e;
			m *= e;
			return b.copy(c).addScaledVector(rd, d).addScaledVector(sd, m)
		},
		equals: function(a) {
			return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
		}
	});
	var Bi = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		},
		Fa = {
			h: 0,
			s: 0,
			l: 0
		},
		Ff = {
			h: 0,
			s: 0,
			l: 0
		};
	Object.assign(D.prototype, {
		isColor: !0,
		r: 1,
		g: 1,
		b: 1,
		set: function(a) {
			a && a.isColor ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" ===
				typeof a && this.setStyle(a);
			return this
		},
		setScalar: function(a) {
			this.b = this.g = this.r = a;
			return this
		},
		setHex: function(a) {
			a = Math.floor(a);
			this.r = (a >> 16 & 255) / 255;
			this.g = (a >> 8 & 255) / 255;
			this.b = (a & 255) / 255;
			return this
		},
		setRGB: function(a, b, c) {
			this.r = a;
			this.g = b;
			this.b = c;
			return this
		},
		setHSL: function(a, b, c) {
			a = O.euclideanModulo(a, 1);
			b = O.clamp(b, 0, 1);
			c = O.clamp(c, 0, 1);
			0 === b ? this.r = this.g = this.b = c : (b = .5 >= c ? c * (1 + b) : c + b - c * b, c = 2 * c - b, this.r = Zf(c, b, a + 1 / 3), this.g = Zf(c, b, a), this.b = Zf(c, b, a - 1 / 3));
			return this
		},
		setStyle: function(a) {
			function b(b) {
				void 0 !==
					b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
			}
			var c;
			if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
				var d = c[2];
				switch (c[1]) {
					case "rgb":
					case "rgba":
						if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this;
						if (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r =
							Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[5]), this;
						break;
					case "hsl":
					case "hsla":
						if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
							d = parseFloat(c[1]) / 360;
							var e = parseInt(c[2], 10) / 100,
								f = parseInt(c[3], 10) / 100;
							b(c[5]);
							return this.setHSL(d, e, f)
						}
				}
			} else if (c = /^#([A-Fa-f0-9]+)$/.exec(a)) {
				c = c[1];
				d = c.length;
				if (3 === d) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) +
					c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
				if (6 === d) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
			}
			return a && 0 < a.length ? this.setColorName(a) : this
		},
		setColorName: function(a) {
			var b = Bi[a];
			void 0 !== b ? this.setHex(b) : console.warn("THREE.Color: Unknown color " + a);
			return this
		},
		clone: function() {
			return new this.constructor(this.r, this.g, this.b)
		},
		copy: function(a) {
			this.r = a.r;
			this.g = a.g;
			this.b = a.b;
			return this
		},
		copyGammaToLinear: function(a, b) {
			void 0 === b && (b = 2);
			this.r = Math.pow(a.r, b);
			this.g = Math.pow(a.g, b);
			this.b = Math.pow(a.b, b);
			return this
		},
		copyLinearToGamma: function(a, b) {
			void 0 === b && (b = 2);
			b = 0 < b ? 1 / b : 1;
			this.r = Math.pow(a.r, b);
			this.g = Math.pow(a.g, b);
			this.b = Math.pow(a.b, b);
			return this
		},
		convertGammaToLinear: function(a) {
			this.copyGammaToLinear(this, a);
			return this
		},
		convertLinearToGamma: function(a) {
			this.copyLinearToGamma(this, a);
			return this
		},
		copySRGBToLinear: function(a) {
			this.r =
				$f(a.r);
			this.g = $f(a.g);
			this.b = $f(a.b);
			return this
		},
		copyLinearToSRGB: function(a) {
			this.r = ag(a.r);
			this.g = ag(a.g);
			this.b = ag(a.b);
			return this
		},
		convertSRGBToLinear: function() {
			this.copySRGBToLinear(this);
			return this
		},
		convertLinearToSRGB: function() {
			this.copyLinearToSRGB(this);
			return this
		},
		getHex: function() {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		},
		getHexString: function() {
			return ("000000" + this.getHex().toString(16)).slice(-6)
		},
		getHSL: function(a) {
			void 0 === a && (console.warn("THREE.Color: .getHSL() target is now required"),
				a = {
					h: 0,
					s: 0,
					l: 0
				});
			var b = this.r,
				c = this.g,
				d = this.b,
				e = Math.max(b, c, d),
				f = Math.min(b, c, d),
				g, h = (f + e) / 2;
			if (f === e) f = g = 0;
			else {
				var l = e - f;
				f = .5 >= h ? l / (e + f) : l / (2 - e - f);
				switch (e) {
					case b:
						g = (c - d) / l + (c < d ? 6 : 0);
						break;
					case c:
						g = (d - b) / l + 2;
						break;
					case d:
						g = (b - c) / l + 4
				}
				g /= 6
			}
			a.h = g;
			a.s = f;
			a.l = h;
			return a
		},
		getStyle: function() {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
		},
		offsetHSL: function(a, b, c) {
			this.getHSL(Fa);
			Fa.h += a;
			Fa.s += b;
			Fa.l += c;
			this.setHSL(Fa.h, Fa.s, Fa.l);
			return this
		},
		add: function(a) {
			this.r += a.r;
			this.g +=
				a.g;
			this.b += a.b;
			return this
		},
		addColors: function(a, b) {
			this.r = a.r + b.r;
			this.g = a.g + b.g;
			this.b = a.b + b.b;
			return this
		},
		addScalar: function(a) {
			this.r += a;
			this.g += a;
			this.b += a;
			return this
		},
		sub: function(a) {
			this.r = Math.max(0, this.r - a.r);
			this.g = Math.max(0, this.g - a.g);
			this.b = Math.max(0, this.b - a.b);
			return this
		},
		multiply: function(a) {
			this.r *= a.r;
			this.g *= a.g;
			this.b *= a.b;
			return this
		},
		multiplyScalar: function(a) {
			this.r *= a;
			this.g *= a;
			this.b *= a;
			return this
		},
		lerp: function(a, b) {
			this.r += (a.r - this.r) * b;
			this.g += (a.g - this.g) * b;
			this.b +=
				(a.b - this.b) * b;
			return this
		},
		lerpHSL: function(a, b) {
			this.getHSL(Fa);
			a.getHSL(Ff);
			a = O.lerp(Fa.h, Ff.h, b);
			var c = O.lerp(Fa.s, Ff.s, b);
			b = O.lerp(Fa.l, Ff.l, b);
			this.setHSL(a, c, b);
			return this
		},
		equals: function(a) {
			return a.r === this.r && a.g === this.g && a.b === this.b
		},
		fromArray: function(a, b) {
			void 0 === b && (b = 0);
			this.r = a[b];
			this.g = a[b + 1];
			this.b = a[b + 2];
			return this
		},
		toArray: function(a, b) {
			void 0 === a && (a = []);
			void 0 === b && (b = 0);
			a[b] = this.r;
			a[b + 1] = this.g;
			a[b + 2] = this.b;
			return a
		},
		toJSON: function() {
			return this.getHex()
		}
	});
	D.NAMES =
		Bi;
	Object.assign(Ac.prototype, {
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.a = a.a;
			this.b = a.b;
			this.c = a.c;
			this.normal.copy(a.normal);
			this.color.copy(a.color);
			this.materialIndex = a.materialIndex;
			for (var b = 0, c = a.vertexNormals.length; b < c; b++) this.vertexNormals[b] = a.vertexNormals[b].clone();
			b = 0;
			for (c = a.vertexColors.length; b < c; b++) this.vertexColors[b] = a.vertexColors[b].clone();
			return this
		}
	});
	var gj = 0;
	K.prototype = Object.assign(Object.create(ua.prototype), {
		constructor: K,
		isMaterial: !0,
		onBeforeCompile: function() {},
		setValues: function(a) {
			if (void 0 !== a)
				for (var b in a) {
					var c = a[b];
					if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
					else if ("shading" === b) console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === c ? !0 : !1;
					else {
						var d = this[b];
						void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] =
							c
					}
				}
		},
		toJSON: function(a) {
			function b(a) {
				var b = [],
					c;
				for (c in a) {
					var d = a[c];
					delete d.metadata;
					b.push(d)
				}
				return b
			}
			var c = void 0 === a || "string" === typeof a;
			c && (a = {
				textures: {},
				images: {}
			});
			var d = {
				metadata: {
					version: 4.5,
					type: "Material",
					generator: "Material.toJSON"
				}
			};
			d.uuid = this.uuid;
			d.type = this.type;
			"" !== this.name && (d.name = this.name);
			this.color && this.color.isColor && (d.color = this.color.getHex());
			void 0 !== this.roughness && (d.roughness = this.roughness);
			void 0 !== this.metalness && (d.metalness = this.metalness);
			this.sheen &&
				this.sheen.isColor && (d.sheen = this.sheen.getHex());
			this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex());
			this.emissiveIntensity && 1 !== this.emissiveIntensity && (d.emissiveIntensity = this.emissiveIntensity);
			this.specular && this.specular.isColor && (d.specular = this.specular.getHex());
			void 0 !== this.shininess && (d.shininess = this.shininess);
			void 0 !== this.clearcoat && (d.clearcoat = this.clearcoat);
			void 0 !== this.clearcoatRoughness && (d.clearcoatRoughness = this.clearcoatRoughness);
			this.clearcoatMap &&
				this.clearcoatMap.isTexture && (d.clearcoatMap = this.clearcoatMap.toJSON(a).uuid);
			this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (d.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(a).uuid);
			this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (d.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a).uuid, d.clearcoatNormalScale = this.clearcoatNormalScale.toArray());
			this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
			this.matcap && this.matcap.isTexture && (d.matcap =
				this.matcap.toJSON(a).uuid);
			this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
			this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid);
			this.aoMap && this.aoMap.isTexture && (d.aoMap = this.aoMap.toJSON(a).uuid, d.aoMapIntensity = this.aoMapIntensity);
			this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale);
			this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalMapType =
				this.normalMapType, d.normalScale = this.normalScale.toArray());
			this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias);
			this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
			this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
			this.emissiveMap && this.emissiveMap.isTexture && (d.emissiveMap =
				this.emissiveMap.toJSON(a).uuid);
			this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid);
			this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity, d.refractionRatio = this.refractionRatio, void 0 !== this.combine && (d.combine = this.combine), void 0 !== this.envMapIntensity && (d.envMapIntensity = this.envMapIntensity));
			this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid);
			void 0 !== this.size &&
				(d.size = this.size);
			void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
			1 !== this.blending && (d.blending = this.blending);
			!0 === this.flatShading && (d.flatShading = this.flatShading);
			0 !== this.side && (d.side = this.side);
			this.vertexColors && (d.vertexColors = !0);
			1 > this.opacity && (d.opacity = this.opacity);
			!0 === this.transparent && (d.transparent = this.transparent);
			d.depthFunc = this.depthFunc;
			d.depthTest = this.depthTest;
			d.depthWrite = this.depthWrite;
			d.stencilWrite = this.stencilWrite;
			d.stencilWriteMask = this.stencilWriteMask;
			d.stencilFunc = this.stencilFunc;
			d.stencilRef = this.stencilRef;
			d.stencilFuncMask = this.stencilFuncMask;
			d.stencilFail = this.stencilFail;
			d.stencilZFail = this.stencilZFail;
			d.stencilZPass = this.stencilZPass;
			this.rotation && 0 !== this.rotation && (d.rotation = this.rotation);
			!0 === this.polygonOffset && (d.polygonOffset = !0);
			0 !== this.polygonOffsetFactor && (d.polygonOffsetFactor = this.polygonOffsetFactor);
			0 !== this.polygonOffsetUnits && (d.polygonOffsetUnits = this.polygonOffsetUnits);
			this.linewidth && 1 !== this.linewidth && (d.linewidth =
				this.linewidth);
			void 0 !== this.dashSize && (d.dashSize = this.dashSize);
			void 0 !== this.gapSize && (d.gapSize = this.gapSize);
			void 0 !== this.scale && (d.scale = this.scale);
			!0 === this.dithering && (d.dithering = !0);
			0 < this.alphaTest && (d.alphaTest = this.alphaTest);
			!0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
			!0 === this.wireframe && (d.wireframe = this.wireframe);
			1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth);
			"round" !== this.wireframeLinecap && (d.wireframeLinecap = this.wireframeLinecap);
			"round" !== this.wireframeLinejoin && (d.wireframeLinejoin = this.wireframeLinejoin);
			!0 === this.morphTargets && (d.morphTargets = !0);
			!0 === this.morphNormals && (d.morphNormals = !0);
			!0 === this.skinning && (d.skinning = !0);
			!1 === this.visible && (d.visible = !1);
			!1 === this.toneMapped && (d.toneMapped = !1);
			"{}" !== JSON.stringify(this.userData) && (d.userData = this.userData);
			c && (c = b(a.textures), a = b(a.images), 0 < c.length && (d.textures = c), 0 < a.length && (d.images = a));
			return d
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.name =
				a.name;
			this.fog = a.fog;
			this.blending = a.blending;
			this.side = a.side;
			this.flatShading = a.flatShading;
			this.vertexColors = a.vertexColors;
			this.opacity = a.opacity;
			this.transparent = a.transparent;
			this.blendSrc = a.blendSrc;
			this.blendDst = a.blendDst;
			this.blendEquation = a.blendEquation;
			this.blendSrcAlpha = a.blendSrcAlpha;
			this.blendDstAlpha = a.blendDstAlpha;
			this.blendEquationAlpha = a.blendEquationAlpha;
			this.depthFunc = a.depthFunc;
			this.depthTest = a.depthTest;
			this.depthWrite = a.depthWrite;
			this.stencilWriteMask = a.stencilWriteMask;
			this.stencilFunc = a.stencilFunc;
			this.stencilRef = a.stencilRef;
			this.stencilFuncMask = a.stencilFuncMask;
			this.stencilFail = a.stencilFail;
			this.stencilZFail = a.stencilZFail;
			this.stencilZPass = a.stencilZPass;
			this.stencilWrite = a.stencilWrite;
			var b = a.clippingPlanes,
				c = null;
			if (null !== b) {
				var d = b.length;
				c = Array(d);
				for (var e = 0; e !== d; ++e) c[e] = b[e].clone()
			}
			this.clippingPlanes = c;
			this.clipIntersection = a.clipIntersection;
			this.clipShadows = a.clipShadows;
			this.shadowSide = a.shadowSide;
			this.colorWrite = a.colorWrite;
			this.precision =
				a.precision;
			this.polygonOffset = a.polygonOffset;
			this.polygonOffsetFactor = a.polygonOffsetFactor;
			this.polygonOffsetUnits = a.polygonOffsetUnits;
			this.dithering = a.dithering;
			this.alphaTest = a.alphaTest;
			this.premultipliedAlpha = a.premultipliedAlpha;
			this.visible = a.visible;
			this.toneMapped = a.toneMapped;
			this.userData = JSON.parse(JSON.stringify(a.userData));
			return this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	});
	Object.defineProperty(K.prototype, "needsUpdate", {
		set: function(a) {
			!0 === a && this.version++
		}
	});
	Pa.prototype = Object.create(K.prototype);
	Pa.prototype.constructor = Pa;
	Pa.prototype.isMeshBasicMaterial = !0;
	Pa.prototype.copy = function(a) {
		K.prototype.copy.call(this, a);
		this.color.copy(a.color);
		this.map = a.map;
		this.lightMap = a.lightMap;
		this.lightMapIntensity = a.lightMapIntensity;
		this.aoMap = a.aoMap;
		this.aoMapIntensity = a.aoMapIntensity;
		this.specularMap = a.specularMap;
		this.alphaMap = a.alphaMap;
		this.envMap = a.envMap;
		this.combine = a.combine;
		this.reflectivity = a.reflectivity;
		this.refractionRatio = a.refractionRatio;
		this.wireframe =
			a.wireframe;
		this.wireframeLinewidth = a.wireframeLinewidth;
		this.wireframeLinecap = a.wireframeLinecap;
		this.wireframeLinejoin = a.wireframeLinejoin;
		this.skinning = a.skinning;
		this.morphTargets = a.morphTargets;
		return this
	};
	var Y = new p;
	Object.defineProperty(G.prototype, "needsUpdate", {
		set: function(a) {
			!0 === a && this.version++
		}
	});
	Object.assign(G.prototype, {
		isBufferAttribute: !0,
		onUploadCallback: function() {},
		setUsage: function(a) {
			this.usage = a;
			return this
		},
		copy: function(a) {
			this.name = a.name;
			this.array = new a.array.constructor(a.array);
			this.itemSize = a.itemSize;
			this.count = a.count;
			this.normalized = a.normalized;
			this.usage = a.usage;
			return this
		},
		copyAt: function(a, b, c) {
			a *= this.itemSize;
			c *= b.itemSize;
			for (var d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d];
			return this
		},
		copyArray: function(a) {
			this.array.set(a);
			return this
		},
		copyColorsArray: function(a) {
			for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
				var f = a[d];
				void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), f = new D);
				b[c++] = f.r;
				b[c++] = f.g;
				b[c++] =
					f.b
			}
			return this
		},
		copyVector2sArray: function(a) {
			for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
				var f = a[d];
				void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d), f = new v);
				b[c++] = f.x;
				b[c++] = f.y
			}
			return this
		},
		copyVector3sArray: function(a) {
			for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
				var f = a[d];
				void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), f = new p);
				b[c++] = f.x;
				b[c++] = f.y;
				b[c++] = f.z
			}
			return this
		},
		copyVector4sArray: function(a) {
			for (var b =
					this.array, c = 0, d = 0, e = a.length; d < e; d++) {
				var f = a[d];
				void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new R);
				b[c++] = f.x;
				b[c++] = f.y;
				b[c++] = f.z;
				b[c++] = f.w
			}
			return this
		},
		applyMatrix3: function(a) {
			for (var b = 0, c = this.count; b < c; b++) Y.x = this.getX(b), Y.y = this.getY(b), Y.z = this.getZ(b), Y.applyMatrix3(a), this.setXYZ(b, Y.x, Y.y, Y.z);
			return this
		},
		applyMatrix4: function(a) {
			for (var b = 0, c = this.count; b < c; b++) Y.x = this.getX(b), Y.y = this.getY(b), Y.z = this.getZ(b), Y.applyMatrix4(a),
				this.setXYZ(b, Y.x, Y.y, Y.z);
			return this
		},
		applyNormalMatrix: function(a) {
			for (var b = 0, c = this.count; b < c; b++) Y.x = this.getX(b), Y.y = this.getY(b), Y.z = this.getZ(b), Y.applyNormalMatrix(a), this.setXYZ(b, Y.x, Y.y, Y.z);
			return this
		},
		transformDirection: function(a) {
			for (var b = 0, c = this.count; b < c; b++) Y.x = this.getX(b), Y.y = this.getY(b), Y.z = this.getZ(b), Y.transformDirection(a), this.setXYZ(b, Y.x, Y.y, Y.z);
			return this
		},
		set: function(a, b) {
			void 0 === b && (b = 0);
			this.array.set(a, b);
			return this
		},
		getX: function(a) {
			return this.array[a *
				this.itemSize]
		},
		setX: function(a, b) {
			this.array[a * this.itemSize] = b;
			return this
		},
		getY: function(a) {
			return this.array[a * this.itemSize + 1]
		},
		setY: function(a, b) {
			this.array[a * this.itemSize + 1] = b;
			return this
		},
		getZ: function(a) {
			return this.array[a * this.itemSize + 2]
		},
		setZ: function(a, b) {
			this.array[a * this.itemSize + 2] = b;
			return this
		},
		getW: function(a) {
			return this.array[a * this.itemSize + 3]
		},
		setW: function(a, b) {
			this.array[a * this.itemSize + 3] = b;
			return this
		},
		setXY: function(a, b, c) {
			a *= this.itemSize;
			this.array[a + 0] = b;
			this.array[a +
				1] = c;
			return this
		},
		setXYZ: function(a, b, c, d) {
			a *= this.itemSize;
			this.array[a + 0] = b;
			this.array[a + 1] = c;
			this.array[a + 2] = d;
			return this
		},
		setXYZW: function(a, b, c, d, e) {
			a *= this.itemSize;
			this.array[a + 0] = b;
			this.array[a + 1] = c;
			this.array[a + 2] = d;
			this.array[a + 3] = e;
			return this
		},
		onUpload: function(a) {
			this.onUploadCallback = a;
			return this
		},
		clone: function() {
			return (new this.constructor(this.array, this.itemSize)).copy(this)
		},
		toJSON: function() {
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: Array.prototype.slice.call(this.array),
				normalized: this.normalized
			}
		}
	});
	yd.prototype = Object.create(G.prototype);
	yd.prototype.constructor = yd;
	zd.prototype = Object.create(G.prototype);
	zd.prototype.constructor = zd;
	Ad.prototype = Object.create(G.prototype);
	Ad.prototype.constructor = Ad;
	Bd.prototype = Object.create(G.prototype);
	Bd.prototype.constructor = Bd;
	Xb.prototype = Object.create(G.prototype);
	Xb.prototype.constructor = Xb;
	Cd.prototype = Object.create(G.prototype);
	Cd.prototype.constructor = Cd;
	Yb.prototype = Object.create(G.prototype);
	Yb.prototype.constructor =
		Yb;
	B.prototype = Object.create(G.prototype);
	B.prototype.constructor = B;
	Dd.prototype = Object.create(G.prototype);
	Dd.prototype.constructor = Dd;
	Object.assign(rh.prototype, {
		computeGroups: function(a) {
			var b = [],
				c = void 0;
			a = a.faces;
			for (var d = 0; d < a.length; d++) {
				var e = a[d];
				if (e.materialIndex !== c) {
					c = e.materialIndex;
					void 0 !== f && (f.count = 3 * d - f.start, b.push(f));
					var f = {
						start: 3 * d,
						materialIndex: c
					}
				}
			}
			void 0 !== f && (f.count = 3 * d - f.start, b.push(f));
			this.groups = b
		},
		fromGeometry: function(a) {
			var b = a.faces,
				c = a.vertices,
				d = a.faceVertexUvs,
				e = d[0] && 0 < d[0].length,
				f = d[1] && 0 < d[1].length,
				g = a.morphTargets,
				h = g.length;
			if (0 < h) {
				var l = [];
				for (var m = 0; m < h; m++) l[m] = {
					name: g[m].name,
					data: []
				};
				this.morphTargets.position = l
			}
			var k = a.morphNormals,
				n = k.length;
			if (0 < n) {
				var p = [];
				for (m = 0; m < n; m++) p[m] = {
					name: k[m].name,
					data: []
				};
				this.morphTargets.normal = p
			}
			var r = a.skinIndices,
				q = a.skinWeights,
				u = r.length === c.length,
				E = q.length === c.length;
			0 < c.length && 0 === b.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
			for (m = 0; m < b.length; m++) {
				var x =
					b[m];
				this.vertices.push(c[x.a], c[x.b], c[x.c]);
				var w = x.vertexNormals;
				3 === w.length ? this.normals.push(w[0], w[1], w[2]) : (w = x.normal, this.normals.push(w, w, w));
				w = x.vertexColors;
				3 === w.length ? this.colors.push(w[0], w[1], w[2]) : (w = x.color, this.colors.push(w, w, w));
				!0 === e && (w = d[0][m], void 0 !== w ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m), this.uvs.push(new v, new v, new v)));
				!0 === f && (w = d[1][m], void 0 !== w ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
					m), this.uvs2.push(new v, new v, new v)));
				for (w = 0; w < h; w++) {
					var y = g[w].vertices;
					l[w].data.push(y[x.a], y[x.b], y[x.c])
				}
				for (w = 0; w < n; w++) y = k[w].vertexNormals[m], p[w].data.push(y.a, y.b, y.c);
				u && this.skinIndices.push(r[x.a], r[x.b], r[x.c]);
				E && this.skinWeights.push(q[x.a], q[x.b], q[x.c])
			}
			this.computeGroups(a);
			this.verticesNeedUpdate = a.verticesNeedUpdate;
			this.normalsNeedUpdate = a.normalsNeedUpdate;
			this.colorsNeedUpdate = a.colorsNeedUpdate;
			this.uvsNeedUpdate = a.uvsNeedUpdate;
			this.groupsNeedUpdate = a.groupsNeedUpdate;
			null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
			null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
			return this
		}
	});
	var hj = 1,
		ob = new N,
		ch = new y,
		td = new p,
		Oa = new Va,
		we = new Va,
		oa = new p;
	F.prototype = Object.assign(Object.create(ua.prototype), {
		constructor: F,
		isBufferGeometry: !0,
		getIndex: function() {
			return this.index
		},
		setIndex: function(a) {
			Array.isArray(a) ? this.index = new(65535 < sh(a) ? Yb : Xb)(a, 1) : this.index = a
		},
		getAttribute: function(a) {
			return this.attributes[a]
		},
		setAttribute: function(a,
			b) {
			this.attributes[a] = b;
			return this
		},
		deleteAttribute: function(a) {
			delete this.attributes[a];
			return this
		},
		addGroup: function(a, b, c) {
			this.groups.push({
				start: a,
				count: b,
				materialIndex: void 0 !== c ? c : 0
			})
		},
		clearGroups: function() {
			this.groups = []
		},
		setDrawRange: function(a, b) {
			this.drawRange.start = a;
			this.drawRange.count = b
		},
		applyMatrix4: function(a) {
			var b = this.attributes.position;
			void 0 !== b && (b.applyMatrix4(a), b.needsUpdate = !0);
			b = this.attributes.normal;
			if (void 0 !== b) {
				var c = (new ya).getNormalMatrix(a);
				b.applyNormalMatrix(c);
				b.needsUpdate = !0
			}
			b = this.attributes.tangent;
			void 0 !== b && (b.transformDirection(a), b.needsUpdate = !0);
			null !== this.boundingBox && this.computeBoundingBox();
			null !== this.boundingSphere && this.computeBoundingSphere();
			return this
		},
		rotateX: function(a) {
			ob.makeRotationX(a);
			this.applyMatrix4(ob);
			return this
		},
		rotateY: function(a) {
			ob.makeRotationY(a);
			this.applyMatrix4(ob);
			return this
		},
		rotateZ: function(a) {
			ob.makeRotationZ(a);
			this.applyMatrix4(ob);
			return this
		},
		translate: function(a, b, c) {
			ob.makeTranslation(a, b, c);
			this.applyMatrix4(ob);
			return this
		},
		scale: function(a, b, c) {
			ob.makeScale(a, b, c);
			this.applyMatrix4(ob);
			return this
		},
		lookAt: function(a) {
			ch.lookAt(a);
			ch.updateMatrix();
			this.applyMatrix4(ch.matrix);
			return this
		},
		center: function() {
			this.computeBoundingBox();
			this.boundingBox.getCenter(td).negate();
			this.translate(td.x, td.y, td.z);
			return this
		},
		setFromObject: function(a) {
			var b = a.geometry;
			if (a.isPoints || a.isLine) {
				a = new B(3 * b.vertices.length, 3);
				var c = new B(3 * b.colors.length, 3);
				this.setAttribute("position", a.copyVector3sArray(b.vertices));
				this.setAttribute("color", c.copyColorsArray(b.colors));
				b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new B(b.lineDistances.length, 1), this.setAttribute("lineDistance", a.copyArray(b.lineDistances)));
				null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
				null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
			} else a.isMesh && b && b.isGeometry && this.fromGeometry(b);
			return this
		},
		setFromPoints: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				b.push(e.x,
					e.y, e.z || 0)
			}
			this.setAttribute("position", new B(b, 3));
			return this
		},
		updateFromObject: function(a) {
			var b = a.geometry;
			if (a.isMesh) {
				var c = b.__directGeometry;
				!0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1);
				if (void 0 === c) return this.fromGeometry(b);
				c.verticesNeedUpdate = b.verticesNeedUpdate;
				c.normalsNeedUpdate = b.normalsNeedUpdate;
				c.colorsNeedUpdate = b.colorsNeedUpdate;
				c.uvsNeedUpdate = b.uvsNeedUpdate;
				c.groupsNeedUpdate = b.groupsNeedUpdate;
				b.verticesNeedUpdate = !1;
				b.normalsNeedUpdate = !1;
				b.colorsNeedUpdate = !1;
				b.uvsNeedUpdate = !1;
				b.groupsNeedUpdate = !1;
				b = c
			}!0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
			!0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1);
			!0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1);
			b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !==
				c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1);
			b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
			b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1);
			return this
		},
		fromGeometry: function(a) {
			a.__directGeometry = (new rh).fromGeometry(a);
			return this.fromDirectGeometry(a.__directGeometry)
		},
		fromDirectGeometry: function(a) {
			var b = new Float32Array(3 *
				a.vertices.length);
			this.setAttribute("position", (new G(b, 3)).copyVector3sArray(a.vertices));
			0 < a.normals.length && (b = new Float32Array(3 * a.normals.length), this.setAttribute("normal", (new G(b, 3)).copyVector3sArray(a.normals)));
			0 < a.colors.length && (b = new Float32Array(3 * a.colors.length), this.setAttribute("color", (new G(b, 3)).copyColorsArray(a.colors)));
			0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length), this.setAttribute("uv", (new G(b, 2)).copyVector2sArray(a.uvs)));
			0 < a.uvs2.length && (b = new Float32Array(2 *
				a.uvs2.length), this.setAttribute("uv2", (new G(b, 2)).copyVector2sArray(a.uvs2)));
			this.groups = a.groups;
			for (var c in a.morphTargets) {
				b = [];
				for (var d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
					var g = d[e],
						h = new B(3 * g.data.length, 3);
					h.name = g.name;
					b.push(h.copyVector3sArray(g.data))
				}
				this.morphAttributes[c] = b
			}
			0 < a.skinIndices.length && (c = new B(4 * a.skinIndices.length, 4), this.setAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
			0 < a.skinWeights.length && (c = new B(4 * a.skinWeights.length, 4), this.setAttribute("skinWeight",
				c.copyVector4sArray(a.skinWeights)));
			null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
			null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
			return this
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new Va);
			var a = this.attributes.position,
				b = this.morphAttributes.position;
			if (void 0 !== a) {
				if (this.boundingBox.setFromBufferAttribute(a), b) {
					a = 0;
					for (var c = b.length; a < c; a++) Oa.setFromBufferAttribute(b[a]), this.morphTargetsRelative ? (oa.addVectors(this.boundingBox.min,
						Oa.min), this.boundingBox.expandByPoint(oa), oa.addVectors(this.boundingBox.max, Oa.max), this.boundingBox.expandByPoint(oa)) : (this.boundingBox.expandByPoint(Oa.min), this.boundingBox.expandByPoint(Oa.max))
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		},
		computeBoundingSphere: function() {
			null ===
				this.boundingSphere && (this.boundingSphere = new eb);
			var a = this.attributes.position,
				b = this.morphAttributes.position;
			if (a) {
				var c = this.boundingSphere.center;
				Oa.setFromBufferAttribute(a);
				if (b)
					for (var d = 0, e = b.length; d < e; d++) {
						var f = b[d];
						we.setFromBufferAttribute(f);
						this.morphTargetsRelative ? (oa.addVectors(Oa.min, we.min), Oa.expandByPoint(oa), oa.addVectors(Oa.max, we.max), Oa.expandByPoint(oa)) : (Oa.expandByPoint(we.min), Oa.expandByPoint(we.max))
					}
				Oa.getCenter(c);
				var g = 0;
				d = 0;
				for (e = a.count; d < e; d++) oa.fromBufferAttribute(a,
					d), g = Math.max(g, c.distanceToSquared(oa));
				if (b)
					for (d = 0, e = b.length; d < e; d++) {
						f = b[d];
						for (var h = this.morphTargetsRelative, l = 0, m = f.count; l < m; l++) oa.fromBufferAttribute(f, l), h && (td.fromBufferAttribute(a, l), oa.add(td)), g = Math.max(g, c.distanceToSquared(oa))
					}
				this.boundingSphere.radius = Math.sqrt(g);
				isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
			}
		},
		computeFaceNormals: function() {},
		computeVertexNormals: function() {
			var a = this.index,
				b = this.attributes;
			if (b.position) {
				var c = b.position.array;
				if (void 0 === b.normal) this.setAttribute("normal", new G(new Float32Array(c.length), 3));
				else
					for (var d = b.normal.array, e = 0, f = d.length; e < f; e++) d[e] = 0;
				d = b.normal.array;
				var g = new p,
					h = new p,
					l = new p,
					m = new p,
					k = new p;
				if (a) {
					var n = a.array;
					e = 0;
					for (f = a.count; e < f; e += 3) {
						a = 3 * n[e + 0];
						var t = 3 * n[e + 1];
						var r = 3 * n[e + 2];
						g.fromArray(c, a);
						h.fromArray(c, t);
						l.fromArray(c, r);
						m.subVectors(l, h);
						k.subVectors(g, h);
						m.cross(k);
						d[a] +=
							m.x;
						d[a + 1] += m.y;
						d[a + 2] += m.z;
						d[t] += m.x;
						d[t + 1] += m.y;
						d[t + 2] += m.z;
						d[r] += m.x;
						d[r + 1] += m.y;
						d[r + 2] += m.z
					}
				} else
					for (e = 0, f = c.length; e < f; e += 9) g.fromArray(c, e), h.fromArray(c, e + 3), l.fromArray(c, e + 6), m.subVectors(l, h), k.subVectors(g, h), m.cross(k), d[e] = m.x, d[e + 1] = m.y, d[e + 2] = m.z, d[e + 3] = m.x, d[e + 4] = m.y, d[e + 5] = m.z, d[e + 6] = m.x, d[e + 7] = m.y, d[e + 8] = m.z;
				this.normalizeNormals();
				b.normal.needsUpdate = !0
			}
		},
		merge: function(a, b) {
			if (a && a.isBufferGeometry) {
				void 0 === b && (b = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
				var c = this.attributes,
					d;
				for (d in c)
					if (void 0 !== a.attributes[d]) {
						var e = c[d].array,
							f = a.attributes[d],
							g = f.array,
							h = f.itemSize * b;
						f = Math.min(g.length, e.length - h);
						for (var l = 0; l < f; l++, h++) e[h] = g[l]
					} return this
			}
			console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a)
		},
		normalizeNormals: function() {
			for (var a = this.attributes.normal, b = 0, c = a.count; b < c; b++) oa.x = a.getX(b), oa.y = a.getY(b), oa.z = a.getZ(b), oa.normalize(), a.setXYZ(b, oa.x, oa.y, oa.z)
		},
		toNonIndexed: function() {
			function a(a,
				b) {
				var c = a.array,
					d = a.itemSize;
				a = a.normalized;
				for (var e = new c.constructor(b.length * d), f, g = 0, h = 0, l = b.length; h < l; h++) {
					f = b[h] * d;
					for (var m = 0; m < d; m++) e[g++] = c[f++]
				}
				return new G(e, d, a)
			}
			if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
			var b = new F,
				c = this.index.array,
				d = this.attributes,
				e;
			for (e in d) {
				var f = d[e];
				f = a(f, c);
				b.setAttribute(e, f)
			}
			var g = this.morphAttributes;
			for (e in g) {
				var h = [],
					l = g[e];
				d = 0;
				for (var m = l.length; d < m; d++) f = l[d], f = a(f, c),
					h.push(f);
				b.morphAttributes[e] = h
			}
			b.morphTargetsRelative = this.morphTargetsRelative;
			c = this.groups;
			d = 0;
			for (e = c.length; d < e; d++) f = c[d], b.addGroup(f.start, f.count, f.materialIndex);
			return b
		},
		toJSON: function() {
			var a = {
				metadata: {
					version: 4.5,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			a.uuid = this.uuid;
			a.type = this.type;
			"" !== this.name && (a.name = this.name);
			0 < Object.keys(this.userData).length && (a.userData = this.userData);
			if (void 0 !== this.parameters) {
				var b = this.parameters;
				for (m in b) void 0 !== b[m] && (a[m] =
					b[m]);
				return a
			}
			a.data = {
				attributes: {}
			};
			b = this.index;
			null !== b && (a.data.index = {
				type: b.array.constructor.name,
				array: Array.prototype.slice.call(b.array)
			});
			var c = this.attributes;
			for (m in c) {
				b = c[m];
				var d = b.toJSON();
				"" !== b.name && (d.name = b.name);
				a.data.attributes[m] = d
			}
			c = {};
			var e = !1;
			for (m in this.morphAttributes) {
				for (var f = this.morphAttributes[m], g = [], h = 0, l = f.length; h < l; h++) b = f[h], d = b.toJSON(), "" !== b.name && (d.name = b.name), g.push(d);
				0 < g.length && (c[m] = g, e = !0)
			}
			e && (a.data.morphAttributes = c, a.data.morphTargetsRelative =
				this.morphTargetsRelative);
			var m = this.groups;
			0 < m.length && (a.data.groups = JSON.parse(JSON.stringify(m)));
			m = this.boundingSphere;
			null !== m && (a.data.boundingSphere = {
				center: m.center.toArray(),
				radius: m.radius
			});
			return a
		},
		clone: function() {
			return (new F).copy(this)
		},
		copy: function(a) {
			var b;
			this.index = null;
			this.attributes = {};
			this.morphAttributes = {};
			this.groups = [];
			this.boundingSphere = this.boundingBox = null;
			this.name = a.name;
			var c = a.index;
			null !== c && this.setIndex(c.clone());
			c = a.attributes;
			for (g in c) this.setAttribute(g,
				c[g].clone());
			var d = a.morphAttributes;
			for (g in d) {
				var e = [],
					f = d[g];
				c = 0;
				for (b = f.length; c < b; c++) e.push(f[c].clone());
				this.morphAttributes[g] = e
			}
			this.morphTargetsRelative = a.morphTargetsRelative;
			var g = a.groups;
			c = 0;
			for (b = g.length; c < b; c++) d = g[c], this.addGroup(d.start, d.count, d.materialIndex);
			g = a.boundingBox;
			null !== g && (this.boundingBox = g.clone());
			g = a.boundingSphere;
			null !== g && (this.boundingSphere = g.clone());
			this.drawRange.start = a.drawRange.start;
			this.drawRange.count = a.drawRange.count;
			this.userData = a.userData;
			return this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	});
	var Ci = new N,
		rc = new Wb,
		dh = new eb,
		Db = new p,
		Eb = new p,
		Fb = new p,
		bg = new p,
		cg = new p,
		dg = new p,
		Ge = new p,
		He = new p,
		Ie = new p,
		Bc = new v,
		Cc = new v,
		Dc = new v,
		Ed = new p,
		Ee = new p;
	ea.prototype = Object.assign(Object.create(y.prototype), {
		constructor: ea,
		isMesh: !0,
		copy: function(a) {
			y.prototype.copy.call(this, a);
			void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice());
			void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary =
				Object.assign({}, a.morphTargetDictionary));
			return this
		},
		updateMorphTargets: function() {
			var a = this.geometry;
			if (a.isBufferGeometry) {
				a = a.morphAttributes;
				var b = Object.keys(a);
				if (0 < b.length) {
					var c = a[b[0]];
					if (void 0 !== c)
						for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) {
							var d = c[a].name || String(a);
							this.morphTargetInfluences.push(0);
							this.morphTargetDictionary[d] = a
						}
				}
			} else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
		},
		raycast: function(a, b) {
			var c = this.geometry,
				d = this.material,
				e = this.matrixWorld;
			if (void 0 !== d && (null === c.boundingSphere && c.computeBoundingSphere(), dh.copy(c.boundingSphere), dh.applyMatrix4(e), !1 !== a.ray.intersectsSphere(dh) && (Ci.getInverse(e), rc.copy(a.ray).applyMatrix4(Ci), null === c.boundingBox || !1 !== rc.intersectsBox(c.boundingBox))))
				if (c.isBufferGeometry) {
					var f = c.index;
					e = c.attributes.position;
					var g = c.morphAttributes.position,
						h = c.morphTargetsRelative,
						l = c.attributes.uv,
						m = c.attributes.uv2,
						k = c.groups,
						n =
						c.drawRange,
						p, r;
					if (null !== f)
						if (Array.isArray(d)) {
							var q = 0;
							for (p = k.length; q < p; q++) {
								var u = k[q];
								var E = d[u.materialIndex];
								var x = Math.max(u.start, n.start);
								for (r = c = Math.min(u.start + u.count, n.start + n.count); x < r; x += 3) {
									c = f.getX(x);
									var w = f.getX(x + 1);
									var y = f.getX(x + 2);
									if (c = Fe(this, E, a, rc, e, g, h, l, m, c, w, y)) c.faceIndex = Math.floor(x / 3), c.face.materialIndex = u.materialIndex, b.push(c)
								}
							}
						} else
							for (x = Math.max(0, n.start), c = Math.min(f.count, n.start + n.count), q = x, p = c; q < p; q += 3) {
								if (c = f.getX(q), w = f.getX(q + 1), y = f.getX(q + 2), c =
									Fe(this, d, a, rc, e, g, h, l, m, c, w, y)) c.faceIndex = Math.floor(q / 3), b.push(c)
							} else if (void 0 !== e)
								if (Array.isArray(d))
									for (q = 0, p = k.length; q < p; q++)
										for (u = k[q], E = d[u.materialIndex], x = Math.max(u.start, n.start), r = c = Math.min(u.start + u.count, n.start + n.count); x < r; x += 3) {
											if (c = x, w = x + 1, y = x + 2, c = Fe(this, E, a, rc, e, g, h, l, m, c, w, y)) c.faceIndex = Math.floor(x / 3), c.face.materialIndex = u.materialIndex, b.push(c)
										} else
											for (x = Math.max(0, n.start), c = Math.min(e.count, n.start + n.count), q = x, p = c; q < p; q += 3)
												if (c = q, w = q + 1, y = q + 2, c = Fe(this, d, a, rc, e,
														g, h, l, m, c, w, y)) c.faceIndex = Math.floor(q / 3), b.push(c)
				} else if (c.isGeometry)
				for (e = Array.isArray(d), g = c.vertices, h = c.faces, c = c.faceVertexUvs[0], 0 < c.length && (f = c), n = 0, q = h.length; n < q; n++)
					if (p = h[n], c = e ? d[p.materialIndex] : d, void 0 !== c && (l = g[p.a], m = g[p.b], k = g[p.c], c = th(this, c, a, rc, l, m, k, Ed))) f && f[n] && (u = f[n], Bc.copy(u[0]), Cc.copy(u[1]), Dc.copy(u[2]), c.uv = pa.getUV(Ed, l, m, k, Bc, Cc, Dc, new v)), c.face = p, c.faceIndex = n, b.push(c)
		},
		clone: function() {
			return (new this.constructor(this.geometry, this.material)).copy(this)
		}
	});
	var ij = 0,
		pb = new N,
		eh = new y,
		Gf = new p;
	L.prototype = Object.assign(Object.create(ua.prototype), {
		constructor: L,
		isGeometry: !0,
		applyMatrix4: function(a) {
			for (var b = (new ya).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);
			c = 0;
			for (d = this.faces.length; c < d; c++) {
				a = this.faces[c];
				a.normal.applyMatrix3(b).normalize();
				for (var e = 0, f = a.vertexNormals.length; e < f; e++) a.vertexNormals[e].applyMatrix3(b).normalize()
			}
			null !== this.boundingBox && this.computeBoundingBox();
			null !== this.boundingSphere &&
				this.computeBoundingSphere();
			this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
			return this
		},
		rotateX: function(a) {
			pb.makeRotationX(a);
			this.applyMatrix4(pb);
			return this
		},
		rotateY: function(a) {
			pb.makeRotationY(a);
			this.applyMatrix4(pb);
			return this
		},
		rotateZ: function(a) {
			pb.makeRotationZ(a);
			this.applyMatrix4(pb);
			return this
		},
		translate: function(a, b, c) {
			pb.makeTranslation(a, b, c);
			this.applyMatrix4(pb);
			return this
		},
		scale: function(a, b, c) {
			pb.makeScale(a, b, c);
			this.applyMatrix4(pb);
			return this
		},
		lookAt: function(a) {
			eh.lookAt(a);
			eh.updateMatrix();
			this.applyMatrix4(eh.matrix);
			return this
		},
		fromBufferGeometry: function(a) {
			function b(a, b, d, e) {
				var f = void 0 === h ? [] : [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()],
					k = void 0 === g ? [] : [(new p).fromArray(g, 3 * a), (new p).fromArray(g, 3 * b), (new p).fromArray(g, 3 * d)];
				e = new Ac(a, b, d, k, f, e);
				c.faces.push(e);
				void 0 !== l && c.faceVertexUvs[0].push([(new v).fromArray(l, 2 * a), (new v).fromArray(l, 2 * b), (new v).fromArray(l, 2 * d)]);
				void 0 !== m && c.faceVertexUvs[1].push([(new v).fromArray(m, 2 * a), (new v).fromArray(m,
					2 * b), (new v).fromArray(m, 2 * d)])
			}
			var c = this,
				d = null !== a.index ? a.index.array : void 0,
				e = a.attributes;
			if (void 0 === e.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
			var f = e.position.array,
				g = void 0 !== e.normal ? e.normal.array : void 0,
				h = void 0 !== e.color ? e.color.array : void 0,
				l = void 0 !== e.uv ? e.uv.array : void 0,
				m = void 0 !== e.uv2 ? e.uv2.array : void 0;
			void 0 !== m && (this.faceVertexUvs[1] = []);
			for (e = 0; e < f.length; e += 3) c.vertices.push((new p).fromArray(f,
				e)), void 0 !== h && c.colors.push((new D).fromArray(h, e));
			var k = a.groups;
			if (0 < k.length)
				for (e = 0; e < k.length; e++) {
					f = k[e];
					var n = f.start,
						t = n;
					for (n += f.count; t < n; t += 3) void 0 !== d ? b(d[t], d[t + 1], d[t + 2], f.materialIndex) : b(t, t + 1, t + 2, f.materialIndex)
				} else if (void 0 !== d)
					for (e = 0; e < d.length; e += 3) b(d[e], d[e + 1], d[e + 2]);
				else
					for (e = 0; e < f.length / 3; e += 3) b(e, e + 1, e + 2);
			this.computeFaceNormals();
			null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
			null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
			return this
		},
		center: function() {
			this.computeBoundingBox();
			this.boundingBox.getCenter(Gf).negate();
			this.translate(Gf.x, Gf.y, Gf.z);
			return this
		},
		normalize: function() {
			this.computeBoundingSphere();
			var a = this.boundingSphere.center,
				b = this.boundingSphere.radius;
			b = 0 === b ? 1 : 1 / b;
			var c = new N;
			c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
			this.applyMatrix4(c);
			return this
		},
		computeFaceNormals: function() {
			for (var a = new p, b = new p, c = 0, d = this.faces.length; c < d; c++) {
				var e = this.faces[c],
					f = this.vertices[e.a],
					g = this.vertices[e.b];
				a.subVectors(this.vertices[e.c], g);
				b.subVectors(f, g);
				a.cross(b);
				a.normalize();
				e.normal.copy(a)
			}
		},
		computeVertexNormals: function(a) {
			void 0 === a && (a = !0);
			var b;
			var c = Array(this.vertices.length);
			var d = 0;
			for (b = this.vertices.length; d < b; d++) c[d] = new p;
			if (a) {
				var e = new p,
					f = new p;
				a = 0;
				for (d = this.faces.length; a < d; a++) {
					b = this.faces[a];
					var g = this.vertices[b.a];
					var h = this.vertices[b.b];
					var l = this.vertices[b.c];
					e.subVectors(l, h);
					f.subVectors(g, h);
					e.cross(f);
					c[b.a].add(e);
					c[b.b].add(e);
					c[b.c].add(e)
				}
			} else
				for (this.computeFaceNormals(),
					a = 0, d = this.faces.length; a < d; a++) b = this.faces[a], c[b.a].add(b.normal), c[b.b].add(b.normal), c[b.c].add(b.normal);
			d = 0;
			for (b = this.vertices.length; d < b; d++) c[d].normalize();
			a = 0;
			for (d = this.faces.length; a < d; a++) b = this.faces[a], g = b.vertexNormals, 3 === g.length ? (g[0].copy(c[b.a]), g[1].copy(c[b.b]), g[2].copy(c[b.c])) : (g[0] = c[b.a].clone(), g[1] = c[b.b].clone(), g[2] = c[b.c].clone());
			0 < this.faces.length && (this.normalsNeedUpdate = !0)
		},
		computeFlatVertexNormals: function() {
			var a;
			this.computeFaceNormals();
			var b = 0;
			for (a = this.faces.length; b <
				a; b++) {
				var c = this.faces[b];
				var d = c.vertexNormals;
				3 === d.length ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone())
			}
			0 < this.faces.length && (this.normalsNeedUpdate = !0)
		},
		computeMorphNormals: function() {
			var a, b;
			var c = 0;
			for (b = this.faces.length; c < b; c++) {
				var d = this.faces[c];
				d.__originalFaceNormal ? d.__originalFaceNormal.copy(d.normal) : d.__originalFaceNormal = d.normal.clone();
				d.__originalVertexNormals || (d.__originalVertexNormals = []);
				var e = 0;
				for (a = d.vertexNormals.length; e < a; e++) d.__originalVertexNormals[e] ? d.__originalVertexNormals[e].copy(d.vertexNormals[e]) : d.__originalVertexNormals[e] = d.vertexNormals[e].clone()
			}
			var f = new L;
			f.faces = this.faces;
			e = 0;
			for (a = this.morphTargets.length; e < a; e++) {
				if (!this.morphNormals[e]) {
					this.morphNormals[e] = {};
					this.morphNormals[e].faceNormals = [];
					this.morphNormals[e].vertexNormals = [];
					d = this.morphNormals[e].faceNormals;
					var g = this.morphNormals[e].vertexNormals;
					c = 0;
					for (b = this.faces.length; c < b; c++) {
						var h =
							new p;
						var l = {
							a: new p,
							b: new p,
							c: new p
						};
						d.push(h);
						g.push(l)
					}
				}
				g = this.morphNormals[e];
				f.vertices = this.morphTargets[e].vertices;
				f.computeFaceNormals();
				f.computeVertexNormals();
				c = 0;
				for (b = this.faces.length; c < b; c++) d = this.faces[c], h = g.faceNormals[c], l = g.vertexNormals[c], h.copy(d.normal), l.a.copy(d.vertexNormals[0]), l.b.copy(d.vertexNormals[1]), l.c.copy(d.vertexNormals[2])
			}
			c = 0;
			for (b = this.faces.length; c < b; c++) d = this.faces[c], d.normal = d.__originalFaceNormal, d.vertexNormals = d.__originalVertexNormals
		},
		computeBoundingBox: function() {
			null ===
				this.boundingBox && (this.boundingBox = new Va);
			this.boundingBox.setFromPoints(this.vertices)
		},
		computeBoundingSphere: function() {
			null === this.boundingSphere && (this.boundingSphere = new eb);
			this.boundingSphere.setFromPoints(this.vertices)
		},
		merge: function(a, b, c) {
			if (a && a.isGeometry) {
				var d, e = this.vertices.length,
					f = this.vertices,
					g = a.vertices,
					h = this.faces,
					l = a.faces,
					m = this.colors,
					k = a.colors;
				void 0 === c && (c = 0);
				void 0 !== b && (d = (new ya).getNormalMatrix(b));
				for (var n = 0, p = g.length; n < p; n++) {
					var r = g[n].clone();
					void 0 !==
						b && r.applyMatrix4(b);
					f.push(r)
				}
				n = 0;
				for (p = k.length; n < p; n++) m.push(k[n].clone());
				n = 0;
				for (p = l.length; n < p; n++) {
					g = l[n];
					var q = g.vertexNormals;
					k = g.vertexColors;
					m = new Ac(g.a + e, g.b + e, g.c + e);
					m.normal.copy(g.normal);
					void 0 !== d && m.normal.applyMatrix3(d).normalize();
					b = 0;
					for (f = q.length; b < f; b++) r = q[b].clone(), void 0 !== d && r.applyMatrix3(d).normalize(), m.vertexNormals.push(r);
					m.color.copy(g.color);
					b = 0;
					for (f = k.length; b < f; b++) r = k[b], m.vertexColors.push(r.clone());
					m.materialIndex = g.materialIndex + c;
					h.push(m)
				}
				n = 0;
				for (p =
					a.faceVertexUvs.length; n < p; n++)
					for (c = a.faceVertexUvs[n], void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []), b = 0, f = c.length; b < f; b++) {
						d = c[b];
						e = [];
						h = 0;
						for (l = d.length; h < l; h++) e.push(d[h].clone());
						this.faceVertexUvs[n].push(e)
					}
			} else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a)
		},
		mergeMesh: function(a) {
			a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",
				a)
		},
		mergeVertices: function() {
			var a = {},
				b = [],
				c = [],
				d = Math.pow(10, 4),
				e;
			var f = 0;
			for (e = this.vertices.length; f < e; f++) {
				var g = this.vertices[f];
				g = Math.round(g.x * d) + "_" + Math.round(g.y * d) + "_" + Math.round(g.z * d);
				void 0 === a[g] ? (a[g] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[g]]
			}
			a = [];
			f = 0;
			for (e = this.faces.length; f < e; f++)
				for (d = this.faces[f], d.a = c[d.a], d.b = c[d.b], d.c = c[d.c], d = [d.a, d.b, d.c], g = 0; 3 > g; g++)
					if (d[g] === d[(g + 1) % 3]) {
						a.push(f);
						break
					} for (f = a.length - 1; 0 <= f; f--)
				for (d = a[f], this.faces.splice(d, 1), c = 0, e =
					this.faceVertexUvs.length; c < e; c++) this.faceVertexUvs[c].splice(d, 1);
			f = this.vertices.length - b.length;
			this.vertices = b;
			return f
		},
		setFromPoints: function(a) {
			this.vertices = [];
			for (var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				this.vertices.push(new p(d.x, d.y, d.z || 0))
			}
			return this
		},
		sortFacesByMaterialIndex: function() {
			for (var a = this.faces, b = a.length, c = 0; c < b; c++) a[c]._id = c;
			a.sort(function(a, b) {
				return a.materialIndex - b.materialIndex
			});
			var d = this.faceVertexUvs[0],
				e = this.faceVertexUvs[1],
				f, g;
			d && d.length === b && (f = []);
			e &&
				e.length === b && (g = []);
			for (c = 0; c < b; c++) {
				var h = a[c]._id;
				f && f.push(d[h]);
				g && g.push(e[h])
			}
			f && (this.faceVertexUvs[0] = f);
			g && (this.faceVertexUvs[1] = g)
		},
		clone: function() {
			return (new L).copy(this)
		},
		copy: function(a) {
			var b, c, d;
			this.vertices = [];
			this.colors = [];
			this.faces = [];
			this.faceVertexUvs = [
				[]
			];
			this.morphTargets = [];
			this.morphNormals = [];
			this.skinWeights = [];
			this.skinIndices = [];
			this.lineDistances = [];
			this.boundingSphere = this.boundingBox = null;
			this.name = a.name;
			var e = a.vertices;
			var f = 0;
			for (b = e.length; f <
				b; f++) this.vertices.push(e[f].clone());
			e = a.colors;
			f = 0;
			for (b = e.length; f < b; f++) this.colors.push(e[f].clone());
			e = a.faces;
			f = 0;
			for (b = e.length; f < b; f++) this.faces.push(e[f].clone());
			f = 0;
			for (b = a.faceVertexUvs.length; f < b; f++) {
				var g = a.faceVertexUvs[f];
				void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []);
				e = 0;
				for (c = g.length; e < c; e++) {
					var h = g[e],
						l = [];
					var m = 0;
					for (d = h.length; m < d; m++) l.push(h[m].clone());
					this.faceVertexUvs[f].push(l)
				}
			}
			m = a.morphTargets;
			f = 0;
			for (b = m.length; f < b; f++) {
				d = {};
				d.name = m[f].name;
				if (void 0 !==
					m[f].vertices)
					for (d.vertices = [], e = 0, c = m[f].vertices.length; e < c; e++) d.vertices.push(m[f].vertices[e].clone());
				if (void 0 !== m[f].normals)
					for (d.normals = [], e = 0, c = m[f].normals.length; e < c; e++) d.normals.push(m[f].normals[e].clone());
				this.morphTargets.push(d)
			}
			m = a.morphNormals;
			f = 0;
			for (b = m.length; f < b; f++) {
				d = {};
				if (void 0 !== m[f].vertexNormals)
					for (d.vertexNormals = [], e = 0, c = m[f].vertexNormals.length; e < c; e++) g = m[f].vertexNormals[e], h = {}, h.a = g.a.clone(), h.b = g.b.clone(), h.c = g.c.clone(), d.vertexNormals.push(h);
				if (void 0 !==
					m[f].faceNormals)
					for (d.faceNormals = [], e = 0, c = m[f].faceNormals.length; e < c; e++) d.faceNormals.push(m[f].faceNormals[e].clone());
				this.morphNormals.push(d)
			}
			e = a.skinWeights;
			f = 0;
			for (b = e.length; f < b; f++) this.skinWeights.push(e[f].clone());
			e = a.skinIndices;
			f = 0;
			for (b = e.length; f < b; f++) this.skinIndices.push(e[f].clone());
			e = a.lineDistances;
			f = 0;
			for (b = e.length; f < b; f++) this.lineDistances.push(e[f]);
			f = a.boundingBox;
			null !== f && (this.boundingBox = f.clone());
			f = a.boundingSphere;
			null !== f && (this.boundingSphere = f.clone());
			this.elementsNeedUpdate =
				a.elementsNeedUpdate;
			this.verticesNeedUpdate = a.verticesNeedUpdate;
			this.uvsNeedUpdate = a.uvsNeedUpdate;
			this.normalsNeedUpdate = a.normalsNeedUpdate;
			this.colorsNeedUpdate = a.colorsNeedUpdate;
			this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
			this.groupsNeedUpdate = a.groupsNeedUpdate;
			return this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	});
	var fh = function(a) {
			function b(b, d, e, f, g, h) {
				a.call(this);
				this.type = "BoxGeometry";
				this.parameters = {
					width: b,
					height: d,
					depth: e,
					widthSegments: f,
					heightSegments: g,
					depthSegments: h
				};
				this.fromBufferGeometry(new Gd(b, d, e, f, g, h));
				this.mergeVertices()
			}
			a && (b.__proto__ = a);
			b.prototype = Object.create(a && a.prototype);
			return b.prototype.constructor = b
		}(L),
		Gd = function(a) {
			function b(b, d, e, f, g, h) {
				function c(a, b, c, d, e, f, g, h, l, z, v) {
					var w = f / l,
						x = g / z,
						y = f / 2,
						A = g / 2,
						E = h / 2;
					g = l + 1;
					for (var C = z + 1, B = f = 0, D = new p, F = 0; F < C; F++)
						for (var G = F * x - A, H = 0; H < g; H++) D[a] = (H * w - y) * d, D[b] = G * e, D[c] = E, n.push(D.x, D.y, D.z), D[a] = 0, D[b] = 0, D[c] = 0 < h ? 1 : -1, t.push(D.x, D.y, D.z), r.push(H / l), r.push(1 - F / z), f += 1;
					for (a = 0; a <
						z; a++)
						for (b = 0; b < l; b++) c = q + b + g * (a + 1), d = q + (b + 1) + g * (a + 1), e = q + (b + 1) + g * a, k.push(q + b + g * a, c, e), k.push(c, d, e), B += 6;
					m.addGroup(u, B, v);
					u += B;
					q += f
				}
				a.call(this);
				this.type = "BoxBufferGeometry";
				this.parameters = {
					width: b,
					height: d,
					depth: e,
					widthSegments: f,
					heightSegments: g,
					depthSegments: h
				};
				var m = this;
				b = b || 1;
				d = d || 1;
				e = e || 1;
				f = Math.floor(f) || 1;
				g = Math.floor(g) || 1;
				h = Math.floor(h) || 1;
				var k = [],
					n = [],
					t = [],
					r = [],
					q = 0,
					u = 0;
				c("z", "y", "x", -1, -1, e, d, b, h, g, 0);
				c("z", "y", "x", 1, -1, e, d, -b, h, g, 1);
				c("x", "z", "y", 1, 1, b, e, d, f, h, 2);
				c("x", "z", "y",
					1, -1, b, e, -d, f, h, 3);
				c("x", "y", "z", 1, -1, b, d, e, f, g, 4);
				c("x", "y", "z", -1, -1, b, d, -e, f, g, 5);
				this.setIndex(k);
				this.setAttribute("position", new B(n, 3));
				this.setAttribute("normal", new B(t, 3));
				this.setAttribute("uv", new B(r, 2))
			}
			a && (b.__proto__ = a);
			b.prototype = Object.create(a && a.prototype);
			return b.prototype.constructor = b
		}(F),
		Oh = {
			clone: Ec,
			merge: wa
		};
	Ca.prototype = Object.create(K.prototype);
	Ca.prototype.constructor = Ca;
	Ca.prototype.isShaderMaterial = !0;
	Ca.prototype.copy = function(a) {
		K.prototype.copy.call(this, a);
		this.fragmentShader =
			a.fragmentShader;
		this.vertexShader = a.vertexShader;
		this.uniforms = Ec(a.uniforms);
		this.defines = Object.assign({}, a.defines);
		this.wireframe = a.wireframe;
		this.wireframeLinewidth = a.wireframeLinewidth;
		this.lights = a.lights;
		this.clipping = a.clipping;
		this.skinning = a.skinning;
		this.morphTargets = a.morphTargets;
		this.morphNormals = a.morphNormals;
		this.extensions = Object.assign({}, a.extensions);
		return this
	};
	Ca.prototype.toJSON = function(a) {
		var b = K.prototype.toJSON.call(this, a);
		b.uniforms = {};
		for (var c in this.uniforms) {
			var d =
				this.uniforms[c].value;
			b.uniforms[c] = d && d.isTexture ? {
				type: "t",
				value: d.toJSON(a).uuid
			} : d && d.isColor ? {
				type: "c",
				value: d.getHex()
			} : d && d.isVector2 ? {
				type: "v2",
				value: d.toArray()
			} : d && d.isVector3 ? {
				type: "v3",
				value: d.toArray()
			} : d && d.isVector4 ? {
				type: "v4",
				value: d.toArray()
			} : d && d.isMatrix3 ? {
				type: "m3",
				value: d.toArray()
			} : d && d.isMatrix4 ? {
				type: "m4",
				value: d.toArray()
			} : {
				value: d
			}
		}
		0 < Object.keys(this.defines).length && (b.defines = this.defines);
		b.vertexShader = this.vertexShader;
		b.fragmentShader = this.fragmentShader;
		a = {};
		for (var e in this.extensions) !0 ===
			this.extensions[e] && (a[e] = !0);
		0 < Object.keys(a).length && (b.extensions = a);
		return b
	};
	fb.prototype = Object.assign(Object.create(y.prototype), {
		constructor: fb,
		isCamera: !0,
		copy: function(a, b) {
			y.prototype.copy.call(this, a, b);
			this.matrixWorldInverse.copy(a.matrixWorldInverse);
			this.projectionMatrix.copy(a.projectionMatrix);
			this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
			return this
		},
		getWorldDirection: function(a) {
			void 0 === a && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
				a = new p);
			this.updateMatrixWorld(!0);
			var b = this.matrixWorld.elements;
			return a.set(-b[8], -b[9], -b[10]).normalize()
		},
		updateMatrixWorld: function(a) {
			y.prototype.updateMatrixWorld.call(this, a);
			this.matrixWorldInverse.getInverse(this.matrixWorld)
		},
		updateWorldMatrix: function(a, b) {
			y.prototype.updateWorldMatrix.call(this, a, b);
			this.matrixWorldInverse.getInverse(this.matrixWorld)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		}
	});
	P.prototype = Object.assign(Object.create(fb.prototype), {
		constructor: P,
		isPerspectiveCamera: !0,
		copy: function(a, b) {
			fb.prototype.copy.call(this, a, b);
			this.fov = a.fov;
			this.zoom = a.zoom;
			this.near = a.near;
			this.far = a.far;
			this.focus = a.focus;
			this.aspect = a.aspect;
			this.view = null === a.view ? null : Object.assign({}, a.view);
			this.filmGauge = a.filmGauge;
			this.filmOffset = a.filmOffset;
			return this
		},
		setFocalLength: function(a) {
			a = .5 * this.getFilmHeight() / a;
			this.fov = 2 * O.RAD2DEG * Math.atan(a);
			this.updateProjectionMatrix()
		},
		getFocalLength: function() {
			var a = Math.tan(.5 * O.DEG2RAD * this.fov);
			return .5 * this.getFilmHeight() /
				a
		},
		getEffectiveFOV: function() {
			return 2 * O.RAD2DEG * Math.atan(Math.tan(.5 * O.DEG2RAD * this.fov) / this.zoom)
		},
		getFilmWidth: function() {
			return this.filmGauge * Math.min(this.aspect, 1)
		},
		getFilmHeight: function() {
			return this.filmGauge / Math.max(this.aspect, 1)
		},
		setViewOffset: function(a, b, c, d, e, f) {
			this.aspect = a / b;
			null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			});
			this.view.enabled = !0;
			this.view.fullWidth = a;
			this.view.fullHeight = b;
			this.view.offsetX = c;
			this.view.offsetY =
				d;
			this.view.width = e;
			this.view.height = f;
			this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1);
			this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var a = this.near,
				b = a * Math.tan(.5 * O.DEG2RAD * this.fov) / this.zoom,
				c = 2 * b,
				d = this.aspect * c,
				e = -.5 * d,
				f = this.view;
			if (null !== this.view && this.view.enabled) {
				var g = f.fullWidth,
					h = f.fullHeight;
				e += f.offsetX * d / g;
				b -= f.offsetY * c / h;
				d *= f.width / g;
				c *= f.height / h
			}
			f = this.filmOffset;
			0 !== f && (e += a * f / this.getFilmWidth());
			this.projectionMatrix.makePerspective(e,
				e + d, b, b - c, a, this.far);
			this.projectionMatrixInverse.getInverse(this.projectionMatrix)
		},
		toJSON: function(a) {
			a = y.prototype.toJSON.call(this, a);
			a.object.fov = this.fov;
			a.object.zoom = this.zoom;
			a.object.near = this.near;
			a.object.far = this.far;
			a.object.focus = this.focus;
			a.object.aspect = this.aspect;
			null !== this.view && (a.object.view = Object.assign({}, this.view));
			a.object.filmGauge = this.filmGauge;
			a.object.filmOffset = this.filmOffset;
			return a
		}
	});
	Fc.prototype = Object.create(y.prototype);
	Fc.prototype.constructor = Fc;
	Zb.prototype =
		Object.create(Ba.prototype);
	Zb.prototype.constructor = Zb;
	Zb.prototype.isWebGLCubeRenderTarget = !0;
	Zb.prototype.fromEquirectangularTexture = function(a, b) {
		this.texture.type = b.type;
		this.texture.format = b.format;
		this.texture.encoding = b.encoding;
		var c = new zc,
			d = new Ca({
				type: "CubemapFromEquirect",
				uniforms: Ec({
					tEquirect: {
						value: null
					}
				}),
				vertexShader: "varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
				fragmentShader: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",
				side: 1,
				blending: 0
			});
		d.uniforms.tEquirect.value = b;
		b = new ea(new Gd(5, 5, 5), d);
		c.add(b);
		(new Fc(1, 10, this)).update(a, c);
		b.geometry.dispose();
		b.material.dispose();
		return this
	};
	$b.prototype = Object.create(W.prototype);
	$b.prototype.constructor = $b;
	$b.prototype.isDataTexture = !0;
	var ud = new eb,
		Hf = new p;
	Object.assign(Gc.prototype, {
		set: function(a, b, c, d, e, f) {
			var g = this.planes;
			g[0].copy(a);
			g[1].copy(b);
			g[2].copy(c);
			g[3].copy(d);
			g[4].copy(e);
			g[5].copy(f);
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
			return this
		},
		setFromProjectionMatrix: function(a) {
			var b = this.planes,
				c = a.elements;
			a = c[0];
			var d = c[1],
				e = c[2],
				f = c[3],
				g = c[4],
				h = c[5],
				l = c[6],
				m = c[7],
				k = c[8],
				n = c[9],
				p = c[10],
				r = c[11],
				q = c[12],
				u =
				c[13],
				v = c[14];
			c = c[15];
			b[0].setComponents(f - a, m - g, r - k, c - q).normalize();
			b[1].setComponents(f + a, m + g, r + k, c + q).normalize();
			b[2].setComponents(f + d, m + h, r + n, c + u).normalize();
			b[3].setComponents(f - d, m - h, r - n, c - u).normalize();
			b[4].setComponents(f - e, m - l, r - p, c - v).normalize();
			b[5].setComponents(f + e, m + l, r + p, c + v).normalize();
			return this
		},
		intersectsObject: function(a) {
			var b = a.geometry;
			null === b.boundingSphere && b.computeBoundingSphere();
			ud.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);
			return this.intersectsSphere(ud)
		},
		intersectsSprite: function(a) {
			ud.center.set(0, 0, 0);
			ud.radius = .7071067811865476;
			ud.applyMatrix4(a.matrixWorld);
			return this.intersectsSphere(ud)
		},
		intersectsSphere: function(a) {
			var b = this.planes,
				c = a.center;
			a = -a.radius;
			for (var d = 0; 6 > d; d++)
				if (b[d].distanceToPoint(c) < a) return !1;
			return !0
		},
		intersectsBox: function(a) {
			for (var b = this.planes, c = 0; 6 > c; c++) {
				var d = b[c];
				Hf.x = 0 < d.normal.x ? a.max.x : a.min.x;
				Hf.y = 0 < d.normal.y ? a.max.y : a.min.y;
				Hf.z = 0 < d.normal.z ? a.max.z : a.min.z;
				if (0 > d.distanceToPoint(Hf)) return !1
			}
			return !0
		},
		containsPoint: function(a) {
			for (var b = this.planes, c = 0; 6 > c; c++)
				if (0 > b[c].distanceToPoint(a)) return !1;
			return !0
		}
	});
	var A = {
		common: {
			diffuse: {
				value: new D(15658734)
			},
			opacity: {
				value: 1
			},
			map: {
				value: null
			},
			uvTransform: {
				value: new ya
			},
			uv2Transform: {
				value: new ya
			},
			alphaMap: {
				value: null
			}
		},
		specularmap: {
			specularMap: {
				value: null
			}
		},
		envmap: {
			envMap: {
				value: null
			},
			flipEnvMap: {
				value: -1
			},
			reflectivity: {
				value: 1
			},
			refractionRatio: {
				value: .98
			},
			maxMipLevel: {
				value: 0
			}
		},
		aomap: {
			aoMap: {
				value: null
			},
			aoMapIntensity: {
				value: 1
			}
		},
		lightmap: {
			lightMap: {
				value: null
			},
			lightMapIntensity: {
				value: 1
			}
		},
		emissivemap: {
			emissiveMap: {
				value: null
			}
		},
		bumpmap: {
			bumpMap: {
				value: null
			},
			bumpScale: {
				value: 1
			}
		},
		normalmap: {
			normalMap: {
				value: null
			},
			normalScale: {
				value: new v(1, 1)
			}
		},
		displacementmap: {
			displacementMap: {
				value: null
			},
			displacementScale: {
				value: 1
			},
			displacementBias: {
				value: 0
			}
		},
		roughnessmap: {
			roughnessMap: {
				value: null
			}
		},
		metalnessmap: {
			metalnessMap: {
				value: null
			}
		},
		gradientmap: {
			gradientMap: {
				value: null
			}
		},
		fog: {
			fogDensity: {
				value: 2.5E-4
			},
			fogNear: {
				value: 1
			},
			fogFar: {
				value: 2E3
			},
			fogColor: {
				value: new D(16777215)
			}
		},
		lights: {
			ambientLightColor: {
				value: []
			},
			lightProbe: {
				value: []
			},
			directionalLights: {
				value: [],
				properties: {
					direction: {},
					color: {}
				}
			},
			directionalLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			directionalShadowMap: {
				value: []
			},
			directionalShadowMatrix: {
				value: []
			},
			spotLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					direction: {},
					distance: {},
					coneCos: {},
					penumbraCos: {},
					decay: {}
				}
			},
			spotLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			spotShadowMap: {
				value: []
			},
			spotShadowMatrix: {
				value: []
			},
			pointLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					decay: {},
					distance: {}
				}
			},
			pointLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {},
					shadowCameraNear: {},
					shadowCameraFar: {}
				}
			},
			pointShadowMap: {
				value: []
			},
			pointShadowMatrix: {
				value: []
			},
			hemisphereLights: {
				value: [],
				properties: {
					direction: {},
					skyColor: {},
					groundColor: {}
				}
			},
			rectAreaLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					width: {},
					height: {}
				}
			}
		},
		points: {
			diffuse: {
				value: new D(15658734)
			},
			opacity: {
				value: 1
			},
			size: {
				value: 1
			},
			scale: {
				value: 1
			},
			map: {
				value: null
			},
			alphaMap: {
				value: null
			},
			uvTransform: {
				value: new ya
			}
		},
		sprite: {
			diffuse: {
				value: new D(15658734)
			},
			opacity: {
				value: 1
			},
			center: {
				value: new v(.5, .5)
			},
			rotation: {
				value: 0
			},
			map: {
				value: null
			},
			alphaMap: {
				value: null
			},
			uvTransform: {
				value: new ya
			}
		}
	};
	Fd.prototype = Object.create(L.prototype);
	Fd.prototype.constructor = Fd;
	ac.prototype = Object.create(F.prototype);
	ac.prototype.constructor = ac;
	var M = {
			alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
			alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
			aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
			aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			begin_vertex: "vec3 transformed = vec3( position );",
			beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
			bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
			bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
			clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
			clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
			clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
			clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
			color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
			color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
			common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
			cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {\n      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {\n      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {\n      uv = vec2(direction.x, direction.y) / abs(direction.z);    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
			defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
			displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
			displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
			emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
			emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
			encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
			encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
			envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec2 sampleUV = equirectUv( reflectVec );\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
			envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
			envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
			envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
			envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV = equirectUv( reflectVec );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
			envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
			fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
			fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
			fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
			fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
			gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
			lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
			lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
			lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
			lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
			lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
			lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
			lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
			lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
			lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
			lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
			lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
			lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
			logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
			logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
			logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
			logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
			map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
			map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
			map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
			map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
			metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
			metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
			morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
			morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
			normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
			normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
			normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
			clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
			clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
			clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
			packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
			premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
			project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
			dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
			dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
			roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
			roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
			shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
			shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
			shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
			skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
			skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
			skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
			specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
			tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
			uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
			uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
			uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
			uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
			uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
			worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
			background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
			cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
			depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
			depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
			distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
			distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
			equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
			equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
			linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
			linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
			meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
			meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
			meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
			normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
			points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
			points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
			shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
			sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
		},
		gb = {
			basic: {
				uniforms: wa([A.common, A.specularmap, A.envmap, A.aomap, A.lightmap, A.fog]),
				vertexShader: M.meshbasic_vert,
				fragmentShader: M.meshbasic_frag
			},
			lambert: {
				uniforms: wa([A.common, A.specularmap, A.envmap, A.aomap, A.lightmap, A.emissivemap, A.fog, A.lights, {
					emissive: {
						value: new D(0)
					}
				}]),
				vertexShader: M.meshlambert_vert,
				fragmentShader: M.meshlambert_frag
			},
			phong: {
				uniforms: wa([A.common, A.specularmap, A.envmap, A.aomap, A.lightmap, A.emissivemap, A.bumpmap, A.normalmap, A.displacementmap, A.fog, A.lights, {
					emissive: {
						value: new D(0)
					},
					specular: {
						value: new D(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: M.meshphong_vert,
				fragmentShader: M.meshphong_frag
			},
			standard: {
				uniforms: wa([A.common, A.envmap, A.aomap, A.lightmap, A.emissivemap, A.bumpmap, A.normalmap, A.displacementmap, A.roughnessmap, A.metalnessmap, A.fog, A.lights, {
					emissive: {
						value: new D(0)
					},
					roughness: {
						value: 1
					},
					metalness: {
						value: 0
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: M.meshphysical_vert,
				fragmentShader: M.meshphysical_frag
			},
			toon: {
				uniforms: wa([A.common, A.specularmap, A.aomap, A.lightmap,
					A.emissivemap, A.bumpmap, A.normalmap, A.displacementmap, A.gradientmap, A.fog, A.lights, {
						emissive: {
							value: new D(0)
						},
						specular: {
							value: new D(1118481)
						},
						shininess: {
							value: 30
						}
					}
				]),
				vertexShader: M.meshtoon_vert,
				fragmentShader: M.meshtoon_frag
			},
			matcap: {
				uniforms: wa([A.common, A.bumpmap, A.normalmap, A.displacementmap, A.fog, {
					matcap: {
						value: null
					}
				}]),
				vertexShader: M.meshmatcap_vert,
				fragmentShader: M.meshmatcap_frag
			},
			points: {
				uniforms: wa([A.points, A.fog]),
				vertexShader: M.points_vert,
				fragmentShader: M.points_frag
			},
			dashed: {
				uniforms: wa([A.common,
					A.fog, {
						scale: {
							value: 1
						},
						dashSize: {
							value: 1
						},
						totalSize: {
							value: 2
						}
					}
				]),
				vertexShader: M.linedashed_vert,
				fragmentShader: M.linedashed_frag
			},
			depth: {
				uniforms: wa([A.common, A.displacementmap]),
				vertexShader: M.depth_vert,
				fragmentShader: M.depth_frag
			},
			normal: {
				uniforms: wa([A.common, A.bumpmap, A.normalmap, A.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: M.normal_vert,
				fragmentShader: M.normal_frag
			},
			sprite: {
				uniforms: wa([A.sprite, A.fog]),
				vertexShader: M.sprite_vert,
				fragmentShader: M.sprite_frag
			},
			background: {
				uniforms: {
					uvTransform: {
						value: new ya
					},
					t2D: {
						value: null
					}
				},
				vertexShader: M.background_vert,
				fragmentShader: M.background_frag
			},
			cube: {
				uniforms: wa([A.envmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: M.cube_vert,
				fragmentShader: M.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: M.equirect_vert,
				fragmentShader: M.equirect_frag
			},
			distanceRGBA: {
				uniforms: wa([A.common, A.displacementmap, {
					referencePosition: {
						value: new p
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1E3
					}
				}]),
				vertexShader: M.distanceRGBA_vert,
				fragmentShader: M.distanceRGBA_frag
			},
			shadow: {
				uniforms: wa([A.lights,
					A.fog, {
						color: {
							value: new D(0)
						},
						opacity: {
							value: 1
						}
					}
				]),
				vertexShader: M.shadow_vert,
				fragmentShader: M.shadow_frag
			}
		};
	gb.physical = {
		uniforms: wa([gb.standard.uniforms, {
			clearcoat: {
				value: 0
			},
			clearcoatMap: {
				value: null
			},
			clearcoatRoughness: {
				value: 0
			},
			clearcoatRoughnessMap: {
				value: null
			},
			clearcoatNormalScale: {
				value: new v(1, 1)
			},
			clearcoatNormalMap: {
				value: null
			},
			sheen: {
				value: new D(0)
			},
			transparency: {
				value: 0
			}
		}]),
		vertexShader: M.meshphysical_vert,
		fragmentShader: M.meshphysical_frag
	};
	qb.prototype = Object.create(W.prototype);
	qb.prototype.constructor =
		qb;
	qb.prototype.isCubeTexture = !0;
	Object.defineProperty(qb.prototype, "images", {
		get: function() {
			return this.image
		},
		set: function(a) {
			this.image = a
		}
	});
	Hc.prototype = Object.create(W.prototype);
	Hc.prototype.constructor = Hc;
	Hc.prototype.isDataTexture2DArray = !0;
	Ic.prototype = Object.create(W.prototype);
	Ic.prototype.constructor = Ic;
	Ic.prototype.isDataTexture3D = !0;
	var Bh = new W,
		Ej = new Hc,
		Gj = new Ic,
		Ch = new qb,
		vh = [],
		xh = [],
		Ah = new Float32Array(16),
		zh = new Float32Array(9),
		yh = new Float32Array(4);
	Dh.prototype.updateCache = function(a) {
		var b =
			this.cache;
		a instanceof Float32Array && b.length !== a.length && (this.cache = new Float32Array(a.length));
		Ja(b, a)
	};
	Eh.prototype.setValue = function(a, b, c) {
		for (var d = this.seq, e = 0, f = d.length; e !== f; ++e) {
			var g = d[e];
			g.setValue(a, b[g.id], c)
		}
	};
	var eg = /([\w\d_]+)(\])?(\[|\.)?/g;
	Gb.prototype.setValue = function(a, b, c, d) {
		b = this.map[b];
		void 0 !== b && b.setValue(a, c, d)
	};
	Gb.prototype.setOptional = function(a, b, c) {
		b = b[c];
		void 0 !== b && this.setValue(a, c, b)
	};
	Gb.upload = function(a, b, c, d) {
		for (var e = 0, f = b.length; e !== f; ++e) {
			var g = b[e],
				h = c[g.id];
			!1 !== h.needsUpdate && g.setValue(a, h.value, d)
		}
	};
	Gb.seqWithValue = function(a, b) {
		for (var c = [], d = 0, e = a.length; d !== e; ++d) {
			var f = a[d];
			f.id in b && c.push(f)
		}
		return c
	};
	var lk = 0,
		gg = /^[ \t]*#include +<([\w\d./]+)>/gm,
		Nh = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
		Mh = /#pragma unroll_loop_start[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g,
		vk = 0;
	Hb.prototype = Object.create(K.prototype);
	Hb.prototype.constructor =
		Hb;
	Hb.prototype.isMeshDepthMaterial = !0;
	Hb.prototype.copy = function(a) {
		K.prototype.copy.call(this, a);
		this.depthPacking = a.depthPacking;
		this.skinning = a.skinning;
		this.morphTargets = a.morphTargets;
		this.map = a.map;
		this.alphaMap = a.alphaMap;
		this.displacementMap = a.displacementMap;
		this.displacementScale = a.displacementScale;
		this.displacementBias = a.displacementBias;
		this.wireframe = a.wireframe;
		this.wireframeLinewidth = a.wireframeLinewidth;
		return this
	};
	Ib.prototype = Object.create(K.prototype);
	Ib.prototype.constructor =
		Ib;
	Ib.prototype.isMeshDistanceMaterial = !0;
	Ib.prototype.copy = function(a) {
		K.prototype.copy.call(this, a);
		this.referencePosition.copy(a.referencePosition);
		this.nearDistance = a.nearDistance;
		this.farDistance = a.farDistance;
		this.skinning = a.skinning;
		this.morphTargets = a.morphTargets;
		this.map = a.map;
		this.alphaMap = a.alphaMap;
		this.displacementMap = a.displacementMap;
		this.displacementScale = a.displacementScale;
		this.displacementBias = a.displacementBias;
		return this
	};
	Le.prototype = Object.assign(Object.create(P.prototype), {
		constructor: Le,
		isArrayCamera: !0
	});
	Kc.prototype = Object.assign(Object.create(y.prototype), {
		constructor: Kc,
		isGroup: !0
	});
	Object.assign(Me.prototype, {
		constructor: Me,
		getTargetRaySpace: function() {
			null === this._targetRay && (this._targetRay = new Kc, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1);
			return this._targetRay
		},
		getGripSpace: function() {
			null === this._grip && (this._grip = new Kc, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1);
			return this._grip
		},
		dispatchEvent: function(a) {
			null !== this._targetRay &&
				this._targetRay.dispatchEvent(a);
			null !== this._grip && this._grip.dispatchEvent(a);
			return this
		},
		disconnect: function(a) {
			this.dispatchEvent({
				type: "disconnected",
				data: a
			});
			null !== this._targetRay && (this._targetRay.visible = !1);
			null !== this._grip && (this._grip.visible = !1);
			return this
		},
		update: function(a, b, c) {
			var d = null,
				e = null,
				f = this._targetRay,
				g = this._grip;
			a && (null !== f && (d = b.getPose(a.targetRaySpace, c), null !== d && (f.matrix.fromArray(d.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale))), null !==
				g && a.gripSpace && (e = b.getPose(a.gripSpace, c), null !== e && (g.matrix.fromArray(e.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale))));
			null !== f && (f.visible = null !== d);
			null !== g && (g.visible = null !== e);
			return this
		}
	});
	Object.assign(Uh.prototype, ua.prototype);
	Object.assign(Ne.prototype, {
		isFogExp2: !0,
		clone: function() {
			return new Ne(this.color, this.density)
		},
		toJSON: function() {
			return {
				type: "FogExp2",
				color: this.color.getHex(),
				density: this.density
			}
		}
	});
	Object.assign(Oe.prototype, {
		isFog: !0,
		clone: function() {
			return new Oe(this.color,
				this.near, this.far)
		},
		toJSON: function() {
			return {
				type: "Fog",
				color: this.color.getHex(),
				near: this.near,
				far: this.far
			}
		}
	});
	Object.defineProperty(rb.prototype, "needsUpdate", {
		set: function(a) {
			!0 === a && this.version++
		}
	});
	Object.assign(rb.prototype, {
		isInterleavedBuffer: !0,
		onUploadCallback: function() {},
		setUsage: function(a) {
			this.usage = a;
			return this
		},
		copy: function(a) {
			this.array = new a.array.constructor(a.array);
			this.count = a.count;
			this.stride = a.stride;
			this.usage = a.usage;
			return this
		},
		copyAt: function(a, b, c) {
			a *= this.stride;
			c *= b.stride;
			for (var d = 0, e = this.stride; d < e; d++) this.array[a + d] = b.array[c + d];
			return this
		},
		set: function(a, b) {
			void 0 === b && (b = 0);
			this.array.set(a, b);
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		onUpload: function(a) {
			this.onUploadCallback = a;
			return this
		}
	});
	var sc = new p;
	Object.defineProperties(Kd.prototype, {
		count: {
			get: function() {
				return this.data.count
			}
		},
		array: {
			get: function() {
				return this.data.array
			}
		}
	});
	Object.assign(Kd.prototype, {
		isInterleavedBufferAttribute: !0,
		applyMatrix4: function(a) {
			for (var b =
					0, c = this.data.count; b < c; b++) sc.x = this.getX(b), sc.y = this.getY(b), sc.z = this.getZ(b), sc.applyMatrix4(a), this.setXYZ(b, sc.x, sc.y, sc.z);
			return this
		},
		setX: function(a, b) {
			this.data.array[a * this.data.stride + this.offset] = b;
			return this
		},
		setY: function(a, b) {
			this.data.array[a * this.data.stride + this.offset + 1] = b;
			return this
		},
		setZ: function(a, b) {
			this.data.array[a * this.data.stride + this.offset + 2] = b;
			return this
		},
		setW: function(a, b) {
			this.data.array[a * this.data.stride + this.offset + 3] = b;
			return this
		},
		getX: function(a) {
			return this.data.array[a *
				this.data.stride + this.offset]
		},
		getY: function(a) {
			return this.data.array[a * this.data.stride + this.offset + 1]
		},
		getZ: function(a) {
			return this.data.array[a * this.data.stride + this.offset + 2]
		},
		getW: function(a) {
			return this.data.array[a * this.data.stride + this.offset + 3]
		},
		setXY: function(a, b, c) {
			a = a * this.data.stride + this.offset;
			this.data.array[a + 0] = b;
			this.data.array[a + 1] = c;
			return this
		},
		setXYZ: function(a, b, c, d) {
			a = a * this.data.stride + this.offset;
			this.data.array[a + 0] = b;
			this.data.array[a + 1] = c;
			this.data.array[a + 2] = d;
			return this
		},
		setXYZW: function(a, b, c, d, e) {
			a = a * this.data.stride + this.offset;
			this.data.array[a + 0] = b;
			this.data.array[a + 1] = c;
			this.data.array[a + 2] = d;
			this.data.array[a + 3] = e;
			return this
		},
		clone: function() {
			console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
			for (var a = [], b = 0; b < this.count; b++)
				for (var c = b * this.data.stride + this.offset, d = 0; d < this.itemSize; d++) a.push(this.data.array[c + d]);
			return new G(new this.array.constructor(a), this.itemSize, this.normalized)
		},
		toJSON: function() {
			console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
			for (var a = [], b = 0; b < this.count; b++)
				for (var c = b * this.data.stride + this.offset, d = 0; d < this.itemSize; d++) a.push(this.data.array[c + d]);
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: a,
				normalized: this.normalized
			}
		}
	});
	Kb.prototype = Object.create(K.prototype);
	Kb.prototype.constructor = Kb;
	Kb.prototype.isSpriteMaterial = !0;
	Kb.prototype.copy = function(a) {
		K.prototype.copy.call(this,
			a);
		this.color.copy(a.color);
		this.map = a.map;
		this.alphaMap = a.alphaMap;
		this.rotation = a.rotation;
		this.sizeAttenuation = a.sizeAttenuation;
		return this
	};
	var Lc, xe = new p,
		vd = new p,
		wd = new p,
		Mc = new v,
		Md = new v,
		Wh = new N,
		If = new p,
		ye = new p,
		Jf = new p,
		Di = new v,
		gh = new v,
		Ei = new v;
	Ld.prototype = Object.assign(Object.create(y.prototype), {
		constructor: Ld,
		isSprite: !0,
		raycast: function(a, b) {
			null === a.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
			vd.setFromMatrixScale(this.matrixWorld);
			Wh.copy(a.camera.matrixWorld);
			this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse, this.matrixWorld);
			wd.setFromMatrixPosition(this.modelViewMatrix);
			a.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && vd.multiplyScalar(-wd.z);
			var c = this.material.rotation;
			if (0 !== c) {
				var d = Math.cos(c);
				var e = Math.sin(c)
			}
			c = this.center;
			Pe(If.set(-.5, -.5, 0), wd, c, vd, e, d);
			Pe(ye.set(.5, -.5, 0), wd, c, vd, e, d);
			Pe(Jf.set(.5, .5, 0), wd, c, vd, e, d);
			Di.set(0, 0);
			gh.set(1, 0);
			Ei.set(1, 1);
			var f = a.ray.intersectTriangle(If,
				ye, Jf, !1, xe);
			if (null === f && (Pe(ye.set(-.5, .5, 0), wd, c, vd, e, d), gh.set(0, 1), f = a.ray.intersectTriangle(If, Jf, ye, !1, xe), null === f)) return;
			e = a.ray.origin.distanceTo(xe);
			e < a.near || e > a.far || b.push({
				distance: e,
				point: xe.clone(),
				uv: pa.getUV(xe, If, ye, Jf, Di, gh, Ei, new v),
				face: null,
				object: this
			})
		},
		clone: function() {
			return (new this.constructor(this.material)).copy(this)
		},
		copy: function(a) {
			y.prototype.copy.call(this, a);
			void 0 !== a.center && this.center.copy(a.center);
			return this
		}
	});
	var Kf = new p,
		Fi = new p;
	Nd.prototype = Object.assign(Object.create(y.prototype), {
		constructor: Nd,
		isLOD: !0,
		copy: function(a) {
			y.prototype.copy.call(this, a, !1);
			for (var b = a.levels, c = 0, d = b.length; c < d; c++) {
				var e = b[c];
				this.addLevel(e.object.clone(), e.distance)
			}
			this.autoUpdate = a.autoUpdate;
			return this
		},
		addLevel: function(a, b) {
			void 0 === b && (b = 0);
			b = Math.abs(b);
			for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);
			c.splice(d, 0, {
				distance: b,
				object: a
			});
			this.add(a);
			return this
		},
		getCurrentLevel: function() {
			return this._currentLevel
		},
		getObjectForDistance: function(a) {
			var b = this.levels;
			if (0 <
				b.length) {
				for (var c = 1, d = b.length; c < d && !(a < b[c].distance); c++);
				return b[c - 1].object
			}
			return null
		},
		raycast: function(a, b) {
			if (0 < this.levels.length) {
				Kf.setFromMatrixPosition(this.matrixWorld);
				var c = a.ray.origin.distanceTo(Kf);
				this.getObjectForDistance(c).raycast(a, b)
			}
		},
		update: function(a) {
			var b = this.levels;
			if (1 < b.length) {
				Kf.setFromMatrixPosition(a.matrixWorld);
				Fi.setFromMatrixPosition(this.matrixWorld);
				a = Kf.distanceTo(Fi) / a.zoom;
				b[0].object.visible = !0;
				for (var c = 1, d = b.length; c < d; c++)
					if (a >= b[c].distance) b[c -
						1].object.visible = !1, b[c].object.visible = !0;
					else break;
				for (this._currentLevel = c - 1; c < d; c++) b[c].object.visible = !1
			}
		},
		toJSON: function(a) {
			a = y.prototype.toJSON.call(this, a);
			!1 === this.autoUpdate && (a.object.autoUpdate = !1);
			a.object.levels = [];
			for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
				var e = b[c];
				a.object.levels.push({
					object: e.object.uuid,
					distance: e.distance
				})
			}
			return a
		}
	});
	Qe.prototype = Object.assign(Object.create(ea.prototype), {
		constructor: Qe,
		isSkinnedMesh: !0,
		bind: function(a, b) {
			this.skeleton = a;
			void 0 === b &&
				(this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
			this.bindMatrix.copy(b);
			this.bindMatrixInverse.getInverse(b)
		},
		pose: function() {
			this.skeleton.pose()
		},
		normalizeSkinWeights: function() {
			for (var a = new R, b = this.geometry.attributes.skinWeight, c = 0, d = b.count; c < d; c++) {
				a.x = b.getX(c);
				a.y = b.getY(c);
				a.z = b.getZ(c);
				a.w = b.getW(c);
				var e = 1 / a.manhattanLength();
				Infinity !== e ? a.multiplyScalar(e) : a.set(1, 0, 0, 0);
				b.setXYZW(c, a.x, a.y, a.z, a.w)
			}
		},
		updateMatrixWorld: function(a) {
			ea.prototype.updateMatrixWorld.call(this,
				a);
			"attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
		},
		clone: function() {
			return (new this.constructor(this.geometry, this.material)).copy(this)
		},
		boneTransform: function() {
			var a = new p,
				b = new R,
				c = new R,
				d = new p,
				e = new N;
			return function(f, g) {
				var h = this.skeleton,
					l = this.geometry;
				b.fromBufferAttribute(l.attributes.skinIndex, f);
				c.fromBufferAttribute(l.attributes.skinWeight,
					f);
				a.fromBufferAttribute(l.attributes.position, f).applyMatrix4(this.bindMatrix);
				g.set(0, 0, 0);
				for (f = 0; 4 > f; f++)
					if (l = c.getComponent(f), 0 !== l) {
						var m = b.getComponent(f);
						e.multiplyMatrices(h.bones[m].matrixWorld, h.boneInverses[m]);
						g.addScaledVector(d.copy(a).applyMatrix4(e), l)
					} return g.applyMatrix4(this.bindMatrixInverse)
			}
		}()
	});
	var Gi = new N,
		Qk = new N;
	Object.assign(Re.prototype, {
		calculateInverses: function() {
			this.boneInverses = [];
			for (var a = 0, b = this.bones.length; a < b; a++) {
				var c = new N;
				this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
				this.boneInverses.push(c)
			}
		},
		pose: function() {
			var a, b;
			var c = 0;
			for (b = this.bones.length; c < b; c++)(a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]);
			c = 0;
			for (b = this.bones.length; c < b; c++)
				if (a = this.bones[c]) a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale)
		},
		update: function() {
			for (var a = this.bones, b = this.boneInverses, c = this.boneMatrices, d = this.boneTexture, e = 0, f =
					a.length; e < f; e++) Gi.multiplyMatrices(a[e] ? a[e].matrixWorld : Qk, b[e]), Gi.toArray(c, 16 * e);
			void 0 !== d && (d.needsUpdate = !0)
		},
		clone: function() {
			return new Re(this.bones, this.boneInverses)
		},
		getBoneByName: function(a) {
			for (var b = 0, c = this.bones.length; b < c; b++) {
				var d = this.bones[b];
				if (d.name === a) return d
			}
		},
		dispose: function() {
			this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = void 0)
		}
	});
	kg.prototype = Object.assign(Object.create(y.prototype), {
		constructor: kg,
		isBone: !0
	});
	var Hi = new N,
		Ii = new N,
		Lf = [],
		ze = new ea;
	Se.prototype = Object.assign(Object.create(ea.prototype), {
		constructor: Se,
		isInstancedMesh: !0,
		getMatrixAt: function(a, b) {
			b.fromArray(this.instanceMatrix.array, 16 * a)
		},
		raycast: function(a, b) {
			var c = this.matrixWorld,
				d = this.count;
			ze.geometry = this.geometry;
			ze.material = this.material;
			if (void 0 !== ze.material)
				for (var e = 0; e < d; e++) {
					this.getMatrixAt(e, Hi);
					Ii.multiplyMatrices(c, Hi);
					ze.matrixWorld = Ii;
					ze.raycast(a, Lf);
					for (var f = 0, g = Lf.length; f < g; f++) {
						var h = Lf[f];
						h.instanceId = e;
						h.object = this;
						b.push(h)
					}
					Lf.length = 0
				}
		},
		setMatrixAt: function(a,
			b) {
			b.toArray(this.instanceMatrix.array, 16 * a)
		},
		updateMorphTargets: function() {}
	});
	da.prototype = Object.create(K.prototype);
	da.prototype.constructor = da;
	da.prototype.isLineBasicMaterial = !0;
	da.prototype.copy = function(a) {
		K.prototype.copy.call(this, a);
		this.color.copy(a.color);
		this.linewidth = a.linewidth;
		this.linecap = a.linecap;
		this.linejoin = a.linejoin;
		this.morphTargets = a.morphTargets;
		return this
	};
	var Ji = new p,
		Ki = new p,
		Li = new N,
		Mf = new Wb,
		Ae = new eb;
	La.prototype = Object.assign(Object.create(y.prototype), {
		constructor: La,
		isLine: !0,
		computeLineDistances: function() {
			var a = this.geometry;
			if (a.isBufferGeometry)
				if (null === a.index) {
					for (var b = a.attributes.position, c = [0], d = 1, e = b.count; d < e; d++) Ji.fromBufferAttribute(b, d - 1), Ki.fromBufferAttribute(b, d), c[d] = c[d - 1], c[d] += Ji.distanceTo(Ki);
					a.setAttribute("lineDistance", new B(c, 1))
				} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			else if (a.isGeometry)
				for (b = a.vertices, c = a.lineDistances, c[0] = 0, d = 1, e = b.length; d < e; d++) c[d] =
					c[d - 1], c[d] += b[d - 1].distanceTo(b[d]);
			return this
		},
		raycast: function(a, b) {
			var c = this.geometry,
				d = this.matrixWorld,
				e = a.params.Line.threshold;
			null === c.boundingSphere && c.computeBoundingSphere();
			Ae.copy(c.boundingSphere);
			Ae.applyMatrix4(d);
			Ae.radius += e;
			if (!1 !== a.ray.intersectsSphere(Ae)) {
				Li.getInverse(d);
				Mf.copy(a.ray).applyMatrix4(Li);
				d = e / ((this.scale.x + this.scale.y + this.scale.z) / 3);
				d *= d;
				var f = new p,
					g = new p;
				e = new p;
				var h = new p,
					l = this && this.isLineSegments ? 2 : 1;
				if (c.isBufferGeometry) {
					var m = c.index,
						k = c.attributes.position.array;
					if (null !== m) {
						m = m.array;
						c = 0;
						for (var n = m.length - 1; c < n; c += l) {
							var t = m[c + 1];
							f.fromArray(k, 3 * m[c]);
							g.fromArray(k, 3 * t);
							t = Mf.distanceSqToSegment(f, g, h, e);
							t > d || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
								distance: t,
								point: e.clone().applyMatrix4(this.matrixWorld),
								index: c,
								face: null,
								faceIndex: null,
								object: this
							}))
						}
					} else
						for (c = 0, n = k.length / 3 - 1; c < n; c += l) f.fromArray(k, 3 * c), g.fromArray(k, 3 * c + 3), t = Mf.distanceSqToSegment(f, g, h, e), t > d || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h),
							t < a.near || t > a.far || b.push({
								distance: t,
								point: e.clone().applyMatrix4(this.matrixWorld),
								index: c,
								face: null,
								faceIndex: null,
								object: this
							}))
				} else if (c.isGeometry)
					for (f = c.vertices, g = f.length, c = 0; c < g - 1; c += l) t = Mf.distanceSqToSegment(f[c], f[c + 1], h, e), t > d || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
						distance: t,
						point: e.clone().applyMatrix4(this.matrixWorld),
						index: c,
						face: null,
						faceIndex: null,
						object: this
					}))
			}
		},
		updateMorphTargets: function() {
			var a = this.geometry;
			if (a.isBufferGeometry) {
				a =
					a.morphAttributes;
				var b = Object.keys(a);
				if (0 < b.length) {
					var c = a[b[0]];
					if (void 0 !== c)
						for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) {
							var d = c[a].name || String(a);
							this.morphTargetInfluences.push(0);
							this.morphTargetDictionary[d] = a
						}
				}
			} else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
		},
		clone: function() {
			return (new this.constructor(this.geometry, this.material)).copy(this)
		}
	});
	var Nf = new p,
		Of = new p;
	ma.prototype = Object.assign(Object.create(La.prototype), {
		constructor: ma,
		isLineSegments: !0,
		computeLineDistances: function() {
			var a = this.geometry;
			if (a.isBufferGeometry)
				if (null === a.index) {
					for (var b = a.attributes.position, c = [], d = 0, e = b.count; d < e; d += 2) Nf.fromBufferAttribute(b, d), Of.fromBufferAttribute(b, d + 1), c[d] = 0 === d ? 0 : c[d - 1], c[d + 1] = c[d] + Nf.distanceTo(Of);
					a.setAttribute("lineDistance", new B(c, 1))
				} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			else if (a.isGeometry)
				for (b = a.vertices, c = a.lineDistances, d = 0, e = b.length; d < e; d += 2) Nf.copy(b[d]), Of.copy(b[d + 1]), c[d] = 0 === d ? 0 : c[d - 1], c[d + 1] = c[d] + Nf.distanceTo(Of);
			return this
		}
	});
	Te.prototype = Object.assign(Object.create(La.prototype), {
		constructor: Te,
		isLineLoop: !0
	});
	Xa.prototype = Object.create(K.prototype);
	Xa.prototype.constructor = Xa;
	Xa.prototype.isPointsMaterial = !0;
	Xa.prototype.copy = function(a) {
		K.prototype.copy.call(this, a);
		this.color.copy(a.color);
		this.map = a.map;
		this.alphaMap = a.alphaMap;
		this.size = a.size;
		this.sizeAttenuation = a.sizeAttenuation;
		this.morphTargets = a.morphTargets;
		return this
	};
	var Mi = new N,
		mg = new Wb,
		Be = new eb,
		Pf = new p;
	Nc.prototype = Object.assign(Object.create(y.prototype), {
		constructor: Nc,
		isPoints: !0,
		raycast: function(a, b) {
			var c = this.geometry,
				d = this.matrixWorld,
				e = a.params.Points.threshold;
			null === c.boundingSphere && c.computeBoundingSphere();
			Be.copy(c.boundingSphere);
			Be.applyMatrix4(d);
			Be.radius += e;
			if (!1 !== a.ray.intersectsSphere(Be))
				if (Mi.getInverse(d), mg.copy(a.ray).applyMatrix4(Mi), e /= (this.scale.x +
						this.scale.y + this.scale.z) / 3, e *= e, c.isBufferGeometry) {
					var f = c.index;
					c = c.attributes.position.array;
					if (null !== f) {
						var g = f.array;
						f = 0;
						for (var h = g.length; f < h; f++) {
							var l = g[f];
							Pf.fromArray(c, 3 * l);
							lg(Pf, l, e, d, a, b, this)
						}
					} else
						for (f = 0, g = c.length / 3; f < g; f++) Pf.fromArray(c, 3 * f), lg(Pf, f, e, d, a, b, this)
				} else
					for (c = c.vertices, f = 0, g = c.length; f < g; f++) lg(c[f], f, e, d, a, b, this)
		},
		updateMorphTargets: function() {
			var a = this.geometry;
			if (a.isBufferGeometry) {
				a = a.morphAttributes;
				var b = Object.keys(a);
				if (0 < b.length) {
					var c = a[b[0]];
					if (void 0 !==
						c)
						for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) {
							var d = c[a].name || String(a);
							this.morphTargetInfluences.push(0);
							this.morphTargetDictionary[d] = a
						}
				}
			} else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
		},
		clone: function() {
			return (new this.constructor(this.geometry, this.material)).copy(this)
		}
	});
	ng.prototype = Object.assign(Object.create(W.prototype), {
		constructor: ng,
		isVideoTexture: !0,
		update: function() {
			var a = this.image;
			a.readyState >= a.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
		}
	});
	Oc.prototype = Object.create(W.prototype);
	Oc.prototype.constructor = Oc;
	Oc.prototype.isCompressedTexture = !0;
	Od.prototype = Object.create(W.prototype);
	Od.prototype.constructor = Od;
	Od.prototype.isCanvasTexture = !0;
	Pd.prototype = Object.create(W.prototype);
	Pd.prototype.constructor = Pd;
	Pd.prototype.isDepthTexture = !0;
	Pc.prototype = Object.create(F.prototype);
	Pc.prototype.constructor = Pc;
	Qd.prototype = Object.create(L.prototype);
	Qd.prototype.constructor = Qd;
	Qc.prototype = Object.create(F.prototype);
	Qc.prototype.constructor = Qc;
	Rd.prototype = Object.create(L.prototype);
	Rd.prototype.constructor = Rd;
	Ga.prototype = Object.create(F.prototype);
	Ga.prototype.constructor = Ga;
	Sd.prototype = Object.create(L.prototype);
	Sd.prototype.constructor = Sd;
	Rc.prototype = Object.create(Ga.prototype);
	Rc.prototype.constructor = Rc;
	Td.prototype = Object.create(L.prototype);
	Td.prototype.constructor = Td;
	bc.prototype = Object.create(Ga.prototype);
	bc.prototype.constructor =
		bc;
	Ud.prototype = Object.create(L.prototype);
	Ud.prototype.constructor = Ud;
	Sc.prototype = Object.create(Ga.prototype);
	Sc.prototype.constructor = Sc;
	Vd.prototype = Object.create(L.prototype);
	Vd.prototype.constructor = Vd;
	Tc.prototype = Object.create(Ga.prototype);
	Tc.prototype.constructor = Tc;
	Wd.prototype = Object.create(L.prototype);
	Wd.prototype.constructor = Wd;
	cc.prototype = Object.create(F.prototype);
	cc.prototype.constructor = cc;
	cc.prototype.toJSON = function() {
		var a = F.prototype.toJSON.call(this);
		a.path = this.parameters.path.toJSON();
		return a
	};
	Xd.prototype = Object.create(L.prototype);
	Xd.prototype.constructor = Xd;
	Uc.prototype = Object.create(F.prototype);
	Uc.prototype.constructor = Uc;
	Yd.prototype = Object.create(L.prototype);
	Yd.prototype.constructor = Yd;
	Vc.prototype = Object.create(F.prototype);
	Vc.prototype.constructor = Vc;
	var Rk = {
			triangulate: function(a, b, c) {
				c = c || 2;
				var d = b && b.length,
					e = d ? b[0] * c : a.length,
					f = Xh(a, 0, e, c, !0),
					g = [];
				if (!f || f.next === f.prev) return g;
				var h;
				if (d) {
					var l = c;
					d = [];
					var m;
					var k = 0;
					for (m = b.length; k < m; k++) {
						var n = b[k] * l;
						var p = k <
							m - 1 ? b[k + 1] * l : a.length;
						n = Xh(a, n, p, l, !1);
						n === n.next && (n.steiner = !0);
						d.push(Dk(n))
					}
					d.sort(Bk);
					for (k = 0; k < d.length; k++) {
						l = d[k];
						b = f;
						if (b = Ck(l, b)) l = $h(b, l), Lb(b, b.next), Lb(l, l.next);
						f = Lb(f, f.next)
					}
				}
				if (a.length > 80 * c) {
					var r = h = a[0];
					var q = d = a[1];
					for (l = c; l < e; l += c) k = a[l], b = a[l + 1], k < r && (r = k), b < q && (q = b), k > h && (h = k), b > d && (d = b);
					h = Math.max(h - r, d - q);
					h = 0 !== h ? 1 / h : 0
				}
				$d(f, g, c, r, q, h);
				return g
			}
		},
		sb = {
			area: function(a) {
				for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++) c += a[d].x * a[e].y - a[e].x * a[d].y;
				return .5 * c
			},
			isClockWise: function(a) {
				return 0 >
					sb.area(a)
			},
			triangulateShape: function(a, b) {
				var c = [],
					d = [],
					e = [];
				ai(a);
				bi(c, a);
				var f = a.length;
				b.forEach(ai);
				for (a = 0; a < b.length; a++) d.push(f), f += b[a].length, bi(c, b[a]);
				b = Rk.triangulate(c, d);
				for (a = 0; a < b.length; a += 3) e.push(b.slice(a, a + 3));
				return e
			}
		};
	dc.prototype = Object.create(L.prototype);
	dc.prototype.constructor = dc;
	dc.prototype.toJSON = function() {
		var a = L.prototype.toJSON.call(this);
		return ci(this.parameters.shapes, this.parameters.options, a)
	};
	hb.prototype = Object.create(F.prototype);
	hb.prototype.constructor =
		hb;
	hb.prototype.toJSON = function() {
		var a = F.prototype.toJSON.call(this);
		return ci(this.parameters.shapes, this.parameters.options, a)
	};
	var Ek = {
		generateTopUV: function(a, b, c, d, e) {
			a = b[3 * d];
			d = b[3 * d + 1];
			var f = b[3 * e];
			e = b[3 * e + 1];
			return [new v(b[3 * c], b[3 * c + 1]), new v(a, d), new v(f, e)]
		},
		generateSideWallUV: function(a, b, c, d, e, f) {
			a = b[3 * c];
			var g = b[3 * c + 1];
			c = b[3 * c + 2];
			var h = b[3 * d],
				l = b[3 * d + 1];
			d = b[3 * d + 2];
			var k = b[3 * e],
				p = b[3 * e + 1];
			e = b[3 * e + 2];
			var n = b[3 * f],
				t = b[3 * f + 1];
			b = b[3 * f + 2];
			return .01 > Math.abs(g - l) ? [new v(a, 1 - c), new v(h, 1 - d),
				new v(k, 1 - e), new v(n, 1 - b)
			] : [new v(g, 1 - c), new v(l, 1 - d), new v(p, 1 - e), new v(t, 1 - b)]
		}
	};
	be.prototype = Object.create(L.prototype);
	be.prototype.constructor = be;
	Xc.prototype = Object.create(hb.prototype);
	Xc.prototype.constructor = Xc;
	ce.prototype = Object.create(L.prototype);
	ce.prototype.constructor = ce;
	ec.prototype = Object.create(F.prototype);
	ec.prototype.constructor = ec;
	de.prototype = Object.create(L.prototype);
	de.prototype.constructor = de;
	Yc.prototype = Object.create(F.prototype);
	Yc.prototype.constructor = Yc;
	ee.prototype =
		Object.create(L.prototype);
	ee.prototype.constructor = ee;
	Zc.prototype = Object.create(F.prototype);
	Zc.prototype.constructor = Zc;
	fc.prototype = Object.create(L.prototype);
	fc.prototype.constructor = fc;
	fc.prototype.toJSON = function() {
		var a = L.prototype.toJSON.call(this);
		return di(this.parameters.shapes, a)
	};
	gc.prototype = Object.create(F.prototype);
	gc.prototype.constructor = gc;
	gc.prototype.toJSON = function() {
		var a = F.prototype.toJSON.call(this);
		return di(this.parameters.shapes, a)
	};
	var Sk = Object.freeze({
			__proto__: null,
			ShadowMaterial: ic,
			SpriteMaterial: Kb,
			RawShaderMaterial: ub,
			ShaderMaterial: Ca,
			PointsMaterial: Xa,
			MeshPhysicalMaterial: jc,
			MeshStandardMaterial: ib,
			MeshPhongMaterial: Mb,
			MeshToonMaterial: kc,
			MeshNormalMaterial: lc,
			MeshLambertMaterial: mc,
			MeshDepthMaterial: Hb,
			MeshDistanceMaterial: Ib,
			MeshBasicMaterial: Pa,
			MeshMatcapMaterial: nc,
			LineDashedMaterial: oc,
			LineBasicMaterial: da,
			Material: K
		}),
		ka = {
			arraySlice: function(a,
				b, c) {
				return ka.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c)
			},
			convertArray: function(a, b, c) {
				return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
			},
			isTypedArray: function(a) {
				return ArrayBuffer.isView(a) && !(a instanceof DataView)
			},
			getKeyframeOrder: function(a) {
				for (var b = a.length, c = Array(b), d = 0; d !== b; ++d) c[d] = d;
				c.sort(function(b, c) {
					return a[b] - a[c]
				});
				return c
			},
			sortedArray: function(a, b, c) {
				for (var d = a.length, e =
						new a.constructor(d), f = 0, g = 0; g !== d; ++f)
					for (var h = c[f] * b, l = 0; l !== b; ++l) e[g++] = a[h + l];
				return e
			},
			flattenJSON: function(a, b, c, d) {
				for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];) f = a[e++];
				if (void 0 !== f) {
					var g = f[d];
					if (void 0 !== g)
						if (Array.isArray(g)) {
							do g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++]; while (void 0 !== f)
						} else if (void 0 !== g.toArray) {
						do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++]; while (void 0 !== f)
					} else {
						do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++];
						while (void 0 !== f)
					}
				}
			},
			subclip: function(a, b, c, d, e) {
				e = e || 30;
				a = a.clone();
				a.name = b;
				var f = [];
				for (b = 0; b < a.tracks.length; ++b) {
					for (var g = a.tracks[b], h = g.getValueSize(), l = [], k = [], p = 0; p < g.times.length; ++p) {
						var n = g.times[p] * e;
						if (!(n < c || n >= d))
							for (l.push(g.times[p]), n = 0; n < h; ++n) k.push(g.values[p * h + n])
					}
					0 !== l.length && (g.times = ka.convertArray(l, g.times.constructor), g.values = ka.convertArray(k, g.values.constructor), f.push(g))
				}
				a.tracks = f;
				c = Infinity;
				for (b = 0; b < a.tracks.length; ++b) c > a.tracks[b].times[0] && (c = a.tracks[b].times[0]);
				for (b = 0; b < a.tracks.length; ++b) a.tracks[b].shift(-1 * c);
				a.resetDuration();
				return a
			},
			makeClipAdditive: function(a, b, c, d) {
				void 0 === b && (b = 0);
				void 0 === c && (c = a);
				if (void 0 === d || 0 >= d) d = 30;
				var e = a.tracks.length;
				b /= d;
				for (d = 0; d < e; ++d) {
					var f = c.tracks[d],
						g = f.ValueTypeName;
					if ("bool" !== g && "string" !== g) {
						var h = a.tracks.find(function(a) {
							return a.name === f.name && a.ValueTypeName === g
						});
						if (void 0 !== h) {
							var l = f.getValueSize(),
								k = f.times.length - 1;
							b <= f.times[0] ? k = ka.arraySlice(f.values, 0, f.valueSize) : b >= f.times[k] ? k = ka.arraySlice(f.values,
								k * l) : (k = f.createInterpolant(), k.evaluate(b), k = k.resultBuffer);
							"quaternion" === g && (new va(k[0], k[1], k[2], k[3])).normalize().conjugate().toArray(k);
							for (var p = h.times.length, n = 0; n < p; ++n) {
								var t = n * l;
								if ("quaternion" === g) va.multiplyQuaternionsFlat(h.values, t, k, 0, h.values, t);
								else
									for (var r = 0; r < l; ++r) h.values[t + r] -= k[r]
							}
						}
					}
				}
				a.blendMode = 2501;
				return a
			}
		};
	Object.assign(Ma.prototype, {
		evaluate: function(a) {
			var b = this.parameterPositions,
				c = this._cachedIndex,
				d = b[c],
				e = b[c - 1];
			a: {
				b: {
					c: {
						d: if (!(a < d)) {
							for (var f = c + 2;;) {
								if (void 0 ===
									d) {
									if (a < e) break d;
									this._cachedIndex = c = b.length;
									return this.afterEnd_(c - 1, a, e)
								}
								if (c === f) break;
								e = d;
								d = b[++c];
								if (a < d) break b
							}
							d = b.length;
							break c
						}if (a >= e) break a;
						else {
							f = b[1];
							a < f && (c = 2, e = f);
							for (f = c - 2;;) {
								if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
								if (c === f) break;
								d = e;
								e = b[--c - 1];
								if (a >= e) break b
							}
							d = c;
							c = 0
						}
					}
					for (; c < d;) e = c + d >>> 1,
					a < b[e] ? d = e : c = e + 1;d = b[c];e = b[c - 1];
					if (void 0 === e) return this._cachedIndex = 0,
					this.beforeStart_(0, a, d);
					if (void 0 === d) return this._cachedIndex = c = b.length,
					this.afterEnd_(c -
						1, e, a)
				}
				this._cachedIndex = c;this.intervalChanged_(c, e, d)
			}
			return this.interpolate_(c, e, a, d)
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function() {
			return this.settings || this.DefaultSettings_
		},
		copySampleValue_: function(a) {
			var b = this.resultBuffer,
				c = this.sampleValues,
				d = this.valueSize;
			a *= d;
			for (var e = 0; e !== d; ++e) b[e] = c[a + e];
			return b
		},
		interpolate_: function() {
			throw Error("call to abstract method");
		},
		intervalChanged_: function() {}
	});
	Object.assign(Ma.prototype, {
		beforeStart_: Ma.prototype.copySampleValue_,
		afterEnd_: Ma.prototype.copySampleValue_
	});
	Xe.prototype = Object.assign(Object.create(Ma.prototype), {
		constructor: Xe,
		DefaultSettings_: {
			endingStart: 2400,
			endingEnd: 2400
		},
		intervalChanged_: function(a, b, c) {
			var d = this.parameterPositions,
				e = a - 2,
				f = a + 1,
				g = d[e],
				h = d[f];
			if (void 0 === g) switch (this.getSettings_().endingStart) {
				case 2401:
					e = a;
					g = 2 * b - c;
					break;
				case 2402:
					e = d.length - 2;
					g = b + d[e] - d[e + 1];
					break;
				default:
					e = a, g = c
			}
			if (void 0 === h) switch (this.getSettings_().endingEnd) {
				case 2401:
					f = a;
					h = 2 * c - b;
					break;
				case 2402:
					f = 1;
					h = c + d[1] - d[0];
					break;
				default:
					f = a - 1, h = b
			}
			a = .5 * (c - b);
			d = this.valueSize;
			this._weightPrev = a / (b - g);
			this._weightNext = a / (h - c);
			this._offsetPrev = e * d;
			this._offsetNext = f * d
		},
		interpolate_: function(a, b, c, d) {
			var e = this.resultBuffer,
				f = this.sampleValues,
				g = this.valueSize;
			a *= g;
			var h = a - g,
				l = this._offsetPrev,
				k = this._offsetNext,
				p = this._weightPrev,
				n = this._weightNext,
				t = (c - b) / (d - b);
			c = t * t;
			d = c * t;
			b = -p * d + 2 * p * c - p * t;
			p = (1 + p) * d + (-1.5 - 2 * p) * c + (-.5 + p) * t + 1;
			t = (-1 - n) * d + (1.5 + n) * c + .5 * t;
			n = n * d - n * c;
			for (c = 0; c !== g; ++c) e[c] = b * f[l + c] + p * f[h + c] + t * f[a + c] + n * f[k + c];
			return e
		}
	});
	ie.prototype = Object.assign(Object.create(Ma.prototype), {
		constructor: ie,
		interpolate_: function(a, b, c, d) {
			var e = this.resultBuffer,
				f = this.sampleValues,
				g = this.valueSize;
			a *= g;
			var h = a - g;
			b = (c - b) / (d - b);
			c = 1 - b;
			for (d = 0; d !== g; ++d) e[d] = f[h + d] * c + f[a + d] * b;
			return e
		}
	});
	Ye.prototype = Object.assign(Object.create(Ma.prototype), {
		constructor: Ye,
		interpolate_: function(a) {
			return this.copySampleValue_(a - 1)
		}
	});
	Object.assign(ta, {
		toJSON: function(a) {
			var b = a.constructor;
			if (void 0 !== b.toJSON) b = b.toJSON(a);
			else {
				b = {
					name: a.name,
					times: ka.convertArray(a.times, Array),
					values: ka.convertArray(a.values, Array)
				};
				var c = a.getInterpolation();
				c !== a.DefaultInterpolation && (b.interpolation = c)
			}
			b.type = a.ValueTypeName;
			return b
		}
	});
	Object.assign(ta.prototype, {
		constructor: ta,
		TimeBufferType: Float32Array,
		ValueBufferType: Float32Array,
		DefaultInterpolation: 2301,
		InterpolantFactoryMethodDiscrete: function(a) {
			return new Ye(this.times, this.values, this.getValueSize(), a)
		},
		InterpolantFactoryMethodLinear: function(a) {
			return new ie(this.times, this.values, this.getValueSize(),
				a)
		},
		InterpolantFactoryMethodSmooth: function(a) {
			return new Xe(this.times, this.values, this.getValueSize(), a)
		},
		setInterpolation: function(a) {
			switch (a) {
				case 2300:
					var b = this.InterpolantFactoryMethodDiscrete;
					break;
				case 2301:
					b = this.InterpolantFactoryMethodLinear;
					break;
				case 2302:
					b = this.InterpolantFactoryMethodSmooth
			}
			if (void 0 === b) {
				b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (void 0 === this.createInterpolant)
					if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
					else throw Error(b);
				console.warn("THREE.KeyframeTrack:", b);
				return this
			}
			this.createInterpolant = b;
			return this
		},
		getInterpolation: function() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return 2300;
				case this.InterpolantFactoryMethodLinear:
					return 2301;
				case this.InterpolantFactoryMethodSmooth:
					return 2302
			}
		},
		getValueSize: function() {
			return this.values.length / this.times.length
		},
		shift: function(a) {
			if (0 !== a)
				for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] += a;
			return this
		},
		scale: function(a) {
			if (1 !==
				a)
				for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] *= a;
			return this
		},
		trim: function(a, b) {
			for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;) ++e;
			for (; - 1 !== f && c[f] > b;) --f;
			++f;
			if (0 !== e || f !== d) e >= f && (f = Math.max(f, 1), e = f - 1), a = this.getValueSize(), this.times = ka.arraySlice(c, e, f), this.values = ka.arraySlice(this.values, e * a, f * a);
			return this
		},
		validate: function() {
			var a = !0,
				b = this.getValueSize();
			0 !== b - Math.floor(b) && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), a = !1);
			var c = this.times;
			b = this.values;
			var d = c.length;
			0 === d && (console.error("THREE.KeyframeTrack: Track is empty.", this), a = !1);
			for (var e = null, f = 0; f !== d; f++) {
				var g = c[f];
				if ("number" === typeof g && isNaN(g)) {
					console.error("THREE.KeyframeTrack: Time is not a valid number.", this, f, g);
					a = !1;
					break
				}
				if (null !== e && e > g) {
					console.error("THREE.KeyframeTrack: Out of order keys.", this, f, g, e);
					a = !1;
					break
				}
				e = g
			}
			if (void 0 !== b && ka.isTypedArray(b))
				for (f = 0, c = b.length; f !== c; ++f)
					if (d = b[f], isNaN(d)) {
						console.error("THREE.KeyframeTrack: Value is not a valid number.",
							this, f, d);
						a = !1;
						break
					} return a
		},
		optimize: function() {
			for (var a = ka.arraySlice(this.times), b = ka.arraySlice(this.values), c = this.getValueSize(), d = 2302 === this.getInterpolation(), e = 1, f = a.length - 1, g = 1; g < f; ++g) {
				var h = !1,
					l = a[g];
				if (l !== a[g + 1] && (1 !== g || l !== l[0]))
					if (d) h = !0;
					else {
						var k = g * c,
							p = k - c,
							n = k + c;
						for (l = 0; l !== c; ++l) {
							var t = b[k + l];
							if (t !== b[p + l] || t !== b[n + l]) {
								h = !0;
								break
							}
						}
					} if (h) {
					if (g !== e)
						for (a[e] = a[g], h = g * c, k = e * c, l = 0; l !== c; ++l) b[k + l] = b[h + l];
					++e
				}
			}
			if (0 < f) {
				a[e] = a[f];
				h = f * c;
				k = e * c;
				for (l = 0; l !== c; ++l) b[k + l] = b[h + l];
				++e
			}
			e !==
				a.length ? (this.times = ka.arraySlice(a, 0, e), this.values = ka.arraySlice(b, 0, e * c)) : (this.times = a, this.values = b);
			return this
		},
		clone: function() {
			var a = ka.arraySlice(this.times, 0),
				b = ka.arraySlice(this.values, 0);
			a = new this.constructor(this.name, a, b);
			a.createInterpolant = this.createInterpolant;
			return a
		}
	});
	Ze.prototype = Object.assign(Object.create(ta.prototype), {
		constructor: Ze,
		ValueTypeName: "bool",
		ValueBufferType: Array,
		DefaultInterpolation: 2300,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	});
	$e.prototype = Object.assign(Object.create(ta.prototype), {
		constructor: $e,
		ValueTypeName: "color"
	});
	bd.prototype = Object.assign(Object.create(ta.prototype), {
		constructor: bd,
		ValueTypeName: "number"
	});
	af.prototype = Object.assign(Object.create(Ma.prototype), {
		constructor: af,
		interpolate_: function(a, b, c, d) {
			var e = this.resultBuffer,
				f = this.sampleValues,
				g = this.valueSize;
			a *= g;
			b = (c - b) / (d - b);
			for (c = a + g; a !== c; a += 4) va.slerpFlat(e, 0, f, a - g, f, a, b);
			return e
		}
	});
	je.prototype = Object.assign(Object.create(ta.prototype), {
		constructor: je,
		ValueTypeName: "quaternion",
		DefaultInterpolation: 2301,
		InterpolantFactoryMethodLinear: function(a) {
			return new af(this.times, this.values, this.getValueSize(), a)
		},
		InterpolantFactoryMethodSmooth: void 0
	});
	bf.prototype = Object.assign(Object.create(ta.prototype), {
		constructor: bf,
		ValueTypeName: "string",
		ValueBufferType: Array,
		DefaultInterpolation: 2300,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	});
	cd.prototype = Object.assign(Object.create(ta.prototype), {
		constructor: cd,
		ValueTypeName: "vector"
	});
	Object.assign(Sa, {
		parse: function(a) {
			for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e) b.push(Gk(c[e]).scale(d));
			return new Sa(a.name, a.duration, b, a.blendMode)
		},
		toJSON: function(a) {
			var b = [],
				c = a.tracks;
			a = {
				name: a.name,
				duration: a.duration,
				tracks: b,
				uuid: a.uuid,
				blendMode: a.blendMode
			};
			for (var d = 0, e = c.length; d !== e; ++d) b.push(ta.toJSON(c[d]));
			return a
		},
		CreateFromMorphTargetSequence: function(a, b, c, d) {
			for (var e = b.length, f = [], g = 0; g < e; g++) {
				var h = [],
					l = [];
				h.push((g + e - 1) % e, g, (g + 1) % e);
				l.push(0, 1, 0);
				var k =
					ka.getKeyframeOrder(h);
				h = ka.sortedArray(h, 1, k);
				l = ka.sortedArray(l, 1, k);
				d || 0 !== h[0] || (h.push(e), l.push(l[0]));
				f.push((new bd(".morphTargetInfluences[" + b[g].name + "]", h, l)).scale(1 / c))
			}
			return new Sa(a, -1, f)
		},
		findByName: function(a, b) {
			var c = a;
			Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);
			for (a = 0; a < c.length; a++)
				if (c[a].name === b) return c[a];
			return null
		},
		CreateClipsFromMorphTargetSequences: function(a, b, c) {
			for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) {
				var h = a[f],
					l = h.name.match(e);
				if (l && 1 < l.length) {
					var k = l[1];
					(l = d[k]) || (d[k] = l = []);
					l.push(h)
				}
			}
			a = [];
			for (k in d) a.push(Sa.CreateFromMorphTargetSequence(k, d[k], b, c));
			return a
		},
		parseAnimation: function(a, b) {
			if (!a) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
			var c = function(a, b, c, d, e) {
					if (0 !== c.length) {
						var f = [],
							g = [];
						ka.flattenJSON(c, f, g, d);
						0 !== f.length && e.push(new a(b, f, g))
					}
				},
				d = [],
				e = a.name || "default",
				f = a.length || -1,
				g = a.fps || 30,
				h = a.blendMode;
			a = a.hierarchy || [];
			for (var l = 0; l < a.length; l++) {
				var k = a[l].keys;
				if (k && 0 !== k.length)
					if (k[0].morphTargets) {
						f = {};
						for (var p = 0; p < k.length; p++)
							if (k[p].morphTargets)
								for (var n = 0; n < k[p].morphTargets.length; n++) f[k[p].morphTargets[n]] = -1;
						for (var t in f) {
							var r = [],
								q = [];
							for (n = 0; n !== k[p].morphTargets.length; ++n) {
								var u = k[p];
								r.push(u.time);
								q.push(u.morphTarget === t ? 1 : 0)
							}
							d.push(new bd(".morphTargetInfluence[" + t + "]", r, q))
						}
						f = f.length * (g || 1)
					} else p = ".bones[" + b[l].name + "]", c(cd, p + ".position", k, "pos", d), c(je, p + ".quaternion", k, "rot", d), c(cd, p + ".scale", k, "scl", d)
			}
			return 0 === d.length ?
				null : new Sa(e, f, d, h)
		}
	});
	Object.assign(Sa.prototype, {
		resetDuration: function() {
			for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) {
				var d = this.tracks[b];
				a = Math.max(a, d.times[d.times.length - 1])
			}
			this.duration = a;
			return this
		},
		trim: function() {
			for (var a = 0; a < this.tracks.length; a++) this.tracks[a].trim(0, this.duration);
			return this
		},
		validate: function() {
			for (var a = !0, b = 0; b < this.tracks.length; b++) a = a && this.tracks[b].validate();
			return a
		},
		optimize: function() {
			for (var a = 0; a < this.tracks.length; a++) this.tracks[a].optimize();
			return this
		},
		clone: function() {
			for (var a = [], b = 0; b < this.tracks.length; b++) a.push(this.tracks[b].clone());
			return new Sa(this.name, this.duration, a, this.blendMode)
		}
	});
	var tc = {
			enabled: !1,
			files: {},
			add: function(a, b) {
				!1 !== this.enabled && (this.files[a] = b)
			},
			get: function(a) {
				if (!1 !== this.enabled) return this.files[a]
			},
			remove: function(a) {
				delete this.files[a]
			},
			clear: function() {
				this.files = {}
			}
		},
		ei = new qg;
	Object.assign(V.prototype, {
		load: function() {},
		loadAsync: function(a, b) {
			var c = this;
			return new Promise(function(d, e) {
				c.load(a,
					d, b, e)
			})
		},
		parse: function() {},
		setCrossOrigin: function(a) {
			this.crossOrigin = a;
			return this
		},
		setPath: function(a) {
			this.path = a;
			return this
		},
		setResourcePath: function(a) {
			this.resourcePath = a;
			return this
		},
		setRequestHeader: function(a) {
			this.requestHeader = a;
			return this
		}
	});
	var db = {};
	Ta.prototype = Object.assign(Object.create(V.prototype), {
		constructor: Ta,
		load: function(a, b, c, d) {
			void 0 === a && (a = "");
			void 0 !== this.path && (a = this.path + a);
			a = this.manager.resolveURL(a);
			var e = this,
				f = tc.get(a);
			if (void 0 !== f) return e.manager.itemStart(a),
				setTimeout(function() {
					b && b(f);
					e.manager.itemEnd(a)
				}, 0), f;
			if (void 0 !== db[a]) db[a].push({
				onLoad: b,
				onProgress: c,
				onError: d
			});
			else {
				var g = a.match(/^data:(.*?)(;base64)?,(.*)$/);
				if (g) {
					c = g[1];
					var h = !!g[2];
					g = g[3];
					g = decodeURIComponent(g);
					h && (g = atob(g));
					try {
						var l = (this.responseType || "").toLowerCase();
						switch (l) {
							case "arraybuffer":
							case "blob":
								var k = new Uint8Array(g.length);
								for (h = 0; h < g.length; h++) k[h] = g.charCodeAt(h);
								var p = "blob" === l ? new Blob([k.buffer], {
									type: c
								}) : k.buffer;
								break;
							case "document":
								p = (new DOMParser).parseFromString(g,
									c);
								break;
							case "json":
								p = JSON.parse(g);
								break;
							default:
								p = g
						}
						setTimeout(function() {
							b && b(p);
							e.manager.itemEnd(a)
						}, 0)
					} catch (t) {
						setTimeout(function() {
							d && d(t);
							e.manager.itemError(a);
							e.manager.itemEnd(a)
						}, 0)
					}
				} else {
					db[a] = [];
					db[a].push({
						onLoad: b,
						onProgress: c,
						onError: d
					});
					var n = new XMLHttpRequest;
					n.open("https://artemsemkin.com/rhye/html/404.html", a, !0);
					n.addEventListener("load", function(b) {
						var c = this.response,
							d = db[a];
						delete db[a];
						if (200 === this.status || 0 === this.status) {
							0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
							tc.add(a,
								c);
							for (var f = 0, g = d.length; f < g; f++) {
								var h = d[f];
								if (h.onLoad) h.onLoad(c)
							}
						} else {
							f = 0;
							for (g = d.length; f < g; f++)
								if (h = d[f], h.onError) h.onError(b);
							e.manager.itemError(a)
						}
						e.manager.itemEnd(a)
					}, !1);
					n.addEventListener("progress", function(b) {
						for (var c = db[a], d = 0, e = c.length; d < e; d++) {
							var f = c[d];
							if (f.onProgress) f.onProgress(b)
						}
					}, !1);
					n.addEventListener("error", function(b) {
						var c = db[a];
						delete db[a];
						for (var d = 0, f = c.length; d < f; d++) {
							var g = c[d];
							if (g.onError) g.onError(b)
						}
						e.manager.itemError(a);
						e.manager.itemEnd(a)
					}, !1);
					n.addEventListener("abort",
						function(b) {
							var c = db[a];
							delete db[a];
							for (var d = 0, f = c.length; d < f; d++) {
								var g = c[d];
								if (g.onError) g.onError(b)
							}
							e.manager.itemError(a);
							e.manager.itemEnd(a)
						}, !1);
					void 0 !== this.responseType && (n.responseType = this.responseType);
					void 0 !== this.withCredentials && (n.withCredentials = this.withCredentials);
					n.overrideMimeType && n.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
					for (h in this.requestHeader) n.setRequestHeader(h, this.requestHeader[h]);
					n.send(null)
				}
				e.manager.itemStart(a);
				return n
			}
		},
		setResponseType: function(a) {
			this.responseType =
				a;
			return this
		},
		setWithCredentials: function(a) {
			this.withCredentials = a;
			return this
		},
		setMimeType: function(a) {
			this.mimeType = a;
			return this
		}
	});
	rg.prototype = Object.assign(Object.create(V.prototype), {
		constructor: rg,
		load: function(a, b, c, d) {
			var e = this,
				f = new Ta(e.manager);
			f.setPath(e.path);
			f.load(a, function(c) {
				try {
					b(e.parse(JSON.parse(c)))
				} catch (h) {
					d ? d(h) : console.error(h), e.manager.itemError(a)
				}
			}, c, d)
		},
		parse: function(a) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d = Sa.parse(a[c]);
				b.push(d)
			}
			return b
		}
	});
	sg.prototype =
		Object.assign(Object.create(V.prototype), {
			constructor: sg,
			load: function(a, b, c, d) {
				function e(e) {
					l.load(a[e], function(a) {
						a = f.parse(a, !0);
						g[e] = {
							width: a.width,
							height: a.height,
							format: a.format,
							mipmaps: a.mipmaps
						};
						k += 1;
						6 === k && (1 === a.mipmapCount && (h.minFilter = 1006), h.format = a.format, h.needsUpdate = !0, b && b(h))
					}, c, d)
				}
				var f = this,
					g = [],
					h = new Oc;
				h.image = g;
				var l = new Ta(this.manager);
				l.setPath(this.path);
				l.setResponseType("arraybuffer");
				if (Array.isArray(a))
					for (var k = 0, p = 0, n = a.length; p < n; ++p) e(p);
				else l.load(a, function(a) {
					a =
						f.parse(a, !0);
					if (a.isCubemap)
						for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
							g[d] = {
								mipmaps: []
							};
							for (var e = 0; e < a.mipmapCount; e++) g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height
						} else h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps;
					1 === a.mipmapCount && (h.minFilter = 1006);
					h.format = a.format;
					h.needsUpdate = !0;
					b && b(h)
				}, c, d);
				return h
			}
		});
	cf.prototype = Object.assign(Object.create(V.prototype), {
		constructor: cf,
		load: function(a, b, c,
			d) {
			var e = this,
				f = new $b,
				g = new Ta(this.manager);
			g.setResponseType("arraybuffer");
			g.setPath(this.path);
			g.load(a, function(a) {
				if (a = e.parse(a)) void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001, f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1006, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format =
					a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps, f.minFilter = 1008), 1 === a.mipmapCount && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a)
			}, c, d);
			return f
		}
	});
	dd.prototype = Object.assign(Object.create(V.prototype), {
		constructor: dd,
		load: function(a, b, c, d) {
			function e() {
				l.removeEventListener("load", e, !1);
				l.removeEventListener("error", f, !1);
				tc.add(a, this);
				b && b(this);
				g.manager.itemEnd(a)
			}

			function f(b) {
				l.removeEventListener("load", e, !1);
				l.removeEventListener("error", f, !1);
				d && d(b);
				g.manager.itemError(a);
				g.manager.itemEnd(a)
			}
			void 0 !== this.path && (a = this.path + a);
			a = this.manager.resolveURL(a);
			var g = this,
				h = tc.get(a);
			if (void 0 !== h) return g.manager.itemStart(a), setTimeout(function() {
				b && b(h);
				g.manager.itemEnd(a)
			}, 0), h;
			var l = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
			l.addEventListener("load", e, !1);
			l.addEventListener("error", f, !1);
			"data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin && (l.crossOrigin = this.crossOrigin);
			g.manager.itemStart(a);
			l.src = a;
			return l
		}
	});
	df.prototype =
		Object.assign(Object.create(V.prototype), {
			constructor: df,
			load: function(a, b, c, d) {
				function e(c) {
					g.load(a[c], function(a) {
						f.images[c] = a;
						h++;
						6 === h && (f.needsUpdate = !0, b && b(f))
					}, void 0, d)
				}
				var f = new qb,
					g = new dd(this.manager);
				g.setCrossOrigin(this.crossOrigin);
				g.setPath(this.path);
				var h = 0;
				for (c = 0; c < a.length; ++c) e(c);
				return f
			}
		});
	ef.prototype = Object.assign(Object.create(V.prototype), {
		constructor: ef,
		load: function(a, b, c, d) {
			var e = new W,
				f = new dd(this.manager);
			f.setCrossOrigin(this.crossOrigin);
			f.setPath(this.path);
			f.load(a, function(c) {
				e.image = c;
				c = 0 < a.search(/\.jpe?g($|\?)/i) || 0 === a.search(/^data:image\/jpeg/);
				e.format = c ? 1022 : 1023;
				e.needsUpdate = !0;
				void 0 !== b && b(e)
			}, c, d);
			return e
		}
	});
	Object.assign(H.prototype, {
		getPoint: function() {
			console.warn("THREE.Curve: .getPoint() not implemented.");
			return null
		},
		getPointAt: function(a, b) {
			a = this.getUtoTmapping(a);
			return this.getPoint(a, b)
		},
		getPoints: function(a) {
			void 0 === a && (a = 5);
			for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));
			return b
		},
		getSpacedPoints: function(a) {
			void 0 ===
				a && (a = 5);
			for (var b = [], c = 0; c <= a; c++) b.push(this.getPointAt(c / a));
			return b
		},
		getLength: function() {
			var a = this.getLengths();
			return a[a.length - 1]
		},
		getLengths: function(a) {
			void 0 === a && (a = this.arcLengthDivisions);
			if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			var b = [],
				c = this.getPoint(0),
				d, e = 0;
			b.push(0);
			for (d = 1; d <= a; d++) {
				var f = this.getPoint(d / a);
				e += f.distanceTo(c);
				b.push(e);
				c = f
			}
			return this.cacheArcLengths = b
		},
		updateArcLengths: function() {
			this.needsUpdate = !0;
			this.getLengths()
		},
		getUtoTmapping: function(a, b) {
			var c = this.getLengths(),
				d = c.length;
			b = b ? b : a * c[d - 1];
			for (var e = 0, f = d - 1, g; e <= f;)
				if (a = Math.floor(e + (f - e) / 2), g = c[a] - b, 0 > g) e = a + 1;
				else if (0 < g) f = a - 1;
			else {
				f = a;
				break
			}
			a = f;
			if (c[a] === b) return a / (d - 1);
			e = c[a];
			return (a + (b - e) / (c[a + 1] - e)) / (d - 1)
		},
		getTangent: function(a, b) {
			var c = a - 1E-4;
			a += 1E-4;
			0 > c && (c = 0);
			1 < a && (a = 1);
			c = this.getPoint(c);
			a = this.getPoint(a);
			b = b || (c.isVector2 ? new v : new p);
			b.copy(a).sub(c).normalize();
			return b
		},
		getTangentAt: function(a, b) {
			a = this.getUtoTmapping(a);
			return this.getTangent(a, b)
		},
		computeFrenetFrames: function(a, b) {
			var c = new p,
				d = [],
				e = [],
				f = [],
				g = new p,
				h = new N,
				l;
			for (l = 0; l <= a; l++) {
				var k = l / a;
				d[l] = this.getTangentAt(k, new p);
				d[l].normalize()
			}
			e[0] = new p;
			f[0] = new p;
			l = Number.MAX_VALUE;
			k = Math.abs(d[0].x);
			var v = Math.abs(d[0].y),
				n = Math.abs(d[0].z);
			k <= l && (l = k, c.set(1, 0, 0));
			v <= l && (l = v, c.set(0, 1, 0));
			n <= l && c.set(0, 0, 1);
			g.crossVectors(d[0], c).normalize();
			e[0].crossVectors(d[0], g);
			f[0].crossVectors(d[0], e[0]);
			for (l = 1; l <= a; l++) e[l] = e[l - 1].clone(), f[l] = f[l - 1].clone(),
				g.crossVectors(d[l - 1], d[l]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(O.clamp(d[l - 1].dot(d[l]), -1, 1)), e[l].applyMatrix4(h.makeRotationAxis(g, c))), f[l].crossVectors(d[l], e[l]);
			if (!0 === b)
				for (c = Math.acos(O.clamp(e[0].dot(e[a]), -1, 1)), c /= a, 0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c), l = 1; l <= a; l++) e[l].applyMatrix4(h.makeRotationAxis(d[l], c * l)), f[l].crossVectors(d[l], e[l]);
			return {
				tangents: d,
				normals: e,
				binormals: f
			}
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(a) {
			this.arcLengthDivisions =
				a.arcLengthDivisions;
			return this
		},
		toJSON: function() {
			var a = {
				metadata: {
					version: 4.5,
					type: "Curve",
					generator: "Curve.toJSON"
				}
			};
			a.arcLengthDivisions = this.arcLengthDivisions;
			a.type = this.type;
			return a
		},
		fromJSON: function(a) {
			this.arcLengthDivisions = a.arcLengthDivisions;
			return this
		}
	});
	fd.prototype = Object.assign(Object.create(fb.prototype), {
		constructor: fd,
		isOrthographicCamera: !0,
		copy: function(a, b) {
			fb.prototype.copy.call(this, a, b);
			this.left = a.left;
			this.right = a.right;
			this.top = a.top;
			this.bottom = a.bottom;
			this.near = a.near;
			this.far = a.far;
			this.zoom = a.zoom;
			this.view = null === a.view ? null : Object.assign({}, a.view);
			return this
		},
		setViewOffset: function(a, b, c, d, e, f) {
			null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			});
			this.view.enabled = !0;
			this.view.fullWidth = a;
			this.view.fullHeight = b;
			this.view.offsetX = c;
			this.view.offsetY = d;
			this.view.width = e;
			this.view.height = f;
			this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1);
			this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var a = (this.right - this.left) / (2 * this.zoom),
				b = (this.top - this.bottom) / (2 * this.zoom),
				c = (this.right + this.left) / 2,
				d = (this.top + this.bottom) /
				2,
				e = c - a;
			c += a;
			a = d + b;
			b = d - b;
			null !== this.view && this.view.enabled && (d = (this.right - this.left) / this.view.fullWidth / this.zoom, b = (this.top - this.bottom) / this.view.fullHeight / this.zoom, e += d * this.view.offsetX, c = e + d * this.view.width, a -= b * this.view.offsetY, b = a - b * this.view.height);
			this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far);
			this.projectionMatrixInverse.getInverse(this.projectionMatrix)
		},
		toJSON: function(a) {
			a = y.prototype.toJSON.call(this, a);
			a.object.zoom = this.zoom;
			a.object.left = this.left;
			a.object.right =
				this.right;
			a.object.top = this.top;
			a.object.bottom = this.bottom;
			a.object.near = this.near;
			a.object.far = this.far;
			null !== this.view && (a.object.view = Object.assign({}, this.view));
			return a
		}
	});
	pf.prototype = Object.assign(Object.create(V.prototype), {
		constructor: pf,
		load: function(a, b, c, d) {
			var e = this,
				f = new Ta(e.manager);
			f.setPath(e.path);
			f.load(a, function(c) {
				try {
					b(e.parse(JSON.parse(c)))
				} catch (h) {
					d ? d(h) : console.error(h), e.manager.itemError(a)
				}
			}, c, d)
		},
		parse: function(a) {
			function b(a) {
				void 0 === c[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
				return c[a]
			}
			var c = this.textures,
				d = new Sk[a.type];
			void 0 !== a.uuid && (d.uuid = a.uuid);
			void 0 !== a.name && (d.name = a.name);
			void 0 !== a.color && d.color.setHex(a.color);
			void 0 !== a.roughness && (d.roughness = a.roughness);
			void 0 !== a.metalness && (d.metalness = a.metalness);
			void 0 !== a.sheen && (d.sheen = (new D).setHex(a.sheen));
			void 0 !== a.emissive && d.emissive.setHex(a.emissive);
			void 0 !== a.specular && d.specular.setHex(a.specular);
			void 0 !== a.shininess && (d.shininess = a.shininess);
			void 0 !== a.clearcoat && (d.clearcoat = a.clearcoat);
			void 0 !== a.clearcoatRoughness && (d.clearcoatRoughness = a.clearcoatRoughness);
			void 0 !== a.fog && (d.fog = a.fog);
			void 0 !== a.flatShading && (d.flatShading = a.flatShading);
			void 0 !== a.blending && (d.blending = a.blending);
			void 0 !== a.combine && (d.combine = a.combine);
			void 0 !== a.side && (d.side = a.side);
			void 0 !== a.opacity && (d.opacity =
				a.opacity);
			void 0 !== a.transparent && (d.transparent = a.transparent);
			void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest);
			void 0 !== a.depthTest && (d.depthTest = a.depthTest);
			void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite);
			void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite);
			void 0 !== a.stencilWrite && (d.stencilWrite = a.stencilWrite);
			void 0 !== a.stencilWriteMask && (d.stencilWriteMask = a.stencilWriteMask);
			void 0 !== a.stencilFunc && (d.stencilFunc = a.stencilFunc);
			void 0 !== a.stencilRef && (d.stencilRef = a.stencilRef);
			void 0 !==
				a.stencilFuncMask && (d.stencilFuncMask = a.stencilFuncMask);
			void 0 !== a.stencilFail && (d.stencilFail = a.stencilFail);
			void 0 !== a.stencilZFail && (d.stencilZFail = a.stencilZFail);
			void 0 !== a.stencilZPass && (d.stencilZPass = a.stencilZPass);
			void 0 !== a.wireframe && (d.wireframe = a.wireframe);
			void 0 !== a.wireframeLinewidth && (d.wireframeLinewidth = a.wireframeLinewidth);
			void 0 !== a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap);
			void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin);
			void 0 !== a.rotation &&
				(d.rotation = a.rotation);
			1 !== a.linewidth && (d.linewidth = a.linewidth);
			void 0 !== a.dashSize && (d.dashSize = a.dashSize);
			void 0 !== a.gapSize && (d.gapSize = a.gapSize);
			void 0 !== a.scale && (d.scale = a.scale);
			void 0 !== a.polygonOffset && (d.polygonOffset = a.polygonOffset);
			void 0 !== a.polygonOffsetFactor && (d.polygonOffsetFactor = a.polygonOffsetFactor);
			void 0 !== a.polygonOffsetUnits && (d.polygonOffsetUnits = a.polygonOffsetUnits);
			void 0 !== a.skinning && (d.skinning = a.skinning);
			void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets);
			void 0 !== a.morphNormals && (d.morphNormals = a.morphNormals);
			void 0 !== a.dithering && (d.dithering = a.dithering);
			void 0 !== a.vertexTangents && (d.vertexTangents = a.vertexTangents);
			void 0 !== a.visible && (d.visible = a.visible);
			void 0 !== a.toneMapped && (d.toneMapped = a.toneMapped);
			void 0 !== a.userData && (d.userData = a.userData);
			void 0 !== a.vertexColors && (d.vertexColors = "number" === typeof a.vertexColors ? 0 < a.vertexColors ? !0 : !1 : a.vertexColors);
			if (void 0 !== a.uniforms)
				for (var e in a.uniforms) {
					var f = a.uniforms[e];
					d.uniforms[e] = {};
					switch (f.type) {
						case "t":
							d.uniforms[e].value = b(f.value);
							break;
						case "c":
							d.uniforms[e].value = (new D).setHex(f.value);
							break;
						case "v2":
							d.uniforms[e].value = (new v).fromArray(f.value);
							break;
						case "v3":
							d.uniforms[e].value = (new p).fromArray(f.value);
							break;
						case "v4":
							d.uniforms[e].value = (new R).fromArray(f.value);
							break;
						case "m3":
							d.uniforms[e].value = (new ya).fromArray(f.value);
						case "m4":
							d.uniforms[e].value = (new N).fromArray(f.value);
							break;
						default:
							d.uniforms[e].value = f.value
					}
				}
			void 0 !== a.defines && (d.defines =
				a.defines);
			void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader);
			void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader);
			if (void 0 !== a.extensions)
				for (var g in a.extensions) d.extensions[g] = a.extensions[g];
			void 0 !== a.shading && (d.flatShading = 1 === a.shading);
			void 0 !== a.size && (d.size = a.size);
			void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation);
			void 0 !== a.map && (d.map = b(a.map));
			void 0 !== a.matcap && (d.matcap = b(a.matcap));
			void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap));
			void 0 !== a.bumpMap &&
				(d.bumpMap = b(a.bumpMap));
			void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale);
			void 0 !== a.normalMap && (d.normalMap = b(a.normalMap));
			void 0 !== a.normalMapType && (d.normalMapType = a.normalMapType);
			void 0 !== a.normalScale && (e = a.normalScale, !1 === Array.isArray(e) && (e = [e, e]), d.normalScale = (new v).fromArray(e));
			void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap));
			void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale);
			void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias);
			void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap));
			void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap));
			void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap));
			void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity);
			void 0 !== a.specularMap && (d.specularMap = b(a.specularMap));
			void 0 !== a.envMap && (d.envMap = b(a.envMap));
			void 0 !== a.envMapIntensity && (d.envMapIntensity = a.envMapIntensity);
			void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity);
			void 0 !== a.refractionRatio && (d.refractionRatio =
				a.refractionRatio);
			void 0 !== a.lightMap && (d.lightMap = b(a.lightMap));
			void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity);
			void 0 !== a.aoMap && (d.aoMap = b(a.aoMap));
			void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity);
			void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap));
			void 0 !== a.clearcoatMap && (d.clearcoatMap = b(a.clearcoatMap));
			void 0 !== a.clearcoatRoughnessMap && (d.clearcoatRoughnessMap = b(a.clearcoatRoughnessMap));
			void 0 !== a.clearcoatNormalMap && (d.clearcoatNormalMap = b(a.clearcoatNormalMap));
			void 0 !== a.clearcoatNormalScale && (d.clearcoatNormalScale = (new v).fromArray(a.clearcoatNormalScale));
			return d
		},
		setTextures: function(a) {
			this.textures = a;
			return this
		}
	});
	var lh = {
		decodeText: function(a) {
			if ("undefined" !== typeof TextDecoder) return (new TextDecoder).decode(a);
			for (var b = "", c = 0, d = a.length; c < d; c++) b += String.fromCharCode(a[c]);
			try {
				return decodeURIComponent(escape(b))
			} catch (e) {
				return b
			}
		},
		extractUrlBase: function(a) {
			var b = a.lastIndexOf("https://artemsemkin.com/");
			return -1 === b ? "./" : a.substr(0, b + 1)
		}
	};
	me.prototype = Object.assign(Object.create(F.prototype), {
		constructor: me,
		isInstancedBufferGeometry: !0,
		copy: function(a) {
			F.prototype.copy.call(this, a);
			this.instanceCount = a.instanceCount;
			return this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		toJSON: function() {
			var a = F.prototype.toJSON.call(this);
			a.instanceCount = this.instanceCount;
			a.isInstancedBufferGeometry = !0;
			return a
		}
	});
	qf.prototype = Object.assign(Object.create(G.prototype), {
		constructor: qf,
		isInstancedBufferAttribute: !0,
		copy: function(a) {
			G.prototype.copy.call(this, a);
			this.meshPerAttribute = a.meshPerAttribute;
			return this
		},
		toJSON: function() {
			var a = G.prototype.toJSON.call(this);
			a.meshPerAttribute = this.meshPerAttribute;
			a.isInstancedBufferAttribute = !0;
			return a
		}
	});
	rf.prototype = Object.assign(Object.create(V.prototype), {
		constructor: rf,
		load: function(a, b, c, d) {
			var e = this,
				f = new Ta(e.manager);
			f.setPath(e.path);
			f.load(a, function(c) {
				try {
					b(e.parse(JSON.parse(c)))
				} catch (h) {
					d ? d(h) : console.error(h), e.manager.itemError(a)
				}
			}, c, d)
		},
		parse: function(a) {
			var b = a.isInstancedBufferGeometry ? new me : new F,
				c = a.data.index;
			if (void 0 !==
				c) {
				var d = new mh[c.type](c.array);
				b.setIndex(new G(d, 1))
			}
			c = a.data.attributes;
			for (var e in c) {
				var f = c[e];
				d = new mh[f.type](f.array);
				d = new(f.isInstancedBufferAttribute ? qf : G)(d, f.itemSize, f.normalized);
				void 0 !== f.name && (d.name = f.name);
				b.setAttribute(e, d)
			}
			var g = a.data.morphAttributes;
			if (g)
				for (e in g) {
					var h = g[e],
						l = [];
					c = 0;
					for (var k = h.length; c < k; c++) f = h[c], d = new mh[f.type](f.array), d = new G(d, f.itemSize, f.normalized), void 0 !== f.name && (d.name = f.name), l.push(d);
					b.morphAttributes[e] = l
				}
			a.data.morphTargetsRelative &&
				(b.morphTargetsRelative = !0);
			e = a.data.groups || a.data.drawcalls || a.data.offsets;
			if (void 0 !== e)
				for (c = 0, f = e.length; c !== f; ++c) d = e[c], b.addGroup(d.start, d.count, d.materialIndex);
			c = a.data.boundingSphere;
			void 0 !== c && (e = new p, void 0 !== c.center && e.fromArray(c.center), b.boundingSphere = new eb(e, c.radius));
			a.name && (b.name = a.name);
			a.userData && (b.userData = a.userData);
			return b
		}
	});
	var mh = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};
	sf.prototype = Object.assign(Object.create(V.prototype), {
		constructor: sf,
		load: function(a, b, c, d) {
			var e = this,
				f = "" === this.path ? lh.extractUrlBase(a) : this.path;
			this.resourcePath = this.resourcePath || f;
			f = new Ta(e.manager);
			f.setPath(this.path);
			f.load(a, function(c) {
				var f = null;
				try {
					f = JSON.parse(c)
				} catch (l) {
					void 0 !== d && d(l);
					console.error("THREE:ObjectLoader: Can't parse " +
						a + ".", l.message);
					return
				}
				c = f.metadata;
				void 0 === c || void 0 === c.type || "geometry" === c.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + a) : e.parse(f, b)
			}, c, d)
		},
		parse: function(a, b) {
			var c = this.parseShape(a.shapes);
			c = this.parseGeometries(a.geometries, c);
			var d = this.parseImages(a.images, function() {
				void 0 !== b && b(e)
			});
			d = this.parseTextures(a.textures, d);
			d = this.parseMaterials(a.materials, d);
			var e = this.parseObject(a.object, c, d);
			a.animations && (e.animations = this.parseAnimations(a.animations));
			void 0 !==
				a.images && 0 !== a.images.length || void 0 === b || b(e);
			return e
		},
		parseShape: function(a) {
			var b = {};
			if (void 0 !== a)
				for (var c = 0, d = a.length; c < d; c++) {
					var e = (new Nb).fromJSON(a[c]);
					b[e.uuid] = e
				}
			return b
		},
		parseGeometries: function(a, b) {
			var c = {};
			if (void 0 !== a)
				for (var d = new rf, e = 0, f = a.length; e < f; e++) {
					var g = a[e];
					switch (g.type) {
						case "PlaneGeometry":
						case "PlaneBufferGeometry":
							var h = new ra[g.type](g.width, g.height, g.widthSegments, g.heightSegments);
							break;
						case "BoxGeometry":
						case "BoxBufferGeometry":
						case "CubeGeometry":
							h = new ra[g.type](g.width,
								g.height, g.depth, g.widthSegments, g.heightSegments, g.depthSegments);
							break;
						case "CircleGeometry":
						case "CircleBufferGeometry":
							h = new ra[g.type](g.radius, g.segments, g.thetaStart, g.thetaLength);
							break;
						case "CylinderGeometry":
						case "CylinderBufferGeometry":
							h = new ra[g.type](g.radiusTop, g.radiusBottom, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength);
							break;
						case "ConeGeometry":
						case "ConeBufferGeometry":
							h = new ra[g.type](g.radius, g.height, g.radialSegments, g.heightSegments, g.openEnded,
								g.thetaStart, g.thetaLength);
							break;
						case "SphereGeometry":
						case "SphereBufferGeometry":
							h = new ra[g.type](g.radius, g.widthSegments, g.heightSegments, g.phiStart, g.phiLength, g.thetaStart, g.thetaLength);
							break;
						case "DodecahedronGeometry":
						case "DodecahedronBufferGeometry":
						case "IcosahedronGeometry":
						case "IcosahedronBufferGeometry":
						case "OctahedronGeometry":
						case "OctahedronBufferGeometry":
						case "TetrahedronGeometry":
						case "TetrahedronBufferGeometry":
							h = new ra[g.type](g.radius, g.detail);
							break;
						case "RingGeometry":
						case "RingBufferGeometry":
							h =
								new ra[g.type](g.innerRadius, g.outerRadius, g.thetaSegments, g.phiSegments, g.thetaStart, g.thetaLength);
							break;
						case "TorusGeometry":
						case "TorusBufferGeometry":
							h = new ra[g.type](g.radius, g.tube, g.radialSegments, g.tubularSegments, g.arc);
							break;
						case "TorusKnotGeometry":
						case "TorusKnotBufferGeometry":
							h = new ra[g.type](g.radius, g.tube, g.tubularSegments, g.radialSegments, g.p, g.q);
							break;
						case "TubeGeometry":
						case "TubeBufferGeometry":
							h = new ra[g.type]((new kh[g.path.type]).fromJSON(g.path), g.tubularSegments, g.radius,
								g.radialSegments, g.closed);
							break;
						case "LatheGeometry":
						case "LatheBufferGeometry":
							h = new ra[g.type](g.points, g.segments, g.phiStart, g.phiLength);
							break;
						case "PolyhedronGeometry":
						case "PolyhedronBufferGeometry":
							h = new ra[g.type](g.vertices, g.indices, g.radius, g.details);
							break;
						case "ShapeGeometry":
						case "ShapeBufferGeometry":
							h = [];
							for (var l = 0, k = g.shapes.length; l < k; l++) {
								var p = b[g.shapes[l]];
								h.push(p)
							}
							h = new ra[g.type](h, g.curveSegments);
							break;
						case "ExtrudeGeometry":
						case "ExtrudeBufferGeometry":
							h = [];
							l = 0;
							for (k =
								g.shapes.length; l < k; l++) p = b[g.shapes[l]], h.push(p);
							l = g.options.extrudePath;
							void 0 !== l && (g.options.extrudePath = (new kh[l.type]).fromJSON(l));
							h = new ra[g.type](h, g.options);
							break;
						case "BufferGeometry":
						case "InstancedBufferGeometry":
							h = d.parse(g);
							break;
						case "Geometry":
							console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
							break;
						default:
							console.warn('THREE.ObjectLoader: Unsupported geometry type "' + g.type + '"');
							continue
					}
					h.uuid = g.uuid;
					void 0 !== g.name && (h.name = g.name);
					!0 === h.isBufferGeometry &&
						void 0 !== g.userData && (h.userData = g.userData);
					c[g.uuid] = h
				}
			return c
		},
		parseMaterials: function(a, b) {
			var c = {},
				d = {};
			if (void 0 !== a) {
				var e = new pf;
				e.setTextures(b);
				b = 0;
				for (var f = a.length; b < f; b++) {
					var g = a[b];
					if ("MultiMaterial" === g.type) {
						for (var h = [], l = 0; l < g.materials.length; l++) {
							var k = g.materials[l];
							void 0 === c[k.uuid] && (c[k.uuid] = e.parse(k));
							h.push(c[k.uuid])
						}
						d[g.uuid] = h
					} else void 0 === c[g.uuid] && (c[g.uuid] = e.parse(g)), d[g.uuid] = c[g.uuid]
				}
			}
			return d
		},
		parseAnimations: function(a) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d =
					a[c],
					e = Sa.parse(d);
				void 0 !== d.uuid && (e.uuid = d.uuid);
				b.push(e)
			}
			return b
		},
		parseImages: function(a, b) {
			function c(a) {
				d.manager.itemStart(a);
				return f.load(a, function() {
					d.manager.itemEnd(a)
				}, void 0, function() {
					d.manager.itemError(a);
					d.manager.itemEnd(a)
				})
			}
			var d = this,
				e = {};
			if (void 0 !== a && 0 < a.length) {
				b = new qg(b);
				var f = new dd(b);
				f.setCrossOrigin(this.crossOrigin);
				b = 0;
				for (var g = a.length; b < g; b++) {
					var h = a[b],
						l = h.url;
					if (Array.isArray(l)) {
						e[h.uuid] = [];
						for (var k = 0, p = l.length; k < p; k++) {
							var n = l[k];
							n = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ?
								n : d.resourcePath + n;
							e[h.uuid].push(c(n))
						}
					} else n = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : d.resourcePath + h.url, e[h.uuid] = c(n)
				}
			}
			return e
		},
		parseTextures: function(a, b) {
			function c(a, b) {
				if ("number" === typeof a) return a;
				console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
				return b[a]
			}
			var d = {};
			if (void 0 !== a)
				for (var e = 0, f = a.length; e < f; e++) {
					var g = a[e];
					void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
					void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image",
						g.image);
					var h = Array.isArray(b[g.image]) ? new qb(b[g.image]) : new W(b[g.image]);
					h.needsUpdate = !0;
					h.uuid = g.uuid;
					void 0 !== g.name && (h.name = g.name);
					void 0 !== g.mapping && (h.mapping = c(g.mapping, Tk));
					void 0 !== g.offset && h.offset.fromArray(g.offset);
					void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
					void 0 !== g.center && h.center.fromArray(g.center);
					void 0 !== g.rotation && (h.rotation = g.rotation);
					void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], Ni), h.wrapT = c(g.wrap[1], Ni));
					void 0 !== g.format && (h.format = g.format);
					void 0 !== g.type &&
						(h.type = g.type);
					void 0 !== g.encoding && (h.encoding = g.encoding);
					void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Oi));
					void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Oi));
					void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
					void 0 !== g.flipY && (h.flipY = g.flipY);
					void 0 !== g.premultiplyAlpha && (h.premultiplyAlpha = g.premultiplyAlpha);
					void 0 !== g.unpackAlignment && (h.unpackAlignment = g.unpackAlignment);
					d[g.uuid] = h
				}
			return d
		},
		parseObject: function(a, b, c) {
			function d(a) {
				void 0 === b[a] && console.warn("THREE.ObjectLoader: Undefined geometry",
					a);
				return b[a]
			}

			function e(a) {
				if (void 0 !== a) {
					if (Array.isArray(a)) {
						for (var b = [], d = 0, e = a.length; d < e; d++) {
							var f = a[d];
							void 0 === c[f] && console.warn("THREE.ObjectLoader: Undefined material", f);
							b.push(c[f])
						}
						return b
					}
					void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined material", a);
					return c[a]
				}
			}
			switch (a.type) {
				case "Scene":
					var f = new zc;
					void 0 !== a.background && Number.isInteger(a.background) && (f.background = new D(a.background));
					void 0 !== a.fog && ("Fog" === a.fog.type ? f.fog = new Oe(a.fog.color, a.fog.near, a.fog.far) :
						"FogExp2" === a.fog.type && (f.fog = new Ne(a.fog.color, a.fog.density)));
					break;
				case "PerspectiveCamera":
					f = new P(a.fov, a.aspect, a.near, a.far);
					void 0 !== a.focus && (f.focus = a.focus);
					void 0 !== a.zoom && (f.zoom = a.zoom);
					void 0 !== a.filmGauge && (f.filmGauge = a.filmGauge);
					void 0 !== a.filmOffset && (f.filmOffset = a.filmOffset);
					void 0 !== a.view && (f.view = Object.assign({}, a.view));
					break;
				case "OrthographicCamera":
					f = new fd(a.left, a.right, a.top, a.bottom, a.near, a.far);
					void 0 !== a.zoom && (f.zoom = a.zoom);
					void 0 !== a.view && (f.view = Object.assign({},
						a.view));
					break;
				case "AmbientLight":
					f = new mf(a.color, a.intensity);
					break;
				case "DirectionalLight":
					f = new lf(a.color, a.intensity);
					break;
				case "PointLight":
					f = new jf(a.color, a.intensity, a.distance, a.decay);
					break;
				case "RectAreaLight":
					f = new nf(a.color, a.intensity, a.width, a.height);
					break;
				case "SpotLight":
					f = new hf(a.color, a.intensity, a.distance, a.angle, a.penumbra, a.decay);
					break;
				case "HemisphereLight":
					f = new ff(a.color, a.groundColor, a.intensity);
					break;
				case "LightProbe":
					f = (new Ua).fromJSON(a);
					break;
				case "SkinnedMesh":
					console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
				case "Mesh":
					f = d(a.geometry);
					var g = e(a.material);
					f = new ea(f, g);
					break;
				case "InstancedMesh":
					f = d(a.geometry);
					g = e(a.material);
					var h = a.instanceMatrix;
					f = new Se(f, g, a.count);
					f.instanceMatrix = new G(new Float32Array(h.array), 16);
					break;
				case "LOD":
					f = new Nd;
					break;
				case "Line":
					f = new La(d(a.geometry), e(a.material), a.mode);
					break;
				case "LineLoop":
					f = new Te(d(a.geometry), e(a.material));
					break;
				case "LineSegments":
					f = new ma(d(a.geometry), e(a.material));
					break;
				case "PointCloud":
				case "Points":
					f = new Nc(d(a.geometry), e(a.material));
					break;
				case "Sprite":
					f = new Ld(e(a.material));
					break;
				case "Group":
					f = new Kc;
					break;
				default:
					f = new y
			}
			f.uuid = a.uuid;
			void 0 !== a.name && (f.name = a.name);
			void 0 !== a.matrix ? (f.matrix.fromArray(a.matrix), void 0 !== a.matrixAutoUpdate && (f.matrixAutoUpdate = a.matrixAutoUpdate), f.matrixAutoUpdate && f.matrix.decompose(f.position, f.quaternion, f.scale)) : (void 0 !== a.position && f.position.fromArray(a.position), void 0 !== a.rotation && f.rotation.fromArray(a.rotation), void 0 !== a.quaternion && f.quaternion.fromArray(a.quaternion), void 0 !==
				a.scale && f.scale.fromArray(a.scale));
			void 0 !== a.castShadow && (f.castShadow = a.castShadow);
			void 0 !== a.receiveShadow && (f.receiveShadow = a.receiveShadow);
			a.shadow && (void 0 !== a.shadow.bias && (f.shadow.bias = a.shadow.bias), void 0 !== a.shadow.radius && (f.shadow.radius = a.shadow.radius), void 0 !== a.shadow.mapSize && f.shadow.mapSize.fromArray(a.shadow.mapSize), void 0 !== a.shadow.camera && (f.shadow.camera = this.parseObject(a.shadow.camera)));
			void 0 !== a.visible && (f.visible = a.visible);
			void 0 !== a.frustumCulled && (f.frustumCulled =
				a.frustumCulled);
			void 0 !== a.renderOrder && (f.renderOrder = a.renderOrder);
			void 0 !== a.userData && (f.userData = a.userData);
			void 0 !== a.layers && (f.layers.mask = a.layers);
			if (void 0 !== a.children)
				for (h = a.children, g = 0; g < h.length; g++) f.add(this.parseObject(h[g], b, c));
			if ("LOD" === a.type)
				for (void 0 !== a.autoUpdate && (f.autoUpdate = a.autoUpdate), a = a.levels, h = 0; h < a.length; h++) {
					g = a[h];
					var l = f.getObjectByProperty("uuid", g.object);
					void 0 !== l && f.addLevel(l, g.distance)
				}
			return f
		}
	});
	var Tk = {
			UVMapping: 300,
			CubeReflectionMapping: 301,
			CubeRefractionMapping: 302,
			EquirectangularReflectionMapping: 303,
			EquirectangularRefractionMapping: 304,
			SphericalReflectionMapping: 305,
			CubeUVReflectionMapping: 306,
			CubeUVRefractionMapping: 307
		},
		Ni = {
			RepeatWrapping: 1E3,
			ClampToEdgeWrapping: 1001,
			MirroredRepeatWrapping: 1002
		},
		Oi = {
			NearestFilter: 1003,
			NearestMipmapNearestFilter: 1004,
			NearestMipmapLinearFilter: 1005,
			LinearFilter: 1006,
			LinearMipmapNearestFilter: 1007,
			LinearMipmapLinearFilter: 1008
		};
	vg.prototype = Object.assign(Object.create(V.prototype), {
		constructor: vg,
		setOptions: function(a) {
			this.options = a;
			return this
		},
		load: function(a, b, c, d) {
			void 0 === a && (a = "");
			void 0 !== this.path && (a = this.path + a);
			a = this.manager.resolveURL(a);
			var e = this,
				f = tc.get(a);
			if (void 0 !== f) return e.manager.itemStart(a), setTimeout(function() {
				b && b(f);
				e.manager.itemEnd(a)
			}, 0), f;
			fetch(a).then(function(a) {
				return a.blob()
			}).then(function(a) {
				return void 0 === e.options ? createImageBitmap(a) : createImageBitmap(a, e.options)
			}).then(function(c) {
				tc.add(a, c);
				b && b(c);
				e.manager.itemEnd(a)
			}).catch(function(b) {
				d &&
					d(b);
				e.manager.itemError(a);
				e.manager.itemEnd(a)
			});
			e.manager.itemStart(a)
		}
	});
	Object.assign(wg.prototype, {
		moveTo: function(a, b) {
			this.currentPath = new bb;
			this.subPaths.push(this.currentPath);
			this.currentPath.moveTo(a, b);
			return this
		},
		lineTo: function(a, b) {
			this.currentPath.lineTo(a, b);
			return this
		},
		quadraticCurveTo: function(a, b, c, d) {
			this.currentPath.quadraticCurveTo(a, b, c, d);
			return this
		},
		bezierCurveTo: function(a, b, c, d, e, f) {
			this.currentPath.bezierCurveTo(a, b, c, d, e, f);
			return this
		},
		splineThru: function(a) {
			this.currentPath.splineThru(a);
			return this
		},
		toShapes: function(a, b) {
			function c(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) {
					var e = a[c],
						f = new Nb;
					f.curves = e.curves;
					b.push(f)
				}
				return b
			}

			function d(a, b) {
				for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
					var g = b[e],
						h = b[f],
						l = h.x - g.x,
						k = h.y - g.y;
					if (Math.abs(k) > Number.EPSILON) {
						if (0 > k && (g = b[f], l = -l, h = b[e], k = -k), !(a.y < g.y || a.y > h.y))
							if (a.y === g.y) {
								if (a.x === g.x) return !0
							} else {
								e = k * (a.x - g.x) - l * (a.y - g.y);
								if (0 === e) return !0;
								0 > e || (d = !d)
							}
					} else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0
				}
				return d
			}
			var e = sb.isClockWise,
				f = this.subPaths;
			if (0 === f.length) return [];
			if (!0 === b) return c(f);
			b = [];
			if (1 === f.length) {
				var g = f[0];
				var h = new Nb;
				h.curves = g.curves;
				b.push(h);
				return b
			}
			var l = !e(f[0].getPoints());
			l = a ? !l : l;
			h = [];
			var k = [],
				p = [],
				n = 0;
			k[n] = void 0;
			p[n] = [];
			for (var t = 0, r = f.length; t < r; t++) {
				g = f[t];
				var q = g.getPoints();
				var u = e(q);
				(u = a ? !u : u) ? (!l && k[n] && n++, k[n] = {
					s: new Nb,
					p: q
				}, k[n].s.curves = g.curves, l && n++, p[n] = []) : p[n].push({
					h: g,
					p: q[0]
				})
			}
			if (!k[0]) return c(f);
			if (1 < k.length) {
				t = !1;
				a = [];
				e = 0;
				for (f = k.length; e < f; e++) h[e] = [];
				e = 0;
				for (f = k.length; e < f; e++)
					for (g = p[e], u = 0; u < g.length; u++) {
						l = g[u];
						n = !0;
						for (q = 0; q < k.length; q++) d(l.p, k[q].p) && (e !== q && a.push({
							froms: e,
							tos: q,
							hole: u
						}), n ? (n = !1, h[q].push(l)) : t = !0);
						n && h[e].push(l)
					}
				0 < a.length && (t || (p = h))
			}
			t = 0;
			for (e = k.length; t < e; t++)
				for (h = k[t].s, b.push(h), a = p[t], f = 0, g = a.length; f < g; f++) h.holes.push(a[f].h);
			return b
		}
	});
	Object.assign(xg.prototype, {
		isFont: !0,
		generateShapes: function(a, b) {
			void 0 === b && (b = 100);
			var c = [],
				d = b;
			b = this.data;
			var e = Array.from ? Array.from(a) : String(a).split("");
			d /= b.resolution;
			var f = (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d;
			a = [];
			for (var g = 0, h = 0, l = 0; l < e.length; l++) {
				var k = e[l];
				if ("\n" === k) g = 0, h -= f;
				else {
					var p = k;
					k = d;
					var n = g,
						t = h,
						r = b,
						q = r.glyphs[p] || r.glyphs["?"];
					if (q) {
						p = new wg;
						if (q.o) {
							r = q._cachedOutline || (q._cachedOutline = q.o.split(" "));
							for (var u = 0, v = r.length; u < v;) switch (r[u++]) {
								case "m":
									var x = r[u++] * k + n;
									var w = r[u++] * k + t;
									p.moveTo(x, w);
									break;
								case "l":
									x = r[u++] * k + n;
									w = r[u++] * k + t;
									p.lineTo(x, w);
									break;
								case "q":
									var y = r[u++] * k + n;
									var A = r[u++] * k + t;
									var B = r[u++] * k + n;
									var C = r[u++] * k + t;
									p.quadraticCurveTo(B, C, y, A);
									break;
								case "b":
									y = r[u++] * k + n, A = r[u++] * k + t, B = r[u++] * k + n, C = r[u++] * k + t, x = r[u++] * k + n, w = r[u++] * k + t, p.bezierCurveTo(B, C, x, w, y, A)
							}
						}
						k = {
							offsetX: q.ha * k,
							path: p
						}
					} else console.error('THREE.Font: character "' + p + '" does not exists in font family ' + r.familyName + "."), k = void 0;
					g += k.offsetX;
					a.push(k.path)
				}
			}
			b = 0;
			for (e = a.length; b < e; b++) Array.prototype.push.apply(c, a[b].toShapes());
			return c
		}
	});
	yg.prototype = Object.assign(Object.create(V.prototype), {
		constructor: yg,
		load: function(a,
			b, c, d) {
			var e = this,
				f = new Ta(this.manager);
			f.setPath(this.path);
			f.load(a, function(a) {
				try {
					var c = JSON.parse(a)
				} catch (l) {
					console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2))
				}
				a = e.parse(c);
				b && b(a)
			}, c, d)
		},
		parse: function(a) {
			return new xg(a)
		}
	});
	var Rf, Dg = {
		getContext: function() {
			void 0 === Rf && (Rf = new(window.AudioContext || window.webkitAudioContext));
			return Rf
		},
		setContext: function(a) {
			Rf = a
		}
	};
	tf.prototype = Object.assign(Object.create(V.prototype), {
		constructor: tf,
		load: function(a, b, c, d) {
			var e = this,
				f = new Ta(e.manager);
			f.setResponseType("arraybuffer");
			f.setPath(e.path);
			f.load(a, function(c) {
				try {
					var f = c.slice(0);
					Dg.getContext().decodeAudioData(f, function(a) {
						b(a)
					})
				} catch (l) {
					d ? d(l) : console.error(l), e.manager.itemError(a)
				}
			}, c, d)
		}
	});
	"undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
		detail: {
			revision: "117"
		}
	}));
	k.ACESFilmicToneMapping = 5;
	k.AddEquation = 100;
	k.AddOperation = 2;
	k.AdditiveAnimationBlendMode = 2501;
	k.AdditiveBlending = 2;
	k.AlphaFormat = 1021;
	k.AlwaysDepth = 1;
	k.AlwaysStencilFunc = 519;
	k.AmbientLight = mf;
	k.AmbientLightProbe = Ag;
	k.AnimationClip = Sa;
	k.AnimationLoader = rg;
	k.AnimationMixer = Hg;
	k.AnimationObjectGroup = ii;
	k.AnimationUtils = ka;
	k.ArcCurve = ed;
	k.ArrayCamera = Le;
	k.ArrowHelper = xb;
	k.Audio =
		gd;
	k.AudioAnalyser = Fg;
	k.AudioContext = Dg;
	k.AudioListener = Cg;
	k.AudioLoader = tf;
	k.AxesHelper = re;
	k.AxisHelper = function(a) {
		console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
		return new re(a)
	};
	k.BackSide = 1;
	k.BasicDepthPacking = 3200;
	k.BasicShadowMap = 0;
	k.BinaryTextureLoader = function(a) {
		console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
		return new cf(a)
	};
	k.Bone = kg;
	k.BooleanKeyframeTrack = Ze;
	k.BoundingBoxHelper = function(a, b) {
		console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
		return new wb(a, b)
	};
	k.Box2 = Lg;
	k.Box3 = Va;
	k.Box3Helper = pe;
	k.BoxBufferGeometry = Gd;
	k.BoxGeometry = fh;
	k.BoxHelper = wb;
	k.BufferAttribute = G;
	k.BufferGeometry = F;
	k.BufferGeometryLoader = rf;
	k.ByteType = 1010;
	k.Cache = tc;
	k.Camera = fb;
	k.CameraHelper = oe;
	k.CanvasRenderer = function() {
		console.error("THREE.CanvasRenderer has been removed")
	};
	k.CanvasTexture = Od;
	k.CatmullRomCurve3 = qa;
	k.CineonToneMapping = 4;
	k.CircleBufferGeometry = ad;
	k.CircleGeometry = he;
	k.ClampToEdgeWrapping = 1001;
	k.Clock = Bg;
	k.ClosedSplineCurve3 = ri;
	k.Color = D;
	k.ColorKeyframeTrack =
		$e;
	k.CompressedTexture = Oc;
	k.CompressedTextureLoader = sg;
	k.ConeBufferGeometry = ge;
	k.ConeGeometry = fe;
	k.CubeCamera = Fc;
	k.CubeGeometry = fh;
	k.CubeReflectionMapping = 301;
	k.CubeRefractionMapping = 302;
	k.CubeTexture = qb;
	k.CubeTextureLoader = df;
	k.CubeUVReflectionMapping = 306;
	k.CubeUVRefractionMapping = 307;
	k.CubicBezierCurve = Ya;
	k.CubicBezierCurve3 = jb;
	k.CubicInterpolant = Xe;
	k.CullFaceBack = 1;
	k.CullFaceFront = 2;
	k.CullFaceFrontBack = 3;
	k.CullFaceNone = 0;
	k.Curve = H;
	k.CurvePath = vb;
	k.CustomBlending = 5;
	k.CylinderBufferGeometry = tb;
	k.CylinderGeometry =
		hc;
	k.Cylindrical = mi;
	k.DataTexture = $b;
	k.DataTexture2DArray = Hc;
	k.DataTexture3D = Ic;
	k.DataTextureLoader = cf;
	k.DecrementStencilOp = 7683;
	k.DecrementWrapStencilOp = 34056;
	k.DefaultLoadingManager = ei;
	k.DepthFormat = 1026;
	k.DepthStencilFormat = 1027;
	k.DepthTexture = Pd;
	k.DirectionalLight = lf;
	k.DirectionalLightHelper = kd;
	k.DirectionalLightShadow = kf;
	k.DiscreteInterpolant = Ye;
	k.DodecahedronBufferGeometry = Tc;
	k.DodecahedronGeometry = Vd;
	k.DoubleSide = 2;
	k.DstAlphaFactor = 206;
	k.DstColorFactor = 208;
	k.DynamicBufferAttribute = function(a,
		b) {
		console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.");
		return (new G(a, b)).setUsage(35048)
	};
	k.DynamicCopyUsage = 35050;
	k.DynamicDrawUsage = 35048;
	k.DynamicReadUsage = 35049;
	k.EdgesGeometry = $c;
	k.EdgesHelper = function(a, b) {
		console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
		return new ma(new $c(a.geometry), new da({
			color: void 0 !== b ? b : 16777215
		}))
	};
	k.EllipseCurve = Na;
	k.EqualDepth = 4;
	k.EqualStencilFunc =
		514;
	k.EquirectangularReflectionMapping = 303;
	k.EquirectangularRefractionMapping = 304;
	k.Euler = Ub;
	k.EventDispatcher = ua;
	k.ExtrudeBufferGeometry = hb;
	k.ExtrudeGeometry = dc;
	k.Face3 = Ac;
	k.Face4 = function(a, b, c, d, e, f, g) {
		console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
		return new Ac(a, b, c, e, f, g)
	};
	k.FaceColors = 1;
	k.FileLoader = Ta;
	k.FlatShading = 1;
	k.Float32Attribute = function(a, b) {
		console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
		return new B(a, b)
	};
	k.Float32BufferAttribute = B;
	k.Float64Attribute = function(a, b) {
		console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
		return new Dd(a, b)
	};
	k.Float64BufferAttribute = Dd;
	k.FloatType = 1015;
	k.Fog = Oe;
	k.FogExp2 = Ne;
	k.Font = xg;
	k.FontLoader = yg;
	k.FrontFaceDirectionCCW = 1;
	k.FrontFaceDirectionCW = 0;
	k.FrontSide = 0;
	k.Frustum = Gc;
	k.GammaEncoding = 3007;
	k.Geometry = L;
	k.GeometryUtils = {
		merge: function(a, b, c) {
			console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
			if (b.isMesh) {
				b.matrixAutoUpdate && b.updateMatrix();
				var d = b.matrix;
				b = b.geometry
			}
			a.merge(b, d, c)
		},
		center: function(a) {
			console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
			return a.center()
		}
	};
	k.GreaterDepth = 6;
	k.GreaterEqualDepth = 5;
	k.GreaterEqualStencilFunc = 518;
	k.GreaterStencilFunc = 516;
	k.GridHelper = vf;
	k.Group = Kc;
	k.HalfFloatType = 1016;
	k.HemisphereLight = ff;
	k.HemisphereLightHelper = jd;
	k.HemisphereLightProbe = zg;
	k.IcosahedronBufferGeometry = Sc;
	k.IcosahedronGeometry =
		Ud;
	k.ImageBitmapLoader = vg;
	k.ImageLoader = dd;
	k.ImageUtils = Ob;
	k.ImmediateRenderObject = ne;
	k.IncrementStencilOp = 7682;
	k.IncrementWrapStencilOp = 34055;
	k.InstancedBufferAttribute = qf;
	k.InstancedBufferGeometry = me;
	k.InstancedInterleavedBuffer = Ig;
	k.InstancedMesh = Se;
	k.Int16Attribute = function(a, b) {
		console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
		return new Bd(a, b)
	};
	k.Int16BufferAttribute = Bd;
	k.Int32Attribute = function(a, b) {
		console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
		return new Cd(a, b)
	};
	k.Int32BufferAttribute = Cd;
	k.Int8Attribute = function(a, b) {
		console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
		return new yd(a, b)
	};
	k.Int8BufferAttribute = yd;
	k.IntType = 1013;
	k.InterleavedBuffer = rb;
	k.InterleavedBufferAttribute = Kd;
	k.Interpolant = Ma;
	k.InterpolateDiscrete = 2300;
	k.InterpolateLinear = 2301;
	k.InterpolateSmooth = 2302;
	k.InvertStencilOp = 5386;
	k.JSONLoader = function() {
		console.error("THREE.JSONLoader has been removed.")
	};
	k.KeepStencilOp = 7680;
	k.KeyframeTrack = ta;
	k.LOD = Nd;
	k.LatheBufferGeometry = Zc;
	k.LatheGeometry = ee;
	k.Layers = De;
	k.LensFlare = function() {
		console.error("https://artemsemkin.com/rhye/html/THREE.LensFlare has been moved to /examples/jsm/objects/404.html")
	};
	k.LessDepth = 2;
	k.LessEqualDepth = 3;
	k.LessEqualStencilFunc = 515;
	k.LessStencilFunc = 513;
	k.Light = S;
	k.LightProbe = Ua;
	k.LightShadow = lb;
	k.Line = La;
	k.Line3 = Mg;
	k.LineBasicMaterial = da;
	k.LineCurve = Ia;
	k.LineCurve3 = Za;
	k.LineDashedMaterial = oc;
	k.LineLoop = Te;
	k.LinePieces = 1;
	k.LineSegments = ma;
	k.LineStrip = 0;
	k.LinearEncoding = 3E3;
	k.LinearFilter =
		1006;
	k.LinearInterpolant = ie;
	k.LinearMipMapLinearFilter = 1008;
	k.LinearMipMapNearestFilter = 1007;
	k.LinearMipmapLinearFilter = 1008;
	k.LinearMipmapNearestFilter = 1007;
	k.LinearToneMapping = 1;
	k.Loader = V;
	k.LoaderUtils = lh;
	k.LoadingManager = qg;
	k.LogLuvEncoding = 3003;
	k.LoopOnce = 2200;
	k.LoopPingPong = 2202;
	k.LoopRepeat = 2201;
	k.LuminanceAlphaFormat = 1025;
	k.LuminanceFormat = 1024;
	k.MOUSE = {
		LEFT: 0,
		MIDDLE: 1,
		RIGHT: 2,
		ROTATE: 0,
		DOLLY: 1,
		PAN: 2
	};
	k.Material = K;
	k.MaterialLoader = pf;
	k.Math = O;
	k.MathUtils = O;
	k.Matrix3 = ya;
	k.Matrix4 = N;
	k.MaxEquation =
		104;
	k.Mesh = ea;
	k.MeshBasicMaterial = Pa;
	k.MeshDepthMaterial = Hb;
	k.MeshDistanceMaterial = Ib;
	k.MeshFaceMaterial = function(a) {
		console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
		return a
	};
	k.MeshLambertMaterial = mc;
	k.MeshMatcapMaterial = nc;
	k.MeshNormalMaterial = lc;
	k.MeshPhongMaterial = Mb;
	k.MeshPhysicalMaterial = jc;
	k.MeshStandardMaterial = ib;
	k.MeshToonMaterial = kc;
	k.MinEquation = 103;
	k.MirroredRepeatWrapping = 1002;
	k.MixOperation = 1;
	k.MultiMaterial = function(a) {
		void 0 === a && (a = []);
		console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
		a.isMultiMaterial = !0;
		a.materials = a;
		a.clone = function() {
			return a.slice()
		};
		return a
	};
	k.MultiplyBlending = 4;
	k.MultiplyOperation = 0;
	k.NearestFilter = 1003;
	k.NearestMipMapLinearFilter = 1005;
	k.NearestMipMapNearestFilter = 1004;
	k.NearestMipmapLinearFilter = 1005;
	k.NearestMipmapNearestFilter = 1004;
	k.NeverDepth = 0;
	k.NeverStencilFunc = 512;
	k.NoBlending = 0;
	k.NoColors = 0;
	k.NoToneMapping = 0;
	k.NormalAnimationBlendMode = 2500;
	k.NormalBlending = 1;
	k.NotEqualDepth = 7;
	k.NotEqualStencilFunc = 517;
	k.NumberKeyframeTrack = bd;
	k.Object3D = y;
	k.ObjectLoader =
		sf;
	k.ObjectSpaceNormalMap = 1;
	k.OctahedronBufferGeometry = bc;
	k.OctahedronGeometry = Td;
	k.OneFactor = 201;
	k.OneMinusDstAlphaFactor = 207;
	k.OneMinusDstColorFactor = 209;
	k.OneMinusSrcAlphaFactor = 205;
	k.OneMinusSrcColorFactor = 203;
	k.OrthographicCamera = fd;
	k.PCFShadowMap = 1;
	k.PCFSoftShadowMap = 2;
	k.PMREMGenerator = Og;
	k.ParametricBufferGeometry = Qc;
	k.ParametricGeometry = Qd;
	k.Particle = function(a) {
		console.warn("THREE.Particle has been renamed to THREE.Sprite.");
		return new Ld(a)
	};
	k.ParticleBasicMaterial = function(a) {
		console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
		return new Xa(a)
	};
	k.ParticleSystem = function(a, b) {
		console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
		return new Nc(a, b)
	};
	k.ParticleSystemMaterial = function(a) {
		console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
		return new Xa(a)
	};
	k.Path = bb;
	k.PerspectiveCamera = P;
	k.Plane = Wa;
	k.PlaneBufferGeometry = ac;
	k.PlaneGeometry = Fd;
	k.PlaneHelper = qe;
	k.PointCloud = function(a, b) {
		console.warn("THREE.PointCloud has been renamed to THREE.Points.");
		return new Nc(a, b)
	};
	k.PointCloudMaterial =
		function(a) {
			console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
			return new Xa(a)
		};
	k.PointLight = jf;
	k.PointLightHelper = id;
	k.Points = Nc;
	k.PointsMaterial = Xa;
	k.PolarGridHelper = wf;
	k.PolyhedronBufferGeometry = Ga;
	k.PolyhedronGeometry = Rd;
	k.PositionalAudio = Eg;
	k.PropertyBinding = Aa;
	k.PropertyMixer = Gg;
	k.QuadraticBezierCurve = $a;
	k.QuadraticBezierCurve3 = kb;
	k.Quaternion = va;
	k.QuaternionKeyframeTrack = je;
	k.QuaternionLinearInterpolant = af;
	k.REVISION = "117";
	k.RGBADepthPacking = 3201;
	k.RGBAFormat =
		1023;
	k.RGBAIntegerFormat = 1033;
	k.RGBA_ASTC_10x10_Format = 37819;
	k.RGBA_ASTC_10x5_Format = 37816;
	k.RGBA_ASTC_10x6_Format = 37817;
	k.RGBA_ASTC_10x8_Format = 37818;
	k.RGBA_ASTC_12x10_Format = 37820;
	k.RGBA_ASTC_12x12_Format = 37821;
	k.RGBA_ASTC_4x4_Format = 37808;
	k.RGBA_ASTC_5x4_Format = 37809;
	k.RGBA_ASTC_5x5_Format = 37810;
	k.RGBA_ASTC_6x5_Format = 37811;
	k.RGBA_ASTC_6x6_Format = 37812;
	k.RGBA_ASTC_8x5_Format = 37813;
	k.RGBA_ASTC_8x6_Format = 37814;
	k.RGBA_ASTC_8x8_Format = 37815;
	k.RGBA_BPTC_Format = 36492;
	k.RGBA_ETC2_EAC_Format = 37496;
	k.RGBA_PVRTC_2BPPV1_Format =
		35843;
	k.RGBA_PVRTC_4BPPV1_Format = 35842;
	k.RGBA_S3TC_DXT1_Format = 33777;
	k.RGBA_S3TC_DXT3_Format = 33778;
	k.RGBA_S3TC_DXT5_Format = 33779;
	k.RGBDEncoding = 3006;
	k.RGBEEncoding = 3002;
	k.RGBEFormat = 1023;
	k.RGBFormat = 1022;
	k.RGBIntegerFormat = 1032;
	k.RGBM16Encoding = 3005;
	k.RGBM7Encoding = 3004;
	k.RGB_ETC1_Format = 36196;
	k.RGB_ETC2_Format = 37492;
	k.RGB_PVRTC_2BPPV1_Format = 35841;
	k.RGB_PVRTC_4BPPV1_Format = 35840;
	k.RGB_S3TC_DXT1_Format = 33776;
	k.RGFormat = 1030;
	k.RGIntegerFormat = 1031;
	k.RawShaderMaterial = ub;
	k.Ray = Wb;
	k.Raycaster = Jg;
	k.RectAreaLight =
		nf;
	k.RedFormat = 1028;
	k.RedIntegerFormat = 1029;
	k.ReinhardToneMapping = 2;
	k.RepeatWrapping = 1E3;
	k.ReplaceStencilOp = 7681;
	k.ReverseSubtractEquation = 102;
	k.RingBufferGeometry = Yc;
	k.RingGeometry = de;
	k.SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
	k.SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
	k.SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
	k.SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
	k.SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
	k.SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
	k.SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
	k.SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
	k.SRGB8_ALPHA8_ASTC_5x5_Format =
		37842;
	k.SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
	k.SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
	k.SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
	k.SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
	k.SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
	k.Scene = zc;
	k.SceneUtils = {
		createMultiMaterialObject: function() {
			console.error("https://artemsemkin.com/rhye/html/THREE.SceneUtils has been moved to /examples/jsm/utils/404.html")
		},
		detach: function() {
			console.error("https://artemsemkin.com/rhye/html/THREE.SceneUtils has been moved to /examples/jsm/utils/404.html")
		},
		attach: function() {
			console.error("https://artemsemkin.com/rhye/html/THREE.SceneUtils has been moved to /examples/jsm/utils/404.html")
		}
	};
	k.ShaderChunk = M;
	k.ShaderLib = gb;
	k.ShaderMaterial = Ca;
	k.ShadowMaterial = ic;
	k.Shape = Nb;
	k.ShapeBufferGeometry = gc;
	k.ShapeGeometry = fc;
	k.ShapePath = wg;
	k.ShapeUtils = sb;
	k.ShortType = 1011;
	k.Skeleton = Re;
	k.SkeletonHelper = pc;
	k.SkinnedMesh = Qe;
	k.SmoothShading = 2;
	k.Sphere = eb;
	k.SphereBufferGeometry = ec;
	k.SphereGeometry = ce;
	k.Spherical = li;
	k.SphericalHarmonics3 = of;
	k.SphericalReflectionMapping = 305;
	k.Spline = Sg;
	k.SplineCurve = ab;
	k.SplineCurve3 = si;
	k.SpotLight = hf;
	k.SpotLightHelper = hd;
	k.SpotLightShadow = gf;
	k.Sprite = Ld;
	k.SpriteMaterial =
		Kb;
	k.SrcAlphaFactor = 204;
	k.SrcAlphaSaturateFactor = 210;
	k.SrcColorFactor = 202;
	k.StaticCopyUsage = 35046;
	k.StaticDrawUsage = 35044;
	k.StaticReadUsage = 35045;
	k.StereoCamera = gi;
	k.StreamCopyUsage = 35042;
	k.StreamDrawUsage = 35040;
	k.StreamReadUsage = 35041;
	k.StringKeyframeTrack = bf;
	k.SubtractEquation = 101;
	k.SubtractiveBlending = 3;
	k.TOUCH = {
		ROTATE: 0,
		PAN: 1,
		DOLLY_PAN: 2,
		DOLLY_ROTATE: 3
	};
	k.TangentSpaceNormalMap = 0;
	k.TetrahedronBufferGeometry = Rc;
	k.TetrahedronGeometry = Sd;
	k.TextBufferGeometry = Xc;
	k.TextGeometry = be;
	k.Texture = W;
	k.TextureLoader =
		ef;
	k.TorusBufferGeometry = Vc;
	k.TorusGeometry = Yd;
	k.TorusKnotBufferGeometry = Uc;
	k.TorusKnotGeometry = Xd;
	k.Triangle = pa;
	k.TriangleFanDrawMode = 2;
	k.TriangleStripDrawMode = 1;
	k.TrianglesDrawMode = 0;
	k.TubeBufferGeometry = cc;
	k.TubeGeometry = Wd;
	k.UVMapping = 300;
	k.Uint16Attribute = function(a, b) {
		console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
		return new Xb(a, b)
	};
	k.Uint16BufferAttribute = Xb;
	k.Uint32Attribute = function(a, b) {
		console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
		return new Yb(a, b)
	};
	k.Uint32BufferAttribute = Yb;
	k.Uint8Attribute = function(a, b) {
		console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
		return new zd(a, b)
	};
	k.Uint8BufferAttribute = zd;
	k.Uint8ClampedAttribute = function(a, b) {
		console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
		return new Ad(a, b)
	};
	k.Uint8ClampedBufferAttribute = Ad;
	k.Uncharted2ToneMapping = 3;
	k.Uniform = uf;
	k.UniformsLib = A;
	k.UniformsUtils =
		Oh;
	k.UnsignedByteType = 1009;
	k.UnsignedInt248Type = 1020;
	k.UnsignedIntType = 1014;
	k.UnsignedShort4444Type = 1017;
	k.UnsignedShort5551Type = 1018;
	k.UnsignedShort565Type = 1019;
	k.UnsignedShortType = 1012;
	k.VSMShadowMap = 3;
	k.Vector2 = v;
	k.Vector3 = p;
	k.Vector4 = R;
	k.VectorKeyframeTrack = cd;
	k.Vertex = function(a, b, c) {
		console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
		return new p(a, b, c)
	};
	k.VertexColors = 2;
	k.VideoTexture = ng;
	k.WebGLCubeRenderTarget = Zb;
	k.WebGLMultisampleRenderTarget = Xf;
	k.WebGLRenderTarget =
		Ba;
	k.WebGLRenderTargetCube = function(a, b, c) {
		console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).");
		return new Zb(a, c)
	};
	k.WebGLRenderer = jg;
	k.WebGLUtils = Th;
	k.WireframeGeometry = Pc;
	k.WireframeHelper = function(a, b) {
		console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
		return new ma(new Pc(a.geometry), new da({
			color: void 0 !== b ? b : 16777215
		}))
	};
});

/*!
 * SplitText 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
! function(D, u) {
	"object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(D) {
	"use strict";
	var _ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

	function m(D) {
		X = document, e = window, (C = C || D || e.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (l = C.utils.toArray, i = C.core.context || function() {}, F = 1)
	}

	function n(D) {
		return e.getComputedStyle(D)
	}

	function o(D) {
		return "absolute" === D.position || !0 === D.absolute
	}

	function p(D, u) {
		for (var e, t = u.length; - 1 < --t;)
			if (e = u[t], D.substr(0, e.length) === e) return e.length
	}

	function r(D, u) {
		void 0 === D && (D = "");
		var e = ~D.indexOf("++"),
			t = 1;
		return e && (D = D.split("++").join("")),
			function() {
				return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
			}
	}

	function s(D, u, e) {
		var t = D.nodeType;
		if (1 === t || 9 === t || 11 === t)
			for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
		else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
	}

	function t(D, u) {
		for (var e = u.length; - 1 < --e;) D.push(u[e])
	}

	function u(D, u, e) {
		for (var t; D && D !== u;) {
			if (t = D._next || D.nextSibling) return t.textContent.charAt(0) === e;
			D = D.parentNode || D._parent
		}
	}

	function v(D) {
		var u, e, t = l(D.childNodes),
			F = t.length;
		for (u = 0; u < F; u++)(e = t[u])._isSplit ? v(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e))
	}

	function w(D, u) {
		return parseFloat(u[D]) || 0
	}

	function x(D, e, F, C, i, E, r) {
		var l, p, d, a, h, B, f, A, c, x, g, y, _ = n(D),
			b = w("paddingLeft", _),
			S = -999,
			T = w("borderBottomWidth", _) + w("borderTopWidth", _),
			m = w("borderLeftWidth", _) + w("borderRightWidth", _),
			N = w("paddingTop", _) + w("paddingBottom", _),
			L = w("paddingLeft", _) + w("paddingRight", _),
			W = w("fontSize", _) * (e.lineThreshold || .2),
			H = _.textAlign,
			O = [],
			V = [],
			M = [],
			R = e.wordDelimiter || " ",
			j = e.tag ? e.tag : e.span ? "span" : "div",
			k = e.type || e.split || "chars,words,lines",
			P = i && ~k.indexOf("lines") ? [] : null,
			z = ~k.indexOf("words"),
			q = ~k.indexOf("chars"),
			G = o(e),
			I = e.linesClass,
			J = ~(I || "").indexOf("++"),
			K = [],
			Q = "flex" === _.display,
			U = D.style.display;
		for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), d = (p = D.getElementsByTagName("*")).length, h = [], l = 0; l < d; l++) h[l] = p[l];
		if (P || G)
			for (l = 0; l < d; l++)((B = (a = h[l]).parentNode === D) || G || q && !z) && (y = a.offsetTop, P && B && Math.abs(y - S) > W && ("BR" !== a.nodeName || 0 === l) && (f = [], P.push(f), S = y), G && (a._x = a.offsetLeft, a._y = y, a._w = a.offsetWidth, a._h = a.offsetHeight), P && ((a._isSplit && B || !q && B || z && B || !z && a.parentNode.parentNode === D && !a.parentNode._isSplit) && (f.push(a), a._x -= b, u(a, D, R) && (a._wordEnd = !0)), "BR" === a.nodeName && (a.nextSibling && "BR" === a.nextSibling.nodeName || 0 === l) && P.push([])));
		for (l = 0; l < d; l++)
			if (B = (a = h[l]).parentNode === D, "BR" !== a.nodeName)
				if (G && (c = a.style, z || B || (a._x += a.parentNode._x, a._y += a.parentNode._y), c.left = a._x + "px", c.top = a._y + "px", c.position = "absolute", c.display = "block", c.width = a._w + 1 + "px", c.height = a._h + "px"), !z && q)
					if (a._isSplit)
						for (a._next = p = a.nextSibling, a.parentNode.appendChild(a); p && 3 === p.nodeType && " " === p.textContent;) a._next = p.nextSibling, a.parentNode.appendChild(p), p = p.nextSibling;
					else a.parentNode._isSplit ? (a._parent = a.parentNode, !a.previousSibling && a.firstChild && (a.firstChild._isFirst = !0), a.nextSibling && " " === a.nextSibling.textContent && !a.nextSibling.nextSibling && K.push(a.nextSibling), a._next = a.nextSibling && a.nextSibling._isFirst ? null : a.nextSibling, a.parentNode.removeChild(a), h.splice(l--, 1), d--) : B || (y = !a.nextSibling && u(a.parentNode, D, R), a.parentNode._parent && a.parentNode._parent.appendChild(a), y && a.parentNode.appendChild(X.createTextNode(" ")), "span" === j && (a.style.display = "inline"), O.push(a));
		else a.parentNode._isSplit && !a._isSplit && "" !== a.innerHTML ? V.push(a) : q && !a._isSplit && ("span" === j && (a.style.display = "inline"), O.push(a));
		else P || G ? (a.parentNode && a.parentNode.removeChild(a), h.splice(l--, 1), d--) : z || D.appendChild(a);
		for (l = K.length; - 1 < --l;) K[l].parentNode.removeChild(K[l]);
		if (P) {
			for (G && (x = X.createElement(j), D.appendChild(x), g = x.offsetWidth + "px", y = x.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(x)), c = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
			for (A = " " === R && (!G || !z && !q), l = 0; l < P.length; l++) {
				for (f = P[l], (x = X.createElement(j)).style.cssText = "display:block;text-align:" + H + ";position:" + (G ? "absolute;" : "relative;"), I && (x.className = I + (J ? l + 1 : "")), M.push(x), d = f.length, p = 0; p < d; p++) "BR" !== f[p].nodeName && (a = f[p], x.appendChild(a), A && a._wordEnd && x.appendChild(X.createTextNode(" ")), G && (0 === p && (x.style.top = a._y + "px", x.style.left = b + y + "px"), a.style.top = "0px", y && (a.style.left = a._x - y + "px")));
				0 === d ? x.innerHTML = "&nbsp;" : z || q || (v(x), s(x, String.fromCharCode(160), " ")), G && (x.style.width = g, x.style.height = a._h + "px"), D.appendChild(x)
			}
			D.style.cssText = c
		}
		G && (r > D.clientHeight && (D.style.height = r - N + "px", D.clientHeight < r && (D.style.height = r + T + "px")), E > D.clientWidth && (D.style.width = E - L + "px", D.clientWidth < E && (D.style.width = E + m + "px"))), Q && (U ? D.style.display = U : D.style.removeProperty("display")), t(F, O), z && t(C, V), t(i, M)
	}

	function y(D, u, e, t) {
		var F, C, i, n, E, r, l, d, a = u.tag ? u.tag : u.span ? "span" : "div",
			h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
			B = o(u),
			f = u.wordDelimiter || " ",
			A = " " !== f ? "" : B ? "&#173; " : " ",
			c = "</" + a + ">",
			x = 1,
			g = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null,
			y = X.createElement("div"),
			v = D.parentNode;
		for (v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (F = function getText(D) {
				var u = D.nodeType,
					e = "";
				if (1 === u || 9 === u || 11 === u) {
					if ("string" == typeof D.textContent) return D.textContent;
					for (D = D.firstChild; D; D = D.nextSibling) e += getText(D)
				} else if (3 === u || 4 === u) return D.nodeValue;
				return e
			}(D = y)).indexOf("<"), !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")), l && (F = F.split("<").join("{{LT}}")), E = F.length, C = (" " === F.charAt(0) ? A : "") + e(), i = 0; i < E; i++)
			if (r = F.charAt(i), g && (d = g(F.substr(i), u.specialChars))) r = F.substr(i, d || 1), C += h && " " !== r ? t() + r + "</" + a + ">" : r, i += d - 1;
			else if (r === f && F.charAt(i - 1) !== f && i) {
			for (C += x ? c : "", x = 0; F.charAt(i + 1) === f;) C += A, i++;
			i === E - 1 ? C += A : ")" !== F.charAt(i + 1) && (C += A + e(), x = 1)
		} else "{" === r && "{{LT}}" === F.substr(i, 6) ? (C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}", i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039 ? (n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2, C += h && " " !== r ? t() + F.substr(i, n) + "</" + a + ">" : F.substr(i, n), i += n - 1) : C += h && " " !== r ? t() + r + "</" + a + ">" : r;
		D.outerHTML = C + (x ? c : ""), l && s(v, "{{LT}}", "<")
	}

	function z(D, u, e, t) {
		var F, C, i = l(D.childNodes),
			E = i.length,
			s = o(u);
		if (3 !== D.nodeType || 1 < E) {
			for (u.absolute = !1, F = 0; F < E; F++)(C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null, 3 === C.nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === n(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, z(C, u, e, t));
			return u.absolute = s, void(D._isSplit = !0)
		}
		y(D, u, e, t)
	}
	var X, e, F, C, i, l, E, b = /(?:\r|\n|\t\t)/g,
		S = /(?:\s\s+)/g,
		d = ((E = SplitText.prototype).split = function split(D) {
			this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
			for (var u, e, t, F = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); - 1 < --F;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, z(t, D, i, n), x(t, D, this.chars, this.words, this.lines, e, u);
			return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
		}, E.revert = function revert() {
			var e = this._originals;
			if (!e) throw "revert() call wasn't scoped properly.";
			return this.elements.forEach(function(D, u) {
				return D.innerHTML = e[u]
			}), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
		}, SplitText.create = function create(D, u) {
			return new SplitText(D, u)
		}, SplitText);

	function SplitText(D, u) {
		F || m(), this.elements = l(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, i(this), this.split(u)
	}
	d.version = "3.12.2", d.register = m, D.SplitText = d, D.default = d;
	if (typeof(window) === "undefined" || window !== D) {
		Object.defineProperty(D, "__esModule", {
			value: !0
		})
	} else {
		delete D.default
	}
});
/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, n) {
	"function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, s, u) {
	"use strict";
	e.Scene.addOption("tweenChanges", !1, function(e) {
		return !!e
	}), e.Scene.extend(function() {
		var i, o = this;
		o.on("progress.plugin_gsap", function() {
			a()
		}), o.on("destroy.plugin_gsap", function(e) {
			o.removeTween(e.reset)
		});
		var a = function() {
			if (i) {
				var e = o.progress(),
					n = o.state();
				i.repeat && -1 === i.repeat() ? "DURING" === n && i.paused() ? i.play() : "DURING" === n || i.paused() || i.pause() : e != i.progress() && (0 === o.duration() ? 0 < e ? i.play() : i.reverse() : o.tweenChanges() && i.tweenTo ? i.tweenTo(e * i.duration()) : i.progress(e).pause())
			}
		};
		o.setTween = function(e, n, r) {
			var t;
			1 < arguments.length && (arguments.length < 3 && (r = n, n = 1), e = s.to(e, n, r));
			try {
				(t = u ? new u({
					smoothChildTiming: !0
				}).add(e) : e).pause()
			} catch (e) {
				return o
			}
			return i && o.removeTween(), i = t, e.repeat && -1 === e.repeat() && (i.repeat(-1), i.yoyo(e.yoyo())), a(), o
		}, o.removeTween = function(e) {
			return i && (e && i.progress(0).pause(), i.kill(), i = void 0), o
		}
	})
});

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, i) {
	"function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], i) : "object" == typeof exports ? i(require("scrollmagic"), require("jquery")) : i(e.ScrollMagic, e.jQuery)
}(this, function(e, t) {
	"use strict";
	e._util.get.elements = function(e) {
		return t(e).toArray()
	}, e._util.addClass = function(e, i) {
		t(e).addClass(i)
	}, e._util.removeClass = function(e, i) {
		t(e).removeClass(i)
	}, t.ScrollMagic = e
});

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
	a.extend(a.fn, {
		validate: function(b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
				c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function(b) {
				function d() {
					var d, e;
					return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function() {
			var b, c, d;
			return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
				b = c.element(this) && b, b || (d = d.concat(c.errorList))
			}), c.errorList = d), b
		},
		rules: function(b, c) {
			var d, e, f, g, h, i, j = this[0];
			if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
				if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
					case "add":
						a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
						break;
					case "remove":
						return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
							i[b] = f[b], delete f[b]
						}), i) : (delete e[j.name], f)
				}
				return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
					required: h
				}, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
					remote: h
				})), g
			}
		}
	}), a.extend(a.expr.pseudos || a.expr[":"], {
		blank: function(b) {
			return !a.trim("" + a(b).val())
		},
		filled: function(b) {
			var c = a(b).val();
			return null !== c && !!a.trim("" + c)
		},
		unchecked: function(b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function(b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function(b, c) {
		return 1 === arguments.length ? function() {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function(a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function(b, c) {
				var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
			},
			onclick: function(a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function(b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function(b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function(b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}."),
			step: a.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function b(b) {
					!this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
					var c = a.data(this.form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function(b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function(b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function(b) {
				var c, d, e = this.clean(b),
					f = this.validationTargetFor(e),
					g = this,
					h = !0;
				return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
					b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
				}), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
			},
			showErrors: function(b) {
				if (b) {
					var c = this;
					a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
						return {
							message: a,
							element: c.findByName(b)[0]
						}
					}), this.successList = a.grep(this.successList, function(a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(b)
			},
			resetElements: function(a) {
				var b;
				if (this.settings.unhighlight)
					for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
				else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(a) {
				var b, c = 0;
				for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
				return c
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function() {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function(a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function() {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var d = this.name || a(this).attr("name");
					return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
				})
			},
			clean: function(b) {
				return a(b)[0]
			},
			errors: function() {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = a([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function(b) {
				var c, d, e = a(b),
					f = b.type;
				return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("https://artemsemkin.com/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function(b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f, g = a(b).rules(),
					h = a.map(g, function(a, b) {
						return b
					}).length,
					i = !1,
					j = this.elementValue(b);
				if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
					if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
					delete g.normalizer
				}
				for (d in g) {
					e = {
						method: d,
						parameters: g[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
							i = !0;
							continue
						}
						if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (k) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
					}
				}
				if (!i) return this.objectLength(g) && this.successList.push(b), !0
			},
			customDataMessage: function(b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function(a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function() {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a]
			},
			defaultMessage: function(b, c) {
				"string" == typeof c && (c = {
					method: c
				});
				var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
					e = /\$?\{(\d+)\}/g;
				return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
			},
			formatAndAdd: function(a, b) {
				var c = this.defaultMessage(a, b);
				this.errorList.push({
					message: c,
					element: a,
					method: b.method
				}), this.errorMap[a.name] = c, this.submitted[a.name] = c
			},
			addWrapper: function(a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function() {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return a(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(b, c) {
				var d, e, f, g, h = this.errorsFor(b),
					i = this.idOrName(b),
					j = a(b).attr("aria-describedby");
				h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
					c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
				})))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
			},
			errorsFor: function(b) {
				var c = this.escapeCssMeta(this.idOrName(b)),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function(a) {
				return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function(b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function(a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function(b) {
				return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
			},
			getLength: function(b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function(a, b) {
				return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
			},
			dependTypes: {
				"boolean": function(a) {
					return a
				},
				string: function(b, c) {
					return !!a(b, c.form).length
				},
				"function": function(a, b) {
					return a(b)
				}
			},
			optional: function(b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function(b) {
				this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
			},
			stopRequest: function(b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(b, c) {
				return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, {
						method: c
					})
				})
			},
			destroy: function() {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function(b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function() {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function(a, b, c, d) {
			/min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
		},
		attributeRules: function(b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function(b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
			return e
		},
		staticRules: function(b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function(b, c) {
			return a.each(b, function(d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !!a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
				}
			}), a.each(b, function(d, e) {
				b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
			}), a.each(["minlength", "maxlength"], function() {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function() {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function(b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function() {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function(b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function(b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
			},
			email: function(a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function(a, b) {
				return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
			},
			date: function(a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function(a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function(a, b) {
				return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			minlength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e <= d
			},
			rangelength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function(a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function(a, b, c) {
				return this.optional(b) || a <= c
			},
			range: function(a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			step: function(b, c, d) {
				var e, f = a(c).attr("type"),
					g = "Step attribute on input type " + f + " is not supported.",
					h = ["text", "number", "range"],
					i = new RegExp("\\b" + f + "\\b"),
					j = f && !i.test(h.join()),
					k = function(a) {
						var b = ("" + a).match(/(?:\.(\d+))?$/);
						return b && b[1] ? b[1].length : 0
					},
					l = function(a) {
						return Math.round(a * Math.pow(10, e))
					},
					m = !0;
				if (j) throw new Error(g);
				return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
			},
			equalTo: function(b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					a(c).valid()
				}), b === e.val()
			},
			remote: function(b, c, d, e) {
				if (this.optional(c)) return "dependency-mismatch";
				e = "string" == typeof e && e || "remote";
				var f, g, h, i = this.previousValue(c, e);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
					url: d
				} || d, h = a.param(a.extend({
					data: b
				}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: g,
					context: f.currentForm,
					success: function(a) {
						var d, g, h, j = a === !0 || "true" === a;
						f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
							method: e,
							parameters: b
						}), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	});
	var b, c = {};
	return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function(d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	}), a
});
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
 * http://photoswipe.com
 * Copyright (c) 2019 Dmitry Semenov; */
! function(a, b) {
	"function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function() {
	"use strict";
	var a = function(a, b) {
		var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
			w = !1,
			x = !0,
			y = !0,
			z = {
				barsSize: {
					top: 44,
					bottom: "auto"
				},
				closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
				timeToIdle: 4e3,
				timeToIdleOutside: 1e3,
				loadingIndicatorDelay: 1e3,
				addCaptionHTMLFn: function(a, b) {
					return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
				},
				closeEl: !0,
				captionEl: !0,
				fullscreenEl: !0,
				zoomEl: !0,
				shareEl: !0,
				counterEl: !0,
				arrowEl: !0,
				preloaderEl: !0,
				tapToClose: !1,
				tapToToggleControls: !0,
				clickToCloseNonZoomable: !0,
				shareButtons: [{
					id: "facebook",
					label: "Share on Facebook",
					url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
				}, {
					id: "twitter",
					label: "Tweet",
					url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
				}, {
					id: "pinterest",
					label: "Pin it",
					url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
				}, {
					id: "download",
					label: "Download image",
					url: "{{raw_image_url}}",
					download: !0
				}],
				getImageURLForShare: function() {
					return a.currItem.src || ""
				},
				getPageURLForShare: function() {
					return window.location.href
				},
				getTextForShare: function() {
					return a.currItem.title || ""
				},
				indexIndicatorSep: " / ",
				fitControlsWidth: 1200
			},
			A = function(a) {
				if (r) return !0;
				a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
				for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
				if (d) {
					a.stopPropagation && a.stopPropagation(), r = !0;
					var h = b.features.isOldAndroid ? 600 : 30;
					s = setTimeout(function() {
						r = !1
					}, h)
				}
			},
			B = function() {
				return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
			},
			C = function(a, c, d) {
				b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
			},
			D = function() {
				var a = 1 === q.getNumItemsFn();
				a !== p && (C(d, "ui--one-slide", a), p = a)
			},
			E = function() {
				C(i, "share-modal--hidden", y)
			},
			F = function() {
				return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() {
					y && E()
				}, 300)) : (E(), setTimeout(function() {
					y || b.addClass(i, "pswp__share-modal--fade-in")
				}, 30)), y || H(), !1
			},
			G = function(b) {
				b = b || window.event;
				var c = b.target || b.srcElement;
				return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
			},
			H = function() {
				for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
				i.children[0].innerHTML = f, i.children[0].onclick = G
			},
			I = function(a) {
				for (var c = 0; c < q.closeElClasses.length; c++)
					if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
			},
			J = 0,
			K = function() {
				clearTimeout(u), J = 0, k && v.setIdle(!1)
			},
			L = function(a) {
				a = a ? a : window.event;
				var b = a.relatedTarget || a.toElement;
				b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() {
					v.setIdle(!0)
				}, q.timeToIdleOutside))
			},
			M = function() {
				q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
			},
			N = function() {
				q.preloaderEl && (O(!0), l("beforeChange", function() {
					clearTimeout(o), o = setTimeout(function() {
						a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
					}, q.loadingIndicatorDelay)
				}), l("imageLoadComplete", function(b, c) {
					a.currItem === c && O(!0)
				}))
			},
			O = function(a) {
				n !== a && (C(m, "preloader--active", !a), n = a)
			},
			P = function(a) {
				var c = a.vGap;
				if (B()) {
					var g = q.barsSize;
					if (q.captionEl && "auto" === g.bottom)
						if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
							var h = f.clientHeight;
							c.bottom = parseInt(h, 10) || 44
						} else c.bottom = g.top;
					else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
					c.top = g.top
				} else c.top = c.bottom = 0
			},
			Q = function() {
				q.timeToIdle && l("mouseUsed", function() {
					b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() {
						J++, 2 === J && v.setIdle(!0)
					}, q.timeToIdle / 2)
				})
			},
			R = function() {
				l("onVerticalDrag", function(a) {
					x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls()
				});
				var a;
				l("onPinchClose", function(b) {
					x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
				}), l("zoomGestureEnded", function() {
					a = !1, a && !x && v.showControls()
				})
			},
			S = [{
				name: "caption",
				option: "captionEl",
				onInit: function(a) {
					e = a
				}
			}, {
				name: "share-modal",
				option: "shareEl",
				onInit: function(a) {
					i = a
				},
				onTap: function() {
					F()
				}
			}, {
				name: "button--share",
				option: "shareEl",
				onInit: function(a) {
					h = a
				},
				onTap: function() {
					F()
				}
			}, {
				name: "button--zoom",
				option: "zoomEl",
				onTap: a.toggleDesktopZoom
			}, {
				name: "counter",
				option: "counterEl",
				onInit: function(a) {
					g = a
				}
			}, {
				name: "button--close",
				option: "closeEl",
				onTap: a.close
			}, {
				name: "button--arrow--left",
				option: "arrowEl",
				onTap: a.prev
			}, {
				name: "button--arrow--right",
				option: "arrowEl",
				onTap: a.next
			}, {
				name: "button--fs",
				option: "fullscreenEl",
				onTap: function() {
					c.isFullscreen() ? c.exit() : c.enter()
				}
			}, {
				name: "preloader",
				option: "preloaderEl",
				onInit: function(a) {
					m = a
				}
			}],
			T = function() {
				var a, c, e, f = function(d) {
					if (d)
						for (var f = d.length, g = 0; g < f; g++) {
							a = d[g], c = a.className;
							for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
						}
				};
				f(d.children);
				var g = b.getChildByClass(d, "pswp__top-bar");
				g && f(g.children)
			};
		v.init = function() {
			b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
				var c = a.currItem.initialZoomLevel;
				a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
			}), l("preventDragEvent", function(a, b, c) {
				var d = a.target || a.srcElement;
				d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
			}), l("bindEvents", function() {
				b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
			}), l("unbindEvents", function() {
				y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
			}), l("destroy", function() {
				q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
			}), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() {
				q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
			}), l("initialZoomOut", function() {
				b.addClass(d, "pswp__ui--hidden")
			}), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
		}, v.setIdle = function(a) {
			k = a, C(d, "ui--idle", a)
		}, v.update = function() {
			x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
		}, v.updateFullscreen = function(d) {
			d && setTimeout(function() {
				a.setScrollOffset(0, b.getScrollY())
			}, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
		}, v.updateIndexIndicator = function() {
			q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
		}, v.onGlobalTap = function(c) {
			c = c || window.event;
			var d = c.target || c.srcElement;
			if (!r)
				if (c.detail && "mouse" === c.detail.pointerType) {
					if (I(d)) return void a.close();
					b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
				} else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
		}, v.onMouseOver = function(a) {
			a = a || window.event;
			var b = a.target || a.srcElement;
			C(d, "ui--over-close", I(b))
		}, v.hideControls = function() {
			b.addClass(d, "pswp__ui--hidden"), x = !1
		}, v.showControls = function() {
			x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
		}, v.supportsFullscreen = function() {
			var a = document;
			return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
		}, v.getFullscreenAPI = function() {
			var b, c = document.documentElement,
				d = "fullscreenchange";
			return c.requestFullscreen ? b = {
				enterK: "requestFullscreen",
				exitK: "exitFullscreen",
				elementK: "fullscreenElement",
				eventK: d
			} : c.mozRequestFullScreen ? b = {
				enterK: "mozRequestFullScreen",
				exitK: "mozCancelFullScreen",
				elementK: "mozFullScreenElement",
				eventK: "moz" + d
			} : c.webkitRequestFullscreen ? b = {
				enterK: "webkitRequestFullscreen",
				exitK: "webkitExitFullscreen",
				elementK: "webkitFullscreenElement",
				eventK: "webkit" + d
			} : c.msRequestFullscreen && (b = {
				enterK: "msRequestFullscreen",
				exitK: "msExitFullscreen",
				elementK: "msFullscreenElement",
				eventK: "MSFullscreenChange"
			}), b && (b.enter = function() {
				return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
			}, b.exit = function() {
				return q.closeOnScroll = j, document[this.exitK]()
			}, b.isFullscreen = function() {
				return document[this.elementK]
			}), b
		}
	};
	return a
});