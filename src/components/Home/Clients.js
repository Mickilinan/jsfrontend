import React from 'react'
import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gobona from '../../assets/images/gobona.svg'

const Clients = () => {
  return (
    <section className="clients">
    <div className="grid-container">
        <div><a href="https://paperz.com" target="_blank"><img src={img_paperz}alt="business name paperz" /></a></div>
        <div><a href="https://dorfus.com" target="_blank"><img src={img_dorfus} alt="business name dorfus" /></a></div>
        <div><a href="http://martino.com" target="_blank"><img src={img_martino} alt="business name martino" /></a></div>
        <div><a href="https://square.com" target="_blank"><img src={img_square} alt="business name square" /></a></div>
        <div><a href="https://gobona.com" target="_blank"><img src={img_gobona} alt="business name gobona" /></a></div>
    </div>
</section>
  )
}

export default Clients