#!/bin/sh
killall waybar && waybar &
swww img /home/hugo/.config/wpg/.current --transition-type wipe --transition-duration 1
pywal-discord -t default -p /home/hugo/.config/vesktop/themes &
walogram -s &
/home/hugo/.config/mako/update-theme.sh &
pywalfox update
