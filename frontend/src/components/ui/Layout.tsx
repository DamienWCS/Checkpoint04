
import backgroundImage from '/bg-home.jpg'; // Importez votre image de fond

const Layout = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ajustez selon vos besoins
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Layout;
