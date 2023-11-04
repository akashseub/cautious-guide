import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className=" py-4 text-md font-bold shadow-md">
            <div className="flex justify-between w-11/12 mx-auto items-center">
                <Link to = '/'>
                    <div className="flex items-center space-x-2">
                        <img className="h-10" src="/src/assets/logo.png" alt="" />
                        <h2>EME Inspection Services Ltd.</h2>
                    </div>
                </Link>
                <div className="text-center ">
                    <Link to="/" className="p-4 hover:bg-gray-300 hover:rounded-xl">Home</Link>
                    <Link to="/about" className="p-4 hover:bg-gray-300 hover:rounded-xl">About Us</Link>
                    <Link to="/about" className="p-4 hover:bg-gray-300 hover:rounded-xl">Our Services</Link>
                    <Link to="/about" className="p-4 hover:bg-gray-300 hover:rounded-xl">Our Clients</Link>
                    <Link to="/about" className="p-4 hover:bg-gray-300 hover:rounded-xl">Contact Us</Link>
                    <button className="ml-4 rounded-xl py-2 px-4 bg-green-950 text-white">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;