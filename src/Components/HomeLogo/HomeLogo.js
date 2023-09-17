

export default function HomeLogo() {
    return (
        <div
            className={`relative w-fit h-full flex items-center justify-center gap-x-[2px]`}>
            <div className="relative w-[20px] h-[20px] lg:w-[1.2em] lg:h-[1.2em] bg-gray-300 rounded-full flex flex-row items-center justify-center pb-1">
                <h1 className="relative text-[15px] lg:text-[1.2em] text-black lowercase text-center font-quicksandBold">
                    p
                </h1>
            </div>
            <h1 className="relative text-[15px] lg:text-[1.2em] text-gray-300 lowercase text-center font-quicksandBold">
                ortfolio
            </h1>
        </div>
    )
}
