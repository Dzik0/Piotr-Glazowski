type Props = {
  icon: string;
  name: string;
};

function LanguageBox({ icon, name }: Props) {
  return (
    <div className="stack-holder">
      <div className="stack-icon-holder">
        <img src={icon} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default LanguageBox;
