import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
      
        <div className="w-full flex justify-center items-center">
            <div className="w-96 h-full bg-white opacity-80 flex flex-col p-4 rounded-2xl" >

            <h3 className="self-center">Contactez-nous</h3>

            <div className="mb-4">
                <Label htmlFor="firstname">Nom</Label>
                <Input type="text" id="firstname" placeholder="Nom" />
            </div>

            <div className="mb-4">
                <Label htmlFor="lastname">Prénom</Label>
                <Input type="text" id="lastname" placeholder="Prénom" />
            </div>

            <div className="mb-4">
                <Label htmlFor="email">Email</Label>
             <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Message" style={{ resize: "none" }} />
            </div>
         

            <Button type="submit">Submit</Button>

            </div>


          
        </div>
    );
};

export default Contact;