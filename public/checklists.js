class Checklist {
    constructor(items, repeats = false) {
        this.items = items;
        this.repeats = repeats;
    }
}

class ChecklistItem {
    constructor(text, complete = false) {
        this.text = text;
        this.complete = complete;
    }
}

function drawChecklist(id, checklist) {
    const location = document.getElementById(id);
    location.setAttribute("class", "checklist");
    checklist.items.forEach((item) => addChecklistItemElement(location, item));
}

function addChecklistItemElement(location, item) {
    const checklistItemElement = document.createElement("div");
    checklistItemElement.setAttribute("class", "checklist-item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checklistItemElement.appendChild(checkbox);

    const inputbox = document.createElement("input");
    checklistItemElement.appendChild(inputbox);

    location.append(checklistItemElement);
    location.append(document.createElement("div"))
}

// Used for sample values
function generateSampleChecklist() {
    const item1 = new ChecklistItem("This is sample #1");
    const item2 = new ChecklistItem("This is sample #2");
    const item3 = new ChecklistItem("This is sample #3");
    const items = [item1, item2, item3];

    return new Checklist(items);
}

window.addEventListener("load", () => {
    const sampleChecklist = generateSampleChecklist();
    drawChecklist("content", sampleChecklist);
});