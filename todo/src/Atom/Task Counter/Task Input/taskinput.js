import style from './taskinput.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

 const Input = () => {
    const curState = useSelector((state)=> state.number);
    const dispatch = useDispatch();

  return (
    <div>
        <input type="text " onKeyDown={addme} placeholder="Write your task" className={style.npt}/>
    </div>
  )
};
export default Input ;
