import React from "react";
import Image1 from '../../../downloaded_images/huile-06.jpg'
import Image2 from '../../../downloaded_images/huile-16-1.jpg'
const Header: React.FC = () => {
    return (
        <header className="relative  w-full h-[300px] text-white overflow-hidden">

            {/* 上半部分：斜切分割 */}
            <div className="absolute bg top-0 left-0 w-full h-1/2 flex">
                {/* 左侧 image1 */}
                <div className="relative w-1/2 h-full bg-blue-500 flex items-center justify-center clip-left">
                    <span><img
                        src={Image1}
                        alt={'image1'}
                    /></span>
                </div>
                

                {/* 右侧 image2 */}
                <div className="relative w-1/2 h-full bg-red-500 flex items-center justify-center clip-right">
                    <span><img
                        src={Image2}
                        alt={'image2'}
                    /></span>
                </div>
            </div>

            {/* 旗帜图标 */}
            <div className="absolute top-5 left-5 w-6 h-6 bg-white text-black">hhhddddd</div>

        </header>



    );
};

export default Header;
