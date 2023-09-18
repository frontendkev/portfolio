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
                    this
                </span> ecommerce sales analysis dashboard is a <span className="capitalize">react-</span>based application that allows users to monitor and analyze their ecommerce sales data in real-time.< br />
                <span className="capitalize leading-[2em]">
                    the
                </span> dashboard utilizes the <span className="capitalize">recharts</span> library to visualize and display the data in an easy-to-understand manner.< br />
                <span className="capitalize">
                    it
                </span> provides users with features such as weekly and monthly sales performance reports, breakdown of sales by product category and top-selling products.
                < br />
                <span className="capitalize">
                    it
                </span> also provides dynamic filters for users to customize the data they want to view.< br />
                <span className="capitalize">overall</span>, this project provides ecommerce store owners with a powerful and intuitive tool to gain insights into their sales performance and make data-driven decisions to grow their business.
            </ProjectDetails>

            <ProjectFooter siteName={'dash-app'} siteLink={"https://frontendkev.github.io/dash-app/"} />
        </section>
    )
}