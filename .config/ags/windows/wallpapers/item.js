export function WallpaperItem(img, windowName) {
    const directory = "/home/hugo/dotfiles/wallpapers";

    return Widget.Button({
        className: "wallpaper-item",
        cursor: "pointer",
        onClicked: () => {
            Utils.execAsync(["wpg", "-s", img]);
            App.toggleWindow(windowName);
        },
        child: Widget.Icon({
            className: "wallpaper-icon",
            icon: directory + "/" + img,
        }),
    });
}