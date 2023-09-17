import { Link } from "react-router-dom";


export default function ProjectsTab({bannerImage, title, text, url}) {
    
    return (
        <div className='relative projects portrait:w-full portrait:h-[20em] landscape:w-[18em] landscape:md:w-[20em] landscape:h-[15em] shadow-light bg-[#11141b] p-2'>
            <Link to={url}>
                <figure className='relative w-full h-[80%] overflow-hidden'>
                    <img alt={'project-logo'} src={bannerImage} className='relative w-full h-full object-cover z-[15] object-top' />
                </figure>

                <div className='relative w-full h-[20%] text-start leading-[1.7em] pt-[5px]'>
                    <p className='relative text-rose-500 text-[13px] capitalize font-quicksandSemiBold'>
                        {title}
                    </p>

                    <h2 className='relative text-[13px] text-gray-300 font-quicksandBold capitalize leading-[1.2em]'>
                        {text}
                    </h2>
                </div>
            </Link>

        </div>
    )
}
