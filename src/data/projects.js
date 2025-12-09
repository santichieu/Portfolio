  import TheFrogGamesImg from '../assets/TheFrogGames.png';
  import InfodolarImg from '../assets/InfoDolar.png';
  import TheFrogGamesBackendImg from '../assets/TheFrogGamesBackend.png';
  export const projectsInfo = [
    {
      id: 1,
      title: "Info Dolar",
      description: "Proyecto final de la materia Programacion II (TUP-UTN). Consume datos de la API de DolarAPI para mostrar cotizaciones de diferentes mondeas en tiempo real. Incluye un envio de precios por mail con EmailJS y un historico de precios con graficos de Chart.js.",
      image: InfodolarImg,
      projectLink:"https://github.com/QuimeyAlejo/TP-Prog",
    },
    {
      id: 2,
      title: "TheFrogGames",
      description: "Eccomerce de videojuegos desarrollado con React.js y Node.js. Permite a los usuarios registrarse, Iniciar sesión y comprar juegos. Ademas de un panel de administrador para gestionar productos y usuarios. Implementa autenticacion por JWT.",
      image: TheFrogGamesImg,
      projectLinkFront:"https://github.com/TP-UTN-GRUPO1/TP-Front",
      projectLinkBack:"https://github.com/TP-UTN-GRUPO1/TheFrog-Server",
    },
    {
      id: 3,
      title: "TheFrogGames Backend",
      description: "Migracion del backend de TheFrogGames a .NET, utilizando SQL Server como base de datos. Incluye autenticacion por JWT, manejo de productos, usuarios y ordenes.",
      image: TheFrogGamesBackendImg,
      projectLinkBack:"https://github.com/TP-UTN-GRUPO1/TheFrogGames",
    }
  ];