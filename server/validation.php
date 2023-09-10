<?php

function validate($x, $y, $r)
{
    if (!is_double($x) || !is_double($y) || !is_double($r)) {
        return false;
    }
    if ($r < 1 || $r > 5) {
        return false;
    }
    return true;
}







