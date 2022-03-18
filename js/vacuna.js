const show = (arrow) => {    
    let paragraph = arrow.parentNode.nextElementSibling;
    if(arrow.classList.contains("down")){
        switchStyle(paragraph, arrow, "block", "up.png", "down", "up", "rgba(0, 0, 0, 0.24) 0px 3px 8px");
    }else{
        switchStyle(paragraph, arrow, "none", "down.png", "up", "down", "");
    }
}

const switchStyle = (paragraph, arrow, display, source, removedClass, addedClass, boxShadow) => {
    paragraph.style.display = display;
    arrow.setAttribute("src", "./images/" + source);
    arrow.classList.remove(removedClass);
    arrow.classList.add(addedClass);
    paragraph.parentNode.style.boxShadow = boxShadow;
}