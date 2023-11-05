import { Link } from "react-router-dom";
import Login from "../LoginForm/Login";
// import Login from "../LoginForm/Login";


const Header = () => {
    return (
        <div className=" py-1 text-md font-bold shadow-md sticky top-0 index-100 bg-white z-50">
            <div className="md:flex justify-between w-11/12 mx-auto items-center">
                <Link to='/'>
                    <div className="flex items-center space-x-2">
                        <img className="h-10" src="/src/assets/logo.png" alt="" />
                        <h2>EME Inspection Services Ltd.</h2>
                    </div>
                </Link>
                <div className="text-center md:flex items-center">
                    <Link to="/" className="p-4 hover:bg-gray-300 hover:rounded-xl hover:text-[#0C356A]">Home</Link>
                    <Link to="/about" className="p-4 hover:bg-gray-300 hover:rounded-xl hover:text-[#0C356A]">About Us</Link>
                    <Link to="/services" className="p-4 hover:bg-gray-300 hover:rounded-xl hover:text-[#0C356A]">Our Services</Link>
                    <Link to="/clients" className="p-4 hover:bg-gray-300 hover:rounded-xl hover:text-[#0C356A]">Our Clients</Link>
                    <Link to="/contact" className="p-4 hover:bg-gray-300 hover:rounded-xl hover:text-[#0C356A]">Contact Us</Link>
                    <div className="pl-4">
                        <button className="btn font-bold" onClick={() => document.getElementById('my_modal_2').showModal()}>Login</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <Login></Login>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;