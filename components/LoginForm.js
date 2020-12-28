import React, {useCallback} from 'react';
import { Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top : 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;
/**
 * 스타일주는거는 객체로주면안된다 ex : {{}}
 * {} === {} false 값이나와 그부분이 리렌더링 됨.
 * 왠만하면 style 적요은 객체가아닌 styled-component 를 사용하여 밖으로 빼자.
 * 리렌더링 되는부분은 return 부분을 다시그리는게 아니라 새로이 변경된부분만 그린다.
 *
 * useMemo, useCallback (cashing)
 */
const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state) => state.user);
    const [email, onChangeEmail ] = useInput('');
    const [password, onChangePassword] = useInput('');

    /**
     * useCallback (react hook)을 사용하는이유 ?
     * 매번 함수를 재선언하는 것보다 event를 받는 값만 state에 setting만 하기 때문에
     * 재사용하기 위함.
     */
    const onSubmitForm = useCallback(() => {
        dispatch(loginRequestAction({email, password}))
    },[email, password])

    return(
      <FormWrapper onFinish={onSubmitForm}>
          <div>
              <label htmlFor="user-email">이메일</label>
              <br/>
              <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
          </div>
          <div>
              <label htmlFor="user-password">비밀번호</label>
              <br/>
              <Input.Password name="user-password"
                     value={password}
                     onChange={onChangePassword}
                     required/>
          </div>
          <ButtonWrapper>
            <Button type="primary" htmlType="submit" loading={logInLoading}>
                로그인
            </Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
          </ButtonWrapper>
      </FormWrapper>
    );
}

LoginForm.prototype = {
    setIsLoggedIn : PropTypes.func.isRequired
}
export default LoginForm;
