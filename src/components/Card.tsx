import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';

function Card() {
  return (
    <div className="card" id="about">
      <div className="top-card">
        <h2>
          Piotr
          <br />
          Głazowski
        </h2>
        <div className="icon-holder">
          <div className="icon">
            <img src={mail} alt="" />
          </div>
          <div className="icon">
            <img src={github} alt="" />
          </div>
          <div className="icon">
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      <p className="location">Warsaw, Poland</p>
      <p className="info">
        I'm a <span>Full-Stack Web Developer</span> who builds websites that are
        both easy to use and pleasant to look at.
        <br />I focus on writing clean, efficient code and pay attention to the
        small details that make a big difference for users.
      </p>
    </div>
  );
}

export default Card;
