import Experience from "../components/Svg/Experience.astro";
import Gear from "../components/Svg/Gear.astro";
import Graduate from "../components/Svg/Graduate.astro";
import Projects from "../components/Svg/Projects.astro";

export const frontMatterHome = {
  title: "Home | VMOrdiales.dev",
  description:
    "Web Personal del desarrollador Víctor Manuel Ordiales García. En ella podrás encontrar información sobre él, sus proyectos y su redes sociales. ¡Bienvenido!",
  author: "Víctor Manuel Ordiales García",
};

const textHome = {
  heroSectionText: {
    supTitle: "Hola, soy",
    title: "Víctor Manuel",
    subTitle: "Ordiales García",
    descriptionSup: "Desarrollador Web Full Stack",
    descriptionSub:
      "Amante de las nuevas tecnologías y del desarollo de software",
    heroSectionButtons: [
      { bgColor: "bg-main", title: "About Me", to: "#about-section" },
      {
        bgColor: "bg-secondary",
        title: "Dowload CV",
        to: "/victor-manuel-ordiales-garcia.pdf",
        target: "__blank",
      },
    ],
  },
  mainSection: {
    mainTitle: "Bienvenido a mi",
    mainTitleTail: " Portfolio",
    description:
      "Hola! Soy Víctor Manuel Ordiales García, desarrollador web y graduado en física. Aquí hallarás detalles sobre mi educación, experiencia laboral y proyectos destacados",
    cards: [
      {
        title: "Experiencia",
        description: "Experiencia laboral y proyectos destacados",
        component: Experience,
        bgIcon: "#ca8a04",
        to: "#experience-section",
      },
      {
        title: "Educación",
        description: "Educación y formación académica",
        component: Graduate,
        bgIcon: "#0d9488",
        to: "#education-section",
      },
      {
        title: "Proyectos",
        description: "Proyectos destacados y trabajos personales",
        component: Projects,
        bgIcon: "#5b21b6",
        to: "/projects",
      },
      {
        title: "Habilidades",
        description: "Habilidades y tecnologías",
        component: Gear,
        bgIcon: "#8f1f0d",
        to: "#skills-section",
      },
    ],
  },
  aboutSection: {
    title: "Conóceme:",
    subTitle: "VMOrdiales.Dev",
    parrafos: [
      "¡Hola! Soy Víctor Manuel Ordiales García, un apasionado del desarrollo web y la física. Mi experiencia y formación en ambas disciplinas me han permitido desarrollar habilidades únicas que me permiten abordar problemas de manera innovadora y creativa",
      "Con una sólida formación en física, poseo una comprensión profunda de los principios matemáticos y científicos que gobiernan nuestro mundo. Esta base sólida proporciona una perspectiva única en el campo del desarrollo web, permitiéndome adoptar un enfoque analítico y riguroso para resolver problemas",
      "Cuento con más de dos años de experiencia en el desarrollo web, durante los cuales he participado en una amplia gama de proyectos. Desde el desarrollo de sitios web personalizados hasta la programación de scripts y la gestión de bases de datos, he adquirido habilidades versátiles que me permiten abordar desafíos complejos con confianza y eficacia",
      "Mi objetivo es seguir creciendo profesionalmente y contribuir al mundo del desarrollo web con soluciones innovadoras y de alta calidad. Estoy comprometido con el aprendizaje continuo y siempre estoy buscando nuevas oportunidades para expandir mis habilidades y conocimientos",
    ],
  },
  experienceSection: {
    title: "Experiencia",
    description:
      "Tengo más de 2 años de experiencia trabajando en proyectos tanto de frontend como de backend, además de un breve período, de dos  meses, en el que me dediqué a proyectos de machine learning",
    experience: [
      {
        title: "I +D, eCapture 3D S.L",
        date: "Abril 2021 - Junio 2021",
        description:
          "Desarrollo y análisis de algoritmos predictivos para variables climáticas, así como la investigación detallada de bases de datos relacionadas. Exploración exhaustiva de cámaras hiperespectrales y su integración en software especializado para el análisis de imágenes en contextos climáticos y medioambientales.",
        "data-date": "jn-2021",
      },
      {
        title: "Developer, Viewnext S.A",
        date: "Agosto 2021 - Febrero 2023",
        description:
          "Gestión de mantenimiento y expansión de características en el sitio público de Naturgy, en consonancia con las directrices establecidas por Oracle WebCenter Sites (OWCS). Este trabajo implica la implementación de soluciones utilizando una variedad de tecnologías, incluyendo JavaScript, jQuery, HTML, CSS, Java y JSP (JavaServer Pages), dentro del entorno de OWCS",
        "data-date": "feb-2023",
      },
      {
        title: "Developer FullStack, Viewnext S.A",
        date: "Febrero 2023 - Actualidad",
        description:
          "Además de continuar colaborando en el proyecto de portales, me he unido al equipo responsable de los portales privados de Naturgy. En este nuevo entorno, mi labor se centra en el desarrollo utilizando el Spring Framework, haciendo uso de tecnologías como Java, Spring Boot, Spring Security, Thymeleaf, HTML, CSS, JavaScript, jQuery, Bootstrap, entre otras herramientas y librerías",
        "data-date": "current",
      },
    ],
  },
  educationSection: {
    title: "Educación",
    description:
      "Uno de mis mayores logros académicos ha sido obtener el grado en Física en la Universidad de Extremadura. Además de esta titulación, he realizado numerosos cursos enfocados en el desarrollo web y el aprendizaje automático. Actualmente, sigo realizando una gran cantidad de cursos y certificaciones para seguir creciendo como profesional",
    education: [
      {
        title: "Bachiller, I.E.S Norba Caesarina",
        date: "Septiembre 2012 - Junio 2014",
        description:
          "El bachillerato científico permite adquirir los conocimientos y destrezas básicas en el ámbito científico",
        "data-date": "sep-2012",
      },
      {
        title: "Grado en Física, Universidad de Extremadura",
        date: "Septiembre 2014 - Septiembre 2021",
        description:
          "El grado en física ofrece una formación centrada en los fenómenos físicos y las leyes que los rigen, así como en las técnicas y herramientas necesarias para su estudio y análisis",
        "data-date": "sep-2014",
      },
    ],
  },
  arrayCourses: [
    {
      id: 1,
      title: "Desarrollo web completo con Html5, Css3, Js, Ajax, Php y MySql.",
      date: "Agosto 2020 - Octubre 2020 | Plataforma Web Udemy.",
      item1: "Conocimiento medios/avanzado de Htm5, Css3 y Js.",
      item2: "Conocimientos básicos de php y bases de datos relacionales.",
      item3: "Realización de númerosos proyectos.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/",
    },
    {
      id: 2,
      title: "Css Grid y Flexbox, La guía definitiva, crea + 10 proyectos.",
      date: "Octubre 2020 - Noviembre 2020 | Plataforma Web Udemy.",
      item1: "Aprendizaje de CSS.",
      item2: "Flex.",
      item3: "Grid.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/",
    },
    {
      id: 3,
      title: "Master en JavaScript: Js, Jquery, Angular y NodeJs.",
      date: "Noviembre 2020 – Enero 2021 | Plataforma Web Udemy.",
      item1: "Desarrollo web fullstack usando JavaScript.",
      item2: "Frontend: Js,Jquery,Html,Css y Angular.",
      item3: "Backend: NodeJs.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
    },
    {
      id: 4,
      title: "Master en Python: Python3, Django, Flask Y Tkinter.",
      date: "Octubre 2020 – Noviembre 2020.",
      item1: "Desarrollo web fullstack usando Python.",
      item2: "Frontend: Html y Css.",
      item3: "Backend: Django y Flask.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/master-en-python-aprender-python-django-flask-y-tkinter",
    },
    {
      id: 5,
      title: "Master en Css3: Reponsive, Sass, FlexBox, Grid Y Boostrap.",
      date: "Enero 2021 | Plataforma Web Udemy.",
      item1: "Maquetación de paǵinas web.",
      item2: "Preprocesadores: Sass y Leess.",
      item3: "Flex y Grid.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4",
    },
    {
      id: 6,
      title: "Electron JS y ReactJS: Creando un Spotify",
      date: "Marzo 2021 –Julio 2021 | Plataform Web Udemy.",
      item1: "Clone de Spotify.",
      item2: "Tecnologías Web: ReactJS, Sass y Firebase.",
      item3: "Tecnologías Desktop: ElectronJS",
      item4: "Leer más",
      url: "https://www.udemy.com/course/electron-js-y-react-js-creando-un-spotify",
    },
    {
      id: 7,
      title: "Curso Completo: Linux Bash Shell Scripting +Ejemplos Reales",
      date: "Mayo 2022.",
      item1: "Gestión de permisos: usuarios, grupos, ficheros, etc.",
      item2: "Redirecciones, tuberías, monitores de procesos,etc.",
      item3: "Fundamentos de Bash.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/shell-scripting-linux-bash",
    },
    {
      id: 8,
      title: "Curso de Tailwind CSS - Desde cero hasta profesional",
      date: "Julio 2021.",
      item1: "Maquetación de páginas web.",
      item2: "Css y Tailwind.",
      item3: "Varios proyectos.",
      horas: "5.5 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/curso-de-tailwind-css-desde-cero-hasta-profesional",
    },
    {
      id: 9,
      title: "React: De cero a experto ( Hooks y MERN )",
      date: "Agosto 2022 - Mayo 2023 | Plataforma Web Udemy.",
      item1: "TypeScript.",
      item2: "React.",
      item3: "Hooks, Custom Hooks, MERN, etc.",
      horas: "54 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/react-cero-experto",
    },
    {
      id: 10,
      title: "Next.js: El framework de React para producción",
      date: "Enero 2023 - Mayo 2023 | Plataforma Web Udemy.",
      item1: "Nextjs.",
      item2: " SSR, SSG, etc.",
      item3: "MERN, Typescript, etc.",
      horas: "46 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/nextjs-fh",
    },
    {
      id: 11,
      title: "Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+",
      date: "Enero 2023 - Mayo 2023 | Plataforma Web Udemy.",
      item1: "React.",
      item2: "Hooks, Custom Hooks, MERN, etc.",
      item3: "Nodejs, JWT, etc.",
      horas: "39.5 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/",
    },
    {
      id: 12,
      title: "JavaScript Moderno: Guía para dominar el lenguaje",
      date: "Enero 2023 - Febrero 2023 | Plataforma Web Udemy.",
      item1: "JavaScript.",
      item2: "ES6, ES7, etc.",
      item3: "Nuevas características.",
      horas: "27.5 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/javascript-fernando-herrera/",
    },
    {
      id: 13,
      title: "TypeScript: Tu completa guía y manual de mano",
      date: "Enero 2023 - Febrero 2023 | Plataforma Web Udemy.",
      item1: "TypeScript.",
      item2: "Fundamentos, etc.",
      item3: "Nuevas características.",
      horas: "9 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/typescript-guia-completa/",
    },
    {
      id: 14,
      title: "Curso de Diseño Web moderno desde cero a avanzado HTML5 y CSS3",
      date: "Diciembre 2021 | Plataforma Web Udemy.",
      item1: "HTML5.",
      item2: "CSS3.",
      item3: "Flexbox, Grid, etc.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/curso-diseno-web-moderno-desde-cero/",
    },
    {
      id: 15,
      title: "React Pro: Lleva tus bases al siguiente nivel",
      date: "Agosto 2022 - Mayo 2023 | Plataforma Web Udemy.",
      item1: "Formik, lazyload y módulos",
      item2:
        "Versionado semántico, Storybook y patrones de creación de componentes.",
      item3: "TypeScript, Github Actions y formularios dinámicos",
      horas: "26.5 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/react-pro",
    },
    {
      id: 16,
      title: "Spring framework  & Spring Boot desde cero a experto",
      date: "Marzo 2023 - Abril 2023 | Plataforma Web Udemy.",
      item1: "Spring MVC, JPA y Seguridad",
      item2: "Spring Boot + JPA + jQuery + Restful.",
      item3: "Spring con Angular + JPA + Restful.",
      horas: "40.5 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/spring-framework-5",
    },
    {
      id: 17,
      title: "Nest: Desarrollo backend escalable con Node",
      date: "Enero 2024 - Marzo 2024 | Plataforma Web Udemy.",
      item1: "Restful, GraphQL y Websockets",
      item2: "TypeScript, MongoDB y Postgres",
      item3: "Auth, JWT, OAuth y más",
      horas: "30 horas.",
      item4: "Leer más",
      url: "https://www.udemy.com/course/nest-framework/",
    },
  ],
  skillsSection: {
    title: "Habilidades",
    description:
      "Durante mi trayectoria profesional y estudiantil, he adquerido númerosos conocimientos tanto en el ámbito de la física como en el desarrollo de sofwate. A continuación, se muestran las tecnologías y habilidades que he adquirido/dominado durante todo este proceso",
  }
};

export const {
  heroSectionText,
  mainSection,
  aboutSection,
  experienceSection,
  educationSection,
  arrayCourses,
  skillsSection
} = textHome;
