const actions = [
    {
        action: "pasta-action",
        title: "Pasta",
        icon: "./assets/pasta.svg"
    },
    {
        action: "map-action",
        title: "Map",
        icon: "./assets/map-marker-outline.svg"
    }
];

const options = {
    body: {
        value: "General Kenobi, you're a bold one",
        description: "Body"
    },
    icon: {
        value: "./assets/pasta.svg",
        description: "Icon"
    },
    image: {
        value: "./assets/proxy.duckduckgo.com.jpg",
        description: "Image"
    },
    badge: {
        value: "./assets/police-badge-outline.svg",
        description: "Badge"
    },
    sound: {
        value: "./assets/481138__erokia__msfxp2-420.wav",
        description: "Sound"
    },
    requireInteraction: {
        value: true,
        description: "Persist"
    },
    actions: {
        value: actions,
        description: "Actions"
    },
    tag: {
        value: "tag-heuer",
        description: "Merge"
    },
    vibrate: {
        value: [200, 100, 200, 100, 200, 100, 400],
        description: "Vibration"
    }
};

function getOptions() {
    const userOptions = {};

    for (option in options) {
        if (checkOptions(option)) {
            userOptions[option] = options[option].value;
        }
    }

    return userOptions;
}

function checkOptions(key) {
    const element = document.getElementById(key);
    return element.checked;
}

function generateOptions() {
    const form = document.getElementById("form");

    for (option in options) {
        form.appendChild(createOption(option));
    }
};

function createOption(key) {
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("valign-wrapper");

    div.appendChild(createCheckbox(key));
    div.appendChild(createDescription(options[key].description));
    div.appendChild(createWarning(key));
    return div;
}

function createCheckbox(key) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = key;
    checkbox.disabled = !(key in Notification.prototype);

    const span = document.createElement("span");
    span.classList.add("lever");

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(span);

    const div = document.createElement("div");
    div.classList.add("switch");
    div.appendChild(label);


    return div;
};

function createDescription(description) {
    const text = document.createTextNode(description);

    const span = document.createElement("span");
    span.appendChild(text);

    return span;
}

function createWarning(key) {
    const span = document.createElement("span");

    if (!(key in Notification.prototype)) {
        const text = document.createTextNode(`(your browser does not support ${key})`);
        span.appendChild(text);

        span.classList.add("red-text");
        span.style.cssText = "padding-left: 5px;";
    }

    return span;
}

generateOptions();
