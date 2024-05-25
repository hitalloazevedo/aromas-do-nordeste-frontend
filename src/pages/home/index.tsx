import './style.css'
import Header from '../../components/Header';
import Button from '../../components/Button';

const Home = () => {
    return (
        <>
            <div className="home">
                <Header/>
                <div className="container">
                    <div className="welcome">
                        <h2>Bem-vindo</h2>
                        <h3>ao</h3>
                    </div>
                    <h1>AROMAS DO NORDESTE</h1>
                    <Button value='Explorar' link='#' width={150}/>
                </div>
            </div>
            <div className="aboutus">

            </div>
            <div className="footer">

            </div>
        </>
    )
}

export default Home;