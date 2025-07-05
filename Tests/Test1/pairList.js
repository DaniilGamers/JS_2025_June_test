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

reloadList()

//////Add pair to the list storage/////

let divError = document.getElementById('errorBox')

divError.innerHTML = ''

function addPair () {



    const test = document.getElementById('inputBox')

    const text = test.value

    const [name, value] = text.split('=')

    if (!text.includes('=') || text.startsWith('=') || text.endsWith('=') || !text === undefined || !/^[a-zA-Z0-9]+$/.test(name) && !/^[a-zA-Z0-9]+$/.test(value)){

        console.log('Put between Name and Value with symbol =. Only words!')

        divError.innerHTML = `<h5>Put between Name and Value with '=' Only words!</h5>`

    }else{

        divError.innerHTML = ''


        const pairList = {

            id: id,
            name: name,
            value: value,

        };

        list.push(pairList)

        console.log(list)

        localStorage.setItem('pairs', JSON.stringify(list));

        id++;

        reloadList();

    }


}

/////Show pair on window list/////

let div = document.getElementById('pairListText')

let selectedPairs = []


function reloadList(){

    setTimeout(() => {

        let list = JSON.parse(localStorage.getItem('pairs')) || []

        div.innerHTML = '';

        if (list.length === 0){

            div.innerHTML = '<p>The list is empty</p>'
            return;

        }

        let emptySelect = true;

            for(const pair of list) {

                const p = document.createElement('p')

                p.innerText = pair.name + '=' + pair.value


                ///Event for selecting pairs for deletion///


                p.addEventListener('click', () => {



                    let found = false;

                    for (let i = 0; i < selectedPairs.length; i++){

                        if (selectedPairs[i].id === pair.id){

                            selectedPairs.splice(i,1)
                            found = true

                            p.style.backgroundColor = ""
                            p.style.color = ""

                            break

                        }

                    }

                    if (!found){

                        selectedPairs.push(pair)

                        console.log(selectedPairs)

                        emptySelect = false

                        p.style.backgroundColor = "royalblue"
                        p.style.color = "white"

                    }





                })

                div.appendChild(p)





        }

    }, 100)

}



/////Sort by Name function/////

function sortByName() {

    let sortedName = list.sort(function (a, b){
        return a.name.localeCompare(b.name)
    })

    localStorage.setItem('pairs', JSON.stringify(sortedName));

    reloadList()



}

/////Sort by Value function/////

function sortByValue() {

    let sortedValue = list.sort(function (a, b){
        return a.value.localeCompare(b.value)
    })



    localStorage.setItem('pairs', JSON.stringify(sortedValue));

    reloadList()



}


/////Delete function/////



function deletePair() {

    for (let i = 0; i < selectedPairs.length; i++){

        for(let j = 0; j < list.length; j++){

            if (selectedPairs[i].id === list[j].id){

                list.pop()

            }

        }

    }

    selectedPairs = []

    for (let i = 0; i < list.length; i++){

        list[i].id = i;

    }

    let refreshedList = (list)

    console.log(refreshedList)

    localStorage.setItem('pairs', JSON.stringify(refreshedList))

    reloadList()


    
}