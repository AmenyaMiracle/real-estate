/*====change backgroundheader =====*/

function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);



const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
  const accordionHeader =item.querySelector('.value__accordion-header')
  
  accordionHeader.addEventListener('click', () =>{
      const openItem = document.querySelector('.accordion-open')

      toggleItem(item)

      if(openItem && openItem!== item){
        toggleItem(openItem)
      }
  })
})

const toggleItem =(item) =>{
  const accordionContent = item.querySelector('.value__accordion-content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }

}

let mixerFeatured = mixitup('.featured__content', {
  selectors: {
    target: '.featured__card'
  },
  animation: {
    duration: 300
  }
})


/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
  linkFeatured.forEach(i=> i.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(i=> i.addEventListener('click', activeFeatured))



const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
