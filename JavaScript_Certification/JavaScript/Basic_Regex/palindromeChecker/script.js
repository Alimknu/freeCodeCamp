const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(msg) {
    const cleaned = msg
        .toLowerCase()
        .replace(/[\W_]/g, "");

    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
    const value = textInput.value;
    if (value.trim() === "") {
        alert("Please input a value");
        return;
    }

    const res = isPalindrome(value);
    if (res) {
        result.textContent = `${value} is a palindrome`;
    } else {
        result.textContent = `${value} is not a palindrome`;
    }
});