import { createLocalStore, debugStore } from 'chrome-extension-toolkit';

/**
 * A store that is used for storing user options
 */
interface IExtensionStore {
    /** These values are cached in storage, so that we can know the previous version that the extension was before the current update. Is only used for onUpdate */
    version: string;
    /** When was the last update */
    lastUpdate: number;
    /** The last version of the "What's New" popup that was shown to the user */
    lastWhatsNewPopupVersion: number;
}

export const ExtensionStore = createLocalStore<IExtensionStore>({
    version: chrome.runtime.getManifest().version,
    lastUpdate: Date.now(),
    lastWhatsNewPopupVersion: 0,
});

debugStore({ ExtensionStore });
