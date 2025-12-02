import {
  y as ze,
  E as ie,
  aT as Et,
  K as F,
  A as O,
  ax as _t,
  F as Re,
  g as j,
  Z as or,
  H as ur,
  I as hr,
  J as Ye,
  L as G,
  B as R,
  aj as lr,
  aL as fr,
  z as te,
  D as cr,
  aU as ge,
  aV as Ee,
  o as le,
  aq as Je,
  P as mr,
  ah as Ke,
  aJ as xt,
  aW as yt,
  q as Tt,
  x as vr,
  aX as pr,
  aY as Ae,
  a8 as Ht,
  v as re,
  aZ as br,
  aF as dr,
  a_ as gr,
  aI as Er,
  a$ as _r,
  X as At,
  G as St,
  b0 as xr,
  b1 as yr,
  M as Bt,
  a6 as Ze,
  ad as Tr,
  b2 as Hr,
  b3 as Ar,
  ae as Sr,
  b4 as Br,
  b5 as Nr,
  b6 as Or,
  b7 as Ir,
  b8 as Pr,
  b9 as Lr,
  ba as Mr,
  bb as wr,
  bc as Cr,
  d as W,
  w as $e,
  p as Rr,
  k as Dr,
  m as Ur,
  s as Gr,
  O as Fr,
  n as jr,
  j as Vr,
  ac as kr,
  bd as Xr,
} from './ZIxVAD3j.js'
import {
  d as Wr,
  i as zr,
  g as ue,
  j as Zr,
  k as $r,
  l as qr,
  n as Qr,
  o as Yr,
  p as Jr,
  a as et,
  c as Kr,
} from './7vpOr-8R.js'
import { B as Nt, p as q, r as en } from './DpJNoy2a.js'
function tn(e, t) {
  return t
}
function rn(e, t, r) {
  for (var n = e.items, i = [], a = t.length, s = 0; s < a; s++)
    gr(t[s].e, i, !0)
  var o = a > 0 && i.length === 0 && r !== null
  if (o) {
    var c = r.parentNode
    ;(Er(c), c.append(r), n.clear(), w(e, t[0].prev, t[a - 1].next))
  }
  _r(i, () => {
    for (var l = 0; l < a; l++) {
      var u = t[l]
      ;(o || (n.delete(u.k), w(e, u.prev, u.next)), re(u.e, !o))
    }
  })
}
function nn(e, t, r, n, i, a = null) {
  var s = e,
    o = { flags: t, items: new Map(), first: null },
    c = (t & Et) !== 0
  if (c) {
    var l = e
    s = O ? F(_t(l)) : l.appendChild(ze())
  }
  O && Re()
  var u = null,
    m = !1,
    h = new Map(),
    y = or(() => {
      var f = r()
      return yt(f) ? f : f == null ? [] : xt(f)
    }),
    b,
    E
  function _() {
    ;(an(E, b, o, h, s, i, t, n, r),
      a !== null &&
        (b.length === 0
          ? u
            ? Tt(u)
            : (u = te(() => a(s)))
          : u !== null &&
            vr(u, () => {
              u = null
            })))
  }
  ;(ie(() => {
    ;((E ??= At), (b = j(y)))
    var f = b.length
    if (m && f === 0) return
    m = f === 0
    let p = !1
    if (O) {
      var g = ur(s) === hr
      g !== (f === 0) && ((s = Ye()), F(s), G(!1), (p = !0))
    }
    if (O) {
      for (var T = null, x, v = 0; v < f; v++) {
        if (R.nodeType === lr && R.data === fr) {
          ;((s = R), (p = !0), G(!1))
          break
        }
        var d = b[v],
          B = n(d, v)
        ;((x = De(R, o, T, null, d, B, v, i, t, r)), o.items.set(B, x), (T = x))
      }
      f > 0 && F(Ye())
    }
    if (O) f === 0 && a && (u = te(() => a(s)))
    else if (cr()) {
      var L = new Set(),
        I = le
      for (v = 0; v < f; v += 1) {
        ;((d = b[v]), (B = n(d, v)))
        var C = o.items.get(B) ?? h.get(B)
        ;(C
          ? (t & (ge | Ee)) !== 0 && Ot(C, d, v, t)
          : ((x = De(null, o, null, null, d, B, v, i, t, r, !0)), h.set(B, x)),
          L.add(B))
      }
      for (const [M, oe] of o.items) L.has(M) || I.skipped_effects.add(oe.e)
      I.oncommit(_)
    } else _()
    ;(p && G(!0), j(y))
  }),
    O && (s = R))
}
function an(e, t, r, n, i, a, s, o, c) {
  var l = (s & br) !== 0,
    u = (s & (ge | Ee)) !== 0,
    m = t.length,
    h = r.items,
    y = r.first,
    b = y,
    E,
    _ = null,
    f,
    p = [],
    g = [],
    T,
    x,
    v,
    d
  if (l)
    for (d = 0; d < m; d += 1)
      ((T = t[d]),
        (x = o(T, d)),
        (v = h.get(x)),
        v !== void 0 && (v.a?.measure(), (f ??= new Set()).add(v)))
  for (d = 0; d < m; d += 1) {
    if (((T = t[d]), (x = o(T, d)), (v = h.get(x)), v === void 0)) {
      var B = n.get(x)
      if (B !== void 0) {
        ;(n.delete(x), h.set(x, B))
        var L = _ ? _.next : b
        ;(w(r, _, B), w(r, B, L), Se(B, L, i), (_ = B))
      } else {
        var I = b ? b.e.nodes_start : i
        _ = De(I, r, _, _ === null ? r.first : _.next, T, x, d, a, s, c)
      }
      ;(h.set(x, _), (p = []), (g = []), (b = _.next))
      continue
    }
    if (
      (u && Ot(v, T, d, s),
      (v.e.f & Ae) !== 0 &&
        (Tt(v.e), l && (v.a?.unfix(), (f ??= new Set()).delete(v))),
      v !== b)
    ) {
      if (E !== void 0 && E.has(v)) {
        if (p.length < g.length) {
          var C = g[0],
            M
          _ = C.prev
          var oe = p[0],
            Te = p[p.length - 1]
          for (M = 0; M < p.length; M += 1) Se(p[M], C, i)
          for (M = 0; M < g.length; M += 1) E.delete(g[M])
          ;(w(r, oe.prev, Te.next),
            w(r, _, oe),
            w(r, Te, C),
            (b = C),
            (_ = Te),
            (d -= 1),
            (p = []),
            (g = []))
        } else
          (E.delete(v),
            Se(v, b, i),
            w(r, v.prev, v.next),
            w(r, v, _ === null ? r.first : _.next),
            w(r, _, v),
            (_ = v))
        continue
      }
      for (p = [], g = []; b !== null && b.k !== x; )
        ((b.e.f & Ae) === 0 && (E ??= new Set()).add(b),
          g.push(b),
          (b = b.next))
      if (b === null) continue
      v = b
    }
    ;(p.push(v), (_ = v), (b = v.next))
  }
  if (b !== null || E !== void 0) {
    for (var $ = E === void 0 ? [] : xt(E); b !== null; )
      ((b.e.f & Ae) === 0 && $.push(b), (b = b.next))
    var He = $.length
    if (He > 0) {
      var ar = (s & Et) !== 0 && m === 0 ? i : null
      if (l) {
        for (d = 0; d < He; d += 1) $[d].a?.measure()
        for (d = 0; d < He; d += 1) $[d].a?.fix()
      }
      rn(r, $, ar)
    }
  }
  ;(l &&
    Ht(() => {
      if (f !== void 0) for (v of f) v.a?.apply()
    }),
    (e.first = r.first && r.first.e),
    (e.last = _ && _.e))
  for (var sr of n.values()) re(sr.e)
  n.clear()
}
function Ot(e, t, r, n) {
  ;((n & ge) !== 0 && Je(e.v, t), (n & Ee) !== 0 ? Je(e.i, r) : (e.i = r))
}
function De(e, t, r, n, i, a, s, o, c, l, u) {
  var m = (c & ge) !== 0,
    h = (c & pr) === 0,
    y = m ? (h ? mr(i, !1, !1) : Ke(i)) : i,
    b = (c & Ee) === 0 ? s : Ke(s),
    E = { i: b, v: y, k: a, a: null, e: null, prev: r, next: n }
  try {
    if (e === null) {
      var _ = document.createDocumentFragment()
      _.append((e = ze()))
    }
    return (
      (E.e = te(() => o(e, y, b, l), O)),
      (E.e.prev = r && r.e),
      (E.e.next = n && n.e),
      r === null ? u || (t.first = E) : ((r.next = E), (r.e.next = E.e)),
      n !== null && ((n.prev = E), (n.e.prev = E.e)),
      E
    )
  } finally {
  }
}
function Se(e, t, r) {
  for (
    var n = e.next ? e.next.e.nodes_start : r,
      i = t ? t.e.nodes_start : r,
      a = e.e.nodes_start;
    a !== null && a !== n;

  ) {
    var s = dr(a)
    ;(i.before(a), (a = s))
  }
}
function w(e, t, r) {
  ;(t === null ? (e.first = r) : ((t.next = r), (t.e.next = r && r.e)),
    r !== null && ((r.prev = t), (r.e.prev = t && t.e)))
}
function sn(e, t, ...r) {
  var n = new Nt(e)
  ie(() => {
    const i = t() ?? null
    n.ensure(i, i && ((a) => i(a, ...r)))
  }, St)
}
function on(e, t, r, n, i, a) {
  let s = O
  O && Re()
  var o = null
  O && R.nodeType === xr && ((o = R), Re())
  var c = O ? R : e,
    l = new Nt(c, !1)
  ;(ie(() => {
    const u = t() || null
    var m = yr
    if (u === null) {
      ;(l.ensure(null, null), ue(!0))
      return
    }
    return (
      l.ensure(u, (h) => {
        if (u) {
          if (((o = O ? o : document.createElementNS(m, u)), Wr(o, o), n)) {
            O && zr(u) && o.append(document.createComment(''))
            var y = O ? _t(o) : o.appendChild(ze())
            ;(O && (y === null ? G(!1) : F(y)), n(o, y))
          }
          ;((At.nodes_end = o), h.before(o))
        }
        O && F(h)
      }),
      ue(!0),
      () => {
        u && ue(!1)
      }
    )
  }, St),
    Bt(() => {
      ue(!0)
    }),
    s && (G(!0), F(c)))
}
function un(e, t) {
  var r = void 0,
    n
  ie(() => {
    r !== (r = t()) &&
      (n && (re(n), (n = null)),
      r &&
        (n = te(() => {
          Ze(() => r(e))
        })))
  })
}
function It(e) {
  var t,
    r,
    n = ''
  if (typeof e == 'string' || typeof e == 'number') n += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length
      for (t = 0; t < i; t++)
        e[t] && (r = It(e[t])) && (n && (n += ' '), (n += r))
    } else for (r in e) e[r] && (n && (n += ' '), (n += r))
  return n
}
function hn() {
  for (var e, t, r = 0, n = '', i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = It(e)) && (n && (n += ' '), (n += t))
  return n
}
function ln(e) {
  return typeof e == 'object' ? hn(e) : (e ?? '')
}
const tt = [
  ...` 	
\r\f \v\uFEFF`,
]
function fn(e, t, r) {
  var n = e == null ? '' : '' + e
  if (r) {
    for (var i in r)
      if (r[i]) n = n ? n + ' ' + i : i
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var o = s + a
          ;(s === 0 || tt.includes(n[s - 1])) &&
          (o === n.length || tt.includes(n[o]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(o + 1))
            : (s = o)
        }
  }
  return n === '' ? null : n
}
function rt(e, t = !1) {
  var r = t ? ' !important;' : ';',
    n = ''
  for (var i in e) {
    var a = e[i]
    a != null && a !== '' && (n += ' ' + i + ': ' + a + r)
  }
  return n
}
function Be(e) {
  return e[0] !== '-' || e[1] !== '-' ? e.toLowerCase() : e
}
function cn(e, t) {
  if (t) {
    var r = '',
      n,
      i
    if ((Array.isArray(t) ? ((n = t[0]), (i = t[1])) : (n = t), e)) {
      e = String(e)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, '')
        .trim()
      var a = !1,
        s = 0,
        o = !1,
        c = []
      ;(n && c.push(...Object.keys(n).map(Be)),
        i && c.push(...Object.keys(i).map(Be)))
      var l = 0,
        u = -1
      const E = e.length
      for (var m = 0; m < E; m++) {
        var h = e[m]
        if (
          (o
            ? h === '/' && e[m - 1] === '*' && (o = !1)
            : a
              ? a === h && (a = !1)
              : h === '/' && e[m + 1] === '*'
                ? (o = !0)
                : h === '"' || h === "'"
                  ? (a = h)
                  : h === '('
                    ? s++
                    : h === ')' && s--,
          !o && a === !1 && s === 0)
        ) {
          if (h === ':' && u === -1) u = m
          else if (h === ';' || m === E - 1) {
            if (u !== -1) {
              var y = Be(e.substring(l, u).trim())
              if (!c.includes(y)) {
                h !== ';' && m++
                var b = e.substring(l, m).trim()
                r += ' ' + b + ';'
              }
            }
            ;((l = m + 1), (u = -1))
          }
        }
      }
    }
    return (
      n && (r += rt(n)),
      i && (r += rt(i, !0)),
      (r = r.trim()),
      r === '' ? null : r
    )
  }
  return e == null ? null : String(e)
}
function mn(e, t, r, n, i, a) {
  var s = e.__className
  if (O || s !== r || s === void 0) {
    var o = fn(r, n, a)
    ;((!O || o !== e.getAttribute('class')) &&
      (o == null
        ? e.removeAttribute('class')
        : t
          ? (e.className = o)
          : e.setAttribute('class', o)),
      (e.__className = r))
  } else if (a && i !== a)
    for (var c in a) {
      var l = !!a[c]
      ;(i == null || l !== !!i[c]) && e.classList.toggle(c, l)
    }
  return a
}
function Ne(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i]
    t[i] !== a &&
      (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n))
  }
}
function vn(e, t, r, n) {
  var i = e.__style
  if (O || i !== t) {
    var a = cn(t, n)
    ;((!O || a !== e.getAttribute('style')) &&
      (a == null ? e.removeAttribute('style') : (e.style.cssText = a)),
      (e.__style = t))
  } else
    n &&
      (Array.isArray(n)
        ? (Ne(e, r?.[0], n[0]), Ne(e, r?.[1], n[1], 'important'))
        : Ne(e, r, n))
  return n
}
function me(e, t, r = !1) {
  if (e.multiple) {
    if (t == null) return
    if (!yt(t)) return Hr()
    for (var n of e.options) n.selected = t.includes(ee(n))
    return
  }
  for (n of e.options) {
    var i = ee(n)
    if (Ar(i, t)) {
      n.selected = !0
      return
    }
  }
  ;(!r || t !== void 0) && (e.selectedIndex = -1)
}
function Pt(e) {
  var t = new MutationObserver(() => {
    me(e, e.__value)
  })
  ;(t.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ['value'],
  }),
    Bt(() => {
      t.disconnect()
    }))
}
function ea(e, t, r = t) {
  var n = new WeakSet(),
    i = !0
  ;(Tr(e, 'change', (a) => {
    var s = a ? '[selected]' : ':checked',
      o
    if (e.multiple) o = [].map.call(e.querySelectorAll(s), ee)
    else {
      var c = e.querySelector(s) ?? e.querySelector('option:not([disabled])')
      o = c && ee(c)
    }
    ;(r(o), le !== null && n.add(le))
  }),
    Ze(() => {
      var a = t()
      if (e === document.activeElement) {
        var s = Sr ?? le
        if (n.has(s)) return
      }
      if ((me(e, a, i), i && a === void 0)) {
        var o = e.querySelector(':checked')
        o !== null && ((a = ee(o)), r(a))
      }
      ;((e.__value = a), (i = !1))
    }),
    Pt(e))
}
function ee(e) {
  return '__value' in e ? e.__value : e.value
}
const Q = Symbol('class'),
  Y = Symbol('style'),
  Lt = Symbol('is custom element'),
  Mt = Symbol('is html')
function pn(e) {
  if (O) {
    var t = !1,
      r = () => {
        if (!t) {
          if (((t = !0), e.hasAttribute('value'))) {
            var n = e.value
            ;(ve(e, 'value', null), (e.value = n))
          }
          if (e.hasAttribute('checked')) {
            var i = e.checked
            ;(ve(e, 'checked', null), (e.checked = i))
          }
        }
      }
    ;((e.__on_r = r), Ht(r), Pr())
  }
}
function bn(e, t) {
  t
    ? e.hasAttribute('selected') || e.setAttribute('selected', '')
    : e.removeAttribute('selected')
}
function ve(e, t, r, n) {
  var i = wt(e)
  ;(O &&
    ((i[t] = e.getAttribute(t)),
    t === 'src' ||
      t === 'srcset' ||
      (t === 'href' && e.nodeName === 'LINK'))) ||
    (i[t] !== (i[t] = r) &&
      (t === 'loading' && (e[wr] = r),
      r == null
        ? e.removeAttribute(t)
        : typeof r != 'string' && Ct(e).includes(t)
          ? (e[t] = r)
          : e.setAttribute(t, r)))
}
function dn(e, t, r, n, i = !1, a = !1) {
  if (O && i && e.tagName === 'INPUT') {
    var s = e,
      o = s.type === 'checkbox' ? 'defaultChecked' : 'defaultValue'
    o in r || pn(s)
  }
  var c = wt(e),
    l = c[Lt],
    u = !c[Mt]
  let m = O && l
  m && G(!1)
  var h = t || {},
    y = e.tagName === 'OPTION'
  for (var b in t) b in r || (r[b] = null)
  ;(r.class ? (r.class = ln(r.class)) : r[Q] && (r.class = null),
    r[Y] && (r.style ??= null))
  var E = Ct(e)
  for (const v in r) {
    let d = r[v]
    if (y && v === 'value' && d == null) {
      ;((e.value = e.__value = ''), (h[v] = d))
      continue
    }
    if (v === 'class') {
      var _ = e.namespaceURI === 'http://www.w3.org/1999/xhtml'
      ;(mn(e, _, d, n, t?.[Q], r[Q]), (h[v] = d), (h[Q] = r[Q]))
      continue
    }
    if (v === 'style') {
      ;(vn(e, d, t?.[Y], r[Y]), (h[v] = d), (h[Y] = r[Y]))
      continue
    }
    var f = h[v]
    if (!(d === f && !(d === void 0 && e.hasAttribute(v)))) {
      h[v] = d
      var p = v[0] + v[1]
      if (p !== '$$')
        if (p === 'on') {
          const B = {},
            L = '$$' + v
          let I = v.slice(2)
          var g = Yr(I)
          if ((Zr(I) && ((I = I.slice(0, -7)), (B.capture = !0)), !g && f)) {
            if (d != null) continue
            ;(e.removeEventListener(I, h[L], B), (h[L] = null))
          }
          if (d != null)
            if (g) ((e[`__${I}`] = d), qr([I]))
            else {
              let C = function (M) {
                h[v].call(this, M)
              }
              h[L] = $r(I, e, C, B)
            }
          else g && (e[`__${I}`] = void 0)
        } else if (v === 'style') ve(e, v, d)
        else if (v === 'autofocus') Or(e, !!d)
        else if (!l && (v === '__value' || (v === 'value' && d != null)))
          e.value = e.__value = d
        else if (v === 'selected' && y) bn(e, d)
        else {
          var T = v
          u || (T = Qr(T))
          var x = T === 'defaultValue' || T === 'defaultChecked'
          if (d == null && !l && !x)
            if (((c[v] = null), T === 'value' || T === 'checked')) {
              let B = e
              const L = t === void 0
              if (T === 'value') {
                let I = B.defaultValue
                ;(B.removeAttribute(T),
                  (B.defaultValue = I),
                  (B.value = B.__value = L ? I : null))
              } else {
                let I = B.defaultChecked
                ;(B.removeAttribute(T),
                  (B.defaultChecked = I),
                  (B.checked = L ? I : !1))
              }
            } else e.removeAttribute(v)
          else
            x || (E.includes(T) && (l || typeof d != 'string'))
              ? ((e[T] = d), T in c && (c[T] = Ir))
              : typeof d != 'function' && ve(e, T, d)
        }
    }
  }
  return (m && G(!0), h)
}
function nt(e, t, r = [], n = [], i = [], a, s = !1, o = !1) {
  Br(i, r, n, (c) => {
    var l = void 0,
      u = {},
      m = e.nodeName === 'SELECT',
      h = !1
    if (
      (ie(() => {
        var b = t(...c.map(j)),
          E = dn(e, l, b, a, s, o)
        h && m && 'value' in b && me(e, b.value)
        for (let f of Object.getOwnPropertySymbols(u)) b[f] || re(u[f])
        for (let f of Object.getOwnPropertySymbols(b)) {
          var _ = b[f]
          ;(f.description === Nr &&
            (!l || _ !== l[f]) &&
            (u[f] && re(u[f]), (u[f] = te(() => un(e, () => _)))),
            (E[f] = _))
        }
        l = E
      }),
      m)
    ) {
      var y = e
      Ze(() => {
        ;(me(y, l.value, !0), Pt(y))
      })
    }
    h = !0
  })
}
function wt(e) {
  return (e.__attributes ??= {
    [Lt]: e.nodeName.includes('-'),
    [Mt]: e.namespaceURI === Lr,
  })
}
var it = new Map()
function Ct(e) {
  var t = e.getAttribute('is') || e.nodeName,
    r = it.get(t)
  if (r) return r
  it.set(t, (r = []))
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = Cr(i)
    for (var s in n) n[s].set && r.push(s)
    i = Mr(i)
  }
  return r
}
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Oe, at
function En() {
  if (at) return Oe
  at = 1
  var e = function (p) {
    return t(p) && !r(p)
  }
  function t(f) {
    return !!f && typeof f == 'object'
  }
  function r(f) {
    var p = Object.prototype.toString.call(f)
    return p === '[object RegExp]' || p === '[object Date]' || a(f)
  }
  var n = typeof Symbol == 'function' && Symbol.for,
    i = n ? Symbol.for('react.element') : 60103
  function a(f) {
    return f.$$typeof === i
  }
  function s(f) {
    return Array.isArray(f) ? [] : {}
  }
  function o(f, p) {
    return p.clone !== !1 && p.isMergeableObject(f) ? E(s(f), f, p) : f
  }
  function c(f, p, g) {
    return f.concat(p).map(function (T) {
      return o(T, g)
    })
  }
  function l(f, p) {
    if (!p.customMerge) return E
    var g = p.customMerge(f)
    return typeof g == 'function' ? g : E
  }
  function u(f) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(f).filter(function (p) {
          return Object.propertyIsEnumerable.call(f, p)
        })
      : []
  }
  function m(f) {
    return Object.keys(f).concat(u(f))
  }
  function h(f, p) {
    try {
      return p in f
    } catch {
      return !1
    }
  }
  function y(f, p) {
    return (
      h(f, p) &&
      !(
        Object.hasOwnProperty.call(f, p) &&
        Object.propertyIsEnumerable.call(f, p)
      )
    )
  }
  function b(f, p, g) {
    var T = {}
    return (
      g.isMergeableObject(f) &&
        m(f).forEach(function (x) {
          T[x] = o(f[x], g)
        }),
      m(p).forEach(function (x) {
        y(f, x) ||
          (h(f, x) && g.isMergeableObject(p[x])
            ? (T[x] = l(x, g)(f[x], p[x], g))
            : (T[x] = o(p[x], g)))
      }),
      T
    )
  }
  function E(f, p, g) {
    ;((g = g || {}),
      (g.arrayMerge = g.arrayMerge || c),
      (g.isMergeableObject = g.isMergeableObject || e),
      (g.cloneUnlessOtherwiseSpecified = o))
    var T = Array.isArray(p),
      x = Array.isArray(f),
      v = T === x
    return v ? (T ? g.arrayMerge(f, p, g) : b(f, p, g)) : o(p, g)
  }
  E.all = function (p, g) {
    if (!Array.isArray(p)) throw new Error('first argument should be an array')
    return p.reduce(function (T, x) {
      return E(T, x, g)
    }, {})
  }
  var _ = E
  return ((Oe = _), Oe)
}
var _n = En()
const xn = gn(_n)
var Ue = function (e, t) {
  return (
    (Ue =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n
        }) ||
      function (r, n) {
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
      }),
    Ue(e, t)
  )
}
function _e(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    )
  Ue(e, t)
  function r() {
    this.constructor = e
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r())
}
var S = function () {
  return (
    (S =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n]
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
      }),
    S.apply(this, arguments)
  )
}
function yn(e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]])
  return r
}
function Ie(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]))
  return e.concat(a || Array.prototype.slice.call(t))
}
function Pe(e, t) {
  var r = t && t.cache ? t.cache : On,
    n = t && t.serializer ? t.serializer : Bn,
    i = t && t.strategy ? t.strategy : An
  return i(e, { cache: r, serializer: n })
}
function Tn(e) {
  return e == null || typeof e == 'number' || typeof e == 'boolean'
}
function Hn(e, t, r, n) {
  var i = Tn(n) ? n : r(n),
    a = t.get(i)
  return (typeof a > 'u' && ((a = e.call(this, n)), t.set(i, a)), a)
}
function Rt(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3),
    i = r(n),
    a = t.get(i)
  return (typeof a > 'u' && ((a = e.apply(this, n)), t.set(i, a)), a)
}
function Dt(e, t, r, n, i) {
  return r.bind(t, e, n, i)
}
function An(e, t) {
  var r = e.length === 1 ? Hn : Rt
  return Dt(e, this, r, t.cache.create(), t.serializer)
}
function Sn(e, t) {
  return Dt(e, this, Rt, t.cache.create(), t.serializer)
}
var Bn = function () {
    return JSON.stringify(arguments)
  },
  Nn = (function () {
    function e() {
      this.cache = Object.create(null)
    }
    return (
      (e.prototype.get = function (t) {
        return this.cache[t]
      }),
      (e.prototype.set = function (t, r) {
        this.cache[t] = r
      }),
      e
    )
  })(),
  On = {
    create: function () {
      return new Nn()
    },
  },
  Le = { variadic: Sn },
  H
;(function (e) {
  ;((e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
    'EXPECT_ARGUMENT_CLOSING_BRACE'),
    (e[(e.EMPTY_ARGUMENT = 2)] = 'EMPTY_ARGUMENT'),
    (e[(e.MALFORMED_ARGUMENT = 3)] = 'MALFORMED_ARGUMENT'),
    (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = 'EXPECT_ARGUMENT_TYPE'),
    (e[(e.INVALID_ARGUMENT_TYPE = 5)] = 'INVALID_ARGUMENT_TYPE'),
    (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = 'EXPECT_ARGUMENT_STYLE'),
    (e[(e.INVALID_NUMBER_SKELETON = 7)] = 'INVALID_NUMBER_SKELETON'),
    (e[(e.INVALID_DATE_TIME_SKELETON = 8)] = 'INVALID_DATE_TIME_SKELETON'),
    (e[(e.EXPECT_NUMBER_SKELETON = 9)] = 'EXPECT_NUMBER_SKELETON'),
    (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = 'EXPECT_DATE_TIME_SKELETON'),
    (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
      'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
    (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
      'EXPECT_SELECT_ARGUMENT_OPTIONS'),
    (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
      'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
    (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
      'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
    (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
      'EXPECT_SELECT_ARGUMENT_SELECTOR'),
    (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
      'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
    (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
      'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
    (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
      'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
    (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
      'INVALID_PLURAL_ARGUMENT_SELECTOR'),
    (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
      'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
    (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
      'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
    (e[(e.MISSING_OTHER_CLAUSE = 22)] = 'MISSING_OTHER_CLAUSE'),
    (e[(e.INVALID_TAG = 23)] = 'INVALID_TAG'),
    (e[(e.INVALID_TAG_NAME = 25)] = 'INVALID_TAG_NAME'),
    (e[(e.UNMATCHED_CLOSING_TAG = 26)] = 'UNMATCHED_CLOSING_TAG'),
    (e[(e.UNCLOSED_TAG = 27)] = 'UNCLOSED_TAG'))
})(H || (H = {}))
var N
;(function (e) {
  ;((e[(e.literal = 0)] = 'literal'),
    (e[(e.argument = 1)] = 'argument'),
    (e[(e.number = 2)] = 'number'),
    (e[(e.date = 3)] = 'date'),
    (e[(e.time = 4)] = 'time'),
    (e[(e.select = 5)] = 'select'),
    (e[(e.plural = 6)] = 'plural'),
    (e[(e.pound = 7)] = 'pound'),
    (e[(e.tag = 8)] = 'tag'))
})(N || (N = {}))
var V
;(function (e) {
  ;((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'))
})(V || (V = {}))
function st(e) {
  return e.type === N.literal
}
function In(e) {
  return e.type === N.argument
}
function Ut(e) {
  return e.type === N.number
}
function Gt(e) {
  return e.type === N.date
}
function Ft(e) {
  return e.type === N.time
}
function jt(e) {
  return e.type === N.select
}
function Vt(e) {
  return e.type === N.plural
}
function Pn(e) {
  return e.type === N.pound
}
function kt(e) {
  return e.type === N.tag
}
function Xt(e) {
  return !!(e && typeof e == 'object' && e.type === V.number)
}
function Ge(e) {
  return !!(e && typeof e == 'object' && e.type === V.dateTime)
}
var Wt = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  Ln =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function Mn(e) {
  var t = {}
  return (
    e.replace(Ln, function (r) {
      var n = r.length
      switch (r[0]) {
        case 'G':
          t.era = n === 4 ? 'long' : n === 5 ? 'narrow' : 'short'
          break
        case 'y':
          t.year = n === 2 ? '2-digit' : 'numeric'
          break
        case 'Y':
        case 'u':
        case 'U':
        case 'r':
          throw new RangeError(
            '`Y/u/U/r` (year) patterns are not supported, use `y` instead'
          )
        case 'q':
        case 'Q':
          throw new RangeError('`q/Q` (quarter) patterns are not supported')
        case 'M':
        case 'L':
          t.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][n - 1]
          break
        case 'w':
        case 'W':
          throw new RangeError('`w/W` (week) patterns are not supported')
        case 'd':
          t.day = ['numeric', '2-digit'][n - 1]
          break
        case 'D':
        case 'F':
        case 'g':
          throw new RangeError(
            '`D/F/g` (day) patterns are not supported, use `d` instead'
          )
        case 'E':
          t.weekday = n === 4 ? 'long' : n === 5 ? 'narrow' : 'short'
          break
        case 'e':
          if (n < 4)
            throw new RangeError(
              '`e..eee` (weekday) patterns are not supported'
            )
          t.weekday = ['short', 'long', 'narrow', 'short'][n - 4]
          break
        case 'c':
          if (n < 4)
            throw new RangeError(
              '`c..ccc` (weekday) patterns are not supported'
            )
          t.weekday = ['short', 'long', 'narrow', 'short'][n - 4]
          break
        case 'a':
          t.hour12 = !0
          break
        case 'b':
        case 'B':
          throw new RangeError(
            '`b/B` (period) patterns are not supported, use `a` instead'
          )
        case 'h':
          ;((t.hourCycle = 'h12'), (t.hour = ['numeric', '2-digit'][n - 1]))
          break
        case 'H':
          ;((t.hourCycle = 'h23'), (t.hour = ['numeric', '2-digit'][n - 1]))
          break
        case 'K':
          ;((t.hourCycle = 'h11'), (t.hour = ['numeric', '2-digit'][n - 1]))
          break
        case 'k':
          ;((t.hourCycle = 'h24'), (t.hour = ['numeric', '2-digit'][n - 1]))
          break
        case 'j':
        case 'J':
        case 'C':
          throw new RangeError(
            '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead'
          )
        case 'm':
          t.minute = ['numeric', '2-digit'][n - 1]
          break
        case 's':
          t.second = ['numeric', '2-digit'][n - 1]
          break
        case 'S':
        case 'A':
          throw new RangeError(
            '`S/A` (second) patterns are not supported, use `s` instead'
          )
        case 'z':
          t.timeZoneName = n < 4 ? 'short' : 'long'
          break
        case 'Z':
        case 'O':
        case 'v':
        case 'V':
        case 'X':
        case 'x':
          throw new RangeError(
            '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead'
          )
      }
      return ''
    }),
    t
  )
}
var wn = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i
function Cn(e) {
  if (e.length === 0) throw new Error('Number skeleton cannot be empty')
  for (
    var t = e.split(wn).filter(function (h) {
        return h.length > 0
      }),
      r = [],
      n = 0,
      i = t;
    n < i.length;
    n++
  ) {
    var a = i[n],
      s = a.split('/')
    if (s.length === 0) throw new Error('Invalid number skeleton')
    for (var o = s[0], c = s.slice(1), l = 0, u = c; l < u.length; l++) {
      var m = u[l]
      if (m.length === 0) throw new Error('Invalid number skeleton')
    }
    r.push({ stem: o, options: c })
  }
  return r
}
function Rn(e) {
  return e.replace(/^(.*?)-/, '')
}
var ot = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
  zt = /^(@+)?(\+|#+)?[rs]?$/g,
  Dn = /(\*)(0+)|(#+)(0+)|(0+)/g,
  Zt = /^(0+)$/
function ut(e) {
  var t = {}
  return (
    e[e.length - 1] === 'r'
      ? (t.roundingPriority = 'morePrecision')
      : e[e.length - 1] === 's' && (t.roundingPriority = 'lessPrecision'),
    e.replace(zt, function (r, n, i) {
      return (
        typeof i != 'string'
          ? ((t.minimumSignificantDigits = n.length),
            (t.maximumSignificantDigits = n.length))
          : i === '+'
            ? (t.minimumSignificantDigits = n.length)
            : n[0] === '#'
              ? (t.maximumSignificantDigits = n.length)
              : ((t.minimumSignificantDigits = n.length),
                (t.maximumSignificantDigits =
                  n.length + (typeof i == 'string' ? i.length : 0))),
        ''
      )
    }),
    t
  )
}
function $t(e) {
  switch (e) {
    case 'sign-auto':
      return { signDisplay: 'auto' }
    case 'sign-accounting':
    case '()':
      return { currencySign: 'accounting' }
    case 'sign-always':
    case '+!':
      return { signDisplay: 'always' }
    case 'sign-accounting-always':
    case '()!':
      return { signDisplay: 'always', currencySign: 'accounting' }
    case 'sign-except-zero':
    case '+?':
      return { signDisplay: 'exceptZero' }
    case 'sign-accounting-except-zero':
    case '()?':
      return { signDisplay: 'exceptZero', currencySign: 'accounting' }
    case 'sign-never':
    case '+_':
      return { signDisplay: 'never' }
  }
}
function Un(e) {
  var t
  if (
    (e[0] === 'E' && e[1] === 'E'
      ? ((t = { notation: 'engineering' }), (e = e.slice(2)))
      : e[0] === 'E' && ((t = { notation: 'scientific' }), (e = e.slice(1))),
    t)
  ) {
    var r = e.slice(0, 2)
    if (
      (r === '+!'
        ? ((t.signDisplay = 'always'), (e = e.slice(2)))
        : r === '+?' && ((t.signDisplay = 'exceptZero'), (e = e.slice(2))),
      !Zt.test(e))
    )
      throw new Error('Malformed concise eng/scientific notation')
    t.minimumIntegerDigits = e.length
  }
  return t
}
function ht(e) {
  var t = {},
    r = $t(e)
  return r || t
}
function Gn(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r]
    switch (i.stem) {
      case 'percent':
      case '%':
        t.style = 'percent'
        continue
      case '%x100':
        ;((t.style = 'percent'), (t.scale = 100))
        continue
      case 'currency':
        ;((t.style = 'currency'), (t.currency = i.options[0]))
        continue
      case 'group-off':
      case ',_':
        t.useGrouping = !1
        continue
      case 'precision-integer':
      case '.':
        t.maximumFractionDigits = 0
        continue
      case 'measure-unit':
      case 'unit':
        ;((t.style = 'unit'), (t.unit = Rn(i.options[0])))
        continue
      case 'compact-short':
      case 'K':
        ;((t.notation = 'compact'), (t.compactDisplay = 'short'))
        continue
      case 'compact-long':
      case 'KK':
        ;((t.notation = 'compact'), (t.compactDisplay = 'long'))
        continue
      case 'scientific':
        t = S(
          S(S({}, t), { notation: 'scientific' }),
          i.options.reduce(function (c, l) {
            return S(S({}, c), ht(l))
          }, {})
        )
        continue
      case 'engineering':
        t = S(
          S(S({}, t), { notation: 'engineering' }),
          i.options.reduce(function (c, l) {
            return S(S({}, c), ht(l))
          }, {})
        )
        continue
      case 'notation-simple':
        t.notation = 'standard'
        continue
      case 'unit-width-narrow':
        ;((t.currencyDisplay = 'narrowSymbol'), (t.unitDisplay = 'narrow'))
        continue
      case 'unit-width-short':
        ;((t.currencyDisplay = 'code'), (t.unitDisplay = 'short'))
        continue
      case 'unit-width-full-name':
        ;((t.currencyDisplay = 'name'), (t.unitDisplay = 'long'))
        continue
      case 'unit-width-iso-code':
        t.currencyDisplay = 'symbol'
        continue
      case 'scale':
        t.scale = parseFloat(i.options[0])
        continue
      case 'rounding-mode-floor':
        t.roundingMode = 'floor'
        continue
      case 'rounding-mode-ceiling':
        t.roundingMode = 'ceil'
        continue
      case 'rounding-mode-down':
        t.roundingMode = 'trunc'
        continue
      case 'rounding-mode-up':
        t.roundingMode = 'expand'
        continue
      case 'rounding-mode-half-even':
        t.roundingMode = 'halfEven'
        continue
      case 'rounding-mode-half-down':
        t.roundingMode = 'halfTrunc'
        continue
      case 'rounding-mode-half-up':
        t.roundingMode = 'halfExpand'
        continue
      case 'integer-width':
        if (i.options.length > 1)
          throw new RangeError(
            'integer-width stems only accept a single optional option'
          )
        i.options[0].replace(Dn, function (c, l, u, m, h, y) {
          if (l) t.minimumIntegerDigits = u.length
          else {
            if (m && h)
              throw new Error(
                'We currently do not support maximum integer digits'
              )
            if (y)
              throw new Error(
                'We currently do not support exact integer digits'
              )
          }
          return ''
        })
        continue
    }
    if (Zt.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length
      continue
    }
    if (ot.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError(
          'Fraction-precision stems only accept a single optional option'
        )
      i.stem.replace(ot, function (c, l, u, m, h, y) {
        return (
          u === '*'
            ? (t.minimumFractionDigits = l.length)
            : m && m[0] === '#'
              ? (t.maximumFractionDigits = m.length)
              : h && y
                ? ((t.minimumFractionDigits = h.length),
                  (t.maximumFractionDigits = h.length + y.length))
                : ((t.minimumFractionDigits = l.length),
                  (t.maximumFractionDigits = l.length)),
          ''
        )
      })
      var a = i.options[0]
      a === 'w'
        ? (t = S(S({}, t), { trailingZeroDisplay: 'stripIfInteger' }))
        : a && (t = S(S({}, t), ut(a)))
      continue
    }
    if (zt.test(i.stem)) {
      t = S(S({}, t), ut(i.stem))
      continue
    }
    var s = $t(i.stem)
    s && (t = S(S({}, t), s))
    var o = Un(i.stem)
    o && (t = S(S({}, t), o))
  }
  return t
}
var he = {
  '001': ['H', 'h'],
  419: ['h', 'H', 'hB', 'hb'],
  AC: ['H', 'h', 'hb', 'hB'],
  AD: ['H', 'hB'],
  AE: ['h', 'hB', 'hb', 'H'],
  AF: ['H', 'hb', 'hB', 'h'],
  AG: ['h', 'hb', 'H', 'hB'],
  AI: ['H', 'h', 'hb', 'hB'],
  AL: ['h', 'H', 'hB'],
  AM: ['H', 'hB'],
  AO: ['H', 'hB'],
  AR: ['h', 'H', 'hB', 'hb'],
  AS: ['h', 'H'],
  AT: ['H', 'hB'],
  AU: ['h', 'hb', 'H', 'hB'],
  AW: ['H', 'hB'],
  AX: ['H'],
  AZ: ['H', 'hB', 'h'],
  BA: ['H', 'hB', 'h'],
  BB: ['h', 'hb', 'H', 'hB'],
  BD: ['h', 'hB', 'H'],
  BE: ['H', 'hB'],
  BF: ['H', 'hB'],
  BG: ['H', 'hB', 'h'],
  BH: ['h', 'hB', 'hb', 'H'],
  BI: ['H', 'h'],
  BJ: ['H', 'hB'],
  BL: ['H', 'hB'],
  BM: ['h', 'hb', 'H', 'hB'],
  BN: ['hb', 'hB', 'h', 'H'],
  BO: ['h', 'H', 'hB', 'hb'],
  BQ: ['H'],
  BR: ['H', 'hB'],
  BS: ['h', 'hb', 'H', 'hB'],
  BT: ['h', 'H'],
  BW: ['H', 'h', 'hb', 'hB'],
  BY: ['H', 'h'],
  BZ: ['H', 'h', 'hb', 'hB'],
  CA: ['h', 'hb', 'H', 'hB'],
  CC: ['H', 'h', 'hb', 'hB'],
  CD: ['hB', 'H'],
  CF: ['H', 'h', 'hB'],
  CG: ['H', 'hB'],
  CH: ['H', 'hB', 'h'],
  CI: ['H', 'hB'],
  CK: ['H', 'h', 'hb', 'hB'],
  CL: ['h', 'H', 'hB', 'hb'],
  CM: ['H', 'h', 'hB'],
  CN: ['H', 'hB', 'hb', 'h'],
  CO: ['h', 'H', 'hB', 'hb'],
  CP: ['H'],
  CR: ['h', 'H', 'hB', 'hb'],
  CU: ['h', 'H', 'hB', 'hb'],
  CV: ['H', 'hB'],
  CW: ['H', 'hB'],
  CX: ['H', 'h', 'hb', 'hB'],
  CY: ['h', 'H', 'hb', 'hB'],
  CZ: ['H'],
  DE: ['H', 'hB'],
  DG: ['H', 'h', 'hb', 'hB'],
  DJ: ['h', 'H'],
  DK: ['H'],
  DM: ['h', 'hb', 'H', 'hB'],
  DO: ['h', 'H', 'hB', 'hb'],
  DZ: ['h', 'hB', 'hb', 'H'],
  EA: ['H', 'h', 'hB', 'hb'],
  EC: ['h', 'H', 'hB', 'hb'],
  EE: ['H', 'hB'],
  EG: ['h', 'hB', 'hb', 'H'],
  EH: ['h', 'hB', 'hb', 'H'],
  ER: ['h', 'H'],
  ES: ['H', 'hB', 'h', 'hb'],
  ET: ['hB', 'hb', 'h', 'H'],
  FI: ['H'],
  FJ: ['h', 'hb', 'H', 'hB'],
  FK: ['H', 'h', 'hb', 'hB'],
  FM: ['h', 'hb', 'H', 'hB'],
  FO: ['H', 'h'],
  FR: ['H', 'hB'],
  GA: ['H', 'hB'],
  GB: ['H', 'h', 'hb', 'hB'],
  GD: ['h', 'hb', 'H', 'hB'],
  GE: ['H', 'hB', 'h'],
  GF: ['H', 'hB'],
  GG: ['H', 'h', 'hb', 'hB'],
  GH: ['h', 'H'],
  GI: ['H', 'h', 'hb', 'hB'],
  GL: ['H', 'h'],
  GM: ['h', 'hb', 'H', 'hB'],
  GN: ['H', 'hB'],
  GP: ['H', 'hB'],
  GQ: ['H', 'hB', 'h', 'hb'],
  GR: ['h', 'H', 'hb', 'hB'],
  GT: ['h', 'H', 'hB', 'hb'],
  GU: ['h', 'hb', 'H', 'hB'],
  GW: ['H', 'hB'],
  GY: ['h', 'hb', 'H', 'hB'],
  HK: ['h', 'hB', 'hb', 'H'],
  HN: ['h', 'H', 'hB', 'hb'],
  HR: ['H', 'hB'],
  HU: ['H', 'h'],
  IC: ['H', 'h', 'hB', 'hb'],
  ID: ['H'],
  IE: ['H', 'h', 'hb', 'hB'],
  IL: ['H', 'hB'],
  IM: ['H', 'h', 'hb', 'hB'],
  IN: ['h', 'H'],
  IO: ['H', 'h', 'hb', 'hB'],
  IQ: ['h', 'hB', 'hb', 'H'],
  IR: ['hB', 'H'],
  IS: ['H'],
  IT: ['H', 'hB'],
  JE: ['H', 'h', 'hb', 'hB'],
  JM: ['h', 'hb', 'H', 'hB'],
  JO: ['h', 'hB', 'hb', 'H'],
  JP: ['H', 'K', 'h'],
  KE: ['hB', 'hb', 'H', 'h'],
  KG: ['H', 'h', 'hB', 'hb'],
  KH: ['hB', 'h', 'H', 'hb'],
  KI: ['h', 'hb', 'H', 'hB'],
  KM: ['H', 'h', 'hB', 'hb'],
  KN: ['h', 'hb', 'H', 'hB'],
  KP: ['h', 'H', 'hB', 'hb'],
  KR: ['h', 'H', 'hB', 'hb'],
  KW: ['h', 'hB', 'hb', 'H'],
  KY: ['h', 'hb', 'H', 'hB'],
  KZ: ['H', 'hB'],
  LA: ['H', 'hb', 'hB', 'h'],
  LB: ['h', 'hB', 'hb', 'H'],
  LC: ['h', 'hb', 'H', 'hB'],
  LI: ['H', 'hB', 'h'],
  LK: ['H', 'h', 'hB', 'hb'],
  LR: ['h', 'hb', 'H', 'hB'],
  LS: ['h', 'H'],
  LT: ['H', 'h', 'hb', 'hB'],
  LU: ['H', 'h', 'hB'],
  LV: ['H', 'hB', 'hb', 'h'],
  LY: ['h', 'hB', 'hb', 'H'],
  MA: ['H', 'h', 'hB', 'hb'],
  MC: ['H', 'hB'],
  MD: ['H', 'hB'],
  ME: ['H', 'hB', 'h'],
  MF: ['H', 'hB'],
  MG: ['H', 'h'],
  MH: ['h', 'hb', 'H', 'hB'],
  MK: ['H', 'h', 'hb', 'hB'],
  ML: ['H'],
  MM: ['hB', 'hb', 'H', 'h'],
  MN: ['H', 'h', 'hb', 'hB'],
  MO: ['h', 'hB', 'hb', 'H'],
  MP: ['h', 'hb', 'H', 'hB'],
  MQ: ['H', 'hB'],
  MR: ['h', 'hB', 'hb', 'H'],
  MS: ['H', 'h', 'hb', 'hB'],
  MT: ['H', 'h'],
  MU: ['H', 'h'],
  MV: ['H', 'h'],
  MW: ['h', 'hb', 'H', 'hB'],
  MX: ['h', 'H', 'hB', 'hb'],
  MY: ['hb', 'hB', 'h', 'H'],
  MZ: ['H', 'hB'],
  NA: ['h', 'H', 'hB', 'hb'],
  NC: ['H', 'hB'],
  NE: ['H'],
  NF: ['H', 'h', 'hb', 'hB'],
  NG: ['H', 'h', 'hb', 'hB'],
  NI: ['h', 'H', 'hB', 'hb'],
  NL: ['H', 'hB'],
  NO: ['H', 'h'],
  NP: ['H', 'h', 'hB'],
  NR: ['H', 'h', 'hb', 'hB'],
  NU: ['H', 'h', 'hb', 'hB'],
  NZ: ['h', 'hb', 'H', 'hB'],
  OM: ['h', 'hB', 'hb', 'H'],
  PA: ['h', 'H', 'hB', 'hb'],
  PE: ['h', 'H', 'hB', 'hb'],
  PF: ['H', 'h', 'hB'],
  PG: ['h', 'H'],
  PH: ['h', 'hB', 'hb', 'H'],
  PK: ['h', 'hB', 'H'],
  PL: ['H', 'h'],
  PM: ['H', 'hB'],
  PN: ['H', 'h', 'hb', 'hB'],
  PR: ['h', 'H', 'hB', 'hb'],
  PS: ['h', 'hB', 'hb', 'H'],
  PT: ['H', 'hB'],
  PW: ['h', 'H'],
  PY: ['h', 'H', 'hB', 'hb'],
  QA: ['h', 'hB', 'hb', 'H'],
  RE: ['H', 'hB'],
  RO: ['H', 'hB'],
  RS: ['H', 'hB', 'h'],
  RU: ['H'],
  RW: ['H', 'h'],
  SA: ['h', 'hB', 'hb', 'H'],
  SB: ['h', 'hb', 'H', 'hB'],
  SC: ['H', 'h', 'hB'],
  SD: ['h', 'hB', 'hb', 'H'],
  SE: ['H'],
  SG: ['h', 'hb', 'H', 'hB'],
  SH: ['H', 'h', 'hb', 'hB'],
  SI: ['H', 'hB'],
  SJ: ['H'],
  SK: ['H'],
  SL: ['h', 'hb', 'H', 'hB'],
  SM: ['H', 'h', 'hB'],
  SN: ['H', 'h', 'hB'],
  SO: ['h', 'H'],
  SR: ['H', 'hB'],
  SS: ['h', 'hb', 'H', 'hB'],
  ST: ['H', 'hB'],
  SV: ['h', 'H', 'hB', 'hb'],
  SX: ['H', 'h', 'hb', 'hB'],
  SY: ['h', 'hB', 'hb', 'H'],
  SZ: ['h', 'hb', 'H', 'hB'],
  TA: ['H', 'h', 'hb', 'hB'],
  TC: ['h', 'hb', 'H', 'hB'],
  TD: ['h', 'H', 'hB'],
  TF: ['H', 'h', 'hB'],
  TG: ['H', 'hB'],
  TH: ['H', 'h'],
  TJ: ['H', 'h'],
  TL: ['H', 'hB', 'hb', 'h'],
  TM: ['H', 'h'],
  TN: ['h', 'hB', 'hb', 'H'],
  TO: ['h', 'H'],
  TR: ['H', 'hB'],
  TT: ['h', 'hb', 'H', 'hB'],
  TW: ['hB', 'hb', 'h', 'H'],
  TZ: ['hB', 'hb', 'H', 'h'],
  UA: ['H', 'hB', 'h'],
  UG: ['hB', 'hb', 'H', 'h'],
  UM: ['h', 'hb', 'H', 'hB'],
  US: ['h', 'hb', 'H', 'hB'],
  UY: ['h', 'H', 'hB', 'hb'],
  UZ: ['H', 'hB', 'h'],
  VA: ['H', 'h', 'hB'],
  VC: ['h', 'hb', 'H', 'hB'],
  VE: ['h', 'H', 'hB', 'hb'],
  VG: ['h', 'hb', 'H', 'hB'],
  VI: ['h', 'hb', 'H', 'hB'],
  VN: ['H', 'h'],
  VU: ['h', 'H'],
  WF: ['H', 'hB'],
  WS: ['h', 'H'],
  XK: ['H', 'hB', 'h'],
  YE: ['h', 'hB', 'hb', 'H'],
  YT: ['H', 'hB'],
  ZA: ['H', 'h', 'hb', 'hB'],
  ZM: ['h', 'hb', 'H', 'hB'],
  ZW: ['H', 'h'],
  'af-ZA': ['H', 'h', 'hB', 'hb'],
  'ar-001': ['h', 'hB', 'hb', 'H'],
  'ca-ES': ['H', 'h', 'hB'],
  'en-001': ['h', 'hb', 'H', 'hB'],
  'en-HK': ['h', 'hb', 'H', 'hB'],
  'en-IL': ['H', 'h', 'hb', 'hB'],
  'en-MY': ['h', 'hb', 'H', 'hB'],
  'es-BR': ['H', 'h', 'hB', 'hb'],
  'es-ES': ['H', 'h', 'hB', 'hb'],
  'es-GQ': ['H', 'h', 'hB', 'hb'],
  'fr-CA': ['H', 'h', 'hB'],
  'gl-ES': ['H', 'h', 'hB'],
  'gu-IN': ['hB', 'hb', 'h', 'H'],
  'hi-IN': ['hB', 'h', 'H'],
  'it-CH': ['H', 'h', 'hB'],
  'it-IT': ['H', 'h', 'hB'],
  'kn-IN': ['hB', 'h', 'H'],
  'ml-IN': ['hB', 'h', 'H'],
  'mr-IN': ['hB', 'hb', 'h', 'H'],
  'pa-IN': ['hB', 'hb', 'h', 'H'],
  'ta-IN': ['hB', 'h', 'hb', 'H'],
  'te-IN': ['hB', 'h', 'H'],
  'zu-ZA': ['H', 'hB', 'hb', 'h'],
}
function Fn(e, t) {
  for (var r = '', n = 0; n < e.length; n++) {
    var i = e.charAt(n)
    if (i === 'j') {
      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i; ) (a++, n++)
      var s = 1 + (a & 1),
        o = a < 2 ? 1 : 3 + (a >> 1),
        c = 'a',
        l = jn(t)
      for ((l == 'H' || l == 'k') && (o = 0); o-- > 0; ) r += c
      for (; s-- > 0; ) r = l + r
    } else i === 'J' ? (r += 'H') : (r += i)
  }
  return r
}
function jn(e) {
  var t = e.hourCycle
  if (
    (t === void 0 &&
      e.hourCycles &&
      e.hourCycles.length &&
      (t = e.hourCycles[0]),
    t)
  )
    switch (t) {
      case 'h24':
        return 'k'
      case 'h23':
        return 'H'
      case 'h12':
        return 'h'
      case 'h11':
        return 'K'
      default:
        throw new Error('Invalid hourCycle')
    }
  var r = e.language,
    n
  r !== 'root' && (n = e.maximize().region)
  var i = he[n || ''] || he[r || ''] || he[''.concat(r, '-001')] || he['001']
  return i[0]
}
var Me,
  Vn = new RegExp('^'.concat(Wt.source, '*')),
  kn = new RegExp(''.concat(Wt.source, '*$'))
function A(e, t) {
  return { start: e, end: t }
}
var Xn = !!String.prototype.startsWith && '_a'.startsWith('a', 1),
  Wn = !!String.fromCodePoint,
  zn = !!Object.fromEntries,
  Zn = !!String.prototype.codePointAt,
  $n = !!String.prototype.trimStart,
  qn = !!String.prototype.trimEnd,
  Qn = !!Number.isSafeInteger,
  Yn = Qn
    ? Number.isSafeInteger
    : function (e) {
        return (
          typeof e == 'number' &&
          isFinite(e) &&
          Math.floor(e) === e &&
          Math.abs(e) <= 9007199254740991
        )
      },
  Fe = !0
try {
  var Jn = Qt('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu')
  Fe = ((Me = Jn.exec('a')) === null || Me === void 0 ? void 0 : Me[0]) === 'a'
} catch {
  Fe = !1
}
var lt = Xn
    ? function (t, r, n) {
        return t.startsWith(r, n)
      }
    : function (t, r, n) {
        return t.slice(n, n + r.length) === r
      },
  je = Wn
    ? String.fromCodePoint
    : function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
        for (var n = '', i = t.length, a = 0, s; i > a; ) {
          if (((s = t[a++]), s > 1114111))
            throw RangeError(s + ' is not a valid code point')
          n +=
            s < 65536
              ? String.fromCharCode(s)
              : String.fromCharCode(
                  ((s -= 65536) >> 10) + 55296,
                  (s % 1024) + 56320
                )
        }
        return n
      },
  ft = zn
    ? Object.fromEntries
    : function (t) {
        for (var r = {}, n = 0, i = t; n < i.length; n++) {
          var a = i[n],
            s = a[0],
            o = a[1]
          r[s] = o
        }
        return r
      },
  qt = Zn
    ? function (t, r) {
        return t.codePointAt(r)
      }
    : function (t, r) {
        var n = t.length
        if (!(r < 0 || r >= n)) {
          var i = t.charCodeAt(r),
            a
          return i < 55296 ||
            i > 56319 ||
            r + 1 === n ||
            (a = t.charCodeAt(r + 1)) < 56320 ||
            a > 57343
            ? i
            : ((i - 55296) << 10) + (a - 56320) + 65536
        }
      },
  Kn = $n
    ? function (t) {
        return t.trimStart()
      }
    : function (t) {
        return t.replace(Vn, '')
      },
  ei = qn
    ? function (t) {
        return t.trimEnd()
      }
    : function (t) {
        return t.replace(kn, '')
      }
function Qt(e, t) {
  return new RegExp(e, t)
}
var Ve
if (Fe) {
  var ct = Qt('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu')
  Ve = function (t, r) {
    var n
    ct.lastIndex = r
    var i = ct.exec(t)
    return (n = i[1]) !== null && n !== void 0 ? n : ''
  }
} else
  Ve = function (t, r) {
    for (var n = []; ; ) {
      var i = qt(t, r)
      if (i === void 0 || Yt(i) || ii(i)) break
      ;(n.push(i), (r += i >= 65536 ? 2 : 1))
    }
    return je.apply(void 0, n)
  }
var ti = (function () {
  function e(t, r) {
    ;(r === void 0 && (r = {}),
      (this.message = t),
      (this.position = { offset: 0, line: 1, column: 1 }),
      (this.ignoreTag = !!r.ignoreTag),
      (this.locale = r.locale),
      (this.requiresOtherClause = !!r.requiresOtherClause),
      (this.shouldParseSkeletons = !!r.shouldParseSkeletons))
  }
  return (
    (e.prototype.parse = function () {
      if (this.offset() !== 0) throw Error('parser can only be used once')
      return this.parseMessage(0, '', !1)
    }),
    (e.prototype.parseMessage = function (t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char()
        if (a === 123) {
          var s = this.parseArgument(t, n)
          if (s.err) return s
          i.push(s.val)
        } else {
          if (a === 125 && t > 0) break
          if (a === 35 && (r === 'plural' || r === 'selectordinal')) {
            var o = this.clonePosition()
            ;(this.bump(),
              i.push({ type: N.pound, location: A(o, this.clonePosition()) }))
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n) break
            return this.error(
              H.UNMATCHED_CLOSING_TAG,
              A(this.clonePosition(), this.clonePosition())
            )
          } else if (a === 60 && !this.ignoreTag && ke(this.peek() || 0)) {
            var s = this.parseTag(t, r)
            if (s.err) return s
            i.push(s.val)
          } else {
            var s = this.parseLiteral(t, r)
            if (s.err) return s
            i.push(s.val)
          }
        }
      }
      return { val: i, err: null }
    }),
    (e.prototype.parseTag = function (t, r) {
      var n = this.clonePosition()
      this.bump()
      var i = this.parseTagName()
      if ((this.bumpSpace(), this.bumpIf('/>')))
        return {
          val: {
            type: N.literal,
            value: '<'.concat(i, '/>'),
            location: A(n, this.clonePosition()),
          },
          err: null,
        }
      if (this.bumpIf('>')) {
        var a = this.parseMessage(t + 1, r, !0)
        if (a.err) return a
        var s = a.val,
          o = this.clonePosition()
        if (this.bumpIf('</')) {
          if (this.isEOF() || !ke(this.char()))
            return this.error(H.INVALID_TAG, A(o, this.clonePosition()))
          var c = this.clonePosition(),
            l = this.parseTagName()
          return i !== l
            ? this.error(H.UNMATCHED_CLOSING_TAG, A(c, this.clonePosition()))
            : (this.bumpSpace(),
              this.bumpIf('>')
                ? {
                    val: {
                      type: N.tag,
                      value: i,
                      children: s,
                      location: A(n, this.clonePosition()),
                    },
                    err: null,
                  }
                : this.error(H.INVALID_TAG, A(o, this.clonePosition())))
        } else return this.error(H.UNCLOSED_TAG, A(n, this.clonePosition()))
      } else return this.error(H.INVALID_TAG, A(n, this.clonePosition()))
    }),
    (e.prototype.parseTagName = function () {
      var t = this.offset()
      for (this.bump(); !this.isEOF() && ni(this.char()); ) this.bump()
      return this.message.slice(t, this.offset())
    }),
    (e.prototype.parseLiteral = function (t, r) {
      for (var n = this.clonePosition(), i = ''; ; ) {
        var a = this.tryParseQuote(r)
        if (a) {
          i += a
          continue
        }
        var s = this.tryParseUnquoted(t, r)
        if (s) {
          i += s
          continue
        }
        var o = this.tryParseLeftAngleBracket()
        if (o) {
          i += o
          continue
        }
        break
      }
      var c = A(n, this.clonePosition())
      return { val: { type: N.literal, value: i, location: c }, err: null }
    }),
    (e.prototype.tryParseLeftAngleBracket = function () {
      return !this.isEOF() &&
        this.char() === 60 &&
        (this.ignoreTag || !ri(this.peek() || 0))
        ? (this.bump(), '<')
        : null
    }),
    (e.prototype.tryParseQuote = function (t) {
      if (this.isEOF() || this.char() !== 39) return null
      switch (this.peek()) {
        case 39:
          return (this.bump(), this.bump(), "'")
        case 123:
        case 60:
        case 62:
        case 125:
          break
        case 35:
          if (t === 'plural' || t === 'selectordinal') break
          return null
        default:
          return null
      }
      this.bump()
      var r = [this.char()]
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char()
        if (n === 39)
          if (this.peek() === 39) (r.push(39), this.bump())
          else {
            this.bump()
            break
          }
        else r.push(n)
        this.bump()
      }
      return je.apply(void 0, r)
    }),
    (e.prototype.tryParseUnquoted = function (t, r) {
      if (this.isEOF()) return null
      var n = this.char()
      return n === 60 ||
        n === 123 ||
        (n === 35 && (r === 'plural' || r === 'selectordinal')) ||
        (n === 125 && t > 0)
        ? null
        : (this.bump(), je(n))
    }),
    (e.prototype.parseArgument = function (t, r) {
      var n = this.clonePosition()
      if ((this.bump(), this.bumpSpace(), this.isEOF()))
        return this.error(
          H.EXPECT_ARGUMENT_CLOSING_BRACE,
          A(n, this.clonePosition())
        )
      if (this.char() === 125)
        return (
          this.bump(),
          this.error(H.EMPTY_ARGUMENT, A(n, this.clonePosition()))
        )
      var i = this.parseIdentifierIfPossible().value
      if (!i)
        return this.error(H.MALFORMED_ARGUMENT, A(n, this.clonePosition()))
      if ((this.bumpSpace(), this.isEOF()))
        return this.error(
          H.EXPECT_ARGUMENT_CLOSING_BRACE,
          A(n, this.clonePosition())
        )
      switch (this.char()) {
        case 125:
          return (
            this.bump(),
            {
              val: {
                type: N.argument,
                value: i,
                location: A(n, this.clonePosition()),
              },
              err: null,
            }
          )
        case 44:
          return (
            this.bump(),
            this.bumpSpace(),
            this.isEOF()
              ? this.error(
                  H.EXPECT_ARGUMENT_CLOSING_BRACE,
                  A(n, this.clonePosition())
                )
              : this.parseArgumentOptions(t, r, i, n)
          )
        default:
          return this.error(H.MALFORMED_ARGUMENT, A(n, this.clonePosition()))
      }
    }),
    (e.prototype.parseIdentifierIfPossible = function () {
      var t = this.clonePosition(),
        r = this.offset(),
        n = Ve(this.message, r),
        i = r + n.length
      this.bumpTo(i)
      var a = this.clonePosition(),
        s = A(t, a)
      return { value: n, location: s }
    }),
    (e.prototype.parseArgumentOptions = function (t, r, n, i) {
      var a,
        s = this.clonePosition(),
        o = this.parseIdentifierIfPossible().value,
        c = this.clonePosition()
      switch (o) {
        case '':
          return this.error(H.EXPECT_ARGUMENT_TYPE, A(s, c))
        case 'number':
        case 'date':
        case 'time': {
          this.bumpSpace()
          var l = null
          if (this.bumpIf(',')) {
            this.bumpSpace()
            var u = this.clonePosition(),
              m = this.parseSimpleArgStyleIfPossible()
            if (m.err) return m
            var h = ei(m.val)
            if (h.length === 0)
              return this.error(
                H.EXPECT_ARGUMENT_STYLE,
                A(this.clonePosition(), this.clonePosition())
              )
            var y = A(u, this.clonePosition())
            l = { style: h, styleLocation: y }
          }
          var b = this.tryParseArgumentClose(i)
          if (b.err) return b
          var E = A(i, this.clonePosition())
          if (l && lt(l?.style, '::', 0)) {
            var _ = Kn(l.style.slice(2))
            if (o === 'number') {
              var m = this.parseNumberSkeletonFromString(_, l.styleLocation)
              return m.err
                ? m
                : {
                    val: {
                      type: N.number,
                      value: n,
                      location: E,
                      style: m.val,
                    },
                    err: null,
                  }
            } else {
              if (_.length === 0)
                return this.error(H.EXPECT_DATE_TIME_SKELETON, E)
              var f = _
              this.locale && (f = Fn(_, this.locale))
              var h = {
                  type: V.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Mn(f) : {},
                },
                p = o === 'date' ? N.date : N.time
              return {
                val: { type: p, value: n, location: E, style: h },
                err: null,
              }
            }
          }
          return {
            val: {
              type: o === 'number' ? N.number : o === 'date' ? N.date : N.time,
              value: n,
              location: E,
              style: (a = l?.style) !== null && a !== void 0 ? a : null,
            },
            err: null,
          }
        }
        case 'plural':
        case 'selectordinal':
        case 'select': {
          var g = this.clonePosition()
          if ((this.bumpSpace(), !this.bumpIf(',')))
            return this.error(H.EXPECT_SELECT_ARGUMENT_OPTIONS, A(g, S({}, g)))
          this.bumpSpace()
          var T = this.parseIdentifierIfPossible(),
            x = 0
          if (o !== 'select' && T.value === 'offset') {
            if (!this.bumpIf(':'))
              return this.error(
                H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                A(this.clonePosition(), this.clonePosition())
              )
            this.bumpSpace()
            var m = this.tryParseDecimalInteger(
              H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              H.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
            )
            if (m.err) return m
            ;(this.bumpSpace(),
              (T = this.parseIdentifierIfPossible()),
              (x = m.val))
          }
          var v = this.tryParsePluralOrSelectOptions(t, o, r, T)
          if (v.err) return v
          var b = this.tryParseArgumentClose(i)
          if (b.err) return b
          var d = A(i, this.clonePosition())
          return o === 'select'
            ? {
                val: {
                  type: N.select,
                  value: n,
                  options: ft(v.val),
                  location: d,
                },
                err: null,
              }
            : {
                val: {
                  type: N.plural,
                  value: n,
                  options: ft(v.val),
                  offset: x,
                  pluralType: o === 'plural' ? 'cardinal' : 'ordinal',
                  location: d,
                },
                err: null,
              }
        }
        default:
          return this.error(H.INVALID_ARGUMENT_TYPE, A(s, c))
      }
    }),
    (e.prototype.tryParseArgumentClose = function (t) {
      return this.isEOF() || this.char() !== 125
        ? this.error(
            H.EXPECT_ARGUMENT_CLOSING_BRACE,
            A(t, this.clonePosition())
          )
        : (this.bump(), { val: !0, err: null })
    }),
    (e.prototype.parseSimpleArgStyleIfPossible = function () {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char()
        switch (n) {
          case 39: {
            this.bump()
            var i = this.clonePosition()
            if (!this.bumpUntil("'"))
              return this.error(
                H.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                A(i, this.clonePosition())
              )
            this.bump()
            break
          }
          case 123: {
            ;((t += 1), this.bump())
            break
          }
          case 125: {
            if (t > 0) t -= 1
            else
              return {
                val: this.message.slice(r.offset, this.offset()),
                err: null,
              }
            break
          }
          default:
            this.bump()
            break
        }
      }
      return { val: this.message.slice(r.offset, this.offset()), err: null }
    }),
    (e.prototype.parseNumberSkeletonFromString = function (t, r) {
      var n = []
      try {
        n = Cn(t)
      } catch {
        return this.error(H.INVALID_NUMBER_SKELETON, r)
      }
      return {
        val: {
          type: V.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Gn(n) : {},
        },
        err: null,
      }
    }),
    (e.prototype.tryParsePluralOrSelectOptions = function (t, r, n, i) {
      for (
        var a, s = !1, o = [], c = new Set(), l = i.value, u = i.location;
        ;

      ) {
        if (l.length === 0) {
          var m = this.clonePosition()
          if (r !== 'select' && this.bumpIf('=')) {
            var h = this.tryParseDecimalInteger(
              H.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              H.INVALID_PLURAL_ARGUMENT_SELECTOR
            )
            if (h.err) return h
            ;((u = A(m, this.clonePosition())),
              (l = this.message.slice(m.offset, this.offset())))
          } else break
        }
        if (c.has(l))
          return this.error(
            r === 'select'
              ? H.DUPLICATE_SELECT_ARGUMENT_SELECTOR
              : H.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
            u
          )
        ;(l === 'other' && (s = !0), this.bumpSpace())
        var y = this.clonePosition()
        if (!this.bumpIf('{'))
          return this.error(
            r === 'select'
              ? H.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
              : H.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
            A(this.clonePosition(), this.clonePosition())
          )
        var b = this.parseMessage(t + 1, r, n)
        if (b.err) return b
        var E = this.tryParseArgumentClose(y)
        if (E.err) return E
        ;(o.push([l, { value: b.val, location: A(y, this.clonePosition()) }]),
          c.add(l),
          this.bumpSpace(),
          (a = this.parseIdentifierIfPossible()),
          (l = a.value),
          (u = a.location))
      }
      return o.length === 0
        ? this.error(
            r === 'select'
              ? H.EXPECT_SELECT_ARGUMENT_SELECTOR
              : H.EXPECT_PLURAL_ARGUMENT_SELECTOR,
            A(this.clonePosition(), this.clonePosition())
          )
        : this.requiresOtherClause && !s
          ? this.error(
              H.MISSING_OTHER_CLAUSE,
              A(this.clonePosition(), this.clonePosition())
            )
          : { val: o, err: null }
    }),
    (e.prototype.tryParseDecimalInteger = function (t, r) {
      var n = 1,
        i = this.clonePosition()
      this.bumpIf('+') || (this.bumpIf('-') && (n = -1))
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var o = this.char()
        if (o >= 48 && o <= 57) ((a = !0), (s = s * 10 + (o - 48)), this.bump())
        else break
      }
      var c = A(i, this.clonePosition())
      return a
        ? ((s *= n), Yn(s) ? { val: s, err: null } : this.error(r, c))
        : this.error(t, c)
    }),
    (e.prototype.offset = function () {
      return this.position.offset
    }),
    (e.prototype.isEOF = function () {
      return this.offset() === this.message.length
    }),
    (e.prototype.clonePosition = function () {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column,
      }
    }),
    (e.prototype.char = function () {
      var t = this.position.offset
      if (t >= this.message.length) throw Error('out of bound')
      var r = qt(this.message, t)
      if (r === void 0)
        throw Error(
          'Offset '.concat(t, ' is at invalid UTF-16 code unit boundary')
        )
      return r
    }),
    (e.prototype.error = function (t, r) {
      return { val: null, err: { kind: t, message: this.message, location: r } }
    }),
    (e.prototype.bump = function () {
      if (!this.isEOF()) {
        var t = this.char()
        t === 10
          ? ((this.position.line += 1),
            (this.position.column = 1),
            (this.position.offset += 1))
          : ((this.position.column += 1),
            (this.position.offset += t < 65536 ? 1 : 2))
      }
    }),
    (e.prototype.bumpIf = function (t) {
      if (lt(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++) this.bump()
        return !0
      }
      return !1
    }),
    (e.prototype.bumpUntil = function (t) {
      var r = this.offset(),
        n = this.message.indexOf(t, r)
      return n >= 0
        ? (this.bumpTo(n), !0)
        : (this.bumpTo(this.message.length), !1)
    }),
    (e.prototype.bumpTo = function (t) {
      if (this.offset() > t)
        throw Error(
          'targetOffset '
            .concat(t, ' must be greater than or equal to the current offset ')
            .concat(this.offset())
        )
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset()
        if (r === t) break
        if (r > t)
          throw Error(
            'targetOffset '.concat(
              t,
              ' is at invalid UTF-16 code unit boundary'
            )
          )
        if ((this.bump(), this.isEOF())) break
      }
    }),
    (e.prototype.bumpSpace = function () {
      for (; !this.isEOF() && Yt(this.char()); ) this.bump()
    }),
    (e.prototype.peek = function () {
      if (this.isEOF()) return null
      var t = this.char(),
        r = this.offset(),
        n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1))
      return n ?? null
    }),
    e
  )
})()
function ke(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
}
function ri(e) {
  return ke(e) || e === 47
}
function ni(e) {
  return (
    e === 45 ||
    e === 46 ||
    (e >= 48 && e <= 57) ||
    e === 95 ||
    (e >= 97 && e <= 122) ||
    (e >= 65 && e <= 90) ||
    e == 183 ||
    (e >= 192 && e <= 214) ||
    (e >= 216 && e <= 246) ||
    (e >= 248 && e <= 893) ||
    (e >= 895 && e <= 8191) ||
    (e >= 8204 && e <= 8205) ||
    (e >= 8255 && e <= 8256) ||
    (e >= 8304 && e <= 8591) ||
    (e >= 11264 && e <= 12271) ||
    (e >= 12289 && e <= 55295) ||
    (e >= 63744 && e <= 64975) ||
    (e >= 65008 && e <= 65533) ||
    (e >= 65536 && e <= 983039)
  )
}
function Yt(e) {
  return (
    (e >= 9 && e <= 13) ||
    e === 32 ||
    e === 133 ||
    (e >= 8206 && e <= 8207) ||
    e === 8232 ||
    e === 8233
  )
}
function ii(e) {
  return (
    (e >= 33 && e <= 35) ||
    e === 36 ||
    (e >= 37 && e <= 39) ||
    e === 40 ||
    e === 41 ||
    e === 42 ||
    e === 43 ||
    e === 44 ||
    e === 45 ||
    (e >= 46 && e <= 47) ||
    (e >= 58 && e <= 59) ||
    (e >= 60 && e <= 62) ||
    (e >= 63 && e <= 64) ||
    e === 91 ||
    e === 92 ||
    e === 93 ||
    e === 94 ||
    e === 96 ||
    e === 123 ||
    e === 124 ||
    e === 125 ||
    e === 126 ||
    e === 161 ||
    (e >= 162 && e <= 165) ||
    e === 166 ||
    e === 167 ||
    e === 169 ||
    e === 171 ||
    e === 172 ||
    e === 174 ||
    e === 176 ||
    e === 177 ||
    e === 182 ||
    e === 187 ||
    e === 191 ||
    e === 215 ||
    e === 247 ||
    (e >= 8208 && e <= 8213) ||
    (e >= 8214 && e <= 8215) ||
    e === 8216 ||
    e === 8217 ||
    e === 8218 ||
    (e >= 8219 && e <= 8220) ||
    e === 8221 ||
    e === 8222 ||
    e === 8223 ||
    (e >= 8224 && e <= 8231) ||
    (e >= 8240 && e <= 8248) ||
    e === 8249 ||
    e === 8250 ||
    (e >= 8251 && e <= 8254) ||
    (e >= 8257 && e <= 8259) ||
    e === 8260 ||
    e === 8261 ||
    e === 8262 ||
    (e >= 8263 && e <= 8273) ||
    e === 8274 ||
    e === 8275 ||
    (e >= 8277 && e <= 8286) ||
    (e >= 8592 && e <= 8596) ||
    (e >= 8597 && e <= 8601) ||
    (e >= 8602 && e <= 8603) ||
    (e >= 8604 && e <= 8607) ||
    e === 8608 ||
    (e >= 8609 && e <= 8610) ||
    e === 8611 ||
    (e >= 8612 && e <= 8613) ||
    e === 8614 ||
    (e >= 8615 && e <= 8621) ||
    e === 8622 ||
    (e >= 8623 && e <= 8653) ||
    (e >= 8654 && e <= 8655) ||
    (e >= 8656 && e <= 8657) ||
    e === 8658 ||
    e === 8659 ||
    e === 8660 ||
    (e >= 8661 && e <= 8691) ||
    (e >= 8692 && e <= 8959) ||
    (e >= 8960 && e <= 8967) ||
    e === 8968 ||
    e === 8969 ||
    e === 8970 ||
    e === 8971 ||
    (e >= 8972 && e <= 8991) ||
    (e >= 8992 && e <= 8993) ||
    (e >= 8994 && e <= 9e3) ||
    e === 9001 ||
    e === 9002 ||
    (e >= 9003 && e <= 9083) ||
    e === 9084 ||
    (e >= 9085 && e <= 9114) ||
    (e >= 9115 && e <= 9139) ||
    (e >= 9140 && e <= 9179) ||
    (e >= 9180 && e <= 9185) ||
    (e >= 9186 && e <= 9254) ||
    (e >= 9255 && e <= 9279) ||
    (e >= 9280 && e <= 9290) ||
    (e >= 9291 && e <= 9311) ||
    (e >= 9472 && e <= 9654) ||
    e === 9655 ||
    (e >= 9656 && e <= 9664) ||
    e === 9665 ||
    (e >= 9666 && e <= 9719) ||
    (e >= 9720 && e <= 9727) ||
    (e >= 9728 && e <= 9838) ||
    e === 9839 ||
    (e >= 9840 && e <= 10087) ||
    e === 10088 ||
    e === 10089 ||
    e === 10090 ||
    e === 10091 ||
    e === 10092 ||
    e === 10093 ||
    e === 10094 ||
    e === 10095 ||
    e === 10096 ||
    e === 10097 ||
    e === 10098 ||
    e === 10099 ||
    e === 10100 ||
    e === 10101 ||
    (e >= 10132 && e <= 10175) ||
    (e >= 10176 && e <= 10180) ||
    e === 10181 ||
    e === 10182 ||
    (e >= 10183 && e <= 10213) ||
    e === 10214 ||
    e === 10215 ||
    e === 10216 ||
    e === 10217 ||
    e === 10218 ||
    e === 10219 ||
    e === 10220 ||
    e === 10221 ||
    e === 10222 ||
    e === 10223 ||
    (e >= 10224 && e <= 10239) ||
    (e >= 10240 && e <= 10495) ||
    (e >= 10496 && e <= 10626) ||
    e === 10627 ||
    e === 10628 ||
    e === 10629 ||
    e === 10630 ||
    e === 10631 ||
    e === 10632 ||
    e === 10633 ||
    e === 10634 ||
    e === 10635 ||
    e === 10636 ||
    e === 10637 ||
    e === 10638 ||
    e === 10639 ||
    e === 10640 ||
    e === 10641 ||
    e === 10642 ||
    e === 10643 ||
    e === 10644 ||
    e === 10645 ||
    e === 10646 ||
    e === 10647 ||
    e === 10648 ||
    (e >= 10649 && e <= 10711) ||
    e === 10712 ||
    e === 10713 ||
    e === 10714 ||
    e === 10715 ||
    (e >= 10716 && e <= 10747) ||
    e === 10748 ||
    e === 10749 ||
    (e >= 10750 && e <= 11007) ||
    (e >= 11008 && e <= 11055) ||
    (e >= 11056 && e <= 11076) ||
    (e >= 11077 && e <= 11078) ||
    (e >= 11079 && e <= 11084) ||
    (e >= 11085 && e <= 11123) ||
    (e >= 11124 && e <= 11125) ||
    (e >= 11126 && e <= 11157) ||
    e === 11158 ||
    (e >= 11159 && e <= 11263) ||
    (e >= 11776 && e <= 11777) ||
    e === 11778 ||
    e === 11779 ||
    e === 11780 ||
    e === 11781 ||
    (e >= 11782 && e <= 11784) ||
    e === 11785 ||
    e === 11786 ||
    e === 11787 ||
    e === 11788 ||
    e === 11789 ||
    (e >= 11790 && e <= 11798) ||
    e === 11799 ||
    (e >= 11800 && e <= 11801) ||
    e === 11802 ||
    e === 11803 ||
    e === 11804 ||
    e === 11805 ||
    (e >= 11806 && e <= 11807) ||
    e === 11808 ||
    e === 11809 ||
    e === 11810 ||
    e === 11811 ||
    e === 11812 ||
    e === 11813 ||
    e === 11814 ||
    e === 11815 ||
    e === 11816 ||
    e === 11817 ||
    (e >= 11818 && e <= 11822) ||
    e === 11823 ||
    (e >= 11824 && e <= 11833) ||
    (e >= 11834 && e <= 11835) ||
    (e >= 11836 && e <= 11839) ||
    e === 11840 ||
    e === 11841 ||
    e === 11842 ||
    (e >= 11843 && e <= 11855) ||
    (e >= 11856 && e <= 11857) ||
    e === 11858 ||
    (e >= 11859 && e <= 11903) ||
    (e >= 12289 && e <= 12291) ||
    e === 12296 ||
    e === 12297 ||
    e === 12298 ||
    e === 12299 ||
    e === 12300 ||
    e === 12301 ||
    e === 12302 ||
    e === 12303 ||
    e === 12304 ||
    e === 12305 ||
    (e >= 12306 && e <= 12307) ||
    e === 12308 ||
    e === 12309 ||
    e === 12310 ||
    e === 12311 ||
    e === 12312 ||
    e === 12313 ||
    e === 12314 ||
    e === 12315 ||
    e === 12316 ||
    e === 12317 ||
    (e >= 12318 && e <= 12319) ||
    e === 12320 ||
    e === 12336 ||
    e === 64830 ||
    e === 64831 ||
    (e >= 65093 && e <= 65094)
  )
}
function Xe(e) {
  e.forEach(function (t) {
    if ((delete t.location, jt(t) || Vt(t)))
      for (var r in t.options)
        (delete t.options[r].location, Xe(t.options[r].value))
    else
      (Ut(t) && Xt(t.style)) || ((Gt(t) || Ft(t)) && Ge(t.style))
        ? delete t.style.location
        : kt(t) && Xe(t.children)
  })
}
function ai(e, t) {
  ;(t === void 0 && (t = {}),
    (t = S({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t)))
  var r = new ti(e, t).parse()
  if (r.err) {
    var n = SyntaxError(H[r.err.kind])
    throw (
      (n.location = r.err.location),
      (n.originalMessage = r.err.message),
      n
    )
  }
  return (t?.captureLocation || Xe(r.val), r.val)
}
var k
;(function (e) {
  ;((e.MISSING_VALUE = 'MISSING_VALUE'),
    (e.INVALID_VALUE = 'INVALID_VALUE'),
    (e.MISSING_INTL_API = 'MISSING_INTL_API'))
})(k || (k = {}))
var xe = (function (e) {
    _e(t, e)
    function t(r, n, i) {
      var a = e.call(this, r) || this
      return ((a.code = n), (a.originalMessage = i), a)
    }
    return (
      (t.prototype.toString = function () {
        return '[formatjs Error: '.concat(this.code, '] ').concat(this.message)
      }),
      t
    )
  })(Error),
  mt = (function (e) {
    _e(t, e)
    function t(r, n, i, a) {
      return (
        e.call(
          this,
          'Invalid values for "'
            .concat(r, '": "')
            .concat(n, '". Options are "')
            .concat(Object.keys(i).join('", "'), '"'),
          k.INVALID_VALUE,
          a
        ) || this
      )
    }
    return t
  })(xe),
  si = (function (e) {
    _e(t, e)
    function t(r, n, i) {
      return (
        e.call(
          this,
          'Value for "'.concat(r, '" must be of type ').concat(n),
          k.INVALID_VALUE,
          i
        ) || this
      )
    }
    return t
  })(xe),
  oi = (function (e) {
    _e(t, e)
    function t(r, n) {
      return (
        e.call(
          this,
          'The intl string context variable "'
            .concat(r, '" was not provided to the string "')
            .concat(n, '"'),
          k.MISSING_VALUE,
          n
        ) || this
      )
    }
    return t
  })(xe),
  P
;(function (e) {
  ;((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'))
})(P || (P = {}))
function ui(e) {
  return e.length < 2
    ? e
    : e.reduce(function (t, r) {
        var n = t[t.length - 1]
        return (
          !n || n.type !== P.literal || r.type !== P.literal
            ? t.push(r)
            : (n.value += r.value),
          t
        )
      }, [])
}
function hi(e) {
  return typeof e == 'function'
}
function fe(e, t, r, n, i, a, s) {
  if (e.length === 1 && st(e[0]))
    return [{ type: P.literal, value: e[0].value }]
  for (var o = [], c = 0, l = e; c < l.length; c++) {
    var u = l[c]
    if (st(u)) {
      o.push({ type: P.literal, value: u.value })
      continue
    }
    if (Pn(u)) {
      typeof a == 'number' &&
        o.push({ type: P.literal, value: r.getNumberFormat(t).format(a) })
      continue
    }
    var m = u.value
    if (!(i && m in i)) throw new oi(m, s)
    var h = i[m]
    if (In(u)) {
      ;((!h || typeof h == 'string' || typeof h == 'number') &&
        (h = typeof h == 'string' || typeof h == 'number' ? String(h) : ''),
        o.push({ type: typeof h == 'string' ? P.literal : P.object, value: h }))
      continue
    }
    if (Gt(u)) {
      var y =
        typeof u.style == 'string'
          ? n.date[u.style]
          : Ge(u.style)
            ? u.style.parsedOptions
            : void 0
      o.push({ type: P.literal, value: r.getDateTimeFormat(t, y).format(h) })
      continue
    }
    if (Ft(u)) {
      var y =
        typeof u.style == 'string'
          ? n.time[u.style]
          : Ge(u.style)
            ? u.style.parsedOptions
            : n.time.medium
      o.push({ type: P.literal, value: r.getDateTimeFormat(t, y).format(h) })
      continue
    }
    if (Ut(u)) {
      var y =
        typeof u.style == 'string'
          ? n.number[u.style]
          : Xt(u.style)
            ? u.style.parsedOptions
            : void 0
      ;(y && y.scale && (h = h * (y.scale || 1)),
        o.push({ type: P.literal, value: r.getNumberFormat(t, y).format(h) }))
      continue
    }
    if (kt(u)) {
      var b = u.children,
        E = u.value,
        _ = i[E]
      if (!hi(_)) throw new si(E, 'function', s)
      var f = fe(b, t, r, n, i, a),
        p = _(
          f.map(function (x) {
            return x.value
          })
        )
      ;(Array.isArray(p) || (p = [p]),
        o.push.apply(
          o,
          p.map(function (x) {
            return {
              type: typeof x == 'string' ? P.literal : P.object,
              value: x,
            }
          })
        ))
    }
    if (jt(u)) {
      var g = u.options[h] || u.options.other
      if (!g) throw new mt(u.value, h, Object.keys(u.options), s)
      o.push.apply(o, fe(g.value, t, r, n, i))
      continue
    }
    if (Vt(u)) {
      var g = u.options['='.concat(h)]
      if (!g) {
        if (!Intl.PluralRules)
          throw new xe(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            k.MISSING_INTL_API,
            s
          )
        var T = r
          .getPluralRules(t, { type: u.pluralType })
          .select(h - (u.offset || 0))
        g = u.options[T] || u.options.other
      }
      if (!g) throw new mt(u.value, h, Object.keys(u.options), s)
      o.push.apply(o, fe(g.value, t, r, n, i, h - (u.offset || 0)))
      continue
    }
  }
  return ui(o)
}
function li(e, t) {
  return t
    ? S(
        S(S({}, e || {}), t || {}),
        Object.keys(e).reduce(function (r, n) {
          return ((r[n] = S(S({}, e[n]), t[n] || {})), r)
        }, {})
      )
    : e
}
function fi(e, t) {
  return t
    ? Object.keys(e).reduce(
        function (r, n) {
          return ((r[n] = li(e[n], t[n])), r)
        },
        S({}, e)
      )
    : e
}
function we(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t]
        },
        set: function (t, r) {
          e[t] = r
        },
      }
    },
  }
}
function ci(e) {
  return (
    e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: Pe(
        function () {
          for (var t, r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n]
          return new ((t = Intl.NumberFormat).bind.apply(
            t,
            Ie([void 0], r, !1)
          ))()
        },
        { cache: we(e.number), strategy: Le.variadic }
      ),
      getDateTimeFormat: Pe(
        function () {
          for (var t, r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n]
          return new ((t = Intl.DateTimeFormat).bind.apply(
            t,
            Ie([void 0], r, !1)
          ))()
        },
        { cache: we(e.dateTime), strategy: Le.variadic }
      ),
      getPluralRules: Pe(
        function () {
          for (var t, r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n]
          return new ((t = Intl.PluralRules).bind.apply(
            t,
            Ie([void 0], r, !1)
          ))()
        },
        { cache: we(e.pluralRules), strategy: Le.variadic }
      ),
    }
  )
}
var Jt = (function () {
  function e(t, r, n, i) {
    r === void 0 && (r = e.defaultLocale)
    var a = this
    if (
      ((this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
      (this.format = function (c) {
        var l = a.formatToParts(c)
        if (l.length === 1) return l[0].value
        var u = l.reduce(function (m, h) {
          return (
            !m.length ||
            h.type !== P.literal ||
            typeof m[m.length - 1] != 'string'
              ? m.push(h.value)
              : (m[m.length - 1] += h.value),
            m
          )
        }, [])
        return u.length <= 1 ? u[0] || '' : u
      }),
      (this.formatToParts = function (c) {
        return fe(
          a.ast,
          a.locales,
          a.formatters,
          a.formats,
          c,
          void 0,
          a.message
        )
      }),
      (this.resolvedOptions = function () {
        var c
        return {
          locale:
            ((c = a.resolvedLocale) === null || c === void 0
              ? void 0
              : c.toString()) ||
            Intl.NumberFormat.supportedLocalesOf(a.locales)[0],
        }
      }),
      (this.getAst = function () {
        return a.ast
      }),
      (this.locales = r),
      (this.resolvedLocale = e.resolveLocale(r)),
      typeof t == 'string')
    ) {
      if (((this.message = t), !e.__parse))
        throw new TypeError(
          'IntlMessageFormat.__parse must be set to process `message` of type `string`'
        )
      var s = i || {}
      s.formatters
      var o = yn(s, ['formatters'])
      this.ast = e.__parse(t, S(S({}, o), { locale: this.resolvedLocale }))
    } else this.ast = t
    if (!Array.isArray(this.ast))
      throw new TypeError('A message must be provided as a String or AST.')
    ;((this.formats = fi(e.formats, n)),
      (this.formatters = (i && i.formatters) || ci(this.formatterCache)))
  }
  return (
    Object.defineProperty(e, 'defaultLocale', {
      get: function () {
        return (
          e.memoizedDefaultLocale ||
            (e.memoizedDefaultLocale =
              new Intl.NumberFormat().resolvedOptions().locale),
          e.memoizedDefaultLocale
        )
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.memoizedDefaultLocale = null),
    (e.resolveLocale = function (t) {
      if (!(typeof Intl.Locale > 'u')) {
        var r = Intl.NumberFormat.supportedLocalesOf(t)
        return r.length > 0
          ? new Intl.Locale(r[0])
          : new Intl.Locale(typeof t == 'string' ? t : t[0])
      }
    }),
    (e.__parse = ai),
    (e.formats = {
      number: {
        integer: { maximumFractionDigits: 0 },
        currency: { style: 'currency' },
        percent: { style: 'percent' },
      },
      date: {
        short: { month: 'numeric', day: 'numeric', year: '2-digit' },
        medium: { month: 'short', day: 'numeric', year: 'numeric' },
        long: { month: 'long', day: 'numeric', year: 'numeric' },
        full: {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        },
      },
      time: {
        short: { hour: 'numeric', minute: 'numeric' },
        medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
        long: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short',
        },
        full: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short',
        },
      },
    }),
    e
  )
})()
function mi(e, t) {
  if (t == null) return
  if (t in e) return e[t]
  const r = t.split('.')
  let n = e
  for (let i = 0; i < r.length; i++)
    if (typeof n == 'object') {
      if (i > 0) {
        const a = r.slice(i, r.length).join('.')
        if (a in n) {
          n = n[a]
          break
        }
      }
      n = n[r[i]]
    } else n = void 0
  return n
}
const D = {},
  vi = (e, t, r) => r && (t in D || (D[t] = {}), e in D[t] || (D[t][e] = r), r),
  Kt = (e, t) => {
    if (t == null) return
    if (t in D && e in D[t]) return D[t][e]
    const r = se(t)
    for (let n = 0; n < r.length; n++) {
      const i = r[n],
        a = bi(i, e)
      if (a) return vi(e, t, a)
    }
  }
let qe
const ae = $e({})
function pi(e) {
  return qe[e] || null
}
function er(e) {
  return e in qe
}
function bi(e, t) {
  if (!er(e)) return null
  const r = pi(e)
  return mi(r, t)
}
function di(e) {
  if (e == null) return
  const t = se(e)
  for (let r = 0; r < t.length; r++) {
    const n = t[r]
    if (er(n)) return n
  }
}
function gi(e, ...t) {
  ;(delete D[e], ae.update((r) => ((r[e] = xn.all([r[e] || {}, ...t])), r)))
}
W([ae], ([e]) => Object.keys(e))
ae.subscribe((e) => (qe = e))
const ce = {}
function Ei(e, t) {
  ;(ce[e].delete(t), ce[e].size === 0 && delete ce[e])
}
function tr(e) {
  return ce[e]
}
function _i(e) {
  return se(e)
    .map((t) => {
      const r = tr(t)
      return [t, r ? [...r] : []]
    })
    .filter(([, t]) => t.length > 0)
}
function pe(e) {
  return e == null
    ? !1
    : se(e).some((t) => {
        var r
        return (r = tr(t)) == null ? void 0 : r.size
      })
}
function xi(e, t) {
  return Promise.all(
    t.map((n) => (Ei(e, n), n().then((i) => i.default || i)))
  ).then((n) => gi(e, ...n))
}
const J = {}
function rr(e) {
  if (!pe(e)) return e in J ? J[e] : Promise.resolve()
  const t = _i(e)
  return (
    (J[e] = Promise.all(t.map(([r, n]) => xi(r, n))).then(() => {
      if (pe(e)) return rr(e)
      delete J[e]
    })),
    J[e]
  )
}
var vt = Object.getOwnPropertySymbols,
  yi = Object.prototype.hasOwnProperty,
  Ti = Object.prototype.propertyIsEnumerable,
  Hi = (e, t) => {
    var r = {}
    for (var n in e) yi.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
    if (e != null && vt)
      for (var n of vt(e)) t.indexOf(n) < 0 && Ti.call(e, n) && (r[n] = e[n])
    return r
  }
const Ai = {
  number: {
    scientific: { notation: 'scientific' },
    engineering: { notation: 'engineering' },
    compactLong: { notation: 'compact', compactDisplay: 'long' },
    compactShort: { notation: 'compact', compactDisplay: 'short' },
  },
  date: {
    short: { month: 'numeric', day: 'numeric', year: '2-digit' },
    medium: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric' },
    full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  },
  time: {
    short: { hour: 'numeric', minute: 'numeric' },
    medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
    long: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    },
    full: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    },
  },
}
function Si({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${se(e).join('", "')}".${
      pe(U())
        ? `

Note: there are at least one loader still registered to this locale that wasn't executed.`
        : ''
    }`
  )
}
const Bi = {
    fallbackLocale: null,
    loadingDelay: 200,
    formats: Ai,
    warnOnMissingMessages: !0,
    handleMissingMessage: void 0,
    ignoreTag: !0,
  },
  K = Bi
function X() {
  return K
}
function ta(e) {
  const t = e,
    { formats: r } = t,
    n = Hi(t, ['formats'])
  let i = e.fallbackLocale
  if (e.initialLocale)
    try {
      Jt.resolveLocale(e.initialLocale) && (i = e.initialLocale)
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      )
    }
  return (
    n.warnOnMissingMessages &&
      (delete n.warnOnMissingMessages,
      n.handleMissingMessage == null
        ? (n.handleMissingMessage = Si)
        : console.warn(
            '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
          )),
    Object.assign(K, n, { initialLocale: i }),
    r &&
      ('number' in r && Object.assign(K.formats.number, r.number),
      'date' in r && Object.assign(K.formats.date, r.date),
      'time' in r && Object.assign(K.formats.time, r.time)),
    z.set(i)
  )
}
const Ce = $e(!1)
var Ni = Object.defineProperty,
  Oi = Object.defineProperties,
  Ii = Object.getOwnPropertyDescriptors,
  pt = Object.getOwnPropertySymbols,
  Pi = Object.prototype.hasOwnProperty,
  Li = Object.prototype.propertyIsEnumerable,
  bt = (e, t, r) =>
    t in e
      ? Ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Mi = (e, t) => {
    for (var r in t || (t = {})) Pi.call(t, r) && bt(e, r, t[r])
    if (pt) for (var r of pt(t)) Li.call(t, r) && bt(e, r, t[r])
    return e
  },
  wi = (e, t) => Oi(e, Ii(t))
let We
const be = $e(null)
function dt(e) {
  return e
    .split('-')
    .map((t, r, n) => n.slice(0, r + 1).join('-'))
    .reverse()
}
function se(e, t = X().fallbackLocale) {
  const r = dt(e)
  return t ? [...new Set([...r, ...dt(t)])] : r
}
function U() {
  return We ?? void 0
}
be.subscribe((e) => {
  ;((We = e ?? void 0),
    typeof window < 'u' &&
      e != null &&
      document.documentElement.setAttribute('lang', e))
})
const Ci = (e) => {
    if (e && di(e) && pe(e)) {
      const { loadingDelay: t } = X()
      let r
      return (
        typeof window < 'u' && U() != null && t
          ? (r = window.setTimeout(() => Ce.set(!0), t))
          : Ce.set(!0),
        rr(e)
          .then(() => {
            be.set(e)
          })
          .finally(() => {
            ;(clearTimeout(r), Ce.set(!1))
          })
      )
    }
    return be.set(e)
  },
  z = wi(Mi({}, be), { set: Ci }),
  ye = (e) => {
    const t = Object.create(null)
    return (n) => {
      const i = JSON.stringify(n)
      return i in t ? t[i] : (t[i] = e(n))
    }
  }
var Ri = Object.defineProperty,
  de = Object.getOwnPropertySymbols,
  nr = Object.prototype.hasOwnProperty,
  ir = Object.prototype.propertyIsEnumerable,
  gt = (e, t, r) =>
    t in e
      ? Ri(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Qe = (e, t) => {
    for (var r in t || (t = {})) nr.call(t, r) && gt(e, r, t[r])
    if (de) for (var r of de(t)) ir.call(t, r) && gt(e, r, t[r])
    return e
  },
  Z = (e, t) => {
    var r = {}
    for (var n in e) nr.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
    if (e != null && de)
      for (var n of de(e)) t.indexOf(n) < 0 && ir.call(e, n) && (r[n] = e[n])
    return r
  }
const ne = (e, t) => {
    const { formats: r } = X()
    if (e in r && t in r[e]) return r[e][t]
    throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`)
  },
  Di = ye((e) => {
    var t = e,
      { locale: r, format: n } = t,
      i = Z(t, ['locale', 'format'])
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers')
    return (n && (i = ne('number', n)), new Intl.NumberFormat(r, i))
  }),
  Ui = ye((e) => {
    var t = e,
      { locale: r, format: n } = t,
      i = Z(t, ['locale', 'format'])
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates')
    return (
      n
        ? (i = ne('date', n))
        : Object.keys(i).length === 0 && (i = ne('date', 'short')),
      new Intl.DateTimeFormat(r, i)
    )
  }),
  Gi = ye((e) => {
    var t = e,
      { locale: r, format: n } = t,
      i = Z(t, ['locale', 'format'])
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      )
    return (
      n
        ? (i = ne('time', n))
        : Object.keys(i).length === 0 && (i = ne('time', 'short')),
      new Intl.DateTimeFormat(r, i)
    )
  }),
  Fi = (e = {}) => {
    var t = e,
      { locale: r = U() } = t,
      n = Z(t, ['locale'])
    return Di(Qe({ locale: r }, n))
  },
  ji = (e = {}) => {
    var t = e,
      { locale: r = U() } = t,
      n = Z(t, ['locale'])
    return Ui(Qe({ locale: r }, n))
  },
  Vi = (e = {}) => {
    var t = e,
      { locale: r = U() } = t,
      n = Z(t, ['locale'])
    return Gi(Qe({ locale: r }, n))
  },
  ki = ye(
    (e, t = U()) => new Jt(e, t, X().formats, { ignoreTag: X().ignoreTag })
  ),
  Xi = (e, t = {}) => {
    var r, n, i, a
    let s = t
    typeof e == 'object' && ((s = e), (e = s.id))
    const { values: o, locale: c = U(), default: l } = s
    if (c == null)
      throw new Error(
        '[svelte-i18n] Cannot format a message without first setting the initial locale.'
      )
    let u = Kt(e, c)
    if (!u)
      u =
        (a =
          (i =
            (n = (r = X()).handleMissingMessage) == null
              ? void 0
              : n.call(r, { locale: c, id: e, defaultValue: l })) != null
            ? i
            : l) != null
          ? a
          : e
    else if (typeof u != 'string')
      return (
        console.warn(
          `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
        ),
        u
      )
    if (!o) return u
    let m = u
    try {
      m = ki(u, c).format(o)
    } catch (h) {
      h instanceof Error &&
        console.warn(
          `[svelte-i18n] Message "${e}" has syntax error:`,
          h.message
        )
    }
    return m
  },
  Wi = (e, t) => Vi(t).format(e),
  zi = (e, t) => ji(t).format(e),
  Zi = (e, t) => Fi(t).format(e),
  $i = (e, t = U()) => Kt(e, t),
  ra = W([z, ae], () => Xi)
W([z], () => Wi)
W([z], () => zi)
W([z], () => Zi)
W([z, ae], () => $i)
const qi = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}
var Qi = Jr('<svg><!><!></svg>')
function na(e, t) {
  Rr(t, !0)
  const r = q(t, 'color', 3, 'currentColor'),
    n = q(t, 'size', 3, 24),
    i = q(t, 'strokeWidth', 3, 2),
    a = q(t, 'absoluteStrokeWidth', 3, !1),
    s = q(t, 'iconNode', 19, () => []),
    o = en(t, [
      '$$slots',
      '$$events',
      '$$legacy',
      'name',
      'color',
      'size',
      'strokeWidth',
      'absoluteStrokeWidth',
      'iconNode',
      'children',
    ])
  var c = Qi()
  nt(
    c,
    (m) => ({
      ...qi,
      ...o,
      width: n(),
      height: n(),
      stroke: r(),
      'stroke-width': m,
      class: ['lucide-icon lucide', t.name && `lucide-${t.name}`, t.class],
    }),
    [() => (a() ? (Number(i()) * 24) / Number(n()) : i())]
  )
  var l = Ur(c)
  nn(l, 17, s, tn, (m, h) => {
    var y = kr(() => Xr(j(h), 2))
    let b = () => j(y)[0],
      E = () => j(y)[1]
    var _ = Kr(),
      f = Vr(_)
    ;(on(f, b, !0, (p, g) => {
      nt(p, () => ({ ...E() }))
    }),
      et(m, _))
  })
  var u = Gr(l)
  ;(sn(u, () => t.children ?? Fr), jr(c), et(e, c), Dr())
}
export {
  ra as $,
  na as I,
  Pt as a,
  me as b,
  gi as c,
  ta as d,
  nn as e,
  nt as f,
  ea as g,
  z as h,
  tn as i,
  pn as r,
  sn as s,
}
