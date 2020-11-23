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

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemon = await res.json()

  let paths = pokemon.results.map(p => {
    return `/pokemon/${p.name}`
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
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