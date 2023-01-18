import { Parallax } from 'react-parallax';
import Seven from '../img/sevin.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={Seven} bgImage={Seven} strength={800}>
        <div className='content'>
            <span className='img-txt'>Those People</span>
        </div>
    </Parallax>
);

export default ImageOne;