#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
Gtk.init(null);

let win = new Gtk.Window();
win.color = new Gdk.RGBA();
        win.color.red = 0.0;
        win.color.green = 0.0;
        win.color.blue = 1.0;
        win.color.alpha = 0.5;
        Gtk.Window.set_rgba(win.color);
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
