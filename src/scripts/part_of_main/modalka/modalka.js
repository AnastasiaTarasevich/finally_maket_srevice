    
    function modalka(){
        const openModalButton = document.querySelector('.navigation__help-button.header.third-menu');
        const openModalButtonDes = document.querySelector('.navigation__button.navigation-button-left.telephone_modal');
        const openModalButtonDesMes = document.querySelector('.navigation__button.navigation-button-left.message_modal');
        const telephoneModal = document.querySelector('.modalka.telephone');
        const openModalButtonMess = document.querySelector('.navigation__help-button.header.forth-menu');
        const messageModal = document.querySelector('.modalka.message');
        const openModalButtonMenu = document.querySelector('.navigation__help-button.header.menu');
        const menuModal = document.querySelector('.navigation');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        function openModal(modalElement) {
          modalElement.classList.add('open_modalka');
          document.body.appendChild(overlay);
          overlay.classList.add('visible');
      }
      
      
      function closeModal(modalElement) {
          modalElement.classList.remove('open_modalka');
          overlay.classList.remove('visible');
          document.body.removeChild(overlay);
      }
      
      function handleKeydown(event) {
        if (event.key === 'Escape' || event.key === ' ') {
          if (telephoneModal.classList.contains('open_modalka')) {
            closeModal(telephoneModal);
            event.preventDefault(); 
          } else if (messageModal.classList.contains('open_modalka')) {
            closeModal(messageModal);
            event.preventDefault(); 
          }
        }
      }
      openModalButton.addEventListener('click', function() {
          openModal(telephoneModal);
      });
      openModalButtonDes.addEventListener('click', function() {
        openModal(telephoneModal);
    });
       
      const closeModalButton = telephoneModal.querySelector('.navigation__button.modalka_button');
      closeModalButton.addEventListener('click', function() {
          closeModal(telephoneModal);
      });
      
      
      openModalButtonMess.addEventListener('click', function() {
          openModal(messageModal);
      });
      
      openModalButtonDesMes.addEventListener('click', function() {
        openModal(messageModal);
    });
      
      const closeModalButtonMes = messageModal.querySelector('.navigation__button.modalka_button');
      closeModalButtonMes.addEventListener('click', function() {
          closeModal(messageModal);
      });
    
      
      openModalButtonMenu.addEventListener('click', function() {
        openModal(menuModal);
    });
    
    
    const closeModalButtonMenu = menuModal.querySelector('.navigation__button.cross');
    closeModalButtonMenu.addEventListener('click', function() {
        closeModal(menuModal);
    });
    
    document.addEventListener('keydown', handleKeydown);
   
    }

    export { modalka };
    