import React, { useContext } from 'react';
import ContextContent from '../Context/ContextContent';
import FeaturedContent from './FeaturedContent';
import MovieRow from './MovieRow';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

function MainContent() {
  const { movieList, dataFeatured, hideHeader } = useContext(ContextContent);

  return (
    <div className="page">
      {movieList.length <= 0 && <Loading />}

      <Header hide={hideHeader} />

      {dataFeatured &&
      <FeaturedContent item={dataFeatured} />}


      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default MainContent;
