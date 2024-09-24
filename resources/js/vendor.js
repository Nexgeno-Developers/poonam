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
/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
	"use strict";
	var oe = [],
		r = Object.getPrototypeOf,
		ae = oe.slice,
		g = oe.flat ? function(e) {
			return oe.flat.call(e)
		} : function(e) {
			return oe.concat.apply([], e)
		},
		s = oe.push,
		se = oe.indexOf,
		n = {},
		i = n.toString,
		ue = n.hasOwnProperty,
		o = ue.toString,
		a = o.call(Object),
		le = {},
		v = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
		},
		y = function(e) {
			return null != e && e === e.window
		},
		C = ie.document,
		u = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function m(e, t, n) {
		var r, i, o = (n = n || C).createElement("script");
		if (o.text = e, t)
			for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function x(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
	}
	var t = "3.7.0",
		l = /HTML$/i,
		ce = function(e, t) {
			return new ce.fn.init(e, t)
		};

	function c(e) {
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}

	function fe(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	ce.fn = ce.prototype = {
		jquery: t,
		constructor: ce,
		length: 0,
		toArray: function() {
			return ae.call(this)
		},
		get: function(e) {
			return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = ce.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return ce.each(this, e)
		},
		map: function(n) {
			return this.pushStack(ce.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(ae.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(ce.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(ce.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: s,
		sort: oe.sort,
		splice: oe.splice
	}, ce.extend = ce.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, ce.extend({
		expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			m(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, r = 0;
			if (c(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		text: function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) return e.textContent;
				if (3 === i || 4 === i) return e.nodeValue
			} else
				while (t = e[r++]) n += ce.text(t);
			return n
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : se.call(t, e, n)
		},
		isXMLDoc: function(e) {
			var t = e && e.namespaceURI,
				n = e && (e.ownerDocument || e).documentElement;
			return !l.test(t || n && n.nodeName || "HTML")
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (c(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g(a)
		},
		guid: 1,
		support: le
	}), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var pe = oe.pop,
		de = oe.sort,
		he = oe.splice,
		ge = "[\\x20\\t\\r\\n\\f]",
		ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
	ce.contains = function(e, t) {
		var n = t && t.parentNode;
		return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
	};
	var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

	function p(e, t) {
		return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
	}
	ce.escapeSelector = function(e) {
		return (e + "").replace(f, p)
	};
	var ye = C,
		me = s;
	! function() {
		var e, b, w, o, a, T, r, C, d, i, k = me,
			S = ce.expando,
			E = 0,
			n = 0,
			s = W(),
			c = W(),
			u = W(),
			h = W(),
			l = function(e, t) {
				return e === t && (a = !0), 0
			},
			f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
			g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
			v = new RegExp(ge + "+", "g"),
			y = new RegExp("^" + ge + "*," + ge + "*"),
			m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
			x = new RegExp(ge + "|>"),
			j = new RegExp(g),
			A = new RegExp("^" + t + "$"),
			D = {
				ID: new RegExp("^#(" + t + ")"),
				CLASS: new RegExp("^\\.(" + t + ")"),
				TAG: new RegExp("^(" + t + "|[*])"),
				ATTR: new RegExp("^" + p),
				PSEUDO: new RegExp("^" + g),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + f + ")$", "i"),
				needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
			},
			N = /^(?:input|select|textarea|button)$/i,
			q = /^h\d$/i,
			L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			H = /[+~]/,
			O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
			P = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			R = function() {
				V()
			},
			M = J(function(e) {
				return !0 === e.disabled && fe(e, "fieldset")
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
		} catch (e) {
			k = {
				apply: function(e, t) {
					me.apply(e, ae.call(t))
				},
				call: function(e) {
					me.apply(e, ae.call(arguments, 1))
				}
			}
		}

		function I(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && (V(e), e = e || T, C)) {
				if (11 !== p && (u = L.exec(t)))
					if (i = u[1]) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return k.call(n, a), n
						} else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
					} else {
						if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
					} if (!(h[t + " "] || d && d.test(t))) {
					if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
						(f = H.test(t) && z(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
						while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
						c = l.join(",")
					}
					try {
						return k.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						h(t, !0)
					} finally {
						s === S && e.removeAttribute("id")
					}
				}
			}
			return re(t.replace(ve, "$1"), e, n, r)
		}

		function W() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function F(e) {
			return e[S] = !0, e
		}

		function $(e) {
			var t = T.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function B(t) {
			return function(e) {
				return fe(e, "input") && e.type === t
			}
		}

		function _(t) {
			return function(e) {
				return (fe(e, "input") || fe(e, "button")) && e.type === t
			}
		}

		function X(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && M(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function U(a) {
			return F(function(o) {
				return o = +o, F(function(e, t) {
					var n, r = a([], e.length, o),
						i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function z(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function V(e) {
			var t, n = e ? e.ownerDocument || e : ye;
			return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", R), le.getById = $(function(e) {
				return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
			}), le.disconnectedMatch = $(function(e) {
				return i.call(e, "*")
			}), le.scope = $(function() {
				return T.querySelectorAll(":scope")
			}), le.cssHas = $(function() {
				try {
					return T.querySelector(":has(*,:jqfake)"), !1
				} catch (e) {
					return !0
				}
			}), le.getById ? (b.filter.ID = function(e) {
				var t = e.replace(O, P);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, b.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && C) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (b.filter.ID = function(e) {
				var n = e.replace(O, P);
				return function(e) {
					var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return t && t.value === n
				}
			}, b.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && C) {
					var n, r, i, o = t.getElementById(e);
					if (o) {
						if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
						i = t.getElementsByName(e), r = 0;
						while (o = i[r++])
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
					}
					return []
				}
			}), b.find.TAG = function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
			}, b.find.CLASS = function(e, t) {
				if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
			}, d = [], $(function(e) {
				var t;
				r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
			}), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function(e, t) {
				if (e === t) return a = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
			}), T
		}
		for (e in I.matches = function(e, t) {
				return I(e, null, null, t)
			}, I.matchesSelector = function(e, t) {
				if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
					var n = i.call(e, t);
					if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					h(t, !0)
				}
				return 0 < I(t, T, null, [e]).length
			}, I.contains = function(e, t) {
				return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
			}, I.attr = function(e, t) {
				(e.ownerDocument || e) != T && V(e);
				var n = b.attrHandle[t.toLowerCase()],
					r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
				return void 0 !== r ? r : e.getAttribute(t)
			}, I.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, ce.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
					while (t = e[i++]) t === e[i] && (r = n.push(i));
					while (r--) he.call(e, n[r], 1)
				}
				return o = null, e
			}, ce.fn.uniqueSort = function() {
				return this.pushStack(ce.uniqueSort(ae.apply(this)))
			}, (b = ce.expr = {
				cacheLength: 50,
				createPseudo: F,
				match: D,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(O, P).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return fe(e, t)
						}
					},
					CLASS: function(e) {
						var t = s[e + " "];
						return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = I.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(d, e, t, h, g) {
						var v = "nth" !== d.slice(0, 3),
							y = "last" !== d.slice(-4),
							m = "of-type" === e;
						return 1 === h && 0 === g ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
								l = e.parentNode,
								c = m && e.nodeName.toLowerCase(),
								f = !n && !m,
								p = !1;
							if (l) {
								if (v) {
									while (u) {
										o = e;
										while (o = o[u])
											if (m ? fe(o, c) : 1 === o.nodeType) return !1;
										s = u = "only" === d && !s && "nextSibling"
									}
									return !0
								}
								if (s = [y ? l.firstChild : l.lastChild], y && f) {
									p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
									while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
										if (1 === o.nodeType && ++p && o === e) {
											i[d] = [E, a, p];
											break
										}
								} else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p)
									while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
										if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
								return (p -= g) === h || p % h == 0 && 0 <= p / h
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
						return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
							var n, r = a(e, o),
								i = r.length;
							while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: F(function(e) {
						var r = [],
							i = [],
							s = ne(e.replace(ve, "$1"));
						return s[S] ? F(function(e, t, n, r) {
							var i, o = s(e, null, r, []),
								a = e.length;
							while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function(e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: F(function(t) {
						return function(e) {
							return 0 < I(t, e).length
						}
					}),
					contains: F(function(t) {
						return t = t.replace(O, P),
							function(e) {
								return -1 < (e.textContent || ce.text(e)).indexOf(t)
							}
					}),
					lang: F(function(n) {
						return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = ie.location && ie.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === r
					},
					focus: function(e) {
						return e === function() {
							try {
								return T.activeElement
							} catch (e) {}
						}() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: X(!1),
					disabled: X(!0),
					checked: function(e) {
						return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !b.pseudos.empty(e)
					},
					header: function(e) {
						return q.test(e.nodeName)
					},
					input: function(e) {
						return N.test(e.nodeName)
					},
					button: function(e) {
						return fe(e, "input") && "button" === e.type || fe(e, "button")
					},
					text: function(e) {
						var t;
						return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: U(function() {
						return [0]
					}),
					last: U(function(e, t) {
						return [t - 1]
					}),
					eq: U(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: U(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: U(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: U(function(e, t, n) {
						var r;
						for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: U(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = B(e);
		for (e in {
				submit: !0,
				reset: !0
			}) b.pseudos[e] = _(e);

		function G() {}

		function Y(e, t) {
			var n, r, i, o, a, s, u, l = c[e + " "];
			if (l) return t ? 0 : l.slice(0);
			a = e, s = [], u = b.preFilter;
			while (a) {
				for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(ve, " ")
					}), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
		}

		function Q(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function J(a, e, t) {
			var s = e.dir,
				u = e.next,
				l = u || s,
				c = t && "parentNode" === l,
				f = n++;
			return e.first ? function(e, t, n) {
				while (e = e[s])
					if (1 === e.nodeType || c) return a(e, t, n);
				return !1
			} : function(e, t, n) {
				var r, i, o = [E, f];
				if (n) {
					while (e = e[s])
						if ((1 === e.nodeType || c) && a(e, t, n)) return !0
				} else
					while (e = e[s])
						if (1 === e.nodeType || c)
							if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
							else {
								if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
								if ((i[l] = o)[2] = a(e, t, n)) return !0
							} return !1
			}
		}

		function K(i) {
			return 1 < i.length ? function(e, t, n) {
				var r = i.length;
				while (r--)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Z(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function ee(d, h, g, v, y, e) {
			return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function(e, t, n, r) {
				var i, o, a, s, u = [],
					l = [],
					c = t.length,
					f = e || function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					p = !d || !e && h ? f : Z(f, u, d, n, r);
				if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
					i = Z(s, l), v(i, [], n, r), o = i.length;
					while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = s.length;
							while (o--)(a = s[o]) && i.push(p[o] = a);
							y(null, s = [], i, r)
						}
						o = s.length;
						while (o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
					}
				} else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
			})
		}

		function te(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
					return e === i
				}, a, !0), l = J(function(e) {
					return -1 < se.call(i, e)
				}, a, !0), c = [function(e, t, n) {
					var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
					return i = null, r
				}]; s < r; s++)
				if (t = b.relative[e[s].type]) c = [J(K(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
					}
					c.push(t)
				} return K(c)
		}

		function ne(e, t) {
			var n, v, y, m, x, r, i = [],
				o = [],
				a = u[e + " "];
			if (!a) {
				t || (t = Y(e)), n = t.length;
				while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
				(a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
					var o, a, s, u = 0,
						l = "0",
						c = e && [],
						f = [],
						p = w,
						d = e || x && b.find.TAG("*", i),
						h = E += null == p ? 1 : Math.random() || .1,
						g = d.length;
					for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument == T || (V(o), n = !C);
							while (s = v[a++])
								if (s(o, t || T, n)) {
									k.call(r, o);
									break
								} i && (E = h)
						}
						m && ((o = !s && o) && u--, e && c.push(o))
					}
					if (u += l, m && l !== u) {
						a = 0;
						while (s = y[a++]) s(c, f, t, n);
						if (e) {
							if (0 < u)
								while (l--) c[l] || f[l] || (f[l] = pe.call(r));
							f = Z(f)
						}
						k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
					}
					return i && (E = h, w = p), c
				}, m ? F(r) : r))).selector = e
			}
			return a
		}

		function re(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && Y(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				i = D.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;
					if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && z(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
						break
					}
				}
			}
			return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && z(t.parentNode) || t), n
		}
		G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function(e) {
			return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
		}), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
	}();
	var d = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && ce(e).is(n)) break;
					r.push(e)
				} return r
		},
		h = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		b = ce.expr.match.needsContext,
		w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function T(e, n, r) {
		return v(n) ? ce.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? ce.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? ce.grep(e, function(e) {
			return -1 < se.call(n, e) !== r
		}) : ce.filter(n, e, r)
	}
	ce.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, ce.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
				for (t = 0; t < r; t++)
					if (ce.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
			return 1 < r ? ce.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(T(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(T(this, e || [], !0))
		},
		is: function(e) {
			return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
		}
	});
	var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(ce.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || k, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))
					for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
	}).prototype = ce.fn, k = ce(C);
	var E = /^(?:parents|prev(?:Until|All))/,
		j = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function A(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	ce.fn.extend({
		has: function(e) {
			var t = ce(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (ce.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && ce(e);
			if (!b.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ce.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return d(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return d(e, "parentNode", n)
		},
		next: function(e) {
			return A(e, "nextSibling")
		},
		prev: function(e) {
			return A(e, "previousSibling")
		},
		nextAll: function(e) {
			return d(e, "nextSibling")
		},
		prevAll: function(e) {
			return d(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return d(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return d(e, "previousSibling", n)
		},
		siblings: function(e) {
			return h((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return h(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
		}
	}, function(r, i) {
		ce.fn[r] = function(e, t) {
			var n = ce.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var D = /[^\x20\t\r\n\f]+/g;

	function N(e) {
		return e
	}

	function q(e) {
		throw e
	}

	function L(e, t, n, r) {
		var i;
		try {
			e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	ce.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function(e, t) {
			n[t] = !0
		}), n) : ce.extend({}, r);
		var i, t, o, a, s = [],
			u = [],
			l = -1,
			c = function() {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
				}
				r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
			},
			f = {
				add: function() {
					return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
						ce.each(e, function(e, t) {
							v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
						})
					}(arguments), t && !i && c()), this
				},
				remove: function() {
					return ce.each(arguments, function(e, t) {
						var n;
						while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? -1 < ce.inArray(e, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = u = [], s = t = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = u = [], t || i || (s = t = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, ce.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
					["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function() {
						return i
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return a.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return ce.Deferred(function(r) {
							ce.each(o, function(e, t) {
								var n = v(i[t[4]]) && i[t[4]];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function(t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function() {
								var n = this,
									r = arguments,
									e = function() {
										var e, t;
										if (!(i < u)) {
											if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
										}
									},
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
							}
						}
						return ce.Deferred(function(e) {
							o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
						}).promise()
					},
					promise: function(e) {
						return null != e ? ce.extend(e, a) : a
					}
				},
				s = {};
			return ce.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = ae.call(arguments),
				o = ce.Deferred(),
				a = function(t) {
					return function(e) {
						r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
			while (t--) L(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	ce.Deferred.exceptionHook = function(e, t) {
		ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, ce.readyException = function(e) {
		ie.setTimeout(function() {
			throw e
		})
	};
	var O = ce.Deferred();

	function P() {
		C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
	}
	ce.fn.ready = function(e) {
		return O.then(e)["catch"](function(e) {
			ce.readyException(e)
		}), this
	}, ce.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
		}
	}), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
	var R = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === x(n))
				for (s in i = !0, n) R(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(ce(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		M = /^-ms-/,
		I = /-([a-z])/g;

	function W(e, t) {
		return t.toUpperCase()
	}

	function F(e) {
		return e.replace(M, "ms-").replace(I, W)
	}
	var $ = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function B() {
		this.expando = ce.expando + B.uid++
	}
	B.uid = 1, B.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[F(t)] = n;
			else
				for (r in t) i[F(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !ce.isEmptyObject(t)
		}
	};
	var _ = new B,
		X = new B,
		U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		z = /[A-Z]/g;

	function V(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : U.test(i) ? JSON.parse(i) : i)
				} catch (e) {}
				X.set(e, t, n)
			} else n = void 0;
		return n
	}
	ce.extend({
		hasData: function(e) {
			return X.hasData(e) || _.hasData(e)
		},
		data: function(e, t, n) {
			return X.access(e, t, n)
		},
		removeData: function(e, t) {
			X.remove(e, t)
		},
		_data: function(e, t, n) {
			return _.access(e, t, n)
		},
		_removeData: function(e, t) {
			_.remove(e, t)
		}
	}), ce.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = X.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
					_.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function() {
				X.set(this, n)
			}) : R(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = X.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
				this.each(function() {
					X.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				X.remove(this, e)
			})
		}
	}), ce.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ce.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = ce._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
				ce.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return _.get(e, n) || _.access(e, n, {
				empty: ce.Callbacks("once memory").add(function() {
					_.remove(e, [t + "queue", n])
				})
			})
		}
	}), ce.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = ce.queue(this, t, n);
				ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ce.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = ce.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
		Q = ["Top", "Right", "Bottom", "Left"],
		J = C.documentElement,
		K = function(e) {
			return ce.contains(e.ownerDocument, e)
		},
		Z = {
			composed: !0
		};
	J.getRootNode && (K = function(e) {
		return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
	});
	var ee = function(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
	};

	function te(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return ce.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, ce.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var ne = {};

	function re(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	ce.fn.extend({
		show: function() {
			return re(this, !0)
		},
		hide: function() {
			return re(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ee(this) ? ce(this).show() : ce(this).hide()
			})
		}
	});
	var xe, be, we = /^(?:checkbox|radio)$/i,
		Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		Ce = /^$|^module$|\/(?:java|ecma)script/i;
	xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
	var ke = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function Se(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
	}

	function Ee(e, t) {
		for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
	}
	ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
	var je = /<|&#?\w+;/;

	function Ae(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
				else if (je.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && -1 < ce.inArray(o, r)) i && i.push(o);
			else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
			c = 0;
			while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
		}
		return f
	}
	var De = /^([^.]*)(?:\.(.+)|)/;

	function Ne() {
		return !0
	}

	function qe() {
		return !1
	}

	function Le(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return ce().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = ce.guid++)), e.each(function() {
			ce.event.add(this, t, i, r, n)
		})
	}

	function He(e, r, t) {
		t ? (_.set(e, r, !1), ce.event.add(e, r, {
			namespace: !1,
			handler: function(e) {
				var t, n = _.get(this, r);
				if (1 & e.isTrigger && this[r]) {
					if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
					else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
				} else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
			}
		})) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
	}
	ce.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
			if ($(t)) {
				n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
					return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
				}), l = (e = (e || "").match(D) || [""]).length;
				while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && ce.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "").match(D) || [""]).length;
				while (l--)
					if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
						f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
					} else
						for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
				ce.isEmptyObject(u) && _.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = ce.event.fix(e),
				l = (_.get(this, "events") || Object.create(null))[u.type] || [],
				c = ce.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				a = ce.event.handlers.call(this, u, l), t = 0;
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					u.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(t, e) {
			Object.defineProperty(ce.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: v(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[ce.expando] ? e : new ce.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
				},
				trigger: function(e) {
					var t = this || e;
					return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, ce.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, ce.Event = function(e, t) {
		if (!(this instanceof ce.Event)) return new ce.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
	}, ce.Event.prototype = {
		constructor: ce.Event,
		isDefaultPrevented: qe,
		isPropagationStopped: qe,
		isImmediatePropagationStopped: qe,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ce.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, ce.event.addProp), ce.each({
		focus: "focusin",
		blur: "focusout"
	}, function(r, i) {
		function o(e) {
			if (C.documentMode) {
				var t = _.get(this, "handle"),
					n = ce.event.fix(e);
				n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
			} else ce.event.simulate(i, e.target, ce.event.fix(e))
		}
		ce.event.special[r] = {
			setup: function() {
				var e;
				if (He(this, r, !0), !C.documentMode) return !1;
				(e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
			},
			trigger: function() {
				return He(this, r), !0
			},
			teardown: function() {
				var e;
				if (!C.documentMode) return !1;
				(e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
			},
			_default: function(e) {
				return _.get(e.target, r)
			},
			delegateType: i
		}, ce.event.special[i] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = C.documentMode ? this : e,
					n = _.get(t, i);
				n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = C.documentMode ? this : e,
					n = _.get(t, i) - 1;
				n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
			}
		}
	}), ce.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		ce.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), ce.fn.extend({
		on: function(e, t, n, r) {
			return Le(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Le(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function() {
				ce.event.remove(this, e, n, t)
			})
		}
	});
	var Oe = /<script|<style|<link/i,
		Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

	function Me(e, t) {
		return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
	}

	function Ie(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function We(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Fe(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (_.hasData(e) && (s = _.get(e).events))
				for (i in _.remove(t, "handle events"), s)
					for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
			X.hasData(e) && (o = X.access(e), a = ce.extend({}, o), X.set(t, a))
		}
	}

	function $e(n, r, i, o) {
		r = g(r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = v(d);
		if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
		});
		if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
					nonce: u.nonce || u.getAttribute("nonce")
				}, l) : m(u.textContent.replace(Re, ""), u, l))
		}
		return n
	}

	function Be(e, t, n) {
		for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	ce.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				f = K(e);
			if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
				for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
				else Fe(e, c);
			return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if ($(n)) {
					if (t = n[_.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
						n[_.expando] = void 0
					}
					n[X.expando] && (n[X.expando] = void 0)
				}
		}
	}), ce.fn.extend({
		detach: function(e) {
			return Be(this, e, !0)
		},
		remove: function(e) {
			return Be(this, e)
		},
		text: function(e) {
			return R(this, function(e) {
				return void 0 === e ? ce.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return $e(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return $e(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Me(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return $e(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return $e(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return ce.clone(this, e, t)
			})
		},
		html: function(e) {
			return R(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = ce.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return $e(this, arguments, function(e) {
				var t = this.parentNode;
				ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), ce.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		ce.fn[e] = function(e) {
			for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
		Xe = /^--/,
		Ue = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = ie), t.getComputedStyle(e)
		},
		ze = function(e, t, n) {
			var r, i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = o[i];
			return r
		},
		Ve = new RegExp(Q.join("|"), "i");

	function Ge(e, t, n) {
		var r, i, o, a, s = Xe.test(t),
			u = e.style;
		return (n = n || Ue(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function Ye(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (l) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
				var e = ie.getComputedStyle(l);
				n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, a, s, u = C.createElement("div"),
			l = C.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
			boxSizingReliable: function() {
				return e(), r
			},
			pixelBoxStyles: function() {
				return e(), o
			},
			pixelPosition: function() {
				return e(), n
			},
			reliableMarginLeft: function() {
				return e(), s
			},
			scrollboxSize: function() {
				return e(), i
			},
			reliableTrDimensions: function() {
				var e, t, n, r;
				return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
			}
		}))
	}();
	var Qe = ["Webkit", "Moz", "ms"],
		Je = C.createElement("div").style,
		Ke = {};

	function Ze(e) {
		var t = ce.cssProps[e] || Ke[e];
		return t || (e in Je ? e : Ke[e] = function(e) {
			var t = e[0].toUpperCase() + e.slice(1),
				n = Qe.length;
			while (n--)
				if ((e = Qe[n] + t) in Je) return e
		}(e) || e)
	}
	var et = /^(none|table(?!-c[ea]).+)/,
		tt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		nt = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function rt(e, t, n) {
		var r = Y.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function it(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0,
			l = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
	}

	function ot(e, t, n) {
		var r = Ue(e),
			i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
			o = i,
			a = Ge(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (_e.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function at(e, t, n, r, i) {
		return new at.prototype.init(e, t, n, r, i)
	}
	ce.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Ge(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageSlice: !0,
			columnCount: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			scale: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = F(t),
					u = Xe.test(t),
					l = e.style;
				if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = F(t);
			return Xe.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), ce.each(["height", "width"], function(e, u) {
		ce.cssHooks[u] = {
			get: function(e, t, n) {
				if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : ze(e, tt, function() {
					return ot(e, u, n)
				})
			},
			set: function(e, t, n) {
				var r, i = Ue(e),
					o = !le.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
					s = n ? it(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
			}
		}
	}), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), ce.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		ce.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (ce.cssHooks[i + o].set = rt)
	}), ce.fn.extend({
		css: function(e, t) {
			return R(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((ce.Tween = at).prototype = {
		constructor: at,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = at.propHooks[this.prop];
			return e && e.get ? e.get(this) : at.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = at.propHooks[this.prop];
			return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
		}
	}).init.prototype = at.prototype, (at.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = at.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ce.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, ce.fx = at.prototype.init, ce.fx.step = {};
	var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
		pt = /queueHooks$/;

	function dt() {
		ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
	}

	function ht() {
		return ie.setTimeout(function() {
			st = void 0
		}), st = Date.now()
	}

	function gt(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function vt(e, t, n) {
		for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function yt(o, e, t) {
		var n, a, r = 0,
			i = yt.prefilters.length,
			s = ce.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (a) return !1;
				for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: ce.extend({}, e),
				opts: ce.extend(!0, {
					specialEasing: {},
					easing: ce.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: st || ht(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function(e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, l.opts.specialEasing); r < i; r++)
			if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
		return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	ce.Animation = ce.extend(yt, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return te(n.elem, e, Y.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			v(e) ? (t = e, e = ["*"]) : e = e.match(D);
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
				p = this,
				d = {},
				h = e.style,
				g = e.nodeType && ee(e),
				v = _.get(e, "fxshow");
			for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, p.always(function() {
					p.always(function() {
						a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (i = t[r], ft.test(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
						if ("show" !== i || !v || void 0 === v[r]) continue;
						g = !0
					}
					d[r] = v && v[r] || ce.style(e, r)
				} if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
				for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
						h.display = l
					}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
					display: l
				}), o && (v.hidden = !g), g && re([e], !0), p.done(function() {
					for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
				})), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
		}],
		prefilter: function(e, t) {
			t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
		}
	}), ce.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? ce.extend({}, e) : {
			complete: n || !n && t || v(e) && e,
			duration: e,
			easing: n && t || t && !v(t) && t
		};
		return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
		}, r
	}, ce.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(ee).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(t, e, n, r) {
			var i = ce.isEmptyObject(t),
				o = ce.speed(e, n, r),
				a = function() {
					var e = yt(this, ce.extend({}, t), o);
					(i || _.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(i, e, o) {
			var a = function(e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
				var e = !0,
					t = null != i && i + "queueHooks",
					n = ce.timers,
					r = _.get(this);
				if (t) r[t] && r[t].stop && a(r[t]);
				else
					for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || ce.dequeue(this, i)
			})
		},
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var e, t = _.get(this),
					n = t[a + "queue"],
					r = t[a + "queueHooks"],
					i = ce.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), ce.each(["toggle", "show", "hide"], function(e, r) {
		var i = ce.fn[r];
		ce.fn[r] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
		}
	}), ce.each({
		slideDown: gt("show"),
		slideUp: gt("hide"),
		slideToggle: gt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, r) {
		ce.fn[e] = function(e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), ce.timers = [], ce.fx.tick = function() {
		var e, t = 0,
			n = ce.timers;
		for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || ce.fx.stop(), st = void 0
	}, ce.fx.timer = function(e) {
		ce.timers.push(e), ce.fx.start()
	}, ce.fx.interval = 13, ce.fx.start = function() {
		ut || (ut = !0, dt())
	}, ce.fx.stop = function() {
		ut = null
	}, ce.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ce.fn.delay = function(r, e) {
		return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
			var n = ie.setTimeout(e, r);
			t.stop = function() {
				ie.clearTimeout(n)
			}
		})
	}, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
	var mt, xt = ce.expr.attrHandle;
	ce.fn.extend({
		attr: function(e, t) {
			return R(this, ce.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ce.removeAttr(this, e)
			})
		}
	}), ce.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!le.radioValue && "radio" === t && fe(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(D);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), mt = {
		set: function(e, t, n) {
			return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = xt[t] || ce.find.attr;
		xt[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
		}
	});
	var bt = /^(?:input|select|textarea|button)$/i,
		wt = /^(?:a|area)$/i;

	function Tt(e) {
		return (e.match(D) || []).join(" ")
	}

	function Ct(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function kt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
	}
	ce.fn.extend({
		prop: function(e, t) {
			return R(this, ce.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[ce.propFix[e] || e]
			})
		}
	}), ce.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ce.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), le.optSelected || (ce.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ce.propFix[this.toLowerCase()] = this
	}), ce.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a;
			return v(t) ? this.each(function(e) {
				ce(this).addClass(t.call(this, e, Ct(this)))
			}) : (e = kt(t)).length ? this.each(function() {
				if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
					for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
					a = Tt(n), r !== a && this.setAttribute("class", a)
				}
			}) : this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a;
			return v(t) ? this.each(function(e) {
				ce(this).removeClass(t.call(this, e, Ct(this)))
			}) : arguments.length ? (e = kt(t)).length ? this.each(function() {
				if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
					for (o = 0; o < e.length; o++) {
						i = e[o];
						while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
					}
					a = Tt(n), r !== a && this.setAttribute("class", a)
				}
			}) : this : this.attr("class", "")
		},
		toggleClass: function(t, n) {
			var e, r, i, o, a = typeof t,
				s = "string" === a || Array.isArray(t);
			return v(t) ? this.each(function(e) {
				ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
			}) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function() {
				if (s)
					for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
				else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
			}))
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var St = /\r/g;
	ce.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = v(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
		}
	}), ce.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ce.find.attr(e, "value");
					return null != t ? t : Tt(ce.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
							if (t = ce(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = ce.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), ce.each(["radio", "checkbox"], function() {
		ce.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
			}
		}, le.checkOn || (ce.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Et = ie.location,
		jt = {
			guid: Date.now()
		},
		At = /\?/;
	ce.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new ie.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {}
		return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
			return e.textContent
		}).join("\n") : e)), t
	};
	var Dt = /^(?:focusinfocus|focusoutblur)$/,
		Nt = function(e) {
			e.stopPropagation()
		};
	ce.extend(ce.event, {
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || C],
				d = ue.call(e, "type") ? e.type : e,
				h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !y(n)) {
					for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = ce.extend(new ce.Event, n, {
				type: e,
				isSimulated: !0
			});
			ce.event.trigger(r, null, t)
		}
	}), ce.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				ce.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return ce.event.trigger(e, t, n, !0)
		}
	});
	var qt = /\[\]$/,
		Lt = /\r?\n/g,
		Ht = /^(?:submit|button|image|reset|file)$/i,
		Ot = /^(?:input|select|textarea|keygen)/i;

	function Pt(n, e, r, i) {
		var t;
		if (Array.isArray(e)) ce.each(e, function(e, t) {
			r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== x(e)) i(n, e);
		else
			for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
	}
	ce.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = v(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) Pt(n, e[n], t, i);
		return r.join("&")
	}, ce.fn.extend({
		serialize: function() {
			return ce.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ce.prop(this, "elements");
				return e ? ce.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
			}).map(function(e, t) {
				var n = ce(this).val();
				return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Lt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Lt, "\r\n")
				}
			}).get()
		}
	});
	var Rt = /%20/g,
		Mt = /#.*$/,
		It = /([?&])_=[^&]*/,
		Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ft = /^(?:GET|HEAD)$/,
		$t = /^\/\//,
		Bt = {},
		_t = {},
		Xt = "*/".concat("*"),
		Ut = C.createElement("a");

	function zt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(D) || [];
			if (v(t))
				while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Vt(t, i, o, a) {
		var s = {},
			u = t === _t;

		function l(e) {
			var r;
			return s[e] = !0, ce.each(t[e] || [], function(e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function Gt(e, t) {
		var n, r, i = ce.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && ce.extend(!0, e, r), e
	}
	Ut.href = Et.href, ce.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Et.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Xt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": ce.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
		},
		ajaxPrefilter: zt(Bt),
		ajaxTransport: zt(_t),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
				y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
				x = ce.Deferred(),
				b = ce.Callbacks("once memory"),
				w = v.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? p : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (v.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
				r = C.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
			for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Mt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Rt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					var r, i, o, a, s = e.contents,
						u = e.dataTypes;
					while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in s)
							if (s[i] && s[i].test(r)) {
								u.unshift(i);
								break
							} if (u[0] in n) o = u[0];
					else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a || (a = i)
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
					var i, o, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					while (o)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
							if ("*" === o) o = u;
							else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o]))
							for (i in l)
								if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e["throws"]) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function(e, t, n) {
			return ce.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return ce.get(e, void 0, t, "script")
		}
	}), ce.each(["get", "post"], function(e, i) {
		ce[i] = function(e, t, n, r) {
			return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, ce.isPlainObject(e) && e))
		}
	}), ce.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), ce._evalUrl = function(e, t, n) {
		return ce.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				ce.globalEval(e, t, n)
			}
		})
	}, ce.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return v(n) ? this.each(function(e) {
				ce(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = ce(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = v(t);
			return this.each(function(e) {
				ce(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				ce(this).replaceWith(this.childNodes)
			}), this
		}
	}), ce.expr.pseudos.hidden = function(e) {
		return !ce.expr.pseudos.visible(e)
	}, ce.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, ce.ajaxSettings.xhr = function() {
		try {
			return new ie.XMLHttpRequest
		} catch (e) {}
	};
	var Yt = {
			0: 200,
			1223: 204
		},
		Qt = ce.ajaxSettings.xhr();
	le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i) {
		var o, a;
		if (le.cors || Qt && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
					4 === r.readyState && ie.setTimeout(function() {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), ce.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), ce.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return ce.globalEval(e), e
			}
		}
	}), ce.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), ce.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				r = ce("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), C.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var Jt, Kt = [],
		Zt = /(=)\?(?=&|$)|\?\?/;
	ce.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Kt.pop() || ce.expando + "_" + jt.guid++;
			return this[e] = !0, e
		}
	}), ce.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return o || ce.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = ie[r], ie[r] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
		}), "script"
	}), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
		var r, i, o
	}, ce.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, ce.expr.pseudos.animated = function(t) {
		return ce.grep(ce.timers, function(e) {
			return t === e.elem
		}).length
	}, ce.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l = ce.css(e, "position"),
				c = ce(e),
				f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
		}
	}, ce.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				ce.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - ce.css(r, "marginTop", !0),
					left: t.left - i.left - ce.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent;
				while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
				return e || J
			})
		}
	}), ce.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		ce.fn[t] = function(e) {
			return R(this, function(e, t, n) {
				var r;
				if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), ce.each(["top", "left"], function(e, n) {
		ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
			if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
		})
	}), ce.each({
		Height: "height",
		Width: "width"
	}, function(a, s) {
		ce.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function(r, o) {
			ce.fn[o] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return R(this, function(e, t, n) {
					var r;
					return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ce.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ce.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		ce.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
	ce.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function() {
			return e.apply(t || this, r.concat(ae.call(arguments)))
		}).guid = e.guid = e.guid || ce.guid++, i
	}, ce.holdReady = function(e) {
		e ? ce.readyWait++ : ce.ready(!0)
	}, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e) {
		var t = ce.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, ce.trim = function(e) {
		return null == e ? "" : (e + "").replace(en, "$1")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ce
	});
	var tn = ie.jQuery,
		nn = ie.$;
	return ce.noConflict = function(e) {
		return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
	}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
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
! function(t, n) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.barba = n()
}(this, function() {
	var t = function() {
		function t() {}
		return t.prototype.then = function(r, i) {
			var e = new t,
				o = this.s;
			if (o) {
				var u = 1 & o ? r : i;
				if (u) {
					try {
						n(e, 1, u(this.v))
					} catch (t) {
						n(e, 2, t)
					}
					return e
				}
				return this
			}
			return this.o = function(t) {
				try {
					var o = t.v;
					1 & t.s ? n(e, 1, r ? r(o) : o) : i ? n(e, 1, i(o)) : n(e, 2, o)
				} catch (t) {
					n(e, 2, t)
				}
			}, e
		}, t
	}();

	function n(r, i, e) {
		if (!r.s) {
			if (e instanceof t) {
				if (!e.s) return void(e.o = n.bind(null, r, i));
				1 & i && (i = e.s), e = e.v
			}
			if (e && e.then) return void e.then(n.bind(null, r, i), n.bind(null, r, 2));
			r.s = i, r.v = e;
			var o = r.o;
			o && o(r)
		}
	}

	function r(t, n) {
		try {
			var r = t()
		} catch (t) {
			return n(t)
		}
		return r && r.then ? r.then(void 0, n) : r
	}
	var i = {};
	! function() {
		function r(t) {
			this.t = t, this.i = null, this.u = null, this.h = null, this.l = null
		}

		function e(t) {
			return {
				value: t,
				done: !0
			}
		}

		function o(t) {
			return {
				value: t,
				done: !1
			}
		}
		r.prototype[Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))] = function() {
			return this
		}, r.prototype.p = function(n) {
			return this.u(n && n.then ? n.then(o) : o(n)), this.i = new t
		}, r.prototype.next = function(r) {
			var o = this;
			return o.l = new Promise(function(u) {
				var f = o.i;
				if (null === f) {
					var s = o.t;
					if (null === s) return u(o.l);

					function c(t) {
						o.u(t && t.then ? t.then(e) : e(t)), o.i = null, o.u = null
					}
					o.t = null, o.u = u, s(o).then(c, function(n) {
						if (n === i) c(o.h);
						else {
							var r = new t;
							o.u(r), o.i = null, o.u = null, _resolve(r, 2, n)
						}
					})
				} else o.i = null, o.u = u, n(f, 1, r)
			})
		}, r.prototype.return = function(t) {
			var r = this;
			return r.l = new Promise(function(o) {
				var u = r.i;
				if (null === u) return null === r.t ? o(r.l) : (r.t = null, o(t && t.then ? t.then(e) : e(t)));
				r.h = t, r.u = o, r.i = null, n(u, 2, i)
			})
		}, r.prototype.throw = function(t) {
			var r = this;
			return r.l = new Promise(function(i, e) {
				var o = r.i;
				if (null === o) return null === r.t ? i(r.l) : (r.t = null, e(t));
				r.u = i, r.i = null, n(o, 2, t)
			})
		}
	}();
	var e, o, u = (function(t) {
		var n = t.exports = function(t, n) {
			return n = n || function() {},
				function() {
					var r = !1,
						i = arguments,
						e = new Promise(function(n, e) {
							var o, u = t.apply({
								async: function() {
									return r = !0,
										function(t, r) {
											t ? e(t) : n(r)
										}
								}
							}, Array.prototype.slice.call(i));
							r || (!(o = u) || "object" != typeof o && "function" != typeof o || "function" != typeof o.then ? n(u) : u.then(n, e))
						});
					return e.then(n.bind(null, null), n), e
				}
		};
		n.cb = function(t, r) {
			return n(function() {
				var n = Array.prototype.slice.call(arguments);
				return n.length === t.length - 1 && n.push(this.async()), t.apply(this, n)
			}, r)
		}
	}(e = {
		exports: {}
	}), e.exports);
	! function(t) {
		t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
	}(o || (o = {}));
	var f = o.off,
		s = function(t) {
			this.m = t
		};
	s.getLevel = function() {
		return f
	}, s.setLevel = function(t) {
		return f = o[t]
	}, s.prototype.error = function() {
		for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
		this.P(console.error, o.error, t)
	}, s.prototype.warn = function() {
		for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
		this.P(console.warn, o.warning, t)
	}, s.prototype.info = function() {
		for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
		this.P(console.info, o.info, t)
	}, s.prototype.debug = function() {
		for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
		this.P(console.log, o.debug, t)
	}, s.prototype.P = function(t, n, r) {
		n <= s.getLevel() && t.apply(console, ["[" + this.m + "] "].concat(r))
	};
	var c = function() {
		this.logger = new s("@barba/core"), this.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeAppear", "appear", "afterAppear", "appearCanceled", "before", "beforeLeave", "leave", "afterLeave", "leaveCanceled", "beforeEnter", "enter", "afterEnter", "enterCanceled", "after"], this.registered = new Map, this.init()
	};
	c.prototype.init = function() {
		var t = this;
		this.registered.clear(), this.all.forEach(function(n) {
			t[n] || (t[n] = function(r, i) {
				void 0 === i && (i = null), t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
					ctx: i,
					fn: r
				})
			})
		})
	}, c.prototype.do = function(t) {
		for (var n = [], r = arguments.length - 1; r-- > 0;) n[r] = arguments[r + 1];
		if (this.registered.has(t)) {
			var i = Promise.resolve();
			return this.registered.get(t).forEach(function(t) {
				var r = t.ctx ? t.fn.bind(t.ctx) : t.fn;
				i = i.then(function() {
					return u(r).apply(void 0, n)
				})
			}), i
		}
		return Promise.resolve()
	}, c.prototype.clear = function() {
		var t = this;
		this.all.forEach(function(n) {
			delete t[n]
		}), this.init()
	}, c.prototype.help = function() {
		this.logger.info("Available hooks: " + this.all.join(","));
		var t = [];
		this.registered.forEach(function(n, r) {
			return t.push(r)
		}), this.logger.info("Registered hooks: " + t.join(","))
	};
	var a = new c,
		h = function t(n, r, i) {
			return n instanceof RegExp ? function(t, n) {
				if (!n) return t;
				var r = t.source.match(/\((?!\?)/g);
				if (r)
					for (var i = 0; i < r.length; i++) n.push({
						name: i,
						prefix: null,
						delimiter: null,
						optional: !1,
						repeat: !1,
						pattern: null
					});
				return t
			}(n, r) : Array.isArray(n) ? function(n, r, i) {
				for (var e = [], o = 0; o < n.length; o++) e.push(t(n[o], r, i).source);
				return new RegExp("(?:" + e.join("|") + ")", g(i))
			}(n, r, i) : function(t, n, r) {
				return E(w(t, r), n, r)
			}(n, r, i)
		},
		v = w,
		l = b,
		p = E,
		d = "https://artemsemkin.com/",
		m = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

	function w(t, n) {
		for (var r, i = [], e = 0, o = 0, u = "", f = n && n.delimiter || d, s = n && n.whitelist || void 0, c = !1; null !== (r = m.exec(t));) {
			var a = r[0],
				h = r[1],
				v = r.index;
			if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;
			else {
				var l = "",
					p = r[2],
					w = r[3],
					b = r[4],
					g = r[5];
				if (!c && u.length) {
					var E = u.length - 1,
						x = u[E];
					(!s || s.indexOf(x) > -1) && (l = x, u = u.slice(0, E))
				}
				u && (i.push(u), u = "", c = !1);
				var A = w || b,
					T = l || f;
				i.push({
					name: p || e++,
					prefix: l,
					delimiter: T,
					optional: "?" === g || "*" === g,
					repeat: "+" === g || "*" === g,
					pattern: A ? P(A) : "[^" + y(T === f ? T : T + f) + "]+?"
				})
			}
		}
		return (u || o < t.length) && i.push(u + t.substr(o)), i
	}

	function b(t) {
		for (var n = new Array(t.length), r = 0; r < t.length; r++) "object" == typeof t[r] && (n[r] = new RegExp("^(?:" + t[r].pattern + ")$"));
		return function(r, i) {
			for (var e = "", o = i && i.encode || encodeURIComponent, u = 0; u < t.length; u++) {
				var f = t[u];
				if ("string" != typeof f) {
					var s, c = r ? r[f.name] : void 0;
					if (Array.isArray(c)) {
						if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but got array');
						if (0 === c.length) {
							if (f.optional) continue;
							throw new TypeError('Expected "' + f.name + '" to not be empty')
						}
						for (var a = 0; a < c.length; a++) {
							if (s = o(c[a], f), !n[u].test(s)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '"');
							e += (0 === a ? f.prefix : f.delimiter) + s
						}
					} else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) {
						if (!f.optional) throw new TypeError('Expected "' + f.name + '" to be ' + (f.repeat ? "an array" : "a string"))
					} else {
						if (s = o(String(c), f), !n[u].test(s)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but got "' + s + '"');
						e += f.prefix + s
					}
				} else e += f
			}
			return e
		}
	}

	function y(t) {
		return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
	}

	function P(t) {
		return t.replace(/([=!:$\/()])/g, "\\$1")
	}

	function g(t) {
		return t && t.sensitive ? "" : "i"
	}

	function E(t, n, r) {
		for (var i = (r = r || {}).strict, e = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || d, f = [].concat(r.endsWith || []).map(y).concat("$").join("|"), s = e ? "^" : "", c = 0; c < t.length; c++) {
			var a = t[c];
			if ("string" == typeof a) s += y(a);
			else {
				var h = a.repeat ? "(?:" + a.pattern + ")(?:" + y(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
				n && n.push(a), s += a.optional ? a.prefix ? "(?:" + y(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : y(a.prefix) + "(" + h + ")"
			}
		}
		if (o) i || (s += "(?:" + y(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
		else {
			var v = t[t.length - 1],
				l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
			i || (s += "(?:" + y(u) + "(?=" + f + "))?"), l || (s += "(?=" + y(u) + "|" + f + ")")
		}
		return new RegExp(s, g(r))
	}
	h.parse = v, h.compile = function(t, n) {
		return b(w(t, n))
	}, h.tokensToFunction = l, h.tokensToRegExp = p;
	var x = {
			container: "container",
			namespace: "namespace",
			prefix: "data-barba",
			prevent: "prevent",
			wrapper: "wrapper"
		},
		A = function() {
			this.g = x, this.A = new DOMParser
		};
	A.prototype.toString = function(t) {
		return t.outerHTML
	}, A.prototype.toDocument = function(t) {
		return this.A.parseFromString(t, "text/html")
	}, A.prototype.toElement = function(t) {
		var n = document.createElement("div");
		return n.innerHTML = t, n
	}, A.prototype.getHtml = function(t) {
		return void 0 === t && (t = document), this.toString(t.documentElement)
	}, A.prototype.getWrapper = function(t) {
		return void 0 === t && (t = document), t.querySelector("[" + this.g.prefix + '="' + this.g.wrapper + '"]')
	}, A.prototype.getContainer = function(t) {
		return void 0 === t && (t = document), t.querySelector("[" + this.g.prefix + '="' + this.g.container + '"]')
	}, A.prototype.getNamespace = function(t) {
		void 0 === t && (t = document);
		var n = t.querySelector("[" + this.g.prefix + "-" + this.g.namespace + "]");
		return n ? n.getAttribute(this.g.prefix + "-" + this.g.namespace) : null
	}, A.prototype.getHref = function(t) {
		if (t.tagName && "a" === t.tagName.toLowerCase()) {
			var n = t.getAttribute("href");
			if (n) return null;
		}
		return null
	};
	var T = new A,
		j = function() {
			this.T = []
		},
		R = {
			current: {
				configurable: !0
			},
			previous: {
				configurable: !0
			},
			size: {
				configurable: !0
			}
		};
	j.prototype.add = function(t, n) {
		this.T.push({
			url: t,
			ns: n
		})
	}, j.prototype.remove = function() {
		this.T.pop()
	}, j.prototype.push = function(t, n) {
		this.add(t, n), window.history && window.history.pushState(null, "", t)
	}, j.prototype.cancel = function() {
		this.remove(), window.history && window.history.back()
	}, R.current.get = function() {
		return this.T[this.T.length - 1]
	}, R.previous.get = function() {
		return this.T.length < 2 ? null : this.T[this.T.length - 2]
	}, R.size.get = function() {
		return this.T.length
	}, Object.defineProperties(j.prototype, R);
	var k = new j,
		O = function(t, n) {
			try {
				var r = function() {
					if (!n.next.html) return Promise.resolve(t).then(function(t) {
						var r = n.next,
							i = n.trigger;
						if (t) {
							var e = T.toElement(t);
							r.namespace = T.getNamespace(e), r.container = T.getContainer(e), r.html = t, "popstate" === i ? k.add(r.url.href, r.namespace) : k.push(r.url.href, r.namespace);
							var o = T.toDocument(t);
							document.title = o.title
						}
					})
				}();
				return Promise.resolve(r && r.then ? r.then(function() {}) : void 0)
			} catch (t) {
				return Promise.reject(t)
			}
		},
		L = h,
		M = {
			update: O,
			nextTick: function() {
				return new Promise(function(t) {
					window.requestAnimationFrame(t)
				})
			},
			pathToRegexp: L
		},
		S = function() {
			return window.location.origin
		},
		$ = function(t) {
			var n = t || window.location.port,
				r = window.location.protocol;
			return "" !== n ? parseInt(n, 10) : "https:" === r ? 443 : 80
		},
		q = function(t) {
			var n, r = t.replace(S(), ""),
				i = {},
				e = r.indexOf("#");
			e >= 0 && (n = r.slice(e + 1), r = r.slice(0, e));
			var o = r.indexOf("?");
			return o >= 0 && (i = C(r.slice(o + 1)), r = r.slice(0, o)), {
				hash: n,
				path: r,
				query: i
			}
		},
		C = function(t) {
			return t.split("&").reduce(function(t, n) {
				var r = n.split("=");
				return t[r[0]] = r[1], t
			}, {})
		},
		B = function(t) {
			return t.replace(/(\/#.*|\/|#.*)$/, "")
		},
		H = {
			getHref: function() {
				return window.location.href
			},
			getOrigin: S,
			getPort: $,
			getPath: function(t) {
				return q(t).path
			},
			parse: q,
			parseQuery: C,
			clean: B
		},
		I = function(t) {
			if (this.j = [], "boolean" == typeof t) this.R = t;
			else {
				var n = Array.isArray(t) ? t : [t];
				this.j = n.map(function(t) {
					return L(t)
				})
			}
		};
	I.prototype.checkUrl = function(t) {
		if ("boolean" == typeof this.R) return this.R;
		var n = q(t).path;
		return this.j.some(function(t) {
			return null !== t.exec(n)
		})
	};
	var N = function(t) {
		function n(n) {
			t.call(this, n), this.T = new Map
		}
		return t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)).constructor = n, n.prototype.set = function(t, n, r) {
			return this.checkUrl(t) || this.T.set(t, {
				action: r,
				request: n
			}), {
				action: r,
				request: n
			}
		}, n.prototype.get = function(t) {
			return this.T.get(t)
		}, n.prototype.getRequest = function(t) {
			return this.T.get(t).request
		}, n.prototype.getAction = function(t) {
			return this.T.get(t).action
		}, n.prototype.has = function(t) {
			return this.T.has(t)
		}, n.prototype.delete = function(t) {
			return this.T.delete(t)
		}, n.prototype.update = function(t, n) {
			var r = Object.assign({}, this.T.get(t), n);
			return this.T.set(t, r), r
		}, n
	}(I);

	function U(t, n, r) {
		return void 0 === n && (n = 2e3), new Promise(function(i, e) {
			var o = new XMLHttpRequest;
			o.onreadystatechange = function() {
				if (o.readyState === XMLHttpRequest.DONE)
					if (200 === o.status) i(o.responseText);
					else if (o.status) {
					var n = {
						status: o.status,
						statusText: o.statusText
					};
					r(t, n), e(n)
				}
			}, o.ontimeout = function() {
				var i = new Error("Timeout error [" + n + "]");
				r(t, i), e(i)
			}, o.onerror = function() {
				var n = new Error("Fetch error");
				r(t, n), e(n)
			}, o.open("https://artemsemkin.com/rhye/html/404.html", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send()
		})
	}
	var D = function() {
			return !window.history.pushState
		},
		X = function(t) {
			return !t.el || !t.href
		},
		_ = function(t) {
			var n = t.event;
			return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey
		},
		z = function(t) {
			var n = t.el;
			return n.hasAttribute("target") && "_blank" === n.target
		},
		F = function(t) {
			var n = t.el;
			return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname
		},
		G = function(t) {
			var n = t.el;
			return void 0 !== n.port && $() !== $(n.port)
		},
		Q = function(t) {
			var n = t.el;
			return n.getAttribute && "string" == typeof n.getAttribute("download")
		},
		W = function(t) {
			return t.el.hasAttribute(x.prefix + "-" + x.prevent)
		},
		J = function(t) {
			return Boolean(t.el.closest("[" + x.prefix + "-" + x.prevent + '="all"]'))
		},
		K = function(t) {
			return B(t.href) === B(window.location.href)
		},
		V = function(t) {
			function n(n) {
				t.call(this, n), this.suite = [], this.tests = new Map, this.init()
			}
			return t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)).constructor = n, n.prototype.init = function() {
				this.add("pushState", D), this.add("exists", X), this.add("newTab", _), this.add("blank", z), this.add("corsDomain", F), this.add("corsPort", G), this.add("download", Q), this.add("preventSelf", W), this.add("preventAll", J), this.add("sameUrl", K, !1)
			}, n.prototype.add = function(t, n, r) {
				void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t)
			}, n.prototype.run = function(t, n, r, i) {
				return this.tests.get(t)({
					el: n,
					event: r,
					href: i
				})
			}, n.prototype.checkLink = function(t, n, r) {
				var i = this;
				return this.suite.some(function(e) {
					return i.run(e, t, n, r)
				})
			}, n
		}(I),
		Y = function(t) {
			void 0 === t && (t = []), this.logger = new s("@barba/core"), this.all = [], this.appear = [], this.k = [{
				name: "namespace",
				type: "strings"
			}, {
				name: "custom",
				type: "function"
			}], t && (this.all = this.all.concat(t)), this.update()
		};
	Y.prototype.add = function(t, n) {
		switch (t) {
			case "rule":
				this.k.splice(n.position || 0, 0, n.value);
				break;
			case "transition":
			default:
				this.all.push(n)
		}
		this.update()
	}, Y.prototype.resolve = function(t, n) {
		var r, i = this;
		void 0 === n && (n = {});
		var e = n.appear ? this.appear : this.all;
		e = e.filter(n.self ? function(t) {
			return t.name && "self" === t.name
		} : function(t) {
			return !t.name || "self" !== t.name
		});
		var o = new Map,
			u = e.find(function(r) {
				var e = !0,
					u = {};
				return !(!n.self || "self" !== r.name) || (i.k.reverse().forEach(function(o) {
					e && (e = i.O(r, o, t, u), n.appear || (r.from && r.to && (e = i.O(r, o, t, u, "from") && i.O(r, o, t, u, "to")), r.from && !r.to && (e = i.O(r, o, t, u, "from")), !r.from && r.to && (e = i.O(r, o, t, u, "to"))))
				}), o.set(r, u), e)
			}),
			f = o.get(u),
			s = [];
		if (s.push(n.appear ? "appear" : "page"), n.self && s.push("self"), f) {
			var c = [u];
			Object.keys(f).length > 0 && c.push(f), (r = this.logger).info.apply(r, ["Transition found [" + s.join(",") + "]"].concat(c))
		} else this.logger.info("No transition found [" + s.join(",") + "]");
		return u
	}, Y.prototype.update = function() {
		var t = this;
		this.all = this.all.map(function(n) {
			return t.L(n)
		}).sort(function(t, n) {
			return t.priority - n.priority
		}).reverse().map(function(t) {
			return delete t.priority, t
		}), this.appear = this.all.filter(function(t) {
			return void 0 !== t.appear
		})
	}, Y.prototype.O = function(t, n, r, i, e) {
		var o = !0,
			u = !1,
			f = t,
			s = n.name,
			c = s,
			a = s,
			h = s,
			v = e ? f[e] : f,
			l = "to" === e ? r.next : r.current;
		if (e ? v && v[s] : v[s]) {
			switch (n.type) {
				case "strings":
				default:
					var p = Array.isArray(v[c]) ? v[c] : [v[c]];
					l[c] && -1 !== p.indexOf(l[c]) && (u = !0), -1 === p.indexOf(l[c]) && (o = !1);
					break;
				case "object":
					var d = Array.isArray(v[a]) ? v[a] : [v[a]];
					l[a] && (l[a].name && -1 !== d.indexOf(l[a].name) && (u = !0), -1 === d.indexOf(l[a].name) && (o = !1));
					break;
				case "function":
					v[h](r) ? u = !0 : o = !1
			}
			u && (e ? (i[e] = i[e] || {}, i[e][s] = f[e][s]) : i[s] = f[s])
		}
		return o
	}, Y.prototype.M = function(t, n, r) {
		var i = 0;
		return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (i += Math.pow(10, r), t.from && t.from[n] && (i += 1), t.to && t.to[n] && (i += 2)), i
	}, Y.prototype.L = function(t) {
		var n = this;
		t.priority = 0;
		var r = 0;
		return this.k.forEach(function(i, e) {
			r += n.M(t, i.name, e + 1)
		}), t.priority = r, t
	};
	var Z = function(t) {
			void 0 === t && (t = []), this.logger = new s("@barba/core"), this.S = !1, this.store = new Y(t)
		},
		tt = {
			isRunning: {
				configurable: !0
			},
			hasAppear: {
				configurable: !0
			},
			hasSelf: {
				configurable: !0
			},
			shouldWait: {
				configurable: !0
			}
		};
	Z.prototype.get = function(t, n) {
		return this.store.resolve(t, n)
	}, tt.isRunning.get = function() {
		return this.S
	}, tt.isRunning.set = function(t) {
		this.S = t
	}, tt.hasAppear.get = function() {
		return this.store.appear.length > 0
	}, tt.hasSelf.get = function() {
		return this.store.all.some(function(t) {
			return "self" === t.name
		})
	}, tt.shouldWait.get = function() {
		return this.store.all.some(function(t) {
			return t.to && !t.to.route || t.sync
		})
	}, Z.prototype.doAppear = function(t) {
		var n = t.data,
			i = t.transition;
		try {
			var e = this;

			function o(t) {
				e.S = !1
			}
			var u = i || {};
			e.S = !0;
			var f = r(function() {
				return Promise.resolve(e.$("beforeAppear", n, u)).then(function() {
					return Promise.resolve(e.appear(n, u)).then(function() {
						return Promise.resolve(e.$("afterAppear", n, u)).then(function() {})
					})
				})
			}, function(t) {
				throw e.S = !1, e.logger.error(t), new Error("Transition error [appear]")
			});
			return f && f.then ? f.then(o) : o()
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.doPage = function(t) {
		var n = t.data,
			i = t.transition,
			e = t.page,
			o = t.wrapper;
		try {
			var u = this;

			function f(t) {
				u.S = !1
			}
			var s = i || {},
				c = !0 === s.sync || !1;
			u.S = !0;
			var a = r(function() {
				function t() {
					return Promise.resolve(u.$("before", n, s)).then(function() {
						function t(t) {
							return Promise.resolve(u.$("after", n, s)).then(function() {
								return Promise.resolve(u.remove(n)).then(function() {})
							})
						}
						var i = function() {
							if (c) return r(function() {
								return Promise.resolve(u.add(n, o)).then(function() {
									return Promise.resolve(u.$("beforeLeave", n, s)).then(function() {
										return Promise.resolve(u.$("beforeEnter", n, s)).then(function() {
											return Promise.resolve(Promise.all([u.leave(n, s), u.enter(n, s)])).then(function() {
												return Promise.resolve(u.$("afterLeave", n, s)).then(function() {
													return Promise.resolve(u.$("afterEnter", n, s)).then(function() {})
												})
											})
										})
									})
								})
							}, function() {
								throw new Error("Transition error [page][sync]")
							});
							{
								function t(t) {
									return r(function() {
										var t = function() {
											if (!1 !== i) return Promise.resolve(u.add(n, o)).then(function() {
												return Promise.resolve(u.$("beforeEnter", n, s)).then(function() {
													return Promise.resolve(u.enter(n, s, i)).then(function() {
														return Promise.resolve(u.$("afterEnter", n, s)).then(function() {})
													})
												})
											})
										}();
										if (t && t.then) return t.then(function() {})
									}, function() {
										throw new Error("Transition error [page][enter]")
									})
								}
								var i = !1,
									f = r(function() {
										return Promise.resolve(u.$("beforeLeave", n, s)).then(function() {
											return Promise.resolve(Promise.all([u.leave(n, s), O(e, n)]).then(function(t) {
												return t[0]
											})).then(function(t) {
												return i = t, Promise.resolve(u.$("afterLeave", n, s)).then(function() {})
											})
										})
									}, function() {
										throw new Error("Transition error [page][leave]")
									});
								return f && f.then ? f.then(t) : t()
							}
						}();
						return i && i.then ? i.then(t) : t()
					})
				}
				var i = function() {
					if (c) return Promise.resolve(O(e, n)).then(function() {})
				}();
				return i && i.then ? i.then(t) : t()
			}, function(t) {
				throw u.S = !1, u.logger.error(t), new Error("Transition error")
			});
			return a && a.then ? a.then(f) : f()
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.appear = function(t, n) {
		try {
			return Promise.resolve(a.do("appear", t, n)).then(function() {
				return n.appear ? u(n.appear)(t) : Promise.resolve()
			})
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.leave = function(t, n) {
		try {
			return Promise.resolve(a.do("leave", t, n)).then(function() {
				return n.leave ? u(n.leave)(t) : Promise.resolve()
			})
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.enter = function(t, n, r) {
		try {
			return Promise.resolve(a.do("enter", t, n)).then(function() {
				return n.enter ? u(n.enter)(t, r) : Promise.resolve()
			})
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.add = function(t, n) {
		try {
			n.appendChild(t.next.container), a.do("nextAdded", t)
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.remove = function(t) {
		try {
			var n = t.current.container;
			document.body.contains(n) && (n.parentNode.removeChild(n), a.do("currentRemoved", t))
		} catch (t) {
			return Promise.reject(t)
		}
	}, Z.prototype.$ = function(t, n, r) {
		try {
			return Promise.resolve(a.do(t, n, r)).then(function() {
				return r[t] ? u(r[t])(n) : Promise.resolve()
			})
		} catch (t) {
			return Promise.reject(t)
		}
	}, Object.defineProperties(Z.prototype, tt);
	var nt = function(t) {
		var n = this;
		this.names = ["beforeAppear", "afterAppear", "beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach(function(t) {
			n.byNamespace.set(t.namespace, t)
		}), this.names.forEach(function(t) {
			a[t](n.q(t), n)
		}))
	};
	nt.prototype.q = function(t) {
		var n = this;
		return function(r) {
			var i = t.match(/enter/i) ? r.next : r.current,
				e = n.byNamespace.get(i.namespace);
			e && e[t] && e[t](r)
		}
	}, Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
		var n = this;
		do {
			if (n.matches(t)) return n;
			n = n.parentElement || n.parentNode
		} while (null !== n && 1 === n.nodeType);
		return null
	});
	var rt = {
			container: void 0,
			html: void 0,
			namespace: void 0,
			url: {
				hash: void 0,
				href: void 0,
				path: void 0,
				query: {}
			}
		},
		it = function() {
			this.version = "2.4.0", this.schemaPage = rt, this.Logger = s, this.logger = new s("@barba/core"), this.plugins = [], this.hooks = a, this.dom = T, this.helpers = M, this.history = k, this.request = U, this.url = H
		},
		et = {
			data: {
				configurable: !0
			},
			wrapper: {
				configurable: !0
			}
		};
	return it.prototype.use = function(t, n) {
		var r = this.plugins;
		r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
	}, it.prototype.init = function(t) {
		void 0 === t && (t = {});
		var n = t.transitions;
		void 0 === n && (n = []);
		var r = t.views;
		void 0 === r && (r = []);
		var i = t.prevent;
		void 0 === i && (i = null);
		var e = t.timeout;
		void 0 === e && (e = 2e3);
		var o = t.requestError,
			u = t.cacheIgnore;
		void 0 === u && (u = !1);
		var f = t.prefetchIgnore;
		void 0 === f && (f = !1);
		var c = t.schema;
		void 0 === c && (c = x);
		var a = t.debug;
		void 0 === a && (a = !1);
		var h = t.logLevel;
		if (void 0 === h && (h = "off"), s.setLevel(!0 === a ? "debug" : h), this.logger.info(this.version), Object.keys(c).forEach(function(t) {
				x[t] && (x[t] = c[t])
			}), this.C = o, this.timeout = e, this.cacheIgnore = u, this.prefetchIgnore = f, this.B = this.dom.getWrapper(), !this.B) throw new Error("[@barba/core] No Barba wrapper found");
		this.B.setAttribute("aria-live", "polite"), this.H();
		var v = this.data.current;
		if (!v.container) throw new Error("[@barba/core] No Barba container found");
		if (this.cache = new N(u), this.prevent = new V(f), this.transitions = new Z(n), this.views = new nt(r), null !== i) {
			if ("function" != typeof i) throw new Error("[@barba/core] Prevent should be a function");
			this.prevent.add("preventCustom", i)
		}
		this.history.add(v.url.href, v.namespace), this.I = this.I.bind(this), this.N = this.N.bind(this), this.U = this.U.bind(this), this.D(), this.plugins.forEach(function(t) {
			return t.init()
		});
		var l = this.data;
		l.trigger = "barba", l.next = l.current, this.hooks.do("ready", l), this.appear(l), this.H()
	}, it.prototype.destroy = function() {
		this.H(), this.X(), this.hooks.clear(), this.plugins = []
	}, et.data.get = function() {
		return this._
	}, et.wrapper.get = function() {
		return this.B
	}, it.prototype.force = function(t) {
		window.location.assign(t)
	}, it.prototype.go = function(t, n, r) {
		var i;
		if (void 0 === n && (n = "barba"), !(i = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, i)
	}, it.prototype.appear = function(t) {
		try {
			var n = this;
			return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
				function i() {
					return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {})
				}
				var e = function() {
					if (n.transitions.hasAppear) {
						var i = r(function() {
							var r = n.transitions.get(t, {
								appear: !0
							});
							return Promise.resolve(n.transitions.doAppear({
								transition: r,
								data: t
							})).then(function() {})
						}, function(t) {
							n.logger.error(t)
						});
						if (i && i.then) return i.then(function() {})
					}
				}();
				return e && e.then ? e.then(i) : i()
			})
		} catch (t) {
			return Promise.reject(t)
		}
	}, it.prototype.page = function(t, n, i) {
		try {
			var e = this;

			function o() {
				var t = e.data;
				return Promise.resolve(e.hooks.do("page", t)).then(function() {
					var n = r(function() {
						var n = e.transitions.get(t, {
							appear: !1,
							self: i
						});
						return Promise.resolve(e.transitions.doPage({
							data: t,
							page: u,
							transition: n,
							wrapper: e.B
						})).then(function() {
							e.H()
						})
					}, function(t) {
						e.logger.error(t)
					});
					if (n && n.then) return n.then(function() {})
				})
			}
			if (e.transitions.isRunning) return void e.force(t);
			e.data.next.url = Object.assign({}, {
				href: t
			}, e.url.parse(t)), e.data.trigger = n;
			var u = e.cache.has(t) ? e.cache.update(t, {
					action: "click"
				}).request : e.cache.set(t, e.request(t, e.timeout, e.onRequestError.bind(e, n)), "click").request,
				f = function() {
					if (e.transitions.shouldWait) return Promise.resolve(O(u, e.data)).then(function() {})
				}();
			return f && f.then ? f.then(o) : o()
		} catch (t) {
			return Promise.reject(t)
		}
	}, it.prototype.onRequestError = function(t) {
		for (var n = [], r = arguments.length - 1; r-- > 0;) n[r] = arguments[r + 1];
		this.transitions.isRunning = !1;
		var i = n[0],
			e = n[1],
			o = this.cache.getAction(i);
		return this.cache.delete(i), !(this.C && !1 === this.C(t, o, i, e) || ("click" === o && this.force(i), 1))
	}, it.prototype.prefetch = function(t) {
		var n = this;
		this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t) {
			n.logger.error(t)
		}), "prefetch")
	}, it.prototype.D = function() {
		!0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.I), document.addEventListener("touchstart", this.I)), document.addEventListener("click", this.N), window.addEventListener("popstate", this.U)
	}, it.prototype.X = function() {
		!0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.I), document.removeEventListener("touchstart", this.I)), document.removeEventListener("click", this.N), window.removeEventListener("popstate", this.U)
	}, it.prototype.I = function(t) {
		var n = this,
			r = this.F(t);
		if (r) {
			var i = this.dom.getHref(r);
			this.prevent.checkUrl(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r)).catch(function(t) {
				n.logger.error(t)
			}), "enter")
		}
	}, it.prototype.N = function(t) {
		var n = this.F(t);
		n && this.go(this.dom.getHref(n), n, t)
	}, it.prototype.U = function() {
		this.go(this.url.getHref(), "popstate")
	}, it.prototype.F = function(t) {
		for (var n = t.target; n && !this.dom.getHref(n);) n = n.parentNode;
		if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n
	}, it.prototype.H = function() {
		var t = this.url.getHref(),
			n = {
				container: this.dom.getContainer(),
				html: this.dom.getHtml(),
				namespace: this.dom.getNamespace(),
				url: Object.assign({}, {
					href: t
				}, this.url.parse(t))
			};
		this._ = {
			current: n,
			next: Object.assign({}, this.schemaPage),
			trigger: void 0
		}, this.hooks.do("reset", this.data)
	}, Object.defineProperties(it.prototype, et), new it
});

(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
		typeof define === 'function' && define.amd ? define(['jquery'], factory) :
		(global.Util = factory(global.jQuery));
}(this, (function($) {
	'use strict';

	$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.3.1): util.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Util = function($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Private TransitionEnd Helpers
		 * ------------------------------------------------------------------------
		 */
		var TRANSITION_END = 'transitionend';
		var MAX_UID = 1000000;
		var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

		function toType(obj) {
			return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
		}

		function getSpecialTransitionEndEvent() {
			return {
				bindType: TRANSITION_END,
				delegateType: TRANSITION_END,
				handle: function handle(event) {
					if ($$$1(event.target).is(this)) {
						return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
					}

					return undefined; // eslint-disable-line no-undefined
				}
			};
		}

		function transitionEndEmulator(duration) {
			var _this = this;

			var called = false;
			$$$1(this).one(Util.TRANSITION_END, function() {
				called = true;
			});
			setTimeout(function() {
				if (!called) {
					Util.triggerTransitionEnd(_this);
				}
			}, duration);
			return this;
		}

		function setTransitionEndSupport() {
			$$$1.fn.emulateTransitionEnd = transitionEndEmulator;
			$$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
		}
		/**
		 * --------------------------------------------------------------------------
		 * Public Util Api
		 * --------------------------------------------------------------------------
		 */


		var Util = {
			TRANSITION_END: 'bsTransitionEnd',
			getUID: function getUID(prefix) {
				do {
					// eslint-disable-next-line no-bitwise
					prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
				} while (document.getElementById(prefix));

				return prefix;
			},
			getSelectorFromElement: function getSelectorFromElement(element) {
				var selector = element.getAttribute('data-target');

				if (!selector || selector === '#') {
					selector = element.getAttribute('href') || '';
				}

				try {
					return document.querySelector(selector) ? selector : null;
				} catch (err) {
					return null;
				}
			},
			getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
				if (!element) {
					return 0;
				} // Get transition-duration of the element


				var transitionDuration = $$$1(element).css('transition-duration');
				var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

				if (!floatTransitionDuration) {
					return 0;
				} // If multiple durations are defined, take the first


				transitionDuration = transitionDuration.split(',')[0];
				return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
			},
			reflow: function reflow(element) {
				return element.offsetHeight;
			},
			triggerTransitionEnd: function triggerTransitionEnd(element) {
				$$$1(element).trigger(TRANSITION_END);
			},
			// TODO: Remove in v5
			supportsTransitionEnd: function supportsTransitionEnd() {
				return Boolean(TRANSITION_END);
			},
			isElement: function isElement(obj) {
				return (obj[0] || obj).nodeType;
			},
			typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
				for (var property in configTypes) {
					if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
						var expectedTypes = configTypes[property];
						var value = config[property];
						var valueType = value && Util.isElement(value) ? 'element' : toType(value);

						if (!new RegExp(expectedTypes).test(valueType)) {
							throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
						}
					}
				}
			}
		};
		setTransitionEndSupport();
		return Util;
	}($);

	return Util;

})));

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
	function e() {}
	var t = e.prototype;
	return t.on = function(e, t) {
		if (e && t) {
			var i = this._events = this._events || {},
				n = i[e] = i[e] || [];
			return n.indexOf(t) == -1 && n.push(t), this
		}
	}, t.once = function(e, t) {
		if (e && t) {
			this.on(e, t);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[e] = i[e] || {};
			return n[t] = !0, this
		}
	}, t.off = function(e, t) {
		var i = this._events && this._events[e];
		if (i && i.length) {
			var n = i.indexOf(t);
			return n != -1 && i.splice(n, 1), this
		}
	}, t.emitEvent = function(e, t) {
		var i = this._events && this._events[e];
		if (i && i.length) {
			i = i.slice(0), t = t || [];
			for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
				var r = i[o],
					s = n && n[r];
				s && (this.off(e, r), delete n[r]), r.apply(this, t)
			}
			return this
		}
	}, t.allOff = function() {
		delete this._events, delete this._onceEvents
	}, e
}),
function(e, t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
		return t(e, i)
	}) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
	function i(e, t) {
		for (var i in t) e[i] = t[i];
		return e
	}

	function n(e) {
		if (Array.isArray(e)) return e;
		var t = "object" == typeof e && "number" == typeof e.length;
		return t ? d.call(e) : [e]
	}

	function o(e, t, r) {
		if (!(this instanceof o)) return new o(e, t, r);
		var s = e;
		return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
	}

	function r(e) {
		this.img = e
	}

	function s(e, t) {
		this.url = e, this.element = t, this.img = new Image
	}
	var h = e.jQuery,
		a = e.console,
		d = Array.prototype.slice;
	o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, o.prototype.addElementImages = function(e) {
		"IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
		var t = e.nodeType;
		if (t && u[t]) {
			for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
				var o = i[n];
				this.addImage(o)
			}
			if ("string" == typeof this.options.background) {
				var r = e.querySelectorAll(this.options.background);
				for (n = 0; n < r.length; n++) {
					var s = r[n];
					this.addElementBackgroundImages(s)
				}
			}
		}
	};
	var u = {
		1: !0,
		9: !0,
		11: !0
	};
	return o.prototype.addElementBackgroundImages = function(e) {
		var t = getComputedStyle(e);
		if (t)
			for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
				var o = n && n[2];
				o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
			}
	}, o.prototype.addImage = function(e) {
		var t = new r(e);
		this.images.push(t)
	}, o.prototype.addBackground = function(e, t) {
		var i = new s(e, t);
		this.images.push(i)
	}, o.prototype.check = function() {
		function e(e, i, n) {
			setTimeout(function() {
				t.progress(e, i, n)
			})
		}
		var t = this;
		return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
			t.once("progress", e), t.check()
		}) : void this.complete()
	}, o.prototype.progress = function(e, t, i) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
	}, o.prototype.complete = function() {
		var e = this.hasAnyBroken ? "fail" : "done";
		if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
			var t = this.hasAnyBroken ? "reject" : "resolve";
			this.jqDeferred[t](this)
		}
	}, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
		var e = this.getIsImageComplete();
		return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
	}, r.prototype.getIsImageComplete = function() {
		return this.img.complete && this.img.naturalWidth
	}, r.prototype.confirm = function(e, t) {
		this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
	}, r.prototype.handleEvent = function(e) {
		var t = "on" + e.type;
		this[t] && this[t](e)
	}, r.prototype.onload = function() {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, r.prototype.onerror = function() {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, r.prototype.unbindEvents = function() {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
		var e = this.getIsImageComplete();
		e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, s.prototype.unbindEvents = function() {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, s.prototype.confirm = function(e, t) {
		this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
	}, o.makeJQueryPlugin = function(t) {
		t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
			var i = new o(this, e, t);
			return i.jqDeferred.promise(h(this))
		})
	}, o.makeJQueryPlugin(), o
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
/*! jQuery & Zepto Lazy - All Plugins v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
! function(t) {
	function a(a, e, r, o) {
		o = o ? o.toUpperCase() : "GET";
		var i;
		"POST" !== o && "PUT" !== o || !a.config("ajaxCreateData") || (i = a.config("ajaxCreateData").apply(a, [e])), t.ajax({
			url: e.attr("data-src"),
			type: "POST" === o || "PUT" === o ? o : "GET",
			data: i,
			dataType: e.attr("data-type") || "html",
			success: function(t) {
				e.html(t), r(!0), a.config("removeAttribute") && e.removeAttr("data-src data-method data-type")
			},
			error: function() {
				r(!1)
			}
		})
	}
	t.lazy("ajax", function(t, e) {
		a(this, t, e, t.attr("data-method"))
	}), t.lazy("get", function(t, e) {
		a(this, t, e, "GET")
	}), t.lazy("post", function(t, e) {
		a(this, t, e, "POST")
	}), t.lazy("put", function(t, e) {
		a(this, t, e, "PUT")
	})
}(window.jQuery || window.Zepto),
function(t) {
	t.lazy(["av", "audio", "video"], ["audio", "video"], function(a, e) {
		var r = a[0].tagName.toLowerCase();
		if ("audio" === r || "video" === r) {
			var o = a.find("data-src"),
				i = a.find("data-track"),
				n = 0,
				c = function() {
					++n === o.length && e(!1)
				},
				s = function() {
					var a = t(this),
						e = a[0].tagName.toLowerCase(),
						r = a.prop("attributes"),
						o = t("data-src" === e ? "<source>" : "<track>");
					"data-src" === e && o.one("error", c), t.each(r, function(t, a) {
						o.attr(a.name, a.value)
					}), a.replaceWith(o)
				};
			a.one("loadedmetadata", function() {
				e(!0)
			}).off("load error").attr("poster", a.attr("data-poster")), o.length ? o.each(s) : a.attr("data-src") ? (t.each(a.attr("data-src").split(","), function(e, r) {
				var o = r.split("|");
				a.append(t("<source>").one("error", c).attr({
					src: o[0].trim(),
					type: o[1].trim()
				}))
			}), this.config("removeAttribute") && a.removeAttr("data-src")) : e(!1), i.length && i.each(s)
		} else e(!1)
	})
}(window.jQuery || window.Zepto),
function(t) {
	t.lazy(["frame", "iframe"], "iframe", function(a, e) {
		var r = this;
		if ("iframe" === a[0].tagName.toLowerCase()) {
			var o = a.attr("data-error-detect");
			"true" !== o && "1" !== o ? (a.attr("src", a.attr("data-src")), r.config("removeAttribute") && a.removeAttr("data-src data-error-detect")) : t.ajax({
				url: a.attr("data-src"),
				dataType: "html",
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				},
				success: function(t) {
					a.html(t).attr("src", a.attr("data-src")), r.config("removeAttribute") && a.removeAttr("data-src data-error-detect")
				},
				error: function() {
					e(!1)
				}
			})
		} else e(!1)
	})
}(window.jQuery || window.Zepto),
function(t) {
	t.lazy("noop", function() {}), t.lazy("noop-success", function(t, a) {
		a(!0)
	}), t.lazy("noop-error", function(t, a) {
		a(!1)
	})
}(window.jQuery || window.Zepto),
function(t) {
	function a(a, e, i) {
		var n = a.prop("attributes"),
			c = t("<" + e + ">");
		return t.each(n, function(t, a) {
			"srcset" !== a.name && a.name !== o || (a.value = r(a.value, i)), c.attr(a.name, a.value)
		}), a.replaceWith(c), c
	}

	function e(a, e, r) {
		var o = t("<img>").one("load", function() {
			r(!0)
		}).one("error", function() {
			r(!1)
		}).appendTo(a).attr("src", e);
		o.complete && o.load()
	}

	function r(t, a) {
		if (a) {
			var e = t.split(",");
			t = "";
			for (var r = 0, o = e.length; r < o; r++) t += a + e[r].trim() + (r !== o - 1 ? "," : "")
		}
		return t
	}
	var o = "data-src";
	t.lazy(["pic", "picture"], ["picture"], function(i, n) {
		if ("picture" === i[0].tagName.toLowerCase()) {
			var c = i.find(o),
				s = i.find("data-img"),
				d = this.config("imageBase") || "";
			c.length ? (c.each(function() {
				a(t(this), "source", d)
			}), 1 === s.length ? (s = a(s, "img", d), s.on("load", function() {
				n(!0)
			}).on("error", function() {
				n(!1)
			}), s.attr("src", s.attr(o)), this.config("removeAttribute") && s.removeAttr(o)) : i.attr(o) ? (e(i, d + i.attr(o), n), this.config("removeAttribute") && i.removeAttr(o)) : n(!1)) : i.attr("data-srcset") ? (t("<source>").attr({
				media: i.attr("data-media"),
				sizes: i.attr("data-sizes"),
				type: i.attr("data-type"),
				srcset: r(i.attr("data-srcset"), d)
			}).appendTo(i), e(i, d + i.attr(o), n), this.config("removeAttribute") && i.removeAttr(o + " data-srcset data-media data-sizes data-type")) : n(!1)
		} else n(!1)
	})
}(window.jQuery || window.Zepto),
function(t) {
	t.lazy(["js", "javascript", "script"], "script", function(t, a) {
		"script" === t[0].tagName.toLowerCase() ? (t.attr("src", t.attr("data-src")), this.config("removeAttribute") && t.removeAttr("data-src")) : a(!1)
	})
}(window.jQuery || window.Zepto),
function(t) {
	t.lazy("vimeo", function(t, a) {
		"iframe" === t[0].tagName.toLowerCase() ? (t.attr("src", "https://player.vimeo.com/video/" + t.attr("data-src")), this.config("removeAttribute") && t.removeAttr("data-src")) : a(!1)
	})
}(window.jQuery || window.Zepto),
function(t) {
	t.lazy(["yt", "youtube"], function(t, a) {
		if ("iframe" === t[0].tagName.toLowerCase()) {
			var e = /1|true/.test(t.attr("data-nocookie"));
			t.attr("src", "https://www.youtube" + (e ? "-nocookie" : "") + ".com/embed/" + t.attr("data-src") + "?rel=0&amp;showinfo=0"), this.config("removeAttribute") && t.removeAttr("data-src")
		} else a(!1)
	})
}(window.jQuery || window.Zepto);
/*! PhotoSwipe - v4.1.3 - 2019-01-08
 * http://photoswipe.com
 * Copyright (c) 2019 Dmitry Semenov; */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipe = factory();
	}
})(this, function() {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options) {

		/*>>framework-bridge*/
		/**
		 *
		 * Set of generic functions used by gallery.
		 * 
		 * You're free to modify anything here as long as functionality is kept.
		 * 
		 */
		var framework = {
			features: null,
			bind: function(target, type, listener, unbind) {
				var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
				type = type.split(' ');
				for (var i = 0; i < type.length; i++) {
					if (type[i]) {
						target[methodName](type[i], listener, false);
					}
				}
			},
			isArray: function(obj) {
				return (obj instanceof Array);
			},
			createEl: function(classes, tag) {
				var el = document.createElement(tag || 'div');
				if (classes) {
					el.className = classes;
				}
				return el;
			},
			getScrollY: function() {
				var yOffset = window.pageYOffset;
				return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
			},
			unbind: function(target, type, listener) {
				framework.bind(target, type, listener, true);
			},
			removeClass: function(el, className) {
				var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
				el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			},
			addClass: function(el, className) {
				if (!framework.hasClass(el, className)) {
					el.className += (el.className ? ' ' : '') + className;
				}
			},
			hasClass: function(el, className) {
				return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
			},
			getChildByClass: function(parentEl, childClassName) {
				var node = parentEl.firstChild;
				while (node) {
					if (framework.hasClass(node, childClassName)) {
						return node;
					}
					node = node.nextSibling;
				}
			},
			arraySearch: function(array, value, key) {
				var i = array.length;
				while (i--) {
					if (array[i][key] === value) {
						return i;
					}
				}
				return -1;
			},
			extend: function(o1, o2, preventOverwrite) {
				for (var prop in o2) {
					if (o2.hasOwnProperty(prop)) {
						if (preventOverwrite && o1.hasOwnProperty(prop)) {
							continue;
						}
						o1[prop] = o2[prop];
					}
				}
			},
			easing: {
				sine: {
					out: function(k) {
						return Math.sin(k * (Math.PI / 2));
					},
					inOut: function(k) {
						return -(Math.cos(Math.PI * k) - 1) / 2;
					}
				},
				cubic: {
					out: function(k) {
						return --k * k * k + 1;
					}
				}
				/*
					elastic: {
						out: function ( k ) {

							var s, a = 0.1, p = 0.4;
							if ( k === 0 ) return 0;
							if ( k === 1 ) return 1;
							if ( !a || a < 1 ) { a = 1; s = p / 4; }
							else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
							return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

						},
					},
					back: {
						out: function ( k ) {
							var s = 1.70158;
							return --k * k * ( ( s + 1 ) * k + s ) + 1;
						}
					}
				*/
			},

			/**
			 * 
			 * @return {object}
			 * 
			 * {
			 *  raf : request animation frame function
			 *  caf : cancel animation frame function
			 *  transfrom : transform property key (with vendor), or null if not supported
			 *  oldIE : IE8 or below
			 * }
			 * 
			 */
			detectFeatures: function() {
				if (framework.features) {
					return framework.features;
				}
				var helperEl = framework.createEl(),
					helperStyle = helperEl.style,
					vendor = '',
					features = {};

				// IE8 and below
				features.oldIE = document.all && !document.addEventListener;

				features.touch = 'ontouchstart' in window;

				if (window.requestAnimationFrame) {
					features.raf = window.requestAnimationFrame;
					features.caf = window.cancelAnimationFrame;
				}

				features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

				// fix false-positive detection of old Android in new IE
				// (IE11 ua string contains "Android 4.0")

				if (!features.pointerEvent) {

					var ua = navigator.userAgent;

					// Detect if device is iPhone or iPod and if it's older than iOS 8
					// http://stackoverflow.com/a/14223920
					// 
					// This detection is made because of buggy top/bottom toolbars
					// that don't trigger window.resize event.
					// For more info refer to _isFixedPosition variable in core.js

					if (/iP(hone|od)/.test(navigator.platform)) {
						var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
						if (v && v.length > 0) {
							v = parseInt(v[1], 10);
							if (v >= 1 && v < 8) {
								features.isOldIOSPhone = true;
							}
						}
					}

					// Detect old Android (before KitKat)
					// due to bugs related to position:fixed
					// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

					var match = ua.match(/Android\s([0-9\.]*)/);
					var androidversion = match ? match[1] : 0;
					androidversion = parseFloat(androidversion);
					if (androidversion >= 1) {
						if (androidversion < 4.4) {
							features.isOldAndroid = true; // for fixed position bug & performance
						}
						features.androidVersion = androidversion; // for touchend bug
					}
					features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

					// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
				}

				var styleChecks = ['transform', 'perspective', 'animationName'],
					vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
					styleCheckItem,
					styleName;

				for (var i = 0; i < 4; i++) {
					vendor = vendors[i];

					for (var a = 0; a < 3; a++) {
						styleCheckItem = styleChecks[a];

						// uppercase first letter of property name, if vendor is present
						styleName = vendor + (vendor ?
							styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
							styleCheckItem);

						if (!features[styleCheckItem] && styleName in helperStyle) {
							features[styleCheckItem] = styleName;
						}
					}

					if (vendor && !features.raf) {
						vendor = vendor.toLowerCase();
						features.raf = window[vendor + 'RequestAnimationFrame'];
						if (features.raf) {
							features.caf = window[vendor + 'CancelAnimationFrame'] ||
								window[vendor + 'CancelRequestAnimationFrame'];
						}
					}
				}

				if (!features.raf) {
					var lastTime = 0;
					features.raf = function(fn) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - lastTime));
						var id = window.setTimeout(function() {
							fn(currTime + timeToCall);
						}, timeToCall);
						lastTime = currTime + timeToCall;
						return id;
					};
					features.caf = function(id) {
						clearTimeout(id);
					};
				}

				// Detect SVG support
				features.svg = !!document.createElementNS &&
					!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

				framework.features = features;

				return features;
			}
		};

		framework.detectFeatures();

		// Override addEventListener for old versions of IE
		if (framework.features.oldIE) {

			framework.bind = function(target, type, listener, unbind) {

				type = type.split(' ');

				var methodName = (unbind ? 'detach' : 'attach') + 'Event',
					evName,
					_handleEv = function() {
						listener.handleEvent.call(listener);
					};

				for (var i = 0; i < type.length; i++) {
					evName = type[i];
					if (evName) {

						if (typeof listener === 'object' && listener.handleEvent) {
							if (!unbind) {
								listener['oldIE' + evName] = _handleEv;
							} else {
								if (!listener['oldIE' + evName]) {
									return false;
								}
							}

							target[methodName]('on' + evName, listener['oldIE' + evName]);
						} else {
							target[methodName]('on' + evName, listener);
						}

					}
				}
			};

		}

		/*>>framework-bridge*/

		/*>>core*/
		//function(template, UiClass, items, options)

		var self = this;

		/**
		 * Static vars, don't change unless you know what you're doing.
		 */
		var DOUBLE_TAP_RADIUS = 25,
			NUM_HOLDERS = 3;

		/**
		 * Options
		 */
		var _options = {
			allowPanToNext: true,
			spacing: 0.12,
			bgOpacity: 1,
			mouseUsed: false,
			loop: true,
			pinchToClose: true,
			closeOnScroll: true,
			closeOnVerticalDrag: true,
			verticalDragRange: 0.75,
			hideAnimationDuration: 333,
			showAnimationDuration: 333,
			showHideOpacity: false,
			focus: true,
			escKey: true,
			arrowKeys: true,
			mainScrollEndFriction: 0.35,
			panEndFriction: 0.35,
			isClickableElement: function(el) {
				return el.tagName === 'A';
			},
			getDoubleTapZoom: function(isMouseClick, item) {
				if (isMouseClick) {
					return 1;
				} else {
					return item.initialZoomLevel < 0.7 ? 1 : 1.33;
				}
			},
			maxSpreadZoom: 1.33,
			modal: true,

			// not fully implemented yet
			scaleMode: 'fit' // TODO
		};
		framework.extend(_options, options);


		/**
		 * Private helper variables & functions
		 */

		var _getEmptyPoint = function() {
			return {
				x: 0,
				y: 0
			};
		};

		var _isOpen,
			_isDestroying,
			_closedByScroll,
			_currentItemIndex,
			_containerStyle,
			_containerShiftIndex,
			_currPanDist = _getEmptyPoint(),
			_startPanOffset = _getEmptyPoint(),
			_panOffset = _getEmptyPoint(),
			_upMoveEvents, // drag move, drag end & drag cancel events array
			_downEvents, // drag start events array
			_globalEventHandlers,
			_viewportSize = {},
			_currZoomLevel,
			_startZoomLevel,
			_translatePrefix,
			_translateSufix,
			_updateSizeInterval,
			_itemsNeedUpdate,
			_currPositionIndex = 0,
			_offset = {},
			_slideSize = _getEmptyPoint(), // size of slide area, including spacing
			_itemHolders,
			_prevItemIndex,
			_indexDiff = 0, // difference of indexes since last content update
			_dragStartEvent,
			_dragMoveEvent,
			_dragEndEvent,
			_dragCancelEvent,
			_transformKey,
			_pointerEventEnabled,
			_isFixedPosition = true,
			_likelyTouchDevice,
			_modules = [],
			_requestAF,
			_cancelAF,
			_initalClassName,
			_initalWindowScrollY,
			_oldIE,
			_currentWindowScrollY,
			_features,
			_windowVisibleSize = {},
			_renderMaxResolution = false,
			_orientationChangeTimeout,


			// Registers PhotoSWipe module (History, Controller ...)
			_registerModule = function(name, module) {
				framework.extend(self, module.publicMethods);
				_modules.push(name);
			},

			_getLoopedId = function(index) {
				var numSlides = _getNumItems();
				if (index > numSlides - 1) {
					return index - numSlides;
				} else if (index < 0) {
					return numSlides + index;
				}
				return index;
			},

			// Micro bind/trigger
			_listeners = {},
			_listen = function(name, fn) {
				if (!_listeners[name]) {
					_listeners[name] = [];
				}
				return _listeners[name].push(fn);
			},
			_shout = function(name) {
				var listeners = _listeners[name];

				if (listeners) {
					var args = Array.prototype.slice.call(arguments);
					args.shift();

					for (var i = 0; i < listeners.length; i++) {
						listeners[i].apply(self, args);
					}
				}
			},

			_getCurrentTime = function() {
				return new Date().getTime();
			},
			_applyBgOpacity = function(opacity) {
				_bgOpacity = opacity;
				self.bg.style.opacity = opacity * _options.bgOpacity;
			},

			_applyZoomTransform = function(styleObj, x, y, zoom, item) {
				if (!_renderMaxResolution || (item && item !== self.currItem)) {
					zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
				}

				styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
			},
			_applyCurrentZoomPan = function(allowRenderResolution) {
				if (_currZoomElementStyle) {

					if (allowRenderResolution) {
						if (_currZoomLevel > self.currItem.fitRatio) {
							if (!_renderMaxResolution) {
								_setImageSize(self.currItem, false, true);
								_renderMaxResolution = true;
							}
						} else {
							if (_renderMaxResolution) {
								_setImageSize(self.currItem);
								_renderMaxResolution = false;
							}
						}
					}


					_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
				}
			},
			_applyZoomPanToItem = function(item) {
				if (item.container) {

					_applyZoomTransform(item.container.style,
						item.initialPosition.x,
						item.initialPosition.y,
						item.initialZoomLevel,
						item);
				}
			},
			_setTranslateX = function(x, elStyle) {
				elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
			},
			_moveMainScroll = function(x, dragging) {

				if (!_options.loop && dragging) {
					var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
						delta = Math.round(x - _mainScrollPos.x);

					if ((newSlideIndexOffset < 0 && delta > 0) ||
						(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0)) {
						x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
					}
				}

				_mainScrollPos.x = x;
				_setTranslateX(x, _containerStyle);
			},
			_calculatePanOffset = function(axis, zoomLevel) {
				var m = _midZoomPoint[axis] - _offset[axis];
				return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
			},

			_equalizePoints = function(p1, p2) {
				p1.x = p2.x;
				p1.y = p2.y;
				if (p2.id) {
					p1.id = p2.id;
				}
			},
			_roundPoint = function(p) {
				p.x = Math.round(p.x);
				p.y = Math.round(p.y);
			},

			_mouseMoveTimeout = null,
			_onFirstMouseMove = function() {
				// Wait until mouse move event is fired at least twice during 100ms
				// We do this, because some mobile browsers trigger it on touchstart
				if (_mouseMoveTimeout) {
					framework.unbind(document, 'mousemove', _onFirstMouseMove);
					framework.addClass(template, 'pswp--has_mouse');
					_options.mouseUsed = true;
					_shout('mouseUsed');
				}
				_mouseMoveTimeout = setTimeout(function() {
					_mouseMoveTimeout = null;
				}, 100);
			},

			_bindEvents = function() {
				framework.bind(document, 'keydown', self);

				if (_features.transform) {
					// don't bind click event in browsers that don't support transform (mostly IE8)
					framework.bind(self.scrollWrap, 'click', self);
				}


				if (!_options.mouseUsed) {
					framework.bind(document, 'mousemove', _onFirstMouseMove);
				}

				framework.bind(window, 'resize scroll orientationchange', self);

				_shout('bindEvents');
			},

			_unbindEvents = function() {
				framework.unbind(window, 'resize scroll orientationchange', self);
				framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
				framework.unbind(document, 'keydown', self);
				framework.unbind(document, 'mousemove', _onFirstMouseMove);

				if (_features.transform) {
					framework.unbind(self.scrollWrap, 'click', self);
				}

				if (_isDragging) {
					framework.unbind(window, _upMoveEvents, self);
				}

				clearTimeout(_orientationChangeTimeout);

				_shout('unbindEvents');
			},

			_calculatePanBounds = function(zoomLevel, update) {
				var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
				if (update) {
					_currPanBounds = bounds;
				}
				return bounds;
			},

			_getMinZoomLevel = function(item) {
				if (!item) {
					item = self.currItem;
				}
				return item.initialZoomLevel;
			},
			_getMaxZoomLevel = function(item) {
				if (!item) {
					item = self.currItem;
				}
				return item.w > 0 ? _options.maxSpreadZoom : 1;
			},

			// Return true if offset is out of the bounds
			_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
				if (destZoomLevel === self.currItem.initialZoomLevel) {
					destPanOffset[axis] = self.currItem.initialPosition[axis];
					return true;
				} else {
					destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

					if (destPanOffset[axis] > destPanBounds.min[axis]) {
						destPanOffset[axis] = destPanBounds.min[axis];
						return true;
					} else if (destPanOffset[axis] < destPanBounds.max[axis]) {
						destPanOffset[axis] = destPanBounds.max[axis];
						return true;
					}
				}
				return false;
			},

			_setupTransforms = function() {

				if (_transformKey) {
					// setup 3d transforms
					var allow3dTransform = _features.perspective && !_likelyTouchDevice;
					_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
					_translateSufix = _features.perspective ? ', 0px)' : ')';
					return;
				}

				// Override zoom/pan/move functions in case old browser is used (most likely IE)
				// (so they use left/top/width/height, instead of CSS transform)

				_transformKey = 'left';
				framework.addClass(template, 'pswp--ie');

				_setTranslateX = function(x, elStyle) {
					elStyle.left = x + 'px';
				};
				_applyZoomPanToItem = function(item) {

					var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
						s = item.container.style,
						w = zoomRatio * item.w,
						h = zoomRatio * item.h;

					s.width = w + 'px';
					s.height = h + 'px';
					s.left = item.initialPosition.x + 'px';
					s.top = item.initialPosition.y + 'px';

				};
				_applyCurrentZoomPan = function() {
					if (_currZoomElementStyle) {

						var s = _currZoomElementStyle,
							item = self.currItem,
							zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
							w = zoomRatio * item.w,
							h = zoomRatio * item.h;

						s.width = w + 'px';
						s.height = h + 'px';


						s.left = _panOffset.x + 'px';
						s.top = _panOffset.y + 'px';
					}

				};
			},

			_onKeyDown = function(e) {
				var keydownAction = '';
				if (_options.escKey && e.keyCode === 27) {
					keydownAction = 'close';
				} else if (_options.arrowKeys) {
					if (e.keyCode === 37) {
						keydownAction = 'prev';
					} else if (e.keyCode === 39) {
						keydownAction = 'next';
					}
				}

				if (keydownAction) {
					// don't do anything if special key pressed to prevent from overriding default browser actions
					// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
						if (e.preventDefault) {
							e.preventDefault();
						} else {
							e.returnValue = false;
						}
						self[keydownAction]();
					}
				}
			},

			_onGlobalClick = function(e) {
				if (!e) {
					return;
				}

				// don't allow click event to pass through when triggering after drag or some other gesture
				if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
					e.preventDefault();
					e.stopPropagation();
				}
			},

			_updatePageScrollOffset = function() {
				self.setScrollOffset(0, framework.getScrollY());
			};







		// Micro animation engine
		var _animations = {},
			_numAnimations = 0,
			_stopAnimation = function(name) {
				if (_animations[name]) {
					if (_animations[name].raf) {
						_cancelAF(_animations[name].raf);
					}
					_numAnimations--;
					delete _animations[name];
				}
			},
			_registerStartAnimation = function(name) {
				if (_animations[name]) {
					_stopAnimation(name);
				}
				if (!_animations[name]) {
					_numAnimations++;
					_animations[name] = {};
				}
			},
			_stopAllAnimations = function() {
				for (var prop in _animations) {

					if (_animations.hasOwnProperty(prop)) {
						_stopAnimation(prop);
					}

				}
			},
			_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
				var startAnimTime = _getCurrentTime(),
					t;
				_registerStartAnimation(name);

				var animloop = function() {
					if (_animations[name]) {

						t = _getCurrentTime() - startAnimTime; // time diff
						//b - beginning (start prop)
						//d - anim duration

						if (t >= d) {
							_stopAnimation(name);
							onUpdate(endProp);
							if (onComplete) {
								onComplete();
							}
							return;
						}
						onUpdate((endProp - b) * easingFn(t / d) + b);

						_animations[name].raf = _requestAF(animloop);
					}
				};
				animloop();
			};



		var publicMethods = {

			// make a few local variables and functions public
			shout: _shout,
			listen: _listen,
			viewportSize: _viewportSize,
			options: _options,

			isMainScrollAnimating: function() {
				return _mainScrollAnimating;
			},
			getZoomLevel: function() {
				return _currZoomLevel;
			},
			getCurrentIndex: function() {
				return _currentItemIndex;
			},
			isDragging: function() {
				return _isDragging;
			},
			isZooming: function() {
				return _isZooming;
			},
			setScrollOffset: function(x, y) {
				_offset.x = x;
				_currentWindowScrollY = _offset.y = y;
				_shout('updateScrollOffset', _offset);
			},
			applyZoomPan: function(zoomLevel, panX, panY, allowRenderResolution) {
				_panOffset.x = panX;
				_panOffset.y = panY;
				_currZoomLevel = zoomLevel;
				_applyCurrentZoomPan(allowRenderResolution);
			},

			init: function() {

				if (_isOpen || _isDestroying) {
					return;
				}

				var i;

				self.framework = framework; // basic functionality
				self.template = template; // root DOM element of PhotoSwipe
				self.bg = framework.getChildByClass(template, 'pswp__bg');

				_initalClassName = template.className;
				_isOpen = true;

				_features = framework.detectFeatures();
				_requestAF = _features.raf;
				_cancelAF = _features.caf;
				_transformKey = _features.transform;
				_oldIE = _features.oldIE;

				self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
				self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

				_containerStyle = self.container.style; // for fast access

				// Objects that hold slides (there are only 3 in DOM)
				self.itemHolders = _itemHolders = [{
						el: self.container.children[0],
						wrap: 0,
						index: -1
					},
					{
						el: self.container.children[1],
						wrap: 0,
						index: -1
					},
					{
						el: self.container.children[2],
						wrap: 0,
						index: -1
					}
				];

				// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
				_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

				_setupTransforms();

				// Setup global events
				_globalEventHandlers = {
					resize: self.updateSize,

					// Fixes: iOS 10.3 resize event
					// does not update scrollWrap.clientWidth instantly after resize
					// https://github.com/dimsemenov/PhotoSwipe/issues/1315
					orientationchange: function() {
						clearTimeout(_orientationChangeTimeout);
						_orientationChangeTimeout = setTimeout(function() {
							if (_viewportSize.x !== self.scrollWrap.clientWidth) {
								self.updateSize();
							}
						}, 500);
					},
					scroll: _updatePageScrollOffset,
					keydown: _onKeyDown,
					click: _onGlobalClick
				};

				// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
				// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
				var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
				if (!_features.animationName || !_features.transform || oldPhone) {
					_options.showAnimationDuration = _options.hideAnimationDuration = 0;
				}

				// init modules
				for (i = 0; i < _modules.length; i++) {
					self['init' + _modules[i]]();
				}

				// init
				if (UiClass) {
					var ui = self.ui = new UiClass(self, framework);
					ui.init();
				}

				_shout('firstUpdate');
				_currentItemIndex = _currentItemIndex || _options.index || 0;
				// validate index
				if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
					_currentItemIndex = 0;
				}
				self.currItem = _getItemAt(_currentItemIndex);


				if (_features.isOldIOSPhone || _features.isOldAndroid) {
					_isFixedPosition = false;
				}

				template.setAttribute('aria-hidden', 'false');
				if (_options.modal) {
					if (!_isFixedPosition) {
						template.style.position = 'absolute';
						template.style.top = framework.getScrollY() + 'px';
					} else {
						template.style.position = 'fixed';
					}
				}

				if (_currentWindowScrollY === undefined) {
					_shout('initialLayout');
					_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
				}

				// add classes to root element of PhotoSwipe
				var rootClasses = 'pswp--open ';
				if (_options.mainClass) {
					rootClasses += _options.mainClass + ' ';
				}
				if (_options.showHideOpacity) {
					rootClasses += 'pswp--animate_opacity ';
				}
				rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
				rootClasses += _features.animationName ? ' pswp--css_animation' : '';
				rootClasses += _features.svg ? ' pswp--svg' : '';
				framework.addClass(template, rootClasses);

				self.updateSize();

				// initial update
				_containerShiftIndex = -1;
				_indexDiff = null;
				for (i = 0; i < NUM_HOLDERS; i++) {
					_setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
				}

				if (!_oldIE) {
					framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
				}

				_listen('initialZoomInEnd', function() {
					self.setContent(_itemHolders[0], _currentItemIndex - 1);
					self.setContent(_itemHolders[2], _currentItemIndex + 1);

					_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

					if (_options.focus) {
						// focus causes layout, 
						// which causes lag during the animation, 
						// that's why we delay it untill the initial zoom transition ends
						template.focus();
					}


					_bindEvents();
				});

				// set content for center slide (first time)
				self.setContent(_itemHolders[1], _currentItemIndex);

				self.updateCurrItem();

				_shout('afterInit');

				if (!_isFixedPosition) {

					// On all versions of iOS lower than 8.0, we check size of viewport every second.
					// 
					// This is done to detect when Safari top & bottom bars appear, 
					// as this action doesn't trigger any events (like resize). 
					// 
					// On iOS8 they fixed this.
					// 
					// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

					_updateSizeInterval = setInterval(function() {
						if (!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)) {
							self.updateSize();
						}
					}, 1000);
				}

				framework.addClass(template, 'pswp--visible');
			},

			// Close the gallery, then destroy it
			close: function() {
				if (!_isOpen) {
					return;
				}

				_isOpen = false;
				_isDestroying = true;
				_shout('close');
				_unbindEvents();

				_showOrHide(self.currItem, null, true, self.destroy);
			},

			// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
			destroy: function() {
				_shout('destroy');

				if (_showOrHideTimeout) {
					clearTimeout(_showOrHideTimeout);
				}

				template.setAttribute('aria-hidden', 'true');
				template.className = _initalClassName;

				if (_updateSizeInterval) {
					clearInterval(_updateSizeInterval);
				}

				framework.unbind(self.scrollWrap, _downEvents, self);

				// we unbind scroll event at the end, as closing animation may depend on it
				framework.unbind(window, 'scroll', self);

				_stopDragUpdateLoop();

				_stopAllAnimations();

				_listeners = null;
			},

			/**
			 * Pan image to position
			 * @param {Number} x     
			 * @param {Number} y     
			 * @param {Boolean} force Will ignore bounds if set to true.
			 */
			panTo: function(x, y, force) {
				if (!force) {
					if (x > _currPanBounds.min.x) {
						x = _currPanBounds.min.x;
					} else if (x < _currPanBounds.max.x) {
						x = _currPanBounds.max.x;
					}

					if (y > _currPanBounds.min.y) {
						y = _currPanBounds.min.y;
					} else if (y < _currPanBounds.max.y) {
						y = _currPanBounds.max.y;
					}
				}

				_panOffset.x = x;
				_panOffset.y = y;
				_applyCurrentZoomPan();
			},

			handleEvent: function(e) {
				e = e || window.event;
				if (_globalEventHandlers[e.type]) {
					_globalEventHandlers[e.type](e);
				}
			},

			goTo: function(index) {
				var itemsDiff;

				if (index == _currentItemIndex + 1) { //Next
					itemsDiff = 1;
				} else { //Prev
					itemsDiff = -1;
				}

				var itemChanged;
				if (!_mainScrollAnimating) {
					_currZoomedItemIndex = _currentItemIndex;
				}

				var nextCircle;

				_currentItemIndex += itemsDiff;

				if (_currentItemIndex < 0) {
					_currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
					nextCircle = true;
				} else if (_currentItemIndex >= _getNumItems()) {
					_currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
					nextCircle = true;
				}

				if (!nextCircle || _options.loop) {
					_indexDiff += itemsDiff;
					_currPositionIndex -= itemsDiff;
					itemChanged = true;
				}

				var animateToX = _slideSize.x * _currPositionIndex;
				var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
				var finishAnimDuration = 333;

				if (_currZoomedItemIndex === _currentItemIndex) {
					itemChanged = false;
				}

				_mainScrollAnimating = true;

				_shout('mainScrollAnimStart');

				_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
					_moveMainScroll,
					function() {
						_stopAllAnimations();
						_mainScrollAnimating = false;
						_currZoomedItemIndex = -1;

						if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
							self.updateCurrItem();
						}

						_shout('mainScrollAnimComplete');
					}
				);

				if (itemChanged) {
					self.updateCurrItem(true);
				}

				return itemChanged;

			},
			// goTo: function(index) {

			// 	index = _getLoopedId(index);

			// 	var diff = index - _currentItemIndex;
			// 	_indexDiff = diff;

			// 	_currentItemIndex = index;
			// 	self.currItem = _getItemAt( _currentItemIndex );
			// 	_currPositionIndex -= diff;

			// 	_moveMainScroll(_slideSize.x * _currPositionIndex);


			// 	_stopAllAnimations();
			// 	_mainScrollAnimating = false;

			// 	self.updateCurrItem();
			// },
			next: function() {
				self.goTo(_currentItemIndex + 1);
			},
			prev: function() {
				self.goTo(_currentItemIndex - 1);
			},

			// update current zoom/pan objects
			updateCurrZoomItem: function(emulateSetContent) {
				if (emulateSetContent) {
					_shout('beforeChange', 0);
				}

				// itemHolder[1] is middle (current) item
				if (_itemHolders[1].el.children.length) {
					var zoomElement = _itemHolders[1].el.children[0];
					if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
						_currZoomElementStyle = zoomElement.style;
					} else {
						_currZoomElementStyle = null;
					}
				} else {
					_currZoomElementStyle = null;
				}

				_currPanBounds = self.currItem.bounds;
				_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

				_panOffset.x = _currPanBounds.center.x;
				_panOffset.y = _currPanBounds.center.y;

				if (emulateSetContent) {
					_shout('afterChange');
				}
			},


			invalidateCurrItems: function() {
				_itemsNeedUpdate = true;
				for (var i = 0; i < NUM_HOLDERS; i++) {
					if (_itemHolders[i].item) {
						_itemHolders[i].item.needsUpdate = true;
					}
				}
			},

			updateCurrItem: function(beforeAnimation) {

				if (_indexDiff === 0) {
					return;
				}

				var diffAbs = Math.abs(_indexDiff),
					tempHolder;

				if (beforeAnimation && diffAbs < 2) {
					return;
				}


				self.currItem = _getItemAt(_currentItemIndex);
				_renderMaxResolution = false;

				_shout('beforeChange', _indexDiff);

				if (diffAbs >= NUM_HOLDERS) {
					_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
					diffAbs = NUM_HOLDERS;
				}
				for (var i = 0; i < diffAbs; i++) {
					if (_indexDiff > 0) {
						tempHolder = _itemHolders.shift();
						_itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

						_containerShiftIndex++;
						_setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
						self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
					} else {
						tempHolder = _itemHolders.pop();
						_itemHolders.unshift(tempHolder); // move last to first

						_containerShiftIndex--;
						_setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
						self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
					}

				}

				// reset zoom/pan on previous item
				if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

					var prevItem = _getItemAt(_prevItemIndex);
					if (prevItem.initialZoomLevel !== _currZoomLevel) {
						_calculateItemSize(prevItem, _viewportSize);
						_setImageSize(prevItem);
						_applyZoomPanToItem(prevItem);
					}

				}

				// reset diff after update
				_indexDiff = 0;

				self.updateCurrZoomItem();

				_prevItemIndex = _currentItemIndex;

				_shout('afterChange');

			},



			updateSize: function(force) {

				if (!_isFixedPosition && _options.modal) {
					var windowScrollY = framework.getScrollY();
					if (_currentWindowScrollY !== windowScrollY) {
						template.style.top = windowScrollY + 'px';
						_currentWindowScrollY = windowScrollY;
					}
					if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
						return;
					}
					_windowVisibleSize.x = window.innerWidth;
					_windowVisibleSize.y = window.innerHeight;

					//template.style.width = _windowVisibleSize.x + 'px';
					template.style.height = _windowVisibleSize.y + 'px';
				}



				_viewportSize.x = self.scrollWrap.clientWidth;
				_viewportSize.y = self.scrollWrap.clientHeight;

				_updatePageScrollOffset();

				_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
				_slideSize.y = _viewportSize.y;

				_moveMainScroll(_slideSize.x * _currPositionIndex);

				_shout('beforeResize'); // even may be used for example to switch image sources


				// don't re-calculate size on inital size update
				if (_containerShiftIndex !== undefined) {

					var holder,
						item,
						hIndex;

					for (var i = 0; i < NUM_HOLDERS; i++) {
						holder = _itemHolders[i];
						_setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

						hIndex = _currentItemIndex + i - 1;

						if (_options.loop && _getNumItems() > 2) {
							hIndex = _getLoopedId(hIndex);
						}

						// update zoom level on items and refresh source (if needsUpdate)
						item = _getItemAt(hIndex);

						// re-render gallery item if `needsUpdate`,
						// or doesn't have `bounds` (entirely new slide object)
						if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {

							self.cleanSlide(item);

							self.setContent(holder, hIndex);

							// if "center" slide
							if (i === 1) {
								self.currItem = item;
								self.updateCurrZoomItem(true);
							}

							item.needsUpdate = false;

						} else if (holder.index === -1 && hIndex >= 0) {
							// add content first time
							self.setContent(holder, hIndex);
						}
						if (item && item.container) {
							_calculateItemSize(item, _viewportSize);
							_setImageSize(item);
							_applyZoomPanToItem(item);
						}

					}
					_itemsNeedUpdate = false;
				}

				_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
				_currPanBounds = self.currItem.bounds;

				if (_currPanBounds) {
					_panOffset.x = _currPanBounds.center.x;
					_panOffset.y = _currPanBounds.center.y;
					_applyCurrentZoomPan(true);
				}

				_shout('resize');
			},

			// Zoom current item to
			zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
				/*
					if(destZoomLevel === 'fit') {
						destZoomLevel = self.currItem.fitRatio;
					} else if(destZoomLevel === 'fill') {
						destZoomLevel = self.currItem.fillRatio;
					}
				*/

				if (centerPoint) {
					_startZoomLevel = _currZoomLevel;
					_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
					_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
					_equalizePoints(_startPanOffset, _panOffset);
				}

				var destPanBounds = _calculatePanBounds(destZoomLevel, false),
					destPanOffset = {};

				_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
				_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

				var initialZoomLevel = _currZoomLevel;
				var initialPanOffset = {
					x: _panOffset.x,
					y: _panOffset.y
				};

				_roundPoint(destPanOffset);

				var onUpdate = function(now) {
					if (now === 1) {
						_currZoomLevel = destZoomLevel;
						_panOffset.x = destPanOffset.x;
						_panOffset.y = destPanOffset.y;
					} else {
						_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
						_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
						_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
					}

					if (updateFn) {
						updateFn(now);
					}

					_applyCurrentZoomPan(now === 1);
				};

				if (speed) {
					_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
				} else {
					onUpdate(1);
				}
			}


		};


		/*>>core*/

		/*>>gestures*/
		/**
		 * Mouse/touch/pointer event handlers.
		 * 
		 * separated from @core.js for readability
		 */

		var MIN_SWIPE_DISTANCE = 30,
			DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

		var _gestureStartTime,
			_gestureCheckSpeedTime,

			// pool of objects that are used during dragging of zooming
			p = {}, // first point
			p2 = {}, // second point (for zoom gesture)
			delta = {},
			_currPoint = {},
			_startPoint = {},
			_currPointers = [],
			_startMainScrollPos = {},
			_releaseAnimData,
			_posPoints = [], // array of points during dragging, used to determine type of gesture
			_tempPoint = {},

			_isZoomingIn,
			_verticalDragInitiated,
			_oldAndroidTouchEndTimeout,
			_currZoomedItemIndex = 0,
			_centerPoint = _getEmptyPoint(),
			_lastReleaseTime = 0,
			_isDragging, // at least one pointer is down
			_isMultitouch, // at least two _pointers are down
			_zoomStarted, // zoom level changed during zoom gesture
			_moved,
			_dragAnimFrame,
			_mainScrollShifted,
			_currentPoints, // array of current touch points
			_isZooming,
			_currPointsDistance,
			_startPointsDistance,
			_currPanBounds,
			_mainScrollPos = _getEmptyPoint(),
			_currZoomElementStyle,
			_mainScrollAnimating, // true, if animation after swipe gesture is running
			_midZoomPoint = _getEmptyPoint(),
			_currCenterPoint = _getEmptyPoint(),
			_direction,
			_isFirstMove,
			_opacityChanged,
			_bgOpacity,
			_wasOverInitialZoom,

			_isEqualPoints = function(p1, p2) {
				return p1.x === p2.x && p1.y === p2.y;
			},
			_isNearbyPoints = function(touch0, touch1) {
				return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
			},
			_calculatePointsDistance = function(p1, p2) {
				_tempPoint.x = Math.abs(p1.x - p2.x);
				_tempPoint.y = Math.abs(p1.y - p2.y);
				return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
			},
			_stopDragUpdateLoop = function() {
				if (_dragAnimFrame) {
					_cancelAF(_dragAnimFrame);
					_dragAnimFrame = null;
				}
			},
			_dragUpdateLoop = function() {
				if (_isDragging) {
					_dragAnimFrame = _requestAF(_dragUpdateLoop);
					_renderMovement();
				}
			},
			_canPan = function() {
				return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
			},

			// find the closest parent DOM element
			_closestElement = function(el, fn) {
				if (!el || el === document) {
					return false;
				}

				// don't search elements above pswp__scroll-wrap
				if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
					return false;
				}

				if (fn(el)) {
					return el;
				}

				return _closestElement(el.parentNode, fn);
			},

			_preventObj = {},
			_preventDefaultEventBehaviour = function(e, isDown) {
				_preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

				_shout('preventDragEvent', e, isDown, _preventObj);
				return _preventObj.prevent;

			},
			_convertTouchToPoint = function(touch, p) {
				p.x = touch.pageX;
				p.y = touch.pageY;
				p.id = touch.identifier;
				return p;
			},
			_findCenterOfPoints = function(p1, p2, pCenter) {
				pCenter.x = (p1.x + p2.x) * 0.5;
				pCenter.y = (p1.y + p2.y) * 0.5;
			},
			_pushPosPoint = function(time, x, y) {
				if (time - _gestureCheckSpeedTime > 50) {
					var o = _posPoints.length > 2 ? _posPoints.shift() : {};
					o.x = x;
					o.y = y;
					_posPoints.push(o);
					_gestureCheckSpeedTime = time;
				}
			},

			_calculateVerticalDragOpacityRatio = function() {
				var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
				return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
			},


			// points pool, reused during touch events
			_ePoint1 = {},
			_ePoint2 = {},
			_tempPointsArr = [],
			_tempCounter,
			_getTouchPoints = function(e) {
				// clean up previous points, without recreating array
				while (_tempPointsArr.length > 0) {
					_tempPointsArr.pop();
				}

				if (!_pointerEventEnabled) {
					if (e.type.indexOf('touch') > -1) {

						if (e.touches && e.touches.length > 0) {
							_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
							if (e.touches.length > 1) {
								_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
							}
						}

					} else {
						_ePoint1.x = e.pageX;
						_ePoint1.y = e.pageY;
						_ePoint1.id = '';
						_tempPointsArr[0] = _ePoint1; //_ePoint1;
					}
				} else {
					_tempCounter = 0;
					// we can use forEach, as pointer events are supported only in modern browsers
					_currPointers.forEach(function(p) {
						if (_tempCounter === 0) {
							_tempPointsArr[0] = p;
						} else if (_tempCounter === 1) {
							_tempPointsArr[1] = p;
						}
						_tempCounter++;

					});
				}
				return _tempPointsArr;
			},

			_panOrMoveMainScroll = function(axis, delta) {

				var panFriction,
					overDiff = 0,
					newOffset = _panOffset[axis] + delta[axis],
					startOverDiff,
					dir = delta[axis] > 0,
					newMainScrollPosition = _mainScrollPos.x + delta.x,
					mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
					newPanPos,
					newMainScrollPos;

				// calculate fdistance over the bounds and friction
				if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
					panFriction = _options.panEndFriction;
					// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
					// Looks not as nice as was expected. Left for history.
					// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
				} else {
					panFriction = 1;
				}

				newOffset = _panOffset[axis] + delta[axis] * panFriction;

				// move main scroll or start panning
				if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


					if (!_currZoomElementStyle) {

						newMainScrollPos = newMainScrollPosition;

					} else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {

						if (dir) {
							if (newOffset > _currPanBounds.min[axis]) {
								panFriction = _options.panEndFriction;
								overDiff = _currPanBounds.min[axis] - newOffset;
								startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
							}

							// drag right
							if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
								newMainScrollPos = newMainScrollPosition;
								if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
									newMainScrollPos = _startMainScrollPos.x;
								}
							} else {
								if (_currPanBounds.min.x !== _currPanBounds.max.x) {
									newPanPos = newOffset;
								}

							}

						} else {

							if (newOffset < _currPanBounds.max[axis]) {
								panFriction = _options.panEndFriction;
								overDiff = newOffset - _currPanBounds.max[axis];
								startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
							}

							if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
								newMainScrollPos = newMainScrollPosition;

								if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
									newMainScrollPos = _startMainScrollPos.x;
								}

							} else {
								if (_currPanBounds.min.x !== _currPanBounds.max.x) {
									newPanPos = newOffset;
								}
							}

						}


						//
					}

					if (axis === 'x') {

						if (newMainScrollPos !== undefined) {
							_moveMainScroll(newMainScrollPos, true);
							if (newMainScrollPos === _startMainScrollPos.x) {
								_mainScrollShifted = false;
							} else {
								_mainScrollShifted = true;
							}
						}

						if (_currPanBounds.min.x !== _currPanBounds.max.x) {
							if (newPanPos !== undefined) {
								_panOffset.x = newPanPos;
							} else if (!_mainScrollShifted) {
								_panOffset.x += delta.x * panFriction;
							}
						}

						return newMainScrollPos !== undefined;
					}

				}

				if (!_mainScrollAnimating) {

					if (!_mainScrollShifted) {
						if (_currZoomLevel > self.currItem.fitRatio) {
							_panOffset[axis] += delta[axis] * panFriction;

						}
					}


				}

			},

			// Pointerdown/touchstart/mousedown handler
			_onDragStart = function(e) {

				// Allow dragging only via left mouse button.
				// As this handler is not added in IE8 - we ignore e.which
				// 
				// http://www.quirksmode.org/js/events_properties.html
				// https://developer.mozilla.org/en-US/docs/Web/API/event.button
				if (e.type === 'mousedown' && e.button > 0) {
					return;
				}

				if (_initialZoomRunning) {
					e.preventDefault();
					return;
				}

				if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
					return;
				}

				if (_preventDefaultEventBehaviour(e, true)) {
					e.preventDefault();
				}



				_shout('pointerDown');

				if (_pointerEventEnabled) {
					var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
					if (pointerIndex < 0) {
						pointerIndex = _currPointers.length;
					}
					_currPointers[pointerIndex] = {
						x: e.pageX,
						y: e.pageY,
						id: e.pointerId
					};
				}



				var startPointsList = _getTouchPoints(e),
					numPoints = startPointsList.length;

				_currentPoints = null;

				_stopAllAnimations();

				// init drag
				if (!_isDragging || numPoints === 1) {



					_isDragging = _isFirstMove = true;
					framework.bind(window, _upMoveEvents, self);

					_isZoomingIn =
						_wasOverInitialZoom =
						_opacityChanged =
						_verticalDragInitiated =
						_mainScrollShifted =
						_moved =
						_isMultitouch =
						_zoomStarted = false;

					_direction = null;

					_shout('firstTouchStart', startPointsList);

					_equalizePoints(_startPanOffset, _panOffset);

					_currPanDist.x = _currPanDist.y = 0;
					_equalizePoints(_currPoint, startPointsList[0]);
					_equalizePoints(_startPoint, _currPoint);

					//_equalizePoints(_startMainScrollPos, _mainScrollPos);
					_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

					_posPoints = [{
						x: _currPoint.x,
						y: _currPoint.y
					}];

					_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

					//_mainScrollAnimationEnd(true);
					_calculatePanBounds(_currZoomLevel, true);

					// Start rendering
					_stopDragUpdateLoop();
					_dragUpdateLoop();

				}

				// init zoom
				if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
					_startZoomLevel = _currZoomLevel;
					_zoomStarted = false; // true if zoom changed at least once

					_isZooming = _isMultitouch = true;
					_currPanDist.y = _currPanDist.x = 0;

					_equalizePoints(_startPanOffset, _panOffset);

					_equalizePoints(p, startPointsList[0]);
					_equalizePoints(p2, startPointsList[1]);

					_findCenterOfPoints(p, p2, _currCenterPoint);

					_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
					_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
					_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
				}


			},

			// Pointermove/touchmove/mousemove handler
			_onDragMove = function(e) {

				e.preventDefault();

				if (_pointerEventEnabled) {
					var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
					if (pointerIndex > -1) {
						var p = _currPointers[pointerIndex];
						p.x = e.pageX;
						p.y = e.pageY;
					}
				}

				if (_isDragging) {
					var touchesList = _getTouchPoints(e);
					if (!_direction && !_moved && !_isZooming) {

						if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
							// if main scroll position is shifted – direction is always horizontal
							_direction = 'h';
						} else {
							var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
							// check the direction of movement
							if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
								_direction = diff > 0 ? 'h' : 'v';
								_currentPoints = touchesList;
							}
						}

					} else {
						_currentPoints = touchesList;
					}
				}
			},
			// 
			_renderMovement = function() {

				if (!_currentPoints) {
					return;
				}

				var numPoints = _currentPoints.length;

				if (numPoints === 0) {
					return;
				}

				_equalizePoints(p, _currentPoints[0]);

				delta.x = p.x - _currPoint.x;
				delta.y = p.y - _currPoint.y;

				if (_isZooming && numPoints > 1) {
					// Handle behaviour for more than 1 point

					_currPoint.x = p.x;
					_currPoint.y = p.y;

					// check if one of two points changed
					if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
						return;
					}

					_equalizePoints(p2, _currentPoints[1]);


					if (!_zoomStarted) {
						_zoomStarted = true;
						_shout('zoomGestureStarted');
					}

					// Distance between two points
					var pointsDistance = _calculatePointsDistance(p, p2);

					var zoomLevel = _calculateZoomLevel(pointsDistance);

					// slightly over the of initial zoom level
					if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
						_wasOverInitialZoom = true;
					}

					// Apply the friction if zoom level is out of the bounds
					var zoomFriction = 1,
						minZoomLevel = _getMinZoomLevel(),
						maxZoomLevel = _getMaxZoomLevel();

					if (zoomLevel < minZoomLevel) {

						if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
							// fade out background if zooming out
							var minusDiff = minZoomLevel - zoomLevel;
							var percent = 1 - minusDiff / (minZoomLevel / 1.2);

							_applyBgOpacity(percent);
							_shout('onPinchClose', percent);
							_opacityChanged = true;
						} else {
							zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
							if (zoomFriction > 1) {
								zoomFriction = 1;
							}
							zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
						}

					} else if (zoomLevel > maxZoomLevel) {
						// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
						zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
						if (zoomFriction > 1) {
							zoomFriction = 1;
						}
						zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
					}

					if (zoomFriction < 0) {
						zoomFriction = 0;
					}

					// distance between touch points after friction is applied
					_currPointsDistance = pointsDistance;

					// _centerPoint - The point in the middle of two pointers
					_findCenterOfPoints(p, p2, _centerPoint);

					// paning with two pointers pressed
					_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
					_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
					_equalizePoints(_currCenterPoint, _centerPoint);

					_panOffset.x = _calculatePanOffset('x', zoomLevel);
					_panOffset.y = _calculatePanOffset('y', zoomLevel);

					_isZoomingIn = zoomLevel > _currZoomLevel;
					_currZoomLevel = zoomLevel;
					_applyCurrentZoomPan();

				} else {

					// handle behaviour for one point (dragging or panning)

					if (!_direction) {
						return;
					}

					if (_isFirstMove) {
						_isFirstMove = false;

						// subtract drag distance that was used during the detection direction  

						if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
							delta.x -= _currentPoints[0].x - _startPoint.x;
						}

						if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
							delta.y -= _currentPoints[0].y - _startPoint.y;
						}
					}

					_currPoint.x = p.x;
					_currPoint.y = p.y;

					// do nothing if pointers position hasn't changed
					if (delta.x === 0 && delta.y === 0) {
						return;
					}

					if (_direction === 'v' && _options.closeOnVerticalDrag) {
						if (!_canPan()) {
							_currPanDist.y += delta.y;
							_panOffset.y += delta.y;

							var opacityRatio = _calculateVerticalDragOpacityRatio();

							_verticalDragInitiated = true;
							_shout('onVerticalDrag', opacityRatio);

							_applyBgOpacity(opacityRatio);
							_applyCurrentZoomPan();
							return;
						}
					}

					_pushPosPoint(_getCurrentTime(), p.x, p.y);

					_moved = true;
					_currPanBounds = self.currItem.bounds;

					var mainScrollChanged = _panOrMoveMainScroll('x', delta);
					if (!mainScrollChanged) {
						_panOrMoveMainScroll('y', delta);

						_roundPoint(_panOffset);
						_applyCurrentZoomPan();
					}

				}

			},

			// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
			_onDragRelease = function(e) {

				if (_features.isOldAndroid) {

					if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
						return;
					}

					// on Android (v4.1, 4.2, 4.3 & possibly older) 
					// ghost mousedown/up event isn't preventable via e.preventDefault,
					// which causes fake mousedown event
					// so we block mousedown/up for 600ms
					if (e.type.indexOf('touch') > -1) {
						clearTimeout(_oldAndroidTouchEndTimeout);
						_oldAndroidTouchEndTimeout = setTimeout(function() {
							_oldAndroidTouchEndTimeout = 0;
						}, 600);
					}

				}

				_shout('pointerUp');

				if (_preventDefaultEventBehaviour(e, false)) {
					e.preventDefault();
				}

				var releasePoint;

				if (_pointerEventEnabled) {
					var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

					if (pointerIndex > -1) {
						releasePoint = _currPointers.splice(pointerIndex, 1)[0];

						if (navigator.msPointerEnabled) {
							var MSPOINTER_TYPES = {
								4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
								2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
								3: 'pen' // event.MSPOINTER_TYPE_PEN
							};
							releasePoint.type = MSPOINTER_TYPES[e.pointerType];

							if (!releasePoint.type) {
								releasePoint.type = e.pointerType || 'mouse';
							}
						} else {
							releasePoint.type = e.pointerType || 'mouse';
						}

					}
				}

				var touchList = _getTouchPoints(e),
					gestureType,
					numPoints = touchList.length;

				if (e.type === 'mouseup') {
					numPoints = 0;
				}

				// Do nothing if there were 3 touch points or more
				if (numPoints === 2) {
					_currentPoints = null;
					return true;
				}

				// if second pointer released
				if (numPoints === 1) {
					_equalizePoints(_startPoint, touchList[0]);
				}


				// pointer hasn't moved, send "tap release" point
				if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
					if (!releasePoint) {
						if (e.type === 'mouseup') {
							releasePoint = {
								x: e.pageX,
								y: e.pageY,
								type: 'mouse'
							};
						} else if (e.changedTouches && e.changedTouches[0]) {
							releasePoint = {
								x: e.changedTouches[0].pageX,
								y: e.changedTouches[0].pageY,
								type: 'touch'
							};
						}
					}

					_shout('touchRelease', e, releasePoint);
				}

				// Difference in time between releasing of two last touch points (zoom gesture)
				var releaseTimeDiff = -1;

				// Gesture completed, no pointers left
				if (numPoints === 0) {
					_isDragging = false;
					framework.unbind(window, _upMoveEvents, self);

					_stopDragUpdateLoop();

					if (_isZooming) {
						// Two points released at the same time
						releaseTimeDiff = 0;
					} else if (_lastReleaseTime !== -1) {
						releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
					}
				}
				_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

				if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
					gestureType = 'zoom';
				} else {
					gestureType = 'swipe';
				}

				if (_isZooming && numPoints < 2) {
					_isZooming = false;

					// Only second point released
					if (numPoints === 1) {
						gestureType = 'zoomPointerUp';
					}
					_shout('zoomGestureEnded');
				}

				_currentPoints = null;
				if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
					// nothing to animate
					return;
				}

				_stopAllAnimations();


				if (!_releaseAnimData) {
					_releaseAnimData = _initDragReleaseAnimationData();
				}

				_releaseAnimData.calculateSwipeSpeed('x');


				if (_verticalDragInitiated) {

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					if (opacityRatio < _options.verticalDragRange) {
						self.close();
					} else {
						var initalPanY = _panOffset.y,
							initialBgOpacity = _bgOpacity;

						_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {

							_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

							_applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
							_applyCurrentZoomPan();
						});

						_shout('onVerticalDrag', 1);
					}

					return;
				}


				// main scroll 
				if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
					var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
					if (itemChanged) {
						return;
					}
					gestureType = 'zoomPointerUp';
				}

				// prevent zoom/pan animation when main scroll animation runs
				if (_mainScrollAnimating) {
					return;
				}

				// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
				if (gestureType !== 'swipe') {
					_completeZoomGesture();
					return;
				}

				// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
				if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
					_completePanGesture(_releaseAnimData);
				}
			},


			// Returns object with data about gesture
			// It's created only once and then reused
			_initDragReleaseAnimationData = function() {
				// temp local vars
				var lastFlickDuration,
					tempReleasePos;

				// s = this
				var s = {
					lastFlickOffset: {},
					lastFlickDist: {},
					lastFlickSpeed: {},
					slowDownRatio: {},
					slowDownRatioReverse: {},
					speedDecelerationRatio: {},
					speedDecelerationRatioAbs: {},
					distanceOffset: {},
					backAnimDestination: {},
					backAnimStarted: {},
					calculateSwipeSpeed: function(axis) {


						if (_posPoints.length > 1) {
							lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
							tempReleasePos = _posPoints[_posPoints.length - 2][axis];
						} else {
							lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
							tempReleasePos = _startPoint[axis];
						}
						s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
						s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
						if (s.lastFlickDist[axis] > 20) {
							s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
						} else {
							s.lastFlickSpeed[axis] = 0;
						}
						if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
							s.lastFlickSpeed[axis] = 0;
						}

						s.slowDownRatio[axis] = 0.95;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						s.speedDecelerationRatio[axis] = 1;
					},

					calculateOverBoundsAnimOffset: function(axis, speed) {
						if (!s.backAnimStarted[axis]) {

							if (_panOffset[axis] > _currPanBounds.min[axis]) {
								s.backAnimDestination[axis] = _currPanBounds.min[axis];

							} else if (_panOffset[axis] < _currPanBounds.max[axis]) {
								s.backAnimDestination[axis] = _currPanBounds.max[axis];
							}

							if (s.backAnimDestination[axis] !== undefined) {
								s.slowDownRatio[axis] = 0.7;
								s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
								if (s.speedDecelerationRatioAbs[axis] < 0.05) {

									s.lastFlickSpeed[axis] = 0;
									s.backAnimStarted[axis] = true;

									_animateProp('bounceZoomPan' + axis, _panOffset[axis],
										s.backAnimDestination[axis],
										speed || 300,
										framework.easing.sine.out,
										function(pos) {
											_panOffset[axis] = pos;
											_applyCurrentZoomPan();
										}
									);

								}
							}
						}
					},

					// Reduces the speed by slowDownRatio (per 10ms)
					calculateAnimOffset: function(axis) {
						if (!s.backAnimStarted[axis]) {
							s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
								s.slowDownRatioReverse[axis] -
								s.slowDownRatioReverse[axis] * s.timeDiff / 10);

							s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
							s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
							_panOffset[axis] += s.distanceOffset[axis];

						}
					},

					panAnimLoop: function() {
						if (_animations.zoomPan) {
							_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

							s.now = _getCurrentTime();
							s.timeDiff = s.now - s.lastNow;
							s.lastNow = s.now;

							s.calculateAnimOffset('x');
							s.calculateAnimOffset('y');

							_applyCurrentZoomPan();

							s.calculateOverBoundsAnimOffset('x');
							s.calculateOverBoundsAnimOffset('y');


							if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

								// round pan position
								_panOffset.x = Math.round(_panOffset.x);
								_panOffset.y = Math.round(_panOffset.y);
								_applyCurrentZoomPan();

								_stopAnimation('zoomPan');
								return;
							}
						}

					}
				};
				return s;
			},

			_completePanGesture = function(animData) {
				// calculate swipe speed for Y axis (paanning)
				animData.calculateSwipeSpeed('y');

				_currPanBounds = self.currItem.bounds;

				animData.backAnimDestination = {};
				animData.backAnimStarted = {};

				// Avoid acceleration animation if speed is too low
				if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
					animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

					// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
					animData.calculateOverBoundsAnimOffset('x');
					animData.calculateOverBoundsAnimOffset('y');
					return true;
				}

				// Animation loop that controls the acceleration after pan gesture ends
				_registerStartAnimation('zoomPan');
				animData.lastNow = _getCurrentTime();
				animData.panAnimLoop();
			},


			_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
				var itemChanged;
				if (!_mainScrollAnimating) {
					_currZoomedItemIndex = _currentItemIndex;
				}



				var itemsDiff;

				if (gestureType === 'swipe') {
					var totalShiftDist = _currPoint.x - _startPoint.x,
						isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

					// if container is shifted for more than MIN_SWIPE_DISTANCE, 
					// and last flick gesture was in right direction
					if (totalShiftDist > MIN_SWIPE_DISTANCE &&
						(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
						// go to prev item
						itemsDiff = -1;
					} else if (totalShiftDist < -MIN_SWIPE_DISTANCE &&
						(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
						// go to next item
						itemsDiff = 1;
					}
				}

				var nextCircle;

				if (itemsDiff) {

					_currentItemIndex += itemsDiff;

					if (_currentItemIndex < 0) {
						_currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
						nextCircle = true;
					} else if (_currentItemIndex >= _getNumItems()) {
						_currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
						nextCircle = true;
					}

					if (!nextCircle || _options.loop) {
						_indexDiff += itemsDiff;
						_currPositionIndex -= itemsDiff;
						itemChanged = true;
					}



				}

				var animateToX = _slideSize.x * _currPositionIndex;
				var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
				var finishAnimDuration;


				if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
					// "return to current" duration, e.g. when dragging from slide 0 to -1
					finishAnimDuration = 333;
				} else {
					finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
						animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
						333;

					finishAnimDuration = Math.min(finishAnimDuration, 400);
					finishAnimDuration = Math.max(finishAnimDuration, 250);
				}

				if (_currZoomedItemIndex === _currentItemIndex) {
					itemChanged = false;
				}

				_mainScrollAnimating = true;

				_shout('mainScrollAnimStart');

				_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
					_moveMainScroll,
					function() {
						_stopAllAnimations();
						_mainScrollAnimating = false;
						_currZoomedItemIndex = -1;

						if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
							self.updateCurrItem();
						}

						_shout('mainScrollAnimComplete');
					}
				);

				if (itemChanged) {
					self.updateCurrItem(true);
				}

				return itemChanged;
			},

			_calculateZoomLevel = function(touchesDistance) {
				return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
			},

			// Resets zoom if it's out of bounds
			_completeZoomGesture = function() {
				var destZoomLevel = _currZoomLevel,
					minZoomLevel = _getMinZoomLevel(),
					maxZoomLevel = _getMaxZoomLevel();

				if (_currZoomLevel < minZoomLevel) {
					destZoomLevel = minZoomLevel;
				} else if (_currZoomLevel > maxZoomLevel) {
					destZoomLevel = maxZoomLevel;
				}

				var destOpacity = 1,
					onUpdate,
					initialOpacity = _bgOpacity;

				if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
					//_closedByScroll = true;
					self.close();
					return true;
				}

				if (_opacityChanged) {
					onUpdate = function(now) {
						_applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
					};
				}

				self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
				return true;
			};


		_registerModule('Gestures', {
			publicMethods: {

				initGestures: function() {

					// helper function that builds touch/pointer/mouse events
					var addEventNames = function(pref, down, move, up, cancel) {
						_dragStartEvent = pref + down;
						_dragMoveEvent = pref + move;
						_dragEndEvent = pref + up;
						if (cancel) {
							_dragCancelEvent = pref + cancel;
						} else {
							_dragCancelEvent = '';
						}
					};

					_pointerEventEnabled = _features.pointerEvent;
					if (_pointerEventEnabled && _features.touch) {
						// we don't need touch events, if browser supports pointer events
						_features.touch = false;
					}

					if (_pointerEventEnabled) {
						if (navigator.msPointerEnabled) {
							// IE10 pointer events are case-sensitive
							addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
						} else {
							addEventNames('pointer', 'down', 'move', 'up', 'cancel');
						}
					} else if (_features.touch) {
						addEventNames('touch', 'start', 'move', 'end', 'cancel');
						_likelyTouchDevice = true;
					} else {
						addEventNames('mouse', 'down', 'move', 'up');
					}

					_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
					_downEvents = _dragStartEvent;

					if (_pointerEventEnabled && !_likelyTouchDevice) {
						_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
					}
					// make variable public
					self.likelyTouchDevice = _likelyTouchDevice;

					_globalEventHandlers[_dragStartEvent] = _onDragStart;
					_globalEventHandlers[_dragMoveEvent] = _onDragMove;
					_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

					if (_dragCancelEvent) {
						_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
					}

					// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
					if (_features.touch) {
						_downEvents += ' mousedown';
						_upMoveEvents += ' mousemove mouseup';
						_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
						_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
						_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
					}

					if (!_likelyTouchDevice) {
						// don't allow pan to next slide from zoomed state on Desktop
						_options.allowPanToNext = false;
					}
				}

			}
		});


		/*>>gestures*/

		/*>>show-hide-transition*/
		/**
		 * show-hide-transition.js:
		 *
		 * Manages initial opening or closing transition.
		 *
		 * If you're not planning to use transition for gallery at all,
		 * you may set options hideAnimationDuration and showAnimationDuration to 0,
		 * and just delete startAnimation function.
		 * 
		 */


		var _showOrHideTimeout,
			_showOrHide = function(item, img, out, completeFn) {

				if (_showOrHideTimeout) {
					clearTimeout(_showOrHideTimeout);
				}

				_initialZoomRunning = true;
				_initialContentSet = true;

				// dimensions of small thumbnail {x:,y:,w:}.
				// Height is optional, as calculated based on large image.
				var thumbBounds;
				if (item.initialLayout) {
					thumbBounds = item.initialLayout;
					item.initialLayout = null;
				} else {
					thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
				}

				var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

				var onComplete = function() {
					_stopAnimation('initialZoom');
					if (!out) {
						_applyBgOpacity(1);
						if (img) {
							img.style.display = 'block';
						}
						framework.addClass(template, 'pswp--animated-in');
						_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
					} else {
						self.template.removeAttribute('style');
						self.bg.removeAttribute('style');
					}

					if (completeFn) {
						completeFn();
					}
					_initialZoomRunning = false;
				};

				// if bounds aren't provided, just open gallery without animation
				if (!duration || !thumbBounds || thumbBounds.x === undefined) {

					_shout('initialZoom' + (out ? 'Out' : 'In'));

					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset, item.initialPosition);
					_applyCurrentZoomPan();

					template.style.opacity = out ? 0 : 1;
					_applyBgOpacity(1);

					if (duration) {
						setTimeout(function() {
							onComplete();
						}, duration);
					} else {
						onComplete();
					}

					return;
				}

				var startAnimation = function() {
					var closeWithRaf = _closedByScroll,
						fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

					// apply hw-acceleration to image
					if (item.miniImg) {
						item.miniImg.style.webkitBackfaceVisibility = 'hidden';
					}

					if (!out) {
						_currZoomLevel = thumbBounds.w / item.w;
						_panOffset.x = thumbBounds.x;
						_panOffset.y = thumbBounds.y - _initalWindowScrollY;

						self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
						_applyCurrentZoomPan();
					}

					_registerStartAnimation('initialZoom');

					if (out && !closeWithRaf) {
						framework.removeClass(template, 'pswp--animated-in');
					}

					if (fadeEverything) {
						if (out) {
							framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
						} else {
							setTimeout(function() {
								framework.addClass(template, 'pswp--animate_opacity');
							}, 30);
						}
					}

					_showOrHideTimeout = setTimeout(function() {

						_shout('initialZoom' + (out ? 'Out' : 'In'));


						if (!out) {

							// "in" animation always uses CSS transitions (instead of rAF).
							// CSS transition work faster here, 
							// as developer may also want to animate other things, 
							// like ui on top of sliding area, which can be animated just via CSS

							_currZoomLevel = item.initialZoomLevel;
							_equalizePoints(_panOffset, item.initialPosition);
							_applyCurrentZoomPan();
							_applyBgOpacity(1);

							if (fadeEverything) {
								template.style.opacity = 1;
							} else {
								_applyBgOpacity(1);
							}

							_showOrHideTimeout = setTimeout(onComplete, duration + 20);
						} else {

							// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
							var destZoomLevel = thumbBounds.w / item.w,
								initialPanOffset = {
									x: _panOffset.x,
									y: _panOffset.y
								},
								initialZoomLevel = _currZoomLevel,
								initalBgOpacity = _bgOpacity,
								onUpdate = function(now) {

									if (now === 1) {
										_currZoomLevel = destZoomLevel;
										_panOffset.x = thumbBounds.x;
										_panOffset.y = thumbBounds.y - _currentWindowScrollY;
									} else {
										_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
										_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
										_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
									}

									_applyCurrentZoomPan();
									if (fadeEverything) {
										template.style.opacity = 1 - now;
									} else {
										_applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
									}
								};

							if (closeWithRaf) {
								_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
							} else {
								onUpdate(1);
								_showOrHideTimeout = setTimeout(onComplete, duration + 20);
							}
						}

					}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
				};
				startAnimation();


			};

		/*>>show-hide-transition*/

		/*>>items-controller*/
		/**
		 *
		 * Controller manages gallery items, their dimensions, and their content.
		 * 
		 */

		var _items,
			_tempPanAreaSize = {},
			_imagesToAppendPool = [],
			_initialContentSet,
			_initialZoomRunning,
			_controllerDefaultOptions = {
				index: 0,
				errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
				forceProgressiveLoading: false, // TODO
				preload: [1, 1],
				getNumItemsFn: function() {
					return _items.length;
				}
			};


		var _getItemAt,
			_getNumItems,
			_initialIsLoop,
			_getZeroBounds = function() {
				return {
					center: {
						x: 0,
						y: 0
					},
					max: {
						x: 0,
						y: 0
					},
					min: {
						x: 0,
						y: 0
					}
				};
			},
			_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH) {
				var bounds = item.bounds;

				// position of element when it's centered
				bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
				bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

				// maximum pan position
				bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
					Math.round(_tempPanAreaSize.x - realPanElementW) :
					bounds.center.x;

				bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
					Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
					bounds.center.y;

				// minimum pan position
				bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
				bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
			},
			_calculateItemSize = function(item, viewportSize, zoomLevel) {

				if (item.src && !item.loadError) {
					var isInitial = !zoomLevel;

					if (isInitial) {
						if (!item.vGap) {
							item.vGap = {
								top: 0,
								bottom: 0
							};
						}
						// allows overriding vertical margin for individual items
						_shout('parseVerticalMargin', item);
					}


					_tempPanAreaSize.x = viewportSize.x;
					_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

					if (isInitial) {
						var hRatio = _tempPanAreaSize.x / item.w;
						var vRatio = _tempPanAreaSize.y / item.h;

						item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
						//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

						var scaleMode = _options.scaleMode;

						if (scaleMode === 'orig') {
							zoomLevel = 1;
						} else if (scaleMode === 'fit') {
							zoomLevel = item.fitRatio;
						}

						if (zoomLevel > 1) {
							zoomLevel = 1;
						}

						item.initialZoomLevel = zoomLevel;

						if (!item.bounds) {
							// reuse bounds object
							item.bounds = _getZeroBounds();
						}
					}

					if (!zoomLevel) {
						return;
					}

					_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

					if (isInitial && zoomLevel === item.initialZoomLevel) {
						item.initialPosition = item.bounds.center;
					}

					return item.bounds;
				} else {
					item.w = item.h = 0;
					item.initialZoomLevel = item.fitRatio = 1;
					item.bounds = _getZeroBounds();
					item.initialPosition = item.bounds.center;

					// if it's not image, we return zero bounds (content is not zoomable)
					return item.bounds;
				}

			},




			_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


				if (item.loadError) {
					return;
				}

				if (img) {

					item.imageAppended = true;
					_setImageSize(item, img, (item === self.currItem && _renderMaxResolution));

					baseDiv.appendChild(img);

					if (keepPlaceholder) {
						setTimeout(function() {
							if (item && item.loaded && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}, 500);
					}
				}
			},



			_preloadImage = function(item) {
				item.loading = true;
				item.loaded = false;
				var img = item.img = framework.createEl('pswp__img', 'img');
				var onComplete = function() {
					item.loading = false;
					item.loaded = true;

					if (item.loadComplete) {
						item.loadComplete(item);
					} else {
						item.img = null; // no need to store image object
					}
					img.onload = img.onerror = null;
					img = null;
				};
				img.onload = onComplete;
				img.onerror = function() {
					item.loadError = true;
					onComplete();
				};

				img.src = item.src; // + '?a=' + Math.random();

				return img;
			},
			_checkForError = function(item, cleanUp) {
				if (item.src && item.loadError && item.container) {

					if (cleanUp) {
						item.container.innerHTML = '';
					}

					item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
					return true;

				}
			},
			_setImageSize = function(item, img, maxRes) {
				if (!item.src) {
					return;
				}

				if (!img) {
					img = item.container.lastChild;
				}

				var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
					h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

				if (item.placeholder && !item.loaded) {
					item.placeholder.style.width = w + 'px';
					item.placeholder.style.height = h + 'px';
				}

				img.style.width = w + 'px';
				img.style.height = h + 'px';
			},
			_appendImagesPool = function() {

				if (_imagesToAppendPool.length) {
					var poolItem;

					for (var i = 0; i < _imagesToAppendPool.length; i++) {
						poolItem = _imagesToAppendPool[i];
						if (poolItem.holder.index === poolItem.index) {
							_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
						}
					}
					_imagesToAppendPool = [];
				}
			};



		_registerModule('Controller', {

			publicMethods: {

				lazyLoadItem: function(index) {
					index = _getLoopedId(index);
					var item = _getItemAt(index);

					if (!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
						return;
					}

					_shout('gettingData', index, item);

					if (!item.src) {
						return;
					}

					_preloadImage(item);
				},
				initController: function() {
					framework.extend(_options, _controllerDefaultOptions, true);
					self.items = _items = items;
					_getItemAt = self.getItemAt;
					_getNumItems = _options.getNumItemsFn; //self.getNumItems;



					_initialIsLoop = _options.loop;
					if (_getNumItems() < 3) {
						_options.loop = false; // disable loop if less then 3 items
					}

					_listen('beforeChange', function(diff) {

						var p = _options.preload,
							isNext = diff === null ? true : (diff >= 0),
							preloadBefore = Math.min(p[0], _getNumItems()),
							preloadAfter = Math.min(p[1], _getNumItems()),
							i;


						for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
							self.lazyLoadItem(_currentItemIndex + i);
						}
						for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
							self.lazyLoadItem(_currentItemIndex - i);
						}
					});

					_listen('initialLayout', function() {
						self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
					});

					_listen('mainScrollAnimComplete', _appendImagesPool);
					_listen('initialZoomInEnd', _appendImagesPool);



					_listen('destroy', function() {
						var item;
						for (var i = 0; i < _items.length; i++) {
							item = _items[i];
							// remove reference to DOM elements, for GC
							if (item.container) {
								item.container = null;
							}
							if (item.placeholder) {
								item.placeholder = null;
							}
							if (item.img) {
								item.img = null;
							}
							if (item.preloader) {
								item.preloader = null;
							}
							if (item.loadError) {
								item.loaded = item.loadError = false;
							}
						}
						_imagesToAppendPool = null;
					});
				},


				getItemAt: function(index) {
					if (index >= 0) {
						return _items[index] !== undefined ? _items[index] : false;
					}
					return false;
				},

				allowProgressiveImg: function() {
					// 1. Progressive image loading isn't working on webkit/blink 
					//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
					//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
					//    
					// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
					//    That's why it's disabled on touch devices (mainly because of swipe transition)
					//    
					// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

					// Don't allow progressive loading on non-large touch devices
					return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
					// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
				},

				setContent: function(holder, index) {

					if (_options.loop) {
						index = _getLoopedId(index);
					}

					var prevItem = self.getItemAt(holder.index);
					if (prevItem) {
						prevItem.container = null;
					}

					var item = self.getItemAt(index),
						img;

					if (!item) {
						holder.el.innerHTML = '';
						return;
					}

					// allow to override data
					_shout('gettingData', index, item);

					holder.index = index;
					holder.item = item;

					// base container DIV is created only once for each of 3 holders
					var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



					if (!item.src && item.html) {
						if (item.html.tagName) {
							baseDiv.appendChild(item.html);
						} else {
							baseDiv.innerHTML = item.html;
						}
					}

					_checkForError(item);

					_calculateItemSize(item, _viewportSize);

					if (item.src && !item.loadError && !item.loaded) {

						item.loadComplete = function(item) {

							// gallery closed before image finished loading
							if (!_isOpen) {
								return;
							}

							// check if holder hasn't changed while image was loading
							if (holder && holder.index === index) {
								if (_checkForError(item, true)) {
									item.loadComplete = item.img = null;
									_calculateItemSize(item, _viewportSize);
									_applyZoomPanToItem(item);

									if (holder.index === _currentItemIndex) {
										// recalculate dimensions
										self.updateCurrZoomItem();
									}
									return;
								}
								if (!item.imageAppended) {
									if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
										_imagesToAppendPool.push({
											item: item,
											baseDiv: baseDiv,
											img: item.img,
											index: index,
											holder: holder,
											clearPlaceholder: true
										});
									} else {
										_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
									}
								} else {
									// remove preloader & mini-img
									if (!_initialZoomRunning && item.placeholder) {
										item.placeholder.style.display = 'none';
										item.placeholder = null;
									}
								}
							}

							item.loadComplete = null;
							item.img = null; // no need to store image element after it's added

							_shout('imageLoadComplete', index, item);
						};

						if (framework.features.transform) {

							var placeholderClassName = 'pswp__img pswp__img--placeholder';
							placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

							var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
							if (item.msrc) {
								placeholder.src = item.msrc;
							}

							_setImageSize(item, placeholder);

							baseDiv.appendChild(placeholder);
							item.placeholder = placeholder;

						}




						if (!item.loading) {
							_preloadImage(item);
						}


						if (self.allowProgressiveImg()) {
							// just append image
							if (!_initialContentSet && _features.transform) {
								_imagesToAppendPool.push({
									item: item,
									baseDiv: baseDiv,
									img: item.img,
									index: index,
									holder: holder
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, true, true);
							}
						}

					} else if (item.src && !item.loadError) {
						// image object is created every time, due to bugs of image loading & delay when switching images
						img = framework.createEl('pswp__img', 'img');
						img.style.opacity = 1;
						img.src = item.src;
						_setImageSize(item, img);
						_appendImage(index, item, baseDiv, img, true);
					}


					if (!_initialContentSet && index === _currentItemIndex) {
						_currZoomElementStyle = baseDiv.style;
						_showOrHide(item, (img || item.img));
					} else {
						_applyZoomPanToItem(item);
					}

					holder.el.innerHTML = '';
					holder.el.appendChild(baseDiv);
				},

				cleanSlide: function(item) {
					if (item.img) {
						item.img.onload = item.img.onerror = null;
					}
					item.loaded = item.loading = item.img = item.imageAppended = false;
				}

			}
		});

		/*>>items-controller*/

		/*>>tap*/
		/**
		 * tap.js:
		 *
		 * Displatches tap and double-tap events.
		 * 
		 */

		var tapTimer,
			tapReleasePoint = {},
			_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
				var e = document.createEvent('CustomEvent'),
					eDetail = {
						origEvent: origEvent,
						target: origEvent.target,
						releasePoint: releasePoint,
						pointerType: pointerType || 'touch'
					};

				e.initCustomEvent('pswpTap', true, true, eDetail);
				origEvent.target.dispatchEvent(e);
			};

		_registerModule('Tap', {
			publicMethods: {
				initTap: function() {
					_listen('firstTouchStart', self.onTapStart);
					_listen('touchRelease', self.onTapRelease);
					_listen('destroy', function() {
						tapReleasePoint = {};
						tapTimer = null;
					});
				},
				onTapStart: function(touchList) {
					if (touchList.length > 1) {
						clearTimeout(tapTimer);
						tapTimer = null;
					}
				},
				onTapRelease: function(e, releasePoint) {
					if (!releasePoint) {
						return;
					}

					if (!_moved && !_isMultitouch && !_numAnimations) {
						var p0 = releasePoint;
						if (tapTimer) {
							clearTimeout(tapTimer);
							tapTimer = null;

							// Check if taped on the same place
							if (_isNearbyPoints(p0, tapReleasePoint)) {
								_shout('doubleTap', p0);
								return;
							}
						}

						if (releasePoint.type === 'mouse') {
							_dispatchTapEvent(e, releasePoint, 'mouse');
							return;
						}

						var clickedTagName = e.target.tagName.toUpperCase();
						// avoid double tap delay on buttons and elements that have class pswp__single-tap
						if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
							_dispatchTapEvent(e, releasePoint);
							return;
						}

						_equalizePoints(tapReleasePoint, p0);

						tapTimer = setTimeout(function() {
							_dispatchTapEvent(e, releasePoint);
							tapTimer = null;
						}, 300);
					}
				}
			}
		});

		/*>>tap*/

		/*>>desktop-zoom*/
		/**
		 *
		 * desktop-zoom.js:
		 *
		 * - Binds mousewheel event for paning zoomed image.
		 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
		 *   (which are used for cursors and zoom icon)
		 * - Adds toggleDesktopZoom function.
		 * 
		 */

		var _wheelDelta;

		_registerModule('DesktopZoom', {

			publicMethods: {

				initDesktopZoom: function() {

					if (_oldIE) {
						// no zoom for old IE (<=8)
						return;
					}

					if (_likelyTouchDevice) {
						// if detected hardware touch support, we wait until mouse is used,
						// and only then apply desktop-zoom features
						_listen('mouseUsed', function() {
							self.setupDesktopZoom();
						});
					} else {
						self.setupDesktopZoom(true);
					}

				},

				setupDesktopZoom: function(onInit) {

					_wheelDelta = {};

					var events = 'wheel mousewheel DOMMouseScroll';

					_listen('bindEvents', function() {
						framework.bind(template, events, self.handleMouseWheel);
					});

					_listen('unbindEvents', function() {
						if (_wheelDelta) {
							framework.unbind(template, events, self.handleMouseWheel);
						}
					});

					self.mouseZoomedIn = false;

					var hasDraggingClass,
						updateZoomable = function() {
							if (self.mouseZoomedIn) {
								framework.removeClass(template, 'pswp--zoomed-in');
								self.mouseZoomedIn = false;
							}
							if (_currZoomLevel < 1) {
								framework.addClass(template, 'pswp--zoom-allowed');
							} else {
								framework.removeClass(template, 'pswp--zoom-allowed');
							}
							removeDraggingClass();
						},
						removeDraggingClass = function() {
							if (hasDraggingClass) {
								framework.removeClass(template, 'pswp--dragging');
								hasDraggingClass = false;
							}
						};

					_listen('resize', updateZoomable);
					_listen('afterChange', updateZoomable);
					_listen('pointerDown', function() {
						if (self.mouseZoomedIn) {
							hasDraggingClass = true;
							framework.addClass(template, 'pswp--dragging');
						}
					});
					_listen('pointerUp', removeDraggingClass);

					if (!onInit) {
						updateZoomable();
					}

				},

				handleMouseWheel: function(e) {

					if (_currZoomLevel <= self.currItem.fitRatio) {
						if (_options.modal) {

							if (!_options.closeOnScroll || _numAnimations || _isDragging) {
								e.preventDefault();
							} else if (_transformKey && Math.abs(e.deltaY) > 2) {
								// close PhotoSwipe
								// if browser supports transforms & scroll changed enough
								_closedByScroll = true;
								self.close();
							}

						}
						return true;
					}

					// allow just one event to fire
					e.stopPropagation();

					// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
					_wheelDelta.x = 0;

					if ('deltaX' in e) {
						if (e.deltaMode === 1 /* DOM_DELTA_LINE */ ) {
							// 18 - average line height
							_wheelDelta.x = e.deltaX * 18;
							_wheelDelta.y = e.deltaY * 18;
						} else {
							_wheelDelta.x = e.deltaX;
							_wheelDelta.y = e.deltaY;
						}
					} else if ('wheelDelta' in e) {
						if (e.wheelDeltaX) {
							_wheelDelta.x = -0.16 * e.wheelDeltaX;
						}
						if (e.wheelDeltaY) {
							_wheelDelta.y = -0.16 * e.wheelDeltaY;
						} else {
							_wheelDelta.y = -0.16 * e.wheelDelta;
						}
					} else if ('detail' in e) {
						_wheelDelta.y = e.detail;
					} else {
						return;
					}

					_calculatePanBounds(_currZoomLevel, true);

					var newPanX = _panOffset.x - _wheelDelta.x,
						newPanY = _panOffset.y - _wheelDelta.y;

					// only prevent scrolling in nonmodal mode when not at edges
					if (_options.modal ||
						(
							newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
							newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
						)) {
						e.preventDefault();
					}

					// TODO: use rAF instead of mousewheel?
					self.panTo(newPanX, newPanY);
				},

				toggleDesktopZoom: function(centerPoint) {
					centerPoint = centerPoint || {
						x: _viewportSize.x / 2 + _offset.x,
						y: _viewportSize.y / 2 + _offset.y
					};

					var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
					var zoomOut = _currZoomLevel === doubleTapZoomLevel;

					self.mouseZoomedIn = !zoomOut;

					self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
					framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
				}

			}
		});


		/*>>desktop-zoom*/

		/*>>history*/
		/**
		 *
		 * history.js:
		 *
		 * - Back button to close gallery.
		 * 
		 * - Unique URL for each slide: example.com/&pid=1&gid=3
		 *   (where PID is picture index, and GID and gallery index)
		 *   
		 * - Switch URL when slides change.
		 * 
		 */


		var _historyDefaultOptions = {
			history: true,
			galleryUID: 1
		};

		var _historyUpdateTimeout,
			_hashChangeTimeout,
			_hashAnimCheckTimeout,
			_hashChangedByScript,
			_hashChangedByHistory,
			_hashReseted,
			_initialHash,
			_historyChanged,
			_closedFromURL,
			_urlChangedOnce,
			_windowLoc,

			_supportsPushState,

			_getHash = function() {
				return _windowLoc.hash.substring(1);
			},
			_cleanHistoryTimeouts = function() {

				if (_historyUpdateTimeout) {
					clearTimeout(_historyUpdateTimeout);
				}

				if (_hashAnimCheckTimeout) {
					clearTimeout(_hashAnimCheckTimeout);
				}
			},

			// pid - Picture index
			// gid - Gallery index
			_parseItemIndexFromURL = function() {
				var hash = _getHash(),
					params = {};

				if (hash.length < 5) { // pid=1
					return params;
				}

				var i, vars = hash.split('&');
				for (i = 0; i < vars.length; i++) {
					if (!vars[i]) {
						continue;
					}
					var pair = vars[i].split('=');
					if (pair.length < 2) {
						continue;
					}
					params[pair[0]] = pair[1];
				}
				if (_options.galleryPIDs) {
					// detect custom pid in hash and search for it among the items collection
					var searchfor = params.pid;
					params.pid = 0; // if custom pid cannot be found, fallback to the first item
					for (i = 0; i < _items.length; i++) {
						if (_items[i].pid === searchfor) {
							params.pid = i;
							break;
						}
					}
				} else {
					params.pid = parseInt(params.pid, 10) - 1;
				}
				if (params.pid < 0) {
					params.pid = 0;
				}
				return params;
			},
			_updateHash = function() {

				if (_hashAnimCheckTimeout) {
					clearTimeout(_hashAnimCheckTimeout);
				}


				if (_numAnimations || _isDragging) {
					// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
					// that's why we update hash only when no animations running
					_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
					return;
				}

				if (_hashChangedByScript) {
					clearTimeout(_hashChangeTimeout);
				} else {
					_hashChangedByScript = true;
				}


				var pid = (_currentItemIndex + 1);
				var item = _getItemAt(_currentItemIndex);
				if (item.hasOwnProperty('pid')) {
					// carry forward any custom pid assigned to the item
					pid = item.pid;
				}
				var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

				if (!_historyChanged) {
					if (_windowLoc.hash.indexOf(newHash) === -1) {
						_urlChangedOnce = true;
					}
					// first time - add new hisory record, then just replace
				}

				var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

				if (_supportsPushState) {

					if ('#' + newHash !== window.location.hash) {
						history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
					}

				} else {
					if (_historyChanged) {
						_windowLoc.replace(newURL);
					} else {
						_windowLoc.hash = newHash;
					}
				}



				_historyChanged = true;
				_hashChangeTimeout = setTimeout(function() {
					_hashChangedByScript = false;
				}, 60);
			};





		_registerModule('History', {



			publicMethods: {
				initHistory: function() {

					framework.extend(_options, _historyDefaultOptions, true);

					if (!_options.history) {
						return;
					}


					_windowLoc = window.location;
					_urlChangedOnce = false;
					_closedFromURL = false;
					_historyChanged = false;
					_initialHash = _getHash();
					_supportsPushState = ('pushState' in history);


					if (_initialHash.indexOf('gid=') > -1) {
						_initialHash = _initialHash.split('&gid=')[0];
						_initialHash = _initialHash.split('?gid=')[0];
					}


					_listen('afterChange', self.updateURL);
					_listen('unbindEvents', function() {
						framework.unbind(window, 'hashchange', self.onHashChange);
					});


					var returnToOriginal = function() {
						_hashReseted = true;
						if (!_closedFromURL) {

							if (_urlChangedOnce) {
								history.back();
							} else {

								if (_initialHash) {
									_windowLoc.hash = _initialHash;
								} else {
									if (_supportsPushState) {

										// remove hash from url without refreshing it or scrolling to top
										history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
									} else {
										_windowLoc.hash = '';
									}
								}
							}

						}

						_cleanHistoryTimeouts();
					};


					_listen('unbindEvents', function() {
						if (_closedByScroll) {
							// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
							// this is done to keep the scroll position
							returnToOriginal();
						}
					});
					_listen('destroy', function() {
						if (!_hashReseted) {
							returnToOriginal();
						}
					});
					_listen('firstUpdate', function() {
						_currentItemIndex = _parseItemIndexFromURL().pid;
					});




					var index = _initialHash.indexOf('pid=');
					if (index > -1) {
						_initialHash = _initialHash.substring(0, index);
						if (_initialHash.slice(-1) === '&') {
							_initialHash = _initialHash.slice(0, -1);
						}
					}


					setTimeout(function() {
						if (_isOpen) { // hasn't destroyed yet
							framework.bind(window, 'hashchange', self.onHashChange);
						}
					}, 40);

				},
				onHashChange: function() {

					if (_getHash() === _initialHash) {

						_closedFromURL = true;
						self.close();
						return;
					}
					if (!_hashChangedByScript) {

						_hashChangedByHistory = true;
						self.goTo(_parseItemIndexFromURL().pid);
						_hashChangedByHistory = false;
					}

				},
				updateURL: function() {

					// Delay the update of URL, to avoid lag during transition, 
					// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

					_cleanHistoryTimeouts();


					if (_hashChangedByHistory) {
						return;
					}

					if (!_historyChanged) {
						_updateHash(); // first time
					} else {
						_historyUpdateTimeout = setTimeout(_updateHash, 800);
					}
				}

			}
		});


		/*>>history*/
		framework.extend(self, publicMethods);
	};
	return PhotoSwipe;
});

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
/*!
 * DrawSVGPlugin 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
	"use strict";

	function l() {
		return "undefined" != typeof window
	}

	function m() {
		return t || l() && (t = window.gsap) && t.registerPlugin && t
	}

	function p(e) {
		return Math.round(1e4 * e) / 1e4
	}

	function q(e) {
		return parseFloat(e) || 0
	}

	function r(e, t) {
		var r = q(e);
		return ~e.indexOf("%") ? r / 100 * t : r
	}

	function s(e, t) {
		return q(e.getAttribute(t))
	}

	function u(e, t, r, n, s, i) {
		return D(Math.pow((q(r) - q(e)) * s, 2) + Math.pow((q(n) - q(t)) * i, 2))
	}

	function v(e) {
		return console.warn(e)
	}

	function w(e) {
		return "non-scaling-stroke" === e.getAttribute("vector-effect")
	}

	function z(e) {
		if (!(e = k(e)[0])) return 0;
		var t, r, n, i, o, a, f, h = e.tagName.toLowerCase(),
			l = e.style,
			d = 1,
			c = 1;
		w(e) && (c = e.getScreenCTM(), d = D(c.a * c.a + c.b * c.b), c = D(c.d * c.d + c.c * c.c));
		try {
			r = e.getBBox()
		} catch (e) {
			v("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
		}
		var g = r || {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			_ = g.x,
			y = g.y,
			x = g.width,
			m = g.height;
		if (r && (x || m) || !M[h] || (x = s(e, M[h][0]), m = s(e, M[h][1]), "rect" !== h && "line" !== h && (x *= 2, m *= 2), "line" === h && (_ = s(e, "x1"), y = s(e, "y1"), x = Math.abs(x - _), m = Math.abs(m - y))), "path" === h) i = l.strokeDasharray, l.strokeDasharray = "none", t = e.getTotalLength() || 0, p(d) !== p(c) && !b && (b = 1) && v("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (d + c) / 2, l.strokeDasharray = i;
		else if ("rect" === h) t = 2 * x * d + 2 * m * c;
		else if ("line" === h) t = u(_, y, _ + x, y + m, d, c);
		else if ("polyline" === h || "polygon" === h)
			for (n = e.getAttribute("points").match(P) || [], "polygon" === h && n.push(n[0], n[1]), t = 0, o = 2; o < n.length; o += 2) t += u(n[o - 2], n[o - 1], n[o], n[o + 1], d, c) || 0;
		else "circle" !== h && "ellipse" !== h || (a = x / 2 * d, f = m / 2 * c, t = Math.PI * (3 * (a + f) - D((3 * a + f) * (a + 3 * f))));
		return t || 0
	}

	function A(e, t) {
		if (!(e = k(e)[0])) return [0, 0];
		t = t || z(e) + 1;
		var r = f.getComputedStyle(e),
			n = r.strokeDasharray || "",
			s = q(r.strokeDashoffset),
			i = n.indexOf(",");
		return i < 0 && (i = n.indexOf(" ")), t < (n = i < 0 ? t : q(n.substr(0, i))) && (n = t), [-s || 0, n - s || 0]
	}

	function B() {
		l() && (f = window, d = t = m(), k = t.utils.toArray, c = t.core.getStyleSaver, g = t.core.reverting || function() {}, h = -1 !== ((f.navigator || {}).userAgent || "").indexOf("Edge"))
	}
	var t, k, f, h, d, b, c, g, P = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
		M = {
			rect: ["width", "height"],
			circle: ["r", "r"],
			ellipse: ["rx", "ry"],
			line: ["x2", "y2"]
		},
		D = Math.sqrt,
		n = {
			version: "3.12.2",
			name: "drawSVG",
			register: function register(e) {
				t = e, B()
			},
			init: function init(e, t, n) {
				if (!e.getBBox) return !1;
				d || B();
				var s, i, o, a = z(e);
				return this.styles = c && c(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = n, this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", i = function _parse(e, t, n) {
					var s, i, o = e.indexOf(" ");
					return i = o < 0 ? (s = void 0 !== n ? n + "" : e, e) : (s = e.substr(0, o), e.substr(o + 1)), s = r(s, t), (i = r(i, t)) < s ? [i, s] : [s, i]
				}(t, a, (s = A(e, a))[0]), this._length = p(a), this._dash = p(s[1] - s[0]), this._offset = p(-s[0]), this._dashPT = this.add(this, "_dash", this._dash, p(i[1] - i[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, p(-i[0]), 0, 0, 0, 0, 0, 1), h && (o = f.getComputedStyle(e)).strokeLinecap !== o.strokeLinejoin && (i = q(o.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", i, i + .01)), this._live = w(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
			},
			render: function render(e, t) {
				if (t.tween._time || !g()) {
					var r, n, s, i, o = t._pt,
						a = t._style;
					if (o) {
						for (t._live && (r = z(t._target)) !== t._length && (n = r / t._length, t._length = r, t._offsetPT && (t._offsetPT.s *= n, t._offsetPT.c *= n), t._dashPT ? (t._dashPT.s *= n, t._dashPT.c *= n) : t._dash *= n); o;) o.r(e, o.d), o = o._next;
						s = t._dash || e && 1 !== e && 1e-4 || 0, r = t._length - s + .1, i = t._offset, s && i && s + Math.abs(i % t._length) > t._length - .2 && (i += i < 0 ? .1 : -.1) && (r += .1), a.strokeDashoffset = s ? i : i + .001, a.strokeDasharray = r < .2 ? "none" : s ? s + "px," + (t._nowrap ? 999999 : r) + "px" : "0px, 999999px"
					}
				} else t.styles.revert()
			},
			getLength: z,
			getPosition: A
		};
	m() && t.registerPlugin(n), e.DrawSVGPlugin = n, e.default = n;
	if (typeof(window) === "undefined" || window !== e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	} else {
		delete e.default
	}
});
/*!
 * MorphSVGPlugin 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
	"use strict";

	function m(t) {
		return "string" == typeof t
	}
	var x = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
		N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
		b = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
		n = /(^[#\.][a-z]|[a-y][a-z])/i,
		B = Math.PI / 180,
		D = Math.sin,
		E = Math.cos,
		k = Math.abs,
		J = Math.sqrt,
		s = function _isNumber(t) {
			return "number" == typeof t
		},
		h = function _round(t) {
			return Math.round(1e5 * t) / 1e5 || 0
		};

	function reverseSegment(t) {
		var e, r = 0;
		for (t.reverse(); r < t.length; r += 2) e = t[r], t[r] = t[r + 1], t[r + 1] = e;
		t.reversed = !t.reversed
	}
	var A = {
		rect: "rx,ry,x,y,width,height",
		circle: "r,cx,cy",
		ellipse: "rx,ry,cx,cy",
		line: "x1,x2,y1,y2"
	};

	function convertToPath(t, e) {
		var r, n, a, o, i, s, h, l, g, c, p, u, f, d, _, P, m, v, y, w, M, x, T = t.tagName.toLowerCase(),
			b = .552284749831;
		return "path" !== T && t.getBBox ? (s = function _createPath(t, e) {
			var r, n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
				a = [].slice.call(t.attributes),
				o = a.length;
			for (e = "," + e + ","; - 1 < --o;) r = a[o].nodeName.toLowerCase(), e.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, a[o].nodeValue);
			return n
		}(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), x = function _attrToObj(t, e) {
			for (var r = e ? e.split(",") : [], n = {}, a = r.length; - 1 < --a;) n[r[a]] = +t.getAttribute(r[a]) || 0;
			return n
		}(t, A[T]), "rect" === T ? (o = x.rx, i = x.ry || o, n = x.x, a = x.y, c = x.width - 2 * o, p = x.height - 2 * i, r = o || i ? "M" + (P = (d = (f = n + o) + c) + o) + "," + (v = a + i) + " V" + (y = v + p) + " C" + [P, w = y + i * b, _ = d + o * b, M = y + i, d, M, d - (d - f) / 3, M, f + (d - f) / 3, M, f, M, u = n + o * (1 - b), M, n, w, n, y, n, y - (y - v) / 3, n, v + (y - v) / 3, n, v, n, m = a + i * (1 - b), u, a, f, a, f + (d - f) / 3, a, d - (d - f) / 3, a, d, a, _, a, P, m, P, v].join(",") + "z" : "M" + (n + c) + "," + a + " v" + p + " h" + -c + " v" + -p + " h" + c + "z") : "circle" === T || "ellipse" === T ? (l = "circle" === T ? (o = i = x.r) * b : (o = x.rx, (i = x.ry) * b), r = "M" + ((n = x.cx) + o) + "," + (a = x.cy) + " C" + [n + o, a + l, n + (h = o * b), a + i, n, a + i, n - h, a + i, n - o, a + l, n - o, a, n - o, a - l, n - h, a - i, n, a - i, n + h, a - i, n + o, a - l, n + o, a].join(",") + "z") : "line" === T ? r = "M" + x.x1 + "," + x.y1 + " L" + x.x2 + "," + x.y2 : "polyline" !== T && "polygon" !== T || (r = "M" + (n = (g = (t.getAttribute("points") + "").match(N) || []).shift()) + "," + (a = g.shift()) + " L" + g.join(","), "polygon" === T && (r += "," + n + "," + a + "z")), s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(r))), e && t.parentNode && (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)), s) : t
	}

	function arcToSegment(t, e, r, n, a, o, i, s, h) {
		if (t !== s || e !== h) {
			r = k(r), n = k(n);
			var l = a % 360 * B,
				g = E(l),
				c = D(l),
				p = Math.PI,
				u = 2 * p,
				f = (t - s) / 2,
				d = (e - h) / 2,
				_ = g * f + c * d,
				P = -c * f + g * d,
				m = _ * _,
				v = P * P,
				y = m / (r * r) + v / (n * n);
			1 < y && (r = J(y) * r, n = J(y) * n);
			var w = r * r,
				M = n * n,
				x = (w * M - w * v - M * m) / (w * v + M * m);
			x < 0 && (x = 0);
			var T = (o === i ? -1 : 1) * J(x),
				b = r * P / n * T,
				S = -n * _ / r * T,
				N = g * b - c * S + (t + s) / 2,
				z = c * b + g * S + (e + h) / 2,
				A = (_ - b) / r,
				R = (P - S) / n,
				O = (-_ - b) / r,
				j = (-P - S) / n,
				Y = A * A + R * R,
				C = (R < 0 ? -1 : 1) * Math.acos(A / J(Y)),
				I = (A * j - R * O < 0 ? -1 : 1) * Math.acos((A * O + R * j) / J(Y * (O * O + j * j)));
			isNaN(I) && (I = p), !i && 0 < I ? I -= u : i && I < 0 && (I += u), C %= u, I %= u;
			var V, F = Math.ceil(k(I) / (u / 4)),
				L = [],
				X = I / F,
				U = 4 / 3 * D(X / 2) / (1 + E(X / 2)),
				G = g * r,
				Q = c * r,
				q = c * -n,
				H = g * n;
			for (V = 0; V < F; V++) _ = E(a = C + V * X), P = D(a), A = E(a += X), R = D(a), L.push(_ - U * P, P + U * _, A + U * R, R - U * A, A, R);
			for (V = 0; V < L.length; V += 2) _ = L[V], P = L[V + 1], L[V] = _ * G + P * q + N, L[V + 1] = _ * Q + P * H + z;
			return L[V - 2] = s, L[V - 1] = h, L
		}
	}

	function stringToRawPath(t) {
		function uc(t, e, r, n) {
			g = (r - t) / 3, c = (n - e) / 3, s.push(t + g, e + c, r - g, n - c, r, n)
		}
		var e, r, n, a, o, i, s, h, l, g, c, p, u, f, d, _ = (t + "").replace(b, function(t) {
				var e = +t;
				return e < 1e-4 && -1e-4 < e ? 0 : e
			}).match(x) || [],
			P = [],
			m = 0,
			v = 0,
			y = _.length,
			w = 0,
			M = "ERROR: malformed path: " + t;
		if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(M), P;
		for (e = 0; e < y; e++)
			if (u = o, isNaN(_[e]) ? i = (o = _[e].toUpperCase()) !== _[e] : e--, n = +_[e + 1], a = +_[e + 2], i && (n += m, a += v), e || (h = n, l = a), "M" === o) s && (s.length < 8 ? --P.length : w += s.length), m = h = n, v = l = a, s = [n, a], P.push(s), e += 2, o = "L";
			else if ("C" === o) i || (m = v = 0), (s = s || [0, 0]).push(n, a, m + 1 * _[e + 3], v + 1 * _[e + 4], m += 1 * _[e + 5], v += 1 * _[e + 6]), e += 6;
		else if ("S" === o) g = m, c = v, "C" !== u && "S" !== u || (g += m - s[s.length - 4], c += v - s[s.length - 3]), i || (m = v = 0), s.push(g, c, n, a, m += 1 * _[e + 3], v += 1 * _[e + 4]), e += 4;
		else if ("Q" === o) g = m + 2 / 3 * (n - m), c = v + 2 / 3 * (a - v), i || (m = v = 0), m += 1 * _[e + 3], v += 1 * _[e + 4], s.push(g, c, m + 2 / 3 * (n - m), v + 2 / 3 * (a - v), m, v), e += 4;
		else if ("T" === o) g = m - s[s.length - 4], c = v - s[s.length - 3], s.push(m + g, v + c, n + 2 / 3 * (m + 1.5 * g - n), a + 2 / 3 * (v + 1.5 * c - a), m = n, v = a), e += 2;
		else if ("H" === o) uc(m, v, m = n, v), e += 1;
		else if ("V" === o) uc(m, v, m, v = n + (i ? v - m : 0)), e += 1;
		else if ("L" === o || "Z" === o) "Z" === o && (n = h, a = l, s.closed = !0), ("L" === o || .5 < k(m - n) || .5 < k(v - a)) && (uc(m, v, n, a), "L" === o && (e += 2)), m = n, v = a;
		else if ("A" === o) {
			if (f = _[e + 4], d = _[e + 5], g = _[e + 6], c = _[e + 7], r = 7, 1 < f.length && (f.length < 3 ? (c = g, g = d, r--) : (c = d, g = f.substr(2), r -= 2), d = f.charAt(1), f = f.charAt(0)), p = arcToSegment(m, v, +_[e + 1], +_[e + 2], +_[e + 3], +f, +d, (i ? m : 0) + 1 * g, (i ? v : 0) + 1 * c), e += r, p)
				for (r = 0; r < p.length; r++) s.push(p[r]);
			m = s[s.length - 2], v = s[s.length - 1]
		} else console.log(M);
		return (e = s.length) < 6 ? (P.pop(), e = 0) : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0), P.totalPoints = w + e, P
	}

	function rawPathToString(t) {
		s(t[0]) && (t = [t]);
		var e, r, n, a, o = "",
			i = t.length;
		for (r = 0; r < i; r++) {
			for (a = t[r], o += "M" + h(a[0]) + "," + h(a[1]) + " C", e = a.length, n = 2; n < e; n++) o += h(a[n++]) + "," + h(a[n++]) + " " + h(a[n++]) + "," + h(a[n++]) + " " + h(a[n++]) + "," + h(a[n]) + " ";
			a.closed && (o += "z")
		}
		return o
	}

	function y() {
		return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
	}

	function z(t) {
		return "function" == typeof t
	}

	function M(t) {
		return console && console.warn(t)
	}

	function O(t) {
		var e, r = t.length,
			n = 0,
			a = 0;
		for (e = 0; e < r; e++) n += t[e++], a += t[e];
		return [n / (r / 2), a / (r / 2)]
	}

	function P(t) {
		var e, r, n, a = t.length,
			o = t[0],
			i = o,
			s = t[1],
			h = s;
		for (n = 6; n < a; n += 6) o < (e = t[n]) ? o = e : e < i && (i = e), s < (r = t[n + 1]) ? s = r : r < h && (h = r);
		return t.centerX = (o + i) / 2, t.centerY = (s + h) / 2, t.size = (o - i) * (s - h)
	}

	function Q(t, e) {
		void 0 === e && (e = 3);
		for (var r, n, a, o, i, s, h, l, g, c, p, u, f, d, _, P, m = t.length, v = t[0][0], y = v, w = t[0][1], M = w, x = 1 / e; - 1 < --m;)
			for (r = (i = t[m]).length, o = 6; o < r; o += 6)
				for (g = i[o], c = i[o + 1], p = i[o + 2] - g, d = i[o + 3] - c, u = i[o + 4] - g, _ = i[o + 5] - c, f = i[o + 6] - g, P = i[o + 7] - c, s = e; - 1 < --s;) v < (n = ((h = x * s) * h * f + 3 * (l = 1 - h) * (h * u + l * p)) * h + g) ? v = n : n < y && (y = n), w < (a = (h * h * P + 3 * l * (h * _ + l * d)) * h + c) ? w = a : a < M && (M = a);
		return t.centerX = (v + y) / 2, t.centerY = (w + M) / 2, t.left = y, t.width = v - y, t.top = M, t.height = w - M, t.size = (v - y) * (w - M)
	}

	function R(t, e) {
		return e.length - t.length
	}

	function S(t, e) {
		var r = t.size || P(t),
			n = e.size || P(e);
		return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r
	}

	function T(t, e) {
		var r, n, a = t.slice(0),
			o = t.length,
			i = o - 2;
		for (e |= 0, r = 0; r < o; r++) n = (r + e) % i, t[r++] = a[n], t[r] = a[1 + n]
	}

	function U(t, e, r, n, a) {
		var o, i, s, h, l = t.length,
			g = 0,
			c = l - 2;
		for (r *= 6, i = 0; i < l; i += 6) h = t[o = (i + r) % c] - (e[i] - n), s = t[1 + o] - (e[i + 1] - a), g += _(s * s + h * h);
		return g
	}

	function V(t, e, r) {
		var n, a, o, i = t.length,
			s = O(t),
			h = O(e),
			l = h[0] - s[0],
			g = h[1] - s[1],
			c = U(t, e, 0, l, g),
			p = 0;
		for (o = 6; o < i; o += 6)(a = U(t, e, o / 6, l, g)) < c && (c = a, p = o);
		if (r)
			for (reverseSegment(n = t.slice(0)), o = 6; o < i; o += 6)(a = U(n, e, o / 6, l, g)) < c && (c = a, p = -o);
		return p / 6
	}

	function W(t, e, r) {
		for (var n, a, o, i, s, h, l = t.length, g = 1e20, c = 0, p = 0; - 1 < --l;)
			for (h = (n = t[l]).length, s = 0; s < h; s += 6) a = n[s] - e, o = n[s + 1] - r, (i = _(a * a + o * o)) < g && (g = i, c = n[s], p = n[s + 1]);
		return [c, p]
	}

	function X(t, e, r, n, a, o) {
		var i, s, h, l, g = e.length,
			c = 0,
			p = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
			u = 1e20,
			f = t.centerX + a,
			d = t.centerY + o;
		for (i = r; i < g && !((e[i].size || P(e[i])) < p); i++) s = e[i].centerX - f, h = e[i].centerY - d, (l = _(s * s + h * h)) < u && (c = i, u = l);
		return l = e[c], e.splice(c, 1), l
	}

	function Y(t, e) {
		var r, n, a, o, i, s, h, l, g, c, p, u, f, d, _ = 0,
			P = t.length,
			m = e / ((P - 2) / 6);
		for (f = 2; f < P; f += 6)
			for (_ += m; .999999 < _;) r = t[f - 2], n = t[f - 1], a = t[f], o = t[f + 1], i = t[f + 2], s = t[f + 3], h = t[f + 4], l = t[f + 5], g = r + (a - r) * (d = 1 / ((Math.floor(_) || 1) + 1)), g += ((p = a + (i - a) * d) - g) * d, p += (i + (h - i) * d - p) * d, c = n + (o - n) * d, c += ((u = o + (s - o) * d) - c) * d, u += (s + (l - s) * d - u) * d, t.splice(f, 4, r + (a - r) * d, n + (o - n) * d, g, c, g + (p - g) * d, c + (u - c) * d, p, u, i + (h - i) * d, s + (l - s) * d), f += 6, P += 6, _--;
		return t
	}

	function Z(t, e, r, n, a) {
		var o, i, s, h, l, g, c, p = e.length - t.length,
			u = 0 < p ? e : t,
			f = 0 < p ? t : e,
			d = 0,
			_ = "complexity" === n ? R : S,
			m = "position" === n ? 0 : "number" == typeof n ? n : .8,
			v = f.length,
			y = "object" == typeof r && r.push ? r.slice(0) : [r],
			w = "reverse" === y[0] || y[0] < 0,
			x = "log" === r;
		if (f[0]) {
			if (1 < u.length && (t.sort(_), e.sort(_), u.size || Q(u), f.size || Q(f), g = u.centerX - f.centerX, c = u.centerY - f.centerY, _ === S))
				for (v = 0; v < f.length; v++) u.splice(v, 0, X(f[v], u, v, m, g, c));
			if (p)
				for (p < 0 && (p = -p), u[0].length > f[0].length && Y(f[0], (u[0].length - f[0].length) / 6 | 0), v = f.length; d < p;) u[v].size || P(u[v]), h = (s = W(f, u[v].centerX, u[v].centerY))[0], l = s[1], f[v++] = [h, l, h, l, h, l, h, l], f.totalPoints += 8, d++;
			for (v = 0; v < t.length; v++) o = e[v], i = t[v], (p = o.length - i.length) < 0 ? Y(o, -p / 6 | 0) : 0 < p && Y(i, p / 6 | 0), w && !1 !== a && !i.reversed && reverseSegment(i), (r = y[v] || 0 === y[v] ? y[v] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (y[v] = r = V(i, o, !v || !1 === a), r < 0 && (w = !0, reverseSegment(i), r = -r), T(i, 6 * r)) : "reverse" !== r && (v && r < 0 && reverseSegment(i), T(i, 6 * (r < 0 ? -r : r))) : !w && ("auto" === r && Math.abs(o[0] - i[0]) + Math.abs(o[1] - i[1]) + Math.abs(o[o.length - 2] - i[i.length - 2]) + Math.abs(o[o.length - 1] - i[i.length - 1]) > Math.abs(o[0] - i[i.length - 2]) + Math.abs(o[1] - i[i.length - 1]) + Math.abs(o[o.length - 2] - i[0]) + Math.abs(o[o.length - 1] - i[1]) || r % 2) ? (reverseSegment(i), y[v] = -1, w = !0) : "auto" === r ? y[v] = 0 : "reverse" === r && (y[v] = -1), i.closed !== o.closed && (i.closed = o.closed = !1));
			return x && M("shapeIndex:[" + y.join(",") + "]"), t.shapeIndex = y
		}
	}

	function $(t, e, r, n, a) {
		var o = stringToRawPath(t[0]),
			i = stringToRawPath(t[1]);
		Z(o, i, e || 0 === e ? e : "auto", r, a) && (t[0] = rawPathToString(o), t[1] = rawPathToString(i), "log" !== n && !0 !== n || M('precompile:["' + t[0] + '","' + t[1] + '"]'))
	}

	function aa(t, e) {
		var r, n, a, o, i, s, h, l = 0,
			g = parseFloat(t[0]),
			c = parseFloat(t[1]),
			p = g + "," + c + " ";
		for (r = .5 * e / (.5 * (a = t.length) - 1), n = 0; n < a - 2; n += 2) {
			if (l += r, s = parseFloat(t[n + 2]), h = parseFloat(t[n + 3]), .999999 < l)
				for (i = 1 / (Math.floor(l) + 1), o = 1; .999999 < l;) p += (g + (s - g) * i * o).toFixed(2) + "," + (c + (h - c) * i * o).toFixed(2) + " ", l--, o++;
			p += s + "," + h + " ", g = s, c = h
		}
		return p
	}

	function ba(t) {
		var e = t[0].match(G) || [],
			r = t[1].match(G) || [],
			n = r.length - e.length;
		0 < n ? t[0] = aa(e, n) : t[1] = aa(r, -n)
	}

	function ca(e) {
		return isNaN(e) ? ba : function(t) {
			ba(t), t[1] = function _offsetPoints(t, e) {
				if (!e) return t;
				var r, n, a, o = t.match(G) || [],
					i = o.length,
					s = "";
				for (r = "reverse" === e ? (n = i - 1, -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i, 2), a = 0; a < i; a += 2) s += o[n - 1] + "," + o[n] + " ", n = (n + r) % i;
				return s
			}(t[1], parseInt(e, 10))
		}
	}

	function ea(t, e) {
		for (var r, n, a, o, i, s, h, l, g, c, p, u, f = t.length, d = .2 * (e || 1); - 1 < --f;) {
			for (p = (n = t[f]).isSmooth = n.isSmooth || [0, 0, 0, 0], u = n.smoothData = n.smoothData || [0, 0, 0, 0], p.length = 4, l = n.length - 2, h = 6; h < l; h += 6) a = n[h] - n[h - 2], o = n[h + 1] - n[h - 1], i = n[h + 2] - n[h], s = n[h + 3] - n[h + 1], g = w(o, a), c = w(s, i), (r = Math.abs(g - c) < d) && (u[h - 2] = g, u[h + 2] = c, u[h - 1] = _(a * a + o * o), u[h + 3] = _(i * i + s * s)), p.push(r, r, 0, 0, r, r);
			n[l] === n[0] && n[1 + l] === n[1] && (a = n[0] - n[l - 2], o = n[1] - n[l - 1], i = n[2] - n[0], s = n[3] - n[1], g = w(o, a), c = w(s, i), Math.abs(g - c) < d && (u[l - 2] = g, u[2] = c, u[l - 1] = _(a * a + o * o), u[3] = _(i * i + s * s), p[l - 2] = p[l - 1] = !0))
		}
		return t
	}

	function fa(t) {
		var e = t.trim().split(" ");
		return {
			x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100,
			y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100
		}
	}

	function ia(t, e, r, n) {
		var a, o, i = this._origin,
			s = this._eOrigin,
			h = t[r] - i.x,
			l = t[r + 1] - i.y,
			g = _(h * h + l * l),
			c = w(l, h);
		return h = e[r] - s.x, l = e[r + 1] - s.y, o = function _shortAngle(t) {
			return t !== t % p ? t + (t < 0 ? u : -u) : t
		}(a = w(l, h) - c), !n && I && Math.abs(o + I.ca) < f && (n = I), this._anchorPT = I = {
			_next: this._anchorPT,
			t: t,
			sa: c,
			ca: n && o * n.ca < 0 && Math.abs(o) > d ? a : o,
			sl: g,
			cl: _(h * h + l * l) - g,
			i: r
		}
	}

	function ja(t) {
		r = y(), a = a || r && r.plugins.morphSVG, r && a ? (C = r.utils.toArray, a.prototype._tweenRotation = ia, F = 1) : t && M("Please gsap.registerPlugin(MorphSVGPlugin)")
	}
	var r, C, I, F, a, w = Math.atan2,
		j = Math.cos,
		L = Math.sin,
		_ = Math.sqrt,
		p = Math.PI,
		u = 2 * p,
		f = .3 * p,
		d = .7 * p,
		G = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
		q = /(^[#\.][a-z]|[a-y][a-z])/i,
		H = /[achlmqstvz]/i,
		K = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
		tt = {
			version: "3.12.2",
			name: "morphSVG",
			rawVars: 1,
			register: function register(t, e) {
				r = t, a = e, ja()
			},
			init: function init(t, e, r, n, a) {
				if (F || ja(1), !e) return M("invalid shape"), !1;
				var o, i, s, h, l, g, c, p, u, f, d, _, P, m, v, y, w, x, T, b, S, N;
				if (z(e) && (e = e.call(r, n, t, a)), "string" == typeof e || e.getBBox || e[0]) e = {
					shape: e
				};
				else if ("object" == typeof e) {
					for (i in o = {}, e) o[i] = z(e[i]) && "render" !== i ? e[i].call(r, n, t, a) : e[i];
					e = o
				}
				var A = t.nodeType ? window.getComputedStyle(t) : {},
					R = A.fill + "",
					O = !("none" === R || "0" === (R.match(G) || [])[3] || "evenodd" === A.fillRule),
					j = (e.origin || "50 50").split(",");
				if (l = "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) || "POLYGON" === o, "PATH" !== o && !l && !e.prop) return M("Cannot morph a <" + o + "> element. " + K), !1;
				if (i = "PATH" === o ? "d" : "points", !e.prop && !z(t.setAttribute)) return !1;
				if (h = function _parseShape(t, e, r) {
						var n, a;
						return (!("string" == typeof t) || q.test(t) || (t.match(G) || []).length < 3) && ((n = C(t)[0]) ? (a = (n.nodeName + "").toUpperCase(), e && "PATH" !== a && (n = convertToPath(n, !1), a = "PATH"), t = n.getAttribute("PATH" === a ? "d" : "points") || "", n === r && (t = n.getAttributeNS(null, "data-original") || t)) : (M("WARNING: invalid morph to: " + t), t = !1)), t
					}(e.shape || e.d || e.points || "", "d" === i, t), l && H.test(h)) return M("A <" + o + "> cannot accept path data. " + K), !1;
				if (g = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto", c = e.map || tt.defaultMap, this._prop = e.prop, this._render = e.render || tt.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : tt.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = r, h) {
					if (this._target = t, w = "object" == typeof e.precompile, f = this._prop ? t[this._prop] : t.getAttribute(i), this._prop || t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", f), "d" === i || this._prop) {
						if (f = stringToRawPath(w ? e.precompile[0] : f), d = stringToRawPath(w ? e.precompile[1] : h), !w && !Z(f, d, g, c, O)) return !1;
						for ("log" !== e.precompile && !0 !== e.precompile || M('precompile:["' + rawPathToString(f) + '","' + rawPathToString(d) + '"]'), (S = "linear" !== (e.type || tt.defaultType)) && (f = ea(f, e.smoothTolerance), d = ea(d, e.smoothTolerance), f.size || Q(f), d.size || Q(d), b = fa(j[0]), this._origin = f.origin = {
								x: f.left + b.x * f.width,
								y: f.top + b.y * f.height
							}, j[1] && (b = fa(j[1])), this._eOrigin = {
								x: d.left + b.x * d.width,
								y: d.top + b.y * d.height
							}), this._rawPath = t._gsRawPath = f, P = f.length; - 1 < --P;)
							for (v = f[P], y = d[P], p = v.isSmooth || [], u = y.isSmooth || [], m = v.length, _ = I = 0; _ < m; _ += 2) y[_] === v[_] && y[_ + 1] === v[_ + 1] || (S ? p[_] && u[_] ? (x = v.smoothData, T = y.smoothData, N = _ + (_ === m - 4 ? 7 - m : 5), this._controlPT = {
								_next: this._controlPT,
								i: _,
								j: P,
								l1s: x[_ + 1],
								l1c: T[_ + 1] - x[_ + 1],
								l2s: x[N],
								l2c: T[N] - x[N]
							}, s = this._tweenRotation(v, y, _ + 2), this._tweenRotation(v, y, _, s), this._tweenRotation(v, y, N - 1, s), _ += 4) : this._tweenRotation(v, y, _) : (s = this.add(v, _, v[_], y[_], 0, 0, 0, 0, 0, 1), s = this.add(v, _ + 1, v[_ + 1], y[_ + 1], 0, 0, 0, 0, 0, 1) || s))
					} else s = this.add(t, "setAttribute", t.getAttribute(i) + "", h + "", n, a, 0, ca(g), i);
					S && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1), s = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)), s && (this._props.push("morphSVG"), s.end = h, s.endProp = i)
				}
				return 1
			},
			render: function render(t, e) {
				for (var r, n, a, o, i, s, h, l, g, c, p, u, f = e._rawPath, d = e._controlPT, _ = e._anchorPT, P = e._rnd, m = e._target, v = e._pt; v;) v.r(t, v.d), v = v._next;
				if (1 === t && e._apply)
					for (v = e._pt; v;) v.end && (e._prop ? m[e._prop] = v.end : m.setAttribute(v.endProp, v.end)), v = v._next;
				else if (f) {
					for (; _;) i = _.sa + t * _.ca, o = _.sl + t * _.cl, _.t[_.i] = e._origin.x + j(i) * o, _.t[_.i + 1] = e._origin.y + L(i) * o, _ = _._next;
					for (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; d;) u = (s = d.i) + (s === (a = f[d.j]).length - 4 ? 7 - a.length : 5), i = w(a[u] - a[s + 1], a[u - 1] - a[s]), c = L(i), p = j(i), l = a[s + 2], g = a[s + 3], o = d.l1s + n * d.l1c, a[s] = l - p * o, a[s + 1] = g - c * o, o = d.l2s + n * d.l2c, a[u - 1] = l + p * o, a[u] = g + c * o, d = d._next;
					if (m._gsRawPath = f, e._apply) {
						for (r = "", h = 0; h < f.length; h++)
							for (o = (a = f[h]).length, r += "M" + (a[0] * P | 0) / P + " " + (a[1] * P | 0) / P + " C", s = 2; s < o; s++) r += (a[s] * P | 0) / P + " ";
						e._prop ? m[e._prop] = r : m.setAttribute("d", r)
					}
				}
				e._render && f && e._render.call(e._tween, f, m)
			},
			kill: function kill() {
				this._pt = this._rawPath = 0
			},
			getRawPath: function getRawPath(t) {
				var e, r = (t = m(t) && n.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
				return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), (e = r._gsPath[t]) && !e._dirty ? e : r._gsPath[t] = stringToRawPath(t)) : t ? m(t) ? stringToRawPath(t) : s(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
			},
			stringToRawPath: stringToRawPath,
			rawPathToString: rawPathToString,
			normalizeStrings: function normalizeStrings(t, e, r) {
				var n = r.shapeIndex,
					a = r.map,
					o = [t, e];
				return $(o, n, a), o
			},
			pathFilter: $,
			pointsFilter: ba,
			getTotalSize: Q,
			equalizeSegmentQuantity: Z,
			convertToPath: function convertToPath$1(t, e) {
				return C(t).map(function(t) {
					return convertToPath(t, !1 !== e)
				})
			},
			defaultType: "linear",
			defaultUpdateTarget: !0,
			defaultMap: "size"
		};
	y() && r.registerPlugin(tt), t.MorphSVGPlugin = tt, t.default = tt;
	if (typeof(window) === "undefined" || window !== t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	} else {
		delete t.default
	}
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
(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('https://artemsemkin.com/rhye/html/404.html')) :
		typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
		(global.Modal = factory(global.jQuery, global.Util));
}(this, (function($, Util) {
	'use strict';

	$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
	Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function _objectSpread(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};
			var ownKeys = Object.keys(source);

			if (typeof Object.getOwnPropertySymbols === 'function') {
				ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
					return Object.getOwnPropertyDescriptor(source, sym).enumerable;
				}));
			}

			ownKeys.forEach(function(key) {
				_defineProperty(target, key, source[key]);
			});
		}

		return target;
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.3.1): modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Modal = function($$$1) {
		/**
		 * ------------------------------------------------------------------------
		 * Constants
		 * ------------------------------------------------------------------------
		 */
		var NAME = 'modal';
		var VERSION = '4.3.1';
		var DATA_KEY = 'bs.modal';
		var EVENT_KEY = "." + DATA_KEY;
		var DATA_API_KEY = '.data-api';
		var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
		var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

		var Default = {
			backdrop: true,
			keyboard: true,
			focus: true,
			show: true
		};
		var DefaultType = {
			backdrop: '(boolean|string)',
			keyboard: 'boolean',
			focus: 'boolean',
			show: 'boolean'
		};
		var Event = {
			HIDE: "hide" + EVENT_KEY,
			HIDDEN: "hidden" + EVENT_KEY,
			SHOW: "show" + EVENT_KEY,
			SHOWN: "shown" + EVENT_KEY,
			FOCUSIN: "focusin" + EVENT_KEY,
			RESIZE: "resize" + EVENT_KEY,
			CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
			KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
			MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
			MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
			CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
		};
		var ClassName = {
			SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
			BACKDROP: 'modal-backdrop',
			OPEN: 'modal-open',
			FADE: 'fade',
			SHOW: 'show'
		};
		var Selector = {
			DIALOG: '.modal-dialog',
			DATA_TOGGLE: '[data-toggle="modal"]',
			DATA_DISMISS: '[data-dismiss="modal"]',
			FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
			STICKY_CONTENT: '.sticky-top'
			/**
			 * ------------------------------------------------------------------------
			 * Class Definition
			 * ------------------------------------------------------------------------
			 */

		};

		var Modal =
			/*#__PURE__*/
			function() {
				function Modal(element, config) {
					this._config = this._getConfig(config);
					this._element = element;
					this._dialog = element.querySelector(Selector.DIALOG);
					this._backdrop = null;
					this._isShown = false;
					this._isBodyOverflowing = false;
					this._ignoreBackdropClick = false;
					this._scrollbarWidth = 0;
				} // Getters


				var _proto = Modal.prototype;

				// Public
				_proto.toggle = function toggle(relatedTarget) {
					return this._isShown ? this.hide() : this.show(relatedTarget);
				};

				_proto.show = function show(relatedTarget) {
					var _this = this;

					if (this._isTransitioning || this._isShown) {
						return;
					}

					if ($$$1(this._element).hasClass(ClassName.FADE)) {
						this._isTransitioning = true;
					}

					var showEvent = $$$1.Event(Event.SHOW, {
						relatedTarget: relatedTarget
					});
					$$$1(this._element).trigger(showEvent);

					if (this._isShown || showEvent.isDefaultPrevented()) {
						return;
					}

					this._isShown = true;

					this._checkScrollbar();

					this._setScrollbar();

					this._adjustDialog();

					$$$1(document.body).addClass(ClassName.OPEN);

					this._setEscapeEvent();

					this._setResizeEvent();

					$$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function(event) {
						return _this.hide(event);
					});
					$$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
						$$$1(_this._element).one(Event.MOUSEUP_DISMISS, function(event) {
							if ($$$1(event.target).is(_this._element)) {
								_this._ignoreBackdropClick = true;
							}
						});
					});

					this._showBackdrop(function() {
						return _this._showElement(relatedTarget);
					});
				};

				_proto.hide = function hide(event) {
					var _this2 = this;

					if (event) {
						event.preventDefault();
					}

					if (this._isTransitioning || !this._isShown) {
						return;
					}

					var hideEvent = $$$1.Event(Event.HIDE);
					$$$1(this._element).trigger(hideEvent);

					if (!this._isShown || hideEvent.isDefaultPrevented()) {
						return;
					}

					this._isShown = false;
					var transition = $$$1(this._element).hasClass(ClassName.FADE);

					if (transition) {
						this._isTransitioning = true;
					}

					this._setEscapeEvent();

					this._setResizeEvent();

					$$$1(document).off(Event.FOCUSIN);
					$$$1(this._element).removeClass(ClassName.SHOW);
					$$$1(this._element).off(Event.CLICK_DISMISS);
					$$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

					if (transition) {
						var transitionDuration = Util.getTransitionDurationFromElement(this._element);
						$$$1(this._element).one(Util.TRANSITION_END, function(event) {
							return _this2._hideModal(event);
						}).emulateTransitionEnd(transitionDuration);
					} else {
						this._hideModal();
					}
				};

				_proto.dispose = function dispose() {
					$$$1.removeData(this._element, DATA_KEY);
					$$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
					this._config = null;
					this._element = null;
					this._dialog = null;
					this._backdrop = null;
					this._isShown = null;
					this._isBodyOverflowing = null;
					this._ignoreBackdropClick = null;
					this._scrollbarWidth = null;
				};

				_proto.handleUpdate = function handleUpdate() {
					this._adjustDialog();
				}; // Private


				_proto._getConfig = function _getConfig(config) {
					config = _objectSpread({}, Default, config);
					Util.typeCheckConfig(NAME, config, DefaultType);
					return config;
				};

				_proto._showElement = function _showElement(relatedTarget) {
					var _this3 = this;

					var transition = $$$1(this._element).hasClass(ClassName.FADE);

					if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
						// Don't move modal's DOM position
						document.body.appendChild(this._element);
					}

					this._element.style.display = 'block';

					this._element.removeAttribute('aria-hidden');

					this._element.scrollTop = 0;

					if (transition) {
						Util.reflow(this._element);
					}

					$$$1(this._element).addClass(ClassName.SHOW);

					if (this._config.focus) {
						this._enforceFocus();
					}

					var shownEvent = $$$1.Event(Event.SHOWN, {
						relatedTarget: relatedTarget
					});

					var transitionComplete = function transitionComplete() {
						if (_this3._config.focus) {
							_this3._element.focus();
						}

						_this3._isTransitioning = false;
						$$$1(_this3._element).trigger(shownEvent);
					};

					if (transition) {
						var transitionDuration = Util.getTransitionDurationFromElement(this._element);
						$$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
					} else {
						transitionComplete();
					}
				};

				_proto._enforceFocus = function _enforceFocus() {
					var _this4 = this;

					$$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
						.on(Event.FOCUSIN, function(event) {
							if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
								_this4._element.focus();
							}
						});
				};

				_proto._setEscapeEvent = function _setEscapeEvent() {
					var _this5 = this;

					if (this._isShown && this._config.keyboard) {
						$$$1(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
							if (event.which === ESCAPE_KEYCODE) {
								event.preventDefault();

								_this5.hide();
							}
						});
					} else if (!this._isShown) {
						$$$1(this._element).off(Event.KEYDOWN_DISMISS);
					}
				};

				_proto._setResizeEvent = function _setResizeEvent() {
					var _this6 = this;

					if (this._isShown) {
						$$$1(window).on(Event.RESIZE, function(event) {
							return _this6.handleUpdate(event);
						});
					} else {
						$$$1(window).off(Event.RESIZE);
					}
				};

				_proto._hideModal = function _hideModal() {
					var _this7 = this;

					this._element.style.display = 'none';

					this._element.setAttribute('aria-hidden', true);

					this._isTransitioning = false;

					this._showBackdrop(function() {
						$$$1(document.body).removeClass(ClassName.OPEN);

						_this7._resetAdjustments();

						_this7._resetScrollbar();

						$$$1(_this7._element).trigger(Event.HIDDEN);
					});
				};

				_proto._removeBackdrop = function _removeBackdrop() {
					if (this._backdrop) {
						$$$1(this._backdrop).remove();
						this._backdrop = null;
					}
				};

				_proto._showBackdrop = function _showBackdrop(callback) {
					var _this8 = this;

					var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

					if (this._isShown && this._config.backdrop) {
						this._backdrop = document.createElement('div');
						this._backdrop.className = ClassName.BACKDROP;

						if (animate) {
							this._backdrop.classList.add(animate);
						}

						$$$1(this._backdrop).appendTo(document.body);
						$$$1(this._element).on(Event.CLICK_DISMISS, function(event) {
							if (_this8._ignoreBackdropClick) {
								_this8._ignoreBackdropClick = false;
								return;
							}

							if (event.target !== event.currentTarget) {
								return;
							}

							if (_this8._config.backdrop === 'static') {
								_this8._element.focus();
							} else {
								_this8.hide();
							}
						});

						if (animate) {
							Util.reflow(this._backdrop);
						}

						$$$1(this._backdrop).addClass(ClassName.SHOW);

						if (!callback) {
							return;
						}

						if (!animate) {
							callback();
							return;
						}

						var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
						$$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
					} else if (!this._isShown && this._backdrop) {
						$$$1(this._backdrop).removeClass(ClassName.SHOW);

						var callbackRemove = function callbackRemove() {
							_this8._removeBackdrop();

							if (callback) {
								callback();
							}
						};

						if ($$$1(this._element).hasClass(ClassName.FADE)) {
							var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

							$$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
						} else {
							callbackRemove();
						}
					} else if (callback) {
						callback();
					}
				}; // ----------------------------------------------------------------------
				// the following methods are used to handle overflowing modals
				// todo (fat): these should probably be refactored out of modal.js
				// ----------------------------------------------------------------------


				_proto._adjustDialog = function _adjustDialog() {
					var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

					if (!this._isBodyOverflowing && isModalOverflowing) {
						this._element.style.paddingLeft = this._scrollbarWidth + "px";
					}

					if (this._isBodyOverflowing && !isModalOverflowing) {
						this._element.style.paddingRight = this._scrollbarWidth + "px";
					}
				};

				_proto._resetAdjustments = function _resetAdjustments() {
					this._element.style.paddingLeft = '';
					this._element.style.paddingRight = '';
				};

				_proto._checkScrollbar = function _checkScrollbar() {
					var rect = document.body.getBoundingClientRect();
					this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
					this._scrollbarWidth = this._getScrollbarWidth();
				};

				_proto._setScrollbar = function _setScrollbar() {
					var _this9 = this;

					if (this._isBodyOverflowing) {
						// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
						//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
						var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
						var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

						$$$1(fixedContent).each(function(index, element) {
							var actualPadding = element.style.paddingRight;
							var calculatedPadding = $$$1(element).css('padding-right');
							$$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
						}); // Adjust sticky content margin

						$$$1(stickyContent).each(function(index, element) {
							var actualMargin = element.style.marginRight;
							var calculatedMargin = $$$1(element).css('margin-right');
							$$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
						}); // Adjust body padding

						var actualPadding = document.body.style.paddingRight;
						var calculatedPadding = $$$1(document.body).css('padding-right');
						$$$1(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
					}
				};

				_proto._resetScrollbar = function _resetScrollbar() {
					// Restore fixed content padding
					var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
					$$$1(fixedContent).each(function(index, element) {
						var padding = $$$1(element).data('padding-right');
						$$$1(element).removeData('padding-right');
						element.style.paddingRight = padding ? padding : '';
					}); // Restore sticky content

					var elements = [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT));
					$$$1(elements).each(function(index, element) {
						var margin = $$$1(element).data('margin-right');

						if (typeof margin !== 'undefined') {
							$$$1(element).css('margin-right', margin).removeData('margin-right');
						}
					}); // Restore body padding

					var padding = $$$1(document.body).data('padding-right');
					$$$1(document.body).removeData('padding-right');
					document.body.style.paddingRight = padding ? padding : '';
				};

				_proto._getScrollbarWidth = function _getScrollbarWidth() {
					// thx d.walsh
					var scrollDiv = document.createElement('div');
					scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
					document.body.appendChild(scrollDiv);
					var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
					document.body.removeChild(scrollDiv);
					return scrollbarWidth;
				}; // Static


				Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
					return this.each(function() {
						var data = $$$1(this).data(DATA_KEY);

						var _config = _objectSpread({}, Default, $$$1(this).data(), typeof config === 'object' && config ? config : {});

						if (!data) {
							data = new Modal(this, _config);
							$$$1(this).data(DATA_KEY, data);
						}

						if (typeof config === 'string') {
							if (typeof data[config] === 'undefined') {
								throw new TypeError("No method named \"" + config + "\"");
							}

							data[config](relatedTarget);
						} else if (_config.show) {
							data.show(relatedTarget);
						}
					});
				};

				_createClass(Modal, null, [{
					key: "VERSION",
					get: function get() {
						return VERSION;
					}
				}, {
					key: "Default",
					get: function get() {
						return Default;
					}
				}]);

				return Modal;
			}();
		/**
		 * ------------------------------------------------------------------------
		 * Data Api implementation
		 * ------------------------------------------------------------------------
		 */


		$$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
			var _this10 = this;

			var target;
			var selector = Util.getSelectorFromElement(this);

			if (selector) {
				target = document.querySelector(selector);
			}

			var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $$$1(target).data(), $$$1(this).data());

			if (this.tagName === 'A' || this.tagName === 'AREA') {
				event.preventDefault();
			}

			var $target = $$$1(target).one(Event.SHOW, function(showEvent) {
				if (showEvent.isDefaultPrevented()) {
					// Only register focus restorer if modal will actually get shown
					return;
				}

				$target.one(Event.HIDDEN, function() {
					if ($$$1(_this10).is(':visible')) {
						_this10.focus();
					}
				});
			});

			Modal._jQueryInterface.call($$$1(target), config, this);
		});
		/**
		 * ------------------------------------------------------------------------
		 * jQuery
		 * ------------------------------------------------------------------------
		 */

		$$$1.fn[NAME] = Modal._jQueryInterface;
		$$$1.fn[NAME].Constructor = Modal;

		$$$1.fn[NAME].noConflict = function() {
			$$$1.fn[NAME] = JQUERY_NO_CONFLICT;
			return Modal._jQueryInterface;
		};

		return Modal;
	}($);

	return Modal;

})));

/*!
 * circletype 2.3.1
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
! function(t, n) {
	"object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.CircleType = n() : t.CircleType = n()
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
		}, e.p = "", e(e.s = 28)
	}([function(t, n, e) {
		var r = e(13)("wks"),
			o = e(12),
			i = e(1).Symbol,
			u = "function" == typeof i;
		(t.exports = function(t) {
			return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
		}).store = r
	}, function(t, n) {
		var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = e)
	}, function(t, n) {
		var e = t.exports = {
			version: "2.6.11"
		};
		"number" == typeof __e && (__e = e)
	}, function(t, n, e) {
		var r = e(4),
			o = e(11);
		t.exports = e(6) ? function(t, n, e) {
			return r.f(t, n, o(1, e))
		} : function(t, n, e) {
			return t[n] = e, t
		}
	}, function(t, n, e) {
		var r = e(5),
			o = e(33),
			i = e(34),
			u = Object.defineProperty;
		n.f = e(6) ? Object.defineProperty : function(t, n, e) {
			if (r(t), n = i(n, !0), r(e), o) try {
				return u(t, n, e)
			} catch (t) {}
			if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
			return "value" in e && (t[n] = e.value), t
		}
	}, function(t, n, e) {
		var r = e(10);
		t.exports = function(t) {
			if (!r(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, n, e) {
		t.exports = !e(18)((function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(t, n) {
		var e = {}.hasOwnProperty;
		t.exports = function(t, n) {
			return e.call(t, n)
		}
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
	}, function(t, n) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
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
	}, function(t, n) {
		var e = 0,
			r = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
		}
	}, function(t, n, e) {
		var r = e(2),
			o = e(1),
			i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
		(t.exports = function(t, n) {
			return i[t] || (i[t] = void 0 !== n ? n : {})
		})("versions", []).push({
			version: r.version,
			mode: e(16) ? "pure" : "global",
			copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
		})
	}, function(t, n) {
		t.exports = {}
	}, function(t, n, e) {
		var r = e(13)("keys"),
			o = e(12);
		t.exports = function(t) {
			return r[t] || (r[t] = o(t))
		}
	}, function(t, n) {
		t.exports = !1
	}, function(t, n, e) {
		var r = e(1),
			o = e(2),
			i = e(3),
			u = e(20),
			c = e(21),
			a = function(t, n, e) {
				var f, s, l, p, h = t & a.F,
					v = t & a.G,
					d = t & a.S,
					y = t & a.P,
					m = t & a.B,
					g = v ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
					_ = v ? o : o[n] || (o[n] = {}),
					x = _.prototype || (_.prototype = {});
				for (f in v && (e = n), e) l = ((s = !h && g && void 0 !== g[f]) ? g : e)[f], p = m && s ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, f, l, t & a.U), _[f] != l && i(_, f, p), y && x[f] != l && (x[f] = l)
			};
		r.core = o, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
	}, function(t, n) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		}
	}, function(t, n, e) {
		var r = e(10),
			o = e(1).document,
			i = r(o) && r(o.createElement);
		t.exports = function(t) {
			return i ? o.createElement(t) : {}
		}
	}, function(t, n, e) {
		var r = e(1),
			o = e(3),
			i = e(7),
			u = e(12)("src"),
			c = e(35),
			a = ("" + c).split("toString");
		e(2).inspectSource = function(t) {
			return c.call(t)
		}, (t.exports = function(t, n, e, c) {
			var f = "function" == typeof e;
			f && (i(e, "name") || o(e, "name", n)), t[n] !== e && (f && (i(e, u) || o(e, u, t[n] ? "" + t[n] : a.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)))
		})(Function.prototype, "toString", (function() {
			return "function" == typeof this && this[u] || c.call(this)
		}))
	}, function(t, n, e) {
		var r = e(36);
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
		var r = e(42),
			o = e(9);
		t.exports = function(t) {
			return r(o(t))
		}
	}, function(t, n) {
		var e = {}.toString;
		t.exports = function(t) {
			return e.call(t).slice(8, -1)
		}
	}, function(t, n, e) {
		var r = e(8),
			o = Math.min;
		t.exports = function(t) {
			return t > 0 ? o(r(t), 9007199254740991) : 0
		}
	}, function(t, n) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(t, n, e) {
		var r = e(4).f,
			o = e(7),
			i = e(0)("toStringTag");
		t.exports = function(t, n, e) {
			t && !o(t = e ? t : t.prototype, i) && r(t, i, {
				configurable: !0,
				value: n
			})
		}
	}, function(t, n, e) {
		var r = e(9);
		t.exports = function(t) {
			return Object(r(t))
		}
	}, function(t, n, e) {
		e(29);
		var r = e(54).default;
		t.exports = r
	}, function(t, n, e) {
		e(30), e(47), t.exports = e(2).Array.from
	}, function(t, n, e) {
		"use strict";
		var r = e(31)(!0);
		e(32)(String, "String", (function(t) {
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
	}, function(t, n, e) {
		var r = e(8),
			o = e(9);
		t.exports = function(t) {
			return function(n, e) {
				var i, u, c = String(o(n)),
					a = r(e),
					f = c.length;
				return a < 0 || a >= f ? t ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(16),
			o = e(17),
			i = e(20),
			u = e(3),
			c = e(14),
			a = e(37),
			f = e(26),
			s = e(46),
			l = e(0)("iterator"),
			p = !([].keys && "next" in [].keys()),
			h = function() {
				return this
			};
		t.exports = function(t, n, e, v, d, y, m) {
			a(e, n, v);
			var g, _, x, b = function(t) {
					if (!p && t in S) return S[t];
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
				O = "values" == d,
				j = !1,
				S = t.prototype,
				M = S[l] || S["@@iterator"] || d && S[d],
				T = M || b(d),
				P = d ? O ? b("entries") : T : void 0,
				A = "Array" == n && S.entries || M;
			if (A && (x = s(A.call(new t))) !== Object.prototype && x.next && (f(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)), O && M && "values" !== M.name && (j = !0, T = function() {
					return M.call(this)
				}), r && !m || !p && !j && S[l] || u(S, l, T), c[n] = T, c[w] = h, d)
				if (g = {
						values: O ? T : b("values"),
						keys: y ? T : b("keys"),
						entries: P
					}, m)
					for (_ in g) _ in S || i(S, _, g[_]);
				else o(o.P + o.F * (p || j), n, g);
			return g
		}
	}, function(t, n, e) {
		t.exports = !e(6) && !e(18)((function() {
			return 7 != Object.defineProperty(e(19)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(t, n, e) {
		var r = e(10);
		t.exports = function(t, n) {
			if (!r(t)) return t;
			var e, o;
			if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
			if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
			if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, n, e) {
		t.exports = e(13)("native-function-to-string", Function.toString)
	}, function(t, n) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(38),
			o = e(11),
			i = e(26),
			u = {};
		e(3)(u, e(0)("iterator"), (function() {
			return this
		})), t.exports = function(t, n, e) {
			t.prototype = r(u, {
				next: o(1, e)
			}), i(t, n + " Iterator")
		}
	}, function(t, n, e) {
		var r = e(5),
			o = e(39),
			i = e(25),
			u = e(15)("IE_PROTO"),
			c = function() {},
			a = function() {
				var t, n = e(19)("iframe"),
					r = i.length;
				for (n.style.display = "none", e(45).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[i[r]];
				return a()
			};
		t.exports = Object.create || function(t, n) {
			var e;
			return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = a(), void 0 === n ? e : o(e, n)
		}
	}, function(t, n, e) {
		var r = e(4),
			o = e(5),
			i = e(40);
		t.exports = e(6) ? Object.defineProperties : function(t, n) {
			o(t);
			for (var e, u = i(n), c = u.length, a = 0; c > a;) r.f(t, e = u[a++], n[e]);
			return t
		}
	}, function(t, n, e) {
		var r = e(41),
			o = e(25);
		t.exports = Object.keys || function(t) {
			return r(t, o)
		}
	}, function(t, n, e) {
		var r = e(7),
			o = e(22),
			i = e(43)(!1),
			u = e(15)("IE_PROTO");
		t.exports = function(t, n) {
			var e, c = o(t),
				a = 0,
				f = [];
			for (e in c) e != u && r(c, e) && f.push(e);
			for (; n.length > a;) r(c, e = n[a++]) && (~i(f, e) || f.push(e));
			return f
		}
	}, function(t, n, e) {
		var r = e(23);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == r(t) ? t.split("") : Object(t)
		}
	}, function(t, n, e) {
		var r = e(22),
			o = e(24),
			i = e(44);
		t.exports = function(t) {
			return function(n, e, u) {
				var c, a = r(n),
					f = o(a.length),
					s = i(u, f);
				if (t && e != e) {
					for (; f > s;)
						if ((c = a[s++]) != c) return !0
				} else
					for (; f > s; s++)
						if ((t || s in a) && a[s] === e) return t || s || 0;
				return !t && -1
			}
		}
	}, function(t, n, e) {
		var r = e(8),
			o = Math.max,
			i = Math.min;
		t.exports = function(t, n) {
			return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
		}
	}, function(t, n, e) {
		var r = e(1).document;
		t.exports = r && r.documentElement
	}, function(t, n, e) {
		var r = e(7),
			o = e(27),
			i = e(15)("IE_PROTO"),
			u = Object.prototype;
		t.exports = Object.getPrototypeOf || function(t) {
			return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(21),
			o = e(17),
			i = e(27),
			u = e(48),
			c = e(49),
			a = e(24),
			f = e(50),
			s = e(51);
		o(o.S + o.F * !e(53)((function(t) {
			Array.from(t)
		})), "Array", {
			from: function(t) {
				var n, e, o, l, p = i(t),
					h = "function" == typeof this ? this : Array,
					v = arguments.length,
					d = v > 1 ? arguments[1] : void 0,
					y = void 0 !== d,
					m = 0,
					g = s(p);
				if (y && (d = r(d, v > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && c(g))
					for (e = new h(n = a(p.length)); n > m; m++) f(e, m, y ? d(p[m], m) : p[m]);
				else
					for (l = g.call(p), e = new h; !(o = l.next()).done; m++) f(e, m, y ? u(l, d, [o.value, m], !0) : o.value);
				return e.length = m, e
			}
		})
	}, function(t, n, e) {
		var r = e(5);
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
		"use strict";
		var r = e(4),
			o = e(11);
		t.exports = function(t, n, e) {
			n in t ? r.f(t, n, o(0, e)) : t[n] = e
		}
	}, function(t, n, e) {
		var r = e(52),
			o = e(0)("iterator"),
			i = e(14);
		t.exports = e(2).getIteratorMethod = function(t) {
			if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
		}
	}, function(t, n, e) {
		var r = e(23),
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
	}, function(t, n, e) {
		"use strict";
		e.r(n);
		var r = function(t) {
			var n = t.getBoundingClientRect();
			return {
				height: n.height,
				left: n.left + window.pageXOffset,
				top: n.top + window.pageYOffset,
				width: n.width
			}
		};

		function o(t) {
			return function(t) {
				if (Array.isArray(t)) {
					for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
					return e
				}
			}(t) || function(t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
			}(t) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}
		var i = Math.PI / 180,
			u = function(t) {
				return t * i
			},
			c = function(t, n) {
				return t * (1 - Math.cos(u(n / 2)))
			},
			a = 180 / Math.PI,
			f = function(t, n) {
				return t.reduce((function(t, e) {
					var r = e.width,
						o = r / n * a;
					return {
						"θ": t.θ + o,
						rotations: t.rotations.concat([t.θ + o / 2])
					}
				}), {
					"θ": 0,
					rotations: []
				})
			};

		function s(t, n) {
			for (var e = 0; e < n.length; e++) {
				var r = n[e];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}
		var l = Math.PI,
			p = Math.max,
			h = Math.min,
			v = function() {
				function t(n, e) {
					! function(t, n) {
						if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
					}(this, t), this.element = n, this.originalHTML = this.element.innerHTML;
					var i = document.createElement("div"),
						u = document.createDocumentFragment();
					i.setAttribute("aria-label", n.innerText), i.style.position = "relative", this.container = i, this._letters = function(t, n) {
						var e = document.createElement("span"),
							r = t.innerText.trim();
						return (n ? n(r) : o(r)).map((function(t) {
							var n = e.cloneNode();
							return n.insertAdjacentHTML("afterbegin", " " === t ? "&nbsp;" : t), n
						}))
					}(n, e), this._letters.forEach((function(t) {
						return u.appendChild(t)
					})), i.appendChild(u), this.element.innerHTML = "", this.element.appendChild(i);
					var c = window.getComputedStyle(this.element),
						a = c.fontSize,
						f = c.lineHeight;
					this._fontSize = parseFloat(a), this._lineHeight = parseFloat(f) || this._fontSize, this._metrics = this._letters.map(r);
					var s = this._metrics.reduce((function(t, n) {
						return t + n.width
					}), 0);
					this._minRadius = s / l / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
				}
				var n, e, i;
				return n = t, (e = [{
					key: "radius",
					value: function(t) {
						return void 0 !== t ? (this._radius = p(this._minRadius, t), this._invalidate(), this) : this._radius
					}
				}, {
					key: "dir",
					value: function(t) {
						return void 0 !== t ? (this._dir = t, this._invalidate(), this) : this._dir
					}
				}, {
					key: "forceWidth",
					value: function(t) {
						return void 0 !== t ? (this._forceWidth = t, this._invalidate(), this) : this._forceWidth
					}
				}, {
					key: "forceHeight",
					value: function(t) {
						return void 0 !== t ? (this._forceHeight = t, this._invalidate(), this) : this._forceHeight
					}
				}, {
					key: "refresh",
					value: function() {
						return this._invalidate()
					}
				}, {
					key: "destroy",
					value: function() {
						return this.element.innerHTML = this.originalHTML, this
					}
				}, {
					key: "_invalidate",
					value: function() {
						var t = this;
						return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame((function() {
							t._layout()
						})), this
					}
				}, {
					key: "_layout",
					value: function() {
						var t = this,
							n = this._radius,
							e = this._dir,
							r = -1 === e ? -n + this._lineHeight : n,
							o = "center ".concat(r / this._fontSize, "em"),
							i = n - this._lineHeight,
							a = f(this._metrics, i),
							s = a.rotations,
							l = a.θ;
						if (this._letters.forEach((function(n, r) {
								var i = n.style,
									u = (-.5 * l + s[r]) * e,
									c = -.5 * t._metrics[r].width / t._fontSize,
									a = "translateX(".concat(c, "em) rotate(").concat(u, "deg)");
								i.position = "absolute", i.bottom = -1 === e ? 0 : "auto", i.left = "50%", i.transform = a, i.transformOrigin = o, i.webkitTransform = a, i.webkitTransformOrigin = o
							})), this._forceHeight) {
							var p = l > 180 ? c(n, l) : c(i, l) + this._lineHeight;
							this.container.style.height = "".concat(p / this._fontSize, "em")
						}
						if (this._forceWidth) {
							var v = function(t, n) {
								return 2 * t * Math.sin(u(n / 2))
							}(n, h(180, l));
							this.container.style.width = "".concat(v / this._fontSize, "em")
						}
						return this
					}
				}]) && s(n.prototype, e), i && s(n, i), t
			}();
		n.default = v
	}])
}));
! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("smooth-scrollbar")) : "function" == typeof define && define.amd ? define(["smooth-scrollbar"], e) : "object" == typeof exports ? exports.EdgeEasingPlugin = e(require("smooth-scrollbar")) : t.EdgeEasingPlugin = e(t.Scrollbar)
}(window, function(t) {
	return function(t) {
		var e = {};

		function n(r) {
			if (e[r]) return e[r].exports;
			var o = e[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}
		return n.m = t, n.c = e, n.d = function(t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: r
			})
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.t = function(t, e) {
			if (1 & e && (t = n(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var o in t) n.d(r, o, function(e) {
					return t[e]
				}.bind(null, o));
			return r
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 1)
	}([function(e, n) {
		e.exports = t
	}, function(t, e, n) {
		t.exports = n(2)
	}, function(t, e, n) {
		"use strict";
		n.r(e);
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
		var r = function(t, e) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
					})(t, e)
			},
			o = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e._remainMomentum = {
						x: 0,
						y: 0
					}, e
				}
				return function(t, e) {
					function n() {
						this.constructor = t
					}
					r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
				}(e, t), e.prototype.transformDelta = function(t) {
					var e = this.scrollbar,
						n = e.limit,
						r = e.offset,
						o = this._remainMomentum.x + t.x,
						u = this._remainMomentum.y + t.y;
					return this.scrollbar.setMomentum(Math.max(-r.x, Math.min(o, n.x - r.x)), Math.max(-r.y, Math.min(u, n.y - r.y))), {
						x: 0,
						y: 0
					}
				}, e.prototype.onRender = function(t) {
					Object.assign(this._remainMomentum, t)
				}, e.pluginName = "edgeEasing", e
			}(n(0).ScrollbarPlugin);
		e.default = o
	}]).default
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

! function(t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, o) {
			var n, s = "$()." + i + '("' + e + '")';
			return t.each(function(t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, o);
				n = void 0 === n ? l : n
			}), void 0 !== n ? n : t
		}

		function h(t, e) {
			t.each(function(t, o) {
				var n = a.data(o, i);
				n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function(t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, o(a))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var n = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function() {} : function(t) {
			s.error(t)
		};
	return o(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				o = i[t] = i[t] || [];
			return o.indexOf(e) == -1 && o.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				o = i[t] = i[t] || {};
			return o[e] = !0, this
		}
	}, e.off = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var o = i.indexOf(e);
			return o != -1 && i.splice(o, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n],
					r = o && o[s];
				r && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function o(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
	}

	function n() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var n = o(e);
			r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
		}
	}

	function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = o(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
					c = s[f],
					m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				z = a.borderTopWidth + a.borderBottomWidth,
				I = d && r,
				x = t(s.width);
			x !== !1 && (a.width = x + (I ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function(t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var t = function() {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i],
				n = o + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function(e, i) {
		return e[t](i)
	}
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
	var i = {};
	i.extend = function(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function(t, e) {
		return (t % e + e) % e
	};
	var o = Array.prototype.slice;
	i.makeArray = function(t) {
		if (Array.isArray(t)) return t;
		if (null === t || void 0 === t) return [];
		var e = "object" == typeof t && "number" == typeof t.length;
		return e ? o.call(t) : [t]
	}, i.removeFrom = function(t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function(t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function(t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function(t, o) {
		t = i.makeArray(t);
		var n = [];
		return t.forEach(function(t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);
				e(t, o) && n.push(t);
				for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
			}
		}), n
	}, i.debounceMethod = function(t, e, i) {
		i = i || 100;
		var o = t.prototype[e],
			n = e + "Timeout";
		t.prototype[e] = function() {
			var t = this[n];
			clearTimeout(t);
			var e = arguments,
				s = this;
			this[n] = setTimeout(function() {
				o.apply(s, e), delete s[n]
			}, i)
		}
	}, i.docReady = function(t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var n = t.console;
	return i.htmlInit = function(e, o) {
		i.docReady(function() {
			var s = i.toDashed(o),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function(t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, o, u)
			})
		})
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function n(t) {
		return t.replace(/([A-Z])/g, function(t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = o.prototype = Object.create(t.prototype);
	d.constructor = o, d._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function() {
		this.size = e(this.element)
	}, d.css = function(t) {
		var e = this.element.style;
		for (var i in t) {
			var o = h[i] || i;
			e[o] = t[i]
		}
	}, d.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = t[e ? "left" : "right"],
			n = t[i ? "top" : "bottom"],
			s = parseFloat(o),
			r = parseFloat(n),
			a = this.layout.size;
		o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
	}, d.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[n];
		e[s] = this.getXValue(a), e[r] = "";
		var u = o ? "paddingTop" : "paddingBottom",
			h = o ? "top" : "bottom",
			d = o ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function(t, e) {
		this.getPosition();
		var i = this.position.x,
			o = this.position.y,
			n = t == this.position.x && e == this.position.y;
		if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
		var s = t - i,
			r = e - o,
			a = {};
		a.transform = this.getTranslate(s, r), this.transition({
			to: a,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function(t, e) {
		var i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop");
		return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, d._nonTransition = function(t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function(t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var o = this.element.offsetHeight;
			o = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + n(a);
	d.enableTransition = function() {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function(t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function(t) {
		if (t.target === this.element) {
			var e = this._transn,
				o = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];
				n.call(this), delete e.onEnd[o]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function(t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function() {
		this.css(c)
	}, d.stagger = function(t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function() {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function() {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function(t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function() {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function() {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, o
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
		return e(t, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
	"use strict";

	function s(t, e) {
		var i = o.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
		var n = ++l;
		this.element.outlayerGUID = n, f[n] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			o = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var n = m[o] || 1;
		return i * n
	}
	var u = t.console,
		h = t.jQuery,
		d = function() {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var c = s.prototype;
	o.extend(c, e.prototype), c.option = function(t) {
		o.extend(this.options, t)
	}, c._getOption = function(t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function(t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n],
				r = new i(s, this);
			o.push(r)
		}
		return o
	}, c._filterFindItemElements = function(t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function() {
		return this.items.map(function(t) {
			return t.element
		})
	}, c.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function() {
		this.getSize()
	}, c.getSize = function() {
		this.size = i(this.element)
	}, c._getMeasurement = function(t, e) {
		var o, n = this.options[t];
		n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
	}, c.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function(t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function(t) {
				var o = this._getItemLayoutPosition(t);
				o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, c._processLayoutQueue = function(t) {
		this.updateStagger(), t.forEach(function(t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function() {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function(t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function() {
		this.resizeContainer()
	}, c.resizeContainer = function() {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function(t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e])
		}

		function o() {
			r++, r == s && i()
		}
		var n = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function(e) {
			e.once(t, o)
		})
	}, c.dispatchEvent = function(t, e, i) {
		var o = e ? [e].concat(i) : i;
		if (this.emitEvent(t, o), h)
			if (this.$element = this.$element || h(this.element), e) {
				var n = h.Event(e);
				n.type = t, this.$element.trigger(n, i)
			} else this.$element.trigger(t, i)
	}, c.ignore = function(t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function(t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function(t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function(t) {
		t = this._find(t), t && t.forEach(function(t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function(t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, c._manageStamps = function() {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			o = this._boundingRect,
			n = i(t),
			s = {
				left: e.left - o.left - n.marginLeft,
				top: e.top - o.top - n.marginTop,
				right: o.right - e.right - n.marginRight,
				bottom: o.bottom - e.bottom - n.marginBottom
			};
		return s
	}, c.handleEvent = o.handleEvent, c.bindResize = function() {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function() {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function() {
		this.resize()
	}, o.debounceMethod(s, "onresize", 100), c.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function() {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function(t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function(t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function(t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function(t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function(t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function(t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function(t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function(t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function(t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function(t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function(t) {
		t = o.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function(t, e) {
		var i = r(s);
		return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		o = i._create;
	i._create = function() {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function() {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var o = e[i];
				this.sortData[i] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function() {
		n.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var o = i.prototype,
		n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return n.forEach(function(t) {
		o[t] = function() {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), o.needsVerticalResizeLayout = function() {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, o._getMeasurement = function() {
		this.isotope._getMeasurement.apply(this, arguments)
	}, o.getColumnWidth = function() {
		this.getSegmentSize("column", "Width")
	}, o.getRowHeight = function() {
		this.getSegmentSize("row", "Height")
	}, o.getSegmentSize = function(t, e) {
		var i = t + e,
			o = "outer" + e;
		if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();
			this[i] = n && n[o] || this.isotope.size["inner" + e]
		}
	}, o.getFirstItemSize = function() {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, o.layout = function() {
		this.isotope.layout.apply(this.isotope, arguments)
	}, o.getSize = function() {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function(t, e) {
		function n() {
			i.apply(this, arguments)
		}
		return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var o = i.prototype;
	return o._resetLayout = function() {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, o.measureColumns = function() {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var o = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			s = n / o,
			r = o - n % o,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, o.getContainerWidth = function() {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			o = e(i);
		this.containerWidth = o && o.innerWidth
	}, o._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && e < 1 ? "round" : "ceil",
			o = Math[i](t.size.outerWidth / this.columnWidth);
		o = Math.min(o, this.cols);
		for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
				x: this.columnWidth * s.col,
				y: s.y
			}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
		return r
	}, o._getTopColPosition = function(t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, o._getTopColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, o._getColGroupY = function(t, e) {
		if (e < 2) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, o._getHorizontalColPosition = function(t, e) {
		var i = this.horizontalColIndex % this.cols,
			o = t > 1 && i + t > this.cols;
		i = o ? 0 : i;
		var n = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, o._manageStamp = function(t) {
		var i = e(t),
			o = this._getElementOffset(t),
			n = this._getOption("originLeft"),
			s = n ? o.left : o.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, o._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, o._getContainerFitWidth = function() {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, o.needsResizeLayout = function() {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
	"use strict";
	var i = t.create("masonry"),
		o = i.prototype,
		n = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
	var r = o.measureColumns;
	o.measureColumns = function() {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = o._getOption;
	return o._getOption = function(t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function() {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var o = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
	}, i._getContainerSize = function() {
		return {
			height: this.maxY
		}
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function() {
		this.y = 0
	}, i._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function() {
		return {
			height: this.y
		}
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
	function a(t, e) {
		return function(i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n],
					r = i.sortData[s],
					a = o.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function(t) {
			return t.trim()
		} : function(t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function() {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function() {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function() {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];
			o.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function(t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function() {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function() {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function(t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function(t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function() {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function() {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}
		var e, i, o, n = this;
		this.once("layoutComplete", function() {
			e = !0, t()
		}), this.once("hideComplete", function() {
			i = !0, t()
		}), this.once("revealComplete", function() {
			o = !0, t()
		})
	}, l._filter = function(t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
			}
		}
		return {
			matches: i,
			needReveal: o,
			needHide: n
		}
	}, l._getFilterTest = function(t) {
		return u && this.options.isJQueryFiltering ? function(e) {
			return u(e.element).is(t);
		} : "function" == typeof t ? function(e) {
			return t(e.element)
		} : function(e) {
			return o(e.element, t)
		}
	}, l.updateSortData = function(t) {
		var e;
		t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function() {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function(t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];
			o.updateSortData()
		}
	};
	var f = function() {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				o = i[0],
				n = o.match(/^\[(.+)\]$/),
				s = n && n[1],
				r = e(s, o),
				a = d.sortDataParsers[i[1]];
			return t = a ? function(t) {
				return t && a(r(t))
			} : function(t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function(e) {
				return e.getAttribute(t)
			} : function(t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function(t) {
			return parseInt(t, 10)
		},
		parseFloat: function(t) {
			return parseFloat(t)
		}
	}, l._sort = function() {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function(t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function() {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function() {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function(t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function(t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function() {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function() {
		return this._mode().needsResizeLayout()
	}, l.appended = function(t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function(t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function(t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function(t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, o, n = e.length;
			for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
			var s = this._filter(e).matches;
			for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function(t) {
		t = n.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];
			n.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function() {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function(t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var o = t.apply(this, e);
		return this.options.transitionDuration = i, o
	}, l.getFilteredItemElements = function() {
		return this.filteredItems.map(function(t) {
			return t.element
		})
	}, d
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
(function($) {
	$.fn.getAllAttributes = function() {
		var
			elem = this,
			attr = {};

		if (elem && elem.length) $.each(elem.get(0).attributes, function(v, n) {
			n = n.nodeName || n.name;
			v = elem.attr(n); // relay on $.fn.attr, it makes some filtering and checks
			if (v != undefined && v !== false) attr[n] = v
		})

		return attr;
	}
})(jQuery);

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
! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("smooth-scrollbar")) : "function" == typeof define && define.amd ? define(["smooth-scrollbar"], e) : "object" == typeof exports ? exports.OverscrollPlugin = e(require("smooth-scrollbar")) : t.OverscrollPlugin = e(t.Scrollbar)
}(window, function(t) {
	return function(t) {
		var e = {};

		function o(r) {
			if (e[r]) return e[r].exports;
			var n = e[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
		}
		return o.m = t, o.c = e, o.d = function(t, e, r) {
			o.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: r
			})
		}, o.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, o.t = function(t, e) {
			if (1 & e && (t = o(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (o.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var n in t) o.d(r, n, function(e) {
					return t[e]
				}.bind(null, n));
			return r
		}, o.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return o.d(e, "a", e), e
		}, o.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, o.p = "", o(o.s = 1)
	}([function(e, o) {
		e.exports = t
	}, function(t, e, o) {
		t.exports = o(2)
	}, function(t, e, o) {
		"use strict";
		o.r(e);
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
		var r = function(t, e) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(t, e)
			},
			n = o(0),
			u = o.n(n),
			i = function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return function(t, e) {
					function o() {
						this.constructor = t
					}
					r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
				}(e, t), e.prototype.transformDelta = function(t) {
					return this.options.lock ? {
						x: 0,
						y: 0
					} : t
				}, e.pluginName = "lockscroll", e.defaultOptions = {
					lock: !1
				}, e
			}(n.ScrollbarPlugin);
		e.default = i, u.a.use(i)
	}]).default
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
! function(t, o) {
	"object" == typeof exports && "object" == typeof module ? module.exports = o(require("smooth-scrollbar")) : "function" == typeof define && define.amd ? define(["smooth-scrollbar"], o) : "object" == typeof exports ? exports.SoftscrollPlugin = o(require("smooth-scrollbar")) : t.SoftscrollPlugin = o(t.Scrollbar)
}(window, (function(t) {
	return function(t) {
		var o = {};

		function r(e) {
			if (o[e]) return o[e].exports;
			var l = o[e] = {
				i: e,
				l: !1,
				exports: {}
			};
			return t[e].call(l.exports, l, l.exports, r), l.l = !0, l.exports
		}
		return r.m = t, r.c = o, r.d = function(t, o, e) {
			r.o(t, o) || Object.defineProperty(t, o, {
				enumerable: !0,
				get: e
			})
		}, r.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, r.t = function(t, o) {
			if (1 & o && (t = r(t)), 8 & o) return t;
			if (4 & o && "object" == typeof t && t && t.__esModule) return t;
			var e = Object.create(null);
			if (r.r(e), Object.defineProperty(e, "default", {
					enumerable: !0,
					value: t
				}), 2 & o && "string" != typeof t)
				for (var l in t) r.d(e, l, function(o) {
					return t[o]
				}.bind(null, l));
			return e
		}, r.n = function(t) {
			var o = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return r.d(o, "a", o), o
		}, r.o = function(t, o) {
			return Object.prototype.hasOwnProperty.call(t, o)
		}, r.p = "", r(r.s = 1)
	}([function(o, r) {
		o.exports = t
	}, function(t, o, r) {
		t.exports = r(2)
	}, function(t, o, r) {
		"use strict";
		r.r(o);
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
		var e = function(t, o) {
				return (e = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, o) {
						t.__proto__ = o
					} || function(t, o) {
						for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
					})(t, o)
			},
			l = function(t) {
				function o() {
					var o = null !== t && t.apply(this, arguments) || this;
					return o.lockX = 0, o.lockY = 0, o
				}
				return function(t, o) {
					function r() {
						this.constructor = t
					}
					e(t, o), t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r)
				}(o, t), o.prototype.transformDelta = function(t) {
					var o = t.x > 0 ? 1 : -1,
						r = t.y > 0 ? 1 : -1;
					return o === this.lockX || r === this.lockY ? {
						x: 0,
						y: 0
					} : (this.lockX = 0, this.lockY = 0, t)
				}, o.prototype.onRender = function(t) {
					var o = t.x,
						r = t.y;
					r < 0 && !this.lockY && Math.abs(r) >= this.scrollbar.scrollTop && (this.scrollbar.setMomentum(0, -this.scrollbar.scrollTop), this.lockY = -1), o < 0 && !this.lockX && Math.abs(o) >= this.scrollbar.scrollLeft && (this.scrollbar.setMomentum(-this.scrollbar.scrollLeft, 0), this.lockX = -1), o > 0 && !this.lockX && Math.abs(o) >= this.scrollbar.limit.x - this.scrollbar.scrollLeft && (this.scrollbar.setMomentum(this.scrollbar.limit.x - this.scrollbar.scrollLeft, 0), this.lockX = 1), r > 0 && !this.lockY && Math.abs(r) >= this.scrollbar.limit.y - this.scrollbar.scrollTop && (this.scrollbar.setMomentum(0, this.scrollbar.limit.y - this.scrollbar.scrollTop), this.lockY = 1), 0 === r && (this.lockY = 0), 0 === o && (this.lockX = 0)
				}, o.pluginName = "softscroll", o
			}(r(0).ScrollbarPlugin);
		o.default = l
	}]).default
}));
/**
 * Swiper 6.8.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 23, 2021
 */

! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
	"use strict";

	function e(e, t) {
		for (var a = 0; a < t.length; a++) {
			var i = t[a];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}

	function t() {
		return (t = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var a = arguments[t];
				for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
			}
			return e
		}).apply(this, arguments)
	}

	function a(e) {
		return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
	}

	function i(e, t) {
		void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(s) {
			void 0 === e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
		}))
	}
	var s = {
		body: {},
		addEventListener: function() {},
		removeEventListener: function() {},
		activeElement: {
			blur: function() {},
			nodeName: ""
		},
		querySelector: function() {
			return null
		},
		querySelectorAll: function() {
			return []
		},
		getElementById: function() {
			return null
		},
		createEvent: function() {
			return {
				initEvent: function() {}
			}
		},
		createElement: function() {
			return {
				children: [],
				childNodes: [],
				style: {},
				setAttribute: function() {},
				getElementsByTagName: function() {
					return []
				}
			}
		},
		createElementNS: function() {
			return {}
		},
		importNode: function() {
			return null
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		}
	};

	function r() {
		var e = "undefined" != typeof document ? document : {};
		return i(e, s), e
	}
	var n = {
		document: s,
		navigator: {
			userAgent: ""
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState: function() {},
			pushState: function() {},
			go: function() {},
			back: function() {}
		},
		CustomEvent: function() {
			return this
		},
		addEventListener: function() {},
		removeEventListener: function() {},
		getComputedStyle: function() {
			return {
				getPropertyValue: function() {
					return ""
				}
			}
		},
		Image: function() {},
		Date: function() {},
		screen: {},
		setTimeout: function() {},
		clearTimeout: function() {},
		matchMedia: function() {
			return {}
		},
		requestAnimationFrame: function(e) {
			return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
		},
		cancelAnimationFrame: function(e) {
			"undefined" != typeof setTimeout && clearTimeout(e)
		}
	};

	function l() {
		var e = "undefined" != typeof window ? window : {};
		return i(e, n), e
	}

	function o(e) {
		return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
		} catch (e) {
			return !1
		}
	}

	function u(e, t, a) {
		return (u = p() ? Reflect.construct : function(e, t, a) {
			var i = [null];
			i.push.apply(i, t);
			var s = new(Function.bind.apply(e, i));
			return a && d(s, a.prototype), s
		}).apply(null, arguments)
	}

	function c(e) {
		var t = "function" == typeof Map ? new Map : void 0;
		return (c = function(e) {
			if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
			var a;
			if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== t) {
				if (t.has(e)) return t.get(e);
				t.set(e, i)
			}

			function i() {
				return u(e, arguments, o(this).constructor)
			}
			return i.prototype = Object.create(e.prototype, {
				constructor: {
					value: i,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), d(i, e)
		})(e)
	}
	var h = function(e) {
		var t, a;

		function i(t) {
			var a, i, s;
			return a = e.call.apply(e, [this].concat(t)) || this, i = function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
				get: function() {
					return s
				},
				set: function(e) {
					s.__proto__ = e
				}
			}), a
		}
		return a = e, (t = i).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, i
	}(c(Array));

	function v(e) {
		void 0 === e && (e = []);
		var t = [];
		return e.forEach((function(e) {
			Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e)
		})), t
	}

	function f(e, t) {
		return Array.prototype.filter.call(e, t)
	}

	function m(e, t) {
		var a = l(),
			i = r(),
			s = [];
		if (!t && e instanceof h) return e;
		if (!e) return new h(s);
		if ("string" == typeof e) {
			var n = e.trim();
			if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
				var o = "div";
				0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
				var d = i.createElement(o);
				d.innerHTML = n;
				for (var p = 0; p < d.childNodes.length; p += 1) s.push(d.childNodes[p])
			} else s = function(e, t) {
				if ("string" != typeof e) return [e];
				for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) a.push(i[s]);
				return a
			}(e.trim(), t || i)
		} else if (e.nodeType || e === a || e === i) s.push(e);
		else if (Array.isArray(e)) {
			if (e instanceof h) return e;
			s = e
		}
		return new h(function(e) {
			for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
			return t
		}(s))
	}
	m.fn = h.prototype;
	var g, b, w, y = {
		addClass: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			var i = v(t.map((function(e) {
				return e.split(" ")
			})));
			return this.forEach((function(e) {
				var t;
				(t = e.classList).add.apply(t, i)
			})), this
		},
		removeClass: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			var i = v(t.map((function(e) {
				return e.split(" ")
			})));
			return this.forEach((function(e) {
				var t;
				(t = e.classList).remove.apply(t, i)
			})), this
		},
		hasClass: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			var i = v(t.map((function(e) {
				return e.split(" ")
			})));
			return f(this, (function(e) {
				return i.filter((function(t) {
					return e.classList.contains(t)
				})).length > 0
			})).length > 0
		},
		toggleClass: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			var i = v(t.map((function(e) {
				return e.split(" ")
			})));
			this.forEach((function(e) {
				i.forEach((function(t) {
					e.classList.toggle(t)
				}))
			}))
		},
		attr: function(e, t) {
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var a = 0; a < this.length; a += 1)
				if (2 === arguments.length) this[a].setAttribute(e, t);
				else
					for (var i in e) this[a][i] = e[i], this[a].setAttribute(i, e[i]);
			return this
		},
		removeAttr: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		transform: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
			return this
		},
		transition: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
			return this
		},
		on: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			var i = t[0],
				s = t[1],
				r = t[2],
				n = t[3];

			function l(e) {
				var t = e.target;
				if (t) {
					var a = e.target.dom7EventData || [];
					if (a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)) r.apply(t, a);
					else
						for (var i = m(t).parents(), n = 0; n < i.length; n += 1) m(i[n]).is(s) && r.apply(i[n], a)
				}
			}

			function o(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
			}
			"function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);
			for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
				var c = this[u];
				if (s)
					for (d = 0; d < p.length; d += 1) {
						var h = p[d];
						c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
							listener: r,
							proxyListener: l
						}), c.addEventListener(h, l, n)
					} else
						for (d = 0; d < p.length; d += 1) {
							var v = p[d];
							c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
								listener: r,
								proxyListener: o
							}), c.addEventListener(v, o, n)
						}
			}
			return this
		},
		off: function() {
			for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			var i = t[0],
				s = t[1],
				r = t[2],
				n = t[3];
			"function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);
			for (var l = i.split(" "), o = 0; o < l.length; o += 1)
				for (var d = l[o], p = 0; p < this.length; p += 1) {
					var u = this[p],
						c = void 0;
					if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length)
						for (var h = c.length - 1; h >= 0; h -= 1) {
							var v = c[h];
							r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1))
						}
				}
			return this
		},
		trigger: function() {
			for (var e = l(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
			for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
				for (var o = s[n], d = 0; d < this.length; d += 1) {
					var p = this[d];
					if (e.CustomEvent) {
						var u = new e.CustomEvent(o, {
							detail: r,
							bubbles: !0,
							cancelable: !0
						});
						p.dom7EventData = a.filter((function(e, t) {
							return t > 0
						})), p.dispatchEvent(u), p.dom7EventData = [], delete p.dom7EventData
					}
				}
			return this
		},
		transitionEnd: function(e) {
			var t = this;
			return e && t.on("transitionend", (function a(i) {
				i.target === this && (e.call(this, i), t.off("transitionend", a))
			})), this
		},
		outerWidth: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		styles: function() {
			var e = l();
			return this[0] ? e.getComputedStyle(this[0], null) : {}
		},
		offset: function() {
			if (this.length > 0) {
				var e = l(),
					t = r(),
					a = this[0],
					i = a.getBoundingClientRect(),
					s = t.body,
					n = a.clientTop || s.clientTop || 0,
					o = a.clientLeft || s.clientLeft || 0,
					d = a === e ? e.scrollY : a.scrollTop,
					p = a === e ? e.scrollX : a.scrollLeft;
				return {
					top: i.top + d - n,
					left: i.left + p - o
				}
			}
			return null
		},
		css: function(e, t) {
			var a, i = l();
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (var s in e) this[a].style[s] = e[s];
					return this
				}
				if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this
			}
			return this
		},
		each: function(e) {
			return e ? (this.forEach((function(t, a) {
				e.apply(t, [t, a])
			})), this) : this
		},
		html: function(e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : null;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function(e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function(e) {
			var t, a, i = l(),
				s = r(),
				n = this[0];
			if (!n || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (n.matches) return n.matches(e);
				if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
				if (n.msMatchesSelector) return n.msMatchesSelector(e);
				for (t = m(e), a = 0; a < t.length; a += 1)
					if (t[a] === n) return !0;
				return !1
			}
			if (e === s) return n === s;
			if (e === i) return n === i;
			if (e.nodeType || e instanceof h) {
				for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
					if (t[a] === n) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function(e) {
			if (void 0 === e) return this;
			var t = this.length;
			if (e > t - 1) return m([]);
			if (e < 0) {
				var a = t + e;
				return m(a < 0 ? [] : [this[a]])
			}
			return m([this[e]])
		},
		append: function() {
			for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
				e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
				for (var i = 0; i < this.length; i += 1)
					if ("string" == typeof e) {
						var s = t.createElement("div");
						for (s.innerHTML = e; s.firstChild;) this[i].appendChild(s.firstChild)
					} else if (e instanceof h)
					for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
				else this[i].appendChild(e)
			}
			return this
		},
		prepend: function(e) {
			var t, a, i = r();
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var s = i.createElement("div");
					for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) this[t].insertBefore(s.childNodes[a], this[t].childNodes[0])
				} else if (e instanceof h)
				for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
			else this[t].insertBefore(e, this[t].childNodes[0]);
			return this
		},
		next: function(e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([])
		},
		nextAll: function(e) {
			var t = [],
				a = this[0];
			if (!a) return m([]);
			for (; a.nextElementSibling;) {
				var i = a.nextElementSibling;
				e ? m(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return m(t)
		},
		prev: function(e) {
			if (this.length > 0) {
				var t = this[0];
				return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([])
			}
			return m([])
		},
		prevAll: function(e) {
			var t = [],
				a = this[0];
			if (!a) return m([]);
			for (; a.previousElementSibling;) {
				var i = a.previousElementSibling;
				e ? m(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return m(t)
		},
		parent: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
			return m(t)
		},
		parents: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].parentNode; i;) e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
			return m(t)
		},
		closest: function(e) {
			var t = this;
			return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
			return m(t)
		},
		children: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].children, s = 0; s < i.length; s += 1) e && !m(i[s]).is(e) || t.push(i[s]);
			return m(t)
		},
		filter: function(e) {
			return m(f(this, e))
		},
		remove: function() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		}
	};

	function E(e, t) {
		return void 0 === t && (t = 0), setTimeout(e, t)
	}

	function x() {
		return Date.now()
	}

	function T(e, t) {
		void 0 === t && (t = "x");
		var a, i, s, r = l(),
			n = function(e) {
				var t, a = l();
				return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
			}(e);
		return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(e) {
			return e.replace(",", ".")
		})).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
	}

	function C(e) {
		return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
	}

	function S(e) {
		return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
	}

	function M() {
		for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = 1; a < arguments.length; a += 1) {
			var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
			if (null != i && !S(i))
				for (var s = Object.keys(Object(i)).filter((function(e) {
						return t.indexOf(e) < 0
					})), r = 0, n = s.length; r < n; r += 1) {
					var l = s[r],
						o = Object.getOwnPropertyDescriptor(i, l);
					void 0 !== o && o.enumerable && (C(e[l]) && C(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : M(e[l], i[l]) : !C(e[l]) && C(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : M(e[l], i[l])) : e[l] = i[l])
				}
		}
		return e
	}

	function z(e, t) {
		Object.keys(t).forEach((function(a) {
			C(t[a]) && Object.keys(t[a]).forEach((function(i) {
				"function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e))
			})), e[a] = t[a]
		}))
	}

	function P(e) {
		return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
	}

	function k(e, t, a, i) {
		var s = r();
		return a && Object.keys(i).forEach((function(a) {
			if (!t[a] && !0 === t.auto) {
				var r = s.createElement("div");
				r.className = i[a], e.append(r), t[a] = r
			}
		})), t
	}

	function $() {
		return g || (g = function() {
			var e = l(),
				t = r();
			return {
				touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
				pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
				observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
				passiveListener: function() {
					var t = !1;
					try {
						var a = Object.defineProperty({}, "passive", {
							get: function() {
								t = !0
							}
						});
						e.addEventListener("testPassiveListener", null, a)
					} catch (e) {}
					return t
				}(),
				gestures: "ongesturestart" in e
			}
		}()), g
	}

	function L(e) {
		return void 0 === e && (e = {}), b || (b = function(e) {
			var t = (void 0 === e ? {} : e).userAgent,
				a = $(),
				i = l(),
				s = i.navigator.platform,
				r = t || i.navigator.userAgent,
				n = {
					ios: !1,
					android: !1
				},
				o = i.screen.width,
				d = i.screen.height,
				p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
				u = r.match(/(iPad).*OS\s([\d_]+)/),
				c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
				h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
				v = "Win32" === s,
				f = "MacIntel" === s;
			return !u && f && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), p && !v && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n
		}(e)), b
	}

	function I() {
		return w || (w = function() {
			var e, t = l();
			return {
				isEdge: !!t.navigator.userAgent.match(/Edge/g),
				isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
				isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
			}
		}()), w
	}
	Object.keys(y).forEach((function(e) {
		Object.defineProperty(m.fn, e, {
			value: y[e],
			writable: !0
		})
	}));
	var O = {
			name: "resize",
			create: function() {
				var e = this;
				M(e, {
					resize: {
						observer: null,
						createObserver: function() {
							e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function(t) {
								var a = e.width,
									i = e.height,
									s = a,
									r = i;
								t.forEach((function(t) {
									var a = t.contentBoxSize,
										i = t.contentRect,
										n = t.target;
									n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize)
								})), s === a && r === i || e.resize.resizeHandler()
							})), e.resize.observer.observe(e.el))
						},
						removeObserver: function() {
							e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
						},
						resizeHandler: function() {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function() {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function(e) {
					var t = l();
					e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
				},
				destroy: function(e) {
					var t = l();
					e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
				}
			}
		},
		A = {
			attach: function(e, t) {
				void 0 === t && (t = {});
				var a = l(),
					i = this,
					s = new(a.MutationObserver || a.WebkitMutationObserver)((function(e) {
						if (1 !== e.length) {
							var t = function() {
								i.emit("observerUpdate", e[0])
							};
							a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
						} else i.emit("observerUpdate", e[0])
					}));
				s.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), i.observer.observers.push(s)
			},
			init: function() {
				var e = this;
				if (e.support.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
					e.observer.attach(e.$el[0], {
						childList: e.params.observeSlideChildren
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach((function(e) {
					e.disconnect()
				})), this.observer.observers = []
			}
		},
		D = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function() {
				z(this, {
					observer: t({}, A, {
						observers: []
					})
				})
			},
			on: {
				init: function(e) {
					e.observer.init()
				},
				destroy: function(e) {
					e.observer.destroy()
				}
			}
		};

	function N(e) {
		var t = this,
			a = r(),
			i = l(),
			s = t.touchEventsData,
			n = t.params,
			o = t.touches;
		if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
			var d = e;
			d.originalEvent && (d = d.originalEvent);
			var p = m(d.target);
			if (("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) && (s.isTouchEvent = "touchstart" === d.type, (s.isTouchEvent || !("which" in d) || 3 !== d.which) && !(!s.isTouchEvent && "button" in d && d.button > 0 || s.isTouched && s.isMoved))) {
				!!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0]));
				var u = n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass,
					c = !(!d.target || !d.target.shadowRoot);
				if (n.noSwiping && (c ? function(e, t) {
						return void 0 === t && (t = this),
							function t(a) {
								return a && a !== r() && a !== l() ? (a.assignedSlot && (a = a.assignedSlot), a.closest(e) || t(a.getRootNode().host)) : null
							}(t)
					}(u, d.target) : p.closest(u)[0])) t.allowClick = !0;
				else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
					o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
					var h = o.currentX,
						v = o.currentY,
						f = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
						g = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
					if (f && (h <= g || h >= i.innerWidth - g)) {
						if ("prevent" !== f) return;
						e.preventDefault()
					}
					if (M(s, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), o.startX = h, o.startY = v, s.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
						var b = !0;
						p.is(s.focusableElements) && (b = !1), a.activeElement && m(a.activeElement).is(s.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
						var w = b && t.allowTouchMove && n.touchStartPreventDefault;
						!n.touchStartForcePreventDefault && !w || p[0].isContentEditable || d.preventDefault()
					}
					t.emit("touchStart", d)
				}
			}
		}
	}

	function G(e) {
		var t = r(),
			a = this,
			i = a.touchEventsData,
			s = a.params,
			n = a.touches,
			l = a.rtlTranslate;
		if (a.enabled) {
			var o = e;
			if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
				if (!i.isTouchEvent || "touchmove" === o.type) {
					var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
						p = "touchmove" === o.type ? d.pageX : o.pageX,
						u = "touchmove" === o.type ? d.pageY : o.pageY;
					if (o.preventedByNestedSwiper) return n.startX = p, void(n.startY = u);
					if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (M(n, {
						startX: p,
						startY: u,
						currentX: p,
						currentY: u
					}), i.touchStartTime = x()));
					if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
						if (a.isVertical()) {
							if (u < n.startY && a.translate <= a.maxTranslate() || u > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
						} else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
					if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.focusableElements)) return i.isMoved = !0, void(a.allowClick = !1);
					if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
						n.currentX = p, n.currentY = u;
						var c = n.currentX - n.startX,
							h = n.currentY - n.startY;
						if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold)) {
							var v;
							if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
							if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
							else if (i.startMoving) {
								a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
								var f = a.isHorizontal() ? c : h;
								n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
								var g = !0,
									b = s.resistanceRatio;
								if (s.touchReleaseOnEdges && (b = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, b))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, b))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
									if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
									if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
								}
								s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
									position: n[a.isHorizontal() ? "startX" : "startY"],
									time: i.touchStartTime
								}), i.velocities.push({
									position: n[a.isHorizontal() ? "currentX" : "currentY"],
									time: x()
								})), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
							}
						}
					}
				}
			} else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o)
		}
	}

	function B(e) {
		var t = this,
			a = t.touchEventsData,
			i = t.params,
			s = t.touches,
			r = t.rtlTranslate,
			n = t.$wrapperEl,
			l = t.slidesGrid,
			o = t.snapGrid;
		if (t.enabled) {
			var d = e;
			if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
			i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
			var p, u = x(),
				c = u - a.touchStartTime;
			if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x(), E((function() {
					t.destroyed || (t.allowClick = !0)
				})), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
			if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode)
				if (i.freeMode) {
					if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
					if (p > -t.maxTranslate()) return void(t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
					if (i.freeModeMomentum) {
						if (a.velocities.length > 1) {
							var h = a.velocities.pop(),
								v = a.velocities.pop(),
								f = h.position - v.position,
								m = h.time - v.time;
							t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - h.time > 300) && (t.velocity = 0)
						} else t.velocity = 0;
						t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
						var g = 1e3 * i.freeModeMomentumRatio,
							b = t.velocity * g,
							w = t.translate + b;
						r && (w = -w);
						var y, T, C = !1,
							S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
						if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);
						else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), y = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);
						else if (i.freeModeSticky) {
							for (var M, z = 0; z < o.length; z += 1)
								if (o[z] > -w) {
									M = z;
									break
								} w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1])
						}
						if (T && t.once("transitionEnd", (function() {
								t.loopFix()
							})), 0 !== t.velocity) {
							if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
								var P = Math.abs((r ? -w : w) - t.translate),
									k = t.slidesSizesGrid[t.activeIndex];
								g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed
							}
						} else if (i.freeModeSticky) return void t.slideToClosest();
						i.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function() {
							t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout((function() {
								t.setTranslate(y), n.transitionEnd((function() {
									t && !t.destroyed && t.transitionEnd()
								}))
							}), 0))
						}))) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function() {
							t && !t.destroyed && t.transitionEnd()
						})))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses()
					} else {
						if (i.freeModeSticky) return void t.slideToClosest();
						i.freeMode && t.emit("_freeModeNoMomentumRelease")
					}(!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
				} else {
					for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
						var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
						void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && ($ = I, L = l[I + O] - l[I]) : p >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2])
					}
					var A = (p - l[$]) / L,
						D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
					if (c > i.longSwipesMs) {
						if (!i.longSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($))
					} else {
						if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
						t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($))
					}
				}
		}
	}

	function H() {
		var e = this,
			t = e.params,
			a = e.el;
		if (!a || 0 !== a.offsetWidth) {
			t.breakpoints && e.setBreakpoint();
			var i = e.allowSlideNext,
				s = e.allowSlidePrev,
				r = e.snapGrid;
			e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
		}
	}

	function R(e) {
		var t = this;
		t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
	}

	function X() {
		var e = this,
			t = e.wrapperEl,
			a = e.rtlTranslate;
		if (e.enabled) {
			e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
			var i = e.maxTranslate() - e.minTranslate();
			(0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
		}
	}
	var Y = !1;

	function V() {}
	var W = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			resizeObserver: !1,
			nested: !1,
			createElements: !1,
			enabled: !0,
			focusableElements: "input, select, option, textarea, button, video, label",
			width: null,
			height: null,
			preventInteractionOnTransition: !1,
			userAgent: null,
			url: null,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			breakpointsBase: "window",
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			loopPreventsSlide: !0,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0,
			_emitClasses: !1
		},
		F = {
			modular: {
				useParams: function(e) {
					var t = this;
					t.modules && Object.keys(t.modules).forEach((function(a) {
						var i = t.modules[a];
						i.params && M(e, i.params)
					}))
				},
				useModules: function(e) {
					void 0 === e && (e = {});
					var t = this;
					t.modules && Object.keys(t.modules).forEach((function(a) {
						var i = t.modules[a],
							s = e[a] || {};
						i.on && t.on && Object.keys(i.on).forEach((function(e) {
							t.on(e, i.on[e])
						})), i.create && i.create.bind(t)(s)
					}))
				}
			},
			eventsEmitter: {
				on: function(e, t, a) {
					var i = this;
					if ("function" != typeof t) return i;
					var s = a ? "unshift" : "push";
					return e.split(" ").forEach((function(e) {
						i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
					})), i
				},
				once: function(e, t, a) {
					var i = this;
					if ("function" != typeof t) return i;

					function s() {
						i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
						for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
						t.apply(i, r)
					}
					return s.__emitterProxy = t, i.on(e, s, a)
				},
				onAny: function(e, t) {
					var a = this;
					if ("function" != typeof e) return a;
					var i = t ? "unshift" : "push";
					return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a
				},
				offAny: function(e) {
					var t = this;
					if (!t.eventsAnyListeners) return t;
					var a = t.eventsAnyListeners.indexOf(e);
					return a >= 0 && t.eventsAnyListeners.splice(a, 1), t
				},
				off: function(e, t) {
					var a = this;
					return a.eventsListeners ? (e.split(" ").forEach((function(e) {
						void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach((function(i, s) {
							(i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1)
						}))
					})), a) : a
				},
				emit: function() {
					var e, t, a, i = this;
					if (!i.eventsListeners) return i;
					for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
					"string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
					var l = Array.isArray(e) ? e : e.split(" ");
					return l.forEach((function(e) {
						i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((function(i) {
							i.apply(a, [e].concat(t))
						})), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach((function(e) {
							e.apply(a, t)
						}))
					})), i
				}
			},
			update: {
				updateSize: function() {
					var e, t, a = this,
						i = a.$el;
					e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), M(a, {
						width: e,
						height: t,
						size: a.isHorizontal() ? e : t
					}))
				},
				updateSlides: function() {
					var e = this;

					function t(t) {
						return e.isHorizontal() ? t : {
							width: "height",
							"margin-top": "margin-left",
							"margin-bottom ": "margin-right",
							"margin-left": "margin-top",
							"margin-right": "margin-bottom",
							"padding-left": "padding-top",
							"padding-right": "padding-bottom",
							marginRight: "marginBottom"
						} [t]
					}

					function a(e, a) {
						return parseFloat(e.getPropertyValue(t(a)) || 0)
					}
					var i = e.params,
						s = e.$wrapperEl,
						r = e.size,
						n = e.rtlTranslate,
						l = e.wrongRTL,
						o = e.virtual && i.virtual.enabled,
						d = o ? e.virtual.slides.length : e.slides.length,
						p = s.children("." + e.params.slideClass),
						u = o ? e.virtual.slides.length : p.length,
						c = [],
						h = [],
						v = [],
						f = i.slidesOffsetBefore;
					"function" == typeof f && (f = i.slidesOffsetBefore.call(e));
					var m = i.slidesOffsetAfter;
					"function" == typeof m && (m = i.slidesOffsetAfter.call(e));
					var g = e.snapGrid.length,
						b = e.slidesGrid.length,
						w = i.spaceBetween,
						y = -f,
						E = 0,
						x = 0;
					if (void 0 !== r) {
						var T, C;
						"string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, n ? p.css({
							marginLeft: "",
							marginBottom: "",
							marginTop: ""
						}) : p.css({
							marginRight: "",
							marginBottom: "",
							marginTop: ""
						}), i.slidesPerColumn > 1 && (T = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
						for (var S, z, P, k = i.slidesPerColumn, $ = T / k, L = Math.floor(u / i.slidesPerColumn), I = 0; I < u; I += 1) {
							C = 0;
							var O = p.eq(I);
							if (i.slidesPerColumn > 1) {
								var A = void 0,
									D = void 0,
									N = void 0;
								if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
									var G = Math.floor(I / (i.slidesPerGroup * i.slidesPerColumn)),
										B = I - i.slidesPerColumn * i.slidesPerGroup * G,
										H = 0 === G ? i.slidesPerGroup : Math.min(Math.ceil((u - G * k * i.slidesPerGroup) / k), i.slidesPerGroup);
									A = (D = B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) + N * T / k, O.css({
										"-webkit-box-ordinal-group": A,
										"-moz-box-ordinal-group": A,
										"-ms-flex-order": A,
										"-webkit-order": A,
										order: A
									})
								} else "column" === i.slidesPerColumnFill ? (N = I - (D = Math.floor(I / k)) * k, (D > L || D === L && N === k - 1) && (N += 1) >= k && (N = 0, D += 1)) : D = I - (N = Math.floor(I / $)) * $;
								O.css(t("margin-top"), 0 !== N ? i.spaceBetween && i.spaceBetween + "px" : "")
							}
							if ("none" !== O.css("display")) {
								if ("auto" === i.slidesPerView) {
									var R = getComputedStyle(O[0]),
										X = O[0].style.transform,
										Y = O[0].style.webkitTransform;
									if (X && (O[0].style.transform = "none"), Y && (O[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
									else {
										var V = a(R, "width"),
											W = a(R, "padding-left"),
											F = a(R, "padding-right"),
											_ = a(R, "margin-left"),
											q = a(R, "margin-right"),
											j = R.getPropertyValue("box-sizing");
										if (j && "border-box" === j) C = V + _ + q;
										else {
											var U = O[0],
												K = U.clientWidth;
											C = V + W + F + _ + q + (U.offsetWidth - K)
										}
									}
									X && (O[0].style.transform = X), Y && (O[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C))
								} else C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[I] && (p[I].style[t("width")] = C + "px");
								p[I] && (p[I].swiperSlideSize = C), v.push(C), i.centeredSlides ? (y = y + C / 2 + E / 2 + w, 0 === E && 0 !== I && (y = y - r / 2 - w), 0 === I && (y = y - r / 2 - w), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), x % i.slidesPerGroup == 0 && c.push(y), h.push(y)) : (i.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && c.push(y), h.push(y), y = y + C + w), e.virtualSize += C + w, E = C, x += 1
							}
						}
						if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
								width: e.virtualSize + i.spaceBetween + "px"
							}), i.setWrapperSize) s.css(((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", z));
						if (i.slidesPerColumn > 1)
							if (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, s.css(((P = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", P)), i.centeredSlides) {
								S = [];
								for (var Z = 0; Z < c.length; Z += 1) {
									var J = c[Z];
									i.roundLengths && (J = Math.floor(J)), c[Z] < e.virtualSize + c[0] && S.push(J)
								}
								c = S
							} if (!i.centeredSlides) {
							S = [];
							for (var Q = 0; Q < c.length; Q += 1) {
								var ee = c[Q];
								i.roundLengths && (ee = Math.floor(ee)), c[Q] <= e.virtualSize - r && S.push(ee)
							}
							c = S, Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r)
						}
						if (0 === c.length && (c = [0]), 0 !== i.spaceBetween) {
							var te, ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
							p.filter((function(e, t) {
								return !i.cssMode || t !== p.length - 1
							})).css(((te = {})[ae] = w + "px", te))
						}
						if (i.centeredSlides && i.centeredSlidesBounds) {
							var ie = 0;
							v.forEach((function(e) {
								ie += e + (i.spaceBetween ? i.spaceBetween : 0)
							}));
							var se = (ie -= i.spaceBetween) - r;
							c = c.map((function(e) {
								return e < 0 ? -f : e > se ? se + m : e
							}))
						}
						if (i.centerInsufficientSlides) {
							var re = 0;
							if (v.forEach((function(e) {
									re += e + (i.spaceBetween ? i.spaceBetween : 0)
								})), (re -= i.spaceBetween) < r) {
								var ne = (r - re) / 2;
								c.forEach((function(e, t) {
									c[t] = e - ne
								})), h.forEach((function(e, t) {
									h[t] = e + ne
								}))
							}
						}
						M(e, {
							slides: p,
							snapGrid: c,
							slidesGrid: h,
							slidesSizesGrid: v
						}), u !== d && e.emit("slidesLengthChange"), c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
					}
				},
				updateAutoHeight: function(e) {
					var t, a = this,
						i = [],
						s = a.virtual && a.params.virtual.enabled,
						r = 0;
					"number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
					var n = function(e) {
						return s ? a.slides.filter((function(t) {
							return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
						}))[0] : a.slides.eq(e)[0]
					};
					if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
						if (a.params.centeredSlides) a.visibleSlides.each((function(e) {
							i.push(e)
						}));
						else
							for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
								var l = a.activeIndex + t;
								if (l > a.slides.length && !s) break;
								i.push(n(l))
							} else i.push(n(a.activeIndex));
					for (t = 0; t < i.length; t += 1)
						if (void 0 !== i[t]) {
							var o = i[t].offsetHeight;
							r = o > r ? o : r
						} r && a.$wrapperEl.css("height", r + "px")
				},
				updateSlidesOffset: function() {
					for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
				},
				updateSlidesProgress: function(e) {
					void 0 === e && (e = this && this.translate || 0);
					var t = this,
						a = t.params,
						i = t.slides,
						s = t.rtlTranslate;
					if (0 !== i.length) {
						void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
						var r = -e;
						s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
						for (var n = 0; n < i.length; n += 1) {
							var l = i[n],
								o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
							if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
								var d = -(r - l.swiperSlideOffset),
									p = d + t.slidesSizesGrid[n];
								(d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
							}
							l.progress = s ? -o : o
						}
						t.visibleSlides = m(t.visibleSlides)
					}
				},
				updateProgress: function(e) {
					var t = this;
					if (void 0 === e) {
						var a = t.rtlTranslate ? -1 : 1;
						e = t && t.translate && t.translate * a || 0
					}
					var i = t.params,
						s = t.maxTranslate() - t.minTranslate(),
						r = t.progress,
						n = t.isBeginning,
						l = t.isEnd,
						o = n,
						d = l;
					0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), M(t, {
						progress: r,
						isBeginning: n,
						isEnd: l
					}), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r)
				},
				updateSlidesClasses: function() {
					var e, t = this,
						a = t.slides,
						i = t.params,
						s = t.$wrapperEl,
						r = t.activeIndex,
						n = t.realIndex,
						l = t.virtual && i.virtual.enabled;
					a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
					var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
					i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
					var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
					i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
				},
				updateActiveIndex: function(e) {
					var t, a = this,
						i = a.rtlTranslate ? a.translate : -a.translate,
						s = a.slidesGrid,
						r = a.snapGrid,
						n = a.params,
						l = a.activeIndex,
						o = a.realIndex,
						d = a.snapIndex,
						p = e;
					if (void 0 === p) {
						for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
						n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
					}
					if (r.indexOf(i) >= 0) t = r.indexOf(i);
					else {
						var c = Math.min(n.slidesPerGroupSkip, p);
						t = c + Math.floor((p - c) / n.slidesPerGroup)
					}
					if (t >= r.length && (t = r.length - 1), p !== l) {
						var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
						M(a, {
							snapIndex: t,
							realIndex: h,
							previousIndex: l,
							activeIndex: p
						}), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange")
					} else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
				},
				updateClickedSlide: function(e) {
					var t, a = this,
						i = a.params,
						s = m(e.target).closest("." + i.slideClass)[0],
						r = !1;
					if (s)
						for (var n = 0; n < a.slides.length; n += 1)
							if (a.slides[n] === s) {
								r = !0, t = n;
								break
							} if (!s || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
					a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(m(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
				}
			},
			translate: {
				getTranslate: function(e) {
					void 0 === e && (e = this.isHorizontal() ? "x" : "y");
					var t = this,
						a = t.params,
						i = t.rtlTranslate,
						s = t.translate,
						r = t.$wrapperEl;
					if (a.virtualTranslate) return i ? -s : s;
					if (a.cssMode) return s;
					var n = T(r[0], e);
					return i && (n = -n), n || 0
				},
				setTranslate: function(e, t) {
					var a = this,
						i = a.rtlTranslate,
						s = a.params,
						r = a.$wrapperEl,
						n = a.wrapperEl,
						l = a.progress,
						o = 0,
						d = 0;
					a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
					var p = a.maxTranslate() - a.minTranslate();
					(0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
				},
				minTranslate: function() {
					return -this.snapGrid[0]
				},
				maxTranslate: function() {
					return -this.snapGrid[this.snapGrid.length - 1]
				},
				translateTo: function(e, t, a, i, s) {
					void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
					var r = this,
						n = r.params,
						l = r.wrapperEl;
					if (r.animating && n.preventInteractionOnTransition) return !1;
					var o, d = r.minTranslate(),
						p = r.maxTranslate();
					if (o = i && e > d ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
						var u, c = r.isHorizontal();
						if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;
						else if (l.scrollTo) l.scrollTo(((u = {})[c ? "left" : "top"] = -o, u.behavior = "smooth", u));
						else l[c ? "scrollLeft" : "scrollTop"] = -o;
						return !0
					}
					return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
						r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"))
					}), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
				}
			},
			transition: {
				setTransition: function(e, t) {
					var a = this;
					a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
				},
				transitionStart: function(e, t) {
					void 0 === e && (e = !0);
					var a = this,
						i = a.activeIndex,
						s = a.params,
						r = a.previousIndex;
					if (!s.cssMode) {
						s.autoHeight && a.updateAutoHeight();
						var n = t;
						if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
							if ("reset" === n) return void a.emit("slideResetTransitionStart");
							a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
						}
					}
				},
				transitionEnd: function(e, t) {
					void 0 === e && (e = !0);
					var a = this,
						i = a.activeIndex,
						s = a.previousIndex,
						r = a.params;
					if (a.animating = !1, !r.cssMode) {
						a.setTransition(0);
						var n = t;
						if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
							if ("reset" === n) return void a.emit("slideResetTransitionEnd");
							a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
						}
					}
				}
			},
			slide: {
				slideTo: function(e, t, a, i, s) {
					if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
					if ("string" == typeof e) {
						var r = parseInt(e, 10);
						if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
						e = r
					}
					var n = this,
						l = e;
					l < 0 && (l = 0);
					var o = n.params,
						d = n.snapGrid,
						p = n.slidesGrid,
						u = n.previousIndex,
						c = n.activeIndex,
						h = n.rtlTranslate,
						v = n.wrapperEl,
						f = n.enabled;
					if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
					var m = Math.min(n.params.slidesPerGroupSkip, l),
						g = m + Math.floor((l - m) / n.params.slidesPerGroup);
					g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
					var b, w = -d[g];
					if (n.updateProgress(w), o.normalizeSlideIndex)
						for (var y = 0; y < p.length; y += 1) {
							var E = -Math.floor(100 * w),
								x = Math.floor(100 * p[y]),
								T = Math.floor(100 * p[y + 1]);
							void 0 !== p[y + 1] ? E >= x && E < T - (T - x) / 2 ? l = y : E >= x && E < T && (l = y + 1) : E >= x && (l = y)
						}
					if (n.initialized && l !== c) {
						if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
						if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (c || 0) !== l) return !1
					}
					if (b = l > c ? "next" : l < c ? "prev" : "reset", h && -w === n.translate || !h && w === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;
					if (o.cssMode) {
						var C, S = n.isHorizontal(),
							M = -w;
						if (h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t) v[S ? "scrollLeft" : "scrollTop"] = M;
						else if (v.scrollTo) v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C));
						else v[S ? "scrollLeft" : "scrollTop"] = M;
						return !0
					}
					return 0 === t ? (n.setTransition(0), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.transitionEnd(a, b)) : (n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
						n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, b))
					}), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
				},
				slideToLoop: function(e, t, a, i) {
					void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
					var s = this,
						r = e;
					return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i)
				},
				slideNext: function(e, t, a) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var i = this,
						s = i.params,
						r = i.animating;
					if (!i.enabled) return i;
					var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
					if (s.loop) {
						if (r && s.loopPreventsSlide) return !1;
						i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
					}
					return i.slideTo(i.activeIndex + n, e, t, a)
				},
				slidePrev: function(e, t, a) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var i = this,
						s = i.params,
						r = i.animating,
						n = i.snapGrid,
						l = i.slidesGrid,
						o = i.rtlTranslate;
					if (!i.enabled) return i;
					if (s.loop) {
						if (r && s.loopPreventsSlide) return !1;
						i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
					}

					function d(e) {
						return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
					}
					var p, u = d(o ? i.translate : -i.translate),
						c = n.map((function(e) {
							return d(e)
						})),
						h = n[c.indexOf(u) - 1];
					return void 0 === h && s.cssMode && n.forEach((function(e) {
						!h && u >= e && (h = e)
					})), void 0 !== h && (p = l.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
				},
				slideReset: function(e, t, a) {
					return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
				},
				slideToClosest: function(e, t, a, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
					var s = this,
						r = s.activeIndex,
						n = Math.min(s.params.slidesPerGroupSkip, r),
						l = n + Math.floor((r - n) / s.params.slidesPerGroup),
						o = s.rtlTranslate ? s.translate : -s.translate;
					if (o >= s.snapGrid[l]) {
						var d = s.snapGrid[l];
						o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup)
					} else {
						var p = s.snapGrid[l - 1];
						o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup)
					}
					return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a)
				},
				slideToClickedSlide: function() {
					var e, t = this,
						a = t.params,
						i = t.$wrapperEl,
						s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
						r = t.clickedIndex;
					if (a.loop) {
						if (t.animating) return;
						e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E((function() {
							t.slideTo(r)
						}))) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E((function() {
							t.slideTo(r)
						}))) : t.slideTo(r)
					} else t.slideTo(r)
				}
			},
			loop: {
				loopCreate: function() {
					var e = this,
						t = r(),
						a = e.params,
						i = e.$wrapperEl;
					i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
					var s = i.children("." + a.slideClass);
					if (a.loopFillGroupWithBlank) {
						var n = a.slidesPerGroup - s.length % a.slidesPerGroup;
						if (n !== a.slidesPerGroup) {
							for (var l = 0; l < n; l += 1) {
								var o = m(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
								i.append(o)
							}
							s = i.children("." + a.slideClass)
						}
					}
					"auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
					var d = [],
						p = [];
					s.each((function(t, a) {
						var i = m(t);
						a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a)
					}));
					for (var u = 0; u < p.length; u += 1) i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
					for (var c = d.length - 1; c >= 0; c -= 1) i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass))
				},
				loopFix: function() {
					var e = this;
					e.emit("beforeLoopFix");
					var t, a = e.activeIndex,
						i = e.slides,
						s = e.loopedSlides,
						r = e.allowSlidePrev,
						n = e.allowSlideNext,
						l = e.snapGrid,
						o = e.rtlTranslate;
					e.allowSlidePrev = !0, e.allowSlideNext = !0;
					var d = -l[a] - e.getTranslate();
					if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
					else if (a >= i.length - s) {
						t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
					}
					e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix")
				},
				loopDestroy: function() {
					var e = this,
						t = e.$wrapperEl,
						a = e.params,
						i = e.slides;
					t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
				}
			},
			grabCursor: {
				setGrabCursor: function(e) {
					var t = this;
					if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
						var a = t.el;
						a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
					}
				},
				unsetGrabCursor: function() {
					var e = this;
					e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
				}
			},
			manipulation: {
				appendSlide: function(e) {
					var t = this,
						a = t.$wrapperEl,
						i = t.params;
					if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
						for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
					else a.append(e);
					i.loop && t.loopCreate(), i.observer && t.support.observer || t.update()
				},
				prependSlide: function(e) {
					var t = this,
						a = t.params,
						i = t.$wrapperEl,
						s = t.activeIndex;
					a.loop && t.loopDestroy();
					var r = s + 1;
					if ("object" == typeof e && "length" in e) {
						for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
						r = s + e.length
					} else i.prepend(e);
					a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1)
				},
				addSlide: function(e, t) {
					var a = this,
						i = a.$wrapperEl,
						s = a.params,
						r = a.activeIndex;
					s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
					var n = a.slides.length;
					if (e <= 0) a.prependSlide(t);
					else if (e >= n) a.appendSlide(t);
					else {
						for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
							var p = a.slides.eq(d);
							p.remove(), o.unshift(p)
						}
						if ("object" == typeof t && "length" in t) {
							for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
							l = r > e ? r + t.length : r
						} else i.append(t);
						for (var c = 0; c < o.length; c += 1) i.append(o[c]);
						s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1)
					}
				},
				removeSlide: function(e) {
					var t = this,
						a = t.params,
						i = t.$wrapperEl,
						s = t.activeIndex;
					a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
					var r, n = s;
					if ("object" == typeof e && "length" in e) {
						for (var l = 0; l < e.length; l += 1) r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
						n = Math.max(n, 0)
					} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
					a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
				},
				removeAllSlides: function() {
					for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
					this.removeSlide(e)
				}
			},
			events: {
				attachEvents: function() {
					var e = this,
						t = r(),
						a = e.params,
						i = e.touchEvents,
						s = e.el,
						n = e.wrapperEl,
						l = e.device,
						o = e.support;
					e.onTouchStart = N.bind(e), e.onTouchMove = G.bind(e), e.onTouchEnd = B.bind(e), a.cssMode && (e.onScroll = X.bind(e)), e.onClick = R.bind(e);
					var d = !!a.nested;
					if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);
					else {
						if (o.touch) {
							var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
								passive: !1,
								capture: d
							} : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), Y || (t.addEventListener("touchstart", V), Y = !0)
						}(a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1))
					}(a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e.on("observerUpdate", H, !0)
				},
				detachEvents: function() {
					var e = this,
						t = r(),
						a = e.params,
						i = e.touchEvents,
						s = e.el,
						n = e.wrapperEl,
						l = e.device,
						o = e.support,
						d = !!a.nested;
					if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);
					else {
						if (o.touch) {
							var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p)
						}(a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1))
					}(a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H)
				}
			},
			breakpoints: {
				setBreakpoint: function() {
					var e = this,
						t = e.activeIndex,
						a = e.initialized,
						i = e.loopedSlides,
						s = void 0 === i ? 0 : i,
						r = e.params,
						n = e.$el,
						l = r.breakpoints;
					if (l && (!l || 0 !== Object.keys(l).length)) {
						var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
						if (o && e.currentBreakpoint !== o) {
							var d = o in l ? l[o] : void 0;
							d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
								var t = d[e];
								void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
							}));
							var p = d || e.originalParams,
								u = r.slidesPerColumn > 1,
								c = p.slidesPerColumn > 1,
								h = r.enabled;
							u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), (p.slidesPerColumnFill && "column" === p.slidesPerColumnFill || !p.slidesPerColumnFill && "column" === r.slidesPerColumnFill) && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
							var v = p.direction && p.direction !== r.direction,
								f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
							v && a && e.changeDirection(), M(e.params, p);
							var m = e.params.enabled;
							M(e, {
								allowTouchMove: e.params.allowTouchMove,
								allowSlideNext: e.params.allowSlideNext,
								allowSlidePrev: e.params.allowSlidePrev
							}), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), f && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p)
						}
					}
				},
				getBreakpoint: function(e, t, a) {
					if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
						var i = !1,
							s = l(),
							r = "window" === t ? s.innerHeight : a.clientHeight,
							n = Object.keys(e).map((function(e) {
								if ("string" == typeof e && 0 === e.indexOf("@")) {
									var t = parseFloat(e.substr(1));
									return {
										value: r * t,
										point: e
									}
								}
								return {
									value: e,
									point: e
								}
							}));
						n.sort((function(e, t) {
							return parseInt(e.value, 10) - parseInt(t.value, 10)
						}));
						for (var o = 0; o < n.length; o += 1) {
							var d = n[o],
								p = d.point,
								u = d.value;
							"window" === t ? s.matchMedia("(min-width: " + u + "px)").matches && (i = p) : u <= a.clientWidth && (i = p)
						}
						return i || "max"
					}
				}
			},
			checkOverflow: {
				checkOverflow: function() {
					var e = this,
						t = e.params,
						a = e.isLocked,
						i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
					t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
				}
			},
			classes: {
				addClasses: function() {
					var e, t, a, i = this,
						s = i.classNames,
						r = i.params,
						n = i.rtl,
						l = i.$el,
						o = i.device,
						d = i.support,
						p = (e = ["initialized", r.direction, {
							"pointer-events": d.pointerEvents && !d.touch
						}, {
							"free-mode": r.freeMode
						}, {
							autoheight: r.autoHeight
						}, {
							rtl: n
						}, {
							multirow: r.slidesPerColumn > 1
						}, {
							"multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
						}, {
							android: o.android
						}, {
							ios: o.ios
						}, {
							"css-mode": r.cssMode
						}], t = r.containerModifierClass, a = [], e.forEach((function(e) {
							"object" == typeof e ? Object.keys(e).forEach((function(i) {
								e[i] && a.push(t + i)
							})) : "string" == typeof e && a.push(t + e)
						})), a);
					s.push.apply(s, p), l.addClass([].concat(s).join(" ")), i.emitContainerClasses()
				},
				removeClasses: function() {
					var e = this,
						t = e.$el,
						a = e.classNames;
					t.removeClass(a.join(" ")), e.emitContainerClasses()
				}
			},
			images: {
				loadImage: function(e, t, a, i, s, r) {
					var n, o = l();

					function d() {
						r && r()
					}
					m(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d()
				},
				preloadImages: function() {
					var e = this;

					function t() {
						null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var a = 0; a < e.imagesToLoad.length; a += 1) {
						var i = e.imagesToLoad[a];
						e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		_ = {},
		q = function() {
			function t() {
				for (var e, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
				if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? a = s[0] : (e = s[0], a = s[1]), a || (a = {}), a = M({}, a), e && !a.el && (a.el = e), a.el && m(a.el).length > 1) {
					var n = [];
					return m(a.el).each((function(e) {
						var i = M({}, a, {
							el: e
						});
						n.push(new t(i))
					})), n
				}
				var l = this;
				l.__swiper__ = !0, l.support = $(), l.device = L({
					userAgent: a.userAgent
				}), l.browser = I(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach((function(e) {
					var t = l.modules[e];
					if (t.params) {
						var i = Object.keys(t.params)[0],
							s = t.params[i];
						if ("object" != typeof s || null === s) return;
						if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = {
								auto: !0
							}), !(i in a) || !("enabled" in s)) return;
						!0 === a[i] && (a[i] = {
							enabled: !0
						}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
							enabled: !1
						})
					}
				}));
				var o, d, p = M({}, W);
				return l.useParams(p), l.params = M({}, p, _, a), l.originalParams = M({}, l.params), l.passedParams = M({}, a), l.params && l.params.on && Object.keys(l.params.on).forEach((function(e) {
					l.on(e, l.params.on[e])
				})), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, M(l, {
					enabled: l.params.enabled,
					el: e,
					classNames: [],
					slides: m(),
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal: function() {
						return "horizontal" === l.params.direction
					},
					isVertical: function() {
						return "vertical" === l.params.direction
					},
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					allowSlideNext: l.params.allowSlideNext,
					allowSlidePrev: l.params.allowSlidePrev,
					touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
						start: o[0],
						move: o[1],
						end: o[2],
						cancel: o[3]
					}, l.touchEventsDesktop = {
						start: d[0],
						move: d[1],
						end: d[2]
					}, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
					touchEventsData: {
						isTouched: void 0,
						isMoved: void 0,
						allowTouchCallbacks: void 0,
						touchStartTime: void 0,
						isScrolling: void 0,
						currentTranslate: void 0,
						startTranslate: void 0,
						allowThresholdMove: void 0,
						focusableElements: l.params.focusableElements,
						lastClickTime: x(),
						clickTimeout: void 0,
						velocities: [],
						allowMomentumBounce: void 0,
						isTouchEvent: void 0,
						startMoving: void 0
					},
					allowClick: !0,
					allowTouchMove: l.params.allowTouchMove,
					touches: {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0
					},
					imagesToLoad: [],
					imagesLoaded: 0
				}), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l
			}
			var a, i, s, n = t.prototype;
			return n.enable = function() {
				var e = this;
				e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
			}, n.disable = function() {
				var e = this;
				e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
			}, n.setProgress = function(e, t) {
				var a = this;
				e = Math.min(Math.max(e, 0), 1);
				var i = a.minTranslate(),
					s = (a.maxTranslate() - i) * e + i;
				a.translateTo(s, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses()
			}, n.emitContainerClasses = function() {
				var e = this;
				if (e.params._emitClasses && e.el) {
					var t = e.el.className.split(" ").filter((function(t) {
						return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
					}));
					e.emit("_containerClasses", t.join(" "))
				}
			}, n.getSlideClasses = function(e) {
				var t = this;
				return e.className.split(" ").filter((function(e) {
					return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
				})).join(" ")
			}, n.emitSlidesClasses = function() {
				var e = this;
				if (e.params._emitClasses && e.el) {
					var t = [];
					e.slides.each((function(a) {
						var i = e.getSlideClasses(a);
						t.push({
							slideEl: a,
							classNames: i
						}), e.emit("_slideClass", a, i)
					})), e.emit("_slideClasses", t)
				}
			}, n.slidesPerViewDynamic = function() {
				var e = this,
					t = e.params,
					a = e.slides,
					i = e.slidesGrid,
					s = e.size,
					r = e.activeIndex,
					n = 1;
				if (t.centeredSlides) {
					for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
					for (var p = r - 1; p >= 0; p -= 1) a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0))
				} else
					for (var u = r + 1; u < a.length; u += 1) i[u] - i[r] < s && (n += 1);
				return n
			}, n.update = function() {
				var e = this;
				if (e && !e.destroyed) {
					var t = e.snapGrid,
						a = e.params;
					a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
				}

				function i() {
					var t = e.rtlTranslate ? -1 * e.translate : e.translate,
						a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
					e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
				}
			}, n.changeDirection = function(e, t) {
				void 0 === t && (t = !0);
				var a = this,
					i = a.params.direction;
				return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each((function(t) {
					"vertical" === e ? t.style.width = "" : t.style.height = ""
				})), a.emit("changeDirection"), t && a.update()), a
			}, n.mount = function(e) {
				var t = this;
				if (t.mounted) return !0;
				var a = m(e || t.params.el);
				if (!(e = a[0])) return !1;
				e.swiper = t;
				var i = function() {
						return "." + (t.params.wrapperClass || "").trim().split(" ").join(".")
					},
					s = function() {
						if (e && e.shadowRoot && e.shadowRoot.querySelector) {
							var t = m(e.shadowRoot.querySelector(i()));
							return t.children = function(e) {
								return a.children(e)
							}, t
						}
						return a.children(i())
					}();
				if (0 === s.length && t.params.createElements) {
					var n = r().createElement("div");
					s = m(n), n.className = t.params.wrapperClass, a.append(n), a.children("." + t.params.slideClass).each((function(e) {
						s.append(e)
					}))
				}
				return M(t, {
					$el: a,
					el: e,
					$wrapperEl: s,
					wrapperEl: s[0],
					mounted: !0,
					rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
					rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
					wrongRTL: "-webkit-box" === s.css("display")
				}), !0
			}, n.init = function(e) {
				var t = this;
				return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
			}, n.destroy = function(e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var a, i = this,
					s = i.params,
					r = i.$el,
					n = i.$wrapperEl,
					l = i.slides;
				return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
					i.off(e)
				})), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach((function(e) {
					try {
						a[e] = null
					} catch (e) {}
					try {
						delete a[e]
					} catch (e) {}
				}))), i.destroyed = !0), null
			}, t.extendDefaults = function(e) {
				M(_, e)
			}, t.installModule = function(e) {
				t.prototype.modules || (t.prototype.modules = {});
				var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
				t.prototype.modules[a] = e
			}, t.use = function(e) {
				return Array.isArray(e) ? (e.forEach((function(e) {
					return t.installModule(e)
				})), t) : (t.installModule(e), t)
			}, a = t, s = [{
				key: "extendedDefaults",
				get: function() {
					return _
				}
			}, {
				key: "defaults",
				get: function() {
					return W
				}
			}], (i = null) && e(a.prototype, i), s && e(a, s), t
		}();
	Object.keys(F).forEach((function(e) {
		Object.keys(F[e]).forEach((function(t) {
			q.prototype[t] = F[e][t]
		}))
	})), q.use([O, D]);
	var j = {
			update: function(e) {
				var t = this,
					a = t.params,
					i = a.slidesPerView,
					s = a.slidesPerGroup,
					r = a.centeredSlides,
					n = t.params.virtual,
					l = n.addSlidesBefore,
					o = n.addSlidesAfter,
					d = t.virtual,
					p = d.from,
					u = d.to,
					c = d.slides,
					h = d.slidesGrid,
					v = d.renderSlide,
					f = d.offset;
				t.updateActiveIndex();
				var m, g, b, w = t.activeIndex || 0;
				m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
				var y = Math.max((w || 0) - b, 0),
					E = Math.min((w || 0) + g, c.length - 1),
					x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

				function T() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (M(t.virtual, {
						from: y,
						to: E,
						offset: x,
						slidesGrid: t.slidesGrid
					}), p === y && u === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: x,
					from: y,
					to: E,
					slides: function() {
						for (var e = [], t = y; t <= E; t += 1) e.push(c[t]);
						return e
					}()
				}), void(t.params.virtual.renderExternalUpdate && T());
				var C = [],
					S = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var z = p; z <= u; z += 1)(z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
				for (var P = 0; P < c.length; P += 1) P >= y && P <= E && (void 0 === u || e ? S.push(P) : (P > u && S.push(P), P < p && C.push(P)));
				S.forEach((function(e) {
					t.$wrapperEl.append(v(c[e], e))
				})), C.sort((function(e, t) {
					return t - e
				})).forEach((function(e) {
					t.$wrapperEl.prepend(v(c[e], e))
				})), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T()
			},
			renderSlide: function(e, t) {
				var a = this,
					i = a.params.virtual;
				if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
				var s = i.renderSlide ? m(i.renderSlide.call(a, e, t)) : m('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
			},
			appendSlide: function(e) {
				var t = this;
				if ("object" == typeof e && "length" in e)
					for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.push(e[a]);
				else t.virtual.slides.push(e);
				t.virtual.update(!0)
			},
			prependSlide: function(e) {
				var t = this,
					a = t.activeIndex,
					i = a + 1,
					s = 1;
				if (Array.isArray(e)) {
					for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
					i = a + e.length, s = e.length
				} else t.virtual.slides.unshift(e);
				if (t.params.virtual.cache) {
					var n = t.virtual.cache,
						l = {};
					Object.keys(n).forEach((function(e) {
						var t = n[e],
							a = t.attr("data-swiper-slide-index");
						a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t
					})), t.virtual.cache = l
				}
				t.virtual.update(!0), t.slideTo(i, 0)
			},
			removeSlide: function(e) {
				var t = this;
				if (null != e) {
					var a = t.activeIndex;
					if (Array.isArray(e))
						for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
					else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
					t.virtual.update(!0), t.slideTo(a, 0)
				}
			},
			removeAllSlides: function() {
				var e = this;
				e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
			}
		},
		U = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					renderExternalUpdate: !0,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function() {
				z(this, {
					virtual: t({}, j, {
						slides: this.params.virtual.slides,
						cache: {}
					})
				})
			},
			on: {
				beforeInit: function(e) {
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						M(e.params, t), M(e.originalParams, t), e.params.initialSlide || e.virtual.update()
					}
				},
				setTranslate: function(e) {
					e.params.virtual.enabled && e.virtual.update()
				}
			}
		},
		K = {
			handle: function(e) {
				var t = this;
				if (t.enabled) {
					var a = l(),
						i = r(),
						s = t.rtlTranslate,
						n = e;
					n.originalEvent && (n = n.originalEvent);
					var o = n.keyCode || n.charCode,
						d = t.params.keyboard.pageUpDown,
						p = d && 33 === o,
						u = d && 34 === o,
						c = 37 === o,
						h = 39 === o,
						v = 38 === o,
						f = 40 === o;
					if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
					if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && v || p)) return !1;
					if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
						if (t.params.keyboard.onlyInViewport && (p || u || c || h || v || f)) {
							var m = !1;
							if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
							var g = t.$el,
								b = g[0].clientWidth,
								w = g[0].clientHeight,
								y = a.innerWidth,
								E = a.innerHeight,
								x = t.$el.offset();
							s && (x.left -= t.$el[0].scrollLeft);
							for (var T = [
									[x.left, x.top],
									[x.left + b, x.top],
									[x.left, x.top + w],
									[x.left + b, x.top + w]
								], C = 0; C < T.length; C += 1) {
								var S = T[C];
								if (S[0] >= 0 && S[0] <= y && S[1] >= 0 && S[1] <= E) {
									if (0 === S[0] && 0 === S[1]) continue;
									m = !0
								}
							}
							if (!m) return
						}
						t.isHorizontal() ? ((p || u || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((u || h) && !s || (p || c) && s) && t.slideNext(), ((p || c) && !s || (u || h) && s) && t.slidePrev()) : ((p || u || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (u || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o)
					}
				}
			},
			enable: function() {
				var e = this,
					t = r();
				e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
			},
			disable: function() {
				var e = this,
					t = r();
				e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
			}
		},
		Z = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0,
					pageUpDown: !0
				}
			},
			create: function() {
				z(this, {
					keyboard: t({
						enabled: !1
					}, K)
				})
			},
			on: {
				init: function(e) {
					e.params.keyboard.enabled && e.keyboard.enable()
				},
				destroy: function(e) {
					e.keyboard.enabled && e.keyboard.disable()
				}
			}
		};
	var J = {
			lastScrollTime: x(),
			lastEventBeforeSnap: void 0,
			recentWheelEvents: [],
			event: function() {
				return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
					var e = r(),
						t = "onwheel",
						a = t in e;
					if (!a) {
						var i = e.createElement("div");
						i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel
					}
					return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a
				}() ? "wheel" : "mousewheel"
			},
			normalize: function(e) {
				var t = 0,
					a = 0,
					i = 0,
					s = 0;
				return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
					spinX: t,
					spinY: a,
					pixelX: i,
					pixelY: s
				}
			},
			handleMouseEnter: function() {
				this.enabled && (this.mouseEntered = !0)
			},
			handleMouseLeave: function() {
				this.enabled && (this.mouseEntered = !1)
			},
			handle: function(e) {
				var t = e,
					a = this;
				if (a.enabled) {
					var i = a.params.mousewheel;
					a.params.cssMode && t.preventDefault();
					var s = a.$el;
					if ("container" !== a.params.mousewheel.eventsTarget && (s = m(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
					t.originalEvent && (t = t.originalEvent);
					var r = 0,
						n = a.rtlTranslate ? -1 : 1,
						l = J.normalize(t);
					if (i.forceToAxis)
						if (a.isHorizontal()) {
							if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
							r = -l.pixelX * n
						} else {
							if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
							r = -l.pixelY
						}
					else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
					if (0 === r) return !0;
					i.invert && (r = -r);
					var o = a.getTranslate() + r * i.sensitivity;
					if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
						var d = {
								time: x(),
								delta: Math.abs(r),
								direction: Math.sign(r)
							},
							p = a.mousewheel.lastEventBeforeSnap,
							u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;
						if (!u) {
							a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
							var c = a.getTranslate() + r * i.sensitivity,
								h = a.isBeginning,
								v = a.isEnd;
							if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
								clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
								var f = a.mousewheel.recentWheelEvents;
								f.length >= 15 && f.shift();
								var g = f.length ? f[f.length - 1] : void 0,
									b = f[0];
								if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);
								else if (f.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
									var w = r > 0 ? .8 : .2;
									a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E((function() {
										a.slideToClosest(a.params.speed, !0, void 0, w)
									}), 0)
								}
								a.mousewheel.timeout || (a.mousewheel.timeout = E((function() {
									a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5)
								}), 500))
							}
							if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0
						}
					} else {
						var y = {
								time: x(),
								delta: Math.abs(r),
								direction: Math.sign(r),
								raw: e
							},
							T = a.mousewheel.recentWheelEvents;
						T.length >= 2 && T.shift();
						var C = T.length ? T[T.length - 1] : void 0;
						if (T.push(y), C ? (y.direction !== C.direction || y.delta > C.delta || y.time > C.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0
					}
					return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
				}
			},
			animateSlider: function(e) {
				var t = this,
					a = l();
				return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new a.Date).getTime(), !1)))
			},
			releaseScroll: function(e) {
				var t = this,
					a = t.params.mousewheel;
				if (e.direction < 0) {
					if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0
				} else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
				return !1
			},
			enable: function() {
				var e = this,
					t = J.event();
				if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
				if (!t) return !1;
				if (e.mousewheel.enabled) return !1;
				var a = e.$el;
				return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
			},
			disable: function() {
				var e = this,
					t = J.event();
				if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
				if (!t) return !1;
				if (!e.mousewheel.enabled) return !1;
				var a = e.$el;
				return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
			}
		},
		Q = {
			toggleEl: function(e, t) {
				e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
			},
			update: function() {
				var e = this,
					t = e.params.navigation,
					a = e.navigation.toggleEl;
				if (!e.params.loop) {
					var i = e.navigation,
						s = i.$nextEl,
						r = i.$prevEl;
					r && r.length > 0 && (e.isBeginning ? a(r, !0) : a(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? a(s, !0) : a(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass))
				}
			},
			onPrevClick: function(e) {
				var t = this;
				e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
			},
			onNextClick: function(e) {
				var t = this;
				e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
			},
			init: function() {
				var e, t, a = this,
					i = a.params.navigation;
				(a.params.navigation = k(a.$el, a.params.navigation, a.params.createElements, {
					nextEl: "swiper-button-next",
					prevEl: "swiper-button-prev"
				}), i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), M(a.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}), a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)))
			},
			destroy: function() {
				var e = this,
					t = e.navigation,
					a = t.$nextEl,
					i = t.$prevEl;
				a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
			}
		},
		ee = {
			update: function() {
				var e = this,
					t = e.rtl,
					a = e.params.pagination;
				if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var i, s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						r = e.pagination.$el,
						n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
						var l, o, d, p = e.pagination.bullets;
						if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = i - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each((function(e) {
							var t = m(e),
								s = t.index();
							s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
						}));
						else {
							var u = p.eq(i),
								c = u.index();
							if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
								for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) p.eq(f).addClass(a.bulletActiveClass + "-main");
								if (e.params.loop)
									if (c >= p.length - a.dynamicMainBullets) {
										for (var g = a.dynamicMainBullets; g >= 0; g -= 1) p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
										p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev")
									} else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
								else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
							}
						}
						if (a.dynamicBullets) {
							var b = Math.min(p.length, a.dynamicMainBullets + 4),
								w = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
								y = t ? "right" : "left";
							p.css(e.isHorizontal() ? y : "top", w + "px")
						}
					}
					if ("fraction" === a.type && (r.find(P(a.currentClass)).text(a.formatFractionCurrent(i + 1)), r.find(P(a.totalClass)).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
						var E;
						E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
						var x = (i + 1) / n,
							T = 1,
							C = 1;
						"horizontal" === E ? T = x : C = x, r.find(P(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e.params.speed)
					}
					"custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](a.lockClass)
				}
			},
			render: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						s = "";
					if ("bullets" === t.type) {
						var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
						e.params.freeMode && !e.params.loop && r > a && (r = a);
						for (var n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(s), e.pagination.bullets = i.find(P(t.bulletClass))
					}
					"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
				}
			},
			init: function() {
				var e = this;
				e.params.pagination = k(e.$el, e.params.pagination, e.params.createElements, {
					el: "swiper-pagination"
				});
				var t = e.params.pagination;
				if (t.el) {
					var a = m(t.el);
					0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", P(t.bulletClass), (function(t) {
						t.preventDefault();
						var a = m(this).index() * e.params.slidesPerGroup;
						e.params.loop && (a += e.loopedSlides), e.slideTo(a)
					})), M(e.pagination, {
						$el: a,
						el: a[0]
					}), e.enabled || a.addClass(t.lockClass))
				}
			},
			destroy: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.pagination.$el;
					a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", P(t.bulletClass))
				}
			}
		},
		te = {
			setTranslate: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = e.rtlTranslate,
						i = e.progress,
						s = t.dragSize,
						r = t.trackSize,
						n = t.$dragEl,
						l = t.$el,
						o = e.params.scrollbar,
						d = s,
						p = (r - s) * i;
					a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function() {
						l[0].style.opacity = 0, l.transition(400)
					}), 1e3))
				}
			},
			setTransition: function(e) {
				var t = this;
				t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
			},
			updateSize: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = t.$dragEl,
						i = t.$el;
					a[0].style.width = "", a[0].style.height = "";
					var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						n = e.size / e.virtualSize,
						l = n * (r / e.size);
					s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), M(t, {
						trackSize: r,
						divider: n,
						moveDivider: l,
						dragSize: s
					}), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
				}
			},
			getPointerPosition: function(e) {
				return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
			},
			setDragPosition: function(e) {
				var t, a = this,
					i = a.scrollbar,
					s = a.rtlTranslate,
					r = i.$el,
					n = i.dragSize,
					l = i.trackSize,
					o = i.dragStartPos;
				t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
				var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
				a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses()
			},
			onDragStart: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el,
					n = i.$dragEl;
				t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
			},
			onDragMove: function(e) {
				var t = this,
					a = t.scrollbar,
					i = t.$wrapperEl,
					s = a.$el,
					r = a.$dragEl;
				t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e))
			},
			onDragEnd: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E((function() {
					r.css("opacity", 0), r.transition(400)
				}), 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
			},
			enableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = r(),
						a = e.scrollbar,
						i = e.touchEventsTouch,
						s = e.touchEventsDesktop,
						n = e.params,
						l = e.support,
						o = a.$el[0],
						d = !(!l.passiveListener || !n.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						p = !(!l.passiveListener || !n.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)))
				}
			},
			disableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = r(),
						a = e.scrollbar,
						i = e.touchEventsTouch,
						s = e.touchEventsDesktop,
						n = e.params,
						l = e.support,
						o = a.$el[0],
						d = !(!l.passiveListener || !n.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						p = !(!l.passiveListener || !n.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)))
				}
			},
			init: function() {
				var e = this,
					t = e.scrollbar,
					a = e.$el;
				e.params.scrollbar = k(a, e.params.scrollbar, e.params.createElements, {
					el: "swiper-scrollbar"
				});
				var i = e.params.scrollbar;
				if (i.el) {
					var s = m(i.el);
					e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
					var r = s.find("." + e.params.scrollbar.dragClass);
					0 === r.length && (r = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), M(t, {
						$el: s,
						el: s[0],
						$dragEl: r,
						dragEl: r[0]
					}), i.draggable && t.enableDraggable(), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		ae = {
			setTransform: function(e, t) {
				var a = this.rtl,
					i = m(e),
					s = a ? -1 : 1,
					r = i.attr("data-swiper-parallax") || "0",
					n = i.attr("data-swiper-parallax-x"),
					l = i.attr("data-swiper-parallax-y"),
					o = i.attr("data-swiper-parallax-scale"),
					d = i.attr("data-swiper-parallax-opacity");
				if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
					var p = d - (d - 1) * (1 - Math.abs(t));
					i[0].style.opacity = p
				}
				if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
				else {
					var u = o - (o - 1) * (1 - Math.abs(t));
					i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")")
				}
			},
			setTranslate: function() {
				var e = this,
					t = e.$el,
					a = e.slides,
					i = e.progress,
					s = e.snapGrid;
				t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
					e.parallax.setTransform(t, i)
				})), a.each((function(t, a) {
					var r = t.progress;
					e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
						e.parallax.setTransform(t, r)
					}))
				}))
			},
			setTransition: function(e) {
				void 0 === e && (e = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
					var a = m(t),
						i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
					0 === e && (i = 0), a.transition(i)
				}))
			}
		},
		ie = {
			getDistanceBetweenTouches: function(e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					a = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					s = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
			},
			onGestureStart: function(e) {
				var t = this,
					a = t.support,
					i = t.params.zoom,
					s = t.zoom,
					r = s.gesture;
				if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					s.fakeGestureTouched = !0, r.scaleStart = ie.getDistanceBetweenTouches(e)
				}
				r.$slideEl && r.$slideEl.length || (r.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0
			},
			onGestureChange: function(e) {
				var t = this,
					a = t.support,
					i = t.params.zoom,
					s = t.zoom,
					r = s.gesture;
				if (!a.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					s.fakeGestureMoved = !0, r.scaleMove = ie.getDistanceBetweenTouches(e)
				}
				r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e)
			},
			onGestureEnd: function(e) {
				var t = this,
					a = t.device,
					i = t.support,
					s = t.params.zoom,
					r = t.zoom,
					n = r.gesture;
				if (!i.gestures) {
					if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
					r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
				}
				n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0))
			},
			onTouchStart: function(e) {
				var t = this.device,
					a = this.zoom,
					i = a.gesture,
					s = a.image;
				i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function(e) {
				var t = this,
					a = t.zoom,
					i = a.gesture,
					s = a.image,
					r = a.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0));
					var n = s.width * a.scale,
						l = s.height * a.scale;
					if (!(n < i.slideWidth && l < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
							if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function() {
				var e = this.zoom,
					t = e.gesture,
					a = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
					a.isTouched = !1, a.isMoved = !1;
					var s = 300,
						r = 300,
						n = i.x * s,
						l = a.currentX + n,
						o = i.y * r,
						d = a.currentY + o;
					0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
					var p = Math.max(s, r);
					a.currentX = l, a.currentY = d;
					var u = a.width * e.scale,
						c = a.height * e.scale;
					a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
				}
			},
			onTransitionEnd: function() {
				var e = this,
					t = e.zoom,
					a = t.gesture;
				a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0)
			},
			toggle: function(e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function(e) {
				var t, a, i, s, r, n, o, d, p, u, c, h, v, f, g, b, w = this,
					y = l(),
					E = w.zoom,
					x = w.params.zoom,
					T = E.gesture,
					C = E.image;
				(T.$slideEl || (e && e.target && (T.$slideEl = m(e.target).closest("." + w.params.slideClass)), T.$slideEl || (w.params.virtual && w.params.virtual.enabled && w.virtual ? T.$slideEl = w.$wrapperEl.children("." + w.params.slideActiveClass) : T.$slideEl = w.slides.eq(w.activeIndex)), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length) && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === C.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = C.touchesStart.x, a = C.touchesStart.y), E.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, E.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (g = T.$slideEl[0].offsetWidth, b = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + y.scrollX + g / 2 - t, s = T.$slideEl.offset().top + y.scrollY + b / 2 - a, o = T.$imageEl[0].offsetWidth, d = T.$imageEl[0].offsetHeight, p = o * E.scale, u = d * E.scale, v = -(c = Math.min(g / 2 - p / 2, 0)), f = -(h = Math.min(b / 2 - u / 2, 0)), (r = i * E.scale) < c && (r = c), r > v && (r = v), (n = s * E.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E.scale + ")"))
			},
			out: function() {
				var e = this,
					t = e.zoom,
					a = e.params.zoom,
					i = t.gesture;
				i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
			},
			toggleGestures: function(e) {
				var t = this,
					a = t.zoom,
					i = a.slideSelector,
					s = a.passiveListener;
				t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s)
			},
			enableGestures: function() {
				this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
			},
			disableGestures: function() {
				this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
			},
			enable: function() {
				var e = this,
					t = e.support,
					a = e.zoom;
				if (!a.enabled) {
					a.enabled = !0;
					var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						s = !t.passiveListener || {
							passive: !1,
							capture: !0
						},
						r = "." + e.params.slideClass;
					e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s)
				}
			},
			disable: function() {
				var e = this,
					t = e.zoom;
				if (t.enabled) {
					var a = e.support;
					e.zoom.enabled = !1;
					var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						s = !a.passiveListener || {
							passive: !1,
							capture: !0
						},
						r = "." + e.params.slideClass;
					a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s)
				}
			}
		},
		se = {
			loadInSlide: function(e, t) {
				void 0 === t && (t = !0);
				var a = this,
					i = a.params.lazy;
				if (void 0 !== e && 0 !== a.slides.length) {
					var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
						r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
					!s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each((function(e) {
						var r = m(e);
						r.addClass(i.loadingClass);
						var n = r.attr("data-background"),
							l = r.attr("data-src"),
							o = r.attr("data-srcset"),
							d = r.attr("data-sizes"),
							p = r.parent("picture");
						a.loadImage(r[0], l || n, o, d, !1, (function() {
							if (null != a && a && (!a || a.params) && !a.destroyed) {
								if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each((function(e) {
										var t = m(e);
										t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
									})), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
									var e = s.attr("data-swiper-slide-index");
									if (s.hasClass(a.params.slideDuplicateClass)) {
										var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
										a.lazy.loadInSlide(u.index(), !1)
									} else {
										var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										a.lazy.loadInSlide(c.index(), !1)
									}
								}
								a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight()
							}
						})), a.emit("lazyImageLoad", s[0], r[0])
					}))
				}
			},
			load: function() {
				var e = this,
					t = e.$wrapperEl,
					a = e.params,
					i = e.slides,
					s = e.activeIndex,
					r = e.virtual && a.virtual.enabled,
					n = a.lazy,
					l = a.slidesPerView;

				function o(e) {
					if (r) {
						if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (i[e]) return !0;
					return !1
				}

				function d(e) {
					return r ? m(e).attr("data-swiper-slide-index") : m(e).index()
				}
				if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each((function(t) {
					var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
					e.lazy.loadInSlide(a)
				}));
				else if (l > 1)
					for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);
				else e.lazy.loadInSlide(s);
				if (n.loadPrevNext)
					if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
						for (var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + l; f < h; f += 1) o(f) && e.lazy.loadInSlide(f);
						for (var g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g)
					} else {
						var b = t.children("." + a.slideNextClass);
						b.length > 0 && e.lazy.loadInSlide(d(b));
						var w = t.children("." + a.slidePrevClass);
						w.length > 0 && e.lazy.loadInSlide(d(w))
					}
			},
			checkInViewOnLoad: function() {
				var e = l(),
					t = this;
				if (t && !t.destroyed) {
					var a = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
						i = a[0] === e,
						s = i ? e.innerWidth : a[0].offsetWidth,
						r = i ? e.innerHeight : a[0].offsetHeight,
						n = t.$el.offset(),
						o = !1;
					t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
					for (var d = [
							[n.left, n.top],
							[n.left + t.width, n.top],
							[n.left, n.top + t.height],
							[n.left + t.width, n.top + t.height]
						], p = 0; p < d.length; p += 1) {
						var u = d[p];
						if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
							if (0 === u[0] && 0 === u[1]) continue;
							o = !0
						}
					}
					var c = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad, c))
				}
			}
		},
		re = {
			LinearSpline: function(e, t) {
				var a, i, s, r, n, l = function(e, t) {
					for (i = -1, a = e.length; a - i > 1;) e[s = a + i >> 1] <= t ? i = s : a = s;
					return a
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
					return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function(e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new re.LinearSpline(t.slidesGrid, e.slidesGrid) : new re.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function(e, t) {
				var a, i, s = this,
					r = s.controller.control,
					n = s.constructor;

				function l(e) {
					var t = s.rtlTranslate ? -s.translate : s.translate;
					"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);
				else r instanceof n && t !== r && l(r)
			},
			setTransition: function(e, t) {
				var a, i = this,
					s = i.constructor,
					r = i.controller.control;

				function n(t) {
					t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E((function() {
						t.updateAutoHeight()
					})), t.$wrapperEl.transitionEnd((function() {
						r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
					})))
				}
				if (Array.isArray(r))
					for (a = 0; a < r.length; a += 1) r[a] !== t && r[a] instanceof s && n(r[a]);
				else r instanceof s && t !== r && n(r)
			}
		},
		ne = {
			getRandomNumber: function(e) {
				void 0 === e && (e = 16);
				return "x".repeat(e).replace(/x/g, (function() {
					return Math.round(16 * Math.random()).toString(16)
				}))
			},
			makeElFocusable: function(e) {
				return e.attr("tabIndex", "0"), e
			},
			makeElNotFocusable: function(e) {
				return e.attr("tabIndex", "-1"), e
			},
			addElRole: function(e, t) {
				return e.attr("role", t), e
			},
			addElRoleDescription: function(e, t) {
				return e.attr("aria-roledescription", t), e
			},
			addElControls: function(e, t) {
				return e.attr("aria-controls", t), e
			},
			addElLabel: function(e, t) {
				return e.attr("aria-label", t), e
			},
			addElId: function(e, t) {
				return e.attr("id", t), e
			},
			addElLive: function(e, t) {
				return e.attr("aria-live", t), e
			},
			disableEl: function(e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function(e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterOrSpaceKey: function(e) {
				if (13 === e.keyCode || 32 === e.keyCode) {
					var t = this,
						a = t.params.a11y,
						i = m(e.target);
					t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is(P(t.params.pagination.bulletClass)) && i[0].click()
				}
			},
			notify: function(e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function() {
				var e = this;
				if (!e.params.loop && e.navigation) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)))
				}
			},
			updatePagination: function() {
				var e = this,
					t = e.params.a11y;
				e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(a) {
					var i = m(a);
					e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))
				}))
			},
			init: function() {
				var e = this,
					t = e.params.a11y;
				e.$el.append(e.a11y.liveRegion);
				var a = e.$el;
				t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
				var i = e.$wrapperEl,
					s = i.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
					r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
				e.a11y.addElId(i, s), e.a11y.addElLive(i, r), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), t.slideRole);
				var n, l, o = e.params.loop ? e.slides.filter((function(t) {
					return !t.classList.contains(e.params.slideDuplicateClass)
				})).length : e.slides.length;
				e.slides.each((function(a, i) {
					var s = m(a),
						r = e.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : i,
						n = t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, o);
					e.a11y.addElLabel(s, n)
				})), e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (l = e.navigation.$prevEl), n && n.length && (e.a11y.makeElFocusable(n), "BUTTON" !== n[0].tagName && (e.a11y.addElRole(n, "button"), n.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(n, t.nextSlideMessage), e.a11y.addElControls(n, s)), l && l.length && (e.a11y.makeElFocusable(l), "BUTTON" !== l[0].tagName && (e.a11y.addElRole(l, "button"), l.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(l, t.prevSlideMessage), e.a11y.addElControls(l, s)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", P(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey)
			},
			destroy: function() {
				var e, t, a = this;
				a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", P(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey)
			}
		},
		le = {
			init: function() {
				var e = this,
					t = l();
				if (e.params.history) {
					if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
					var a = e.history;
					a.initialized = !0, a.paths = le.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
				}
			},
			destroy: function() {
				var e = l();
				this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				var e = this;
				e.history.paths = le.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
			},
			getPathValues: function(e) {
				var t = l(),
					a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function(e) {
						return "" !== e
					})),
					i = a.length;
				return {
					key: a[i - 2],
					value: a[i - 1]
				}
			},
			setHistory: function(e, t) {
				var a = this,
					i = l();
				if (a.history.initialized && a.params.history.enabled) {
					var s;
					s = a.params.url ? new URL(a.params.url) : i.location;
					var r = a.slides.eq(t),
						n = le.slugify(r.attr("data-history"));
					if (a.params.history.root.length > 0) {
						var o = a.params.history.root;
						"/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), n = o + "/" + e + "/" + n
					} else s.pathname.includes(e) || (n = e + "/" + n);
					var d = i.history.state;
					d && d.value === n || (a.params.history.replaceState ? i.history.replaceState({
						value: n
					}, null, n) : i.history.pushState({
						value: n
					}, null, n))
				}
			},
			slugify: function(e) {
				return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function(e, t, a) {
				var i = this;
				if (t)
					for (var s = 0, r = i.slides.length; s < r; s += 1) {
						var n = i.slides.eq(s);
						if (le.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
							var l = n.index();
							i.slideTo(l, e, a)
						}
					} else i.slideTo(0, e, a)
			}
		},
		oe = {
			onHashChange: function() {
				var e = this,
					t = r();
				e.emit("hashChange");
				var a = t.location.hash.replace("#", "");
				if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
					var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
					if (void 0 === i) return;
					e.slideTo(i)
				}
			},
			setHash: function() {
				var e = this,
					t = l(),
					a = r();
				if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
					if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");
					else {
						var i = e.slides.eq(e.activeIndex),
							s = i.attr("data-hash") || i.attr("data-history");
						a.location.hash = s || "", e.emit("hashSet")
					}
			},
			init: function() {
				var e = this,
					t = r(),
					a = l();
				if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
					e.hashNavigation.initialized = !0;
					var i = t.location.hash.replace("#", "");
					if (i)
						for (var s = 0, n = e.slides.length; s < n; s += 1) {
							var o = e.slides.eq(s);
							if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
								var d = o.index();
								e.slideTo(d, 0, e.params.runCallbacksOnInit, !0)
							}
						}
					e.params.hashNavigation.watchState && m(a).on("hashchange", e.hashNavigation.onHashChange)
				}
			},
			destroy: function() {
				var e = l();
				this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashChange)
			}
		},
		de = {
			run: function() {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					a = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E((function() {
					var t;
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run()
				}), a)
			},
			start: function() {
				var e = this;
				return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
			},
			stop: function() {
				var e = this;
				return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
			},
			pause: function(e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
					t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd)
				})) : (t.autoplay.paused = !1, t.autoplay.run())))
			},
			onVisibilityChange: function() {
				var e = this,
					t = r();
				"hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
			},
			onTransitionEnd: function(e) {
				var t = this;
				t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function(e) {
					t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
				})), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
			},
			onMouseEnter: function() {
				var e = this;
				e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach((function(t) {
					e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd)
				}))
			},
			onMouseLeave: function() {
				var e = this;
				e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, e.autoplay.run())
			},
			attachMouseEvents: function() {
				var e = this;
				e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave))
			},
			detachMouseEvents: function() {
				var e = this;
				e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave)
			}
		},
		pe = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
					var i = e.slides.eq(a),
						s = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (s -= e.translate);
					var r = 0;
					e.isHorizontal() || (r = s, s = 0);
					var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: n
					}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
				}
			},
			setTransition: function(e) {
				var t = this,
					a = t.slides,
					i = t.$wrapperEl;
				if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
					var s = !1;
					a.transitionEnd((function() {
						if (!s && t && !t.destroyed) {
							s = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
						}
					}))
				}
			}
		},
		ue = {
			setTranslate: function() {
				var e, t = this,
					a = t.$el,
					i = t.$wrapperEl,
					s = t.slides,
					r = t.width,
					n = t.height,
					l = t.rtlTranslate,
					o = t.size,
					d = t.browser,
					p = t.params.cubeEffect,
					u = t.isHorizontal(),
					c = t.virtual && t.params.virtual.enabled,
					h = 0;
				p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: r + "px"
				})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), a.append(e)));
				for (var v = 0; v < s.length; v += 1) {
					var f = s.eq(v),
						g = v;
					c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
					var b = 90 * g,
						w = Math.floor(b / 360);
					l && (b = -b, w = Math.floor(-b / 360));
					var y = Math.max(Math.min(f[0].progress, 1), -1),
						E = 0,
						x = 0,
						T = 0;
					g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), u || (x = E, E = 0);
					var C = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";
					if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(C), p.slideShadows) {
						var S = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
							M = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
						0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + o / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + o / 2 + "px",
						"transform-origin": "50% 50% -" + o / 2 + "px"
					}), p.shadow)
					if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
					else {
						var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
							k = p.shadowScale,
							$ = p.shadowScale / P,
							L = p.shadowOffset;
						e.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (n / 2 + L) + "px, " + -n / 2 / $ + "px) rotateX(-90deg)")
					} var I = d.isSafari || d.isWebView ? -o / 2 : 0;
				i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
			},
			setTransition: function(e) {
				var t = this,
					a = t.$el;
				t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
			}
		},
		ce = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
					var s = t.eq(i),
						r = s[0].progress;
					e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
					var n = -180 * r,
						l = 0,
						o = -s[0].swiperSlideOffset,
						d = 0;
					if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
						var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === p.length && (p = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
					}
					s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function(e) {
				var t = this,
					a = t.slides,
					i = t.activeIndex,
					s = t.$wrapperEl;
				if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					a.eq(i).transitionEnd((function() {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
						}
					}))
				}
			}
		},
		he = {
			setTranslate: function() {
				for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
					var h = i.eq(u),
						v = s[u],
						f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
						g = n ? d * f : 0,
						b = n ? 0 : d * f,
						w = -p * Math.abs(f),
						y = r.stretch;
					"string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
					var E = n ? 0 : y * f,
						x = n ? y * f : 0,
						T = 1 - (1 - r.scale) * Math.abs(f);
					Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0), Math.abs(T) < .001 && (T = 0);
					var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg) scale(" + T + ")";
					if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
						var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
							M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
						0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0)
					}
				}
			},
			setTransition: function(e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		ve = {
			init: function() {
				var e = this,
					t = e.params.thumbs;
				if (e.thumbs.initialized) return !1;
				e.thumbs.initialized = !0;
				var a = e.constructor;
				return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, M(e.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), M(e.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : C(t.swiper) && (e.thumbs.swiper = new a(M({}, t.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0
			},
			onThumbClick: function() {
				var e = this,
					t = e.thumbs.swiper;
				if (t) {
					var a = t.clickedIndex,
						i = t.clickedSlide;
					if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
						var s;
						if (s = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
							var r = e.activeIndex;
							e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
							var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
								l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
							s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n
						}
						e.slideTo(s)
					}
				}
			},
			update: function(e) {
				var t = this,
					a = t.thumbs.swiper;
				if (a) {
					var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
						s = t.params.thumbs.autoScrollOffset,
						r = s && !a.params.loop;
					if (t.realIndex !== a.realIndex || r) {
						var n, l, o = a.activeIndex;
						if (a.params.loop) {
							a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
							var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
								p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
							n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? a.params.slidesPerGroup > 1 ? p : o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev"
						} else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
						r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0))
					}
					var u = 1,
						c = t.params.thumbs.slideThumbActiveClass;
					if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled)
						for (var h = 0; h < u; h += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
					else
						for (var v = 0; v < u; v += 1) a.slides.eq(t.realIndex + v).addClass(c)
				}
			}
		},
		fe = [U, Z, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarget: "container",
					thresholdDelta: null,
					thresholdTime: null
				}
			},
			create: function() {
				z(this, {
					mousewheel: {
						enabled: !1,
						lastScrollTime: x(),
						lastEventBeforeSnap: void 0,
						recentWheelEvents: [],
						enable: J.enable,
						disable: J.disable,
						handle: J.handle,
						handleMouseEnter: J.handleMouseEnter,
						handleMouseLeave: J.handleMouseLeave,
						animateSlider: J.animateSlider,
						releaseScroll: J.releaseScroll
					}
				})
			},
			on: {
				init: function(e) {
					!e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
				},
				destroy: function(e) {
					e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function() {
				z(this, {
					navigation: t({}, Q)
				})
			},
			on: {
				init: function(e) {
					e.navigation.init(), e.navigation.update()
				},
				toEdge: function(e) {
					e.navigation.update()
				},
				fromEdge: function(e) {
					e.navigation.update()
				},
				destroy: function(e) {
					e.navigation.destroy()
				},
				"enable disable": function(e) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
				},
				click: function(e, t) {
					var a = e.navigation,
						i = a.$nextEl,
						s = a.$prevEl,
						r = t.target;
					if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
						if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
						var n;
						i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass)
					}
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function(e) {
						return e
					},
					formatFractionTotal: function(e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function() {
				z(this, {
					pagination: t({
						dynamicBulletIndex: 0
					}, ee)
				})
			},
			on: {
				init: function(e) {
					e.pagination.init(), e.pagination.render(), e.pagination.update()
				},
				activeIndexChange: function(e) {
					(e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
				},
				snapIndexChange: function(e) {
					e.params.loop || e.pagination.update()
				},
				slidesLengthChange: function(e) {
					e.params.loop && (e.pagination.render(), e.pagination.update())
				},
				snapGridLengthChange: function(e) {
					e.params.loop || (e.pagination.render(), e.pagination.update())
				},
				destroy: function(e) {
					e.pagination.destroy()
				},
				"enable disable": function(e) {
					var t = e.pagination.$el;
					t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
				},
				click: function(e, t) {
					var a = t.target;
					if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
						if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
						!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
					}
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function() {
				z(this, {
					scrollbar: t({
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}, te)
				})
			},
			on: {
				init: function(e) {
					e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
				},
				update: function(e) {
					e.scrollbar.updateSize()
				},
				resize: function(e) {
					e.scrollbar.updateSize()
				},
				observerUpdate: function(e) {
					e.scrollbar.updateSize()
				},
				setTranslate: function(e) {
					e.scrollbar.setTranslate()
				},
				setTransition: function(e, t) {
					e.scrollbar.setTransition(t)
				},
				"enable disable": function(e) {
					var t = e.scrollbar.$el;
					t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
				},
				destroy: function(e) {
					e.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				z(this, {
					parallax: t({}, ae)
				})
			},
			on: {
				beforeInit: function(e) {
					e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				init: function(e) {
					e.params.parallax.enabled && e.parallax.setTranslate()
				},
				setTranslate: function(e) {
					e.params.parallax.enabled && e.parallax.setTranslate()
				},
				setTransition: function(e, t) {
					e.params.parallax.enabled && e.parallax.setTransition(t)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var e = this;
				z(e, {
					zoom: t({
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					}, ie)
				});
				var a = 1;
				Object.defineProperty(e.zoom, "scale", {
					get: function() {
						return a
					},
					set: function(t) {
						if (a !== t) {
							var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
								s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
							e.emit("zoomChange", t, i, s)
						}
						a = t
					}
				})
			},
			on: {
				init: function(e) {
					e.params.zoom.enabled && e.zoom.enable()
				},
				destroy: function(e) {
					e.zoom.disable()
				},
				touchStart: function(e, t) {
					e.zoom.enabled && e.zoom.onTouchStart(t)
				},
				touchEnd: function(e, t) {
					e.zoom.enabled && e.zoom.onTouchEnd(t)
				},
				doubleTap: function(e, t) {
					!e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
				},
				transitionEnd: function(e) {
					e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
				},
				slideChange: function(e) {
					e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					checkInView: !1,
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					scrollingElement: "",
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				z(this, {
					lazy: t({
						initialImageLoaded: !1
					}, se)
				})
			},
			on: {
				beforeInit: function(e) {
					e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
				},
				init: function(e) {
					e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
				},
				scroll: function(e) {
					e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
				},
				"scrollbarDragMove resize _freeModeNoMomentumRelease": function(e) {
					e.params.lazy.enabled && e.lazy.load()
				},
				transitionStart: function(e) {
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function(e) {
					e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
				},
				slideChange: function(e) {
					var t = e.params,
						a = t.lazy,
						i = t.cssMode,
						s = t.watchSlidesVisibility,
						r = t.watchSlidesProgress,
						n = t.touchReleaseOnEdges,
						l = t.resistanceRatio;
					a.enabled && (i || (s || r) && (n || 0 === l)) && e.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				z(this, {
					controller: t({
						control: this.params.controller.control
					}, re)
				})
			},
			on: {
				update: function(e) {
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				resize: function(e) {
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				observerUpdate: function(e) {
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				setTranslate: function(e, t, a) {
					e.controller.control && e.controller.setTranslate(t, a)
				},
				setTransition: function(e, t, a) {
					e.controller.control && e.controller.setTransition(t, a)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}",
					slideLabelMessage: "{{index}} / {{slidesLength}}",
					containerMessage: null,
					containerRoleDescriptionMessage: null,
					itemRoleDescriptionMessage: null,
					slideRole: "group"
				}
			},
			create: function() {
				z(this, {
					a11y: t({}, ne, {
						liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					})
				})
			},
			on: {
				afterInit: function(e) {
					e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
				},
				toEdge: function(e) {
					e.params.a11y.enabled && e.a11y.updateNavigation()
				},
				fromEdge: function(e) {
					e.params.a11y.enabled && e.a11y.updateNavigation()
				},
				paginationUpdate: function(e) {
					e.params.a11y.enabled && e.a11y.updatePagination()
				},
				destroy: function(e) {
					e.params.a11y.enabled && e.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					root: "",
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				z(this, {
					history: t({}, le)
				})
			},
			on: {
				init: function(e) {
					e.params.history.enabled && e.history.init()
				},
				destroy: function(e) {
					e.params.history.enabled && e.history.destroy()
				},
				"transitionEnd _freeModeNoMomentumRelease": function(e) {
					e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
				},
				slideChange: function(e) {
					e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				z(this, {
					hashNavigation: t({
						initialized: !1
					}, oe)
				})
			},
			on: {
				init: function(e) {
					e.params.hashNavigation.enabled && e.hashNavigation.init()
				},
				destroy: function(e) {
					e.params.hashNavigation.enabled && e.hashNavigation.destroy()
				},
				"transitionEnd _freeModeNoMomentumRelease": function(e) {
					e.hashNavigation.initialized && e.hashNavigation.setHash()
				},
				slideChange: function(e) {
					e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1,
					pauseOnMouseEnter: !1
				}
			},
			create: function() {
				z(this, {
					autoplay: t({}, de, {
						running: !1,
						paused: !1
					})
				})
			},
			on: {
				init: function(e) {
					e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents())
				},
				beforeTransitionStart: function(e, t, a) {
					e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
				},
				sliderFirstMove: function(e) {
					e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
				},
				touchEnd: function(e) {
					e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
				},
				destroy: function(e) {
					e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				z(this, {
					fadeEffect: t({}, pe)
				})
			},
			on: {
				beforeInit: function(e) {
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						M(e.params, t), M(e.originalParams, t)
					}
				},
				setTranslate: function(e) {
					"fade" === e.params.effect && e.fadeEffect.setTranslate()
				},
				setTransition: function(e, t) {
					"fade" === e.params.effect && e.fadeEffect.setTransition(t)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				z(this, {
					cubeEffect: t({}, ue)
				})
			},
			on: {
				beforeInit: function(e) {
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						M(e.params, t), M(e.originalParams, t)
					}
				},
				setTranslate: function(e) {
					"cube" === e.params.effect && e.cubeEffect.setTranslate()
				},
				setTransition: function(e, t) {
					"cube" === e.params.effect && e.cubeEffect.setTransition(t)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				z(this, {
					flipEffect: t({}, ce)
				})
			},
			on: {
				beforeInit: function(e) {
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						M(e.params, t), M(e.originalParams, t)
					}
				},
				setTranslate: function(e) {
					"flip" === e.params.effect && e.flipEffect.setTranslate()
				},
				setTransition: function(e, t) {
					"flip" === e.params.effect && e.flipEffect.setTransition(t)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				z(this, {
					coverflowEffect: t({}, he)
				})
			},
			on: {
				beforeInit: function(e) {
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function(e) {
					"coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
				},
				setTransition: function(e, t) {
					"coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function() {
				z(this, {
					thumbs: t({
						swiper: null,
						initialized: !1
					}, ve)
				})
			},
			on: {
				beforeInit: function(e) {
					var t = e.params.thumbs;
					t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
				},
				slideChange: function(e) {
					e.thumbs.swiper && e.thumbs.update()
				},
				update: function(e) {
					e.thumbs.swiper && e.thumbs.update()
				},
				resize: function(e) {
					e.thumbs.swiper && e.thumbs.update()
				},
				observerUpdate: function(e) {
					e.thumbs.swiper && e.thumbs.update()
				},
				setTransition: function(e, t) {
					var a = e.thumbs.swiper;
					a && a.setTransition(t)
				},
				beforeDestroy: function(e) {
					var t = e.thumbs.swiper;
					t && e.thumbs.swiperCreated && t && t.destroy()
				}
			}
		}];
	return q.use(fe), q
}));
//# sourceMappingURL=swiper-bundle.min.js.map