import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../../assets/login/lifemind_blue.png';
import back from '../../assets/login/back.png';
import complete from '../../assets/login/complete.png';
import passwordon from '../../assets/login/password_on.png';
import passwordoff from '../../assets/login/password_off.png';
import './Login.css';
 
const Login =()=> {
  
  const [activeTab, setActiveTab] = useState(1);

  const [step, setStep] = useState(1); // 현재 단계(1~3)
  // 다음 단계  
  const nextStep =()=> {setStep(prev => prev + 1);};
  const prevStep =()=> {setStep(prev => prev - 1);};

  const [step2, setStep2] = useState(1); // 현재 단계(1~3)
  // 다음 단계  
  const nextStep2 =()=> {setStep2(prev => prev + 1);};
  const prevStep2 =()=> {setStep2(prev => prev - 1);};

  const [step3, setStep3] = useState(1); // 현재 단계(1~3)
  // 다음 단계  
  const nextStep3 =()=> {setStep3(prev => prev + 1);};
  const prevStep3 =()=> {setStep3(prev => prev - 1);};

  const navigate = useNavigate();
  const handleSkip2 = () => {
    navigate("/");
  };



  //아이디 중복확인
  const [inputValue, setInputValue] = useState("");
  const isValid = inputValue === "sct1234";
  const [showText, setShowText] = useState(false); // ✅ 클릭 후 텍스트 표시 여부
  const handleClick = () => {
    if (isValid) {
      setShowText(true); // 버튼이 활성화되고 클릭되면 표시
    }
  };

  //회원가입-휴대폰 인증번호
  const [inputValue2, setInputValue2] = useState("");
  const isValid2 = inputValue2 === "01012345678";
  const [showText2, setShowText2] = useState(false); // ✅ 클릭 후 텍스트 표시 여부
  const handleClick2 = () => {
    if (isValid2) {
      setShowText2(true); // 버튼이 활성화되고 클릭되면 표시
    }
  };

  //체크박스 관리
    // 각 체크박스를 개별 state로 관리
    const [chk1, setChk1] = useState(false);
    const [chk2, setChk2] = useState(false);
    const [chk3, setChk3] = useState(false);
    const [chk4, setChk4] = useState(false);

    // 모두 true일 때만 버튼 활성화
     const isAllChecked = chk1 && chk2 && chk3 && chk4;

  //아이디 찾기-휴대폰 인증번호
  const [inputValue3, setInputValue3] = useState("");
  const isValid3 = inputValue3 === "01012345678";
  //아이디 찾기-확인
  const [inputValue4, setInputValue4] = useState("");
  const isValid4 = inputValue4 === "123456";

  //비밀번호 찾기-휴대폰 인증번호
  const [inputValue5, setInputValue5] = useState("");
  const isValid5 = inputValue5 === "01012345678";
  //비밀번호 찾기-확인
  const [inputValue6, setInputValue6] = useState("");
  const isValid6 = inputValue6 === "123456";


  return(
    <>
      <div id='wrap'>
        <div className="bezel">
         <ul className="pushbar" style={{
          backgroundColor: "#fff"
        }}>
           <li>9:30</li>
           <li></li>
           <li></li>
         </ul>
         <div className="gesturebar"></div>
        </div>{/* bezel */}

        {activeTab === 1 && <div>
        <div>
          <h1 onClick={handleSkip2}><img src={logo} alt="lifemind" /></h1>

          <form>
            <fieldset>
              <legend>회원 로그인</legend>

              <div className="input-box1">
                아이디<input type="text" placeholder='' />
                비밀번호<input type="password" placeholder=''/>
                 <span className="int-area">
                    <input type="checkbox" name="loginsave" id="loginsave" /><label htmlFor='loginsave'><h6>로그인 정보저장</h6></label>
                  </span>

                <button type='submit'>로그인</button>
              </div>{/* .input-box */}

              <div className="find-join">
                <a href="#" onClick={() => setActiveTab(3)}>아이디 찾기</a>
                <a href="#" onClick={() => setActiveTab(4)}>비밀번호 찾기</a>
              </div>{/* .find-join */}

              <div className="join">
                <a href="#" onClick={() => setActiveTab(2)}>회원가입</a>
              </div>{/* .-join */}
          
            </fieldset>
          </form>
          
        </div>
        </div>}


        {activeTab === 2 && <div>
          {step === 1 && <div className="container">
            <header className="header">
              <div onClick={() => setActiveTab(1)}><img src={back} alt="back" /></div>
              <h1>회원가입</h1>
            </header>

            <main className="form-section">
              <div className="input-group">
                  <label htmlFor="user-id">아이디</label>
                  <div className="input-with-button">
                      <input 
                      type="text" 
                      id="user-id" 
                      placeholder="아이디 입력(6~20자)" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      />
                      <button 
                      className="check-btn"
                      disabled={!isValid}
                      onClick={handleClick}
                      >중복확인</button>
                  </div>
                  {showText && (<p className="idcheck">
                  *사용가능한 아이디입니다.</p>
                  )}
              </div>

              <div className="input-group">
                <label htmlFor="password">새로운 비밀번호</label>
                <input type="password" id="password" placeholder="비밀번호 입력(영문, 숫자, 특수문자 포함 8~20자)" />
              </div>

              <div className="input-group">
                <label htmlFor="password-confirm">비밀번호 확인</label>
                <input type="password" id="password-confirm" placeholder="비밀번호 재입력" />
              </div>

              <div className="input-group">
                <label htmlFor="phone-number">휴대폰 번호</label>
                <div className="input-with-button">
                    <input 
                    type="tel" 
                    id="phone-number" 
                    placeholder="휴대폰 번호 입력('-' 제외 11자리)" 
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    />
                    <button 
                    className="verify-btn"
                    disabled={!isValid2}
                    onClick={handleClick2}
                    >인증하기</button>
                </div>
                {showText2 && (<p className="idcheck">
                  *인증번호를 발송했습니다.</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="verification-code">인증 번호</label>
                <input type="text" id="verification-code" />
                <p className="verification-info">인증번호가 수신되지 않을 경우 스팸 메시지함을 확인해주세요.</p>
              </div>

              <div className="input-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" placeholder="이름을 입력해주세요." />
              </div>
              
              <div className="input-group">
                <label htmlFor="address-zip">주소 (선택)</label>
                <div className="input-with-button">
                  <input type="text" id="address-zip" placeholder="우편 번호" />
                  <button className="search-address-btn">주소 검색</button>
                </div>
                <input type="text" className="full-width-input" placeholder="주소를 입력해주세요." />
                <input type="text" className="full-width-input" placeholder="상세 주소" />
              </div>

              <div className="terms-section">
                <div className="term-item">
                  <span className="int-area">
                    <input 
                    type="checkbox" 
                    name="service-term" 
                    id="service-term" 
                    checked={chk1}
                    onChange={(e) => setChk1(e.target.checked)}
                    /><label htmlFor='service-term'>서비스 이용 약관 (필수)</label>
                  </span>
                </div>

                <div className="term-item">
                  <span className="int-area">
                    <input 
                    type="checkbox" 
                    name="personal-info" 
                    id="personal-info" 
                    checked={chk2}
                    onChange={(e) => setChk2(e.target.checked)}
                    /><label htmlFor='personal-info'>개인정보 수집/이용 동의 (필수)</label>
                  </span>
                </div>

                <div className="term-item">
                  <span className="int-area">
                    <input
                    type="checkbox" 
                    name="location-service" 
                    id="location-service" 
                    checked={chk3}
                    onChange={(e) => setChk3(e.target.checked)}
                    /><label htmlFor='location-service'>위치정보 서비스 이용 동의 (필수)</label>
                  </span>
                </div>

                <div className="term-item">
                  <span className="int-area">
                    <input 
                    type="checkbox" 
                    name="marketing" 
                    id="marketing" 
                    checked={chk4}
                    onChange={(e) => setChk4(e.target.checked)}
                    /><label htmlFor='marketing'>마케팅 및 이용정보 수신 동의 (선택)</label>
                  </span>
                </div>
              </div>

              <button 
              className="yesbtn" 
              disabled={!isAllChecked} 
           
              onClick={nextStep}
              ><h3>확인</h3></button>
            </main>
            </div>}

            
          {step === 2 &&<div className="container1">
            <header className="header1">
              <div onClick={prevStep}><img src={back} alt="back" /></div>
              <h1>대상자 정보</h1>
            </header>

            <main className="main-content1">
                <form className="form">
                    <div className="form-group1">
                      <label htmlFor="name" className="form-label">이름</label>
                      <input type="text" id="name" className="form-input" placeholder="이름을 입력해주세요." />
                    </div>

                    <div className="form-group1">
                      <label htmlFor="birthyear" className="form-label">생년 (선택)</label>
                      <select id="birthyear" className="form-select">
                        <option value="year">1937 년생</option>
                        <option value="year">1938 년생</option>
                        <option value="year">1939 년생</option>
                        <option value="year">1940 년생</option>
                        <option value="year">1941 년생</option>
                        <option value="year">1942 년생</option>
                        <option value="year">1943 년생</option>
                        <option value="year">1944 년생</option>
                        <option value="year">1945 년생</option>
                        <option value="year">1946 년생</option>
                        <option value="year">1947 년생</option>
                        <option value="year">1948 년생</option>
                        <option value="year">1949 년생</option>
                        <option value="year">1950 년생</option>
                        <option value="year">1951 년생</option>
                        <option value="year">1952 년생</option>
                        <option value="year">1953 년생</option>
                        <option value="year">1954 년생</option>
                        <option value="year">1955 년생</option>
                        <option value="year">1956 년생</option>
                        <option value="year">1957 년생</option>
                        <option value="year">1958 년생</option>
                        <option value="year">1959 년생</option>
                        <option value="year">1960 년생</option>
                        <option value="year">1961 년생</option>
                        <option value="year">1962 년생</option>
                        <option value="year">1963 년생</option>
                        <option value="year">1964 년생</option>
                        <option value="year">1965 년생</option>
                        <option value="year">1966 년생</option>
                      </select>
                    </div>

                    <div className="form-group1">
                      <label className="form-label">성별</label>
                      
                      <div className="gender-options">
                        <span className="int-area">
                          <input type="radio" name="gender" id="male" /><label htmlFor='male'>남</label>
                        </span>
                        <span className="int-area">
                          <input type="radio" name="gender" id="female" /><label htmlFor='female'>여</label>
                        </span>
                      </div>
                    </div>

                    <div className="form-group1">
                      <label htmlFor="phone" className="form-label">휴대폰 번호</label>
                      <div className="input-with-icon">
                          <input type="text" id="phone" className="form-input" placeholder="휴대폰 번호 입력('-' 제외 11자리 입력)" />
                          <button type="button" className="clear-button"></button>
                      </div>
                    </div>

                    <div className="form-group1">
                      <label className="form-label1">주소</label>
                      <div className="address-input-group">
                          <input onClick={nextStep} type="text" className="form-input postal-code" placeholder="우편 번호" />
                          <button type="button" className="address-search-button" onClick={nextStep}>주소 검색</button>
                      </div>
                      <input onClick={nextStep} type="text" className="form-input full-address" placeholder="주소를 입력해주세요." />
                      <input onClick={nextStep} type="text" className="form-input detail-address" placeholder="상세 주소" />
                    </div>

                    <button type="button" className="yesbtn1" ><h3>확인</h3></button>
                </form>
            </main>
            </div>} 

          {step === 3 &&<div className="container2">
            <div className="main-header">
              <h1 className="page-title">우편번호 찾기</h1>
              <div onClick={prevStep}><img src={back} alt="back" /></div>
            </div>
            <main className="main-content">
                <div className="search-section">
                    <div className="search-box-container2">
                        <input type="text" className="search-input" placeholder="도로명, 건물명, 번지 검색" />
                        <button className="search-button2" onClick={nextStep}>주소 검색</button>
                    </div>
                    <div className="search-info">
                      <ul>
                        <li><span className="info-text">도로명 + 건물번호</span> (예: 송파대로 570)</li>
                        <li><span className="info-text">동/읍/면리 + 번지</span> (예: 신천동 7 - 30)</li>
                        <li><span className="info-text">건물명, 아파트명</span> (예: 반포자이아파트)</li>
                      </ul>
                    </div>
                </div>
            </main>
            </div>}
          {step === 4 &&<div className="container3">
            <div className="main-header">
              <h1 className="page-title">우편번호 찾기</h1>
              <div onClick={prevStep}><img src={back} alt="back" /></div>
            </div>
            <main className="main-content">
                <div className="search-section">
                    <div className="search-box-container2">
                        <input type="text" className="search-input" placeholder="양정1동 413-7" />
                        <button className="search-button2">주소 검색</button>
                    </div>
                    <div className="address-results">
                      <div className="address-item">
                        <div>
                          <div onClick={nextStep}>
                            <div className="address-type">도로명</div>
                            <div className="address-details">
                              <p className="address-text">부산광역시 부산진구 거제대로 37</p>
                            </div>
                          </div>
                          <div>
                            <div className="address-type">지번</div>
                            <div className="address-details">
                              <p className="address-text">부산광역시 부산진구 양정1동 413-7</p>
                            </div>
                          </div>
                        </div>
                        <span className="zip-code">[47279]</span>
                      </div>

                      <div className="address-item">
                        <div>
                          <div>
                            <div className="address-type">도로명</div>
                            <div className="address-details">
                              <p className="address-text">부산광역시 부산진구 거제대로 38</p>
                            </div>
                          </div>
                          <div>
                            <div className="address-type">지번</div>
                            <div className="address-details">
                              <p className="address-text">부산광역시 부산진구 양정1동 413-7</p>
                            </div>
                          </div>
                        </div>
                        <span className="zip-code">[47278]</span>
                      </div>
                  </div>
                </div>
            </main>
            </div>}

          {step === 5 && <div className="container4">
            <div className="header12">
                <h1 className="page-title">우편번호 찾기</h1>
                <div onClick={prevStep}><img src={back} alt="back" /></div>
            </div>

            <main className="main-content1">
                <form className="form">
                    <div className="form-group1">
                      <label htmlFor="name" className="form-label">이름</label>
                      <input type="text" id="name" className="form-input" placeholder="김성환" />
                    </div>

                    <div className="form-group1">
                      <label htmlFor="birthyear" className="form-label">생년 (선택)</label>
                      <select id="birthyear" className="form-select">
                        <option value="year">1942 년생</option>
                        <option value="year">1938 년생</option>
                        <option value="year">1939 년생</option>
                        <option value="year">1940 년생</option>
                        <option value="year">1941 년생</option>
                        <option value="year">1942 년생</option>
                        <option value="year">1943 년생</option>
                        <option value="year">1944 년생</option>
                        <option value="year">1945 년생</option>
                        <option value="year">1946 년생</option>
                        <option value="year">1947 년생</option>
                        <option value="year">1948 년생</option>
                        <option value="year">1949 년생</option>
                        <option value="year">1950 년생</option>
                        <option value="year">1951 년생</option>
                        <option value="year" selected>1952 년생</option>
                        <option value="year">1953 년생</option>
                        <option value="year">1954 년생</option>
                        <option value="year">1955 년생</option>
                        <option value="year">1956 년생</option>
                        <option value="year">1957 년생</option>
                        <option value="year">1958 년생</option>
                        <option value="year">1959 년생</option>
                        <option value="year">1960 년생</option>
                        <option value="year">1961 년생</option>
                        <option value="year">1962 년생</option>
                        <option value="year">1963 년생</option>
                        <option value="year">1964 년생</option>
                        <option value="year">1965 년생</option>
                        <option value="year">1966 년생</option>
                      </select>
                    </div>

                    <div className="form-group1">
                      <label className="form-label">성별</label>
                      
                      <div className="gender-options">
                        <span className="int-area">
                          <input type="checkbox" name="gender" id="male" checked/><label htmlFor='male'>남</label>
                        </span>
                        <span className="int-area">
                          <input type="checkbox" name="gender" id="female" /><label htmlFor='female'>여</label>
                        </span>
                      </div>
                    </div>

                    <div className="form-group1">
                      <label htmlFor="phone" className="form-label">휴대폰 번호</label>
                      <div className="input-with-icon">
                        <input type="text" id="phone" className="form-input" placeholder="01012345678" />
                      </div>
                    </div>

                    <div className="form-group1">
                      <label className="form-label1">주소</label>
                      <div className="address-input-group">
                          <input type="text" className="form-input postal-code" placeholder="47279" />
                          <button type="button" className="address-search-button" onClick={nextStep}>주소 검색</button>
                      </div>
                      <input type="text" className="form-input full-address" placeholder="부산광역시 부산진구 양정1동 413-7" />
                      <input type="text" className="form-input detail-address" placeholder="103동 701호" />
                    </div>

                    <button onClick={nextStep} type="submit" className="yesbtn1"><h3>확인</h3></button>
                </form>
            </main>
            </div>} 

          {step === 6 && <div className="container4">
            <div className="dim">
              <div className="modal">
                <img src={complete} alt="완료" />
                <p>회원가입이 완료되었습니다.</p>
                <button onClick={() => setActiveTab(1)} type="submit" className="yesbtn1"><h3>로그인 화면으로</h3></button>
              </div>
            </div>
           <header className="header1">
              <div><img src={back} alt="back" /></div>
              <h1 className="page-title">대상자 정보</h1>
            </header>

            <main className="main-content1">
                <form className="form">
                    <div className="form-group1">
                      <label htmlFor="name" className="form-label">이름</label>
                      <input type="text" id="name" className="form-input" placeholder="김성환" />
                    </div>

                    <div className="form-group1">
                      <label htmlFor="birthyear" className="form-label">생년 (선택)</label>
                      <select id="birthyear" className="form-select">
                        <option value="year">1942 년생</option>
                        <option value="year">1938 년생</option>
                        <option value="year">1939 년생</option>
                        <option value="year">1940 년생</option>
                        <option value="year">1941 년생</option>
                        <option value="year">1942 년생</option>
                        <option value="year">1943 년생</option>
                        <option value="year">1944 년생</option>
                        <option value="year">1945 년생</option>
                        <option value="year">1946 년생</option>
                        <option value="year">1947 년생</option>
                        <option value="year">1948 년생</option>
                        <option value="year">1949 년생</option>
                        <option value="year">1950 년생</option>
                        <option value="year">1951 년생</option>
                        <option value="year">1952 년생</option>
                        <option value="year">1953 년생</option>
                        <option value="year">1954 년생</option>
                        <option value="year">1955 년생</option>
                        <option value="year">1956 년생</option>
                        <option value="year">1957 년생</option>
                        <option value="year">1958 년생</option>
                        <option value="year">1959 년생</option>
                        <option value="year">1960 년생</option>
                        <option value="year">1961 년생</option>
                        <option value="year">1962 년생</option>
                        <option value="year">1963 년생</option>
                        <option value="year">1964 년생</option>
                        <option value="year">1965 년생</option>
                        <option value="year">1966 년생</option>
                      </select>
                    </div>

                    <div className="form-group1">
                      <label className="form-label">성별</label>
                      
                      <div className="gender-options">
                        <span className="int-area">
                          <input type="checkbox" name="gender" id="male" /><label htmlFor='male'>남</label>
                        </span>
                        <span className="int-area">
                          <input type="checkbox" name="gender" id="female" /><label htmlFor='female'>여</label>
                        </span>
                      </div>
                    </div>

                    <div className="form-group1">
                      <label htmlFor="phone" className="form-label">휴대폰 번호</label>
                      <div className="input-with-icon">
                        <input type="text" id="phone" className="form-input" placeholder="01082542182" />
                      </div>
                    </div>

                    <div className="form-group1">
                      <label className="form-label1">주소</label>
                      <div className="address-input-group">
                          <input type="text" className="form-input postal-code" placeholder="47279" />
                          <button type="button" className="address-search-button" onClick={nextStep}>주소 검색</button>
                      </div>
                      <input type="text" className="form-input full-address" placeholder="부산광역시 부산진구 양정1동 413-7" />
                      <input type="text" className="form-input detail-address" placeholder="103동 701호" />
                    </div>

                    <button type="submit" className="yesbtn1"><h3>확인</h3></button>
                </form>
            </main>
            </div>} 
        </div>}         

            
        {activeTab === 3 &&  <div>
          {step2 === 1 &&<div className='container6'>
            <div className="header12">
              <h1 className="page-title">아이디 찾기</h1>
              <div onClick={() => setActiveTab(1)}><img src={back} alt="back" /></div>
            </div>
            <main className="main-content5">
                <div className="section5">
                  <h2 className="section-title5">휴대폰 번호</h2>
                  
                  <div className="input-group4">
                    <input 
                    type="tel" 
                    className="input-field" 
                    placeholder="휴대폰 번호 입력('-' 제외 11자리)" 
                    value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                    />
                    <button 
                    className="action-btn"
                    disabled={!isValid3}
                    >인증하기</button>
                  </div>
                  <p className="section-description5">회원 등록시 입력한 휴대폰 번호를 입력해주세요.</p>
                  
                </div>

                <div className="section5">
                  <h2 className="section-title5">인증 번호</h2>
                  <div className="input-group5">
                    <input 
                    type="tel" 
                    className="input-field" 
                    placeholder="" 
                    value={inputValue4}
                    onChange={(e) => setInputValue4(e.target.value)}
                    />
                  </div>
                  <p className="info-text3">인증번호가 수신되지 않을 경우 스팸 메시지함을 확인해주세요.</p>
                </div>
            </main>
              <button 
              onClick={nextStep2} 
              type="button" 
              className="yesbtn1"
              disabled={!isValid4}
              ><h3>확인</h3>
              </button>
            </div>}

          {step2 === 2 && <div className="container7">
              <div className="main-header">
                <div><img src={back} alt="back" /></div>
                <h1 className="page-title">아이디 찾기</h1>
              </div>
              <main className="main-content5">
                  <div className="section5">
                    <h2 className="section-title5">휴대폰 번호</h2>
                    <p className="section-description5">회원 등록시 입력한 휴대폰 번호를 입력해주세요.</p>
                    <div className="input-group4">
                      <input type="tel" className="input-field" placeholder="01012345678"/>
                      <button className="action-btn">인증하기</button>
                    </div>
                    
                  </div>

                  <div className="section5">
                    <h2 className="section-title5">인증 번호</h2>
                    <div className="input-group5">
                      <input type="tel" className="input-field" placeholder="" />
                    </div>
                    <p className="info-text3">인증번호가 수신되지 않을 경우 스팸 메시지함을 확인해주세요.</p>
                  </div>
              </main>
                <button 
                onClick={nextStep2} 
                type="button" 
                className="yesbtn1"
                disabled={!isValid4}
                ><h3>확인</h3>
                </button>
            
              <div className="dim">
              <div className="modal">
                <img src={complete} alt="완료" />
                <p className="id-complete">아이디 찾기 완료</p>
                <p className="id-complete1">회원님의 아이디는 sct@esct.co.kr 입니다.</p>
                <button onClick={() => setActiveTab(1)} type="button" 
                className="yesbtn"><h3>로그인 화면으로</h3></button>
              </div>
            </div>
            

          </div>}
        </div>}
          

        {activeTab === 4 && <div className='container8'>
          {step3 === 1 &&<div className='container9'>
            <div className="header">
              <div onClick={() => setActiveTab(1)}><img src={back} alt="back" /></div>
              <h1>비밀번호 찾기</h1>
            </div>


            <main className="main-content5">
                <div className="form-group8">
                  <label htmlFor="id" className='boldid'>아이디</label>
                  <input type="text" id="id" placeholder="아이디 입력(6~20자)" />
                </div>
                <div className="section5">
                  <h2 className="section-title5">휴대폰 번호</h2>
                  <div className="input-group4">
                    <input 
                    type="tel" 
                    className="input-field" 
                    placeholder="휴대폰 번호 입력('-' 제외 11자리)" 
                    value={inputValue5}
                    onChange={(e) => setInputValue5(e.target.value)}
                    />
                    <button 
                    className="action-btn"
                    disabled={!isValid5}
                    >인증하기</button>

                  </div>
                  <h2 className="section-title6">인증 번호</h2>
                  
                  <div className="input-group5">
           

                    <input 
                    type="tel" 
                    className="input-field" 
                    placeholder="" 
                    value={inputValue6}
                    onChange={(e) => setInputValue6(e.target.value)}
                    />

                  </div>
                  <p className="info-text3">인증번호가 수신되지 않을 경우 스팸 메시지함을 확인해주세요.</p>
                  
                </div>

                 <button 
                    onClick={nextStep3} 
                    type="button"
                    className="yesbtn1"
                    disabled={!isValid6}
                    ><h3>확인</h3>
                 </button>
            </main>
          </div>}


          {step3 === 2 &&<div className='container10'>
             <div className="header">
                <div><img src={back} alt="back" onClick={prevStep3}/></div>
                <h1>비밀번호 재설정</h1>
             </div>
             
             <div className="main-content">
                <div className="form-group10">
                  <label htmlFor="new-password">새로운 비밀번호</label>
                  <div className="input-container">
                    <input type="password" id="new-password" placeholder='새로운 비밀번호 입력'/>
                    <div><img src={passwordon} alt="passwordon"/></div>
                  </div>
                </div>
                <div className="form-group10">
                  <label htmlFor="confirm-password">비밀번호 확인</label>
                  <input type="password" id="confirm-password" placeholder="비밀번호 재입력" />
                </div>
              <button 
                    onClick={nextStep3} 
                    type="button"
                    className="yesbtn1"
                    ><h3>확인</h3>
                 </button>
            </div>
          </div>}

          {step3 === 3 &&<div className='container12'>
            <div className="header">
              <div><img src={back} alt="back" /></div>
              <h1>비밀번호 재설정</h1>
             </div>
             <div className="main-content">
                <div className="form-group10">
                  <label htmlFor="new-password">새로운 비밀번호</label>
                  <div className="input-container1">
                    <input type="password1" id="new-password1" placeholder="lifemind123456" />
                    <div><img src={passwordoff} alt="passwordoff"/></div>
                  </div>
                </div>
                <div className="form-group10">
                  <label htmlFor="confirm-password1">비밀번호 확인</label>
                 <div className="input-container1">
                    <input type="password1" id="new-password1" placeholder="lifemind123456" />
                    <div><img src={passwordoff} alt="passwordoff"/></div>
                  </div> 
                </div>
              <footer className="footer5">
                <button className="confirm-button disabled" onClick={nextStep3}>확인</button>
              </footer>
            </div>

            <div className="dim">
              <div className="modal">
                <img src={complete} alt="완료" />
                <p className="id-complete">비밀번호 재설정 완료</p>
                <p className="id-complete1">로그인 페이지로 이동합니다.</p>
                <button className="yesbtn1" onClick={() => setActiveTab(1)}><h3>확인</h3></button>
              </div>
            </div>
          </div>}
        </div>}
      </div>
    </>
  )
}

export default Login