import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";


const projects = {
  1: {
    title: "GKSS Website",
    image: projectOne,
    description: (
      <>
        <p>
           This is a modern, full-stack SvelteKit web application styled with Tailwind CSS and DaisyUI. Supabase handles backend services including authentication, database, and storage.

          This project is maintained under the MIT License and will be made public to encourage collaboration. Contributions are welcome — all code changes are reviewed before being merged 
        </p>
      </>
    ),
    github: "https://github.com/NWU-VAAL-GKSS/nwu_vaal_gkss.git",
    demo: "https://nwu-vaal-gkss.netlify.app/",
  },
  2: {
    title: "E-Commerce Windows App",
    image: projectTwo,
    description: (
      <>
        <p>
          A windows form app where users can buy tech gadgets and receiver their goods via delivery. ASP.NET C# strictly.
        </p>
      </>
    ),
    github: "https://github.com/tibz-dev/MM-TECH-E-COMMERCE-SYSTEM.git",
    demo: "https://github.com/tibz-dev/MM-TECH-E-COMMERCE-SYSTEM.git",
  }
};

export default projects;
 