import LogoBanner from '../assets/medal-image.jpeg'

const SectionCTA = () => {
    return (
        <>
        <main className="main-section">
            <section className="section-container">
                {/* CTA Text */}
                <div className="section-container-text-cta">
                    <strong>Welcome to Niltech Edu</strong>
                    <h2 className="text-cta-title">Be the Best</h2>
                    <h2 className="text-cta-title-heading">Learn from the best</h2>
                    <p className="text-cta-description">We Developers belive learning from the best is the best way to become the software developer</p>
                    <button className="button-cta"><a href="#" className="button-link">Book Demo </a></button>
                </div>
                {/* End of CTA text */}

                {/* Image Banner */}
                <div className="section-container-image">
                    <img src={LogoBanner} alt="Medal Image know for the sucess of the students" />
                </div>
                {/* End of Image banner */}
            </section>
        </main>
        </>
    )
}


export default SectionCTA