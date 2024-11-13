import { WallpaperItem } from "./item.js";

const windowName = "wallpapers";
const directory = "/home/hugo/dotfiles/wallpapers";

export function Wallpapers() {
    return Widget.Window({
        name: windowName,
        className: "wallpapers-window",
        keymode: "exclusive",
        layer: "overlay",
        exclusivity: "ignore",
        anchor: ["left", "top"],
        visible: false,
        child: WallpapersContainer(),
        setup: self => self.keybind("Escape", () =>
            App.closeWindow(windowName),
        ),
    });
}

function getFiles() {
    return Utils.exec("ls " + directory).split("\n");
}

function WallpapersContainer() {
    const files = Variable(getFiles());
    
    App.connect("window-toggled", () => {
        files.setValue(getFiles());
    });

    return Widget.Scrollable({
        className: "container",
        hscroll: "never",
        vscroll: "always",
        child: Widget.Box({
            className: "wallpapers",
            expand: true,
            vertical: true,
            children: files.bind().as(
                files => files.map(file => WallpaperItem(file, windowName)),
            ),
        }),
    });
}
