
// this line ensures that the dom has rendered before this function runs
$(document).ready(function() {

      // make template
      var template = $('#blog-template').clone();

      // attach event handler to submit button
      $('#new-blog-input').on('submit', function(event) {       // event provided for following line
          event.preventDefault();                               // this prevents the page from reloading

      // grab values of each input
          var newTitle = $('#title-input').val();
          var newAuthor = $('#name-input').val();
          var newContent =$('#content-input').val();
          var newImage =$('#url-input').val();

      // change text of each blog part
          template.find('.title').text(newTitle);
          template.find('.author').text(newAuthor);
          template.find('.content').text(newContent);
          template.find('img').attr('src', newImage);

      // put the modified post into the DOM
          $('#blog-template').before(template);
      })

})
