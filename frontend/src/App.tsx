import '../app/globals.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/AppRoutes";
import Layout from './components/ui/layout';
import Navbar from './components/ui/Navbar';


const App = () => {
  return (
    <BrowserRouter>
    
      <Layout>
      <Navbar />
      <AppRoutes />  
      </Layout>
    
    </BrowserRouter>
  );
};

export default App;