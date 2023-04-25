import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "../../App.css";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import {
  ModalBackdrop,
  ModalContent,
  Container,
  ModalHeader,
  ModalButton,
  ModalList,
  ModalTitle,
  ModalText,
  ModalSubmitBtn,
} from "./Modal.styled";

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
        <Container>
          <ModalHeader>
            <img src={logo} width={120} className="App-logo" alt="logo" />
            <ModalButton onClick={onClose}>
              <IconContext.Provider
                value={{
                  size: "30px",
                  color: "#007586",
                }}
              >
                <FiX />
              </IconContext.Provider>
            </ModalButton>
          </ModalHeader>
          <ModalText>+380999304877</ModalText>
          <ModalList>
            <ModalTitle onClick={onClose}>
              <NavLink className="nav-link" to={"/"}>
                Головна
              </NavLink>
            </ModalTitle>
            <ModalTitle onClick={onClose}>
              <NavLink className="nav-link" to={"/portfolio"}>
                Портфоліо
              </NavLink>
            </ModalTitle>
            <ModalTitle onClick={onClose}>
              <NavLink className="nav-link" to={"/reviews"}>
                Відгуки
              </NavLink>
            </ModalTitle>
            <ModalTitle onClick={onClose}>
              <NavLink className="nav-link" to={"/price"}>
                Ціни
              </NavLink>
            </ModalTitle>
          </ModalList>
          <ModalSubmitBtn>Записатись</ModalSubmitBtn>
        </Container>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}
