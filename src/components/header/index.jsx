import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import "../../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo do alura space" />
      <div className="header__container">
        <input
          type="text"
          className="header__input"
          placeholder="O que você procura"
        />
        <img src={search} alt="icone de lupa" />
      </div>
    </header>
  );
}
