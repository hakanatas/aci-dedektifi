/* SAHNE 1 — ÇİÇEK TARHI (0–10 s)  A trapezoid-shaped flower bed, two corners measured.
   The whole film's drawing lives in LI.world(t); each scene only sets the camera. */
(function (LI) {
  'use strict';
  const { seg } = LI.E;
  const KD = LI.KD, F = () => LI.Film, A = LI.Ang, Ink = LI.Ink;
  const END = (t) => 1 - seg(t, 90.4, 91.4);

  function win(t, a, b, fi = 0.4, fo = 0.4) { return seg(t, a, a + fi) * (1 - seg(t, b - fo, b)); }
  function exprs(ctx, t, P, list, sz) {
    const f = F();
    list.forEach(([a, b, items, hot]) => {
      const al = win(t, a, b); if (al <= 0) return;
      f.expr(ctx, typeof items === 'string' ? [items] : items, P.x, P.y, sz ?? P.s, { alpha: al, w: P.w, halo: true, color: hot ? A.amber : undefined });
    });
  }
  const at = (P, k, y) => ({ x: P.x, y: y ?? P.y[k], s: P.s, w: P.w });

  function context(ctx, env, t) {
    exprs(ctx, t, KD.L(env).CX, [
      [4.4, 10.2, 'Yamuk biçimli bir çiçek tarhı: iki köşesi ölçüldü'],
      [10.6, 27.8, 'Önce problemi anlayalım'],
      [28.4, 45.8, 'Strateji: karşı durumlu açılar'],
      [46.4, 61.8, 'Başka bir yol: C’den AD’ye paralel çizelim'],
      [62.4, 79.8, 'Bu kural başka dörtgenlerde de geçerli mi?'],
    ]);
  }

  function bed(ctx, env, t) {
    const L = KD.L(env), G = L.G, f = F(), a = END(t) * (1 - seg(t, 61.8, 62.4)); if (a <= 0) return;
    const P = f.pts(G), Q = [P.A, P.B, P.C, P.D];
    // the transversal view: AD, AB and DC extended
    const ext = win(t, 18.6, 27.8) * a, ek = seg(t, 18.6, 19.8);
    f.longLine(ctx, P.A, P.B, 160 * G.k, ek, ext, 1901); f.longLine(ctx, P.D, P.C, 260 * G.k, ek, ext, 1902); f.longLine(ctx, P.A, P.D, 110 * G.k, ek, ext, 1903);
    // parallelogram AECD and triangle EBC in the second solution
    const s2 = win(t, 48.4, 61.8) * a;
    if (s2 > 0) { f.fill(ctx, [P.A, P.E, P.C, P.D], s2, 0.06); f.fill(ctx, [P.E, P.B, P.C], s2, 0.22); }
    else f.fill(ctx, Q, seg(t, 6.6, 7.4) * a);
    f.poly(ctx, Q, seg(t, 4.6, 7.0), a, 1910);
    const pm = seg(t, 11.6, 12.2) * a; f.chevron(ctx, P.A, P.B, pm, 1920, 2); f.chevron(ctx, P.D, P.C, pm, 1923, 2);
    // the line through C, parallel to AD
    const ce = seg(t, 47.0, 48.2);
    if (ce > 0) {
      Ink.path(ctx, [P.C, P.E], { w: 5, p: ce, alpha: a * (1 - seg(t, 61.4, 61.8)), color: LI.AMBER_RGB, seed: 1930, taper: [0.05, 0.05] });
      const k2 = win(t, 48.2, 61.8) * a; f.chevron(ctx, P.A, P.D, k2, 1932); f.chevron(ctx, P.E, P.C, k2, 1934);
      f.T(ctx, 'E', P.E[0], P.E[1] + 40, { size: G.s * 0.85, alpha: seg(t, 47.8, 48.2) * a });
    }
    // corner letters
    const la = seg(t, 6.6, 7.2) * a;
    [['A', P.A, [-30, 30]], ['B', P.B, [30, 30]], ['C', P.C, [26, -28]], ['D', P.D, [-26, -28]]].forEach(([s, p, o]) => f.T(ctx, s, p[0] + o[0], p[1] + o[1], { size: G.s * 0.85, alpha: la }));
    // the measured corners and the unknowns
    const cA = f.corner(P.A, P.B, P.D), cB = f.corner(P.B, P.C, P.A), cC = f.corner(P.C, P.D, P.B), cD = f.corner(P.D, P.A, P.C);
    const hl = win(t, 19.8, 27.8);
    f.cornerMark(ctx, G, P.A, cA, '65°', seg(t, 7.4, 7.9) * a, 1941, { wedge: hl });
    f.cornerMark(ctx, G, P.B, cB, '50°', seg(t, 8.0, 8.5) * a, 1942);
    const q = seg(t, 8.6, 9.0) * (1 - seg(t, 29.8, 30.2)) * a;
    f.cornerMark(ctx, G, P.D, cD, '?', Math.max(q * (1 - seg(t, 29.8, 30.2)), 0), 1943, { wedge: hl });
    f.cornerMark(ctx, G, P.C, cC, '?', seg(t, 8.6, 9.0) * (1 - seg(t, 33.0, 33.4)) * a, 1944);
    const s1 = (1 - seg(t, 45.8, 46.4)) * a;
    f.cornerMark(ctx, G, P.D, cD, '115°', seg(t, 30.2, 30.8) * s1, 1945);
    f.cornerMark(ctx, G, P.C, cC, '130°', seg(t, 33.4, 34.0) * s1, 1946);
    if (t > 39.0 && t < 45.8) f.tick(ctx, L.W.x + (env.V ? 360 : 520), L.W.y[2], seg(t, 39.0, 39.6), win(t, 39.0, 45.8));
    // the triangle EBC: E = 65° (corresponding), then C splits into 65° + 65°
    if (s2 > 0) {
      f.cornerMark(ctx, G, P.E, f.corner(P.E, P.B, P.C), '65°', seg(t, 49.6, 50.2) * s2, 1951, { r: G.r * 0.8, nr: G.nr * 0.8 });
      f.cornerMark(ctx, G, P.C, f.corner(P.C, P.E, P.B), '65°', seg(t, 53.4, 54.0) * s2, 1952, { r: G.r * 0.9, nr: G.nr * 0.85 });
      f.cornerMark(ctx, G, P.C, f.corner(P.C, P.D, P.E), '65°', seg(t, 55.6, 56.2) * s2, 1953, { r: G.r * 1.25, nr: G.nr * 1.1 });
    }
  }

  /** the rule on other quadrilaterals */
  function examples(ctx, env, t) {
    const a = win(t, 62.6, 79.8); if (a <= 0) return;
    const L = KD.L(env), X = L.EXS, f = F(), G = { r: 38, nr: 70, s: X.s };
    const names = [['pk', 'Paralelkenar', 63.0], ['dik', 'Dikdörtgen', 64.6], ['ekd', 'Eşkenar dörtgen', 66.2], ['gen', 'Paralel kenarı yok', 68.0]];
    names.forEach(([n, name, t0], i) => {
      const k = seg(t, t0, t0 + 0.6) * a; if (k <= 0) return;
      const c = X.c[i], P = f.EX[n].map((p) => [c[0] + p[0] * X.k, c[1] + p[1] * X.k]);
      f.fill(ctx, P, k); f.poly(ctx, P, seg(t, t0, t0 + 0.6), a, 1960 + i * 5, 5);
      const c1 = f.corner(P[0], P[1], P[3]), c2 = f.corner(P[3], P[0], P[2]), m1 = f.size(c1), m2 = n === 'gen' ? f.size(c2) : 180 - m1;
      const km = seg(t, t0 + 0.5, t0 + 0.9) * a;
      f.cornerMark(ctx, G, P[0], c1, `${m1}°`, km, 1980 + i * 2, { size: X.s * 0.72 });
      f.cornerMark(ctx, G, P[3], c2, `${m2}°`, km, 1981 + i * 2, { size: X.s * 0.72 });
      f.T(ctx, name, c[0], c[1] - X.dy * 0.95, { size: X.s * 0.78, alpha: k });
      const ks = seg(t, t0 + 0.9, t0 + 1.3) * a, y = c[1] + X.dy;
      f.T(ctx, `${m1}° + ${m2}° = ${m1 + m2}°`, c[0], y, Object.assign({ size: X.s * 0.8, alpha: ks, halo: true }, n === 'gen' ? {} : f.AMB));
      const kt = seg(t, t0 + 1.3, t0 + 1.8);
      if (n === 'gen') f.crossInk(ctx, c[0] + 130 * X.k, y - 60, 16, kt, a); else f.tick(ctx, c[0] + 125 * X.k, y - 60, kt, a);
    });
  }

  function words(ctx, env, t) {
    const W = KD.L(env).W;
    exprs(ctx, t, at(W, 0), [[11.2, 27.8, 'Şekil: yamuk · AB ile DC paralel'],
      [29.4, 45.8, '65° + D = 180°  →  D = 115°'], [49.0, 61.8, 'AD ile CE paralel: E açısı da 65° (yöndeş)'],
      [70.4, 79.8, 'Paralel iki kenar arasındaki açıların toplamı 180°']]);
    exprs(ctx, t, at(W, 1), [[13.4, 27.8, 'Verilen: A = 65°, B = 50° · İstenen: C ve D'],
      [32.4, 45.8, '50° + C = 180°  →  C = 130°'], [51.8, 61.8, 'Üçgen EBC: 180° − 65° − 50° = 65°'],
      [72.4, 79.8, 'Paralelkenar, dikdörtgen, eşkenar dörtgen, kare: hepsinde geçerli']]);
    exprs(ctx, t, at(W, 2), [[19.4, 27.8, 'AD iki paraleli kesiyor: A ile D karşı durumlu açılar', true],
      [37.0, 45.8, 'Kontrol: 65° + 50° + 130° + 115° = 360°', true], [54.8, 61.8, 'C = 65° + 65° = 130° · aynı sonuç!', true],
      [74.4, 79.8, 'Paralel kenar yoksa kural geçerli değil', true]]);
  }

  function summary(ctx, env, t) {
    if (t < 80.4) return;
    const S = KD.L(env).SUM, f = F(), a = END(t);
    [['Bileşenleri belirle: şekil, açılar, paralellik', 80.6], ['Karşı durumlu açıların toplamı 180°', 81.6], ['Kontrol et: dörtgende toplam 360°', 82.6], ['Başka bir yolla da dene!', 83.6, true]].forEach(([s, t0, hot], i) => {
      const al = seg(t, t0, t0 + 0.4) * a; if (al <= 0) return;
      f.expr(ctx, [s], S.x, S.y[i], S.s * (i === 3 ? 1.15 : 1), { alpha: al, w: S.w, halo: true, color: hot ? A.amber : undefined });
    });
  }

  LI.fireworks = function (ctx, env, t) {
    const k = seg(t, 84.4, 86.4);
    if (k <= 0 || t >= 91) return;
    const n = F().nokta(t, env), C = [n.x, n.y - 170];
    [30, 60, 90, 120, 150].forEach((d, i) => {
      const r = 150 + 30 * Math.sin(t * 2 + i);
      A.arc(ctx, C, r, d - 12, d + 12, { p: seg(k, i * 0.12, i * 0.12 + 0.4), alpha: 0.8 * (1 - seg(t, 90.2, 91)), w: 6, seed: 80 + i });
    });
  };

  LI.world = function (ctx, env, t) { context(ctx, env, t); bed(ctx, env, t); examples(ctx, env, t); words(ctx, env, t); summary(ctx, env, t); };

  function camera(t, env) {
    const L = KD.L(env);
    return LI.Camera.breathe(LI.Camera.track([
      [0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [3.0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [4.8, KD.cam(env, { zoom: 1 })],
    ], t), t, 0.5);
  }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 1, start: 0, end: 10, name: 'A flower bed', nameTr: 'Çiçek tarhı', concept: 'Two corners measured', conceptTr: 'İki köşe ölçüldü', render });
})(window.LI = window.LI || {});
