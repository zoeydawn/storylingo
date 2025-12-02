import {
  ag as Q,
  g as q,
  ah as G,
  a7 as Z,
  a as ee,
  ai as H,
  a8 as B,
  B as f,
  A as h,
  X as v,
  E as te,
  F as U,
  aj as W,
  I as re,
  z as p,
  ak as R,
  x as D,
  y as w,
  al as L,
  am as E,
  an as j,
  ao as ne,
  ap as F,
  c as z,
  C as se,
  aq as ae,
  v as O,
  K as N,
  af as ie,
  J as oe,
  ar as Y,
  as as ue,
  G as le,
  at as fe,
  au as ce,
  av as he,
  M as de,
  aw as _e,
  N as pe,
  ax as A,
  ay as ve,
  az as ge,
  aA as me,
  aB as ye,
  aC as Ee,
  aD as x,
  aE as be,
  aF as Te,
  aG as C,
  L as S,
  aH as we,
  aI as Ne,
  aJ as Ae,
  aK as ke,
  p as Re,
  aL as Se,
  aM as Le,
  k as Me,
} from './ZIxVAD3j.js'
function De(t) {
  let e = 0,
    r = G(0),
    a
  return () => {
    Q() &&
      (q(r),
      Z(
        () => (
          e === 0 && (a = ee(() => t(() => H(r)))),
          (e += 1),
          () => {
            B(() => {
              ;((e -= 1), e === 0 && (a?.(), (a = void 0), H(r)))
            })
          }
        )
      ))
  }
}
var Oe = le | fe | ce
function Fe(t, e, r) {
  new xe(t, e, r)
}
class xe {
  parent
  #r = !1
  #t
  #v = h ? f : null
  #s
  #c
  #a
  #n = null
  #e = null
  #i = null
  #o = null
  #u = null
  #h = 0
  #l = 0
  #d = !1
  #f = null
  #y = De(
    () => (
      (this.#f = G(this.#h)),
      () => {
        this.#f = null
      }
    )
  )
  constructor(e, r, a) {
    ;((this.#t = e),
      (this.#s = r),
      (this.#c = a),
      (this.parent = v.b),
      (this.#r = !!this.#s.pending),
      (this.#a = te(() => {
        if (((v.b = this), h)) {
          const n = this.#v
          ;(U(), n.nodeType === W && n.data === re ? this.#b() : this.#E())
        } else {
          var s = this.#g()
          try {
            this.#n = p(() => a(s))
          } catch (n) {
            this.error(n)
          }
          this.#l > 0 ? this.#p() : (this.#r = !1)
        }
        return () => {
          this.#u?.remove()
        }
      }, Oe)),
      h && (this.#t = f))
  }
  #E() {
    try {
      this.#n = p(() => this.#c(this.#t))
    } catch (e) {
      this.error(e)
    }
    this.#r = !1
  }
  #b() {
    const e = this.#s.pending
    e &&
      ((this.#e = p(() => e(this.#t))),
      R.enqueue(() => {
        var r = this.#g()
        ;((this.#n = this.#_(() => (R.ensure(), p(() => this.#c(r))))),
          this.#l > 0
            ? this.#p()
            : (D(this.#e, () => {
                this.#e = null
              }),
              (this.#r = !1)))
      }))
  }
  #g() {
    var e = this.#t
    return (
      this.#r && ((this.#u = w()), this.#t.before(this.#u), (e = this.#u)),
      e
    )
  }
  is_pending() {
    return this.#r || (!!this.parent && this.parent.is_pending())
  }
  has_pending_snippet() {
    return !!this.#s.pending
  }
  #_(e) {
    var r = v,
      a = F,
      s = z
    ;(L(this.#a), E(this.#a), j(this.#a.ctx))
    try {
      return e()
    } catch (n) {
      return (ne(n), null)
    } finally {
      ;(L(r), E(a), j(s))
    }
  }
  #p() {
    const e = this.#s.pending
    ;(this.#n !== null &&
      ((this.#o = document.createDocumentFragment()),
      this.#o.append(this.#u),
      se(this.#n, this.#o)),
      this.#e === null && (this.#e = p(() => e(this.#t))))
  }
  #m(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(e)
      return
    }
    ;((this.#l += e),
      this.#l === 0 &&
        ((this.#r = !1),
        this.#e &&
          D(this.#e, () => {
            this.#e = null
          }),
        this.#o && (this.#t.before(this.#o), (this.#o = null))))
  }
  update_pending_count(e) {
    ;(this.#m(e), (this.#h += e), this.#f && ae(this.#f, this.#h))
  }
  get_effect_pending() {
    return (this.#y(), q(this.#f))
  }
  error(e) {
    var r = this.#s.onerror
    let a = this.#s.failed
    if (this.#d || (!r && !a)) throw e
    ;(this.#n && (O(this.#n), (this.#n = null)),
      this.#e && (O(this.#e), (this.#e = null)),
      this.#i && (O(this.#i), (this.#i = null)),
      h && (N(this.#v), ie(), N(oe())))
    var s = !1,
      n = !1
    const i = () => {
      if (s) {
        he()
        return
      }
      ;((s = !0),
        n && ue(),
        R.ensure(),
        (this.#h = 0),
        this.#i !== null &&
          D(this.#i, () => {
            this.#i = null
          }),
        (this.#r = this.has_pending_snippet()),
        (this.#n = this.#_(() => ((this.#d = !1), p(() => this.#c(this.#t))))),
        this.#l > 0 ? this.#p() : (this.#r = !1))
    }
    var c = F
    try {
      ;(E(null), (n = !0), r?.(e, i), (n = !1))
    } catch (o) {
      Y(o, this.#a && this.#a.parent)
    } finally {
      E(c)
    }
    a &&
      B(() => {
        this.#i = this.#_(() => {
          ;(R.ensure(), (this.#d = !0))
          try {
            return p(() => {
              a(
                this.#t,
                () => e,
                () => i
              )
            })
          } catch (o) {
            return (Y(o, this.#a.parent), null)
          } finally {
            this.#d = !1
          }
        })
      })
  }
}
function qe(t) {
  return (
    t.endsWith('capture') &&
    t !== 'gotpointercapture' &&
    t !== 'lostpointercapture'
  )
}
const Ce = [
  'beforeinput',
  'click',
  'change',
  'dblclick',
  'contextmenu',
  'focusin',
  'focusout',
  'input',
  'keydown',
  'keyup',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'pointerdown',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerup',
  'touchend',
  'touchmove',
  'touchstart',
]
function Ge(t) {
  return Ce.includes(t)
}
const Ie = {
  formnovalidate: 'formNoValidate',
  ismap: 'isMap',
  nomodule: 'noModule',
  playsinline: 'playsInline',
  readonly: 'readOnly',
  defaultvalue: 'defaultValue',
  defaultchecked: 'defaultChecked',
  srcobject: 'srcObject',
  novalidate: 'noValidate',
  allowfullscreen: 'allowFullscreen',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
}
function Ue(t) {
  return ((t = t.toLowerCase()), Ie[t] ?? t)
}
const Pe = ['touchstart', 'touchmove']
function Ve(t) {
  return Pe.includes(t)
}
const Be = ['textarea', 'script', 'style', 'title']
function ze(t) {
  return Be.includes(t)
}
const X = new Set(),
  I = new Set()
function We(t, e, r, a = {}) {
  function s(n) {
    if ((a.capture || T.call(e, n), !n.cancelBubble))
      return _e(() => r?.call(this, n))
  }
  return (
    t.startsWith('pointer') || t.startsWith('touch') || t === 'wheel'
      ? B(() => {
          e.addEventListener(t, s, a)
        })
      : e.addEventListener(t, s, a),
    s
  )
}
function Xe(t, e, r, a, s) {
  var n = { capture: a, passive: s },
    i = We(t, e, r, n)
  ;(e === document.body ||
    e === window ||
    e === document ||
    e instanceof HTMLMediaElement) &&
    de(() => {
      e.removeEventListener(t, i, n)
    })
}
function Je(t) {
  for (var e = 0; e < t.length; e++) X.add(t[e])
  for (var r of I) r(t)
}
let $ = null
function T(t) {
  var e = this,
    r = e.ownerDocument,
    a = t.type,
    s = t.composedPath?.() || [],
    n = s[0] || t.target
  $ = t
  var i = 0,
    c = $ === t && t.__root
  if (c) {
    var o = s.indexOf(c)
    if (o !== -1 && (e === document || e === window)) {
      t.__root = e
      return
    }
    var g = s.indexOf(e)
    if (g === -1) return
    o <= g && (i = o)
  }
  if (((n = s[i] || t.target), n !== e)) {
    pe(t, 'currentTarget', {
      configurable: !0,
      get() {
        return n || r
      },
    })
    var M = F,
      _ = v
    ;(E(null), L(null))
    try {
      for (var u, l = []; n !== null; ) {
        var m = n.assignedSlot || n.parentNode || n.host || null
        try {
          var b = n['__' + a]
          b != null && (!n.disabled || t.target === n) && b.call(n, t)
        } catch (k) {
          u ? l.push(k) : (u = k)
        }
        if (t.cancelBubble || m === e || m === null) break
        n = m
      }
      if (u) {
        for (let k of l)
          queueMicrotask(() => {
            throw k
          })
        throw u
      }
    } finally {
      ;((t.__root = e), delete t.currentTarget, E(M), L(_))
    }
  }
}
function J(t) {
  var e = document.createElement('template')
  return ((e.innerHTML = t.replaceAll('<!>', '<!---->')), e.content)
}
function d(t, e) {
  var r = v
  r.nodes_start === null && ((r.nodes_start = t), (r.nodes_end = e))
}
function Ke(t, e) {
  var r = (e & ge) !== 0,
    a = (e & me) !== 0,
    s,
    n = !t.startsWith('<!>')
  return () => {
    if (h) return (d(f, null), f)
    s === void 0 && ((s = J(n ? t : '<!>' + t)), r || (s = A(s)))
    var i = a || ve ? document.importNode(s, !0) : s.cloneNode(!0)
    if (r) {
      var c = A(i),
        o = i.lastChild
      d(c, o)
    } else d(i, i)
    return i
  }
}
function He(t, e, r = 'svg') {
  var a = !t.startsWith('<!>'),
    s = `<${r}>${a ? t : '<!>' + t}</${r}>`,
    n
  return () => {
    if (h) return (d(f, null), f)
    if (!n) {
      var i = J(s),
        c = A(i)
      n = A(c)
    }
    var o = n.cloneNode(!0)
    return (d(o, o), o)
  }
}
function Qe(t, e) {
  return He(t, e, 'svg')
}
function Ze(t = '') {
  if (!h) {
    var e = w(t + '')
    return (d(e, e), e)
  }
  var r = f
  return (r.nodeType !== Ee && (r.before((r = w())), N(r)), d(r, r), r)
}
function et() {
  if (h) return (d(f, null), f)
  var t = document.createDocumentFragment(),
    e = document.createComment(''),
    r = w()
  return (t.append(e, r), d(e, r), t)
}
function tt(t, e) {
  if (h) {
    var r = v
    ;(((r.f & ye) === 0 || r.nodes_end === null) && (r.nodes_end = f), U())
    return
  }
  t !== null && t.before(e)
}
let P = !0
function rt(t) {
  P = t
}
function nt(t, e) {
  var r = e == null ? '' : typeof e == 'object' ? e + '' : e
  r !== (t.__t ??= t.nodeValue) && ((t.__t = r), (t.nodeValue = r + ''))
}
function je(t, e) {
  return K(t, e)
}
function st(t, e) {
  ;(x(), (e.intro = e.intro ?? !1))
  const r = e.target,
    a = h,
    s = f
  try {
    for (var n = A(r); n && (n.nodeType !== W || n.data !== be); ) n = Te(n)
    if (!n) throw C
    ;(S(!0), N(n))
    const i = K(t, { ...e, anchor: n })
    return (S(!1), i)
  } catch (i) {
    if (
      i instanceof Error &&
      i.message
        .split(
          `
`
        )
        .some((c) => c.startsWith('https://svelte.dev/e/'))
    )
      throw i
    return (
      i !== C && console.warn('Failed to hydrate: ', i),
      e.recover === !1 && we(),
      x(),
      Ne(r),
      S(!1),
      je(t, e)
    )
  } finally {
    ;(S(a), N(s))
  }
}
const y = new Map()
function K(
  t,
  { target: e, anchor: r, props: a = {}, events: s, context: n, intro: i = !0 }
) {
  x()
  var c = new Set(),
    o = (_) => {
      for (var u = 0; u < _.length; u++) {
        var l = _[u]
        if (!c.has(l)) {
          c.add(l)
          var m = Ve(l)
          e.addEventListener(l, T, { passive: m })
          var b = y.get(l)
          b === void 0
            ? (document.addEventListener(l, T, { passive: m }), y.set(l, 1))
            : y.set(l, b + 1)
        }
      }
    }
  ;(o(Ae(X)), I.add(o))
  var g = void 0,
    M = ke(() => {
      var _ = r ?? e.appendChild(w())
      return (
        Fe(_, { pending: () => {} }, (u) => {
          if (n) {
            Re({})
            var l = z
            l.c = n
          }
          if (
            (s && (a.$$events = s),
            h && d(u, null),
            (P = i),
            (g = t(u, a) || {}),
            (P = !0),
            h &&
              ((v.nodes_end = f),
              f === null || f.nodeType !== W || f.data !== Se))
          )
            throw (Le(), C)
          n && Me()
        }),
        () => {
          for (var u of c) {
            e.removeEventListener(u, T)
            var l = y.get(u)
            --l === 0
              ? (document.removeEventListener(u, T), y.delete(u))
              : y.set(u, l)
          }
          ;(I.delete(o), _ !== r && _.parentNode?.removeChild(_))
        }
      )
    })
  return (V.set(g, M), g)
}
let V = new WeakMap()
function at(t, e) {
  const r = V.get(t)
  return r ? (V.delete(t), r(e)) : Promise.resolve()
}
const Ye = '5'
typeof window < 'u' && ((window.__svelte ??= {}).v ??= new Set()).add(Ye)
export {
  tt as a,
  P as b,
  et as c,
  d,
  Xe as e,
  Ke as f,
  rt as g,
  st as h,
  ze as i,
  qe as j,
  We as k,
  Je as l,
  je as m,
  Ue as n,
  Ge as o,
  Qe as p,
  nt as s,
  Ze as t,
  at as u,
}
