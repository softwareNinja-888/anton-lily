import { GoDash } from 'react-icons/go'
function SubHeading({subheading='Enter subheading'}){
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <div className="border-1 border-black w-8 "></div>
            <div className="text-2xl font-cinzel">{subheading}</div>
            <div className="border-1 border-black w-8 "></div>
        </div>
    )
}
export function Hero() {
    return (
        <>
            <div className="flex flex-col mx-auto py-16">
                <div className="flex flex-col gap-3 text-center">
                    <div className="uppercase font-raleway text-6xl">Anton & Lily</div>
                    <SubHeading subheading='Bed & Breakfast'/>
                </div>
            </div>
            <div className="py-8">
                <img src="/hero.avif" alt="hero image" className="" />
            </div>
        </>
    );
}