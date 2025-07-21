export default function ContactUs() {
  return (
    <div className="contact-us-cont">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Have a question, suggestion, or just want
          to say hello? <br /> Our team is here to help. Whether it's feedback
          about our services, a business inquiry, or support with an order, feel
          free to reach out anytime.
        </p>
        {/* 📬 Get in Touch */}
        <p className="offerings">📬 Get in Touch</p>

        <ul>
          <li>
            Email: 📩 support@onlineshoestore.com (We respond within 24 hours!)
          </li>
          <li>
            Phone: 📞 +91-9988776655 (Monday to Saturday, 10:00 AM - 6:00 PM)
          </li>
          <li>
            Address: 🏢 Online Shoe Store, OPH Road, Bangalore, Karnataka, India
            - 560067
          </li>
          <li>
            🕐 Business Hours Monday to Saturday: 10:00 AM - 6:00 PM Sunday:
            Closed
          </li>
        </ul>
        <p>
          {" "}
          Stay Connected: Follow us on social media for updates, offers, and
          more: 📱 Facebook | Instagram | Twitter | LinkedIn
        </p>
      </div>
    </div>
  );
}
