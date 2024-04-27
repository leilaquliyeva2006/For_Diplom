document.addEventListener('DOMContentLoaded', function() {
    const mySiema = new Siema({
      loop: true, 
      duration: 5000, 
      autoplay: {
        delay: 5000,
        disableOnInteraction: false 
      }
    });
  });
  