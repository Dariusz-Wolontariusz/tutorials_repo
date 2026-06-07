"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import style from "./styles.module.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const escapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", escapeKey);

    return () => {
      document.removeEventListener("keydown", escapeKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <div inert={isOpen ? true : undefined}>
        <h1>Modal</h1>
        <button
          className={style.button}
          onClick={() => setIsOpen(true)}
          ref={openButtonRef}
        >
          Click me
        </button>
      </div>

      {isOpen && (
        <div className={style.backdrop} onClick={(e) => setIsOpen(false)}>
          <div
            className={style.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h2 id="modal-title">Your Message</h2>
            <p className={style.message}>
              You can go to the previous{" "}
              <span>
                <a href="/">page</a>
              </span>
            </p>
            <button
              className={style.button}
              onClick={() => setIsOpen(false)}
              ref={closeButtonRef}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
