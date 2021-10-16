import React, { Component } from 'react';
import fish from './fish.svg';
import bubble from './bubble.png';
import bubble1 from './bubble1.png';
import bubble2 from './bubble2.png';
import bubble3 from './bubble3.png';
import bubble4 from './bubble4.png';


export class Clock extends Component {
    render() {
        
        return (
            <div>
                <img src={fish} className="fish4" alt="logo" />
                <p>Vorresti avere un tuo spazio sul Web?</p>
                <address id="contact" />
                <a className="label" href="mailto:silviafabbrilucatini@yahoo.es">Scrivimi</a> 
                      
                    <div className="logo1">
                    <img src={fish} className="fish3" alt="logo" />
                    <img src={fish} className="fish2" alt="logo" />
                    </div>
                    <div>
      <img src={bubble} className="b" alt="logo" />
      <img src={bubble4} className="b1" alt="logo" />
      <img src={bubble2} className="b2" alt="logo" />
      <img src={bubble3} className="b3" alt="logo" />
      <img src={bubble1} className="b4" alt="logo" />
      <img src={bubble} className="b1" alt="logo" />
      <img src={bubble4} className="b2" alt="logo" />
      <img src={bubble2} className="b3" alt="logo" />
      <img src={bubble3} className="b4" alt="logo" />
      <img src={bubble1} className="b" alt="logo" />
      </div>
        </div>
                    
        )
    }
}

export default Clock

