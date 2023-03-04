import axios from "axios";
/**
 * Getting the Static Path
 */
export const  getStaticPaths = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        params: { limit: 151, offset: 0 },
    });

    const paths = data.results.map((poke:any) => {
        return { 
            params: {id: poke.name}
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context:any) => {
    const name = context.params.id;
    const  res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ context.params.id);
    return {
        props:{ pokemon : res.data}
    }
    
}


export default function Pokemon({pokemon}:any){
    return(
        <div> {pokemon.name} </div>
    )
}