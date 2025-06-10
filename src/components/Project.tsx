type Props = {
  info: {
    id: number;
    name: string;
    description: string;
    stack: string[];
    img: string;
    link: string;
  };
};

function Project({ info }: Props) {
  return (
    <div className="single-project-container">
      <div className="project-img-container">
        <img src={info.img} alt="" />
      </div>
      <div className="project-info-container">
        <div className="flex-info-holder">
          <h3>{info.name}</h3>
          <p>{info.description}</p>
        </div>
        <div>
          <a href={info.link} className="btn-live-cont" target="_blank">
            <p className="live-preview">LIVE PREVIEW</p>
          </a>
        </div>
        <div className="exp-stack-container">
          {info.stack.map((item) => (
            <div className="exp-skill-single">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
