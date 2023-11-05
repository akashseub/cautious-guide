import ChatBox from "./ChatBox/ChatBox";
import Projects from "./Projects/Projects";


const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto py-8">
            <div className="grid grid-cols-5 gap-12">
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



            <ChatBox></ChatBox>
            <Projects></Projects>
        </div>
        
    );
};

export default Dashboard;