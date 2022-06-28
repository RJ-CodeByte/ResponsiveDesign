import axios from 'axios'
import auth from '@react-native-firebase/auth';
import { LOGIN, SIGNUP, UserList } from '../../config/urls'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import types from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage';


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
                    AsyncStorage.setItem("myToken", JSON.stringify(res.data)).then(token => {
                        dispatch({
                            type: types.LOGIN,
                            payload: res.data
                        })
                    })
                    console.log(res.data)
                }

            }).catch(e => console.log(e))
        }
    } catch (error) {
        console.log(error);
    }
}

export const userList = () => {
    try {
        return async dispatch => {

            const result = await axios({
                method: 'GET',
                url: UserList,
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                if (res.status == 200) {
                    // console.log("user data", res.data.data)
                    dispatch({
                        type: types.USER_LIST,
                        payload: res.data.data
                    })

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
                console.log("errr")
                await auth().signInWithEmailAndPassword(email, password).then(() => auth().onAuthStateChanged(user => {
                    // console.log(user.getIdToken(true))
                    // dispatch({
                    //     type: types.LOGIN,
                    //     payload: user.uid
                    // }),
                    console.log(user.id)
                }
                ));
                var idToken = await auth().currentUser.getIdToken(true)
                AsyncStorage.setItem("myToken", JSON.stringify(idToken)).then(token => {
                    dispatch({
                        type: types.LOGIN,
                        payload: idToken
                    })
                })
                console.log(idToken)

            } catch (err) {
                console.log(err);
            }
        }
    } catch (err) {
        console.log(err);
    }
}


export const onGoogleButtonPress = () => {
    try {
        return async dispatch => {
            try {
                dispatch({
                    type: types.IS_LOADING,
                    payload: false
                });
                const { idToken } = await GoogleSignin.signIn();
                console.log("token", idToken)
                // Create a Google credential with the token
                dispatch({
                    type: types.IS_LOADING,
                    payload: true
                });
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                // console.log(googleCredential)
                await auth().signInWithCredential(googleCredential).then((cred) => {
                    console.log("user:", cred.user)
                    const { uid } = cred.user;
                    dispatch({
                        type: types.LOGIN,
                        payload: uid
                    });
                })
                dispatch({
                    type: types.IS_LOADING,
                    payload: false
                });
            } catch (error) {
                console.log("Google Errr" + error);
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

export const registeracess = () => {
    try {
        return dispatch => {
            // console.log("user data", res.data.data)            
            dispatch({
                type: types.LOGIN,
                payload: "asdjknajksdajksdnaj"
            })
        }
    } catch (err) {
        console.log('err', err)
    }
}

export const userLogout = () => {
    try {
        return dispatch => {
            // auth().signOut().then(() =>
            //     dispatch({
            //         type: types.LOGIN,
            //         payload: null
            //     })
            // )            
            AsyncStorage.removeItem("myToken").then(() => {
                auth().signOut().then(() =>
                    dispatch({
                        type: types.LOGIN,
                        payload: null
                    })
                )
            })

        }
    } catch (error) {
        console.log(error);
    }
}