//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = new URL(location.href).searchParams.get('postId');
console.log(postId);


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

    const userId = JSON.parse(localStorage.getItem('userId'))

    location.href = `user_details.html?id=` + `${userId.userId}`;



})

returnButton3.appendChild(returnBtn2)
document.body.appendChild(returnButton3)

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(posts => {

            let postInfoBlock = document.createElement("div")
            postInfoBlock.classList.add('postInfoBlock')
            document.body.appendChild(postInfoBlock)

            for (let postInfoKey in posts) {
                if (postInfoKey === 'title' || postInfoKey === 'body') {

                    let PostBlock = document.createElement('div')
                    PostBlock.classList.add('PostBlock')
                    document.body.appendChild(PostBlock)
                    let PostInfo = document.createElement('div')
                    PostInfo.classList.add('PostInfoBlock')


                    let h2 = document.createElement('h2')
                    h2.classList.add('InfoText')
                    h2.innerText = `${postInfoKey}`
                    let h3 = document.createElement('h5')
                    h3.innerText = `${posts[postInfoKey]}`
                    h2.appendChild(h3)
                    PostInfo.appendChild(h2)
                    PostBlock.appendChild(PostInfo)
                    postInfoBlock.append(PostBlock)

                }

            }
            let h3CommentSign = document.createElement('h3')
            h3CommentSign.classList.add('CommentSign')
            h3CommentSign.innerHTML = `<h3>Comments</h3>`
            document.body.appendChild(h3CommentSign)
        }

    )

setTimeout(() => {


    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
        .then(comments => {

            console.log(comments)

            let InfoBlockComment = document.createElement('div')
            InfoBlockComment.classList.add('commentInfoBlockList')
            document.body.appendChild(InfoBlockComment)

            for (const comment of comments) {


                let CommentBlock = document.createElement('div')
                CommentBlock.classList.add('CommentInfoBlock')
                document.body.appendChild(CommentBlock)

                let CommentId = document.createElement('div')
                CommentId.classList.add('CommentBlock')

                let h2Comment = document.createElement('h2')
                h2Comment.classList.add('CommentText')
                h2Comment.innerHTML = `</div><h3>${comment.name}</h3><br><div class="LineComments"></div>`
                let h3 = document.createElement('h3')
                h3.innerHTML = `<h3 style="background-color: dodgerblue; color: white; border-radius: 50px; width: 50%; text-align: center">${comment.email}</h3><br><h4>${comment.body}</h4>`
                h2Comment.appendChild(h3)
                CommentId.appendChild(h2Comment)
                CommentBlock.appendChild(CommentId)
                InfoBlockComment.append(CommentBlock)


            }


        });

}, 1000);