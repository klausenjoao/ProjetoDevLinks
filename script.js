// Função para alternar o tema
function toggleMode() {
  var body = document.body;
  body.classList.toggle("light");

  // Verifica se o tema atual é light
  var isLightMode = body.classList.contains("light");

  // Guarda a preferência do usuário no localStorage
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// Verifica se há uma preferência de tema no localStorage
var theme = localStorage.getItem("theme");

// Se houver uma preferência, aplica o tema correspondente
if (theme === "light") {
  document.body.classList.add("light");
}