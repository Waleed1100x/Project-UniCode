// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
const printphone = document.getElementById('Phonee');
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            
            buildTable(userData.toLocaleLowerCase());
        }
        emptyArray = phone.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data.name = `<li>${data.name}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
       buildTable(selectData);
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
// Function buildTable
function buildTable(search){
    let s = `<li>${search}</li>`;
let table = document.getElementById("table-group-divider");
    for(var i = 0; i< phone.length ; i++){
        if(phone[i].name.toLocaleLowerCase()== s.toLocaleLowerCase()){
        var row = `
        <tr>
        <th scope="col">${phone[i].brand}</th>
        <th scope="col">${phone[i+1].brand}</th>
        </tr>
        <tr> 
        <td>${phone[i].name}</td>
        <td>${phone[i+1].name}</td>
        </tr>
        <tr> 
        <td>${phone[i].Battery}</td>
        <td>${phone[i+1].Battery}</td>
        </tr>
        <tr> 
        <td>${phone[i].Size}</td>
        <td>${phone[i+1].Size}</td>
        </tr>
        <tr> 
        <td>${phone[i].Released}</td>
        <td>${phone[i+1].Released}</td>
        </tr>`
        table.innerHTML += row
        
        }}
}
// end of function buildTable