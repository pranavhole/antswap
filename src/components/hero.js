import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


const Hero = () => {
    return(
     <><section className=" h-screen py-20"><motion.div variants={textVariant()}>
      
        <div className=" text-white z-90 h-full flex flex-col justify-between items-center pt-10 relative title">
          <div className="opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 flex flex-col items-center skew-y-0 transform-style-preserve-3d inline-block welcome"><span> Welcome</span><span>To AntSwap</span> <span className="descri">Developing a decentralized ecosystem and community Based on Linea Chain.</span></div>
        </div>
        <div className="pt-20">
        <div className="marquee flex  rounded-20 ">
          <div className="z-1000 bg-yellow-500 text-black text-center flex items-center p-2">News</div>
        <div className="marquee__inner items-center -z-50">
         <p className="marquee__line w-max z-50">Website Under Maintenance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dex coming soon</p>   
        </div>
       </div>
        </div>
      </motion.div>
      </section>
    </>
    )
}

export default Hero;
