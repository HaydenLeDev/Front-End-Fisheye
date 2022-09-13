function photoCardFactory(data, photographe) {
    const { id, photographerId, title, image, video, likes,date,price} = data;
    const picture = `assets/photos/${photographe.id}/${image}`;
    const videoLink = `assets/photos/${photographe.id}/${video}`;


    function getPhotoDOM(){
        //Création du layout
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        const titleImage = document.createElement('h3');       
        const cardInfo = document.createElement('div');
        cardInfo.setAttribute('class', 'card-info');
        const cardInfoLike = document.createElement('div');
        const nblikes = document.createElement('p');
        nblikes.setAttribute('class', 'card-info-nblikes'); 
        const iconLike = document.createElement('i');
        cardInfoLike.setAttribute('class', 'card-info-like'); 
        cardInfoLike.setAttribute('aria-label', 'likes'); 
        cardInfoLike.setAttribute('onclick', 'like(this.firstChild)'); 
        iconLike.setAttribute('class', 'fas fa-heart');
        //Set les valeurs
        titleImage.textContent = title;
        nblikes.textContent = likes;

        //Ajout dans le layout

        cardInfoLike.appendChild(nblikes);
        cardInfoLike.appendChild(iconLike);
        cardInfo.appendChild(titleImage);
        cardInfo.appendChild(cardInfoLike);

        if (videoLink.match(/mp4/gm)){
            const vid = document.createElement('video');
            const source = document.createElement('source');
            //vid.setAttribute("controls", "controls");
            source.setAttribute("src", videoLink); 
            vid.setAttribute('onclick', 'displayLightbox(this.id)');
            vid.setAttribute('id', id);
            vid.appendChild(source);
            card.appendChild(vid);
        } else {
            const img = document.createElement('img');
            img.setAttribute('onclick', 'displayLightbox(this.id)');
            img.setAttribute('id', id);
            img.setAttribute("src", picture);
            img.setAttribute("alt",title);
            card.appendChild(img);
        }

        card.appendChild(cardInfo);
        
        return (card);
    }

    function getPhotoLightboxDOM(){
        const card = document.createElement('div');
        card.setAttribute('class', 'lightbox_modal_box');
        const titre = document.createElement('h1');
        titre.textContent = title;
        

        if (videoLink.match(/mp4/gm)){
            const vid = document.createElement('video');
            const source = document.createElement('source');
            vid.setAttribute("controls", "controls");
            source.setAttribute("src", videoLink); 
            vid.appendChild(source);
            card.appendChild(vid);
        } else {
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.setAttribute("alt",title);
            card.appendChild(img);
        }
        card.appendChild(titre);
        return (card);
    }

    return  {getPhotoDOM, getPhotoLightboxDOM};

}