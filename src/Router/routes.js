import {createHashRouter, createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Projects from "../Pages/Projects/Projects";
import Root from "./root";
import AboutMe from "../Pages/Aboutme/AboutMe";
import Contact from "../Pages/Contact/Contact";
import ShoppyInfo from "../Pages/ProjectInfo/ShoppyInfo";
import ToDoInfo from "../Pages/ToDoInfo/ToDoInfo";
import PortfolioInfo from "../Pages/PortfolioInfo/PortfolioInfo"
import DashAppInfo from "../Pages/DashAppInfo/DashAppInfo";


export const routes = createHashRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<HomePage />} />
            <Route path={'/about'} element={<AboutMe />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/projects/shoppy-ecommerce'} element={<ShoppyInfo />} />
            <Route path={'/projects/todo-app'} element={<ToDoInfo />} />
            <Route path={'/projects/portfolio-app'} element={<PortfolioInfo />} />
            <Route path="projects/dash-app" element={<DashAppInfo />} />
            <Route path={'/contact'} element={<Contact />} />

        </Route>
    )
)
