

const ChatBox = () => {
    return (
        <div>
            <div className="border border-slate-900 max-w-xl rounded-lg  mt-4">
                <div className="p-4 border border-slate-900 m-4 rounded-md">
                    <h2 className="text-xs font-bold text-purple-900">Shahidul:</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repudiandae!</p>
                </div>
                <div className="p-4 border border-slate-900 m-4 rounded-md">
                    <h2 className="text-xs font-bold text-slate-900 text-end">Akash:</h2>
                    <p className="text-sm text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repudiandae!</p>
                </div>
                <div className=" m-4 flex space-x-4 items-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <button className="btn">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;