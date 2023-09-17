import CircleLogo from "../../Components/CircleLogo/CircleLogo";
import htmlLogo from '../../media/images/html.png'
import cssLogo from '../../media/images/css.png'
import javascriptLogo from '../../media/images/javascript.png'
import reactLogo from '../../media/images/react.png'
export default function AboutMe() {

    return (<section aria-label={'about-me-page'} className={'relative w-full min-h-screen flex flex-col gap-y-[2em]'}>
        <div className="relative w-full portrait:h-[6em] landscape:h-[7em] flex items-center justify-center ">
            <div className="relative w-[30em] h-full flex flex-col items-center justify-center">
                <h2 className='relative text-[1.3em] lg:text-[1.5em] font-quicksandBold text-gray-300 capitalize'>
                    about me
                </h2>

                <h4 className='relative font-quicksandSemiBold text-rose-500 text-[13px] lg:text-[0.8em] capitalize'>
                    for further enquiries contact me through kevfrontdev@gmail.com
                </h4>
            </div>
        </div>

        <div className={'relative w-full portrait:h-[80vh] landscape:h-[70vh] flex landscape:flex-row items-start landscape:gap-x-[2em] portrait:flex-col portrait:pr-4 portrait:pl-4 portrait:gap-y-[2em] overflow-hidden landscape:justify-center'}>
            <section aria-labelledby={'about-me'} className={'relative landscape:w-[45%] portrait:h-fit portrait:sm:h-[70%] portrait:w-full'}>
                <article id={'about-me'} className={'relative w-full h-fit'}>
                    <p className={'relative font-quicksandsemibold text-gray-200 capitalize text-start portrait:text-[0.8em] landscape:text-[0.8em] portrait:sm:text-[1.1em] leading-[2em]'}>
                              <span className={'text-[3em] font-quicksandbold text-rose-500'}>
                                  hello
                          </span>, < br/>
                        i'm albert kelvin, a seasoned web developer with over 4+ years of hands-on experience. < br/>
                        specializing in front-end technologies, i've had the privilege of crafting intuitive, visually
                        striking websites that seamlessly marry form and function. < br/>
                        from writing clean, efficient code to optimizing user experiences, i thrive on transforming
                        ideas into digital realities, my journey began with a curiosity for coding, and it's been an
                        incredible ride as i've honed my skills and embraced new technologies along the way. < br/>
                        proficient in <span
                        className={'uppercase text-rose-500'}>html, css, javascript, react,</span> and more, i'm
                        committed to staying at the forefront of industry trends, i've had the pleasure of working on
                        diverse projects, which has nurtured my knack for turning visions into interactive online
                        platforms. < br/>
                        thank you for visiting my portfolio, whether you're seeking a reliable developer or simply want
                        to connect, i'm here to bring your digital aspirations to life. <br/>
                        let's collaborate and create something extraordinary together.

                    </p>
                </article>
            </section>

            <section aria-labelledby={'about-me'}
                     className={'relative landscape:w-[25%] portrait:w-full landscape:h-[60vh] portrait:h-[8em] flex flex-row landscape:flex-wrap justify-center items-center gap-x-[2em]'}>
                <CircleLogo image={htmlLogo} alt={'html-image-here'}/>
                <CircleLogo image={cssLogo} alt={'html-image-here'}/>
                <CircleLogo image={javascriptLogo} alt={'html-image-here'}/>
                <CircleLogo image={reactLogo} alt={'html-image-here'}/>
            </section>
        </div>
    </section>)
}
