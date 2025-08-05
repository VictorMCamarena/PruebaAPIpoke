// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tu mensaje ha sido enviado (esto es solo una simulación)');
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contacto</h2>

        <p className="text-center text-gray-700 mb-6">
          Puedes escribirme directamente usando el siguiente formulario. <br />
          <span className="font-semibold">Nombre:</span> Victor Manuel Camarena <br />
          <span className="font-semibold">Correo:</span> victor.camarena@example.com
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Tu correo"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
