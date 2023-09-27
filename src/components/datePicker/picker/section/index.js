//node modules
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import { PickerSections } from '../style';

const Section = ({ onChange , rows , value}) =>{
  const element = useRef(null);
  const [active, setActive] = useState();
  const speed = 45;
  const mid = 100;
  const firstLoadConfig = () =>{
    element.current.scrollTop = mid ;
  };

  useEffect(() => {
    if(active > rows.length){
      setActive(rows.length);
    }
    firstLoadConfig();
  }, [rows]);

  useEffect(() => {
    active &&
     onChange  &&
     active?.index !== value?.index &&
      onChange(active);
  }, [active]);
  useEffect(() => {
    rows.map((row)=>{
      if( row?.index === value?.index && (active ? value?.index !== active?.index : true)){
        setActive(row);
      }
    }  );
  }, [value]);

  const ScrollTriger = e =>{
    const sign = e.target.scrollTop - mid > 0; 
    const scroll = Math.abs(e.target.scrollTop - mid);
    if(scroll > speed && scroll !== 0) {
      if(sign) setActive((active?.index*1) + 1 >rows.length? rows[0] :rows[(active?.index*1)]);
      else setActive((active?.index*1) - 1 < 1 ? rows[rows.length-1]  :  rows[(active.index*1) - 2]);
      e.target.scrollTop = mid;
    }
  };

  return(
    <React.Fragment>
      <PickerSections>
        <div ref={element} onScroll={ScrollTriger} />
        {   
          rows && 
          active &&
              rows.map((row , i)=>(
                <span className={
                  ((i+1 === (active?.index*1)-2 || ((active?.index*1)-2 === 0 && i === rows.length-1) || ((active?.index*1)-2 === -1 && i === rows.length-2)) ? "standbay-prev" :"" ) +
                  ((i+1 === (active?.index*1)-1 || ((active?.index*1)-1 === 0 && i === rows.length-1 )) ? "prev" :"" ) +
                  (i+1 === (active?.index*1) ? "active" :"")+
                  (i+1 === (active?.index*1) +1 || ((active?.index*1)+1 === rows.length+1 && i === 0) ? "next" :"") +
                  ((i+1 === (active?.index*1)+2 || ((active?.index*1)+2 === rows.length+1 && i === 0) || ((active?.index*1)+2 === rows.length+2 && i === 1)) ? "standbay-next" :"" ) 
                } key={row.name}>{row.name}</span>
              ))
        }
      </PickerSections>
    </React.Fragment>
  );
};
 
Section.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  rows: PropTypes.array,
};
 
export default Section;