import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import bleedingImg from '../assets/firstaid/Bleeding.png';
import cprImg1 from '../assets/firstaid/CPR_1.png';
import cprImg2 from '../assets/firstaid/CPR_2.png';
import chokingImg from '../assets/firstaid/Choking.png';
import eyeInjuryImg from '../assets/firstaid/Eye_Injury.png';
import fractureImg from '../assets/firstaid/Fracture.png';
import shockImg from '../assets/firstaid/Shock.png';
import sprainImg from '../assets/firstaid/Sprain.png';
import './first_aid.css';
const FirstAid = () => {
    return (
        <div className="firstaid-container">
            <div className="firstaid-item">
                <h2 className="firstaid-title">Bleeding</h2>
                <img src={bleedingImg} alt="Bleeding" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Apply direct pressure to the wound using a sterile gauze pad or clean cloth.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Elevate the injured area above the level of the heart if there is no fracture.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Cover the area with a pressure bandage. If bleeding does not stop, apply additional dressings.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    If necessary, apply pressure to the artery with your hand.
                </p>
            </div>
            <div className="firstaid-item">
                <h2 className="firstaid-title">Choking</h2>
                <img src={chokingImg} alt="Choking" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Stand behind the person. Wrap your arms around the waist.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Make a fist with one hand. Position it slightly above the person's navel.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Grab the fist with the other hand. Press hard into the abdomen with quick inward and upward thrust.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Perform 5 abdominal thrusts (Heimlich maneuver).
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    If the person becomes unconscious, perform CPR.
                </p>
            </div>
            <div className="firstaid-item">
                <h2 className="firstaid-title">CPR</h2>
                <img src={cprImg1} alt="CPR" className="firstaid-image" />
                <img src={cprImg2} alt="CPR" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    If face down, put the person on his or her back while supporting the head, neck and back.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Place the heel of one hand over the person's breastbone. Place the other hand on top of the first hand. Keep your elbows straight.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Using your upper body push straight down compressing the chest to about 2 inches (5 cm). Push hard at a rate of 100 compression per minute.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    If trained for CPR, after 30 compressions, open the person's airway by placing your palm on the person's forehead and gently tilt the head back. With the other hand, gently lift the chin forward to open the airway.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Check for normal breathing, chest motion and listen for normal breath sounds.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Pinch the nostrils and cover the person's mouth with yours.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Give the first rescue breath and watch to see if the chest rises. If it does rise give the second breath. If the chest does not rise, repeat the head tilt, chin tilt and give the second breath.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Resume chest compressions.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Continue CPR until there are signs of movement or emergency personnel take over.
                </p>
            </div>
            <div className="firstaid-item">
                <h2 className="firstaid-title">Eye Injury</h2>
                <img src={eyeInjuryImg} alt="Eye Injury" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Don't rub the eye.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    For a foreign particle such as dirt, sand, or sliver of wood of metal, have the person pull the upper lid down, blink repeatedly and flush the eye with water.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    For any chemicals in the eye, immediately flush the eyes with lots of water.
                </p>
            </div>
            <div className="firstaid-item">
                <h2 className="firstaid-title">Fracture</h2>
                <img src={fractureImg} alt="Fracture" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Help support the injured area. Stop any bleeding by applying pressure with a sterile bandage or clean cloth.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Check for feeling, warmth and colour below fracture.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Immobilze the injured area. Apply a soft or hard splint above and below the fracture.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Apply ice or cold packs and elevate.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Treat for shock. Lay the person down and elevate legs.
                </p>
            </div>
            <div className="firstaid-item">
                <h2 className="firstaid-title">Shock</h2>
                <img src={shockImg} alt="Shock" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Lay the person down on his or her back.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    If it does not cause pain or injury, elevate the feet 12 inches (30 cm). Check for signs of breathing, coughing or movement. If absent, call emergency number and begin CPR.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Keep the person warm and comfortable. If choking, vomiting or bleeding from the mouth occur, turn the person on their side.
                </p>
            </div>
            <div className="firstaid-item">
                <h2 className="firstaid-title">Sprain</h2>
                <img src={sprainImg} alt="Sprain" className="firstaid-image" />
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Rest the ankle or injured area.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Apply ice or cold packs wrapped in cloth to protect the skin.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Compress by lightly wrapping an elastic bandage around the injured area.
                </p>
                <p className="firstaid-description">
                    <FaCheckCircle className='icon' />
                    Elevate the injured area above the level of the heart to reduce swelling.
                </p>
            </div>
        </div>
    );
};

export default FirstAid;
