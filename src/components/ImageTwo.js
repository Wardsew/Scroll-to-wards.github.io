import { Parallax } from 'react-parallax';
import nd2 from '../img/2nd.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={nd2} bgImage={nd2} strength={800}>
        <div className='content'>
            <span className='img-txt'>Dying Right now</span>
        </div>
    </Parallax>
);

export default ImageOne;