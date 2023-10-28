type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="chooseYourLang">
        <div className="ru"></div>
        <div className="ua"></div>
        <div className="eng"></div>
        <div className="fr"></div>
      </div>

      <div>
        <a className="number" href="#">
          0 800 601 007
        </a>
      </div>

      <div className="terminalnumber">№1140235</div>
      <div className="time">21:00</div>
    </div>
  );
}
