#!/bin/sh

ln -sf $HOME/wallpapers/$1 $HOME/.cache/wallpaper
wallust cs -u $HOME/.config/wallust/colorschemes/$1.json
swww img $HOME/wallpapers/$1 --transition-type wipe --transition-duration 1
killall waybar && waybar &
pkill -SIGUSR1 kitty
ags -q && ags &
$HOME/.config/mako/update-theme.sh &
# pywal-discord -t default -p $HOME/.config/vesktop/themes &
# walogram -s &
# pywalfox update &
