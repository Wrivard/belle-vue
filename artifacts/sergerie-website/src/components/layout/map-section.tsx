export function MapSection() {
  return (
    <section className="w-full" data-testid="map-section">
      <iframe
        src="https://www.google.com/maps?q=Montreal%2C%20Quebec&output=embed"
        width="100%"
        height="450"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Secteurs desservis par Construction KMF"
      />
    </section>
  );
}
