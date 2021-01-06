import React, { Component } from 'react';

import DatePicker from '../../../src';

import { Section } from './style';

export default class App extends Component {

  render() {
    return (
      <Section>
        <header>
          persian React datepicker
        </header>
        <main>
          <h1>
            <a href="#Usage" >#Usage</a>
          </h1>
          <div className="demo">
            <div>
              <DatePicker />
            </div>
            <div>
              <h2>
                simple usage
              </h2>
              <code>
               {` <DatePicker />`}
              </code>
            </div>
            
          </div>
          <div className="demo">
            <div>
              <DatePicker className="trigger-style" />
            </div>
            <div>
              <h2>
                trigger custom style
              </h2>
              <code>
                <pre>
                {`
<DatePicker 
  className="picker-style"
/>`}
                </pre>
             
              </code>
            </div>
            
          </div>
          <div className="demo">
            <div>
              <DatePicker 
                trigger={<button>Click me !</button>} 
                value="1371-10-22"
              />
            </div>
            <div>
              <h2>
                 custom trigger and value
              </h2>
              <code>
                <pre>
                {`
<DatePicker 
  trigger={<button>Click me !</button>}
  value="1371-10-22"
/>`}
                </pre>
             
              </code>
            </div>
            
          </div>
          <div className="demo">
            <div>
              <DatePicker 
                dateRenge={{start: "1385" , end:"1399"}}
              />
            </div>
            <div>
              <h2>
                 custom dateRenge and value
              </h2>
              <code>
                <pre>
                {`
<DatePicker 
  dateRenge={{start: "1385" , end:"1395"}}
/>`}
                </pre>
             
              </code>
            </div>
            
          </div>
          <div className="demo">
            <div>
              <DatePicker onChange={value=>console.log(value)} />
            </div>
            <div>
              <h2>
                onChange usage
              </h2>
              <code>
                <pre>
                {`
<DatePicker 
  onChange={value=>console.log(value)}
/>`}
                </pre>
             
              </code>
            </div>
            
          </div>
          <h1>
            <a href="#API" >#API</a>
          </h1>
          <div className="api" >
            <div className="head" >
              <span>props</span>
              <span>type</span>
              <span>default</span>
              <span>description</span>
            </div>
            <div>
              <span>className</span>
              <span>string</span>
              <span>undefined</span>
              <span>default trigger's className</span>
            </div>
            <div>
              <span>dateRenge</span>
              <span>object</span>
              <span>{'{ end : current year ,start :"1371" }'}</span>
              <span> End must be greater than Start</span>
            </div>
            <div>
              <span>value</span>
              <span>string</span>
              <span> current date in format YYYY-MM-DD </span>
              <span></span>
            </div>
            <div>
              <span>onChange</span>
              <span>function</span>
              <span> undefined </span>
              <span></span>
            </div>
            <div>
              <span>trigger</span>
              <span>React Node</span>
              <span> {"<input />"} </span>
              <span> change default trigger </span>
            </div>
          </div>
        </main>

      </Section>
    );
  }
}