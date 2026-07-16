import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Jackets from './pages/Jackets';
import Canvas from './pages/Canvas';
import Wallets from './pages/Wallets';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import FAQ from './pages/FAQ';
import OurLeathers from './pages/OurLeathers';
import OurProcess from './pages/OurProcess';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Set basename to root for Vercel
const basename = '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'jackets',
          element: <Jackets />
        },
        {
          path: 'canvas',
          element: <Canvas />
        },
        {
          path: 'wallets',
          element: <Wallets />
        },
        {
          path: 'gallery',
          element: <Gallery />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'product/:id',
          element: <ProductDetails />
        },
        {
          path: 'faq',
          element: <FAQ />
        },
        {
          path: 'leathers',
          element: <OurLeathers />
        },
        {
          path: 'process',
          element: <OurProcess />
        },
        {
          path: 'privacy',
          element: <Privacy />
        },
        {
          path: 'terms',
          element: <Terms />
        }
      ]
    }
  ],
  {
    basename: basename
  }
);