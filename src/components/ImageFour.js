import { Parallax } from 'react-parallax';
import th4 from '../img/4th.png'
const ImageOne = () => (
    <Parallax className='image' blur={th4} bgImage={th4} strength={800}>
        <div className='content'>
            <span className='img-txt'>My Quality is Ruined</span>
        </div>
    </Parallax>
);

export default ImageOne;