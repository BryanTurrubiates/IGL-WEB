export async function AuthUser (userName, passwordUser) {
  console.log(userName, passwordUser)
  const response = await fetch('http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php', {
    method: 'POST',
    body: new URLSearchParams({
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
