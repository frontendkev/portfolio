import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gxt4mr6', 'template_opvyzb4', form.current, 'Uko_5-CmYO0MURObN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section aria-label={'contact-me-page'} className={'relative w-full min-h-screen flex flex-col gap-y-[2em]'}>

            <div className="relative w-full portrait:h-[6em] landscape:h-[7em] flex items-center justify-center ">
                <div className="relative w-[30em] h-full flex flex-col items-center justify-center">
                    <h2 className='relative text-[1.3em] lg:text-[1.5em] font-quicksandBold text-gray-300 capitalize'>
                        contact me
                    </h2>

                    <h4 className='relative font-quicksandSemiBold text-rose-500 text-[13px] lg:text-[0.8em] capitalize'>
                        for further enquiries and job offer's contact me through these platforms
                    </h4>
                </div>
            </div>

            <section aria-label="contact-me-section" className="relative contact w-full landscape:h-[30em] portrait:h-[70vh] landscape:sm:h-[18em] landscape:lg:h-[25em] flex flex-col sm:flex-row sm:gap-x-2 pl-8 lg:pl-0 pr-8 lg:pr-0 portrait:gap-y-[3em] landscape:justify-center portrait:md:h-[30vh] landscape:items-start landscape:pt-[4em]">

                <section aria-label="contact-info-section" className="relative w-full lg:w-[40%] h-[40%] sm:h-fit text-start flex flex-col gap-y-2 sm:gap-y-2 portrait:h-[12em] items-start justify-center">


                    <h3 className="relative font-quicksandsemibold text-rose-500  text-[13px] lg:text-[0.8em] capitalize">
                        let's work together. <br />
                        <span className=" text-gray-300">
                            for more information please contact me.
                        </span>
                    </h3>

                    <h3 className="relative font-quicksandsemibold text-rose-500  text-[13px] lg:text-[0.8em] capitalize">
                        address <br />
                        <span className=" text-gray-300">
                            africa, west-africa, nigeria
                        </span>
                    </h3>

                    <h3 className="relative font-quicksandsemibold text-rose-500  text-[13px] lg:text-[0.8em] capitalize">
                        email <br />
                        <span className=" text-gray-300">
                            kevfrontdev@gmail.com
                        </span>
                    </h3>

                    <h3 className="relative font-quicksandsemibold text-rose-500  text-[13px] lg:text-[0.8em] capitalize">
                        whatsapp <br />
                        <span className=" text-gray-300">
                            +2348137022011
                        </span>
                    </h3>

                </section>

                <section aria-label="contact-form" className="relative contact w-full portrait:h-[16em] lg:w-[40%] h-[50%] sm:h-full">
                    <form ref={form} onSubmit={sendEmail} className="relative flex flex-col gap-y-4 w-full h-fit items-start justify-center">
                        <div className="relative w-full h-[40px] lg:h-[2.5em] shadow-light overflow-hidden">
                            <input
                                className="relative w-full h-full bg-mygray pl-2 placeholder:text-white placeholder:font-quicksandsemibold placeholder:capitalize text-white placeholder:opacity-[0.8] text-opacity-[0.8] capitalize font-quicksandsemibold text-[15px] lg:text-[0.8em]"
                                placeholder="sender-email-here"
                                name={'user_email'}
                                type={'email'}
                                required />
                        </div>

                        <div className="relative w-full h-[8em] lg:h-[10em] shadow-light overflow-hidden">
                            <textarea
                                className="relative w-full h-full bg-mygray pl-2 placeholder:text-white placeholder:font-quicksandsemibold placeholder:capitalize text-white placeholder:opacity-[0.8] text-opacity-[0.8] capitalize font-quicksandsemibold text-[15px] lg:text-[0.8em]"
                                placeholder="your-text-here"
                                name="message"
                                required />
                        </div>

                        <div className="relative w-full h-[2.3em] lg:h-[2.5em]">
                            <button type={"submit"} className="relative w-[6em] lg:w-[7em] h-full bg-rose-700 text-gray-300 font-quicksandsemibold  text-[0.9em] lg:text-[0.8em] float-left shadow-light capitalize transition-all duration-300 ease-in-out hover:bg-mygray hover:text-rose-500">
                                send
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </section>
    )
}
