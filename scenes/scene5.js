/* SAHNE 5 — GENELLEME GEÇERLİ Mİ? (62–80 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 5, start: 62, end: 80, name: 'Does it generalise?', nameTr: 'Genelleme geçerli mi?', concept: 'Only with parallel sides', conceptTr: 'Yalnızca paralel kenarlarda', render });
})(window.LI = window.LI || {});
