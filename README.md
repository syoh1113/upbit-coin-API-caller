# 개요
이 프로그램은 업비트 개발자 센터(https://docs.upbit.com/) 내 문서 내용을 참고하여 관련 API들을 호출하는 프로그램입니다.

# 사용방법
## 설정 파일
1. 업비트에서 OPEN API 키 값을 가져옵니다.
2. 최상위 디렉토리 내 upbit_open_API.json 파일 내에 있는 ACCESS, SECRET 속성 값에 API 키 값을 각각 넣습니다. 
3. 필요에 따라서는 SERVER 속성 값도 바뀔 수 있습니다. 현재 동작하는 업비트 OPEN API 서버 주소는 https://api.upbit.com 입니다.
4. 아래 API 호출 방법을 참고하여 main.ts 내 input 변수 값을 설정합니다.
5. 최상위 디렉토리에서 터미널을 열고 npm start 명령어를 입력하여 동작시킵니다.
## API 호출 방법
main.ts 내 input 변수 값을 아래와 같이 설정한 상태에서 프로그램을 실행하여 관련 API들을 사용합니다.
- 1: 전체 계좌 조회
- 2: 주문 가능 정보
- 3: 마켓 코드 조회
- 4: 코인 종목들의 과거 데이터 가져오기

# 현재 호출하고 있는 기능
현재 아래 기능들을 지원하고 있으며, 관련 결과에 추가적으로 min_count, sec_count 정보가 추가되어 출력됩니다.
해당 정보는 남은 요청수(분/초)를 의미합니다.
## 전체 계좌 조회
- 사용방법: main.ts 내 input 변수 값을 1로 설정
- 결과: 아래와 같이 전체 계좌 관련 내용들을 출력합니다.

![result_account_info](https://user-images.githubusercontent.com/46051622/117143680-0bfdc680-adec-11eb-8c96-e9174c599686.PNG)
## 주문 가능 정보
- 사용방법: main.ts 내 input 변수 값을 2로 설정
- 결과: 아래와 같이 현재 주문가능한 종목(KRW-BTC) 관련 내용들을 호출합니다.

![get_possible_order](https://user-images.githubusercontent.com/46051622/117143639-ff796e00-adeb-11eb-8f8f-fa928a80dbf0.PNG)

## 마켓 코드 조회
- 사용방법: main.ts 내 input 변수 값을 3으로 설정
- 결과: 아래와 같이 현재 거래 가능한 마켓 목록들을 호출합니다.

```
[
  { market: 'KRW-BTC', korean_name: '비트코인', english_name: 'Bitcoin' },
  { market: 'KRW-ETH', korean_name: '이더리움', english_name: 'Ethereum' },
  { market: 'BTC-ETH', korean_name: '이더리움', english_name: 'Ethereum' },
  { market: 'BTC-LTC', korean_name: '라이트코인', english_name: 'Litecoin' },
  { market: 'BTC-XRP', korean_name: '리플', english_name: 'Ripple' },
  {
    market: 'BTC-ETC',
    korean_name: '이더리움클래식',
    english_name: 'Ethereum Classic'
  },
  { market: 'BTC-OMG', korean_name: '오미세고', english_name: 'OmiseGo' },
  { market: 'BTC-CVC', korean_name: '시빅', english_name: 'Civic' },
  { market: 'BTC-DGB', korean_name: '디지바이트', english_name: 'DigiByte' },
  { market: 'BTC-SC', korean_name: '시아코인', english_name: 'Siacoin' },
  {
    market: 'BTC-SNT',
    korean_name: '스테이터스네트워크토큰',
    english_name: 'Status Network Token'
  },
  { market: 'BTC-WAVES', korean_name: '웨이브', english_name: 'Waves' },
  { market: 'BTC-NMR', korean_name: '뉴메레르', english_name: 'Numeraire' },
  { market: 'BTC-XEM', korean_name: '넴', english_name: 'NEM' },
  {
    market: 'BTC-LBC',
    korean_name: '엘비알와이크레딧',
    english_name: 'LBRY Credits'
  },
  { market: 'BTC-QTUM', korean_name: '퀀텀', english_name: 'Qtum' },
  { market: 'BTC-NXT', korean_name: '엔엑스티', english_name: 'Nxt' },
  {
    market: 'BTC-BAT',
    korean_name: '베이직어텐션토큰',
    english_name: 'Basic Attention Token'
  },
  { market: 'BTC-LSK', korean_name: '리스크', english_name: 'Lisk' },
  { market: 'BTC-RDD', korean_name: '레드코인', english_name: 'ReddCoin' },
  { market: 'BTC-STEEM', korean_name: '스팀', english_name: 'Steem' },
  { market: 'BTC-DOGE', korean_name: '도지코인', english_name: 'Dogecoin' },
  { market: 'BTC-BNT', korean_name: '뱅코르', english_name: 'Bancor' },
  { market: 'BTC-XLM', korean_name: '스텔라루멘', english_name: 'Lumen' },
  { market: 'BTC-ARDR', korean_name: '아더', english_name: 'Ardor' },
  { market: 'BTC-KMD', korean_name: '코모도', english_name: 'Komodo' },
  { market: 'BTC-ARK', korean_name: '아크', english_name: 'Ark' },
  { market: 'BTC-ADX', korean_name: '애드엑스', english_name: 'AdEx' },
  { market: 'BTC-SYS', korean_name: '시스코인', english_name: 'SysCoin' },
  { market: 'BTC-ANT', korean_name: '아라곤', english_name: 'Aragon' },
  { market: 'BTC-STORJ', korean_name: '스토리지', english_name: 'Storj' },
  {
    market: 'BTC-GRS',
    korean_name: '그로스톨코인',
    english_name: 'Groestlcoin'
  },
  { market: 'BTC-REP', korean_name: '어거', english_name: 'Augur' },
  { market: 'BTC-RLC', korean_name: '아이젝', english_name: 'iEx.ec' },
  {
    market: 'BTC-EMC2',
    korean_name: '아인스타이늄',
    english_name: 'Einsteinium'
  },
  { market: 'USDT-BTC', korean_name: '비트코인', english_name: 'Bitcoin' },
  { market: 'USDT-ETH', korean_name: '이더리움', english_name: 'Ethereum' },
  {
    market: 'USDT-LTC',
    korean_name: '라이트코인',
    english_name: 'Litecoin'
  },
  { market: 'USDT-XRP', korean_name: '리플', english_name: 'Ripple' },
  {
    market: 'USDT-ETC',
    korean_name: '이더리움클래식',
    english_name: 'Ethereum Classic'
  },
  { market: 'KRW-NEO', korean_name: '네오', english_name: 'NEO' },
  { market: 'KRW-MTL', korean_name: '메탈', english_name: 'Metal' },
  { market: 'KRW-LTC', korean_name: '라이트코인', english_name: 'Litecoin' },
  { market: 'KRW-XRP', korean_name: '리플', english_name: 'Ripple' },
  {
    market: 'KRW-ETC',
    korean_name: '이더리움클래식',
    english_name: 'Ethereum Classic'
  },
  { market: 'KRW-OMG', korean_name: '오미세고', english_name: 'OmiseGo' },
  {
    market: 'KRW-SNT',
    korean_name: '스테이터스네트워크토큰',
    english_name: 'Status Network Token'
  },
  { market: 'KRW-WAVES', korean_name: '웨이브', english_name: 'Waves' },
  { market: 'KRW-XEM', korean_name: '넴', english_name: 'NEM' },
  { market: 'KRW-QTUM', korean_name: '퀀텀', english_name: 'Qtum' },
  { market: 'KRW-LSK', korean_name: '리스크', english_name: 'Lisk' },
  { market: 'KRW-STEEM', korean_name: '스팀', english_name: 'Steem' },
  { market: 'KRW-XLM', korean_name: '스텔라루멘', english_name: 'Lumen' },
  { market: 'KRW-ARDR', korean_name: '아더', english_name: 'Ardor' },
  { market: 'KRW-KMD', korean_name: '코모도', english_name: 'Komodo' },
  { market: 'KRW-ARK', korean_name: '아크', english_name: 'Ark' },
  { market: 'KRW-STORJ', korean_name: '스토리지', english_name: 'Storj' },
  {
    market: 'KRW-GRS',
    korean_name: '그로스톨코인',
    english_name: 'Groestlcoin'
  },
  { market: 'KRW-REP', korean_name: '어거', english_name: 'Augur' },
  {
    market: 'KRW-EMC2',
    korean_name: '아인스타이늄',
    english_name: 'Einsteinium'
  },
  { market: 'KRW-ADA', korean_name: '에이다', english_name: 'Ada' },
  { market: 'BTC-ADA', korean_name: '에이다', english_name: 'Ada' },
  {
    market: 'BTC-MANA',
    korean_name: '디센트럴랜드',
    english_name: 'Decentraland'
  },
  { market: 'USDT-OMG', korean_name: '오미세고', english_name: 'OmiseGo' },
  {
    market: 'KRW-SBD',
    korean_name: '스팀달러',
    english_name: 'SteemDollars'
  },
  {
    market: 'BTC-SBD',
    korean_name: '스팀달러',
    english_name: 'SteemDollars'
  },
  {
    market: 'BTC-RCN',
    korean_name: '리피오크레딧네트워크',
    english_name: 'Ripio Credit Network'
  },
  {
    market: 'KRW-POWR',
    korean_name: '파워렛저',
    english_name: 'Power ledger'
  },
  {
    market: 'BTC-POWR',
    korean_name: '파워렛저',
    english_name: 'Power ledger'
  },
  {
    market: 'KRW-BTG',
    korean_name: '비트코인골드',
    english_name: 'Bitcoin Gold'
  },
  { market: 'USDT-ADA', korean_name: '에이다', english_name: 'Ada' },
  {
    market: 'BTC-DNT',
    korean_name: '디스트릭트0x',
    english_name: 'district0x'
  },
  { market: 'BTC-IGNIS', korean_name: '이그니스', english_name: 'Ignis' },
  {
    market: 'BTC-ZRX',
    korean_name: '제로엑스',
    english_name: '0x Protocol'
  },
  { market: 'BTC-TRX', korean_name: '트론', english_name: 'TRON' },
  { market: 'BTC-TUSD', korean_name: '트루USD', english_name: 'TrueUSD' },
  { market: 'BTC-LRC', korean_name: '루프링', english_name: 'Loopring' },
  { market: 'KRW-ICX', korean_name: '아이콘', english_name: 'Icon' },
  { market: 'KRW-EOS', korean_name: '이오스', english_name: 'EOS' },
  { market: 'BTC-DMT', korean_name: '디마켓', english_name: 'DMarket' },
  {
    market: 'USDT-TUSD',
    korean_name: '트루USD',
    english_name: 'TrueUSD'
  },
  { market: 'KRW-TRX', korean_name: '트론', english_name: 'TRON' },
  { market: 'BTC-POLY', korean_name: '폴리매쓰', english_name: 'Polymath' },
  { market: 'BTC-PRO', korean_name: '프로피', english_name: 'Propy' },
  { market: 'USDT-SC', korean_name: '시아코인', english_name: 'Siacoin' },
  { market: 'USDT-TRX', korean_name: '트론', english_name: 'TRON' },
  { market: 'KRW-SC', korean_name: '시아코인', english_name: 'Siacoin' },
  { market: 'KRW-IGNIS', korean_name: '이그니스', english_name: 'Ignis' },
  { market: 'KRW-ONT', korean_name: '온톨로지', english_name: 'Ontology' },
  { market: 'KRW-ZIL', korean_name: '질리카', english_name: 'Zilliqa' },
  { market: 'KRW-POLY', korean_name: '폴리매쓰', english_name: 'Polymath' },
  {
    market: 'KRW-ZRX',
    korean_name: '제로엑스',
    english_name: '0x Protocol'
  },
  {
    market: 'KRW-LOOM',
    korean_name: '룸네트워크',
    english_name: 'Loom Network'
  },
  {
    market: 'BTC-BCH',
    korean_name: '비트코인캐시',
    english_name: 'Bitcoin Cash'
  },
  {
    market: 'USDT-BCH',
    korean_name: '비트코인캐시',
    english_name: 'Bitcoin Cash'
  },
  {
    market: 'KRW-BCH',
    korean_name: '비트코인캐시',
    english_name: 'Bitcoin Cash'
  },
  {
    market: 'BTC-MFT',
    korean_name: '메인프레임',
    english_name: 'Mainframe'
  },
  {
    market: 'BTC-LOOM',
    korean_name: '룸네트워크',
    english_name: 'Loom Network'
  },
  { market: 'KRW-ADX', korean_name: '애드엑스', english_name: 'AdEx' },
  {
    market: 'KRW-BAT',
    korean_name: '베이직어텐션토큰',
    english_name: 'Basic Attention Token'
  },
  ... 194 more items
```
## 코인 종목들의 과거 데이터 가져오기
- 사용방법: main.ts 내 input 변수 값을 4로 설정
- 결과: 아래와 같이 현재 거래 가능한 마켓 목록들을 호출합니다.
```
min_count: 599
sec_count: 9
[
  {
    market: 'KRW-BTC',
    candle_date_time_utc: '2021-05-10T14:11:00',
    candle_date_time_kst: '2021-05-10T23:11:00',
    opening_price: 71819000,
    high_price: 71848000,
    low_price: 71751000,
    trade_price: 71844000,
    timestamp: 1620655899478,
    candle_acc_trade_price: 633290797.2264,     
    candle_acc_trade_volume: 8.81848046,        
    unit: 1
  }
]
```
## 현재 거래 실시간 데이터 가져오기
- 사용방법: main.ts 내 input 변수 값을 5로 설정
- 결과: 아래와 같이 현재 거래 실시간 데이터를 가져옵니다.
```
min_count: 594
sec_count: 9
[
  {
    market: 'KRW-BTC',
    trade_date: '20210511',
    trade_time: '103739',
    trade_date_kst: '20210511',
    trade_time_kst: '193739',
    trade_timestamp: 1620729459000,
    opening_price: 70902000,
    high_price: 71750000,
    low_price: 68500000,
    trade_price: 69206000,
    prev_closing_price: 70902000,
    change: 'FALL',
    change_price: 1696000,
    change_rate: 0.0239203408,
    signed_change_price: -1696000,
    signed_change_rate: -0.0239203408,
    trade_volume: 0.01409834,
    acc_trade_price: 441407575766.13275,
    acc_trade_price_24h: 998796161034.105,
    acc_trade_volume: 6318.78518605,
    acc_trade_volume_24h: 14107.28875512,
    highest_52_week_price: 81994000,
    highest_52_week_date: '2021-04-14',
    lowest_52_week_price: 10121000,
    lowest_52_week_date: '2020-05-11',
    timestamp: 1620729460163
  }
]
```
# 프로그램 응용
- 거래 전략들을 시뮬레이션 할 수 있는 백테스팅 기능 추가
- 다양한 거래 전략들을 적용하여 종목들의 추세 계산 기능 추가

# 참고
https://docs.upbit.com/
