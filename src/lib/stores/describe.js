import { writable } from 'svelte/store';
// import { env } from '$env/dynamic/public';

// create writeable store from fetching data from https://api.scavengerbot.io/v1/describe
export const describe = writable({}, set => {
  // fetch('https://api.scavengerbot.io/v1/describe')
  fetch('https://api-dev.scavengerbot.io/v1/describe')
  // fetch(env.PUBLIC_APIURL + '/describe')
    .then(response => response.json())
    .then(data => set(data.data));
})