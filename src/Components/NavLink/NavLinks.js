import {Link} from "react-router-dom";


export default function NavLink ({url, link}) {

    return (
        <Link to={url} className={'relative landscape:w-[6em] portrait:w-[8em] h-full flex items-center justify-center'}>
            <h3 className={'relative font-quicksandBold text-rose-500 landscape:text-[0.8em] portrait:text-[0.6em] uppercase'}>
                {link}
            </h3>
        </Link>
    )
}
