//////Pair array//////

let defaultList = JSON.parse(localStorage.getItem('pairs')) || []



defaultList.sort(function (a, b){

    return a.id - b.id

});




console.log(defaultList)

localStorage.setItem('pairs', JSON.stringify(defaultList))


let list = JSON.parse(localStorage.getItem('pairs')) || []

let id = 0

if (list.length === 0){

    console.log('list is empty')

}else{

    console.log('list have filled')

    if (list.length === list.length){

        let lastId = list.length

        id = (lastId)

        console.log(id)

    }

}
//////Add pair to the list storage/////

function addPair () {

    const test = document.getElementById('inputBox')

    const text = test.value

    const [name, value] = text.split('=')

    if (!text.includes('=') || text.startsWith('=') || text.endsWith('=') || !text === undefined || !/^[A-Za-z\s]+$/.test(name) && !/^[A-Za-z\s]+$/.test(value)){

        console.log('Put between Name and Value with symbol =. Only words!')

    }else{

        console.log('test')




        const pairList = {

            id: id,
            name: name,
            value: value,

        };



        console.log('test!')


        list.push(pairList)

        console.log(list)

        localStorage.setItem('pairs', JSON.stringify(list));

        id++;

    }


}

/////Show pair on window list/////


if (list.length === 0){

    console.log('list is empty')

}else{

    for (const pair of list){

        let div = document.getElementById('div')

        document.body.appendChild(div)

        div.classList.add('pairListText')

        div.innerHTML = `<div>${pair.name}=${pair.value}</div>`

        console.log(`${pair.name}=${pair.value}`)

    }

}



/////Sort by Name function/////

function sortByName() {

    let sortedName = list.sort(function (a, b){
        return a.name.localeCompare(b.name)
    })

    console.log(sortedName)

    localStorage.setItem('pairs', JSON.stringify(sortedName));



}

/////Sort by Value function/////

function sortByValue() {

    let sortedValue = list.sort(function (a, b){
        return a.value.localeCompare(b.value)
    })

    console.log(sortedValue)

    localStorage.setItem('pairs', JSON.stringify(sortedValue));



}



/////Delete function/////

function deletePair() {

    console.log('Delete test')
    
}