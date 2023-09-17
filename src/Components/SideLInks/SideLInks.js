import Home from "../../Svg/Home";
import Star from "../../Svg/Star";
import Links from "../Links/Links";
import User from "../../Svg/User";


export default function SideLinks({fillColor, strokeColor, scrollTo, activePage}) {


    const HomeIcon = () => <Home
        className={`relative w-[1em] lg:w-[1.2em] h-[0.9em] lg:h-[1em] ${fillColor} ${strokeColor} transition-all duration-300 ease-in-out group-hover:fill-rose-500 group-hover:stroke-rose-500`}
    />
    const StarIcon = () => <Star
        className={`relative w-[1em] lg:w-[1.2em] h-[0.9em] lg:h-[1em] ${fillColor} ${strokeColor} transition-all duration-300 ease-in-out group-hover:fill-rose-500 group-hover:stroke-rose-500`}
    />
    const UserIcon = () => <User
        className={`relative w-[1em] lg:w-[1.2em] h-[0.9em] lg:h-[1em] ${fillColor} ${strokeColor} transition-all duration-300 ease-in-out group-hover:fill-rose-500 group-hover:stroke-rose-500`}
    />

    function showHome() {
        return scrollTo('home')
    }

    function showProjects() {
        return scrollTo('projects')
    }

    function showContact() {
        return scrollTo('contact')
    }
    
    return (
        <div className="relative w-fit h-full flex flex-row justify-start items-center gap-x-4">
            <Links textColor={activePage === 'home' ? 'text-rose-500' : 'text-gray-300'} showSection={showHome} text={'home'} url='/' icon={<HomeIcon />} />
            <Links textColor={activePage === 'projects' ? 'text-rose-500' : 'text-gray-300'} showSection={showProjects} text={'projects'} url='/portfolio/projects' icon={<StarIcon />} showLIne={true} />
            <Links textColor={activePage === 'contact' ? 'text-rose-500' : 'text-gray-300'} showSection={showContact} text={'contact me'} url='/' icon={<UserIcon />} showLIne={true} />
        </div>
    )
}