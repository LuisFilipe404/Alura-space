import React from "react";
import popularPhotos from "./popular-photos.json";
import "../../styles/popular.scss";
export default function Popular() {
  return (
    <aside className="populares">
      <h2>Populares</h2>
      <ul className="populares__imagens">
        {popularPhotos.map((popular) => (
          <li key={popular.id}>
            <img src={popular.path} alt={popular.alt} />
          </li>
        ))}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
