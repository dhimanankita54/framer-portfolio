import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const LinksNav = () => {
    const links = [
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Work", link: "#work" },
        { name: "Contact", link: "#contact" }
    ]
    const [activeLink, setActiveLink] = useState(links[0].link.slice(1));
    const [open, setOpen] = useState(false);

    const handleScroll = (id) => {
        if (id) {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setActiveLink(id.slice(1));
    }

    // Detect which section is currently in view on scroll
    useEffect(() => {
        const sections = links.map(link => document.querySelector(link.link));

        const checkSectionVisibility = () => {
            let currentSection = '';

            sections.forEach(section => {
                if (section) {

                    const rect = section.getBoundingClientRect();

                    // If the section is in the viewport (top of the section is within the window)
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section.id;
                    }
                }
            });

            // Update active link if the section in the viewport changes
            if (currentSection) {
                setActiveLink(currentSection);
            }
        };

        // Listen to scroll events
        window.addEventListener('scroll', checkSectionVisibility);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('scroll', checkSectionVisibility);
        };
    }, []);

    const variants = {
        hidden: {
            opacity: [1, 1, 0.3, 0.3, 0],
            y: [0, 0, 100, 100, 100],
            x: [0, 0, 0, 0, 0],
            transition: {
                duration: 0.8,
                times: [0, 0.25, 0.6, 0.76, 1],
                ease: ["circOut", "circIn", "linear", "easeIn"],
            },
            transitionEnd: {
                x: 0,
                y: 100,
                opacity: 0,
            },
        },

        visible: {
            opacity: [0, 0, 0.9, 0.9, 1],
            y: [-100, -100, 0, 0, 0],
            x: [0, 0, 0, 0, 0],
            transition: {
                duration: 0.5,
                ease: ["circOut", "circIn", "linear", "easeIn"],
                times: [0, 0.25, 0.6, 0.76, 1],
            },
            transitionEnd: {
                y: 0,
                x: 0,
                opacity: 1,
            },
        },
    };
    const variantsB = {
        hidden: {
            opacity: [1, 1, 0.3, 0.3, 0],
            y: [0, 0, -100, -100, -100],
            x: [0, 0, 0, 0, 0],
            transition: {
                duration: 0.8,
                times: [0, 0.25, 0.6, 0.76, 1],
                ease: ["circOut", "circIn", "linear", "easeIn"],
            },
            transitionEnd: {
                x: 0,
                y: -100,
                opacity: 0,
            },
        },

        visible: {
            opacity: [0, 0, 0.9, 0.9, 1],
            y: [100, 100, 100, 0, 0],
            x: [0, 0, 0, 0, 0],
            transition: {
                duration: 0.5,
                ease: ["circOut", "circIn", "linear", "easeIn"],
                times: [0, 0.25, 0.6, 0.76, 1],
            },
            transitionEnd: {
                y: 0,
                x: 0,
                opacity: 1,
            },
        },
    };

    return (
        <div className='flex z-[9999] flex-col fixed top-5 p-5 uppercase font-poppins leading-none gap-2 right-14 font-bold'>
            {links.map((link, index) => (
                activeLink === link.link.slice(1) ?
                    <span key={index} className="text-text cursor-pointer">
                        {link.name}
                    </span>
                    :
                    <div key={index} className='overflow-hidden h-fit flex flex-col items-center justify-center relative w-fit z-[9999]'>
                        <AnimatePresence>
                            <motion.div
                                className="absolute cursor-pointer text-text"
                                onClick={() => handleScroll(link.link)}
                                onMouseEnter={() => setOpen(index)}
                                onMouseLeave={() => setOpen(false)}
                                variants={variants}
                                initial={{ opacity: 0 }}
                                animate={open === index ? "visible" : "hidden"}
                            >
                                {link.name}
                            </motion.div>
                            <motion.div
                                className='text-gray cursor-pointer'
                                onClick={() => handleScroll(link.link)}
                                onMouseLeave={() => setOpen(false)}
                                onMouseEnter={() => setOpen(index)}
                                variants={variantsB}
                                initial={{ opacity: 1 }}
                                animate={open === index ? "hidden" : "visible"}
                            >
                                {link.name}
                            </motion.div>
                        </AnimatePresence>
                    </div>
            )
            )}
        </div>
    )
}

export default LinksNav
