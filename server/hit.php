<?php

function isHit($x, $y, $r)
{
    if (inQuarterСircle($x, $y, $r) || inTriange($x, $y, $r) || inRectangle($x, $y, $r)) {
        return true;
    }
    return false;
}


function inQuarterСircle($x, $y, $r)
{
    if ($x <= 0 and $y >= 0 and ($x * $x + $y * $y) <= $r * $r) {
        return true;
    }
    return false;
}

function inTriange($x, $y, $r)
{
    if ($x <= 0 and $y <= 0 and $y >= -2 * $x - $r) {
        return true;
    }
    return false;
}

function inRectangle($x, $y, $r)
{
    if ($x >= 0 and $y <= 0 and $x <= $r and $y >= -$r / 2) {
        return true;
    }
    return false;
}

