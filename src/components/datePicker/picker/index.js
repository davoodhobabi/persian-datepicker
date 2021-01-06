//node modules
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "jalali-moment";
//components
import Section from "./section";

//utils
//styles


const convertMonth = number =>{   
  switch(number){
  case 1 : return "فروردین";
  case 2 : return "اردیبهشت";
  case 3 : return "خرداد";
  case 4 : return "تیر";
  case 5 : return "مرداد";
  case 6 : return "شهریور";
  case 7 : return "مهر";
  case 8 : return "آابان";
  case 9 : return "آذر";
  case 10 : return "دی";
  case 11 : return "بهمن";
  case 12 : return "اسفند";
  }
};

const Picker = ({ onChange, value=moment().format("jYYYY-jMM-jDD"), dateRenge={ end : moment().format("jYYYY") ,start :"1371" } }) => {

  const years = Array.from(
    {
      length: (dateRenge.end * 1 - dateRenge.start * 1)+1,
    },
    (x, i) => ({
      name: `${(dateRenge.start * 1) + i}`,
      index: `${i < 10 ? "0" : ""}${i + 1}`,
    })
  );

  const [date, setDate] = useState(value);
  const [values, setValues] = useState({
    day: {
      name: moment(value, "jYYYY-jMM-jDD").format("jDD"),
      index: moment(value, "jYYYY-jMM-jDD").format("jDD"),
    },
    month: {
      name: convertMonth(moment(value, "jYYYY-jMM-jDD").format("jMM") * 1),
      index: moment(value, "jYYYY-jMM-jDD").format("jMM"),
    },
    year: years.find(
      (year) => year.name === moment(value, "jYYYY-jMM-jDD").format("jYYYY")
    ),
  });
  useEffect(() => {

    setDate(
      values.year.name + "-" + values.month.index + "-" + values.day.index
    );
  }, [values]);

  useEffect(() => {
    const Date = moment(date, "jYYYY-jMM-jDD");
    if (!Date.isValid() && isNaN(Date.jDay()) && Date.jMonth() === 0) {
      setValues({
        ...values,
        day: {
          name: `${values.day.name - 1}`,
          index: `${values.day.index - 1}`,
        },
      });
    }
    if (Date.isValid() && onChange) {
      onChange(date);
    }
  }, [date]);

  return (
    <React.Fragment>
      {/* days */}
      <Section
        value={values.day}
        onChange={(value) => setValues({ ...values, day: value })}
        rows={Array.from(
          {
            length: moment.jDaysInMonth(
              moment(date, "jYYYY-jMM-jDD").jYear(),
              moment(date, "jYYYY-jMM-jDD").jMonth()
            ),
          },
          (x, i) => ({
            name: moment().startOf("month").add(i, "days").format("DD"),
            index: moment().startOf("month").add(i, "days").format("DD"),
          })
        )}
      />
      {/* months */}
      <Section
        value={values.month}
        onChange={(value) => setValues({ ...values, month: value })}
        rows={[
          { name: "فروردین", index: "01" },
          { name: "اردیبهشت", index: "02" },
          { name: "خرداد", index: "03" },
          { name: "تیر", index: "04" },
          { name: "مرداد", index: "05" },
          { name: "شهریور", index: "06" },
          { name: "مهر", index: "07" },
          { name: "آبان", index: "08" },
          { name: "آذر", index: "09" },
          { name: "دی", index: "10" },
          { name: "بهمن", index: "11" },
          { name: "اسفند", index: "12" },
        ]}
      />
      {/* years */}
      <Section
        value={values.year}
        onChange={(value) => setValues({ ...values, year: value })}
        rows={years}
      />
    </React.Fragment>
  );
};

Picker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  dateRenge: PropTypes.object,
};

export default Picker;
