// src/components/contact/ContactMap.tsx
export default function ContactMap() {
  return (
    <section className="h-[400px] md:h-[500px]">
      <iframe
        title="RKSS Consultants Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.436034995169!2d77.751103!3d12.972442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13edc458d3b3%3A0x8e5f44c57b2e6e0d!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </section>
  );
}
