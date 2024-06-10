import '../index.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    return (
        <div className="">
            <div className='lang_dropdown'>
                <h4>English</h4>
                <ArrowDropDownIcon />
            </div>
            <button className='button_netflix'>Sign In</button>
        </div>
    )
}

export default Navbar;