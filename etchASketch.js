    const sketchBox = document.querySelector('#sketchBoxes');

function createBox(){ 
      for(i=0;i < boxInput ;i++) { 
      const boxes = document.createElement('div') ;
      boxes.classList.add('box');
      sketchBox.appendChild(boxes);
    }
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

    function clearCanvas(){
      boxPlural.forEach( boxes => {
        boxes.classList.remove("changedColor")
      })
}

    const button = document.querySelector('.btn')
    function askUser(){
        pixelInput = prompt("Enter squared pixel size amount for the box,Max(64).");
        boxInput = pixelInput * pixelInput;
        fontInput =  400 / pixelInput;
         

        createBox();
        const boxPlural = document.querySelectorAll('.box');

        boxPlural.forEach(boxes => {
        boxes.style.width = `${fontInput}px`;
        boxes.style.height = `${fontInput}px`;
        })

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

        function clearCanvas(){
          boxPlural.forEach( boxes => {
            boxes.classList.remove("changedColor")
          })
        }
        clearBtn.addEventListener('click',clearCanvas);
        
      }
          
          button.addEventListener('click',askUser);
          const clearBtn = document.querySelector('.clear');
        


          function clearCanvas(){
            boxPlural.forEach( boxes => {
              boxes.classList.remove("changedColor")
            })
      }
    clearBtn.addEventListener('click',clearCanvas);
     