import style from './taskdisplay.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

 const Display = () => {
    const curState = useSelector((state)=> state.number);
    const dispatch = useDispatch();

  return (
    <div className={style.display}>
<ol>
    <li>
        display task
        <button>Complete</button>
        <button>Delete</button>

    </li>

</ol>
    </div>
  )
};
export default Display;