import { Quote } from "lucide-react";

export function Review() {
    return (
        <>
             <div className="py-8 relative">
                <div className="flex flex-col gap-4 absolute w-90 h-80 bg-white left-[35%] top-[30%] py-6 px-6">
                    <div className="uppercase font-quickSand text-2xl text-center">Guest Reviews</div>
                    <Quote className="mx-auto text-center mt-5"/>
                    <div className="text-center text-base font-playfair">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti quasi alias, iste fuga.</div>
                </div>
                <img src="/review.avif" alt="hero image" className="" />
            </div>
        </>
    );
}