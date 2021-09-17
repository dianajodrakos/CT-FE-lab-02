import React from 'react';
import Loading from '../components/loading/Loading.jsx';
import VillagerList from '../components/villagers/VillagerList.jsx';
import VillagerControls from '../components/villagers/VillagerControls.jsx';
import { useVillagers } from '../hooks/useVillagers.js';
import { usePagination } from '../hooks/usePagination.js';

const CharacterListContainer = () => {
  const { currentPage, incrementPage, decrementPage } = usePagination();
  const { loading, villagers } = useVillagers(currentPage);

  if(loading)
    return <Loading />;
    
  return <>
    <VillagerControls 
      currentPage={currentPage} 
      incrementPage={() => incrementPage()} 
      decrementPage={() => decrementPage()}
      villagers={villagers}
    />
    <VillagerList villagers={villagers} />
  </>;
};

export default CharacterListContainer;
