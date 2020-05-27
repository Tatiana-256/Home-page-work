import axios from "axios";


const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})


export const api = {
    changePriority(success) {
        return () => instance.post('', {success: success})
    }
}

export const tryCatch = async (f) => {
    try {
        let responce = await f()
        console.log('answer: ', responce.data);
        return responce;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
}