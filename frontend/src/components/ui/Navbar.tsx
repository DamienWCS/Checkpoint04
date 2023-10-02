import { Button } from "@/components/ui/button"
import { Instagram, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const openDefaultMailApp = () => {
        window.open("mailto:contact@therestaurant.com");
      };
    return (
     
            <div className="w-100vw h-12  flex justify-between items-center p-4 text-white">
                <h1>TheRestaurant</h1>

                <nav className="">

                <Link to="/">
                <Button className="h-12 hover:opacity-80 rounded-none" variant="ghost">Home</Button>
                </Link>    
                <Link to="/menu">
                <Button className="h-12 hover:opacity-80 rounded-none" variant="ghost">Menu</Button>
                </Link>
                <Link to="/reservation">
                <Button className="h-12 hover:opacity-80 rounded-none" variant="ghost">Réservation</Button>
                </Link>
                <Link to="/contact">
                <Button className="h-12 hover:opacity-80 rounded-none" variant="ghost">Contact</Button>
                </Link>

                </nav>

                <div className="flex flex-row gap-2">
                <a  onClick={openDefaultMailApp}>
          <Mail />
        </a>
                    <Twitter />
                    <Instagram />
                </div>
                
                

            </div>
       
        
    );
};

export default Navbar;