document.getElementById(`get_data`).addEventListener(`click`,getData)
function getData(){
  let xhr=new XMLHttpRequest()
  let number=document.getElementById(`number_jokes`).value
  xhr.open(`GET`,`http://api.icndb.com/jokes/random/${number}`,true) //here is the link
  xhr.onprogress=function(){
    //Loading Portion
    document.getElementById(`output`).innerHTML=`<h1>LOADING...
    THANKS FOR YOUR PATIENCE</h1>`
  }
  xhr.onload=function(){
    if(this.status===200){
      let data=JSON.parse(this.responseText)
      let jokes=data.value
      let output=`<ol>`
      jokes.forEach(function(items){
      output+=`<li>${items.joke}</li>`
      })
      document.getElementById(`output`).innerHTML=output
      output+=`</ol>`
    }
  }
  xhr.send()

}