import React, { useState, useRef, useEffect } from 'react';
import "../styles/TimePicker.css"
const TimePicker = ({time, setTime}) => {
  
  const [isPickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef(null);
  const inputRef = useRef(null);

  // Close the picker when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (pickerRef.current && !pickerRef.current.contains(event.target) && event.target !== inputRef.current) {
//         setPickerOpen(false);
//       }
//     };

//     if (isPickerOpen) {
//       document.addEventListener('onClick', handleClickOutside);
//     } else {
//       document.removeEventListener('onClick', handleClickOutside);
//     }

//     return () => document.removeEventListener('onClick', handleClickOutside);
//   }, [isPickerOpen]);

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));

  const handleTimeChange = (hour, minute) => {
    setTime(`${hour}:${minute}`);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* <input
        type="text"
        value={time}
        readOnly
        className="time-pickable"
        ref={inputRef}
        onFocus={() => setPickerOpen(true)}
      /> */}
        <div
          className="time-picker"
        >
          <select
            className="time-picker__select"
            onChange={(e) => handleTimeChange(e.target.value, time.split(':')[1] || '00')}
            value={time.split(':')[0] || '00'}
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          :
          <select
            className="time-picker__select"
            onChange={(e) => handleTimeChange(time.split(':')[0] || '00', e.target.value)}
            value={time.split(':')[1] || '00'}
          >
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      
    </div>
  );
};

export default TimePicker;
