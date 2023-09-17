
import homeImage from '../../media/images/home.jpg'
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    
    const navigate = useNavigate()
    function navigateRoute (path) {
        return navigate(path)
    }

    return (
        <section aria-label="home-wrapper" className={`home relative w-full min-h-screen overflow-hidden`}>

            <div className="absolute w-full h-full top-0 opacity-[0.5] z-[10]">
                <img src={homeImage} className='relative w-full h-full object-cover object-center' alt={'background cover'} />
            </div>


            <div className="relative w-full min-h-screen z-[20] flex portrait:flex-col portrait:gap-y-[5em] landscape:gap-y-[2em] landscape:flex-col justify-center items-start">
                <section aria-label="intro" className="relative w-full h-[15em] pl-4 lg:w-[20em] lg:h-[13em] text-start leading-[1.8em] lg:leading-[2.5em]">
                    <h5 className="relative text-rose-500 capitalize font-quicksandSemiBold  text-[20px] lg:text-[0.8em]">
                        hello
                    </h5>
                    <h3 className="relative text-gray-300 capitalize text-[40px] lg:text-[2em] font-quicksandBold leading-[1em]">
                        <span className="uppercase">i'm</span> albert <br />
                        kel<span className="text-rose-500">vin</span>
                    </h3>
                    <h5 className="relative  text-[15px] lg:text-[0.8em] capitalize text-gray-300 font-quicksandSemiBold">
                        front end developer
                    </h5>

                    <button onClick={()=> navigateRoute('/contact')} className="relative w-[130px] h-[35px] bg-rose-500 flex flex-row items-center justify-center shadow-light">
                        <p className="relative font-quicksandSemiBold capitalize  text-[15px] lg:text-[0.8em] text-gray-300">
                            contact me
                        </p>
                    </button>
                </section>

                <section aria-label="about-me" className="relative w-full portrait:h-fit pl-4 pr-4 landscape:h-[15em] lg:w-[30em] landscape:lg:h-[20em] portrait:leading-[30px] text-start flex flex-col gap-y-[1em]">
                 

                    <p className="relative font-quicksandSemiBold text-[15px] lg:text-[13px] text-gray-300 leading-[1.3em] capitalize">
                        hi, my name is <span className={'text-rose-600'}>albert kelvin omoh</span>, i am an accomplished individual with a strong background in computer science, holding an hnd degree. < br/>
                        my expertise shines as a frontend web developer, where i am well-versed in essential technologies like <span className={'text-rose-600'}>html, css, javascript </span> and <span className={'text-rose-600'}>react</span>. <br />
                        in addition to my professional pursuits, i enjoy spending my leisure time immersing myself in the world of gaming and continuously  expanding my knowledge through <span className={'text-rose-600'}>learning</span>. <br/>
                        my unique combination of skills and passion makes me a dynamic and well-rounded individual.
                    </p>

                    <button onClick={() => navigateRoute('/about')} className="relative w-[130px] h-[35px] bg-rose-500 flex flex-row items-center justify-center shadow-light">
                        <p className="relative font-quicksandSemiBold capitalize  text-[15px] lg:text-[0.8em] text-gray-300">
                            more info...
                        </p>
                    </button>
                </section>
            </div>
        </section>


    )
}
