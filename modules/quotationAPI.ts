import { getRemainMinSecCountFromResponse } from './parseResponse'

const fetch = require('node-fetch');

const options = {method: 'GET'};

function call_quotation_API(input) {

    let url = 'https://api.upbit.com/v1/market/all?isDetails=false';
    if (input == 4) {
        url = 'https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1';
    }
    else if (input == 5) {
        url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';
    }

    fetch(url, options)
       .then(res => {
            let min_sec_count = getRemainMinSecCountFromResponse(res.headers.raw())
            console.log("min_count: " + min_sec_count[0])
            console.log("sec_count: " + min_sec_count[1])
            return res.json();
        })
       .then(json => console.log(json))
       .catch(err => console.error('error:' + err));
}

export { call_quotation_API }