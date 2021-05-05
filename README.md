# 개요
이 프로그램은 업비트 개발자 센터(https://docs.upbit.com/) 내 문서 내용을 참고하여 관련 API들을 호출하는 프로그램입니다.

# 사용방법
## 설정 파일
1. 업비트에서 OPEN API 키 값을 가져옵니다.
2. 최상위 디렉토리 내 upbit_open_API.json 파일 내에 있는 ACCESS, SECRET 속성 값에 API 키 값을 각각 넣습니다. 
3. 필요에 따라서는 SERVER 속성 값도 바뀔 수 있습니다. 현재 동작하는 업비트 OPEN API 서버 주소는 https://api.upbit.com 입니다.

## API 호출 방법
main.ts 내 call_exchange_API() 함수의 인자를 아래와 같이 줘서 호출하여 관련 API들을 사용합니다.
- 1: 전체 계좌 조회
- 2: 주문 가능 정보

# 현재 호출하고 있는 기능
현재 아래 기능들을 지원하고 있으며, 관련 결과에 추가적으로 min_count, sec_count 정보가 추가되어 출력됩니다.
해당 정보는 남은 요청수(분/초)를 의미합니다.
## 전체 계좌 조회
- 사용방법: main.ts 내 call_exchange_API(1) 호출
- 결과: 아래와 같이 전체 계좌 관련 내용들을 출력합니다.

![result_account_info](https://user-images.githubusercontent.com/46051622/117143680-0bfdc680-adec-11eb-8c96-e9174c599686.PNG)
## 주문 가능 정보
- 사용방법: main.ts 내 call_exchange_API(2) 호출
- 결과: 아래와 같이 현재 주문가능한 종목(KRW-BTC) 관련 내용들을 호출합니다.

![get_possible_order](https://user-images.githubusercontent.com/46051622/117143639-ff796e00-adeb-11eb-8f8f-fa928a80dbf0.PNG)
# 추후 추가할 기능
- 현재 거래 중인 코인 종목들의 리스트 가져오기
- 코인 종목들의 과거 데이터 가져오기
- 현재 거래 실시간 데이터 가져오기

# 참고
https://docs.upbit.com/
