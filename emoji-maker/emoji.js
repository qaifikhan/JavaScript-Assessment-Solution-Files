$(document).ready(function() {
    function showSkinCard() {
        $('#select-skin-card').css('display', 'block');
        $("#select-eyes-card").css("display", "none");
        $("#select-mouth-card").css("display", "none");
    }
    
    function showEyesCard() {
        $("#select-skin-card").css("display", "none");
        $('#select-eyes-card').css('display', 'block');
        $("#select-mouth-card").css("display", "none");
    }

    function showMouthCard() {
        $("#select-skin-card").css("display", "none");
        $("#select-eyes-card").css("display", "none");
        $('#select-mouth-card').css('display', 'block');
    }

    $('.show-eyes-card').click(function() {
        showEyesCard();
    })

    $('#show-skin-card').click(function() {
        showSkinCard();
    })

    $('#show-mouth-card').click(function() {
        showMouthCard();
    })

    $('#yellow-skin').click(function() {
        $('#skin').attr('src', './assets/skin/yellow.png');
        showEyesCard();
    })
    $('#green-skin').click(function() {
        $('#skin').attr('src', './assets/skin/green.png')
        showEyesCard();
    })
    $('#red-skin').click(function() {
        $('#skin').attr('src', './assets/skin/red.png')
        showEyesCard();
    })

    // EYES ON CLICK HANDLERS

    $('#eye-normal').click(function() {
        $('#eyes').attr('src', './assets/eyes/normal.png');
        showMouthCard();
    })
    $('#eye-closed').click(function() {
        $('#eyes').attr('src', './assets/eyes/closed.png')
        showMouthCard();
    })
    $('#eye-long').click(function() {
        $('#eyes').attr('src', './assets/eyes/long.png')
        showMouthCard();
    })
    $('#eye-laughing').click(function() {
        $('#eyes').attr('src', './assets/eyes/laughing.png')
        showMouthCard();
    })
    $('#eye-rolling').click(function() {
        $('#eyes').attr('src', './assets/eyes/rolling.png')
        showMouthCard();
    })
    $('#eye-winking').click(function() {
        $('#eyes').attr('src', './assets/eyes/winking.png')
        showMouthCard();
    })

    // MOUTH ON CLICK HANDLERS
    $('#mouth-open').click(function() {
        $('#mouth').attr('src', './assets/mouth/open.png');
    })
    $('#mouth-smiling').click(function() {
        $('#mouth').attr('src', './assets/mouth/smiling.png')
    })
    $('#mouth-straight').click(function() {
        $('#mouth').attr('src', './assets/mouth/straight.png')
    })
    $('#mouth-sad').click(function() {
        $('#mouth').attr('src', './assets/mouth/sad.png')
    })
    $('#mouth-teeth').click(function() {
        $('#mouth').attr('src', './assets/mouth/teeth.png')
    })
})