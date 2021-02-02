import './Project.scss';
import { Link } from 'react-router-dom';

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
        <Link className="btn" to={{ pathname: project.url }} target="_blank">
          visit website
        </Link>
      </section>
    </section>
  );
};

export default Project;
