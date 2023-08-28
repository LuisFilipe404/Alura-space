import React from "react";
import Tags from "../tags";
import "../../styles/gallery.scss";
import Cards from "./cards";
import fotos from "./fotos.json";
import { useState } from "react";

export default function Gallery() {
  const [items, setItems] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtraFotos = (tag) => {
    const newPhotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });

    setItems(newPhotos);
  };

  return (
    <section className="galeria">
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItems={setItems} />
      <Cards fotos={items} />
    </section>
  );
}
