import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../../logo.png";
import "../../App.css";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";

const ModalBackdrop = styled.div`
  /* @media screen and (max-width: 768px) { */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  /* } */
`;

const ModalContent = styled.div`
  position: absolute;
  margin: 0;
  margin-left: auto;
  height: 100vh;
  width: 70vw;
  right: 0;
  /* top: 60px; */
  background-color: #fff;
  /* @media screen and (max-width: 768px) {
    max-height: 600px;
    width: 100%;
    /* padding: 20px 10px 268px 10px; */
  /* padding: 20px 0px 268px 0px;
  }
  @media screen and (min-width: 768px) {
    max-height: 508px;
    min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px 60px 20px;
    border-radius: 20px;
  } */
`;

const modalRoot = document.querySelector("#root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    },
    [onClose]
  );

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClose={onClose}>
        <div className="modal">
          <div className="modal-header">
            <img src={logo} width={120} className="App-logo" alt="logo" />
            <button className="modal-btn" onClick={onClose}>
              <IconContext.Provider
                value={{
                  size: "20px",
                  color: "#007586",
                }}
              >
                <FiX />
              </IconContext.Provider>
            </button>
          </div>
          <p className="modal-title">+380999304877</p>
          <ul className="modal-list">
            <li onClick={onClose}>
              <NavLink className="nav-link" to={"/"}>
                Головна
              </NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink className="nav-link" to={"/portfolio"}>
                Портфоліо
              </NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink className="nav-link" to={"/reviews"}>
                Відгуки
              </NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink className="nav-link" to={"/price"}>
                Ціни
              </NavLink>
            </li>
          </ul>
        </div>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}
