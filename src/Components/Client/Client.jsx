

const Client = ({client}) => {

    const{id, photo} = client;

    return (
        <div className="text-center">
            <img className="w-48" src={photo} alt="" />
        </div>
    );
};

export default Client;