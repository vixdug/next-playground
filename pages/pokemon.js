
function Pokemon({ pokemon }){
  console.log(pokemon);
return (
  <div>
    welcome, {pokemon.name}
  </div>
)
}

export async function getstaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  const pokemon = await res.json()

  if (!data) {
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