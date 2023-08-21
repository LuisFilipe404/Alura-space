import React from "react";
import Tags from "../tags";
import "../../styles/gallery.scss";
import Cards from "./cards";

export default function Gallery() {
  return (
    <section className="galeria">
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards />
    </section>
  );
}
