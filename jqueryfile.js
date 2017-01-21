
$(document).ready(function() {
      // make template
      var template = $('#blog-template').clone();
                                                          console.log(template.html());

      // attach event handler to submit button
      $('#new-blog-input').on('submit', function(event) {
          event.preventDefault();

      // grab values of each input
          var newTitle = $('#title-input').val();
          var newAuthor = $('#name-input').val();
          var newContent =$('#content-input').val();
          var newImage =$('#url-input').val();

                                                          console.log(newImage);

      // change text of each blog part
          template.find('.title').text(newTitle);
          template.find('.author').text(newAuthor);
          template.find('.content').text(newContent);
          template.find('img').attr('src', newImage);

                                                          console.log(  $('.title').text()  );
      // put the modified post into the DOM
          $('#blog-template').before(template);
      })
})
