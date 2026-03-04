const Item = ({ time, title, type, image, duration, direct }) => {
  return (
    <article>
      <span className="time">{time}</span>
      {image ? (
        <img src={image} />
      ) : (
        <div className="image-placeholder">
          <span>Image pas disponible</span>
        </div>
      )}
      <div className="data">
        <h2>{title ? title : "Titre pas disponible"}</h2>
        <p className="type">{type || "-"}</p>
        <span className="duration">{duration || "?? min"}</span>
        {direct && <span className="direct">• Direct</span>}
      </div>
    </article>
  );
};

export default Item;
