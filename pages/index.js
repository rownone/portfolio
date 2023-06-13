import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ronan Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="App">
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Ronan Lee</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/img/1.jpg" alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                </ul>
            </div>
        </nav>
		
		<div className="container-fluid p-0">
			 <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Ronan
                        <span className="text-primary">Lee</span>
                    </h1>
                    <div className="subheading mb-5">
                        B6 L25, Samantha Homes, Bago Gallera Davao City, Philippines <br/> 
                        <a href="mailto:ronan.t.lee@gmail.com">ronan.t.lee@gmail.com</a>
                    </div>
                    <p className="lead mb-5">More than 18 years in computer programming and web application development experience.<br/>
					Worked on the research, development and implementation of blockchain applications using Ethereum and Handshake blockchain technologies.
					</p>
                    
                </div>
            </section>
            <hr className="m-0" />
			
			<section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Contrib.com</div>
                            
							<ul>	
								<li>Led development of blockchain-integrated web applications</li>
								<li>Created and deployed various contracts, including Non-Fungible Tokens (NFT), ERC20 Fungible Tokens, Lotteries, Voting systems, Airdrops, and Token Sales on Ethereum and Binance networks</li>
								<li>Developed diverse website frameworks such as Leads, Bids, Eservice, Forums, For Sale platforms, Help Desks, Surveys, Redirects, and Wordpress websites, deployed across over 20,000 domains</li>
								<li>Designed and implemented Web Scraper add-ons for Firefox and Chrome</li>
								<li>Constructed Widget tools to enhance lead management and acquisition for company websites</li>
								<li>Developed and deployed APIs using serverless compute service with AWS Lambda functions</li>
								<li>Built a Task Manager application to facilitate efficient project task management and updates for employees</li>
								<li>Created an Autoresponder application for updating and sending emails to leads obtained from framework websites</li>
								<li>Managed acquired Top Level Domains from Handshake, developing a user interface for easy participation in bidding and updating records</li>
							</ul>
							
							<div className="subheading mb-3">Projects Developed</div>
						
							<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
								<div className="flex-grow-1">
									<ul className="fa-ul mb-0">
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://realtydao.com">realtydao.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://contrib.com">contrib.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://vnoc.com">vnoc.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://contrib.com">contrib.io</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://rdao.com">rdao.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://applications.com">applications.net</a>
										</li>
										
										
										
									</ul>
								</div>
								<div className="flex-grow-1">
									<ul className="fa-ul mb-0">
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://handyman.com">handyman.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://musicchallenge.com">musicchallenge.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://acting.com">acting.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://virtualinterns.com">virtualinterns.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://globalventures.com">globalventures.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://ichallenge.com">ichallenge.com</a>
										</li>
										
										
									</ul>
								</div>
								<div className="flex-grow-1">
									<ul className="fa-ul mb-0">
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://iconsultants.com">iconsultants.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://musicring.com">musicring.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://venturecamp.com">venturecamp.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://streamblog.com">streamblog.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://muzicskool.com/">muzicskool.com</a>
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											<a target="_blank" rel="noreferrer" href="https://venturecamp.com">venturecamp.com</a>
										</li>
									</ul>
								</div>
								
								
							</div>
						
						
						</div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2010 - Present</span></div>
                    </div>
					<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Scanpointusa.com</div>
                            
								<ul>
									<li>Developed an Easy Admin web application using C#.NET for the server-side and ASP.NET MVC for the client-side, enabling efficient management of company documents and records</li>
									<li>Implemented Web Services to retrieve and update server-side data</li>
								</ul>
							
							<div className="subheading mb-3">Project</div>
						
							<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
								<div className="flex-grow-1">
									<ul className="fa-ul mb-0">
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Easy Admin Web
										</li>
										
									</ul>
								</div>
							</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">April 2014 - September 2014</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Software Engineer</h3>
                            <div className="subheading mb-3">A5 Com Inc.</div>
                            <ul><li>Developed front-end websites using Ext JS framework</li>
								<li>Conducted QA testing for assigned modules</li>
								<li>Contributed to planning and implementing the software product's process flow</li>
								</ul>
							
							<div className="subheading mb-3">Project</div>
						
							<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
								<div className="flex-grow-1">
									<ul className="fa-ul mb-0">
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Iehip Digital Signage
										</li>
										
									</ul>
								</div>
							</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">March 2008 - January 2010</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web/Application Developer </h3>
                            <div className="subheading mb-3">iThink Technologies Inc.</div>
                            <ul><li>Developed web and window-based business projects based on client and system requirements as defined by the Project System Analyst</li>
								<li>Collaborated with teams of 3 to 5 members for each project</li>
								<li>Conducted QA testing for assigned modules</li>
								<li>Created dedicated database tables for each assigned module</li>
								<li>Handled deployment, installation, maintenance, and provided technical support on client sites</li>
							</ul>
							
							<div className="subheading mb-3">Projects Developed</div>
						
							<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
								<div className="flex-grow-1">
									<ul className="fa-ul mb-0">
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											May Bank - Real Estate & Other Properties Owned & Acquired Management System (ROPOA) 
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Globe Telecom – Loan Management System (LMS)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											World Bank – Fixed Asset and Inventory System (FAIS)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Ford Philippines – Product Document Management System (PDMS)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Meralco – iFleet Management System (iFleet)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Bank of Commerce – Inventory and Fixed Asset Management System (IFAMS)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Borgs Photoshop – Inventory and Sales Management System (ISMS)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											FoodZone Inc. – Inventory and Sales Management System (ISMS)
										</li>
										<li>
											<span className="fa-li"><i className="fas fa-check"></i></span>
											Odessa Inc. – Automated Financial System (AFS)
										</li>
										 
									</ul>
								</div>
							</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">March 2004 - Febaruary 2008</span></div>
                    </div>
					<div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Computer Technician</h3>
                            <div className="subheading mb-3">Korean Synthesis Electronic Inc.</div>
                           <ul><li>Assemble, install software and troubleshot Computer Hardware</li></ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2003 - October 2003</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Computer Graphics Operator </h3>
                            <div className="subheading mb-3">Nakayama Technology Corporation</div>
                            <ul><li>Modified Images of House and Building Color and texture using Adobe Photoshop and Raku-raku Graphics software. </li></ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2003 - October 2003</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
			
			<section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University of Mindanao</h3>
                            <div className="subheading mb-3">Bachelor of Science in Computer Science</div>
                           
                           
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 1999 - March 2003</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Davao City National High School </h3>
                            
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 1995 - March 1999</span></div>
                    </div>
					<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Bucana Elementary School</h3>
                            
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 1989 - March 1995</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
			<section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
					<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
					
						<div className="flex-grow-1">
							<ul className="fa-ul mb-0">
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Web3
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Solidity
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Reactjs
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Nodejs
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Truffle
								</li>
							</ul>
						</div>
						<div className="flex-grow-1">
							<ul className="fa-ul mb-0">
								
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Php
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Yii
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Wordpress
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Javascript
								</li>
							</ul>
						</div>
						<div className="flex-grow-1">
							<ul className="fa-ul mb-0">
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Microsoft Visual C#.Net
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									ASP.Net
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Visual Basic 6.0
								</li>
							</ul>
						</div>
                    </div>
					
                    <div className="subheading mb-3">Blockchain</div>
					<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Ethereum
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Handshake
                        </li>
                    </ul>
					</div>
					
					<div className="subheading mb-3">Database</div>
					<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            MySQL
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Microsoft SQL Server 2005/2000
                        </li>
						<li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Oracle 8i/10g
                        </li>
						<li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            MS Access 
                        </li>
                    </ul>
					</div>
                </div>
            </section>
            <hr className="m-0" />
		</div>
	  
    </div>
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
       
      `}</style>
    </div>
  )
}
