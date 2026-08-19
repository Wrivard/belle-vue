export function MapSection() {
  return (
    <section className="w-full" data-testid="map-section">
      <iframe
        src="https://www.google.com/maps?q=40%20Camille%2C%20Repentigny%2C%20QC&output=embed"
        width="100%"
        height="450"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation - Repentigny, QC"
      />
    </section>
  );
}
