function Education() {
  return (
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
  )
}

export default Education