import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { ThemeProvider } from './components/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main className="dark:bg-dark-blue-2 bg-gray-2 min-h-screen flex flex-col content-center px-10 md:px-14 lg:px-20 transition duration-300 ease-in-out">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:name" element={<Detail />} />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'));