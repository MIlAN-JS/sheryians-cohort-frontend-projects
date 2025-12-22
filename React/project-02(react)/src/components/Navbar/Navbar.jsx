import Navlink from "./Navlink"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <h1 className="text-4xl font-logo text-white ">ZORO</h1>

      <div className="nav-link-container md:flex gap-2 hidden ">
          <Navlink title="かたな" />
        <Navlink title="
アルコール" />
        <Navlink title="トレーニング" />
        <Navlink title="キャプテン" bgColor="bg-secondary" />

      </div>

   <i className="bg-blue md:hidden text-3xl text-white"><GiHamburgerMenu /></i>
     


    </nav>
  )
}

export default Navbar