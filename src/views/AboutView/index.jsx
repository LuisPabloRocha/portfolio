import React from 'react';
import styles from './About.module.css';
import './about.scss';
import Header from '../../components/HeaderComponent';
import { IonIcon } from '@ionic/react';
import {
    logoLinkedin, logoGithub
} from 'ionicons/icons';
import {motion,} from 'framer-motion';
import imgTlani1 from '../../assets/images/about/tlatoani-logo.png';
import imgTlani2 from '../../assets/images/about/tlani-png.png';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }

    }
}


const About = () => {
    return (
        <>
            <Header></Header>
            <div className={`ml-8 mr-8`}>
                <div className="flex items-center justify-center mb-2">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>ABOUT ME
                        <div className={` ${styles.separation} `}></div>
                    </div>
                </div>
                <motion.div className={`pr-5 flex flex-col sm:flex-row gap-4`} variants={variants}
            initial="initial" animate="animate">
                    
                    <motion.div className={`flex-1 mb-2 sm:mr-2`} variants={variants}>
                        <motion.div className={"containerAbout"} variants={variants}>
                            <motion.div className="font-bold mt-3 hello" variants={variants}>
                                Hello, I'm Luis Pablo Rocha
                            </motion.div>
                            <motion.div className="font-bold mt-3 computer-text" variants={variants}>
                                Computer Engineer
                            </motion.div>
                            <motion.div variants={variants} className='mb-3'>
                                <a href="mailto:luispablo2098@hotmail.com">luispablo2098@hotmail.com</a>
                            </motion.div>
                            <motion.div className='flex' variants={variants}>
                                <a href="https://www.linkedin.com/in/luis-pablo-rocha-1bb935214/" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoLinkedin} className="logo logoIN" />
                                </a>
                                <a href="https://github.com/LuisPabloRocha" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoGithub} className="logo logoGit" />
                                </a>
                            </motion.div>
                            <motion.div className="text-aboutme">
                                A background in programming, web, software engineering,
                                operating systems, and other areas of technology;
                                with a bachelor's degree focused on projects,
                                I worked in many teams using agile work and development
                                methodologies; building skills such as responsibility,
                                effective communication, problem solving and organization.
                            </motion.div>

                        </motion.div>
                    </motion.div>

                    {/* Segunda columna */}
                    <motion.div className="flex-1 sm:ml-2" variants={variants}>
                        <motion.div className="container-design" variants={variants}>
                            <motion.div className="font-bold  text-code mx-auto" variants={variants}>
                                NOT only code
                            </motion.div>
                            <motion.div className="font-bold mt-3 question mx-auto">
                                Research
                            </motion.div>
                            <motion.div className="text-design" variants={variants}>
                                <strong>
                                    Cybersecurity Analysis of Wearable Devices: Smartwatches passive attack. MDPI Sensors
                                </strong>

                                . We conducted state-of-the-art research and extracted relevant information about attacks on
                                IoT devices. Passive attacks were performed on smartwatches to uncover vulnerabilities
                                using penetration testing techniques. Research was conducted on sniffer
                                devices to utilize them for capturing Bluetooth Low Energy traffic over the air.

                                <p className='mt-3'>For more information: <a href="https://www.mdpi.com/1424-8220/23/12/5438" target="_blank" rel="noopener noreferrer">Read the paper here</a></p>
                            </motion.div>
                            <motion.div className='flex justify-center container-images'>
                                <div className='mx-auto'>

                                </div>
                            </motion.div>
                            <div className="font-bold mt-3 question">
                                ¿Design?
                            </div>
                            <motion.div className="text-design" variants={variants}>
                                "While I may not consider myself a designer,
                                my creative approach and eye for detail drive my work in
                                shaping visual experiences. From brainstorming concepts to refining layouts,
                                I enjoy exploring the intersection of design and functionality. By leveraging my knowledge
                                and passion for <strong>creativity</strong>,
                                I strive to deliver visually compelling solutions that resonate with audiences."
                            </motion.div>
                            <motion.div className='flex justify-center container-images' variants={variants}>
                                <div className='mx-auto'>
                                    <img className="image" src={imgTlani1} alt="Logo I created for an app. Made with Illustrator"></img>
                                    <p>*Logo I created for an app. Made with Illustrator*</p>
                                </div>
                                <div className='mx-auto'>
                                    <img className="image2" src={imgTlani2} alt="Logo I created for an app. Made with Illustrator"></img>
                                    <p className='mt-2'>*Made with Illustrator*</p>
                                </div>
                                
                            </motion.div>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className={`pr-5 pb-10 flex flex-col sm:flex-row gap-4 ${styles.mainContainer}`}>
                    <div className={`flex-1 mb-2 sm:mr-2`}>
                        <div className="flex items-center justify-center mb-8">




                        </div>
                    </div>


                </div>



            </div >
        </>
    );
}

export default About;
