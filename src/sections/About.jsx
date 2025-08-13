import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx';
import { useState } from 'react';

const About = () => {

    const [hasCopied,setHasCopied] = useState(false); 

    const handleCopy=()=>{
        navigator.clipboard.writeText('pratibhavishlavath2564@gmail.com')
        setHasCopied(true);

        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }

  return (
    <section className='c-space my-20 md:mt-20 lg:mt-28'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>

                    <img src="/assets/grid.png" alt="grid-1" className=' w-full sm:h-[276px] h-fit object-contain' />
                  
                    <div>
                        <p className='grid-headtext'>
                            Hi, I am Pratibha
                        </p>
                        <p className='grid-subtext'>
                          I’m a final-year B.Tech Computer Science student with a strong foundation and passion for Web Development, DSA, and MLOps. I love solving problems daily to sharpen my skills and constantly challenge myself with new projects. I’m a fast learner who enjoys exploring different technologies and applying them creatively. My goal is to build impactful, unique projects with scalability in mind, contributing to solutions that make a real difference.
                        </p>
                    </div>

                </div>

            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                            TechStack
                        </p>
                        <p className='grid-subtext'>
                          <b>1. Programming Languages</b> : Java,C,python
                          <br/>
                            <b>2. Web Dev: </b>
                             Html,Css,js,React,node js,git and github,Tailwind,Bootstrap,THREE JS,
                          <br/>
                          <b>3. DSA & Problem Solving</b>
                          <br/>
                          <b>4.  AI/ML: </b>
                            MachineLearning ALgo's and MLOps
                          <br/>
                          <b>
                            5. Other Skills :
                          </b>
                             Debugging and problem solving mindset,building projects and sharing in github

                        </p>
                    </div>
                </div>
            </div>
                    <div className="col-span-1 xl:row-span-4">
        <div className="grid-container">
            
            <div className="rounded-3xl w-full sm:h-[326px] h-[326px] flex justify-center items-center overflow-hidden">
            <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
            </div>

            <div className="mt-6">
            <p className="grid-headtext">
                🌍 Coding Across Borders, Creating Without Limits
            </p>
            <p className="grid-subtext mt-2">
              <b>1. Full-stack development, AI/ML, and problem-solving enthusiast</b> with a passion for building solutions that connect ideas globally.
             <br/>
2. Create impactful projects that merge creativity and technology for real-world impact.

 <br/>

3. Skilled in designing engaging user experiences and writing efficient, scalable code.

 <br/>

4. Experienced in tackling complex algorithms and implementing innovative solutions.
 <br/>
5. Actively share projects and open-source work on GitHub.


            </p>
            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
        </div>
        </div>
             <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. 
                
                I enjoy exploring new technologies, and enhancing my skills.
                 I’m passionate about turning ideas into working solutions through code.  
                  
                   <br/>
                  <br/>

                    <li>I love transforming ideas into real-world applications through code.</li>
                     <br/>
    <li>I enjoy solving challenging problems and exploring innovative solutions.</li>
    <br/>
    <li>I am constantly learning new tools, frameworks, and technologies.</li>
     <br/>
    <li>Coding is my creative outlet where logic meets imagination.</li>
     <br/>
    <li>I aim to write clean, efficient, and maintainable code.</li>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container flex items-center gap-2  flex-wrap overflow-hidden" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white overflow-x-auto whitespace-nowrap">pratibhavishlavath2564@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
           </div>
    </section>
  )
}

export default About