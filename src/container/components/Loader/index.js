import React from 'react'
import { useNavigate } from 'react-router-dom';
import audio from "../../../assets/audio/audio.mp3";
import useSound from 'use-sound';

const Loader = () => {
    const navigate = useNavigate();
    const [play] = useSound(audio);

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <button
                className='p-5 px-8 relative hover:bg-primary hover:text-black z-50 border border-primary rounded-full text-sm font-poppins uppercase font-medium tracking-[5px]'
                onClick={() => {
                    navigate("/home");
                    play();
                }}
            >
                Click to Start
            </button>
        </div>
    )
}

export default Loader
