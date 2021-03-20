import { useState } from 'react';

import Calendar from '../components/Calendar';
import Popup from '../components/Popup';
import MainLayout from '../components/MainLayout';
import { useSelector } from 'react-redux';
import { selectShowPopup } from '../redux/popup';

export default function Home() {
    const showPopup = useSelector(selectShowPopup);

    return (
        <MainLayout>
            <div className="hero">
                <div className="hero__body">
                    <h1 className="hero__title">Choose the day for the meeting</h1>
                    <p className="hero__text">
                        We encourage you to book your<br></br> appointment online.<br></br> This
                        will save you time.
                    </p>
                </div>
            </div>
            <div className="aside">
                <Calendar />
            </div>
            {showPopup && <Popup />}
        </MainLayout>
    );
}
