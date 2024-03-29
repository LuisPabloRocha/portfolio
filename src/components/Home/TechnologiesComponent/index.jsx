import "./technologies.scss"
import { motion } from "framer-motion";
import dataLanguajes from '../../../data/technologies';

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 10,
        }
    }
}

const Technologies = () => {
    return (
        <>
            <div className="text-frec">
                I frequently utilize the following technologies:
            </div>
            <div className="tec ml-8 mr-8 mb-8">
                <motion.div className="mx-auto ml-8 mr-8 flex flex-wrap justify-center gap-4 container-tecs"
                >
                    {dataLanguajes.map((data, index) => (
                        <motion.div
                            key={index}
                            className="box-tec"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <img src={data.image} className="imageL" alt={data.name} />
                            {data.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="other-tecs flex-wrap justify-center">
                OTHER TECS: Python, MongoDB, Windows and Linux.
            </div>

        </>
    )
}

export default Technologies;