import { Parallax } from 'react-parallax';
import Eight from '../img/8.gif'
const ImageOne = () => (
    <Parallax className='image' blur={Eight} bgImage={Eight} strength={800}>
        <div className='content'>
            <span className='img-txt'>Finally Alone</span>
        </div>
    </Parallax>
);

export default ImageOne;