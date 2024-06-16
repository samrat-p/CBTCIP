
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Layout = () => {
  return (
    <div className="container mx-auto py-10 flex-1">
   <Background>
      <Header />
      <Hero/>
    </Background>
    </div> 
    )
    
};

export default Layout;
