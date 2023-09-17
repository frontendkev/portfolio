
import HomeLogo from "../HomeLogo/HomeLogo";
import NavLink from "../NavLink/NavLinks";


export default function NavBar() {

    return (
        <section
            className={`relative w-full h-[2.5em] lg:h-[3em] flex flex-row justify-center items-center`}>
            <div
                className={`bg-gray-800 fixed top-0 z-[100] w-full h-[2.5em] lg:h-[3em] flex flex-row justify-between items-center pl-[0.3em] pr-[0.3em] lg:pl-[2em] lg:pr-[2em] transition-all duration-300 ease-in-out`}>
                <HomeLogo />

                <div className={'relative landscape:w-[33em] portrait:w-[20em] landscape:h-[2.5em] portrait:h-full flex flex-row justify-center landscape:gap-x-[2em] transition-all duration-[0.5s] ease-in-out overflow-hidden'}>
                    <NavLink url={'/'} link={'home'} />
                    <NavLink url={'/projects'} link={'projects'} />
                    <NavLink url={'/about'} link={'about me'} />
                    <NavLink url={'/contact'} link={'contact me'} />
                </div>


            </div>
        </section>
    )
}
