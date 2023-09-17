import SettingsIcon from "../../Svg/Settings"
import LightIcon from "../../Svg/LightIcon"
import { useContext } from "react"
import { Dispatch, SET_SCHEME, Theme } from "../../Context/Context"


export default function ThemeSelector() {

    const theme = useContext(Theme)
    const dispatch = useContext(Dispatch)

    const RED = 'RED'
    const ORANGE = 'ORANGE'
    const BLUE = 'BLUE'
    const ROSE = 'ROSE'
    const GREEN = 'GREEN'

    function setColorScheme(color) {
        switch (color) {
            case RED: {
               return dispatch({
                    type: SET_SCHEME,
                    payload: {
                        fontColor: 'text-red-600',
                        fillColor: 'fill-red-600',
                        strokeColor: 'stroke-red-600',
                        background: 'bg-red-600',
                        borderColor: 'border-red-600'
                    }
                })
                
            }
            case ORANGE: {
                return dispatch({
                    type: SET_SCHEME,
                    payload: {
                        fontColor: 'text-orange-600',
                        fillColor: 'fill-orange-600',
                        strokeColor: 'stroke-orange-600',
                        background: 'bg-orange-600',
                        borderColor: 'border-orange-600'
                    }
                })
                
            }
            case BLUE: {
                dispatch({
                    type: SET_SCHEME,
                    payload: {
                        fontColor: 'text-blue-600',
                        fillColor: 'fill-blue-600',
                        strokeColor: 'stroke-blue-600',
                        background: 'bg-blue-600',
                        borderColor: 'border-blue-600'
                    }
                })
                break;
            }
            case GREEN: {
                return dispatch({
                    type: SET_SCHEME,
                    payload: {
                        fontColor: 'text-green-600',
                        fillColor: 'fill-green-600',
                        strokeColor: 'stroke-green-600',
                        background: 'bg-green-600',
                        borderColor: 'border-green-600',
                    }
                })
               
            }
            case ROSE: {
                return dispatch({
                    type: SET_SCHEME,
                    payload: {
                        fontColor: 'text-rose-600',
                        fillColor: 'fill-rose-600',
                        strokeColor: 'stroke-rose-600',
                        background: 'bg-rose-600',
                        borderColor: 'border-rose-600'
                    }
                })
                
            }
            default: {
                return color
                }
        }
    }
    
    
    return (
        <div className="fixed bottom-0 w-full z-10 h-[9em] flex flex-row justify-center items-center gap-x-4">
            <div className="relative w-[2em] h-[5em] flex flex-col justify-center items-center gap-y-4">
                <div className="relative w-7 bg-[#0b0b0be6] h-7 shadow-light rounded-full flex items-center justify-center">
                    <SettingsIcon className={`relative w-6 h-6 ${theme.fillColor}`} />
                </div>

                <div className="relative w-7 bg-[#0b0b0be6] h-7 shadow-light rounded-full flex items-center justify-center">
                    <LightIcon className={`relative w-6 h-6 ${theme.fillColor} ${theme.strokeColor}`} />
                </div>

            </div>
            <div className="relative w-[11em] h-[5em] shadow-light pl-3 bg-[#0b0b0be6]">
                <div className="relative w-full h-[2em] pt-2">
                    <h3 className={`relative font-quicksandsemibold text-[0.8em] ${theme.fontColor} capitalize text-start`}>
                        theme colors
                    </h3>
                </div>

                <div className="relative w-full h-[3em] flex flex-row items-center justify-start gap-x-3">
                    <button onClick={() =>setColorScheme(RED)} className="relative w-5 h-5 bg-red-600 rounded-full shadow-dark">

                    </button>

                    <button onClick={() => setColorScheme(ORANGE)} className="relative w-5 h-5 bg-orange-600 rounded-full shadow-dark">

                    </button>

                    <button onClick={() => setColorScheme(GREEN)} className="relative w-5 h-5 bg-green-600 rounded-full shadow-dark">

                    </button>

                    <button onClick={() => setColorScheme(BLUE)} className="relative w-5 h-5 bg-blue-600 rounded-full shadow-dark">

                    </button>

                    <button onClick={() => setColorScheme(ROSE)} className="relative w-5 h-5 bg-rose-600 rounded-full shadow-dark">

                    </button>
                </div>

            </div>
        </div>
    )
}