document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    const ingredients = JSON.parse(localStorage.getItem('ownedItems'));
    const card = document.getElementById("card");
    const dropZoneUL = document.getElementById("drop-zone-UL");
    const dropZoneUR = document.getElementById("drop-zone-UR");
    const dropZoneBL = document.getElementById("drop-zone-BL");
    const dropZoneBR = document.getElementById("drop-zone-BR");

    const dropZones = [dropZoneUL, dropZoneUR, dropZoneBL, dropZoneBR];

ingredients.forEach(function(ingredient) {
    if (ingredient) {
        // Set elements draggable only if they exist
        currentIngredient = document.getElementById(ingredient);
        currentIngredient.draggable = true;

        currentIngredient.addEventListener('dragstart', function(event) {
            console.log('Drag Start:', event);
            localStorage.setItem('draggingIngredient', ingredient);
            console.log(ingredient);
        });
    }
});

dropZones.forEach(function(dropZone) {
    if (dropZone) {
        dropZone.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
        dropZone.addEventListener('drop', function(event) {
            event.preventDefault(); // Prevent default action
            const itemDragged = localStorage.getItem('draggingIngredient');
            dropZone.prepend(document.getElementById(itemDragged));
            
            // Adjusting styles on drop
            ingredients.forEach(function(ingredient) {
                if (ingredient) {
                    document.getElementById(ingredient).style.width = "300px";
                    document.getElementById(ingredient).style.height = "250px";
                }
            });
        });
    }
});
});
// Your openNav and closeNav functions remain unchanged

var counter = 0;
function openNav(x)
{
    document.getElementById("sideNav-content").style.display = "block";
    console.log(counter);
    if (counter < 1){
        document.getElementById("sideNav").style.width = "200px";
        x.classList.toggle("change");
        counter += 1;
    }
    else
    {
       closeNav();
    }        
}
function closeNav()
{
    document.getElementById("sideNav").style.width = "50px";
    document.getElementById("sideNav-content").style.display = "none";
    counter = 0;
}