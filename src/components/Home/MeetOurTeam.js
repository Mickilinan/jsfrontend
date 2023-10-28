import React from 'react'
import img_kristine from '../../assets/images/kristine.png'
import img_mark from '../../assets/images/mark.png'
import img_kimberly from '../../assets/images/kimberly.png'
import img_justin from '../../assets/images/justin.png'
import img_dots from '../../assets/images/dot.svg'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
    <div className="container">

        <div className="grid-container">
            <div className="section-title">
                <p>Meet Our Team</p>
                <h2>Experience Team Members</h2>
            </div>

            <a className="btn-transparent" href="browseteam.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
        
        </div>

        <div className="team-members">

            <div id="kristine">
                <img src={img_kristine} alt="smiling woman with short curly hair" />
                <h3>Kristine Palmer</h3>
                <p>Chef Operation Officer</p>

            </div>
            <div id="markaubri">
                <img src={img_mark} alt="a man in a suit" />
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>

            </div>
            <div id="kimberly">
                <img src={img_kimberly}alt="smiling woman with dreads and a black dress" />
                <h3>Kimberly Hansen</h3>
                <p>Senior Consultant</p>

            </div>
            <div id="justin">
                <img src={img_justin} alt="closeup picture of a smiling man" />
                <h3>Justin Willoman</h3>
                <p>Senior Tech Consultant</p>

            </div>

        </div>



    </div>


    <img src={img_dots} className="dots" />

</section>
  )
}

export default MeetOurTeam