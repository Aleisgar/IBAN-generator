import fetch from "node-fetch"
import { getPreferenceValues } from "@raycast/api"
import { Preferences, Iban } from "./types";

export async function fetchIban(): Promise<Iban> {
    const preferences: Preferences = getPreferenceValues();

    const password = preferences.ibanCreatorApiToken;
 
    
    const url= 'https://www.generador-de-dni.com/bank';
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': password,
            'X-RapidAPI-Host': url
        },
    });

    if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
    
      const responseData = await response.json();
      return responseData as Iban;
}

// export async function fetchMedias(): Promise<Iban> {
//     const preferences: Preferences = getPreferenceValues();
//     const username = "api";
//     const password = preferences.ibanCreatorApiToken;
//     const url = "https://api.wistia.com/v1/medias.json";
//     const authString = `${username}:${password}`;

//     const response = await fetch(url, {
//         method: "GET",
//         headers: {
//             Authorization: `Basic ${Buffer.from(authString).toString("base64")}`,
//         },
//     });

//     if (!response.ok) {
//         throw (await response.json()) as IbanCreatorError;
//     }

//     return (await response.json()) as Iban;
// }

// export async function fetchAccountInfo(): Promise<AccountInfo> {
//   const preferences: Preferences = getPreferenceValues();
//   const username = "api";
//   const password = preferences.ibanCreatorApiToken;
//   const url = "https://api.wistia.com/v1/account.json";
//   const authString = `${username}:${password}`;
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `Basic ${Buffer.from(authString).toString("base64")}`,
//     },
//   });

//   if (!response.ok) {
//     throw (await response.json()) as WistiaApiError;
//   }

//   const accountInfo = (await response.json()) as AccountInfo;
//   return accountInfo;
// }

// export async function fetchProjects(): Promise<WistiaProject[]> {
//   const preferences: Preferences = getPreferenceValues();
//   const username = "api";
//   const password = preferences.wistiaApiToken;
//   const url = "https://api.wistia.com/v1/projects.json";
//   const authString = `${username}:${password}`;

//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `Basic ${Buffer.from(authString).toString("base64")}`,
//     },
//   });

//   if (!response.ok) {
//     throw (await response.json()) as WistiaApiError;
//   }

//   return (await response.json()) as WistiaProject[];
// }

// export async function fetchProjectMedias(projectHashedId: string): Promise<WistiaProject> {
//   const preferences: Preferences = getPreferenceValues();
//   const username = "api";
//   const password = preferences.wistiaApiToken;
//   const url = `https://api.wistia.com/v1/projects/${projectHashedId}.json`;
//   const authString = `${username}:${password}`;

//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `Basic ${Buffer.from(authString).toString("base64")}`,
//     },
//   });

//   if (!response.ok) {
//     throw (await response.json()) as WistiaApiError;
//   }

//   return (await response.json()) as WistiaProject;
// }}
