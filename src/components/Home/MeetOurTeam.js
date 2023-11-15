import React from 'react'
import img_kristine from '../../assets/images/kristine.png'
import img_mark from '../../assets/images/mark.png'
import img_kimberly from '../../assets/images/kimberly.png'
import img_justin from '../../assets/images/justin.png'
import img_dots from '../../assets/images/dot.svg'
import Buttons from '../Generics/Buttons'
import SectionTitle from '../Generics/SectionTitle'
import Team from '../Generics/Team'


const teamMembers = [
    { id: 'kristine', imageUrl: img_kristine, name: 'Kristine Palmer', position: 'Chef Operation Officer' },
    { id: 'markaubri', imageUrl: img_mark, name: 'Mark Aubri', position: 'Senior Consultant' },
    { id: 'kimberly', imageUrl: img_kimberly, name: 'Kimberly Hansen', position: 'Senior Consultant' },
    { id: 'justin', imageUrl: img_justin, name: 'Justin Willoman', position: 'Senior Tech Consultant' },
  ];

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
    <div className="container">

        <div className="grid-container">
           < SectionTitle title="Meet Our Team" description="Experience Team Members"/>
            < Buttons type="" title="Browse Team" url="/team"/>
        
        </div>

        <div className="team-members">
        
      {teamMembers.map((member) => (
        <Team key={member.id} {...member} />
      ))}

          

        </div>

        <img src={img_dots} className="dots" />

    </div>


 

</section>
  )
}

export default MeetOurTeam