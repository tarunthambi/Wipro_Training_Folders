import React from 'react';
import './TASK_1_Card.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ layout, header, content, footer }) => {

  return (
    <div className={`card ${layout === 'horizontal' ? 'horizontal-card' : ''}`}>
      <div className={`row g-0 ${layout === 'horizontal' ? '' : 'flex-column align-items-center'}`}>
        
        <div className={layout === 'horizontal' ? 'col-md-4 d-flex align-items-center justify-content-center' : 'card-header text-center'}>
          {header}
        </div>

        <div className={layout === 'horizontal' ? 'col-md-8' : 'card-body text-center'}>
          {content}
        </div>

        <div className={layout === 'horizontal' ? 'col-md-12 text-center mt-4' : 'card-footer text-center'} >
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Card;