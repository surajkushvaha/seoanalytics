// @ts-ignore 
const authorizationToken = JSON.parse(localStorage.getItem('UserData'));
export const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': authorizationToken?.localeUtf8Code,
    'Authorization': `Bearer ${authorizationToken?.accessToken}`,
};
