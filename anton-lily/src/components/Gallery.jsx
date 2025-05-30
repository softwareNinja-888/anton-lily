import { ArrowBigRight } from "lucide-react";

function GalleryCard({img='/11.avif',name="Coast Villa"}){
    return (
        <>
           <div className="relative group ">
                <div className="overflow-hidden aspect-w-1 aspect-h-1 h-90 w-full group-hover:rounded-2xl transition-all duration-500 ease-in-out">
                    <img className="object-cover w-full h-90 transition-all duration-300 hover:scale-125 cursor-pointer" src={img} alt={`${name} image`} loading='lazy' />
                </div>
                <div className="flex lg:opacity-0 items-center justify-between border border-white bg-white py-2 text-xl font-Cal_Sans absolute bottom-5 w-11/12 h-20 rounded-xl px-5 mx-auto right-6 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                    <div>
                        {name}
                    </div>
                    <div>
                        {/* ARROW */}
                        <ArrowBigRight className="text-black"/>
                    </div>
                </div>
           </div>
        </>
    )
}
export function Gallery() {
    return ( 
        <>
            <div id="gallery" className="text-4xl font-quickSand uppercase text-center mb-16">Gallery</div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center w-11/12 lg:w-11/12 gap-18 md:gap-3">

                <GalleryCard name="Coast Villa" img="/11.avif"/>
                <GalleryCard name="Peak House" img="/12.avif"/>
                <GalleryCard name="Oasis Residence" img="/13.avif"/>
                <GalleryCard name="Zen Haven" img="/14.avif"/>
            </div>

        </>
    );
}