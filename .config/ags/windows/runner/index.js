export function Runner() {
    const windowName = "runner";

    return Widget.Window({
        name: windowName,
        className: "runner",
        keymode: "exclusive",
        child: RunnerContainer(),
        setup: self => self.keybind("Escape", () =>
            App.closeWindow(windowName),
        ),
    });
}

function RunnerContainer() {
    const index = Variable(0);
    const items = ["Resultado 1", "Resultado 2", "Resultado 3"];

    index.connect("changed", ({ value }) => console.log(value));

    return Widget.Box({
        className: "app",
        child: Widget.Box({
            className: "runner",
            vpack: "center",
            hpack: "center",
            vertical: true,
            children: [
                Input(),
                List(index.bind(), items),
            ],
        }),
        setup: self => {
            self.keybind("Down", () => {
                index.setValue(Math.max(index.getValue() + 1, items.length - 1));
            });

            self.keybind("Up", () => {
                index.setValue(Math.min(index.getValue() - 1, items.length + 1));
            });
        },
    });
}

function Input() {
    return Widget.Entry({
        className: "runner__input",
        placeholderText: "Digite alguma coisa...",
        expand: true,
    });
}

function List(index, items) {
    return Widget.Box({
        className: "runner__list",
        vertical: true,
        children: items.map(item => Item(item)),
    });
}

function Item(item) {
    return Widget.Box({
        className: "runner__item",
        child: Widget.Label({
            label: item
        }),
    });
}