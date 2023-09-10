export default function validation() {
    const xInputs: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('input[name="xChoice"]');
    const yInput: HTMLInputElement | null = document.querySelector('input[name="yChoice"]');
    const rInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="rChoice"]');
    const xError = document.querySelector('#x-error');
    const yError = document.querySelector('#y-error');
    const rError = document.querySelector('#r-error');

    var isOk = true;


    var xChecking = false;
    xInputs.forEach((element) => {
        if (element.classList.contains("active")) {
            if (xError !== null) {
                xChecking = true;
                xError.textContent = "";
            }
        }
    })
    if (!xChecking) {
        if (xError !== null) {
            isOk = false;
            xError.textContent = "Значение поля X должно быть выбрано";
        }
    }
    if (yInput != null) {
        const y = parseFloat(yInput.value);
        if (y == null || y <= -5 || y >= 3) {
            if (yError != null) {
                yError.textContent = "-5 < Y < 3";
                isOk = false;
            }
        } else {
            if (yError != null) {
                yError.textContent = "";
            }
        }
    }


    var rChecking = false;
    rInputs.forEach((element) => {
        if (element.classList.contains("active")) {
            if (rError !== null) {
                rChecking = true;
                rError.textContent = "";
            }
        }
    })
    if (!rChecking) {
        if (rError !== null) {
            isOk = false;
            rError.textContent = "Значение поля R должно быть выбрано";
        }
    }
    return isOk;

}