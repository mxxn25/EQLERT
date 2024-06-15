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
                        <div className="survival-tips-content">
                            <div className="sub-option-tips">
                                <div className="sub-option-title">
                                    <p>
                                        <strong>Before The Earthquake</strong> <br /></p>
                                </div>
                                <div className="sub-option-content">
                                    <p>
                                        <strong>Be prepared to react</strong> <br />
                                        Know how to react so your response to a quake is automatic. If an earthquake struck right now, how would you protect yourself?
                                    </p>
                                </div>
                                <div className="sub-option-content">
                                    <p>
                                        <strong>Know your location</strong> <br />
                                        Identify safe spaces in the room: under a desk, along interior walls, away from windows, bookcase, and picture frames. Plan your response: know how to exit the building after an earthquake (not during) - even if the lights are off.                                    </p>
                                </div>
                            </div>
                            <div className="sub-option-tips">
                                <div className="sub-option-title">
                                    <p>
                                        <strong>After The Earthquake</strong> <br />
                                    </p>
                                </div>
                                <div className="sub-option-content">
                                    <p>
                                        <strong>Remain calm as the earthquake occurs - other will respond to your actions</strong> <br />
                                        Staying calm in groups of people is crucial and can prevent panic.
                                    </p>
                                </div>
                                <div className="sub-option-content">
                                    <p>
                                        <strong>If you are indoors during an earthquake, stay there</strong>
                                    </p>
                                    <ul>
                                        <li>Move away from windows, bookcases, and large objects.</li>
                                        <li>Go to a safe location - under a desk, a table, or go along an interior wall.</li>
                                        <li>If you have no protection: drop to the floor, and cover your head and face.</li>
                                        <li>Stay under cover until after the shaking stops, and you are sure that debris is no longer falling.</li>
                                        <li>Do not stand in a doorway, as some previous safety guidelines recommended. A swinging door can cause injuries.</li>
                                        <li>In a crowded place, do not rush to the exit. More injuries are caused by panic than by earthquakes themselves.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
