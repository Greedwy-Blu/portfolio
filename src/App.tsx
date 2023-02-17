import { Navbar } from './components/navbar';
import { Header } from './components/about';
import { Footer } from './components/Footer';
import { FrontEnd } from './components/frontend';
import { Scroll } from './components/scroll';
import { BackEnd } from './components/backend';
import { Techs } from './components/techs';
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
