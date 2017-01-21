
// attach event handler to form (onSubmit)


function grabForm() {
  return  document.getElementById('new-blog-input');
}

document.getElementsByClassName('my-button').addEventListener('click', function() {
    return document.getElementById('new-blog-input');
});





function dirka() {
  var blogForm = document.getElementById('new-blog-input');

  return blogForm;
}


function newBlog(event) {
  event.preventDefault();
  var title = document.getElementById('title');
  console.log('submit event completed');
  return true;
}
//blogForm.addEventListener('submit', newBlog, false);
