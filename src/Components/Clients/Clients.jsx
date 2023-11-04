import { useState } from "react";
import { useEffect } from "react";
import Client from "../Client/Client";


const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('clients.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])

    // console.log(clients);

    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold mt-12 py-4">Our Valued Clients</h2>
            <hr />

            <div className="text-center grid grid-cols-4 gap-8 items-center justify-items-center w-11/12 mx-auto mb-4 mt-4">
                {
                    clients.map(client => <Client 
                        key={client.id} 
                        client={client}></Client>)
                }
            </div>

        </div>
    );
};

export default Clients;