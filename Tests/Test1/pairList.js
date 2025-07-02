//////Pair array//////

let id = 0

let list = JSON.parse(localStorage.getItem('pairs'))

if (list === null){

    console.log('list is empty')

}else{

console.log(list)

}
//////Add pair to the list storage/////

function addPair () {

    const test = document.getElementById('inputBox')

    const text = test.value

    if (!text.includes('=') || text.startsWith('=') || text.endsWith('=') || !text === undefined){

        console.log('Write something or put between Name and Value with symbol =')

    }else{

        const [name, value] = text.split('=')


        const pairList = {

            id: id,
            name: name,
            value: value,

        };

        if (pairList.name === list.name && pairList.value === list.value){

            console.log('Come up with something original!')

        }else{

            list.push(pairList)

            console.log(list)

            localStorage.setItem('pairs', JSON.stringify(list));
        }
    }

    id++;
}

/////Show pair on window list/////


if (list === null){

    console.log('list is empty')

}else{

    for (const pair of list){

        let pairListText = document.getElementById('div')

        document.body.appendChild(pairListText)

        pairListText.classList.add('pairListText')

        pairListText.innerHTML = `<div>${pair.name}=${pair.value}</div>`

        console.log(`${pair.name}=${pair.value}`)

    }

}



/////Sort by Name function/////



/////Sort by Value function/////



/////Delete function/////

function deletePair() {
    
}