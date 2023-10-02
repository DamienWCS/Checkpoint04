import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "../utils"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import React, { useState } from 'react';
import axios from 'axios';



const Réservation = () => {
 const [date, setDate] = React.useState<Date | undefined>(new Date());
 const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(''); // Ajoutez le state pour numberOfPeople
  


  const handleReservation = async () => {
    // Assurez-vous que tous les champs sont remplis avant d'envoyer la réservation
    
  console.log('numberOfPeople:', numberOfPeople);
    if (!date || !name || !firstName || !phone || !numberOfPeople) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Créez un objet avec les données de la réservation
    const reservationData = {
      date,
      name,
      firstName,
      phone,
      numberOfPeople,
    };
    try {
      // Effectuez une requête POST pour envoyer la réservation au backend
      const response = await axios.post('/api/reservations', reservationData);

      // Traitez la réponse si nécessaire
      console.log('Réservation créée avec succès :', response.data);

      // Effacez les champs après la réservation réussie si nécessaire
      setDate(undefined);
      setName('');
      setFirstName('');
      setPhone('');
      setNumberOfPeople('');
    } catch (error) {
      // Gérez les erreurs
      console.error('Erreur lors de la création de la réservation :', error);
    }
  };

    return (
        <div className="w-full h-screen flex justify-evenly items-center p-24 ">
            
            <div className="w-96 h-96 bg-white opacity-80 flex flex-col p-4 rounded-2xl" >
              
            <Label htmlFor="datePicker">Sélectionnez une date :</Label>
         <Popover>
            <PopoverTrigger asChild>
         <Button
           variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
           )}
            >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Choisissez une date</span>}
            </Button>
             </PopoverTrigger>
             <PopoverContent className="w-auto p-0">
            <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          
            />
            </PopoverContent>
                </Popover>

                
                <div className="mb-4">
  <Label htmlFor="numberOfPeople">Nombre de personnes</Label>
  <Input
    type="number"
    id="numberOfPeople"
    placeholder="Nombre de personnes"
    value={numberOfPeople}
    onChange={(e) => setNumberOfPeople(e.target.value)}
  />
</div>



            </div>
            <div className="w-96 bg-white opacity-80 flex flex-col p-4 rounded-2xl" >

<h3 className="self-center">Réserver</h3>

<div className="mb-4">
    <Label htmlFor="name">Nom</Label>
    <Input type="text" id="name" placeholder="Nom" onChange={(e) => setName(e.target.value)}/>
</div>

<div className="mb-4">
    <Label htmlFor="firstname">Prénom</Label>
    <Input type="text" id="firstname" placeholder="Prénom" onChange={(e) => setFirstName(e.target.value)}/>
</div>

<div className="mb-4">
    <Label htmlFor="phone">Téléphone</Label>
 <Input type="tel" id="phone" placeholder="Numéro de téléphone" onChange={(e) => setPhone(e.target.value)} />
</div>

<Button type="submit" onClick={handleReservation}>Réserver</Button>
 
</div>
          
        </div>
    );
};

export default Réservation;