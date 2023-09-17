

export default function ProjectFooter ({siteName, siteLink}) {
    return (
        <div className={'relative w-full h-[4em] flex items-center justify-center'}>

            <h2 className={'relative capitalize font-quicksandSemiBold text-[0.8em] text-gray-200'}>
                thank you for viewing my portfolio please <span className={'text-rose-600'}><a
                href={siteLink}>visit {siteName}</a></span> for
                more...
            </h2>
        </div>
    )
}
