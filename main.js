// Lazy loading
$(function() {
   [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
         img.setAttribute('src', img.getAttribute('data-src'));
         img.onload = function() {
            img.removeAttribute('data-src');
         };
   });
});

// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});
