

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

function clickMenu(){
    if(items.style.display == 'flex'){
        items.style.display = 'none'
    }else{
        items.style.display = 'flex'
    }
    
}

function clickCombo(){
    if(kit.style.display == 'block'){
        kit.style.display = 'none'
    }else(kit.style.display = 'block') 
    
    if(monte.style.display = 'block'){
        monte.style.display = 'none'
    }

    if(bebida.style.display = 'block'){
        bebida.style.display = 'none'
    }
    
    if(hamburguer.style.display = 'block'){
        hamburguer.style.display = 'none'
    }
  }
   


function clickMonte() {
    if(monte.style.display == 'block'){
        monte.style.display = 'none'
    } else(monte.style.display = 'block')
    
    if(kit.style.display = 'block'){
        kit.style.display = 'none'
    }

    if(bebida.style.display = 'block'){
        bebida.style.display = 'none'
    }

    if(hamburguer.style.display = 'block'){
        hamburguer.style.display = 'none'
    }
}


function clickBebida(){
    if(bebida.style.display == 'block'){
        bebida.style.display = 'none'
    } else(bebida.style.display = 'block')

    if(kit.style.display = 'block'){
        kit.style.display = 'none'
    }

    if(monte.style.display = 'block'){
        monte.style.display = 'none'
    }
    if(hamburguer.style.display = 'block'){
        hamburguer.style.display = 'none'
    }
}

function clickHamburguer(){
    if(hamburguer.style.display == 'block'){
        hamburguer.style.display = 'none'
    }else{
        hamburguer.style.display = 'block'
        if(kit.style.display = 'block'){
            kit.style.display = 'none'
        }}
        if(monte.style.display = 'block'){
            monte.style.display = 'none'
        }
        if(bebida.style.display = 'block'){
            bebida.style.display = 'none'
        }
    }








