

const Footer = () => {
    return (
        <div className=" bg-slate-900 text-white">
            <div className="w-11/12 mx-auto grid grid-cols-4 py-4 space-x-4">
                <div className="">
                    <h2 className="text-xl font-bold text-[#EF3E24]">EME Inspection Services Ltd.</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero nemo dignissimos adipisci laudantium impedit ea eius reprehenderit eveniet obcaecati!</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[#EF3E24]">Our Services</h2>
                    <ul className="list-disc text-sm pl-8 ">
                        <li>Fire Safety Plan</li>
                        <li>Fire Detection & Alarm System</li>
                        <li>Fire Protection System</li>
                        <li>Evacuation & Machine Layout</li>
                        <li>pre-Shipment and Post Landing Inspection</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[#EF3E24]">Our Clients</h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[#EF3E24]">Contact Us</h2>
                    <div className="text-sm">
                        <p><span className="font-bold">Address:</span> Abanti, Suite#A-3, H#37, R#27, Blk#A, Banani, Dhaka-1213.</p>
                        <br />
                        <p><span className="font-bold">Phone:</span> +8801711-527601, +8801712-045600 +8801618-500425, +8801716-754600</p>
                        <br />
                        <p><span className="font-bold">Enail: </span>emeisltd@gmail.com engr.enam64@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs flex justify-center space-x-2 py-4">
                &copy; <p className="font-bold">  ALL RIGHTS RESERVED EMEISLTD</p>
            </div>
        </div>
    );
};

export default Footer;