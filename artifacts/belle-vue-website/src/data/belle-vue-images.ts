export const belleVueHeroImage = 'belle-vue/hero.webp';

export const belleVueImages = Array.from(
  { length: 28 },
  (_, index) => `belle-vue/belle-vue-${String(index + 1).padStart(2, '0')}.webp`,
);