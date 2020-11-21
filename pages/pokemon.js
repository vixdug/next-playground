import Head from 'next/head'
function Pokemon({ pokemon }){
  console.log(pokemon);
return (<>
  <head>
    <title> Pokemon: {pokemon.name}</title>
    </head>
  <div>
    welcome, {pokemon.name}
  </div>
  </>
)
}

export async function getServerSideProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  const pokemon = await res.json()

  if (!pokemon) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pokemon,
      fallback: false
    },
  }
}

export default Pokemon