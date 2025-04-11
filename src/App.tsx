import './App.css'

function App() {
console.log("renderiza")
  return (
    <>
      <header className='nav'>
        <section className='upper-header'>
          <section className='upper-left'>
            <img src="https://kavalerasbikes.cl/wp-content/uploads/elementor/thumbs/image-r1zcrymq83i82gw3s6270ej7b86n2fn10t3zx6sowo.png" alt="" />
            <span>AV. PERÚ 0820.LA CISTERNA. SANTIAGO DE CHILE</span>
          </section>
          <section className='upper-right'>
            <p>Social</p>
          </section>
        </section>
        
        <hr className='inter-hr'/>

        <nav className='under-header' >
          <section className='logo'>
            <img src="https://kavalerasbikes.cl/wp-content/uploads/elementor/thumbs/image-r1zcrymq83i82gw3s6270ej7b86n2fn10t3zx6sowo.png" alt="kavalera-logo" />
          </section>

          <section className='menu'>
            <ul className='head-menu'>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#quienes-somos">Quienes Somos</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#Productos">productos</a></li>
              <li><a href="#Marcas">Marcas</a></li>
            </ul>  
          </section>
          
          <section className='contact'>
            <button type="button">Contacto</button>
          </section>
        </nav>
      </header>




      <main>
        <section className='inicio'>
          <article className='contenedor-inicio'>
            <h1 className='inicio-title'>Taller de Motos en Santiago Mantencion y Reparación de Confianza</h1>
            <p className='inicio-texto'>	Servicio técnico especializado en mantención y repración multimarca. ¡Cotiza Hoy! Cuidado exprerto para tu motocicleta.</p>
            <a href="https://wa.me/56950117827"><button>Consulta Aquí</button></a>
          </article>
        </section>
      </main>

      <footer>
      </footer>      
    </>
  )
}

export default App
