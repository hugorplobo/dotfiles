import GLib from "gi://GLib";

export function WallpaperItem(img, windowName) {
    const directory = "/home/hugo/dotfiles/wallpapers";

    return Widget.Button({
        className: "wallpaper-item",
        cursor: "pointer",
        onClicked: () => {
            Utils.execAsync([GLib.get_home_dir() + "/scripts/bg.sh", img]);
            App.toggleWindow(windowName);
        },
        child: Widget.Icon({
            className: "wallpaper-icon",
            icon: directory + "/" + img,
        }),
    });
}