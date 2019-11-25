function tts () {
  // Get variables and remove non-digit characters in PIN.
  var pin = document.getElementById('wp').value
  var pin2 = pin.replace(/\D/g,'')
  var pin3 = pin2.split('')
  var pin4 = pin3.map(function (x) { 
    return parseInt(x, 10); 
  })

  var txt0 = document.getElementById('ta').value
  var txt1 = txt0.replace(/\s/g, '')
  var txt = txt1.replace(/\W/g, '')
  var txt2 = txt.split('')
  var txt3 = txt2.length

  // Cut
  var a = []
  var c = []
  var d = true
  do {
    // Pin loop
    for (var i = 0; i < pin4.length; i++) {
      c.push(pin4[i])
      var b = []
      // Pin # (amount) loop)
      for (var j = 0; j < pin4[i]; j++) {
        b += txt2.shift()
        var e = c.reduce((a, b) => a + b, 0)
        if (e > txt3) {
          d = false
          break
        }
      }
      if (d === false) {
          break
      }
      a.push(b)
    }
  // Leftover loop
  } while (d === true)

  // Arrange
  var f = []
  for (var l = 0; l < a.length; l++) {
    f.push(a[l].split(""))
  }
  var g = []
  // Max array length is 9
  for (var n = 0; n < 9; n++) {
    // For each array
    for (var m = 0; m < f.length; m++) {
      var h = f[m]
      g.push(h[n])
    }
  }
  
  // Dearrange
  var p = []
  for (var y = 0; y < a.length; y++) {
    for (var z = 0; z < a[y].length; z++) {
      p[z] += g.shift()
    }
  }
  
  document.getElementById('p').innerHTML = "<br />" + g + "<br /><br />" + p
}
