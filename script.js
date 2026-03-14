const faders = document.querySelectorAll(".section")

const appearOptions = {
threshold:0.3
}

const appearOnScroll = new IntersectionObserver(function(
entries,
appearOnScroll
){

entries.forEach(entry =>{

if(!entry.isIntersecting){
return
}

entry.target.style.opacity = "1"
appearOnScroll.unobserve(entry.target)

})

},appearOptions)

faders.forEach(fader=>{
fader.style.opacity = "0"
appearOnScroll.observe(fader)
})
const sections = document.querySelectorAll(".section")

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const sectionTop = section.getBoundingClientRect().top
const trigger = window.innerHeight * 0.8

if(sectionTop < trigger){
section.style.opacity="1"
section.style.transform="translateY(0)"
}

})

})
