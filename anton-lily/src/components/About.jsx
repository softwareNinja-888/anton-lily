export function About() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-7/12 mx-auto py-20">
                <div className="text-3xl font-quickSand uppercase">About Us</div>
                <div className="font-playfair text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum animi tenetur molestiae modi tempora eum eveniet sed aspernatur mollitia rem temporibus sit dolore facilis aut, amet ipsam voluptatum id?</div>
            </div>
            <div className="py-8 relative">
                <div className="flex flex-col gap-4 absolute w-90 h-80 bg-white left-[35%] top-[30%] py-6 px-6">
                    <div className="uppercase font-quickSand text-2xl text-center">Our Rooms</div>
                    <div className="text-center text-base font-playfair">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti quasi alias, iste fuga delectus tenetur dolore unde, ipsam neque modi nostrum repellat sit asperiores dicta? Libero sit praesentium architecto.</div>
                </div>
                <img src="/rooms.avif" alt="hero image" className="" />
            </div>
        </>
    );
}