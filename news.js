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
       <a>${(categoryName.category_name)}</a>
        
        `;
        ulContainer.appendChild(li);
    });

}


const loadAllNews = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories/{category_id}');
    const data = await response.json();
    return data;

}

  const setNews = async()=>{
    const data =await loadAllNews();
   console.log(data);
  
  }


setMenus();
displayCategories();



 
