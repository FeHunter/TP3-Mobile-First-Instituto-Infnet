import style from './Card.module.css';

export function Card({ children, width, height }) {
  const size = {
    width: width,
    height: height,
  };
  return (
    <div className={style.Card} style={size}>
      {children}
    </div>
  );
}
