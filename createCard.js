d3.csv("info.csv").then(function(data) {
    data.forEach(function(d) {
        var card = document.createElement('div');
        card.className = 'card';

        var title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = '<b>' + d.title + '</b>';
        card.appendChild(title);

        var img = document.createElement('img');
        img.src = d.image_path;
        img.style.width = '100%';
        card.appendChild(img);

        var description = document.createElement('div');
        description.className = 'description';
        description.textContent = d.description;
        card.appendChild(description);

        //May want the links to open in new tab
        //I should have the entire card be the link, not just the image
        var link = document.createElement('a');
        link.href = d.image_link; 
        link.appendChild(img); 
        card.appendChild(link);

        document.getElementById('cards').appendChild(card);
    });
});