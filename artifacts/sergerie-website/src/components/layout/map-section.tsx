export function MapSection() {
  return (
    <section className="w-full" data-testid="map-section">
      <iframe src="https://www.google.com/maps?q=381%20rue%20Principale%2C%20Québec%2C%20G0V%201G0&output=embed" width="100%" height="450" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Emplacement d’Armoire Belle-Vue Ébénisterie" />
    </section>
  );
}