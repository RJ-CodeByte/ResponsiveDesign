import axios from 'axios'
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