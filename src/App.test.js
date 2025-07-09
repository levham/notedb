import { render, screen } from '@testing-library/react';
import App from './App';

//App bileşeni render edildiğinde içinde "learn react" yazılı bir öğe var mı diye bakmak.
test('renders learn react link', () => {
  render(<App />);//App bileşenini test ortamına render eder.
  const linkElement = screen.getByText(/learn react/i);//DOM'da "learn react" ifadesini, büyük/küçük harf duyarsız şekilde arar.
  expect(linkElement).toBeInTheDocument();//Öğenin sayfada gerçekten mevcut olup olmadığını doğrular.
});
