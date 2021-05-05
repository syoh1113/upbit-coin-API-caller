import request from 'request'
import { v4 as uuidv4 } from "uuid"
const sign = require('jsonwebtoken').sign
const queryEncode = require("querystring").encode
import crypto from 'crypto'

import { getRemainMinSecCountFromResponse } from './parseResponse'

// JSON 파일로부터 OPEN_API 실행에 필요한 정보들을 가져온다
import * as api_setting from "../upbit_open_API.json"

function call_exchange_API(test_case: number) {
    const access_key = api_setting.ACCESS
    const secret_key = api_setting.SECRET
    const server_url = api_setting.SERVER

    var payload = {
        access_key: access_key,
        nonce: uuidv4(),
        query_hash: null,
        query_hash_alg: ""
    }

    var options = {
        method: "",
        url: server_url,
        headers: {},
        json: {}
    }

    // test_case 구문에 따라 upbit 내 예제 실행
    switch (test_case) {
        // 전체 계좌 조회
        case 1: {
            options.url += "/v1/accounts"
            break;
        }
        // 주문 가능 정보
        case 2: {
            const body = {
                market: 'KRW-BTC'
            }
            const query = queryEncode(body)
            const hash = crypto.createHash('sha512')
            const queryHash = hash.update(query, 'utf-8').digest('hex')

            payload.query_hash = queryHash
            payload.query_hash_alg = "SHA512"

            options.url += "/v1/orders/chance?" + query
            options.json = body
            break;
        }
    }

    const token = sign(payload, secret_key)

    options.method = "GET"
    options.headers = {Authorization: `Bearer ${token}`}

    // 요청 전송 및 응답 출력
    request(options, (error, response, body) => {
        if (error) throw new Error(error)

        console.log(body)
        
        const min_sec_count:string[] = getRemainMinSecCountFromResponse(response)

        console.log("min_count: " + min_sec_count[0])
        console.log("sec_count: " + min_sec_count[1])
    })
}

export { call_exchange_API };
