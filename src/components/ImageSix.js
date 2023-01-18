import { Parallax } from 'react-parallax';
import Six from '../img/Six.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={Six} bgImage={Six} strength={800}>
        <div className='content'>
            <span className='img-txt'>The Galaxies</span>
        </div>
    </Parallax>
);

export default ImageOne;