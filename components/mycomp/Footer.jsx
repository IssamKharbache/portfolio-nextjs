import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
const Footer = () => {
  return (
    <div className="container font-outfit font-bold  mt-14 bottom-0 mx-auto pb-6">
      <div className="flex flex-col gap-4 justify-center items-center mb-8 md:flex-row md:justify-between  ">
        {/* Logo */}
        <p className="text-md font-normal text-gray-500">
          ©2024 Issam Kharbache
        </p>
        <nav className="flex gap-4 items-center">
          <Link
            className="hover:text-accent text-lg duration-200"
            href="/about"
          >
            About
          </Link>
          <span className="text-4xl font-extralight text-gray-600">/</span>
          <Link
            className="hover:text-accent text-lg duration-200"
            href="/projects"
          >
            Projects
          </Link>
          <span className="text-4xl font-extralight text-gray-600">/</span>
          <Link
            className="hover:text-accent text-lg duration-200"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-8">
          <Link target="_blank" href="https://github.com/IssamKharbache">
            <FaGithub className="w-8 h-8 hover:text-[#6e5494] duration-200" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/issam-kharbache/"
          >
            <FaLinkedin className="w-8 h-8 hover:text-[#0077B5] duration-200" />
          </Link>
          <Link target="_blank" href="mailto:issamkharbache2@gmail.com">
            <FaEnvelope className="w-8 h-8 hover:text-red-500 duration-200" />
          </Link>

          <Link target="_blank" href="https://buymeacoffee.com/issamkharbo">
            <SiBuymeacoffee className="w-8 h-8 hover:text-yellow-400 duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
