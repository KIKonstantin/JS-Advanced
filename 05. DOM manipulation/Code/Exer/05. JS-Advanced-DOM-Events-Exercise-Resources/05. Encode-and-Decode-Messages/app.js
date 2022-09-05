function encodeAndDecodeMessages() {
    let encodeText = document.querySelectorAll("textarea")[0];
    let decoderText = document.querySelectorAll("textarea")[1];
    let encodeBtn = document.querySelectorAll("button")[0];
    let decodeBtn = document.querySelectorAll("button")[1];
    encodeBtn.addEventListener("click", encode);
    decodeBtn.addEventListener("click", encode);

    function encode() {
        let input = encodeText.value.split("");
        let encodedtext = [];
        for (let letter of input) {
            let encodeAscii = String.fromCharCode(letter.charCodeAt() + 1);
            encodedtext.push(encodeAscii);
        }
        if (encodeText.value !== '') {
            decoderText.value = encodedtext.join('');
            encodeText.value = '';
        } else {
            let decoded = '';
            for (let i = 0; i < decoderText.value.length; i++) {
                decoded += String.fromCharCode(decoderText.value[i].charCodeAt() - 1);
            }
            decoderText.value = decoded;
        }
    }
}