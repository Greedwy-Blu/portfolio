import { Navbar } from './components/navbar/index';
import { Header } from './components/about/index';
import { Footer } from './components/Footer';
import { FrontEnd } from './components/frontend/index';
import { Scroll } from './components/scroll';
import { BackEnd } from './components/backend/index';
import { Techs } from './components/techs/index';
import { Contact } from './components/Contact';

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Scroll />
      <FrontEnd />
      <BackEnd />
      <Techs />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
