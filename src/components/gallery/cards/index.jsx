import React from "react";
import open from "../../../assets/open.png";
import favorito from "../../../assets/favorito.png";

export default function Cards({ fotos }) {
  return (
    <ul className="galeria__cards">
      {fotos.map((foto) => {
        return (
          <li key={foto.id} className="galeria__card">
            <img
              className="galeria__imagem"
              src={foto.imagem}
              alt={foto.titulo}
            />
            <p className="galeria__descricao">{foto.titulo}</p>
            <div>
              <p>{foto.creditos}</p>
              <span>
                <img src={favorito} alt="ícone coração de curtir" />
                <img src={open} alt="Ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
