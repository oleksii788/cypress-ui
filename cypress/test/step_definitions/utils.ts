export const generateRandomString =
    (length: number) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let s = '';
        for (let i = 0; i < length; i++) {
            s += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return s;
    }