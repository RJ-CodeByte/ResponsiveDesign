import axios from 'axios'
import auth from '@react-native-firebase/auth';
import { LOGIN, SIGNUP } from '../../config/urls'
import types from '../types'


export const userLogin = (email, password) => {
    try {
        return async dispatch => {
            const data = {
                email: email,
                password: password
            }
            const result = await axios({
                method: 'post',
                url: LOGIN,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: data,
            }).then((res) => {
                if (res.status == 200) {
                    dispatch({
                        type: types.LOGIN,
                        payload: res
                    })
                    console.log(res)
                }

            }).catch(e => console.log(e))
        }
    } catch (error) {
        console.log(error);
    }
}



export const loginFirebaseUser = (email, password) => {
    try {
        return async dispatch => {
            try {
                await auth().signInWithEmailAndPassword(email, password).then(() => auth().onAuthStateChanged(user => {
                    dispatch({
                        type: types.LOGIN,
                        payload: user.uid
                    }),
                        console.log(user.id)
                }
                ));
            } catch (err) {
                console.log(err);
            }
        }
    } catch (err) {
        console.log(err);
    }
}


export const registerFirebaseUser = async (mail, password) => {
    try {
        const cred = await auth().createUserWithEmailAndPassword(mail, password);
        const { uid, email } = cred.user;
        console.log(cred.user);
        // return uid;
    } catch (err) {
        return console.log(err)
    }
}

export const userLogout = () => {
    try {
        return async dispatch => {
            dispatch({
                type: types.LOGIN,
                payload: ""
            })
        }
    } catch (error) {
        console.log(error);
    }
}