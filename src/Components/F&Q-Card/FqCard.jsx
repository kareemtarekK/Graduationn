import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import cardCSS from '../../Pages/Home/home.module.css';
import { PropTypes } from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';


export default function FqCard({data}) {

    const [displayAnswer, setDisplayAnswer] = useState(false);

    const handleArrowClick = () => {
        setDisplayAnswer(prev => !prev);
    }

    const listAnimation = {

        hidden: {opacity:0, height: 0},
        visible: {opacity: 1, height: 'fit-content' , transition: {duration: 0.15}},
        exit: {opacity: 0, height: 0, transition: {duration: 0.15}},

    }

    return <React.Fragment>

        <div key={data.id} onClick={handleArrowClick} className={cardCSS.item}>

            <div className={cardCSS.title2}>
                <h2>{data.question}</h2>
                <span className={displayAnswer ? cardCSS.arrow_side_active : ''}>
                    <IoIosArrowUp />
                </span>
            </div>

            <AnimatePresence>
                {displayAnswer && (
                    <motion.div variants={listAnimation} className={cardCSS.content} initial='hidden' animate='visible' exit={'exit'}>
                        {data.answer}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

    </React.Fragment>

}

FqCard.propTypes = {

    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    })

}