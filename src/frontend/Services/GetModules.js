
export async function GetTopicsModules (idUsuario) {
  const response = await fetch(`http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php?GetTopics=true&usuario=${idUsuario}`)
  const ResponseDB = await response.json()
  return ResponseDB
}

export async function GetRoutesModules (idUsuario) {
  const response = await fetch(`http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API-Icons.php?GetInfoUser=true&usuario=${idUsuario}`)
  const ResponseDB = await response.json()
  return ResponseDB
}

export async function GetFavorites (idUsuario) {
  const response = await fetch(`http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php?GetFavoritos=true&usuario=${idUsuario}`)
  const ResponseDB = await response.json()
  return ResponseDB
}

export async function GetRecent (idUsuario) {
  const response = await fetch(`http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php?GetRecent=true&usuario=${idUsuario}`)
  const ResponseDB = await response.json()
  return ResponseDB
}
