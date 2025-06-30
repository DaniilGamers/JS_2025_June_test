//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('id');
console.log(userId);
let baseUrl = `https://jsonplaceholder.typicode.com/users/${userId}`

fetch(baseUrl)
  .then(res => res.json())
  .then(usersId => {
    console.log(userId)


    let returnButton = document.createElement('div')
    returnButton.classList.add('BtnReturn')

    let returnBtn = document.createElement('h4')
    returnBtn.innerHTML = `
    <h4 id="returnButton">Return back</h4>
    `
    returnBtn.addEventListener('click',() =>{
      location.href = 'index.html'
    })

    returnButton.appendChild(returnBtn)
    document.body.appendChild(returnButton)

    let main = document.createElement('div')
    main.classList.add('MainDiv')
    document.body.appendChild(main)
    for (let resultUserKey in usersId){

      console.log(resultUserKey)

      let divUser = document.createElement('divUserKey');
      if(resultUserKey === 'address' || resultUserKey === 'company' ){



        for (const UserKey in usersId[resultUserKey]) {
          let p = document.createElement('h4');
          main.appendChild(p);

          let geo = usersId[resultUserKey][UserKey];
          if (UserKey === 'geo' && typeof geo === 'object'){
            p.innerText = `${UserKey} - lat: ${geo.lat}, lng: ${geo.lng}`
          }else {
            p.innerText = `${UserKey} - ${geo}`
          }

        }

      }else{

        let div_User = document.createElement('h3')
        main.appendChild(div_User)
        div_User.innerText = `${resultUserKey} - ${usersId[resultUserKey]}`

        main.appendChild(divUser)

      }
    }

    let underBox = document.createElement('div')
    underBox.classList.add("BtnDiv")

    let Button = document.createElement('h3')
    let BlockButton = document.createElement('h3')
    BlockButton.classList.add("BlockBtnDiv")
    BlockButton.innerHTML = `
    <h3><a>Post of current user</a></h3>

    `

    BlockButton.addEventListener('click', () => {

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts =>{
          console.log(posts)
          let h3TitleSign = document.createElement('h3')
          h3TitleSign.classList.add('TitleSign')
          h3TitleSign.innerHTML = `<h3>Titles</h3>`
          document.body.appendChild(h3TitleSign)

          let titleList = document.createElement('div')

          document.body.appendChild(titleList)

          titleList.classList.add("titleList")

          for (const post of posts){



            let h3Title = document.createElement('h3')
            h3Title.classList.add('titleBlock')
            h3Title.innerHTML = `<div><h3>${post.title}</h3></div>`
            let TitleButton= document.createElement('h4')
            TitleButton.classList.add('TitleButton')
            TitleButton.innerHTML = `<h4>See full details</h4>`
            h3Title.append(TitleButton)
            titleList.append(h3Title)

            TitleButton.addEventListener('click', () =>{
              localStorage.setItem('userId', JSON.stringify({userId: userId}))
              location.href = 'post-details.html?postId='+ post.id;
            })
          }


        })

    })

    Button.appendChild(BlockButton)
    underBox.appendChild(Button)
    document.body.appendChild(underBox)

  });
