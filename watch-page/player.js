$(document).ready(function() {
    function getVideoDataFromBackend(id, pos) {
        $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/video/'+id, function(data) {
            $('.playlist-card').removeClass('active-card');
            $('#card'+(pos+1)).addClass('active-card');
            $('#video-player').attr('src', 'https://player.vimeo.com/video/' + data.vimeoId);
            $('#views-count').html(data.views);
            $('#video-title').html(data.title);
            $('#video-description').html(data.description);

            $(window).scrollTop(0);
        })
    }

    function createPlaylistCard(obj, pos) {
        // <div id="card6" class="playlist-card">
        //     <img class="thumbnail" src="https://i.vimeocdn.com/video/537261616_390x220.jpg" />
        //     <h3 class="video-card-title">Lemony Chicken Noodle Soup</h3>
        // </div>

        var mainDiv = document.createElement('div');
        mainDiv.id = 'card' + obj.id;
        mainDiv.classList.add('playlist-card');

        if(pos === 0) {
            mainDiv.classList.add('active-card');
        }

        var thumbnail = document.createElement('img');
        thumbnail.classList.add('thumbnail');
        thumbnail.src = obj.thumbnail;

        var title = document.createElement('h3');
        title.classList.add('video-card-title');
        title.innerHTML = obj.title;

        mainDiv.appendChild(thumbnail);
        mainDiv.appendChild(title);

        mainDiv.onclick = function() {
            getVideoDataFromBackend(obj.id, pos);
        }

        return mainDiv;
    }

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(data) {
        $('#playlist-wrapper').html('');

        for(var i=0; i<data.length; i++) {
            $('#playlist-wrapper').append(createPlaylistCard(data[i], i));
        }
    })
})