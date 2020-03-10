$(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });
    
$('.registration-form .btn-yes-1').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card1 = true;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-1').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card1 = false;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-2').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card2 = true;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-2').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card2 = false;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-3').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card3 = true;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-3').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card3 = false;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-4').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card4 = true;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-4').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card4 = false;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-5').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card5 = true;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-5').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card5 = false;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-6').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card6 = true;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-6').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card6 = false;
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});


// submit
$('.registration-form').on('xxxsubmit', function (e) {

    $(this).find('input[type="text"],input[type="email"]').each(function () {
        if ($(this).val() == "") {
            e.preventDefault();
            $(this).addClass('input-error');
        } else {
            $(this).removeClass('input-error');
        }
    });

});

$('.registration-form .btn-submit').on('click', function () {
  var api_url = 'https://api.linkpreview.net'
  var key = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8' // not real

    $.ajax({
        url: api_url + "?key=" + key + " &q=" + $( this ).text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            alert(result);
        },
        error: function (result, status, error) {
        alert(result.responseText);
        alert(status);
        alert(error);
    		}
    })

  var parent_fieldset = $(this).parents('fieldset');
    
  parent_fieldset.fadeOut(400, function () {
  $(this).next().fadeIn();
    });
});

   
});
