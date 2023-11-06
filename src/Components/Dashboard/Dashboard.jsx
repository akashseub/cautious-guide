import { Link } from "react-router-dom";
import ChatBox from "./ChatBox/ChatBox";
import Projects from "./Projects/Projects";
import { AiFillDashboard } from 'react-icons/ai';


const Dashboard = () => {
    return (
        <div className=" flex">
            <div className="w-1/5 bg-slate-300 mr-2 rounded-md text-slate-900 p-4">
                <div className="flex items-center space-x-2 justify-center mb-4">
                    <img className="h-10" src="/src/assets/logo.png" alt="" />
                    <h2 className="font-bold text-2xl">EMEISLTD</h2>
                </div>
                <hr className="text-slate-900" />
                <div className="mt-2 w-full ">
                    <Link><button className="w-full font-bold text-start flex items-center space-x-4 hover:bg-white rounded-lg p-4"><AiFillDashboard className="text-2xl pointer"></AiFillDashboard>Dashboard</button></Link>
                </div>
            </div>



            <div className="px-8">
                <div>
                    <div className="navbar bg-slate-100 mb-2 rounded-b-lg">
                        <div className="flex-1">
                            <a className="btn btn-ghost normal-case text-xl font-bold">Dashboard</a>
                        </div>
                        <h2 className="font-bold mr-4">MD Akash Miah</h2>
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    
                                    <div className="w-10 rounded-full">
                                        <img src={'https://lh3.googleusercontent.com/a/ACg8ocL3xfmZZMNwV9zgBsw0RWgcZOoLDZ2nybuQGXPoPI_qaZo=s288-c-no'} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-12 bg-slate-100 rounded-lg p-2">
                    <div className="text-center border border-slate-900 rounded-lg hover:text-white hover:bg-slate-900 cursor-pointer">
                        <h1 className="font-bold text-6xl">02</h1>
                        <h2 className="font-bold text-xl">Project Running</h2>
                    </div>
                    <div className="text-center border border-slate-900 rounded-lg hover:text-white hover:bg-slate-900 cursor-pointer">
                        <h1 className="font-bold text-6xl">04</h1>
                        <h2 className="font-bold text-xl">Waiting for confirmation</h2>
                    </div>
                    <div className="text-center border border-slate-900 rounded-lg hover:text-white hover:bg-slate-900 cursor-pointer">
                        <h1 className="font-bold text-6xl">10</h1>
                        <h2 className="font-bold text-xl">Pending Inspection</h2>
                    </div>
                    <div className="text-center border border-slate-900 rounded-lg hover:text-white hover:bg-slate-900 cursor-pointer">
                        <h1 className="font-bold text-6xl">24</h1>
                        <h2 className="font-bold text-xl">Ready for next meeting</h2>
                    </div>
                    <div className="text-center border border-slate-900 rounded-lg hover:text-white hover:bg-slate-900 cursor-pointer">
                        <h1 className="font-bold text-6xl">02</h1>
                        <h2 className="font-bold text-xl">Correction</h2>
                    </div>
                </div>



                <Projects></Projects>
                <ChatBox></ChatBox>
            </div>
        </div>

    );
};

export default Dashboard;