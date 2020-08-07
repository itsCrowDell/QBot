export const environment = {
    production: false,
    apiBaseUrl: "https://itscrowdell-qbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "0557b95f-53b5-42e5-bd06-a542cd541411",
        clientId: "a50be736-662a-44d4-9570-17b2ea1190a9",
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
};
