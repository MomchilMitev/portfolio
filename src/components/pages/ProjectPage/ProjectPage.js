import "./ProjectPage.scss";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  let { id } = useParams();

  return <div>ProjectPage project id {id}</div>;
};

export default ProjectPage;
