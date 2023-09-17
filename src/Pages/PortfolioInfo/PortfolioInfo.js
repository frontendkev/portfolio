import portfolioHome from '../../media/images/portfolioHome.png'
import portfolioABout from '../../media/images/portfolioAbout.png'
import portfolioContact from '../../media/images/PortfolioContact.png'
import ProjectHeader from "../../Components/ProjectHeader/ProjectHeader";
import ProjectSample from "../../Components/ProjectSample/ProjectSample";
import ProjectDetails from "../../Components/ProjectDetails/ProjectDetails";
import ProjectFooter from "../../Components/ProjectFooter/ProjectFooter";

export default function ToDoInfo () {
    return (
        <section role={'project-info'} aria-label={'project-info-page'} className={'relative w-full min-h-screen flex flex-col gap-y-[2em]'}>

            <ProjectHeader siteName={'portfolio'} siteDesc={'portfolio web application'} siteLink={"https://frontendkev.github.io/portfolio/"} />

            <ProjectSample imageONe={portfolioHome} imageTwo={portfolioABout} imageThree={portfolioContact} />

            <ProjectDetails>
                   <span className={'capitalize leading-[2em]'}>
                               elevate
                           </span> your productivity with my sleek and intuitive <span>react</span> to-do list application.<br />
                <span>
                               seamlessly
                           </span> manage your tasks and stay organized with a user-friendly interface that allows you to effortlessly add, update, and mark tasks as complete.<br />
                <span>experience</span> the convenience of real-time updates and dynamic task tracking, all powered by the efficiency of <span>react</span>.<br/>
                <span>
                               whether
                           </span> it's daily tasks, important reminders, or long-term goals, my to-do list project offers a modern and effective solution to help you stay on top of your tasks..
            </ProjectDetails>

            <ProjectFooter siteName={'my portfolio'} siteLink={"https://frontendkev.github.io/portfolio/"} />

        </section>
    )
}
