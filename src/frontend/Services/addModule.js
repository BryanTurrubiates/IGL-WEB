
export async function addFavoriteModule (idUser, idModule, nombreModule, urlModule, actionModule) {
  fetch('http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php', {
    method: 'POST',
    body: new URLSearchParams({
      addToFavorites: true,
      action: actionModule,
      idUsuario: idUser,
      idModulo: idModule,
      nombreV: nombreModule,
      urlV: urlModule
    })
  })
}

export async function addRecentModule (idUser, idModule) {
  const recentPrev = await fetch(`http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php?GetRecent=true&usuario=${idUser}`)
  const [ResponseDB] = await recentPrev.json()
  const idModulesRecent = Object.values(ResponseDB)
  idModulesRecent.shift()
  idModulesRecent.pop()
  const moduleFinded = idModulesRecent.some(mod => idModule === mod)
  if (moduleFinded === false) { idModulesRecent.unshift(idModule) }
  fetch('http://192.168.80.220:8080/proyecto/public_html/BackendSistemaWeb/API.php', {
    method: 'POST',
    body: new URLSearchParams({
      addToRecents: true,
      idUsuario: idUser,
      idModulo1: idModulesRecent[0],
      idModulo2: idModulesRecent[1],
      idModulo3: idModulesRecent[2],
      idModulo4: idModulesRecent[3]
    })
  })
}
