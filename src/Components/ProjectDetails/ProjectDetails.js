export default function ProjectDetails({children}) {
    return (<article role={'project-description'} aria-label={'brief project description'}
                     className={'relative w-full landscape:h-[35vh] portrait:min-h-[30vh] flex justify-center items-start portrait:pl-[20px] portrait:pr-[20px] overflow-hidden'}>
            <section role={'project-description-section'}
                     className={'relative landscape:w-[60%] portrait:w-full h-full flex items-start justify-center'}>
                <p className={'project-info relative text-gray-200 font-quicksandRegular text-[0.9em] lowercase'}>
                    {children}
                </p>
            </section>
        </article>)
}
