import ProjectsTab from '../../Components/ProjectsTab/ProjectsTab'
import shoppy from '../../media/images/shoppy.png'
import todo from '../../media/images/todo.png'
import portfolioHome from '../../media/images/portfolioHome.png'
import dashHome from '../../media/images/dashhome.png'

export default function Projects() {

    return (
        <section aria-label="projects-page" className='relative w-full min-h-screen overflow-hidden'>


            <div className='relative w-full h-fit flex flex-col gap-y-[2em] z-[20] items-center justify-center'>
                <div className="relative w-full portrait:h-[6em] landscape:h-[7em] flex items-center justify-center ">
                    <div className="relative w-[30em] h-full flex flex-col items-center justify-center">
                        <h2 className='relative text-[1.3em] lg:text-[1.5em] font-quicksandBold text-gray-300 capitalize'>
                            my portfolio
                        </h2>

                        <h4 className='relative font-quicksandSemiBold text-rose-500 text-[13px] lg:text-[0.8em] capitalize'>
                            some of my distinguished works
                        </h4>
                    </div>
                </div>

                <section aria-label='projects-section' className='relative portrait:w-[350px] portrait:sm:w-[37em] portrait:lg:w-[56em] landscape:w-[18em] landscape:sm:w-[37em] landscape:md:w-[41em] landscape:lg:w-[64em] landscape:flex-row mx-auto flex portrait:flex-col portrait:sm:flex-row landscape:gap-x-[2em] landscape:gap-y-[1.5em] justify-start flex-wrap portrait:gap-y-[2em] h-fit'>

                    <ProjectsTab url={"/projects/shoppy-ecommerce"} title={'e-commerce web app'} text={'clothing store landing page and services'} bannerImage={shoppy}/>
                    <ProjectsTab url={"/projects/todo-app"} title={'to-do list web app'} text={'c.r.u.d to-do list web app'} bannerImage={todo} />
                    <ProjectsTab url={"/projects/portfolio-app"} title={'portfolio'} text={'portfolio web app'} bannerImage={portfolioHome} />
                    <ProjectsTab url={"/projects/dash-app"} title={'dashboard web app'} text={'e-commerce dashboard web application'} bannerImage={dashHome} />

                </section>
            </div>

        </section>
    )
}
