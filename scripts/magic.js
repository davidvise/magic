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
    var card1 = "y";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-1').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card1 = "n";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-2').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card2 = "y";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-2').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card2 = "n";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-3').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card3 = "y";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-3').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card3 = "n";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-4').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card4 = "y";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-4').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card4 = "n";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-5').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card5 = "y";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-no-5').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card5 = "n";
    
    parent_fieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
    });
});

$('.registration-form .btn-yes-6').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card6 = "y";
    
      var api_url = 'http://mulemagic.au-s1.cloudhub.io/api/guessnumber?card1=' + card1 + '&card2=' + card2 + '&card3=' + card3 + '&card4=' + card4 + '&card5=' + card5 + '&card6=' + card6
 
 $.ajax({
            type: 'GET',
            url: api_url, 
            dataType: 'json',
            async: false,
        success: function(result){
            alert("good:2 " + result.secretnumber);
            document.getElementById("p1").innerHTML = result.secretnumber;
            alert(JSON.stringify(result));
        },
        error: function (result, status, error) {
        		alert("bad: " + error);
        }
        });
 
   

  var parent_fieldset = $(this).parents('fieldset');
    
  parent_fieldset.fadeOut(400, function () {
  $(this).next().fadeIn();
      document.getElementById("p1").innerHTML = result.secretnumber;
    });
});

});

$('.registration-form .btn-no-6').on('click', function () {
    var parent_fieldset = $(this).parents('fieldset');
    var card6 = "n";
    
      var api_url = 'http://mulemagic.au-s1.cloudhub.io/api/guessnumber?card1=' + card1 + '&card2=' + card2 + '&card3=' + card3 + '&card4=' + card4 + '&card5=' + card5 + '&card6=' + card6
 
 $.ajax({
            type: 'GET',
            url: api_url, 
            dataType: 'json',
            async: false,
        success: function(result){
            alert("good:2 " + result.secretnumber);
            document.getElementById("p1").innerHTML = result.secretnumber;
            alert(JSON.stringify(result));
        },
        error: function (result, status, error) {
        		alert("bad: " + error);
        }
        });
 
   

  var parent_fieldset = $(this).parents('fieldset');
    
  parent_fieldset.fadeOut(400, function () {
  $(this).next().fadeIn();
      document.getElementById("p1").innerHTML = result.secretnumber;
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
  var api_url = 'http://mulemagic.au-s1.cloudhub.io/api/guessnumber?card1=' + card1 + '&card2=' + card2 + '&card3=' + card3 + '&card4=' + card4 + '&card5=' + card5 + '&card6=' + card6
 
 $.ajax({
            type: 'GET',
            url: api_url, 
            dataType: 'json',
            async: false,
        success: function(result){
            alert("good:1 " + result.secretnumber);
            document.getElementById("p1").innerHTML = result.secretnumber;
            alert(JSON.stringify(result));
        },
        error: function (result, status, error) {
        		alert("bad: " + error);
        }
        });
 
   

  var parent_fieldset = $(this).parents('fieldset');
    
  parent_fieldset.fadeOut(400, function () {
  $(this).next().fadeIn();
      document.getElementById("p1").innerHTML = result.secretnumber;
    });
});
