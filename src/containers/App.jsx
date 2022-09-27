import Products from "./Products"
import Main from "../components/Main";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Layout from "./Layout"

function App() {
    return (
        <>
           <Layout>
            <Main></Main>
            <br></br> 
           
            <Products>
            </Products> 
            </Layout>
           </>
     )
}

export default App;