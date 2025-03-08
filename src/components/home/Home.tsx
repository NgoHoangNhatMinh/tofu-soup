import IndexProducts from "../product/IndexProducts";
import "./Home.css"

function Home() {
    return <>
        <div className="HomeContainer">
            <h1>tofu-soup</h1>
            <IndexProducts></IndexProducts>
        </div>
    </>
}

export default Home;