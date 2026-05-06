export function MapSection() {
  return (
    <section className="w-full" data-testid="map-section">
      <iframe
        src="https://www.google.com/maps?q=Sainte-Julienne%2C%20QC%2C%20Canada&output=embed"
        width="100%"
        height="450"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation - Sainte-Julienne, QC"
      />
    </section>
  );
}
