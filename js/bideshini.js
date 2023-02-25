const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    const imgContainer = document.getElementById('img-container');
    const img = document.createElement('div');
    img.innerHTML = user.results[0].picture.large;
    imgContainer.appendChild(img);


    console.log(user.results[0].picture.large);
}





loadUser();