import { useState } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import Modal from "../Modal/Modal";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Container, Logo, ModalButton } from "./NavBar.styled";

import "../../App.css";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Container>
        <Logo src={logo} alt="logo" />
        <ModalButton onClick={() => setIsModalOpen(true)}>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#007586",
            }}
          >
            <FiMenu />
          </IconContext.Provider>
        </ModalButton>
        {/* <NavLink className="nav-link" to={"/"}>
          Головна
        </NavLink>
        <NavLink className="nav-link" to={"/portfolio"}>
          Портфоліо
        </NavLink>
        <NavLink className="nav-link" to={"/reviews"}>
          Відгуки
        </NavLink>
        <NavLink className="nav-link" to={"/price"}>
          Ціни
        </NavLink> */}
      </Container>
      {isModalOpen && <Modal onClose={onCloseModal} />}
    </div>
  );
};

export default NavBar;
