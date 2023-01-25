export const goTickets = (event) => {
  event.preventDefault()
  window.open('http://192.168.80.8:8080/osTicket/scp/login.php')
}

export const goOldIGL = (event) => {
  event.preventDefault()
  window.open('http://192.168.80.210:8080/proyecto/public_html/login.html')
}
