import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Title from "../Components/Title/Title";


const Main = () => {
    return (
        <div className="">
            <Title></Title>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;