// ============================================
// MERGED LOGIN FORM - VALIDATION & SUBMISSION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const togglePassword = document.getElementById("togglePassword")

  if (togglePassword) {
    togglePassword.addEventListener("click", (e) => {
      e.preventDefault()
      const icon = togglePassword.querySelector("i")

      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        passwordInput.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  }

  if (emailInput) {
    emailInput.addEventListener("blur", () => {
      validateEmail()
    })

    emailInput.addEventListener("input", () => {
      const emailError = document.getElementById("emailError")
      emailError.classList.remove("show")
      emailInput.classList.remove("error")
    })
  }

  if (passwordInput) {
    passwordInput.addEventListener("blur", () => {
      validatePassword()
    })

    passwordInput.addEventListener("input", () => {
      const passwordError = document.getElementById("passwordError")
      passwordError.classList.remove("show")
      passwordInput.classList.remove("error")
    })
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      // Clear previous errors
      document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""))
      document.getElementById("generalError").style.display = "none"

      let isValid = true

      // Validate email
      if (!validateEmail()) {
        isValid = false
      }

      // Validate password
      if (!validatePassword()) {
        isValid = false
      }

      if (isValid) {
        try {
          // Send login request to backend
          const formData = new FormData(loginForm)

          const response = await fetch("login-handler.php", {
            method: "POST",
            body: formData,
          })

          const data = await response.json()

          if (data.success) {
            alert(data.message)
            // Redirect to dashboard
            setTimeout(() => {
              window.location.href = data.redirect
            }, 1000)
          } else {
            // Display errors from backend
            if (data.errors) {
              for (const [field, message] of Object.entries(data.errors)) {
                if (field === "general") {
                  document.getElementById("generalError").textContent = message
                  document.getElementById("generalError").style.display = "block"
                } else {
                  const errorElement = document.getElementById(field + "Error")
                  if (errorElement) {
                    errorElement.textContent = message
                  }
                }
              }
            }
          }
        } catch (error) {
          console.error("Error:", error)
          alert("An error occurred. Please try again.")
        }
      }
    })
  }

  function validateEmail() {
    const emailError = document.getElementById("emailError")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailInput.value.trim() === "") {
      emailInput.classList.add("error")
      emailInput.classList.remove("success")
      emailError.textContent = "Email is required"
      emailError.classList.add("show")
      return false
    } else if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add("error")
      emailInput.classList.remove("success")
      emailError.textContent = "Please enter a valid email address"
      emailError.classList.add("show")
      return false
    } else {
      emailInput.classList.remove("error")
      emailInput.classList.add("success")
      emailError.classList.remove("show")
      return true
    }
  }

  function validatePassword() {
    const passwordError = document.getElementById("passwordError")
    const password = passwordInput.value

    // Check if password is empty
    if (password === "") {
      passwordInput.classList.add("error")
      passwordInput.classList.remove("success")
      passwordError.textContent = "Password is required"
      passwordError.classList.add("show")
      return false
    }

    // Check minimum length (more than 5 characters = at least 6)
    if (password.length <= 5) {
      passwordInput.classList.add("error")
      passwordInput.classList.remove("success")
      passwordError.textContent = "Password must be more than 5 characters"
      passwordError.classList.add("show")
      return false
    }

    // Check for lowercase letters
    if (!/[a-z]/.test(password)) {
      passwordInput.classList.add("error")
      passwordInput.classList.remove("success")
      passwordError.textContent = "Password must contain lowercase letters"
      passwordError.classList.add("show")
      return false
    }

    // Check for uppercase letters
    if (!/[A-Z]/.test(password)) {
      passwordInput.classList.add("error")
      passwordInput.classList.remove("success")
      passwordError.textContent = "Password must contain uppercase letters"
      passwordError.classList.add("show")
      return false
    }

    // Check for numbers
    if (!/[0-9]/.test(password)) {
      passwordInput.classList.add("error")
      passwordInput.classList.remove("success")
      passwordError.textContent = "Password must contain numbers"
      passwordError.classList.add("show")
      return false
    }

    // Check for special symbols
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      passwordInput.classList.add("error")
      passwordInput.classList.remove("success")
      passwordError.textContent = "Password must contain special symbols (!@#$%^&* etc.)"
      passwordError.classList.add("show")
      return false
    }

    // All validations passed
    passwordInput.classList.remove("error")
    passwordInput.classList.add("success")
    passwordError.classList.remove("show")
    return true
  }
})
