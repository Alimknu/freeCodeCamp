function spinalCase(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-+)|(-+$)/g, "")
    .toLowerCase();
}
