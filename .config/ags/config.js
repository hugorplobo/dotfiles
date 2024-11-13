import { Wallpapers } from "./windows/wallpapers/index.js";
import { Runner } from "./windows/runner/index.js";

App.config({
    style: "./style.css",
    windows: [
        // Runner(),
        Wallpapers(),
    ],
});