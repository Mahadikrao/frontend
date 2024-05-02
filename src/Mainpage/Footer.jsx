import "../Style/Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p>Phone: +1234567890</p>
          <p>Location: Your Location</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
