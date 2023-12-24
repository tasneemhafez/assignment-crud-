 var  bookmarkName = document.getElementById("bookmarkName");
 var  bookmarkURL = document.getElementById("bookmarkURL");

 if(localStorage.getItem("Books")!= null){

    BookList = JSON.parse(localStorage.getItem("Books"));

    displayData()

}
var BookList =[];


 function addBook(){
   if(validitionName()== true && validitionUrl()==true){
      var Book = {
         name: bookmarkName.value,
         url: bookmarkURL.value
      };
      BookList.push(Book)
      localStorage.setItem("Books", JSON.stringify(BookList))
      calerBook()
     displayData()
     console.log(BookList);
   
   }
}
function calerBook(){
bookmarkName.value = "";
bookmarkURL.value ="";

}



function displayData(){
    var cartona = "";
    for( i=1 ; i < BookList.length ; i++){
       cartona += `<tr>
       <td>${i}</td>
       <td>${BookList[i].name}</td>
       <td><button class="btn btn-visit btn-success"><a href="${BookList[i].url}"><i class="fa-solid fa-eye px-2"></i>vist</a></button></td>
       <td><button onclick="deletItem(${i})"class="btn btn-danger"><i class="fa-solid fa-trash px-2"></i>delet</button></td
      </tr>`
       
    }
    document.getElementById("tabelBody").innerHTML = cartona;
}
function deletItem(index){
BookList.splice(index , 1)
localStorage.setItem("Books", JSON.stringify(BookList))
 console.log(BookList)
 displayData()
}

var nameMassage = document.getElementById('nameMassage')
function validitionName () {
  var text=(bookmarkName.value)
  var regexName =/^[A-Z][a-z]{3,20}$/;
  console.log(regexName.test(text))
  if (regexName.test(text)== true){
   bookmarkName.classList.add('is-valid');
   bookmarkName.classList.remove('is-invalid');
   nameMassage.classList.add("d-none")
   return true;
  }
  else{
   bookmarkName.classList.add('is-invalid');
   bookmarkName.classList.remove('is-valid');
   nameMassage.classList.remove("d-none")
   return false;
  }
}
var urlMassage = document.getElementById('urlMassage')
function validitionUrl(){
   var text=(bookmarkURL.value)
   var urlRegex =/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
   console.log(urlRegex.test(text))
   if (urlRegex.test(text)== true){
      bookmarkURL.classList.add('is-valid');
      bookmarkURL.classList.remove('is-invalid');
     urlMassage.classList.add("d-none")
      return true;
     }
     else{
      bookmarkURL.classList.add('is-invalid');
      bookmarkURL.classList.remove('is-valid');
     urlMassage.classList.remove("d-none")
      return false;
     }
}