function requestNotification() {
    Notification.requestPermission().then(status => {
        setNotificationStatus(status);
    });
}

function setNotificationStatus(status) {
    const statusEL = document.getElementById(("NotifStatus"));
    statusEL.innerText = status;

    let color;
    if (status == "granted") {
        color = "green-text";
    } else if (status == "default") {
        color = "orange-text";
    } else {
        color = "red-text";
    }
    statusEL.classList = [color];

    const button = document.getElementById("NotificationSender");
    button.disabled = status !== "granted";
}

function sendNotification() {
    const userOptions = getOptions();
    const timeout = getTimeout();

    setTimeout(() => {
        if (checkOptions("WebWorker")) {
            navigator.serviceWorker.ready.then(reg => {
                reg.showNotification("hello there", userOptions);
            });
        } else {
            const notification = new Notification("hello there", userOptions);
        }

        if (checkOptions("LocalSound")) {
            playSound();
        }
    }, timeout);
}

function getTimeout() {
    const time = document.getElementById("timeout").value;
    return parseFloat(time) * 1000 || 0;
}

function checkNotificationCapability() {
    if (!("Notification" in window)) {
        setNotificationStatus("Browser does not support notification");
        disableButtons();
    } else {
        setNotificationStatus(Notification.permission);
        checkServiceWorkerCapability();
    }
}

function disableButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
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

checkNotificationCapability();
