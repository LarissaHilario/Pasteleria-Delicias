import Products from "./Products"
import Main from "../components/Main";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Layout from "./Layout"
import Sells from "../components/Sells";

function App() {
    return (
        <>
           <Layout>
             <Main></Main>
             <Products>
                <Cards></Cards>
                <Sells></Sells>
             </Products>
            </Layout>
        </>
     )
}

export default App;