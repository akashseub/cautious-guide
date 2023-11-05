

const Project = ({ project }) => {

    const { id, projectName, address, totalArea, totalPrice, contactNumber } = project;

    return (
        <div>
            <tr>
                <th>{id}</th>
                <td>{projectName}</td>
                <td>{address}</td>
                <td>{totalArea}</td>
                <td>{totalPrice}</td>
                <td>{contactNumber}</td>
            </tr>
        </div>
    );
};

export default Project;