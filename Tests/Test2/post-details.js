//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = new URL(location.href).searchParams.get('postId');
console.log(postId);
let CommentsUrl = `https://jsonplaceholder.typicode.com/comments/${postId}`


let returnButton2 = document.createElement('div')
returnButton2.classList.add('BtnReturn')

let returnBtn = document.createElement('h4')
returnBtn.innerHTML = `
    <h4 id="returnButton2">Return back to the users list</h4>
    `
returnBtn.addEventListener('click',() =>{
  location.href = 'index.html'
})

returnButton2.appendChild(returnBtn)
document.body.appendChild(returnButton2)

let returnButton3 = document.createElement('div')
returnButton3.classList.add('BtnReturn')

let returnBtn2 = document.createElement('h4')
returnBtn2.innerHTML = `
    <h4 id="returnButton2">Return back to the user info</h4>
    `
returnBtn2.addEventListener('click',() =>{

  location.href = `user_details.html?id=` + postId;



})

returnButton3.appendChild(returnBtn2)
document.body.appendChild(returnButton3)

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(value => value.json())
  .then(posts => {

      for (let postInfoKey in posts) {
        if (postInfoKey === 'id' || postInfoKey === 'title' || postInfoKey === 'body') {

          let PostBlock = document.createElement('div')
          PostBlock.classList.add('PostBlock')
          document.body.appendChild(PostBlock)
          let PostInfo = document.createElement('div')
          PostInfo.classList.add('PostInfoBlock')


          let h3 = document.createElement('h3')
          h3.classList.add('InfoText')
          h3.innerText = `${postInfoKey}`
          let h2 = document.createElement('h3')
          h2.innerText = `${posts[postInfoKey]}`
          h3.appendChild(h2)
          PostInfo.appendChild(h3)
          PostBlock.appendChild(PostInfo)

        }

      }
      let h3CommentSign = document.createElement('h3')
      h3CommentSign.classList.add('CommentSign')
      h3CommentSign.innerHTML = `<h3>Comments</h3>`
      document.body.appendChild(h3CommentSign)
    }

  )


fetch(CommentsUrl)
  .then(value => value.json())
  .then(comments => {

    console.log(comments)

    for (let commentKey in comments) {
      if (commentKey === 'id' || commentKey === 'name' || commentKey === 'email' || commentKey === 'body') {

        let CommentBlock = document.createElement('div')
        CommentBlock.classList.add('CommentInfoBlock')
        document.body.appendChild(CommentBlock)

        let CommentId = document.createElement('div')
        CommentId.classList.add('CommentBlock')

        let h3Comment = document.createElement('h3')
        h3Comment.classList.add('CommentText')
        h3Comment.innerText = `${commentKey}`
        let h2 = document.createElement('h3')
        h2.innerText = `${comments[commentKey]}`
        h3Comment.appendChild(h2)
        CommentId.appendChild(h3Comment)
        CommentBlock.appendChild(CommentId)
      }
    }
    let lineBetweenComments = document.createElement('div')
    lineBetweenComments.classList.add('LineComments')
    document.body.appendChild(lineBetweenComments)




  });
