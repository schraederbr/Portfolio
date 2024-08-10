d3.csv("info.csv").then(function(data) {
    data.forEach(function(d) {
        var link = document.createElement('a');
        link.href = d.link; 

        var card = document.createElement('div');
        card.className = 'card';

        var title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = '<b>' + d.title + '</b>';
        card.appendChild(title);

        //If path ends in .mp4, create video element
        if (d.media_path.endsWith('.mp4')) {
            var video = document.createElement('video');
            video.src = d.media_path;
            video.autoplay = false;
            video.loop = true;
            video.muted = true;
            video.controls = false;
            card.appendChild(video);

            card.addEventListener('mouseover', () => {
                video.play();
            });
            //Uncomment this is you want the video to pause when you mouse out
            // card.addEventListener('mouseout', () => {
            //     video.pause();
            //     video.currentTime = 0; // Reset the video to the beginning
            // });
        }
        else{
            var img = document.createElement('img');
            img.src = d.media_path;
            img.style.width = '100%';
            card.appendChild(img);
        }


        var description = document.createElement('div');
        description.className = 'description';
        description.textContent = d.description;
        card.appendChild(description);

        //May want the links to open in new tab
        //I should have the entire card be the link, not just the image

        link.appendChild(card); 
        // card.appendChild(link);

        document.getElementById('cards').appendChild(link);
    });
});

// window.addEventListener('resize', adjustFontSize);

// function adjustFontSize() {
//     const cards = document.querySelectorAll('.card');
//     if (cards.length === 0) {
//         return; // Exit the function if no cards are found
//     }
//     const parentWidth = document.querySelector('#cards').offsetWidth;
//     const cardWidth = cards[0].offsetWidth;
//     const cardsPerRow = Math.floor(parentWidth / cardWidth);

//     const fontSize = 20 / cardsPerRow; // Adjust this formula as needed

//     cards.forEach(card => {
//         const text = card.querySelector('.title, .description');
//         text.style.fontSize = `${fontSize}vw`;
//     });
// }

// // Call the function once to set the initial font size
// adjustFontSize();