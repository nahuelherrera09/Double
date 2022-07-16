document.addEventListener('DOMContentLoaded', function() {
    const category = document.getElementById('category');
    const newCategory = document.getElementById('newCategory');
    const categorySection = document.getElementById('categories');
    const table = document.getElementById('table');
    const deleteBtn = document.getElementById('deleteBtn')
    let id = 1;
    let tracks = []

    //CONST ADD MUSIC
    const link = document.getElementById('link');
    const addMusicForm = document.getElementById('addMusicForm');
    const name = document.getElementById('name');
    const sendNewMusic = document.getElementById('sendNewMusic')
    const select = document.getElementById('select');

    sendNewMusic.addEventListener('click',addMusic)
    newCategory.addEventListener('click', addOption)



    function deleteRow(id){
      document.getElementById(id).remove();
    };

   


    //añadir option
    function addOption(e){
      e.preventDefault();
      const option = document.createElement('option');
      let value = category.value;

      option.value = value;
      option.text = value;

      select.appendChild(option)
    };


    //agregar musica
    function addMusic(e){
        e.preventDefault();
 
        let row = table.insertRow();
        row.setAttribute('id', id++)
  
        row.innerHTML = `
        
                          <td class="px-6 py-3 font-semibold border">${name.value}</td>
                          <td class="px-6 py-3 font-semibold border"><a href="${link.value}" target="_blank"> Youtube</a></td>
                          <td class="px-6 py-3 font-semibold border">${select.value}  </td>
                          <td class="border">  </td> 
                          <td class="border">  </td>
                          </svg> </button></td>
                      
        `
      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = `<button id="delete"> <svg class="" width="20" heigth="10"viewBox="0 0 20 20" fill="#ff4848">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg></button> `

    const favBtn = document.createElement('button')
    favBtn.innerHTML = `<button id="fav"> <svg class="fv" id="svgFav" width="20" heigth="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg> </button>
    `
   
    
      
    const track = {
      name: name.value,
      link: link.value,
      category: select.value,
      id: row.id  
    }


    tracks = [...tracks,track]

    
    console.log(tracks)
 

    removeBtn.onclick = function (e){
      deleteRow(row.getAttribute('id'))
    }
    row.children[4].appendChild(favBtn)
    row.children[3].appendChild(removeBtn);

        
    }
    
    

 
    

     

})