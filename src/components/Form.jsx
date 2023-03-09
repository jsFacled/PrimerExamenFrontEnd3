import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [mascota, setMascota] = useState("");

  function handleOnChange(e) {
    if (e.target.name === "name") {
      setInput1(e.target.value);
    } else if (e.target.name === "mascota") {
      setInput2(e.target.value);
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
      // Renderizar
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
    </>
  );
}

export default Form;
