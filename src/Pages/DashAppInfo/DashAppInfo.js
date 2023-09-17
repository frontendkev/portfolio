import ProjectHeader from "../../Components/ProjectHeader/ProjectHeader"
import ProjectSample from "../../Components/ProjectSample/ProjectSample"
import ProjectDetails from "../../Components/ProjectDetails/ProjectDetails"
import ProjectFooter from "../../Components/ProjectFooter/ProjectFooter"
import dashHome from '../../media/images/dashhome.png'
import dashCategory from '../../media/images/dashcategory.png'
import dashYear from '../../media/images/dashyear.png'


export default function DashAppInfo() {
    return (
        <section role={'project-info'} aria-label={'project-info-page'}
            className={'relative w-full min-h-screen flex flex-col gap-y-[2em]'}>
            <ProjectHeader siteName={'dash-app'} siteDesc={'e-commerce dashboard web application'} siteLink={"https://frontendkev.github.io/dash-app/"} />

            <ProjectSample imageONe={dashHome} imageTwo={dashCategory} imageThree={dashYear} />

            <ProjectDetails>
                <span className={'capitalize leading-[2em]'}>
                    discover
                </span> the ultimate online shopping experience with my
                cutting-edge <span>react</span> clothing store.<br />
                <span>
                    explore
                </span> a vast collection of stylish apparel for women, meticulously organized
                into dedicated sections.<br />
                with a seamless, responsive and intuitive user interface, you can effortlessly browse through our
                curated selection and add your favorite items to a personalized wishlist.<br />
                keep track of your desired items and make shopping a breeze with our user-friendly shopping cart
                feature.<br />
                <span>
                    built
                </span> using advanced <span>react</span> tools such as <span>redux</span> for state
                management, toast notifications for real-time updates, and <span>redux thunk</span> for efficient
                asynchronous actions, <span>shoppy</span> offers a modern and efficient way to elevate your fashion
                game.
            </ProjectDetails>

            <ProjectFooter siteName={'dash-app'} siteLink={"https://frontendkev.github.io/dash-app/"} />
        </section>
    )
}