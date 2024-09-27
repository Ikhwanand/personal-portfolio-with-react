import { Col } from "react-bootstrap";

/**
 * A ProjectCard component is used to represent a single project in the
 * projects section of the portfolio website. It displays an image, title, and
 * description of the project.
 *
 * @param {string} title - Title of the project to be displayed.
 * @param {string} description - Brief description of the project.
 * @param {string} imgUrl - URL of the project's image.
 * @returns {React.ReactElement} - A React element representing the project card.
 */
const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
