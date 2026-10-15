const searchbtn=document.getElementById("search"); 
const girid = document.querySelector(".images")
const more = document.getElementById("more");
let page=1;
let currentSearch = "";
function Searchimg(result=true){
    if(result){
        girid.innerHTML="";
        page=1;
        currentSearch=document.getElementById("inpt").value
    }
    
    
fetch(`https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page}`,{
 headers:{
    Authorization:"QTl4h814vHge4rOLxtGIbWzZIg2zk0cx7hDfryPUS7PEGAAJpcU8UXFa"
 }
})
.then(api=>{
 return api.json()
})
.then(data=>{
console.log(data);
data.photos.forEach(photo => {
     const img= document.createElement("img")
    img.src=photo.src.medium;
    girid.appendChild(img);

    
});
if(data.photos.length<12){
    more.style.display="none"
} else{
     more.style.display="block"
}
})
.catch(err=> console.error(err)
)
more.style.display="block"
}
searchbtn.addEventListener("click",()=>{
    Searchimg(true)
})
more.addEventListener("click",()=>{
    page++;
     Searchimg(false)
})