import { Parallax } from 'react-parallax';
import rd3 from '../img/3rd.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={rd3} bgImage={rd3} strength={800}>
        <div className='content'>
            <span className='img-txt'>Everything is Ruined</span>
        </div>
    </Parallax>
);

export default ImageOne;