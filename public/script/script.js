let elevarThumbnails = document.getElementsByClassName('elevar__image-thumbnail');

let selectedThumbnail = document.getElementsByClassName('selected');

let element = document.getElementsByClassName('elevar__image')[0];
 
 
for(let i = 0; i < elevarThumbnails.length; i++){

    elevarThumbnails[i].addEventListener('mouseover', () => {
        console.log(selectedThumbnail);

        if(selectedThumbnail.length > 0){
            selectedThumbnail[0].classList.remove('selected');
        }

        elevarThumbnails[i].classList.add('selected');
        document.getElementsByClassName('elevar__image-img')[0].src = elevarThumbnails[i].src;
    })

}