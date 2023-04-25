import { useState } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../../logo_mg.png";
import Modal from "../Modal/Modal";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";

import "../../App.css";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo-MG" alt="logo" />
        <button className="modal-btn" onClick={() => setIsModalOpen(true)}>
          <IconContext.Provider
            value={{
              size: "20px",
              color: "#007586",
            }}
          >
            <FiMenu />
          </IconContext.Provider>
        </button>
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
      </header>
      {isModalOpen && <Modal onClose={onCloseModal} />}
    </div>
  );
};

export default NavBar;
