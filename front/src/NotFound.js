import './css/notFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main>
            <div className='pageErr'>
                <h2>Error: 잘못된 접근입니다</h2>
                <Link className='btn' to='/'>홈화면으로 가기</Link>
            </div>
        </main>
    )
}

export default NotFound