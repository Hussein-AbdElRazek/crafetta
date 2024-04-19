import classes from './styles/Footer.module.css'

const Footer = () =>
{
    return (
        <footer className={classes.footer}>
            <div>
               {` للمساعدة او الاسئلة برجاء التواصل عن طريق `}
                <a
                    target='_blank'
                    href="https://www.instagram.com/crafetta_for_handcrafts/?utm_source=qr&igsh=YXI1aDd3Y2s3MTJp" rel="noreferrer"
                >
                    صفحة الانستجرام
                </a>
                <br />
                {`جميع حقوق النشر محفوظة لموقع كرافيتا`}
            </div>


        </footer>
    )
}

export default Footer