import { PageIcon } from "./icons/pageIcon";

// import { ImageIcon } from "./icons/galleryIcon";
import { TextIcon } from "./icons/deskIcon";
import SettingsIcon from "./icons/settingsIcon";

import { HomeIcon } from "./icons/iconHome";
// s
import { LocationIcon } from "./icons/locationIcon";

export default function Navbar() {
  return (
    <div className="navcontainer">
      <div className="icon home">
        <HomeIcon />
      </div>
      <div className="icon page">
        <PageIcon />
      </div>
      <div className="icon location">
        <LocationIcon />
      </div>
      {/* <div className="icon gallery">
        <ImageIcon />
      </div> */}
      <div className="icon desk">
        <TextIcon />
      </div>
      <div className="icon settings">
        <SettingsIcon />
      </div>
      {/* <div className="icon info">
        <InfoIcon />
      </div> */}
    </div>
  );
}
