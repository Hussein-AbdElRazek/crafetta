import crafettaLogo from '../assets/crafettaLogo.jpeg'
import classes from './styles/Navbar.module.css'

const Navbar = () =>
{
    return (
        <nav
            className={classes.nav}
        >
            <div>
                <h1>
                    مركز كرافيتا لتعليم الحرف اليدوية بمحافظة دمياط
                </h1>
            </div>


            <img src={crafettaLogo} alt="Crafetta Logo" />
        </nav>
    )
}

export default Navbar