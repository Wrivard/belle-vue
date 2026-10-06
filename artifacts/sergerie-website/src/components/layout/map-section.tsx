const MAP_URL = 'https://www.google.com/maps?q=381%20rue%20Principale%2C%20Québec%2C%20G0V%201G0&output=embed';

export function MapSection() {
  return (
    <section id="carte" className="w-full bg-[#E9E9E9]" data-testid="map-section">
      <iframe src={MAP_URL} width="100%" height="450" style={{ border: 0, display: 'block' }} allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Emplacement d’Armoire Belle-Vue" />
    </section>
  );
}
