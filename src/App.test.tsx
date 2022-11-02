import { render, waitFor } from '@testing-library/react';
import App from './App';

describe('<App> 테스트', () => {
  const setup = async () => {
    const utils = await waitFor(() => render(<App />));
    return { utils };
  };

  it('무조건 통과해야하는 테스트', async () => {
    const { utils } = await setup();
    expect(utils.queryByText('이건 없습니다.')).not.toBeTruthy();
  });
});
