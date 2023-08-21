import Header from "../../components/header";
import Menu from "../../components/menu";
import banner from "../../assets/banner.png";
import "../../styles/banner.scss";
import Gallery from "../../components/gallery";
import "../../styles/home.scss";

export default function Home() {
  return (
    <>
      <Header />;
      <main>
        <section className="principal">
          <Menu />
          <div className="principal__imagem">
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
      <div className="gallery__container">
        <Gallery />
      </div>
    </>
  );
}
