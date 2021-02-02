const TOKEN = "12345678987654321";

export class ApiServices {
  static updateMovie(movId, body) {
    return fetch(`http://localhost:9094/product/${movId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `TOKEN ${TOKEN}`
      },
      body: JSON.stringify( body )
    })
      .then( resp => resp.json() )
  }
  static createMovie(body) {
    return fetch(`http://localhost:9094/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `TOKEN ${TOKEN}`
      },
      body: JSON.stringify( body )
    })
      .then( resp => resp.json() )
  }
}
