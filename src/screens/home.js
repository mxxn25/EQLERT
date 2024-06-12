import React, { useEffect, useState } from 'react';
import { IoFlashlight } from 'react-icons/io5';
import { RiFirstAidKitFill, RiVolumeUpFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import firstAidKitImage from '../assets/firstaidkit.png';
import heartImage from '../assets/heart.png';
import WhistleSound from '../assets/mixkit-police-whistle.wav';
import './home.css';

const Home = () => {
    const [clickedOption, setClickedOption] = useState(null);
    const [playWhistle, setPlayWhistle] = useState(false);
    const [flashing, setFlashing] = useState(false);

    const handleOptionClick = (option) => {
        setClickedOption(option === clickedOption ? null : option);
    };

    const handleClickWhistle = (e) => {
        e.stopPropagation();
        setPlayWhistle(true);
        setTimeout(() => {
            setPlayWhistle(false);
        }, 1000);
    };

    const handleClickFlashLight = (e) => {
        e.stopPropagation();
        setFlashing(true);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setFlashing(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <div className="option-container">
                <div
                    className={`option${clickedOption === 'survival-tools' ? ' clicked' : ''}`}
                    onClick={() => handleOptionClick('survival-tools')}
                >
                    <img src={firstAidKitImage} alt="First Aid Kit" className="option-image" />
                    <span className="option-text">Survival Tools</span>
                    {clickedOption === 'survival-tools' && (
                        <div className="option-content">
                            <div className="sub-option" onClick={handleClickWhistle}>
                                Whistle
                                <RiVolumeUpFill className="icon" />
                            </div>
                            {playWhistle && <audio src={WhistleSound} loop={false} autoPlay />}
                            <div className="sub-option" onClick={handleClickFlashLight}>
                                Visual SOS
                                <IoFlashlight className="icon" />
                            </div>
                            {flashing && <div className="flashing-screen"></div>}
                            <div className="sub-option" onClick={(e) => { e.stopPropagation(); }}>
                                <Link to="/first_aid" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    First Aid
                                    <RiFirstAidKitFill className="icon" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={`option${clickedOption === 'survival-tips' ? ' clicked' : ''}`}
                    onClick={() => handleOptionClick('survival-tips')}
                >
                    <img src={heartImage} alt="Heart" className="option-image" />
                    <span className="option-text">Survival Tips</span>
                    {clickedOption === 'survival-tips' && (
                        <div className="option-content">
                            <div className="sub-option">Container 1</div>
                            <div className="sub-option">Container 2</div>
                            <div className="sub-option">Container 3</div>
                            <div className="sub-option">Container 4</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;


