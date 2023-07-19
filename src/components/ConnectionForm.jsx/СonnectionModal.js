import React, { useEffect, useCallback } from "react";
import { Formik, ErrorMessage } from "formik";
import { IconContext } from "react-icons";
import { FiX } from "react-icons/fi";
import logo from "../../logo.png";
import {
  ModalBackdrop,
  ModalContent,
  ModalSubmitBtn,
  ModalButton,
  ModalHeader,
} from "../Modal/Modal.styled";
import {
  Container,
  FormTitle,
  FormStyled,
  Input,
  Label,
  Comment,
} from "./ConnectionModal.styled";
import priceData from "../../price.json";

let womenServises = [];
priceData.women.map((item) => womenServises.push(item.service));

let menServises = [];
priceData.men.map((item) => menServises.push(item.service));

let childrenServises = [];
priceData.children.map((item) => childrenServises.push(item.service));

let bodyServises = [];
priceData.styx.map((item) => bodyServises.push(item.service));

let elseServises = [];
priceData.else.map((item) => elseServises.push(item.service));

const initialValues = {
  name: "",
  tel: "",
  text: "",
  service: "",
  subService: "",
};

const services = [
  {
    name: "Для жінок",
    subServices: womenServises,
  },
  {
    name: "Для чоловіків",
    subServices: menServises,
  },
  {
    name: "Для дітей",
    subServices: childrenServises,
  },
  {
    name: "Для тіла",
    subServices: bodyServises,
  },
  {
    name: "Додатково",
    subServices: elseServises,
  },
  // Add more services and their subServices as needed
];

const ConnectionForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

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
  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);
    resetForm();
    onClose();
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClose={onClose}>
        <Container>
          <ModalHeader>
            <img src={logo} width={120} alt="logo" />
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
          <FormTitle>Записатись</FormTitle>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <FormStyled data-netlify="true">
                <div>
                  <Label htmlFor="service">
                    Для кого:
                    <Input
                      as="select"
                      id="service"
                      name="service"
                      onChange={handleChange}
                    >
                      <option value="">Оберіть</option>
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </Input>
                    <ErrorMessage name="service" component="div" />
                  </Label>
                </div>

                {values.service && (
                  <div>
                    <Label htmlFor="subService">
                      Оберіть послугу:
                      <Input as="select" id="subService" name="subService">
                        <option value="">Оберіть</option>
                        {services
                          .find((service) => service.name === values.service)
                          .subServices.map((subService) => (
                            <option key={subService} value={subService}>
                              {subService}
                            </option>
                          ))}
                      </Input>
                      <ErrorMessage name="subService" component="div" />
                    </Label>
                  </div>
                )}
                <div>
                  <Label htmlFor="name">
                    Ім'я:
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Введіть ім'я"
                    />
                    <ErrorMessage name="name" component="div" />
                  </Label>
                </div>

                <div>
                  <Label htmlFor="tel">
                    Телефон:
                    <Input
                      type="tel"
                      id="tel"
                      name="tel"
                      placeholder="Введіть телефон"
                    />
                    <ErrorMessage name="tel" component="div" />
                  </Label>
                </div>

                <div>
                  <Label htmlFor="text">
                    Коментар:
                    <Comment
                      as="textarea"
                      type="text"
                      id="text"
                      name="text"
                      placeholder="Напишіть коментар"
                    />
                    <ErrorMessage name="text" component="div" />
                  </Label>
                </div>
                <ModalSubmitBtn type="submit">Відправити</ModalSubmitBtn>
              </FormStyled>
            )}
          </Formik>
        </Container>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ConnectionForm;
