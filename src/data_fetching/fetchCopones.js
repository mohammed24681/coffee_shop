async function fetchCopones() {
  const res = await fetch("http://localhost:3000/api/copones");
  const data = await res.json();
  return data;
}

export default fetchCopones;
