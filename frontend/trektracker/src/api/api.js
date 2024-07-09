const token = localStorage.getItem("token")

async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

  export async function getParkData(parkCode) {
    const payload = {
      method: "GET",
      headers: {
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`http://localhost:8000/natl-parks/${parkCode}`, payload)
    return body
  }

  export async function getParks() {
    const payload = {
      method: "GET",
      headers: {
        "Authorization": `Token ${token}`
      }
    }
    const body = await basicFetch("http://localhost:8000/parks/parks/", payload)
    return body
  }

  export async function getParkAlerts(parkCode) {
    const payload = {
      method: "GET",
      headers: {
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`http://localhost:8000/natl-parks/alerts/${parkCode}`, payload)
    return body
  }

  export async function getParkWeatherURL(lat, long) {
    const payload = {
      method: "GET",
    }
    const body = await basicFetch(`https://api.weather.gov/points/${lat},${long}`, payload)
    return body['properties']['forecast']
  }

  export async function getParkWeather(url) {
    const payload = {
      method: "GET",
    }
    const body = await basicFetch(url, payload)
    return body
  }

  export async function postNewVisit(date, user, park, activity) {
    const url = "http://localhost:8000/visits/new_visit/"
    const payload = {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`
      },
      body: {
        date: date,
        user: user,
        park: park,
        activity: activity
      }
    }
    const resp = await basicFetch(url, payload)
  }