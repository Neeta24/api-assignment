const loadAllMenus = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data;

}

  const setMenus = async()=>{
    const data =await loadAllMenus();
    
    displayCategories(data.data.news_category);
   
  
  }

const displayCategories = category =>{
  
    const ulContainer = document.getElementById("ul-container");
    category ?.forEach(categoryName => {
        console.log(categoryName.category_name);
        const li= document.createElement('li');
    
        li.innerHTML=`
       <a onclick ="loadAllNews('${categoryName.category_id}')">${(categoryName.category_name)}</a>
        
        `;
        
        ulContainer.appendChild(li);
    });
   
}
 const toggleLoader = isloading =>{
  const loaderSection = document.getElementById('loader');
  if(isloading){
    loaderSection.classList.remove('hiddden')
  }

   else{
    loaderSection.classList.add('hiddden')
   }
 }

const loadAllNews = async(category_id)=>{
  toggleLoader(true);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await response.json();
    
    displayNews(data.data);
     return data;
     
  
}


const displayNews = (categoryNewses) =>{
  console.log(categoryNewses);
  
    const categorydiv = document.getElementById("card-container");
    categorydiv.innerText='';

    const noItem = document.getElementById('no-item')
    if(categoryNewses.length === 0){
     noItem.classList.remove('hidden')
      
    }
    else{
      noItem.classList.add('hidden')
    }
    categoryNewses ?.forEach(categoryNews => {
        console.log(categoryNews);
        const div= document.createElement('div');
        div.classList.add('decoration');
    
        div.innerHTML=`
        <figure><img src="${categoryNews.image_url}" alt="Movie"></figure>
  <div class="card-body">
    <h2 class="card-title">${categoryNews.title}</h2>
    <p>${categoryNews.details.length >200 ? categoryNews.details.slice(0,200) + '...'  : categoryNews.details}</p>

   <div class="grid gap-4 grid-cols-3 display-inline mt-4">
   <div>
   <img height="20" width="30" class="image-style" src="${categoryNews.author.img}" alt="Movie">
   <span  class ="flex-1">${categoryNews.author.name}</span><br><span>${categoryNews.author.published_date}</span>
   </div>
   <div class ="mt-4"> <i class="fa-regular fa-eye"><span class ="mx-4">${categoryNews.total_view}</span></i></div>
   
   <div class ="mt-4"><label for="my-modal-3" onclick ="showModal('${categoryNews.image_url}','${categoryNews.title}')" class="btn modal-button">show More</label></div>
   
   </div>
   
  </div>
        
        `;
        categorydiv.appendChild(div);
    });
    toggleLoader(false)
    
}
const showModal = (descriptions,image)=>{
//  console.log(descriptions,image);
const modalBody = document.getElementById('modal-body');
modalBody.innerHTML=`
<p class="py-4">${categoryNews.title}</p> 
<img src="${categoryNews.image_url}" />
`
}



setMenus();
displayCategories();
// setNews();
displayNews();




 
