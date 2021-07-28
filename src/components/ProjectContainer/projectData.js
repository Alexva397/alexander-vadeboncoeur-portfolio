import GunSAFE from "./images/gunSAFE.png";
import TechBlog from "./images/tech-blog.png";
import RonGH from "./images/rons-grub-hub.png";
import GoogBK from "./images/google-books.png";
import DIYsol from "./images/the-DIY-solution.png";

const projectData  = [
    {
        id: 1,
        title: "The DIY Solution",
        desc: "All in one app to track and manage your DIY projects.",
        tech: "MongoDB/Express/React/Node.js/Mongoose/Passportjs/Material-ui",
        img: DIYsol,
        live: "https://warm-caverns-74106.herokuapp.com/",
        repo: "https://github.com/Alexva397/the-diy-solution",
        
    },
    {
        id: 2,
        title: "Google Books Search",
        desc: "A full stack MERN app allowing users to search for their next read and save books for later.",
        tech: "MongoDB/Express/React/Node.js/Mongoose/Material-ui",
        img: GoogBK,
        live: "https://afternoon-retreat-30126.herokuapp.com/",
        repo: "https://github.com/Alexva397/react-google-books-app",
        
    },
    {
        id: 3,
        title: "GunSAFE",
        desc: "Provides gun owners with safety instructions, education and a place to safely log their firearms.",
        tech: "Node.js/MySQL/Sequelize/Express/Handlebars/Bootstrap",
        img: GunSAFE,
        live: "https://powerful-bastion-48444.herokuapp.com/",
        repo: "https://github.com/philipperkins2020/Project2-gunSAFE",
        
    },
    {
        id: 4,
        title: "Tech Blog",
        desc: "A Blog site for users to write about tech and interact with other users.",
        tech: "Node.js/MySQL/Sequelize/Express/Handlebars/BootStrap",
        img: TechBlog,
        live: "https://shielded-refuge-24199.herokuapp.com/",
        repo: "https://github.com/Alexva397/tech-blog",
        
    },
    {
        id: 5,
        title: "Ron's Grub Hub",
        desc: "A fun restaurant locator themed after Ron Swanson from NBC's Parks and Recreation.",
        tech: "jQuery/Materialize/3rd Party APIs",
        img: RonGH,
        live: "https://klay824.github.io/rons-grub-hub/",
        repo: "https://github.com/klay824/project-1",
        
    },
    // {
    //     id: 5,
    //     title: "",
    //     desc: "",
    //     tech: "",
    //     img: ,
    //     live: "",
    //     repo: "",
        
    // },
];

export default projectData;