const Item = ({ show }) => {
  return (
    <article>
      <span className="time">{show.time}</span>
      {show.image ? (
        <img src={show.image} />
      ) : (
        <div className="image-placeholder">
          <span>Image pas disponible</span>
        </div>
      )}
      <div className="data">
        <h2>{show.title ? show.title : "Titre pas disponible"}</h2>
        <p className="type">{show.type || "-"}</p>
        <span className="duration">{show.duration || "?? min"}</span>
        {show.isUnseen ? (
          <span className="direct">{"\u2022 Inédit"}</span>
        ) : show.direct ? (
          <span className="direct">{`\u2022 Direct`}</span>
        ) : null}
      </div>
    </article>
  );
};

export default Item;
