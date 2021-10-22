import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/styles/containers/Contacts.scss";
import userIcon from "../assets/icons/user-solid.svg";
import phoneIcon from "../assets/icons/phone-solid.svg";
import emailIcon from "../assets/icons/envelope-solid.svg";
import editIcon from "../assets/icons/edit-solid.svg";
import hashtagIcon from "../assets/icons/hashtag-solid.svg";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [contacts, setContacts] = useState([]);
  const [edit, setEdit] = useState({});

  const formSubmit = (data) => {
    const myList = contacts;
    if (Object.keys(edit).length > 0) {
      myList[edit.index] = data;
      localStorage.setItem("contacts", JSON.stringify(myList));
      reset({});
      setEdit({});
    } else {
      myList.push(data);
      setContacts(myList);
      localStorage.setItem("contacts", JSON.stringify(myList));
      reset({});
    }
  };

  const editContact = (item, index) => {
    reset(item);
    setEdit({ index });
    document.getElementsByClassName("Form__input")[0].focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="FormWrap">
          <input
            type="text"
            placeholder="Nombre..."
            className="Form__input"
            autoFocus
            name="inputFocus"
            {...register("name", { required: true })}
          />
          <input
            type="number"
            placeholder="Teléfono..."
            className="Form__input"
            {...register("phone", { required: true })}
          />
          <input
            type="email"
            placeholder="Correo..."
            className="Form__input"
            {...register("email", { required: true })}
          />
          {Object.keys(edit).length > 0 ? (
            <button type="submit" className="Form__btn Form__btn--Confirm">
              Confirmar
            </button>
          ) : (
            <button type="submit" className="Form__btn">
              Agregar
            </button>
          )}
        </div>
      </form>

      {errors.name || errors.phone || errors.email ? (
        <span className="infoErrorInput">Debe llenar todos los campos</span>
      ) : (
        <span></span>
      )}

      <div className="ContactWrap">
        <h1>Listado</h1>
        <div className="ContactWrap__List">
          <div className="Title__List">
            <img src={hashtagIcon} alt="userIcon" />
            <img src={userIcon} alt="userIcon" />
            <img src={phoneIcon} alt="userIcon" />
            <img src={emailIcon} alt="userIcon" />
          </div>
          {contacts.map((item, index) => (
            <div className="CardContact" key={index}>
              <p>{index}</p>
              <p>{item.name}</p>
              <p>{item.phone}</p>
              <p>{item.email}</p>
              <button className="btnEdit">
                <img
                  src={editIcon}
                  alt="editIcon"
                  onClick={() => editContact(item, index)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;
