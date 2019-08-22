function checkLocalCapabilities() {
    checkServiceWorkerCapability();
    checkLocalVibrateCapability();
}

function checkServiceWorkerCapability() {
    if (!("serviceWorker" in navigator)) {
        const checkbox = document.getElementById("WebWorker");
        checkbox.disabled = true;

        const warning = createWarning("WebWorker");

        const wrapper = document.getElementById("WebWorkerWrapper");
        wrapper.appendChild(warning);
    } else {
        navigator.serviceWorker.register('./sw.js');
    }
}

function checkLocalVibrateCapability() {
    if (!("vibrate" in navigator)) {
        const checkbox = document.getElementById("LocalVibrate");
        checkbox.disabled = true;

        const warning = createWarning("LocalVibrate");

        const wrapper = document.getElementById("LocalVibrateWrapper");
        wrapper.appendChild(warning);
    }
}

function startLocalServices() {
    startSound();
    startVibrate();
}

function startSound() {
    if (checkOptions("LocalSound")) {
        playSound();
    }
}

function startVibrate() {
    if (checkOptions("LocalVibrate")) {
        playVibrate();
    }
}
