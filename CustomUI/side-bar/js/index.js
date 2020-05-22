const iconTrigger = document.querySelector('#arrowTrigger')
const arrow = document.querySelector('#arrow')
const sidebarMain = document.querySelector('.sidebar-main')
const mainContent = document.querySelector('.main')

iconTrigger.addEventListener('click', () => {

   if(arrow.classList.contains('fa-arrow-right') ){
      //  arrow icon
      arrow.classList.remove('fa-arrow-right')
      arrow.classList.add('fa-arrow-left')
      //sidebar
      sidebarMain.classList.add('show')
      sidebarMain.classList.remove('hide')
      //main content
      mainContent.classList.add('show')

   }else {
      arrow.classList.add('fa-arrow-right')
      arrow.classList.remove('fa-arrow-left')
       //sidebar
      sidebarMain.classList.remove('show')
      sidebarMain.classList.add('hide')

      //main content
      mainContent.classList.remove('show')
      
   }

})