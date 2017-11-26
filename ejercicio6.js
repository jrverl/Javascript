#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

Gtk.init(null);

const GridWindow = Lang.Class({
    Name: 'GridWindow',
    Extends: Gtk.Window,

    _init: function() {
        this.parent({title: "Language Selector"});

        let grid = new Gtk.Grid();
        this.add(grid);
	
	let label = new Gtk.Label();
	label.label = "Languages";	
	let checkbutton = new Gtk.CheckButton({label: "Java"});
	let checkbutton2 = new Gtk.CheckButton({label: "Python"});
	let checkbutton3 = new Gtk.CheckButton({label: "C"});
	let checkbutton4 = new Gtk.CheckButton({label: "Javascript"});
        let button1 = new Gtk.Button({label: "Quit"});
        let button2 = new Gtk.Button({label: "Learn"});

        
	grid.attach(label,1,0,1,1);
	grid.attach(checkbutton,1,1,1,1);	
	grid.attach(checkbutton2,1,2,1,1);
	grid.attach(checkbutton3,2,1,1,1);
	grid.attach(checkbutton4,2,2,1,1);
	grid.attach(button1,1,3,1,1);
	grid.attach(button2,2,3,1,1);
    }
});

let win = new GridWindow();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
