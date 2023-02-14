const circles = document.querySelectorAll('.circle')
const rate = document.getElementById('rates')
const btn = document.getElementById('btn')
const selected = document.getElementById('selected')


circles.forEach(circle =>{
 circle.addEventListener('click', () =>{
  removeActiveClasses()
  circle.classList.add('active')
  selected.innerText = circle.innerText
  if(circle.classList.contains('active')) {
   btn.disabled = false
  }else{
   btn.disabled = true
  }
  
 })
})


function removeActiveClasses() {
 circles.forEach(circle => {
  circle.classList.remove('active')
 })
}

btn.addEventListener('click', () =>{
 rate.style.display='none'
})

