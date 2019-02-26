let objects = [
    {
    },
];

function render() {

    // clear container
    let container = document.getElementById('protojs')
    container.innerHTML = "";

    // create a box for each object
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        let element = document.createElement('div')
        element.classList.add('object');
        
        // append meta information
        let idText = "ID: " + i;
        let parentID = objects.indexOf(Object.getPrototypeOf(object));
        let parentText = parentID >= 0 ? "Parent: " + parentID : "";
        let text = document.createTextNode(idText + " " + parentText);
        element.appendChild(text);

        // append attributes
        let list = document.createElement('ul');
        element.appendChild(list);
        for (attr in object) {
            let listElement = document.createElement('li');
           list.appendChild(listElement);

            let text = document.createTextNode(attr + ": " + object[attr]);
            listElement.appendChild(text);

        }

        // functionality to add children
        let childButton = document.createElement('button');
        childButton.onclick = () => {
            let child = Object.create(object);
            objects.push(child);
            render()

        }
        let buttonText = "Add Child";
        let buttonTextNode = document.createTextNode(buttonText);
        childButton.appendChild(buttonTextNode);
        element.appendChild(childButton);

        // functionality to add Attributes
        let attributeButton = document.createElement('button');
        attributeButton.onclick = () => {
            let key = prompt("Key?");
            let value = prompt("Value?");
            object[key] = value;
            render();

        }
        let attributeButtonText = "Add Attribute";
        let attributeButtonTextNode = document.createTextNode(attributeButtonText);
        attributeButton.appendChild(attributeButtonTextNode);
        element.appendChild(attributeButton);

        container.appendChild(element);
    }
   }

render()
