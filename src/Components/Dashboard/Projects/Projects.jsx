import { useEffect, useState } from "react";
import Project from "../Project/Project";


const Projects = () => {

    const [projects, setProjects] = useState([]);

    console.log(projects);


    useEffect(() => {
        fetch('projectsList.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="">
            <div className="overflow-x-auto mt-10">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Sl#</th>
                            <th>Project Name</th>
                            <th>Project Address</th>
                            <th>Total Area</th>
                            <th>Total Price</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            projects.map(project => <Project
                                key={project.id}
                                project={project}></Project>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Sl#</th>
                            <th>Project Name</th>
                            <th>Project Address</th>
                            <th>Total Area</th>
                            <th>Total Price</th>
                            <th>Contact Number</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Projects;