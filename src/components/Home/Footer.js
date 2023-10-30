import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_bglinesfooter from '../../assets/images/bglinesfooter.svg'
import img_logfooter from '../../assets/images/Logofooter.svg'

const Footer = () => {
  return (
    <footer>

    <div className="about-crito">

        <img className="bglinesfooter" src={img_bglinesfooter}alt="lightgrey lines" />

        <div className="container">

            <div className="grid-container">

                <div>
                    <Link to="/">
                        <img className="logotype" src={img_logfooter} alt="crito logotype" /></Link>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Placeat obcaecati voluptas
                        voluptates! Voluptates laborum nam
                        ratione minus necessitatibus, iure
                        praesentium.</p>

                </div>

                <div>

                    <h3>Company</h3>
                    <nav>
                        <ul>
                            <li><a className="links" href="#">About</a></li>
                            <li><a className="links" href="#">Features</a></li>
                            <li><a className="links" href="#">Works</a></li>
                            <li><a className="links" href="#">Career</a></li>
                        </ul>
                    </nav>


                </div>
                <div>

                    <h3>Help</h3>
                    <nav>
                        <ul>
                            <li><a className="links" href="#">Customer Support</a></li>
                            <li><a className="links" href="#">Delivery Details</a></li>
                            <li><a className="links" href="#">Terms & Conditions</a></li>
                            <li><a className="links" href="#">Privacy Policy</a></li>
                        </ul>
                    </nav>


                </div>
                <div>

                    <h3>Resources</h3>
                    <nav>
                        <ul>
                            <li><a className="links" href="#">Free eBooks</a></li>
                            <li><a className="links" href="#">Development Tutorial</a></li>
                            <li><a className="links" href="#">How to - Blog</a></li>
                            <li><a className="links" href="#">Youtube Playlist</a></li>
                        </ul>
                    </nav>


                </div>
                <div>

                    <h3>Link</h3>
                    <nav>
                        <ul>
                            <li><a className="links" href="#">Free eBooks</a></li>
                            <li><a className="links" href="#">Development Tutorial</a></li>
                            <li><a className="links" href="#">How to - Blog</a></li>
                            <li><a className="links" href="#">Youtube Playlist</a></li>
                        </ul>
                    </nav>


                </div>
            </div>

        </div>

    </div>



    <div className="theend">


        <div className="container">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>


            <div className="socialmedia-bar">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="http://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>



    </div>
</footer>
  )
}

export default Footer