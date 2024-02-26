export default {
    baseURL: 'http://localhost:3000/',
    rowCount: 10,
    dateFormat: 'YYYY-MM-DD',
    url: {
        login: '/',
        forgotPassword: '/forgot-password',
        dashboard: '/dashboard'
    },
    method: {
        post: 'POST',
        get: 'GET',
        delete: 'DELETE',
        put: 'PUT',
    },
    inputType: {
        text: 'text',
        number: 'number',
        email: 'email',
        password: 'password',
        date: 'date',
    }
};
