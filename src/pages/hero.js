import '../index.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Hero = () => {
    return (
        <div className="container_fluid">
            <div className="heroImg_sec">
                <img src="/assets/HeroImg.png" alt="Hero Banner" />
                <div className='hero_content'>
                    <h2>Unlimited movies, TV shows and more</h2>
                    <p>Watch anywhere. Cancel anytime.</p>

                    <div className='email_hero'>
                        <span className='email_content'>Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className="email_div">
                            <div className="omrs-input-group">
                                <label className="omrs-input-underlined">
                                    <input required />
                                    <p className="omrs-input-label">Email Address</p>
                                </label>
                            </div>
                            <button role="button" className='email_hero_button'>Get Started <KeyboardArrowRightIcon /></button>
                        </div>
                    </div>


                </div>
            </div>

            <div className="navbar_main_hero">
                <div className="navbar_wrapper">
                    <img src="/Logo.png" alt="Logo" />
                    <div className="nav">
                        <div className='lang_dropdown'>
                            <h4>English</h4>
                            <ArrowDropDownIcon />
                        </div>
                        <button className='button_netflix'>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
