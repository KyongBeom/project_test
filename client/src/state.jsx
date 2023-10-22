import { atom } from 'recoil';


//recoil state 생성
export const contentState = atom({
    key: 'content',
    default: {
        name: 'test',
        status: false,
        message: ''
    }
});