import React from "react";
import { useForm } from "react-hook-form";
import "../assets/styles/containers/Contacts.scss";

const Contacts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const formSubmit = (data) => {
      
    }
    return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="FormWrap">
          <input type="text" placeholder="Nombre..." className="Form__input"  ref={register({require: true})}/>
          <input
            type="number"
            placeholder="Teléfono..."
            className="Form__input" ref={register({require: true})}
          />
          <input type="email" placeholder="Correo..." className="Form__input"  ref={register({require: true})}/>
          <div type="submit" className="Form__btn">
            Agregar
          </div>
        </div>
      </form>

      <div className="ContactWrap">
          <h1>Listado</h1>
        <div className="ContactWrap__List">
            <div className="CardContact">
            <p>&#x1f464; Paco Jones</p>
            <p>&#x1f4de; 312558944754</p>
            <p>&#x1f4e7; pacojones@email.com</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
