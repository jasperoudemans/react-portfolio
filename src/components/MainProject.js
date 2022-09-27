const MainProject = ({ src, title, alt, href }) => {
  return (
    <div className="relative big">
      <div className="label">
        <h4>
          <a href={href}>{title}</a>
        </h4>
      </div>
      <img src={src} alt={alt} class="img" id="project1" />
      <div className="filter">
        <a href={href}></a>
      </div>
    </div>
  );
};

export default MainProject;
