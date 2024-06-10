import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer_main'>
                <p>Questions? Call <a href="tel-000-800-919-1694">000-800-919-1694</a></p>
                <div className="footer_wrapper">
                    <div className="footer_links">
                        <p><a href="https://help.netflix.com/en/node/412">FAQ</a></p>
                        <p><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></p>
                        <p><a href="https://help.netflix.com/legal/privacy">Privacy</a></p>
                        <p><a href="https://fast.com/">Speed Test</a></p>
                    </div>
                    <div className="footer_links">
                        <p><a href="https://help.netflix.com/en">Help Centre</a></p>
                        <p><a href="https://jobs.netflix.com/">Jobs</a></p>
                        <p><a href="https://help.netflix.com/legal/privacy">Cookie Preferences</a></p>
                        <p><a href="https://help.netflix.com/legal/notices">Legal Notices</a></p>
                    </div>
                    <div className="footer_links">
                        <p><a href="https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a></p>
                        <p><a href="https://help.netflix.com/en/node/14361">Ways to Watch</a></p>
                        <p><a href="https://help.netflix.com/en/node/134094">Corporate Information</a></p>
                        <p><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></p>
                    </div>
                    <div className="footer_links">
                        <p><a href="https://media.netflix.com/en/">Media Centre</a></p>
                        <p><a href="https://ir.netflix.net/legal/termsofuse">Terms of Use</a></p>
                        <p><a href="https://help.netflix.com/en/contactus">Contact Us</a></p>
                    </div>
                    <div className='lang_dropdown' style={{ width: "30%", marginTop: "20px" }}>
                        <h4>English</h4>
                        <ArrowDropDownIcon />
                    </div>
                </div>
                <p style={{ marginTop: "20px" }}>Netflix India</p>
            </div>
        </div>
    )
}

export default Footer;