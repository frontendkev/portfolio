

export default function ProjectHeader ({siteName, siteDesc, siteLink}) {
    return (
        <div
            className="relative w-full bg-gray-500 h-[5em] flex items-center justify-between landscape:pl-[2em] landscape:pr-[2em] portrait:pr-[0.8em] portrait:pl-[0.8em]">
            <div className={'relative w-fit h-fit'}>
                <h3 className="relative font-quicksandSemiBold text-[0.8em] text-start capitalize text-gray-100">
                    <span
                        className="relative text-rose-500 font-quicksandbold uppercase landscape:text-[1.5em] portrait:text-[1.2em]">
                        {siteName}
                    </span><br/>
                    {siteDesc}
                </h3>
            </div>

            <div className={'relative landscape:w-[10em] portrait:w-[5em] h-full flex items-center justify-center'}>
                <button
                    className={'relative landscape:w-[8em] portrait:w-full h-[2.5em] bg-rose-600 rounded-[20px] text-gray-100 font-quicksandSemiBold uppercase landscape:text-[0.8em] portrait:text-[0.6em]'}>
                    <a href={siteLink}>
                        visit site
                    </a>
                </button>
            </div>
        </div>
    )
}
