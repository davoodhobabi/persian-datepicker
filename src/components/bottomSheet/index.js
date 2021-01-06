//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import { StyledBootmSheet, StyledEntry } from './style';

const BottomSheet = ({children , entry , header , footer}) =>{
  const [isOpen, setIsOpen] = useState(false);
  return(
    <React.Fragment>
      <StyledEntry onClick={()=>setIsOpen(true)}>
        {entry}
      </StyledEntry>
      <StyledBootmSheet isOpen={isOpen}  >
        <div onClick={()=>setIsOpen(false)} />
        <section>
          {
            header ?
              typeof header === "string" ?
                (
                  <header>
                    {header}
                  </header>
                ) : 
                header :
              ""
          }
          <header>
                
          </header>
          {children}
          {
            footer ?
              typeof footer === "string" ?
                (
                  <footer>
                    {footer}
                  </footer>
                ) : 
                footer :
              ""
          }
        </section>
      </StyledBootmSheet>
    </React.Fragment>
  );
};
 
BottomSheet.propTypes = {
  children: PropTypes.any,
  entry: PropTypes.any,
  header: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
  ]),
  footer: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
  ]),
};
 
export default BottomSheet;