import { Container } from "react-bootstrap";
import classes from "./Header.module.css";
import { Icon, Logo, UserImage } from "../../constants/imagePath";
import { Link } from "react-router-dom";
import { cn } from "../../helper/HelperFunctions";
import SearchInput from "../SearchInput";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import useMediaQuery from "../../customHooks/useMediaQuery";

// Drawer library
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function Header() {
  const [search, setSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1200px)");

  const toggleDrawer = () => setOpenDrawer((prev) => !prev);

  const links = [
    { label: "Find Jobs", value: "/" },
    { label: "Top Companies", value: "/" },
    { label: "Job Tracker", value: "/" },
    { label: "My Calendar", value: "/" },
    { label: "Documents", value: "/" },
    { label: "Messages", value: "/" },
    { label: "Notifications", value: "/" },
    ...(isMobile ? [{ label: "Resume Builder", value: "/" }] : []),
  ];
  useEffect(() => {
    if (!isMobile) {
      setOpenDrawer(false);
    }
  }, [isMobile]);
  return (
    <>
      <nav className={classes.mainWrapper}>
        <div className={classes.container}>
          <div className={classes.contentWrapper}>
            <div className={classes.innerWrapper}>
              {isMobile && (
                <div className={classes.hamburger} onClick={toggleDrawer}>
                  ☰
                </div>
              )}

              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>

              {!isMobile && (
                <div className={classes.linksWrapper}>
                  {links.map((link, index) => (
                    <Link
                      key={link.label}
                      to={link.value}
                      className={cn(
                        classes.navLink,
                        index === 0 && classes.activeLink
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className={classes.innerWrapper}>
              <SearchInput value={search} setter={setSearch} />
              {!isMobile && <Button label="Resume Builder" />}
              <img src={UserImage} alt="User" className={classes.userImage} />
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
        direction="left"
        size={250}
      >
        <div className={classes.drawerWrapper}>
          <img src={Icon} className={classes.drawerLogo} />
          <div className={classes.drawerLinks}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.value}
                className={classes.drawerLink}
                onClick={toggleDrawer}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}
