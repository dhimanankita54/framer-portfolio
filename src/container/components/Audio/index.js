import React, { useEffect, useState } from 'react';
import audio from "../../../assets/audio/audio.mp3";
import { useAudioPlayer } from 'react-use-audio-player';

const Audio = () => {
    const { load, stop, play, stopped } = useAudioPlayer();

    useEffect(() => {
        load(
            audio, {
            loop: true,
            autoplay: true,
            initialVolume: 0.2,
        }
        )
    }, []);

    return (
        <>
            {stopped ?
                <button onClick={play} className='mr-5 text-gray font-poppins font-bold hover:text-text uppercase fixed z-[99999] p-5 bottom-24 right-0 !cursor-pointer flex -rotate-90 items-center justify-center gap-2'>
                    Sound
                    <span className='text-text' >
                        OFF
                    </span>
                </button>
                :
                <button onClick={stop} className='mr-5 text-gray font-poppins font-bold hover:text-text uppercase fixed z-[99999] p-5 bottom-24 right-0 !cursor-pointer -rotate-90 flex items-center justify-center gap-2'>
                    Sound
                    <span className='text-text'>
                        ON
                    </span>
                </button>
            }
        </>
    );
}

export default Audio
