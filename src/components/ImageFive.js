import { Parallax } from 'react-parallax';
import th5 from '../img/5th.png'
const ImageOne = () => (
    <Parallax className='image' blur={th5} bgImage={th5} strength={800}>
        <div className='content'>
            <span className='img-txt'>Fuck Up</span>
        </div>
    </Parallax>
);

export default ImageOne;