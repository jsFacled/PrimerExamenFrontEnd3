import React, { useState } from "react";
import Card from "./Card";

function Form() {
  const [name, setName] = useState("");
  const [mascota, setMascota] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);

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
      alert("Por favor chequea que la información sea correcta");
    } else {
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
      {mostrarCard && <Card name={name} mascota={mascota} />}
    </>
  );
}

export default Form;
