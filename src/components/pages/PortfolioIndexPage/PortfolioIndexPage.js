import './PortfolioIndexPage.scss';
import projects from '../../../assets/projects';
import Project from '../../Project/Project';
import Contact from '../../Contact/Contact';

const PortfolioIndexPage = () => {
  const renderContent = () => {
    console.log(projects);
    return projects.map((project) => {
      return <Project key={project.name} project={project} />;
    });
  };

  return (
    <>
      {renderContent()}
      <Contact />
    </>
  );
};

export default PortfolioIndexPage;
