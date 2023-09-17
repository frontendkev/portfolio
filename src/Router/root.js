import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import ScrollUp from "../Components/ScrollUp/ScrollUp";


export default function Root() {
    return (
        <>

            <header>
                <NavBar/>
            </header>

            <main className="bg-[#010413]">
                <ScrollUp />
                <Outlet/>
            </main>
            <footer className={'relative w-full h-fit z-[100]'}>
                <Footer/>
            </footer>
        </>
    )
}
