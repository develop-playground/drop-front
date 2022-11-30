import { render, waitFor } from '@testing-library/react';
import Login from '../../pages/login/Login';
import '@testing-library/jest-dom';

describe(`<Login> test`, () => {
  const setup = async () => {
    const utils = await waitFor(() => render(<Login />));
    return { utils };
  };

  it('Login view title 정상적으로 노출 된다.', async () => {
    const { utils } = await setup();
    expect(utils.getByTestId('login_title')).toBeInTheDocument();
  });

  it('카카오 버튼은 정상적으로 노출되고, 색상은 #f9df4a 이다.', async () => {
    const { utils } = await setup();
    expect(utils.getByText('카카오톡으로 로그인')).toBeInTheDocument();
    expect(utils.getByText('카카오톡으로 로그인')).toHaveStyle('backgroundColor: #f9df4a');
  });
});
