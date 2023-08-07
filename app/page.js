import { headers,cookies } from 'next/headers'
import Image from 'next/image';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Chat from '@/components/Chat';

export default function Home() {
  const headersList = headers()
  const window = headersList.get('host')

  let cookieValue = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  
  return (
    <>
      <main>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Ronan Lee</span>
                <span className="d-none d-lg-block">
                  <Image className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/1.webp" width={200}
                    height={200}
                    alt="Ronan lee" />
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#ai">RONAN</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                </ul>
              </div>
          </nav>
          <div className="container-fluid p-0">
          
            <section className="resume-section" id="ai">
              <div className="resume-section-content">
                {/* <h2 className="mb-5">AI</h2> */}
               
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5 ai-script">
                  <div id="root_ai" style={{width:'100%'}}>
                    <div id="top-container" className="cai-main-wrapper relative  text-black">
                      <Chat window={window} cookieValue={cookieValue} />
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
            <hr className="m-0" />
            <About />
            <hr className="m-0" />
            <Experience />
            <hr className="m-0" />
            <Skills />
            <hr className="m-0" />
            <Education />
            
          </div>
        </div>
      </main>
    </>
  )
}
