import React, { useEffect, useRef } from 'react';
import MaskedElement from '../../components/MaskedElement';
import TextReveal from '../../components/TextReveal';


const About = () => {


    const text = `I'm a selectively skilled frontend developer with expertise in creating seamless and user-friendly web interfaces.`
    const words = text.split(" ");

    return (
        <>
            <MaskedElement>
                <div className="w-full flex flex-col items-start justify-center p-20 px-52">
                    <p className='font-poppins font-medium text-sm text-left text-black tracking-[5px] mb-4'>ABOUT ME</p>
                    <p className='text-black font-semibold text-6xl font-poppins'>
                        A frontend developer with skills still too clever for A.I. - delivering sleek interfaces if the pay matches the vibe.
                    </p>

                </div>
            </MaskedElement>
            <div className='flex items-start flex-col justify-center w-full min-h-screen p-20 px-52'>
                <p className='font-poppins font-medium text-sm text-left text-text tracking-[5px] mb-4'>ABOUT ME</p>
                <TextReveal text={text} specialWord={["selectively", "skilled"]} className={"text-text font-semibold text-6xl font-poppins max-w-full flex flex-wrap"} />
            </div>

        </>
    )
}

export default About
