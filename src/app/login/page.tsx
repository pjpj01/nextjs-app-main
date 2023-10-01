'use client';

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function App() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // 여기에서 로그인 로직을 구현할 수 있습니다.
    // 예: API 호출 또는 기타 인증 처리

    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>사용자 이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="사용자 이름을 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderRadius: '0' }} // 네모칸 스타일
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '0' }} // 네모칸 스타일
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLogin}>
          로그인
        </Button>
      </Form>
    </Container>
  );
}

export default App;
