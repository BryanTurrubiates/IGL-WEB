import './notFound.css'
import { Nav } from './nav/Nav'
import { FooterWaves } from './footer/footer'

export function NotFund () {
  const handleClick = () => {
    window.location.href = 'http://192.168.80.220:8080/proyecto/public_html/IGL-WEB/'
  }
  return (
    <>
      <Nav />
      <div className='NotFound_Container'>
        <div className='NotFound_Content'>
          <div className='NumberCode'>
            <h1 className='number404' id='numberFront'>404</h1>
            <h1 className='number404' id='numberBack'>404</h1>
          </div>
          <div className='mensaje_Container'>
            <div className='textContainer'>
              <h3 className='oppsTitulo'>Opps!</h3>
              <p className='descriptionTitulo'>Lo sentimos, no pudimos encontrar la pagina, puedes volver al sistema WEB.</p>
            </div>
            <button className='btnGoToIGL' onClick={handleClick}>Volver al sistema web</button>
          </div>
        </div>
      </div>
      <FooterWaves />
    </>
  )
}
