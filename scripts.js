console.log('I am not a teapot!')
// old habit, ignore the above

let hue = 186;

// document.body.style.backgroundColor = "hsl("+ hue + ",15%,45%)"

const doit = () => {
  hue++
  document.body.style.backgroundColor = "hsl("+ hue + ",13%,45%)"
}

setInterval(doit, 200)
