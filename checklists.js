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