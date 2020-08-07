export const environment = {
    production: false,
    apiBaseUrl: "https://itscrowdell-qbot.azurewebsites.net/api/Request/",
    selfUrl: "https://itscrowdell-qbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "0557b95f-53b5-42e5-bd06-a542cd541411",
        clientId: "50189e6f-ba5c-4700-87a1-63e3935155d9",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
