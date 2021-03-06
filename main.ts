import { call_exchange_API } from './modules/exchangeAPI';
import { call_quotation_API } from './modules/quotationAPI';

/*
    1: 전체 계좌 조회
    2: 주문 가능 정보
    3: 마켓 코드 조회
    4: 시세 캔들 조회 (분)
    5: 현재 거래 실시간 데이터 가져오기
*/
let input = 5

if (input <= 2) {
    call_exchange_API(input)
}
else {
    call_quotation_API(input)
}
