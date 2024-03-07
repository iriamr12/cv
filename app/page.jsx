import Recipes from "./components/Recipes";
import Paleta from "./components/Paleta";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Panel from "./components/Panel";


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
              <h2 className="text-2xl mb-6">A full-stack software engineer</h2>
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
                    <a href="malito:iria.moreno12@gmail.com" target="_blank">
                    <button className="w-14 h-14 m-2 bg-plain-beige rounded-full flex justify-center items-center"><MdEmail className="text-dark-pomegranade w-8 h-8"/></button>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </section>


        <section id="second-section" className="bg-plain-beige h-96 text-dark-pomegranade flex justify-center items-center ">
          <div className="px-80">
              <h1>About Me</h1>
              <p>Hi! It's Iria a political scientist into tech.
                It may seem weird but here I am. I graduate as
                political scientist and after that I deepen in
                the area by joining a Master's degree in Government
                and Public Administration which I accomplished
                exposing my final thesis based on the study of the
                Digital Public Administration.</p>
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
      
        <section id="fourth-section" className="bg-plain-light-blue h-96 text-plain-dark-blue flex justify-center items-center">
          <div className="border-solid">
            <Recipes />
          </div>
          
        </section>
    </div>
    
      
    </>
  ); 
}

