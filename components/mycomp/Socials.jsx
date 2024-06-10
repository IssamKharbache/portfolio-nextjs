import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/IssamKharbache" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/issam-kharbache/",
  },
  {
    icon: <SiBuymeacoffee size={20} />,
    path: "https://buymeacoffee.com/issamkharbo",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            className={iconStyles}
            href={item.path}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
