import { Map } from "./Map";

export function Footer() {
    return (
        <>
            <Map/>
            <div className="bg-gray-300">
                <div className="grid grid-cols-1 mx-auto">
                    <div className="uppercase text-2xl font-quickSand">Contact us</div>
                    <div className="flex flex-row">
                        <div className="">info@mysite.com</div>
                        <div className="">info@mysite.com</div>
                        <div className="">info@mysite.com</div>
                    </div>
                    <form >
                        <div className="">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div><div className="">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div><div className="">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div><div className="">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}