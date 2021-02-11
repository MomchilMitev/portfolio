import './Project.scss';

const Project = ({ project }) => {
  return (
    <section className="project">
      <img
        className="project__thumbnail"
        src={project.thumbnail}
        alt="project thumbnail"
      />
      <section className="project__info">
        <h2 className="project__name">{project.name}</h2>
        <p className="project__description">{project.description}</p>
        <a className="btn" href={project.url} target="_blank" rel="noreferrer">
          visit website
        </a>
      </section>
    </section>
  );
};

export default Project;
