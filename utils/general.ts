export const request = (endpoint: string) => fetch(`${window.location}/api${endpoint}`).then((res) => res.json())
