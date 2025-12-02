import { c as b, a as f, f as y, e as H, s as D } from '../chunks/7vpOr-8R.js'
import {
  p as P,
  k as L,
  j as p,
  O as S,
  g as l,
  ac as d,
  m as k,
  n as $,
  aR as C,
  t as z,
  s as I,
  P as Q,
  aS as V,
  R as B,
} from '../chunks/ZIxVAD3j.js'
import {
  c as N,
  d as X,
  I as T,
  s as _,
  f as A,
  e as q,
  g as K,
  h as Z,
} from '../chunks/DRn3GchK.js'
import { i as J } from '../chunks/CN82yqVR.js'
import { o as U } from '../chunks/C02OHdzv.js'
import { s as G, r as w, i as E } from '../chunks/DpJNoy2a.js'
const Y = {
    select: 'What Language are you learning?',
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    pt: 'Portuguese',
    ru: 'Russian',
    zh: 'Chinese',
  },
  ee = {
    header: 'What is your level?',
    labela1: 'A1 - Beginner',
    labela2: 'A2 - Elementary',
    labelb1: 'B1 - Intermediate',
    labelb2: 'B2 - Intermediate',
    labelc1: 'C1 - Advanced',
    labelc2: 'C2 - Proficient',
  },
  te = { home: 'Home', lessons: 'Lessons', profile: 'Profile' },
  ne = {
    header: 'Login',
    google: 'Login with Google',
    email: 'Login with Email',
    guest: 'Continue as Guest',
  },
  ae = { generateStory: 'Generate Micro-Story' },
  se = { language: Y, level: ee, nav: te, login: ne, navigation: ae },
  oe = {
    select: '¿Qué idioma está aprendiendo?',
    en: 'Inglés',
    es: 'Español',
    fr: 'Francés',
    de: 'Alemán',
    it: 'Italiano',
    pt: 'Portugués',
    ru: 'Ruso',
    zh: 'Chino',
  },
  re = { home: 'Inicio', lessons: 'Lecciones', profile: 'Perfil' },
  le = { language: oe, nav: re },
  ie = {
    select: 'Quelle langue apprenez-vous ?',
    en: 'Anglais',
    es: 'Espagnol',
    fr: 'Français',
    de: 'Allemand',
    it: 'Italien',
    pt: 'Portugais',
    ru: 'Russe',
    zh: 'Chinois',
  },
  ce = { home: 'Accueil', lessons: 'Leçons', profile: 'Profil' },
  ue = { language: ie, nav: ce }
N('en', se)
N('es', le)
N('fr', ue)
X({ fallbackLocale: 'en', initialLocale: 'en' })
function fe(n, e) {
  P(e, !0)
  let t = w(e, ['$$slots', '$$events', '$$legacy'])
  const r = [
    ['path', { d: 'm5 8 6 6' }],
    ['path', { d: 'm4 14 6-6 2-3' }],
    ['path', { d: 'M2 5h12' }],
    ['path', { d: 'M7 2h1' }],
    ['path', { d: 'm22 22-5-10-5 10' }],
    ['path', { d: 'M14 18h6' }],
  ]
  ;(T(
    n,
    G({ name: 'languages' }, () => t, {
      get iconNode() {
        return r
      },
      children: (a, v) => {
        var i = b(),
          c = p(i)
        ;(_(c, () => e.children ?? S), f(a, i))
      },
      $$slots: { default: !0 },
    })
  ),
    L())
}
function ve(n, e) {
  P(e, !0)
  let t = w(e, ['$$slots', '$$events', '$$legacy'])
  const r = [
    ['path', { d: 'M4 5h16' }],
    ['path', { d: 'M4 12h16' }],
    ['path', { d: 'M4 19h16' }],
  ]
  ;(T(
    n,
    G({ name: 'menu' }, () => t, {
      get iconNode() {
        return r
      },
      children: (a, v) => {
        var i = b(),
          c = p(i)
        ;(_(c, () => e.children ?? S), f(a, i))
      },
      $$slots: { default: !0 },
    })
  ),
    L())
}
const M = {
  root: 'skb:w-full skb:bg-surface-100-900 skb:p-4 skb:space-y-4',
  toolbar: 'skb:grid skb:items-center skb:justify-between skb:gap-4',
  lead: '',
  headline: '',
  trail: 'skb:flex skb:gap-2',
}
var R = (n) => typeof n == 'string',
  de = Function.prototype.toString
de.call(Object)
var ge =
    (...n) =>
    (...e) => {
      n.forEach(function (t) {
        t?.(...e)
      })
    },
  he = (...n) =>
    n
      .map((e) => e?.trim?.())
      .filter(Boolean)
      .join(' '),
  me = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,
  F = (n) => {
    const e = {}
    let t
    for (; (t = me.exec(n)); ) e[t[1]] = t[2]
    return e
  },
  pe = (n, e) => {
    if (R(n)) {
      if (R(e)) return `${n};${e}`
      n = F(n)
    } else R(e) && (e = F(e))
    return Object.assign({}, n ?? {}, e ?? {})
  }
function _e(...n) {
  let e = {}
  for (let t of n) {
    if (!t) continue
    for (let a in e) {
      if (
        a.startsWith('on') &&
        typeof e[a] == 'function' &&
        typeof t[a] == 'function'
      ) {
        e[a] = ge(t[a], e[a])
        continue
      }
      if (a === 'className' || a === 'class') {
        e[a] = he(e[a], t[a])
        continue
      }
      if (a === 'style') {
        e[a] = pe(e[a], t[a])
        continue
      }
      e[a] = t[a] !== void 0 ? t[a] : e[a]
    }
    for (let a in t) e[a] === void 0 && (e[a] = t[a])
    const r = Object.getOwnPropertySymbols(t)
    for (let a of r) e[a] = t[a]
  }
  return e
}
function be(n) {
  return new Proxy(
    {},
    {
      get(e, t) {
        return t === 'style' ? (r) => n({ style: r }).style : n
      },
    }
  )
}
const O = {
  className: 'class',
  defaultChecked: 'checked',
  defaultValue: 'value',
  htmlFor: 'for',
  onBlur: 'onfocusout',
  onChange: 'oninput',
  onFocus: 'onfocusin',
  onDoubleClick: 'ondblclick',
}
function W(n) {
  let e = ''
  for (let t in n) {
    const r = n[t]
    r != null &&
      (t.startsWith('--') ||
        (t = t.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`)),
      (e += `${t}:${r};`))
  }
  return e
}
const ye = new Set(
  'viewBox,className,preserveAspectRatio,fillRule,clipPath,clipRule,strokeWidth,strokeLinecap,strokeLinejoin,strokeDasharray,strokeDashoffset,strokeMiterlimit'.split(
    ','
  )
)
function $e(n) {
  return n in O ? O[n] : ye.has(n) ? n : n.toLowerCase()
}
function ke(n, e) {
  return n === 'style' && typeof e == 'object' ? W(e) : e
}
be((n) => {
  const e = {}
  for (const t in n) e[$e(t)] = ke(t, n[t])
  return e
})
const Pe = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,
  Le = (n) => {
    const e = {}
    let t
    for (; (t = Pe.exec(n)); ) e[t[1]] = t[2]
    return e
  }
function j(...n) {
  const e = []
  for (const r of n) r && 'class' in r && r.class != null && e.push(r.class)
  const t = _e(...n)
  return (
    e.length > 0 && (t.class = e.length === 1 ? e[0] : e),
    'style' in t &&
      (typeof t.style == 'string' && (t.style = Le(t.style)),
      (t.style = W(t.style))),
    t
  )
}
var Se = y('<div><!></div>')
function we(n, e) {
  P(e, !0)
  const t = w(e, ['$$slots', '$$events', '$$legacy']),
    r = d(() => e.element),
    a = d(() => e.children),
    v = d(() => C(t, ['element', 'children'])),
    i = d(() => j({ class: M.headline }, l(v)))
  var c = b(),
    u = p(c)
  {
    var g = (o) => {
        var s = b(),
          h = p(s)
        ;(_(
          h,
          () => l(r),
          () => l(i)
        ),
          f(o, s))
      },
      m = (o) => {
        var s = Se()
        A(s, () => ({ ...l(i) }))
        var h = k(s)
        ;(_(h, () => l(a) ?? S), $(s), f(o, s))
      }
    E(u, (o) => {
      l(r) ? o(g) : o(m, !1)
    })
  }
  ;(f(n, c), L())
}
var xe = y('<nav><!></nav>')
function Ce(n, e) {
  P(e, !0)
  const t = w(e, ['$$slots', '$$events', '$$legacy']),
    r = d(() => e.element),
    a = d(() => e.children),
    v = d(() => C(t, ['element', 'children'])),
    i = d(() => j({ class: M.lead }, l(v)))
  var c = b(),
    u = p(c)
  {
    var g = (o) => {
        var s = b(),
          h = p(s)
        ;(_(
          h,
          () => l(r),
          () => l(i)
        ),
          f(o, s))
      },
      m = (o) => {
        var s = xe()
        A(s, () => ({ ...l(i) }))
        var h = k(s)
        ;(_(h, () => l(a) ?? S), $(s), f(o, s))
      }
    E(u, (o) => {
      l(r) ? o(g) : o(m, !1)
    })
  }
  ;(f(n, c), L())
}
var Ae = y('<header><!></header>')
function Ee(n, e) {
  P(e, !0)
  const t = w(e, ['$$slots', '$$events', '$$legacy']),
    r = d(() => e.element),
    a = d(() => e.children),
    v = d(() => C(t, ['element', 'children'])),
    i = d(() => j({ class: M.root }, l(v)))
  var c = b(),
    u = p(c)
  {
    var g = (o) => {
        var s = b(),
          h = p(s)
        ;(_(
          h,
          () => l(r),
          () => l(i)
        ),
          f(o, s))
      },
      m = (o) => {
        var s = Ae()
        A(s, () => ({ ...l(i) }))
        var h = k(s)
        ;(_(h, () => l(a) ?? S), $(s), f(o, s))
      }
    E(u, (o) => {
      l(r) ? o(g) : o(m, !1)
    })
  }
  ;(f(n, c), L())
}
var Me = y('<div><!></div>')
function je(n, e) {
  P(e, !0)
  const t = w(e, ['$$slots', '$$events', '$$legacy']),
    r = d(() => e.element),
    a = d(() => e.children),
    v = d(() => C(t, ['element', 'children'])),
    i = d(() => j({ class: M.toolbar }, l(v)))
  var c = b(),
    u = p(c)
  {
    var g = (o) => {
        var s = b(),
          h = p(s)
        ;(_(
          h,
          () => l(r),
          () => l(i)
        ),
          f(o, s))
      },
      m = (o) => {
        var s = Me()
        A(s, () => ({ ...l(i) }))
        var h = k(s)
        ;(_(h, () => l(a) ?? S), $(s), f(o, s))
      }
    E(u, (o) => {
      l(r) ? o(g) : o(m, !1)
    })
  }
  ;(f(n, c), L())
}
var Ie = y('<nav><!></nav>')
function Re(n, e) {
  P(e, !0)
  const t = w(e, ['$$slots', '$$events', '$$legacy']),
    r = d(() => e.element),
    a = d(() => e.children),
    v = d(() => C(t, ['element', 'children'])),
    i = d(() => j({ class: M.trail }, l(v)))
  var c = b(),
    u = p(c)
  {
    var g = (o) => {
        var s = b(),
          h = p(s)
        ;(_(
          h,
          () => l(r),
          () => l(i)
        ),
          f(o, s))
      },
      m = (o) => {
        var s = Ie()
        A(s, () => ({ ...l(i) }))
        var h = k(s)
        ;(_(h, () => l(a) ?? S), $(s), f(o, s))
      }
    E(u, (o) => {
      l(r) ? o(g) : o(m, !1)
    })
  }
  ;(f(n, c), L())
}
const x = Object.assign(Ee, { Toolbar: je, Lead: Ce, Headline: we, Trail: Re })
var Ne = y('<option> </option>'),
  ze = y(
    '<div class="flex"><!> <select class="select ml-1 cursor-pointer"></select></div>'
  )
function Be(n, e) {
  P(e, !1)
  let t = Q('en')
  const r = { en: 'English', es: 'Español', fr: 'Français' }
  function a(u) {
    ;(B(t, u), Z.set(u), localStorage.setItem('lang', u))
  }
  ;(U(() => {
    const u = localStorage.getItem('lang')
    u && r[u] && a(u)
  }),
    J())
  var v = ze(),
    i = k(v)
  fe(i, {})
  var c = I(i, 2)
  ;(z(() => {
    ;(l(t), V(() => {}))
  }),
    q(
      c,
      5,
      () => Object.keys(r),
      (u) => u,
      (u, g) => {
        var m = Ne(),
          o = k(m, !0)
        $(m)
        var s = {}
        ;(z(() => {
          ;(D(o, r[l(g)]),
            s !== (s = l(g)) && (m.value = (m.__value = l(g)) ?? ''))
        }),
          f(u, m))
      }
    ),
    $(c),
    $(v),
    K(
      c,
      () => l(t),
      (u) => B(t, u)
    ),
    H('change', c, () => a(l(t))),
    f(n, v),
    L())
}
var Fe = y(
    '<button type="button" class="btn-icon btn-icon-lg hover:preset-tonal"><!></button>'
  ),
  Oe = y('<p class="text-2xl">StoryLingo</p>'),
  Te = y('<!> <!> <!>', 1)
function Ge(n) {
  x(n, {
    children: (e, t) => {
      x.Toolbar(e, {
        class: 'grid-cols-[auto_1fr_auto]',
        children: (r, a) => {
          var v = Te(),
            i = p(v)
          x.Lead(i, {
            children: (g, m) => {
              var o = Fe(),
                s = k(o)
              ;(ve(s, {}), $(o), f(g, o))
            },
            $$slots: { default: !0 },
          })
          var c = I(i, 2)
          x.Headline(c, {
            children: (g, m) => {
              var o = Oe()
              f(g, o)
            },
            $$slots: { default: !0 },
          })
          var u = I(c, 2)
          ;(x.Trail(u, {
            children: (g, m) => {
              Be(g, {})
            },
            $$slots: { default: !0 },
          }),
            f(r, v))
        },
        $$slots: { default: !0 },
      })
    },
    $$slots: { default: !0 },
  })
}
var We = y('<!> <main class="svelte-12qhfyh"><!></main>', 1)
function Ke(n, e) {
  var t = We(),
    r = p(t)
  Ge(r)
  var a = I(r, 2),
    v = k(a)
  ;(_(v, () => e.children), $(a), f(n, t))
}
export { Ke as component }
