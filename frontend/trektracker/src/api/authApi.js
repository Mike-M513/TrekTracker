async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

  export async function getVisitedParks() {
    // uncomment and edit with correct route when ready to do API call
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem('token')}`
      }  }
    const body = await basicFetch(`http://localhost:8000/visits/visits/${localStorage.getItem('Username')}`, payload)

    // dummmy data
  //   const body = [{"name": "Yellowstone", "visit_date": "05-25-21", "activities": "Hiking, swimming"}, 
  //       {"name": "Yosemite", "visit_date": "02-11-18", "activities": "Hiking"}, 
  //       {"name": "Grand Canyon", "visit_date": "10-05-19", "activities": "Kayaking"},
  //       {"name": "Great Dunes", "visit_date": "04-18-17", "activities": "Hiking"}]

    return body
  }