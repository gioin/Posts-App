import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../helper/Context';
import { entrieDotBtn } from '../types';

const DotBtn = ({ post }: entrieDotBtn) => {
  const [showDots, setShowDots] = useState('');
  const btnDot = useRef(null);
  const { handleDelete, openEditForm } = useAppContext();

  useEffect(() => {
    const outsideClick = (e: MouseEvent): void => {
      if ((e.target as any).closest('.dropdown')) {
      } else {
        setShowDots('');
      }
    };

    // Close 3dots button's modal by clicking outside
    document.body.addEventListener('click', outsideClick);

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('click', outsideClick);
    };
  }, []);

  const openDots = () => {
    if (showDots === '') {
      setShowDots('show');
    } else {
      setShowDots('');
    }
  };

  return (
    <div ref={btnDot} className="dropdown">
      <button
        onClick={openDots}
        className="btn p-0"
        type="button"
        id="dropdownMenuButton2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-more-horizontal icon-lg pb-3px">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </button>
      <div
        className={`dropdown-menu ${showDots}`}
        aria-labelledby="dropdownMenuButton2">
        <button
          onClick={() => handleDelete(post)}
          className="dropdown-item d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>{' '}
          <span className="">Delete</span>
        </button>
        <button
          onClick={() => openEditForm(post)}
          className="dropdown-item d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
          <span className="">Edit</span>
        </button>
      </div>
    </div>
  );
};

export default DotBtn;
