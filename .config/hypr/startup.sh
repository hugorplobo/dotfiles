pypr &
waybar &
swww-daemon &
/home/hugo/.config/wpg/wp_init.sh &
sleep 1
swww img /home/hugo/dotfiles/wallpaper.png
wl-paste --type text --watch cliphist store
wl-paste --type image --watch cliphist store
systemctl --user start plasma-polkit-agent
