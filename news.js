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


const loadAllNews = async(category_id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await response.json();
    displayNews(data.data);
  
}


const displayNews = (categoryNewses) =>{
  console.log(categoryNewses);
    const categorydiv = document.getElementById("card-container");
    categorydiv.innerText='';



    const noItem = document.getElementById('no-item')
    if(categoryNewses.length === 0){
     noItem.classList.remove('hidden')
      
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
   
   <div> <i class="fa-solid fa-arrow-right"></i></div>
   </div>
   
  </div>
        
        `;
        categorydiv.appendChild(div);
    });
}




setMenus();
displayCategories();
// setNews();
displayNews();




 
