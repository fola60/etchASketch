    const sketchBox = document.querySelector('#sketchBoxes');

      for(i=0;i < 256;i++) { 
      const boxes = document.createElement('div') ;
      boxes.classList.add('box');
      sketchBox.appendChild(boxes);
    }

    const boxPlural = document.querySelectorAll('.box');

    function changeDiv(){
 
         boxes.classList.add("changedColor")
    }
    
    boxPlural.forEach(boxes => {
      function changeDiv(){
        boxes.classList.add("changedColor")
    }
      function removeDiv(){
        boxes.classList.remove("changedColor")
    }
      boxes.addEventListener('mouseenter', changeDiv)
      boxes.addEventListener('mousedown',removeDiv)
    })
     const button = document.querySelector('.btn')
    //  function askUser(){
    //     const pixelInput = prompt("How are you");
    //   }
    
     button.addEventListener('click',askUser)
     