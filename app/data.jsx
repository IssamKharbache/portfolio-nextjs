export const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "projects",
    path: "/projects",
  },

  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const footerNavLinks = [
  {
    name: "github",
    link: "https://github.com/IssamKharbache",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/issam-kharbache/",
  },
  {
    name: "Email",
    link: "mailto:issamkharbache2@gmail.com ",
  },
  {
    name: "Support me",
    link: "https://buymeacoffee.com/issamkharbo",
  },
];

export const projects = [
  {
    //shopay ecomm
    id: 1,
    num: "01",
    category: "fullstack",
    title: "Shopay",
    color: "from-black to-[#0F2027]",
    description:
      "Shopay is a multivendor ecommerce platform where clients can sell and buy multiple and different products.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Nextauth",
      },
      {
        name: "Redux",
      },
      {
        name: "MongoDb",
      },
      {
        name: "Prisma",
      },
    ],
    image: "/shopaye.png",
    github: "https://github.com/IssamKharbache/Shopay-multivendor",
    live: "https://shopay-multivendor.vercel.app/",
  },
  {
    //foodify
    id: 2,
    num: "02",
    category: "frontend",
    title: "Foodify",
    color: "from-[#0F2027] to-[#203A43] to-[#2C5364]",
    description:
      "Foodify is a restaurent front end project built by next js and framer motion",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Framer motion",
      },
    ],
    image: "/foodify.png",
    github: "https://github.com/IssamKharbache/Foodify",
    live: "https://foodify-ruddy.vercel.app/",
  },

  {
    id: 3,
    num: "03",
    category: "front-end",
    color: "from-[#2C5364] to-[#C5796D]",
    title: "Royal arc",
    description:
      "Royal arc is an example of a full fledge marketing agency that specializes in branding, web design, and digital marketing.. ",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Framer motion",
      },
    ],
    image: "/royalarc.png",
    github: "https://github.com/IssamKharbache/Royal-arc",
    live: "https://royal-arc.vercel.app/",
  },
];
