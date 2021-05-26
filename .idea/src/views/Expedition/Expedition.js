import "../styles.css";
import Header from "../../modules/Global/Header";

function Expedition() {
  const elements = [
    ["One", "20.04.78"],
    ["Two", "15.06.78"],
    ["Three", "18.03.81"],
    ["Four", "5.10.79"],
    ["Five", "01.03.77"],
    ["Six", "02.04.81"],
    ["Seven", "25.03.79"],
    ["Eighth", "12.10.81"],
    ["Nine", "15.11.54"],
    ["Ten", "11.12.78"],
  ];
  const items = [];

  for (let i = 0; i < elements.length; i++) {
    items.push(
      <div className="sub-content" href="/">
        <a>
          <p className="search-text">{elements[i][0]}</p>
          <p className="right-data">{elements[i][1]}</p>
        </a>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="content">
        <div className="header">Expedition</div>
        {items}
      </div>
    </div>
  );
}

export default Expedition;
