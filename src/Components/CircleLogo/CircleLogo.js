

export default function CircleLogo ({image, alt}) {
         return (
             <div className={'circle-logo relative portrait:w-[5em] portrait:h-[5em] landscape:w-[7em] landscape:h-[7em] flex items-center justify-center'}>
                   <img src={image} alt={alt} className={'relative w-[4em] h-[4em] portrait:w-[3em] portrait:h-[3em]'} />
             </div>
         )
}
