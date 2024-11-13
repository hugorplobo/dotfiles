#!/bin/sh

ags -q && ags &
$HOME/.config/mako/update-theme.sh &
killall waybar && waybar &
swww img $HOME/.config/wpg/.current --transition-type wipe --transition-duration 1
pywal-discord -t default -p $HOME/.config/vesktop/themes &
walogram -s &
pkill -SIGUSR1 kitty
# pywalfox update &
