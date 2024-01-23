import './App.css'
import DetailSection from './component/DetailSection/DetailSection';
import HeroSection from './component/HeroSection/HeroSection';
import Management from './component/Management/Management';
import NavbarCustom from './component/NavbarCustom/NavbarCustom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <main>
        <NavbarCustom />
        <HeroSection />
        <DetailSection />
        <Management />
      </main>
    </>
  )
}

export default App
