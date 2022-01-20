import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-green-900">
        sunnyside
      </h1>
      <ul className="flex flex-row justify-center">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul>
        <li>
          <i className="fas fa-facebook" />
          <FontAwesomeIcon icon="fas fa-facebook" />
          <i className="fa fa-camera-retro fa-lg" />
        </li>
      </ul>
    </div>
  );
}
