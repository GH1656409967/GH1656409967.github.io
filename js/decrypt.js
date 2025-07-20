const _do_decrypt = (encrypted, password) => {
    const key = CryptoJS.enc.Utf8.parse(password);
    const iv = CryptoJS.enc.Utf8.parse(password.substr(16));

    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};

const _getPasswordHash = (raw) => CryptoJS.MD5(raw).toString();

const _getStorageKey = (group, index) =>
    group ? `group.${group}.password` : `${location.pathname}.password.${index}`;

const _decryptContainer = (container, password, storageKey) => {
    const cipherTextEl = container.querySelector(".hugo-encryptor-cipher-text");
    if (!cipherTextEl) return false;

    let decrypted;
    try {
        decrypted = _do_decrypt(cipherTextEl.innerText, password);
    } catch (err) {
        console.error("Decryption error:", err);
        return false;
    }

    if (!decrypted.includes("--- DON'T MODIFY THIS LINE ---")) {
        console.warn("Incorrect password");
        return false;
    }

    container.innerHTML = decrypted;
    localStorage.setItem(storageKey, password);
    return true;
};

const _handleGroupDecryption = (group, password, containers) => {
    const storageKey = _getStorageKey(group);
    let allDecrypted = true;

    containers.forEach((container) => {
        if (!_decryptContainer(container, password, storageKey)) {
            allDecrypted = false;
        }
    });

    if (allDecrypted) {
        // 重新初始化目录
        console.log(`Group "${group}" decrypted successfully`);
        document.dispatchEvent(new Event("contentDecrypted"));
    }
};

const _click_handler = (element) => {
    const container = element.closest(".hugo-encryptor-container");
    if (!container) return;

    const input = container.querySelector(".hugo-encryptor-input");
    if (!input) return;

    const password = _getPasswordHash(input.value);
    const containers = Array.from(document.querySelectorAll(".hugo-encryptor-container"));
    const group = container.getAttribute("data-group");

    if (group) {
        const groupContainers = containers.filter(el => el.getAttribute("data-group") === group);
        _handleGroupDecryption(group, password, groupContainers);
    } else {
        const index = containers.indexOf(container);
        if (index === -1) return;

        const storageKey = _getStorageKey(null, index);
        // 重新初始化目录
        if (_decryptContainer(container, password, storageKey)) {
            document.dispatchEvent(new Event("contentDecrypted"));
        }
    }
};

window.onload = () => {
    window.addEventListener("contentDecrypted", () => {
        console.log("Received contentDecrypted event, initializing TOC");
    });
    const containers = Array.from(document.querySelectorAll(".hugo-encryptor-container"));
    const processedGroups = new Set();

    containers.forEach((container, index) => {
        const group = container.getAttribute("data-group");

        if (group) {
            if (processedGroups.has(group)) return;

            const password = localStorage.getItem(_getStorageKey(group));
            if (password) {
                const groupContainers = containers.filter(el => el.getAttribute("data-group") === group);
                _handleGroupDecryption(group, password, groupContainers);
            }

            processedGroups.add(group);
        } else {
            const password = localStorage.getItem(_getStorageKey(null, index));
            if (password) {
                // 重新初始化目录
                if (_decryptContainer(container, password, _getStorageKey(null, index))) {
                    const event = new CustomEvent("contentDecrypted", {
                        detail: { source: "decrypt.js", time: Date.now() }
                    });
                    console.log("dispatching contentDecrypted", event);
                    document.dispatchEvent(event);
                    console.log(`Container ${index} decrypted successfully`);
                }
            }
        }
    });
};
