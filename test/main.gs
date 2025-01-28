%include backpack/bezier/bezier
costumes "blank.svg";

onflag {
    forever{
        tick;
    }
}

proc tick{
    erase_all;

    delete de_casteljau_pts;
    
    add Node{x: -100, y: -100} to de_casteljau_pts;
    add Node{x: 100, y: -50} to de_casteljau_pts;
    add Node{x: mouse_x(), y: mouse_y()} to de_casteljau_pts;
    add Node{x: -100, y: 100} to de_casteljau_pts;
    
    local t = 0;
    repeat 101 {
        node_goto get_casteljau(t);
        pen_down;
        t += 0.01;
    }
    pen_up;
}