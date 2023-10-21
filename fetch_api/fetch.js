
let urlss = 'https://dogapi.dog/api/v2/breeds?page[number]=1';

 fetch(urlss).then(
    (response) =>{ 
        return response.json()
    })
 .then(
    (data) => {
        let apis = ''
        for(let i = 0; i < data.data.length; i++){
            
            console.log(data.data[i])
 
       apis += `
       <div class="card" style="width: 50%;display:flex;place-items:center;margin-left:25%;margin-top:30px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;padding:5px;font-size:1rem;font-weight:400px;cursor: pointer;"> 
       <div class="card-body">
         <p class="card-title">ID :${data.data[i].id}</p>
         <p class="card-text">BreedName :${data.data[i].attributes.name}</p>
         <p class="card-text">LifeTime :${data.data[i].attributes.life.min} to ${data.data[i].attributes.life.max}  </p>
         <p class="card-text">Male_weight :${data.data[i].attributes.male_weight.min} to ${data.data[i].attributes.male_weight.max}  </p>
         <p class="card-text">Female_weight :${data.data[i].attributes.female_weight.min} to ${data.data[i].attributes.female_weight.max}  </p>
         <p class="card-text">LifeTime :${data.data[i].attributes.life.min} to ${data.data[i].attributes.life.max}  </p>
          <span style ="color : red;font-size:2em;"><u>Breed Discription</u></span>
         <p   style ='box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;border:none;outline:none;border-radius:3px;padding:5px;'>
         ${data.data[i].attributes.description}
         </p>
         </div>  
     </div> 
       `
       document.querySelector('.container').innerHTML = apis;

    }}
    ).catch(
    (err) => console.log(err)  
 )


