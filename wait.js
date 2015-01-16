export default function wait(millis) {
    var timestamp = Date.now();
    while (Date.now() - timestamp < millis);
}
