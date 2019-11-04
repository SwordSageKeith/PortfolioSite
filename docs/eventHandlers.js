function pkmnQuiz(){
  $('#pkmnquiz').on(click, function(){
    alert(hi);
  });
}

/*export default{
  pkmnQuiz
};*/

const eventHandler = (function(){
  function pkmnQuiz(){
    $('.pkmnquiz').on('click', function(){
      window.location = 'pkmnquiz.html';
    });
    $('.aboutme').on('click', function(){
      window.location = 'aboutme.html';
    });
    $('.home').on('click', function(){
      window.location = 'index.html';
    });
    $('.contactme').on('click', function(){
      window.location = 'contactme.html';
    });
    $('.modeling').on('click', function(){
      window.location = 'modeling.html';
    });
    $('.goodmeal').on('click', function(){
      console.log('test')
      window.location = 'goodmeal.html';
    })
  }
  return {
    pkmnQuiz
  };
}());