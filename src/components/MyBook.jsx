import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover.jsx";
import coverImg from "../assets/coverImg.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from  "./Skills/Skills.jsx";
import Services from "./Services/Services.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectImage1 from "../assets/ProjectImg1.png";
import ProjectImage2 from "../assets/ProjectImage2.png";
import ProjectImage3 from "../assets/ProjectImage3.png";


const ProjectData =[
        {
            name:"Truffle Treasures",
            description:"A fully responsive website built with Bootstrap, JavaScript, HTML, and CSS. Designed for seamless performance across all devices.",
            image: ProjectImage1,
            previewLink:"https://project1-treasures.netlify.app/",
        },
        {
            name:"Rise & Shine",
            description:"A simple website created using HTML and CSS. Designed for smooth user experience.",
            image: ProjectImage2,
            previewLink:"https://shine-unique.netlify.app/",
        }
]
const ProjectData2 =[
    {
        name:"FitLife",
        description:"A fully responsive website built with Reactjs. Designed for seamless performance across all devices.",
        image: ProjectImage3,
        previewLink:"https://yourfitnessdiet.netlify.app",
    },
   
]



    function MyBook(props) {
      return (
       
    
   
    
   <HTMLFlipBook width={500} height={600} showCover={true}>
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
        
      </Page>
      <Page number={2}>
        <FirstPage/>
        
      </Page>
      <Page number={3}>
       <Skills/>
      </Page>
      <Page number={4}>
        <Services/>
      </Page>
      <Page number={5}>
        <About/>
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData}/>
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2}/>
      </Page>
      <Page number={8}>
        <Cover coverImg={coverImg} title={"Thanks"}/>
      </Page>
    </HTMLFlipBook>
   
  );
}
  

export default MyBook;

