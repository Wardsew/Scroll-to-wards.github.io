import { Parallax } from 'react-parallax';
import st1 from '../img/1st.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={st1} bgImage={st1} strength={800}>
        <div className='content'>
            <span className='img-txt'>Look Inside</span>
        </div>
    </Parallax>
);

export default ImageOne;