export function getX() {
    const xButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="xChoice"]');
    for (let x of xButtons) {
        if (x.classList.contains("active")) {
            if (x.value) {
                return parseFloat(x.value);
            }
        }
    }
}

export function getY() {
    const yText: HTMLInputElement | null = document.querySelector('input[name="yChoice"]');
    if (yText !== null) {
        return parseFloat(yText.value);
    }


}

export function getR() {
    const rButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="rChoice"]');
    for (let r of rButtons) {
        if (r.classList.contains("active")) {
            if (r.value) {
                return parseFloat(r.value);
            }
        }
    }
}