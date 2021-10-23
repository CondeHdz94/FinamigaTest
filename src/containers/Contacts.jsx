import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../assets/styles/containers/Contacts.scss";
import userIcon from "../assets/icons/user-solid.svg";
import phoneIcon from "../assets/icons/phone-solid.svg";
import emailIcon from "../assets/icons/envelope-solid.svg";
import editIcon from "../assets/icons/edit-solid.svg";
import hashtagIcon from "../assets/icons/hashtag-solid.svg";
import favoriteIcon from "../assets/icons/heart-solid.svg";


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

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")) || []);
  }, []);

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

          <div id="main-content">
            <div>
              <input
                type="checkbox"
                id="checkbox"
                {...register("fav", { required: false })}
              />
              <label htmlFor="checkbox">
                <svg
                  id="heart-svg"
                  viewBox="467 392 58 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Group"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(467 392)"
                  >
                    <path
                      d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                      id="heart"
                      fill="#AAB8C2"
                    />
                    <circle
                      id="main-circ"
                      fill="#E2264D"
                      opacity="0"
                      cx="29.5"
                      cy="29.5"
                      r="1.5"
                    />

                    <g id="grp7" opacity="0" transform="translate(7 6)">
                      <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                      <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                    </g>

                    <g id="grp6" opacity="0" transform="translate(0 28)">
                      <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                      <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                    </g>

                    <g id="grp3" opacity="0" transform="translate(52 28)">
                      <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                      <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                    </g>

                    <g id="grp2" opacity="0" transform="translate(44 6)">
                      <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                      <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                    </g>

                    <g id="grp5" opacity="0" transform="translate(14 50)">
                      <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                      <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                    </g>

                    <g id="grp4" opacity="0" transform="translate(35 50)">
                      <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                      <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                    </g>

                    <g id="grp1" opacity="0" transform="translate(24)">
                      <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                      <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                    </g>
                  </g>
                </svg>
              </label>

              <h1>Favorito</h1>
            </div>
          </div>
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
              <p>{item.fav ? <img src={favoriteIcon} alt="" /> : null}</p>
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
