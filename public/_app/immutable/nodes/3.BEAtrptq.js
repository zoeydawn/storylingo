import {
  c as R,
  a as p,
  f as M,
  s as O,
  e as E,
  t as te,
} from '../chunks/7vpOr-8R.js'
import { i as Y } from '../chunks/CN82yqVR.js'
import {
  ad as pe,
  ab as ye,
  a as oe,
  a7 as me,
  A as be,
  o as D,
  ae as _e,
  p as A,
  j as V,
  O as I,
  k as j,
  m as v,
  n as c,
  s as _,
  af as $e,
  t as k,
  g as d,
  f as xe,
  P as q,
  R as S,
} from '../chunks/ZIxVAD3j.js'
import {
  s as B,
  r as F,
  p as ae,
  a as le,
  b as U,
  i as G,
} from '../chunks/DpJNoy2a.js'
import {
  I as H,
  s as J,
  e as X,
  i as we,
  a as re,
  b as se,
  $ as Te,
  r as Le,
} from '../chunks/DRn3GchK.js'
import {
  l as Se,
  a as Me,
  b as ne,
  s as Ce,
  c as ke,
  d as Ae,
} from '../chunks/BD9XyX4O.js'
function je(e, t, s = t) {
  var f = new WeakSet()
  ;(pe(e, 'input', async (l) => {
    var o = l ? e.defaultValue : e.value
    if (
      ((o = K(e) ? Q(o) : o),
      s(o),
      D !== null && f.add(D),
      await ye(),
      o !== (o = t()))
    ) {
      var a = e.selectionStart,
        n = e.selectionEnd,
        $ = e.value.length
      if (((e.value = o ?? ''), n !== null)) {
        var r = e.value.length
        a === n && n === $ && r > $
          ? ((e.selectionStart = r), (e.selectionEnd = r))
          : ((e.selectionStart = a), (e.selectionEnd = Math.min(n, r)))
      }
    }
  }),
    ((be && e.defaultValue !== e.value) || (oe(t) == null && e.value)) &&
      (s(K(e) ? Q(e.value) : e.value), D !== null && f.add(D)),
    me(() => {
      var l = t()
      if (e === document.activeElement) {
        var o = _e ?? D
        if (f.has(o)) return
      }
      ;(K(e) && l === Q(e.value)) ||
        (e.type === 'date' && !l && !e.value) ||
        (l !== e.value && (e.value = l ?? ''))
    }))
}
function K(e) {
  var t = e.type
  return t === 'number' || t === 'range'
}
function Q(e) {
  return e === '' ? null : +e
}
function Ne(e, t) {
  A(t, !0)
  let s = F(t, ['$$slots', '$$events', '$$legacy'])
  const f = [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' }],
  ]
  ;(H(
    e,
    B({ name: 'copy' }, () => s, {
      get iconNode() {
        return f
      },
      children: (l, o) => {
        var a = R(),
          n = V(a)
        ;(J(n, () => t.children ?? I), p(l, a))
      },
      $$slots: { default: !0 },
    })
  ),
    j())
}
function Ee(e, t) {
  A(t, !0)
  let s = F(t, ['$$slots', '$$events', '$$legacy'])
  const f = [
    ['path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }],
    ['path', { d: 'M3 3v5h5' }],
    ['path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' }],
    ['path', { d: 'M16 16h5v5' }],
  ]
  ;(H(
    e,
    B({ name: 'refresh-ccw' }, () => s, {
      get iconNode() {
        return f
      },
      children: (l, o) => {
        var a = R(),
          n = V(a)
        ;(J(n, () => t.children ?? I), p(l, a))
      },
      $$slots: { default: !0 },
    })
  ),
    j())
}
function Pe(e, t) {
  A(t, !0)
  let s = F(t, ['$$slots', '$$events', '$$legacy'])
  const f = [
    ['path', { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' }],
    ['path', { d: 'M21 3v5h-5' }],
    ['path', { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' }],
    ['path', { d: 'M8 16H3v5' }],
  ]
  ;(H(
    e,
    B({ name: 'refresh-cw' }, () => s, {
      get iconNode() {
        return f
      },
      children: (l, o) => {
        var a = R(),
          n = V(a)
        ;(J(n, () => t.children ?? I), p(l, a))
      },
      $$slots: { default: !0 },
    })
  ),
    j())
}
function De(e, t) {
  A(t, !0)
  let s = F(t, ['$$slots', '$$events', '$$legacy'])
  const f = [
    [
      'path',
      {
        d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
      },
    ],
  ]
  ;(H(
    e,
    B({ name: 'star' }, () => s, {
      get iconNode() {
        return f
      },
      children: (l, o) => {
        var a = R(),
          n = V(a)
        ;(J(n, () => t.children ?? I), p(l, a))
      },
      $$slots: { default: !0 },
    })
  ),
    j())
}
function qe(e) {
  navigator.clipboard
    .writeText(e)
    .then(() => console.log('Copied to clipboard'))
    .catch((t) => console.error('Copy failed', t))
}
var Oe = M('<p> </p>'),
  Re = M(
    '<div class="w-full card preset-filled-surface-100-900 p-4"><header class="mb-4"><div class="flex items-start justify-between"><h2 class="text-xl font-semibold"> </h2> <button class="btn-icon text-surface-500 hover:text-surface-700" title="Copy to clipboard" aria-label="Copy story to clipboard"><!></button></div> <div class="mt-2 h-1 w-12 rounded bg-primary-500"></div></header> <article class="space-y-4 p-4"></article> <footer class="flex items-center justify-between gap-4 p-4"><button class="preset btn opacity-60"><!></button> <button class="preset btn opacity-60"><!></button></footer></div>'
  )
function Ve(e, t) {
  A(t, !1)
  let s = ae(t, 'storyContent', 8),
    f = ae(t, 'storyTitle', 8)
  Y()
  var l = Re(),
    o = v(l),
    a = v(o),
    n = v(a),
    $ = v(n, !0)
  c(n)
  var r = _(n, 2),
    w = v(r)
  ;(Ne(w, {}), c(r), c(a), $e(2), c(o))
  var m = _(o, 2)
  ;(X(
    m,
    5,
    () => (
      xe(s()),
      oe(() =>
        s().split(`
`)
      )
    ),
    we,
    (b, x) => {
      var P = Oe(),
        N = v(P, !0)
      ;(c(P), k(() => O(N, d(x))), p(b, P))
    }
  ),
    c(m))
  var T = _(m, 2),
    u = v(T),
    g = v(u)
  ;(De(g, {}), c(u))
  var h = _(u, 2),
    L = v(h)
  ;(Ee(L, {}),
    c(h),
    c(T),
    c(l),
    k(() => O($, f())),
    E('click', r, () => qe(s())),
    E('click', u, (b) => b.preventDefault()),
    p(e, l),
    j())
}
var ze = M('<option> </option>'),
  Ge = M('<option> </option>'),
  Ie = M(
    '<div class="mb-3.5 flex"><select class="select w-36 cursor-pointer"></select> <select class="select ml-4 w-36 cursor-pointer"></select></div>'
  )
function Be(e, t) {
  A(t, !1)
  const s = () => U(ne, '$languageSettings', l),
    f = () => U(Te, '$_', l),
    [l, o] = le()
  function a(u) {
    const g = u.target
    Ce(g.value)
  }
  function n(u) {
    const g = u.target
    ke(g.value)
  }
  Y()
  var $ = Ie(),
    r = v($)
  ;(X(
    r,
    5,
    () => Se,
    (u) => u,
    (u, g) => {
      var h = ze(),
        L = v(h, !0)
      c(h)
      var b = {}
      ;(k(
        (x) => {
          ;(O(L, x), b !== (b = d(g)) && (h.value = (h.__value = d(g)) ?? ''))
        },
        [() => f()(`language.${d(g)}`)]
      ),
        p(u, h))
    }
  ),
    c(r))
  var w
  re(r)
  var m = _(r, 2)
  ;(X(
    m,
    5,
    () => Me,
    (u) => u,
    (u, g) => {
      var h = Ge(),
        L = v(h, !0)
      c(h)
      var b = {}
      ;(k(
        (x) => {
          ;(O(L, x), b !== (b = d(g)) && (h.value = (h.__value = d(g)) ?? ''))
        },
        [() => f()(`level.label${d(g)}`)]
      ),
        p(u, h))
    }
  ),
    c(m))
  var T
  ;(re(m),
    c($),
    k(() => {
      ;(w !== (w = s().targetLanguage) &&
        ((r.value = (r.__value = s().targetLanguage) ?? ''),
        se(r, s().targetLanguage)),
        T !== (T = s().targetLevel) &&
          ((m.value = (m.__value = s().targetLevel) ?? ''),
          se(m, s().targetLevel)))
    }),
    E('change', r, a),
    E('change', m, n),
    p(e, $),
    j(),
    o())
}
var Fe = M(
    '<div class="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-800"> </div>'
  ),
  He = M(
    '<div class="space-y-4"><div class="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div> <div class="h-4 w-full animate-pulse rounded bg-gray-200"></div> <div class="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div> <div class="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div></div>'
  ),
  Je = M(
    `<div class="m-auto mx-auto flex max-w-md flex-col p-4 items-center"><h3 class="mb-6 text-2xl font-bold">Create a Micro-Story</h3> <!> <form class="w-full space-y-4 pt-1.5 pb-6"><fieldset class="align-center flex space-y-2"><label class="label"><span class="label-text">Story Topic</span> <input class="input w-full" type="text" placeholder="Enter a topic (e.g., 'a cat in the park')" required/></label> <button type="button" class="preset-outlined-secondary btn justify-center"><!></button></fieldset> <button type="submit" class="btn w-full justify-center preset-outlined-primary-500"><!></button> <!> <div class="mt-8"><!></div></form></div>`
  )
function Ze(e, t) {
  A(t, !1)
  const s = () => U(ne, '$languageSettings', f),
    [f, l] = le(),
    o = [
      'A day in the life of a butterfly',
      'The adventures of a lost sock',
      'A mysterious message in a bottle',
      'The secret life of a garden gnome',
      'A journey to the center of the Earth',
      'The tale of a talking tree',
      'An unexpected visitor from space',
      'The legend of the hidden treasure',
      'A race against time',
      'The curious case of the missing cat',
      'A magical day at the beach',
      'The quest for the golden key',
      'A picnic with dinosaurs',
      'The mystery of the haunted house',
      'A day in the life of a superhero',
      'The enchanted forest adventure',
      'A visit to a parallel universe',
      'The story of a brave little mouse',
      'A journey through a magical portal',
      'The secret of the ancient ruins',
      'A day at the wizard school',
      'The adventures of a pirate crew',
      'A night at the enchanted castle',
      'The mystery of the disappearing stars',
      'A quest to find the lost city',
    ]
  let a = q(o[Math.floor(Math.random() * o.length)]),
    n = q(''),
    $ = q(''),
    r = q(!1),
    w = q(null)
  async function m(i) {
    if ((i.preventDefault(), !!d(a).trim())) {
      ;(S(r, !0), S(w, null), S(n, ''))
      try {
        const y = Ae[s().targetLanguage],
          C = await fetch('/story/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              topic: d(a),
              language: y,
              level: s().targetLevel,
            }),
          })
        if (!C.ok) throw new Error(`Server responded with ${C.status}`)
        const z = await C.json()
        ;(S($, z.title), S(n, z.body))
      } catch (y) {
        ;(console.error('Story generation failed:', y),
          S(w, 'Failed to generate story. Please try again.'))
      } finally {
        S(r, !1)
      }
    }
  }
  Y()
  var T = Je(),
    u = _(v(T), 2)
  Be(u, {})
  var g = _(u, 2),
    h = v(g),
    L = v(h),
    b = _(v(L), 2)
  ;(Le(b), c(L))
  var x = _(L, 2),
    P = v(x)
  ;(Pe(P, { class: '' }), c(x), c(h))
  var N = _(h, 2),
    ie = v(N)
  {
    var ce = (i) => {
        var y = te('Generating...')
        p(i, y)
      },
      de = (i) => {
        var y = te('Generate Story')
        p(i, y)
      }
    G(ie, (i) => {
      d(r) ? i(ce) : i(de, !1)
    })
  }
  c(N)
  var Z = _(N, 2)
  {
    var ve = (i) => {
      var y = Fe(),
        C = v(y, !0)
      ;(c(y), k(() => O(C, d(w))), p(i, y))
    }
    G(Z, (i) => {
      d(w) && i(ve)
    })
  }
  var ee = _(Z, 2),
    ue = v(ee)
  {
    var fe = (i) => {
        Ve(i, {
          get storyContent() {
            return d(n)
          },
          get storyTitle() {
            return d($)
          },
        })
      },
      he = (i) => {
        var y = R(),
          C = V(y)
        {
          var z = (W) => {
            var ge = He()
            p(W, ge)
          }
          G(
            C,
            (W) => {
              d(r) && W(z)
            },
            !0
          )
        }
        p(i, y)
      }
    G(ue, (i) => {
      d(n) ? i(fe) : i(he, !1)
    })
  }
  ;(c(ee),
    c(g),
    c(T),
    k(
      (i) => {
        ;((b.disabled = d(r)), (x.disabled = d(r)), (N.disabled = i))
      },
      [() => d(r) || !d(a).trim()]
    ),
    je(
      b,
      () => d(a),
      (i) => S(a, i)
    ),
    E('click', x, () => S(a, o[Math.floor(Math.random() * o.length)])),
    E('submit', g, m),
    p(e, T),
    j(),
    l())
}
export { Ze as component }
