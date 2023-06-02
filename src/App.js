import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

function App() {
    const [selectedDate, setSelectedDate] = useState(null);
    const today = moment();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const calculateDaysPassed = () => {
        if (!selectedDate) {
            return null;
        }

        const daysPassed = today.diff(selectedDate, "days");
        return `It's been ${daysPassed} days!`;
    };

    return (
        <div className="App">
            <div className="tittle"><h1>Date Calculator</h1></div>
            <div className="container">
                <div className="date-inputs">
                    <label>Enter Date ♥ Format MM/DD/YYYY:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select date"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        maxDate={today.toDate()}
                    />
                </div>
                <div className="result">{calculateDaysPassed()}</div>
            </div>
        </div>
    );
}

export default App;
