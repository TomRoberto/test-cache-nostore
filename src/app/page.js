const fetchData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await fetchData();
  return (
    <main>
      {data.results.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </main>
  );
}
