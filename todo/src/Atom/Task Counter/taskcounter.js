import style from './taskcounter.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

 const Counter = () => {
    const curState = useSelector((state)=> state.number);
  const dispatch = useDispatch();
  return (
    <div className={style.taskcounter}>
        All Pending TAsk 8
    </div>
  )
};
export default Counter
