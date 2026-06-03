import Hero from '../components/Hero';
import Categorias from '../components/Categorias';
import ItemListContainer from '../components/ItemListContainer';
import PokemonPlantSection from "../components/pokemon/PokemonPlantSection";
const Home = () => {
  return (
    <>
      <Hero />
      <Categorias />
      <ItemListContainer />
      <PokemonPlantSection />
    </>
  );
};

export default Home;