function tts () {
  // Get variables and remove non-digit characters in PIN.
  var pin = document.getElementById('wp').value
  var pin2 = pin.replace(/\D/g,'')
  var pin3 = pin2.split('')
  var pin4 = pin3.map(function (x) { 
    return parseInt(x, 10); 
  })
  console.log("PIN: " + pin4)

  // Prepare text   
  var txt0 = document.getElementById('ta').value
  var txt1 = txt0.replace(/\s/g, '')
  var txt = txt1.replace(/\W/g, '')
  var txt2 = txt.toUpperCase()
  console.log("TXT LENGTH: " + txt2.length)
  var txt3 = txt2.split('')
  // Make placeholder for less predictability
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  txt3.unshift(alphabet[Math.floor(Math.random()*26)])
  var txt4 = txt3.length

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
        b += txt3.shift()
        // Sum of each looped PIN # in check for length of loop
        var e = c.reduce((a, b) => a + b, 0)
        if (e > txt4) {
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
  console.log("CUT LENGTH: " + a.length)
  // Add random letters
  for (var j2 = 0; j2 < a.length; j2++) {
    do {
      a[j2] += alphabet[Math.floor(Math.random()*26)]
    } while (a[j2].length < 9)
  }

  // Arrange
  var f = []
  for (var l = 0; l < a.length; l++) {
    // Break up chunks
    f.push(a[l].split(""))
  }
  var g = []
  // Max array length is 9
  for (var n = 0; n < 9; n++) {
    // For each array
    for (var m = 0; m < f.length; m++) {
      // Access & move array items within another array
      var h = f[m]
      g.push(h[n])
    }
  }
  console.log("ARRANGE LENGTH: " + g.length)

  var g1 = g.toString()
  var g2 = g1.replace(/\,/g,"")

  document.getElementById('p').innerHTML = "<br />" + g2
  
}
