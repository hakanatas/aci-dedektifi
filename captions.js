/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 6. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 10.2, tr: 'A köşesi 65°, B köşesi 50°. C ve D?', en: 'Corner A is 65°, corner B is 50°. C and D?',
      note: 'Bahçede yamuk biçimli bir çiçek tarhı var. Bahçıvan iki köşeyi ölçmüş: A köşesi 65°, B köşesi 50°. Diğer iki köşe kaç derece?' },
    { scene: 2, start: 10.8, end: 18.4, tr: 'Şekil yamuk; verilen A ve B, istenen C ve D', en: 'A trapezoid; given A and B, asked C and D',
      note: 'Önce problemi anlayalım. Şekil bir yamuk: AB ve DC kenarları paralel. Verilenler A ve B açıları, istenenler C ve D açıları.' },
    { scene: 2, start: 18.8, end: 27.8, tr: 'AD bir kesen: A ile D karşı durumlu', en: 'AD is a transversal: A and D are same-side',
      note: 'Şekli başka türlü görelim: AB ve DC iki paralel doğru, AD ise onları kesen bir doğru. Bu durumda A ve D karşı durumlu açılardır.' },
    { scene: 3, start: 28.6, end: 36.6, tr: 'D = 180° − 65° = 115°, C = 180° − 50° = 130°', en: 'D = 180° − 65° = 115°, C = 180° − 50° = 130°',
      note: 'Karşı durumlu açıların toplamı 180°. D, 180 eksi 65, yani 115°. Aynı şekilde BC de bir kesen: C, 180 eksi 50, yani 130°.' },
    { scene: 3, start: 37.0, end: 45.8, tr: 'Kontrol: toplam 360°', en: 'Check: the total is 360°',
      note: 'Kontrol edelim: bir dörtgenin iç açıları toplamı 360°. 65 artı 50 artı 130 artı 115, tam 360. Sonuç tutarlı.' },
    { scene: 4, start: 46.6, end: 53.6, tr: 'C’den AD’ye paralel: paralelkenar ve üçgen', en: 'A parallel to AD through C: a parallelogram and a triangle',
      note: 'Başka bir yol deneyelim. C noktasından AD’ye paralel bir doğru çizelim; AB’yi E’de kessin. Yamuk bir paralelkenara ve bir üçgene ayrıldı. AD ile CE paralel olduğu için E’deki açı A ile yöndeş: 65°.' },
    { scene: 4, start: 54.0, end: 61.8, tr: 'C = 65° + 65° = 130°: aynı sonuç', en: 'C = 65° + 65° = 130°: the same answer',
      note: 'EBC üçgeninde C’deki açı 180 eksi 65 eksi 50, yani 65°. Paralelkenarda karşılıklı açılar eşit, DCE açısı da 65°. C açısı 65 artı 65, 130°. İki yol aynı sonuca vardı.' },
    { scene: 5, start: 62.6, end: 69.8, tr: 'Kural başka dörtgenlerde de çalışır mı?', en: 'Does the rule work for other quadrilaterals?',
      note: 'Kullandığımız kural: paralel iki kenar arasındaki açıların toplamı 180°. Paralelkenarda 70 artı 110, dikdörtgende 90 artı 90, eşkenar dörtgende 60 artı 120: hepsi 180.' },
    { scene: 5, start: 70.2, end: 79.8, tr: 'Paralel kenar yoksa kural geçerli değil', en: 'Without parallel sides the rule fails',
      note: 'Ama paralel kenarı olmayan bir dörtgende 80 artı 88, 168 eder, 180 değil. Genelleme yalnızca paralel kenarları olan dörtgenlerde geçerli.' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Belirle, çöz, kontrol et', en: 'Identify, solve, check',
      note: 'Aklında kalsın: önce şekli, açıları ve paralellikleri belirle. Karşı durumlu açıların toplamı 180°. Dörtgende toplam 360° ile kontrol et.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Başka bir yolla da dene!', en: 'Try another way too!',
      note: 'Ve bir problemi başka bir yolla da çözmeyi dene!' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
