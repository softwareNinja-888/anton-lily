export function Header() {

    const headerLinks = ['Home','About','Services','Gallery','See & Do','Contact',]
    return (
        <>
            <div className="flex flex-row gap-30 justify-center bg-black w-full py-8">
                {headerLinks.map(link=>{
                    return (
                        <div  className="uppercase font-raleway transition-all duration-500 text-white/80 hover:text-white/50 text-sm cursor-pointer" >
                            <a href={`#${link.toLowerCase()}`}>
                                {link}
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    );
}