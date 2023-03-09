import React, { useState } from "react";
import Card from "./Card";

function Form() {
  const [name, setName] = useState("");
  const [mascota, setMascota] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setmostrarError] = useState(false)

  function handleOnChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "mascota") {
      setMascota(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      name.trim().length < 3 ||
      name.trim()[0] === " " ||
      mascota.length < 6
    ) {
        setmostrarError(true)
      
    } else {
        setmostrarError(false)
      setMostrarCard(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="mascota"
            name="mascota"
            placeholder="Ingresa tu mascota favorita"
            value={mascota}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
      {mostrarError && <p style={{ color:"red" }}>Por favor corrobora que todos los datos estén completos</p>}
      {mostrarCard && <Card name={name} mascota={mascota} />}
    </>
  );
}

export default Form;
