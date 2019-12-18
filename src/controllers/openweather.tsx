export function getWeather<T>(url: string): Promise<T> {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText, res)
      }
      return res.json()
    })
}