import portfolioHome from '../../media/images/portfolioHome.png'
import portfolioABout from '../../media/images/portfolioAbout.png'
import portfolioContact from '../../media/images/PortfolioContact.png'
import ProjectHeader from "../../Components/ProjectHeader/ProjectHeader";
import ProjectSample from "../../Components/ProjectSample/ProjectSample";
import ProjectDetails from "../../Components/ProjectDetails/ProjectDetails";
import ProjectFooter from "../../Components/ProjectFooter/ProjectFooter";

export default function ToDoInfo() {
    return (
        <section role={'project-info'} aria-label={'project-info-page'} className={'relative w-full min-h-screen flex flex-col gap-y-[2em]'}>

            <ProjectHeader siteName={'portfolio'} siteDesc={'portfolio web application'} siteLink={"https://frontendkev.github.io/portfolio/"} />

            <ProjectSample imageONe={portfolioHome} imageTwo={portfolioABout} imageThree={portfolioContact} />

            <ProjectDetails>
                <span className={'capitalize leading-[2em]'}>
                    my
                </span> portfolio website showcases my skills and experience as a frontend developer. < br />
                <span className='capitalize leading-[2em]'>
                    built
                </span> with react and other cutting-egde technologies, the website features a minimalistic design that highlights my projects, achievements and qualifications. < br />
                <span className='capiatalize leading-[2em]'>
                    users
                </span> can easily browse through my work, learn about my background, and reach out to me directly through the website for potential job opportunities or collaboration opportunities. < br />
                <span className='capitalize leading-[2em]'>
                    it's
                </span> a reflection of my dedication to creating high-quality, user-centric websites and applications, and my passion for continuing professional development in the ever-evolving world of frontend development.
            </ProjectDetails>

            <ProjectFooter siteName={'my portfolio'} siteLink={"https://frontendkev.github.io/portfolio/"} />

        </section>
    )
}
