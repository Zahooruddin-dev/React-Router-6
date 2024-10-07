export async function getVans() {
  const res = await fetch ('/api/vans')
  const data = await data.json()
  return data.vans
}