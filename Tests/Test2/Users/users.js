//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {

    let userList = document.createElement('div')

    document.body.appendChild(userList)

    userList.classList.add("usersList")


    let divUsers = document.createElement('div');

    document.body.appendChild(divUsers);
    for (const user of users) {
      //console.log(users)


      let objects = document.createElement('div')

      objects.classList.add("ObjectBlock")

      let h3 = document.createElement('h2')

      let linkText = document.createElement('h4')

      linkText.classList.add("linkButton")

      h3.innerText = `${user.id} - ${user.name}`;



      linkText.innerHTML = `
                Click here for full details

                `


      linkText.addEventListener('click', () =>{
        location.href = '../Posts/user-details.html?id='+ user.id;
      })

      objects.append(h3)
      objects.appendChild(linkText)
      divUsers.appendChild(objects)
      userList.append(divUsers)

    }

  });
