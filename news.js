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
    categoryNewses ?.forEach(categoryNews => {
        console.log(categoryNews);
        const div= document.createElement('div');
        div.classList.add('decoration');
    
        div.innerHTML=`
        <figure><img src="${categoryNews.image_url}" alt="Movie"></figure>
  <div class="card-body">
    <h2 class="card-title">${categoryNews.title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="card-actions ">
      <button class="btn btn-primary">Watch</button>
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




 
