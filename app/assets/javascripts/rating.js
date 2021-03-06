$(document).on('turbolinks:load', function() {
  $('.comment-rating').raty({
    readOnly:true,
    score: function() {
      return $(this).attr('data-score');
    },
    path: '/assets/'
  });
  $('.average-comment-rating').raty({
    readOnly:true,
    path: '/assets/',
    score: function() {
      return $(this).attr('data-score');
    }
  });

  $('#rating-form').raty({
    path: '/assets/',
    scoreName: 'comment[rating]'
  });

  $('#edit-rating-form').raty({
    score: function() {
      return $(this).attr('data-score');
    },
    path: '/assets/',
    scoreName: 'comment[rating]'
  });

  $('rating-form').raty({
    path: '/assets/',
    scoreName: 'comment[rating]',
  })
});
