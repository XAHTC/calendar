import { useDispatch, useSelector } from 'react-redux';
import { closePopup, selectDay, selectMonth } from '../redux/popup';

import close from '../assets/close.png';

const Popup = () => {
    const dispatch = useDispatch();
    const day = useSelector(selectDay);
    const month = useSelector(selectMonth);

    return (
        <div className="popup">
            <div className="popup__body">
                <div className="popup__input">
                    <label>Month</label>
                    <input disabled value={month}></input>
                </div>
                <div className="popup__input">
                    <label>Day</label>
                    <input disabled value={day}></input>
                </div>
                <button className="popup__close" onClick={() => dispatch(closePopup())}>
                    <img src={close} />
                </button>
            </div>
        </div>
    );
};

export default Popup;
