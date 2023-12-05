import css from './Layout.module.css';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Home from 'pages/Home/HomePage';
import { useEffect, useState } from 'react';
import { fetchRates } from 'services/operations';

const Layout = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    (async () => {
      await fetchRates()
        .then(res => setRates(res.data.rates))
        .catch(err => console.log(err));
    })();
  }, []);

  return (
    <div className={css.container}>
      <Header rates={rates} />
      <main className={css.content}>
        <Home rates={rates} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
