// Static comments
(function ($) {
  var $comments = $('.js-comments');

  $('#comment-form').submit(function () {
    var form = this;
    
    $('#comment-form-submit').attr('disabled', true);
    
    $('.post-comments-form .js-notice').addClass('hidden');
    $('.post-comments-form .js-notice').attr('hidden', true);
    
    $('#comment-form-submit').html('Submitting...');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').html('Submitted!');
        $('.post-comments-form .js-notice').removeClass('notice-danger').addClass('notice-success');
        showAlert('<strong>Thanks for posting!</strong> Your comment will appear as soon as it finishes processing.');
      },
      error: function (err) {
        $('#comment-form-submit').html('Submit Comment');
        $('#comment-form-submit').attr('disabled', false);
        $('.post-comments-form .js-notice').removeClass('notice-success').addClass('notice-danger');
        showAlert('<strong>Uh-oh, something went wrong.</strong> Double-check that all required fields have been filled in and try again.');
      }
    });

    return false;
  });

  function showAlert(message) {
    $('.post-comments-form .js-notice').attr('hidden', false);
    $('.post-comments-form .js-notice-text').html(message);
  }
})(jQuery);
