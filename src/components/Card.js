import React from 'react'

function Card({title, image, rating, opinions, viajeros, description, precio, descuento}) {
  return (
    
    <div className='card mt-2'>
        <div className='row'>
            <div className='col-md-5'>
                <div className='card-body'>
                    <img className="card-img-top" src={image} alt="Card image cap"></img>
                </div> 
            </div>

            <div className='col-md-7'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h5 className='card-title txt22 txtrosa txtbold'>{title}</h5>
                            <p className='card-text'><strong className='txt16 txtrosa txtbold'>{rating}</strong> <span className='txt14 txtclaro'>{opinions}</span> <span className='txt14 txtclaro txtviajeros'>{viajeros}</span></p>
                        </div>
                        <div className='col-md-4'>
                            <div className="dropdown">
                                <a className='txt16 txtrosa ' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compartir</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Facebook</a></li>
                                    <li><a className="dropdown-item" href="#">Twitter</a></li>
                                    <li><a className="dropdown-item" href="#">Linkedln</a></li>
                                </ul>
                            </div>
                            <div className='divright txtmovil'>
                            <span className='txt14 txtverde'>{descuento}</span> <span className='txt24 txtrosa txtbold'>{precio}</span>
                            </div>
                        </div>
                    </div>
                    <p className='card-text txt16 txtmargen txtparrafo'>{description}</p>
                </div> 

                <div className='card-body divright txtdeskt'>  
                    <span className='txt14 txtverde'>{descuento}</span> <span className='txt24 txtrosa txtbold'>{precio}</span>
                </div>


            </div>

        </div>
    </div>

  )
}

export default Card