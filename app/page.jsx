import Recipes from "./components/Recipes";
import Paleta from "./components/Paleta";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Panel from "./components/Panel";
import { IoIosDownload } from "react-icons/io";


export default function Home() {

  
  return (
    <>
    <div>
      <div className="fixed top-0 left-10 h-full flex items-center justify-center">
       <Paleta /> 
      </div>

        <section id="first-section" className="bg-dark-pomegranade h-96 text-plain-beige flex justify-center items-center" >
          <div>
              <h1 className="text-5xl mb-8" > Hello, I'm Iria Moreno Rodriguez</h1>
              <h2 className="text-2xl mb-6">A full-stack software developer</h2>
              <div>
                <ul className="flex flex-row justify-center">
                  <li>
                    <a href="https://www.linkedin.com/in/iria-moreno-rodriguez/" target="_blank">
                    <button className="w-14 h-14 m-2 bg-plain-beige rounded-full flex justify-center items-center"><FaLinkedin className="text-dark-pomegranade w-8 h-8"/></button>
                      </a>
                  </li>
                  <li>
                    <a href="https://github.com/iriamr12" target="_blank">
                    <button className="w-14 h-14 m-2 bg-plain-beige rounded-full flex justify-center items-center"><FaGithub className="text-dark-pomegranade w-8 h-8"/></button>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:iria.moreno12@gmail.com" target="_blank" download>
                    <button className="w-14 h-14 m-2 bg-plain-beige rounded-full flex justify-center items-center"><MdEmail className="text-dark-pomegranade w-8 h-8"/></button>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <a href="/IMR_CV.pdf" target="_blank">
                  <button className="flex items-center px-3 py-2 mt-10 w-64 rounded border border-plain-beige"><IoIosDownload className="w-8 h-8 mr-4 ml-6"/>Download my CV </button>
                </a>
                 
              </div>
          </div>
        </section>


        <section id="second-section" className="bg-plain-beige h-96 text-dark-pomegranade flex justify-center items-center ">
          <div className="px-80">
              <h1 className="text-3xl mb-10">About Me</h1>
              <p className="mb-8">Hi! It's Iria Moreno, <span className="font-bold">a political scientist into tech</span>. It may seem weird, but here I am! I graduated as a political scientist and after that I deepen in the area by joining a Master's degree in Government and Public Administration, which I accomplished exposing my final thesis based on the study of the Spanish Digital Public Administration. The inefficiencies identified during the process pushed me to learn the technical way to solve them. After some time, study and effort, I became Software developer.

</p>
                <a className="text-xs underline hover:underline-offset-4" href="/ANÁLISIS DE LA COMPLEJIDAD CONCEPTUAL Y TÉCNICA DE LA IDENTIDAD DIGITAL EN ESPAÑA.pdf" target="_blank">If your Duolingo lessons have paid off, check out my final master's thesis</a>
          </div>
        </section>


        <section id="third-section"className="bg-plain-dark-blue h-custom text-white flex justify-center items-center content-center">
          <div>
            <h1 className="text-3xl mb-10">Technologies</h1>
              <div className="flex h-64">
                <Panel />
              </div>
          </div>
            
        </section>
      
        <section id="fourth-section" className="bg-plain-light-blue text-plain-dark-blue flex justify-center items-center pt-10 pb-10">
          <div className="border-solid">
            <h1 className="text-3xl mb-10 text-bold">Projects</h1>
            <Recipes />
          </div>
          
        </section>
    </div>
    
      
    </>
  ); 
}

