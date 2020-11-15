let elevarThumbnails = document.getElementsByClassName(
  "elevar__image-thumbnail"
);

let chooseColor = document.getElementsByClassName(
  "elevar__choose-color__image"
);

chooseColor[0].style.border = "2px solid red";

let chooseSizeNumber = document.getElementsByClassName(
  "elevar__shoe__description"
);

let chooseSize = document.getElementsByClassName("elevar__size__title");

chooseSizeNumber[0].style.backgroundColor = "black";
chooseSizeNumber[0].style.color = "white";
chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size 6</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US 7</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
  41
}</span>`;

let selectedThumbnail = document.getElementsByClassName("selected");

let element = document.getElementsByClassName("elevar__image")[0];

let i = 0;

const onThumbnailClick = (index) => {

  i = index;

  console.log(i);

  if (i <= 7) {
    chooseColor[0].style.border = "2px solid red";
    chooseColor[1].style.border = "1px solid  grey";
    chooseColor[2].style.border = "1px solid  grey";
    document.getElementsByClassName('elevar__choose-color__title')[0].style.color ="#800000";
    document.getElementsByClassName('elevar__choose-color__title')[0].innerHTML = 'Fiery Red';
  } else if (i > 7 && i <= 15) {
    chooseColor[0].style.border = "1px solid  grey";
    chooseColor[1].style.border = "2px solid blue";
    chooseColor[2].style.border = "1px solid  grey";
    document.getElementsByClassName('elevar__choose-color__title')[0].style.color ="blue";
    document.getElementsByClassName('elevar__choose-color__title')[0].innerHTML = 'Cobalt Blue';

  } else if (i > 15) {
    chooseColor[0].style.border = "1px solid  grey";
    chooseColor[1].style.border = "1px solid  grey";
    chooseColor[2].style.border = "2px solid black";
    document.getElementsByClassName('elevar__choose-color__title')[0].style.color ="black";
    document.getElementsByClassName('elevar__choose-color__title')[0].innerHTML = 'Carbon Black';

  }

  console.log(selectedThumbnail, i, index);

  if (selectedThumbnail.length > 0) {
    selectedThumbnail[0].classList.remove("selected");
  }

  elevarThumbnails[i].classList.add("selected");
  document.getElementsByClassName("elevar__image-img")[0].src =
    elevarThumbnails[i].src;
};

const onThumbnailIterator = (iteratorType) => {
  let thumbnailSize = selectedThumbnail[0].offsetWidth;

  if (iteratorType == "prev") {
    i--;
    if (i < 0) {
      i = 22;
      console.log("Prev", i);
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(thumbnailSize * 21, 0);
    } else {
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(-thumbnailSize, 0);
    }
  } else if (iteratorType == "next") {
    i++;
    if (i > 22) {
      console.log("next");
      i = 0;
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(-(thumbnailSize * 21), 0);
    } else {
      console.log(thumbnailSize);
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(thumbnailSize, 0);
    }
  }

  onThumbnailClick(i);

  // if (selectedThumbnail.length > 0) {
  //   selectedThumbnail[0].classList.remove("selected");
  // }

  // console.log(elevarThumbnails);
  // elevarThumbnails[i].classList.add("selected");
  // document.getElementsByClassName("elevar__image-img")[0].src =
  //   elevarThumbnails[i].src;
};

const onSizeIterator = (iterator) => {
  switch (iterator) {
    case 6: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "black";
      chooseSizeNumber[0].style.color = "white";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      break;
    }

    case 7: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "black";
      chooseSizeNumber[1].style.color = "white";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      break;
    }

    case 8: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "black";
      chooseSizeNumber[2].style.color = "white";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      break;
    }

    case 9: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "black";
      chooseSizeNumber[3].style.color = "white";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      break;
    }

    case 10: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "black";
      chooseSizeNumber[4].style.color = "white";
      break;
    }
  }
};
