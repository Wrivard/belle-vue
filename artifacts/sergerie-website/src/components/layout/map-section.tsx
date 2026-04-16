export function MapSection() {
  return (
    <section className="w-full" data-testid="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44865.06350975407!2d-74.0036!3d45.7800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf2c20c9210be1%3A0x5040cadae4d5880!2sSaint-J%C3%A9r%C3%B4me%2C%20QC!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
        width="100%"
        height="450"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation - Saint-Jérôme, Laurentides"
      />
    </section>
  );
}
