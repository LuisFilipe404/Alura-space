import React from "react";
import "../../styles/tags.scss";
import fotos from "../gallery/fotos.json";

export default function Tags({ tags, filtraFotos, setItems }) {
  return (
    <div className="tags">
      <p>Filtre por tags:</p>
      <ul className="tags__lista">
        {tags.map((tag) => (
          <li key={tag} onClick={() => filtraFotos(tag)}>
            {tag}
          </li>
        ))}
        <li onClick={() => setItems(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
