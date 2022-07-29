import React from 'react'
import Card from './Card'
import image1 from '../assets/img01.jpg'
import image2 from '../assets/img02.jpg'

const cards = [
    {
        id: 1,
        title: 'Free tour nocturno por Madrid',
        rating: '9,5 / 10',
        opinions: '1.316 opiniones',
        viajeros: '| 12.681 viajeros',
        description: 'En este free tour nocturno por Madrid contemplaremos la iluminación de las principales plazas y monumentos de la capital española. ¡Una ruta inolvidable por el centro de la ciudad!',
        precio: '¡Gratis!',
        descuento: '',
        image: image1
    },
    {
        id: 2,
        title: 'Excursión a Toledo y Segovia',
        rating: '9,2 / 10',
        opinions: '2.215 opiniones',
        viajeros: '| 20.611 viajeros',
        description: 'En este tour visitaremos en un día las dos ciudades más populares desde Madrid Toledo y Segovia. Si lo deseáis, podréis ampliar el recorrido hasta Ávila, famosa por sus murallas.',
        precio: '55 €',
        descuento: '(-30%)',
        image: image2
    },
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-12' key={card.id}>
                        <Card title={card.title} image={card.image} rating={card.rating} opinions={card.opinions} viajeros={card.viajeros} description={card.description} precio={card.precio} descuento={card.descuento}/>
                    </div>    
                ))
            }         
        </div>
    </div>
  )
}

export default Cards