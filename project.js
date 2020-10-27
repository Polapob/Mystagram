function appendImageElem(keyword,index){
    const imgElem = document.createElement("img");
    imgElem.src = `https://source.unsplash.com/400x400/?${keyword}&sig=${index}`;
    console.log(imgElem.src)
    const galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(imgElem);
}
function searchPhotos(event){
    const keyword = event.target.value;
    if (event.key === "Enter" && keyword){
        removePhotos()
        for (let i =1;i<=9;i++){
            appendImageElem(keyword,i)
        }
    }
}
function removePhotos(){
    const galleryElem = document.querySelector(".gallery");
    galleryElem.innerHTML = "";
}
function run(){
    const inputElem = document.querySelector("input");
    inputElem.addEventListener("keydown",searchPhotos);
}
run();

