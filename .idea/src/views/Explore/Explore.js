import "../styles.css";
import Header from "../../modules/Global/Header";

function Explore() {
  const elements = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eighth",
    "Nine",
    "Ten",
  ];
  const items = [];

  for (let i = 0; i < elements.length; i++) {
    items.push(
      <div className="sub-content" href="/">
        <a className="search-text">{elements[i]}</a>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="content">
        <div className="header">Explore</div>
        {items}
      </div>
    </div>
  );
}

export default Explore;
