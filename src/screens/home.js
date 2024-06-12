import React, { useState } from 'react';
import PictureCarousel from '../components/PictureCarousel';

const Home = () => {
    const [images] = useState([
        {
            url: 'https://ca-times.brightspotcdn.com/dims4/default/9d7866e/2147483647/strip/false/crop/5000x3333+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffb%2F8c%2Fb6e8796e450885f50ea8bc22dbec%2Fap23037523545482.jpg',
            alt: 'Image 1',
            caption: 'A man walks among rubble as he searches for people in a destroyed building in Adana, Turkey, on Monday. (Khalil Hamra / Associated Press)',
        },
        {
            url: 'https://ca-times.brightspotcdn.com/dims4/default/608ad01/2147483647/strip/true/crop/5000x3333+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd3%2F97%2F70cc78ef4d11b70042ef5dc946d2%2Fap23037537779022-1.jpg',
            alt: 'Image 2',
            caption: 'Emergency team members search for people in a destroyed building Monday in Adana, Turkey. (Khalil Hamra / Associated Press)',
        },
        {
            url: 'https://static.euronews.com/articles/stories/08/14/55/34/828x526_cmsv2_111c693f-eaa6-51a9-ba18-eb053c3e3373-8145534.jpg',
            alt: 'Image 3',
            caption: 'People make their way near a collapsed building due to an earthquake in Wajima, Ishikawa prefecture, Japan',
        }
    ]);

    return (
        <div>
            <PictureCarousel images={images} />
        </div>
    );
};

export default Home;