import { IP_SERVER } from './Config'
const cryptoHash = require('crypto')

//---------------------------------------------------------------
// Functiones para realizar peticiones http (get,put,post,delete)
// Si recibe un formdata automaticamente lo indexa al body, si es un objecto lo convierte a json 
//---------------------------------------------------------------
export const getRequest = async (_url) => {
    let options = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(_url, options)
    if (!response.ok) return { error: true }
    else {
        let json = await response.json()
        return json
    }
}

export const postRequest = async (_url, _body) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    if (!(_body instanceof FormData)) {
        _body = JSON.stringify(_body)
    } else {
        headers = {}
    }
    let options = {
        method: 'POST',
        headers: headers,
        body: _body
    }

    const response = await fetch(_url, options)
    if (!response.ok) return { error: true }
    else {
        let json = await response.json()
        return json
    }
}

export const putRequest = async (_url, _body) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    if (!(_body instanceof FormData)) {
        _body = JSON.stringify(_body)
    } else {
        headers = {}
    }
    let options = {
        method: 'PUT',
        headers: headers,
        body: _body
    }
    const response = await fetch(_url, options)
    if (!response.ok) return { error: true }
    else {
        let json = await response.json()
        return json
    }
}

export const deleteRequest = async (_url) => {
    let options = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(_url, options)
    if (!response.ok) return { error: true }
    else {
        let json = await response.json()
        return json
    }
}
//------------------------------------------------------------

//-------------------------------------
//Previene un valor null o undefined
//-------------------------------------
export const preventUndefinedValue = _val => (_val === null || _val === undefined ? "" : _val)

//-------------------------------------------------------------
// Map to array
//-------------------------------------------------------------
export const mapToArray = (_object, items) => {
    let arr = []
    Object.entries(_object).forEach(([key, value]) => {
        if (items.includes(key)) {
            const o = {}
            o[key] = value
            arr.push(o)
        }
    })
}

export const isFunction = fun => {
    return fun && {}.toString.call(fun) === '[object Function]';
}

export const hash = _pass => cryptoHash.createHash('sha256').update(_pass).digest('base64')

export const randomToken = () => (cryptoHash.randomBytes(3).toString('hex'))
