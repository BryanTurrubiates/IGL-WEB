export function addTabView (ModuleURL) {
  const div = document.getElementById('__ModuleToLoad')
  console.log(div)
  const Object = document.createElement('object')
  Object.data = `http://192.168.80.220:8080${ModuleURL}`
  Object.type = 'text/html'
  const ContainerModule = document.createElement('div')
  ContainerModule.appendChild(Object)
  div.appendChild(ContainerModule)
}
