import React from 'react'

const LeaveAMessage = () => {
  return (
    <section className="leave-a-message">

    <div className="container">
        <h2>Leave us a message<br /> for any information.</h2>
        <form>
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Email*" />
            <textarea rows="4" cols="50" placeholder="Your Message*"></textarea>
            <button className="btn-yellow">Send message <i className="fa-solid fa-arrow-up-right"></i></button>
        </form>
        </div>
</section>

  )
}

export default LeaveAMessage