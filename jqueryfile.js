

$(document).ready(function() {
  var template = $('#blog-template').clone();

  template.attr('id', '');

  $('#new-blog-input').on('submit', function(event) {
      event.preventDefault();

      var newPost = template;

      var newTitle = $('#title-input').val();
      var newAuthor = $('#name-input').val();
      var newContent =$('#content-input').val();
      var newImage =$('#url-input').val();

      newPost.find('.title').text(newTitle);
      newPost.find('.date').text(moment().format("MMM D" + ", " +  "YYYY"));
      newPost.find('.author').text(newAuthor);
      newPost.find('.content').text(newContent);
      newPost.find('img').attr('src', newImage);

      newPost.append('<hr>')

      $('#blog-posts').prepend(newPost);
  })


})
