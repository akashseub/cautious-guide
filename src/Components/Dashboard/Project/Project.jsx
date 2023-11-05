

const Project = ({ project }) => {

    const { id, projectName, address, totalArea, totalPrice, contactNumber } = project;

    return (

        <tr>
            <th>{id}</th>
            <td>{projectName}</td>
            <td>{address}</td>
            <td>{totalArea}</td>
            <td>{totalPrice}</td>
            <td>{contactNumber}</td>
        </tr>
    );
};

export default Project;