//  we want to get the element the  from the html

    let inputBox = document.querySelector(".inputBox")
    let buttonSearch=document.querySelector(".buttonSearch")
    let meaning = document.querySelector('.meaning');
    
//we want to use async function for efficient output
async function search() {
        // for  error handling we can use try and catch
    try {
    // get the word from the user and store 
        const word = inputBox.value;
        // api link is  fetched and converted to json 
   let res=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
   let data=await res.json();
//  console.log(data)
        let meaningword = data[0].meanings;
        
        //we want  to create the list and list items

        let list = document.createElement('ul')
        list.style.listStyleType = 'none';
        //use the loop for meaning handle

    for(let partOfSpeech of meaningword ){
        let listItem = document.createElement('li');
        // to append the inner html listItem

        listItem.innerHTML = ` <b class="red">Part Of Speech : ${partOfSpeech.partOfSpeech}</b>`;
        // to create the order list in the sublist

        let subList = document.createElement('ol');
        
    for (let definition of partOfSpeech.definitions) {
            let subListItem = document.createElement('li');
            subListItem.innerHTML = `${definition.definition}`;
            subList.appendChild(subListItem);
        }

        // append the sublist to the list item
        listItem.appendChild(subList);

        // append the list items to the main list
        list.appendChild(listItem);
    }

meaning.innerHTML=``;
meaning.appendChild(list);
}
catch (error) {
    console.log('error fetching the meaning', error);
}
}
