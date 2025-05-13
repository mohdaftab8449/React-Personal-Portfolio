setInterval(() => {
    let d = new Date();
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let hr = document.querySelector(".hr")
    let min = document.querySelector(".min")
    let sec = document.querySelector(".sec")
    let sess = document.querySelector(".sess")

    if (h > 12) {
        h = h - 12
    }
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    if (h >= 12) {
        sess.innerHTML = "PM"
    }
    hr.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
}, 1000);