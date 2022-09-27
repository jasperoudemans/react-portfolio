const Project = ({ title, src, alt, href }) => {
  return (
    <div className="relative small">
      <div className="label">
        <h4>
          <a href={href}>{title}</a>
        </h4>
      </div>

      <img src={src} alt={alt} className="img2" />
      <div className="filter">
        <a href={href}></a>
      </div>
    </div>
  );
};

export default Project;
