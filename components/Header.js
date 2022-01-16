import {
    BadgeCheckIcon,
    DocumentTextIcon,
    HomeIcon,
    ShieldCheckIcon,
    SearchIcon,
    UserIcon,
   } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
function Header() {

    return (
            
        <header className='flex flex-col sm:flex-row m-5 items-center h-auto justify-between '>
            <div className="flex justify-evenly max-w-2xl">
                <HeaderItem title='Trang chủ' Icon={HomeIcon} />
                <HeaderItem title="Đăng ký tiêm" Icon={ShieldCheckIcon} />
                <HeaderItem title="Xác thực" Icon={BadgeCheckIcon} />
                <HeaderItem title="Tài liệu" Icon={DocumentTextIcon} />
                <HeaderItem title="Tra cứu" Icon={SearchIcon} />
                <HeaderItem title="Đăng nhập" Icon={UserIcon} />
            </div>
        </header>
    );
}

export default Header;
