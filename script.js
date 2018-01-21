function Gen() {
  var table = document.querySelector('.table')
  var days = [
    'mon',
    'tue',
    'wed',
    'thur',
    'fri',
    'sat',
    'sun'
  ]
  var len = days.length
  var store = []

  function actionEvt(evt) {
    var cls = evt.target.className
    var el = cls.split('_')
    var extract = '.' + el[0]
    var elem = document.querySelector(extract)
    if (evt.target.checked) {
      elem.removeAttribute('disabled')
    } else {
      elem.setAttribute('disabled', '')
    }
  }
  // var json = JSON.stringify(stores)

  function init() {
    for (var i = 0; i < len; i++) {
      var row = table.insertRow(i)
      var cell1 = row.insertCell(0)
      var ucfirst = days[i].substring(0, 1).toUpperCase()
      cell1.innerHTML = ucfirst + days[i].substr(1)
      cell1.style.background = '#FFF'

      var cell2 = row.insertCell(1)
      cell2.innerHTML = "<input type='text' name='" + days[i] + "' class='" + days[i] + "' disabled>"
      cell2.style.background = '#FFF'

      var cell3 = row.insertCell(2)
      cell3.innerHTML = "<input type='checkbox' name='" + days[i] + "_bx' class='" + days[i] + "_bx'>"
      cell3.style.background = '#FFF'

      table.appendChild(row)
    }
  }

  function submitData() {
    for (var i = 0; i < len; i++) {
      var title = '.' + days[i]
      var el = document.querySelector(title)
      store.push({
        day: title.substring(1),
        value: (el.value !== '' ) ? el.value: '0'
      })
    }
    var output = document.querySelector('.output')
    output.style.display = 'block'
    output.innerHTML = JSON.stringify(store)
  }

  init()

  for (var i = 0; i < len; i++) {
    var title = '.' + days[i] + '_bx'
    var el = document.querySelector(title)
    el.addEventListener('click', actionEvt, false)
  }

  var submitBtn = document.querySelector('.submitBtn')
  submitBtn.addEventListener('click', submitData, false)

}
