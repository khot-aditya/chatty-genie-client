import React from 'react'
import { useRef } from "react";
import { useInView, motion } from "framer-motion";


function Contact({ children }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 1 });
    return (
        <motion.div
            ref={ref}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.98 }}
            style={{
                width: '200px',
                opacity: isInView ? 1 : 0,
                transitionDuration: "0.2s",
                border: "1px solid #eee",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                margin: '10px 20px',
                padding: '10px 10px',
                borderRadius: '10px',
                cursor: 'pointer'
            }}
        >
            {children}
        </motion.div>
    );
}

const ContactList = () => {
    return (
        <div>
            <div className='h-full max-h-[500px] relative hide-scrollbar overflow-y-scroll'>

                <div className="w-full h-20 z-10 sticky top-0 bg-gradient-to-t from-transparent via-white to-white"></div>

                <div>
                    <Contact>Animate</Contact>
                    <Contact>when</Contact>
                    <Contact>in</Contact>
                    <Contact>view!</Contact>
                    <Contact>Animate</Contact>
                    <Contact>when</Contact>
                    <Contact>in</Contact>
                    <Contact>view!</Contact>
                    <Contact>Animate</Contact>
                    <Contact>when</Contact>
                    <Contact>in</Contact>
                    <Contact>view!</Contact>
                    <Contact>Animate</Contact>
                    <Contact>when</Contact>
                    <Contact>in</Contact>
                    <Contact>view!</Contact>
                </div>

                <div className="w-full h-20 z-10 sticky bottom-0 bg-gradient-to-b from-transparent via-white to-white"></div>

            </div>
        </div>
    )
}

export default ContactList