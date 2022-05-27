import React, {useState} from 'react';
import './Edit.css'

const Edit = ({updateData}) => {
        const [hour, setHour] = useState(0)
        const [min, setMin] = useState(3)
        const [sec, setSec] = useState(0)

        function checkTimeHour(e) {
            let hour = e.target.value
            if (hour > 99) {
                setHour(99)
            } else if (hour < 0) {
                setHour(0)
            } else {
                setHour(e.target.value)
            }

        }

        function checkTimeMin(e) {
            let min = e.target.value
            if (min > 59) {
                setMin(59)
            } else if (min < 0) {
                setMin(0)
            } else {
                setMin(e.target.value)
            }
        }

        function checkTimeSec(e) {
            let sec = e.target.value
            if (sec > 59) {
                setSec(59)
            } else if (sec < 0) {
                setSec(0)
            } else {
                setSec(e.target.value)
            }
        }

        function saveData() {
            updateData(Number(sec) + Number(min * 60) + Number(hour * 3600))
        }

        return (
            <div className="edit">
                <input type="number" placeholder="Hours" className="edit__setup edit__hours" value={hour}
                       onChange={checkTimeHour}
                       step="1"/>
                <div className="edit__colon">:</div>
                <input type="number" id="edit__min" placeholder="Min" className="edit__setup edit__minutes"
                       value={min}
                       onChange={checkTimeMin}
                       step="1"
                />
                <div className="edit__colon">:</div>
                <input type="number" id="edit__sec" placeholder="Sec" className="edit__setup edit__seconds"
                       value={sec}
                       onChange={checkTimeSec}
                       step="1"
                />
                <button className="btn__save" onClick={saveData}>Save</button>
            </div>
        );
    }
;

export default Edit;