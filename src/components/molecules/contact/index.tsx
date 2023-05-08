import React from 'react'

import { useRef } from "react";
import { useInView, motion } from "framer-motion";


function Contact({ children }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 1 });
    return (
        <motion.div
            ref={ref}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            animate={{
                opacity: isInView ? 1 : 0,
            }}
            className='w-80 h-fit transition duration-200 m-3 px-3'
        >
            <div className="card w-full bg-base-100 shadow-lg cursor-pointer border">
                <div className="card-body p-4">
                    <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                            </div>
                        </div>
                        <h3 className="ml-3 font-semibold">Card title!</h3>
                    </div>
                </div>
            </div>

            {/* <span>
               
                
                {children}
            </span> */}
        </motion.div>
    );
}

export default Contact