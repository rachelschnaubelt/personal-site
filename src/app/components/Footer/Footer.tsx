import './Footer.scss';

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

    return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>  
    );
  }
  