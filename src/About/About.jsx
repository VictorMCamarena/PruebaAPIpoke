// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca de esta SPA</h2>
        
        <p className="text-gray-600 mb-6">
          Esta aplicación de página única (SPA) fue creada por Victor M. Camarena utilizando React y TailwindCSS para explorar cómo construir interfaces modernas, rápidas y responsivas. El concepto de la API Viendo siendo de la pokedex donde  muestra 20 de estos mismos
         de forma aleatoria y en donde el usuario puede utilizar un boton en donde se actualiza y muestra otros 20 nuevos.
        </p>
        
        <p className="text-gray-600 mb-6">
          El objetivo principal del proyecto es aprender a manejar rutas, componentes reutilizables, llamadas a APIs externas y diseño adaptable dentro de una SPA sencilla pero funcional.
        </p>
        
        <p className="text-gray-600">
          Los datos de los Pokémon son obtenidos en tiempo real desde <strong><a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">PokeAPI</a></strong>, una API pública gratuita que proporciona acceso a información detallada sobre el mundo Pokémon.
        </p>
      </div>
    </section>
  );
};

export default About;
