export function padWithZeros(int) {
    return int < 10 ? "0" + int : int.toString();
}
export function suffix(int) {
    if (int % 10 == 1 && int != 11) {
        return int + "st";
    }
    else if (int % 10 == 2 && int != 12) {
        return int + "nd";
    }
    else if (int % 10 == 3 && int != 13) {
        return int + "rd";
    }
    return int + "th";
}
//# sourceMappingURL=utils.js.map