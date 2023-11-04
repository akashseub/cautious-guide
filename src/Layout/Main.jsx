import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Title from "../Components/Title/Title";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div className="">
            <Title></Title>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;