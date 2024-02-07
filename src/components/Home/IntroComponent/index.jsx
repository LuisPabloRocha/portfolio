import "./intro.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}


const Intro = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants}
                    initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>PABLO ROCHA </motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See Latest Work</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                WEB & APP DEVELOPER
            </div>
            <div className="imageContainer">
                <img src="../../src/assets/images/deco/me.png"></img>

            </div>

        </div>
    )
}

export default Intro;