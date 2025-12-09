import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div id="aboutMe">
    <div  className="aboutmecontainer">
      <section className="aboutmecontent">
        <h3>Sobre mí</h3>

        <div className="aboutmetext">
          ¡Hola! Mi nombre es Santiago Chieu. Soy Técnico Universitario en Programación y desarrollador Full Stack. 
          Me considero una persona responsable, comunicativa y proactiva, siempre enfocada en aprender y mejorar mis habilidades.
        </div>

        <div className="experiences">
          Me especializo en desarrollo web utilizando tecnologías como React.js, Node.js, C#, y SQL. 
          Además, tengo un sólido dominio de HTML y CSS. Me motiva seguir creciendo dentro del desarrollo web 
          y afrontar nuevos desafíos profesionales.
        </div>

        <div className="englishlevelandgrowth">
          Cuento con un buen nivel de inglés y estoy comprometido a mantenerme actualizado con las tecnologías que se utilizan en el entorno laboral. 
          Me entusiasma seguir aprendiendo y desarrollarme para construir una carrera sólida en el mundo IT.
        </div>
      </section>
    </div>
    </div>
  );
}

export default AboutMe
