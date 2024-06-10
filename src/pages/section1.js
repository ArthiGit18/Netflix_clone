const SectionOne = () => {
    return (
        <div className="section_one_main">
            <div className="section_wrapper">
                <div className="">
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="video_container">
                    <img src="/assets/tv.png" alt="Image" />
                    <video className="video_overlay" autoPlay playsInline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;