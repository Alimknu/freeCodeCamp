function maskEmail(email) {
  let temp = email;
  let idx = email.indexOf("@");
  for (let i = 1; i <= idx - 2; i++) {
    temp = temp.replace(temp[i], "*");
  }

  return temp;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));
