import Logo from "../../commons/Logo/Logo";

import { MobileNav } from "./parts/MobileNav";
import { DesktopNav } from "./parts/DesktopNav";

function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-between py-4 px-5 mb-4 position-relative"style={{zIndex: 50}}>
      <div className="col-md-2 mb-2 mb-md-0">
        <Logo />
      </div>

      <DesktopNav className="d-none d-md-none d-lg-flex" />

      <MobileNav className="d-block d-md-block d-lg-none" />
      
    </header>
  );
}

export default Header;
