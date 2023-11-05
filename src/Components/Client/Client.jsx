

const Client = ({ client }) => {

    const { id, photo } = client;

    return (
        <div className="text-center relative">
            <div className="block">
                <img className="w-48" src={photo} alt="" />
            </div>
        </div>
    );
};

export default Client;