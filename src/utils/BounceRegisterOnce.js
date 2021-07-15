function BounceRegisterOnce() {
  const registerInternal = document.getElementById("register-internal");
  const ogClassname = registerInternal.className;

  registerInternal.scrollIntoView(false);
  registerInternal.className += " animate-bounce"
  setTimeout(() => {
    registerInternal.className = ogClassname;
  }, 1500);
}

export default BounceRegisterOnce;
