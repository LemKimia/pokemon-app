import Layout from "@/components/layout";
import {useEffect, useState} from "react";
import {getPokemonDetails} from "@/utils/api-list/api";
import {IDetail} from "@/utils/types/type";
import {Link, useParams} from "react-router-dom";
import {toast} from "sonner";

const Details = () => {
    const [pokemonDetail, setPokemonDetail] = useState<IDetail>();
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await getPokemonDetails(params.name!);

                setLoading(false);
                setPokemonDetail(response);
            } catch (error) {
                toast((error as Error).message.toString());
            }
        }

        fetchData();
    }, [params.name!]);

    if (loading) return "Loading ...";

    return (
        <Layout>
            <div className="grid h-full grid-flow-row auto-rows-max grid-cols-2 p-6">
                <div className="rounded-2xl border col-span-2 border-black shadow-lg shadow-black m-3 p-5">
                    <div
                        className="flex flex-col justify-center overflow-hidden break-all text-center capitalize tracking-wide text-black gap-2">
                        <span className="text-2xl uppercase">{pokemonDetail?.name}</span>
                        <img
                            className="items-center"
                            src={pokemonDetail?.sprites.other?.dream_world.front_default}
                            alt={pokemonDetail?.name}
                        />
                        <div className="flex flex-row justify-center gap-2 pt-3">
                            {pokemonDetail?.types.map((type) => (
                                <p
                                    className="rounded-full w-full border border-black p-2 text-s "
                                    key={type.slot}
                                >
                                    {type.type.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 col-span-2 gap-4 pt-5">
                    <ul className="rounded-2xl border ml-3 pt-1 pb-1 list-outside list-disc border-black shadow-lg shadow-black">
                        {pokemonDetail?.moves.slice(0, 5).map((moves, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center overflow-hidden break-all font-arcade text-s capitalize tracking-wide text-black "
                            >
                                {moves.move.name}
                            </li>
                        ))}
                    </ul>
                    <ul className="rounded-2xl border mr-3 pt-1 pb-1 list-outside list-disc text-left border-black shadow-lg shadow-black">
                        {pokemonDetail?.moves.slice(6, 10).map((moves, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center  overflow-hidden break-all font-arcade text-s capitalize tracking-wide text-black "
                            >
                                {moves.move.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="m-3 p-5 grid grid-flow-row auto-rows-max col-span-2 justify-items-center">
                    <Link to={`/pokemon-catch/${params.name!}`}>
                        <a
                            className=" overflow-hidden break-all rounded-xl border-2 border-black p-2 text-xs font-bold capitalize tracking-wide text-black shadow-md shadow-black hover:ring"
                            href=""
                        >
                            Catch!
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Details;
