$(document).ready(() => {
    let typingElement = $('.intro');
  
    typingElement.on('click', (e) => {
      typingElement.removeClass('animate');
      setTimeout(() => typingElement.addClass('animate'), 1);
    })
  });