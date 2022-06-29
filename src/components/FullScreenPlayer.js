import { useSelector } from 'react-redux';
import { Icon } from "Icons";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";


function FullScreenPlayer({ toggle, state, controls }) {
    const { current } = useSelector(state => state.player)

  return (
    <div className="h-full relative">
        <div className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30" style={{ backgroundImage: `url(${current.image})`}}></div>
        <div className="w-full absolute bottom-4 flex flex-col-reverse px-8 items-center">
            <div className="flex items-center gap-x-4">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={24} name="shuffle" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={24} name="playerPrev" />
                </button>
                <button 
                    className="w-16 h-16 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.05]"
                    onClick={controls[state?.playing ? 'pause' : 'play']}>
                    <Icon size={24} name={state?.playing ? 'pause' : 'play'} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={24} name="playerNext" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={24} name="repeat" />
                </button>
            </div>
            <div className="w-full flex items-center mb-1.5 gap-x-2">
                <div className="text-[0.688rem] text-white text-opacity-70">
                    {
                        secondsToTime(state?.time)
                    }
                </div>
                <CustomRange 
                    step={0.1}
                    min={0}
                    max={state?.duration || 1}
                    value={state?.time}
                    onChange={value => controls.seek(value)}
                />
                <div className="text-[0.688rem] text-white text-opacity-70">
                    {
                        secondsToTime(state?.duration)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenPlayer