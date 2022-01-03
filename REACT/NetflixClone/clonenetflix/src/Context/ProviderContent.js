import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import ContextContent from './ContextContent';
import requestContent from '../Services/requestContent';

function ProviderContent({ children }) {

    const [movieList, setMovieList] = useState([]);
    const [dataFeatured, setDataFeatured] = useState(null)
    const [hideHeader, setHideHeader] = useState(false)



    useEffect(() => {
        const takeAllList = async () => {
            let contentList = await requestContent.getHomeList();
            setMovieList(contentList);

            let originals = contentList.filter(i=>i.slug === 'originals');
            let sortChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[sortChosen];
            let chosenInfo = await requestContent.getInfos(chosen.id, 'tv');
            setDataFeatured(chosenInfo)
        }
        takeAllList();

    }, []);

    useEffect(() => {
        const scrollListener = () => {
         if(window.scrollY > 10) {
             setHideHeader(true)
         } else {
             setHideHeader(false)
         }
        }
            window.addEventListener('scroll', scrollListener);
            return () => {
                window.removeEventListener('scroll', scrollListener);
            }
 
    }, []);


    const myContext = {
        movieList,
        setMovieList,
        dataFeatured,
        setDataFeatured,
        hideHeader, 
        setHideHeader,
    }

return (
    <ContextContent.Provider value={ myContext }>
        { children }
    </ContextContent.Provider>

)

}

ProviderContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProviderContent
