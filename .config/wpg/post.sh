#!/bin/sh
killall waybar && waybar &
swww img $HOME/.config/wpg/.current --transition-type wipe --transition-duration 1
pywal-discord -t default -p $HOME/.config/vesktop/themes &
walogram -s &
$HOME/.config/mako/update-theme.sh &
pywalfox update
