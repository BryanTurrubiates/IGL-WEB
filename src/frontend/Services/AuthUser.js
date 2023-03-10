export async function AuthUser (userName, passwordUser) {
  const response = await fetch('http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php', {
    method: 'POST',
    body: new URLSearchParams({
      logIn: true,
      user: userName,
      password: passwordUser
    })
  })
  const DataResponse = await response.json()
  //  console.log(DataResponse)
  return DataResponse
}

export function logOutUser () {
  fetch('http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php', {
    method: 'POST',
    body: new URLSearchParams({
      logOut: true
    })
  })
}

export async function GetInfoUser (idUsuario) {
  const response = await fetch(`http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php?GetInfoUser=true&usuario=${idUsuario}`)
  const ResponseDB = await response.json()
  return ResponseDB
}
