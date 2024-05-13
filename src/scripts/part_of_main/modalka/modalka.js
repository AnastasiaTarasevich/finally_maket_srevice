    
    function modalka(){
        const openModalButton = document.querySelector('.navigation__help-button.header.third-menu');
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
      
      
      openModalButton.addEventListener('click', function() {
          openModal(telephoneModal);
      });
      
      
      const closeModalButton = telephoneModal.querySelector('.navigation__button.modalka_button');
      closeModalButton.addEventListener('click', function() {
          closeModal(telephoneModal);
      });
      
      
      openModalButtonMess.addEventListener('click', function() {
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
    
    }

    export { modalka };
    