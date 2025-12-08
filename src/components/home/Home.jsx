import "./home.css"

const Home = () => {
  return (
    <>
    <div id="home" className="homeContainer">
    <h1 className="Name">Santiago Chieu</h1>
    <div className="Title"><h2>FullStack Developer</h2></div>
    <ul className="social-links">
        <li>
          <a
            href="https://github.com/santichieu"
            target="_blank"
            rel="noreferrer"
            className="iconButton"
          >
            <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/santiago-chieu-171569187/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
          </a>
        </li>
      </ul>
      <button>Descargar CV</button>
    
    </div>
    </>
  )
}

export default Home