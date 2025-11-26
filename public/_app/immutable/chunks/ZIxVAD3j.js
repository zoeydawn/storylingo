var Kt = Array.isArray,
  zt = Array.prototype.indexOf,
  Fn = Array.from,
  Ln = Object.defineProperty,
  _e = Object.getOwnPropertyDescriptor,
  $t = Object.getOwnPropertyDescriptors,
  Xt = Object.prototype,
  Zt = Array.prototype,
  ot = Object.getPrototypeOf,
  tt = Object.isExtensible
function jn(e) {
  return typeof e == 'function'
}
const ie = () => {}
function qn(e) {
  return e()
}
function ut(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}
function ct() {
  var e,
    t,
    n = new Promise((r, s) => {
      ;((e = r), (t = s))
    })
  return { promise: n, resolve: e, reject: t }
}
function Yn(e, t) {
  if (Array.isArray(e)) return e
  if (!(Symbol.iterator in e)) return Array.from(e)
  const n = []
  for (const r of e) if ((n.push(r), n.length === t)) break
  return n
}
const b = 2,
  ke = 4,
  Ne = 8,
  F = 16,
  L = 32,
  ne = 64,
  Be = 128,
  k = 512,
  g = 1024,
  A = 2048,
  j = 4096,
  P = 8192,
  X = 16384,
  Ve = 32768,
  ge = 65536,
  Fe = 1 << 17,
  _t = 1 << 18,
  we = 1 << 19,
  vt = 1 << 20,
  de = 32768,
  Le = 1 << 21,
  Ge = 1 << 22,
  Y = 1 << 23,
  Z = Symbol('$state'),
  Hn = Symbol('legacy props'),
  Un = Symbol(''),
  fe = new (class extends Error {
    name = 'StaleReactionError'
    message = 'The reaction that called `getAbortSignal()` was re-run or destroyed'
  })(),
  Vn = 1,
  Ke = 3,
  dt = 8
function Wt() {
  throw new Error('https://svelte.dev/e/async_derived_orphan')
}
function Jt(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown')
}
function Qt() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived')
}
function en(e) {
  throw new Error('https://svelte.dev/e/effect_orphan')
}
function tn() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded')
}
function nn() {
  throw new Error('https://svelte.dev/e/experimental_async_fork')
}
function rn() {
  throw new Error('https://svelte.dev/e/fork_discarded')
}
function sn() {
  throw new Error('https://svelte.dev/e/fork_timing')
}
function Gn() {
  throw new Error('https://svelte.dev/e/hydration_failed')
}
function Kn(e) {
  throw new Error('https://svelte.dev/e/props_invalid_value')
}
function fn() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed')
}
function an() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed')
}
function ln() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation')
}
function zn() {
  throw new Error('https://svelte.dev/e/svelte_boundary_reset_onerror')
}
const $n = 1,
  Xn = 2,
  Zn = 4,
  Wn = 8,
  Jn = 16,
  Qn = 1,
  er = 2,
  tr = 4,
  nr = 8,
  rr = 16,
  sr = 1,
  fr = 2,
  ir = 4,
  ar = 1,
  lr = 2,
  on = '[',
  un = '[!',
  cn = ']',
  ze = {},
  E = Symbol(),
  or = 'http://www.w3.org/1999/xhtml',
  ur = 'http://www.w3.org/2000/svg',
  cr = '@attach'
function $e(e) {
  console.warn('https://svelte.dev/e/hydration_mismatch')
}
function _r() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value')
}
function vr() {
  console.warn('https://svelte.dev/e/svelte_boundary_reset_noop')
}
let Q = !1
function dr(e) {
  Q = e
}
let x
function ae(e) {
  if (e === null) throw ($e(), ze)
  return (x = e)
}
function hr() {
  return ae(V(x))
}
function pr(e) {
  if (Q) {
    if (V(x) !== null) throw ($e(), ze)
    x = e
  }
}
function wr(e = 1) {
  if (Q) {
    for (var t = e, n = x; t--; ) n = V(n)
    x = n
  }
}
function yr(e = !0) {
  for (var t = 0, n = x; ; ) {
    if (n.nodeType === dt) {
      var r = n.data
      if (r === cn) {
        if (t === 0) return n
        t -= 1
      } else (r === on || r === un) && (t += 1)
    }
    var s = V(n)
    ;(e && n.remove(), (n = s))
  }
}
function br(e) {
  if (!e || e.nodeType !== dt) throw ($e(), ze)
  return e.data
}
function ht(e) {
  return e === this.v
}
function pt(e, t) {
  return e != e ? t == t : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function'
}
function wt(e) {
  return !pt(e, this.v)
}
let Ie = !1
function Er() {
  Ie = !0
}
let T = null
function me(e) {
  T = e
}
function gr(e, t = !1, n) {
  T = {
    p: T,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ie && !t ? { s: null, u: null, $: [] } : null,
  }
}
function mr(e) {
  var t = T,
    n = t.e
  if (n !== null) {
    t.e = null
    for (var r of n) It(r)
  }
  return ((t.i = !0), (T = t.p), {})
}
function ye() {
  return !Ie || (T !== null && T.l === null)
}
let z = []
function yt() {
  var e = z
  ;((z = []), ut(e))
}
function bt(e) {
  if (z.length === 0 && !ve) {
    var t = z
    queueMicrotask(() => {
      t === z && yt()
    })
  }
  z.push(e)
}
function _n() {
  for (; z.length > 0; ) yt()
}
function vn(e) {
  var t = h
  if (t === null) return ((v.f |= Y), e)
  if ((t.f & Ve) === 0) {
    if ((t.f & Be) === 0) throw e
    t.b.error(e)
  } else Te(e, t)
}
function Te(e, t) {
  for (; t !== null; ) {
    if ((t.f & Be) !== 0)
      try {
        t.b.error(e)
        return
      } catch (n) {
        e = n
      }
    t = t.parent
  }
  throw e
}
const $ = new Set()
let p = null,
  Ce = null,
  R = null,
  N = [],
  Pe = null,
  je = !1,
  ve = !1
class U {
  committed = !1
  current = new Map()
  previous = new Map()
  #r = new Set()
  #s = new Set()
  #t = 0
  #n = 0
  #a = null
  #f = []
  #i = []
  skipped_effects = new Set()
  is_fork = !1
  process(t) {
    ;((N = []), (Ce = null), this.apply())
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: [],
    }
    for (const r of t) this.#l(r, n)
    ;(this.is_fork || this.#o(),
      this.#n > 0 || this.is_fork
        ? (this.#e(n.effects), this.#e(n.render_effects), this.#e(n.block_effects))
        : ((Ce = this),
          (p = null),
          nt(n.render_effects),
          nt(n.effects),
          (Ce = null),
          this.#a?.resolve()),
      (R = null))
  }
  #l(t, n) {
    t.f ^= g
    for (var r = t.first; r !== null; ) {
      var s = r.f,
        i = (s & (L | ne)) !== 0,
        l = i && (s & g) !== 0,
        o = l || (s & P) !== 0 || this.skipped_effects.has(r)
      if (
        ((r.f & Be) !== 0 &&
          r.b?.is_pending() &&
          (n = {
            parent: n,
            effect: r,
            effects: [],
            render_effects: [],
            block_effects: [],
          }),
        !o && r.fn !== null)
      ) {
        i
          ? (r.f ^= g)
          : (s & ke) !== 0
            ? n.effects.push(r)
            : be(r) && ((r.f & F) !== 0 && n.block_effects.push(r), pe(r))
        var a = r.first
        if (a !== null) {
          r = a
          continue
        }
      }
      var f = r.parent
      for (r = r.next; r === null && f !== null; )
        (f === n.effect &&
          (this.#e(n.effects), this.#e(n.render_effects), this.#e(n.block_effects), (n = n.parent)),
          (r = f.next),
          (f = f.parent))
    }
  }
  #e(t) {
    for (const n of t) (((n.f & A) !== 0 ? this.#f : this.#i).push(n), y(n, g))
  }
  capture(t, n) {
    ;(this.previous.has(t) || this.previous.set(t, n),
      (t.f & Y) === 0 && (this.current.set(t, t.v), R?.set(t, t.v)))
  }
  activate() {
    ;((p = this), this.apply())
  }
  deactivate() {
    ;((p = null), (R = null))
  }
  flush() {
    if ((this.activate(), N.length > 0)) {
      if ((Ye(), p !== null && p !== this)) return
    } else this.#t === 0 && this.process([])
    this.deactivate()
  }
  discard() {
    for (const t of this.#s) t(this)
    this.#s.clear()
  }
  #o() {
    if (this.#n === 0) {
      for (const t of this.#r) t()
      this.#r.clear()
    }
    this.#t === 0 && this.#u()
  }
  #u() {
    if ($.size > 1) {
      this.previous.clear()
      var t = R,
        n = !0,
        r = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: [],
        }
      for (const s of $) {
        if (s === this) {
          n = !1
          continue
        }
        const i = []
        for (const [o, a] of this.current) {
          if (s.current.has(o))
            if (n && a !== s.current.get(o)) s.current.set(o, a)
            else continue
          i.push(o)
        }
        if (i.length === 0) continue
        const l = [...s.current.keys()].filter((o) => !this.current.has(o))
        if (l.length > 0) {
          const o = new Set(),
            a = new Map()
          for (const f of i) Et(f, l, o, a)
          if (N.length > 0) {
            ;((p = s), s.apply())
            for (const f of N) s.#l(f, r)
            ;((N = []), s.deactivate())
          }
        }
      }
      ;((p = null), (R = t))
    }
    ;((this.committed = !0), $.delete(this))
  }
  increment(t) {
    ;((this.#t += 1), t && (this.#n += 1))
  }
  decrement(t) {
    ;((this.#t -= 1), t && (this.#n -= 1), this.revive())
  }
  revive() {
    for (const t of this.#f) (y(t, A), ee(t))
    for (const t of this.#i) (y(t, j), ee(t))
    ;((this.#f = []), (this.#i = []), this.flush())
  }
  oncommit(t) {
    this.#r.add(t)
  }
  ondiscard(t) {
    this.#s.add(t)
  }
  settled() {
    return (this.#a ??= ct()).promise
  }
  static ensure() {
    if (p === null) {
      const t = (p = new U())
      ;($.add(p),
        ve ||
          U.enqueue(() => {
            p === t && t.flush()
          }))
    }
    return p
  }
  static enqueue(t) {
    bt(t)
  }
  apply() {}
}
function qe(e) {
  var t = ve
  ve = !0
  try {
    var n
    for (e && (p !== null && Ye(), (n = e())); ; ) {
      if ((_n(), N.length === 0 && (p?.flush(), N.length === 0))) return ((Pe = null), n)
      Ye()
    }
  } finally {
    ve = t
  }
}
function Ye() {
  var e = W
  je = !0
  try {
    var t = 0
    for (it(!0); N.length > 0; ) {
      var n = U.ensure()
      if (t++ > 1e3) {
        var r, s
        dn()
      }
      ;(n.process(N), H.clear())
    }
  } finally {
    ;((je = !1), it(e), (Pe = null))
  }
}
function dn() {
  try {
    tn()
  } catch (e) {
    Te(e, Pe)
  }
}
let C = null
function nt(e) {
  var t = e.length
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++]
      if (
        (r.f & (X | P)) === 0 &&
        be(r) &&
        ((C = new Set()),
        pe(r),
        r.deps === null &&
          r.first === null &&
          r.nodes_start === null &&
          (r.teardown === null && r.ac === null ? Ct(r) : (r.fn = null)),
        C?.size > 0)
      ) {
        H.clear()
        for (const s of C) {
          if ((s.f & (X | P)) !== 0) continue
          const i = [s]
          let l = s.parent
          for (; l !== null; ) (C.has(l) && (C.delete(l), i.push(l)), (l = l.parent))
          for (let o = i.length - 1; o >= 0; o--) {
            const a = i[o]
            ;(a.f & (X | P)) === 0 && pe(a)
          }
        }
        C.clear()
      }
    }
    C = null
  }
}
function Et(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f
      ;(i & b) !== 0
        ? Et(s, t, n, r)
        : (i & (Ge | F)) !== 0 && (i & A) === 0 && mt(s, t, r) && (y(s, A), ee(s))
    }
}
function gt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f
      ;(r & b) !== 0 ? gt(n, t) : (r & Fe) !== 0 && (y(n, A), t.add(n))
    }
}
function mt(e, t, n) {
  const r = n.get(e)
  if (r !== void 0) return r
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s)) return !0
      if ((s.f & b) !== 0 && mt(s, t, n)) return (n.set(s, !0), !0)
    }
  return (n.set(e, !1), !1)
}
function ee(e) {
  for (var t = (Pe = e); t.parent !== null; ) {
    t = t.parent
    var n = t.f
    if (je && t === h && (n & F) !== 0 && (n & _t) === 0) return
    if ((n & (ne | L)) !== 0) {
      if ((n & g) === 0) return
      t.f ^= g
    }
  }
  N.push(t)
}
function Tr(e) {
  ;(nn(), p !== null && sn())
  var t = U.ensure()
  t.is_fork = !0
  var n = !1,
    r = t.settled()
  qe(e)
  for (var [s, i] of t.previous) s.v = i
  return {
    commit: async () => {
      if (n) {
        await r
        return
      }
      ;($.has(t) || rn(), (n = !0), (t.is_fork = !1))
      for (var [l, o] of t.current) l.v = o
      ;(qe(() => {
        var a = new Set()
        for (var f of t.current.keys()) gt(f, a)
        ;(En(a), Rt())
      }),
        t.revive(),
        await r)
    },
    discard: () => {
      !n && $.has(t) && ($.delete(t), t.discard())
    },
  }
}
function hn(e, t, n, r) {
  const s = ye() ? Xe : yn
  if (n.length === 0 && e.length === 0) {
    r(t.map(s))
    return
  }
  var i = p,
    l = h,
    o = pn()
  function a() {
    Promise.all(n.map((f) => wn(f)))
      .then((f) => {
        o()
        try {
          r([...t.map(s), ...f])
        } catch (u) {
          ;(l.f & X) === 0 && Te(u, l)
        }
        ;(i?.deactivate(), Ae())
      })
      .catch((f) => {
        Te(f, l)
      })
  }
  e.length > 0
    ? Promise.all(e).then(() => {
        o()
        try {
          return a()
        } finally {
          ;(i?.deactivate(), Ae())
        }
      })
    : a()
}
function pn() {
  var e = h,
    t = v,
    n = T,
    r = p
  return function (i = !0) {
    ;(le(e), B(t), me(n), i && r?.activate())
  }
}
function Ae() {
  ;(le(null), B(null), me(null))
}
function Xe(e) {
  var t = b | A,
    n = v !== null && (v.f & b) !== 0 ? v : null
  return (
    h !== null && (h.f |= we),
    {
      ctx: T,
      deps: null,
      effects: null,
      equals: ht,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: E,
      wv: 0,
      parent: n ?? h,
      ac: null,
    }
  )
}
function wn(e, t) {
  let n = h
  n === null && Wt()
  var r = n.b,
    s = void 0,
    i = We(E),
    l = !v,
    o = new Map()
  return (
    Sn(() => {
      var a = ct()
      s = a.promise
      try {
        Promise.resolve(e())
          .then(a.resolve, a.reject)
          .then(() => {
            ;(f === p && f.committed && f.deactivate(), Ae())
          })
      } catch (c) {
        ;(a.reject(c), Ae())
      }
      var f = p
      if (l) {
        var u = !r.is_pending()
        ;(r.update_pending_count(1), f.increment(u), o.get(f)?.reject(fe), o.delete(f), o.set(f, a))
      }
      const _ = (c, d = void 0) => {
        if ((f.activate(), d)) d !== fe && ((i.f |= Y), Re(i, d))
        else {
          ;((i.f & Y) !== 0 && (i.f ^= Y), Re(i, c))
          for (const [w, G] of o) {
            if ((o.delete(w), w === f)) break
            G.reject(fe)
          }
        }
        l && (r.update_pending_count(-1), f.decrement(u))
      }
      a.promise.then(_, (c) => _(null, c || 'unknown'))
    }),
    An(() => {
      for (const a of o.values()) a.reject(fe)
    }),
    new Promise((a) => {
      function f(u) {
        function _() {
          u === s ? a(i) : f(s)
        }
        u.then(_, _)
      }
      f(s)
    })
  )
}
function Ar(e) {
  const t = Xe(e)
  return (Lt(t), t)
}
function yn(e) {
  const t = Xe(e)
  return ((t.equals = wt), t)
}
function Tt(e) {
  var t = e.effects
  if (t !== null) {
    e.effects = null
    for (var n = 0; n < t.length; n += 1) te(t[n])
  }
}
function bn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & b) === 0) return t
    t = t.parent
  }
  return null
}
function Ze(e) {
  var t,
    n = h
  le(bn(e))
  try {
    ;((e.f &= ~de), Tt(e), (t = Ht(e)))
  } finally {
    le(n)
  }
  return t
}
function At(e) {
  var t = Ze(e)
  if ((e.equals(t) || ((e.v = t), (e.wv = qt())), !oe))
    if (R !== null) Qe() && R.set(e, e.v)
    else {
      var n = (e.f & k) === 0 ? j : g
      y(e, n)
    }
}
let Se = new Set()
const H = new Map()
function En(e) {
  Se = e
}
let St = !1
function We(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: ht, rv: 0, wv: 0 }
  return n
}
function q(e, t) {
  const n = We(e)
  return (Lt(n), n)
}
function Sr(e, t = !1, n = !0) {
  const r = We(e)
  return (t || (r.equals = wt), Ie && n && T !== null && T.l !== null && (T.l.s ??= []).push(r), r)
}
function K(e, t, n = !1) {
  v !== null &&
    (!I || (v.f & Fe) !== 0) &&
    ye() &&
    (v.f & (b | F | Ge | Fe)) !== 0 &&
    !M?.includes(e) &&
    ln()
  let r = n ? ue(t) : t
  return Re(e, r)
}
function Re(e, t) {
  if (!e.equals(t)) {
    var n = e.v
    ;(oe ? H.set(e, t) : H.set(e, n), (e.v = t))
    var r = U.ensure()
    ;(r.capture(e, n),
      (e.f & b) !== 0 && ((e.f & A) !== 0 && Ze(e), y(e, (e.f & k) !== 0 ? g : j)),
      (e.wv = qt()),
      xt(e, A),
      ye() &&
        h !== null &&
        (h.f & g) !== 0 &&
        (h.f & (L | ne)) === 0 &&
        (O === null ? In([e]) : O.push(e)),
      !r.is_fork && Se.size > 0 && !St && Rt())
  }
  return t
}
function Rt() {
  St = !1
  const e = Array.from(Se)
  for (const t of e) ((t.f & g) !== 0 && y(t, j), be(t) && pe(t))
  Se.clear()
}
function Me(e) {
  K(e, e.v + 1)
}
function xt(e, t) {
  var n = e.reactions
  if (n !== null)
    for (var r = ye(), s = n.length, i = 0; i < s; i++) {
      var l = n[i],
        o = l.f
      if (!(!r && l === h)) {
        var a = (o & A) === 0
        if ((a && y(l, t), (o & b) !== 0)) {
          var f = l
          ;(R?.delete(f), (o & de) === 0 && (o & k && (l.f |= de), xt(f, j)))
        } else a && ((o & F) !== 0 && C !== null && C.add(l), ee(l))
      }
    }
}
function ue(e) {
  if (typeof e != 'object' || e === null || Z in e) return e
  const t = ot(e)
  if (t !== Xt && t !== Zt) return e
  var n = new Map(),
    r = Kt(e),
    s = q(0),
    i = J,
    l = (o) => {
      if (J === i) return o()
      var a = v,
        f = J
      ;(B(null), lt(i))
      var u = o()
      return (B(a), lt(f), u)
    }
  return (
    r && n.set('length', q(e.length)),
    new Proxy(e, {
      defineProperty(o, a, f) {
        ;(!('value' in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) &&
          fn()
        var u = n.get(a)
        return (
          u === void 0
            ? (u = l(() => {
                var _ = q(f.value)
                return (n.set(a, _), _)
              }))
            : K(u, f.value, !0),
          !0
        )
      },
      deleteProperty(o, a) {
        var f = n.get(a)
        if (f === void 0) {
          if (a in o) {
            const u = l(() => q(E))
            ;(n.set(a, u), Me(s))
          }
        } else (K(f, E), Me(s))
        return !0
      },
      get(o, a, f) {
        if (a === Z) return e
        var u = n.get(a),
          _ = a in o
        if (
          (u === void 0 &&
            (!_ || _e(o, a)?.writable) &&
            ((u = l(() => {
              var d = ue(_ ? o[a] : E),
                w = q(d)
              return w
            })),
            n.set(a, u)),
          u !== void 0)
        ) {
          var c = ce(u)
          return c === E ? void 0 : c
        }
        return Reflect.get(o, a, f)
      },
      getOwnPropertyDescriptor(o, a) {
        var f = Reflect.getOwnPropertyDescriptor(o, a)
        if (f && 'value' in f) {
          var u = n.get(a)
          u && (f.value = ce(u))
        } else if (f === void 0) {
          var _ = n.get(a),
            c = _?.v
          if (_ !== void 0 && c !== E)
            return { enumerable: !0, configurable: !0, value: c, writable: !0 }
        }
        return f
      },
      has(o, a) {
        if (a === Z) return !0
        var f = n.get(a),
          u = (f !== void 0 && f.v !== E) || Reflect.has(o, a)
        if (f !== void 0 || (h !== null && (!u || _e(o, a)?.writable))) {
          f === void 0 &&
            ((f = l(() => {
              var c = u ? ue(o[a]) : E,
                d = q(c)
              return d
            })),
            n.set(a, f))
          var _ = ce(f)
          if (_ === E) return !1
        }
        return u
      },
      set(o, a, f, u) {
        var _ = n.get(a),
          c = a in o
        if (r && a === 'length')
          for (var d = f; d < _.v; d += 1) {
            var w = n.get(d + '')
            w !== void 0 ? K(w, E) : d in o && ((w = l(() => q(E))), n.set(d + '', w))
          }
        if (_ === void 0)
          (!c || _e(o, a)?.writable) && ((_ = l(() => q(void 0))), K(_, ue(f)), n.set(a, _))
        else {
          c = _.v !== E
          var G = l(() => ue(f))
          K(_, G)
        }
        var Ee = Reflect.getOwnPropertyDescriptor(o, a)
        if ((Ee?.set && Ee.set.call(u, f), !c)) {
          if (r && typeof a == 'string') {
            var et = n.get('length'),
              De = Number(a)
            Number.isInteger(De) && De >= et.v && K(et, De + 1)
          }
          Me(s)
        }
        return !0
      },
      ownKeys(o) {
        ce(s)
        var a = Reflect.ownKeys(o).filter((_) => {
          var c = n.get(_)
          return c === void 0 || c.v !== E
        })
        for (var [f, u] of n) u.v !== E && !(f in o) && a.push(f)
        return a
      },
      setPrototypeOf() {
        an()
      },
    })
  )
}
function rt(e) {
  try {
    if (e !== null && typeof e == 'object' && Z in e) return e[Z]
  } catch {}
  return e
}
function Rr(e, t) {
  return Object.is(rt(e), rt(t))
}
var st, gn, Ot, kt
function xr() {
  if (st === void 0) {
    ;((st = window), (gn = /Firefox/.test(navigator.userAgent)))
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype
    ;((Ot = _e(t, 'firstChild').get),
      (kt = _e(t, 'nextSibling').get),
      tt(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      tt(n) && (n.__t = void 0))
  }
}
function xe(e = '') {
  return document.createTextNode(e)
}
function He(e) {
  return Ot.call(e)
}
function V(e) {
  return kt.call(e)
}
function Or(e, t) {
  if (!Q) return He(e)
  var n = He(x)
  if (n === null) n = x.appendChild(xe())
  else if (t && n.nodeType !== Ke) {
    var r = xe()
    return (n?.before(r), ae(r), r)
  }
  return (ae(n), n)
}
function kr(e, t = !1) {
  if (!Q) {
    var n = He(e)
    return n instanceof Comment && n.data === '' ? V(n) : n
  }
  if (t && x?.nodeType !== Ke) {
    var r = xe()
    return (x?.before(r), ae(r), r)
  }
  return x
}
function Nr(e, t = 1, n = !1) {
  let r = Q ? x : e
  for (var s; t--; ) ((s = r), (r = V(r)))
  if (!Q) return r
  if (n && r?.nodeType !== Ke) {
    var i = xe()
    return (r === null ? s?.after(i) : r.before(i), ae(i), i)
  }
  return (ae(r), r)
}
function Ir(e) {
  e.textContent = ''
}
function Pr() {
  return !1
}
function Dr(e, t) {
  if (t) {
    const n = document.body
    ;((e.autofocus = !0),
      bt(() => {
        document.activeElement === n && e.focus()
      }))
  }
}
let ft = !1
function mn() {
  ft ||
    ((ft = !0),
    document.addEventListener(
      'reset',
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.()
        })
      },
      { capture: !0 }
    ))
}
function Je(e) {
  var t = v,
    n = h
  ;(B(null), le(null))
  try {
    return e()
  } finally {
    ;(B(t), le(n))
  }
}
function Cr(e, t, n, r = n) {
  e.addEventListener(t, () => Je(n))
  const s = e.__on_r
  ;(s
    ? (e.__on_r = () => {
        ;(s(), r(!0))
      })
    : (e.__on_r = () => r(!0)),
    mn())
}
function Nt(e) {
  ;(h === null && (v === null && en(), Qt()), oe && Jt())
}
function Tn(e, t) {
  var n = t.last
  n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e))
}
function D(e, t, n, r = !0) {
  var s = h
  s !== null && (s.f & P) !== 0 && (e |= P)
  var i = {
    ctx: T,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | A | k,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null,
  }
  if (n)
    try {
      ;(pe(i), (i.f |= Ve))
    } catch (a) {
      throw (te(i), a)
    }
  else t !== null && ee(i)
  if (r) {
    var l = i
    if (
      (n &&
        l.deps === null &&
        l.teardown === null &&
        l.nodes_start === null &&
        l.first === l.last &&
        (l.f & we) === 0 &&
        ((l = l.first), (e & F) !== 0 && (e & ge) !== 0 && l !== null && (l.f |= ge)),
      l !== null &&
        ((l.parent = s), s !== null && Tn(l, s), v !== null && (v.f & b) !== 0 && (e & ne) === 0))
    ) {
      var o = v
      ;(o.effects ??= []).push(l)
    }
  }
  return i
}
function Qe() {
  return v !== null && !I
}
function An(e) {
  const t = D(Ne, null, !1)
  return (y(t, g), (t.teardown = e), t)
}
function Mr(e) {
  Nt()
  var t = h.f,
    n = !v && (t & L) !== 0 && (t & Ve) === 0
  if (n) {
    var r = T
    ;(r.e ??= []).push(e)
  } else return It(e)
}
function It(e) {
  return D(ke | vt, e, !1)
}
function Fr(e) {
  return (Nt(), D(Ne | vt, e, !0))
}
function Lr(e) {
  U.ensure()
  const t = D(ne | we, e, !0)
  return (n = {}) =>
    new Promise((r) => {
      n.outro
        ? On(t, () => {
            ;(te(t), r(void 0))
          })
        : (te(t), r(void 0))
    })
}
function jr(e) {
  return D(ke, e, !1)
}
function Sn(e) {
  return D(Ge | we, e, !0)
}
function qr(e, t = 0) {
  return D(Ne | t, e, !0)
}
function Yr(e, t = [], n = [], r = [], s = !1) {
  hn(r, t, n, (i) => {
    D(s ? ke : Ne, () => e(...i.map(ce)), !0)
  })
}
function Hr(e, t = 0) {
  var n = D(F | t, e, !0)
  return n
}
function Ur(e, t = !0) {
  return D(L | we, e, !0, t)
}
function Pt(e) {
  var t = e.teardown
  if (t !== null) {
    const n = oe,
      r = v
    ;(at(!0), B(null))
    try {
      t.call(null)
    } finally {
      ;(at(n), B(r))
    }
  }
}
function Dt(e, t = !1) {
  var n = e.first
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac
    s !== null &&
      Je(() => {
        s.abort(fe)
      })
    var r = n.next
    ;((n.f & ne) !== 0 ? (n.parent = null) : te(n, t), (n = r))
  }
}
function Rn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next
    ;((t.f & L) === 0 && te(t), (t = n))
  }
}
function te(e, t = !0) {
  var n = !1
  ;((t || (e.f & _t) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (xn(e.nodes_start, e.nodes_end), (n = !0)),
    Dt(e, t && !n),
    Oe(e, 0),
    y(e, X))
  var r = e.transitions
  if (r !== null) for (const i of r) i.stop()
  Pt(e)
  var s = e.parent
  ;(s !== null && s.first !== null && Ct(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes_start =
      e.nodes_end =
      e.ac =
        null))
}
function xn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : V(e)
    ;(e.remove(), (e = n))
  }
}
function Ct(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next
  ;(n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)))
}
function On(e, t, n = !0) {
  var r = []
  ;(Mt(e, r, !0),
    kn(r, () => {
      ;(n && te(e), t && t())
    }))
}
function kn(e, t) {
  var n = e.length
  if (n > 0) {
    var r = () => --n || t()
    for (var s of e) s.out(r)
  } else t()
}
function Mt(e, t, n) {
  if ((e.f & P) === 0) {
    if (((e.f ^= P), e.transitions !== null))
      for (const l of e.transitions) (l.is_global || n) && t.push(l)
    for (var r = e.first; r !== null; ) {
      var s = r.next,
        i = (r.f & ge) !== 0 || ((r.f & L) !== 0 && (e.f & F) !== 0)
      ;(Mt(r, t, i ? n : !1), (r = s))
    }
  }
}
function Br(e) {
  Ft(e, !0)
}
function Ft(e, t) {
  if ((e.f & P) !== 0) {
    ;((e.f ^= P), (e.f & g) === 0 && (y(e, A), ee(e)))
    for (var n = e.first; n !== null; ) {
      var r = n.next,
        s = (n.f & ge) !== 0 || (n.f & L) !== 0
      ;(Ft(n, s ? t : !1), (n = r))
    }
    if (e.transitions !== null) for (const i of e.transitions) (i.is_global || t) && i.in()
  }
}
function Vr(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var s = n === r ? null : V(n)
    ;(t.append(n), (n = s))
  }
}
let se = null
function Nn(e) {
  var t = se
  try {
    if (((se = new Set()), Vt(e), t !== null)) for (var n of se) t.add(n)
    return se
  } finally {
    se = t
  }
}
function Gr(e) {
  for (var t of Nn(e)) Re(t, t.v)
}
let W = !1
function it(e) {
  W = e
}
let oe = !1
function at(e) {
  oe = e
}
let v = null,
  I = !1
function B(e) {
  v = e
}
let h = null
function le(e) {
  h = e
}
let M = null
function Lt(e) {
  v !== null && (M === null ? (M = [e]) : M.push(e))
}
let m = null,
  S = 0,
  O = null
function In(e) {
  O = e
}
let jt = 1,
  he = 0,
  J = he
function lt(e) {
  J = e
}
function qt() {
  return ++jt
}
function be(e) {
  var t = e.f
  if ((t & A) !== 0) return !0
  if ((t & b && (e.f &= ~de), (t & j) !== 0)) {
    var n = e.deps
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s]
        if ((be(i) && At(i), i.wv > e.wv)) return !0
      }
    ;(t & k) !== 0 && R === null && y(e, g)
  }
  return !1
}
function Yt(e, t, n = !0) {
  var r = e.reactions
  if (r !== null && !M?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s]
      ;(i.f & b) !== 0 ? Yt(i, t, !1) : t === i && (n ? y(i, A) : (i.f & g) !== 0 && y(i, j), ee(i))
    }
}
function Ht(e) {
  var t = m,
    n = S,
    r = O,
    s = v,
    i = M,
    l = T,
    o = I,
    a = J,
    f = e.f
  ;((m = null),
    (S = 0),
    (O = null),
    (v = (f & (L | ne)) === 0 ? e : null),
    (M = null),
    me(e.ctx),
    (I = !1),
    (J = ++he),
    e.ac !== null &&
      (Je(() => {
        e.ac.abort(fe)
      }),
      (e.ac = null)))
  try {
    e.f |= Le
    var u = e.fn,
      _ = u(),
      c = e.deps
    if (m !== null) {
      var d
      if ((Oe(e, S), c !== null && S > 0))
        for (c.length = S + m.length, d = 0; d < m.length; d++) c[S + d] = m[d]
      else e.deps = c = m
      if (W && Qe() && (e.f & k) !== 0)
        for (d = S; d < c.length; d++) (c[d].reactions ??= []).push(e)
    } else c !== null && S < c.length && (Oe(e, S), (c.length = S))
    if (ye() && O !== null && !I && c !== null && (e.f & (b | j | A)) === 0)
      for (d = 0; d < O.length; d++) Yt(O[d], e)
    return (
      s !== null && s !== e && (he++, O !== null && (r === null ? (r = O) : r.push(...O))),
      (e.f & Y) !== 0 && (e.f ^= Y),
      _
    )
  } catch (w) {
    return vn(w)
  } finally {
    ;((e.f ^= Le), (m = t), (S = n), (O = r), (v = s), (M = i), me(l), (I = o), (J = a))
  }
}
function Pn(e, t) {
  let n = t.reactions
  if (n !== null) {
    var r = zt.call(n, e)
    if (r !== -1) {
      var s = n.length - 1
      s === 0 ? (n = t.reactions = null) : ((n[r] = n[s]), n.pop())
    }
  }
  n === null &&
    (t.f & b) !== 0 &&
    (m === null || !m.includes(t)) &&
    (y(t, j), (t.f & k) !== 0 && ((t.f ^= k), (t.f &= ~de)), Tt(t), Oe(t, 0))
}
function Oe(e, t) {
  var n = e.deps
  if (n !== null) for (var r = t; r < n.length; r++) Pn(e, n[r])
}
function pe(e) {
  var t = e.f
  if ((t & X) === 0) {
    y(e, g)
    var n = h,
      r = W
    ;((h = e), (W = !0))
    try {
      ;((t & F) !== 0 ? Rn(e) : Dt(e), Pt(e))
      var s = Ht(e)
      ;((e.teardown = typeof s == 'function' ? s : null), (e.wv = jt))
      var i
    } finally {
      ;((W = r), (h = n))
    }
  }
}
async function Kr() {
  ;(await Promise.resolve(), qe())
}
function zr() {
  return U.ensure().settled()
}
function ce(e) {
  var t = e.f,
    n = (t & b) !== 0
  if ((se?.add(e), v !== null && !I)) {
    var r = h !== null && (h.f & X) !== 0
    if (!r && !M?.includes(e)) {
      var s = v.deps
      if ((v.f & Le) !== 0)
        e.rv < he &&
          ((e.rv = he),
          m === null && s !== null && s[S] === e
            ? S++
            : m === null
              ? (m = [e])
              : m.includes(e) || m.push(e))
      else {
        ;(v.deps ??= []).push(e)
        var i = e.reactions
        i === null ? (e.reactions = [v]) : i.includes(v) || i.push(v)
      }
    }
  }
  if (oe) {
    if (H.has(e)) return H.get(e)
    if (n) {
      var l = e,
        o = l.v
      return ((((l.f & g) === 0 && l.reactions !== null) || Bt(l)) && (o = Ze(l)), H.set(l, o), o)
    }
  } else if (n) {
    if (((l = e), R?.has(l))) return R.get(l)
    ;(be(l) && At(l), W && Qe() && (l.f & k) === 0 && Ut(l))
  } else if (R?.has(e)) return R.get(e)
  if ((e.f & Y) !== 0) throw e.v
  return e.v
}
function Ut(e) {
  if (e.deps !== null) {
    e.f ^= k
    for (const t of e.deps)
      ((t.reactions ??= []).push(e), (t.f & b) !== 0 && (t.f & k) === 0 && Ut(t))
  }
}
function Bt(e) {
  if (e.v === E) return !0
  if (e.deps === null) return !1
  for (const t of e.deps) if (H.has(t) || ((t.f & b) !== 0 && Bt(t))) return !0
  return !1
}
function Vt(e) {
  var t = I
  try {
    return ((I = !0), e())
  } finally {
    I = t
  }
}
const Dn = -7169
function y(e, t) {
  e.f = (e.f & Dn) | t
}
function $r(e, t) {
  var n = {}
  for (var r in e) t.includes(r) || (n[r] = e[r])
  for (var s of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, s) && !t.includes(s) && (n[s] = e[s])
  return n
}
function Xr(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (Z in e) Ue(e)
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t]
        typeof n == 'object' && n && Z in n && Ue(n)
      }
  }
}
function Ue(e, t = new Set()) {
  if (typeof e == 'object' && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    ;(t.add(e), e instanceof Date && e.getTime())
    for (let r in e)
      try {
        Ue(e[r], t)
      } catch {}
    const n = ot(e)
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      const r = $t(n)
      for (let s in r) {
        const i = r[s].get
        if (i)
          try {
            i.call(e)
          } catch {}
      }
    }
  }
}
function Gt(e, t, n) {
  if (e == null) return (t(void 0), n && n(void 0), ie)
  const r = Vt(() => e.subscribe(t, n))
  return r.unsubscribe ? () => r.unsubscribe() : r
}
const re = []
function Cn(e, t) {
  return { subscribe: Mn(e, t).subscribe }
}
function Mn(e, t = ie) {
  let n = null
  const r = new Set()
  function s(o) {
    if (pt(e, o) && ((e = o), n)) {
      const a = !re.length
      for (const f of r) (f[1](), re.push(f, e))
      if (a) {
        for (let f = 0; f < re.length; f += 2) re[f][0](re[f + 1])
        re.length = 0
      }
    }
  }
  function i(o) {
    s(o(e))
  }
  function l(o, a = ie) {
    const f = [o, a]
    return (
      r.add(f),
      r.size === 1 && (n = t(s, i) || ie),
      o(e),
      () => {
        ;(r.delete(f), r.size === 0 && n && (n(), (n = null)))
      }
    )
  }
  return { set: s, update: i, subscribe: l }
}
function Zr(e, t, n) {
  const r = !Array.isArray(e),
    s = r ? [e] : e
  if (!s.every(Boolean)) throw new Error('derived() expects stores as input, got a falsy value')
  const i = t.length < 2
  return Cn(n, (l, o) => {
    let a = !1
    const f = []
    let u = 0,
      _ = ie
    const c = () => {
        if (u) return
        _()
        const w = t(r ? f[0] : f, l, o)
        i ? l(w) : (_ = typeof w == 'function' ? w : ie)
      },
      d = s.map((w, G) =>
        Gt(
          w,
          (Ee) => {
            ;((f[G] = Ee), (u &= ~(1 << G)), a && c())
          },
          () => {
            u |= 1 << G
          }
        )
      )
    return (
      (a = !0),
      c(),
      function () {
        ;(ut(d), _(), (a = !1))
      }
    )
  })
}
function Wr(e) {
  let t
  return (Gt(e, (n) => (t = n))(), t)
}
export {
  er as $,
  Q as A,
  x as B,
  Vr as C,
  Pr as D,
  Hr as E,
  hr as F,
  ge as G,
  br as H,
  un as I,
  yr as J,
  ae as K,
  dr as L,
  An as M,
  Ln as N,
  ie as O,
  Sr as P,
  Gt as Q,
  K as R,
  Wr as S,
  _e as T,
  Kn as U,
  tr as V,
  ue as W,
  h as X,
  X as Y,
  yn as Z,
  nr as _,
  Vt as a,
  kn as a$,
  Qn as a0,
  jn as a1,
  Z as a2,
  Hn as a3,
  rr as a4,
  oe as a5,
  jr as a6,
  qr as a7,
  bt as a8,
  qe as a9,
  lr as aA,
  Ve as aB,
  Ke as aC,
  xr as aD,
  on as aE,
  V as aF,
  ze as aG,
  Gn as aH,
  Ir as aI,
  Fn as aJ,
  Lr as aK,
  cn as aL,
  $e as aM,
  F as aN,
  ir as aO,
  sr as aP,
  fr as aQ,
  $r as aR,
  Gr as aS,
  Zn as aT,
  $n as aU,
  Xn as aV,
  Kt as aW,
  Jn as aX,
  P as aY,
  Wn as aZ,
  Mt as a_,
  q as aa,
  Kr as ab,
  Ar as ac,
  Cr as ad,
  Ce as ae,
  wr as af,
  Qe as ag,
  We as ah,
  Me as ai,
  dt as aj,
  U as ak,
  le as al,
  B as am,
  me as an,
  vn as ao,
  v as ap,
  Re as aq,
  Te as ar,
  zn as as,
  we as at,
  Be as au,
  vr as av,
  Je as aw,
  He as ax,
  gn as ay,
  ar as az,
  Fr as b,
  Vn as b0,
  ur as b1,
  _r as b2,
  Rr as b3,
  hn as b4,
  cr as b5,
  Dr as b6,
  E as b7,
  mn as b8,
  or as b9,
  ot as ba,
  Un as bb,
  $t as bc,
  Yn as bd,
  Tr as be,
  zr as bf,
  T as c,
  Zr as d,
  qn as e,
  Xr as f,
  ce as g,
  Xe as h,
  Er as i,
  kr as j,
  mr as k,
  Ie as l,
  Or as m,
  pr as n,
  p as o,
  gr as p,
  Br as q,
  ut as r,
  Nr as s,
  Yr as t,
  Mr as u,
  te as v,
  Mn as w,
  On as x,
  xe as y,
  Ur as z,
}
