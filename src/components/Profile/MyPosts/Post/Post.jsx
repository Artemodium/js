import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://im0-tub-ru.yandex.net/i?id=ba8f6407bd36b43068794642c77c9dde&n=13&exp=1"
        alt="" />
      {props.message}
      <div>
        <span>like - {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
