import { useContext, useEffect } from "react";
import { Dispatch } from "../../Context/Context";
import Contact from "../Contact/Contact";
import HomePage from "../Home/HomePage";
import Projects from "../Projects/Projects";


export default function MainPage() {

    const dispatchContext = useContext(Dispatch)
    
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    }
    const observeHome = (dispatch) => {
        const observer = new IntersectionObserver((elements) => {
            if (elements[0].isIntersecting) {
                dispatch({type: 'view-home', payload: 'home'})
            }
        }, options)

        return {
            observer: observer
        }
    }

    const observeProjects = (dispatch) => {
        const observer = new IntersectionObserver((elements) => {
            if (elements[0].isIntersecting) {
                dispatch({ type: 'view-projects', payload: 'projects' })
            }
        }, options)

        return {
            observer: observer
        }
    }

    const observeContact = (dispatch) => {
        const observer = new IntersectionObserver((elements) => {
            if (elements[0].isIntersecting) {
                dispatch({ type: 'view-contact', payload: 'contact' })
            }
        }, options)

        return {
            observer: observer
        }
    }


    useEffect(() => {
        const home = document.querySelector('.home')
        const projects = document.querySelector('.projects')
        const contact = document.querySelector('.contact')
        observeHome(dispatchContext).observer.observe(home)
        observeProjects(dispatchContext).observer.observe(projects)
        observeContact(dispatchContext).observer.observe(contact)
    }, [])

    return (
        <section className="relative w-full h-full bg-[#010413] flex flex-col gap-y-4">
            <HomePage />
            <Projects />
            <Contact />
        </section>
    )
}