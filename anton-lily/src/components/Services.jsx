// LUCIDE :

import { EggFried } from "lucide-react";
import { TreeDeciduous } from "lucide-react";
import { WavesLadder } from "lucide-react";
import { Wifi } from "lucide-react";
import { BrushCleaning } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";

const serviceList = {
    breakfast: {
      name: "Breakfast",
      icon: (
        <EggFried size={40}/>
      ),
      description: "Start your day with a delicious breakfast prepared fresh every morning.",
    },
    garden: {
      name: "Garden",
      icon: (
        <TreeDeciduous size={40}/>
      ),
      description: "Relax and unwind in our beautiful, serene garden space.",
    },
    pool: {
      name: "Pool",
      icon: (
        <WavesLadder size={40}/>
      ),
      description: "Enjoy a refreshing swim in our clean and spacious pool area.",
    },
    wifi: {
      name: "Free Wi-Fi",
      icon: (
        <Wifi size={40}/>
      ),
      description: "Stay connected with complimentary high-speed internet throughout the property.",
    },
    housekeeping: {
      name: "Daily Housekeeping",
      icon: (
        <BrushCleaning size={40}/>
      ),
      description: "Your room is cleaned daily to ensure a fresh and comfortable stay.",
    },
    dining: {
      name: "In-Room Dining",
      icon: (
        <UtensilsCrossed size={40}/>
      ),
      description: "Savor delicious meals delivered straight to the comfort of your room.",
    },
  };

function ServiceCard({name='Service Name',img,description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit laboriosam quod provident, delectus est.'}){
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-3 h-60 py-4">
                <div className="flex justify-center mb-4 ">
                    {img}
                </div>
                <div className="font-quickSand text-xl mb-4">{name}</div>
                <div className="text-sm text-center w-11/12 font-cinzel">{description}</div>
            </div>
        </>
    )
}
export function Services() {

    return (
        <>
            <div id="services" className="grid grid-cols-3 mx-auto gap-x-10 gap-y-10 py-20 ">
               {Object.values(serviceList).map(service=>(
                    <ServiceCard name={service.name} img={service.icon} description={service.description}/>
               ))}
            </div>
        </>
    );
}