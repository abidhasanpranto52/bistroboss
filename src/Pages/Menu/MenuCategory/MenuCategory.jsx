import { Link } from 'react-router-dom';
import BgCover from '../../Shared/CoverBg/BgCover';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='mb-5'>
        { title && <BgCover img={coverImg} title={title}></BgCover>}
            <div className="grid grid-cols-1 md:grid-cols-2 my-9">
        {
            items.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
        }
      </div>
      <div className='text-center'>
      <Link to={`/shop/${title}`}>
      <button className="btn  btn-outline border-1 item-center border-b-4 mt-4">Order Now</button>
      </Link>
      </div>
        </div>
    );
};

export default MenuCategory;