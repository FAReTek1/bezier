%include backpack/bezier/bezier

costumes "blank.svg";

onflag {
    forever{
        Bezier2 b = Bezier2{
            x0: -100, y0: -100,
            x1: 100, y1: -50,
            x2: mouse_x(), y2: mouse_y()
        };
        # bezier2_draw b, 100;
    }
}
