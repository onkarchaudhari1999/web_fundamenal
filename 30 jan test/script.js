console.log("hi")

function mysearch(){
  var country = document.getElementById("country").value;
  if(country==""){
    console.log("enter country name");
    return 
    }
    else{
      showtable(country);
}

}
function showtable(country){
  console.log(country);
  var table = document.getElementById("table");  
  var URL = `http://universities.hipolabs.com/search?country=${country}`;
  fetch(URL)
    .then((response) => {
      
      return response.json();
    }).catch((error) =>{
        return "facthing failed";
    })
    .then((data) => {
      
        
      for (let i = 0; i < data.length; i++) {
          var tr= document.createElement("tr");
          var td1=document.createElement("td");
          var td2=document.createElement("td");
          var td3=document.createElement("td");
          var td4=document.createElement("td");

          td1.innerText = data[i].country;
          td2.innerText=data[i].domains;
          td3.innerText=data[i].name;
          td4.innerText=data[i].web_pages;
          tr .appendChild(td1);
          
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          table.appendChild(tr);
          
      }
    }).catch((error)=>{
        return "failed";
    })
}