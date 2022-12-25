# 동아리 발표회 : DEV_Website

###### DEV: 프로그래밍 동아리 이름

<br>

## 목차

1. 기획 [[바로가기]](#프로젝트-기획)
2. 설계 [[바로가기]](#웹사이트-설계)
3. 디자인 [[바로가기]](#사이트-디자인)
4. 개발 [[바로가기]](#개발)
5. 공유 [[바로가기]](#웹사이트-설계)
   <br><br>

- 커밋 내역 [[바로가기]](#커밋-내역)

---

<br><br>

## 프로젝트 기획

- 목적: 2022. 12월 23일에 진행하는 동아리 발표회에서 사용할 사이트
- 프로젝트 성공 기준: 발표회 당일 원활한 사용이 가능하였는가
- 사용 층: 동아리 발표회 부스에 찾아오는 학생, 선생님들을 대상으로 서비스 실시
- 사용 기기: 윈도우 데스크탑, 모바일 기기 ( 태블릿 x )

<br><br>

## 웹사이트 설계

### 대략적인 기능 :

1. 메인화면
2. 동아리 부스 소개
3. 부스의 체험요소 안내
4. 동아리에서 진행한 프로젝트 결과물 열람

### 사이트 구조 설계 :

1. 메인 페이지
2. 동아리 부스 소개 페이지
3. 체험요소 안내 페이지
4. 랭킹 ( 확인 ) > 랭킹 등록 페이지 ( 모바일만 지원 O / Staff용 )
5. 프로젝트 소개 페이지

![]() <!--사이트 구조 이미지 삽입-->

### 사용자 시나리오 :

#### User :

- 부스내의 컴퓨터에서 사이트 이용시:
  - 메인 페이지 > 동아리 부스 소개 페이지 > 프로젝트 소개 페이지 > 체험요소 안내 페이지
- 부스 퇴장 후 랭크 확인:
  - 랭킹 확인 페이지

#### Staff :

- 부스 내에서 대기중 사용자의 랭크 등록시:
  - 랭킹 확인 페이지 > 랭킹 등록 페이지

<br><br>

## 사이트 디자인

메인 색상:

- Background color :
  - #111111
- Sub colors :
  - #222222
  - #343434
  - #808080
- point colors :
  - #4669C7
  - #92B8F2

<br>
글꼴:

- Noto Sans KR
- Gothic A1

<br>
디자인 제작:

- Tool : Figma

Img
![메인-페이지](https://user-images.githubusercontent.com/105581475/202333873-85d81668-3792-468b-b96c-997ca3d661a4.PNG)  
![체험요소-안내-페이지](https://user-images.githubusercontent.com/105581475/202333930-c20a20e6-6424-4574-963e-2ecf788982f1.PNG)
![랭킹-페이지](https://user-images.githubusercontent.com/105581475/202333937-213bc5e3-133b-4174-adf7-402112e8554a.PNG)

<br><br>

## 개발

### 사용 언어 :

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Nodejs](https://img.shields.io/badge/Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Npm](https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

<br>

### 사용 라이브러리 :

![.ENV](https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white)
![styled-components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Font-Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=Font-Awesome&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-5C6BBB?style=for-the-badge&logoColor=white)

#

DB 논리 모델링:

- data table
  - 학번
  - 학년
  - 반
  - 번호
  - 이름
  - 전화번호
  - 스쿨런 최고기록
  - 다이노게임 최고기록
  - 무한의 계단 최고기록

DB 물리 모델링:

- tb_user
  - useridx (int) PK
  - user_grade (int)
  - user_class (int)
  - user_number (int)
  - user_name (varchar)
  - user_phoneNumber (int)
  - user_schoolRun_bestScore (int)
  - user_dino_bestScore (int)
  - user_stairs_bestScore (int)

#

## 커밋 내역

### first commit

###### Nov 16, 2022

- React-create-app

<br/>

### Update README.md ( x2 )

###### Nov 17, 2022

- README.md Updata

<br/>

### MainPage_2022_11_20

###### Nov 20, 2022

- Main Page
- Header Components
  - fontawesome ( Library )
- GlobalStyle.js
- theme
  - ColorPalette
  - fontSize
  - fontWeight
  - lineHeight
- Media Query ( [수정](#guidePage_2022_11_21) )

<br/>

### guidePage_2022_11_20

###### Nov 20, 2022

- Guide Page ( 부분 제작 )
  - AOS ( Library )

<br/>

### guidePage_2022_11_21

###### Nov 21, 2022

- Guide Page
  - AOS ( Library )
- Media Query

  - Custom Hook을 사용하여 중복코드 ↓

  <h6> MainPage_2022_11_20 commit ver<br>모든 Page에 해당 코드 작성<br><br>

  ```
  const mediaHandler = useMediaQuery({ minWidth: 992 });
    const [media, setMedia] = useState("pc");
    useEffect(() => {
      mediaHandler === true ? setMedia("pc") : setMedia("mobile");
    }, [mediaHandler]);

  <Header media={media}/>
  ```

  <h6> guidePage_2022_11_21 commit ver<br>Custom Hook을 활용하여 코드 단축<br><br>

  ```
  export const useMedia = () => {
    const mediaHandler = useMediaQuery({ minWidth: 992 });
    const [media, setMedia] = useState("pc");
    useEffect(() => {
      mediaHandler === true ? setMedia("pc") : setMedia("mobile");
    }, [mediaHandler]);
    return media;
  };
  ```

  ```
  const media = useMedia();
  <Header media={media}/>
  ```

<br/>

### elementPage_2022_11_22

###### Nov 22, 2022

- ElementPage ( 부분 제작 )

<br/>

### elementPage_2022_11_24

###### Nov 24, 2022

- ElementPage layout ( 부분제작 )

<br/>

### Update README.md

###### Nov 26, 2022

- Update README.md
- 사이트 계획 수정

<br/>

### elementPage_2022_11_28

###### Nov 28, 2022

- ElementPage layout 재구성
- json-server npm설치
- projectData.json 제작

<br/>

### DB modelling_2022_12_17

###### Dec 17, 2022

- MySQL create 'dev' modelling

<br/>

### Completion and distribution

###### Dec 25, 2022

- MySQL -> MongoDB로 변경
- Schema, model 구성
- REST API, CRUD 구성
- Back에 정보를 저장할 Front 구성

- 배포 ( HEROKU )
