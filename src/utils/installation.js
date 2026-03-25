const STORAGE_KEY = "hero_io_installed_apps";

export function getInstalledAppIds() {
  const rawValue = localStorage.getItem(STORAGE_KEY);
  if (!rawValue) return [];

  try {
    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isInstalled(appId) {
  return getInstalledAppIds().includes(Number(appId));
}

export function installApp(appId) {
  const numericId = Number(appId);
  const installed = getInstalledAppIds();

  if (installed.includes(numericId)) {
    return false;
  }

  const nextInstalled = [...installed, numericId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextInstalled));
  return true;
}

export function uninstallApp(appId) {
  const numericId = Number(appId);
  const nextInstalled = getInstalledAppIds().filter((id) => id !== numericId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextInstalled));
}
