


export default function ProjectSample ({imageONe, imageTwo, imageThree}) {
 return (
     <>
         <section className={'relative w-full landscape:h-[70vh] portrait:h-[200px] portrait:md:h-[350px] overflow-hidden portrait:pl-4 portrait:pr-4'}>
             <figure className={'relative landscape:w-[70%] portrait:w-full h-full mx-auto'}>
                 <img src={imageONe} alt={'project-logo'} className={'relative w-full h-full z-[5]'} />
             </figure>
         </section>

         <hr className={'relative landscape:w-[80%] portrait:w-[95%] mx-auto border-gray-600'} />

         <section className={'relative w-full landscape:h-[70vh] portrait:h-[200px] portrait:md:h-[350px] overflow-hidden portrait:pl-4 portrait:pr-4'}>
             <figure className={'relative landscape:w-[70%] portrait:w-full h-full mx-auto'}>
                 <img src={imageTwo} alt={'project-logo'} className={'relative w-full h-full'} />
             </figure>
         </section>

         <hr className={'relative landscape:w-[80%] portrait:w-[95%] mx-auto border-gray-600'} />

         <section className={'relative w-full landscape:h-[70vh] portrait:h-[200px] portrait:md:h-[350px] overflow-hidden portrait:pl-4 portrait:pr-4'}>
             <figure className={'relative landscape:w-[70%] portrait:w-full h-full mx-auto'}>
                 <img src={imageThree} alt={'project-logo'} className={'relative w-full h-full'} />
             </figure>
         </section>

         <hr className={'relative landscape:w-[80%] portrait:w-[95%] mx-auto border-gray-600'} />
     </>
 )
}
