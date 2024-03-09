import Layout from "@/components/layout";
import PokemonCard from "@/components/pokemon-card";

const PokemonDetails = () => {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        <PokemonCard />
      </div>
    </Layout>
  );
};

export default PokemonDetails;
