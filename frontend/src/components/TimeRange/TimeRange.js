import React, { useState } from 'react';
import {CloseOutlined , DownOutlined} from '@ant-design/icons';
import onClickOutside from 'react-onclickoutside';

import './TimeRange.scss'

function TimeRange({ title, items, multiSelect = false , changeSelection}) {
  const [open, setOpen] = useState(false);
  TimeRange.handleClickOutside = () => setOpen(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  

  function handleOnClick(item) {
    // if (!selection.some(current => current.id === item.id)) {
      // if (!multiSelect) {

      // } 
      // else if (multiSelect) {
      //   props.changeSelection([...selection, item]);
      // }
    // } else {
    //   let selectionAfterRemoval = selection;
    //   selectionAfterRemoval = selectionAfterRemoval.filter(
    //     current => current.id !== item.id
    //   );
    //   changeSelection([...selectionAfterRemoval]);
    changeSelection(item);
    setOpen(false);
    }

  // function isItemInSelection(item) {
  //   if (selection.some(current => current.id === item.id)) {
  //     return true;
  //   }
  //   return false;
  // }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p>{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? <CloseOutlined /> : <DownOutlined />}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item.days)}>
                <span>{item.value}</span>
                {/* <span>{isItemInSelection(item) && 'Selected'}</span> */}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => TimeRange.handleClickOutside,
};

export default onClickOutside(TimeRange, clickOutsideConfig);