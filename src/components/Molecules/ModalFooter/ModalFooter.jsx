import React from 'react'
import styles from './ModalFooter.module.scss'

const ModalFooter = ({ actions }) => {
    return (
        <div className={`${styles.ModalFooter}`}>
            <div>
                {
                    // actions.map
                }
            </div>
        </div>
    )
}

export default ModalFooter

/*
import React from 'react';
import './ModalFooter.css';

const ModalFooter = ({ actions }) => (
  <div className="modal-footer">
    {actions.map((action, index) => (
      <button key={index} onClick={action.onClick}>{action.label}</button>
    ))}
  </div>
);

export default ModalFooter;

*/