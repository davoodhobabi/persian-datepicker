//node modules
import React, { useState } from "react";
import PropTypes from "prop-types";

//components
import Picker from "./picker";
import BottomSheet from "../bottomSheet";

//utils

//styles
import { Styledbox } from "./style";

const DatePicker = ({ onChange, value, dateRenge, className , trigger }) => {
  const [val, setVal] = useState(value);

  const handleFocus = (e) => {
    e.target.blur();
  };
  return (
    <React.Fragment>
      <BottomSheet
        entry={
          trigger ? 
          trigger :
          <input
            onFocus={handleFocus}
            value={val}
            placeholder="تاریخ"
            className={className}
          />
        }
      >
        <Styledbox>
          <Picker
            dateRenge={dateRenge}
            value={value}
            onChange={(value) => {
              if (onChange) onChange(value);
              setVal(value);
            }}
          />
        </Styledbox>
      </BottomSheet>
    </React.Fragment>
  );
};

DatePicker.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  dateRenge: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
};

export default DatePicker;
