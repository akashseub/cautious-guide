import { Link } from "react-router-dom";
import Login from "../LoginForm/Login";
// import Login from "../LoginForm/Login";


const Header = () => {
    return (
        <div className=" py-4 text-md font-bold shadow-md">
            <div className="flex justify-between w-11/12 mx-auto items-center">
                <Link to='/'>
                    <div className="flex items-center space-x-2">
                        <img className="h-10" src="/src/assets/logo.png" alt="" />
                        <h2>EME Inspection Services Ltd.</h2>
                    </div>
                </Link>
                <div className="text-center flex items-center">
                    <Link to="/" className="p-4 hover:bg-gray-300 hover:rounded-xl">Home</Link>
                    <Link to="/about" className="p-4 hover:bg-gray-300 hover:rounded-xl">About Us</Link>
                    <Link to="/services" className="p-4 hover:bg-gray-300 hover:rounded-xl">Our Services</Link>
                    <Link to="/clients" className="p-4 hover:bg-gray-300 hover:rounded-xl">Our Clients</Link>
                    <Link to="/contact" className="p-4 hover:bg-gray-300 hover:rounded-xl">Contact Us</Link>
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