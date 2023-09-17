import { Link } from "react-router-dom";


export default function Links({ text, icon, showSection, textColor }) {

    return (
        <button onClick={() => showSection()}>
            <div className="relative w-fit h-[2em] flex flex-row group items-center">
                <div className="relative w-[1.3em] h-full flex justify-center items-center">
                    {icon}
                </div>
                <div className="relative w-[80%] h-full pt-1 flex justify-start items-center">
                    <h2 className={`relative ${textColor} group-hover:text-rose-500 text-start text-[0.7em] lg:text-[0.8em] font-quicksandBold capitalize transition-all duration-300 ease-in-out`}>
                        {text}
                    </h2>
                </div>
            </div>
        </button>
    )
}