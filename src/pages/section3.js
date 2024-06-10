const SectionThree = () => {
    return (
        <div className="section_one_main">
            <div className="section_wrapper">
                <div className="">
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="video_container_section3">
                    <img src="/assets/device-pile.png" alt="Image" />
                    <video className="video_overlay_section3" autoPlay playsInline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;