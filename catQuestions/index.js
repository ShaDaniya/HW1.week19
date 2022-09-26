
class Cat {
    constructor(catname, ownername, telephone, email, breed, feed, sex, weight, comment) {
        this.catname = catname,
        this.ownername = ownername,
        this.telephone = telephone,
        this.email = email,
        this.breed = breed,
        this.feed = feed,
        this.sex = sex,
        this.weight = weight,
        this.comment = comment
    }
}

function pushOk () {
    const catName = document.getElementById('catName').value;
    //console.log(catName);
    const ownerName = document.getElementById('ownerName').value;
    const telephone = document.getElementById('ownerTel').value;
    const email = document.getElementById('ownerEmail').value;
    const breed = document.getElementById('poroda').value;
    //console.log(breed);
    //тут не знаю, как можно сделать, чтобы в экземпляре был не один выбранный чекбокс
    const feed = document.querySelector('.feedCheckbox').value;
    //console.log(feed);
    const sex = document.getElementById('sex').value;
    const catWeight = document.getElementById('catweight').value;
    const ownerComment = document.getElementById('comments').value;

    const newCat = new Cat(catName, ownerName, telephone, email, breed, feed, sex, catWeight, ownerComment);
    console.log(newCat);
}